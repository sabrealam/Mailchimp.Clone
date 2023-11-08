let sel = document.querySelector('#mega');
let count = 0;
function show1(){
    count++;
    if(count % 2 == 0){
        // sel.style.display = 'none';
        sel.style.opacity = '0';
        sel.style.transition = '.2s';
        // sel.style.marginTop = '-550px';
        sel.style.left = '-99.5%';

    }else{
        sel.style.display = 'inline';  
        sel.style.opacity = '1';
        sel.style.transition = '.2s';
        sel.style.left = '0';  

    }
}   

function show2(){
    count++;
    if(count % 2 == 0){
        // sel.style.display = 'none';
        sel.style.opacity = '0';
        sel.style.transition = '.2s';
        // sel.style.marginTop = '-550px';
        sel.style.left = '-99.5%';

    }else{
        sel.style.display = 'inline';  
        sel.style.opacity = '1';
        sel.style.transition = '.2s';
        sel.style.left = '0';  

    }
}
let img = ['https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=avif&q=60'];
let head = ['Canva','Mailchimp for Salesforce',
'Instagram','sabre','alam','nikky']
let nine = document.querySelector('#nine');
// for(let i = 0; i <=8; i++){
//     let div = document.createElement('div');
//     let d1 = document.createElement('div');
//     let d3 = document.createElement('div');
//     let img = document.createElement('img');
//     img.setAttribute('src' , img[i])
//     d3.append(img)
//     let d4 = document.createElement('div');
//     let h4 = document.createElement('h5');
//     let p = document.createElement('p');
//     h4.innerText = head[i] ;
//     d4.append(h4,p)
//     // d4.innerText = '1'; 
//     d1.append(d3,d4)
//     div.append(d1)
//     nine.append(div)
// }