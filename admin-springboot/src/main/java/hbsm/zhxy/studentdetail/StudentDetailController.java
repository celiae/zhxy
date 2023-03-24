package hbsm.zhxy.studentdetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/studentdetail")
public class StudentDetailController {
    @Autowired
    private StudentDetailService studentDetailService;

    @GetMapping("/number")
    long number() {
        return studentDetailService.totalStudentDetail();
    }

    @GetMapping("/all")
    List<StudentDetail> all() {
        return studentDetailService.allStudentDetail();
    }

    @GetMapping("/detail/{id}")
    StudentDetail detail(@PathVariable Long id) {
        return studentDetailService.getStudentDetailById(id);
    }

    @GetMapping("/goodStudy")
    List<StudentDetail> goodStudy() {
        return studentDetailService.getTop3StudyStudent();
    }

    @GetMapping("/goodCompetition")
    List<StudentDetail> goodCompetition() {
        return studentDetailService.getTop3CompetitionStudent();
    }

    @PostMapping("/createOne")
    StudentDetail createOne(@RequestBody StudentDetail newStudentDetail) {
        return studentDetailService.createStudentDetail(newStudentDetail);
    }

    @PutMapping("/update/{id}")
    StudentDetail update(@RequestBody StudentDetail newStudentDetail, @PathVariable Long id) {
        return studentDetailService.updateStudentDetail(newStudentDetail, id);
    }

    @DeleteMapping("/delete/{id}")
    StudentDetail deleteOneStudent(@PathVariable Long id) {
        return studentDetailService.deleteStudentDetailById(id);
    }

    @DeleteMapping("/deleteAll")
    List<StudentDetail> deleteAllStudent() {
        return studentDetailService.deleteAllStudentDetail();
    }
}
