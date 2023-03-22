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
    private AdminService adminService;

    @GetMapping("number")
    long number() {
        return adminService.totalAdmin();
    }

    @GetMapping("all")
    List<Admin> all() {
        return adminService.allAdmin();
    }

    @GetMapping("detail/{id}")
    Admin detail(@PathVariable Long id) {
        return adminService.getAdminById(id);
    }

    @GetMapping("search")
    Admin search(@RequestParam("username") String username) {
        return adminService.getAdminByUsername(username);
    }

    @PostMapping("createOne")
    Admin createOne(@RequestBody Admin newAdmin) {
        return adminService.createAdmin(newAdmin);
    }

    @PostMapping("signin")
    ResponseEntity<Admin> signin(@RequestBody Admin loginAdmin) {
        if (adminService.signin(loginAdmin)) {
            return ResponseEntity.ok().body(loginAdmin);
        } else {
            return ResponseEntity.badRequest().body(loginAdmin);
        }
    }

    @PostMapping("signup")
    ResponseEntity<Admin> signup(@RequestBody Admin signupAdmin) {
        if (adminService.signup(signupAdmin)) {
            return ResponseEntity.ok().body(signupAdmin);
        } else {
            return ResponseEntity.badRequest().body(signupAdmin);
        }
    }

    @PutMapping("update/{id}")
    Admin update(@RequestBody Admin newAdmin, @PathVariable Long id) {
        return adminService.updateAdmin(newAdmin, id);
    }

    @PutMapping("changepass/{username}")
    ResponseEntity<Admin> changePass(@RequestBody ChangePass changePass, @PathVariable String username) {
        Admin admin = search(username);
        if (adminService.changePassword(changePass, username)) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.badRequest().body(admin);
        }
    }

    @DeleteMapping("delete/{id}")
    Admin deleteOneAdmin(@PathVariable Long id) {
        return adminService.deleteOneAdmin(id);
    }

    @DeleteMapping("deleteAll")
    List<Admin> deleteAllAdmin() {
        return adminService.deleteAllAdmin();
    }
}
