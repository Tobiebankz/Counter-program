
// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like Pizza";


// let fullName = "SisCode";
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age}`;
// document.getElementById("p3").textContent = `enrolled: ${student}`;

let Username;

document.getElementById("mysubmit").onclick = function(){
Username = document.getElementById("myText").value;
document.getElementById("myH1").textContent = `Hello ${Username}`
}



