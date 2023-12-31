var map;
var infowindow;

var filter_category = '';  //어떠한 버튼을 누르면 , 이 filter_category를 category_type의 몇번째 인덱스로 바꿔 줄 것이다.
var category_type = ['','음식','공연','사고','기타'];
var category_type_color = ['gray','pink','yellow','red','green'];
//카테고리 타입의 배열을 지정한다. 더 넣고싶으면 넣어도 됨. 넣거나 빼면 어떻게되나 테스트 해 볼것 첫번째 인덱스는 편의를 위해 빈 값으로 둠
//카테고리 타입에 색깔도 같이 지정해준다. 색깔을 바꾸면, 다르게 지정될것이다.
// 대신 여기 넣고 뺄때 밑의 dot_color 함수에서도 case 넣고 빼줘야 함.  최소 카테고리 한개는 남겨둘 것! 한개도 없을때의 예외처리는 안했으니까...

//DB정보 셀렉트 해서 db_data를 구성
//AJAX 불러서 MYSQL에서 받아온 정보를 DB_DATA에 저장한다.
//DB_DATA는 배열이다. 배열의 각 인덱스에는 DB에서 받아온 정보를 저장한다.
//DB_DATA의 각 인덱스는 마커를 의미한다.
// 사용자 1이 등록한 마커를 사용자 2가 보는 방식

// var DB_DATA =
//     //DB데이타를 임시로  강제로 설정해본다.  추후에는 다 지우고 DB의 정보 받는것으로 바뀌어야 한다.
//     [
//         {
//             //배열의 0번지,  편의성을 위해 비워놓자.
//         },
//         {  //marker1의 정보를 담았다.
//             id : 'hyewon',  //올린 사람의 아이디
//             type : '음식',  //DB에서 받아온 카테고리
//             lat : 35.893653,  //DB에서 받아온 위도
//             lng : 128.620130,  //DB에서 받아온 경도
//             title : 'Marker 1',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
//             icon : dot_color('음식'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

//             img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
//             //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
//             answer : '음식 붕어빵 가게 있어요',  //DB에서 받아온 누군가가 써놓은 설명
//         },
//         { //marker2의 정보를 담았다
//             id : 'joosub',  //올린 사람의 아이디
//             type : '공연',
//             lat : 35.900000,  //DB에서 받아온 위도
//             lng : 128.620130,  //DB에서 받아온 경도
//             title : 'Marker 2',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
//             icon : dot_color('공연'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

//             img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
//             //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
//             answer : '버스킹 하고 있어요', //DB에서 받아온 누군가가 써놓은 설명
//         },
//         { //marker3의 정보를 담았다
//             id : 'taehwan',  //올린 사람의 아이디
//             type : '사고',
//             lat : 35.893653,  //DB에서 받아온 위도
//             lng : 128.630000,  //DB에서 받아온 경도
//             title : 'Marker 3',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
//             icon : dot_color('사고'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

//             img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
//             //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
//             answer : '나는 붕어', //DB에서 받아온 누군가가 써놓은 설명
//         },
//         { //marker4의 정보를 담았다
//             id : 'sungjin',  //올린 사람의 아이디
//             type : '기타',
//             lat : 35.833312,  //DB에서 받아온 위도
//             lng : 128.749879,  //DB에서 받아온 경도
//             title : 'Marker 4',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
//             icon : dot_color('기타'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

//             img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
//             //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
//             answer : '공사중이라 길이 막혀요', //DB에서 받아온 누군가가 써놓은 설명
//         }, { //marker4의 정보를 담았다
//         id : 'qwer',  //올린 사람의 아이디
//         type : '사고',
//         lat : 35.8332,  //DB에서 받아온 위도
//         lng : 128.7679,  //DB에서 받아온 경도
//         title : 'Marker 5',  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
//         icon : dot_color('사고'), //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

//         img : '123.png',        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
//         //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
//         answer : '아', //DB에서 받아온 누군가가 써놓은 설명
//     }
//     ];
//     // DB_DATA.push(newMarker);
//     //DB_DATA에 새로운 마커를 추가한다.
// // 로컬 스토리지에 현재 상태 저장
//     localStorage.setItem('markers', JSON.stringify(DB_DATA));

