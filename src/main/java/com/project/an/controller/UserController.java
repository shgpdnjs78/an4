package com.project.an.controller;

import com.project.an.dto.JsonResultDTO;
import com.project.an.svc.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController //@Controller에 @ResponseBody가 추가된 것 , Json 형태로 객체 데이터를 반환
@MapperScan(value = "com.project.an.mapper",sqlSessionFactoryRef = "sqlSessionFactoryBean") //매퍼를 하나씩 등록하는게 아닌 페키지 경로를 지정하여 이하 위치에있는 인터페이스들은 전부 맵퍼로 사용
@RequestMapping(value = "/user", method = {RequestMethod.GET, RequestMethod.POST}) //들어온 요청을 특정 메서드와 매핑하기 위해 사용
public class UserController {
    @Autowired //의존관계 주입시 사용하는 어노테이션(Annotation)이며, 의존 객체의 타입에 해당하는 빈(Bean)을 찾아 주입
    UserService userService;
    private String type;
    private String answer;
    private String lat;
    private String lng;

    @GetMapping("login")@PostMapping
    public String login(HttpServletRequest request, @RequestParam("id")String id, @RequestParam("pw")String pw){
        //HttpServletRequest request : 웹브라우저 사용자인 클라이언트로부터 서버로 요청이 들어오면 서버에서는 HttpServletRequest를 생성하며, 요청정보에 있는 패스로 매핑된 서블릿에게 전달
        //@RequestParam : 어노테이션의 괄호 안의 경우 전달인자 이름(실제 값을 표시)
        //json 리턴을 위한 객체
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        //로그인 처리부분(로그인 정보가 일치하는 계정의 존재유무 파악)
        boolean login_check = userService.loginProcess(id,pw,request);
        //정상일 경우 상태값 & 결과메시지 변경
        if(login_check)jsonResultDTO.setSuccess();

        //json 리턴
        return jsonResultDTO.finalResult();
    }

    @GetMapping("register")@PostMapping
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
        // 회원가입 처리
        boolean register_check = userService.registerProcess(id, name, pw);
        // 정상일 경우 상태값 및 결과 메시지
        if (register_check) {
            jsonResultDTO.setSuccess();
        }
        // JSON 리턴
        return jsonResultDTO;
    }
    //지도 마커 정보 요청
    @GetMapping("map")@PostMapping
    public JsonResultDTO map(HttpServletRequest request, @RequestParam("type") String type, @RequestParam("answer") String answer,
                                  @RequestParam("lat") String lat, @RequestParam("lng") String lng) {
        this.type = type;
        this.answer = answer;
        this.lat = lat;
        this.lng = lng;
        //json 리턴을 위한 객체
        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "위치정보 없음", null);

        boolean location_check = userService.locationProcess(type,answer,lat,lng, request);
        System.out.println(location_check);
        if (location_check) {
            jsonResultDTO.setSuccess();
        }

        return jsonResultDTO;
    }
    @GetMapping("mapsave")@PostMapping
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
        boolean location_check = userService.locationSaveProcess(type,answer,lat,lng);
        //정상일 경우 상태값 & 결과메시지 변경
        if(location_check)jsonResultDTO.setSuccess();

        //json 리턴
        return jsonResultDTO.finalResult();
    }
}
