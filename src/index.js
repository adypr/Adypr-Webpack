import {
  greeting
} from './js/modules';
import '@babel/polyfill';
import 'normalize.css';
import './styles/index.scss';
import mainImage from './images/img/2021-06-24_234555.png';
import svgImage from './images/svg/image.svg';
import './js/head';

let img = document.querySelector('img');
img.src = mainImage; 

let svg = document.querySelector('.svg-img');
svg.src = svgImage;

const user = 24;

const user2 = 90;

console.log(user + user2);
console.log('done');

greeting();
