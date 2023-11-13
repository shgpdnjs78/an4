let isSnapshotTaken = false, borderRadius;

window.onload = function () {
    var type = localStorage.getItem("category");
    var extraInput = document.querySelector('input[name=extra]');
    var answer = extraInput ? extraInput.value : '';

    var longitude = parseFloat(localStorage.getItem("lng"));
    var latitude = parseFloat(localStorage.getItem("lat"));

    // AJAX를 사용하여 서버에 데이터 전송
    $.ajax({
        url: "/user/map",
        data: {
            "type": type,
            "answer": answer,
            "lng": longitude,
            "lat": latitude
        },
        type: "POST",
        dataType: "json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Ajax 요청 오류:', textStatus, errorThrown);

            // 새로운 마커를 생성합니다.
            var newMarker = new google.maps.Marker({
                position: userLocation, // 필요에 따라 위치를 변경하세요
                map: map,
                title: '새로운 마커',
                icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' // 사용자 정의 아이콘 URL로 설정
            });

            // 여기서 추가적인 로직을 수행할 수 있습니다. 예를 들어 새로운 마커에 대한 인포 윈도우를 열 수 있습니다.
            infowindow.open(map, newMarker);
        }
    }).done(function (rs) {
        console.log(rs);
        if (!rs.status) {
            alert(rs.msg);
        }
    });

    Webcam.set({
        width: 480,
        height: 360,
        image_format: 'jpg',
        jpeg_quality: 100,
        img: borderRadius  = '1.25rem'

    });
    Webcam.attach('#my_camera');
}

function take_snapshot() {
    if (!isSnapshotTaken) {
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // create an image element and set the source to the snapshot
            var img = document.createElement('img');
            img.src = data_uri;
            img.width = 480; // 이미지 가로 크기 설정
            img.height = 360; // 이미지 세로 크기 설정
            img: borderRadius  = '1.25rem';
            // append the image to the "results" div to display it
            document.getElementById('results').appendChild(img);

            imageData = data_uri;
        //    sessionStorage.setItem('snapshot', imageData);

            isSnapshotTaken = true;
            // 이미지를 한 번만 추가하도록 플래그 설정
            isSnapshotTaken = true;
        });

    }
    // 버튼 요소 가져오기
    var nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", function () {
        window.location.href = "map";
        let locationRegister_check = true;
        $.ajax({
            url: "/user/photo",
            data: {
                "type" : type,
                "answer" : answer,
                "lng" : longitude,
                "lat" : latitude
            },
            type: "POST",
            dataType:"json",
            async:false,
            error: function (error) {
                // 에러 발생 시의 동작
                console.error('Error:', error);
                alert(error);
                locationRegister_check = false;
            }

        }).done(function(rs){
            console.log(rs);
            if(!rs.status){
                locationRegister_check = false;
                alert(rs.msg);
            }
        });
        return locationRegister_check;

    });

    var reButton = document.getElementById("re-button");
    reButton.addEventListener("click", function () {
        window.location.href = "photo";
    });
}
