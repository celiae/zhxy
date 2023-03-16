package hbsm.zhxy.lab;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LabService {
  @Autowired
  private LabRepository repository;

  long totalLab() {
    return repository.count();
  }

  List<Lab> allLab() {
    return repository.findAllExceptNoLab();
  }

  Lab getLabById(String id) {
    return repository.findById(id).orElseThrow(() -> new LabNotFoundException());
  }

  Lab createLab(Lab newLab) {
    return repository.save(newLab);
  }

  Lab updateLab(Lab newLab, String id) {
    return repository.findById(id)
        .map(Lab -> {
          Lab.setName(newLab.getName());
          Lab.setDescription(newLab.getDescription());
          Lab.setFailedNum(newLab.getFailedNum());
          Lab.setSuccessNum(newLab.getSuccessNum());
          Lab.setDeviceCondition(newLab.getDeviceCondition());
          Lab.setDeviceCost(newLab.getDeviceCost());
          Lab.setProjectCost(newLab.getProjectCost());
          Lab.setWorkload(newLab.getWorkload());
          Lab.setLocation(newLab.getLocation());
          return repository.save(Lab);
        }).orElseGet(() -> {
          newLab.setId(id);
          return repository.save(newLab);
        });
  }

  Lab deleteLabById(String id) {
    Lab deletingLab = getLabById(id);
    repository.deleteById(id);
    return deletingLab;
  }

  List<Lab> deleteAllLab() {
    List<Lab> deletingAllLab = allLab();
    repository.deleteAll();
    return deletingAllLab;
  }
}
