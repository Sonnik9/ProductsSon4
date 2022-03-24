
    
    // cart items start 
    window.addEventListener('hashchange', generationCartItems);
  
    function delitePageOne() {
      maneger.style.display = 'none';
      products.style.display = 'none';

    }

    function recreatePageOne() {
      maneger.style.display = 'block';
      products.style.display = 'block';
      
    }
   
    function createPageTwo() {
         z = 0;
         cont1 = document.createElement('div');
         cont1.classList.add('cont');
         wrapper.append(cont1);
         cont2 = document.querySelector('.cont');

         leftSide = document.createElement('div');
         leftSide.classList.add('leftSide');
         cont2.append(leftSide);

         img21 = document.createElement('img');
         img21.classList.add('item2');
         leftSide.append(img21);
         img20 = document.querySelector('.item2');

         bufer = document.createElement('div');
         bufer.classList.add('bufer');
         leftSide.append(bufer);

         let rightSide = document.createElement('div');
         rightSide.classList.add('right-side');
         cont2.append(rightSide);

         tit21 = document.createElement('p');
         tit21.classList.add('title-item2');
        
         rightSide.append(tit21);
         tit20 = document.querySelector('.title-item2');
        

         descript21 = document.createElement('p');
         descript21.classList.add('descript20-item');
         rightSide.append(descript21);
        
         descript20 = document.querySelector('.descript20-item');

         let hr = document.createElement('hr');
         hr.classList.add('hr');
         rightSide.append(hr);

         let contImg = document.createElement('div');
         contImg .classList.add('contImg');
         rightSide.append(contImg);

         contImg1 = document.querySelector('.contImg');
         
         for (let h = 0; h <  dataItems.length; h++) {
           if('#' + dataItems[h].id == location.hash) {
          img20.src = dataItems[h].imageUrl1[0];
          tit20.textContent = dataItems[h].name;
          descript20.textContent = dataItems[h].snippet;

          img20.setAttribute('data-index', h);
          curentIndex1 = img20.getAttribute('data-index'); 
         
            for (let f = 0; f < dataItems[h].countImg; f++) {
            
            imgSlider = document.createElement('img');
            imgSlider.classList.add('imgSlider');
            contImg1.append(imgSlider);
            imgSlider1 = document.querySelectorAll('.imgSlider');
           
            imgSlider.setAttribute('data-index', f);
            
            imgSlider1[f].src = dataItems[h].imageUrl1[f];

            // imgSlider1[f].src = dataItems[h] + '.' + `${'imageUrl' + f}`;
           
            } //cycle second
          
          } // if
        
         } // cycle first
         contImg1.addEventListener('click', clickImg);
      
    }
   
    function delitePageTwo() {

      for (let h = 0; h <  dataItems.length; h++) {
        if(location.hash == '#list')
        cont2.remove();

      }
    }

    function generationCartItems() {
     
      if(location.hash !== '#list') 
      { delitePageOne();
       createPageTwo();}

      else
      {recreatePageOne();
      delitePageTwo();}
      }

    function recreatePoster2() {

      imgNew = document.createElement('img');
      imgNew.classList.add('item3');
      leftSide.append(imgNew);
      imgNewRecive = document.querySelector('.item3');
      imgNewRecive.style.top = 270 + 'px';
    }

    let  timerId;

    function movess() {
     
           if(offset != 0) {
             offset = offset - 10;
             imgNewRecive.style.top = offset + 'px';
             timerId = setTimeout(movess, 0.5);
            }
             else 
            clearTimeout(timerId);
   
    } // effect for slider

    function clickImg(e) { // event of click on img

        if(z == 0) {
          img20.remove();
          recreatePoster2();
        } 

        if(e.target.tagName == 'IMG' && e.target.src !== imgNewRecive.src) {
          imgNewRecive.remove();
         
          recreatePoster2();
          offset = 270;
          imgNewRecive.style.top = 270 + 'px';
       
           for (let f = 0; f < dataItems[curentIndex1].countImg; f++){
              if(e.target.getAttribute('data-index') == f) {
                 z = 1;
                 imgNewRecive.src = dataItems[curentIndex1].imageUrl1[f];
                 movess();
           
              }
              
           }
         
        }    
      
     
    } // event of click img

 // cart items end