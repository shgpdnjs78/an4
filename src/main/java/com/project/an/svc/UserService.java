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

@Service //비지니스 로직이 있으며 저장소 계층을 사용
public class UserService {
    @Autowired //스프링에게 해당 필드를 자동으로 주입하도록 지시 userMapper 필드에 넣음
    UserMapper userMapper;

    //로그인
    public boolean loginProcess(String id, String pw, HttpServletRequest request) {
        HttpSession session = request.getSession();
    //사용자 정보 조회
        UserInfo user = userMapper.selectUserInfo(id, pw);
        // session에 사용자 정보 설정
        session.setAttribute("user",user);
        System.out.println(id + pw);
        // 사용자 정보가 존재하지 않거나 이름이 비어있으면 로그인 실패
        return user == null || user.getName().equals("") ? false : true;
    }
    //회원가입
    public boolean registerProcess(String id, String pw, String name) {
        //중복된 사용자 확인
        UserInfo existingUser = userMapper.checkDuplicateUser(id);
        // 존재하지 않는 경우 회원가입 로직 수행...
        if (existingUser != null) {
            return false; // 이미 존재하는 사용자
        }
//        UserInfo newUser = new UserInfo();
//        newUser.setEmail(id);
//        newUser.setName(name);
//        newUser.setPw(pw);
        //insert,update,delete는 처리된 결과값의 카운트를 리턴한다
        int count = userMapper.insertUser(id, pw, name);
    // 회원가입 성공 여부 0 보다 크면 성공(1)
        return count > 0; // 회원가입 성공
    }
    // 마커 등록(타입, 내용, 위도, 경도, HttpServletRequest request
    public boolean locationProcess(String type, String answer, String lat, String lng, HttpServletRequest request) {
        MapInfo locationInfo = userMapper.checkUser(answer); // 중복 방지로 answer 넣었음 (삭제 가능)
        HttpSession session = request.getSession(); // session에서 현재 로그인한 사용자 정보 가져오기
        UserInfo userInfo = (UserInfo) session.getAttribute("user");
        System.out.println(type+","+answer+","+lat+","+lng );
        if (locationInfo != null) {
            return false; // 이미 존재하는 사용자
        }
        int count = userMapper.location(type,answer,lng,lat,userInfo.getEmail());
        return count > 0; // 정보 가져오기 성공
        }
        //위치 정보 쓰기(로그인 같이)
    public boolean locationSaveProcess(String type, String answer, String lat, String lng) {
        MapInfo user = userMapper.locationSaveProcess(type, answer,lat,lng);
        System.out.println(type + answer + lat + lng);
        return user == null || user.getName().equals("") ? false : true;
//        return user != null && !user.getName().isEmpty();
    }
}