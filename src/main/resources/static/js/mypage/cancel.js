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