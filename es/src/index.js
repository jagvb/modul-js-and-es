import {root2, root3} from './math.js';
import { pow2 as square , pow3 as cube, pow4 } from './pow.js';
import arr from './test.js';
import _ from 'lodash';

// let {square, cube} = require('./math');


// let math = require('./math');
// let res  = math.square(2) + math.cube(3);
import * as math from './math.js';
let res1 = math.square(2) + math.cube(3);

// let sum = require('./sum');
// let res = sum([1, 2, 3]);
import sum from './sum.js';
let res2 = sum([1, 2, 3]);


let res = square(5);
console.log(res);
console.log(cube(6))
let sum1 = 0;
for(let i = 0; i < arr.length; i++) {
sum1 += arr[i];
}
console.log(sum1)
console.log(_.compact([0, "", null, 'a']))
let btn = document.getElementById('btn');
    btn.addEventListener('click', function() {
        Promise.all([
            import('./tes.js'),
            import('./month.js'),
        ]).then(([tes, month])=> {
            let ul = document.createElement('ul');
            let res = tes.default
            console.log(res)
            for (let index = 0; index < res.length; index++) {
                let li = document.createElement('li');
                li.innerHTML = res[index];
                ul.appendChild(li);
            }
            let b = document.querySelector('body');
            b.appendChild(ul);
    
            let ul1 = document.createElement('ul');
            let res1 = month.default
            console.log(res1)
            for (let index = 0; index < res1.length; index++) {
                let li = document.createElement('li');
                li.innerHTML = res1[index];
                ul1.appendChild(li);
            }
            b.appendChild(ul1);
            });
        });


// let btn = document.getElementById('btn');
//     btn.addEventListener('click', function() {
//             import('./tes.js').then(({day}) => {
//             let ul = document.createElement('ul');
//             let res = day()
//             console.log(res)
//             for (let index = 0; index < res.length; index++) {
//                 let li = document.createElement('li');
//                 li.innerHTML = res[index];
//                 ul.appendChild(li);
//             }
//             let b = document.querySelector('body');
//             b.appendChild(ul);
//             });
//         });