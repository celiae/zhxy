package hbsm.zhxy.admin;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Admin {
    @Id
    private String id;
    private String avatar;
    private String username;
    private String password;
    private String phone;
    private int contribution;
    private String createDate;
    private String lastLogin;
}
