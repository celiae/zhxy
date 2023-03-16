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
    private ScoreService scoreService;

    @GetMapping("/number")
    long number() {
        return scoreService.totalScore();
    }

    @GetMapping("all")
    List<Score> all() {
        return scoreService.allScore();
    }

    @GetMapping("/search")
    Score detail(@RequestParam("studentId") String studentId, @RequestParam("lessonId") String lessonId) {
        return scoreService.getScoreById(studentId, lessonId);
    }

    @PostMapping("/createOne")
    Score createOne(@RequestBody Score newScore) {
        return scoreService.createScore(newScore);
    }

    @PutMapping("/update")
    Score update(@RequestBody Score newStudentLesson) {
        return scoreService.updateScore(newStudentLesson);
    }

    @DeleteMapping("/delete")
    Score deleteOneLesson(@RequestParam("studentId") String studentId,
            @RequestParam("lessonId") String lessonId) {
        return scoreService.deleteScoreById(studentId, lessonId);
    }

    @DeleteMapping("/deleteAll")
    List<Score> deleteAllLesson() {
        return scoreService.deleteAllScore();
    }
}
