package rail.bike.demo.account;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    AccountRepository accounts;
    
    @PostMapping("/create")
    public Object createAccount(String username, String password) {
        Map<String, Object> result = new HashMap<>();
        
        Account account = new Account();
        account.setEmail(username);
        account.setPassword(password);

        accountService.save(account);

        result.put("success", "true");
        
        return result;
    }
}
