var formfield = document.getElementById('formfield');

function add(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','task');
  newField.setAttribute('class','form-control');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Add next phase');
  formfield.appendChild(newField);
}

function remove(){
  var input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 1) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
}