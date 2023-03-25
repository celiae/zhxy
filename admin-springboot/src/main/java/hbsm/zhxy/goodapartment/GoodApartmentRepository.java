package hbsm.zhxy.goodapartment;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodApartmentRepository extends JpaRepository<GoodApartment, Long> {
  List<GoodApartment> findByApartmentId(Long apartmentId);
}
