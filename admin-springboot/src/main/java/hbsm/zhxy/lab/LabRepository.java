package hbsm.zhxy.lab;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

interface LabRepository extends JpaRepository<Lab,String> {
    @Query("SELECT l FROM Lab l WHERE id!='0'")
    List<Lab> findAllExceptNoLab();
}
