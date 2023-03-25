package hbsm.zhxy.studentmedia;

import hbsm.zhxy.apartment.Apartment;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class StudentMedia {
    @Id
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Apartment student;

    private String filename;
    private String path;
    private String type;
}
