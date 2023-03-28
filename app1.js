shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } 
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj)
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
                  <div class="card my-2 mx-2" style="width: 18rem;">

                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1} </h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete</button>
                    </div>
                </div>`;

    });
    let noteselm = document.getElementById("notes");
    if(notesobj.length !=0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML=`Start saving YOUr NOTEs .`
    }}
    function deletenotes(index){
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesobj = [];
        } else {
            notesobj = JSON.parse(notes);
        }
        notesobj.splice(index,1)
        localStorage.setItem("notes", JSON.stringify(notesobj));
        shownotes();
    }
 let search = document.getElementById('searchtxt');
 search.addEventListener("input",function(){
    
     let inputval= search.value.toLowerCase();
     console.log('fired',inputval)
     let notecards = document.getElementsByClassName('card')
     Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
            
        }
        else{
            element.style.display="none";
        }
        
     });
 })

