<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <jsp:include page="../template/head.jsp">
        <jsp:param value="인덱스페이지" name="title"/>
    </jsp:include>
    <jsp:include page="../lib_template/head.css.jsp"/>
    <jsp:include page="../lib_template/head.js.jsp"/>

    <link rel="stylesheet" href="/css/mypage/singlemarker.css">
    <%--컨트롤러에서 url 매핑을 변경할시 api 주소도 함께 변경해주어야 한--%>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOlK6MrRu11XmdhsLZ16_8oW3Mus8n44s&callback=initMap" async defer></script>
</head>
<body>
<main>
    <jsp:include page="../template/header.jsp"/>
    <div class="container">
        <jsp:include page="mypage/singlemarker.jsp"/>
    </div>
</main>
<script src="/js/mypage/singlemarker.js"></script>

</body>\
</html>