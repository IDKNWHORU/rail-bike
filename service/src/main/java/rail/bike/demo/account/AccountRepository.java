package rail.bike.demo.account;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

@Repository
public class AccountRepository {

    private Map<String, Account> accounts = new HashMap<>();
    private Random random = new Random();

    @Resource
    AccountMapper accountMapper;

    public Account save(Account account) {
        account.setId(random.nextInt());
        accounts.put(account.getEmail(), account);

        accountMapper.save(account);

        return account;
    }

    public Account findByEamil(String username) {
        return accounts.get(username);
    }

    public void callDB() {
        List<Account> accountList = accountMapper.getList();
        
        for(Account account:accountList)
            accounts.put(account.getEmail(), account);
    }
}
