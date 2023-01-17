const btnObj = document.getElementsByTagName("button");

function showtime() {
    const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
  }
function clear(){
    document.getElementById("time").innerHTML = ` `; 
    document.getElementById("date").innerHTML = ` `; 
}
 
btnObj[0].addEventListener("click",showtime);
btnObj[1].addEventListener("click",clear);
