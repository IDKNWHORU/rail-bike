package rail.bike.demo.web;

import java.util.HashMap;
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

    
    @GetMapping("/")
    public String root(){
        return "root directory";
    }

    @GetMapping("/item")
    public String item(){
        Map<String, Object> result = new HashMap<>();
        
        result = itemMapper.selectItem();

        return result.get("item_code").toString();
    }
}
