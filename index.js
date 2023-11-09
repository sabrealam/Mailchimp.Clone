let form = document.querySelector('form');
let use = document.querySelector('#use');
let pas = document.querySelector('#pas');
let e = prompt('Dou Want To Login','Yes');
 
let z = 0;
let o = 0;
if(e == 'Yes' || e == 'yes'){ 
     otp = Math.random()*(100*100);   
     o = Math.ceil(otp);                                         
        console.log(o);
       let em = Math.ceil(otp).toString(30,35)
       z = em+Math.ceil(otp) +'@gmail.com';
       console.log(z); 
}else{
    // window.close('http://127.0.0.1:3000/login/login.html?');
}
// let count = 0;
// console.log(typeof otp);
form.addEventListener('submit',function(e){
    // count++;
    e.preventDefault();
    if(z == use.value && o == +pas.value){
        window.open('https://654ce65f4cf7014e1c0f531c--marvelous-profiterole-826349.netlify.app/', "_parent") 
        
    }else{ 
        window.open('')
    }
         
})

