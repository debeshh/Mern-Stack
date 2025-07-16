//code1
const t1 = performance.now();
for(let i =1; i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "this is a paragraph " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("total time by code 1 : " , (t2-t1))


//code 2
const t3 = performance.now();
let myDiv = document.createElement('div');
for( let i =1 ; i<=100 ;i++){
     let para = document.createElement('p');
    para.textContent = "this is a paragraph " + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);

const t4 = performance.now();


console.log("total time by code 1 : " , (t4-t3))



//change text whenever you click the para
function changeText(){
    let para = document.getElementById('fpara');
    para.textContent = "you just clicked the para";
}

let nPara = document.querySelector('p')
nPara.addEventListener('click',changeText)



//bestPractice. no reflow no repaint
 

let t6 = performance.now();
let fragment = document.createDocumentFragment();

for( let i = 1 ; i <= 100 ; i++){
    let para = document.createElement('p');
    para.textContent = "This is para" + i ;
    fragment.appendChild(para);
}

//the below line takes one reflow and one repaint
document.body.appendChild(fragment)

let t7 = performance.now();
console.log("total time by code 1 : " , (t7-t6))