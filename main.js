var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true
    counter = counter + 1
    if (counter > 4) counter = 1
}, 3000)

var getBtn = document.querySelector('.js-open-btn');
var getHeader = document.querySelector('.js-header')
getBtn.onclick = function() {
    getHeader.classList.toggle('over-flow')
}

var getItem = document.querySelectorAll('.js-nav-list li a')
for (var i = 0; i < getItem.length; i++) {
    var item = getItem[i];
    item.onclick = function() {
        getHeader.classList.add('over-flow')
    }
}

var getTable = document.querySelectorAll('.content-table')
var getImageAbout = document.querySelector('.about-img')
setInterval(function() {
    getImageAbout.classList.toggle('scale-img');
}, 1000)

// document.querySelector('.hero .link').addEventListener("click", function(event){
//     event.preventDefault()
// });

// document.querySelector('.hero .link').style = 'cursor: default;'