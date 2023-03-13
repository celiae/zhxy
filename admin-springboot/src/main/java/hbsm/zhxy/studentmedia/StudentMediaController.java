package hbsm.zhxy.studentmedia;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import hbsm.zhxy.student.Student;
import hbsm.zhxy.student.StudentRepository;

@RestController
@RequestMapping("/studentmedia")
public class StudentMediaController {
    protected final String location = "../docker/nginx/uploads";
    @Autowired
    private StudentMediaRepository studentMediaRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private StudentMediaService service;

    @GetMapping("/number")
    int number() {
        return studentMediaRepository.findAll().size();
    }

    @GetMapping("/all")
    List<StudentMedia> all() {
        return studentMediaRepository.findAll();
    }

    @GetMapping("/detail/{id}")
    StudentMedia detail(@PathVariable String id) {
        return studentMediaRepository.findById(id).orElseThrow(() -> new StudentMediaNotFoundException());
    }

    @GetMapping("/search")
    List<StudentMedia> search(@RequestParam("studentId") String studentId) {
        return studentMediaRepository.findStudentMediaByStudentId(studentId)
                .orElseThrow(() -> new StudentMediaNotFoundException());
    }

    @PostMapping("/createOne")
    StudentMedia createOne(@RequestBody StudentMedia newStudentDetail) {
        return studentMediaRepository.save(newStudentDetail);
    }

    @PostMapping("/upload")
    int upload(@RequestParam("file") MultipartFile[] file,
            @RequestParam("studentId") String studentId) {
        Student student = studentRepository.findById(studentId).orElse(null);
        service.saveMediaWithStudent(file, student);
        return studentMediaRepository.findAll().size();
    }

    @PutMapping("/update/{id}")
    StudentMedia update(@RequestBody StudentMedia newStudentDetail, @PathVariable String id) {
        return studentMediaRepository.findById(id)
                .map(StudentDetail -> {
                    StudentDetail.setStudent(newStudentDetail.getStudent());
                    StudentDetail.setFilename(newStudentDetail.getFilename());
                    StudentDetail.setPath(newStudentDetail.getPath());
                    StudentDetail.setType(newStudentDetail.getType());
                    return studentMediaRepository.save(StudentDetail);
                }).orElseGet(() -> {
                    newStudentDetail.setId(id);
                    return studentMediaRepository.save(newStudentDetail);
                });
    }

    @DeleteMapping("/delete/byStudentId/{studentId}")
    int deleteByStudentId(@PathVariable String studentId) {
        service.deleteFileByStudentId(studentId);
        studentMediaRepository.deleteAllByStudentId(studentId);
        return number();
    }

    @DeleteMapping("/delete/byId/{id}")
    StudentMedia deleteOneStudent(@PathVariable String id) {
        service.deleteOneFile(id);
        StudentMedia deletingStudent = detail(id);
        studentMediaRepository.deleteById(id);
        return deletingStudent;
    }

    @DeleteMapping("/delete/all")
    List<StudentMedia> deleteAllStudent() {
        service.deleteAllFile();
        List<StudentMedia> deletingAllStudent = all();
        studentMediaRepository.deleteAll();
        return deletingAllStudent;
    }
}
