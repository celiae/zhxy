package hbsm.zhxy.goodapartment;

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
@RequestMapping("/goodapartment")
public class GoodApartmentController {
    @Autowired
    private GoodApartmentService goodApartmentService;

    @GetMapping("/number")
    long number() {
        return goodApartmentService.totalGoodApartment();
    }

    @GetMapping("/all")
    List<GoodApartment> all() {
        return goodApartmentService.allGoodApartment();
    }

    @GetMapping("/detail/{id}")
    GoodApartment detail(@PathVariable Long id) {
        return goodApartmentService.getGoodApartmentById(id);
    }

    @GetMapping("/exists/{apartmentId}")
    List<GoodApartment> exists(@PathVariable Long apartmentId) {
        return goodApartmentService.existsByApartment(apartmentId);
    }

    @PostMapping("/createOne")
    GoodApartment createOne(@RequestBody GoodApartment newApartment) {
        return goodApartmentService.createGoodApartment(newApartment);
    }

    @PutMapping("/update/{id}")
    GoodApartment update(@RequestBody GoodApartment newApartment, @PathVariable Long id) {
        return goodApartmentService.updateGoodApartment(newApartment, id);
    }

    @DeleteMapping("/delete/{id}")
    GoodApartment deleteOneApartment(@PathVariable Long id) {
        return goodApartmentService.deleteGoodApartmentById(id);
    }

    @DeleteMapping("/deleteAll")
    List<GoodApartment> deleteAllApartment() {
        return goodApartmentService.deleteAllGoodApartment();
    }
}
