function actCreateHtmlDemoZone (defaultText) {
  var zone = document.createElement('div')
  var inputTitle = document.createElement('h2')
  inputTitle.innerText = 'Input'
  var input = document.createElement('textarea')
  input.className = 'act-input'
  var outputTitle = document.createElement('h2')
  outputTitle.innerText = 'Output'
  var output = document.createElement('div')
  zone.appendChild(inputTitle)
  zone.appendChild(input)
  zone.appendChild(outputTitle)
  zone.appendChild(output)
  input.addEventListener('input', function (e) {
    output.innerHTML = e.target.value
  })
  input.innerText = defaultText
  output.innerHTML = defaultText
  zone.className = 'demo-zone'
  inputTitle.className = 'title'
  outputTitle.className = 'title'
  input.className = 'input'
  output.className = 'output'
  return zone
}

function createHoverMenu (items) {
  var anchors = items.map(function (item) {
    var a = document.createElement('a');
    a.innerText = item.label;
    a.href = item.href
    return a
  });
  var menu = document.createElement('div');
  var title = document.createElement('span')
  title.textContent = 'MENU';
  title.className = 'title';
  menu.className = 'menu';
  menu.appendChild(title)
  anchors.forEach(function (a) {
    menu.appendChild(a);
  });
  return menu;
}