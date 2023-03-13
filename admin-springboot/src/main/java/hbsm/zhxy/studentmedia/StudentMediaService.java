package hbsm.zhxy.studentmedia;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import hbsm.zhxy.file.FileService;
import hbsm.zhxy.student.Student;

@Service
public class StudentMediaService {
  protected final String location = "../docker/nginx/uploads";
  private final Path rootLocation;
  private final StudentMediaRepository studentMediaRepository;
  private final FileService fileService;

  @Autowired
  public StudentMediaService(StudentMediaRepository mediaRepository, FileService fileService) {
    this.rootLocation = Paths.get(location);
    this.studentMediaRepository = mediaRepository;
    this.fileService = fileService;
  }

  public void saveMediaWithStudent(MultipartFile[] files, Student student) {
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
      newStudentMedia.setId(uuid);
      newStudentMedia.setStudent(student);
      newStudentMedia.setFilename(files[i].getOriginalFilename());
      newStudentMedia.setPath(absFilePath.toString());
      newStudentMedia.setType(files[i].getContentType());
      studentMediaRepository.save(newStudentMedia);
    }
  }

  public void deleteFileByStudentId(String studentId) {
    List<StudentMedia> deletingAllMedia = studentMediaRepository.findStudentMediaByStudentId(studentId)
        .orElseThrow(() -> new StudentMediaNotFoundException());
    for (int i = 0; i < deletingAllMedia.size(); i++) {
      String path = deletingAllMedia.get(i).getPath();
      fileService.deleteFileByPath(path);
    }
  }

  public void deleteOneFile(String id) {
    StudentMedia deletingMedia = studentMediaRepository.findById(id)
        .orElseThrow(() -> new StudentMediaNotFoundException());
    String path = deletingMedia.getPath();
    fileService.deleteFileByPath(path);
  }

  public void deleteAllFile() {
    List<StudentMedia> deletingAllMedia = studentMediaRepository.findAll();
    for (int i = 0; i < deletingAllMedia.size(); i++) {
      String path = deletingAllMedia.get(i).getPath();
      fileService.deleteFileByPath(path);
    }
  }
}
