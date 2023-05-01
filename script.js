
var turn=0;
function abc(e)
{
    var check=e;
    var a="hey"+e;
    if(turn === 0)
    {
        document.getElementById(a).style.backgroundColor="red";
        turn++;
    }
 
        else{
         document.getElementById(a).style.backgroundColor="black";
         turn=0;

        }
 }
  
   
   

