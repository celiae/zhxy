package hbsm.zhxy.department;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService {
  @Autowired
  private DepartmentRepository repository;

  long totalDepartment() {
    return repository.count();
  }

  List<Department> allDepartment() {
    return repository.findAllExceptNoDepartment();
  }

  Department getDepartmentById(Long id) {
    return repository.findById(id).orElseThrow(() -> new DepartmentNotFoundException());
  }

  Department createDepartment(Department newDepartment) {
    return repository.save(newDepartment);
  }

  Department updateDepartment(Department newDepartment, Long id) {
    return repository.findById(id)
        .map(Department -> {
          Department.setName(newDepartment.getName());
          Department.setDescription(newDepartment.getDescription());
          Department.setManager(newDepartment.getManager());
          Department.setBudget(newDepartment.getBudget());
          Department.setDepartment(newDepartment.getDepartment());
          Department.setCreateTime(newDepartment.getCreateTime());
          Department.setModifyTime(newDepartment.getModifyTime());
          return repository.save(Department);
        }).orElseGet(() -> {
          newDepartment.setId(id);
          return repository.save(newDepartment);
        });
  }

  Department deleteDepartmentById(Long id) {
    Department deletingDepartment = getDepartmentById(id);
    repository.deleteById(id);
    return deletingDepartment;
  }

  List<Department> deleteAllDepartment() {
    List<Department> deletingAllDepartment = allDepartment();
    repository.deleteAll();
    return deletingAllDepartment;
  }
}
