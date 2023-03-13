package hbsm.zhxy.teacherdetail;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class TeacherDetail {
    @Id
    private String id;
    private String gender;
    private String entryDate;
    private String email;
    private String phone;
    private Float salary;
    private Float reward;
    private String birthDate;
    private int teachingQuality;
    private int research;
    private int politicalIdeology;
    private int practical;
    private int discipline;
    private int comment;
    private String description;
}
