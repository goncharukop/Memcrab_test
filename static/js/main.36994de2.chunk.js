(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),u=n(12),o=n.n(u),l=(n(22),n(15)),i=(n(23),n(24),n(13)),s=n(4),b=n(16),j=(n(25),5),d=function(){for(var t=[],e=0;e<j;e+=1){for(var n=[],c=0;c<6;c+=1){var a=Math.floor(1e3*Math.random());n.push({id:[e,c],amount:a>100?a:a+100,className:"table__cell ui button"})}t.push(n)}return t}(),h=function(){var t=Object(a.useState)(d),e=Object(b.a)(t,2),n=e[0],r=e[1],u=function(t){for(var e=[],n=0;n<j;n+=1)e.push({sum:t[n].reduce((function(t,e){return t+e.amount}),0),id:n});return e}(n),o=function(t){for(var e=[],n=0;n<6;n+=1){for(var c=0,a=0;a<j;a+=1)t[a][n].id[1]===n&&(c+=d[a][n].amount);e.push({average:j?Math.round(c/j):0,id:n})}return e}(n),l=function(){return d.forEach((function(t){t.forEach((function(t){t.className="table__cell ui button"}))})),r(Object(s.a)(d)),d};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"table-major",children:[Object(c.jsx)("table",{className:"table",children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("th",{children:["Table with random values",d.map((function(t){return Object(c.jsx)("tr",{children:t.map((function(t){return Object(c.jsx)("td",{children:Object(c.jsx)("button",{type:"button",className:t.className,onClick:function(){return function(t){var e=t.el;e.amount+=1,r([].concat(Object(s.a)(d),[e.amount]))}({el:t})},onMouseOver:function(){l(),function(t){for(var e=t.el,n=0,c=0;n<3;)d.forEach((function(t){t.forEach((function(t){e.amount+c>=t.amount&&e.amount-c<=t.amount&&e.id!==t.id?"table__cell ui button blue"!==t.className&&n<3&&(t.className="table__cell ui button blue",n+=1):t.className="table__cell ui button",n<3&&(c+=1)}))}));r(Object(s.a)(d))}({el:t})},onFocus:function(){return l()},children:t.amount})},t.id)}))},t[0].id)}))]})})}),Object(c.jsx)("table",{className:"table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsx)("th",{children:"Sum"}),u.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("button",{type:"button",className:"table__cell ui button yellow",children:t.sum})}),Object(c.jsx)("button",{type:"button",className:"ui button red",onClick:function(){return function(t){var e,n=t.row,c=Object(i.a)(d);try{var a=function(){var t=e.value;t[0].id[0]===n.id&&(d=Object(s.a)(d).filter((function(e){return e!==t})))};for(c.s();!(e=c.n()).done;)a()}catch(u){c.e(u)}finally{c.f()}return j-=1,r(d),j}({row:t})},children:"Delete row"})]},t.id)}))]})})]}),Object(c.jsx)("table",{className:"table",children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("th",{children:["Average value in column",Object(c.jsx)("tr",{children:o.map((function(t){return Object(c.jsx)("td",{children:Object(c.jsx)("button",{type:"button",className:"table__cell ui button orange",children:Math.round(t.average)})},t.id)}))})]})})}),Object(c.jsx)("button",{type:"button",className:"table__cell ui button green add-btn",onClick:function(){return function(){for(var t=j;t<=j;t+=1){for(var e=[],n=0;n<6;n+=1){var c=Math.floor(1e3*Math.random());e.push({id:[t,n],amount:c>100?c:c+100,className:"table__cell ui button"})}d.push(e)}return j+=1,r(Object(s.a)(d)),j}()},children:"Add row"})]})},f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(f,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.36994de2.chunk.js.map