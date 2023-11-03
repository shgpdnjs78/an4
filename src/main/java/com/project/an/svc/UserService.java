package com.project.an.svc;

import com.project.an.mapper.UserMapper;
import com.project.an.vo.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;
    public boolean loginProcess(String id, String pw) {
        UserInfo user = userMapper.selectUserInfo(id,pw);
        System.out.println(id+pw);
        return user == null || user.getName().equals("")?false:true;
    }
}
