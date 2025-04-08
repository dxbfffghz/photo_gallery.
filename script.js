function upDate(previewPic) {
  // Log to check event trigger
  console.log("Mouse over:", previewPic.alt);

  // Change background image of div
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  // Update text with alt text
  imageDiv.innerHTML = previewPic.alt;
}

function undo() {
  // Reset background image and text
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
