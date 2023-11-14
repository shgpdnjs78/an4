var map;
var marker;
var infowindow;
var clickCount = 0; // Variable to keep track of button clicks
var originalClass;
var custom_fitter1;
var custom_fitter2;
var custom_fitter3;
var custom_fitter4;


var filter_category = '';  //어떠한 버튼을 누르면 , 이 filter_category를 category_type의 몇번째 인덱스로 바꿔 줄 것이다.
var category_type = ['','음식','공연','사고','기타'];
var category_type_color = ['','pink','yellow','red','green'];
//카테고리 타입의 배열을 지정한다. 더 넣고싶으면 넣어도 됨. 넣거나 빼면 어떻게되나 테스트 해 볼것 첫번째 인덱스는 편의를 위해 빈 값으로 둠
//카테고리 타입에 색깔도 같이 지정해준다. 색깔을 바꾸면, 다르게 지정될것이다.
// 대신 여기 넣고 뺄때 밑의 dot_color 함수에서도 case 넣고 빼줘야 함.  최소 카테고리 한개는 남겨둘 것! 한개도 없을때의 예외처리는 안했으니까...

function dot_color(type){
    //dot의 색깔을 정해보자
    //type이 음식,공연,사고,기타  중 뭐냐에 따라 다른 색깔을 리턴한다.
    //이것으로 icon dot의 색깔도 바꿔줄 수 있다.
    switch(type){
        case category_type[1] : return 'http://maps.google.com/mapfiles/ms/icons/'+category_type_color[1]+'-dot.png';
        case category_type[2] : return 'http://maps.google.com/mapfiles/ms/icons/'+category_type_color[2]+'-dot.png';
        case category_type[3] : return 'http://maps.google.com/mapfiles/ms/icons/'+category_type_color[3]+'-dot.png';
        case category_type[4] : return 'http://maps.google.com/mapfiles/ms/icons/'+category_type_color[4]+'-dot.png';
        //음식이 뭐냐에 따라!!                                                         색깔이 바뀔 것이다!!
    }
}


