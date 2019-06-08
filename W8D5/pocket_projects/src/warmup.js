
const partyHeader = document.getElementById('party');

const htmlGenerator = (string, htmlElement) => {
    
    // if (Array.from(htmlElement.chidren).length > 0) {
    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach((child) => {
            htmlElement.removeChild(child);
        })
    }

    let pEl = document.createElement("p");
    let contentP = document.createTextNode(`${string}`);
    pEl.appendChild(contentP);
    // pEl.innerHTML = string;
   
    htmlElement.appendChild(pEl);

};

// window.htmlGenerator = htmlGenerator
htmlGenerator('Funny.', partyHeader);

// function addElement() {
//     // create a new div element 
//     var newDiv = document.createElement("div");
//     // and give it some content 
//     var newContent = document.createTextNode("Hi there and greetings!");
//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    // var currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
// }

export default htmlGenerator;