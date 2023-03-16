package hbsm.zhxy.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hbsm.zhxy.classes.Classes;

@Service
public class StudentService {
  @Autowired
  private StudentRepository repository;

  long totalStudent() {
    return repository.count();
  }

  List<Student> allStudent() {
    return repository.findAll();
  }

  Student getStudentById(String id) {
    return repository.findById(id).orElseThrow(() -> new StudentNotFoundException());
  }

  List<Student> getStudentsByClasses(Classes classes) {
    return repository.findByClasses(classes);
  }

  Student createStudent(Student newStudent) {
    return repository.save(newStudent);
  }

  Student updateStudent(Student newStudent, String id) {
    return repository.findById(id)
        .map(Student -> {
          Student.setLab(newStudent.getLab());
          Student.setLessonList(newStudent.getLessonList());
          Student.setAvatar(newStudent.getAvatar());
          Student.setFirstname(newStudent.getFirstname());
          Student.setLastname(newStudent.getLastname());
          Student.setPassword(newStudent.getPassword());
          Student.setLastLogin(newStudent.getLastLogin());
          return repository.save(Student);
        }).orElseGet(() -> {
          newStudent.setId(id);
          return repository.save(newStudent);
        });
  }

  Student deleteStudentById(String id) {
    Student deletingStudent = getStudentById(id);
    repository.deleteById(id);
    return deletingStudent;
  }

  List<Student> deleteAllStudent() {
    List<Student> deletingAllStudent = allStudent();
    repository.deleteAll();
    return deletingAllStudent;
  }
}
