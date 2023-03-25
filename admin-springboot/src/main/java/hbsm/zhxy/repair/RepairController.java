package hbsm.zhxy.repair;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/repair")
public class RepairController {
    @Autowired
    private RepairService repairService;

    @GetMapping("/number")
    long number() {
        return repairService.totalRepair();
    }

    @GetMapping("/all")
    List<Repair> all() {
        return repairService.allRepair();
    }

    @GetMapping("/detail/{id}")
    Repair detail(@PathVariable Long id) {
        return repairService.getRepairById(id);
    }

    @GetMapping("/repairList")
    List<Repair> search(@RequestParam(name = "classroomId", required = false) Long classroomId,
            @RequestParam(name = "departmentId", required = false) Long departmentId,
            @RequestParam(name = "labId", required = false) Long labId,
            @RequestParam(name = "apartmentId", required = false) Long apartmentId) {
        return repairService.searchRepairs(classroomId, departmentId, labId, apartmentId);
    }

    @PostMapping("/createOne")
    Repair createOne(@RequestBody Repair newRepair) {
        return repairService.createRepair(newRepair);
    }

    @PutMapping("/update/{id}")
    Repair update(@RequestBody Repair newRepair, @PathVariable Long id) {
        return repairService.updateRepair(newRepair, id);
    }

    @DeleteMapping("/delete/{id}")
    Repair deleteOneRepair(@PathVariable Long id) {
        return repairService.deleteRepairById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Repair> deleteAllRepair() {
        return repairService.deleteAllRepair();
    }
}
