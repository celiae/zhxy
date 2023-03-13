package hbsm.zhxy.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminRepository repository;
    @Autowired
    private AdminService service;

    @GetMapping("number")
    int number() {
        return repository.findAll().size();
    }

    @GetMapping("all")
    List<Admin> all() {
        return repository.findAll();
    }

    @GetMapping("detail/{id}")
    Admin detail(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new AdminNotFoundException());
    }

    @GetMapping("search")
    Admin search(@RequestParam("username") String username) {
        return repository.findByUsername(username);
    }

    @PostMapping("createOne")
    ResponseEntity<Admin> createOne(@RequestBody Admin newAdmin) {
        String token = "zhxy";
        Admin admin = repository.findByUsername(newAdmin.getUsername());
        if (admin != null) {
            return ResponseEntity.badRequest().body(newAdmin);
        }
        if (!newAdmin.getPassword().equals(token)) {
            return ResponseEntity.badRequest().body(newAdmin);
        }
        repository.save(newAdmin);
        return ResponseEntity.ok().body(newAdmin);
    }

    @PostMapping("login")
    ResponseEntity<Admin> login(@RequestBody Admin loginAdmin) {
        return service.login(loginAdmin);
    }

    @PutMapping("update/{id}")
    Admin update(@RequestBody Admin newAdmin, @PathVariable String id) {
        return repository.findById(id)
                .map(Admin -> {
                    Admin.setAvatar(newAdmin.getAvatar());
                    Admin.setUsername(newAdmin.getUsername());
                    Admin.setPassword(newAdmin.getPassword());
                    Admin.setLastLogin(newAdmin.getLastLogin());
                    return repository.save(Admin);
                }).orElseGet(() -> {
                    newAdmin.setId(id);
                    return repository.save(newAdmin);
                });
    }

    @PutMapping("changepass/{username}")
    ResponseEntity<Admin> changePass(@RequestBody ChangePass changePass, @PathVariable String username) {
        Admin admin = search(username);
        String oldPass = admin.getPassword();
        if (changePass.getOldPass().equals(oldPass)) {
            admin.setPassword(changePass.getNewPass());
            repository.save(admin);
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.badRequest().body(admin);
        }
    }

    @DeleteMapping("delete/{id}")
    Admin deleteOneAdmin(@PathVariable String id) {
        Admin deletingAdmin = detail(id);
        repository.deleteById(id);
        return deletingAdmin;
    }

    @DeleteMapping("deleteAll")
    List<Admin> deleteAllAdmin() {
        List<Admin> deletingAllAdmin = all();
        repository.deleteAll();
        return deletingAllAdmin;
    }
}
