package rail.bike.demo.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    AccountRepository accounts;
    
    @GetMapping("/create")
    public Account createAccount(String username, String password) {
        Account account = new Account();
        account.setEmail(username);
        account.setPassword(password);

        return accountService.save(account);
    }
}
