(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(9),l=c.n(s),i=(c(17),c(11)),d=(c(18),c(19),c(20),function(){for(var e=function(){for(var e=[],t=1;t<=7;t+=1){for(var c=[],n=1;n<=4;n+=1){var r=Math.ceil(1e3*Math.random());c.push({id:[t,n],amount:r>100?r:r+100})}e.push(c)}return console.log(e),e}(),t=[],c=[],r=0;r<7;r+=1)t.push({sum:e[r].reduce((function(e,t){return e+t.amount}),0),id:r+1});for(var a=0;a<4;a+=1){for(var s=0,l=0;l<7;l+=1)e[l][a].id[1]===a+1&&(s+=e[l][a].amount);c.push({average:Math.round(s/4),id:a+1})}return console.log(c),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"table-major",children:[Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:e.map((function(e){return Object(n.jsx)("tr",{children:e.map((function(e){return Object(n.jsx)("td",{className:"table__cell",children:e.amount},e.id)}))},e[0].id)}))})}),Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)("tr",{children:Object(n.jsx)("td",{className:"table__cell",children:e.sum})},e.id)}))})})]}),Object(n.jsx)("table",{className:"table",children:Object(n.jsx)("tbody",{children:Object(n.jsx)("tr",{children:c.map((function(e){return Object(n.jsx)("td",{className:"table__cell",children:e.average},e.id)}))})})})]})}),j=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(d,{})})};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(j,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.80c35f3d.chunk.js.map