let b = document.getElementById("invio");
let t = document.getElementById("back");

function registrati() {
  if (document.getElementById("login").value == "")
    alert("Inserisci indirizzo email");
  else {
    let x = /\w+@\w+\.\w{2,4}/i;
    if (x.test(document.getElementById("login").value) == false)
      alert("Inserire un indirizzo email valido");
    else {
      document.getElementById("middle").style.visibility = "hidden";
      document.getElementById("grazie").style.visibility = "visible";
      document.getElementById("login").value = "";
    }
  }
}

function torna() {
  document.getElementById("middle").style.visibility = "visible";
  document.getElementById("grazie").style.visibility = "hidden";
}

b.addEventListener("click", registrati);
t.addEventListener("click", torna);
