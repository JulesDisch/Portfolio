var html
html = '<div class="navbar"><a id="logo" href="../Responsive-Portfolio/index.html">Julia Dischell</a><nav><div class="dropdown"><button class="dropbtn"><a>About</a><i class="fa fa-caret-down"></i></button><div class="dropdown-content"> <a href = "../Responsive-Portfolio/index.html"> Bio</a> <a href="../Responsive-Portfolio/resume.html" target="_blank">Resume</a> <a href="../Responsive-Portfolio/assets/images/JuliaDischellTech2025.pdf" target="_blank">Resume</a> <a href="https://www.linkedin.com/in/juliadischell/" target="_blank">LinkedIn</a> <a href="https://github.com/JulesDisch" target="_blank">GitHub</a> </div > </div > <div class="dropdown"> <button class="dropbtn"> <a>Contact</a> <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content"> <a href="mailto:jmdischell@gmail.com">Email</a> <a href="tel:12158962289">Call</a> <a href="../Responsive-Portfolio/contact.html">Contact form</a> </div> </div> <a href="../Responsive-Portfolio/portfolio.html">Portfolio</a></nav ></div > '

$(document).ready(function(){

 $("header").html(html)
 
 });
console.log(html)
