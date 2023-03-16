package hbsm.zhxy.student;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class StudentRepositoryTest {

  @Autowired
  StudentService studentService;

  @Test
  public void getAllStudent() {
    List<Student> student = studentService.allStudent();
    System.out.println(student);
  }

}
