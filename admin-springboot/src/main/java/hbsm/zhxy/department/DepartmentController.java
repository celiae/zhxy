package hbsm.zhxy.department;

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
@RequestMapping("/department")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/number")
    long number() {
        return departmentService.totalDepartment();
    }

    @GetMapping("/all")
    List<Department> all() {
        return departmentService.allDepartment();
    }

    @GetMapping("/detail/{id}")
    Department detail(@PathVariable String id) {
        return departmentService.getDepartmentById(id);
    }

    @PostMapping("/createOne")
    Department createOne(@RequestBody Department newDepartment) {
        return departmentService.createDepartment(newDepartment);
    }

    @PutMapping("/update/{id}")
    Department update(@RequestBody Department newDepartment, @PathVariable String id) {
        return departmentService.updateDepartment(newDepartment, id);
    }

    @DeleteMapping("/delete/{id}")
    Department deleteOneDepartment(@PathVariable String id) {
        return departmentService.deleteDepartmentById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Department> deleteAllDepartment() {
        return departmentService.deleteAllDepartment();
    }
}
