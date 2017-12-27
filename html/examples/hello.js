(function () {
  function generateRGB () {
    return parseInt(Math.random() * 255)
  }
  window.onload = function loaded () {
    window.alert('Hello你好啊！');
    var body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', function () {
      body.style.color = 'rgb(' + generateRGB() + ', ' + generateRGB() + ', ' + generateRGB() + ')';
    })
  };
})()