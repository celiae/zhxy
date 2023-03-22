package hbsm.zhxy.classes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassesService {
  @Autowired
  private ClassesRepository repository;

  long totalClasses() {
    return repository.count();
  }

  List<Classes> allClasses() {
    return repository.findAll();
  }

  Classes getClassesById(Long id) {
    return repository.findById(id).orElseThrow(() -> new ClassesNotFoundException());
  }

  Classes createClasses(Classes newClasses) {
    return repository.save(newClasses);
  }

  Classes updateClasses(Classes newClasses, Long id) {
    return repository.findById(id)
        .map(Classes -> {
          Classes.setGrade(newClasses.getGrade());
          Classes.setSpeciality(newClasses.getSpeciality());
          Classes.setName(newClasses.getName());
          Classes.setDescription(newClasses.getDescription());
          return repository.save(Classes);
        }).orElseGet(() -> {
          newClasses.setId(id);
          return repository.save(newClasses);
        });
  }

  Classes deleteClassesById(Long id) {
    Classes deletingClasses = getClassesById(id);
    repository.deleteById(id);
    return deletingClasses;
  }

  List<Classes> deleteAllClasses() {
    List<Classes> deletingAllClasses = allClasses();
    repository.deleteAll();
    return deletingAllClasses;
  }
}
