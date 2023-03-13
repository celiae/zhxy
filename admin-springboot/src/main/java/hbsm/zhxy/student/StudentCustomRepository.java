package hbsm.zhxy.student;

import hbsm.zhxy.lab.Lab;

public interface StudentCustomRepository {
  void saveLabStudent(Lab lab, Student student);
}
