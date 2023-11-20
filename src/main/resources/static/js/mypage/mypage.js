src="vendor/jquery/jquery.min.js"
src="vendor/bootstrap/js/bootstrap.bundle.min.js"

//파라미터= 변수
// 링크 파라미터를 들고와라 MAP의
// 정보공유
// var getparam = 123;
// console.log(getparam)

function editEmail() {
    // 이메일 출력 영역을 숨기고 입력 폼을 보이게 함
    //var id = document.getElementById("email").value;

    document.getElementById("email").style.display = "none";
    document.getElementById("emailForm").style.display = "block";
}function editName() {
    // 이메일 출력 영역을 숨기고 입력 폼을 보이게 함
    //var id = document.getElementById("email").value;

    document.getElementById("name").style.display = "none";
    document.getElementById("nameForm").style.display = "block";
}

function updateName() {
    // 입력한 이메일을 가져와서 출력 영역에 업데이트하고 입력 폼을 숨김
    const newEmail = document.getElementById("newName").value;
    document.getElementById("name").innerText = `📧${newName}`;
    document.getElementById("name").style.display = "block";
    document.getElementById("nameForm").style.display = "none";

    return true;
}

    function updateEmail() {
        // 입력한 이메일을 가져와서 출력 영역에 업데이트하고 입력 폼을 숨김
        const newEmail = document.getElementById("newEmail").value;
        document.getElementById("email").innerText = `📧${newEmail}`;
        document.getElementById("email").style.display = "block";
        document.getElementById("emailForm").style.display = "none";


        return true;

        let email_check = true;
        $.ajax({
            url: "/user/mypage",
            data: {
                "id": id
            },
            type: "POST",
            dataType: "json",
            success: function (response) {
                // 서버에서의 응답을 처리
                if (response.success) {
                    // 성공적으로 업데이트된 경우에 추가 동작 수행
                    console.log("이메일 업데이트 성공");
                } else {
                    // 업데이트 실패 시의 동작
                    console.error("이메일 업데이트 실패");
                }
            },
            error: function (error) {
                // 에러 발생 시의 동작
                console.error('Error:', error);
                alert("이메일 업데이트 중 오류가 발생했습니다.");
            }
        });

        return true;
    }

    function handleEmailUpdate() {
        // 이메일 업데이트 함수 호출하여 이메일 업데이트 수행
        const isEmailUpdated = updateEmail();

        // 이메일이 성공적으로 업데이트된 경우에만 알람 메시지 표시
        if (isEmailUpdated) {
            alert('수정 되었습니다');
        }

    }

// 버튼 클릭 이벤트에 handleEmailUpdate() 함수를 연결
// document.getElementById("emailUpdateButton").addEventListener("click", handleEmailUpdate);

// 파일 선택 시 미리보기 기능 구현
    const fileInput = document.querySelector('input[type="file"]');
// fileInput.addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//
//     reader.onloadend = function () {
//         const profileImagePreview = document.querySelector('.box img.profile');
//         profileImagePreview.src = reader.result;
//     }
//
//     if (file) {
//         reader.readAsDataURL(file);
//     }
// });
// 이미지 업로드 함수
    function uploadImage(event) {
        event.preventDefault(); // 기본 제출 동작 방지

        // FormData 객체 생성
        var formData = new FormData(document.getElementById('profileImageForm'));

        // 서버로 FormData 전송 (예: AJAX를 사용할 수 있음)
        // 여기서는 간단한 예시로 console.log로 FormData 내용 출력
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        // 이미지 업로드 후에 이미지를 표시할 <img> 업데이트
        // 여기서는 예시로 로컬의 이미지 경로를 사용
        var uploadedImage = formData.get('profileImage');
        document.getElementById('profileImage').src = URL.createObjectURL(uploadedImage);
    }

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
