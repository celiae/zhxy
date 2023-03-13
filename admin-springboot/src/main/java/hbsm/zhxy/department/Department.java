package hbsm.zhxy.department;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Department {

    @Id
    private String id;
    private String name;
    private String description;
    private String manager;
    private String budget;
    @ManyToOne
    @JoinColumn(name = "parent_department_id")
    private Department department;
    private String createTime;
    private String modifyTime;

}
