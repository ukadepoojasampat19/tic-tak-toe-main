function overlay(event) {
    // dataset is the object associated with the document and the data attribute that is added
    //in html more than one data attribute also can be added
    editedPlayer = +event.target.dataset.playerid; //+'1'=>1
    
    player.style.display="block";
    backdrop.style.display="block";


}
function can_button() {
    player.style.display="none";
    backdrop.style.display="none";
    form_submit.firstElementChild.classList.remove("error");
    p.textContent = " ";
    form_submit.firstElementChild.lastElementChild.value = '';
}
function submit_Form(event) {
    event.preventDefault();
    const formDate = new FormData(event.target);
    const enetrplayername = formDate.get("Your-name").trim();
    //event.target.firstElementChild.classList.add("error")
    if (!enetrplayername){
        event.target.firstElementChild.classList.add("error");

        p.textContent = "Please enter the valid email id";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");

    updatedPlayerDataElement.children[1].textContent = enetrplayername;
    /*if (editedPlayer === 1) {
        players[0].name = enetrplayername;
    }else {
        players[1].name = enetrplayername;
    }*/
    /* alternative*/
    players[editedPlayer -1].name = enetrplayername;
    player.style.display ="none";
    backdrop.style.display ="none";

}
