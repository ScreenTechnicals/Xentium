const toggle = () => {
  if (document.getElementById("navbar").style.width === "100%") {
    document.getElementById("navbar").style.width = "0";
    document.getElementById("b1").style.width = "";
  } else {
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("b1").style.width = "20px";
  }
};
