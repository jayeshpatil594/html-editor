(this["webpackJsonpfrontend-editor"]=this["webpackJsonpfrontend-editor"]||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var c,i,a,o,r,d,l=t(0),h=t.n(l),s=t(17),b=t.n(s),j=(t(27),t(2)),u=t(8),m=(t(28),t(18)),g=t.n(m),O=t(3),p=O.a.div(c||(c=Object(j.a)(["\n  height: 100%;\n  width: 50%;\n  margin-right: 1rem;\n  .ace_editor {\n    width: 100% !important;\n  }\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n"]))),x=t(1),f=function(e){var n=e.onChange,t=e.mode,c=e.value,i=e.theme;return Object(x.jsx)(l.Fragment,{children:Object(x.jsx)(p,{children:Object(x.jsx)(g.a,{mode:t,theme:i,value:c,onChange:n,name:"editor",editorProps:{$blockScrolling:!0},showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,tabSize:2}})})})},v=O.a.div(i||(i=Object(j.a)(["\n  height: 100%;\n  width: 50%;\n\n  iframe {\n    height: 500px;\n    width: 100%;\n  }\n  @media only screen and (max-width: 600px) {\n    width: 100%;\n  }\n"]))),C=function(e){var n=e.source;return Object(x.jsx)(l.Fragment,{children:Object(x.jsx)(v,{children:Object(x.jsx)("iframe",{title:"output",srcDoc:n})})})},k=O.a.div(a||(a=Object(j.a)(["\n  width: 50%;\n  margin-bottom: 0.5rem;\n  display: flex;\n\talign-items: center;\n"]))),w=O.a.button(o||(o=Object(j.a)(["\n  height: 2rem;\n  width: 5rem;\n  margin-right: 0.5rem;\n  background: ",";;\n  color: white;\n  cursor: pointer;\n"])),(function(e){return e.backgroundColor})),y=O.a.div(r||(r=Object(j.a)(["\n  margin-left: auto;\n"]))),S="dark-mode",F="light-mode",P="monokai",T="github",M=function(e){return Object(x.jsxs)(k,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{children:"Dark Mode"}),Object(x.jsx)("input",{type:"radio",id:S,value:P,checked:e.theme===P,onChange:e.changeTheme}),Object(x.jsx)("label",{for:S,children:"On"}),Object(x.jsx)("input",{type:"radio",id:F,value:T,checked:e.theme===T,onChange:e.changeTheme}),Object(x.jsx)("label",{for:F,children:"Off"})]}),Object(x.jsx)(y,{}),Object(x.jsx)(w,{backgroundColor:"#646495",onClick:e.saveCode,children:"Save"}),Object(x.jsx)(w,{backgroundColor:"green",onClick:e.runCode,children:"Run"})]})},A=t(22),B='\n<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First Web Page</h1>\n<p>My First Paragraph</p>\n\n<p id="demo"></p>\n\n<script>\ndocument.getElementById("demo").innerHTML = 5 + 6;\n<\/script>\n\n</body>\n</html>\n',L=(t(39),t(40),t(41),t(42),t(43),t(44),O.a.div(d||(d=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  p {\n    margin: 0;\n  }\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n"])))),D=function(){var e=Object(l.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],i=Object(l.useState)(""),a=Object(u.a)(i,2),o=a[0],r=a[1],d=Object(l.useState)("monokai"),h=Object(u.a)(d,2),s=h[0],b=h[1],j=Object(l.useCallback)((function(e){c(e)}),[]),m=Object(l.useCallback)((function(){r(t)}),[r,t]),g=Object(l.useCallback)((function(e){b(e.target.value)}),[]),O=Object(l.useCallback)((function(){var e=new Blob([t],{type:"text/plain;charset=utf-8"});Object(A.saveAs)(e,"download.txt")}),[t]);return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(M,{theme:s,runCode:m,saveCode:O,changeTheme:g}),Object(x.jsxs)(L,{children:[Object(x.jsx)(f,{onChange:j,value:t,mode:"html",theme:s}),Object(x.jsx)(C,{source:o})]}),Object(x.jsx)(w,{backgroundColor:"green",onClick:function(){c(B),r(B)},children:"Click me"})," ",Object(x.jsx)("span",{children:"to run a sample code"})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),i(e),a(e),o(e)}))};b.a.render(Object(x.jsx)(h.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root")),E()}},[[45,1,2]]]);
//# sourceMappingURL=main.5dbd2825.chunk.js.map