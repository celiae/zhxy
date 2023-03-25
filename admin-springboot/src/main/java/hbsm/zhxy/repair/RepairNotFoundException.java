package hbsm.zhxy.repair;

public class RepairNotFoundException extends RuntimeException{
    RepairNotFoundException(){
        super("Repair Not Found");
    }
}
