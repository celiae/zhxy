package hbsm.zhxy.teacher;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {
  @Autowired
  private TeacherRepository repository;

  long totalTeacher() {
    return repository.count();
  }

  List<Teacher> allTeacher() {
    return repository.findAll();
  }

  Teacher getTeacherById(String id) {
    return repository.findById(id).orElseThrow(() -> new TeacherNotFoundException());
  }

  String getFullnameById(String id) {
    Teacher teacher = repository.findById(id).orElseThrow(() -> new TeacherNotFoundException());
    String fullName = teacher.getFirstname().concat(teacher.getLastname());
    return fullName;
  }

  List<Object[]> getGroupJobTitle() {
    return repository.jobTitleGroup();
  }

  List<Object[]> getTeacherEntry() {
    return repository.teacherEntryDateAsc();
  }

  Teacher createTeacher(Teacher newTeacher) {
    return repository.save(newTeacher);
  }

  Teacher updateTeacher(Teacher newTeacher, String id) {
    return repository.findById(id)
        .map(Teacher -> {
          Teacher.setLab(newTeacher.getLab());
          Teacher.setDepartment(newTeacher.getDepartment());
          Teacher.setAvatar(newTeacher.getAvatar());
          Teacher.setFirstname(newTeacher.getFirstname());
          Teacher.setLastname(newTeacher.getLastname());
          Teacher.setPassword(newTeacher.getPassword());
          Teacher.setJobTitle(newTeacher.getJobTitle());
          return repository.save(Teacher);
        }).orElseGet(() -> {
          newTeacher.setId(id);
          return repository.save(newTeacher);
        });
  }

  Teacher deleteTeacherById(String id) {
    Teacher deletingTeacher = getTeacherById(id);
    repository.deleteById(id);
    return deletingTeacher;
  }

  List<Teacher> deleteAllTeacher() {
    List<Teacher> deletingAllTeacher = allTeacher();
    repository.deleteAll();
    return deletingAllTeacher;
  }
}
