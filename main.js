//Read More Read Less Button
function read() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});


//Tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
  if(e.target.tagName == "LI"){
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach(function(panel){
      if (panel == targetPanel){
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    })
  }
})

//Popup Ad
window.onload = function () {
  document.getElementById('button').onclick = function () {
      document.getElementById('modal').style.display = "none"
  };
};       

//Random Quotes
var quotes = ["look in the mirror. Are you looking at me?",
              "It is time for a rhyme, I guess.",
              "Where is my JavScript book?",
              "If I had a buck for every dollar I spent. Ooops!"
              "I am quote number 5",
              "I am quote number 6",
              "I am quote number 7",
              "I am quote number 8",
              "I am quote number 9",
              "I am quote number 10"
];

var q_div = document.getElementById("my-quote");
var rand_int = Math.floor(Math.random() * 10);
q_div.innerHTML = quotes[rand_int];