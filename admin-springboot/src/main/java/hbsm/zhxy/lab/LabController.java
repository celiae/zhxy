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
    private LabRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAllExceptNoLab().size();
    }

    @GetMapping("/all")
    List<Lab> all() {
        return repository.findAllExceptNoLab();
    }

    @GetMapping("/detail/{id}")
    Lab detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new LabNotFoundException());
    }

    @PostMapping("/createOne")
    Lab createOne(@RequestBody Lab newLab) {
        return repository.save(newLab);
    }

    @PutMapping("/update/{id}")
    Lab update(@RequestBody Lab newLab, @PathVariable String id) {
        return repository.findById(id)
                .map(Lab -> {
                    Lab.setName(newLab.getName());
                    Lab.setDescription(newLab.getDescription());
                    Lab.setFailedNum(newLab.getFailedNum());
                    Lab.setSuccessNum(newLab.getSuccessNum());
                    Lab.setDeviceCondition(newLab.getDeviceCondition());
                    Lab.setDeviceCost(newLab.getDeviceCost());
                    Lab.setProjectCost(newLab.getProjectCost());
                    Lab.setWorkload(newLab.getWorkload());
                    Lab.setLocation(newLab.getLocation());
                    return repository.save(Lab);
                }).orElseGet(() -> {
                    newLab.setId(id);
                    return repository.save(newLab);
                });
    }

    @DeleteMapping("/delete/{id}")
    Lab deleteOneLab(@PathVariable String id) {
        Lab deletingLab = detail(id);
        repository.deleteById(id);
        return deletingLab;
    }

    @DeleteMapping("/deleteAll")
    List<Lab> deleteAllLab() {
        List<Lab> deletingAllLab = all();
        repository.deleteAll();
        return deletingAllLab;
    }
}
