const hideSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  section.hidden = true;
}

const showSection = sectionId => {
  let sectionElement = document.querySelector(sectionId);
    sectionElement.hidden = false;
    sectionElement.scrollTop = 0;
}

const hideElementWithChecks = prevElementId => {
 if (prevElementId.length !== 0){
  hideSection(prevElementId);
}
}


// Looping over each Nav Item / Section. 
const navMenu = document.querySelector('ul.menu');
const navLength = navMenu.children.length;
let prevElementId = '';
for (let i = 0; i < navLength; i++){
  let anchorLink = navMenu.children[i].firstChild;
  let sectionId = anchorLink.attributes.href.value;
  //hide each section when first loaded to leave behind header only.
  hideSection(sectionId);
// Adding a Click event listener onto AnchorLink, most logic goes in here.
  anchorLink.addEventListener('click', e => {
    hideElementWithChecks(prevElementId);
    prevElementId = sectionId;
    showSection(sectionId);
  })
}