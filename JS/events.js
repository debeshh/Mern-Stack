


function changeText(){
    let fpara = document.getElementById('para');
    fpara.textContent = "sudhar jao bachhe";
}

// let fpara = document.getElementById('para');

let newButton = document.querySelector('button');
newButton.addEventListener('click',changeText);

// fpara.addEventListener('click', changeText)


// let paras = document.querySelectorAll('p');

function alertPara(){
    alert("You have clicked para : "+ event.target.textContent);
}


// for(let i = 0 ; i < paras.length ; i ++){
//     let para = paras[i];
//     para.addEventListener('click',alertPara)
// }

// let paras = document.getElementById('cont');
document.addEventListener('click',alertPara);