
 function ordinalNumber(n) {
    if(n%100 == 11 || n%100 == 12 || n%100 == 13)
    {
      return n+"th";
    }
  else if(n%10 == 1)
    {
      return n+"st"
    }
  else if(n%10 == 2)
        {
          return n+"nd"
       }
 else if(n%10 == 3)
        {
          return n+"rd"
        }
    return n + "th";
 }

//n=prompt("Enter a Number: ");
//alert("The Ordinal number of"+" "+n+" is: "+ordinalNumber(n));


$("button").click(function(){
  var n = document.getElementById("input").value;
  document.getElementById("demo").innerHTML = n;

 $("p").text("The ordinal no of " +n+ " is: " + ordinalNumber(n));
});
