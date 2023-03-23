package hbsm.zhxy.exam;

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
@RequestMapping("/exam")
public class ExamController {
    @Autowired
    private ExamService lessonService;

    @GetMapping("/number")
    long number() {
        return lessonService.totalExam();
    }

    @GetMapping("/all")
    List<Exam> all() {
        return lessonService.allExam();
    }

    @GetMapping("/detail/{id}")
    Exam detail(@PathVariable Long id) {
        return lessonService.getExamById(id);
    }

    @PostMapping("/createOne")
    Exam createOne(@RequestBody Exam newExam) {
        return lessonService.createExam(newExam);
    }

    @PutMapping("/update/{id}")
    Exam update(@RequestBody Exam newExam, @PathVariable Long id) {
        return lessonService.updateExam(newExam, id);
    }

    @DeleteMapping("/delete/{id}")
    Exam deleteOneExam(@PathVariable Long id) {
        return lessonService.deleteExamById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Exam> deleteAllExam() {
        return lessonService.deleteAllExam();
    }
}
