function redirectToMap() {
    window.location.href = "map";
}

function validateForm() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("아이디 또는 비밀번호를 입력해주세요.");
        return false;
    }
    let login_check = true;
    $.ajax({
        url: "/user/login",
        data: {
            "id" : username,
            "pw" : password
        },
        type: "POST",
        dataType:"json",
        async:false,
        error: function (error) {
            // 에러 발생 시의 동작
            console.error('Error:', error);
            alert(error);
            login_check = false;
        }

    }).done(function(rs){
        console.log(rs);
        if(!rs.status)login_check = false;
        });
    return login_check;
}
function validateWithdrawal() {
        var username = document.getElementById("logname").value;
        var email = document.getElementById("logemail").value;
        var password = document.getElementById("logpass").value;

        if (username === "" || password === "" || email === "") {
            alert("이름, 이메일, 비밀번호가 입력되지 않았습니다.");
            return false;
        }

        var user = {}
        user.id = username;
        user.e_mail = email;
        user.password = password;

        var localStorageData = localStorage.getItem('USER');

        // 만약 로컬 스토리지에 데이터가 없다면
        if (localStorageData === null) {
            // 새로운 데이터를 생성하거나 기본값을 설정
            var newData = JSON.stringify([user]);
            // 로컬 스토리지에 데이터 저장
            localStorage.setItem('USER', newData);

            // 다시 가져오기
            // localStorageData = JSON.parse(newData);

        } else {
            var newData = JSON.parse(localStorageData);

            for (var i = 0; i < newData.length; i++) {
                if (username == newData[i].id) {
                    alert("이미 있는 아이디 입니다.")
                    return false;
                }
            }
            newData.push(user);
            localStorage.setItem('USER', JSON.stringify(newData));
        }
}