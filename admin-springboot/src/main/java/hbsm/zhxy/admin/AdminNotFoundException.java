package hbsm.zhxy.admin;

public class AdminNotFoundException extends RuntimeException{
    AdminNotFoundException(){
        super("Admin Not Found");
    }
}
