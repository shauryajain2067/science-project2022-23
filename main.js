function ass(){
    var feeder=document.getElementById("fedup");
    var first=document.getElementById("1");
    if(first.length < 0 ){
        document.getElementById("1").innerHTML=feeder;
        console.log("first comment is " + feeder);
    }
    else if(first.length > 0){
        document.getElementById("2").innerHTML=feeder;
        console.log("second comment is " + feeder);
    }
    else{
        document.getElementById("3").innerHTML=feeder;
        console.log("third comment is " + feeder);
    }
}