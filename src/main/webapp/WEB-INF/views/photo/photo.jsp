<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<div id="my_camera" style="width: 640px; height: 480px;"></div>
 <video autoPlay="autoplay" style="width: 640px; height: 480px;"></video>
 <div id="results"></div>
 <input type="button" value="Take Snapshot" onClick="take_snapshot()">
     <button id="next-button" className="next-button">다음</button>
     <button class="re-button" className="rext-button" id="re-button" >다시 촬영</button>
    <a href="map" class="back-button" id="go-back-button">뒤로가기</a>
