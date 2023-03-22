package hbsm.zhxy.lab;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

interface LabRepository extends JpaRepository<Lab, Long> {
    @Query("SELECT l FROM Lab l WHERE id!='0'")
    List<Lab> findAllExceptNoLab();
}
