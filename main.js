//Read More Read Less Button
var readMoreButtons = document.getElementsByClassName('read');

function read() {
  var dots = this.parentElement.children[0].children[0];
  var moreText = this.parentElement.children[0].children[1];

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    this.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    this.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

for (i = 0; i < readMoreButtons.length; i++) {
  readMoreButtons[i].addEventListener('click', read);
}

//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});

//Tabbed Content

var navTabs = document.getElementById('nav-tab').children;

function onTabClick() {
  for (i = 0; i < navTabs.length; i++) {
    navTabs[i].classList.remove('active');
  }

  var allTabs = document.getElementsByClassName('tab-pane');
     
  for (i = 0; i < allTabs.length; i++) {
     allTabs[i].style.display = 'none';
    }

  this.classList.add('active');

  var concertsContent = document.getElementById('concerts');
  var yogaContent = document.getElementById('yoga');
  var cleanupsContent = document.getElementById('cleanups');
  var sponsorContent = document.getElementById('sponsor');

  if (this.children[0].innerHTML == 'Concerts') {
    concertsContent.style.display == 'block';
  } else if (this.children[0].innerHTML == 'Yoga In The Park') {
    yogaContent.style.display = 'block';
  } else if (this.children[0].innerHTML == 'Cleanups') {
    cleanupsContent.style.display = 'block';
  } else if (this.children[0].innerHTML == 'Sponsor Message') {
    sponsorContent.style.display = 'block';
  } else {
    return;
  }
}  

  for (i = 0; i < navTabs.length; i++) {
    navTabs[i].addEventListener('click', onTabClick);
  }

// Random Chuck Norris Jokes API

var button = document.getElementById('generate-joke-button');

function generateRandomJoke() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var apiResult = JSON.parse(this.responseText);

      // Populate Jokes
        var chuckNorrisJokeParagraph = document.getElementById('chuck-norris-joke');
        chuckNorrisJokeParagraph.innerHTML = apiResult.value.joke;
      }
};
xmlhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
xmlhttp.send();
}

 // Button Click Event Listener
 button.addEventListener('click', generateRandomJoke);
