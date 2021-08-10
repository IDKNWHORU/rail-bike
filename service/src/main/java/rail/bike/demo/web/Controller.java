package rail.bike.demo.web;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import rail.bike.demo.db.ItemDao;
import rail.bike.demo.db.ItemMapper;

@RestController
public class Controller {
    private ItemMapper itemMapper;
    private ItemDao itemDao;

    public Controller(ItemMapper itemMapper, ItemDao itemDao) {
        this.itemMapper = itemMapper;
        this.itemDao = itemDao;
    }

    @GetMapping("/item")
    public List<Map<String, Object>> item(){
        return itemMapper.selectItem();
    }
}
