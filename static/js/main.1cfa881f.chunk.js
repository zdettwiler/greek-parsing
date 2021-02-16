(this["webpackJsonpgreek-parsing"]=this["webpackJsonpgreek-parsing"]||[]).push([[0],{179:function(e,t,a){e.exports=a(330)},185:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},327:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(36),l=a.n(u),s=a(72),o=a(14),i=a(47),c=a.n(i),v=a(73),x=a(24),p=a(336),m=a(337),h=a(52),g=a(53),f=a(338),b=[{value:"A-",text:"adjectif",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}],"degr\xe9":[{value:"-",text:"-"},{value:"C",text:"comparatif"},{value:"S",text:"superlatif"}]}},{value:"N-",text:"nom",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"RA",text:"article d\xe9fini",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"RD",text:"pronom d\xe9monstratif",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"RI",text:"pronom interrogatif/ind\xe9fini",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"RP",text:"pronom personnel",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"",text:"-"},{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"RR",text:"pronom relatif",parsing:{cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"V-",text:"verbe",parsing:{voix:[{value:"A",text:"active"},{value:"M",text:"moyenne"},{value:"P",text:"passive"}],mode:[{value:"I",text:"indicatif",parsing:{temps:[{value:"P",text:"pr\xe9sent"},{value:"I",text:"imparfait"},{value:"F",text:"futur"},{value:"A",text:"aoriste"},{value:"X",text:"parfait"},{value:"Y",text:"plus-que-parfait"}],personne:[{value:"1",text:"1\xe8re"},{value:"2",text:"2\xe8me"},{value:"3",text:"3\xe8me"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"D",text:"imp\xe9ratif",parsing:{temps:[{value:"P",text:"pr\xe9sent"},{value:"I",text:"imparfait"},{value:"F",text:"futur"},{value:"A",text:"aoriste"},{value:"X",text:"parfait"},{value:"Y",text:"plus-que-parfait"}],personne:[{value:"2",text:"2\xe8me"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"S",text:"subjonctif",parsing:{temps:[{value:"P",text:"pr\xe9sent"},{value:"I",text:"imparfait"},{value:"F",text:"futur"},{value:"A",text:"aoriste"},{value:"X",text:"parfait"},{value:"Y",text:"plus-que-parfait"}],personne:[{value:"1",text:"1\xe8re"},{value:"2",text:"2\xe8me"},{value:"3",text:"3\xe8me"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"O",text:"optatif",parsing:{temps:[{value:"P",text:"pr\xe9sent"},{value:"I",text:"imparfait"},{value:"F",text:"futur"},{value:"A",text:"aoriste"},{value:"X",text:"parfait"},{value:"Y",text:"plus-que-parfait"}],personne:[{value:"1",text:"1\xe8re"},{value:"2",text:"2\xe8me"},{value:"3",text:"3\xe8me"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}},{value:"N",text:"infinitif",parsing:{temps:[{value:"P",text:"pr\xe9sent"},{value:"A",text:"aoriste"}]}},{value:"P",text:"participe",parsing:{temps:[{value:"P",text:"pr\xe9sent"},{value:"A",text:"aoriste"}],cas:[{value:"N",text:"N"},{value:"A",text:"A"},{value:"G",text:"G"},{value:"D",text:"D"}],genre:[{value:"M",text:"m"},{value:"F",text:"f"},{value:"N",text:"n"}],nombre:[{value:"S",text:"sg"},{value:"P",text:"pl"}]}}]}},{value:"P-",text:"pr\xe9position"},{value:"X-",text:"particule"},{value:"C-",text:"conjonction"},{value:"D-",text:"adverbe"},{value:"I-",text:"interjection"}],d=(a(185),function(e){var t=e.checkAnswer,a=Object(n.useState)({personne:"",temps:"",voix:"",mode:"",cas:"",nombre:"",genre:"","degr\xe9":""}),u=Object(x.a)(a,2),l=u[0],s=u[1],o=function(e,a){s(Object(g.a)(Object(g.a)({},l),{},Object(h.a)({},e,a))),t(Object(g.a)(Object(g.a)({},l),{},Object(h.a)({},e,a)))};return r.a.createElement("div",{className:"Morphology"},r.a.createElement(f.a,{key:"nature",placeholder:"nature",selection:!0,compact:!0,value:l.nature,options:b,onChange:function(e,t){var a=t.value;return o("nature",a)}}),function e(t,a){var n=t.find((function(e){return e.value===a}));if(n&&n.parsing)return Object.entries(n.parsing).reduce((function(t,a){var u=Object(x.a)(a,2),s=u[0],i=u[1];return t.push(r.a.createElement(f.a,{key:s,placeholder:s,selection:!0,compact:!0,options:i,onChange:function(e,t){var a=t.value;return o(s,a)}})),n.parsing[s]&&""!==l[s]&&t.push(e(n.parsing[s],l[s])),t}),[])}(b,l.nature))}),O=(a(306),function(e){var t=e.word,a=Object(n.useState)(!1),u=Object(x.a)(a,2),l=u[0],s=u[1];return t?r.a.createElement("div",{className:"Word"},r.a.createElement("div",{className:"greek"+(l?" correct":"")},t.greek),r.a.createElement(d,{key:t.greek,checkAnswer:function(e){for(var a in e)if(e[a]!==t.parsing[a])return void s(!1);s(!0)}})):""});a(307);var j=function(e){var t=e.getVerse,a=e.book,n=e.bookOptions,u=e.chapter,l=e.chapterOptions,s=e.verse,i=e.verseOptions,c=Object(o.f)();return r.a.createElement("div",{className:"VerseSelector"},r.a.createElement(f.a,{className:"book",selection:!0,value:a,options:n,onChange:function(e,a){var n=a.value;c.push("/".concat(n,"/").concat(u,"/").concat(s)),t(n,u,s)}})," ",r.a.createElement(f.a,{className:"chapter",selection:!0,compact:!0,value:u,options:l,onChange:function(e,n){var r=n.value;c.push("/".concat(a,"/").concat(r,"/").concat(s)),t(a,r,s)}}),":",r.a.createElement(f.a,{className:"verse",selection:!0,compact:!0,value:s,options:i,onChange:function(e,n){var r=n.value;c.push("/".concat(a,"/").concat(u,"/").concat(r)),t(a,u,r)}}))},P=a(169),A=a.n(P),N={Matthieu:"61-Mt-morphgnt.txt",Marc:"62-Mk-morphgnt.txt",Luc:"63-Lk-morphgnt.txt",Jean:"64-Jn-morphgnt.txt",Actes:"65-Ac-morphgnt.txt",Romains:"66-Ro-morphgnt.txt","1 Corinthiens":"67-1Co-morphgnt.txt","2 Corinthiens":"68-2Co-morphgnt.txt",Galates:"69-Ga-morphgnt.txt","\xc9ph\xe9siens":"70-Eph-morphgnt.txt",Philippiens:"71-Php-morphgnt.txt",Colossiens:"72-Col-morphgnt.txt","1 Thessaloniciens":"73-1Th-morphgnt.txt","2 Thessaloniciens":"74-2Th-morphgnt.txt","1 Timoth\xe9e":"75-1Ti-morphgnt.txt","2 Timoth\xe9e":"76-2Ti-morphgnt.txt",Tite:"77-Tit-morphgnt.txt","Phil\xe9mon":"78-Phm-morphgnt.txt","H\xe9breux":"79-Heb-morphgnt.txt",Jacques:"80-Jas-morphgnt.txt","1 Pierre":"81-1Pe-morphgnt.txt","2 Pierre":"82-2Pe-morphgnt.txt","1 Jean":"83-1Jn-morphgnt.txt","2 Jean":"84-2Jn-morphgnt.txt","3 Jean":"85-3Jn-morphgnt.txt",Jude:"86-Jud-morphgnt.txt",Apocalypse:"87-Re-morphgnt.txt"},k=[{text:"Matthieu",value:"Matthieu"},{text:"Marc",value:"Marc"},{text:"Luc",value:"Luc"},{text:"Jean",value:"Jean"},{text:"Actes",value:"Actes"},{text:"Romains",value:"Romains"},{text:"1 Corinthiens",value:"1 Corinthiens"},{text:"2 Corinthiens",value:"2 Corinthiens"},{text:"Galates",value:"Galates"},{text:"\xc9ph\xe9siens",value:"\xc9ph\xe9siens"},{text:"Philippiens",value:"Philippiens"},{text:"Colossiens",value:"Colossiens"},{text:"1 Thessaloniciens",value:"1 Thessaloniciens"},{text:"2 Thessaloniciens",value:"2 Thessaloniciens"},{text:"1 Timoth\xe9e",value:"1 Timoth\xe9e"},{text:"2 Timoth\xe9e",value:"2 Timoth\xe9e"},{text:"Tite",value:"Tite"},{text:"Phil\xe9mon",value:"Phil\xe9mon"},{text:"H\xe9breux",value:"H\xe9breux"},{text:"Jacques",value:"Jacques"},{text:"1 Pierre",value:"1 Pierre"},{text:"2 Pierre",value:"2 Pierre"},{text:"1 Jean",value:"1 Jean"},{text:"2 Jean",value:"2 Jean"},{text:"3 Jean",value:"3 Jean"},{text:"Jude",value:"Jude"},{text:"Apocalypse",value:"Apocalypse"}];function J(){return S.apply(this,arguments)}function S(){return(S=Object(v.a)(c.a.mark((function e(){var t,a,n,r,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"Jean",e.next=3,A.a.get("https://raw.githubusercontent.com/morphgnt/sblgnt/master/".concat(N[t]));case 3:return a=e.sent,n={},r=a.data.trim().split("\n").map((function(e){var a=e.split(" "),r=a[2]?a[2].split("").reduce((function(e,t,n){return e[["personne","temps","voix","mode","cas","nombre","genre","degr\xe9"][n]]="-"===t?"":t,e.nature=a[1],e}),{}):a[2],u=a[0].match(/(\d{2})(\d{2})(\d{2})/);return n[parseInt(u[2])]?n[parseInt(u[2])].includes(parseInt(u[3]))||n[parseInt(u[2])].push(parseInt(u[3])):n[parseInt(u[2])]=[],{reference:u,book:t,chapter:parseInt(u[2]),verse:parseInt(u[3]),greek:a[3],rawParsing:a[2],parsing:r}})),e.abrupt("return",[r,n]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(327);var E=function(){var e=Object(o.g)(),t=Object(o.f)(),a=Object(n.useState)(!1),u=Object(x.a)(a,2),l=u[0],s=u[1],i=Object(n.useState)(e.book||"Jean"),h=Object(x.a)(i,2),g=h[0],f=h[1],b=Object(n.useState)(parseInt(e.chapter)||1),d=Object(x.a)(b,2),P=d[0],A=d[1],N=Object(n.useState)(parseInt(e.verse)||1),S=Object(x.a)(N,2),E=S[0],C=S[1],G=Object(n.useState)(null),I=Object(x.a)(G,2),T=I[0],D=I[1],w=Object(n.useState)([]),y=Object(x.a)(w,2),M=y[0],F=y[1],R=Object(n.useState)({}),q=Object(x.a)(R,2),X=q[0],H=q[1];function L(e,t,a){return V.apply(this,arguments)}function V(){return(V=Object(v.a)(c.a.mark((function e(t,a,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),t===g&&M.length){e.next=11;break}return e.next=4,J(t);case 4:r=e.sent,f(t),F(r[0]),H(r[1]),W(r,t,a,n),e.next=12;break;case 11:W([M,X],t,a,n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,a,n,r){var u=Object.keys(e[1]).includes(String(n))?n:1;A(u);var l=e[1][u]&&e[1][u].includes(r)?r:1;C(l),D(e[0].filter((function(e){return e.chapter===u&&e.verse===l}))),t.push("/".concat(a,"/").concat(u,"/").concat(l)),s(!1)}return Object(n.useEffect)((function(){null!==T||l||L(g,P,E)})),Object.keys(X).length&&X[P]&&!l?r.a.createElement("div",{className:"App"},r.a.createElement(j,{book:g,bookOptions:k,chapter:P,chapterOptions:Object.keys(X).map((function(e){return{text:parseInt(e),value:parseInt(e)}})),verse:E,verseOptions:X[P].map((function(e){return{text:e,value:e}})),getVerse:L}),r.a.createElement(p.a,null,r.a.createElement("h1",null,g," ",P,":",E),r.a.createElement("div",{className:"Words"},T&&T.map((function(e,t){return r.a.createElement(O,{word:e,key:"".concat(e,"-").concat(t)})}))))):r.a.createElement(m.a,{active:!0,size:"large"},"Chargement")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(328),a(329);l.a.render(r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/:book?/:chapter?/:verse?",children:r.a.createElement(E,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[179,1,2]]]);
//# sourceMappingURL=main.1cfa881f.chunk.js.map