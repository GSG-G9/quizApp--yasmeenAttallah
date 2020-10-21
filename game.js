document.querySelector(".start").onclick= function startQuiz (){
    let yourName = document.querySelector(".palyerName").value;
      let game= document.querySelector(".quizz");
      let front= document.querySelector(".front");
     if(yourName === ""){
         alert("Please Enter Your Name"); }
     else{
       front.style.display="none";
        game.style.display="block"; }
    };

    
