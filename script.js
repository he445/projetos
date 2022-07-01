window.addEventListener("scroll", function() {showFunction()});

function showFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementsByClassName("showdownon").style.display = "none";
    } else {
        document.getElementById("showdownon").style.display = "block";
    }
}
showFunction()