let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button')); //collection is html here we use "Array.from" to convert it into array

buttons.map(button => {
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case'←' :
                if(display.innerText){   //if there is any number in the display 
                    display.innerText = display.innerText.slice(0,-1);  //then slice it
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText); //eval will do all the job
                } catch{
                    display.innerText = 'Galat hn bhai!';
                }
                
                break;
            default:
                display.innerText = display.innerText + e.target.innerText;
        }
    });
});
