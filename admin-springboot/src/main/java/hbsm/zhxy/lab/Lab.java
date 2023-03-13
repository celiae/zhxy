package hbsm.zhxy.lab;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Lab {

    @Id
    private String id;
    private String name;
    private String description;
    private int failedNum;
    private int successNum;
    private int deviceCondition;
    private Float deviceCost;
    private Float projectCost;
    private int workload;
    private String location;

}
