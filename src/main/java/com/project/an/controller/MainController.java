package com.project.an.controller;

import com.project.an.vo.UserInfo;
import jakarta.servlet.http.HttpSession;
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
    public String mainMap(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/map";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }
    //marker register photo form
    @GetMapping("photo")@PostMapping
    public String markerRegisterPhoto(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/map";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }
    //mypage introduce form
    @GetMapping("mypage")@PostMapping
    public String mypageIntroduce(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/mypage";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }
    //mypage find password
    @GetMapping("password")@PostMapping
    public String findPassword(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/password";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }
    //my page register marker form
    @GetMapping("mymarker")@PostMapping
    public String registerMarker(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/mymarker";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }
    // mypage member cancel form
    @GetMapping("cancel")@PostMapping
    public String memberCancel(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/cancel";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }
    //mypage show register marker form
    @GetMapping("mymarkers")@PostMapping
    public String showingRegisterMarker(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/mymarkers";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    } //showingRegisterMarker

    @GetMapping("singlemarker")@PostMapping
    public String showingRegisterMarkerMap(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/singlemarker";
        if(user == null){
            url = "redirect:/login";
        }
        return url;

    }
    // show end register marker form
    @GetMapping("endEvent")@PostMapping
    public String showingEndRegisterMarker() {

        return "/endEvent";
    }
    // mypage sned cs form
    @GetMapping("cs")@PostMapping
    public String sendCs(HttpSession session) {
        UserInfo user = (UserInfo) session.getAttribute("user");
        String url = "/cs";
        if(user == null){
            url = "redirect:/login";
        }
        return url;
    }

}