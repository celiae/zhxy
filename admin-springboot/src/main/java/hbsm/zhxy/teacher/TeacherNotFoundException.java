package hbsm.zhxy.teacher;

public class TeacherNotFoundException extends RuntimeException {
  TeacherNotFoundException() {
    super("Teacher Not Found");
  }
}
