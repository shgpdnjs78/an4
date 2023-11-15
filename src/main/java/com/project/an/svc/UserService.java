package com.project.an.svc;

import com.project.an.mapper.UserMapper;
import com.project.an.vo.MapInfo;
import com.project.an.vo.UserInfo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service //비지니스 로직이 있으며 저장소 계층을 사용
public class UserService {
    @Autowired //스프링에게 해당 필드를 자동으로 주입하도록 지시 userMapper 필드에 넣음
    UserMapper userMapper;
    private HttpServletResponse response;

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
    public boolean locationSaveProcess(String type, String answer, String lat, String lng, String id) {
        MapInfo user = userMapper.locationSaveProcess(type, answer,lat,lng);
        System.out.println(type + answer + lat + lng);
        return user == null || user.getName().equals("") ? false : true;
//        return user != null && !user.getName().isEmpty();
    }
    //회원 정보 없으면 로그인으로 돌아가는 것
//    public boolean userCheck(String id, HttpServletRequest request) throws IOException {
//        HttpSession session = request.getSession();
//        //사용자 정보 조회
//        UserInfo user = userMapper.userCheck(id);
//
//        if (user == null || user.getName().equals("")) {
//            // If the user is not logged in, redirect to the login page
//            response.sendRedirect(request.getContextPath() + "http://localhost/login"); // Replace "/login" with the actual login page URL
//            return false;
//        }
//
//        // session에 사용자 정보 설정
//        session.setAttribute("user",user);
//        System.out.println(id);
//
//        return true;
//    }
//
    public boolean locationRegisterProcess(String type, String answer, String lat, String lng,HttpServletRequest request) {
        HttpSession session = request.getSession();
        //사용자 정보 조회
        // 세션에서 UserInfo 객체 가져오기
        UserInfo userInfo = (UserInfo) session.getAttribute("user");

        // userInfo가 null이 아니라면 id를 가져오고, null이라면 빈 문자열 반환
        String userId = (userInfo != null) ? userInfo.getName() : "";

        // 사용자 정보 조회
        MapInfo user = userMapper.locationRegisterProcess(type, answer, lat, lng);

        // session에 사용자 정보 설정
        MapInfo mapInfo = (MapInfo) session.getAttribute("map");

        System.out.println(type + answer + lat + lng);

        return user == null || user.getName().equals("") ? false : true;
    }
    //아이디 변경
    public boolean changeId(String id, HttpServletRequest request) {
        HttpSession session = request.getSession();

        // 세션에서 현재 사용자 가져오기
        UserInfo user = (UserInfo) session.getAttribute("user");

        if (user != null) {
            // 이메일 업데이트
            user.setEmail(id);

            // 업데이트된 사용자를 세션에 설정
            session.setAttribute("user", user);

            // 필요한 경우 추가적인 로직이나 데이터베이스 업데이트 수행

            return true; // 또는 필요한 경우에 따라 성공 여부를 반환
        } else {
            // 사용자 정보를 찾을 수 없는 경우에 대한 처리
            return false;
        }
    }

    public boolean changePassword(String pw, HttpServletRequest request) {
        HttpSession session = request.getSession();
        //사용자 정보 조회
        // 세션에서 현재 사용자 가져오기
        // UserInfo user = (UserInfo) session.getAttribute("user");

        UserInfo user = userMapper.changePassword(pw);

        if (user != null) {
            // 이메일 업데이트
            user.setPw(pw);

            // 업데이트된 사용자를 세션에 설정
            session.setAttribute("user", user);

            // 필요한 경우 추가적인 로직이나 데이터베이스 업데이트 수행

            return true; // 또는 필요한 경우에 따라 성공 여부를 반환
        } else {
            // 사용자 정보를 찾을 수 없는 경우에 대한 처리
            return false;
        }
    }public boolean selectSqldata(String id, String lng, String lat, String type, String answer, HttpServletRequest request) {
        HttpSession session = request.getSession();
        //사용자 정보 조회
        MapInfo user = userMapper.selectSqldata(id, lng, lat, type, answer);
        // session에 사용자 정보 설정
        session.setAttribute("user",user);
        System.out.println(id + lng + lat + type + answer);
        // 사용자 정보가 존재하지 않거나 이름이 비어있으면 로그인 실패
        return user == null || user.getName().equals("") ? false : true;

    }
}