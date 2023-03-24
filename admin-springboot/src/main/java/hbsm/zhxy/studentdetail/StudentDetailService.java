package hbsm.zhxy.studentdetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentDetailService {
  @Autowired
  private StudentDetailRepository repository;

  long totalStudentDetail() {
    return repository.count();
  }

  List<StudentDetail> allStudentDetail() {
    return repository.findAll();
  }

  StudentDetail getStudentDetailById(Long id) {
    return repository.findById(id).orElseThrow(() -> new StudentDetailNotFoundException());
  }

  List<StudentDetail> getTop3StudyStudent() {
    return repository.findTop3StudyStudent();
  }

  List<StudentDetail> getTop3CompetitionStudent() {
    return repository.findTop3CompetitionStudent();
  }

  StudentDetail createStudentDetail(StudentDetail newStudentDetail) {
    return repository.save(newStudentDetail);
  }

  StudentDetail updateStudentDetail(StudentDetail newStudentDetail, Long id) {
    return repository.findById(id)
        .map(StudentDetail -> {
          StudentDetail.setStudent(newStudentDetail.getStudent());
          StudentDetail.setGender(newStudentDetail.getGender());
          StudentDetail.setPhone(newStudentDetail.getPhone());
          StudentDetail.setEmail(newStudentDetail.getEmail());
          StudentDetail.setWechat(newStudentDetail.getWechat());
          StudentDetail.setQq(newStudentDetail.getQq());
          StudentDetail.setBirthDate(newStudentDetail.getBirthDate());
          StudentDetail.setDescription(newStudentDetail.getDescription());
          StudentDetail.setStudyNum(newStudentDetail.getStudyNum());
          StudentDetail.setSportNum(newStudentDetail.getSportNum());
          StudentDetail.setCommunicationNum(newStudentDetail.getCommunicationNum());
          StudentDetail.setCompetitionNum(newStudentDetail.getCompetitionNum());
          StudentDetail.setLicenseNum(newStudentDetail.getLicenseNum());
          StudentDetail.setHandsNum(newStudentDetail.getHandsNum());
          return repository.save(StudentDetail);
        }).orElseGet(() -> {
          newStudentDetail.setId(id);
          return repository.save(newStudentDetail);
        });
  }

  public StudentDetail deleteStudentDetailById(Long id) {
    StudentDetail deletingStudentDetail = getStudentDetailById(id);
    repository.deleteById(id);
    return deletingStudentDetail;
  }

  public List<StudentDetail> deleteAllStudentDetail() {
    List<StudentDetail> deletingAllStudentDetail = allStudentDetail();
    repository.deleteAll();
    return deletingAllStudentDetail;
  }
}
