// variables
const $header_top = $('.header-top');
const $burger = $('.toggle-menu');
const $nav = $('nav');

// toggle menu 
$burger.on('click', function () {
  $nav.toggleClass('open-list');
  $(this).parent().toggleClass('x-toggle')
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#1B1B1C', 'transparent', '#40030E', '#40030E', '#FFAC00', '#2F3B40', '#36363c', 'transparent', 'transparent'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eighthSection', "section9", "section10"],
  menu: '#menu',

  afterLoad: function (anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .3)');
    if (index == 6) {
      $('#fp-nav').hide();
    }
  },

  onLeave: function (index, nextIndex, direction) {
    if (index == 6) {
      $('#fp-nav').show();
    }
  },
});


// SECTION 3 SCRIPT
$(document).on('mouseover', '.section-3-column', function () {
  $(this).addClass('active').siblings().removeClass('active')
})

// SECTION 6 SCRIPT
const searchEl = document.querySelector('.fake-box')
const searchBoxEl = document.querySelector('.search-box')
const typedEl = document.querySelector('.typed-element')

const fragment = document.importNode(document.querySelector('#search').content, true)

let typed = new Typed(typedEl, {
  strings: ["React", "Java Script", "SCSS", "Wireframe", "SEO", "GIT"],
  typeSpeed: 100,
  backDelay: 1500,
  loop: true,
  backSpeed: 40
});

const hideElement = searchEl.addEventListener('click', e => {
  e.preventDefault();
  searchEl.style.display = "none";
  typed.pause.status = true;
  searchBoxEl.appendChild(fragment);
  document.querySelector('.search-input').focus();
})

// SECTION 9 SCRIPT
// const $searchBox = $('.search-box-js');
// const $searchInput = $('.input-js');

// $searchInput.focusout(function () {
//   if ($searchInput.val() == '') {
//     $(this).parent().removeClass('focused')
//   }
// })

// $searchInput.focus(function () {
//   $(this).parent().addClass('focused')
// });

const searchBox = document.querySelector('.search-box-js')
const searchInput = document.querySelector('.input-js')
const searchBtn = document.querySelector('.search-btn')

searchInput.addEventListener('focusin', function () {
  searchBox.classList.add('focused')
})

searchInput.addEventListener('focusout', function () {
  if (!searchInput.validity.valid) {
    searchBox.classList.remove('focused')
  }
})

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  alert(`Keyword is : ${searchInput.value}`)
})

// SECTION 10 SCRIPT
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle("toggle-open")
})