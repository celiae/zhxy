package hbsm.zhxy.student;

import java.util.List;

import hbsm.zhxy.apartment.Apartment;
import hbsm.zhxy.classes.Classes;
import hbsm.zhxy.exam.Exam;
import hbsm.zhxy.lab.Lab;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "lab_id")
    private Lab lab;

    @ManyToOne
    @JoinColumn(name = "apartment_id")
    private Apartment apartment;

    @ManyToOne
    @JoinColumn(name = "classes_id")
    private Classes classes;

    // @ManyToMany
    // @JoinTable(name = "score", joinColumns = @JoinColumn(name = "student_id"),
    // inverseJoinColumns = @JoinColumn(name = "exam_id"))
    // private List<Exam> examList;

    private String avatar;
    private String firstname;
    private String lastname;
    private String password;
    private String lastLogin;

}
