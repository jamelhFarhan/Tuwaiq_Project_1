const programs = $("#programs")
const Comment = $("#Comment")
const about = $("#about")
const login = $("#login")

const commentA = $("#commentA")

// programs.hide()
Comment.hide()
about.hide()



 $(document).ready(function(){
  $('.BodyBuilding').click(function(){
        $('#paraBody').hide(2000)
           })
   $('.BodyBuilding').dblclick(function(){
         $('#paraBody').show(2000)
     })

 })
 $(document).ready(function(){
    $('.yoga').click(function(){
          $('#paraYoga').hide(2000)
             })
     $('.yoga').dblclick(function(){
           $('#paraYoga').show(2000)
       })
  
   })
 



 const inputBody = $("#inputBody")
 function addComment(){
    console.log(inputBody.val())

 }
 const inputYoga = $("#inputYoga")
 function addComment(){
 console.log (inputYoga.val())

 }


 const mainContainer = $("#mainContainer");
 const nameInput = $("#name");
const commentInput = $("#comment");


const FitnessArr = [
     { name: "ahmad", Comment :"good like" },
    { name: "sara",    Comment: "good gym"  },
     { name: "noor",   Comment: "loive it"   },
     { name: "reem",   Comment: "can do"   },
   ];
   function renderArr(array){
   for (let i = 0; i < array.length; i++) {
     const div = $(`<div class="secondryContainer">
     <h1>${array[i].name}</h1>
         <h1>${array[i].Comment}</h1>
<button  id="${i}" onclick="deleteComment(${i})"> delete </button>

      </div>`);

     mainContainer.append(div);
 }}
   renderArr(FitnessArr);

  function addComment() {
     const newComment= {
        name: nameInput.val(),
        Comment: commentInput.val(),
     };
     FitnessArr.push(newComment);


    //  renderArr([newComment]);
    mainContainer.html("")
  renderArr(FitnessArr)
    
     }
    
 function showAbout() {
 
    programs.hide()
    Comment.hide()
    about.show()

 }
function showComment() {
    programs.hide()
    Comment.show()
    about.hide()
}

function showProgram() {
    programs.show()
    Comment.hide()
    about.hide()
}


function deleteComment(id) {
    FitnessArr.splice(id,1)
mainContainer.html("")
  renderArr(FitnessArr)
  }
  