package hbsm.zhxy.admin;

import lombok.Data;

@Data
public class ChangePass {
    private String oldPass;
    private String newPass;
}
