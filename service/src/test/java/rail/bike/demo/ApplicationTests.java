package rail.bike.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import rail.bike.demo.web.Controller;

@SpringBootTest
class ApplicationTests {

	@Autowired
	private Controller controller;

	public boolean itemEquals(Map<String, Object> item1, Map<String, Object> item2){
		for(String key : item1.keySet()){
			if(!item1.get(key).toString().equals(item2.get(key).toString()))
				return false;
		}
		return true;
	}

	@Test
	public void getlItemMap() throws Exception{
		Map<String, Object> result = new HashMap<>();

		result.put("item_code", "CDI_UNIT");
		result.put("item_name", "씨디아이유니트");
		result.put("unit_code", "PA");
		result.put("unit_name", "조");
		result.put("price", "35000");

		assertTrue(itemEquals(controller.loadItemList().get(0), result));
	}
}
