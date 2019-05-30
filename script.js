let change = () =>{
    var elem = document.getElementById("b");
  let p= new Promise((resolve,reject)=>{
    if(elem.innerHTML=="Subscribe"){
      resolve("Subscribed");
    }else{
      reject("UnSubscribed");
    }
  });
  p.then((message)=>{

    var img=document.getElementById('img')
    document.getElementById("msg").innerHTML="you are now "+message+" Click on bell icon to get notifed";
    reset();
    img.style.display="inline";
    document.getElementById("b").innerHTML="UnSubscribe";
    document.getElementById("b").classList.add("btn1");
    document.getElementById("b").classList.remove("btn");
  }).catch((message)=>{
    document.getElementById("msg").innerHTML="You are now "+message;
    var img=document.getElementById('img')
    reset();
    img.style.display="none";
    document.getElementById("b").innerHTML="Subscribe";
    document.getElementById("b").classList.add("btn");
    document.getElementById("b").classList.remove("btn1");
  });
}
let reset=()=>{
    setTimeout(  () => {     document.getElementById("msg").innerHTML='';  },  3 * 1000);
}
let notify = () =>{
    var img=document.getElementById('img')
    let p = new Promise((resolve,reject)=>{
    	if(img.src=="http://www.pngmart.com/files/1/Bell-PNG-Transparent-Image.png"){
    		resolve("get notification");
    	}else{
    		reject("no notification");
    	}

    });
    p.then((message)=>{
    	document.getElementById("msg").innerHTML="you are Subscribed you will "+ message;
    	img.src="https://www.pinclipart.com/picdir/middle/82-821023_youtube-bell-png-youtube-notification-bell-png-clipart.png";
    }).catch((message)=>{
    	document.getElementById("msg").innerHTML="you will get " + message;
    	img.src="http://www.pngmart.com/files/1/Bell-PNG-Transparent-Image.png";

    })

}