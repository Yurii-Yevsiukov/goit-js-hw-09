function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=i),i.register;var o=i("1GAPJ");document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();let{delay:r,step:n,amount:i}=t.currentTarget.elements;if(r.value<0||n.value<0||i.value<0)e(o).Notify.warning(`\u{2757} Please enter a positive number`);else for(let t=0;t<i.value;t++)(function(e,t){return new Promise((r,n)=>{let i=Math.random()>.3;setTimeout(()=>{i?r({position:e,delay:t}):n({position:e,delay:t})},t)})})(t+1,Number(r.value)+n.value*t).then(({position:t,delay:r})=>{e(o).Notify.success(`\u{2705} Fulfilled promise ${t} in ${r}ms`)}).catch(({position:t,delay:r})=>{e(o).Notify.failure(`\u{274C} Rejected promise ${t} in ${r}ms`)});t.currentTarget.reset()});
//# sourceMappingURL=03-promises.3c39c72d.js.map