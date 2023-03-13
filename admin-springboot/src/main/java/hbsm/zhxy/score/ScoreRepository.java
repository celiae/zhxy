package hbsm.zhxy.score;

import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

public interface ScoreRepository extends JpaRepository<Score, String> {
  Score findByStudentIdAndLessonId(String studentId, String lessonId);

  @Transactional
  void deleteByStudentIdAndLessonId(String studentId, String lessonId);
}
