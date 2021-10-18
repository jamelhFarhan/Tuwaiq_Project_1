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
function addComment(){
    console.log(inputBody.val())

}
const inputYoga = $("#inputYoga")
function addComment(){
console.log (inputYoga.val())
}

