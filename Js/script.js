$(document).ready(() => {
    $('.list-content').draggable({
            connectToSortable: ".sortable",
            snapMode:"inner",
			revert: "invalid"
       
   }); 
    
    $('.sortable').sortable({
        revert: true
    })
       
});

     $( function() {
    $( "#dialog" ).dialog();
  } );




    

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}   
let title;
let list = [];
const tag = "#";
let listId;

const addNewList = () => {
        $('.list-wrapper').append('<section class=" newList column list" id="'+title+'"> <span class="icon"> <i class="delete"></i> </span> <span class=" subtitle list-header">'+title+'</span><ul id="'+title+'" class="todo sortable">  </ul><input class="input '+ title+'" type="text" placeholder="Add New"></section> ')
        list.push(title);
    }

   

                   
                       
                   
                   

                    

                  


$('#create-list').on('click', () => {
    title = $('#list-title').val();
    let titleExist = contains(list,title);
    if (titleExist === true) {
         title = prompt('List already Exist,Choose a new name')
           return addNewList();
    } else   addNewList();
          
  
   /*   for (let i = 0; i < list.length; i++) {
         listId =  title+ list[i].length
        
    } */

  
});
//DEFAULTS 

$('#addTodo').keypress((event) => {
    if (event.which === 13) {
        let newTodo = $('#addTodo').val();
   
        const addNewTodo = () => {
            $('#todo').append('<li class="card-content list-content card"><i class="icon-task delete"></i><h1 class="item-title">' + newTodo + '</h1></li>')
        }
          if (newTodo === "") {
              newTodo = prompt('What do you want to add?')
              return addNewTodo();
            
            
            } else addNewTodo();
                    
       
    }
    
});

$('#addDoing').keypress((event) => {
    if (event.which === 13) {
        let newTodo = $('#addDoing').val();
   
        const addNewTodo = () => {
            $('#doing').append('<li class="card-content list-content card"><i class="icon-task delete"></i><h1 class="item-title">' + newTodo + '</h1></li>');
        }
          if (newTodo === "") {
              newTodo = prompt('What do you want to add?')
              return addNewTodo();
            
            
            } else addNewTodo();
                    
    }
      
    
});
$('#addDone').keypress((event) => {
    if (event.which === 13) {
        let newTodo = $('#addDone').val();
   
        const addNewTodo = () => {
            $('#done').append('<li class="card-content list-content card"><i class="icon-task delete"></i><h1 class="item-title">' + newTodo + '</h1></li>');
        }
          if (newTodo === "") {
              newTodo = prompt('What do you want to add?')
              return addNewTodo();
            
            
            } else addNewTodo();
                    
       
    }
    
});


    
/* function getId() {
      const t = document.querySelectorAll('.list');
    t.forEach(c => {
        let itemId = c.id;
        return listId = tag+itemId;
});
} */
    document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.list .delete') || []).forEach(($delete) => {
      const $list =  $delete.parentNode;
      console.log($list);

    $delete.addEventListener('click', () => {
        $list.parentNode.remove($list);
        console.log($list);
      
    });
  });
    });

/* $('#board').on('click', '.delete', (event) => {
    
    $('.list[id^="' + title + '"]').remove();
    console.log($('.list[id^="' + title + '"]'))
        t.forEach(c => {
         
        let itemId = c.id;
        return listId = tag+itemId;
        
    })  
      getId()
   let boxTodel= "#"+$('this').parent()
    if (listId === boxTodel) {
        $(listid).delete();
        }
    console.log(boxTodel)
    console.log($(this))
    console.log(listId) 
        }); */

   
    
    
//DEFAULTS

/* const listItemSubmit = (id) => {
    id.keypress((event) => {
        if (event.which === 13) {
            let newTodo = id.val();
            const addNewTodo = () => {
                id.append('<li class="card-content list-content card">' + newTodo + '</li>');
            }
            if (newTodo === "") {
                newTodo = prompt('What do you want to add?')
                return addNewTodo(id);
            
            
            } else addNewTodo(id);
                    
       
        }
        
    })
};

listItemSubmit(title);

$('newList').add() */

/*  $('.addTodo').keypress((event) => {
    if (event.which === 13) {
        let newTodo = $('.input').val();
        const addNewTodo = () => {
            id.append('<li class="card-content list-content card">' + newTodo + '</li>');
        }
          if (newTodo === "") {
              newTodo = prompt('What do you want to add?')
              return addNewTodo(title);
            
            
            } else addNewTodo(title);
                    
       
    }
    
});  */
