const projects = document.querySelectorAll('.project');

    function toggleOpen() {
        this.classList.toggle('open');
    }

    projects.forEach(project => project.addEventListener('click', toggleOpen));

    function myFunction() {
        var x = document.getElementById("placeholder-text");
        if (x.innerHTML === "") {
          x.innerHTML = "My first project was all about building a page dedicated to my hobby of skateboarding.";
        } else {
          x.innerHTML = "";
        }
      }