custom_fitter1 = document.getElementsByClassName('custom1-button');
$('.custom1-button').on('click', function(){
    //클릭시 fitter1의 마커만 나온다
    //페이지를 지우고 해당 핀의 내용만 남겨
    //계속 새로 호출?
    // 잉? 지금은 display 1 block ?
    //코드 숨기기
    var Fmarker1s;
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
// marker1.setIcon(customIcon1);

// // marker2에 사용자 정의 아이콘 적용
// marker2.setIcon(customIcon2);

// // marker3에 사용자 정의 아이콘 적용
// marker3.setIcon(customIcon3);

// // marker4에 사용자 정의 아이콘 적용
// marker4.setIcon(customIcon4);

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
                lat: position.coords.latitude, //위도
                lng: position.coords.longitude //경도
            };
            localStorage.setItem("lat",userLocation.lat);  //로컬스토리지 lat 에 위도 저장
            localStorage.setItem("lng",userLocation.lng);  //로컬스토리지 lng 에 경도 저장

            console.log(position.coords.latitude); //현재위도 확인
            console.log(position.coords.longitude); //현재경도 확인

            // 현재 위치를 지도의 중심으로 설정
            map.setCenter(userLocation);

            // 마커 추가
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: '현재 위치'
            });

            var string = '';
            for (let i = 1; i < category_type.length; i++) {
                string += "<button class='gray-button' onclick='selectCategory(\'"+category_type[i]+"\')'>"+category_type[i]+"</button>";
                //음식,공연,사고,기타  의 버튼이,위의 category_type 카테고리배열에 담긴만큼 생성 될것이다!!!
            }
            var infowindow = new google.maps.InfoWindow({
                content: '<div><p>카테고리 선택</p>' +
                    string+  //여기서 버튼이 만들어진다
                    '<p>추가설명</p>' +
                    '<input type="text" name="extra" class="form-style" placeholder="추가설명을 입력하세요">' +
                    '<button id="cam-button" class="custom8-button" onclick="return getPhoto()">사진찍기</button>'
            });

            // 마커 클릭 이벤트 처리
            marker.addListener('click', function() {
                // 정보 창 생성
                // 정보 창을 마커 위에 표시
                infowindow.open(map, marker);
            });


            //이 부분부터는 그냥 임시로 설정해둔거라고 생각해야하고,
            // DB에서 받아온거로 해줘야 한다.
            // 해서 과감하게 싹다 지우고, 새로 구현했다.
            // DB에서 받아온 정보를 저장 하는것이 1차 목표
            // 그것을 구현하는것은 아래에 완성 한다.


            var DB_DATA =
                //DB데이타를 임시로  강제로 설정해본다.  추후에는 다 지우고 DB의 정보 받는것으로 바뀌어야 한다.
                [
                    {
                        //배열의 0번지,  편의성을 위해 비워놓자.
                    },
                    {  //marker1의 정보를 담았다.
                        id : 'hyewon',  //올린 사람의 아이디
                        type : '음식',  //DB에서 받아온 카테고리
                        lat : 35.893653,  //DB에서 받아온 위도
                        lng : 128.620130,  //DB에서 받아온 경도
                        title : 'Marker 1',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
                        icon : dot_color('음식'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

                        img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
                        //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
                        explain : '음식 붕어빵 가게 있어요',  //DB에서 받아온 누군가가 써놓은 설명
                    },
                    { //marker2의 정보를 담았다
                        id : 'joosub',  //올린 사람의 아이디
                        type : '공연',
                        lat : 35.900000,  //DB에서 받아온 위도
                        lng : 128.620130,  //DB에서 받아온 경도
                        title : 'Marker 2',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
                        icon : dot_color('공연'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

                        img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
                        //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
                        explain : '버스킹 하고 있어요', //DB에서 받아온 누군가가 써놓은 설명
                    },
                    { //marker3의 정보를 담았다
                        id : 'taehwan',  //올린 사람의 아이디
                        type : '사고',
                        lat : 35.893653,  //DB에서 받아온 위도
                        lng : 128.630000,  //DB에서 받아온 경도
                        title : 'Marker 3',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
                        icon : dot_color('사고'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

                        img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
                        //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
                        explain : '나는 붕어', //DB에서 받아온 누군가가 써놓은 설명
                    },
                    { //marker4의 정보를 담았다
                        id : 'sungjin',  //올린 사람의 아이디
                        type : '기타',
                        lat : 35.833312,  //DB에서 받아온 위도
                        lng : 128.749879,  //DB에서 받아온 경도
                        title : 'Marker 4',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
                        icon : dot_color('기타'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

                        img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
                        //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
                        explain : '공사중이라 길이 막혀요', //DB에서 받아온 누군가가 써놓은 설명
                    },
                ];



            //DB의 정보를 받았으니, 이제 그것을 펼쳐서 마커들을 그려준다.

            for (let i = 1; i < DB_DATA.length; i++) {
                (function(i){

                    if(DB_DATA[i].type !== filter_category && filter_category !== '')
                    {
                        //특정 보고싶은 카테고리가 설정되어있다면, 그 카테고리 말고는 보여주지 않는다.
                        //즉 여기는 아무것도안한다.
                    }
                    else
                    {

                        var DB_marker = new google.maps.Marker({
                            position: {  //포지션에는
                                lat: DB_DATA[i].lat,  //위의 DB_DATA 배열의 i번째 인덱스의 lat을 가져온다
                                lng: DB_DATA[i].lng   //위의 DB_DATA 배열의 i번째 인덱스의 lng을 가져온다
                            },
                            map: map,
                            title: DB_DATA[i].title, //위의 DB_DATA 배열의 i번째 인덱스의 title을 가져온다
                            icon:  DB_DATA[i].icon,  //위의 DB_DATA 배열의 i번째 인덱스의 icon을 가져온다

                        });

                        var DB_string = '';
                        for (let j = 1; j < category_type.length; j++) {  //for문안에 또 for문이다. 여기는 j다!! 헷갈리지말것

                            //음식,공연,사고,기타  의 버튼이,위의 category_type 카테고리배열에 담긴만큼 생성 될것이다!!!
                            //그리고 특별히 카테고리에 따라 여기는 버튼색깔이 달라질것이다.
                            if(i == j)  //카테고리 i와 동일한 버튼j 이라면..
                            {
                                DB_string += "<button class='"+category_type_color[j]+"-button' onclick='selectCategory(\'"+category_type[j]+"\')'>"+category_type[j]+"</button>";
                            }
                            else  //아니면..
                            {
                                DB_string += "<button onclick='selectCategory(\'"+category_type[j]+"\')'>"+category_type[j]+"</button>";
                            }
                        }


                        var edit_btn = '';
                        var delete_btn = '';



                        if(DB_DATA[i].id == 'hyewon')  //아이디는 로컬스토리지에 저장된 아이디를 가져올것!  localstorage.getItem([USER]) ?? 이건가.. 여튼 이것을 활용할것!
                        {

                            // //본인 아이디와 같다면.. 수정하기 버튼도 넣자.
                            edit_btn = '<button class="tnwjd-button'+i+'" id="editButton'+i+'">수정하기</button>';
                            // // 삭제하기 버튼도 넣을거면 이 뒤로 + 해서 넣으면 됨
                            delete_btn = '<button class="tkrwp-button'+i+'" id="deleteButton'+i+'">삭제하기</button>';
                        }

                        var DB_infoWindow = new google.maps.InfoWindow({
                            content: '<div><p>카테고리 선택</p>' +
                                DB_string+  //여기서 버튼이 만들어진다
                                '<span id="additionalDescription'+i+'">추가설명</span>' +
                                '<img src="'+DB_DATA[i].img+'" alt="이미지 설명">' +  //위의 DB_DATA 배열의 i번째 인덱스의 img을 가져온다
                                DB_DATA[i].explain+  //위의 DB_DATA 배열의 i번째 인덱스의 explain을 가져온다
                                edit_btn+  //수정하기가 있다면 (본인이 올린것이라면) 들어간다,
                                delete_btn  //삭제하기가 있다면 들어간다,   만약 본인 말고도 다른사람도 보이게 하고싶다면?  그건 방법을 알아서 생각해보도록! 조건문에서 빼면 되겠지?
                        });
                        // console.log(DB_infoWindow.content)

                        (function(){

                            DB_marker.addListener('click', async function () {

                                await DB_infoWindow.open(map, DB_marker);

                                console.log("수정하기오픈")
                                document.getElementById('editButton'+i).addEventListener('click',function(){
                                    console.log("수정하기클릭")
                                    editDescription(DB_infoWindow,i)
                                });

                            });
                        }());



                    }

                })(i);



                //여기까지의 작업을 위의 DB_DATA의 길이만큼 반복한다.
            }



        }, function() {
            // 위치 정보를 가져오는 데 실패한 경우의 처리 (예: 권한 거부)
            console.error('현재 위치를 가져오는 데 실패하였습니다.');
        });



    } else {
        // Geolocation을 지원하지 않는 경우의 처리
        console.error('Geolocation을 지원하지 않습니다.');
    }
}


