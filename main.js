var SpeechRecognition=window.webkitSpeechRecognition;
var recogntion=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recogntion.start();
    
}
recogntion.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
}