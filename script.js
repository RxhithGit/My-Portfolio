//  about section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
  
 

// typewriter
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
        
const phrases = ["UI/UX Designer", "FrontEnd Developer", "Student"];
const el = document.getElementById("typewriter");
        
let sleepTime = 200;
        
let curPhraseIndex = 0;
        
const writeLoop = async () => {
    while (true){
        let curWord = phrases[curPhraseIndex];
        for (let i = 0; i < curWord.length; i++){
            el.innerText = curWord.substring(0, i+1);
            await sleep(sleepTime);
         }
        
        await sleep(sleepTime = 1900);
        
        for (let i = curWord.length; i > 0; i--){
            el.innerText = curWord.substring(0, i-1);
            await sleep(200);
        }
        
        await sleep(sleepTime = 200);
        
        if(curPhraseIndex === phrases.length -1){
            curPhraseIndex = 0;
        }else{
            curPhraseIndex++;
        }
                
    }
};
        
writeLoop();
   
        
//cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e =>{
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
});

    document.addEventListener('click', () =>{
    cursor.classList.add("expand");

    setTimeout(() =>{
        cursor.classList.remove("expand");
    },500);
});

//small screen home page side menu

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-250px";
}


//back to top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue);
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#38B6FF ${scrollValue}%, #00000000 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



