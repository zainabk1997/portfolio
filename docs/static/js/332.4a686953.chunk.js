"use strict";(self.webpackChunkportfolio_3=self.webpackChunkportfolio_3||[]).push([[332],{6332:function(n,e,t){t.d(e,{UQ:function(){return A},KF:function(){return U},Qd:function(){return K},Hk:function(){return R}});t(9113);var i=t(3209),r=t(7231),a=t(5971),o=t(9611),s=t(2791);function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},l.apply(this,arguments)}function u(n){return n.sort((function(n,e){var t=n.compareDocumentPosition(e);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function d(n,e,t){var i=n+1;return t&&i>=e&&(i=0),i}function c(n,e,t){var i=n-1;return t&&i<0&&(i=e),i}var f="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,v=function(){var n=this;this.descendants=new Map,this.register=function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}},this.unregister=function(e){n.descendants.delete(e);var t=u(Array.from(n.descendants.keys()));n.assignIndex(t)},this.destroy=function(){n.descendants.clear()},this.assignIndex=function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))},this.count=function(){return n.descendants.size},this.enabledCount=function(){return n.enabledValues().length},this.values=function(){return Array.from(n.descendants.values()).sort((function(n,e){return n.index-e.index}))},this.enabledValues=function(){return n.values().filter((function(n){return!n.disabled}))},this.item=function(e){if(0!==n.count())return n.values()[e]},this.enabledItem=function(e){if(0!==n.enabledCount())return n.enabledValues()[e]},this.first=function(){return n.item(0)},this.firstEnabled=function(){return n.enabledItem(0)},this.last=function(){return n.item(n.descendants.size-1)},this.lastEnabled=function(){var e=n.enabledValues().length-1;return n.enabledItem(e)},this.indexOf=function(e){var t,i;return e&&null!=(t=null==(i=n.descendants.get(e))?void 0:i.index)?t:-1},this.enabledIndexOf=function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))},this.next=function(e,t){void 0===t&&(t=!0);var i=d(e,n.count(),t);return n.item(i)},this.nextEnabled=function(e,t){void 0===t&&(t=!0);var i=n.item(e);if(i){var r=d(n.enabledIndexOf(i.node),n.enabledCount(),t);return n.enabledItem(r)}},this.prev=function(e,t){void 0===t&&(t=!0);var i=c(e,n.count()-1,t);return n.item(i)},this.prevEnabled=function(e,t){void 0===t&&(t=!0);var i=n.item(e);if(i){var r=c(n.enabledIndexOf(i.node),n.enabledCount()-1,t);return n.enabledItem(r)}},this.registerNode=function(e,t){if(e&&!n.descendants.has(e)){var i=u(Array.from(n.descendants.keys()).concat(e));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=l({node:e,index:-1},t);n.descendants.set(e,r),n.assignIndex(i)}}};var m=(0,o.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),x=m[0],p=m[1];var h=t(5223);function y(){return y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},y.apply(this,arguments)}function E(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}var g=["onChange","defaultIndex","index","allowMultiple","allowToggle"],b=["isDisabled","isFocusable","id"],O=[x,function(){return p()},function(){return function(){var n=(0,s.useRef)(new v);return f((function(){return function(){return n.current.destroy()}})),n.current}()},function(n){return function(n){var e=p(),t=(0,s.useState)(-1),i=t[0],r=t[1],a=(0,s.useRef)(null);f((function(){return function(){a.current&&e.unregister(a.current)}}),[]),f((function(){if(a.current){var n=Number(a.current.dataset.index);i==n||Number.isNaN(n)||r(n)}}));var l=n?e.register(n):e.register;return{descendants:e,index:i,enabledIndex:e.enabledIndexOf(a.current),register:(0,o.lq)(l,a)}}(n)}],N=O[0],I=O[2],w=O[3];function T(n){var e=n.onChange,t=n.defaultIndex,i=n.index,r=n.allowMultiple,o=n.allowToggle,l=E(n,g);!function(n){var e=n.index||n.defaultIndex,t=!(0,a.o8)(e)&&!(0,a.kJ)(e)&&n.allowMultiple;(0,a.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof e+","})}(n),function(n){(0,a.ZK)({condition:!(!n.allowMultiple||!n.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(n);var u=I(),d=(0,s.useState)(-1),c=d[0],f=d[1];(0,h.zq)((function(){f(-1)}));var v=(0,h.Tx)({value:i,defaultValue:function(){return r?null!=t?t:[]:null!=t?t:-1},onChange:e}),m=v[0],x=v[1];return{index:m,setIndex:x,htmlProps:l,getAccordionItemProps:function(n){var e=!1;null!==n&&(e=(0,a.kJ)(m)?m.includes(n):m===n);return{isOpen:e,onChange:function(e){if(null!==n)if(r&&(0,a.kJ)(m)){var t=e?(0,a.jX)(m,n):(0,a.cl)(m,n);x(t)}else e?x(n):o&&x(-1)}}},focusedIndex:c,setFocusedIndex:f,descendants:u}}var C=(0,o.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),k=C[0],_=C[1];function M(n){var e=n.isDisabled,t=n.isFocusable,i=n.id,r=E(n,b),l=_(),u=l.getAccordionItemProps,d=l.setFocusedIndex,c=(0,s.useRef)(null),f=(0,h.ZS)(i,"accordion-button","accordion-panel"),v=f[0],m=f[1];!function(n){(0,a.ZK)({condition:!(!n.isFocusable||n.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(n);var x=w({disabled:e&&!t}),p=x.register,g=x.index,O=x.descendants,N=u(-1===g?null:g),I=N.isOpen,T=N.onChange;!function(n){(0,a.ZK)({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:I,isDisabled:e});var C=(0,s.useCallback)((function(){null==T||T(!I),d(g)}),[g,d,I,T]),k=(0,s.useCallback)((function(n){var e={ArrowDown:function(){var n=O.nextEnabled(g);n&&(0,a.T_)(n.node)},ArrowUp:function(){var n=O.prevEnabled(g);n&&(0,a.T_)(n.node)},Home:function(){var n=O.firstEnabled();n&&(0,a.T_)(n.node)},End:function(){var n=O.lastEnabled();n&&(0,a.T_)(n.node)}}[(0,a.uh)(n)];e&&(n.preventDefault(),e(n))}),[O,g]),M=(0,s.useCallback)((function(){d(g)}),[d,g]),P=(0,s.useCallback)((function(n,t){return void 0===n&&(n={}),void 0===t&&(t=null),y({},n,{type:"button",ref:(0,o.lq)(p,c,t),id:v,disabled:!!e,"aria-expanded":!!I,"aria-controls":m,onClick:(0,a.v0)(n.onClick,C),onFocus:(0,a.v0)(n.onFocus,M),onKeyDown:(0,a.v0)(n.onKeyDown,k)})}),[v,e,I,C,M,k,m,p]),D=(0,s.useCallback)((function(n,e){return void 0===n&&(n={}),void 0===e&&(e=null),y({},n,{ref:e,role:"region",id:m,"aria-labelledby":v,hidden:!I})}),[v,I,m]);return{isOpen:I,isDisabled:e,isFocusable:t,onOpen:function(){null==T||T(!0)},onClose:function(){null==T||T(!1)},getButtonProps:P,getPanelProps:D,htmlProps:r}}var P=["children","reduceMotion"],D=["htmlProps","descendants"],S=["htmlProps"],A=(0,i.Gp)((function(n,e){var t=n.children,r=n.reduceMotion,o=E(n,P),l=(0,i.jC)("Accordion",o),u=T((0,i.Lr)(o)),d=u.htmlProps,c=u.descendants,f=E(u,D),v=s.useMemo((function(){return y({},f,{reduceMotion:!!r})}),[f,r]);return s.createElement(N,{value:c},s.createElement(k,{value:v},s.createElement(i.Fo,{value:l},s.createElement(i.m$.div,y({ref:e},d,{className:(0,a.cx)("chakra-accordion",o.className)}),t))))}));a.Ts&&(A.displayName="Accordion");var F=(0,o.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),j=F[0],H=F[1],K=(0,i.Gp)((function(n,e){var t=n.children,r=n.className,o=M(n),l=o.htmlProps,u=E(o,S),d=y({},(0,i.yK)().container,{overflowAnchor:"none"}),c=s.useMemo((function(){return u}),[u]);return s.createElement(j,{value:c},s.createElement(i.m$.div,y({ref:e},l,{className:(0,a.cx)("chakra-accordion__item",r),__css:d}),(0,a.Pu)(t,{isExpanded:!!u.isOpen,isDisabled:!!u.isDisabled})))}));a.Ts&&(K.displayName="AccordionItem");var U=(0,i.Gp)((function(n,e){var t=(0,H().getButtonProps)(n,e),r=y({display:"flex",alignItems:"center",width:"100%",outline:0},(0,i.yK)().button);return s.createElement(i.m$.button,y({},t,{className:(0,a.cx)("chakra-accordion__button",n.className),__css:r}))}));a.Ts&&(U.displayName="AccordionButton");var R=(0,i.Gp)((function(n,e){var t=_().reduceMotion,o=H(),l=o.getPanelProps,u=o.isOpen,d=l(n,e),c=(0,a.cx)("chakra-accordion__panel",n.className),f=(0,i.yK)();t||delete d.hidden;var v=s.createElement(i.m$.div,y({},d,{__css:f.panel,className:c}));return t?v:s.createElement(r.UO,{in:u},v)}));a.Ts&&(R.displayName="AccordionPanel");a.Ts},7231:function(n,e,t){t.d(e,{UO:function(){return N},Mi:function(){return S},uf:function(){return w},Qh:function(){return k},Xc:function(){return F}});var i=t(5971),r=t(6198),a=t.n(r),o=t(9428),s=t(7677),l=t(2791);function u(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}function d(){return d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},d.apply(this,arguments)}var c={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},f={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},v={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},m={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},x={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function p(n){var e;switch(null!=(e=null==n?void 0:n.direction)?e:"right"){case"right":default:return v;case"left":return f;case"bottom":return x;case"top":return m}}var h={enter:{duration:.2,ease:c.easeOut},exit:{duration:.1,ease:c.easeIn}},y=function(n,e){return d({},n,{delay:(0,i.hj)(e)?e:null==e?void 0:e.enter})},E=function(n,e){return d({},n,{delay:(0,i.hj)(e)?e:null==e?void 0:e.exit})},g=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],b={exit:{height:{duration:.2,ease:c.ease},opacity:{duration:.3,ease:c.ease}},enter:{height:{duration:.3,ease:c.ease},opacity:{duration:.4,ease:c.ease}}},O={exit:function(n){var e,t,i=n.animateOpacity,r=n.startingHeight,a=n.transition,o=n.transitionEnd,s=n.delay;return d({},i&&{opacity:(t=r,null!=t&&parseInt(t.toString(),10)>0?1:0)},{overflow:"hidden",height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(e=null==a?void 0:a.exit)?e:E(b.exit,s)})},enter:function(n){var e,t=n.animateOpacity,i=n.endingHeight,r=n.transition,a=n.transitionEnd,o=n.delay;return d({},t&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(e=null==r?void 0:r.enter)?e:y(b.enter,o)})}},N=l.forwardRef((function(n,e){var t=n.in,r=n.unmountOnExit,c=n.animateOpacity,f=void 0===c||c,v=n.startingHeight,m=void 0===v?0:v,x=n.endingHeight,p=void 0===x?"auto":x,h=n.style,y=n.className,E=n.transition,b=n.transitionEnd,N=u(n,g),I=l.useState(!1),w=I[0],T=I[1];l.useEffect((function(){var n=setTimeout((function(){T(!0)}));return function(){return clearTimeout(n)}}),[]),(0,i.ZK)({condition:Boolean(m>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var C=parseFloat(m.toString())>0,k={startingHeight:m,endingHeight:p,animateOpacity:f,transition:w?E:{enter:{duration:0}},transitionEnd:a()(b,{enter:{overflow:"initial"},exit:r?void 0:{display:C?"block":"none"}})},_=!r||t,M=t||r?"enter":"exit";return l.createElement(o.M,{initial:!1,custom:k},_&&l.createElement(s.E.div,d({ref:e},N,{className:(0,i.cx)("chakra-collapse",y),style:d({overflow:"hidden",display:"block"},h),custom:k,variants:O,initial:!!r&&"exit",animate:M,exit:"exit"})))}));i.Ts&&(N.displayName="Collapse");var I=["unmountOnExit","in","className","transition","transitionEnd","delay"],w={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(n){var e,t=void 0===n?{}:n,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:1,transition:null!=(e=null==i?void 0:i.enter)?e:y(h.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(n){var e,t=void 0===n?{}:n,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:0,transition:null!=(e=null==i?void 0:i.exit)?e:E(h.exit,a),transitionEnd:null==r?void 0:r.exit}}}},T=l.forwardRef((function(n,e){var t=n.unmountOnExit,r=n.in,a=n.className,c=n.transition,f=n.transitionEnd,v=n.delay,m=u(n,I),x=r||t?"enter":"exit",p=!t||r&&t,h={transition:c,transitionEnd:f,delay:v};return l.createElement(o.M,{custom:h},p&&l.createElement(s.E.div,d({ref:e,className:(0,i.cx)("chakra-fade",a),custom:h},w,{animate:x},m)))}));i.Ts&&(T.displayName="Fade");var C=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],k={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(n){var e,t=n.reverse,i=n.initialScale,r=n.transition,a=n.transitionEnd,o=n.delay;return d({opacity:0},t?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:d({scale:i},null==a?void 0:a.exit)},{transition:null!=(e=null==r?void 0:r.exit)?e:E(h.exit,o)})},enter:function(n){var e,t=n.transitionEnd,i=n.transition,r=n.delay;return{opacity:1,scale:1,transition:null!=(e=null==i?void 0:i.enter)?e:y(h.enter,r),transitionEnd:null==t?void 0:t.enter}}}},_=l.forwardRef((function(n,e){var t=n.unmountOnExit,r=n.in,a=n.reverse,c=void 0===a||a,f=n.initialScale,v=void 0===f?.95:f,m=n.className,x=n.transition,p=n.transitionEnd,h=n.delay,y=u(n,C),E=!t||r&&t,g=r||t?"enter":"exit",b={initialScale:v,reverse:c,transition:x,transitionEnd:p,delay:h};return l.createElement(o.M,{custom:b},E&&l.createElement(s.E.div,d({ref:e,className:(0,i.cx)("chakra-offset-slide",m)},k,{animate:g,custom:b},y)))}));i.Ts&&(_.displayName="ScaleFade");var M=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],P={exit:{duration:.15,ease:c.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},D={exit:function(n){var e,t=n.direction,i=n.transition,r=n.transitionEnd,a=n.delay;return d({},p({direction:t}).exit,{transition:null!=(e=null==i?void 0:i.exit)?e:E(P.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(n){var e,t=n.direction,i=n.transitionEnd,r=n.transition,a=n.delay;return d({},p({direction:t}).enter,{transition:null!=(e=null==r?void 0:r.enter)?e:y(P.enter,a),transitionEnd:null==i?void 0:i.enter})}},S=l.forwardRef((function(n,e){var t=n.direction,r=void 0===t?"right":t,a=n.style,c=n.unmountOnExit,f=n.in,v=n.className,m=n.transition,x=n.transitionEnd,h=n.delay,y=u(n,M),E=p({direction:r}),g=Object.assign({position:"fixed"},E.position,a),b=!c||f&&c,O=f||c?"enter":"exit",N={transitionEnd:x,transition:m,direction:r,delay:h};return l.createElement(o.M,{custom:N},b&&l.createElement(s.E.div,d({},y,{ref:e,initial:"exit",className:(0,i.cx)("chakra-slide",v),animate:O,exit:"exit",custom:N,variants:D,style:g})))}));i.Ts&&(S.displayName="Slide");var A=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],F={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(n){var e,t=n.offsetX,i=n.offsetY,r=n.transition,a=n.transitionEnd,o=n.delay;return{opacity:0,x:t,y:i,transition:null!=(e=null==r?void 0:r.exit)?e:E(h.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(n){var e,t=n.transition,i=n.transitionEnd,r=n.delay;return{opacity:1,x:0,y:0,transition:null!=(e=null==t?void 0:t.enter)?e:y(h.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(n){var e,t=n.offsetY,i=n.offsetX,r=n.transition,a=n.transitionEnd,o=n.reverse,s=n.delay,l={x:i,y:t};return d({opacity:0,transition:null!=(e=null==r?void 0:r.exit)?e:E(h.exit,s)},o?d({},l,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:d({},l,null==a?void 0:a.exit)})}}},j=l.forwardRef((function(n,e){var t=n.unmountOnExit,r=n.in,a=n.reverse,c=void 0===a||a,f=n.className,v=n.offsetX,m=void 0===v?0:v,x=n.offsetY,p=void 0===x?8:x,h=n.transition,y=n.transitionEnd,E=n.delay,g=u(n,A),b=!t||r&&t,O=r||t?"enter":"exit",N={offsetX:m,offsetY:p,reverse:c,transition:h,transitionEnd:y,delay:E};return l.createElement(o.M,{custom:N},b&&l.createElement(s.E.div,d({ref:e,className:(0,i.cx)("chakra-offset-slide",f),custom:N},F,{animate:O},g)))}));i.Ts&&(j.displayName="SlideFade")}}]);
//# sourceMappingURL=332.4a686953.chunk.js.map