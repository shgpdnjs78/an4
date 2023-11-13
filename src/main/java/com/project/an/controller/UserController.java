package com.project.an.controller;

import com.project.an.dto.JsonResultDTO;
import com.project.an.svc.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping
    public String mapsave(@RequestParam("type") String type,
                          @RequestParam("answer") String answer,
                          @RequestParam("lat") String lat,
                          @RequestParam("lng") String lng) {
        this.type = type;
        this.answer = answer;
        this.lat = lat;
        this.lng = lng;
        //json 리턴을 위한 객체
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        //로그인 처리부분(로그인 정보가 일치하는 계정의 존재유무 파악)
        boolean location_check = userService.locationSaveProcess(type, answer, lat, lng);
        //정상일경우 상태값 & 결과메시지 변경
        if (location_check) jsonResultDTO.setSuccess();

        //json 리턴
        return jsonResultDTO.finalResult();
    }

    @GetMapping("photo")
    @PostMapping
    public String photo(HttpServletRequest request, @RequestBody Map<String, String> data) {
        String type = data.get("type");
        String answer = data.get("answer");
        String lat = data.get("lat");
        String lng = data.get("lng");

            JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
            boolean locationRegister_check  = userService.locationRegisterProcess(data.get("type"), data.get("answer"), data.get("lat"), data.get("lng"), request);

            if (locationRegister_check) {
                jsonResultDTO.setSuccess();
            }
            return jsonResultDTO.finalResult(); // 또는 다른 적절한 응답값
        }
    }




