var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

// set the attributes for link element  
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'style.css';

// Append link element to HTML head 
head.appendChild(link);
const video = `

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <video controls>
    <source src="./Mitsubishi.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  </div>

</div>`;
document.getElementsByTagName("BODY")[0].innerHTML = video;

var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", function(){
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

