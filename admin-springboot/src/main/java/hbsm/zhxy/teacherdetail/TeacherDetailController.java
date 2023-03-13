package hbsm.zhxy.teacherdetail;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teacherdetail")
public class TeacherDetailController {
    @Autowired
    private TeacherDetailRepository repository;

    @GetMapping("/number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("/all")
    List<TeacherDetail> all() {
        return repository.findAll();
    }

    @GetMapping("/detail/{id}")
    TeacherDetail detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new TeacherDetailNotFoundException());
    }

    @PostMapping("/createOne")
    TeacherDetail createOne(@RequestBody TeacherDetail newTeacher) {
        return repository.save(newTeacher);
    }

    @PutMapping("/update/{id}")
    TeacherDetail update(@RequestBody TeacherDetail newTeacher, @PathVariable String id) {
        return repository.findById(id)
                .map(Teacher -> {
                    Teacher.setGender(newTeacher.getGender());
                    Teacher.setEntryDate(newTeacher.getEntryDate());
                    Teacher.setEmail(newTeacher.getEmail());
                    Teacher.setPhone(newTeacher.getPhone());
                    Teacher.setSalary(newTeacher.getSalary());
                    Teacher.setReward(newTeacher.getReward());
                    Teacher.setBirthDate(newTeacher.getBirthDate());
                    Teacher.setTeachingQuality(newTeacher.getTeachingQuality());
                    Teacher.setResearch(newTeacher.getResearch());
                    Teacher.setPoliticalIdeology(newTeacher.getPoliticalIdeology());
                    Teacher.setPractical(newTeacher.getPractical());
                    Teacher.setDiscipline(newTeacher.getDiscipline());
                    Teacher.setComment(newTeacher.getComment());
                    Teacher.setDescription(newTeacher.getDescription());
                    return repository.save(Teacher);
                }).orElseGet(() -> {
                    newTeacher.setId(id);
                    return repository.save(newTeacher);
                });
    }

    @DeleteMapping("/delete/{id}")
    TeacherDetail deleteOneTeacher(@PathVariable String id) {
        TeacherDetail deletingTeacher = detail(id);
        repository.deleteById(id);
        return deletingTeacher;
    }

    @DeleteMapping("/deleteAll")
    List<TeacherDetail> deleteAllTeacher() {
        List<TeacherDetail> deletingAllTeacher = all();
        repository.deleteAll();
        return deletingAllTeacher;
    }
}
