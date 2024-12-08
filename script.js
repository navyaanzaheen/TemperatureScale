function farTOCel(){
    var far = document.getElementById("farenhite").value;
    document.getElementById("dat").innerHTML= "Data"
    document.getElementById('temph').textContent ="Temperature=";
    document.getElementById('temp').textContent =far;
    document.getElementById('far1').textContent ="°F";  
    document.getElementById('form').textContent ="Formula:";
    document.getElementById('formula').textContent = "°C= 5/9 x (°F-32)"
    document.getElementById('sol').textContent ="Solution:";
    document.getElementById('solution').textContent ="°C=5/9 x" +"("+far+"-32"+")"
    var answer = 5/9*(far -32);
    document.getElementById('ans').textContent =" = "+Math.round(answer)+" °C"+" Ans.";
}



function celTOFar(){
    var cel = document.getElementById("celcius").value;
    document.getElementById("dat").innerHTML= "Data:"
    document.getElementById('temph').textContent ="Temperature =";
    document.getElementById('temp').textContent =cel;
    document.getElementById('cel1').textContent ="°C";  
    document.getElementById('form').textContent ="Formula:";
    document.getElementById('formula').textContent ="°F=(C x 9/5)+32"
    document.getElementById('sol').textContent ="Solution:";
    document.getElementById('solution').textContent = "°F=(" +cel+ "x 9/5)+32"
    var answer = (cel*9/5)+Number(32);
    document.getElementById('ans').textContent =" = "+Math.round(answer)+" °F"+" Ans.";
}
