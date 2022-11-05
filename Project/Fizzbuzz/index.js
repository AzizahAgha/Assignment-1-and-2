var out= [];
  count=1;

function fizzbuzz() {

    while(count<=30){

               if(count%3==0 && count%5==0)
              {
                out.push("fizzbuzz");
              }
              else if(count%3==0)
              {
                out.push("fizz");
              }
              else if(count%5==0){
                out.push("buzz");
              }else{
                  out.push(count);
              }

       count++;
     }
console.log(out);
document.getElementById("print").innerHTML=out;
}
