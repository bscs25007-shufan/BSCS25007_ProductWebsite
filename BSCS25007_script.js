window.onload=function()
{

    alert("Welcome to MobixGear");
}

document.getElementById("chatForm").addEventListener("submit", chatbot);

document.getElementById("footerjs").textContent = "year: " + new Date().getFullYear();

function getstock(id){

    let status=document.getElementById(id).textContent;
    if(status.includes('in stock')){
        alert("Item is in stock");
    }
    else
    {
        alert("Item is out of stock");
    }
}

function validation()
{

    var name=document.getElementById("name").value; 
    var  email=document.getElementById("email").value;
    var contact=document.getElementById("phone").value;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(name==""||email==""||contact=="")
    {
        alert( "All fields are mandatory" );
    }
    else if(pattern.test(email))
    {

        alert("form submitted");

    }
    else{

        alert("Invalid email");
    
    }
}

function chatbot(event) {
 
  event.preventDefault();

  var question = document.getElementById("q1").value.toLowerCase().trim();
  var answer = "";

  if (question === "how are you") {
    answer = "good";
  } else if (question === "what is your name") {
    answer = "sfn bot";
  } 
  else if(question=="what do you sell")
  {
    answer="laptops mobiles and their acessories";
  }
  else if(question=="can i get a laptop here")
  {
    answer="yes its available :) ";
  }
  else {
    answer = "I don't understand.";
  }

  document.getElementById("m1").textContent = "you: " + question;
  document.getElementById("m2").textContent = "bot: " + answer;
}
