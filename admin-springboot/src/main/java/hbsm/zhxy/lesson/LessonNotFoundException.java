package hbsm.zhxy.lesson;

public class LessonNotFoundException extends RuntimeException {
    LessonNotFoundException() {
        super("Lesson Not Found");
    }
}
