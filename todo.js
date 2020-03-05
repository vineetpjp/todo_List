var ul = document.getElementById('list');
var li;
var addButton = document
  .getElementById('add')
  .addEventListener('click', addItem);

var removeButton = document
  .getElementById('remove')
  .addEventListener('click', removeItem);

var removeAllButton = document
  .getElementById('removeAll')
  .addEventListener('click', removeAllItem);

function addItem() {
  var input = document.getElementById('input');
  var item = input.value;
  var textNode = document.createTextNode(item);

  if (item == '') {
    return false;
  } else {
    li = document.createElement('li');

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'check');

    var label = document.createElement('label');

    label.appendChild(textNode);
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = 'visual';
    }, 2);
    input.value = '';
  }
}

function removeItem() {
  li = ul.children;

  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
      console.log(li.length + '-' + index);
    }
  }
}

function removeAllItem() {
  li = ul.children;

  while (li[0]) {
    ul.removeChild(li[0]);
  }
}
