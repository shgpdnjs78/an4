package com.project.an.svc;

import com.project.an.mapper.UserMapper;
import com.project.an.vo.MapInfo;
import com.project.an.vo.UserInfo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.apache.catalina.Session;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    //    @Override
    public boolean loginProcess(String id, String pw, HttpServletRequest request) {
        HttpSession session = request.getSession();

        UserInfo user = userMapper.selectUserInfo(id, pw);
        session.setAttribute("user",user);
        System.out.println(id + pw);
        return user == null || user.getName().equals("") ? false : true;
//        return user != null && !user.getName().isEmpty();
    }

    public boolean registerProcess(String id, String pw, String name) {
        UserInfo existingUser = userMapper.checkDuplicateUser(id);
        if (existingUser != null) {
            return false; // 이미 존재하는 사용자
        }
        // 존재하지 않는 경우 회원가입 로직 수행...
//        UserInfo newUser = new UserInfo();
//        newUser.setEmail(id);
//        newUser.setName(name);
//        newUser.setPw(pw);
        //insert,update,delete는 처리된 결과값의 카운트를 리턴한다
        int count = userMapper.insertUser(id, pw, name);

        return count > 0; // 회원가입 성공
    }
    public boolean locationProcess(String type, String answer, String lat, String lng, HttpServletRequest request) {
        MapInfo locationInfo = userMapper.checkUser(answer);
        HttpSession session = request.getSession();
        UserInfo userInfo = (UserInfo) session.getAttribute("user");
        System.out.println(type+","+answer+","+lat+","+lng );
        if (locationInfo != null) {
            return false; // 이미 존재하는 사용자
        }
        int count = userMapper.location(type,answer,lng,lat,userInfo.getEmail());
        return count > 0; // 회원가입 성공
    }
    public boolean locationSaveProcess(String type, String answer, String lat, String lng) {
        MapInfo user = userMapper.locationSaveProcess(type, answer,lat,lng);
        System.out.println(type + answer + lat + lng);
        return user == null || user.getName().equals("") ? false : true;
//        return user != null && !user.getName().isEmpty();
    }
}