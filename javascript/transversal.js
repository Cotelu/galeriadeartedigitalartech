var images = document.getElementsByClassName("myImg");


var modal = document.querySelector(".modal");
var modalImg = modal.querySelector(".modal-content");
var captionText = modal.querySelector(".caption");
var closeBtn = modal.querySelector(".close");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  
    captionText.innerHTML = this.alt;
  });
}


closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});