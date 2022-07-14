let result = document.getElementById('result')
let operator = '';
let firstNum = '';
let seconNum =''
let output='';

//to clear the screen (AC)
function clearscreen(){
    output='';
    operator='';
    firstNum='';
    seconNum='';
    result.value=0;
}
//to delete a single data (Mc)
function del(){
   result.value=result.value.slice(0,-1)
   firstNum=result.value
}

//to calulate the arithmeic values
function display(val){
    //  if(result.value>=1 && operator.length>=1 && firstNum.length>=1 && seconNum.length>=1){
    //     console.log('hello')
    //     result.val=''
    //     firstNum=val;
    //     result.value+=val;
    //     console.log(firstNum)
    // }
    if((val >= 0 && val !='-' && val != '+' && val != '*' && val != '/' && val != '%') && (operator.length==0 )){
        console.log("this is first number");
        result.value=''
        firstNum+=val;
        result.value+=firstNum;
        console.log(firstNum)
    }
    else if ((val == "*" || val == "-" || val == '+' || val == '/' || val=='%') && (operator.length<=0)){
        console.log("this is operator")
        operator=val;
        result.value+=val;
        console.log(operator)
    }
    else if (operator.length==1 && firstNum.length >=1){
        console.log('this is second number')
        seconNum+=val;
        result.value+=val;
        console.log (seconNum)
    }
    else{
        result.value="invalid error";
    }
}




sum=()=>{output = parseFloat(firstNum) + parseFloat(seconNum)}

sub=()=>{output = parseFloat(firstNum) - parseFloat(seconNum)}

mul=()=>{output = parseFloat(firstNum) * parseFloat(seconNum)}

div=()=>{output = parseFloat(firstNum) / parseFloat(seconNum)}

rem=()=>{output = parseFloat(firstNum) % parseFloat(seconNum)}


function calculate(){
    if(operator=='+'){
        sum();
        console.log (output)
        result.value = output;
        firstNum=result.value;
        seconNum=0;
        operator=''
    }
    else if(operator=='-'){
        sub();
        console.log (output)
        result.value = output;
        firstNum=result.value;
        seconNum=0;
        operator=''
    }
    else if (operator=='*'){
        mul();
        console.log(output);
        result.value=output
        firstNum=result.value;
        seconNum=0;
        operator=''
    }
    else if (operator=='/'){
        div();
        console.log(output)
        result.value = output;
        firstNum=result.value;
        seconNum=0;
        operator=''
    }
    else{
        rem();
        console.log(output);
        result.value = output;
        firstNum=result.value;
        seconNum=0;
        operator=''
    }
}