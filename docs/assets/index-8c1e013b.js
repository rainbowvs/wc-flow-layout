var x=Object.defineProperty;var H=(i,r,t)=>r in i?x(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t;var l=(i,r,t)=>(H(i,typeof r!="symbol"?r+"":r,t),t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function M(i){let r=0;for(let t=0;t<i.length;t++)r=i[r]<=i[t]?r:t;return r}function I(i,{getW:r,setW:t,getH:e,setH:s,getPad:o,setX:c,setY:A,getChildren:E},{cols:d,gap:f}){const[b,O,g,y]=o(i),h=E(i),m=h.length;if(m){const v=(r(i)-f*(d-1)-(y+O))/d;Array.prototype.forEach.call(h,n=>t(n,v));const L=Array.prototype.map.call(h,n=>e(n)),u=Array(d).fill(b);for(let n=0;n<m;n++){const w=h[n],p=M(u);A(w,u[p]),c(w,y+(v+f)*p),u[p]+=L[n]+f}s(i,Math.max(...u)-f+g)}else s(i,b+g)}const a=class a extends HTMLElement{constructor(){super();l(this,"_fl_w");l(this,"_fl_h");l(this,"_rb");l(this,"_mb");l(this,"_mb2");l(this,"_layouting",!1)}get gap(){return+(this.getAttribute("gap")||a.default_props.gap)}set gap(t){this.setAttribute("gap",t+"")}get cols(){return+(this.getAttribute("cols")||a.default_props.cols)}set cols(t){this.setAttribute("cols",t+"")}connectedCallback(){this._rb=new ResizeObserver(t=>t.some(({target:e})=>e._fl_w!=e.offsetWidth||e._fl_h!=e.offsetHeight)&&this.relayout()),this._rb.observe(this),Array.prototype.forEach.call(this.children,t=>this._rb.observe(t)),this.relayout(),this._mb=new MutationObserver(t=>{t.forEach(e=>{e.addedNodes.forEach(s=>s instanceof HTMLElement&&this._rb.observe(s)),e.removedNodes.forEach(s=>s instanceof HTMLElement&&this._rb.unobserve(s))}),this.relayout()}),this._mb.observe(this,{childList:!0,attributes:!1}),this._mb2=new MutationObserver(()=>this.relayout()),this._mb2.observe(this,{childList:!1,attributes:!0})}disconnectedCallback(){this._rb.disconnect(),this._mb.disconnect(),this._mb2.disconnect()}relayout(){this._layouting||(this._layouting=!0,requestAnimationFrame(()=>{this._relayout(),this._layouting=!1}))}_relayout(){I(this,{getW:t=>t.offsetWidth,setW:(t,e)=>t.style.width=e+"px",getH:t=>(t._fl_w=t.offsetWidth,t._fl_h=t.offsetHeight),setH:(t,e)=>t.style.height=e+"px",getPad:t=>{const e=getComputedStyle(t);return[parseInt(e.paddingTop),parseInt(e.paddingRight),-parseInt(e.paddingTop),parseInt(e.paddingLeft)]},setX:(t,e)=>t.style.left=e+"px",setY:(t,e)=>t.style.top=e+"px",getChildren:t=>t.children},{cols:this.cols,gap:this.gap}),this._fl_w=this.offsetWidth,this._fl_h=this.offsetHeight,this._mb2.takeRecords()}};l(a,"default_props",Object.freeze({cols:2,gap:4}));let _=a;customElements.define("wc-waterfall",_);
