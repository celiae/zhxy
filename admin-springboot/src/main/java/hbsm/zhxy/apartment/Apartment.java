package hbsm.zhxy.apartment;

import hbsm.zhxy.classes.Classes;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Apartment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "classes_id")
    private Classes classes;

    private String buildingNum;
    private String roomNum;
    private String location;
    private Float waterFee;
    private Float electricityBill;
    private String description;

}
