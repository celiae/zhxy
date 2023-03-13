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
    private DepartmentRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAllExceptNoDepartment().size();
    }

    @GetMapping("/all")
    List<Department> all() {
        return repository.findAllExceptNoDepartment();
    }

    @GetMapping("/detail/{id}")
    Department detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new DepartmentNotFoundException());
    }

    @PostMapping("/createOne")
    Department createOne(@RequestBody Department newDepartment) {
        return repository.save(newDepartment);
    }

    @PutMapping("/update/{id}")
    Department update(@RequestBody Department newDepartment, @PathVariable String id) {
        return repository.findById(id)
                .map(Department -> {
                    Department.setName(newDepartment.getName());
                    Department.setDescription(newDepartment.getDescription());
                    Department.setManager(newDepartment.getManager());
                    Department.setBudget(newDepartment.getBudget());
                    Department.setDepartment(newDepartment.getDepartment());
                    Department.setCreateTime(newDepartment.getCreateTime());
                    Department.setModifyTime(newDepartment.getModifyTime());
                    return repository.save(Department);
                }).orElseGet(() -> {
                    newDepartment.setId(id);
                    return repository.save(newDepartment);
                });
    }

    @DeleteMapping("/delete/{id}")
    Department deleteOneDepartment(@PathVariable String id) {
        Department deletingDepartment = detail(id);
        repository.deleteById(id);
        return deletingDepartment;
    }

    @DeleteMapping("/deleteAll")
    List<Department> deleteAllDepartment() {
        List<Department> deletingAllDepartment = all();
        repository.deleteAll();
        return deletingAllDepartment;
    }
}
