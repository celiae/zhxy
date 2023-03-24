package hbsm.zhxy.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hbsm.zhxy.classes.Classes;
import hbsm.zhxy.studentdetail.StudentDetailService;

@Service
public class StudentService {
  @Autowired
  private StudentRepository repository;

  @Autowired
  private StudentDetailService studentDetailService;

  long totalStudent() {
    return repository.count();
  }

  List<Student> allStudent() {
    return repository.findAll();
  }

  Student getStudentById(Long id) {
    return repository.findById(id).orElseThrow(() -> new StudentNotFoundException());
  }

  List<Student> getStudentByName(String firstname, String lastname) {
    return repository.findByFirstnameAndLastname(firstname, lastname).orElseThrow(() -> new StudentNotFoundException());
  }

  List<Student> getStudentsByClasses(Classes classes) {
    return repository.findByClasses(classes).orElseThrow(() -> new StudentNotFoundException());
  }

  Student createStudent(Student newStudent) {
    repository.save(newStudent);
    repository.flush();
    return newStudent;
  }

  Student updateStudent(Student newStudent, Long id) {
    return repository.findById(id)
        .map(Student -> {
          Student.setLab(newStudent.getLab());
          Student.setExamList(newStudent.getExamList());
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

  Student deleteStudentById(Long id) {
    Student deletingStudent = getStudentById(id);
    studentDetailService.deleteStudentDetailById(id);
    repository.deleteById(id);
    return deletingStudent;
  }

  List<Student> deleteAllStudent() {
    List<Student> deletingAllStudent = allStudent();
    studentDetailService.deleteAllStudentDetail();
    repository.deleteAll();
    return deletingAllStudent;
  }
}
