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
                <a href="cs" class="list-group-item">문의사항</a>
            </div>

        </div>

        <div class="col-lg-6">
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">문의사항</h1>
                    <p class="mb-4">어떤 점이 불편하셨나요? 고객님의 의견을 반영하여 더 좋은 모습으로 찾아 뵙기 위해 노력하겠습니다.</p>
                    <%-- 어떤 점이 불편하셨나요? 고객님의 의견을 반영하여 더 좋은 모습으로 찾아 뵙기 위해 노력하겠습니다.--%>
                </div>

                <div class="text-center">
<%--                    <h1 class="h4 text-gray-900 mb-2">Inter ID & PASSWORD</h1>--%>
                    <form class="user">
                        <div class="form-group">
                            <input type="title" class="form-control form-control-user"
                                   id="exampleInputpwd" aria-describedby="pwdHelp"
                                   placeholder="제목을 적어주세요">
                            <input type="content" class="form-control form-control-user"
                                   id="exampleInputpwd1" aria-describedby="pwdHelp"
                                   placeholder="내용을 적어주세요">
                        </div>
                        <a href="login" class="btn btn-primary btn-user btn-block">
                            보내기
                        </a>
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