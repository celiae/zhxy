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

@RestController
@RequestMapping("/studentmedia")
public class StudentMediaController {
    @Autowired
    private StudentMediaService studentMediaService;

    @GetMapping("/number")
    long number() {
        return studentMediaService.totalStudentMedia();
    }

    @GetMapping("/all")
    List<StudentMedia> all() {
        return studentMediaService.allStudentMedia();
    }

    @GetMapping("/detail/{id}")
    StudentMedia detail(@PathVariable Long id) {
        return studentMediaService.getStudentMediaById(id);
    }

    @GetMapping("/search")
    List<StudentMedia> search(@RequestParam("studentId") Long studentId) {
        return studentMediaService.getMediaByStudentId(studentId);
    }

    @PostMapping("/createOne")
    StudentMedia createOne(@RequestBody StudentMedia newStudentDetail) {
        return studentMediaService.createStudentMedia(newStudentDetail);
    }

    @PostMapping("/upload")
    void upload(@RequestParam("file") MultipartFile[] file,
            @RequestParam("studentId") Long studentId) {
        studentMediaService.uploadMedia(file, studentId);
    }

    @PutMapping("/update/{id}")
    StudentMedia update(@RequestBody StudentMedia newStudentDetail, @PathVariable Long id) {
        return studentMediaService.updateStudentMedia(newStudentDetail, id);
    }

    @DeleteMapping("/delete/byStudentId/{studentId}")
    void deleteByStudentId(@PathVariable Long studentId) {
        studentMediaService.deleteByStudentId(studentId);
    }

    @DeleteMapping("/delete/byId/{id}")
    void deleteOneStudent(@PathVariable Long id) {
        studentMediaService.deleteFileById(id);
    }

    @DeleteMapping("/delete/all")
    void deleteAllStudent() {
        studentMediaService.deleteAllFile();
    }
}
