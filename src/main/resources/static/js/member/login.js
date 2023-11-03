function redirectToR2() {
    window.location.href = "map";
}
function validateForm() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("아이디 또는 비밀번호를 입력해주세요.");
        return false;
    }

    // 요청 메서드와 URL 설정
    var url = "/user/login";
    xhr.open("POST", url, true);
    // 요청 헤더 설정 (만약 필요하다면)
    xhr.setRequestHeader("Content-Type", "application/json");
    // 요청이 완료되었을 때의 콜백 함수 설정
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 요청이 성공적으로 완료됐을 때의 동작
            console.log(xhr.responseText);
        }
    };
    // 보낼 데이터 생성 (만약 데이터를 보내야 한다면)
    // 데이터를 JSON 문자열로 변환
    var jsonData = JSON.stringify(
        {
            id : username,
            pass : password
        }
    );
    // 요청 전송
    xhr.send(jsonData);

function validateWithdrawal() {
    var username = document.getElementById("logname").value;
    var email = document.getElementById("logemail").value;
    var password = document.getElementById("logpass").value;

    if (username === "" || password === "" || email === "") {
        alert("이름, 이메일, 비밀번호가 입력되지 않았습니다.");
        return false;
    }

    var user = {
    }
    user.id = username;
    user.e_mail = email;
    user.password = password;

    var localStorageData = localStorage.getItem('USER');

    // 만약 로컬 스토리지에 데이터가 없다면
    if (localStorageData === null) {
        // 새로운 데이터를 생성하거나 기본값을 설정
        var newData =  JSON.stringify([user]);
        // 로컬 스토리지에 데이터 저장
        localStorage.setItem('USER', newData);

        // 다시 가져오기
        // localStorageData = JSON.parse(newData);

    }
    else{
        var newData =  JSON.parse(localStorageData);

        for (var i = 0; i < newData.length; i++) {
            if(username == newData[i].id){
                alert("이미 있는 아이디 입니다.")
                return false;
            }
        }
        newData.push(user);
        localStorage.setItem('USER', JSON.stringify(newData));
    }
}