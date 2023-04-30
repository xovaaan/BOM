console.clear();
let loc = document.querySelector(".location");
let p1 = loc.children[0];
p1.textContent = location.href;
let p2 = loc.children[1];
p2.textContent = location.port;
let p3 = loc.children[2];
p3.textContent = location.hostname;
let visit = document.querySelector("#visit");
visit.addEventListener("click", function(){
    location.assign("https://www.amazon.com");
})