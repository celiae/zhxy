package hbsm.zhxy.repair;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepairRepository extends JpaRepository<Repair, Long> {
  Optional<List<Repair>> findByClassroomId(Long classroomId);

  Optional<List<Repair>> findByDepartmentId(Long departmentId);

  Optional<List<Repair>> findByLabId(Long labId);

  Optional<List<Repair>> findByApartmentId(Long apartmentId);
}
