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
    private TeacherRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("/all")
    List<Teacher> all() {
        return repository.findAll();
    }

    @GetMapping("/detail/{id}")
    Teacher detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new TeacherNotFoundException());
    }

    @GetMapping("/getNameById")
    String getNameById(@RequestParam("id") String id) {
        Teacher teacher = repository.findById(id).orElseThrow(() -> new TeacherNotFoundException());
        String fullName = teacher.getFirstname().concat(teacher.getLastname());
        return fullName;
    }

    @GetMapping("/groupJobTitle")
    List<Object[]> groupJobTitle() {
        return repository.jobTitleGroup();
    }

    @GetMapping("/teacherEntry")
    List<Object[]> teacherEntry() {
        return repository.teacherEntryDateAsc();
    }

    @PostMapping("/createOne")
    Teacher createOne(@RequestBody Teacher newTeacher) {
        return repository.save(newTeacher);
    }

    @PutMapping("/update/{id}")
    Teacher update(@RequestBody Teacher newTeacher, @PathVariable String id) {
        return repository.findById(id)
                .map(Teacher -> {
                    Teacher.setLab(newTeacher.getLab());
                    Teacher.setDepartment(newTeacher.getDepartment());
                    Teacher.setAvatar(newTeacher.getAvatar());
                    Teacher.setFirstname(newTeacher.getFirstname());
                    Teacher.setLastname(newTeacher.getLastname());
                    Teacher.setPassword(newTeacher.getPassword());
                    Teacher.setJobTitle(newTeacher.getJobTitle());
                    return repository.save(Teacher);
                }).orElseGet(() -> {
                    newTeacher.setId(id);
                    return repository.save(newTeacher);
                });
    }

    @DeleteMapping("/delete/{id}")
    Teacher deleteOneTeacher(@PathVariable String id) {
        Teacher deletingTeacher = detail(id);
        repository.deleteById(id);
        return deletingTeacher;
    }

    @DeleteMapping("/deleteAll")
    List<Teacher> deleteAllTeacher() {
        List<Teacher> deletingAllTeacher = all();
        repository.deleteAll();
        return deletingAllTeacher;
    }
}
