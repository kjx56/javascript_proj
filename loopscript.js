var numbfl = document.querySelector("h3");
count = 0;
function createParagraph() {
    let para = document.createElement('p');
    para.textContent = prompt("Please type in note here");
    document.body.appendChild(para);

   
     count += 1;
        numbfl.textContent = count;

  }
  
  