src="vendor/jquery/jquery.min.js"
src="vendor/bootstrap/js/bootstrap.bundle.min.js"

src="vendor/jquery-easing/jquery.easing.min.js"

src="js/sb-admin-2.min.js"

function validatePasswords() {
    var newPassword1 = document.getElementById("newPassword1").value;
    var newPassword2 = document.getElementById("newPassword2").value;

    if (newPassword1 !== newPassword2) {
        alert("새 비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
        return false; // 폼 전송을 중지함
    }

    // 비밀번호가 일치하면 폼을 제출할 수 있도록 true 반환
    return true;
}