// 이후 작업 (예: 지도에 마커 표시 등)
// displayMarkersOnMap();\

document.querySelector('.custom3-button').addEventListener('click',function(){
    filter_category = 'pink';
    map = null
    initMap();
})
document.querySelector('.custom4-button').addEventListener('click',function(){
    filter_category = 'yellow';
    map = null
    initMap();
})
document.querySelector('.custom5-button').addEventListener('click',function(){
    filter_category = 'red';
    map = null
    initMap();
})
document.querySelector('.custom6-button').addEventListener('click',function(){
    filter_category = 'green';
    map = null
    initMap();
})
document.querySelector('.custom77-button').addEventListener('click',function(){
    filter_category = '';
    map = null  // 이거 2개가
    initMap();  // 새로고침 야매코드
})

function dot_color(type) {
    //dot의 색깔을 정해보자
    //type이 음식,공연,사고,기타  중 뭐냐에 따라 다른 색깔을 리턴한다.
    //이것으로 icon dot의 색깔도 바꿔줄 수 있다.
    switch (type) {
        case category_type[1] :
            return 'http://maps.google.com/mapfiles/ms/icons/' + category_type_color[1] + '-dot.png';
        case category_type[2] :
            return 'http://maps.google.com/mapfiles/ms/icons/' + category_type_color[2] + '-dot.png';
        case category_type[3] :
            return 'http://maps.google.com/mapfiles/ms/icons/' + category_type_color[3] + '-dot.png';
        case category_type[4] :
            return 'http://maps.google.com/mapfiles/ms/icons/' + category_type_color[4] + '-dot.png';
        //음식이 뭐냐에 따라!!                                                         색깔이 바뀔 것이다!!
        default:
            return ''; // 예외 처리: 지정된 카테고리가 없을 경우 빈 문자열 반환
    }
}
function initMap() {
    // 맵 초기화 및 구성
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 1234, lng: 12345},
        zoom: 15
    });

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
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

            console.log("현재위도 : ",position.coords.latitude); //현재위도 확인
            console.log("현재경도 : ",position.coords.longitude); //현재경도 확인

            // 현재 위치를 지도의 중심으로 설정
            map.setCenter(userLocation);

            // 마커 추가
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Marker0'
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
                    '<button id="cam-button" class="custom8-button" onclick="handleGetPhoto()">저장하기</button>'
            });

            // 마커 클릭 이벤트 처리
            marker.addListener('click', function() {
                // 정보 창 생성
                // 정보 창을 마커 위에 표시
                infowindow.open(map, marker);
            });



            // DB_DATA 배열 초기화
            var DB_DATA = [];

            // 로컬 스토리지 (나중엔 DB) 에서 데이터 불러오기 시도
            var storedMarkers = localStorage.getItem('markers');
            if (storedMarkers) {
                // 로컬 스토리지에 데이터가 있을 경우
                DB_DATA = JSON.parse(storedMarkers);

                //DB의 정보를 받았으니, 이제 그것을 펼쳐서 마커들을 그려준다.
                displayMarkersOnMap(DB_DATA);
            } else {
                // 로컬 스토리지에 데이터가 없을 경우 DB 초기화
                DB_DATA = [];
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
var marker_obj;
function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    localStorage.setItem('lng', marker.position.lng());
    localStorage.setItem('lat', marker.position.lat());

    marker.is_save = false;

    var DB_LEN = 1;
    var storedMarkers = localStorage.getItem('markers');
    if(storedMarkers)
    {
        DB_LEN = JSON.parse(storedMarkers).length + 1;
    }

    marker.title = "Marker"+(DB_LEN);

    map.setCenter(location);

    marker_obj = marker;

    var string = '';
    for (let i = 1; i < category_type.length; i++) {
        string += "<button id="+category_type_color[i]+marker.title+" class='gray-button' value='"+category_type[i]+"' onclick=\"selectCategory('"+category_type_color[i]+"',this,'"+category_type[i]+"' )\">"+category_type[i]+"</button>";
        //음식,공연,사고,기타  의 버튼이,위의 category_type 카테고리배열에 담긴만큼 생성 될것이다!!!
    }
    var infowindow = new google.maps.InfoWindow({
        content: '<div><p>카테고리 선택</p>' +
            string+  //여기서 버튼이 만들어진다
            '<p>추가설명</p>' +
            '<input type="text" name="extra" class="form-style" placeholder="추가설명을 입력하세요">' +
            "<button id='cam-button' class='custom8-button' onclick=\"getPhoto()\">저장하기</button>"
    });

    // 마커 클릭 이벤트 처리
    marker.addListener('click', function() {
        // 정보 창 생성
        // 정보 창을 마커 위에 표시
        infowindow.open(map, marker);
    });
    // marker.addListener('closeclick', function(){
    //     // Handle focus manually.
    //     deleteMarker(marker);
    //   });
    google.maps.event.addListener(infowindow,'closeclick',function(){

        if(!marker.is_save)//저장되지 않은 마커라면..
        {
            console.log("마커 삭제");
            marker.setMap(null);
        }
        // marker.setMap(null); //removes the marker
        // then, remove the infowindows name from the array
    });
    infowindow.open(map, marker);


}
// '삭제하기' 버튼 클릭 시 호출되는 함수
function deleteMarker(marker) {
    console.log("마커 삭제");
    // Remove the marker from the map
    marker.setMap(null);
    // You can also remove other related data or perform additional tasks here

    //삭제하기 버튼을 눌렀다면, 빽엔드에서 어떻게 작업할지는 본인 마음이지만, 남들에게도 안보여야 하면서 동시에 작성자에게는 마이페이지에 남아 있어야 하므로,
    //DB구성을 조금더 생각할 필요가 있음. 삭제되었다는 플래그를 넣어서 표시를 하던지, 아예 지우고, 본인이 올린것에 대한 DB를 따로 작성하던지..
    //당연히 뭔말인지 모를테니 물어보도록.
}

