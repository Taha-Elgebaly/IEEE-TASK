let textBtn = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let resultDiv = document.querySelector(".tasks");

// style result div
resultDiv.style.cssText = "display: flex; justify-content: center; align-items: center; flex-direction: column;"

// when we click the add button
addBtn.addEventListener("click" , function(){
    let dad = document.createElement("div");
    let ele = document.createElement("div");
    let btn = document.createElement("button");
    dad.classList.add("dad-div");
    ele.classList.add("element");
    btn.classList.add("button");
    resultDiv.append(dad)
    dad.append(ele)
    dad.append(btn)

    dad.style.cssText = "padding: 10px; width: 350px; border-radius: 10px; background-color: #fff; color: #000; justify-content: space-between; align-items: center; display: flex; margin: 10px 0;";
    btn.style.cssText = "padding: 10px; background-color: red; color: #fff; border: none; cursor: pointer; border-radius: 10px;";

    btn.innerHTML = "delete"
    ele.textContent = textBtn.value;
    textBtn.value = "";

    // delete button
    btn.onclick = function(){
        dad.remove();
    }
});