
// type="text/javascript"
    let isSnapshotTaken = false;

    window.onload=function(){
    Webcam.set({
        width: 640,
        height: 480,
        image_format: 'jpg',
        jpeg_quality: 100
    });
    Webcam.attach( '#my_camera' );


}

    function take_snapshot() {
    if (!isSnapshotTaken) {
    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
    // create an image element and set the source to the snapshot
    var img = document.createElement('img');
    img.src = data_uri;
    img.width = 640; // 이미지 가로 크기 설정
    img.height = 480; // 이미지 세로 크기 설정

    // append the image to the "results" div to display it
    document.getElementById('results').appendChild(img);

    // 이미지를 한 번만 추가하도록 플래그 설정
    isSnapshotTaken = true;

});
}
    // 버튼 요소 가져오기
    var nextButton = document.getElementById("next-button");

    // 버튼 클릭 이벤트 리스너 추가
    nextButton.addEventListener("click", function () {
    // 새로운 URL로 이동
    window.location.href = "http://localhost/map";

});
}
