package hbsm.zhxy.departmentfinance;

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
@RequestMapping("/departmentfinance")
public class DepartmentFinanceController {
    @Autowired
    private DepartmentFinanceService departmentService;

    @GetMapping("/number")
    long number() {
        return departmentService.totalDepartmentFinance();
    }

    @GetMapping("/all")
    List<DepartmentFinance> all() {
        return departmentService.allDepartmentFinance();
    }

    @GetMapping("/detail/{id}")
    DepartmentFinance detail(@PathVariable Long id) {
        return departmentService.getDepartmentFinanceById(id);
    }

    @GetMapping("/department/{departmentId}")
    List<DepartmentFinance> allOfDepartment(@PathVariable Long departmentId) {
        return departmentService.getByDepartmentId(departmentId);
    }

    @PostMapping("/createOne")
    DepartmentFinance createOne(@RequestBody DepartmentFinance newDepartment) {
        return departmentService.createDepartmentFinance(newDepartment);
    }

    @PutMapping("/update/{id}")
    DepartmentFinance update(@RequestBody DepartmentFinance newDepartment, @PathVariable Long id) {
        return departmentService.updateDepartmentFinance(newDepartment, id);
    }

    @DeleteMapping("/delete/{id}")
    DepartmentFinance deleteOneDepartmentFinance(@PathVariable Long id) {
        return departmentService.deleteDepartmentFinanceById(id);
    }

    @DeleteMapping("/deleteAll")
    List<DepartmentFinance> deleteAllDepartmentFinance() {
        return departmentService.deleteAllDepartmentFinance();
    }
}
