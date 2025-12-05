function On() {
    document.getElementById("bulb").style.backgroundColor = "yellow";
}
function Off()
{
    document.getElementById("bulb").style.backgroundColor = "white";
}
function Red()
{
    document.getElementById("bulb").style.backgroundColor = "red";
}
function Blue()
{
    document.getElementById("bulb").style.backgroundColor = "blue";
}
function Green()
{
    document.getElementById("bulb").style.backgroundColor = "green";
}

 const userColor = document.getElementById("color");

 userColor.addEventListener("change",() => changeBulbColor(userColor.value));


 function changeBulbColor(color){
    document.getElementById("bulb").style.backgroundColor = color;
 }


 function SB_Control(){
   const btn = document.getElementById("SB_btn");
   if(btn.innerText==="On"){
    document.getElementById("SB_btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("on");
   }else{
    document.getElementById("SB_btn").innerText = "On";
    document.getElementById("smartBulb").classList.remove("on");

   }
 }

 function SB_Control2(){
    document.getElementById("smartBulb").classList.toggle("on");
 }

 document.getElementById("c1").addEventListener("mouseover",()=>{
    fillColor("violet")
 })
 document.getElementById("c1").addEventListener("mouseleave",()=>{
    fillColor("white")
 })

 document.getElementById("c2").addEventListener("mouseover",()=>{
    fillColor("indigo")
 })
 document.getElementById("c2").addEventListener("mouseleave",()=>{
    fillColor("white")
 })
 document.getElementById("c3").addEventListener("mouseover",()=>{
    fillColor("blue")
 })
 document.getElementById("c3").addEventListener("mouseleave",()=>{
    fillColor("white")
 })
 document.getElementById("c4").addEventListener("mouseover",()=>{
    fillColor("green")
 })
 document.getElementById("c4").addEventListener("mouseleave",()=>{
    fillColor("white")
 })
 document.getElementById("c5").addEventListener("mouseover",()=>{
    fillColor("yellow")
 })
 document.getElementById("c5").addEventListener("mouseleave",()=>{
    fillColor("white")
 })
 document.getElementById("c6").addEventListener("mouseover",()=>{
    fillColor("orange")
 })
 document.getElementById("c6").addEventListener("mouseleave",()=>{
    fillColor("white")
 })
 document.getElementById("c7").addEventListener("mouseover",()=>{
    fillColor("red")
 })
 document.getElementById("c7").addEventListener("mouseleave",()=>{
    fillColor("white")
 })

 function fillColor(color)
 {
    document.getElementById("rainbowbulb").style.backgroundColor = color;
 }
 