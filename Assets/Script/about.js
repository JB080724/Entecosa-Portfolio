document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav ul");
  
    menuToggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
  });
  
  const text = document.querySelector(".sec-text");
  
  const textLoad = ()=> {
    setTimeout(() => {
      text.textContent = "cooking";
    }, 0);
    setTimeout(() => {
      text.textContent = "playing chess";
    },4000);
    setTimeout(() => {
      text.textContent = "watching anime";
    }, 8000);
    setTimeout(() => {
        text.textContent = "playing ML";
      }, 12000);
    setTimeout(() => {
        text.textContent = "Listening to music";
      }, 16000);  
  }
  
  textLoad()
  setInterval(textLoad, 20000);
  