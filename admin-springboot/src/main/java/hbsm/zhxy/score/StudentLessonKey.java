package hbsm.zhxy.score;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class StudentLessonKey implements Serializable {

  @Column(name = "student_id")
  Long studentId;

  @Column(name = "lesson_id")
  Long lessonId;

}
