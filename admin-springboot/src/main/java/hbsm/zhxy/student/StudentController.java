package hbsm.zhxy.student;

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
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("/all")
    List<Student> all() {
        return repository.findAll();
    }

    @GetMapping("/detail/{id}")
    Student detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new StudentNotFoundException());
    }

    @PostMapping("/createOne")
    Student createOne(@RequestBody Student newStudent) {
        repository.save(newStudent);
        return newStudent;
    }

    @PutMapping("/update/{id}")
    Student update(@RequestBody Student newStudent, @PathVariable String id) {
        return repository.findById(id)
                .map(Student -> {
                    Student.setLab(newStudent.getLab());
                    Student.setLessonList(newStudent.getLessonList());
                    Student.setAvatar(newStudent.getAvatar());
                    Student.setFirstname(newStudent.getFirstname());
                    Student.setLastname(newStudent.getLastname());
                    Student.setPassword(newStudent.getPassword());
                    Student.setLastLogin(newStudent.getLastLogin());
                    return repository.save(Student);
                }).orElseGet(() -> {
                    newStudent.setId(id);
                    return repository.save(newStudent);
                });
    }

    @DeleteMapping("/delete/{id}")
    Student deleteOneStudent(@PathVariable String id) {
        Student deletingStudent = detail(id);
        repository.deleteById(id);
        return deletingStudent;
    }

    @DeleteMapping("/deleteAll")
    List<Student> deleteAllStudent() {
        List<Student> deletingAllStudent = all();
        repository.deleteAll();
        return deletingAllStudent;
    }
}
