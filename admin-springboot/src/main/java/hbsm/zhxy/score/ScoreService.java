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

  Score getScoreById(Long studentId, Long examId) {
    return repository.findByStudentIdAndExamId(
        studentId, examId);
  }

  Score createScore(Score newScore) {
    return repository.save(newScore);
  }

  Score updateScore(Score newScore) {
    Score studentExam = getScoreById(newScore.getStudent().getId(),
        newScore.getExam().getId());
    studentExam.setScore(newScore.getScore());
    return repository.save(studentExam);
  }

  Score deleteScoreById(Long studentId, Long examId) {
    Score deletingScore = getScoreById(studentId, examId);
    repository.deleteByStudentIdAndExamId(studentId, examId);
    return deletingScore;
  }

  List<Score> deleteAllScore() {
    List<Score> deletingAllScore = allScore();
    repository.deleteAll();
    return deletingAllScore;
  }
}
