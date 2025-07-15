for(let i=0; i<10; i++){
    if(i%3 == 0)
        continue;
    else
        console.log(i);
}

let i = 1;
while(i < 5) {
  console.log("Inside the loop");

  if(i == 3) {
    i++;         // increment before continue
    continue;
  } else {
    console.log("Hi");
    i++;
  }
}