function editDescription(infoWindow,i) {
    console.log(infoWindow,i)
    // 사용자로부터 새로운 설명을 입력받음, 수정하기 버튼 누를때 불리는 함수
    var newDescription = prompt('새로운 추가 설명을 입력하세요', '');

    if (newDescription !== null) {
        // 사용자가 입력한 내용을 infoWindow3에 업데이트

        infoWindow.content =  infoWindow.content.replace(
            document.querySelector('#additionalDescription'+i).textContent + '</span>',
            newDescription + '</span>'
        )

        infoWindow.setContent(infoWindow.content);
        var DB_DATA = JSON.parse(localStorage.getItem('markers'));
        DB_DATA[i].answer = newDescription;
        localStorage.setItem('markers',JSON.stringify(DB_DATA));

        // console.log("수정하기오픈")
        document.getElementById('editButton'+i).addEventListener('click',function(){
            //     console.log("수정하기클릭")
            editDescription(infoWindow,i)
        });


    }
}

//현재위치에서 마커를 등록하기 위한 사진찍기 버튼을 눌렀을때의 함수
function getPhoto() {
    //종류버튼, 추가설명, 위치
    var type = localStorage.getItem("category");
    var answer = document.querySelector('input[name=extra]').value;
    var longitude = parseFloat(localStorage.getItem("lng"));
    var latitude = parseFloat(localStorage.getItem("lat"));
    // var img = "경로를 여기에 추가";  // 이미지 경로 설정
    var id = localStorage.getItem('USER').id;  // 사용자 ID 설정
    var title = marker_obj.title;  //
    var icon = marker_obj.icon;  //

    async function add_Marker(){
        await marker_obj.setMap(null);
        console.log(type, answer, longitude, latitude, id,title,icon);
        addMarker(type, answer, longitude, latitude, id,title,icon);
    }
    add_Marker();


    return;



    // window.location.href = 'http://localhost/photo';
    let location_check = true;
    // $.ajax({
    //     url: "/user/map",
    //     data: {
    //         "type": type,
    //         "answer": answer,
    //         "lng": longitude,
    //         "lat": latitude
    //         //데이터 빈배열
    //     },
    //     type: "POST",
    //     dataType: "json",
    //     async: false,
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         console.error('Ajax 요청 오류:', textStatus, errorThrown);
    //         location_check = false;
    //         // var newMarker = new google.maps.Marker({
    //         //     position: userLocation, // 필요에 따라 위치를 변경하세요
    //         //     map: map,
    //         //     title: '새로운 마커',
    //         //     icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' // 사용자 정의 아이콘 URL로 설정
    //         // });

    //         // 여기서 추가적인 로직을 수행할 수 있습니다. 예를 들어 새로운 마커에 대한 인포 윈도우를 열 수 있습니다.
    //         infowindow.open(map, newMarker);
    //     }


    // }).done(function (rs) {
    //     console.log(rs);
    //     if (!rs.status) {
    //         // console.error('Error:', error);
    //         alert(rs.msg);
    //         location_check = false;
    //     }
    // });
    // console.log("여기까지")
    // return location_check;

}
function addMarker(type, answer, longitude, latitude,  id,title,icon) {
    // 새로운 마커를 DB_DATA에 추가
    var storedMarkers = localStorage.getItem('markers');
    if(storedMarkers){

        if(JSON.parse(storedMarkers).length >= filter_number(title))
        {
            console.log("이미 존재하는 마커입니다.")
            return;
        }
    }



    var newMarker = {
        id : id,  //올린 사람의 아이디
        type : type,  //DB에서 받아온 카테고리
        lat : latitude,  //DB에서 받아온 위도
        lng : longitude,  //DB에서 받아온 경도
        title : title,  //title은 for문으로 받아온 i로 다른 title을 설정해줄 수 있다.
        icon : icon, //위의 dot_color 함수 설명 참고 이것은 파라미터에따라 icon~~.png 를 리턴한다.

        // img : img,        //이미지는 원래는 (로컬이 아닌) 서버에 저장해둔것을 가져와야 한다. 그래야 남이 올린 사진도 볼 수 있다. (DB랑은 다른개념)
        //일단 지금은 로컬의 이미지를 가져오면 되므로, 이 이미지의 경로는 직접 지정할 수 있도록 (ex : './image/123.png' )
        answer : answer,  //DB에서 받아온 누군가가 써놓은 설명
    };

    // DB_DATA 배열 초기화
    var DB_DATA = [];

    // 로컬 스토리지 (나중엔 DB) 에서 데이터 불러오기 시도

    if (storedMarkers) {
        // 로컬 스토리지에 데이터가 있을 경우
        DB_DATA = JSON.parse(storedMarkers);

        //DB의 정보를 받았으니, 이제 그것을 펼쳐서 마커들을 그려준다.
    } else {
        // 로컬 스토리지에 데이터가 없을 경우 DB 초기화
        DB_DATA = [];
    }

    DB_DATA.push(newMarker);
    localStorage.setItem('markers', JSON.stringify(DB_DATA));

    map=null;
    initMap();
    // displayMarkersOnMap(DB_DATA);

}
// "사진찍기" 버튼 클릭 이벤트 처리
// infowindow.addListener('domready', function () {
//     document.getElementById('cam-button').addEventListener('click', function () {
//         // 버튼 클릭 시 getPhoto 함수 호출
//         var locationCheck = getPhoto();

