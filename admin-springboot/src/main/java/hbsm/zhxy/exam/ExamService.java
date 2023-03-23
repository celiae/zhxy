package hbsm.zhxy.exam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExamService {
  @Autowired
  private ExamRepository repository;

  long totalExam() {
    return repository.count();
  }

  List<Exam> allExam() {
    return repository.findAll();
  }

  Exam getExamById(Long id) {
    return repository.findById(id).orElseThrow(() -> new ExamNotFoundException());
  }

  Exam createExam(Exam newExam) {
    return repository.save(newExam);
  }

  Exam updateExam(Exam newExam, Long id) {
    return repository.findById(id)
        .map(Exam -> {
          Exam.setTeacher(newExam.getTeacher());
          Exam.setClassroom(newExam.getClassroom());
          Exam.setName(newExam.getName());
          Exam.setTestTime(newExam.getTestTime());
          Exam.setStartTime(newExam.getStartTime());
          Exam.setType(newExam.getType());
          return repository.save(Exam);
        }).orElseGet(() -> {
          newExam.setId(id);
          return repository.save(newExam);
        });
  }

  Exam deleteExamById(Long id) {
    Exam deletingExam = getExamById(id);
    repository.deleteById(id);
    return deletingExam;
  }

  public List<Exam> deleteAllExam() {
    List<Exam> deletingAllExam = allExam();
    repository.deleteAll();
    return deletingAllExam;
  }
}
