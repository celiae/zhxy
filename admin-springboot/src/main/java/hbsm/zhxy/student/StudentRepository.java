package hbsm.zhxy.student;

import org.springframework.data.jpa.repository.JpaRepository;

import hbsm.zhxy.lab.Lab;

public interface StudentRepository extends JpaRepository<Student, String>, StudentCustomRepository {
  void saveLabStudent(Lab lab, Student student);

}
