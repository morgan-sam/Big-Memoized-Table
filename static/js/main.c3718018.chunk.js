(this["webpackJsonpbig-memoized-table"]=this["webpackJsonpbig-memoized-table"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),l=n(1),c=n.n(l),s=n(3),u=n(4),m=n(9),d=n(2),f=r.a.memo((function(e){var t=e.cellKey,n=e.cellVal,a=e.entryIndex,o=e.toggleBooleanCell,i=e.toggleGenderCell,l=e.changeAgeCell,c=e.changeCellValue;console.log("Entry ".concat(a,", ").concat(t," cell updated"));var s="boolean"===typeof n,u={cursor:"index"!==t?"pointer":"auto",textAlign:s?"center":"left",userSelect:"none"};return r.a.createElement("td",{className:"".concat(t," cell"),style:u,onClick:function(){s?o(a,t,n):"gender"===t?i(a,n):"age"===t?l(a,n):"index"!==t&&c(a,t)}},s?n?"\u2714":"":n)})),g={display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center",border:"1px solid black",fontSize:"2rem"},h={height:"3rem",width:"3rem",borderTop:"10px solid #4287f5",borderRight:"10px solid #eee",borderBottom:"10px solid #eee",borderLeft:"10px solid #eee",borderRadius:"100%",animation:"spin 1s cubic-bezier(0,-0.04,.07,.82) infinite"},p=function(){return r.a.createElement("div",{style:g},r.a.createElement("div",{style:h}))},b=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},y=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?results=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return e.map((function(e,t){return{index:t,firstname:e.name.first,lastname:e.name.last,gender:b(e.gender),age:e.dob.age,address:"".concat(e.location.street.number," ").concat(e.location.street.name," ").concat(e.location.postcode),country:e.location.country,email:e.email,phone:e.phone,mobile:e.cell,active:Math.random()>.5,premium:Math.random()>.5}}))},O=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(1);case 2:return n=e.sent,a=v(n),e.abrupt("return",a[0][t]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w={display:"block",height:"100%",width:"100%",overflowX:"hidden",overflowY:"scroll",border:"1px solid black"},E=["index","first name","last name","gender","age","address","country","email","phone","mobile","active","premium"],x=function(e){var t=e.data,n=e.setData,o=e.memoization,i=e.loading,l=e.setLoading,u=Object(a.useState)([]),m=Object(d.a)(u,2),g=m[0],h=m[1],y=function(e,a,r){var o=JSON.parse(JSON.stringify(t));o[e][a]=!r,n(o)},v=function(e,a){var r=JSON.parse(JSON.stringify(t)),o="Male"===a?"Female":"Male";r[e].gender=o,n(r)},x=function(e){var a=JSON.parse(JSON.stringify(t)),r=Math.round(81*Math.random()+18);a[e].age=r,n(a)},S=function(){var e=Object(s.a)(c.a.mark((function e(a,r){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=JSON.parse(JSON.stringify(t)),e.next=3,O(r);case 3:i=e.sent,o[a][r]=i,n(o);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=Object(a.useCallback)((function(e,t,a){n((function(n){var r=JSON.parse(JSON.stringify(n));return r[e][t]=!a,r}))}),[]),k=Object(a.useCallback)((function(e,t){n((function(n){var a=JSON.parse(JSON.stringify(n)),r="Male"===t?"Female":"Male";return a[e].gender=r,a}))}),[]),C=Object(a.useCallback)((function(e){n((function(t){var n=JSON.parse(JSON.stringify(t)),a=Math.round(81*Math.random()+18);return n[e].age=a,n}))}),[]),z=Object(a.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a);case 2:r=e.sent,n((function(e){var n=JSON.parse(JSON.stringify(e));return n[t][a]=r,n}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){var e=t.map((function(e,t){return r.a.createElement("tr",{key:t},Object.entries(e).map((function(t,n){var a=Object(d.a)(t,2),i=a[0],l=a[1];return r.a.createElement(f,{toggleBooleanCell:o?j:y,toggleGenderCell:o?k:v,changeAgeCell:o?C:x,changeCellValue:o?z:S,cellKey:i,cellVal:l,entryIndex:e.index,key:n})})))}));h(e)}),[t,o]),Object(a.useEffect)((function(){return l(!1)}),[g]),i?r.a.createElement(p,null):r.a.createElement("table",{style:w},Boolean(g.length)&&r.a.createElement("thead",null,r.a.createElement("tr",null,E.map((function(e,t){return r.a.createElement("th",{className:"".concat(e," heading"),key:t},b(e))})))),r.a.createElement("tbody",null,g))},S={display:"flex",flexDirection:"row",alignItems:"center"},j={textAlign:"center",display:"flex",alignItems:"center",border:"1px solid black",padding:"0.5rem",whiteSpace:"nowrap",boxSizing:"border-box"},k={padding:"0.5rem",fontSize:"0.9rem",whiteSpace:"nowrap"},C={display:"flex",flexDirection:"row",alignItems:"center"},z=function(e){var t=e.data,n=e.setUsers,a=e.memoization,o=e.setMemoization,i=e.screenConsole,l=e.setScreenConsole,c=e.setMessages,s=e.setTutorialScreen,m=function(e){n(e),c([])};return r.a.createElement("div",{className:"options",style:S},r.a.createElement("div",{style:C},r.a.createElement("div",{style:Object(u.a)(Object(u.a)({},j),{},{backgroundColor:a?"#E5FFE5":"#FFB2C5"})},"Memoization is ",a?"On":"Off"),r.a.createElement("button",{style:k,onClick:function(){return o(!a)}},"Turn Memoization ",a?"Off":"On")),r.a.createElement("div",{style:C},r.a.createElement("div",{style:j},"Number of Users: ",t.length),r.a.createElement("button",{style:k,onClick:function(){return m(20)}},"20 Users"),r.a.createElement("button",{style:k,onClick:function(){return m(100)}},"100 Users"),r.a.createElement("button",{style:k,onClick:function(){return m(1e3)}},"1000 Users")),r.a.createElement("div",{style:C},r.a.createElement("button",{style:k,onClick:function(){return l(!i)}},"Use ",i?"Off":"On","screen Console")),r.a.createElement("div",{style:C},r.a.createElement("button",{style:Object(u.a)(Object(u.a)({},k),{},{backgroundColor:"khaki"}),onClick:function(){return s(1)}},"Tutorial")))},N={width:"".concat(20,"rem"),height:"100%",boxSizing:"border-box",overflowX:"hidden",overflowY:"scroll",border:"1px solid black"},J={fontSize:"1.2rem",padding:"1rem",textDecoration:"underline"},M={boxSizing:"border-box",width:"inherit",margin:"1rem"},T=function(e){var t=e.messages;return r.a.createElement("div",{style:N},r.a.createElement("div",{style:J},"Console log (",t.length,"): "),r.a.createElement("div",{style:M}," ",t.map((function(e,t){return r.a.createElement("div",{key:t},e)}))))},I={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"white",padding:"2rem",border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"1rem",width:"30rem"},A={padding:"1rem 2rem 2rem 2rem"},D={padding:"2rem"},F={position:"absolute",top:"1rem",right:"1rem",height:"1.5rem",width:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#ff726f",border:"1px solid #ddd",color:"white"},U=function(e){var t=e.tutorialScreen,n=e.setTutorialScreen,a=[{title:"Tutorial Intro",text:["This webpage demonstrates the performance enhancement of memoizing large arrays of data.","It features an example database of user information using the randomuser.me API."]},{title:"Editing Data",text:["Any data entry can be changed by simply clicking on the cell.",'For example clicking a cell containing the value "Male" will change the value to "Female", clicking a name will change the value to another random name, etc.']},{title:"Memoization Comparison",text:["As a cell value changes an update message will log to the console on the right.","Memoization is on by default. Turn it off with the button at the top. Now click another cell to update it's value.","You should see that every single cell on the table updated when using the non memoized function."]},{title:"Large Data Sets",text:["With a small data set, the speed difference is neglible and so the unnecessary component rerenders are not a massive issue.","Change the size of the data set to a higher value (100 users/1000 users), and update a cell with memoization and without memoization for each.","With the larger sized tables the lag will become so significant it will cause the window to freeze for several seconds."]},{title:"Tutorial End / Speed Testing",text:["Hopefully this demo helps to illustrate why memoization is extremely important for optimizing large data sets.","Note:"," Two aspects of the demo will affect the speed of the cell changes. The reuse of the console.log statement for the on screen console, and the fact the API gets called when any of the string field cells are clicked.","For the most accurate speed test, set the app to use the off screen console and click either the Gender, Age, Active or Premium cells (all use offline functions)."]}];return r.a.createElement("div",{style:I},r.a.createElement("h3",null,a[t-1].title),r.a.createElement("div",{style:A},function(){var e=a[t-1].text;return Array.isArray(e)?e.map((function(e){return r.a.createElement("p",null,e)})):r.a.createElement("p",null,e)}()),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=t-1;n(e<1?a.length:e)}},"Previous"),r.a.createElement("span",{style:D},"Page ",t,"/",a.length),r.a.createElement("button",{onClick:function(){var e=t+1;n(e>a.length?1:e)}},"Next")),r.a.createElement("button",{style:F,onClick:function(){return n(0)}},"X"))},B=function(e){return{display:"grid",gridTemplateColumns:e?"1fr ".concat(20,"rem"):"1fr",gridTemplateRows:"2rem 1fr",gap:"1rem",boxSizing:"border-box",height:"100vh",width:"100vw",padding:"3rem"}},P=window.console,L=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([]),l=Object(d.a)(i,2),f=l[0],g=l[1],h=Object(a.useState)([]),p=Object(d.a)(h,2),b=p[0],O=p[1],w=Object(a.useState)(!0),E=Object(d.a)(w,2),S=E[0],j=E[1],k=Object(a.useState)(!1),C=Object(d.a)(k,2),N=C[0],J=C[1],M=Object(a.useState)(0),I=Object(d.a)(M,2),A=I[0],D=I[1],F=r.a.useCallback((function(e){g((function(t){return[e].concat(Object(m.a)(t))}))}),[]);window.console=S?Object(u.a)(Object(u.a)({},window.console),{},{log:F}):P;var L=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o([]),e.next=3,y(t);case 3:n=e.sent,a=v(n),o(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o([]);var e=window.localStorage.getItem("memoDemoTableEntries");e&&e.length?o(JSON.parse(e)):L(20),J(!1)}),[]),Object(a.useEffect)((function(){return J(0===n.length)}),[n]),Object(a.useEffect)((function(){return N?function(){return null}:g([])}),[N]),Object(a.useEffect)((function(){return J(!0)}),[b]),Object(a.useEffect)((function(){return J(!0)}),[n.length]),Object(a.useEffect)((function(){return window.localStorage.setItem("memoDemoTableEntries",JSON.stringify(n))}),[n]),r.a.createElement("div",{className:"App",style:B(S)},r.a.createElement(z,{data:n,setUsers:L,memoization:b,setMemoization:O,screenConsole:S,setScreenConsole:j,setMessages:g,setTutorialScreen:D}),S&&r.a.createElement("button",{onClick:function(){return g([])}},"Clear Console"),r.a.createElement(x,{data:n,setData:o,memoization:b,loading:N,setLoading:J,setMessages:g}),S&&r.a.createElement(T,{messages:f}),A>0&&r.a.createElement(U,{tutorialScreen:A,setTutorialScreen:D})," ")};n(16);i.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c3718018.chunk.js.map