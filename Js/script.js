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
let listId;

const addNewList = () => {
        $('.list-wrapper').append('<section class=" newList column list"> <span class="icon"> <i class="delete"></i> </span> <span class=" subtitle list-header">'+title+'</span><ul id="'+title+'" class="todo sortable">  </ul><input class="input '+ title+'" type="text" placeholder="Add New"></section> ')
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
            $('#todo').append('<li class="card-content list-content card">' + newTodo + '</li>')
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
            $('#doing').append('<li class="card-content list-content card">' + newTodo + '</li>');
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
            $('#done').append('<li class="card-content list-content card">' + newTodo + '</li>');
        }
          if (newTodo === "") {
              newTodo = prompt('What do you want to add?')
              return addNewTodo();
            
            
            } else addNewTodo();
                    
       
    }
    
});


    $('.delete').on('click', () => {
        $('.delete').parent().remove()
        
        });
    
    


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
