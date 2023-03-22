package hbsm.zhxy.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

    public long totalAdmin() {
        return repository.count();
    }

    public List<Admin> allAdmin() {
        return repository.findAll();
    }

    public Admin getAdminById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AdminNotFoundException());
    }

    public Admin getAdminByUsername(String username) {
        return repository.findByUsername(username);
    }

    public Admin createAdmin(Admin newAdmin) {
        return repository.save(newAdmin);
    }

    public boolean signin(Admin newAdmin) {
        Admin admin = repository.findByUsername(newAdmin.getUsername());
        if (admin == null) {
            return false;
        }
        if (!newAdmin.getPassword().equals(admin.getPassword())) {
            return false;
        }
        return true;
    }

    public boolean signup(Admin newAdmin) {
        String token = "zhxy";
        Admin admin = repository.findByUsername(newAdmin.getUsername());
        if (admin != null) {
            return false;
        }
        if (!newAdmin.getPassword().equals(token)) {
            return false;
        }
        repository.save(newAdmin);
        return true;
    }

    public Admin updateAdmin(Admin newAdmin, Long id) {
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

    public boolean changePassword(ChangePass changePass, String username) {
        Admin admin = getAdminByUsername(username);
        String oldPass = admin.getPassword();
        if (changePass.getOldPass().equals(oldPass)) {
            admin.setPassword(changePass.getNewPass());
            repository.save(admin);
            return true;
        }
        return false;
    }

    Admin deleteOneAdmin(Long id) {
        Admin deletingAdmin = getAdminById(id);
        repository.deleteById(id);
        return deletingAdmin;
    }

    List<Admin> deleteAllAdmin() {
        List<Admin> deletingAllAdmin = allAdmin();
        repository.deleteAll();
        return deletingAllAdmin;
    }
}
