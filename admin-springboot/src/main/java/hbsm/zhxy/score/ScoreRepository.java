package hbsm.zhxy.score;

import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

public interface ScoreRepository extends JpaRepository<Score, Long> {
  Score findByStudentIdAndExamId(Long studentId, Long examId);

  @Transactional
  void deleteByStudentIdAndExamId(Long studentId, Long examId);
}
