package hbsm.zhxy.studentmedia;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

public interface StudentMediaRepository extends JpaRepository<StudentMedia, Long> {
  Optional<List<StudentMedia>> findStudentMediaByStudentId(Long studentId);

  @Transactional
  void deleteAllByStudentId(Long studentId);
}
