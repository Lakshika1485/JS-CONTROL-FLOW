document.write("<h2>WRITE A JAVASCRIPT PTOGRAM THAT TAKES A NUMBER AS INPUT AND PRINTS WHETHER THE NUMBER IS POSITIVE, NEGATIVE OR ZERO</h2>");

function checknumber(n)
{
  if (n>0)
  {
    document.write("Number is positive."+'<br>');
  }
  else if(n<0)
  {
    document.write("Number is negative. " +'<br>');
  }
  else{
    document.write(`Number is zero. <br>`);
  }
}
checknumber(5);

document.write("<h4>WRITE A JAVASCRIPT PROGRAM THAT TAKES A DAY OF THE WEEK AS INPUT (using numbers 1 to 7, where 1 represnts sunday and 7 represents saturday) and prints whether it is a weekday or a weekend.....</h4>");


function checkday(day)
{
    if(day>=1 && day<=5)
    {
        document.write('this is weekday');
    }
    else if(day>=6 && day<=7)
    {
        document.write('this is weekend');

    }
    else{
        document.write('invalid day');

    }
}
checkday(3);