package rail.bike.demo.db;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class ItemDao {
    private SqlSession sqlSession;
    public ItemDao(SqlSession sqlSession){
        this.sqlSession = sqlSession;
    }
    public List<Map<String, Object>> getItem() {
        return sqlSession.selectList("rail.bike.demo.db.ItemMapper.selectItem");
    }
}
