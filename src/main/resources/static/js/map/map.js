
var map;
var marker;
var infowindow;
var clickCount = 0; // Variable to keep track of button clicks
var originalClass;
var custom_fitter1;
var custom_fitter2;
var custom_fitter3;
var custom_fitter4;

var dlfeks;

custom_fitter1 = document.getElementsByClassName('custom1-button');
$('.custom1-button').on('click', function(){
    //클릭시 fitter1의 마커만 나온다
    //페이지를 지우고 해당 핀의 내용만 남겨
    //계속 새로 호출?
    // 잉? 지금은 display 1 block ?
    //코드 숨기기
    var marker1s;
    marker1s = document.querySelectorAll('div[title="Marker 1"]');
    marker1s.forEach(function(obj,index){
        console.log(obj,index);
    })
    //each?
    // 마커의 클래스를 불러오는 코드랑 같대유 ,변수에 저장?

//     버튼 1 클릭 시 버튼의 정보가 나온다
//     만약 버튼이 내 위치 근처에 있을시 버튼의 정보가 유효한지 알림이 뜬다
//     yes를 클릭 시 마커는 유지되고 No 클릭 시 마커는 사라지게 된다.
//     버튼의 정보는 카테고리(사건, 음식 , 공연, 기타) 버튼 중 하나와 추가설명 , 사진이 등록되어있다.
//     등록한 날짜와 시간은 ui에 보이지 않는다.
//     등록한 마커의 유효 시간은 6시간이다.

//     등록할 시

});
//커스텀버튼2
//커스텀버튼3
//커스텀버튼4

// 마커의 아이콘 이미지를 설정할 수 있는 객체

// marker1에 사용자 정의 아이콘 적용
marker1.setIcon(customIcon1);

// marker2에 사용자 정의 아이콘 적용
marker2.setIcon(customIcon2);

// marker3에 사용자 정의 아이콘 적용
marker3.setIcon(customIcon3);

// marker4에 사용자 정의 아이콘 적용
marker4.setIcon(customIcon4);

function initMap() {
    // 맵 초기화 및 구성
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 1234, lng: 12345},
        zoom: 15
    });

    // 현재 위치 가져오기
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // 현재 위치를 지도의 중심으로 설정
            map.setCenter(userLocation);

            // 마커 추가 (선택 사항)
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: '현재 위치'
            });
