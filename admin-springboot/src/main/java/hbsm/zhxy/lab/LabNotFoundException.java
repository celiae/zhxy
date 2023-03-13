package hbsm.zhxy.lab;

public class LabNotFoundException extends RuntimeException{
    LabNotFoundException(){
        super("Lab Not Found");
    }
}
