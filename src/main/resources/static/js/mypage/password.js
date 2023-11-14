src="vendor/jquery/jquery.min.js"
src="vendor/bootstrap/js/bootstrap.bundle.min.js"

src="vendor/jquery-easing/jquery.easing.min.js"

src="js/sb-admin-2.min.js"

function validatePassword() {
    var newPassword1 = document.getElementById("newPassword1").value;
    var newPassword2 = document.getElementById("newPassword2").value;

    if (newPassword1 !== newPassword2) {
        alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        return false; // 폼 전송을 중지함
    }

    // 비밀번호가 일치하면 폼을 제출할 수 있도록 true 반환
    return true;

    let pw_check = true;
    $.ajax({
        url: "/user/mypage",
        data: {
            "pw" : pw,
        },
        type: "POST",
        dataType:"json",
        async:false,
        error: function (error) {
            // 에러 발생 시의 동작
            console.error('Error:', error);
            alert(error);
            pw_check = false;
        }

    }).done(function(rs){
        console.log(rs);
        if(!rs.status){
            pw_check = false;
            alert(rs.msg);
        }
    });
    return pw_check;

}