function editDescription(infoWindow,i) {
    console.log(infoWindow,i)
    // 사용자로부터 새로운 설명을 입력받음, 수정하기 버튼 누를때 불리는 함수
    var newDescription = prompt('새로운 추가 설명을 입력하세요', '');

    if (newDescription !== null) {
        // 사용자가 입력한 내용을 infoWindow3에 업데이트
        console.log(infoWindow.content)
        console.log( document.querySelector('#additionalDescription'+i).textContent)
        document.querySelector('#additionalDescription'+i).textContent = newDescription;
        console.log(infoWindow.content)
        console.log( document.querySelector('#additionalDescription'+i).textContent)
        // infoWindow 업데이트
        infoWindow.setContent(infoWindow.content);
    }
}
// '삭제하기' 버튼 클릭 시 호출되는 함수
function deleteMarker(marker) {
    console.log(marker ,"삭제");
    // Remove the marker from the map
    marker.setMap(null);
    // You can also remove other related data or perform additional tasks here

    //삭제하기 버튼을 눌렀다면, 빽엔드에서 어떻게 작업할지는 본인 마음이지만, 남들에게도 안보여야 하면서 동시에 작성자에게는 마이페이지에 남아 있어야 하므로,
    //DB구성을 조금더 생각할 필요가 있음. 삭제되었다는 플래그를 넣어서 표시를 하던지, 아예 지우고, 본인이 올린것에 대한 DB를 따로 작성하던지..
    //당연히 뭔말인지 모를테니 물어보도록.
}

