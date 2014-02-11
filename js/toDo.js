// global app object
window.App = {};

// global app array
App.items = [];

var item = {
  value: '',
  isCompleted: false
};

// make add function 
// need to add to the array that's already been created.
// item needs to be named

App.add = function() {
  var item1 = {
    value: 'Test item 1',
    isCompleted: false
  };
                  
  var item2 = {
    value: 'Test item 2',
    isCompleted: true
  };
 
  App.items.push(item1);
  App.items.push(item2);
};

//clear out function
App.render = function() {
  document.getElementsByClassName('app')[0].innerHTML = '';
 //go through all the items in the array and make html elements for each one. 
  var appContainer = document.getElementsByClassName('app')[0];
  var itemsList = document.createElement('ul');
  itemsList.className = 'items';
  appContainer.appendChild(itemsList);
      
  for (var i = 0; i < App.items.length; i++) {
    var currentItem = App.items[i],
        completeClass;

    if (currentItem.isCompleted)
      completeClass = 'completed';
    else 
      completeClass = ''; 

    var item = document.createElement('ul');
    item.className = completeClass;
    item.innerHTML = currentItem.value;

    itemsList.appendChild(item);
  }
};

//delete item
App.delete = function() {
  App.items.splice();  
};

window.onload = function() {
  App.add();
  App.render();
  document.getElementsByClassName('items')[0].addEventListener('click', function(e) {
      alert("Hi how are you?");
    }
  );
}; 

