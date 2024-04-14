// Function To Create Elements
const create = el => document.createElement(`${el}`);
// create Elements
let header = create("header");
let logo = create("span");
let ul = create("ul");
let content = create("div");
let footer = create("footer");
// Give Classes To The ELements
header.classList.add("website-header");
logo.classList.add("logo");
ul.classList.add("menu");
content.classList.add("content");
footer.classList.add("footer");
for(let i = 0; i < 15; i++){
    if(i < 4){
        let menuLi = create("li");
        menuLi.className = `menu-list-${i+1}`;
        menuLi.style.cssText = "margin: 0 10px; cursor: pointer; font-size: 17px; color: #777;";
        ul.appendChild(menuLi);
    }
    let productBox = create("div");
    let productNum = create("span");
    productBox.style.cssText = "padding: 25px; display: flex; align-items: center; flex-direction: column-reverse; background-color: #fff;"
    productBox.textContent = "product";
    productNum.style.cssText = "font-size: 30px; color: #777;"
    productNum.textContent = `${i+1}`
    content.appendChild(productBox)
    productBox.appendChild(productNum);
}


// Append Elements
document.body.appendChild(header);
header.appendChild(logo)
header.appendChild(ul)
document.body.appendChild(content);
document.body.appendChild(footer);


// TextContent
logo.textContent = "elzero"
document.getElementsByTagName("li")[0].textContent = "home"
document.getElementsByTagName("li")[1].textContent = "about"
document.getElementsByTagName("li")[2].textContent = "services"
document.getElementsByTagName("li")[3].textContent = "contact"
footer.textContent = "Copyright 2024"


// Style Elements
document.body.style.cssText = "margin: 0; font-family: monospace; text-transform: capitalize;";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; background-color: #fff; padding: 20px;";
logo.style.cssText = "cursor: pointer; font-size: 30px; font-weight: bold; color: green;";
ul.style.cssText = "margin: 0; padding: 0; list-style: none; display: flex;";
content.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill , minmax(350px , 1fr)); gap: 10px; background-color: rgb(185 183 183); padding: 15px;";
footer.style.cssText = "text-align: center; padding: 20px; font-weight: bold; background-color: green; color: white; font-size: 25px;"
