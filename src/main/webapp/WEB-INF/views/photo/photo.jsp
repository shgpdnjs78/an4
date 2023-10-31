<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>

<div id="my_camera" style="width: 640px; height: 480px;"></div>
 <video autoPlay="autoplay" style="width: 640px; height: 480px;"></video>
 <div id="results"></div>
 <input type="button" value="Take Snapshot" onClick="take_snapshot()">
     <button id="next-button" className="next-button">다음</button>