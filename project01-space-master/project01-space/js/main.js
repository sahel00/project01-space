/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

    
    document.getElementsByClassName("mission-image").onclick = function showInfo() {
    
    var x = document.getElementsByClassName("destination");
    var x = document.getElementsByClassName("equipment");
    var x = document.getElementsByClassName("crew");

    if (x.className != "show") {
      x.className = "show";
    } else {
      x.className = "";
    }

  }