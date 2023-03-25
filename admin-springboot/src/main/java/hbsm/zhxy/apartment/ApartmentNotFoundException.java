package hbsm.zhxy.apartment;

public class ApartmentNotFoundException extends RuntimeException{
    ApartmentNotFoundException(){
        super("Student Not Found");
    }
}
