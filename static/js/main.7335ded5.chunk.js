(this.webpackJsonpprojekt2=this.webpackJsonpprojekt2||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(28),a(29),a(3)),o=a(1),m=(a(30),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(o.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(o.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),u=function(e){var t=e.title,a=e.autor,n=e.text;return r.a.createElement("article",{style:{marginTop:"40px"}},r.a.createElement("h3",{style:{marginBottom:"3px",textTransform:"UpperCase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:"13px",fontSize:14}},a),r.a.createElement("p",{style:{fontSize:16}},n))},s=[{id:1,title:"Czym jest teoria strun?",autor:"Jan Nowak",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem impedit distinctio porro, quae expedita ex minima repudiandae voluptatibus, consequuntur sed commodi rerum debitis quod cupiditate ipsam tempore velit necessitatibus?"},{id:2,title:"Czym jest paradoks fermiego?",autor:"Jan Nowak2",text:"2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem impedit distinctio porro, quae expedita ex minima repudiandae voluptatibus, consequuntur sed commodi rerum debitis quod cupiditate ipsam tempore velit necessitatibus?"},{id:3,title:"Czym jest materia i ciemna energia?",autor:"Jan Nowak3",text:"3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quidem impedit distinctio porro, quae expedita ex minima repudiandae voluptatibus, consequuntur sed commodi rerum debitis quod cupiditate ipsam tempore velit necessitatibus?"}],p=function(){var e=s.map((function(e){return r.a.createElement(u,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},d=function(){return r.a.createElement(o.c,{render:function(){return r.a.createElement("h3",null,"Panel admina - dzie\u0144 dobry")}})},E=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},h=function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona Produktu"),r.a.createElement(E,{id:e.match.params.id}),r.a.createElement(i.b,{to:"/products"},"Powr\xf3t do produkt\xf3w"))},f=(a(36),["car","bike","motocicle"]),g=function(){var e=f.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h5",null,"Lista Produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},v=function(){return r.a.createElement("div",null,"Error")},b=a(9),x=a(10),y=a(12),j=a(11),k=(a(37),function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas!"),r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.value,placeholder:"napisz wiadomo\u015b\u0107"}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(o.a,{when:!!this.state.value,message:"Masz niewype\u0142niony formularz, czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119?"}))}}]),a}(n.Component)),w=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"login"},"Podaj login",r.a.createElement("input",{id:"login",type:"text"})),r.a.createElement("label",{htmlFor:"pass"},"Podaj has\u0142o",r.a.createElement("input",{id:"pass",type:"password"})),r.a.createElement("button",null,"Zaloguj"))}}]),a}(n.Component),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.e,null,r.a.createElement(o.c,{path:"/",exact:!0,component:p}),r.a.createElement(o.c,{path:"/contact",component:k}),r.a.createElement(o.c,{path:"/products",component:g}),r.a.createElement(o.c,{path:"/product/:id",component:h}),r.a.createElement(o.c,{path:"/admin",component:d}),r.a.createElement(o.c,{path:"/login",component:w}),r.a.createElement(o.c,{component:v})))},z=(a(38),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),N=function(){var e=z.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(i.c,{to:e.path,exact:!!e.exact&&e.exact},e.name," "))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},S=(a(39),a(16)),C=a.n(S),J=a(22),O=a.n(J),F=a(17),P=a.n(F),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.e,null,r.a.createElement(o.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:C.a,alt:"miasto"})}}),r.a.createElement(o.c,{path:"/products",render:function(){return r.a.createElement("img",{src:O.a,alt:"miasto"})}}),r.a.createElement(o.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:P.a,alt:"miasto"})}}),r.a.createElement(o.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:C.a,alt:"miasto"})}}),r.a.createElement(o.c,{render:function(){return r.a.createElement("img",{src:P.a,alt:"miasto"})}})))};var B=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(L,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(N,null)),r.a.createElement("section",{className:"page"},r.a.createElement(q,null))),r.a.createElement("footer",null,r.a.createElement(m,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.7335ded5.chunk.js.map