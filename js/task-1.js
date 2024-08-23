const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('li.item');

categoriesList.style.listStyle = 'none'; 
categoriesList.style.padding = '0';
categoriesList.style.margin = '0';
categoriesList.style.display = 'flex'; 
categoriesList.style.flexDirection = 'column'; 
categoriesList.style.gap = '24px'; 


const headings = categoriesList.querySelectorAll('h2');
headings.forEach(heading => {
  heading.style.fontFamily = 'Montserrat'; 
  heading.style.fontSize = '24px'; 
  heading.style.fontWeight = '600'; 
  heading.style.lineHeight = '32px'; 
  heading.style.letterSpacing = '0.04em'; 
  heading.style.textAlign = 'left'; 
  heading.style.marginBottom = '16px'; 
});


const subLists = categoriesList.querySelectorAll('li > ul');
subLists.forEach(subList => {
  subList.style.listStyle = 'none'; 
  subList.style.padding = '0';
  subList.style.margin = '0'; 
});


const subItems = categoriesList.querySelectorAll('li > ul > li');
subItems.forEach(subItem => {
  subItem.style.padding = '5px 10px'; 
  subItem.style.border = '1px solid #ddd';
  subItem.style.borderRadius = '4px'; 
  subItem.style.marginBottom = '5px'; 
  subItem.style.width = '360px'; 
});


console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const heading = item.querySelector('h2').textContent;

  const subItems = item.querySelectorAll('ul > li');
  console.log(`Category: ${heading}`);
  console.log(`Number of items: ${subItems.length}`);
});