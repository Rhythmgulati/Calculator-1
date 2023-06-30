

var display = document.getElementById("inputbox");

   function input(value){
   display.value += value;
   }
   function equals(){
   display.value = eval(display.value);
   }
   
    function del(){
    const resultInput = display.value;
    display.value = resultInput.substring(0, display.value.length - 1);
    }
    function ac(){
       display.value= " ";
    }


   document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs


function keyboardInputHandler(e) {

  e.preventDefault();
  

  
  if (e.key === "0") {
    display.value += "0";
  } else if (e.key === "1") {
    display.value += "1";
  } else if (e.key === "2") {
    display.value += "2";
  } else if (e.key === "3") {
    display.value += "3";
  } else if (e.key === "4") {
    display.value += "4";
  } else if (e.key === "5") {
    display.value += "5";
  } else if (e.key === "6") {
    display.value += "6";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "8") {
    display.value += "8";
  } else if (e.key === "9") {
    display.value += "9";
  }


  if (e.key === "+") {
    display.value += "+";
  } else if (e.key === "-") {
    display.value += "-";
  } else if (e.key === "*") {
    display.value += "*";
  } else if (e.key === "/") {
    display.value += "/";
  }

  
  if (e.key === ".") {
    display.value += ".";
  }

  
  if (e.key === "Enter") {
    equals();
  }

  
  if (e.key === "Backspace") {
    const resultInput = display.value;
    
    display.value = resultInput.substring(0, display.value.length - 1);
  }
}