let isSnapshotTaken = false, borderRadius;

window.onload = function () {
    Webcam.set({
        width: 480,
        height: 360,
        image_format: 'jpg',
        jpeg_quality: 100,
        img : borderRadius = '1.25rem'
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
            sessionStorage.setItem('snapshot', imageData);

            isSnapshotTaken = true;
            // 이미지를 한 번만 추가하도록 플래그 설정
            isSnapshotTaken = true;
        });
    }
    // 버튼 요소 가져오기
    var nextButton = document.getElementById("next-button");

    // 버튼 클릭 이벤트 리스너 추가
    nextButton.addEventListener("click", function () {
        // 새로운 URL로 이동
        window.location.href = "map";
       // history.go(-1);
        sessionStorage.setItem('snapshot', imageData);
        return true;
    });

    var reButton = document.getElementById("re-button");

    // 버튼 클릭 이벤트 리스너 추가
    reButton.addEventListener("click", function () {
        // 새로운 URL로 이동
        window.location.href = "photo";
    });
}
