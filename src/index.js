'use scrit';

import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import countTimer from './moduls/countTime';
import toggleMenu from './moduls/toggleMenu';
import togglePopUp from './moduls/togglePopUp';
import tabs from './moduls/tabs';
import slider from './moduls/slider';
import calc from './moduls/calc';
import sendform from './moduls/sendform';

countTimer('22, july, 2020');

toggleMenu();

togglePopUp();

tabs();

slider();

calc(100);

sendform();

//Маска телефона
// maskPhone('.form-phone');