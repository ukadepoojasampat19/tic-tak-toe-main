function resetGameStatus() {
    selectplayer =0;
    currentRound=1;
    gameOver.firstElementChild.innerHTML ="You won,<span id='active-player'>PLAYER NAME</span>!";
    gameOver.style.display ="none";
    let gameIndex=0;
    let i,j;
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
         {
            gameData[i][j]=0;
           // console.log(gameData[i][j]);
            let gameitemElement = gamefields.children[gameIndex];
            gameitemElement.textContent=" ";
            gameitemElement.classList.remove("disabled");
            gameIndex++;

            

        }
    }
}



function start_new_game() {
    //first validation of name
    if(players[0].name === '' || players[1].name === '') {
        alert("Please set custom player names for both players!");
        return;
    }
    resetGameStatus();
    activePlayer.textContent=players[selectplayer].name;
    //console.log(activePlayer.textContent);
    gameAreaElement.style.display ="block"; 
}
function  switchPlayer() {
    if(selectplayer === 0) {
        selectplayer=1;
    }else {
        selectplayer =0;
    }
    activePlayer.textContent=players[selectplayer].name;
}
function selectgamefeild(event) {
   
    const selectedField = event.target;
    //console.log(selectedField);

    const selectedColumn = selectedField.dataset.col-1;
    const selectedRow = selectedField.dataset.row-1;/*this mathematical expression will convert the string in the integer */
    //console.log(selectedColumn);
   // console.log(selectedRow);
    if(gameData[selectedRow][selectedColumn] >0)
    {
        alert("please select an empty field");
        return;
    }
    
    
    selectedField.textContent = players[selectplayer].symbol; 
    selectedField.classList.add("disabled");
   
   
   
    //console.log(selectedColumn);
    //console.log(selectedRow);
    //console.log(gameData);
    gameData[selectedRow][selectedColumn] = selectplayer +1;
   // console.log(gameData);
    const winnerId = checkForGameOver();
    if(winnerId !==0)
    {
        endGame(winnerId);
    }
    
    //console.log(winnerId);
    currentRound++;
    switchPlayer();
      
}
function checkForGameOver()
    {
        /*rows*/
        for(let i=0;i<3;i++)
   {
     if(
        gameData[i][0] > 0 &&
        gameData[i][0]  === gameData[i][1]  &&
        gameData[i][1] === gameData[i][2]  
        ){
            return gameData[i][0];
        }
    }
    /*columns */
    for(let i=0;i<3;i++)
   {
    if(
        gameData[0][i] > 0 &&
        gameData[0][i]  === gameData[1][i] &&
        gameData[1][i]  === gameData[2][i]  
        ){
            return gameData[0][i];
        }
    }
    /*diagonalleft  top to bottom */
    if(
        gameData[0][0] > 0 &&
        gameData[0][0] ===  gameData[1][1] &&
        gameData[1][1] ===  gameData[2][2]
    ){
        return  gameData[0][0];
    }
    /*diagonal   bottom left to top right */
    if(
        gameData[2][0] > 0 &&
        gameData[2][0] ===  gameData[1][1] &&
        gameData[1][1] ===  gameData[0][2]
    ){
        return  gameData[2][0];
    }
    if(currentRound === 9)
    {
        return -1;
    }
        return 0;
    }
   
function endGame(winnerId)
{
    gameOver.style.display ="block";
    if(winnerId > 0)
    {
        gameOver.firstElementChild.firstElementChild.textContent = players[winnerId -1].name;
    }
    else{
        gameOver.firstElementChild.textContent ="it\'s a draw";
    }



}
 