<%--
  Created by IntelliJ IDEA.
  User: jssoft
  Date: 2023/10/06
  Time: 11:02 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<a href="https://front.codes/" class="logo" target="_blank">
</a>

<div class="section">
    <div class="container">
        <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 class="mb-0 pb-3"><span>로그인 </span><span>회원가입</span></h6>
                    <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                    <label for="reg-log"></label>
                    <div class="card-3d-wrap mx-auto">
                        <div class="card-3d-wrapper">
                            <div class="card-front">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">로그인</h4>
                                        <div class="form-group">
                                            <input type="email" id="email" class="form-style" placeholder="이메일" autocomplete="off">
                                            <i class="input-icon uil uil-at"></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="password" id="password" class="form-style" placeholder="비밀번호" autocomplete="off">
                                            <i class="input-icon uil uil-lock-alt"></i>
                                        </div>
<%--                                                    <a href="login" class="btn btn-primary btn-user btn-block" onclick="return validateForm() && validateWithdrawal() && alert('탈퇴 되었습니다');">
            --%>
                                        <a href="map" class="btn mt-4" onclick="return validateForm() && alert('로그인 성공')">로그인</a>
<%--                                        <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>--%>
                                    </div>
                                </div>
                            </div>
                            <div class="card-back">
                                <div class="center-wrap">
                                    <div class="section text-center">
                                        <h4 class="mb-4 pb-3">회원가입</h4>
                                        <div class="form-group">
                                            <input type="name" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off">
                                            <i class="input-icon uil uil-user"></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off">
                                            <i class="input-icon uil uil-at"></i>
                                        </div>
                                        <div class="form-group mt-2">
                                            <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off">
                                            <i class="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <a href="login" class="btn mt-4"  onclick="return validateWithdrawal() && alert('회원 가입이 되었습니다')">회원가입</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>