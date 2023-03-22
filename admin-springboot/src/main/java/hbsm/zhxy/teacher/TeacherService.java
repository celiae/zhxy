package hbsm.zhxy.teacher;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hbsm.zhxy.lesson.LessonService;
import hbsm.zhxy.teacherdetail.TeacherDetailService;

@Service
public class TeacherService {
  @Autowired
  private TeacherRepository repository;
  @Autowired
  private TeacherDetailService teacherDetailService;
  @Autowired
  private LessonService lessonService;

  long totalTeacher() {
    return repository.count();
  }

  List<Teacher> allTeacher() {
    return repository.findAll();
  }

  Teacher getTeacherById(Long id) {
    return repository.findById(id).orElseThrow(() -> new TeacherNotFoundException());
  }

  String getFullnameById(Long id) {
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

  Teacher updateTeacher(Teacher newTeacher, Long id) {
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

  Teacher deleteTeacherById(Long id) {
    Teacher deletingTeacher = getTeacherById(id);
    repository.deleteById(id);
    return deletingTeacher;
  }

  List<Teacher> deleteAllTeacher() {
    List<Teacher> deletingAllTeacher = allTeacher();
    teacherDetailService.deleteAllTeacherDetail();
    lessonService.deleteAllLesson();
    repository.deleteAll();
    return deletingAllTeacher;
  }
}
