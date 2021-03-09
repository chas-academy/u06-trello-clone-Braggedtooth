$(document).ready(() => {
    $('.list-content').draggable({
        connectToSortable: "#sortable",
        snapMode:"inner",
			revert: "invalid"
       
   }); 
    
    $('#sortable').sortable({
        revert: true
    })
       
    });
 
$('.input').keypress((event) => {
    if (event.which ===13) {
        let newTodo = $('.input').val();
        $('#todo').append('<li class="card-content list-content card ui-draggable ui-draggable-handle ui-sortable">' + newTodo + '</li>')
    }
});

$(".droppable").droppable({
    accept: "#sortable li",
    drop: function (event, ui) {
            $(this).appendToParent( ''); 
  
        }
});

let title = $