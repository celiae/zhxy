package hbsm.zhxy.goodapartment;

public class GoodApartmentNotFoundException extends RuntimeException{
    GoodApartmentNotFoundException(){
        super("Student Not Found");
    }
}
