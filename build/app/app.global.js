/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){Context.activeRouter=function(){let t={},e={},n=0;const i=[];return{set:function(e){t=Object.assign({},t,e),function(){const t=i;for(let e=0;e<t.length;e++){(0,t[e])()}}()},get:function(e){return 0===Object.keys(t).length?{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}:e?t[e]:t},subscribe:function(t,o,r){if("function"!=typeof t)throw new Error("Expected listener to be a function.");o?function(t,i,o){e[i].listenerList[o]=t,e[i].listenerList.length===e[n].startLength&&e[i].groupedListener()}(t,o,r):i.push(t);let s=!0;return function(){if(s){if(o)!function(t,n){if(e[t].listenerList.splice(n,1),0===e[t].listenerList.length){const n=i.indexOf(e[t].groupedListener);i.splice(n,1),delete e[t]}}(o,r);else{const e=i.indexOf(t);i.splice(e,1)}s=!1}}},createGroup:function(t){return e[n+=1]={},e[n].startLength=t,e[n].listenerList=[],e[n].groupedListener=(()=>{let t=!1;e[n].listenerList.forEach(e=>{t?e(!0):t=null!==e(!1)})}),i.push(e[n].groupedListener),n}}}();
})(resourcesUrl);
})("App");