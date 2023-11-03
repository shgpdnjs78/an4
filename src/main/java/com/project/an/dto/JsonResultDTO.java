package com.project.an.dto;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.json.simple.JSONObject;

import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JsonResultDTO {

    private boolean status;
    private String msg;
    private Map<String,Object> map;

    public Map<String,Object> finall_map(){
        if(map == null)map = new HashMap<>();
        map.put("status",status);
        map.put("msg",msg);
        return map;
    }

    public void setMapObject(String str,Object object){
        if(map == null)map = new HashMap<>();
        map.put(str,object);
    }
    public void setSuccess() {
        this.msg = "Process Success!";
        this.status = true;
    }
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
