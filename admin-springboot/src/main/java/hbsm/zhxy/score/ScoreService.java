package hbsm.zhxy.score;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {
  @Autowired
  private ScoreRepository repository;

  long totalScore() {
    return repository.count();
  }

  List<Score> allScore() {
    return repository.findAll();
  }

  Score getScoreById(String studentId, String lessonId) {
    return repository.findByStudentIdAndLessonId(
        studentId, lessonId);
  }

  Score createScore(Score newScore) {
    return repository.save(newScore);
  }

  Score updateScore(Score newScore) {
    Score studentLesson = getScoreById(newScore.getStudent().getId(),
        newScore.getLesson().getId());
    studentLesson.setScore(newScore.getScore());
    return repository.save(studentLesson);
  }

  Score deleteScoreById(String studentId, String lessonId) {
    Score deletingScore = getScoreById(studentId, lessonId);
    repository.deleteByStudentIdAndLessonId(studentId, lessonId);
    return deletingScore;
  }

  List<Score> deleteAllScore() {
    List<Score> deletingAllScore = allScore();
    repository.deleteAll();
    return deletingAllScore;
  }
}
