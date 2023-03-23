package hbsm.zhxy.departmentfinance;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentFinanceService {
  @Autowired
  private DepartmentFinanceRepository repository;

  long totalDepartmentFinance() {
    return repository.count();
  }

  List<DepartmentFinance> allDepartmentFinance() {
    return repository.findAll();
  }

  DepartmentFinance getDepartmentFinanceById(Long id) {
    return repository.findById(id).orElseThrow(() -> new DepartmentFinanceNotFoundException());
  }

  List<DepartmentFinance> getByDepartmentId(Long departmentId) {
    return repository.findByDepartmentId(departmentId).orElseThrow(() -> new DepartmentFinanceNotFoundException());
  }

  DepartmentFinance createDepartmentFinance(DepartmentFinance newDepartmentFinance) {
    return repository.save(newDepartmentFinance);
  }

  DepartmentFinance updateDepartmentFinance(DepartmentFinance newDepartmentFinance, Long id) {
    return repository.findById(id)
        .map(Department -> {
          Department.setDepartment(newDepartmentFinance.getDepartment());
          Department.setBudget(newDepartmentFinance.getBudget());
          Department.setCost(newDepartmentFinance.getCost());
          Department.setDate(newDepartmentFinance.getDate());
          Department.setDescription(newDepartmentFinance.getDescription());
          return repository.save(Department);
        }).orElseGet(() -> {
          newDepartmentFinance.setId(id);
          return repository.save(newDepartmentFinance);
        });
  }

  DepartmentFinance deleteDepartmentFinanceById(Long id) {
    DepartmentFinance deletingDepartmentFinance = getDepartmentFinanceById(id);
    repository.deleteById(id);
    return deletingDepartmentFinance;
  }

  List<DepartmentFinance> deleteAllDepartmentFinance() {
    List<DepartmentFinance> deletingAllDepartmentFinance = allDepartmentFinance();
    repository.deleteAll();
    return deletingAllDepartmentFinance;
  }
}
