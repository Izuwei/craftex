(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{506:function(e,a,t){},507:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=(t(91),t(24)),i=t(2),s=(t(92),t(547)),m=t(5),u=t(75),h=t(546),d=t(549),p=t(552),b=t(554),g=t(550),f=t(41),E=t(551),v=t(73),O=t.n(v),j=t(553),k=t(555),x=t(556),y=t(557),C=t(74),S=t(548),N=t(51),w=Object(m.a)({paper:{border:"1px solid #212121"}})((function(e){return r.a.createElement(u.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),z=Object(m.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(h.a),I=Object(C.a)({palette:{primary:{main:N.a[900],light:N.a[200],dark:N.a[900]},type:"dark"}}),T=Object(s.a)((function(e){return{root:{flexGrow:1},appName:{marginLeft:e.spacing(10),flex:1},link:{textDecoration:"none",color:"inherit"}}}));function R(){var e=T(),a=r.a.useState(null),t=Object(o.a)(a,2),n=t[0],c=t[1];return r.a.createElement(S.a,{theme:I},r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(g.a,{variant:"dense"},r.a.createElement(f.a,{className:e.appName,variant:"h6",color:"inherit"},"React App"),r.a.createElement(E.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){c(e.currentTarget)}},r.a.createElement(O.a,null)),r.a.createElement(w,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){c(null)}},r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(z,null,r.a.createElement(p.a,null,r.a.createElement(j.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(b.a,{primary:"Documentation"}))),r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(z,null,r.a.createElement(p.a,null,r.a.createElement(k.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(b.a,{primary:"Video"}))),r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(z,null,r.a.createElement(p.a,null,r.a.createElement(x.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(b.a,{primary:"GitHub"}))),r.a.createElement("a",{className:e.link,href:"https://github.com/Izuwei/production"},r.a.createElement(z,null,r.a.createElement(p.a,null,r.a.createElement(y.a,{fontSize:"small",className:e.itemIcon})),r.a.createElement(b.a,{primary:"Credits"}))))))))}var P=t(18),M=t(16),B=t(27),D=t(28),L=t(12),A=t(29),V=t(76),W=t(50),_=t.n(W),G=(t(67),t(68),t(69),function(e){function a(e){var t;return Object(P.a)(this,a),(t=Object(B.a)(this,Object(D.a)(a).call(this,e))).state={},t.onChange=t.onChange.bind(Object(L.a)(t)),t.resize=t.resize.bind(Object(L.a)(t)),t.onSelectionChange=t.onSelectionChange.bind(Object(L.a)(t)),t}return Object(A.a)(a,e),Object(M.a)(a,[{key:"resize",value:function(){this.refs.aceIn.editor.resize()}},{key:"onChange",value:function(e){console.log("change",e)}},{key:"onSelectionChange",value:function(e,a){var t=this.refs.aceIn.editor.getSelectedText();console.log(t)}},{key:"render",value:function(){return r.a.createElement(_.a,{theme:"idle_fingers",fontSize:"20px",onChange:this.onChange,onSelectionChange:this.onSelectionChange,ref:"aceIn",mode:"plain_text",name:"EditorIn",height:"100%",width:"100%",placeholder:"Insert your input here",showPrintMargin:!1,hScrollBarAlwaysVisible:!0,editorProps:{$blockScrolling:!0}})}}]),a}(n.Component));function $(e){console.log("change",e)}var F=function(e){function a(e){var t;return Object(P.a)(this,a),(t=Object(B.a)(this,Object(D.a)(a).call(this,e))).state={},t.resize=t.resize.bind(Object(L.a)(t)),t}return Object(A.a)(a,e),Object(M.a)(a,[{key:"resize",value:function(){this.refs.aceOut.editor.resize()}},{key:"render",value:function(){return r.a.createElement(_.a,{theme:"idle_fingers",fontSize:"20px",ref:"aceOut",onChange:$,name:"EditorOut",height:"100%",width:"100%",mode:"plain_text",readOnly:!0,placeholder:"Your output will be here",showPrintMargin:!1,hScrollBarAlwaysVisible:!0,editorProps:{$blockScrolling:!0}})}}]),a}(n.Component),H=(t(506),function(e){function a(e){var t;return Object(P.a)(this,a),(t=Object(B.a)(this,Object(D.a)(a).call(this,e))).state={},t.handleResize=t.handleResize.bind(Object(L.a)(t)),t}return Object(A.a)(a,e),Object(M.a)(a,[{key:"handleResize",value:function(){this.aceIn.resize(),this.aceOut.resize()}},{key:"render",value:function(){var e=this;return r.a.createElement(V.a,{className:"SplitEditor",split:"vertical",style:{height:"700px",position:"static"},minSize:200,maxSize:-200,defaultSize:"50%",onChange:function(){return e.handleResize()}},r.a.createElement(G,{ref:function(a){e.aceIn=a}}),r.a.createElement(F,{ref:function(a){e.aceOut=a}}))}}]),a}(n.Component)),J=t(579),Y=t(580),q=t(563),K=t(558),Q=t(564),U=t(565),X=t(566),Z=t(567),ee=t(568),ae=t(560),te=t(78),ne=t(578),re=t(561),ce=t(559),le=t(562),oe=Object(C.a)({palette:{primary:{main:K.a[800],light:K.a[600],dark:K.a[900]},secondary:{main:ce.a[800],light:ce.a[200],dark:ce.a[900]},type:"dark"}}),ie=function(e){function a(e){var t;return Object(P.a)(this,a),(t=Object(B.a)(this,Object(D.a)(a).call(this,e))).state={matchPattern:"",matchError:!1},t.handleMatch=t.handleMatch.bind(Object(L.a)(t)),t}return Object(A.a)(a,e),Object(M.a)(a,[{key:"handleMatch",value:function(){""===this.state.matchPattern?(this.setState({matchError:!0}),this.props.displaySnackbar("error","Error: Match pattern is empty!")):(this.setState({matchError:!1}),this.props.addTool({tool:"Match",pattern:this.state.matchPattern}),this.props.displaySnackbar("success","Success: Match added into the pipeline."),this.setState({matchPattern:""}))}}]),Object(M.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement(S.a,{theme:oe},r.a.createElement(ae.a,{container:!0,spacing:2},r.a.createElement(ae.a,{item:!0,xs:12},r.a.createElement(te.a,{className:a.paper},r.a.createElement(f.a,{variant:"h5",className:a.toolName},"Match"),r.a.createElement("div",{className:a.flexContent},r.a.createElement(ne.a,{id:"match-pattern",label:"Pattern",value:this.state.matchPattern,onChange:function(a){return e.setState({matchPattern:a.target.value,matchError:!1})},error:!0===this.state.matchError,helperText:!0===this.state.matchError?"Pattern cannot be empty!":" ",className:a.textField}),r.a.createElement(re.a,{color:"secondary",variant:"contained",className:a.button,onClick:function(){return e.handleMatch()},startIcon:r.a.createElement(le.a,null)},"Add"))))))}}]),a}(n.Component),se=Object(m.a)((function(e){return{button:{margin:e.spacing(1)},paper:{padding:"10px",backgroundColor:"#333333",borderRadius:"0px"},textField:{flex:1},flexContent:{display:"flex",alignItems:"center"},toolName:{color:"#d9d9d9",fontWeight:"bold"}}}))(ie);function me(e){var a=e.children,t=e.value,n=e.index,c=Object(i.a)(e,["children","value","index"]);return r.a.createElement(f.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},c),r.a.createElement(J.a,{p:3},a))}function ue(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var he=Object(C.a)({palette:{primary:{main:K.a[600],light:K.a[300],dark:K.a[900]},type:"dark"}}),de=Object(s.a)((function(e){return{root:{flexGrow:1,marginTop:"20px",marginBottom:"20px",width:"95%",marginLeft:"auto",marginRight:"auto",backgroundColor:e.palette.background.paper,color:"white"}}}));function pe(e){var a=de(),t=r.a.useState(0),n=Object(o.a)(t,2),c=n[0],l=n[1];return r.a.createElement(S.a,{theme:he},r.a.createElement("div",{className:a.root},r.a.createElement(d.a,{position:"static",color:"default"},r.a.createElement(Y.a,{value:c,onChange:function(e,a){l(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"tabs",centered:!0},r.a.createElement(q.a,Object.assign({icon:r.a.createElement(Q.a,null),label:"Reverse"},ue(0))),r.a.createElement(q.a,Object.assign({icon:r.a.createElement(U.a,null),label:"Replace"},ue(1))),r.a.createElement(q.a,Object.assign({icon:r.a.createElement(X.a,null),label:"Rows"},ue(2))),r.a.createElement(q.a,Object.assign({icon:r.a.createElement(Z.a,null),label:"Columns"},ue(3))),r.a.createElement(q.a,Object.assign({icon:r.a.createElement(ee.a,null),label:"Convert"},ue(4))))),r.a.createElement(me,{theme:he,value:c,index:0},"TBD"),r.a.createElement(me,{value:c,index:1},"TBD"),r.a.createElement(me,{value:c,index:2},r.a.createElement(se,{displaySnackbar:e.displaySnackbar,addTool:e.addTool})),r.a.createElement(me,{value:c,index:3},"TBD"),r.a.createElement(me,{value:c,index:4},"TBD")))}var be=t(576),ge=t(582),fe=t(574),Ee=t(575),ve=t(570),Oe=t(571),je=t(572),ke=t(573),xe=t(577),ye=t(4),Ce=t(545),Se=t(508),Ne=t(569),we=Object(s.a)((function(e){return{root:{height:"250px",width:"95%",marginTop:"20px",marginLeft:"auto",marginRight:"auto",backgroundColor:e.palette.background.paper,color:"white"},title:{height:"48px",textTransform:"uppercase",fontSize:"14px",backgroundColor:N.a[900],textAlign:"center",padding:"10px",color:"rgba(255, 255, 255, 0.7)",letterSpacing:"0.02857em",boxShadow:"0px 4px 4px -1px rgba(0,0,0,0.2)"},titleLabel:{marginTop:"5px"},list:{marginLeft:"10px",marginRight:"10px"},content:{height:"182px",overflow:"auto"},toolName:{color:"#ff6a1a",fontWeight:"bold",marginRight:"10px"}}}));var ze=function(e){var a=we();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.title},r.a.createElement(Ne.a,null),r.a.createElement("div",{className:a.titleLabel},"Pipeline")),r.a.createElement("div",{className:a.content},r.a.createElement(Ce.a,{component:"ul",className:a.list},e.tools.map((function(e){return r.a.createElement(Se.a,{button:!0,key:e.id},r.a.createElement("span",{className:a.toolName},e.tool)," ",e.pattern)})))))},Ie=[];function Te(e){e.id=Ie.length+1,Ie.push(e)}var Re=Object(C.a)({palette:{primary:{main:N.a[50]},type:"dark"}}),Pe={success:ve.a,warning:Oe.a,error:je.a,info:ke.a},Me=Object(s.a)((function(e){return{success:{backgroundColor:ce.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:fe.a[500]},warning:{backgroundColor:Ee.a[700]},icon:{fontSize:25},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));function Be(e){var a=Me(),t=e.className,n=e.message,c=e.onClose,l=e.variant,o=Object(i.a)(e,["className","message","onClose","variant"]),s=Pe[l];return r.a.createElement(be.a,Object.assign({className:Object(ye.a)(a[l],t),message:r.a.createElement("span",{id:"message-id",className:a.message},r.a.createElement(s,{className:Object(ye.a)(a.icon,a.iconVariant)}),n),action:[r.a.createElement(E.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},r.a.createElement(xe.a,null))]},o))}var De=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(void 0),i=Object(o.a)(l,2),s=i[0],m=i[1],u=Object(n.useRef)([]),h=function(){u.current.length>0&&(m(u.current.shift()),c(!0))},d=function(e,a){"clickaway"!==a&&c(!1)};return r.a.createElement(S.a,{theme:Re},r.a.createElement("div",{className:"App"},r.a.createElement(R,null),r.a.createElement(H,null),r.a.createElement(ze,{tools:Ie}),r.a.createElement(pe,{displaySnackbar:function(e,a){u.current.push({variant:e,message:a,key:(new Date).getTime()}),t?c(!1):h()},addTool:Te}),r.a.createElement(ge.a,{key:s?s.key:void 0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,autoHideDuration:2e3,onClose:d,onExited:function(){h()},ContentProps:{"aria-describedby":"message-id"}},r.a.createElement(Be,{message:s?s.message:void 0,variant:s?s.variant:void 0,onClose:d}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,a,t){e.exports=t(507)},91:function(e,a,t){},92:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.4a28e379.chunk.js.map