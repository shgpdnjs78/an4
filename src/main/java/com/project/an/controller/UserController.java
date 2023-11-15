package com.project.an.controller;

import com.project.an.dto.JsonResultDTO;
import com.project.an.svc.UserService;
import com.project.an.vo.UserInfo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.apache.logging.log4j.Marker;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@MapperScan(value = "com.project.an.mapper",sqlSessionFactoryRef = "sqlSessionFactoryBean")
@RequestMapping(value = "/user", method = {RequestMethod.GET, RequestMethod.POST})
public class UserController {
    @Autowired
    UserService userService;
    private String type;
    private String answer;
    private String lat;
    private String lng;
    private String id;
    @GetMapping("login")
    @PostMapping
    public String login(HttpServletRequest request, @RequestParam("id") String id, @RequestParam("pw") String pw) {
        //json 리턴을 위한 객체
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        //로그인 처리부분(로그인 정보가 일치하는 계정의 존재유무 파악)
        boolean login_check = userService.loginProcess(id, pw, request);
        //정상일경우 상태값 & 결과메시지 변경
        if (login_check) jsonResultDTO.setSuccess();

        //json 리턴
        return jsonResultDTO.finalResult();
    }

    @GetMapping("register")
    @PostMapping
    public JsonResultDTO register(@RequestParam("id") String id,
                                  @RequestParam("name") String name,
                                  @RequestParam("pw") String pw) {
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "회원가입 실패", null);
        //중복 체크

//         중복된 아이디가 존재하면 회원가입 실패 응답을 반환
//        if (count > 0) {
//            jsonResultDTO.setMsg("이미 존재하는 아이디입니다.");
//            return jsonResultDTO;
//        }
        boolean register_check = userService.registerProcess(id, name, pw);
        if (register_check) {
            jsonResultDTO.setSuccess();
        }

        return jsonResultDTO;
    }


    @GetMapping("map")
    @PostMapping
    public JsonResultDTO map(HttpServletRequest request, @RequestParam("type") String type, @RequestParam("answer") String answer,
                             @RequestParam("lat") String lat, @RequestParam("lng") String lng) {
        this.type = type;
        this.answer = answer;
        this.lat = lat;
        this.lng = lng;
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "위치정보 없음", null);

        boolean location_check = userService.locationProcess(type, answer, lat, lng, request);
        System.out.println(location_check);
        if (location_check) {
            jsonResultDTO.setSuccess();
        }

        return jsonResultDTO;
    }
    //map save 수정해야함
    @PostMapping
    public String mapsave(@RequestParam("type") String type,
                          @RequestParam("answer") String answer,
                          @RequestParam("lat") String lat,
                          @RequestParam("lng") String lng,
                          @RequestParam("id") String id) {
        this.type = type;
        this.answer = answer;
        this.lat = lat;
        this.lng = lng;
        this.id = id; //id값 받아오기
        //json 리턴을 위한 객체
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        //로그인 처리부분(로그인 정보가 일치하는 계정의 존재유무 파악)
        boolean location_check = userService.locationSaveProcess(type, answer, lat, lng, id);
        //정상일경우 상태값 & 결과메시지 변경
        if (location_check) jsonResultDTO.setSuccess();

        //json 리턴
        return jsonResultDTO.finalResult();
    }

    @GetMapping(value = {"/photo"})
    @PostMapping
    public String photo(HttpServletRequest request, @RequestBody Map<String, String> data) {
        String type = data.get("type");
        String answer = data.get("answer");
        String lat = data.get("lat");
        String lng = data.get("lng");

        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        boolean locationRegister_check = userService.locationRegisterProcess(data.get("type"), data.get("answer"), data.get("lat"), data.get("lng"), request);

        if (locationRegister_check) {
            jsonResultDTO.setSuccess();
        }
        return "/map";
    }

    @PostMapping("/changeId")
    public ResponseEntity<Map<String, Object>> changeId(@RequestParam String id, HttpServletRequest request) {
        Map<String, Object> response = new HashMap<>();

        HttpSession session = request.getSession();
        // Call the changeId method in the UserService

        boolean email_check = userService.changeId(id, request);

        if (email_check) {
            response.put("success", true);
            response.put("message", "이메일이 성공적으로 업데이트되었습니다.");
        } else {
            response.put("success", false);
            response.put("message", "이메일 업데이트 실패: 사용자 정보가 올바르지 않습니다.");
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping("/changePassword")
    public ResponseEntity<Map<String, Object>> changePassword(@RequestParam String pw, HttpServletRequest request) {
        Map<String, Object> response = new HashMap<>();

        HttpSession session = request.getSession();
        // Call the changeId method in the UserService
        boolean pw_check = userService.changePassword(pw, request);

        if (pw_check) {
            response.put("success", true);
            response.put("message", "이메일이 성공적으로 업데이트되었습니다.");
        } else {
            response.put("success", false);
            response.put("message", "이메일 업데이트 실패: 사용자 정보가 올바르지 않습니다.");
        }

        return ResponseEntity.ok(response);
    }

    @GetMapping("/selectSqldata")
    @PostMapping
    public String selectSqldata(HttpServletRequest request, @RequestParam("id") String id, @RequestParam("type") String type, @RequestParam("answer") String answer,
                                @RequestParam("lat") String lat, @RequestParam("lng") String lng) {
        //json 리턴을 위한 객체
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        //로그인 처리부분(로그인 정보가 일치하는 계정의 존재유무 파악)
        boolean selectSqldata_check = userService.selectSqldata(id, type, answer, lat, lng, request);
        //정상일경우 상태값 & 결과메시지 변경
        if (selectSqldata_check) {
            jsonResultDTO.setSuccess();
        }
        return jsonResultDTO.finalResult();

//    @GetMapping("/selectSqldata")
//    public List<Marker> getMarkers() {
//        // MarkerService를 통해 데이터베이스에서 마커 데이터를 가져옴
//        return UserService.getAllMarkers();

    }
}




