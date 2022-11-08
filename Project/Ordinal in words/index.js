 one = [ "", " first ", " second ", " third ", " fourth ",
                 " fifth ", "sixth ", "seventh", " eighth ",
                 " nineth ", "tenth ", "eleventh ", " twelvth ",
                 " mthirteenth ", " fourteenth ", " fifteenth ",
                 "sixteenth ", " seventeenth ", " eighteenth ",
                 " nineteenth " ];

 ten = [ "", "", "twenty", "thirty", "forty",
                 "fifty", "sixty", "seventy", "eighty",
                 "ninety" ];


function ordToWords(n){
    var str = "";

    if(n%10==0){
        str += ten[Math.floor(n /10)]+"th";
    }
    else if (n > 19){
        str += ten[Math.floor(n /10)] + one[n % 10];
      }

    else
    {
        str += one[n];
    }



    return str;
    console.log(str);
}


$("button").click(function(){
  var n = document.getElementById("input").value;
  document.getElementById("ordinal").innerHTML = n;

 $("p").text("The ordinal number of " +n+ " is : " + ordToWords(n));
});
