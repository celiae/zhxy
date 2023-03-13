package hbsm.zhxy.admin;

import org.springframework.data.jpa.repository.JpaRepository;

interface AdminRepository extends JpaRepository<Admin, String> {
    Admin findByUsername(String username);
}
