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
    //로컬스토리지 정보 가져오기
    //가져와서 펼치기(저장한다, 임시변수에)
    //방금 입력한 유저 네임과 내가 펼친 자료의 아이디들을 비교해서 같은 것이 있는지
    //확인 있다면 return true 없다면 false 하면서 아이디가 틀렸습니다.
    // if (email = !user.e_mail) {
    //     alert("입력하신 아이디는 회원정보에 없습니다.");
    // }
    // if (password = !user.password) {
    //     alert("입력하신 아이디는 회원정보에 없습니다.");
    // }
    // return true
    // var username = document.getElementById("email").value;
    // var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("아이디 또는 비밀번호를 입력해주세요.");
        return false;
    }

    var localStorageData = localStorage.getItem('USER');
    if (localStorageData === null) {
        alert("존재하지 않는 아이디입니다.");
        return false;
    }
    var newData = JSON.parse(localStorageData);

    for (var i = 0; i < newData.length; i++) {
        if (username == newData[i].id) {
            if (password == newData[i].password) {
                alert("로그인 완료!");
                return true;
            }
            else{
                alert("비밀번호 틀렸다자식아")
                return  false;
            }
        }
    }
    alert("존재하지 않는 아이디입니다.");
    return false;

}
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