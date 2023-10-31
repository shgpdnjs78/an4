<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <jsp:include page="../template/head.jsp">
        <jsp:param value="인덱스페이지" name="title"/>
    </jsp:include>
    <jsp:include page="../lib_template/head.css.jsp"/>
    <jsp:include page="../lib_template/head.js.jsp"/>
    <link rel="stylesheet" href="/css/member/login.css">
    <script src="/js/member/login.js"></script>
</head>
<body>
    <main>
        <jsp:include page="../template/header.jsp"/>
        <div class="container">
            <jsp:include page="member/login.jsp"/>
        </div>
    </main>
</body>
</html>