(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(18),i=a.n(c),l=a(11),o=a(3),r=(a(41),a(42),a(19)),d=a(12),j=a(32),b=a(1),u=[{id:1,name:"Image",img:"images/image.png",link:"image",icon:Object(b.jsx)(r.b,{}),content:"In steganography, LSB substitution method is used. I.e. since every image has three components (RGB). This pixel information is stored in encoded format in one byte. The first bits containing this information for every pixel can be modified to store the hidden text. For this, the preliminary condition is that the text to be stored has to be smaller or of equal size to the image used to hide the text."},{id:2,name:"Audio",img:"images/audio.png",link:"audio",icon:Object(b.jsx)(j.a,{}),content:"Audio steganography is about hiding the secret message into the audio. It is a technique uses to secure the transmission of secret information or hide their existence. It also may provide confidentiality to secret message if the message is encrypted. To date most of the steganography software such as Mp3Stego and DeepSound use block cipher such as Advanced Encryption Standard or Data Encryption Standard to encrypt the secret message. It is a good practice for security"},{id:3,name:"Image in Image",img:"images/imageinimage.png",link:"imageinimage",icon:Object(b.jsx)(d.b,{}),content:"Embed the info into an image using traditional image steganography tools then embed the image into the Image Set the text color to white and make sure you are not using a colored background Superimpose a white rectangle over your text .Using the appropriate low level tools, create the text objects of your secret text then mark those objects as deleted. As long as no one tries to compact your PDF (Pitstop is one such compression/cleaning tool), your data will exist."},{id:4,name:"Video",img:"images/Video.png",link:"video",icon:Object(b.jsx)(d.b,{}),content:"Embed the info into an image using traditional image steganography tools then embed the image into the Image Set the text color to white and make sure you are not using a colored background Superimpose a white rectangle over your text .Using the appropriate low level tools, create the text objects of your secret text then mark those objects as deleted. As long as no one tries to compact your PDF (Pitstop is one such compression/cleaning tool), your data will exist."}];var m=function(){return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:u.map((function(e){var t=e.name,a=e.img,s=e.content,n=e.link;return Object(b.jsxs)("div",{className:"col-xl-3",children:[Object(b.jsxs)("div",{className:"card col-md-4 col-xl-12",children:[" ",Object(b.jsx)("img",{className:"rounded img-fluid",src:a,alt:"Card cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.toUpperCase()}),Object(b.jsx)("p",{className:"card-text",children:s}),Object(b.jsx)(l.b,{exact:!0,to:"/"+n,children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",children:"Click here"})})]})]}),"   ",Object(b.jsx)("div",{class:"col-md-4 col-xl-12",children:"\xa0"})]})}))})})};var h=function(){return Object(b.jsxs)("div",{className:"jumbotron",children:[Object(b.jsx)("h1",{className:"display-4",children:"StegImage"}),Object(b.jsx)("p",{className:"lead",children:"A simple web based steagnography application"}),Object(b.jsx)("hr",{className:"my-4"}),Object(b.jsx)("p",{children:"Made using python "}),Object(b.jsxs)("p",{className:"lead",children:[" ",Object(b.jsx)(l.b,{className:"btn btn-primary btn-lg",exact:!0,to:"/about",role:"button",children:"Learn more"})," "]})]})};var p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{banner:{title:"StegImage",sub:"A Simple Image Steagnography Web Application .",info:"Made using React JS, Node js and Python"}}),Object(b.jsx)(m,{})]})},O=a(9),x=a(10),g=a(0),f=a(8),v=a(14),N=a.n(v),y=a(23),S=a(15),k=a.n(S),w={headers:{"content-type":"multipart/form-data"}},E=function(e){return k.a.post("http://localhost:3001/image/encode",e,w)},I=function(e){return k.a.post("http://localhost:3001/image/decode",e,w)},M=function(e){return k.a.post("http://localhost:3001/audio/encode",e,w)},C=function(e){return k.a.post("http://localhost:3001/audio/decode",e,w)},T=function(e){return function(t){t({type:"PASSWORD",payload:e})}},D=function(e){return function(t){t({type:"FILE",payload:e})}},F=function(){return function(e){e({type:"SUMBIT_FALSE",payload:!1})}},A=function(e){var t=e.option,a=e.link,s=Object(f.b)(),n=Object(f.c)((function(e){return e.States})),c=function(e){console.log(a);var t="image"===a?n.file.name.includes(".png"):"audio"===a&&n.file.name.includes(".wav");if(console.log(t),e.preventDefault(),t){e.preventDefault();var c=new FormData;c.append("message",n.message),c.append("password",n.password),c.append("file",n.file),s(function(e,t){return function(){var a=Object(y.a)(N.a.mark((function a(s){var n,c,i,l;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"image"!==t){a.next=10;break}return a.next=4,E(e);case 4:n=a.sent,c=n.data,s({type:"SUMBIT_FORM_ENCODE",payload:c}),console.log(c),a.next=16;break;case 10:return a.next=12,M(e);case 12:i=a.sent,l=i.data,setTimeout((function(){s({type:"SUMBIT_FORM_ENCODE",payload:l})}),5e3),console.log(l);case 16:a.next=21;break;case 18:a.prev=18,a.t0=a.catch(0),console.log(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,18]])})));return function(e){return a.apply(this,arguments)}}()}(c,a))}else console.log("error")};return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"hero-body container",children:[Object(b.jsxs)("label",{className:"label is-large",children:["Upload to ",t," ",a]}),Object(b.jsxs)("form",{onSubmit:function(e){return c(e)},children:[Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("div",{className:"control has-icons-left has-icons-right",children:Object(b.jsx)("input",{className:"input is-large",type:"text",placeholder:"Secret Messsage",value:n.message||"",onChange:function(e){return s((t=e.target.value,function(e){e({type:"MESSAGE",payload:t})}));var t}})})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("div",{className:"control has-icons-left has-icons-right",children:Object(b.jsx)("input",{className:"input is-large",type:"password",placeholder:"Secret Password",value:n.password||"",onChange:function(e){return s(T(e.target.value))}})})}),Object(b.jsx)("div",{className:"file is-medium is-boxed has-name",children:Object(b.jsxs)("label",{className:"file-label",children:[Object(b.jsx)("input",{className:"file-input",type:"file",name:"file",onChange:function(e){return s(D(e.target.files[0]))}}),Object(b.jsxs)("span",{className:"file-cta",children:[Object(b.jsx)("span",{className:"file-icon",children:Object(b.jsx)(d.c,{})}),Object(b.jsx)("span",{className:"file-label",children:"Upload your file"})]}),Object(b.jsx)("span",{className:"file-name",children:n.file.name||""})]})}),Object(b.jsx)("div",{className:"level  column",children:n.sumbit?Object(b.jsxs)("a",{href:n.response,download:!0,className:"button is-large is-primary",children:[Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)(d.a,{})}),Object(b.jsx)("span",{children:"Download"})]}):Object(b.jsx)("button",{className:"button is-large is-primary ".concat(n.button),onClick:function(){return s((function(e){e({type:"BUTTON",payload:"is-loading"})}))},children:"Sumbit"})})]})]})})},P=n.a.memo((function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),a=t[0],n=t[1],c=Object(f.c)((function(e){return e.States.sumbit})),i=Object(f.c)((function(e){return e.States.response}));return Object(s.useEffect)((function(){n("is-active")}),[i,c]),"Invalid Password"===i?Object(b.jsxs)("div",{className:"modal ".concat(a),children:[Object(b.jsx)("div",{className:"modal-background"}),Object(b.jsx)("div",{className:"modal-content",children:Object(b.jsx)("section",{className:"section hero is-danger",children:Object(b.jsxs)("div",{className:"container has-text-centered",children:[Object(b.jsx)(g.b.Provider,{value:{size:"6em",style:{verticalAlign:"middle",horizontalAlign:"left"}},children:Object(b.jsx)(r.a,{})}),Object(b.jsx)("span",{className:"subtitle is-1",children:"Invalid Password"})]})})}),Object(b.jsx)("button",{className:"modal-close is-large",onClick:function(){return n("")},"aria-label":"close"})]}):c?Object(b.jsxs)("div",{className:"modal ".concat(a),children:[Object(b.jsx)("div",{className:"modal-background"}),Object(b.jsx)("div",{className:"modal-content",children:Object(b.jsx)("section",{className:"section hero is-primary",children:Object(b.jsxs)("div",{className:"container has-text-centered",children:[Object(b.jsx)(g.b.Provider,{value:{size:"6em",style:{verticalAlign:"middle",horizontalAlign:"left"}},children:Object(b.jsx)(x.a,{})}),Object(b.jsxs)("span",{className:"subtitle is-1",children:["They Message is : ",i]})]})})}),Object(b.jsx)("button",{className:"modal-close is-large",onClick:function(){return n("")},"aria-label":"close"})]}):Object(b.jsx)("div",{})})),U=function(e){var t=e.option,a=e.link,s=Object(f.b)(),n=Object(f.c)((function(e){return e.States}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"hero-body container",children:[Object(b.jsxs)("label",{className:"label is-large",children:["Upload to ",t," ",a]}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("password",n.password),t.append("file",n.file),s(function(e,t){return function(){var a=Object(y.a)(N.a.mark((function a(s){var n,c,i,l;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,"image"!==t){a.next=10;break}return a.next=4,I(e);case 4:n=a.sent,c=n.data,s({type:"SUMBIT_FORM_DECODE",payload:c}),console.log(c),a.next=16;break;case 10:return a.next=12,C(e);case 12:i=a.sent,l=i.data,s({type:"SUMBIT_FORM_DECODE",payload:l}),console.log(l);case 16:a.next=21;break;case 18:a.prev=18,a.t0=a.catch(0),console.log(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,18]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))},children:[Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("div",{className:"control has-icons-left has-icons-right",children:Object(b.jsx)("input",{className:"input is-large",type:"password",placeholder:"Secret Password",value:n.password||"",onChange:function(e){return s(T(e.target.value))}})})}),Object(b.jsx)("div",{className:"file is-medium is-boxed has-name",children:Object(b.jsxs)("label",{className:"file-label",children:[Object(b.jsx)("input",{className:"file-input",type:"file",name:"file",onChange:function(e){return s(D(e.target.files[0]))}}),Object(b.jsxs)("span",{className:"file-cta",children:[Object(b.jsx)("span",{className:"file-icon",children:Object(b.jsx)(d.c,{})}),Object(b.jsx)("span",{className:"file-label",children:"Upload your file"})]}),Object(b.jsx)("span",{className:"file-name",children:n.file.name||""})]})}),Object(b.jsx)("div",{className:"level  column",children:Object(b.jsx)("button",{className:"button is-large is-primary ",children:"Sumbit"})})]}),Object(b.jsx)(P,{active:"is-active"})]})})})},_=function(e){var t=e.filepath,a=Object(f.b)(),n=t.link,c=t.name,i=t.content,l=Object(s.useState)(0),o=Object(O.a)(l,2),r=o[0],d=o[1];return 0===r?Object(b.jsxs)("div",{className:"hero-body container ",children:[Object(b.jsxs)("section",{className:"section is-medium",children:[Object(b.jsxs)("h1",{className:"title",children:[c," Steagnography "]}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{className:"subtitle",children:i})]}),Object(b.jsxs)("div",{className:"level",children:[Object(b.jsxs)("button",{className:"button is-large",onClick:function(){d(!0)},children:[Object(b.jsx)(g.b.Provider,{value:{className:"icon is-large"},children:Object(b.jsx)(x.b,{})}),Object(b.jsx)("span",{children:"Encoding"})]}),Object(b.jsx)("div",{className:"level-right",children:Object(b.jsxs)("button",{className:"button is-large",onClick:function(){d(!1)},children:[Object(b.jsx)(g.b.Provider,{value:{className:"icon is-large"},children:Object(b.jsx)(x.d,{})}),Object(b.jsx)("span",{children:"Decoding"})]})})]})]}):!0!==r?Object(b.jsxs)("div",{className:"hero-body container",children:[Object(b.jsxs)("h1",{className:"title level-left",children:[" ",Object(b.jsx)("div",{className:"level-item",children:Object(b.jsx)("button",{className:"button is-large is-rounded",onClick:function(){d(!r),a(F)},children:Object(b.jsx)(g.b.Provider,{value:{className:"icon"},children:Object(b.jsx)(x.d,{})})})}),Object(b.jsx)("div",{className:"level-item",children:Object(b.jsx)("button",{className:"button is-medium is-rounded",onClick:function(){a((function(e){e({type:"FORM_RESET",payload:""})}))},children:Object(b.jsx)(g.b.Provider,{value:{className:"icon"},children:Object(b.jsx)(x.c,{})})})}),Object(b.jsxs)("div",{className:"level-item",children:[c," Steagnography  "]})]}),Object(b.jsx)(U,{option:"decode",link:n})]}):!0===r?Object(b.jsxs)("div",{className:"hero-body container",children:[Object(b.jsxs)("h1",{className:"title level-left",children:[" ",Object(b.jsx)("div",{className:"level-item",children:Object(b.jsxs)("button",{className:"button is-large is-rounded",onClick:function(){d(!r),a((function(e){e({type:"SUMBIT_FALSE",payload:!1})}))},children:[Object(b.jsx)(g.b.Provider,{value:{className:"icon"},children:Object(b.jsx)(x.b,{})})," "]})}),Object(b.jsx)("div",{className:"level-item",children:Object(b.jsx)("button",{className:"button is-medium is-rounded",onClick:function(){a((function(e){e({type:"FORM_RESET",payload:""})}))},children:Object(b.jsx)(g.b.Provider,{value:{className:"icon"},children:Object(b.jsx)(x.c,{})})})}),Object(b.jsxs)("div",{className:"level-item",children:[c," Steagnography  "]})]}),Object(b.jsx)(A,{option:"encode",link:n})]}):void 0},R=Object(s.memo)(_);var B=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[" ",Object(b.jsx)(l.b,{className:"navbar-brand",exact:!0,to:"/",children:"STEGIMAGE"}),Object(b.jsxs)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent1","aria-controls":"navbarSupportedContent1","aria-expanded":"false","aria-label":"Toggle navigation",children:[" ",Object(b.jsx)("span",{className:"navbar-toggler-icon"})," "]}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent1"})]})};var L=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("div",{className:"content has-text-centered",children:Object(b.jsx)("p",{children:"Built by Team 3"})})})})};var z=function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(B,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,element:Object(b.jsx)(p,{})}),Object(b.jsx)(o.a,{path:"/image",element:Object(b.jsx)(R,{filepath:u[0]})}),Object(b.jsx)(o.a,{path:"/audio",element:Object(b.jsx)(R,{filepath:u[1]})}),Object(b.jsx)(o.a,{path:"/imageinimage",element:Object(b.jsx)(R,{filepath:u[2]})}),Object(b.jsx)(o.a,{path:"/video",element:Object(b.jsx)(R,{filepath:u[3]})})]})]}),Object(b.jsx)(L,{})]})},G=a(13),W=a(34),J=a(35),q=a(36),V=a(4),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:"",password:"",file:File,sumbit:!1,response:"",button:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE":return Object(V.a)(Object(V.a)({},e),{},{message:t.payload});case"PASSWORD":return Object(V.a)(Object(V.a)({},e),{},{password:t.payload});case"FILE":return Object(V.a)(Object(V.a)({},e),{},{file:t.payload});case"FORM_RESET":return Object(V.a)(Object(V.a)({},e),{},{message:t.payload,password:t.payload,file:t.payload,sumbit:!1,response:t.payload,button:t.payload});case"SUMBIT_FALSE":return Object(V.a)(Object(V.a)({},e),{},{sumbit:t.payload,response:""});case"BUTTON":return Object(V.a)(Object(V.a)({},e),{},{button:t.payload});case"SUMBIT_FORM_DECODE":case"SUMBIT_FORM_ENCODE":return Object(V.a)(Object(V.a)({},e),{},{response:t.payload,sumbit:!0});default:return e}},K=Object(G.combineReducers)({States:H}),Q=Object(G.createStore)(K,Object(J.composeWithDevTools)(Object(G.applyMiddleware)(q.a,W.logger)));console.log(Q.getState()),i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f.a,{store:Q,children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.35e6e287.chunk.js.map