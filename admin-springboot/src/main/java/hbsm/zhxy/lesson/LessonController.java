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
    private LessonRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("all")
    List<Lesson> all() {
        return repository.findAll();
    }

    @GetMapping("/detail/{id}")
    Lesson detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new LessonNotFoundException());
    }

    @PostMapping("/createOne")
    Lesson createOne(@RequestBody Lesson newLesson) {
        return repository.save(newLesson);
    }

    @PutMapping("/update/{id}")
    Lesson update(@RequestBody Lesson newLesson, @PathVariable String id) {
        return repository.findById(id)
                .map(Lesson -> {
                    Lesson.setName(newLesson.getName());
                    Lesson.setTeacher(newLesson.getTeacher());
                    return repository.save(Lesson);
                }).orElseGet(() -> {
                    newLesson.setId(id);
                    return repository.save(newLesson);
                });
    }

    @DeleteMapping("/delete/{id}")
    Lesson deleteOneLesson(@PathVariable String id) {
        Lesson deletingLesson = detail(id);
        repository.deleteById(id);
        return deletingLesson;
    }

    @DeleteMapping("/deleteAll")
    List<Lesson> deleteAllLesson() {
        List<Lesson> deletingAllLesson = all();
        repository.deleteAll();
        return deletingAllLesson;
    }
}
