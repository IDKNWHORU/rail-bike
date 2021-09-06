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
    int deleteItem(Map<String, Object> itemInfo);

    List<Map<String, Object>> selectOrderList();
    List<Map<String, String>> selectUnitList();
}
