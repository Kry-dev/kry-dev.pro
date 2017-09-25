import 'normalize.css';
import './blog.scss';
require('font-awesome/css/font-awesome.css');
import '../../js/water-effect/index-water.js';
console.log('in blog.js');

$('.blog__navigation-toggle').click(function(){
  $('.blog__navigation').toggleClass('active');
});