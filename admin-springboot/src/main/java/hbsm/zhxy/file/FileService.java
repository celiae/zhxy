package hbsm.zhxy.file;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

  public void deleteFileByPath(String path) {
    File currentFile = new File(path);
    if (currentFile.delete()) {
      System.out.println(currentFile.getName() + "删除成功");
    }
  }

  public void storeFile(MultipartFile file, Path absFilePath) {
    try {
      if (file.isEmpty()) {
        System.out.println("空文件");
        return;
      }
      // 目录转化为 File 形式
      File targetDir = absFilePath.getParent().toFile();

      // 如果父目录不存在则创建
      if (!targetDir.exists()) {
        System.out.println(targetDir.toString() + " 不存在，创建目录..");
        targetDir.mkdir();
      }
      // 开始写文件
      try (InputStream inputStream = file.getInputStream()) {
        Files.copy(inputStream, absFilePath);
      }
    } catch (

    IOException e) {
      System.out.println(e);
    }
  }
}