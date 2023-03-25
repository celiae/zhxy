package hbsm.zhxy.repair;

import hbsm.zhxy.apartment.Apartment;
import hbsm.zhxy.classroom.Classroom;
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
public class Repair {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

    @ManyToOne
    @JoinColumn(name = "lab_id")
    private Lab lab;

    @ManyToOne
    @JoinColumn(name = "apartment_id")
    private Apartment apartment;

    private String type;
    private String description;
    private String location;
    private String createDate;
    private String fixDate;
    private Boolean active;

}
