<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


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

        <div class="col-lg-9">

            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                <ol class="carousel-indicators">
                    <%--          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>--%>
                    <%--          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>--%>
                    <%--          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>--%>
                </ol>
                    <%--          <div class="carousel-item">--%>
                    <%--            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">--%>
                    <%--          </div>--%>
                    <%--          <div class="carousel-item">--%>
                    <%--            <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">--%>
                    <%--          </div>--%>
                </div>
                <%--        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">--%>
                <%--          <span class="carousel-control-prev-icon" aria-hidden="true"></span>--%>
                <%--          <span class="sr-only">Previous</span>--%>
                <%--        </a>--%>
                <%--        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">--%>
                <%--          <span class="carousel-control-next-icon" aria-hidden="true"></span>--%>
                <%--          <span class="sr-only">Next</span>--%>
                <%--        </a>--%>
            </div>

            <div class="row">

                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <a href="http://localhost/singlemarker"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">Post-One</a>
                            </h4>
                            <h5>food</h5>
                            <p class="card-text">enjoy the food</p>
                        </div>
                        <p id="currentTime" onclick="displayCurrentTime()">Click to see the current time</p>
                        <p>마커보기</p>
                        <p>삭제 여부 : o</p>
                    </div>
                    <a href="mymarker" class="back-button" id="go-back-button">뒤로가기</a>

                </div>
            </div>
    </div>
