// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>'Mashed potatoes are ready!'</li>`
          document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
            
    });
  });
  });
  });
  });

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector('#steakImg').removeAttribute('hidden');
    return document.querySelector("#steak").innerHTML += `<li>${'The steak is ready!'}</li>`
  })

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try{
    let bro0 = await obtainInstruction('broccoli', 0)
    document.querySelector('#broccoli').innerHTML += `<li>${bro0}</li>`
    let bro1 = await obtainInstruction('broccoli', 1)
    document.getElementById('broccoli').innerHTML += `<li>${bro1}</li>`
    let bro2 = await obtainInstruction('broccoli', 2)
    document.getElementById('broccoli').innerHTML += `<li>${bro2}</li>`
    let bro3 = await obtainInstruction('broccoli', 3)
    document.getElementById('broccoli').innerHTML += `<li>${bro3}</li>`
    let bro4 = await obtainInstruction('broccoli', 4)
    document.getElementById('broccoli').innerHTML += `<li>${bro4}</li>`
    let bro5 = await obtainInstruction('broccoli', 5)
    document.getElementById('broccoli').innerHTML += `<li>${bro5}</li>`
    let bro6 = await obtainInstruction('broccoli', 6)
    document.getElementById('broccoli').innerHTML += `<li>${bro6}</li>`
    document.querySelector('#broccoli').innerHTML += `<li>'Broccoli is ready!'</li>`
    document.querySelector('#broccoliImg').removeAttribute('hidden');
  }
  catch(err){
    console.log("lo estas haciendo mal");
  }
  // ... Your code here
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
let bs0 = obtainInstruction('brusselsSprouts', 0)
let bs1 = obtainInstruction('brusselsSprouts', 1)
let bs2 = obtainInstruction('brusselsSprouts', 2)
let bs3 = obtainInstruction('brusselsSprouts', 3)
let bs4 = obtainInstruction('brusselsSprouts', 4)
let bs5 = obtainInstruction('brusselsSprouts', 5)
let bs6 = obtainInstruction('brusselsSprouts', 6)
let bs7 = obtainInstruction('brusselsSprouts', 7)

Promise.all([bs0, bs1, bs2, bs3, bs4, bs5, bs6, bs7])
.then(result => {
  result.forEach(elemento => {
    document.getElementById('brusselsSprouts').innerHTML += `<li>${elemento}</li>`
  })
  document.getElementById('brusselsSprouts').innerHTML += `<li>${'Brussels Sprouts are ready!'}</li>`
  document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');

})
.catch(err => {
  console.log("error promise all: ", err);
})
