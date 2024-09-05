let firstVar = "";
let secondVar = "";
let thirdVar = "";

function operate(a, b, c){
    
    switch (b){
        case "+":
            return a+c;
        case "-":
            return a-c;
        case "*":
            return a*c;
        case "/":
            return a/c;
        case "%":
            return (a/c)*100;
    }
}

let text = "";

let currText = "";

let textDiv = document.querySelector(".text");

let currDecimal = 0;

function display(event){

    currText = event.target.textContent;

    if (currText == "."){
        let decimalIndex = text.indexOf(".");

        if (decimalIndex!=-1){

            return textDiv.textContent = text;

        }
    }

    if (currText == "+/-"){
        if(text[0] != "-"){
            text = "-" + text;
        }
        else if (text[0]=="-"){
            let dummyString = text.slice(1);
            text = dummyString;
        }
        return textDiv.textContent = text;
    }

    if (currText == "+" || currText == "-" || currText == "*" || currText == "/" || currText == "%"){
         firstVar = text;
         secondVar = currText;
         text = "";

         return firstVar;
    }
    
    if (currText=="="){

        if (secondVar==""){
            return textDiv.textContent = text;
        }
        
        thirdVar = text;

        if (thirdVar==""){
            return firstVar;
        }

        newFirstVar = Number(firstVar);
        newThirdVar = Number(thirdVar);

        if (secondVar == "/" && newThirdVar == 0){
            thirdVar = "";
            return textDiv.textContent = "Genius :3";
        }

        let result  = operate(newFirstVar, secondVar, newThirdVar);

        text = result;

        return textDiv.textContent = result;

    }

    if (currText == "AC"){
        firstVar = 0;
        secondVar = 0;
        thirdVar = 0;
        newFirstVar = 0;
        newThirdVar = 0;

        text = "";
        currText = "";

        return textDiv.textContent = "";
    }

    text  = text+currText;

    return textDiv.textContent = text;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", display);
});