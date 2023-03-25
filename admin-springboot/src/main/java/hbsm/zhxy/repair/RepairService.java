package hbsm.zhxy.repair;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RepairService {
  @Autowired
  private RepairRepository repository;

  long totalRepair() {
    return repository.count();
  }

  List<Repair> allRepair() {
    return repository.findAll();
  }

  Repair getRepairById(Long id) {
    return repository.findById(id).orElseThrow(() -> new RepairNotFoundException());
  }

  List<Repair> searchRepairs(Long classroomId, Long departmentId, Long labId, Long apartmentId) {
    if (classroomId != null) {
      return repository.findByClassroomId(classroomId).orElseThrow(() -> new RepairNotFoundException());
    }
    if (departmentId != null) {
      return repository.findByDepartmentId(departmentId).orElseThrow(() -> new RepairNotFoundException());
    }
    if (labId != null) {
      return repository.findByLabId(labId).orElseThrow(() -> new RepairNotFoundException());
    }
    if (apartmentId != null) {
      return repository.findByApartmentId(apartmentId).orElseThrow(() -> new RepairNotFoundException());

    }
    return null;
  }

  Repair createRepair(Repair newRepair) {
    repository.save(newRepair);
    repository.flush();
    return newRepair;
  }

  Repair updateRepair(Repair newRepair, Long id) {
    return repository.findById(id)
        .map(Repair -> {
          Repair.setClassroom(newRepair.getClassroom());
          Repair.setDepartment(newRepair.getDepartment());
          Repair.setLab(newRepair.getLab());
          Repair.setApartment(newRepair.getApartment());
          Repair.setType(newRepair.getType());
          Repair.setDescription(newRepair.getDescription());
          Repair.setLocation(newRepair.getLocation());
          Repair.setCreateDate(newRepair.getCreateDate());
          Repair.setFixDate(newRepair.getFixDate());
          Repair.setActive(newRepair.getActive());
          return repository.save(Repair);
        }).orElseGet(() -> {
          newRepair.setId(id);
          return repository.save(newRepair);
        });
  }

  Repair deleteRepairById(Long id) {
    Repair deletingRepair = getRepairById(id);
    repository.deleteById(id);
    return deletingRepair;
  }

  List<Repair> deleteAllRepair() {
    List<Repair> deletingAllRepair = allRepair();
    repository.deleteAll();
    return deletingAllRepair;
  }
}
