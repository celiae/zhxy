package hbsm.zhxy.classes;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Classes {

    @Id
    private String id;
    private String grade;
    private String speciality;
    private String name;
    private String description;
}
