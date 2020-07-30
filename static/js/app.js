let sections = {};
getOffsetTops()
window.addEventListener('resize',function(){
    getOffsetTops()
});
function getOffsetTops() {
    let section = document.querySelectorAll(".scrollspy");
    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });
}
window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
        if (sections[i] <= scrollPosition + screen.height / 2  ) {
            document.querySelector('.active.itemMenu') && document.querySelector('.active.itemMenu').classList.remove('active')
            document.querySelector('a[href="#' + i + '"].itemScroll') && document.querySelector('a[href="#' + i + '"].itemScroll').parentNode.classList.add('active')
        }
    }
};

let menuIcon = document.getElementById('menu-mobile-icon');
menuIcon.addEventListener('click', function(){
    let menu = document.getElementById('menu')
    menu.classList.add('active')
    document.getElementsByTagName("BODY")[0].style.overflow = 'hidden';
})

let closeIcon = document.getElementById('close-mobile-icon');
closeIcon.addEventListener('click', function(){
    let menu = document.getElementById('menu')
    menu.classList.remove('active')
    document.getElementsByTagName("BODY")[0].style.overflow = 'visible';
})

let itemsScroll =  [...document.getElementsByClassName('itemScroll')];
itemsScroll.forEach( itemScroll => {
    let menu = document.getElementById('menu')
    itemScroll.addEventListener('click', function(){
        menu.classList.remove('active')
        document.getElementsByTagName("BODY")[0].style.overflow = 'visible';
    })
})



// document.addEventListener('DOMContentLoaded', function () {
// 	var elems = document.querySelectorAll('.sidenav');
// 	var sidenavs = M.Sidenav.init(elems, {
// 		menuWidth: 190,
// 		edge: 'left',
// 		closeOnClick: true
// 	});
// });

var totalItemsActives = document.querySelectorAll('.card-project-active').length;
var limite_inicial = 2
var category = 'todos'


// var projects = document.querySelectorAll('.card-project')
// document.querySelectorAll('.badge.todos')[0].innerText = projects.length
// for (var i = 0; i < projects.length; i++) {
// 	let cat = projects[i].getAttribute("data-cat")
// 	let elem = document.querySelectorAll(`.badge.${cat}`)
// 	elem[0].innerText = parseInt(elem[0].innerText) + 1

// }

ocultarItems('.card-project', 1)
ocultarItems('.card-skill', 1)
ocultarItems('.card-experience', 1)


function changecategory(evt) {
    let categories = evt.parentNode.parentNode.children
    for (var i = 0; i < categories.length; i++) {
        categories[i].children[0].classList.remove('active');
    }
    evt.classList.add("active")
    category = evt.text.toLowerCase();
    filterItems()
}

function filterItems() {
    mostrarProjects()
    filterCategory()
    filterContent()
    filterShow()
    statusButtonLessMore()
    getOffsetTops()

}

function filterCategory() {
    ocultarProjects()
    if (category == 'todos') {
        mostrarProjects()
    } else {
        let items = document.querySelectorAll('.card-project')
        for (var i = 0; i < items.length; i++) {
            if (items[i].getAttribute("data-cat") == category) {
                items[i].classList.remove('d-none')
                items[i].classList.add('card-project-active')
            }
        }
    }
    totalItemsActives = document.querySelectorAll('.card-project-active').length;
}

function filterContent() {

    let value = document.getElementById("search").value.toString().toLowerCase();

    projectList = document.querySelectorAll('.card-project-active')
    for (var i = 0; i < projectList.length; i++) {

        projectList[i].classList.add('d-none')
        projectList[i].classList.remove('card-project-active')

        let title = projectList[i].getAttribute("data-title").toLowerCase()
        let cat = projectList[i].getAttribute("data-cat").toLowerCase()
        let des = projectList[i].getAttribute("data-des").toLowerCase()

        if (cat.includes(value) || title.includes(value) || des.includes(value)) {
            projectList[i].classList.add('card-project-active')
            projectList[i].classList.remove('d-none')
        }
    }
    totalItemsActives = document.querySelectorAll('.card-project-active').length;
}

function filterShow() {
    if (document.getElementById('seeMoreProjects').classList.contains('d-none')) {
        mostrarItems('.card-project-active')

    } else if (document.getElementById('seeLessProjects').classList.contains('d-none')) {
        ocultarItems('.card-project-active', 1)
    }
}

function statusButtonLessMore() {
    document.getElementById('seeMoreProjects').parentNode.classList.remove('d-none')
    if (totalItemsActives <= 2) {
        document.getElementById('seeMoreProjects').parentNode.classList.add('d-none')
    }
    document.querySelectorAll('.badge.search')[0].innerText = totalItemsActives
}

function seeMore(button) {
    button.parentNode.children[0].classList.toggle('d-none')
    button.parentNode.children[1].classList.toggle('d-none')
    let selector = '.card-' + button.getAttribute("data-section")
    if (button.classList.contains('more')) {
        mostrarItems(selector)
    } else if (button.classList.contains('less')) {
        ocultarItems(selector, 1)
    }
    getOffsetTops()
}

function ocultarProjects() {
    let items = document.querySelectorAll('.card-project')
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('card-project-active')
        items[i].classList.add('d-none')
    }
}

function mostrarProjects() {
    let items = document.querySelectorAll('.card-project')
    for (var i = 0; i < items.length; i++) {
        items[i].classList.add('card-project-active')
        items[i].classList.remove('d-none')
    }
}

function ocultarItems(selector, number) {
    var elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.classList.remove('d-none')
        if (index > number) {
            element.classList.add('d-none')
        }
    })
}

function mostrarItems(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.classList.remove('d-none')
    })
}