//         var markerIcon = dot_color(type);
//         console.log(markerIcon)

//         // 위치 체크 성공 여부 확인
//         if (locationCheck) {
//             window.location.href = 'http://localhost/photo';
//             // 마커를 성공적으로 생성한 경우 infowindow를 닫음
//             infowindow.close();
//         }
//     });
// });

function handleGetPhoto() {
    getPhoto().then(function (locationCheck) {
        if (locationCheck) {
            // 위치 확인이 성공하면 페이지 이동
            window.location.href = 'http://localhost/photo';
        }
    });
}
// 정보 창 닫기 함수?? 이건 그냥 x 버튼 누르면 되는거 아님?

//이건 카테고리 선택한것을 로컬스토리지에 저장해주는 함수
function selectCategory(category_color,obj,category) {
    // 여기에서 선택한 카테고리에 대한 작업을 수행합니다.

    var result = filter_number(obj.id)

    for (let i = 1; i < category_type_color.length; i++) {
        // console.log( document.querySelector("#"+category_type_color[i]+"Marker"+result).className )
        document.querySelector("#"+category_type_color[i]+"Marker"+result).className = "gray-button";
    }



    marker_obj.icon = dot_color(category)

    obj.className = category_color+'-button';


    localStorage.setItem("category",category_color);
    // 정보 창을 닫습니다.
    // closeInfoWindow();
}
function editCategory(category_color,obj,i) {
    // 여기에서 선택한 카테고리에 대한 작업을 수행합니다.

    var result = filter_number(obj.id)

    for (let j = 1; j < category_type_color.length; j++) {
        // console.log( document.querySelector("#"+category_type_color[i]+"Marker"+result).className )
        document.querySelector("#"+category_type_color[j]+"Marker"+result).className = "gray-button";
    }


    obj.className = category_color+'-button';

    var DB_DATA = JSON.parse(localStorage.getItem('markers'));
    DB_DATA[i].type = category_color;
    DB_DATA[i].icon = dot_color(change_color_letter(category_color));
    localStorage.setItem('markers',JSON.stringify(DB_DATA));

}

