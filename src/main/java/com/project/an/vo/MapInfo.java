package com.project.an.vo;

import lombok.Data;

@Data
public class MapInfo {
    private String type;
    private String answer;
    private String log;
    private String lat;
    public String getName() {
        // name이 null인 경우 빈 문자열 반환
        return (type != null) ? type : "";
    }
}
