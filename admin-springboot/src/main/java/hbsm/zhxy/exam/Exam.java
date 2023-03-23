package hbsm.zhxy.exam;

import hbsm.zhxy.classroom.Classroom;
import hbsm.zhxy.teacher.Teacher;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @OneToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;

    private String name;
    private Integer testTime;
    private String startTime;
    private String type;
}
