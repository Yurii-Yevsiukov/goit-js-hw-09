let t;const e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",()=>{e.disabled=!0,d.disabled=!1,t=setInterval(a,1e3)}),d.addEventListener("click",()=>{e.disabled=!1,d.disabled=!0,clearInterval(t)});
//# sourceMappingURL=01-color-switcher.706dbe92.js.map
