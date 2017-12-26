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