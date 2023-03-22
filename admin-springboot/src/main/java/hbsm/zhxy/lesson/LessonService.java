package hbsm.zhxy.lesson;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LessonService {
  @Autowired
  private LessonRepository repository;

  long totalLesson() {
    return repository.count();
  }

  List<Lesson> allLesson() {
    return repository.findAll();
  }

  Lesson getLessonById(Long id) {
    return repository.findById(id).orElseThrow(() -> new LessonNotFoundException());
  }

  Lesson createLesson(Lesson newLesson) {
    return repository.save(newLesson);
  }

  Lesson updateLesson(Lesson newLesson, Long id) {
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

  Lesson deleteLessonById(Long id) {
    Lesson deletingLesson = getLessonById(id);
    repository.deleteById(id);
    return deletingLesson;
  }

  public List<Lesson> deleteAllLesson() {
    List<Lesson> deletingAllLesson = allLesson();
    repository.deleteAll();
    return deletingAllLesson;
  }
}
