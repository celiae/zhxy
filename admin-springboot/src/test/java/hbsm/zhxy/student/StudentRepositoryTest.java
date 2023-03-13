package hbsm.zhxy.student;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class StudentRepositoryTest {

  @Autowired
  StudentRepository studentRepository;

  @Test
  public void getAllStudent() {
    // List<Student> student = studentRepository.findAll();
    // System.out.println(student);
  }

}
