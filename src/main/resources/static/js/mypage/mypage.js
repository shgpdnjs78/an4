src="vendor/jquery/jquery.min.js"
src="vendor/bootstrap/js/bootstrap.bundle.min.js"

//파라미터= 변수
// 링크 파라미터를 들고와라 MAP의
// 정보공유
var getparam = 123;
console.log(getparam)
// function editPhoneNumber() {
//     // 전화번호 출력 영역을 숨기고 입력 폼을 보이게 함
//     document.getElementById("phoneNumber").style.display = "none";
//     document.getElementById("phoneNumberForm").style.display = "block";
// }

function editEmail() {
    // 이메일 출력 영역을 숨기고 입력 폼을 보이게 함
    document.getElementById("email").style.display = "none";
    document.getElementById("emailForm").style.display = "block";
}

function updateEmail() {
    // 입력한 이메일을 가져와서 출력 영역에 업데이트하고 입력 폼을 숨김
    const updateEmailElement = document.getElementById("updateEmail");
    if (updateEmailElement) {
        const newEmail = updateEmailElement.value;
        document.getElementById("email").innerText = `📧${newEmail}`;
        document.getElementById("email").style.display = "block";
        document.getElementById("emailForm").style.display = "none";

        return true;
    } else {
        // 엘리먼트를 찾지 못한 경우에 대한 처리
        console.error("Email element not found");
        return false;
    }
        let email_check = true;
        $.ajax({
            url: "/user/mypage",
            data: {
                "id" : id,
            },
            type: "POST",
            dataType:"json",
            async:false,
            error: function (error) {
                // 에러 발생 시의 동작
                console.error('Error:', error);
                alert(error);
                email_check = false;
            }

        }).done(function(rs){
            console.log(rs);
            if(!rs.status){
                email_check = false;
                alert(rs.msg);
            }
        });
        return email_check;

}
    // 이메일 업데이트 함수 호출하여 이메일 업데이트 수행
    const isEmailUpdated = updateEmail();

    // 이메일이 성공적으로 업데이트된 경우에만 알람 메시지 표시
    if (isEmailUpdated) {
        alert('수정 되었습니다');

//}

// 버튼 클릭 이벤트에 handleEmailUpdate() 함수를 연결
//document.getElementById("PhoneNumberUpdateButton").addEventListener("click", handlePhoneNumberUpdate);

        document.getElementById("emailUpdateButton").addEventListener("click", updateEmail);

// 파일 선택 시 미리보기 기능 구현
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = function () {
                const profileImagePreview = document.querySelector('.box img.profile');
                profileImagePreview.src = reader.result;
            }

            if (file) {
                reader.readAsDataURL(file);
            }
        });

// 프로필 사진 업로드를 위한 이벤트 핸들러
        document.getElementById("profileImageForm").addEventListener("submit", function (event) {
            event.preventDefault();

            var formData = new FormData(this);

            // 서버로 프로필 사진 업로드 요청 보내기
            fetch("/api/uploadProfileImage", {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": "Bearer " + accessToken, // 사용자 인증 토큰 추가
                },
            })
                .then(response => response.json())
                .then(data => {
                    // 업로드 성공 시 프로필 사진 미리보기 업데이트
                    if (data.success) {
                        var profileImagePreview = document.getElementById("profileImagePreview");
                        profileImagePreview.innerHTML = `<img src="${data.imageUrl}" alt="프로필 사진">`;
                    } else {
                        console.error("프로필 사진 업로드 실패");
                    }
                })
                .catch(error => {
                    console.error("에러 발생:", error);
                });
        });
    }