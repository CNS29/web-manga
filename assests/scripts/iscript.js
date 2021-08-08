const btnMore = document.querySelector(".i-more");
const btnChapter = document.querySelector(".i-chapter-more");
const tab = document.querySelector(".i-comic__nav__comment__tab");
const textArea = document.querySelector(".text-area");
const btnComment = document.querySelector(".submit-comment");
const areaComment = document.querySelector(".i-comment-card");

tab.onclick = (e) => {
    console.log();
    if(!e.target.closest(".tab__item").classList.contains("tab__item--active")) {
        tab.querySelector(".tab__item--active").classList.remove("tab__item--active");
        e.target.closest(".tab__item").classList.add("tab__item--active");
    }
}

if(document.querySelector(".i-comic-content__desc").scrollHeight > 60) {
    btnMore.onclick = () => {
        document.querySelector(".i-comic-content__desc").classList.toggle("short-text");
        if(!document.querySelector(".i-comic-content__desc").classList.contains("short-text")) {
            btnMore.querySelector("p").innerHTML = "Thu gọn";
        }else {
            btnMore.querySelector("p").innerHTML = "Xem thêm";
        }
    }
}else {
    document.querySelector(".i-comic-content__desc").classList.remove("short-text");
    btnMore.style.display= "none";
}

if(document.querySelector(".i-comic-chapter").scrollHeight > 660) {
    btnChapter.onclick = () => {
        document.querySelector(".i-comic-chapter").classList.remove("show-chapter");
        btnChapter.style.display= "none";
    }
}else {
    document.querySelector(".i-comic-chapter").classList.remove("show-chapter");
    btnChapter.style.display= "none";
}

btnComment.onclick = () => {
    let getValueCommnet = textArea.value;
    let htmls = `
    <li>
        <div class="i-comment-img">
            <img src="./assests/image/hinh-anh-hot-girl-xinh-han-quoc-wap102-com (1).jpg" alt="">
            <span class="answer">Trả lời</span>
        </div>
        <div class="i-comment-infor">
            <p class="comic-infor__name">Cảnh Nguyễn</p>
            <p class="comic-member">Thành viên</p>
            <span class="comic-infor__time"><i class="far fa-clock"></i> Vừa đăng</span>
            <span class="comic-read__chapter">Chapter 369</span>
            <p class="comment">${getValueCommnet}</p>
        </div>
    </li>
    `;
    areaComment.insertAdjacentHTML("afterbegin", htmls);
    textArea.value = "";
}
