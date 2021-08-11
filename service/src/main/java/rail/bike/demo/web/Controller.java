package rail.bike.demo.web;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public List<Map<String, Object>> loadItemList(){
        return itemMapper.selectItem();
    }

    @PutMapping("/item")
    public int saveItemInfo(@RequestParam Map<String, Object> itemInfo){
        return itemMapper.insertItem(itemInfo);
    }

    @DeleteMapping("/item")
    public int deleteItemInfo(@RequestParam Map<String, Object> itemInfo){
        return itemMapper.deleteItem(itemInfo);
    }

    @GetMapping("/order")
    public List<Map<String, Object>> loadOrderList(){
        return itemMapper.selectOrderList();
    }
}
