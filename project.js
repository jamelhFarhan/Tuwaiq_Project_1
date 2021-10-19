$(document).ready(function(){
    $('.yoga').click(function(){
    $('#paraYoga').hide(2000)
    })
    $('.yoga').dblclick(function(){
        $('#paraYoga').show(2000)
    })
})

$(document).ready(function(){
    $('.BodyBuilding').click(function(){
 $('#paraBody').hide(2000)
    })
    $('.BodyBuilding').dblclick(function(){
        $('#paraBody').show(2000)
    })
})
 const inputBody = $("#inputBody")
// function addComment(){
//     console.log(inputBody.val())

// }
 const inputYoga = $("#inputYoga")
// function addComment(){
// console.log (inputYoga.val())

// }


 const mainContainer = $("#mainContainer");
 const nameInput = $("#name");
const commentInput = $("#comment");


const FitnessArr = [
     { name: "jamelh", Comment :"good like" },
    { name: "sara",    Comment: "good gym"  },
     { name: "suad",   Comment: "loive it"   },
     { name: "fathemh",   Comment: "can do"   },
   ];
   function renderArr(array){
   for (let i = 0; i < array.length; i++) {
     const div = $(`<div class="secondryContainer">
     <h1>${array[i].name}</h1>
         <h1>${array[i].Comment}</h1>
    
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


     renderArr([newComment]);
    
     }
    
 function hideComment() {
 
     mainContainer.hide();

 }
function showComment() {
     mainContainer.show();
}