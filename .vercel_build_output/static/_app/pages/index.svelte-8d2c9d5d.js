import{S as D,i as H,s as P,k as E,e as _,t as U,M as B,N as V,d as r,n as $,c as b,a as v,g as F,O as M,b as e,f as O,E as o,P as S,F as C,h as G,G as z,H as Q}from"../chunks/vendor-532e3d33.js";import{g as R}from"../chunks/navigation-51f4a605.js";import"../chunks/singletons-12a22614.js";function J(c){let h,n,s,i,p=(c[0].length>0?`Artista:  ${c[0]}`:"")+"",g,x,d,a,y,f,l,u,j,I;return{c(){h=E(),n=_("section"),s=_("div"),i=_("h1"),g=U(p),x=E(),d=_("div"),a=_("input"),y=E(),f=_("button"),l=B("svg"),u=B("path"),this.h()},l(t){V('[data-svelte="svelte-16af5ul"]',document.head).forEach(r),h=$(t),n=b(t,"SECTION",{class:!0});var N=v(n);s=b(N,"DIV",{});var k=v(s);i=b(k,"H1",{class:!0});var T=v(i);g=F(T,p),T.forEach(r),x=$(k),d=b(k,"DIV",{class:!0});var w=v(d);a=b(w,"INPUT",{class:!0,id:!0,placeholder:!0,type:!0}),y=$(w),f=b(w,"BUTTON",{class:!0});var q=v(f);l=M(q,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var A=v(l);u=M(A,"path",{d:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0}),v(u).forEach(r),A.forEach(r),q.forEach(r),w.forEach(r),k.forEach(r),N.forEach(r),this.h()},h(){document.title="Api Music",e(i,"class","text-center pb-2 pr-2 text-black bg-white bg-opacity-50 rounded-t-md border border-black xl:text-4xl lg:text-3xl md:text-2xl sm:text"),e(a,"class","px-2 w-full text-white text-sm md:text-base bg-black bg-opacity-70 placeholder-gray-400 outline-none rounded-b-md svelte-nwijv4"),e(a,"id","artista"),e(a,"placeholder","Que m\xFAsico quieres escuchar...?"),e(a,"type","text"),e(u,"d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"),e(u,"stroke-linecap","round"),e(u,"stroke-linejoin","round"),e(u,"stroke-width","2"),e(l,"class","w-6 h-6 text-red-400"),e(l,"fill","none"),e(l,"stroke","currentColor"),e(l,"viewBox","0 0 24 24"),e(l,"xmlns","http://www.w3.org/2000/svg"),e(f,"class","svelte-nwijv4"),e(d,"class","flex flex-row p-2 w-full bg-black bg-opacity-0 rounded-b-md border border-black gap-2 justify-between"),e(n,"class","h-screen object-cover left-0 top-0 right-0 bottom-0 z-40 flex flex-col justify-center mx-5 md:mx-40 lg:mx-56 xl:mx-76")},m(t,m){O(t,h,m),O(t,n,m),o(n,s),o(s,i),o(i,g),o(s,x),o(s,d),o(d,a),S(a,c[0]),o(d,y),o(d,f),o(f,l),o(l,u),j||(I=[C(a,"input",c[2]),C(a,"keydown",c[3]),C(f,"click",c[1])],j=!0)},p(t,[m]){m&1&&p!==(p=(t[0].length>0?`Artista:  ${t[0]}`:"")+"")&&G(g,p),m&1&&a.value!==t[0]&&S(a,t[0])},i:z,o:z,d(t){t&&r(h),t&&r(n),j=!1,Q(I)}}}function K(c,h,n){let s="";const i=()=>{R(`${s}`)};function p(){s=this.value,n(0,s)}return[s,i,p,x=>{x.keyCode===13&&i()}]}class Y extends D{constructor(h){super();H(this,h,K,J,P,{})}}export{Y as default};