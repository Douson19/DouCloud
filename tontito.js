
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let cursor = document.getElementById("cursor");
const onMouseMove = (event) => {
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";
    
    if (event.target.hasAttribute("cursor-type")) {
        let cursorSize = event.target.getAttribute("cursor-type");
        cursor.classList.add(cursorSize);
    } else {
        cursor.classList = "";
    }
};

document.addEventListener("mousemove", onMouseMove);
