function DOMContentLoaded(e){var n="addEventListener",t="removeEventListener",o="attachEvent",u="detachEvent",d=!1,r=arguments;function i(e){return null===e?"null":Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function a(){return+new Date}DOMContentLoaded.version="1.2.6";var c=Number(new Function("/*@cc_on return @_jscript_version; @*/")())||void 0;function l(e){var n=window.onload;"array"!==i(l.queue)&&(l.queue=[],"function"==typeof n&&l.queue.push(n)),l.queue.push(e),window.onload=function(){for(var e=0;e<l.queue.length;e++){var n=l.queue[e];"function"==typeof n&&n()}},null===e&&(window.onload=null)}function f(e){if(!d){d=!0;var n=a();document[t]?(document[t]("DOMContentLoaded",f),window[t]("load",f)):u in document?window[u]("onload",f):function(e){var n=l.queue;if("array"===i(n))if(arguments.length){if("number"===i(e))return void n.splice(e,1);for(var t=0;t<n.length;t++)e===n[t]&&n.splice(t,1)}else n.pop()}(f);for(var o=0;o<r.length;o++){var c=r[o];"function"==typeof c&&c.call(document,{readyDOMTime:null===e?null:n,funcExecuteTime:a()},c)}}}"complete"!==document.readyState?c<9?function e(){if(window.frameElement){try{window.attachEvent("onload",f)}catch(e){}return}try{document.documentElement.doScroll("left")}catch(n){return void setTimeout(function(){"complete"===document.readyState?f():e()},50)}f()}():"readyState"in document?document[n]?(document[n]("DOMContentLoaded",f,!1),window[n]("load",f,!1)):o in document?window[o]("onload",f):l(f):setTimeout(l(f),1):setTimeout(f(null),1)}