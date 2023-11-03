package com.project.an.controller;

import com.project.an.dto.JsonResultDTO;
import com.project.an.svc.UserService;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@MapperScan(value = "com.project.an.mapper",sqlSessionFactoryRef = "sqlSessionFactoryBean")
@RequestMapping(value = "/user", method = {RequestMethod.GET, RequestMethod.POST})
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("login")@PostMapping
    public String login(@RequestParam("id")String id,@RequestParam("pw")String pw){

        JsonResultDTO jsonResultDTO = new JsonResultDTO(false, "process fail", null);
        boolean login_check = userService.loginProcess(id,pw);
        if(login_check)jsonResultDTO.setSuccess();
        return jsonResultDTO.finalResult();
    }
}
