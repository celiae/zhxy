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
    private StudentDetailRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("/all")
    List<StudentDetail> all() {
        return repository.findAll();
    }

    @GetMapping("/detail/{id}")
    StudentDetail detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new StudentDetailNotFoundException());
    }

    @PostMapping("/createOne")
    StudentDetail createOne(@RequestBody StudentDetail newStudentDetail) {
        return repository.save(newStudentDetail);
    }

    @PutMapping("/update/{id}")
    StudentDetail update(@RequestBody StudentDetail newStudentDetail, @PathVariable String id) {
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

    @DeleteMapping("/delete/{id}")
    StudentDetail deleteOneStudent(@PathVariable String id) {
        StudentDetail deletingStudent = detail(id);
        repository.deleteById(id);
        return deletingStudent;
    }

    @DeleteMapping("/deleteAll")
    List<StudentDetail> deleteAllStudent() {
        List<StudentDetail> deletingAllStudent = all();
        repository.deleteAll();
        return deletingAllStudent;
    }
}
