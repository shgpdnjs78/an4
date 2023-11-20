<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Shop Homepage - Start Bootstrap Template</title>

    <!-- Bootstrap core CSS -->
<%--    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">--%>

    <!-- Custom styles for this template -->
<%--    <link href="css/shop-homepage.css" rel="stylesheet">--%>

<%--    <script src="vendor/jquery/jquery.min.js"></script>--%>
<%--    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>--%>

</head>

<body>

<!-- Page Content -->
<div class="container">

    <div class="row">

        <div class="col-lg-3">

            <h1 class="my-4">마이페이지</h1>
            <div class="list-group">
                <a href="mypage" class="list-group-item">나의 정보</a>
                <a href="password" class="list-group-item">비밀번호 변경</a>
                <a href="mymarker" class="list-group-item">등록한 마커</a>
                <a href="cancel" class="list-group-item">회원 탈퇴</a>
                <a href="cs" class="list-group-item">1:1 상담 문의</a>

            </div>

        </div>
        <!-- /.col-lg-3 -->

        <div class="p-5">
            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-2">회원 정보 수정</h1>
                <p class="mb-4">계정을 탈퇴하는 이유를 체크해 주세요</p>

                <section class="about">

                    <header class="name">
                        <%--  이름 이메일 비번--%>
                        <div class="contacts">

                                <!-- 이메일 입력 폼 -->

                            <div class="box" style="background: #BDBDBD;">
                                <img id="profileImage" class="profile" src="/images/tistory.JPG">
                            </div>
                            <form id="profileImageForm" class="profileForm" enctype="multipart/form-data" onsubmit="uploadImage(event)">
                                <input type="file" name="profileImage" class="profileForm1" accept="image/*">
                                <button type="submit">Upload</button>


                            <div class="changeEmail text-center">
                                <p id="email">📧${sessionScope.user.email}</p>
                                <button class="list-group-item" onclick="editEmail()">이메일 변경하기</button>
<%--                                <p id="name">📧${sessionScope.user.name}</p>--%>
<%--                                <button class="list-group-item" onclick="editName()">이름 변경하기</button>--%>
                            </div>
                            </form>
                                <section class="about">
                                    <!-- 이름 -->
                                    <header class="name">
                                        <div class="contacts">
                                        <%--                <p id="phoneNumber">📞+(82)10-2385-6794</p>--%>
                                          </div>
                                        <div id="emailForm" style="display: none;">
                                            <input type="email" id="newEmail">
                                            <button onclick="updateEmail() && alert('변경 되었습니다')" >변경</button>

                                        </div>
                                        <div id="nameForm" style="display: none;">
                                            <input type="name" id="newName">
                                            <button onclick="updateName() && alert('변경 되었습니다')" >변경</button>

                                        </div>

                                    </header>
                                    </section>
<%--                                </article>--%>


                            <%--        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">--%>
                            <%--          <span class="carousel-control-prev-icon" aria-hidden="true"></span>--%>
                            <%--          <span class="sr-only">Previous</span>--%>
                            <%--        </a>--%>
                            <%--        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">--%>
                            <%--          <span class="carousel-control-next-icon" aria-hidden="true"></span>--%>
                            <%--          <span class="sr-only">Next</span>--%>
                            <%--        </a>--%>
                        </div>


                        <!-- /.row -->

            </div>
            <!-- /.col-lg-9 -->

        </div>
        <!-- /.row -->
        <a href="map" class="back-button" id="go-back-button"></a>

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <%--<footer class="py-5 bg-dark">--%>
    <%--  <div class="container">--%>
    <%--    <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>--%>
    <%--  </div>--%>
    <%--  <!-- /.container -->--%>
    <%--</footer>--%>


</body>

</html>