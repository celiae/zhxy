package hbsm.zhxy.studentdetail;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentDetailRepository extends JpaRepository<StudentDetail, Long> {

  @Query("SELECT s FROM StudentDetail s ORDER BY s.studyNum DESC LIMIT 3")
  List<StudentDetail> findTop3StudyStudent();

  @Query("SELECT s FROM StudentDetail s ORDER BY s.competitionNum DESC LIMIT 3")
  List<StudentDetail> findTop3CompetitionStudent();

}
