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
        <a href="cs" class="list-group-item">1:1 상담 문의</a>
      </div>

    </div>
    <!-- /.col-lg-3 -->

    <div class="c-tabs c-tabs--type1">
      <div class="c-tabs__list">
        <a class="c-tabs__button is-active" id="tab1" href="mymarker" aria-selected="true" title="진행중인 이벤트">진행중인 이벤트</a>
        <a class="c-tabs__button" id="tab2" href="endEvent" aria-selected="false">종료된 이벤트</a>
      </div>
    </div>


    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="http://localhost/mymarkers">음식</a>
          </h4>
          <p class="card-text">임당역 5번 출구 앞에 붕어빵 가게 왔어요</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="http://localhost/mymarkers">사고</a>
          </h4>
          <p class="card-text">영대 오거리에 경미한 사고가 발생해 길이 조금 막힙니다.</p>
        </div>
      </div>
    </div>

    <!-- 다음 카드들(Post-Three부터 Post-Six까지)도 동일한 구조로 추가하면 됩니다 -->

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">공연</a>
          </h4>
          <p class="card-text">영남대 정문 대구은행 앞에 버스킹 열였습니다. 구경가세요!!</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">기타</a>
          </h4>>
          <p class="card-text">예정에 없던 비가 옵니다. 외출 시 우산 챙기세요</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">

      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">음식</a>
          </h4>
          <p class="card-text">기숙사에 목살아저씨 오셨습니다.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">공연</a>
          </h4>
          <p class="card-text">경산 대추 축제가 열였습니다 많이 구경오세요!</p>
        </div>
      </div>
    </div>

    <!-- /.row -->

    <!-- /.col-lg-9 -->

  </div>

  <!-- /.row -->
  <a href="map" class="back-button" id="go-back-button"></a>

</div>


</body>

</html>
