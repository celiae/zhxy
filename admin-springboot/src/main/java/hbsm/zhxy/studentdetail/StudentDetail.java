package hbsm.zhxy.studentdetail;

import hbsm.zhxy.student.Student;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class StudentDetail {
    @Id
    private String id;

    @OneToOne
    @JoinColumn(name = "id")
    private Student student;

    private String gender;
    private String phone;
    private String email;
    private String wechat;
    private String qq;
    private String birthDate;
    private String description;
    private int studyNum;
    private int sportNum;
    private int communicationNum;
    private int competitionNum;
    private int licenseNum;
    private int handsNum;
}
