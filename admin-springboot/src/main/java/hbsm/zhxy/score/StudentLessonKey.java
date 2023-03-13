package hbsm.zhxy.score;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class StudentLessonKey implements Serializable {

  @Column(name = "student_id")
  String studentId;

  @Column(name = "lesson_id")
  String lessonId;

}
