const getNavbarElement = () => {
  // TODO: get the element with id navbar
  console.log(document.querySelector('#navbar'));
  return document.querySelector('#navbar')
};

const getMainElement = () => {
  // TODO: get the element with id main
  console.log(document.querySelector('#main'));
  return document.querySelector('#main')
};

const getAboutFromFooter = () => {
  // TODO: get the the about link that's in the footer
  console.log(document.querySelector('.about').href);
  return document.querySelector('.about').href
};

const getTheParagraphElement = () => {
  // TODO: get the paragraph in #main
  console.log(document.querySelector('#main p'));
  return document.querySelector('#main p')
};

// Sample usage - do not modify
getNavbarElement();
getMainElement();
getAboutFromFooter();
getTheParagraphElement();
