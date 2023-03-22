package hbsm.zhxy.teacherdetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherDetailService {
  @Autowired
  private TeacherDetailRepository repository;

  long totalTeacherDetail() {
    return repository.count();
  }

  List<TeacherDetail> allTeacherDetail() {
    return repository.findAll();
  }

  TeacherDetail getTeacherDetailById(Long id) {
    return repository.findById(id).orElseThrow(() -> new TeacherDetailNotFoundException());
  }

  TeacherDetail createTeacherDetail(TeacherDetail newTeacherDetail) {
    return repository.save(newTeacherDetail);
  }

  TeacherDetail updateTeacherDetail(TeacherDetail newTeacherDetail, Long id) {
    return repository.findById(id)
        .map(Teacher -> {
          Teacher.setGender(newTeacherDetail.getGender());
          Teacher.setEntryDate(newTeacherDetail.getEntryDate());
          Teacher.setEmail(newTeacherDetail.getEmail());
          Teacher.setPhone(newTeacherDetail.getPhone());
          Teacher.setSalary(newTeacherDetail.getSalary());
          Teacher.setReward(newTeacherDetail.getReward());
          Teacher.setBirthDate(newTeacherDetail.getBirthDate());
          Teacher.setTeachingQuality(newTeacherDetail.getTeachingQuality());
          Teacher.setResearch(newTeacherDetail.getResearch());
          Teacher.setPoliticalIdeology(newTeacherDetail.getPoliticalIdeology());
          Teacher.setPractical(newTeacherDetail.getPractical());
          Teacher.setDiscipline(newTeacherDetail.getDiscipline());
          Teacher.setComment(newTeacherDetail.getComment());
          Teacher.setDescription(newTeacherDetail.getDescription());
          return repository.save(Teacher);
        }).orElseGet(() -> {
          newTeacherDetail.setId(id);
          return repository.save(newTeacherDetail);
        });
  }

  TeacherDetail deleteTeacherDetailById(Long id) {
    TeacherDetail deletingTeacherDetail = getTeacherDetailById(id);
    repository.deleteById(id);
    return deletingTeacherDetail;
  }

  public List<TeacherDetail> deleteAllTeacherDetail() {
    List<TeacherDetail> deletingAllTeacherDetail = allTeacherDetail();
    repository.deleteAll();
    return deletingAllTeacherDetail;
  }
}
