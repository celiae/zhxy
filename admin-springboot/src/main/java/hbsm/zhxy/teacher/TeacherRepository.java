package hbsm.zhxy.teacher;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TeacherRepository extends JpaRepository<Teacher, String> {
  @Query("SELECT t.jobTitle, COUNT(t.jobTitle) FROM Teacher t GROUP BY t.jobTitle")
  List<Object[]> jobTitleGroup();

  @Query("SELECT t.firstname,t.lastname,td.entryDate,td.salary,td.reward " +
      " FROM Teacher t LEFT JOIN TeacherDetail td ON t.id=td.id " +
      " ORDER BY td.entryDate ASC")
  List<Object[]> teacherEntryDateAsc();

}
