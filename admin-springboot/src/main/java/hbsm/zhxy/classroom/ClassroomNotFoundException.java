package hbsm.zhxy.classroom;

public class ClassroomNotFoundException extends RuntimeException {
    ClassroomNotFoundException() {
        super("Lesson Not Found");
    }
}
