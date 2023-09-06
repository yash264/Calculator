function add()
{
    var number1,number2,sum;

    number1=parseInt(document.getElementById("num1").value);
    number2=parseInt(document.getElementById("num2").value);

    sum=number1+number2;
    document.getElementById("result").value=sum;

}

function sub()
{
    var number1,number2,subtact;

    number1=parseInt(document.getElementById("num1").value);
    number2=parseInt(document.getElementById("num2").value);

    subtact=number1-number2;
    document.getElementById("result").value=subtact;

}

function multi()
{
    var number1,number2,multiply;

    number1=parseInt(document.getElementById("num1").value);
    number2=parseInt(document.getElementById("num2").value);

    multiply=number1*number2;
    document.getElementById("result").value=multiply;

}

function div()
{
    var number1,number2,divide;

    number1=parseInt(document.getElementById("num1").value);
    number2=parseInt(document.getElementById("num2").value);

    divide=number1/number2;
    document.getElementById("result").value=divide;

}


