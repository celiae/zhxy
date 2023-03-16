package hbsm.zhxy.teacher;

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
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/number")
    long number() {
        return teacherService.totalTeacher();
    }

    @GetMapping("/all")
    List<Teacher> all() {
        return teacherService.allTeacher();
    }

    @GetMapping("/detail/{id}")
    Teacher detail(@PathVariable String id) {
        return teacherService.getTeacherById(id);
    }

    @GetMapping("/getNameById")
    String getNameById(@RequestParam("id") String id) {
        return teacherService.getFullnameById(id);
    }

    @GetMapping("/groupJobTitle")
    List<Object[]> groupJobTitle() {
        return teacherService.getGroupJobTitle();
    }

    @GetMapping("/teacherEntry")
    List<Object[]> teacherEntry() {
        return teacherService.getTeacherEntry();
    }

    @PostMapping("/createOne")
    Teacher createOne(@RequestBody Teacher newTeacher) {
        return teacherService.createTeacher(newTeacher);
    }

    @PutMapping("/update/{id}")
    Teacher update(@RequestBody Teacher newTeacher, @PathVariable String id) {
        return teacherService.updateTeacher(newTeacher, id);
    }

    @DeleteMapping("/delete/{id}")
    Teacher deleteOneTeacher(@PathVariable String id) {
        return teacherService.deleteTeacherById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Teacher> deleteAllTeacher() {
        return teacherService.deleteAllTeacher();
    }
}
