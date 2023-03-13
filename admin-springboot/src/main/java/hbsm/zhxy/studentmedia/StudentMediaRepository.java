package hbsm.zhxy.studentmedia;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import jakarta.transaction.Transactional;

public interface StudentMediaRepository extends JpaRepository<StudentMedia, String> {
  Optional<List<StudentMedia>> findStudentMediaByStudentId(String studentId);

  @Transactional
  void deleteAllByStudentId(String studentId);
}
