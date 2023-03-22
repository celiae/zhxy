package hbsm.zhxy.admin;

import org.springframework.data.jpa.repository.JpaRepository;

interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByUsername(String username);
}
