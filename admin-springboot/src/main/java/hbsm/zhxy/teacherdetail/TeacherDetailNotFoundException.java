package hbsm.zhxy.teacherdetail;

public class TeacherDetailNotFoundException extends RuntimeException {
  TeacherDetailNotFoundException() {
    super("Teacher Not Found");
  }
}
