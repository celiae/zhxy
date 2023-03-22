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
    private ClassesService classesService;

    @GetMapping("/number")
    long number() {
        return classesService.totalClasses();
    }

    @GetMapping("/all")
    List<Classes> all() {
        return classesService.allClasses();
    }

    @GetMapping("/detail/{id}")
    Classes detail(@PathVariable Long id) {
        return classesService.getClassesById(id);
    }

    @PostMapping("/createOne")
    Classes createOne(@RequestBody Classes newDepartment) {
        return classesService.createClasses(newDepartment);
    }

    @PutMapping("/update/{id}")
    Classes update(@RequestBody Classes newDepartment, @PathVariable Long id) {
        return classesService.updateClasses(newDepartment, id);
    }

    @DeleteMapping("/delete/{id}")
    Classes deleteOneDepartment(@PathVariable Long id) {
        return classesService.deleteClassesById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Classes> deleteAllDepartment() {
        return classesService.deleteAllClasses();
    }

}
