<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <jsp:include page="template/header.jsp">
    <jsp:param value="인덱스페이지7" name="title"/>
  </jsp:include>

  <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }

    .b-example-divider {
      height: 3rem;
      background-color: rgba(0, 0, 0, .1);
      border: solid rgba(0, 0, 0, .15);
      border-width: 1px 0;
      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
      flex-shrink: 0;
      width: 1.5rem;
      height: 100vh;
    }

    .bi {
      vertical-align: -.125em;
      fill: currentColor;
    }

    .nav-scroller {
      position: relative;
      z-index: 2;
      height: 2.75rem;
      overflow-y: hidden;
    }

    .nav-scroller .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }

    .b-example-divider {
      height: 3rem;
      background-color: rgba(0, 0, 0, .1);
      border: solid rgba(0, 0, 0, .15);
      border-width: 1px 0;
      box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .b-example-vr {
      flex-shrink: 0;
      width: 1.5rem;
      height: 100vh;
    }

    .bi {
      vertical-align: -.125em;
      fill: currentColor;
    }

    .nav-scroller {
      position: relative;
      z-index: 2;
      height: 2.75rem;
      overflow-y: hidden;
    }

    .nav-scroller .nav {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 1rem;
      margin-top: -1px;
      overflow-x: auto;
      text-align: center;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
    }
    @media (max-width: 1000px) {
      .board_wrap {
        width: 100%;
        min-width: 320px;
        padding: 0 30px;
        box-sizing: border-box;
      }

      .board_list .num,
      .board_list .writer,
      .board_list .count {
        display: none;
      }

      .board_list .date {
        width: 40%;
      }

      .board_list .title {
        text-indent: 10px;
      }

      .board_list .top .title {
        text-indent: 0;
      }

      .board_page a {
        width: 26px;
        height: 26px;
      }

      .board_page a.bt {
        padding-top: 7px;
      }

      .board_page a.num {
        padding-top: 6px;
      }

      .board_view .info dl {
        width: 50%;
        padding: 0;
      }

      .board_view .info dl:nth-child(-n+2) {
        margin-bottom: 5px;
      }

      .board_view .info dl::before {
        display: none;
      }

      .board_view .info dl dt,
      .board_view .info dl dd {
        font-size: 1.2rem;
      }

      .board_write .info dl {
        width: 49%;
      }

      .board_write .info dl:first-child {
        margin-right: 2%;
      }

      .board_write .title dt,
      .board_write .info dt {
        display: none;
      }

      .board_write .title dd,
      .board_write .info dd {
        width: 100%;
      }

      .board_write .title input[type="text"],
      .board_write .info input[type="text"],
      .board_write .info input[type="password"] {
        width: 100%;
      }
    }
    * {
      margin: 0;
      padding: 0;
    }

    html {
      font-size: 10px;
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .board_wrap {
      width: 1000px;
      margin: 100px auto;
    }

    .board_title {
      margin-bottom: 30px;
    }

    .board_title strong {
      font-size: 3rem;
    }

    .board_title p {
      margin-top: 5px;
      font-size: 1.4rem;
    }

    .bt_wrap {
      margin-top: 30px;
      text-align: center;
      font-size: 0;
    }

    .bt_wrap a {
      display: inline-block;
      min-width: 80px;
      margin-left: 10px;
      padding: 10px;
      border: 1px solid #000;
      border-radius: 2px;
      font-size: 1.4rem;
    }

    .bt_wrap a:first-child {
      margin-left: 0;
    }

    .bt_wrap a.on {
      background: #000;
      color: #fff;
    }

    .board_list {
      width: 100%;
      border-top: 2px solid #000;
    }

    .board_list > div {
      border-bottom: 1px solid #ddd;
      font-size: 0;
    }

    .board_list > div.top {
      border-bottom: 1px solid #999;
    }

    .board_list > div:last-child {
      border-bottom: 1px solid #000;
    }

    .board_list > div > div {
      display: inline-block;
      padding: 15px 0;
      text-align: center;
      font-size: 1.4rem;
    }

    .board_list > div.top > div {
      font-weight: 600;
    }

    .board_list .num {
      width: 10%;
    }

    .board_list .title {
      width: 60%;
      text-align: left;
    }

    .board_list .top .title {
      text-align: center;
    }

    .board_list .writer {
      width: 10%;
    }

    .board_list .date {
      width: 10%;
    }

    .board_list .count {
      width: 10%;
    }

    .board_page {
      margin-top: 30px;
      text-align: center;
      font-size: 0;
    }

    .board_page a {
      display: inline-block;
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      vertical-align: middle;
      border: 1px solid #ddd;
      border-left: 0;
      line-height: 100%;
    }

    .board_page a.bt {
      padding-top: 10px;
      font-size: 1.2rem;
      letter-spacing: -1px;
    }

    .board_page a.num {
      padding-top: 9px;
      font-size: 1.4rem;
    }

    .board_page a.num.on {
      border-color: #000;
      background: #000;
      color: #fff;
    }

    .board_page a:first-child {
      border-left: 1px solid #ddd;
    }

    .board_view {
      width: 100%;
      border-top: 2px solid #000;
    }

    .board_view .title {
      padding: 20px 15px;
      border-bottom: 1px dashed #ddd;
      font-size: 2rem;
    }

    .board_view .info {
      padding: 15px;
      border-bottom: 1px solid #999;
      font-size: 0;
    }

    .board_view .info dl {
      position: relative;
      display: inline-block;
      padding: 0 20px;
    }

    .board_view .info dl:first-child {
      padding-left: 0;
    }

    .board_view .info dl::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 0;
      display: block;
      width: 1px;
      height: 13px;
      background: #ddd;
    }

    .board_view .info dl:first-child::before {
      display: none;
    }

    .board_view .info dl dt,
    .board_view .info dl dd {
      display: inline-block;
      font-size: 1.4rem;
    }

    .board_view .info dl dt {

    }

    .board_view .info dl dd {
      margin-left: 10px;
      color: #777;
    }

    .board_view .cont {
      padding: 15px;
      border-bottom: 1px solid #000;
      line-height: 160%;
      font-size: 1.4rem;
    }

    .board_write {
      border-top: 2px solid #000;
    }

    .board_write .title,
    .board_write .info {
      padding: 15px;
    }

    .board_write .info {
      border-top: 1px dashed #ddd;
      border-bottom: 1px solid #000;
      font-size: 0;
    }

    .board_write .title dl {
      font-size: 0;
    }

    .board_write .info dl {
      display: inline-block;
      width: 50%;
      vertical-align: middle;
    }

    .board_write .title dt,
    .board_write .title dd,
    .board_write .info dt,
    .board_write .info dd {
      display: inline-block;
      vertical-align: middle;
      font-size: 1.4rem;
    }

    .board_write .title dt,
    .board_write .info dt {
      width: 100px;
    }

    .board_write .title dd {
      width: calc(100% - 100px);
    }

    .board_write .title input[type="text"],
    .board_write .info input[type="text"],
    .board_write .info input[type="password"] {
      padding: 10px;
      box-sizing: border-box;
    }

    .board_write .title input[type="text"] {
      width: 80%;
    }

    .board_write .cont {
      border-bottom: 1px solid #000;
    }

    .board_write .cont textarea {
      display: block;
      width: 100%;
      height: 300px;
      padding: 15px;
      box-sizing: border-box;
      border: 0;
      resize: vertical;
    }
  </style>
  <script>

  </script>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마이페이지</title>
    <link rel="stylesheet" href="css/css.css">
  </head>
  <body>
  <div class="board_wrap">
    <div class="board_title">
      <strong>마이페이지</strong>
    </div>
    <div class="board_write_wrap">
      <div class="board_write">
        <div class="title">
          <dl>
            <dt>제목</dt>
            <dd><input type="text" placeholder="제목 입력" value="글 제목이 들어갑니다"></dd>
          </dl>
        </div>
        <div class="info">
          <dl>
            <dt>글쓴이</dt>
            <dd><input type="text" placeholder="글쓴이 입력" value="김이름"></dd>
          </dl>
          <dl>
            <dt>비밀번호</dt>
            <dd><input type="password" placeholder="비밀번호 입력" value="1234"></dd>
          </dl>
        </div>
        <div class="cont">
                    <textarea placeholder="내용 입력">
글 내용이 들어갑니다.
글 내용이 들어갑니다.
글 내용이 들어갑니다.
글 내용이 들어갑니다.
글 내용이 들어갑니다.
글 내용이 들어갑니다.
글 내용이 들어갑니다.
글 내용이 들어갑니다.</textarea>
        </div>
      </div>
      <div class="bt_wrap">
        <a href="r6" class="on">수정</a>
        <a href="r6">취소</a>
      </div>
    </div>
  </div>
  </body>
  </html>

</head>
<body>
<main>
  <jsp:include page="../template/header.jsp"/>
  <main>
    <div class="container">


    </div>

  </main>

</main>
</body>
</html>