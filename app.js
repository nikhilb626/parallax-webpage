window.addEventListener('scroll',(e)=>{
    if(window.scrollY>window.innerHeight/2-20){
            document.querySelector('.links').style.position="fixed";
            document.querySelector('.links').style.top="10vh";

        
        // document.querySelector('.save-tigers').style.position="fixed";
        // document.querySelector('.save-tigers').style.top="20vh";



    }
    else{
        if(window.innerWidth<window.innerHeight){
            document.querySelector('.links').style.position="fixed;"
            document.querySelector('.links').style.top="10vh";
            
        }
        else{
            document.querySelector('.links').style.position="absolute;"
            document.querySelector('.links').style.top="50vh";

        }
        // document.querySelector('.save-tigers').style.top="50vh";
        // document.querySelector('.save-tigers').style.position="absolute;"
    }
})