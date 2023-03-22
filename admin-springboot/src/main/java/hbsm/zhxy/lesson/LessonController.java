package hbsm.zhxy.lesson;

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
@RequestMapping("/lesson")
public class LessonController {
    @Autowired
    private LessonService lessonService;

    @GetMapping("/number")
    long number() {
        return lessonService.totalLesson();
    }

    @GetMapping("/all")
    List<Lesson> all() {
        return lessonService.allLesson();
    }

    @GetMapping("/detail/{id}")
    Lesson detail(@PathVariable Long id) {
        return lessonService.getLessonById(id);
    }

    @PostMapping("/createOne")
    Lesson createOne(@RequestBody Lesson newLesson) {
        return lessonService.createLesson(newLesson);
    }

    @PutMapping("/update/{id}")
    Lesson update(@RequestBody Lesson newLesson, @PathVariable Long id) {
        return lessonService.updateLesson(newLesson, id);
    }

    @DeleteMapping("/delete/{id}")
    Lesson deleteOneLesson(@PathVariable Long id) {
        return lessonService.deleteLessonById(id);
    }

    @DeleteMapping("/deleteAll")
    List<Lesson> deleteAllLesson() {
        return lessonService.deleteAllLesson();
    }
}
