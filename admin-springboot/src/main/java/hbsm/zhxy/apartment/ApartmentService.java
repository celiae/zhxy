package hbsm.zhxy.apartment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hbsm.zhxy.classes.Classes;

@Service
public class ApartmentService {
  @Autowired
  private ApartmentRepository repository;

  long totalApartment() {
    return repository.count();
  }

  List<Apartment> allApartment() {
    return repository.findAll();
  }

  Apartment getApartmentById(Long id) {
    return repository.findById(id).orElseThrow(() -> new ApartmentNotFoundException());
  }

  List<Apartment> getApartmentsByClasses(Classes classes) {
    return repository.findByClasses(classes).orElseThrow(() -> new ApartmentNotFoundException());
  }

  Apartment createApartment(Apartment newApartment) {
    repository.save(newApartment);
    repository.flush();
    return newApartment;
  }

  Apartment updateApartment(Apartment newApartment, Long id) {
    return repository.findById(id)
        .map(Apartment -> {
          Apartment.setClasses(newApartment.getClasses());
          Apartment.setBuildingNum(newApartment.getBuildingNum());
          Apartment.setLocation(newApartment.getLocation());
          Apartment.setWaterFee(newApartment.getWaterFee());
          Apartment.setElectricityBill(newApartment.getElectricityBill());
          Apartment.setDescription(newApartment.getDescription());
          return repository.save(Apartment);
        }).orElseGet(() -> {
          newApartment.setId(id);
          return repository.save(newApartment);
        });
  }

  Apartment deleteApartmentById(Long id) {
    Apartment deletingApartment = getApartmentById(id);
    repository.deleteById(id);
    return deletingApartment;
  }

  List<Apartment> deleteAllApartment() {
    List<Apartment> deletingAllApartment = allApartment();
    repository.deleteAll();
    return deletingAllApartment;
  }
}
