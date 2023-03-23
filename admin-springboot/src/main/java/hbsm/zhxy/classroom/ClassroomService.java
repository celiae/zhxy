package hbsm.zhxy.classroom;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassroomService {
  @Autowired
  private ClassroomRepository repository;

  long totalClassroom() {
    return repository.count();
  }

  List<Classroom> allClassroom() {
    return repository.findAll();
  }

  Classroom getClassroomById(Long id) {
    return repository.findById(id).orElseThrow(() -> new ClassroomNotFoundException());
  }

  Classroom createClassroom(Classroom newClassroom) {
    return repository.save(newClassroom);
  }

  Classroom updateClassroom(Classroom newClassroom, Long id) {
    return repository.findById(id)
        .map(Classroom -> {
          Classroom.setRoomNumber(newClassroom.getRoomNumber());
          Classroom.setLocation(newClassroom.getLocation());
          Classroom.setType(newClassroom.getType());
          Classroom.setSeats(newClassroom.getSeats());
          Classroom.setActive(newClassroom.getActive());
          return repository.save(Classroom);
        }).orElseGet(() -> {
          newClassroom.setId(id);
          return repository.save(newClassroom);
        });
  }

  Classroom deleteClassroomById(Long id) {
    Classroom deletingClassroom = getClassroomById(id);
    repository.deleteById(id);
    return deletingClassroom;
  }

  public List<Classroom> deleteAllClassroom() {
    List<Classroom> deletingAllClassroom = allClassroom();
    repository.deleteAll();
    return deletingAllClassroom;
  }
}
