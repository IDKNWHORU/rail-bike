package rail.bike.demo.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    AccountRepository accounts;
    
    @GetMapping("/create")
    public Account createAccount() {
        Account account = new Account();
        account.setEmail("email@mail.com");
        account.setPassword("password");

        return accounts.save(account);
    }
}
