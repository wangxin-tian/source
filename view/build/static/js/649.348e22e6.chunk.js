"use strict";(self.webpackChunkreact_blog_view=self.webpackChunkreact_blog_view||[]).push([[649],{13717:function(e,n,o){o.d(n,{Z:function(){return a}});var r=o(1413),t=o(82339),c=o(80184);var a=function(e){return(0,c.jsxs)(t.Z,(0,r.Z)((0,r.Z)({},e.tagProps),{},{className:"my-tag ".concat(e.className||""),style:e.style,children:[!e.hidePoint&&(0,c.jsx)("span",{style:{backgroundColor:e.color},className:"point"}),e.children]}))}},96649:function(e,n,o){o.r(n),o.d(n,{default:function(){return h}});var r=o(74165),t=o(15861),c=o(1413),a=o(93433),l=o(29439),i=o(72791),s=o(42942),u=o(98244),d=o(77027),p=o(44322),g=o(87309),f=o(13717),m=o(80184);var h=function(){(0,s.B1)("\u5f1f\u7687\u4fa0\u306eblog-\u6807\u7b7e\u7f16\u8f91",[]);var e=(0,s.CE)(),n=e.tagList,o=e.setTagList,h=(0,i.useState)({name:"",color:"#000000"}),v=(0,l.Z)(h,2),b=v[0],Z=v[1],C=(0,s.eq)(1e3),y=(0,s.K4)("confirm"),x=function(e,n,r){o((function(o){return e[n]=r,(0,a.Z)(o)}))},k=function(e,n){Z((function(o){return o[e]=n,(0,c.Z)({},o)}))},w=function(e,n){switch(n){case"Delete":return void y({title:"\u5220\u9664\u6807\u7b7e",content:"\u786e\u8ba4\u63d0\u4ea4\u64cd\u4f5c\uff1f",onOk:function(){return new Promise(function(){var n=(0,t.Z)((0,r.Z)().mark((function n(t,c){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Pn)(e.id);case 3:o((function(n){return n=n.filter((function(n){return n.id!==e.id})),(0,a.Z)(n)})),d.ZP.success("\u6807\u7b7e\u5220\u9664\u6210\u529f",3),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),d.ZP.warning(n.t0.message,3);case 10:t("");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,o){return n.apply(this,arguments)}}())}});case"Edit":return""===e.name.trim()?void C({type:"warning",content:"\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a"}):void y({title:"\u7f16\u8f91\u6807\u7b7e",content:"\u786e\u8ba4\u63d0\u4ea4\u64cd\u4f5c\uff1f",onOk:function(){return new Promise(function(){var n=(0,t.Z)((0,r.Z)().mark((function n(o,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Lp)(e);case 3:d.ZP.success("\u6807\u7b7e\u4fee\u6539\u6210\u529f",3),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),d.ZP.warning(n.t0.message,3);case 9:o("");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,o){return n.apply(this,arguments)}}())}})}};return(0,m.jsxs)("div",{className:"edit-tag",children:[(0,m.jsx)("h1",{children:"\u6807\u7b7e\u7f16\u8f91"}),(0,m.jsxs)("div",{className:"edit-container",children:[n.map((function(e,n){return(0,m.jsxs)("div",{className:"tag-item",children:[(0,m.jsx)(p.Z,{placeholder:"\u6807\u7b7e\u540d\u79f0",size:"small",value:e.name,style:{width:"100px"},onChange:function(n){x(e,"name",n.target.value)}}),(0,m.jsx)(p.Z,{size:"small",type:"color",value:e.color,style:{width:"50px"},onChange:function(n){x(e,"color",n.target.value)}}),(0,m.jsx)(g.ZP,{type:"primary",size:"small",onClick:function(){w(e,"Edit")},children:"\u4fee\u6539"}),(0,m.jsx)(g.ZP,{type:"primary",size:"small",onClick:function(){w(e,"Delete")},children:"\u5220\u9664"}),(0,m.jsx)(f.Z,{color:e.color,children:e.name})]},e.id)})),(0,m.jsxs)("div",{className:"tag-item",children:[(0,m.jsx)(p.Z,{placeholder:"\u6807\u7b7e\u540d\u79f0",size:"small",style:{width:"100px"},value:b.name,onChange:function(e){k("name",e.target.value)}}),(0,m.jsx)(p.Z,{placeholder:"\u6807\u7b7e\u989c\u8272",size:"small",type:"color",style:{width:"50px"},value:b.color,onChange:function(e){k("color",e.target.value)}}),(0,m.jsx)(g.ZP,{type:"primary",size:"small",onClick:function(){""!==b.name.trim()?y({title:"\u521b\u5efa\u65b0\u6807\u7b7e",content:"\u786e\u8ba4\u63d0\u4ea4\u64cd\u4f5c\uff1f",onOk:function(){return new Promise(function(){var e=(0,t.Z)((0,r.Z)().mark((function e(n,t){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u._U)(b);case 3:c=e.sent,o((function(e){return[].concat((0,a.Z)(e),[c])})),Z({name:"",color:"#000000"}),d.ZP.success("\u6807\u7b7e\u6dfb\u52a0\u6210\u529f",3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),d.ZP.warning(e.t0.message,3);case 12:n("");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,o){return e.apply(this,arguments)}}())}}):C({type:"warning",content:"\u6807\u7b7e\u540d\u4e0d\u80fd\u4e3a\u7a7a"})},children:"\u65b0\u589e"}),b.name&&(0,m.jsx)(f.Z,{color:b.color,children:b.name})]})]})]})}},82339:function(e,n,o){o.d(n,{Z:function(){return j}});var r=o(4942),t=o(29439),c=o(56761),a=o(81694),l=o.n(a),i=o(72791),s=o(54466),u=o(60922),d=o(36822),p=o(71929);var g=o(67521),f=o(96356),m=o(55564),h=o(89922),v=function(e,n,o){var t,c="string"!==typeof(t=o)?t:t.charAt(0).toUpperCase()+t.slice(1);return(0,r.Z)({},"".concat(e.componentCls,"-").concat(n),(0,r.Z)({color:e["color".concat(o)],background:e["color".concat(c,"Bg")],borderColor:e["color".concat(c,"Border")]},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))},b=function(e){return(0,f.Z)(e,(function(n,o){var t=o.textColor,c=o.lightBorderColor,a=o.lightColor,l=o.darkColor;return(0,r.Z)({},"".concat(e.componentCls,"-").concat(n),(0,r.Z)({color:t,background:a,borderColor:c,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l}},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))}))},Z=function(e){var n,o,t,c=e.paddingXXS,a=e.lineWidth,l=e.tagPaddingHorizontal,i=e.componentCls,s=l-a,u=c-a;return t={},(0,r.Z)(t,i,Object.assign(Object.assign({},(0,g.Wf)(e)),(o={display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start",position:"relative"},(0,r.Z)(o,"&".concat(i,"-rtl"),{direction:"rtl"}),(0,r.Z)(o,"&, a, a:hover",{color:e.defaultColor}),(0,r.Z)(o,"".concat(i,"-close-icon"),{marginInlineStart:u,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}}),(0,r.Z)(o,"&".concat(i,"-has-color"),(0,r.Z)({borderColor:"transparent"},"&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover"),{color:e.colorTextLightSolid})),(0,r.Z)(o,"&-checkable",(n={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},(0,r.Z)(n,"&:not(".concat(i,"-checkable-checked):hover"),{color:e.colorPrimary,backgroundColor:e.colorFillSecondary}),(0,r.Z)(n,"&:active, &-checked",{color:e.colorTextLightSolid}),(0,r.Z)(n,"&-checked",{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}}),(0,r.Z)(n,"&:active",{backgroundColor:e.colorPrimaryActive}),n)),(0,r.Z)(o,"&-hidden",{display:"none"}),(0,r.Z)(o,"> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls),{marginInlineStart:s}),o))),(0,r.Z)(t,"".concat(i,"-borderless"),{borderColor:"transparent",background:e.tagBorderlessBg}),t},C=(0,m.Z)("Tag",(function(e){var n=e.lineWidth,o=e.fontSizeIcon,r=e.fontSizeSM,t="".concat(e.lineHeightSM*r,"px"),c=(0,h.TS)(e,{tagFontSize:r,tagLineHeight:t,tagIconSize:o-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[Z(c),b(c),v(c,"success","Success"),v(c,"processing","Info"),v(c,"error","Error"),v(c,"warning","Warning")]}),(function(e){return{defaultBg:e.colorFillQuaternary,defaultColor:e.colorText}})),y=function(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(o[r[t]]=e[r[t]])}return o},x=function(e){var n=e.prefixCls,o=e.className,c=e.checked,a=e.onChange,s=e.onClick,u=y(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,i.useContext(p.E_).getPrefixCls)("tag",n),g=C(d),f=(0,t.Z)(g,2),m=f[0],h=f[1],v=l()(d,"".concat(d,"-checkable"),(0,r.Z)({},"".concat(d,"-checkable-checked"),c),o,h);return m(i.createElement("span",Object.assign({},u,{className:v,onClick:function(e){null===a||void 0===a||a(!c),null===s||void 0===s||s(e)}})))},k=function(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(o[r[t]]=e[r[t]])}return o},w=function(e,n){var o,a=e.prefixCls,g=e.className,f=e.rootClassName,m=e.style,h=e.children,v=e.icon,b=e.color,Z=e.onClose,y=e.closeIcon,x=e.closable,w=e.bordered,P=void 0===w||w,j=k(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),S=i.useContext(p.E_),O=S.getPrefixCls,N=S.direction,z=S.tag,E=i.useState(!0),T=(0,t.Z)(E,2),I=T[0],B=T[1];i.useEffect((function(){"visible"in j&&B(j.visible)}),[j.visible]);var H=(0,s.o2)(b)||(0,s.yT)(b),L=Object.assign(Object.assign({backgroundColor:b&&!H?b:void 0},null===z||void 0===z?void 0:z.style),m),_=O("tag",a),F=C(_),D=(0,t.Z)(F,2),M=D[0],W=D[1],A=l()(_,null===z||void 0===z?void 0:z.className,(o={},(0,r.Z)(o,"".concat(_,"-").concat(b),H),(0,r.Z)(o,"".concat(_,"-has-color"),b&&!H),(0,r.Z)(o,"".concat(_,"-hidden"),!I),(0,r.Z)(o,"".concat(_,"-rtl"),"rtl"===N),(0,r.Z)(o,"".concat(_,"-borderless"),!P),o),g,f,W),R=function(e){e.stopPropagation(),null===Z||void 0===Z||Z(e),e.defaultPrevented||B(!1)},X=(0,u.Z)(x,y,(function(e){return null===e?i.createElement(c.Z,{className:"".concat(_,"-close-icon"),onClick:R}):i.createElement("span",{className:"".concat(_,"-close-icon"),onClick:R},e)}),null,!1),U=(0,t.Z)(X,2)[1],q="function"===typeof j.onClick||h&&"a"===h.type,K=v||null,Q=K?i.createElement(i.Fragment,null,K,h&&i.createElement("span",null,h)):h,G=i.createElement("span",Object.assign({},j,{ref:n,className:A,style:L}),Q,U);return M(q?i.createElement(d.Z,{component:"Tag"},G):G)},P=i.forwardRef(w);P.CheckableTag=x;var j=P}}]);