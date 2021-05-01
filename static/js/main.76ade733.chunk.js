(this.webpackJsonpnoteware=this.webpackJsonpnoteware||[]).push([[0],{143:function(e,t,a){},252:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),i=a.n(c),o=a(96),l=(a(143),a(20)),s=a(16),r=a(24),d=a(23),h=a(17),j=a(54);a(266),a(267),a(145);j.a.initializeApp({apiKey:"AIzaSyA1veiUKUzfnhRQyxOzv2ratPjwxXnVIOo",authDomain:"noteware-b9b32.firebaseapp.com",projectId:"noteware-b9b32",storageBucket:"noteware-b9b32.appspot.com",messagingSenderId:"8011511717",appId:"1:8011511717:web:72f4129ef2c799ca1d1a4c"});var b=j.a.auth(),u=(j.a.storage(),j.a.firestore()),x=j.a.firestore.FieldValue.serverTimestamp,O=a(15),g=a(14),p=a(5),m=a(321),v=a(308),f=a(309),k=a(310),C=a(83),N=a(307),w=a(313),y=a(311),T=a(314),S=a(315),B=a(316),M=a(319),L=a(312),I=a(128),D=a.n(I),E=a(127),R=a.n(E),z=a(126),A=a.n(z),P=a(129),q=a.n(P),Q=a(82),F=a.n(Q),W=a(6),U=a(37),H=240,G=function(e){return{root:{display:"flex",minHeight:"100%"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#2d436d"},appBarShift:{width:"calc(100% - ".concat(H,"px)"),marginLeft:H,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{color:"white",marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:H,flexShrink:0},drawerPaper:{background:"linear-gradient(to right, #e0eafc, #cfdef3)",width:H},drawerHeader:Object(U.a)(Object(U.a)({background:"linear-gradient(to right, #e0eafc, #cfdef3)",display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),heading:{width:"100%",marginLeft:"auto",textAlign:"center",fontFamily:"Lobster, cursive"},tabs:{marginLeft:"0"},list:{marginTop:"40%"},listItem:{color:"black",fontWeight:"bold",marginTop:"20px"},icon:{color:"black",fontSize:"30px"},content:{minHeight:"100vh",overflow:"auto",flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},cardcontent:{minHeight:"100vh",overflow:"auto"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},mainBoxDropDown:Object(U.a)(Object(U.a)({marginTop:"100px",display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})}},J=a(305),K=a(322),V=a(78),Y=a.n(V),X=(a(125),a(252),a(3)),_=/(<([^>]+)>)/gi,Z=Object(K.a)(J.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white"}),$=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={quillText:"",currentLink:""},n.handleQuillTextChange=n.handleQuillTextChange.bind(Object(g.a)(n)),n.handleTextCopy=n.handleTextCopy.bind(Object(g.a)(n)),n.handleTextLink=n.handleTextLink.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleQuillTextChange",value:function(e){this.setState({quillText:e})}},{key:"handleTextCopy",value:function(){var e=this.state.quillText.replace(_," ");navigator.clipboard.writeText(e)}},{key:"handleTextLink",value:function(){var e=this;if(""===this.state.quillText)alert("Text Cannot Be Empty");else{var t=u.collection("quicknotes"),a=this.state.quillText.replace(_," ");t.add({text:a,createdAt:x()}).then((function(t){e.setState({quillText:""},(function(){navigator.clipboard.writeText("".concat(window.location.href).concat(t.path)),alert("Shareable Link Copied to Your Clipboard\n\n".concat(window.location.href).concat(t.path,"\n                "))}))})).catch((function(e){console.log("SOME ERROR OCCURRED"),console.log(e)}))}}},{key:"render",value:function(){var e=this.state.quillText;return Object(X.jsx)("div",{className:"quicknote-box",children:Object(X.jsxs)("div",{children:[Object(X.jsxs)("div",{id:"quill-buttons",children:[Object(X.jsx)(Z,{onClick:this.handleTextCopy,color:"secondary",variant:"contained",size:"large",children:Object(X.jsx)("strong",{children:"Copy to Clipboard"})}),Object(X.jsx)(Z,{onClick:this.handleTextLink,color:"secondary",variant:"contained",size:"large",children:Object(X.jsx)("strong",{children:"Generate Link"})})]}),Object(X.jsx)(Y.a,{theme:"snow",value:e,onChange:this.handleQuillTextChange})]})})}}]),a}(n.Component),ee=a(317),te=(a(256),/(<([^>]+)>)/gi),ae=Object(K.a)(J.a)({color:"white",backgroundColor:"#9c27b0","&:hover":{backgroundColor:"#b72dcf"}}),ne=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=Object(U.a)({},e.info[0]),n.handleModalCloseClick=n.handleModalCloseClick.bind(Object(g.a)(n)),n.handleQuillTextChange=n.handleQuillTextChange.bind(Object(g.a)(n)),n.handleButtonClick=n.handleButtonClick.bind(Object(g.a)(n)),n.handleTitleChange=n.handleTitleChange.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleModalCloseClick",value:function(e){this.props.closeModal(e)}},{key:"handleTitleChange",value:function(e){this.setState({title:e.currentTarget.value})}},{key:"handleQuillTextChange",value:function(e){this.setState({text:e})}},{key:"handleButtonClick",value:function(e){var t=this;if(""===this.state.text||""===this.state.title)alert("Note Title and Text Cannot Be Empty");else{var a=e.currentTarget.getAttribute("id");if("copy"===a)navigator.clipboard.writeText(this.state.text.replace(te,"")),alert("Note Text Copied to Clipboard");else if("download"===a){var n=document.createElement("a"),c=new Blob(["".concat(this.state.title,"\n\n").concat(this.state.text.replace(te," "))],{type:"text/plain;charset=utf-8"});n.href=URL.createObjectURL(c),n.download="NoteWare Text.txt",document.body.appendChild(n),n.click()}else if("save"===a){var i=u.collection("singlepagenotes"),o=this.state.text,l=this.state.title,s=this.state.id;s?i.doc(s).update({title:l,text:o}).then((function(e){alert("Note Updated")})).catch((function(e){console.log("SOME ERROR OCCURRED"),console.log(e)})):i.add({title:l,text:o,createdAt:x()}).then((function(e){t.setState({text:"",title:""},(function(){navigator.clipboard.writeText("".concat(window.location.href).concat(e.path)),alert("Note Saved and Link Copied to Your Clipboard\n\n".concat(window.location.href).concat(e.path))}))})).catch((function(e){console.log("SOME ERROR OCCURRED"),console.log(e)}))}else navigator.clipboard.writeText("".concat(window.location.href,"singlepagenotes/").concat(this.state.id)),alert("Note Link Copied to Clipboard\n\n".concat(window.location.href,"singlepagenotes/").concat(this.state.id))}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.text,n=e.id;if("read"===this.props.modalType){var c=a.replace(te," ");return Object(X.jsx)("div",{className:"modal-display",children:Object(X.jsx)("div",{onClick:this.handleModalCloseClick,className:"main-modal row",children:Object(X.jsx)("div",{onClick:this.handleModalCloseClick,className:"modal-box row",children:Object(X.jsx)("div",{onClick:this.handleModalCloseClick,className:"readbox col col-12",children:Object(X.jsx)("div",{className:"content-card",children:Object(X.jsx)("div",{className:"card-big-shadow",children:Object(X.jsx)("div",{className:"card card-just-text","data-background":"color","data-color":"yellow","data-radius":"none",children:Object(X.jsxs)("div",{className:"content",children:[Object(X.jsx)("h1",{className:"mb-3 category text-dark",children:Object(X.jsx)("strong",{children:t})}),Object(X.jsx)("h5",{className:"description text-dark",children:c})]})})})})})})})})}return Object(X.jsx)("div",{className:"modal-display",children:Object(X.jsx)("div",{onClick:this.handleModalCloseClick,className:"main-modal row",children:Object(X.jsx)("div",{className:"modal-box row",children:Object(X.jsxs)("div",{className:"editbox col col-12",children:[Object(X.jsx)("div",{className:"modal-title",children:Object(X.jsx)(ee.a,{onChange:this.handleTitleChange,value:this.state.title,className:"note-title",label:"Enter A Note Title"})}),Object(X.jsx)(Y.a,{theme:"snow",value:this.state.text,onChange:this.handleQuillTextChange}),Object(X.jsxs)("div",{className:"modal-btn",children:[n?Object(X.jsx)(ae,{onClick:this.handleButtonClick,id:"link",color:"secondary",size:"large",variant:"contained",children:Object(X.jsx)("strong",{children:"Copy Link"})}):Object(X.jsx)(ae,{onClick:this.handleButtonClick,id:"copy",color:"secondary",size:"large",variant:"contained",children:Object(X.jsx)("strong",{children:"Copy Note"})}),Object(X.jsx)(ae,{onClick:this.handleButtonClick,id:"download",color:"secondary",size:"large",variant:"contained",children:Object(X.jsx)("strong",{children:"Download Note"})}),Object(X.jsx)(ae,{onClick:this.handleButtonClick,id:"save",color:"secondary",size:"large",variant:"contained",children:Object(X.jsx)("strong",{children:"Save Note"})})]})]})})})})}}]),a}(n.Component),ce=(a(258),/<(?!\s*br\s*\/?)[^>]+>/gi),ie=Object(K.a)(J.a)({background:"#4caf50",color:"black"}),oe=Object(K.a)(J.a)({background:"#f2bf49",color:"black"}),le=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={allNotes:[],clickedNote:[],showModal:!1,modalType:""},n.addNewNote=n.addNewNote.bind(Object(g.a)(n)),n.closeModal=n.closeModal.bind(Object(g.a)(n)),n.handleCardButtonClick=n.handleCardButtonClick.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.collection("singlepagenotes").onSnapshot((function(t){var a=[];t.forEach((function(e){a.push(Object(U.a)(Object(U.a)({},e.data()),{},{id:e.id}))})),e.setState({allNotes:a})}))}},{key:"addNewNote",value:function(){this.setState({showModal:!0,clickedNote:[],modalType:"edit"})}},{key:"closeModal",value:function(e){e.currentTarget===e.target&&this.setState({showModal:!1,modalType:""})}},{key:"handleCardButtonClick",value:function(e){var t=e.currentTarget.getAttribute("id"),a=e.currentTarget.getAttribute("noteId");if("read"===t){var n=this.state.allNotes.filter((function(e){return a===e.id}));this.setState({clickedNote:n,showModal:!0,modalType:"read"})}else if("edit"===t){var c=this.state.allNotes.filter((function(e){return a===e.id}));this.setState({clickedNote:c,showModal:!0,modalType:"edit"})}else u.collection("singlepagenotes").onSnapshot((function(e){e.forEach((function(e){e.id===a&&e.ref.delete()}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.allNotes,n=t.clickedNote,c=t.modalType;return Object(X.jsxs)("div",{children:[Object(X.jsxs)("div",{className:"notecard-palette row",children:[a.map((function(t){var a=t.text.replace(ce," ");return Object(X.jsxs)("div",{className:"notecard col col-12 col-lg-3",children:[Object(X.jsx)("div",{className:"notecard-front notecard-shadow",children:Object(X.jsxs)("div",{className:"notecard-front-border",children:[Object(X.jsx)("h3",{className:"text-center my-2",children:Object(X.jsx)("strong",{children:t.title})}),Object(X.jsx)("h5",{className:"text-center",children:a})]})}),Object(X.jsx)("div",{className:"notecard-back notecard-shadow",children:Object(X.jsxs)("div",{className:"notecard-back-border",children:[Object(X.jsx)("div",{className:"notecard-btn my-4",children:Object(X.jsx)(ie,{noteId:t.id,onClick:e.handleCardButtonClick,id:"read",variant:"contained",size:"large",children:Object(X.jsx)("strong",{children:"Read Note"})})}),Object(X.jsx)("div",{className:"notecard-btn my-4",children:Object(X.jsx)(oe,{noteId:t.id,onClick:e.handleCardButtonClick,id:"edit",variant:"contained",size:"large",children:Object(X.jsx)("strong",{children:"Edit Note"})})}),Object(X.jsx)("div",{className:"notecard-btn my-4",children:Object(X.jsx)(J.a,{style:{color:"black"},noteId:t.id,onClick:e.handleCardButtonClick,id:"delete",color:"secondary",variant:"contained",size:"large",children:Object(X.jsx)("strong",{children:"Delete Note"})})})]})})]})})),Object(X.jsx)("div",{className:"notecard col col-12 col-lg-3 notecard-shadow",children:Object(X.jsx)(J.a,{onClick:this.addNewNote,children:Object(X.jsxs)("div",{className:"add-notecard-border",children:[Object(X.jsx)("div",{id:"btn-imagediv",children:Object(X.jsx)("img",{src:"https://content.fortune.com/wp-content/uploads/2019/04/brb05.19.plus_.jpg",alt:"add note"})}),Object(X.jsx)("h3",{className:"text-center my-0",children:Object(X.jsx)("strong",{children:"Add A New Note"})})]})})})]}),this.state.showModal?Object(X.jsx)(ne,{closeModal:this.closeModal,modalType:c,info:n.length?n:[{id:"",title:"",text:""}]}):null]})}}]),a}(n.Component),se=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={drawerOpen:!(window.innerWidth<1280),currentPage:"quicknote",selectedNoteIndex:null,selectedNote:null,notes:null},n.handleLogOutClick=n.handleLogOutClick.bind(Object(g.a)(n)),n.changePage=n.changePage.bind(Object(g.a)(n)),n.toggleDrawer=n.toggleDrawer.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.collection("notes").onSnapshot((function(t){var a=[];t.docs.map((function(e){var t=e.data();return t.id=e.id,a.push(t),null})),e.setState({notes:a})}))}},{key:"changePage",value:function(e){this.setState({currentPage:e.currentTarget.getAttribute("value")})}},{key:"toggleDrawer",value:function(){this.setState({drawerOpen:!this.state.drawerOpen})}},{key:"handleLogOutClick",value:function(){b.signOut()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.drawerOpen,c=a.currentPage;return Object(X.jsxs)("div",{className:t.root,children:[Object(X.jsx)(v.a,{}),Object(X.jsx)(f.a,{position:"fixed",className:Object(p.a)(t.appBar,Object(O.a)({},t.appBarShift,n)),children:Object(X.jsxs)(k.a,{children:[Object(X.jsx)(y.a,{"aria-label":"open drawer",onClick:this.toggleDrawer,edge:"start",className:Object(p.a)(t.menuButton,n&&t.hide),children:Object(X.jsx)(A.a,{})}),Object(X.jsx)(C.a,{className:t.heading,variant:"h3",noWrap:!0,children:Object(X.jsx)("strong",{children:"NOTE Ware"})}),Object(X.jsx)(M.a,{textColor:"white",className:t.tabs,value:"logout","aria-label":"simple tabs example",children:Object(X.jsx)(L.a,{onClick:this.handleLogOutClick,icon:Object(X.jsx)(F.a,{fontSize:"large"}),label:"logout"})})]})}),Object(X.jsxs)(m.a,{className:t.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:t.drawerPaper},children:[Object(X.jsx)("div",{className:t.drawerHeader,children:Object(X.jsx)(y.a,{onClick:this.toggleDrawer,children:Object(X.jsx)(R.a,{className:t.icon})})}),Object(X.jsx)(w.a,{}),Object(X.jsx)(N.a,{className:t.list,children:[{text:"Quick Note",icon:Object(X.jsx)(D.a,{color:"inherit",className:t.icon})},{text:"Single Page Notes",icon:Object(X.jsx)(q.a,{className:t.icon})}].map((function(a,n){return Object(X.jsxs)(T.a,{onClick:e.changePage,className:t.listItem,button:!0,value:a.text,children:[Object(X.jsx)(S.a,{children:a.icon}),Object(X.jsx)("strong",{children:Object(X.jsx)(B.a,{color:"inherit",primary:a.text})})]},a.text)}))})]}),Object(X.jsxs)("main",{className:Object(p.a)(t.content,Object(O.a)({},t.contentShift,n)),children:[Object(X.jsx)("div",{className:t.mainBoxDropDown}),"Quick Note"===c&&Object(X.jsx)($,{}),"Single Page Notes"===c&&Object(X.jsx)(le,{})]})]})}}]),a}(n.Component),re=Object(W.a)(G)(se),de=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSignInClick=n.handleSignInClick.bind(Object(g.a)(n)),n}return Object(s.a)(a,[{key:"handleSignInClick",value:function(){b.signInAnonymously()}},{key:"render",value:function(){var e=this.props.classes;return Object(X.jsxs)("div",{children:[Object(X.jsx)(f.a,{position:"fixed",className:Object(p.a)(e.appBar),children:Object(X.jsxs)(k.a,{children:[Object(X.jsx)(C.a,{className:e.heading,variant:"h3",noWrap:!0,children:Object(X.jsx)("strong",{children:"NOTE Ware"})}),Object(X.jsx)(M.a,{textColor:"white",className:e.tabs,value:"logout","aria-label":"simple tabs example",children:Object(X.jsx)(L.a,{onClick:this.handleSignInClick,icon:Object(X.jsx)(F.a,{fontSize:"large"}),label:"Sign In"})})]})}),Object(X.jsx)("div",{style:{minHeight:"100vh",marginTop:"150px",display:"flex",justifyContent:"center",overflow:"auto"},children:Object(X.jsx)($,{})})]})}}]),a}(n.Component),he=Object(W.a)(G)(de),je=(a(260),/<(?!\s*br\s*\/?)[^>]+>/gi),be=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={title:"",text:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/").reverse()[0],a=window.location.href.split("/").reverse()[1];u.collection(a).doc(t).get().then((function(t){e.setState({text:t.data().text.replace(je," "),title:t.data().title})}))}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.text,n=t.title;return Object(X.jsxs)("div",{className:"main-sharedurl",children:[Object(X.jsx)(f.a,{position:"fixed",className:Object(p.a)(e.appBar),children:Object(X.jsx)(k.a,{children:Object(X.jsx)(C.a,{className:e.heading,variant:"h3",noWrap:!0,children:Object(X.jsx)("strong",{children:"NOTE Ware"})})})}),Object(X.jsxs)("main",{className:Object(p.a)(e.cardcontent),children:[Object(X.jsx)("div",{className:e.mainBoxDropDown}),Object(X.jsx)("div",{className:"main-card",children:Object(X.jsx)("div",{className:"content-card",children:Object(X.jsx)("div",{className:"card-big-shadow",children:Object(X.jsx)("div",{className:"card card-just-text","data-background":"color","data-color":"singlepagenotes"===window.location.href.split("/").reverse()[1]?"blue":"purple","data-radius":"none",children:Object(X.jsxs)("div",{className:"content",children:["singlepagenotes"===window.location.href.split("/").reverse()[1]?Object(X.jsx)("h1",{className:"mb-3 category",children:Object(X.jsx)("strong",{children:n})}):null,Object(X.jsx)("h5",{className:"description",children:a})]})})})})})]})]})}}]),a}(n.Component),ue=Object(W.a)(G)(be),xe=a.p+"static/media/photo404.c610c119.jpg",Oe=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(X.jsx)("div",{style:{backgroundImage:"url(".concat(xe,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh",width:"100vw"}})}}]),a}(n.Component),ge=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.onAuthStateChanged((function(t){e.setState({user:t})}))}},{key:"render",value:function(){var e=this.state.user;return Object(X.jsx)("div",{children:Object(X.jsxs)(h.d,{children:[Object(X.jsx)(h.b,{exact:!0,path:"/",component:function(){return e?Object(X.jsx)(re,{}):Object(X.jsx)(he,{})}}),Object(X.jsx)(h.b,{exact:!0,path:"/dashboard",component:function(){return e?Object(X.jsx)(re,{}):Object(X.jsx)(h.a,{to:"/"})}}),Object(X.jsx)(h.b,{exact:!0,path:"/quicknotes/:id",component:ue}),Object(X.jsx)(h.b,{exact:!0,path:"/singlepagenotes/:id",component:ue}),Object(X.jsx)(h.b,{path:"/*",component:Oe})]})})}}]),a}(n.Component),pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,324)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};i.a.render(Object(X.jsx)(o.a,{children:Object(X.jsx)(ge,{})}),document.getElementById("root")),pe()}},[[264,1,2]]]);
//# sourceMappingURL=main.76ade733.chunk.js.map