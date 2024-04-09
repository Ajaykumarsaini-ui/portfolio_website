// const form_check = document.querySelector(".form-check");


// 1. for dark mode 
const form_check_input = document.querySelector(".form-check-input");

form_check_input.addEventListener('change', ()=>{

    if(form_check_input.checked){
        console.log("hii checked")
        document.body.classList.add('dark-mode')
    }
    else{
        console.log("hii checked not")
        document.body.classList.remove('dark-mode')
    }

})

// 2. typing effect 

let cursor_text = document.getElementById('cursor_text')
let name = "DESIGNER.."
let index = 1;

const writting_effect = ()=>{
    let new_name = name.slice(0,index);
    cursor_text.textContent = new_name;
    index++;

    if(index > name.length){
        index = 1;
    }
    setTimeout(() => {
        writting_effect();
        
    }, 500);
    
    // setInterval(() => {
        
        
    // },1500);

}

writting_effect();

// cursor_text.addEventListener('click',()=>{
//  cursor_text.textContent = name ;
// })

// 3. printing namelet
let inner_text = document.querySelector("#inner_text");

 let inner_text_function = () =>{
    let a =prompt("Please Enter Your Name:");
    // console.log(a.value);
    // let stringvalue = parseInt(a).toString();
    inner_text.textContent = a; 
 } 

setTimeout(() => {
    inner_text_function();
    
}, 0);