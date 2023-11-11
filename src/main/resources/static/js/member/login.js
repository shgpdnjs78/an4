function redirectToMap() {
    window.location.href = "map";
}

function validateForm() {
    var id = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (id === "" || password === "") {
        alert("아이디 또는 비밀번호를 입력해주세요.");
        return false;
    }
    let login_check = true;
    $.ajax({
        url: "/user/login",
        data: {
            "id" : id,
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
        if(!rs.status){
            login_check = false;
            alert(rs.msg);
        }
        });
    return login_check;
}
function validateWithdrawal() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("joinEmail").value;
    var password = document.getElementById("joinPass").value;

    if (name === "" || password === "" || id === "") {
        alert("이름, 이메일, 비밀번호가 입력되지 않았습니다.");
        return false;
    }
    let register_check = true;
    $.ajax({
        url: "/user/register",
        data: {
            "id" : id,
            "pw" : password,
            "name" : name
        },
        type: "POST",
        dataType:"json",
        async:false,
        error: function (error) {
            // 에러 발생 시의 동작
            console.error('Error:', error);
            register_check = false;
        }
    }).done(function(rs){
        console.log(rs);
        if(!rs.status) {
            alert(rs.msg);
            register_check = false;
        }

    });
    return register_check;
}

    // var user = {}
    // user.id = username;
    // user.e_mail = email;
    // user.password = password;
    //
    // $.ajax({
    //     url: "/user/register", // 서버의 API 엔드포인트 URL
    //     type: "POST",
    //     contentType: "application/json",
    //     data: JSON.stringify(user),
    //     dataType: "json",
    //     success: function(response) {
    //         console.log(response);
    //         alert("회원가입이 완료되었습니다.");
    //         // 회원가입 성공 후 어떤 동작을 수행할지 여기에서 처리할 수 있습니다.
    //     },
    //     error: function(error) {
    //         console.error('Error:', error);
    //         alert("회원가입 중 오류가 발생했습니다.");
    //     }
    // });
    // return true; // 이 부분은 폼 전송을 중단하지 않고 계속 진행합니다.
    //
    // var localStorageData = localStorage.getItem('USER');

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
                if (id == newData[i].id) {
                    alert("이미 있는 아이디 입니다.")
                    //return false;
                }
            }
            newData.push(user);
            localStorage.setItem('USER', JSON.stringify(newData));

}