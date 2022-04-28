function recWeight(){
    var a = parseInt(document.getElementById('age').value);
    var w = parseInt(document.getElementById('weight').value);
    
    if(a >= 5 && a <= 7){
        if(w >= 15 && w <=20){
            document.getElementById("result").innerHTML = "Keep it Up!";            
        }
        if(w < 15){
            document.getElementById("result").innerHTML = "You are underweight";            
        }
        if(w > 20){
            document.getElementById("result").innerHTML = "You are overweight";            
        }
    }
else if(a >= 8 && a <= 10){
        if(w >= 21 && w <=25){
            document.getElementById("result").innerHTML = "Keep it Up!";            
        }
        if(w < 21){
            document.getElementById("result").innerHTML = "You are underwight";            
        }
        if(w > 25){
            document.getElementById("result").innerHTML = "You are overweight";            
        }
    }
else if(a >= 11 && a <= 15){
        if(w >= 26 && w <=30){
            document.getElementById("result").innerHTML = "Keep it Up!";            
        }
         if(w < 26){
            document.getElementById("result").innerHTML = "You are underweight";            
        }
        if(w > 30){
            document.getElementById("result").innerHTML = "You are overweight";            
        }
    }
else if(a >= 16 && a <= 20){
        if(w >= 31 && w <=40){
            document.getElementById("result").innerHTML = "Keep it Up!";            
        }
        if(w < 31){
            document.getElementById("result").innerHTML = "You are underweight";            
        }
        if(w > 40){
            document.getElementById("result").innerHTML = "You are overweight";            
        }
    }

else {
        document.getElementById('result').innerHTML="Invaild Data";
    }
}