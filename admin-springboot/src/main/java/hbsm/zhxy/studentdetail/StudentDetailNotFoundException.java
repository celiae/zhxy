package hbsm.zhxy.studentdetail;

public class StudentDetailNotFoundException extends RuntimeException{
    StudentDetailNotFoundException(){
        super("Student Not Found");
    }
}
