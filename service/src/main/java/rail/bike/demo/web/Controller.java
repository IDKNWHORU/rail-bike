package rail.bike.demo.web;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rail.bike.demo.db.ItemMapper;

@RestController
public class Controller {
    private ItemMapper itemMapper;

    public Controller(ItemMapper itemMapper) {
        this.itemMapper = itemMapper;
    }

    @GetMapping("/item")
    public List<Map<String, Object>> loadItemList(){
        return itemMapper.selectItem();
    }

    @PutMapping("/item/{itemCode}")
    public int saveItemInfo(@PathVariable String itemCode, @RequestBody Map<String, Object> itemInfo){
        itemInfo.put("item_code", itemCode);

        return itemMapper.insertItem(itemInfo);
    }

    @DeleteMapping("/item/{itemCode}")
    public int deleteItemInfo(@PathVariable String itemCode){
        return itemMapper.deleteItem(itemCode);
    }

    @GetMapping("/order")
    public List<Map<String, Object>> loadOrderList(){
        return itemMapper.selectOrderList();
    }

    @GetMapping("/unit")
    public List<Map<String, String>> loadUnitList(){
        return itemMapper.selectUnitList();
    }
}
