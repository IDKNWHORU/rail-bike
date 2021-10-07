package rail.bike.demo.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PutMapping("/order")
    public Object saveOrderInfo(@RequestBody Map<String, Object> orderInfo){
        String formatedDate = orderInfo.get("order_date").toString().replace("-", "");

        orderInfo.put("order_date", formatedDate);

        int queryResult = itemMapper.putOrderInfo(orderInfo);

        return getMessage(queryResult);
    }

    @PostMapping("/order/{orderUniq}")
    public Object editOrderInfo(@PathVariable int orderUniq, @RequestBody Map<String, Object> orderInfo){
        String formatedDate = orderInfo.get("order_date").toString().replace("-", "");

        orderInfo.put("order_date", formatedDate);
        orderInfo.put("order_uniq", orderUniq);

        int queryResult = itemMapper.editOrderInfo(orderInfo);

        return getMessage(queryResult);
    }

    public Map<String, Object> getMessage(int typeCode){
        Map<String, Object> result = new HashMap<>();

        if(typeCode == 1){
            result.put("result", true);
        }else{
            result.put("result", false);
        }

        if(typeCode == 0){
            result.put("msg", "전표내용이 누락되었습니다. 빠짐없이 기록해주세요.");
        }else if(typeCode == 1){
            result.put("msg", "전표가 등록되었습니다.");
        }else if(typeCode == 2){
            result.put("msg", "해당 품목은 등록되지 않은 품목입니다.");
        }

        return result;
    }
}
