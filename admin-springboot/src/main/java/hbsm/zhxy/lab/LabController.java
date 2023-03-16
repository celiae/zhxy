package hbsm.zhxy.lab;

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
@RequestMapping("/lab")
public class LabController {
    @Autowired
    private LabService labService;

    @GetMapping("/number")
    long number() {
        return labService.totalLab();
    }

    @GetMapping("/all")
    List<Lab> all() {
        return labService.allLab();
    }

    @GetMapping("/detail/{id}")
    Lab detail(@PathVariable String id) {
        return labService.getLabById(id);
    }

    @PostMapping("/createOne")
    Lab createOne(@RequestBody Lab newLab) {
        return labService.createLab(newLab);
    }

    @PutMapping("/update/{id}")
    Lab update(@RequestBody Lab newLab, @PathVariable String id) {
        return labService.updateLab(newLab, id);
    }

    @DeleteMapping("/delete/{id}")
    Lab deleteOneLab(@PathVariable String id) {
        return labService.deleteLabById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Lab> deleteAllLab() {
        return labService.deleteAllLab();
    }
}
