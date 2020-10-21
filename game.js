document.querySelector(".start").onclick= function startQuiz (){
    let yourName = document.querySelector(".palyerName").value;
      let game= document.querySelector(".quizz");
      let front= document.querySelector(".front");
     if(yourName === ""){
         alert("Please Enter Your Name"); }
     else{
       front.style.display="none";
        game.style.display="block"; 
        makingQuestion() ;}
    };

    

    const quiz=document.querySelector(".quizz");
    let questions =[
    {
        question:"What is the data type used for the following variable var answer1 = 'It's alright';?",
        choices:["String","Boolean","Number","text",],
        answer:0
        
    },
    {
        question:"What is the code that could be used to count the number of characters in a value of a variable ?",
        choices:[".count",".width",".length",".total"],
         answer :2
    },
    {
        question:"What is the code used to allow user input as a value to a variable in JavaScript?",
        choices:["Enter","Input","Prompt","alret"],
        answer:2,
    },
    {
        question:"JavaScript was designed to add _____________________ to HTML pages?",
        choices:["page","interactivity","files","Nothing"],
        answer:1,
    
    },
    {
        question:"Java Script is ___________ sensitive language",
        choices:["insensitive","case","useless","1+2"],
        answer:1,
    
    },
    {
        question:" If there is a mistake or problem in the computer program, there is a",
        choices:["debug","bug","persist","frustrate"],
        answer:1,
    
    },
    {
        question:" What are 'comments' in code for",
        choices:["sharing code with other programmers","plans for code they write.","both option 1 & option 2","None of these"],
        answer:2,
    
    },
    {
        question:" console.log('1'===1)?",
        choices:["false","true","null","undefined"],
        answer:0,
    
    },
    
    {
        question:" JavaScript Code is written inside file having extension?",
        choices:[".jvs",".jfs",".html",".js"],
        answer:3,
    
    },
    {
        question:" console.log('1'+'2')?",
        choices:["3","4","null","12"],
        answer:3,
    
    },
    {
        question:" Iteration: ?",
        choices:["construct that repeats","a counting variable","loop by another name","none of these"],
        answer:2,
    
    },
    
    {
        question:" Which of the following is not JavaScript Data Types?",
        choices:["Number","Boolean","symbol","float"],
        answer:3,
    
    },
    
    
    ];
     localStorage.setItem("questions", JSON.stringify(questions));
   
    var jsonString = localStorage.getItem("questions");
        
   
    let Quiz = JSON.parse(jsonString);
   
    let queryQuestion =[];
    
    
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click",makingQuestion);
     function makingQuestion(){
        let randomIndex = Math.floor(Math.random() * Quiz.length);
        let questionSelect = document.querySelector("#questionGame");
        questionSelect.innerHTML = Quiz[randomIndex].question;
        for (let i = 0; i <= 4; i++) {
            var answerChoice = document.getElementsByClassName("choice");
               answerChoice[i].innerHTML= Quiz[randomIndex].choices[i];
                  
              }
            }