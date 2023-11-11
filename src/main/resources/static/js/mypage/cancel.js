// 버튼과 체크박스 요소 가져오기
const submitButton = document.getElementById('submitBtn');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// 버튼에 클릭 이벤트 리스너 추가
submitButton.addEventListener('click', function() {
    // 선택된 항목을 저장할 배열
    const selectedItems = [];

    // 체크박스를 순회하며 선택된 항목을 배열에 추가
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedItems.push(checkbox.nextElementSibling.textContent);
        }
    });

    // 선택된 항목을 콘솔에 출력
    console.log('선택된 항목:', selectedItems);
});
function validateForm() {
    var id = document.getElementById("Inputemail").value;
    var password = document.getElementById("Inputpwd1").value;

    if (id === "" || password === "") {
        alert("아이디 또는 비밀번호를 입력해주세요.");
        return false;
    }
    return true;
}
function validateWithdrawal() {
    var reason = document.getElementById("reason").value;

    if (!reason && !document.querySelectorAll('input[type="checkbox"]:checked').length) {
        alert("아이디 또는 비밀번호를 입력하고 탈퇴 이유를 선택해주세요.");
        return false;
    }
    return true;
}
