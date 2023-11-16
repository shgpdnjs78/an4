<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<div id="button-container">
    <div id="map" style="height: 700px;"></div>
    <%--    <button id="refresh-button" class="custom-button">새로고침</button>--%>
    <%--    <a href="http://localhost/mypage" button id="my-page-button" class="custom1-button">마이페이지</button> </a>--%>
    <%--    <button id="register-button" class="custom2-button">등록하기</button>--%>
    <button id="food-button" class="custom3-button">음식</button>
    <button id="concert-button" class="custom4-button">공연</button>
    <button id="accident-button" class="custom5-button">사고</button>
    <button id="etc-button" class="custom6-button">기타</button>
    <button id="all-button" class="custom77-button">모두보기</button>
    <%--    <a href="http://localhost/post" button id="post-button" class="custom7-button">게시판</button> </a>--%>
    <%--            <a href="http://localhost/r4" class="custom1-button">마이페이지</a>--%>
    <%--            <button id="cam-button" class="custom7-button" onclick="window.location.href='http://localhost/r3'">사진찍기</button>--%>

    <%--     <div id="infoWindow4" style="display: none;">--%>
    <%--         <input type="email" id="FnewEmail">--%>
    <%--             <button onClick="updateEmail()">Confirm</button>--%>
    <%--     </div>--%>
    <button class="tnwjd-button" id="editButton" onclick="alert('수정 되었습니다')">수정하기</button>
    <button class="tnwjd-button1" id="editButton1" onclick="alert('수정 되었습니다')">수정하기</button>
    <button class="tnwjd-button2" id="editButton2" onclick="alert('수정 되었습니다')">수정하기</button>
    <button class="tnwjd-button3" id="editButton3" onclick="alert('수정 되었습니다')">수정하기</button>
    <button class="delete-button3" id="deleteButton" onclick="alert('삭제 되었습니다')">삭제하기</button>
    <a href="login" class="back-button" id="go-back-button">
        <span class="back-icon"></span></a>
    <!-- HTML 파일에 js-cookie 라이브러리를 추가 -->
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>

</div>