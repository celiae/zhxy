package hbsm.zhxy.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

    ResponseEntity<Admin> login(Admin loginAdmin) {
        Admin admin = repository.findByUsername(loginAdmin.getUsername());
        if (admin == null) {
            return ResponseEntity.badRequest().body(loginAdmin);
        }
        if (!loginAdmin.getPassword().equals(admin.getPassword())) {
            return ResponseEntity.badRequest().body(loginAdmin);
        }
        return ResponseEntity.ok().body(loginAdmin);
    }
}
