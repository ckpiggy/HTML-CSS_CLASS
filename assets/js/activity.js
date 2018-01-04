function actCreateHtmlDemoZone (defaultText) {
  var zone = document.createElement('div')
  var inputTitle = document.createElement('h2')
  inputTitle.innerText = 'Input HTML'
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
  input.value = defaultText
  output.innerHTML = defaultText
  zone.className = 'demo-zone'
  inputTitle.className = 'title'
  outputTitle.className = 'title'
  input.className = 'input'
  output.className = 'output'
  return zone
}

function actCreateCSSDemoZone (defaultHTML, defaultCSS) {
  function processedCSS (id, css) {
    var items = css.split('}')
    .filter(function (item) {
      return item.length > 0;
    })
    .map(function (item) {
      return `#${id} .output ${item} }`;
    });
    return items.join('\n');
  }
  var zone = actCreateHtmlDemoZone(defaultHTML);
  zone.id = new Date().getTime().toString(36) + parseInt(Math.random() * 1000).toString();
  var inputTitle = document.createElement('h2');
  inputTitle.innerText = 'Input CSS';
  var input = document.createElement('textarea');
  input.className = 'act-input';
  var style = document.createElement('style');
  zone.insertBefore(input, zone.childNodes[0]);
  zone.insertBefore(inputTitle, zone.childNodes[0]);
  zone.insertBefore(style, zone.childNodes[0]);
  input.addEventListener('input', function (e) {
    style.textContent = processedCSS(zone.id, e.target.value); 
  });
  style.textContent = processedCSS(zone.id, defaultCSS);
  input.innerHTML = defaultCSS;
  inputTitle.className = 'title';
  input.className = 'input';
  return zone
}

function createHoverMenu (anchorsSelector) {
  var anchors = document.querySelectorAll(anchorsSelector);
  var targets = [];
  anchors.forEach(function (a) {
    var clone = document.createElement('a');
    clone.innerText = a.innerText;
    clone.href = a.href;
    targets.push(clone)
  })
  var menu = document.createElement('div');
  var title = document.createElement('span')
  title.textContent = 'MENU';
  title.className = 'title';
  menu.className = 'menu';
  menu.appendChild(title)
  targets.forEach(function (a) {
    menu.appendChild(a);
  });
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(menu);
}