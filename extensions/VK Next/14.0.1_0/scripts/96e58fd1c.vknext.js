﻿"use strict";(globalThis.webpackChunkvknext=globalThis.webpackChunkvknext||[]).push([[681],{29887:(e,s,t)=>{t.d(s,{r:()=>n});var n=(0,t(93543).mT)("Icon24UserOutline","user_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="user_outline_24"><path d="M14.85 7.95A2.85 2.85 0 0 0 12 5.1a2.85 2.85 0 0 0-2.85 2.85A2.85 2.85 0 0 0 12 10.8a2.85 2.85 0 0 0 2.85-2.85m1.8 0A4.65 4.65 0 0 1 12 12.6a4.65 4.65 0 0 1-4.65-4.65A4.65 4.65 0 0 1 12 3.3a4.65 4.65 0 0 1 4.65 4.65M5.9 18.429c0 .768-.09.671.335.671h11.53c.426 0 .335.097.335-.671 0-1.893-2.778-3.029-6.1-3.029s-6.1 1.136-6.1 3.029m-1.8 0c0-3.327 3.673-4.829 7.9-4.829s7.9 1.502 7.9 4.829c0 1.735-.685 2.471-2.135 2.471H6.235c-1.45 0-2.135-.736-2.135-2.471" /></symbol>',24,24,!1,void 0)},70681:(e,s,t)=>{t.a(e,(async(e,n)=>{try{t.r(s),t.d(s,{default:()=>z});var r=t(74848),i=t(39107),l=t(40414),o=t(96540),c=t(11092),a=t(74225),d=t.n(a),u=t(13742),h=t(58006),x=t(8015),j=t(57087),f=t(4255),v=t(58104),w=t(10042),A=t(50776),m=t(47077),_=t(21765),g=t(76396),S=e([x,_]);[x,_]=S.then?(await S)():S;const k=async(e,s)=>{const{vkapiWrapper:n}=await Promise.resolve().then(t.bind(t,52370)),{items:r,count:i}=await n.friends.get({offset:e,fields:["photo_100","online_info","is_nft"],user_id:s,count:500,order:"hints"});return{count:i,items:r}},p=async(e,s,n)=>{const{vkapiWrapper:r}=await Promise.resolve().then(t.bind(t,52370)),{items:i,count:l}=await r.friends.search({q:s,offset:e,fields:["photo_100","online_info","is_nft"],user_id:n,count:500,order:"hints"});return{count:l,items:i}},C=({extraHeight:e=0})=>{const s=(0,x.A)(),[t,n]=(0,o.useState)(0),[a,f]=(0,g.k)(),[_,S]=(0,o.useState)(!0),[C]=(0,A.S)(),y=(0,l.A)(C),[b]=(0,m.X)(),{viewer:z}=(0,j.ur)(),U=(0,h.A)({isSearch:!0}),{width:E}=(0,u.A)(),[H,I]=(0,o.useState)(0),T=(0,o.useRef)(null);(0,o.useEffect)((()=>{if(!T.current)return;const e=T.current.getBoundingClientRect();I(e.width)}),[T,E]);const N=({key:e,...s})=>(0,r.jsx)(w.A,{...s},e),R=_?async()=>{}:async()=>{if(!z?.id)return;S(!0);const e=a.length+1,{items:s}=X()?await p(e,y,z.id):await k(e,z.id);f((e=>[...e,...s])),S(!1)},X=(0,o.useCallback)((()=>y?.trim()?.length),[y]);d()((async e=>{if(!z?.id)return;S(!0),a.length&&f([]);const{count:s,items:t}=X()?await p(0,y,z.id):await k(0,z.id);e()&&(n(s),f(t),S(!1))}),[y,z?.id]);const F=(0,o.useMemo)((()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:v.A.HiddenDiv,ref:T}),[...new Array(14).keys()].map(((e,s)=>(0,r.jsx)(w.A.Skeleton,{},`usersSkeleton_${s}`)))]})),[T]),M=!a?.length;if(M||0===z?.id||null===b)return M&&!_?(0,r.jsx)(i.OrA,{children:s.use("settings_friends_not_found")}):F;const B=t===a.length?a.length:a.length+1;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:v.A.HiddenDiv,ref:T}),(0,r.jsx)(c.wK,{isRowLoaded:({index:e})=>!!a[e],loadMoreRows:R,rowCount:t,children:({onRowsRendered:s,registerChild:t})=>(0,r.jsx)(c.B8,{onRowsRendered:s,ref:t,height:U-176-e,rowCount:B,rowHeight:48,rowRenderer:N,width:H})})]})},y=()=>{const[e]=(0,g.k)(),[s,t]=(0,A.S)();return e.length||s.trim().length?(0,r.jsx)(i.vji,{after:null,value:s,onChange:t}):(0,r.jsx)("div",{className:v.A.SearchSkeleton,children:(0,r.jsx)(i.EAD,{width:"100%",height:31})})},b=({selectedUserIds:e})=>{const{viewer:s}=(0,j.ur)(),[n,l]=(0,m.X)();return d()((async s=>{if(!e||0===e.length)return void(s()&&l([]));const n=[];for(const s of e)f.A.isUserId(s)&&n.push(s);const{vkapiWrapper:r}=await Promise.resolve().then(t.bind(t,52370)),i=await r.users.get({user_ids:n,fields:["photo_100","online_info","is_nft"]});s()&&l(i)}),[s?.id]),null!==n&&s?.id?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.A,{}),(0,r.jsx)(i.KzX,{size:12,children:(0,r.jsx)(i.wvv,{})}),(0,r.jsx)(i.KzX,{size:8})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.A.Skeleton,{}),(0,r.jsx)(i.KzX,{size:12,children:(0,r.jsx)(i.wvv,{})}),(0,r.jsx)(i.KzX,{size:8})]})},z=({selectedUserIds:e,onSelect:s,extraHeight:t})=>(0,r.jsx)(A.A,{children:(0,r.jsx)(m.A,{value:null,onSelect:s,children:(0,r.jsxs)(g.A,{value:[],children:[(0,r.jsx)(b,{selectedUserIds:e}),(0,r.jsx)(y,{}),(0,r.jsx)(C,{extraHeight:t})]})})});n()}catch(e){n(e)}}))},10042:(e,s,t)=>{t.d(s,{A:()=>j});var n=t(74848),r=t(29887),i=t(39107),l=t(14809),o=t(96540),c=t(33258),a=t(58104),d=t(47077),u=t(76396);const h=({style:e})=>(0,n.jsx)(i.T6P,{style:e,before:(0,n.jsx)(i.euF,{fallbackIcon:(0,n.jsx)(r.r,{}),size:36}),disabled:!0,children:(0,n.jsx)(i.EAD,{width:120})}),x=({index:e,style:s})=>{const[t]=(0,u.k)(),[r,x]=(0,d.X)(),[j,f]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if(!r)return;const e=r.map((e=>e.id));f(e.includes(v.id))}),[r]);const v=t[e];(0,l.A)((()=>{const e=[...r||[]],s=e.findIndex((e=>e.id===v.id));j?-1===s&&e.push(v):-1!==s&&e.splice(s,1),x(e)}),[j]);if(!v)return(0,n.jsx)(h,{style:s});const{online_info:w,first_name:A,last_name:m,photo_100:_,is_nft:g}=v;return(0,n.jsxs)(i.T6P,{before:(0,n.jsx)(c.A,{isNFT:g,src:_,size:36,badge:w?.is_online?w?.is_mobile?"online_mobile":"online":void 0}),style:s,after:(0,n.jsx)(i.Sc0,{checked:j}),className:a.A.UserCell,onClick:()=>{f(!j)},children:[A," ",m]})};x.Skeleton=h;const j=x},50776:(e,s,t)=>{t.d(s,{A:()=>c,S:()=>o});var n=t(74848),r=t(99381),i=t(96540);const l=(0,i.createContext)(["",r.A]),o=()=>(0,i.useContext)(l),c=({children:e})=>{const[s,t]=(0,i.useState)("");return(0,n.jsx)(l.Provider,{value:[s,({target:e})=>{t(e.value)}],children:e})}},91507:(e,s,t)=>{t.d(s,{A:()=>u});var n=t(74848),r=t(39107),i=t(93543),l=(0,i.mT)("Icon28UserOutline","user_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="user_outline_28"><path fill-rule="evenodd" d="M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025m2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5s4.242.532 5.584 1.385c1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a1 1 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a1 1 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0),o=(0,i.mT)("Icon28CancelOutline","cancel_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cancel_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M6.293 6.293a1 1 0 0 1 1.414 0L14 12.585l6.293-6.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414L15.415 14l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0L14 15.415l-6.293 6.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414L12.585 14 6.293 7.707a1 1 0 0 1-.083-1.32Z" /></g></symbol>',28,28,!1,void 0),c=t(58104),a=t(47077);const d=({user:e})=>{const[s,t]=(0,a.X)(),{first_name:i,last_name:l,photo_100:d,id:u}=e;return(0,n.jsx)(r.Fw6,{title:(0,n.jsxs)("div",{className:c.A.SelectedUsersCell__header,children:[i,(0,n.jsx)("br",{}),l]}),children:(0,n.jsx)(r.euF,{src:d,size:56,gradientColor:(0,r.NTc)(u),initials:`${i[0]}${l[0]}`.toUpperCase(),onClick:()=>{const n=[...s||[]],r=n.findIndex((s=>s.id===e.id));-1!==r&&(n.splice(r,1),t(n))},children:(0,n.jsx)(r.euF.Overlay,{theme:"dark",children:(0,n.jsx)(o,{})})})},e.id)};d.Skeleton=()=>(0,n.jsx)(r.Fw6,{title:(0,n.jsxs)("div",{className:c.A.SelectedUsersCell__header,children:[(0,n.jsx)(r.EAD,{width:71,height:9}),(0,n.jsx)(r.EAD,{width:71,height:9})]}),children:(0,n.jsx)(r.euF,{size:56,fallbackIcon:(0,n.jsx)(l,{})})});const u=d},47077:(e,s,t)=>{t.d(s,{A:()=>a,X:()=>c});var n=t(74848),r=t(99381),i=t(14809),l=t(96540);const o=(0,l.createContext)([[],r.A]),c=()=>(0,l.useContext)(o),a=({children:e,value:s,onSelect:t})=>{const[r,c]=(0,l.useState)(s);return(0,i.A)((()=>{t&&t(r||[])}),[r]),(0,n.jsx)(o.Provider,{value:[r,c],children:e})}},21765:(e,s,t)=>{t.a(e,(async(e,n)=>{try{t.d(s,{A:()=>x});var r=t(74848),i=t(39107),l=t(8015),o=t(58104),c=t(91507),a=t(47077),d=e([l]);l=(d.then?(await d)():d)[0];const u=()=>(0,r.jsx)(i.ox2,{showArrows:!1,children:(0,r.jsxs)("div",{className:o.A.SelectedUsersContainer,children:[(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{}),(0,r.jsx)(c.A.Skeleton,{})]})}),h=()=>{const e=(0,l.A)(),[s]=(0,a.X)();return s&&s.length?(0,r.jsx)(i.ox2,{showArrows:!0,getScrollToLeft:e=>e-240,getScrollToRight:e=>e+240,children:(0,r.jsx)("div",{className:o.A.SelectedUsersContainer,children:s.map((e=>(0,r.jsx)(c.A,{user:e},e.id)))})}):(0,r.jsx)("div",{className:o.A.SelectedUsersScroll,children:(0,r.jsx)(i.EYj,{children:e.use("settings_friends_not_selected")})})};h.Skeleton=u;const x=h;n()}catch(e){n(e)}}))},76396:(e,s,t)=>{t.d(s,{A:()=>c,k:()=>o});var n=t(74848),r=t(99381),i=t(96540);const l=(0,i.createContext)([[],r.A]),o=()=>(0,i.useContext)(l),c=({children:e,value:s})=>{const[t,r]=(0,i.useState)(s);return(0,n.jsx)(l.Provider,{value:[t,r],children:e})}},40414:(e,s,t)=>{t.d(s,{A:()=>r});var n=t(96540);const r=function(e,s){const[t,r]=(0,n.useState)(e);return(0,n.useEffect)((()=>{const t=setTimeout((()=>{r(e)}),s??500);return()=>{clearTimeout(t)}}),[e,s]),t}},14809:(e,s,t)=>{t.d(s,{A:()=>i});var n=t(96540);const r=function(){const e=(0,n.useRef)(!0);return e.current?(e.current=!1,!0):e.current};const i=function(e,s){const t=r();(0,n.useEffect)((()=>{if(!t)return e()}),s)}},58104:(e,s,t)=>{t.d(s,{A:()=>n});const n={UserCell:"t02oitHO60vhesNr",SelectedUsersCell__header:"zZk5nQ5jI_XwwHzB",SelectedUsersScroll:"O9Xa0DMgkr5EMBGI",SearchSkeleton:"ZBqpYYwEHzRk4kWW",SelectedUsersContainer:"mvfEEWjeeIjfzWhq",HiddenDiv:"Th3fEfZvkMZNnuaj"}}}]);