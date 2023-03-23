package hbsm.zhxy.exam;

public class ExamNotFoundException extends RuntimeException {
    ExamNotFoundException() {
        super("Lesson Not Found");
    }
}
