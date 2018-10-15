const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const divs = document.getElementsByClassName('divs')

var count;
count = 0;
var countB;
countB = 0;
var countA = 0;
var countC=0;

function newTodo() {
  
  //crea el div donde ira metido el checkbox y el textarea.
  var z = document.createElement("div");
  z.setAttribute("type", "div");
  z.setAttribute("id", "d" + count);
  z.setAttribute("class", "divs");
  list.appendChild(z);

  // crea checkboxes al pulsar el boton.
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  document.getElementById("d"+ count).appendChild(x);
  x.setAttribute("class", "check");
  x.setAttribute("id", count);
  x.setAttribute("onClick","validaCheckbox()")

  // crea el textarea
  var y = document.createElement("INPUT");
  y.setAttribute("type", "textarea");
  y.setAttribute('cols', 300);
  y.maxLength = "5000";
  y.setAttribute("id", ("t" + count));
  y.className = 'texto';
  document.getElementById("d"+ count).appendChild(y);

  //hace un br para separar cada accion de la lista.
  var br = document.createElement('br');
  document.getElementById("d"+ count).appendChild(document.createElement('br'));
  document.getElementById("d"+ count).appendChild(document.createElement('br'));

  //incrementa los contadores
  count++;
  countA++;
  countB++;
  countC++;
  itemCountSpan.innerHTML = countA;
  uncheckedCountSpan.innerHTML = countB;
}

//comprueba las checkboxes que estan marcadas y actualiza el contador
function validaCheckbox() {

  countB = countA;
  for (aux = 0; aux < (countC); aux++) {
    if(document.getElementById(aux) != null){
    if (document.getElementById(aux).checked) {
      countB--;
    }
  }
  }
  //actualizar el contador de unchecked
  uncheckedCountSpan.innerHTML = countB;

}


/*Elimina las checkboxes mediante comprobar si la checkbox esta 
marcada. Si lo esta cambia le añade una clase al div que la contiene
que se encuentra en "display none"*/

//Actualiza el los contadores.
function clearChecked(){
  
  for (aux = 0; aux < (countC); aux++) {
      if(document.getElementById(aux) != null){
        if (document.getElementById(aux).checked) {
          list.removeChild(document.getElementById(aux).parentElement);
          countA--;
          itemCountSpan.innerHTML = countB;

        }
    }
  }
  
}

