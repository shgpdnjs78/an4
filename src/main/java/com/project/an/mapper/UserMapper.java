package com.project.an.mapper;

import com.project.an.vo.MapInfo;
import com.project.an.vo.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper //MyBatis에서 Mapper로 인식해 SQL 매핑
// MyBatis는 메서드의 쿼리 정보를 구별된 xml파일 관리 , Mapper , Repository에서 어노테이션 관리하는 것
public interface UserMapper {
//    @Param()  : 다수의 데이터를 관리할 때 사용, 다수의 변수들을 전달할 때 전달되는 변수들에 붙여 변수 구분
    // 로그인
    UserInfo selectUserInfo(@Param("id") String id,@Param("pw") String pw);
    //id 중복 확인
    UserInfo checkDuplicateUser(@Param("id") String id);
    //회원가입
    int insertUser(@Param("id") String id, @Param("pw") String pw, @Param("name") String name);

    //위치 정보 받기
    int location (@Param("type") String type, @Param("answer") String answer, @Param("lat") String lat, @Param("lng") String lng, @Param("id") String email);
    //중복 확인
    MapInfo checkUser(@Param("answer") String answer);

    //위치 정보 사용
    MapInfo locationSaveProcess(@Param("type") String type, @Param("answer") String answer, @Param("lat") String lat, @Param("lng") String lng);

}


