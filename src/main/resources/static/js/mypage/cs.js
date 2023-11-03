function validateForm() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("제목과 내용 모두 입력해주세요.");
        return false;
    }
    return true;
}