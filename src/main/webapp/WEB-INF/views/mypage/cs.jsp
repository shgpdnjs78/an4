<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Forgot Password</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

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

        <div class="col-lg-6">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4" id="h4">1:1 상담 문의</h1>
                    <p class="h5" id="h5">어떤 점이 불편하셨나요?
                        고객님의 의견을 반영하여 더 좋은 모습으로 찾아 뵙기 위해 노력하겠습니다.</p>
                    <%-- 어떤 점이 불편하셨나요? 고객님의 의견을 반영하여 더 좋은 모습으로 찾아 뵙기 위해 노력하겠습니다.--%>
                </div>
                <div class="info-wrap">
                    <p class="info-wrap">
                        Yogomogo 서비스에 대해 궁금한 사항을 문의해 주시면 답변 드리도록 하겠습니다.<br>주말 및 휴일에는 답변 처리가 다소 지연될 수 있습니다.
                    </p>
                    <p class="info-wrap1">
                        회원정보 변경 및 해지 등은 홈페이지 상담이 불가하며 모든 답변은 메일로 발송 드리겠습니다.
                    </p>
                </div>
                <h3 class="c-group--head" id="selInquiryHead">문의하기</h3>

                <div class="text-center">
                    <form class="user">
                        <div class="form-group">
                            <input type="title" class="form-control1"
                                   id="title" aria-describedby="Help"
                                   placeholder="제목을 적어주세요">
                            <input type="content" class="form-control2"
                                   id="content" aria-describedby="Help"
                                   placeholder="내용을 적어주세요">
                            <button class="c-button c-button--lg c-button--primary c-button--w460" id="saveBtn" href="login" onclick="return validateForm() && alert('문의 사항이 접수 되었습니다. 48시간 내로 메일로 답변 드리겠습니다.')" disabled="">문의 등록하기</button>
                        </div>
<%--                        <a href="login" class="c-button c-button--lg c-button--primary c-button--w460" id="saveBtn" onclick="return validateForm() && alert('문의 사항이 접수 되었습니다. 48시간 내로 메일로 답변 드리겠습니다.')">--%>
<%--                            문의 등록하기 </a>--%>
                        <a href="map" class="back-button" id="go-back-button"  >뒤로가기</a>

                    </form>

                    <hr>
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

</body>

</html>