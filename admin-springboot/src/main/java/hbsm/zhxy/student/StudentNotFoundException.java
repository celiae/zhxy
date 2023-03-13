package hbsm.zhxy.student;

public class StudentNotFoundException extends RuntimeException{
    StudentNotFoundException(){
        super("Student Not Found");
    }
}
