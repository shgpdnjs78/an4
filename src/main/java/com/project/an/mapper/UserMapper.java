package com.project.an.mapper;

import com.project.an.vo.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    UserInfo selectUserInfo(@Param("id") String id,@Param("pw") String pw);
}