// Create markers
            var marker1 = new google.maps.Marker({
                position: { lat: 35.893653, lng: 128.620130 }, // Replace with your desired coordinates
                map: map,
                title: 'Marker 1', // Replace with a relevant title
                icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
            });

            var marker2 = new google.maps.Marker({
                position: { lat: 35.900000, lng: 128.620130 }, // Replace with your desired coordinates
                map: map,
                title: 'Marker 2', // Replace with a relevant title
                icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
            });

            var marker3 = new google.maps.Marker({
                position: { lat: 35.893653, lng: 128.630000 }, // Replace with your desired coordinates
                map: map,
                title: 'Marker 3', // Replace with a relevant title
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });
            var marker4 = new google.maps.Marker({
                position: { lat: 35.833312, lng: 128.749879 }, // Replace with your desired coordinates
                map: map,
                title: 'Marker 4', // Replace with a relevant title
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            });

            dlfeks = marker4;
            console.log(dlfeks);
            // 마커 클릭 이벤트 처리
            marker.addListener('click', function() {
                // 정보 창 생성

                // Add click event listeners to the markers to open their respective InfoWindows
                marker1.addListener('click', function () {
                    infoWindow1.open(map, marker1);
                });

                marker2.addListener('click', function () {
                    infoWindow2.open(map, marker2);
                });

                marker3.addListener('click', function () {
                    infoWindow3.open(map, marker3);
                });

                marker4.addListener('click', function () {
                    infoWindow4.open(map, marker4);
                });

                var infowindow = new google.maps.InfoWindow({
                    content: '<div><p>카테고리 선택</p>' +
                        '<button class="gray-button" onclick="selectCategory(this, \'pink-button\')">음식</button>' +
                        '<button class="gray-button" onclick="selectCategory(this, \'yellow-button\')">공연</button>' +
                        '<button class="gray-button" onclick="selectCategory(this, \'red-button\')">사고</button>' +
                        '<button class="gray-button" onclick="selectCategory(this, \'green-button\')">기타</button>' +
                        '<p>추가설명</p>' +
                        '<input type="text" name="extra" class="form-style" placeholder="추가설명을 입력하세요">' +
                        '<button id="cam-button" class="custom8-button" onclick="window.location.href=\'http://localhost/photo\'">사진찍기</button>'
                });

                // Create InfoWindows for each marker
                var infoWindow1 = new google.maps.InfoWindow({
                    content: '<div><p>카테고리 선택</p>' +
                        '<button class="pink-button" onclick="selectCategory()">음식</button>' +
                        '<button onclick="selectCategory()">공연</button>' +
                        '<button onclick="selectCategory()">사고</button>' +
                        '<button onclick="selectCategory()">기타</button>' +
                        '<p>추가설명</p>' +
                        '<img src="123.png" alt="이미지 설명">' + // 이미지 추가
                        '음식 붕어빵 가게 있어요' // Customize the content as needed
                });

                var infoWindow2 = new google.maps.InfoWindow({
                    content: '<div><p>카테고리 선택</p>' +
                        '<button onclick="selectCategory()">음식</button>' +
                        '<button class="yellow-button" onclick="selectCategory()">공연</button>' +
                        '<button onclick="selectCategory()">사고</button>' +
                        '<button onclick="selectCategory()">기타</button>' +
                        '<p>추가설명</p>' +
                        '<img src="123.png" alt="이미지 설명">' + // 이미지 추가
                        '버스킹 하고 있어요' // Customize the content as needed
                });

                var infoWindow3 = new google.maps.InfoWindow({
                    content: '<div><p>카테고리 선택</p>' +
                        '<button onclick="selectCategory()">음식</button>' +
                        '<button onclick="selectCategory()">공연</button>' +
                        '<button class="red-button" onclick="selectCategory()">사고</button>' +
                        '<button onclick="selectCategory()">기타</button>' +
                        '<img src="123.png" alt="이미지 설명">' + // 이미지 추가
                        '<p>추가설명</p>' + '공사중이라 길이 막혀요' // Customize the content as needed
                });
                var infoWindow4 = new google.maps.InfoWindow({
                    content: '<div><p>카테고리 선택</p>' +
                        '<button onclick="selectCategory()">음식</button>' +
                        '<button onclick="selectCategory()">공연</button>' +
                        '<button class="red-button" onclick="selectCategory()">사고</button>' +
                        '<button onclick="selectCategory()">기타</button>' +
                        '<img src="123.png" alt="이미지 설명">' + // 이미지 추가
                        '<p>추가설명</p>' + '공사중이라 길이 막혀요' // Customize the content as needed
                });
                // 정보 창을 마커 위에 표시
                infowindow.open(map, marker);
            });
        }, function() {
            // 위치 정보를 가져오는 데 실패한 경우의 처리 (예: 권한 거부)
            console.error('현재 위치를 가져오는 데 실패하였습니다.');
        });
    } else {
        // Geolocation을 지원하지 않는 경우의 처리
        console.error('Geolocation을 지원하지 않습니다.');
    }
}
// 정보 창 닫기 함수
function selectCategory(category) {
    // 여기에서 선택한 카테고리에 대한 작업을 수행합니다.
    console.log('선택한 카테고리: ' + category);


    // 정보 창을 닫습니다.
    // closeInfoWindow();
}function selectCategory(button, newClass) {
    // Remove the "gray-button" class from all buttons
    var buttons = document.querySelectorAll('.gray-button');
    buttons.forEach(function (btn) {
        btn.classList.remove('gray-button');

        clickCount++;

        if (clickCount === 1) {
            originalClass = button.classList[0];
        }

        // Remove the new class and add the original class
        button.classList.remove(newClass);
        button.classList.add(originalClass);

        // Toggle the color if the click count is odd
        if (clickCount % 2 === 1) {
            button.classList.add(newClass);
        } else {
            // Remove the new class if the click count is even
            button.classList.remove(newClass);
        }
    });

    // Add the new class to the clicked button
    button.classList.add(newClass);
}

// "등록하기" 버튼 클릭 이벤트 처리
document.getElementById('register-button').addEventListener('click', function() {
    // 입력 상자를 나타내는 요소를 가져옴
    var inputContainer = document.getElementById('input-container');

    // 입력 상자를 표시 (CSS로 display 속성을 변경)
    inputContainer.style.display = 'block';
});

// "제출" 버튼 클릭 이벤트 처리 (입력 상자가 표시된 후)
document.getElementById('submit-button').addEventListener('click', function() {
    // 입력 상자의 내용 가져오기
    // var inputValue = document.getElementById('input-text').value;

    // 여기에서 입력 상자의 내용을 처리하는 코드를 추가하세요.
    alert('입력된 내용: ' + inputValue);

    // 입력 상자 숨기기
    document.getElementById('input-container').style.display = 'none';
});

// function redirectToR4() {
//     id="my-page-button" , className="custom1-button"
//     window.location.href = "http://localhost/r4";
// }

