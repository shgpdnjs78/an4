package com.project.an.vo;

import lombok.Data;

@Data
public class UserInfo {
    private String email;
    private String name;
    private String pw;
    public String getName() {
        // name이 null인 경우 빈 문자열 반환
        return (name != null) ? name : "";
    }
}
