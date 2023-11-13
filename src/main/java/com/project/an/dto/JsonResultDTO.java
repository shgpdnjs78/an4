package com.project.an.dto;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.an.vo.UserInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.json.simple.JSONObject;

import java.util.HashMap;
import java.util.Map;

@Data //기본 메서드 자동 생성
@AllArgsConstructor //모든 필드를 매개변수로 받는 생성자 생성
@NoArgsConstructor //매개변수가 없는 기본 생성자를 생성 , 매개변수 없이 객체를 생성할 수 있는 생성자가 자동으로 생성
public class JsonResultDTO {

    private boolean status;
    private String msg;
    private Map<String,Object> map;

    //결과 생성
    public Map<String,Object> finall_map(){
        if(map == null)map = new HashMap<>();
        map.put("status",status);
        map.put("msg",msg);
        return map;
    }
    //객체 설정
    public void setMapObject(String str,Object object){
        if(map == null)map = new HashMap<>();
        map.put(str,object);
    }
    //성공
    public void setSuccess() {
        this.msg = "Process Success!";
        this.status = true;
    }
    // JSON 결과
    public String finalResult(){
        if(map == null)finall_map();
        JSONObject data = new JSONObject(map);
        ObjectMapper om = new ObjectMapper();
        String json = "{\"status\":"+status+",\"msg\":"+msg+"}";
        try {
            json = om.writeValueAsString(data);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return json;
    }


        }

