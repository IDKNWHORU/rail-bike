package rail.bike.demo.account;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountMapper {
    List<Account> getList();

    int save(Account account);
}
