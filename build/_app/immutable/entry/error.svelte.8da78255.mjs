import{S,i as q,s as x,k as f,q as _,a as C,l as d,m as g,r as h,h as u,c as k,b as m,C as v,u as E,D as $,E as y}from"../chunks/index.407f8d8d.mjs";import{s as D}from"../chunks/singletons.607e8ae0.mjs";const H=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=C(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=k(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:$,o:$,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function w(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let B=class extends S{constructor(t){super(),q(this,t,w,j,x,{})}};export{B as default};
