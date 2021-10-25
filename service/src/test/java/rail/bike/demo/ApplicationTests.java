package rail.bike.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import rail.bike.demo.web.Controller;

@SpringBootTest
class ApplicationTests {

	@Autowired
	private Controller controller;
}