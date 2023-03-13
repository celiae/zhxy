package hbsm.zhxy.studentmedia;

public class StudentMediaNotFoundException extends RuntimeException{
    StudentMediaNotFoundException(){
        super("Student Not Found");
    }
}
