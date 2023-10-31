
var map;
var marker;
var infowindow;
var clickCount = 0; // Variable to keep track of button clicks
var originalClass;
var custom_fitter1;
var custom_fitter2;
var custom_fitter3;
var custom_fitter4;



// 마커의 아이콘 이미지를 설정할 수 있는 객체

// marker1에 사용자 정의 아이콘 적용
// marker1.setIcon(customIcon1);
//
// // marker2에 사용자 정의 아이콘 적용
// marker2.setIcon(customIcon2);
//
// // marker3에 사용자 정의 아이콘 적용
// marker3.setIcon(customIcon3);
//
// // marker4에 사용자 정의 아이콘 적용
// marker4.setIcon(customIcon4);

function initMap() {
    // 맵 초기화 및 구성
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.893653, lng: 128.620130},
        zoom: 15
    });

    // 파라미터로 받아올 위치 정보 지정하기
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude, //받아올 위치x
                lng: position.coords.longitude //받아올 위치y
            };

            // 현재 위치를 지도의 중심으로 설정
            map.setCenter(userLocation);

            // 마커 추가 (선택 사항)
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: '받아온 위치'
            });


                //
                /*
                1. 들어오자마자 위치 받아오기
                2. 위치 받아온 다음 창 띄우기
                2.1  창의 정보 :
                현재위치 , 카테고리, 자세한내용, 사진, 등록한 날짜, 등록한 사람
                이런것들을 보여주는 창
                2.2

                복구하기 버튼? -> 마이리스트에서 복구
                삭제하기 버튼? -> 마이리스트에서도 삭제

                * */

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
// function selectCategory(category) {
//     // 여기에서 선택한 카테고리에 대한 작업을 수행합니다.
//     console.log('선택한 카테고리: ' + category);



