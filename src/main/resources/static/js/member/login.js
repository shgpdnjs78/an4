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
    return true;
}
function validateWithdrawal() {
    var username = document.getElementById("logname").value;
    var email = document.getElementById("logemail").value;
    var password = document.getElementById("logpass").value;

    if (username === "" || password === "" || email === "") {
        alert("이름, 이메일, 비밀번호가 입력되지 않았습니다.");
        return false;
    }
    return true;
}