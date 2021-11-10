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

    @PostMapping("/create")
    public Object createAccount(String username, String password) {
        Map<String, Object> resultMap = new HashMap<>();
        if(accountService.findByUsername(username) == null){
            Account account = new Account();
            account.setEmail(username);
            account.setPassword(password);
    
            accountService.save(account);
            
            resultMap.put("success", true);
            resultMap.put("msg", "사용자 계정이 생성되었습니다.");
        } else {
            resultMap.put("success", false);
            resultMap.put("msg", "사용자 계정이 중복되었습니다.");
        }

        return resultMap;
    }
}
