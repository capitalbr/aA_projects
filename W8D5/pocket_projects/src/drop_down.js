
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


function dogLinkCreator() {
  let retArr = [];
  for (let i = 0; i < Object.keys(dogs).length; i++) {
    let a = document.createElement("a");
    let iDog = Object.keys(dogs)[i]
    a.innerHTML = iDog;
    a.setAttribute("href", `${dogs[iDog]}`);
    let li = document.createElement("li");
    li.classList.add('dog-link');
    li.appendChild(a);
    retArr.push(li);
  }
  return retArr;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  for(let i =0;i<dogLinks.length;i++) {
    let ul = document.getElementsByClassName("drop-down-dog-list")[0];
    ul.appendChild(dogLinks[i]);
  }
}

attachDogLinks();

function handleEnter () {
  let lis = document.getElementsByClassName('dog-link');
  for(let i=0;i<lis.length;i++) {
    lis[i].classList.remove("off");
  }
}

function handleLeave () {
  let lis = document.getElementsByClassName('dog-link');
  for(let i=0;i<lis.length;i++) {
    lis[i].classList.add("off");
  }
}

const dropDown = document.getElementsByClassName("drop-down-dog-nav")[0];
dropDown.addEventListener("mouseenter",  handleEnter);
dropDown.addEventListener("mouseleave", handleLeave);













// module.exports = {
//   method: function () { },
//   otherMethod: function () { }
// }

// exports.method = function () { };
// exports.otherMethod = function () { };



// return arr.map( el => el instanceof Array ? deepDup(el) : el);