var n={format:"image/png",quality:.92,width:void 0,height:void 0,Canvas:void 0,crossOrigin:void 0},t=function(t,a){return void 0===t&&(t=[]),void 0===a&&(a={}),new Promise((function(i){var r=(a=Object.assign({},n,a)).Canvas?new a.Canvas:window.document.createElement("canvas"),o=a.Image||window.Image,e=t.map((function(n){return new Promise((function(t,i){"Object"!==n.constructor.name&&(n={src:n});var r=new o;r.crossOrigin=a.crossOrigin,r.onerror=function(){return i(new Error("Couldn't load image"))},r.onload=function(){return t(Object.assign({},n,{img:r}))},r.src=n.src}))})),c=r.getContext("2d");i(Promise.all(e).then((function(n){var t=function(t){return a[t]||Math.max.apply(Math,n.map((function(n){return n.img[t]})))};return r.width=t("width"),r.height=t("height"),n.forEach((function(n){return c.globalAlpha=n.opacity?n.opacity:1,c.drawImage(n.img,n.x||0,n.y||0)})),a.Canvas&&"image/jpeg"===a.format?new Promise((function(n,t){r.toDataURL(a.format,{quality:a.quality,progressive:!1},(function(a,i){a?t(a):n(i)}))})):r.toDataURL(a.format,a.quality)})))}))};export{t as m};