function change_color_letter(item){
    for (let i = 1; i < category_type.length; i++) {
        if(item == category_type[i]){
            return category_type_color[i];
        }
        if(item == category_type_color[i]){
            return category_type[i];
        }

    }
}
function filter_number(str){
    //숫자만 걸러준다  가령  0q87dugi7dsg2 을 넣으면 08772 리턴
    var testString = str;
    var regex = /[^0-9]/g;
    var result = testString.replace(regex, "");
    return result;
}

// // 서버에서 받아온 데이터를 이용하여 지도에 마커 표시하는 함수 (이 함수는 실제로 구현되어 있지 않으므로 사용자가 적절히 구현 필요)
function displayMarkersOnMap(DB_DATA) {

    console.log("Displaying markers on the map:", DB_DATA);

    for (let i = 0; i < DB_DATA.length; i++) {
        (function(i){

            if (filter_category !== '' && DB_DATA[i].type !== filter_category) {
                // 특정 카테고리가 선택되었고, 마커 유형이 필터 카테고리와 일치하지 않으면
                // 이 카테고리에 대해 아무 작업도 수행하지 않음
            }
            else {
                //마커의 위치

                var DB_marker = new google.maps.Marker({
                    position: {
                        lat: DB_DATA[i].lat,
                        lng: DB_DATA[i].lng
                    },
                    map: map,
                    title: DB_DATA[i].title,
                    icon:  DB_DATA[i].icon,
                });
                DB_marker.is_save = true;
                DB_marker.title = DB_DATA[i].title;

                var DB_string = '';
                for (let j = 1; j < category_type.length; j++) {
                    if(DB_DATA[i].type == category_type_color[j]) {
                        DB_string += '<button class="'+category_type_color[j]+'-button" id="'+category_type_color[j]+DB_DATA[i].title+i+'" onclick=editCategory("'+category_type_color[j]+'",this,"'+i+'")>'+category_type[j]+'</button>';
                    }
                    else {
                        DB_string += '<button class="'+category_type_color[0]+'-button" id="'+category_type_color[j]+DB_DATA[i].title+i+'" onclick=editCategory("'+category_type_color[j]+'",this,"'+i+'")>'+category_type[j]+'</button>';
                    }
                }

                var edit_btn = '';
                var delete_btn = '';
                var my_ID = localStorage.getItem('USER').id;

                if(DB_DATA[i].id == my_ID) {
                    edit_btn = '<button class="tnwjd-button'+i+'" id="editButton'+i+'">수정하기</button>';
                    delete_btn = '<button class="tkrwp-button'+i+'" id="deleteButton'+i+'">삭제하기</button>';
                }

                var info_content =
                    '<div><p>카테고리</p>' +
                    DB_string +
                    '<br>'+
                    '<span id="additionalDescription'+i+'">'+DB_DATA[i].answer+'</span>' +
                    '<br>'+
                    // '<img src="'+DB_DATA[i].lolokslk+'" alt="#">' +
                    '<br>'+
                    edit_btn +
                    delete_btn;

                var DB_infoWindow = new google.maps.InfoWindow({
                    content: info_content
                });

                (function(){

                    DB_marker.addListener('click', async function () {

                        await DB_infoWindow.open(map, DB_marker);


                        for (let j = 1; j < category_type.length; j++) {
                            document.querySelector('#'+category_type_color[j]+DB_DATA[i].title+i).addEventListener('click',function(){
                                // console.log("버튼도 색깔체인지 해주자")
                            });

                        }

                        // console.log("수정하기오픈")
                        document.getElementById('editButton'+i).addEventListener('click',function(){
                            // console.log("수정하기클릭")
                            editDescription(DB_infoWindow,i)
                        });
                        document.getElementById('deleteButton'+i).addEventListener('click',function(){
                            //     console.log("삭제하기클릭")
                            deleteMarker(DB_marker);
                            var DB_DATA = JSON.parse(localStorage.getItem('markers'));
                            DB_DATA.splice(i, 1);
                            localStorage.setItem('markers',JSON.stringify(DB_DATA));
                        });

                    });
                }());



            }

        })(i);

    }
}

