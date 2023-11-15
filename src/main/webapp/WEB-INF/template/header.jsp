<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<h1 class="visually-hidden">Headers examples</h1>
<header class="p-3 text-bg-dark">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="map" class="nav-link px-2 text-secondary">지도</a></li>
                <li><a href="mypage" class="nav-link px-2 text-white">마이페이지</a></li>
<%--                <li><a href="#" class="nav-link px-2 text-white">게시판</a></li>--%>
                <li><a href="#" class="nav-link px-2 text-white">새로고침</a></li>
                <li><a href="cs" class="nav-link px-2 text-white">문의사항</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search…" aria-label="Search">
            </form>

            <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <a button href="login" class="btn btn-warning">Logout</a>
            </div>
        </div>
    </div>
</header>
