package rail.bike.demo.web;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.text.NumberFormat;
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
    public List<Map<String, Object>> loadItemList() {
        return itemMapper.selectItem();
    }

    @PutMapping("/item/{itemCode}")
    public int saveItemInfo(@PathVariable String itemCode, @RequestBody Map<String, Object> itemInfo) {
        itemInfo.put("item_code", itemCode);

        return itemMapper.insertItem(itemInfo);
    }

    @DeleteMapping("/item/{itemCode}")
    public int deleteItemInfo(@PathVariable String itemCode) {
        return itemMapper.deleteItem(itemCode);
    }

    @GetMapping("/order")
    public List<Map<String, Object>> loadOrderList() {
        return itemMapper.selectOrderList();
    }

    @GetMapping("/unit")
    public List<Map<String, String>> loadUnitList() {
        return itemMapper.selectUnitList();
    }

    @PutMapping("/order")
    public Object saveOrderInfo(@RequestBody Map<String, Object> orderInfo) {
        String formatedDate = orderInfo.get("order_date").toString().replace("-", "");

        orderInfo.put("order_date", formatedDate);

        int queryResult = itemMapper.putOrderInfo(orderInfo);

        return getMessage(queryResult);
    }

    @PostMapping("/order/{orderUniq}")
    public Object editOrderInfo(@PathVariable int orderUniq, @RequestBody Map<String, Object> orderInfo) {
        String formatedDate = orderInfo.get("order_date").toString().replace("-", "");

        orderInfo.put("order_date", formatedDate);
        orderInfo.put("order_uniq", orderUniq);

        int queryResult = itemMapper.editOrderInfo(orderInfo);

        return getMessage(queryResult);
    }

    @DeleteMapping("/order/{orderUniq}")
    public Object deleteOrderInfo(@PathVariable int orderUniq) {
        int queryResult = itemMapper.deleteOrderInfo(orderUniq);

        return getMessage(queryResult);
    }

    public Map<String, Object> getMessage(int typeCode) {
        Map<String, Object> result = new HashMap<>();

        if (typeCode == 1) {
            result.put("result", true);
        } else {
            result.put("result", false);
        }

        if (typeCode == 0) {
            result.put("msg", "전표내용이 누락되었습니다. 빠짐없이 기록해주세요.");
        } else if (typeCode == 1) {
            result.put("msg", "전표가 등록되었습니다.");
        } else if (typeCode == 2) {
            result.put("msg", "해당 품목은 등록되지 않은 품목입니다.");
        }

        return result;
    }

    @GetMapping("/report")
    public Map<String, Object> getSupplier() {
        Map<String, Object> result = new HashMap<>();

        result = itemMapper.getSupplierInfo();

        return result;
    }

    @GetMapping("/report/{startDate}/{endDate}")
    public Object getReport(@PathVariable String startDate, @PathVariable String endDate) {
        List<Map<String, Object>> reportList = itemMapper.getReportList(startDate, endDate);
        int suppliedTotalValue = 0;
        int taxTotalValue = 0;
        
        for (Map<String, Object> reportObject : reportList) {
            int price = (int) reportObject.get("price");
            BigDecimal count = (BigDecimal) reportObject.get("count");
            BigDecimal labor = (BigDecimal) reportObject.get("labor");
            
            BigDecimal totalBigDecimal = new BigDecimal((price * count.intValue()) + labor.intValue());
            
            int suppliedIntValue = suppliedValue(totalBigDecimal);
            int taxIntValue = tax(totalBigDecimal);
            
            suppliedTotalValue += suppliedIntValue;
            taxTotalValue += taxIntValue;
            
            reportObject.put("supplied_value", convertNumberFormat(suppliedIntValue));
            reportObject.put("tax", convertNumberFormat(taxIntValue));
            reportObject.put("price", convertNumberFormat(price));
        }

        Map<String, Object> lastObject = createTotalMap(suppliedTotalValue, taxTotalValue);

        reportList.add(lastObject);

        return reportList;
    }

    public Map<String, Object> createTotalMap(int suppliedValue, int tax) {
        Map<String, Object> totalObject = new HashMap<String, Object>();

        totalObject.put("item_name", "계");
        totalObject.put("supplied_value", suppliedValue);
        totalObject.put("tax", tax);

        return totalObject;
    }

    public int suppliedValue(BigDecimal number) {
        return number.divide(new BigDecimal("1.1"), MathContext.DECIMAL32).setScale(0, RoundingMode.HALF_EVEN)
                .intValue();
    }

    public int tax(BigDecimal number) {
        return number.divide(new BigDecimal("11"), MathContext.DECIMAL32).setScale(0, RoundingMode.HALF_EVEN)
                       .intValue();
    }

    public String convertNumberFormat(int number) {
        return NumberFormat.getIntegerInstance().format(number);
    }
}