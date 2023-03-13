package hbsm.zhxy.score;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private ScoreRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("all")
    List<Score> all() {
        return repository.findAll();
    }

    @GetMapping("/search")
    Score detail(@RequestParam("studentId") String studentId, @RequestParam("lessonId") String lessonId) {
        return repository.findByStudentIdAndLessonId(
                studentId, lessonId);
    }

    @PostMapping("/createOne")
    Score createOne(@RequestBody Score newScore) {
        return repository.save(newScore);
    }

    @PutMapping("/update")
    Score update(@RequestBody Score newStudentLesson) {
        Score studentLesson = detail(newStudentLesson.getStudent().getId(),
                newStudentLesson.getLesson().getId());
        studentLesson.setScore(newStudentLesson.getScore());
        return repository.save(studentLesson);
    }

    @DeleteMapping("/delete")
    Score deleteOneLesson(@RequestParam("studentId") String studentId,
            @RequestParam("lessonId") String lessonId) {
        Score studentLesson = detail(studentId, lessonId);
        repository.deleteByStudentIdAndLessonId(studentId, lessonId);
        return studentLesson;

    }

    @DeleteMapping("/deleteAll")
    List<Score> deleteAllLesson() {
        List<Score> deletingAllLesson = all();
        repository.deleteAll();
        return deletingAllLesson;
    }
}
