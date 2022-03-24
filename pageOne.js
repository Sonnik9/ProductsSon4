
let inputEl = document.querySelector('#my-input');
let selectEl = document.querySelector('#my-select');
let maneger = document.querySelector('.maneger');
let products = document.querySelector('.products');
let ulList = document.querySelector('.ul-list');
let wrapper = document.querySelector('.wrapper');

let tit1; // set title of page one
let tit2; // get title of page one
let tit21; // set title of page two
let tit20; // get title of page two
let cont1; // set container of page two
let cont2; // get container of page two
let img1; // set img of page one
let img2; // get img of page one
let img21; // the same for page two
let img20; //// the same
let descript1; // set description on pege one
let descript2; // get //--//
let descript20; // the same for page two
let descript21; // the same for page two only getting
let li1; // list from cart items of page one
let i; // global index one of cycle
let value; // variable of input content


let curentValHref; // curent hash
let contImg1;
let imgSlider1; // shell of slider img 
let imgSlider; // the same only we get element
let curentIndex1; // curent index of cart items

let imgNew; // set of recreated img of slider
let imgNewRecive; //get of recreated img of slider
let leftSide; // left block of page two
let bufer; // special block for hiden of slider img
let offset; //decriment of slider effect
let z = 0; // revizion of beginner image of page two


let list; // all img of page one

inputEl.addEventListener('input', searchingItems);
selectEl.addEventListener('change', sortBy);
           
     function generationList() {
     
       for (i = 0; i < dataItems.length; i++) {
       
         li1 = document.createElement('li');
         li1.classList.add('item');
         ulList.append(li1);

         curentValHref = '#' + dataItems[i].id;
     
         tit1 = document.createElement('a');
         tit1.classList.add('title-item');
         tit1.setAttribute('href', curentValHref);
      
         li1.append(tit1);
         tit2 = document.querySelectorAll('.title-item');
         tit2[i].textContent = dataItems[i].name;
     
         img1 = document.createElement('img');
         img1.classList.add('img-item');
         li1.append(img1);
     
         img2 = document.querySelectorAll('.img-item');
         img2[i].src = dataItems[i].imageUrl0;
     
         descript1 = document.createElement('p');
         descript1.classList.add('descript-item');
         li1.append(descript1);
         descript2 = document.querySelectorAll('.descript-item');
         descript2[i].textContent = dataItems[i].snippet;
       }

       location.hash = 'list';
         
     }
     
     generationList(); // for first time

     function removeList() { // for transform in second page
       
        document.querySelectorAll('li').forEach(li => li.remove());
     }

    function sortBy() { //for select choise
       
        if(selectEl.value == 'random') {
            removeList()
            for (var i = 0; i < 5; i++){
              dataItems.sort(()=> Math.random() - 0.5);
            }
              generationList();
              inputEl.value = '';
        }

        if(selectEl.value == 'newest') {
            removeList()
            dataItems.sort((a, b)=> a.age > b.age ? 1: -1);
            generationList();
            inputEl.value = ''; 
              
        }
       
        if(selectEl.value == 'alphabet') {
            removeList()
            dataItems.sort((a, b)=> a.id > b.id ? 1: -1);
            generationList();
            inputEl.value = '';
         
        }
      
    }

    function searchingItems() {
         value = inputEl.value.toLowerCase().trim();
      
         list = document.querySelectorAll('.item');
      
	       if (value !='') {
	       	list.forEach(elem => {
	       		if (elem.firstChild.innerText.toLowerCase().search(value) == -1) {
             
	       			elem.classList.add('hide');
              elem.firstChild.innerHTML = elem.firstChild.innerText;
              // console.log(elem)
	       		}

             else {
             
               elem.classList.remove('hide');
               let str = elem.firstChild.innerText;
              //  console.log(elem)
               elem.firstChild.innerHTML = insertMark(str,elem.firstChild.innerText.toLowerCase().search(value),value.length);
             }
	       	});
	       } 
             else {
             
	       	    list.forEach(elem => {
	       		  elem.classList.remove('hide');
              console.log(elem)
              elem.firstChild.innerHTML = elem.firstChild.innerText;
             
	       	})
	       }
         
    }    

    function insertMark(string,pos,len) {  // for marking of highlighting text
      return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos+len);
    }
    