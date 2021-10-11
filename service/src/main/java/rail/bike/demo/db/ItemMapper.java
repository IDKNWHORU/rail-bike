package rail.bike.demo.db;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ItemMapper {
    List<Map<String, Object>> selectItem();
    int insertItem(Map<String, Object> itemInfo);
    int deleteItem(String itemCode);

    List<Map<String, Object>> selectOrderList();
    List<Map<String, String>> selectUnitList();

    int putOrderInfo(Map<String, Object> orderInfo);
    int editOrderInfo(Map<String, Object> orderInfo);
    int deleteOrderInfo(int orderUniq);
    Map<String, Object> getSupplierInfo();
}
