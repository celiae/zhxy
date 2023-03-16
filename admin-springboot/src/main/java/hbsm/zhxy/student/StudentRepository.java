package hbsm.zhxy.student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import hbsm.zhxy.classes.Classes;

public interface StudentRepository extends JpaRepository<Student, String> {
  List<Student> findByClasses(Classes classes);
}
