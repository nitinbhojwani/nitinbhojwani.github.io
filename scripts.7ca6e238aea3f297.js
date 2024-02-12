(function(){"use strict";var T=window.Document.prototype.createElement,S=window.Document.prototype.createElementNS,pt=window.Document.prototype.importNode,ht=window.Document.prototype.prepend,ft=window.Document.prototype.append,dt=window.DocumentFragment.prototype.prepend,mt=window.DocumentFragment.prototype.append,I=window.Node.prototype.cloneNode,g=window.Node.prototype.appendChild,R=window.Node.prototype.insertBefore,A=window.Node.prototype.removeChild,W=window.Node.prototype.replaceChild,F=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),B=window.Element.prototype.attachShadow,M=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),L=window.Element.prototype.getAttribute,U=window.Element.prototype.setAttribute,z=window.Element.prototype.removeAttribute,C=window.Element.prototype.getAttributeNS,q=window.Element.prototype.setAttributeNS,G=window.Element.prototype.removeAttributeNS,J=window.Element.prototype.insertAdjacentElement,V=window.Element.prototype.insertAdjacentHTML,vt=window.Element.prototype.prepend,yt=window.Element.prototype.append,X=window.Element.prototype.before,K=window.Element.prototype.after,Q=window.Element.prototype.replaceWith,Y=window.Element.prototype.remove,wt=window.HTMLElement,O=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Z=window.HTMLElement.prototype.insertAdjacentElement,$=window.HTMLElement.prototype.insertAdjacentHTML,tt=new Set;function et(t){var e=tt.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!e&&t}"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(t){return tt.add(t)});var Et=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function p(t){var e=t.isConnected;if(void 0!==e)return e;if(Et(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function j(t){var e=t.children;if(e)return Array.prototype.slice.call(e);for(e=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&e.push(t);return e}function H(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function x(t,e,n){for(var i=t;i;){if(i.nodeType===Node.ELEMENT_NODE){var o=i;e(o);var r=o.localName;if("link"===r&&"import"===o.getAttribute("rel")){if(i=o.import,void 0===n&&(n=new Set),i instanceof Node&&!n.has(i))for(n.add(i),i=i.firstChild;i;i=i.nextSibling)x(i,e,n);i=H(t,o);continue}if("template"===r){i=H(t,o);continue}if(o=o.__CE_shadowRoot)for(o=o.firstChild;o;o=o.nextSibling)x(o,e,n)}i=i.firstChild?i.firstChild:H(t,i)}}function b(){var t=!(null==m||!m.noDocumentConstructionObserver),e=!(null==m||!m.shadyDomFastWalk);this.m=[],this.g=[],this.j=!1,this.shadyDomFastWalk=e,this.I=!t}function _(t,e,n,i){var o=window.ShadyDOM;if(t.shadyDomFastWalk&&o&&o.inUse){if(e.nodeType===Node.ELEMENT_NODE&&n(e),e.querySelectorAll)for(t=o.nativeMethods.querySelectorAll.call(e,"*"),e=0;e<t.length;e++)n(t[e])}else x(e,n,i)}function P(t,e){t.j&&_(t,e,function(n){return y(t,n)})}function y(t,e){if(t.j&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.m.length;n++)t.m[n](e);for(n=0;n<t.g.length;n++)t.g[n](e)}}function d(t,e){var n=[];for(_(t,e,function(o){return n.push(o)}),e=0;e<n.length;e++){var i=n[e];1===i.__CE_state?t.connectedCallback(i):N(t,i)}}function f(t,e){var n=[];for(_(t,e,function(o){return n.push(o)}),e=0;e<n.length;e++){var i=n[e];1===i.__CE_state&&t.disconnectedCallback(i)}}function v(t,e,n){var i=(n=void 0===n?{}:n).J,o=n.upgrade||function(l){return N(t,l)},r=[];for(_(t,e,function(l){if(t.j&&y(t,l),"link"===l.localName&&"import"===l.getAttribute("rel")){var s=l.import;s instanceof Node&&(s.__CE_isImportDocument=!0,s.__CE_registry=document.__CE_registry),s&&"complete"===s.readyState?s.__CE_documentLoadHandled=!0:l.addEventListener("load",function(){var c=l.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var a=new Set;i&&(i.forEach(function(u){return a.add(u)}),a.delete(c)),v(t,c,{J:a,upgrade:o})}})}else r.push(l)},i),e=0;e<r.length;e++)o(r[e])}function N(t,e){try{var n=e.ownerDocument,i=n.__CE_registry,o=i&&(n.defaultView||n.__CE_isImportDocument)?D(i,e.localName):void 0;if(o&&void 0===e.__CE_state){o.constructionStack.push(e);try{try{if(new o.constructorFunction!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{o.constructionStack.pop()}}catch(c){throw e.__CE_state=2,c}if(e.__CE_state=1,e.__CE_definition=o,o.attributeChangedCallback&&e.hasAttributes()){var r=o.observedAttributes;for(o=0;o<r.length;o++){var l=r[o],s=e.getAttribute(l);null!==s&&t.attributeChangedCallback(e,l,null,s,null)}}p(e)&&t.connectedCallback(e)}}catch(c){w(c)}}function nt(t,e,n,i){var o=e.__CE_registry;if(o&&(null===i||"http://www.w3.org/1999/xhtml"===i)&&(o=D(o,n)))try{var r=new o.constructorFunction;if(void 0===r.__CE_state||void 0===r.__CE_definition)throw Error("Failed to construct '"+n+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==r.namespaceURI)throw Error("Failed to construct '"+n+"': The constructed element's namespace must be the HTML namespace.");if(r.hasAttributes())throw Error("Failed to construct '"+n+"': The constructed element must not have any attributes.");if(null!==r.firstChild)throw Error("Failed to construct '"+n+"': The constructed element must not have any children.");if(null!==r.parentNode)throw Error("Failed to construct '"+n+"': The constructed element must not have a parent node.");if(r.ownerDocument!==e)throw Error("Failed to construct '"+n+"': The constructed element's owner document is incorrect.");if(r.localName!==n)throw Error("Failed to construct '"+n+"': The constructed element's local name is incorrect.");return r}catch(l){return w(l),e=null===i?T.call(e,n):S.call(e,i,n),Object.setPrototypeOf(e,HTMLUnknownElement.prototype),e.__CE_state=2,e.__CE_definition=void 0,y(t,e),e}return y(t,e=null===i?T.call(e,n):S.call(e,i,n)),e}function w(t){var e="",n="",i=0,o=0;t instanceof Error?(e=t.message,n=t.sourceURL||t.fileName||"",i=t.line||t.lineNumber||0,o=t.column||t.columnNumber||0):e="Uncaught "+String(t);var r=void 0;void 0===ErrorEvent.prototype.initErrorEvent?r=new ErrorEvent("error",{cancelable:!0,message:e,filename:n,lineno:i,colno:o,error:t}):((r=document.createEvent("ErrorEvent")).initErrorEvent("error",!1,!0,e,n,i),r.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),void 0===r.error&&Object.defineProperty(r,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(r),r.defaultPrevented||console.error(t)}function ot(){var t=this;this.g=void 0,this.F=new Promise(function(e){t.l=e})}function rt(t){var e=document;this.l=void 0,this.h=t,this.g=e,v(this.h,this.g),"loading"===this.g.readyState&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function it(t){t.l&&t.l.disconnect()}function h(t){this.s=new Map,this.u=new Map,this.C=new Map,this.A=!1,this.B=new Map,this.o=function(e){return e()},this.i=!1,this.v=[],this.h=t,this.D=t.I?new rt(t):void 0}function lt(t,e){if(!et(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(D(t,e))throw Error("A custom element with name '"+e+"' has already been defined.");if(t.A)throw Error("A custom element is already being defined.")}function st(t,e,n){var i;t.A=!0;try{var o=n.prototype;if(!(o instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var r=function(u){var E=o[u];if(void 0!==E&&!(E instanceof Function))throw Error("The '"+u+"' callback must be a function.");return E},l=r("connectedCallback"),s=r("disconnectedCallback"),c=r("adoptedCallback"),a=(i=r("attributeChangedCallback"))&&n.observedAttributes||[]}catch(u){throw u}finally{t.A=!1}return t.u.set(e,n={localName:e,constructorFunction:n,connectedCallback:l,disconnectedCallback:s,adoptedCallback:c,attributeChangedCallback:i,observedAttributes:a,constructionStack:[]}),t.C.set(n.constructorFunction,n),n}function ct(t){if(!1!==t.i){t.i=!1;for(var e=[],n=t.v,i=new Map,o=0;o<n.length;o++)i.set(n[o],[]);for(v(t.h,document,{upgrade:function(c){if(void 0===c.__CE_state){var a=c.localName,u=i.get(a);u?u.push(c):t.u.has(a)&&e.push(c)}}}),o=0;o<e.length;o++)N(t.h,e[o]);for(o=0;o<n.length;o++){for(var r=n[o],l=i.get(r),s=0;s<l.length;s++)N(t.h,l[s]);(r=t.B.get(r))&&r.resolve(void 0)}n.length=0}}function D(t,e){var n=t.u.get(e);if(n)return n;if(n=t.s.get(e)){t.s.delete(e);try{return st(t,e,n())}catch(i){w(i)}}}function k(t,e,n){function i(o){return function(r){for(var l=[],s=0;s<arguments.length;++s)l[s]=arguments[s];s=[];for(var c=[],a=0;a<l.length;a++){var u=l[a];if(u instanceof Element&&p(u)&&c.push(u),u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)s.push(u);else s.push(u)}for(o.apply(this,l),l=0;l<c.length;l++)f(t,c[l]);if(p(this))for(l=0;l<s.length;l++)(c=s[l])instanceof Element&&d(t,c)}}void 0!==n.prepend&&(e.prepend=i(n.prepend)),void 0!==n.append&&(e.append=i(n.append))}b.prototype.connectedCallback=function(t){var e=t.__CE_definition;if(e.connectedCallback)try{e.connectedCallback.call(t)}catch(n){w(n)}},b.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;if(e.disconnectedCallback)try{e.disconnectedCallback.call(t)}catch(n){w(n)}},b.prototype.attributeChangedCallback=function(t,e,n,i,o){var r=t.__CE_definition;if(r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(e))try{r.attributeChangedCallback.call(t,e,n,i,o)}catch(l){w(l)}},ot.prototype.resolve=function(t){if(this.g)throw Error("Already resolved.");this.g=t,this.l(t)},rt.prototype.G=function(t){var e=this.g.readyState;for("interactive"!==e&&"complete"!==e||it(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,i=0;i<n.length;i++)v(this.h,n[i])},h.prototype.H=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");lt(this,t),this.s.set(t,e),this.v.push(t),this.i||(this.i=!0,this.o(function(){return ct(n)}))},h.prototype.define=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");lt(this,t),st(this,t,e),this.v.push(t),this.i||(this.i=!0,this.o(function(){return ct(n)}))},h.prototype.upgrade=function(t){v(this.h,t)},h.prototype.get=function(t){if(t=D(this,t))return t.constructorFunction},h.prototype.whenDefined=function(t){if(!et(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.B.get(t);if(e)return e.F;e=new ot,this.B.set(t,e);var n=this.u.has(t)||this.s.has(t);return t=-1===this.v.indexOf(t),n&&t&&e.resolve(void 0),e.F},h.prototype.polyfillWrapFlushCallback=function(t){this.D&&it(this.D);var e=this.o;this.o=function(n){return t(function(){return e(n)})}},h.prototype.define=h.prototype.define,h.prototype.upgrade=h.prototype.upgrade,h.prototype.get=h.prototype.get,h.prototype.whenDefined=h.prototype.whenDefined,h.prototype.polyfillDefineLazy=h.prototype.H,h.prototype.polyfillWrapFlushCallback=h.prototype.polyfillWrapFlushCallback;var at={},m=window.customElements;function ut(){var t=new b;(function Dt(t){function e(){var n=this.constructor,i=document.__CE_registry.C.get(n);if(!i)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var o=i.constructionStack;if(0===o.length)return o=T.call(document,i.localName),Object.setPrototypeOf(o,n.prototype),o.__CE_state=1,o.__CE_definition=i,y(t,o),o;var r=o.length-1,l=o[r];if(l===at)throw Error("Failed to construct '"+i.localName+"': This element was already constructed.");return o[r]=at,Object.setPrototypeOf(l,n.prototype),y(t,l),l}e.prototype=wt.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:e}),window.HTMLElement=e})(t),function Ct(t){Document.prototype.createElement=function(e){return nt(t,this,e,null)},Document.prototype.importNode=function(e,n){return e=pt.call(this,e,!!n),this.__CE_registry?v(t,e):P(t,e),e},Document.prototype.createElementNS=function(e,n){return nt(t,this,n,e)},k(t,Document.prototype,{prepend:ht,append:ft})}(t),k(t,DocumentFragment.prototype,{prepend:dt,append:mt}),function Tt(t){function e(n,i){Object.defineProperty(n,"textContent",{enumerable:i.enumerable,configurable:!0,get:i.get,set:function(o){if(this.nodeType===Node.TEXT_NODE)i.set.call(this,o);else{var r=void 0;if(this.firstChild){var l=this.childNodes,s=l.length;if(0<s&&p(this)){r=Array(s);for(var c=0;c<s;c++)r[c]=l[c]}}if(i.set.call(this,o),r)for(o=0;o<r.length;o++)f(t,r[o])}}})}Node.prototype.insertBefore=function(n,i){if(n instanceof DocumentFragment){var o=j(n);if(n=R.call(this,n,i),p(this))for(i=0;i<o.length;i++)d(t,o[i]);return n}return o=n instanceof Element&&p(n),i=R.call(this,n,i),o&&f(t,n),p(this)&&d(t,n),i},Node.prototype.appendChild=function(n){if(n instanceof DocumentFragment){var i=j(n);if(n=g.call(this,n),p(this))for(var o=0;o<i.length;o++)d(t,i[o]);return n}return i=n instanceof Element&&p(n),o=g.call(this,n),i&&f(t,n),p(this)&&d(t,n),o},Node.prototype.cloneNode=function(n){return n=I.call(this,!!n),this.ownerDocument.__CE_registry?v(t,n):P(t,n),n},Node.prototype.removeChild=function(n){var i=n instanceof Element&&p(n),o=A.call(this,n);return i&&f(t,n),o},Node.prototype.replaceChild=function(n,i){if(n instanceof DocumentFragment){var o=j(n);if(n=W.call(this,n,i),p(this))for(f(t,i),i=0;i<o.length;i++)d(t,o[i]);return n}o=n instanceof Element&&p(n);var r=W.call(this,n,i),l=p(this);return l&&f(t,i),o&&f(t,n),l&&d(t,n),r},F&&F.get?e(Node.prototype,F):function _t(t,e){t.j=!0,t.m.push(e)}(t,function(n){e(n,{enumerable:!0,configurable:!0,get:function(){for(var i=[],o=this.firstChild;o;o=o.nextSibling)o.nodeType!==Node.COMMENT_NODE&&i.push(o.textContent);return i.join("")},set:function(i){for(;this.firstChild;)A.call(this,this.firstChild);null!=i&&""!==i&&g.call(this,document.createTextNode(i))}})})}(t),function Nt(t){function e(o,r){Object.defineProperty(o,"innerHTML",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(l){var s=this,c=void 0;if(p(this)&&(c=[],_(t,this,function(E){E!==s&&c.push(E)})),r.set.call(this,l),c)for(var a=0;a<c.length;a++){var u=c[a];1===u.__CE_state&&t.disconnectedCallback(u)}return this.ownerDocument.__CE_registry?v(t,this):P(t,this),l}})}function n(o,r){o.insertAdjacentElement=function(l,s){var c=p(s);return l=r.call(this,l,s),c&&f(t,s),p(l)&&d(t,s),l}}function i(o,r){function l(s,c){for(var a=[];s!==c;s=s.nextSibling)a.push(s);for(c=0;c<a.length;c++)v(t,a[c])}o.insertAdjacentHTML=function(s,c){if("beforebegin"===(s=s.toLowerCase())){var a=this.previousSibling;r.call(this,s,c),l(a||this.parentNode.firstChild,this)}else if("afterbegin"===s)a=this.firstChild,r.call(this,s,c),l(this.firstChild,a);else if("beforeend"===s)a=this.lastChild,r.call(this,s,c),l(a||this.firstChild,null);else{if("afterend"!==s)throw new SyntaxError("The value provided ("+String(s)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");a=this.nextSibling,r.call(this,s,c),l(this.nextSibling,a)}}}B&&(Element.prototype.attachShadow=function(o){if(o=B.call(this,o),t.j&&!o.__CE_patched){o.__CE_patched=!0;for(var r=0;r<t.m.length;r++)t.m[r](o)}return this.__CE_shadowRoot=o}),M&&M.get?e(Element.prototype,M):O&&O.get?e(HTMLElement.prototype,O):function gt(t,e){t.j=!0,t.g.push(e)}(t,function(o){e(o,{enumerable:!0,configurable:!0,get:function(){return I.call(this,!0).innerHTML},set:function(r){var l="template"===this.localName,s=l?this.content:this,c=S.call(document,this.namespaceURI,this.localName);for(c.innerHTML=r;0<s.childNodes.length;)A.call(s,s.childNodes[0]);for(r=l?c.content:c;0<r.childNodes.length;)g.call(s,r.childNodes[0])}})}),Element.prototype.setAttribute=function(o,r){if(1!==this.__CE_state)return U.call(this,o,r);var l=L.call(this,o);U.call(this,o,r),r=L.call(this,o),t.attributeChangedCallback(this,o,l,r,null)},Element.prototype.setAttributeNS=function(o,r,l){if(1!==this.__CE_state)return q.call(this,o,r,l);var s=C.call(this,o,r);q.call(this,o,r,l),l=C.call(this,o,r),t.attributeChangedCallback(this,r,s,l,o)},Element.prototype.removeAttribute=function(o){if(1!==this.__CE_state)return z.call(this,o);var r=L.call(this,o);z.call(this,o),null!==r&&t.attributeChangedCallback(this,o,r,null,null)},Element.prototype.removeAttributeNS=function(o,r){if(1!==this.__CE_state)return G.call(this,o,r);var l=C.call(this,o,r);G.call(this,o,r);var s=C.call(this,o,r);l!==s&&t.attributeChangedCallback(this,r,l,s,o)},Z?n(HTMLElement.prototype,Z):J&&n(Element.prototype,J),$?i(HTMLElement.prototype,$):V&&i(Element.prototype,V),k(t,Element.prototype,{prepend:vt,append:yt}),function bt(t){function e(i){return function(o){for(var r=[],l=0;l<arguments.length;++l)r[l]=arguments[l];l=[];for(var s=[],c=0;c<r.length;c++){var a=r[c];if(a instanceof Element&&p(a)&&s.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)l.push(a);else l.push(a)}for(i.apply(this,r),r=0;r<s.length;r++)f(t,s[r]);if(p(this))for(r=0;r<l.length;r++)(s=l[r])instanceof Element&&d(t,s)}}var n=Element.prototype;void 0!==X&&(n.before=e(X)),void 0!==K&&(n.after=e(K)),void 0!==Q&&(n.replaceWith=function(i){for(var o=[],r=0;r<arguments.length;++r)o[r]=arguments[r];r=[];for(var l=[],s=0;s<o.length;s++){var c=o[s];if(c instanceof Element&&p(c)&&l.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)r.push(c);else r.push(c)}for(s=p(this),Q.apply(this,o),o=0;o<l.length;o++)f(t,l[o]);if(s)for(f(t,this),o=0;o<r.length;o++)(l=r[o])instanceof Element&&d(t,l)}),void 0!==Y&&(n.remove=function(){var i=p(this);Y.call(this),i&&f(t,this)})}(t)}(t),window.CustomElementRegistry=h,t=new h(t),document.__CE_registry=t,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:t})}m&&!m.forcePolyfill&&"function"==typeof m.define&&"function"==typeof m.get||ut(),window.__CE_installPolyfill=ut}).call(self);