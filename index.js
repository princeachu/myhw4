// wait until document is loaded 
 var questions = [
    {q: "CSS stands for cascading style sheet.", a: "t"},
    {q: "HTML stands for Hyper Text Markup Lyrics.", a: "f"},
    {q: "HTML elements are represented by content.", a: "f"},
    {q: "CSS is for adding content to the webpage.", a: "f"},
    {q: "Javascript defines two type of values", a: "t"},
];
  document.getElementById("start").addEventListener("click", function(){
     var count = 60, timer = setInterval(function() {
      $("#timer").html(count--);
      if(count == -1) clearInterval(timer);
      }, 1000);
      for (var i = 0; i < questions.length; i++){
        confirm(questions[i].q);
      }
  });
  // do something 

