package hbsm.zhxy.score;

import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

public interface ScoreRepository extends JpaRepository<Score, Long> {
  Score findByStudentIdAndLessonId(Long studentId, Long lessonId);

  @Transactional
  void deleteByStudentIdAndLessonId(Long studentId, Long lessonId);
}
