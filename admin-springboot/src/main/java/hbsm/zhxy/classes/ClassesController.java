package hbsm.zhxy.classes;

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
@RequestMapping("/classes")
public class ClassesController {
    @Autowired
    private ClassesRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("/all")
    List<Classes> all() {
        return repository.findAll();
    }

    @GetMapping("/detail/{id}")
    Classes detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new ClassesNotFoundException());
    }

    @PostMapping("/createOne")
    Classes createOne(@RequestBody Classes newDepartment) {
        return repository.save(newDepartment);
    }

    @PutMapping("/update/{id}")
    Classes update(@RequestBody Classes newDepartment, @PathVariable String id) {
        return repository.findById(id)
                .map(Department -> {
                    Department.setGrade(newDepartment.getGrade());
                    Department.setSpeciality(newDepartment.getSpeciality());
                    Department.setName(newDepartment.getName());
                    Department.setDescription(newDepartment.getDescription());
                    return repository.save(Department);
                }).orElseGet(() -> {
                    newDepartment.setId(id);
                    return repository.save(newDepartment);
                });
    }

    @DeleteMapping("/delete/{id}")
    Classes deleteOneDepartment(@PathVariable String id) {
        Classes deletingDepartment = detail(id);
        repository.deleteById(id);
        return deletingDepartment;
    }

    @DeleteMapping("/deleteAll")
    List<Classes> deleteAllDepartment() {
        List<Classes> deletingAllDepartment = all();
        repository.deleteAll();
        return deletingAllDepartment;
    }

}
