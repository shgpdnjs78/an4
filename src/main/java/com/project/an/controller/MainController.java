package com.project.an.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@MapperScan(value = "com.project.an.mapper",sqlSessionFactoryRef = "sqlSessionFactoryBean")
@RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST})
public class MainController {
    @GetMapping("login")@PostMapping
    public String root() {

        return "/sample";
    }
    @GetMapping("map")@PostMapping
    public String root1() {

        return "/map";
    }
    @GetMapping("photo")@PostMapping
    public String root2() {

        return "/photo";
    }
    @GetMapping("mypage")@PostMapping
    public String root3() {

        return "/mypage";
    }
    @GetMapping("password")@PostMapping
    public String root4() {

        return "/password";
    }
    @GetMapping("mymarker")@PostMapping
    public String root5() {

        return "/mymarker";
    }
    @GetMapping("cancel")@PostMapping
    public String root6() {

        return "/cancel";
    }
    @GetMapping("mymarkers")@PostMapping
    public String root7() {

        return "/mymarkers";
    }
    @GetMapping("singlemarker")@PostMapping
    public String root8() {
//            @RequestParam("위치정보.coordinateX") String coordinateX, @RequestParam("coordinateY") String coordinateY,
//            Model model


//        model.addAttribute("coordinateX",coordinateX);
//        model.addAttribute("coordinateY",coordinateY);
//        return "/singlemarker?id="+coordinateX+"pass="+coordinateY;
        return "/singlemarker";

    }
    @GetMapping("endEvent")@PostMapping
    public String root9() {

        return "/endEvent";
    }
    @GetMapping("cs")@PostMapping
    public String root10() {

        return "/cs";
    }
    @GetMapping("r11")@PostMapping
    public String root11() {

        return "/main11";
    }
}
