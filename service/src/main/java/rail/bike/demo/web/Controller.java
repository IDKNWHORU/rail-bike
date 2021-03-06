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

    @GetMapping("/order/{orderUniq}")
    public Map<String, Object> loadOrderInfo(@PathVariable int orderUniq) {
        return itemMapper.selectOrderInfo(orderUniq);
    }

    @GetMapping("/unit")
    public List<Map<String, String>> loadUnitList() {
        return itemMapper.selectUnitList();
    }

    @PutMapping("/order")
    public Object saveOrderInfo(@RequestBody Map<String, Object> orderInfo) {
        Map<String, Object> saveInfo = convertDateFormatToSerial(orderInfo);

        int queryResult = itemMapper.putOrderInfo(saveInfo);

        return getMessage(queryResult);
    }

    @PostMapping("/order/{orderUniq}")
    public Object editOrderInfo(@PathVariable int orderUniq, @RequestBody Map<String, Object> orderInfo) {
        Map<String, Object> editInfo = convertDateFormatToSerial(orderInfo);

        editInfo.put("order_uniq", orderUniq);

        int queryResult = itemMapper.editOrderInfo(editInfo);

        return getMessage(queryResult);
    }

    @DeleteMapping("/order/{orderUniq}")
    public Object deleteOrderInfo(@PathVariable int orderUniq) {
        int queryResult = itemMapper.deleteOrderInfo(orderUniq);

        return getMessage(queryResult);
    }

    public Map<String, Object> getMessage(int typeCode) {
        Map<String, Object> result = new HashMap<>();
        boolean typeCodeResult = getTypeCodeResult(typeCode);

        result.put("result", typeCodeResult);

        if (typeCode == 0) {
            result.put("msg", "??????????????? ?????????????????????. ???????????? ??????????????????.");
        } else if (typeCode == 1) {
            result.put("msg", "????????? ?????????????????????.");
        } else if (typeCode == 2) {
            result.put("msg", "?????? ????????? ???????????? ?????? ???????????????.");
        }

        return result;
    }

    public boolean getTypeCodeResult(int typeCode) {
        return typeCode == 1;
    }

    @GetMapping("/report")
    public Map<String, Object> getSupplier() {
        return itemMapper.getSupplierInfo();
    }

    @GetMapping("/report/{startDate}/{endDate}/{page}")
    public Object getReport(@PathVariable String startDate, @PathVariable String endDate, @PathVariable int page) {
        Map<String, Object> result = new HashMap<>();

        int pageStart = page * 24;
        List<Map<String, Object>> reportList = itemMapper.getReportList(startDate, endDate, pageStart);
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

        if(reportList.isEmpty())
            result.put("size", 0);
        else
            result.put("size", reportList.get(0).get("page_size"));

        reportList.add(lastObject);

        result.put("list", reportList);

        return result;
    }

    @GetMapping("/report/{startDate}/{endDate}/{post}/{page}")
    public Object getReportForPost(@PathVariable String startDate, @PathVariable String endDate, @PathVariable String post, @PathVariable int page) {
        Map<String, Object> result = new HashMap<>();
        int pageStart = page * 24;
        List<Map<String, Object>> reportList = itemMapper.getReportListForPost(startDate, endDate, post, pageStart);
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

        if(reportList.isEmpty())
            result.put("size", 0);
        else
            result.put("size", reportList.get(0).get("page_size"));

        Map<String, Object> lastObject = createTotalMap(suppliedTotalValue, taxTotalValue);
        
        reportList.add(lastObject);

        result.put("list", reportList);

        return result;
    }

    public Map<String, Object> createTotalMap(int suppliedValue, int tax) {
        Map<String, Object> totalObject = new HashMap<>();

        totalObject.put("item_name", "???");
        totalObject.put("supplied_value", convertNumberFormat(suppliedValue));
        totalObject.put("tax", convertNumberFormat(tax));
        totalObject.put("total", convertNumberFormat(suppliedValue + tax));

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

    @GetMapping("/post")
    public Object getPostList() {
        return itemMapper.getPostList();
    }

    public Map<String, Object> convertDateFormatToSerial(Map<String, Object> orderInfo) {
        String key = "order_date";
        String serialDate = orderInfo.get(key).toString().replace("-", "");

        orderInfo.put(key, serialDate);

        return orderInfo;
    }
}