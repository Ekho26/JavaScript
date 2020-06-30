let name = localStorage.getItem("myname");
if(name != null) {
    document.getElementById("form").style.display = "none";
    let text = `Hello, ${name}!`;
    document.getElementById("hello").innerText = text;
}

document.querySelector("input[type=button]")
        .addEventListener("click", hello);

function hello() {
    document.getElementById("form").style.display = "none";
    let name = document.getElementById("name").value;
    localStorage.setItem("myname", name);
    // let text = "Hello, " + name + "!";
    let text = `Hello, ${name}!`;
    // Notatia ${} tine locul concatenarii cu o functie
    //    si in acest caz `` tine loc de apostrof
    document.getElementById("hello").innerText = text;
}