const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pd1 = document.getElementById('show1');
let pd2 = document.getElementById('show2');

function gen() {
    let pas1 = '';
    let pas2 = '';
    
    
    for(let i =0; i < 20; i++) {
      let random1 = Math.floor(Math.random() * 20);  
       let random2 = Math.floor(Math.random() * 20);
      pas1 += characters[random1];
      pas2 += characters[random2];
      
    }
    // console.log(pas1)
    pd1.innerHTML = pas1;
     pd2.innerHTML = pas2;
}