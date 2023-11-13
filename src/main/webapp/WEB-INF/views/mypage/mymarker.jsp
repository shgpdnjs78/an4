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
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/shop-homepage.css" rel="stylesheet">

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
        <a href="cs" class="list-group-item">1:1 상당 문의</a>
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
        <div class="carousel-inner" role="listbox">

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

      <div class="button-container">
        <a href="http://localhost/mymarker" button class="ing" onclick="ingEvent()">진행중인 이벤트</button> </a>
        <a href="http://localhost/endEvent" button class="end" onclick="endEvent()">종료된 이벤트</button> </a>
<%--        <a href="http://localhost/r8" button id="post-button" class="custom7-button">게시판</button> </a>--%>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="http://localhost/mymarkers">Post-One</a>
            </h4>
            <h5>food</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="http://localhost/mymarkers">Post-Two</a>
            </h4>
            <h5>food</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <!-- 다음 카드들(Post-Three부터 Post-Six까지)도 동일한 구조로 추가하면 됩니다 -->


      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Post-Three</a>
            </h4>
            <h5>food</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Post-Four</a>
            </h4>
            <h5>food</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Post-Five</a>
            </h4>
            <h5>food</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Post-Six</a>
            </h4>
            <h5>food</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>

    </div>
    <!-- /.row -->

  </div>
  <!-- /.col-lg-9 -->

</div>
<!-- /.row -->
<a href="map" class="back-button" id="go-back-button">뒤로가기</a>

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
