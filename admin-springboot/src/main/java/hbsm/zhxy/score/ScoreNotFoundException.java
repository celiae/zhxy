package hbsm.zhxy.score;

public class ScoreNotFoundException extends RuntimeException {
    ScoreNotFoundException() {
        super("Lesson Not Found");
    }
}
