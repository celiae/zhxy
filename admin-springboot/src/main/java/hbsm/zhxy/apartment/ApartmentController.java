package hbsm.zhxy.apartment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apartment")
public class ApartmentController {
    @Autowired
    private ApartmentService apartmentService;

    @GetMapping("/number")
    long number() {
        return apartmentService.totalApartment();
    }

    @GetMapping("/all")
    List<Apartment> all() {
        return apartmentService.allApartment();
    }

    @GetMapping("/detail/{id}")
    Apartment detail(@PathVariable Long id) {
        return apartmentService.getApartmentById(id);
    }

    @PostMapping("/createOne")
    Apartment createOne(@RequestBody Apartment newApartment) {
        return apartmentService.createApartment(newApartment);
    }

    @PutMapping("/update/{id}")
    Apartment update(@RequestBody Apartment newApartment, @PathVariable Long id) {
        return apartmentService.updateApartment(newApartment, id);
    }

    @DeleteMapping("/delete/{id}")
    Apartment deleteOneApartment(@PathVariable Long id) {
        return apartmentService.deleteApartmentById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Apartment> deleteAllApartment() {
        return apartmentService.deleteAllApartment();
    }
}
