function upDate(previewPic) {
  document.getElementById("image").style.background =
    "url(" + previewPic.src + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  x = document.getElementById("image");
  x.style.background = "#8e68ff";
  x.innerHTML = "Hover over an image below to display here";
}
