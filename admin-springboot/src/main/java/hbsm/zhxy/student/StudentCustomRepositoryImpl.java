package hbsm.zhxy.student;

import hbsm.zhxy.lab.Lab;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

public class StudentCustomRepositoryImpl implements StudentCustomRepository {
  @PersistenceContext
  private EntityManager em;

  /**
   * Configure the entity manager to be used.
   *
   * @param em the {@link EntityManager} to set.
   */
  public void setEntityManager(EntityManager em) {
    this.em = em;
  }

  public void saveLabStudent(Lab lab, Student student) {

    // 创建一个 Lab 对象，或从数据库中获取一个已存在的 Lab 对象
    Lab newLab = new Lab();
    newLab.setName(lab.getName());
    newLab.setDescription(lab.getDescription());
    newLab.setFailedNum(lab.getFailedNum());
    newLab.setSuccessNum(lab.getSuccessNum());
    newLab.setDeviceCondition(lab.getDeviceCondition());
    newLab.setDeviceCost(lab.getDeviceCost());
    newLab.setProjectCost(lab.getProjectCost());
    newLab.setWorkload(lab.getWorkload());
    newLab.setLocation(lab.getLocation());

    // StudentDetail newStudentDetail = new StudentDetail();
    // newStudentDetail.setStudy_num(studentDetail.getStudy_num());
    // newStudentDetail.setSport_num(studentDetail.getSport_num());
    // newStudentDetail.setCommunication_num(studentDetail.getCommunication_num());
    // newStudentDetail.setCompetition_num(studentDetail.getCompetition_num());
    // newStudentDetail.setLicense_num(studentDetail.getLicense_num());
    // newStudentDetail.setHands_num(studentDetail.getHands_num());
    // newStudentDetail.setGender(studentDetail.getGender());
    // newStudentDetail.setGrade(studentDetail.getGrade());
    // newStudentDetail.setClasses(studentDetail.getClasses());
    // newStudentDetail.setBirthDate(studentDetail.getBirthDate());
    // newStudentDetail.setPicture(studentDetail.getPicture());
    // newStudentDetail.setDescription(studentDetail.getDescription());

    // 创建一个 Student 对象，并关联到 Lab 对象上
    Student newStudent = new Student();
    newStudent.setLab(newLab); // 关联 Lab 对象
    newStudent.setAvatar(student.getAvatar());
    newStudent.setFirstname(student.getFirstname());
    newStudent.setLastname(student.getLastname());
    newStudent.setPassword(student.getPassword());

    // 开启事务，插入数据
    em.getTransaction().begin();
    em.persist(newLab); // 先保存 Lab 对象，确保存在
    // em.persist(newStudentDetail); // 先保存 StudentDetail 对象，确保存在
    em.persist(newStudent); // 保存 Student 对象，自动保存关联的 Lab 对象
    em.getTransaction().commit();

  }
}
