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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/number")
    long number() {
        return studentService.totalStudent();
    }

    @GetMapping("/all")
    List<Student> all() {
        return studentService.allStudent();
    }

    @GetMapping("/detail/{id}")
    Student detail(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @GetMapping("/search/stuname")
    List<Student> search(@RequestParam String firstname,
            @RequestParam String lastname) {
        return studentService.getStudentByName(firstname, lastname);
    }

    @PostMapping("/createOne")
    Student createOne(@RequestBody Student newStudent) {
        return studentService.createStudent(newStudent);
    }

    @PutMapping("/update/{id}")
    Student update(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentService.updateStudent(newStudent, id);
    }

    @DeleteMapping("/delete/{id}")
    Student deleteOneStudent(@PathVariable Long id) {
        return studentService.deleteStudentById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Student> deleteAllStudent() {
        return studentService.deleteAllStudent();
    }
}
