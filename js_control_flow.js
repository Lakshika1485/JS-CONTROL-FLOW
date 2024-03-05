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