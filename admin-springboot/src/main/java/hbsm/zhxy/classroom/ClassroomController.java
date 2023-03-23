package hbsm.zhxy.classroom;

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
@RequestMapping("/classroom")
public class ClassroomController {
    @Autowired
    private ClassroomService lessonService;

    @GetMapping("/number")
    long number() {
        return lessonService.totalClassroom();
    }

    @GetMapping("/all")
    List<Classroom> all() {
        return lessonService.allClassroom();
    }

    @GetMapping("/detail/{id}")
    Classroom detail(@PathVariable Long id) {
        return lessonService.getClassroomById(id);
    }

    @PostMapping("/createOne")
    Classroom createOne(@RequestBody Classroom newClassroom) {
        return lessonService.createClassroom(newClassroom);
    }

    @PutMapping("/update/{id}")
    Classroom update(@RequestBody Classroom newClassroom, @PathVariable Long id) {
        return lessonService.updateClassroom(newClassroom, id);
    }

    @DeleteMapping("/delete/{id}")
    Classroom deleteOneClassroom(@PathVariable Long id) {
        return lessonService.deleteClassroomById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Classroom> deleteAllClassroom() {
        return lessonService.deleteAllClassroom();
    }
}