// // 서버에서 데이터를 가져와서 DB_DATA에 저장하는 함수
// function selectSqldata() {
//     $.ajax({
//         type: "GET",
//         url: "/selectSqldata", // 서버에서 마커 데이터를 제공하는 엔드포인트
//         success: function (data) {
//             // 서버에서 받아온 데이터를 확인 (콘솔에 출력)
//             console.log("Data received from the server:", data);

//             // 받아온 데이터의 형식이 예상과 다를 경우 가공이 필요할 수 있음
//             // 예시: DB_DATA에 직접 할당
//             DB_DATA = data;

//             // 데이터를 이용하여 지도에 마커 표시 등의 작업 수행 가능
//             displayMarkersOnMap();
//         },
//         error: function (xhr, status, error) {
//             console.error("Error fetching markers:", status, error);
//         }
//     });
// }

// // 페이지 로드 시 서버에서 마커 데이터를 가져옴
// $(document).ready(function () {
//     selectSqldata();
// });


// function deleteMarker(markerIndex) {
//     // 마커를 삭제한 후 DB_DATA 업데이트

//     // 로컬 스토리지에 현재 상태 저장
//     localStorage.setItem('markers', JSON.stringify(DB_DATA));

//     // 이후 작업 (예: 지도에 마커 표시 새로고침 등)
//     displayMarkersOnMap();
// }


//현재위치에서 마커를 등록하기 위한 사진찍기 버튼을 눌렀을때의 함수
// function getPhoto()  {
//     //종류버튼, 추가설명, 위치
//     var type = localStorage.getItem("category");//selectCategory
//     var answer = document.querySelector('input[name=extra]').value;
//     var longitude =  parseFloat(localStorage.getItem("lng"));
//     var latitude = parseFloat(localStorage.getItem("lat"));
//
//     console.log(type,answer,longitude,latitude);
//
//     let location_check = true;
//     $.ajax({
//         url: "/user/map",
//         data: {
//             "type" : type,
//             "answer" : answer,
//             "lng" : longitude,
//             "lat" : latitude
//         },
//         type: "POST",
//         dataType:"json",
//         async:false,
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.error('Ajax 요청 오류:', textStatus, errorThrown);
//             location_check = false;
//         }
//
//
//     }).done(function(rs){
//         console.log(rs);
//         if(!rs.status){
//             // console.error('Error:', error);
//             alert(rs.msg);
//             location_check=false;
//         }
//     });
//     console.log("여기까지")
//     return location_check;
//
//     // 새로운 마커 생성
//     var newMarker = new google.maps.Marker({
//         position: { lat: latitude, lng: longitude },
//         map: map,
//         title: '새로운 마커',
//         icon:  markerIcon // dot_color 함수를 이용해 아이콘 설정
//     });
//
//     // 마커 클릭 이벤트 처리
//     var InfoWindow = new google.maps.InfoWindow({
//         content: '새로운 마커의 정보 창',
//     });
//
//     newMarker.addListener('click', function () {
//         InfoWindow.open(map, newMarker);
//     });
//
//     // 위치 체크 성공 여부를 반환할 수 있습니다.
//     return true;
//
// }