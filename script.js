function _load() {
    /* console.log("Hello World"); */

    const rootElement  = document.getElementById("root");
    /* console.log(rootElement); */

    rootElement.classList.add("loaded");

   /*  console.log(window);
    console.log(document); */
    /* console.log(rootElement.classList); */

    rootElement.innerHTML = `
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
        <button class="btn">Click on me</button>
    `;


    const buttonElementsQ = document.querySelectorAll(".btn");
    /* console.log(buttonElementsQ[0].classList); */

    const buttonElementsG = document.getElementsByClassName("btn");
    /* console.log(buttonElementsG[0].classList); */

/*     buttonEs[0].classList.remove("btn");
    console.log(rootElement);
 */

    console.log(buttonElementsQ.length);

    for(i = 0; i <= 10; i++) {
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', `${i + 1}.jpg`)
        rootElement.appendChild(imgElement);
    }
    
    let inputElement = `
        <input placeholder="write your name here" />
    `;


    console.log(buttonElementsQ.length);
    for (let index = 0; index < buttonElementsQ.length; index++) {
        /* rootElement.innerHTML += inputElement; */
        rootElement.insertAdjacentHTML('afterend', inputElement);
    };
    
}

window.addEventListener("load", _load);




function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.remove("mystyle");
  }