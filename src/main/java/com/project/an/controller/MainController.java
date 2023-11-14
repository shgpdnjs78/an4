package com.project.an.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@MapperScan(value = "com.project.an.mapper",sqlSessionFactoryRef = "sqlSessionFactoryBean")
@RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST})
public class MainController {
    @Autowired
    //   private final MemberService memberService;
//같이 묶어도 되는것
// showingRegisterMarker , showingRegisterMarkerMap , endEvent
    // login form
    @GetMapping("login")@PostMapping
    public String login() {

        return "/sample";
    }
    // main map form
    @GetMapping("map")@PostMapping
    public String mainMap() {

        return "/map";
    }
    //marker register photo form
    @GetMapping("photo")@PostMapping
    public String markerRegisterPhoto() {

        return "/photo";
    }
    //mypage introduce form
    @GetMapping("mypage")@PostMapping
    public String mypageIntroduce() {

        return "/mypage";
    }
    //mypage find password
    @GetMapping("password")@PostMapping
    public String findPassword() {

        return "/password";
    }
    //my page register marker form
    @GetMapping("mymarker")@PostMapping
    public String registerMarker() {

        return "/mymarker";
    }
    // mypage member cancel form
    @GetMapping("cancel")@PostMapping
    public String memberCancel() {

        return "/cancel";
    }
    //mypage show register marker form
    @GetMapping("mymarkers")@PostMapping
    public String showingRegisterMarker() {

        return "/mymarkers";
    } //showingRegisterMarker

    @GetMapping("singlemarker")@PostMapping
    public String showingRegisterMarkerMap() {
//            @RequestParam("위치정보.coordinateX") String coordinateX, @RequestParam("coordinateY") String coordinateY,
//            Model model


//        model.addAttribute("coordinateX",coordinateX);
//        model.addAttribute("coordinateY",coordinateY);
//        return "/singlemarker?id="+coordinateX+"pass="+coordinateY;
        return "/singlemarker";

    }
    // show end register marker form
    @GetMapping("endEvent")@PostMapping
    public String root9() {

        return "/endEvent";
    }
    // mypage sned cs form
    @GetMapping("cs")@PostMapping
    public String sendCs() {

        return "/cs";
    }
    @GetMapping("rptlvks")@PostMapping
    public String root11() {

        return "/rptlvks";
    }
}