//현재위치에서 마커를 등록하기 위한 사진찍기 버튼을 눌렀을때의 함수
function getPhoto()  {
    //종류버튼, 추가설명, 위치
    var type = localStorage.getItem("category");//selectCategory
    var answer = document.querySelector('input[name=extra]'   ).value;
    var longitude =  parseFloat(localStorage.getItem("lng"));
    var latitude = parseFloat(localStorage.getItem("lat"));

    console.log(type,answer,longitude,latitude);

    let location_check = true;
    $.ajax({
        url: "/user/map",
        data: {
            "type" : type,
            "answer" : answer,
            "lng" : longitude,
            "lat" : latitude
        },
        type: "POST",
        dataType:"json",
        async:false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Ajax 요청 오류:', textStatus, errorThrown);
            location_check = false;
        }


    }).done(function(rs){
        console.log(rs);
        if(!rs.status){
            // console.error('Error:', error);
            alert(rs.msg);
            location_check=false;
        }
    });
    console.log("여기까지")
    return location_check;
}

// 정보 창 닫기 함수?? 이건 그냥 x 버튼 누르면 되는거 아님?

//이건 카테고리 선택한것을 로컬스토리지에 저장해주는 함수
function selectCategory(category) {
    // 여기에서 선택한 카테고리에 대한 작업을 수행합니다.
    console.log('선택한 카테고리: ' + category);

    localStorage.setItem("category",category);
    // 정보 창을 닫습니다.
    // closeInfoWindow();
}
/*
function selectCategory(button, newClass) {
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
*/
// "등록하기" 버튼 클릭 이벤트 처리
// document.getElementById('register-button').addEventListener('click', function() {
//     // 입력 상자를 나타내는 요소를 가져옴
//     var inputContainer = document.getElementById('input-container');

//     // $.ajax({
//     //     url: "/user/map",
//     //     data: {
//     //         "longitude" : position.coords.longitude,
//     //         "latitude" : position.coords.latitude
//     //     },
//     //     type: "POST",
//     //     dataType:"json",
//     //     async:false,
//     //     error: function (error) {
//     //         // 에러 발생 시의 동작
//     //         console.error('Error:', error);
//     //         alert(error);
//     //
//     //     }
//     //
//     // }).done(function(rs){
//     //     console.log(rs);
//     //     if(!rs.status){
//     //         console.error('Error:', error);
//     //         alert(rs.msg);
//     //     }
//     // });

//     // 입력 상자를 표시 (CSS로 display 속성을 변경)
//     inputContainer.style.display = 'block';
// });

// "제출" 버튼 클릭 이벤트 처리 (입력 상자가 표시된 후)
// document.getElementById('submit-button').addEventListener('click', function() {
//     // 입력 상자의 내용 가져오기
//     // var inputValue = document.getElementById('input-text').value;

//     // 여기에서 입력 상자의 내용을 처리하는 코드를 추가하세요.
//     alert('입력된 내용: ' + inputValue);

//     // 입력 상자 숨기기
//     document.getElementById('input-container').style.display = 'none';
// });

// function redirectToR4() {
//     id="my-page-button" , className="custom1-button"
//     window.location.href = "http://localhost/r4";
// }
// Get the button element by its id
var BackButton = document.getElementById('back-button');

// Add event listener for the "뒤로가기" button
//goBackButton.addEventListener('click', function() {
//    // Use the history object to navigate back to the previous page
//    window.history.back();
//});
