function input(char){
    // document.getElementById("display").value = Char;
    if(char === '=')
    {
       try {
        const exp = document.getElementById("display").value;
       document.getElementById("display").value = eval(exp); 
       } catch (error) {
         alert("invalid Expression");
         document.getElementById("display").value = " ";
       }
    }
    else if(char === 'C')
    {
        document.getElementById("display").value = "";
    }
    else{
       let exp = document.getElementById("display").value;
       exp = exp + char;
       document.getElementById("display").value = exp;
    }
}
