(this["webpackJsonpecommerce-frontend"]=this["webpackJsonpecommerce-frontend"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(20),s=n.n(a),o=(n(48),n(49),n(67)),i=n(68),j=n(66),l=n(7),u=n(16),b=n(1);var p=function(){var e=JSON.parse(localStorage.getItem("user-info"));console.warn(e);var t=Object(l.e)();return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{bg:"primary",variant:"dark",children:[Object(b.jsx)(o.a.Brand,{href:"#home",children:"E-commerce"}),Object(b.jsx)(i.a,{className:"mr-auto navbar_wrapper",children:localStorage.getItem("user-info")?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{to:"/add",children:"Add Product"}),Object(b.jsx)(u.b,{to:"/update",children:"Update Product"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{to:"/login",children:"Login "}),Object(b.jsx)(u.b,{to:"/register",children:"Register "})]})}),localStorage.getItem("user-info")?Object(b.jsx)(i.a,{children:Object(b.jsx)(j.a,{title:e&&e.name,children:Object(b.jsx)(j.a.Item,{onClick:function(){localStorage.clear(),t.push("/register")},children:"Log out"})})}):null]})})},d=n(11),O=n.n(d),h=n(17),f=n(12);var m=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(f.a)(a,2),o=s[0],i=s[1],j=Object(l.e)();function u(){return(u=Object(h.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn(n,o),t=o,c=fetch("https://abdulazizecom.herokuapp.com/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/son"},body:JSON.stringify(t)}),e.next=5,c.json();case 5:c=e.sent,localStorage.setItem("user-info",JSON.stringify(c)),j.push("/add");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){localStorage.getItem("user-info")&&j.push("/add")}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login Page"}),Object(b.jsxs)("div",{className:"col-sm-6 offset-sm-3",children:[Object(b.jsx)("input",{type:"text",placeholder:"email",onChange:function(e){return r(e.target.value)},className:"form-control"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return i(e.target.value)},className:"form-control"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){return u.apply(this,arguments)},className:"btn btn-primary",children:"Login"})]})]})};var x=function(){Object(c.useEffect)((function(){localStorage.getItem("user-info")&&m.push("/add")}),[]);var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(f.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(""),u=Object(f.a)(j,2),p=u[0],d=u[1],m=Object(l.e)();function x(){return(x=Object(h.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:n,email:p,password:o},console.warn(t),e.next=4,fetch("https://abdulazizecom.herokuapp.com/api/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return c=e.sent,e.next=7,c.json();case 7:c=e.sent,localStorage.setItem("user-info",JSON.stringify(c)),m.push("/add");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"col-sm-6 offset-sm-3",children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsx)("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)},className:"form-control",placeholder:"name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",value:p,onChange:function(e){return d(e.target.value)},className:"form-control",placeholder:"email"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",value:o,onChange:function(e){return i(e.target.value)},className:"form-control",placeholder:"password"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){return x.apply(this,arguments)},className:"btn btn-primary",children:"Sign Up"})]})})};var g=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(f.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(""),l=Object(f.a)(j,2),u=l[0],d=l[1],m=Object(c.useState)(""),x=Object(f.a)(m,2),g=x[0],v=x[1];function y(){return(y=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn(n,o,u,g),(t=new FormData).append("file",o),t.append("file",u),t.append("file",n),t.append("file",g),e.next=8,fetch("http://localhost:8000/api/addproduct",{method:"POST",body:t});case 8:e.sent,alert("Data has been saved");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"col-sm-6 offset-sm-3",children:[Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"file",className:"form-control",placeholder:"file",onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"price",onChange:function(e){return d(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"description",onChange:function(e){return v(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return y.apply(this,arguments)},children:"Add Product"}),Object(b.jsx)("br",{})]})]})};var v=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)("h1",{children:"    UpdateProduct "})]})};var y=function(e){var t=Object(l.e)(),n=e.Cmp;return Object(c.useEffect)((function(){localStorage.getItem("user-info")||t.push("register")}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(n,{})})};n(65);var S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(l.a,{path:"/login",children:Object(b.jsx)(m,{})}),Object(b.jsx)(l.a,{path:"/register",children:Object(b.jsx)(x,{})}),Object(b.jsxs)(l.a,{path:"/add",children:[Object(b.jsx)(y,{Cmp:g})," "]}),Object(b.jsxs)(l.a,{path:"/update",children:[" ",Object(b.jsx)(y,{Cmp:v}),"  "]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(40);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.5cd5f609.chunk.js.map