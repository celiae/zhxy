package hbsm.zhxy.departmentfinance;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

interface DepartmentFinanceRepository extends JpaRepository<DepartmentFinance, Long> {
    Optional<List<DepartmentFinance>> findByDepartmentId(Long departmentId);
}
