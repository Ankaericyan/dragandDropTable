
  document.addEventListener('DOMContentLoaded', (event) => {
    let tr = document.getElementsByTagName("tr")
  
    let textDragEnter;
    
   let columnLength = tr.length
   
    
    // 
        function handleDragStart(e) {
          this.style.opacity = '0.4';
          dragSrcEl = this;
    
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.innerHTML);
        
        }
      
        function handleDragEnd(e) {
          this.style.opacity = '1';
      
          items.forEach(function (item) {
            item.classList.remove('over');
          });
        }
      
        function handleDragOver(e) {
          e.preventDefault();
          return false;
        }
      
        function handleDragEnter(e) {
          this.classList.add('over');
          textDragEnter = this.textContent
    
    
    //texapoxutyunn e cuyc talis
        }
      
    
        function handleDragLeave(e) {
          this.classList.remove('over');
        //   console.log(this, "leave")
    
          // erb click arecir vor texapoxes
        }
       

          
        
        let items = document.querySelectorAll('.container .box');
        items.forEach(function(item) {
        //   console.log(item.textContent );
     
           
          item.addEventListener('dragstart', handleDragStart);
          item.addEventListener('dragover', handleDragOver);
          item.addEventListener('dragenter', handleDragEnter);
          item.addEventListener('dragleave', handleDragLeave);
          item.addEventListener('dragend', handleDragEnd);
          item.addEventListener('drop', handleDrop);
             
          
         
           
          
        });
    
        function handleDrop(e) {
            e.stopPropagation();
        //   console.log(dragSrcEl, this);
        let startIndex = dragSrcEl.cellIndex
       

            if (dragSrcEl !== this) {
                let endIndex = this.cellIndex
              dragSrcEl.innerHTML = this.innerHTML;
              this.innerHTML = e.dataTransfer.getData('text/html');
              
              for(let i = 1; i < columnLength; i++){
                let startData= document.getElementsByClassName("container")[0].rows[i].cells[startIndex].innerHTML;
                let endData = document.getElementsByClassName("container")[0].rows[i].cells[endIndex].innerHTML;
                document.getElementsByClassName("container")[0].rows[i].cells[endIndex].innerHTML= startData;
                document.getElementsByClassName("container")[0].rows[i].cells[startIndex].innerHTML = endData;
                

              }
            }
          
            return false;
          }
    
          
       
      });