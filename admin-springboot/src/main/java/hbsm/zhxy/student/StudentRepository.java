package hbsm.zhxy.student;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import hbsm.zhxy.classes.Classes;

public interface StudentRepository extends JpaRepository<Student, Long> {
  Optional<List<Student>> findByClasses(Classes classes);

  Optional<List<Student>> findByFirstnameAndLastname(String firstname, String lastname);
}
