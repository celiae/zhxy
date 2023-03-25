package hbsm.zhxy.studentmedia;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import hbsm.zhxy.apartment.Apartment;
import hbsm.zhxy.apartment.ApartmentRepository;
import hbsm.zhxy.file.FileService;

@Service
public class StudentMediaService {
  private final Path rootLocation = Paths.get("../docker/nginx/uploads");
  @Autowired
  private ApartmentRepository studentRepository;
  @Autowired
  private StudentMediaRepository studentMediaRepository;
  @Autowired
  private FileService fileService;

  public long totalStudentMedia() {
    return studentMediaRepository.count();
  }

  public List<StudentMedia> allStudentMedia() {
    return studentMediaRepository.findAll();
  }

  public StudentMedia getStudentMediaById(Long id) {
    return studentMediaRepository.findById(id).orElseThrow(() -> new StudentMediaNotFoundException());
  }

  public List<StudentMedia> getMediaByStudentId(Long studentId) {
    return studentMediaRepository.findStudentMediaByStudentId(studentId)
        .orElseThrow(() -> new StudentMediaNotFoundException());
  }

  public StudentMedia createStudentMedia(StudentMedia newStudentDetail) {
    return studentMediaRepository.save(newStudentDetail);
  }

  public void uploadMedia(MultipartFile[] file, Long studentId) {
    Apartment student = studentRepository.findById(studentId).orElse(null);
    saveMediaWithStudent(file, student);
  }

  public StudentMedia updateStudentMedia(StudentMedia newStudentDetail, Long id) {
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

  public void saveMediaWithStudent(MultipartFile[] files, Apartment student) {
    if (files.length <= 0) {
      System.out.println("空文件");
      return;
    }

    for (int i = 0; i < files.length; i++) {
      // 新的文件名
      String uuid = UUID.randomUUID().toString();

      // 合并路径加文件，展示绝对路径形式
      Path absFilePath = this.rootLocation.resolve(
          Paths.get(uuid))
          .normalize().toAbsolutePath();

      fileService.storeFile(files[i], absFilePath);
      StudentMedia newStudentMedia = new StudentMedia();
      newStudentMedia.setStudent(student);
      newStudentMedia.setFilename(files[i].getOriginalFilename());
      newStudentMedia.setPath(absFilePath.toString());
      newStudentMedia.setType(files[i].getContentType());
      studentMediaRepository.save(newStudentMedia);
    }
  }

  public void deleteByStudentId(Long studentId) {
    List<StudentMedia> deletingAllMedia = studentMediaRepository.findStudentMediaByStudentId(studentId)
        .orElseThrow(() -> new StudentMediaNotFoundException());
    for (int i = 0; i < deletingAllMedia.size(); i++) {
      String path = deletingAllMedia.get(i).getPath();
      fileService.deleteFileByPath(path);
    }
    studentMediaRepository.deleteAllByStudentId(studentId);
  }

  public void deleteFileById(Long id) {
    StudentMedia deletingMedia = studentMediaRepository.findById(id)
        .orElseThrow(() -> new StudentMediaNotFoundException());
    String path = deletingMedia.getPath();
    fileService.deleteFileByPath(path);
    studentMediaRepository.deleteById(id);
  }

  public void deleteAllFile() {
    List<StudentMedia> deletingAllMedia = studentMediaRepository.findAll();
    for (int i = 0; i < deletingAllMedia.size(); i++) {
      String path = deletingAllMedia.get(i).getPath();
      fileService.deleteFileByPath(path);
    }
    studentMediaRepository.deleteAll();
  }
}
