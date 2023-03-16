package hbsm.zhxy.teacherdetail;

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
@RequestMapping("/teacherdetail")
public class TeacherDetailController {
    @Autowired
    private TeacherDetailService teacherDetailService;

    @GetMapping("/number")
    long number() {
        return teacherDetailService.totalTeacherDetail();
    }

    @GetMapping("/all")
    List<TeacherDetail> all() {
        return teacherDetailService.allTeacherDetail();
    }

    @GetMapping("/detail/{id}")
    TeacherDetail detail(@PathVariable String id) {
        return teacherDetailService.getTeacherDetailById(id);
    }

    @PostMapping("/createOne")
    TeacherDetail createOne(@RequestBody TeacherDetail newTeacher) {
        return teacherDetailService.createTeacherDetail(newTeacher);
    }

    @PutMapping("/update/{id}")
    TeacherDetail update(@RequestBody TeacherDetail newTeacher, @PathVariable String id) {
        return teacherDetailService.updateTeacherDetail(newTeacher, id);
    }

    @DeleteMapping("/delete/{id}")
    TeacherDetail deleteOneTeacher(@PathVariable String id) {
        return teacherDetailService.deleteTeacherDetailById(id);
    }

    @DeleteMapping("/deleteAll")
    List<TeacherDetail> deleteAllTeacher() {
        return teacherDetailService.deleteAllTeacherDetail();
    }
}
