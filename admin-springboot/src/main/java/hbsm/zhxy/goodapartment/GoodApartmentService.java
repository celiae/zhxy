package hbsm.zhxy.goodapartment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodApartmentService {
  @Autowired
  private GoodApartmentRepository repository;

  long totalGoodApartment() {
    return repository.count();
  }

  List<GoodApartment> allGoodApartment() {
    return repository.findAll();
  }

  GoodApartment getGoodApartmentById(Long id) {
    return repository.findById(id).orElseThrow(() -> new GoodApartmentNotFoundException());
  }

  List<GoodApartment> existsByApartment(Long apartmentId) {
    return repository.findByApartmentId(apartmentId);
  }

  GoodApartment createGoodApartment(GoodApartment newApartment) {
    repository.save(newApartment);
    repository.flush();
    return newApartment;
  }

  GoodApartment updateGoodApartment(GoodApartment newApartment, Long id) {
    return repository.findById(id)
        .map(Apartment -> {
          Apartment.setDescription(newApartment.getDescription());
          Apartment.setDate(newApartment.getDate());
          return repository.save(Apartment);
        }).orElseGet(() -> {
          newApartment.setId(id);
          return repository.save(newApartment);
        });
  }

  GoodApartment deleteGoodApartmentById(Long id) {
    GoodApartment deletingApartment = getGoodApartmentById(id);
    repository.deleteById(id);
    return deletingApartment;
  }

  List<GoodApartment> deleteAllGoodApartment() {
    List<GoodApartment> deletingAllApartment = allGoodApartment();
    repository.deleteAll();
    return deletingAllApartment;
  }
}
