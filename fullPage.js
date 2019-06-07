// import Typed from './vendors/typed.js';

// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', 'transparent', 'transparent', '#40030E', '#40030E', '#FFAC00'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .3)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },
}); 


// SECTION 3 SCRIPT
$(document).on('mouseover', '.section-3-column', function(){
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