package hbsm.zhxy.apartment;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import hbsm.zhxy.classes.Classes;

public interface ApartmentRepository extends JpaRepository<Apartment, Long> {
  Optional<List<Apartment>> findByClasses(Classes classes);

}
