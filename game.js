// Start/Restsrt Game - grab button
var restart = document.querySelector('#restart');

// Grab all squares 
var squares = document.querySelectorAll('th');

// clear board 
function clearBoard(){
    for (let index = 0; index < squares.length; index++) {
        squares[index].textContent ="";
        
    }
    location.reload();
}
restart.addEventListener('click', clearBoard);

// check square marker
function changeMarker(){
    if(this.textContent ===""){
        this.textContent = "X";
    }else if(this.textContent ==="X"){
        this.textContent ="O";
    }else{
        this.textContent ="";
    }
}
for (let index = 0; index < squares.length; index++) {
     squares[index].addEventListener('click', changeMarker)
}

var poll = setInterval("CheckResults()",1500);


// Check Winner 

function CheckResults(){
    for (let index = 0; index < squares.length; index++) {
        if((squares[0].textContent ==="X" && squares[1].textContent ==="X"  && squares[2].textContent ==="X" ) || (squares[0].textContent ==="O" && squares[1].textContent ==="O"  && squares[2].textContent ==="O" )){
           console.log(squares[0].textContent + " WON");
           squares[0].style.color = "green";
           squares[1].style.color = "green";
           squares[2].style.color = "green";
           clearInterval(poll);
           
        } else if((squares[3].textContent ==="X" && squares[4].textContent ==="X"  && squares[5].textContent ==="X" ) || (squares[3].textContent ==="O" && squares[4].textContent ==="O"  && squares[5].textContent ==="O" )){
            console.log(squares[3].textContent + " WON");
            squares[3].style.color = "green";
            squares[4].style.color = "green";
            squares[5].style.color = "green";
            clearInterval(poll);
         } else if((squares[6].textContent ==="X" && squares[7].textContent ==="X"  && squares[8].textContent ==="X" ) || (squares[6].textContent ==="O" && squares[7].textContent ==="O"  && squares[8].textContent ==="O" )){
            console.log(squares[6].textContent + " WON");
            squares[6].style.color = "green";
            squares[7].style.color = "green";
            squares[8].style.color = "green";
            clearInterval(poll);
         }else if((squares[0].textContent ==="X" && squares[3].textContent ==="X"  && squares[6].textContent ==="X" ) || (squares[0].textContent ==="O" && squares[3].textContent ==="O"  && squares[6].textContent ==="O" )){
            console.log(squares[0].textContent + " WON");
            squares[0].style.color = "green";
            squares[3].style.color = "green";
            squares[6].style.color = "green";
            clearInterval(poll);
         }else if((squares[1].textContent ==="X" && squares[4].textContent ==="X"  && squares[7].textContent ==="X" ) || (squares[1].textContent ==="O" && squares[4].textContent ==="O"  && squares[7].textContent ==="O" )){
            console.log(squares[1].textContent + " WON");
            squares[1].style.color = "green";
            squares[4].style.color = "green";
            squares[7].style.color = "green";
            clearInterval(poll);
         }else if((squares[2].textContent ==="X" && squares[5].textContent ==="X"  && squares[8].textContent ==="X" ) || (squares[2].textContent ==="O" && squares[5].textContent ==="O"  && squares[8].textContent ==="O" )){
            console.log(squares[2].textContent + " WON");
            squares[2].style.color = "green";
            squares[5].style.color = "green";
            squares[8].style.color = "green";
            clearInterval(poll);
         }else if((squares[0].textContent ==="X" && squares[4].textContent ==="X"  && squares[8].textContent ==="X" ) || (squares[0].textContent ==="O" && squares[4].textContent ==="O"  && squares[8].textContent ==="O" )){
            console.log(squares[0].textContent + " WON");
            squares[0].style.color = "green";
            squares[4].style.color = "green";
            squares[8].style.color = "green";
            clearInterval(poll);
         }else if((squares[2].textContent ==="X" && squares[4].textContent ==="X"  && squares[6].textContent ==="X" ) || (squares[2].textContent ==="O" && squares[4].textContent ==="O"  && squares[6].textContent ==="O" )){
            console.log(squares[2].textContent + " WON");
            squares[2].style.color = "green";
            squares[4].style.color = "green";
            squares[6].style.color = "green";
            clearInterval(poll);
         }
        
        
    }
}