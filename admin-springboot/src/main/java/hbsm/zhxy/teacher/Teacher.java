package hbsm.zhxy.teacher;

import hbsm.zhxy.department.Department;
import hbsm.zhxy.lab.Lab;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "lab_id")
    private Lab lab;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    private String avatar;
    private String firstname;
    private String lastname;
    private String password;
    private String jobTitle;
    private String lastLogin;
}
