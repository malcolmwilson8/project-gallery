const projects = document.querySelectorAll('.project');

    function toggleOpen() {
        this.classList.toggle('open');
    }

    projects.forEach(project => project.addEventListener('click', toggleOpen));

    function myFunction() {
        var x = document.getElementById("placeholder-text1");
        if (x.innerHTML === "") {
          x.innerHTML = "My first project was all about building a page dedicated to my hobby of skateboarding.";
        } else {
          x.innerHTML = "";
        }
      }

      function myFunction2() {
        var x = document.getElementById("placeholder-text2");
        if (x.innerHTML === "") {
          x.innerHTML = "My second project entailed building a gallery displaying the projects I`ve been working on.";
        } else {
          x.innerHTML = "";
        }
      }

      function myFunction3() {
        var x = document.getElementById("placeholder-text3");
        if (x.innerHTML === "") {
          x.innerHTML = "My third project centered around building a fully functional comment box system."
        } else {
          x.innerHTML = "";
        }
      }
  
      function myFunction4() {
        var x = document.getElementById("placeholder-text4");
        if (x.innerHTML === "") {
          x.innerHTML = "For my fourth project I built a user interface using HTML, and populated it with data from a JavaScript object containing data from some of Wes Anderson's films."
        } else {
          x.innerHTML = "";
        }
      }

      function myFunction5() {
        var x = document.getElementById("placeholder-text5");
        if (x.innerHTML === "") {
          x.innerHTML = "For project five I built a website to support my Founders and Coders application, containing information on myself and why I wanted to apply to the skills bootcamp."
        } else {
          x.innerHTML = "";
        }
      }
  
      function myFunction6() {
        var x = document.getElementById("placeholder-text6");
        if (x.innerHTML === "") {
          x.innerHTML = "For my sixth and final project I built a 3d spinner feature on my website, displaying information on the projects I had completed during the application process."
        } else {
          x.innerHTML = "";
        }
      }
  
