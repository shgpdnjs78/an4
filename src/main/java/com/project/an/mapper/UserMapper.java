package com.project.an.mapper;

import com.project.an.vo.MapInfo;
import com.project.an.vo.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    UserInfo selectUserInfo(@Param("id") String id,@Param("pw") String pw);
    UserInfo checkDuplicateUser(@Param("id") String id);
    int insertUser(@Param("id") String id, @Param("pw") String pw, @Param("name") String name);

    int location (@Param("type") String type, @Param("answer") String answer, @Param("lat") String lat, @Param("lng") String lng, @Param("id") String email);
    MapInfo checkUser(@Param("answer") String answer);

    MapInfo locationSaveProcess(@Param("type") String type, @Param("answer") String answer, @Param("lat") String lat, @Param("lng") String lng);

}


