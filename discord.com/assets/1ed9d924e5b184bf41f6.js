"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[74529],{595200:(e,t,n)=>{n.d(t,{Z:()=>j,$:()=>I});var r=n(391809),o=n(356004),i=n(337823),l=n(561388),a=n(710536),u=n(927119),c=n(461061),s=n(959797);function f(e,t,n,r,o,i,l){try{var a=e[i](l),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){f(i,r,o,l,a,"next",e)}function a(e){f(i,r,o,l,a,"throw",e)}l(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function y(e){y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return y(e)}function m(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){b=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return b(e,t)}var g=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}var w=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}
if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},_=new r.Z("CloudUploaderBase.tsx"),j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&b(e,t)}(n,e);var t=O(n);function n(){p(this,n);var e;(e=t.apply(this,arguments)).files=[];return e}var r=n.prototype;r._fileSize=function(){return this.files.reduce((function(e,t){var n;return e+=null!==(n=t.size)&&void 0!==n?n:0}),0)};r.compressAndCheckFileSize=function(){var e=this;return d((function(){var t,n,r,a,u,s,f,d,p,h,y;return w(this,(function(m){switch(m.label){case 0:if(e.files.length>c.dN1){
_.log("Too many attachments for ".concat(e.id));e._handleError(c.evJ.TOO_MANY_ATTACHMENTS);return[2,!1]}return[3,10];case 1:m.trys.push([1,8,9,10]);a=e.files[Symbol.iterator]();m.label=2;case 2:if(t=(u=a.next()).done)return[3,7];s=u.value;m.label=3;case 3:m.trys.push([3,5,,6]);if(0==(null!==(f=s.size)&&void 0!==f?f:0)){e._handleError(c.evJ.ENTITY_EMPTY);return[2,!1]}return[4,s.reactNativeCompressAndExtractData()];case 4:m.sent();d=o.Z.getBasicChannel(s.channelId);if((null!==(p=s.size)&&void 0!==p?p:0)>(0,i.dg)(null==d?void 0:d.guild_id)){e._handleError(c.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[3,6];case 5:h=m.sent();e._handleError(h);return[2,!1];case 6:t=!0;return[3,2];case 7:return[3,10];case 8:y=m.sent();n=!0;r=y;return[3,10];case 9:try{t||null==a.return||a.return()}finally{if(n)throw r}return[7];case 10:if(e._fileSize()>l.zz){e._handleError(c.evJ.ENTITY_TOO_LARGE);return[2,!1]}return[2,!0]}}))}))()};r._filesTooLarge=function(){return this.files.some((function(e){
return e.error===c.evJ.ENTITY_TOO_LARGE}))};r.setUploadingTextForUI=function(){var e=1===this.files.length&&null!=this.files[0].filename?this.files[0].filename:s.Z.Messages.UPLOADING_FILES.format({count:this.files.length}),t=this.files.some((function(e){return e.isImage})),n=this.files.some((function(e){return e.isVideo})),r=this._fileSize();_.log("setUploadingTextForUI - total content: ".concat(r," bytes and ").concat(this.files.length," attachments for ").concat(this.id));this._file=m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){h(e,t,n[t])}))}return e}({},this._file),{size:r,name:e,hasVideo:n,hasImage:t,attachmentsCount:this.files.length,items:this.files})};r._recomputeProgress=function(){
var e=this._fileSize(),t=this.files.reduce((function(e,t){var n;return e+=null!==(n=t.loaded)&&void 0!==n?n:0}),0);this._handleProgress(t,e);return{loaded:t,total:e}};r.cancel=function(){_.log("Cancel called for ".concat(this.id));if(!this._aborted){this._aborted=!0;null!=this._cancel&&this._cancel();this.files.forEach((function(e){return e.cancel()}));this._handleComplete()}};r.failed=function(){return this.files.some((function(e){return e.status===a.m.ERROR}))};r._remainingUploadCount=function(){var e=this.files;return e.length-e.filter((function(e){return e.status===a.m.COMPLETED})).length};r.clear=function(){this.cancel();this.files=[]};return n}(u.Z);function I(e){return P.apply(this,arguments)}function P(){P=d((function(e){var t,n,r,o=arguments;return w(this,(function(i){switch(i.label){case 0:t=o.length>1&&void 0!==o[1]&&o[1],n=o.length>2?o[2]:void 0;r=e.map((function(e){return new Promise((function(r,o){switch(e.status){case a.m.NOT_STARTED:e.upload();break;case a.m.COMPLETED:
r("complete");break;case a.m.ERROR:t&&e.error!==c.evJ.ENTITY_TOO_LARGE?e.upload():o(new Error("File failed to upload"));break;case a.m.CANCELED:o(new Error("Upload is canceled"))}e.on("complete",(function(){r("complete")}));e.on("error",(function(){o(new Error("File ".concat(e.id," failed to upload")))}));e.on("progress",(function(e,t){null==n||n(e,t)}))}))}));return[4,Promise.all(r)];case 1:i.sent();return[2]}}))}));return P.apply(this,arguments)}},927119:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(717187),o=n.n(r),i=n(496486),l=n.n(i),a=n(832691);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}
function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){s(e,t,n[t])}))}return e}function p(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function h(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){
y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function m(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0
;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var g=new a.Z("UploaderBase.tsx"),O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&y(e,t)}(n,e);var t=b(n);function n(e){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST";c(this,n);(r=t.call(this))._token="";r._lastUpdate=0;r._loaded=0;r._aborted=!1;r._errored=!1;r.alreadyStarted=!1;r._handleStart=function(e){r._cancel=e;r.alreadyStarted||r.emit("start",r._file);r.alreadyStarted=!0};r._handleProgress=function(e,t){var n=Date.now(),o=Math.min(Math.floor(e/t*100),100),i=Math.floor((e-r._loaded)/((n-r._lastUpdate)/1e3))
;r._lastUpdate=n;r._loaded=e;r._file=p(d({},r._file),{size:t,progress:o,rate:i});r.emit("progress",r._file)};r._handleError=function(e,t){r.clearProcessingMessageInterval();if(!r._aborted){r._errored=!0;g.log("_handleError: ".concat(e," for ").concat(r.id));r.emit("error",r._file,e,t);r.removeAllListeners()}};r._handleComplete=function(e){r.clearProcessingMessageInterval();g.log("_handleComplete for ".concat(r.id));r.emit("complete",r._file,e);r.removeAllListeners()};r.id=l().uniqueId("Uploader");r._url=e;r._method=o;return r}var r=n.prototype;r._addAttachmentsToPayload=function(e,t,n){var r=d({},e),o=m(l().get(r,t,[])).concat(m(n));return l().set(r,t,o)};r.clearProcessingMessageInterval=function(){if(null!=this.processingMessageChangeInterval){clearInterval(this.processingMessageChangeInterval);this.processingMessageChangeInterval=void 0}};r.cancel=function(){g.log("cancel() for ".concat(this.id));this._aborted=!0;null!=this._cancel&&this._cancel();this._handleComplete()}
;r.upload=function(e,t,n){if(null!=this._cancel)throw new Error("Uploader.upload(...): An upload is already in progress.");this._lastUpdate=Date.now();this._loaded=0;this._file={id:this.id,name:e.name,size:0,compressionProgress:0,progress:0,rate:0,hasImage:!1,hasVideo:!1,attachmentsCount:0,draftContent:null==t?void 0:t.content,channelId:null==t?void 0:t.channel_id,items:n}};return n}(o())},888403:(e,t,n)=>{n.d(t,{OU:()=>c,Fi:()=>p,li:()=>f,KF:()=>s,AS:()=>d});n(441143);var r,o,i,l=n(780921),a={__proto__:null,bg:{group:" ",decimal:","},cs:{group:" ",decimal:","},da:{group:".",decimal:","},de:{group:".",decimal:","},el:{group:".",decimal:","},"en-GB":{group:",",decimal:"."},"en-US":{group:",",decimal:"."},"es-ES":{group:".",decimal:","},fi:{group:" ",decimal:","},fr:{group:" ",decimal:","},hi:{group:",",decimal:"."},hr:{group:".",decimal:","},hu:{group:" ",decimal:","},it:{group:".",decimal:","},ja:{group:",",decimal:"."},ko:{group:",",decimal:"."},lt:{group:" ",decimal:","},nl:{
group:".",decimal:","},no:{group:" ",decimal:","},pl:{group:" ",decimal:","},"pt-BR":{group:".",decimal:","},ro:{group:".",decimal:","},ru:{group:" ",decimal:","},"sv-SE":{group:" ",decimal:","},th:{group:",",decimal:"."},tr:{group:".",decimal:","},uk:{group:" ",decimal:","},vi:{group:".",decimal:","},"zh-CN":{group:",",decimal:"."},"zh-TW":{group:",",decimal:"."}},u=n(763611);n(544934);function c(e){return null==e?[]:e.filter((function(t,n){return"text"!==t.type||(n>0&&n<e.length-1?""!==t.text:""!==t.text.trim())}))}function s(e,t){var n=e[t],r="",o=!0,i=!1,l=void 0;try{for(var a,u=n[Symbol.iterator]();!(o=(a=u.next()).done);o=!0){var c=a.value;switch(c.type){case"text":case"textMention":r+=c.text;break;case"userMention":r+="<@".concat(c.userId,">");break;case"channelMention":r+="<#".concat(c.channelId,">");break;case"roleMention":r+="<@&".concat(c.roleId,">");break;case"emoji":r+=c.surrogate;break;case"customEmoji":
r+="<".concat(c.animated?"a":"",":").concat(c.name.replace(/:/g,"").split("~")[0],":").concat(c.emojiId,">")}}}catch(e){i=!0;l=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return r}function f(e,t){return null==e[t]?null:s(e,t)}function d(e,t){if(e!==i){i=e;var n,l=null!==(n=a[e])&&void 0!==n?n:a["en-US"],c=l.group,s=l.decimal;r=new RegExp(u.Z.escape(c),"g");o=new RegExp(u.Z.escape(s),"g")}return t.replace(r,"").replace(o,".")}function p(e,t){var n,r,o={};if(null==t.options)return null;var i=t.options;(null===(n=i[0])||void 0===n?void 0:n.type)===l.jw.SUB_COMMAND_GROUP&&(i=i[0].options);(null===(r=i[0])||void 0===r?void 0:r.type)===l.jw.SUB_COMMAND&&(i=i[0].options);var a=!0,u=!1,c=void 0;try{for(var s,f=function(){var t,n=s.value,r=null===(t=e.options)||void 0===t?void 0:t.find((function(e){return e.name===n.name}));if(n.type===l.jw.ATTACHMENT)return"continue";if(null==r?void 0:r.autocomplete)return"continue";o[n.name]=n
},d=i[Symbol.iterator]();!(a=(s=d.next()).done);a=!0)f()}catch(e){u=!0;c=e}finally{try{a||null==d.return||d.return()}finally{if(u)throw c}}return o}},448450:(e,t,n)=>{n.d(t,{Z:()=>H,d:()=>J});var r=n(441143),o=n.n(r),i=n(173436),l=n(549425),a=n(159500),u=n(682964),c=n(780921),s=n(923463),f=n(595200),d=n(23816),p=n(555581),h=n(722003),y=n(391596),m=n(790948),v=n(682684),b=n(817513),g=n(402124),O=n(721777),w=n(653772),_=n(861842),j=n(859023),I=n(337823),P=n(90816),S=n(561388),x=n(361138),E=n(820294),C=n(888403),A=n(307914),M=n(807322),T=n(99298),N=n(544934),k=n(461061),D=n(959797);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t,n,r,o,i,l){try{var a=e[i](l),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,o)}function U(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function l(e){R(i,r,o,l,a,"next",e)}function a(e){R(i,r,o,l,a,"throw",e)}l(void 0)
}))}}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=function(e,t){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={
next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},z=function(e,t){var n
;return null===(n=null==e?void 0:e.find((function(e){return e.displayName===t})))||void 0===n?void 0:n.value},F=function(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},i=e.name===(null===(r=n.autocomplete)||void 0===r?void 0:r.name);if(i)return t;if(""===t)return null;var l=E.Z.getAutocompleteLastChoices(n.channel.id,e.name);if(null!=l){var a;return null!==(a=z(l,t))&&void 0!==a?a:o(t)}return o(t)},G=function(e){var t=e.toLowerCase()===N.WO.toLowerCase(),n=e.toLowerCase()===N.Lu.toLowerCase();return t||n?t:null};function H(e,t,n,r,o){return V.apply(this,arguments)}function V(){return(V=U((function(e,t,n,r,l){var u,s,f,h,y,m,O,w,j,I,P,S,E,A,N,D,Z,R,U,L,H,V,J,$,Q,W,q,X,ee,te,ne,re,oe,ie,le,ae,ue,ce,se,fe,de,pe;return B(this,(function(B){switch(B.label){case 0:null==n.autocomplete&&i.Z.dispatch({type:"APPLICATION_COMMAND_USED",context:n,command:e});return[4,v.Z.unarchiveThreadIfNecessary(n.channel.id)];case 1:B.sent();f=[];h=[]
;if(null!=e.options){y=!0,m=!1,O=void 0;try{for(w=e.options[Symbol.iterator]();!(y=(j=w.next()).done);y=!0)if((I=j.value).type!==c.jw.SUB_COMMAND&&I.type!==c.jw.SUB_COMMAND_GROUP&&I.name in t){S=(null===(P=n.autocomplete)||void 0===P?void 0:P.name)===I.name||void 0;E=null;if(I.type!==c.jw.STRING)if(I.type!==c.jw.ATTACHMENT){U=C.OU(t[I.name]);o()(null!=n.autocomplete||1===U.length,'Option "'.concat(I.name,'" expects a single option type'));if(null!=U[0]||S){H=null!==(L=U[0])&&void 0!==L?L:{type:"text",text:""};switch(I.type){case c.jw.CHANNEL:if("channelMention"===H.type)E=H.channelId;else if("text"===H.type)if((0,T.BH)(H.text))E=H.text.trim();else{J=(0,p.K)(H.text,null===(V=n.guild)||void 0===V?void 0:V.id,n.channel.id);o()("channelMention"===(null==J?void 0:J.type),"Failed to resolve ".concat(H.text));E=J.channelId}break;case c.jw.ROLE:if("roleMention"===H.type)E=H.roleId;else if("text"===H.type)if((0,T.BH)(H.text))E=H.text.trim();else{Q=(0,
p.K)(H.text,null===($=n.guild)||void 0===$?void 0:$.id,n.channel.id);o()("roleMention"===(null==Q?void 0:Q.type),"Failed to resolve ".concat(H.text));E=Q.roleId}else"textMention"===H.type&&"@everyone"===H.text&&(E=null===(W=n.guild)||void 0===W?void 0:W.id);break;case c.jw.USER:if("userMention"===H.type)E=H.userId;else if("text"===H.type)if((0,T.BH)(H.text))E=H.text.trim();else{X=(0,p.K)(H.text,null===(q=n.guild)||void 0===q?void 0:q.id,n.channel.id);o()("userMention"===(null==X?void 0:X.type),"Failed to resolve ".concat(H.text));E=X.userId}break;case c.jw.MENTIONABLE:"userMention"===H.type?E=H.userId:"roleMention"===H.type?E=H.roleId:"textMention"===H.type&&"@everyone"===H.text?E=null===(ee=n.guild)||void 0===ee?void 0:ee.id:"text"===H.type&&((0,T.BH)(H.text)?E=H.text.trim():"userMention"===(null==(ne=(0,
p.K)(H.text,null===(te=n.guild)||void 0===te?void 0:te.id,n.channel.id))?void 0:ne.type)?E=ne.userId:"roleMention"===(null==ne?void 0:ne.type)?E=ne.roleId:"textMention"===(null==ne?void 0:ne.type)&&"@everyone"===ne.text?E=null===(re=n.guild)||void 0===re?void 0:re.id:o()(!1,"Failed to resolve ".concat(H.text)));break;case c.jw.BOOLEAN:"text"===H.type&&(E=G(H.text.trim()));break;case c.jw.INTEGER:if("text"===H.type){oe=H.text.trim();E=null!=I.choices?Number(z(I.choices,oe)):I.autocomplete?F(I,oe,n,Number):Number(C.AS(b.default.locale,oe))}break;case c.jw.NUMBER:if("text"===H.type){ie=H.text.trim();E=null!=I.choices?Number(z(I.choices,ie)):I.autocomplete?F(I,ie,n,Number):Number(C.AS(b.default.locale,ie))}break;default:o()(!1,"Unsupported option type: ".concat(I.type));continue}o()(null!=n.autocomplete||null!=E,'Unexpected value for option "'.concat(I.name,'"'));null!=E&&f.push({type:I.type,name:I.name,value:E,focused:S})}}else{if(null!=n.autocomplete)continue
;if(null==(Z=_.Z.getUpload(n.channel.id,I.name,g.d.ChannelMessage)))continue;R=_.Z.getUploads(n.channel.id,g.d.ChannelMessage).findIndex((function(e){return Z.id===e.id}));h.push(Z);E=R;f.push({type:I.type,name:I.name,value:E,focused:S})}else{D=null!==(N=null===(A=C.li(t,I.name))||void 0===A?void 0:A.trim())&&void 0!==N?N:"";E=null!=I.choices?z(I.choices,D):I.autocomplete?F(I,D,n):D;o()(null!=n.autocomplete||null!=E,'Option "'.concat(I.name,'" expects a value'));null!=E&&f.push({type:I.type,name:I.name,value:E,focused:S})}}}catch(e){m=!0;O=e}finally{try{y||null==w.return||w.return()}finally{if(m)throw O}}}if(null!=e.subCommandPath)for(le=e.subCommandPath.length-1;le>=0;le-=1){ae=e.subCommandPath[le],ue=ae.name,ce=ae.type;f=[{type:ce,name:ue,options:f}]}if(null!=e.execute){d.ZP.trackWithMetadata(k.rMx.APPLICATION_COMMAND_USED,{command_id:e.id,application_id:e.applicationId,command_type:e.type});return[2,e.execute(f,n)]}
if(e.inputType===M.iw.BUILT_IN||e.inputType===M.iw.BUILT_IN_TEXT||e.inputType===M.iw.BUILT_IN_INTEGRATION)return[2];de={version:e.version,id:null!==(se=null===(u=e.rootCommand)||void 0===u?void 0:u.id)&&void 0!==se?se:e.id,guild_id:e.guildId,name:null!==(fe=null===(s=e.rootCommand)||void 0===s?void 0:s.name)&&void 0!==fe?fe:e.name,type:e.type,options:f,application_command:e.rootCommand};pe=function(){Y(t)};null!=r&&(de.target_id=r);if(null!=n.autocomplete)(0,x.GV)(e,n,de);else{a.Z.clearAll(n.channel.id,g.d.ChannelMessage);K({applicationId:e.applicationId,data:de,context:n,attachments:h,maxSizeCallback:l,onMessageSuccess:pe,commandDisplayName:e.displayName})}return[2]}}))}))).apply(this,arguments)}var Y=function(e){var t=Object.values(e).flatMap((function(e){return e.map((function(e){return"emoji"===e.type?{name:e.name.replaceAll(":","")}:"customEmoji"===e.type?O.Z.getCustomEmojiById(e.emojiId):null})).filter(P.lm)}));t.length>0&&i.Z.dispatch({type:"EMOJI_TRACK_USAGE",emojiUsed:t})
},J=function(e,t,n){if(e.isCommandType()){var r=t.guild_id;null!=e.interactionData&&K({applicationId:n,data:e.interactionData,context:{channel:t,guild:null!=r?w.Z.getGuild(r):null}})}},K=function(e){var t,n=e.applicationId,r=e.data,o=e.context,a=e.attachments,s=e.maxSizeCallback,f=e.onMessageSuccess,d=e.commandDisplayName,p=o.channel,y=o.guild,v=p.id,b=null==y?void 0:y.id,g=L(function(e,t,n){var r,o=null===(r=A.ZP.getApplicationSections(e.channel.id,n))||void 0===r?void 0:r.find((function(e){return e.id===t}));if(null!=o){var l,a,u,c=null!==(a=null===(l=o.application)||void 0===l?void 0:l.bot)&&void 0!==a?a:{id:o.id,username:o.name,discriminator:"0000",avatar:null,bot:!0};i.Z.dispatch({type:"STORE_APPLICATION_INTERACTION_FAKE_USER",user:c});return[c,null!==(u=o.application)&&void 0!==u?u:null]}return[null,null]}(o,n,r.type),2),O=g[0],w=g[1],_=r.type===c.yU.CHAT?k.uaV.CHAT_INPUT_COMMAND:k.uaV.CONTEXT_MENU_COMMAND,I=(0,m.ZP)({channelId:v,content:"",tts:!1,type:_,messageReference:void 0,
allowedMentions:void 0,author:null!=O?O:void 0});I.application=null!=w?w:void 0;I.interaction={id:r.id,name:r.name,name_localized:d,type:c.B8.APPLICATION_COMMAND,user:(0,m.pe)(j.default.getCurrentUser())};I.interaction_data=r;var P={applicationId:n,channelId:v,guildId:b,data:r,nonce:I.id,attachments:a,maxSizeCallback:s};l.Z.receiveMessage(v,I,!0,{applicationId:n});h.kz(P.nonce,{messageId:I.id,onCreate:function(e){null!=I.interaction&&(I.interaction.id=e)},onFailure:function(e,t){return function(e,t){null==t&&null!=e&&l.Z.sendClydeError(v,e);i.Z.dispatch({type:"MESSAGE_SEND_FAILED",messageId:I.id,channelId:v,reason:t})}(e,t)},data:{interactionType:c.B8.APPLICATION_COMMAND,channelId:v}});if(null!=a&&(null===(t=u.Z.getCurrentConfig({}))||void 0===t?void 0:t.enabled)){(function(e,t,n,r){return Q.apply(this,arguments)})(a,P.nonce,b,s).then((function(e){e&&$(P,f)}))}else $(P,f)};function $(e,t){s.ZP.enqueue({type:s.$V.COMMAND,message:e},(function(n){(0,y.Sg)(e.nonce,n);n.ok&&null!=t&&t()}))}
function Q(){return(Q=U((function(e,t,n,r){var o,i,l,a,u,c,s,d,p,y,m,v;return B(this,(function(b){switch(b.label){case 0:o=e;i=(0,I.dg)(n);l=function(){null==r||r(i);h.yr(t,k.evJ.ENTITY_TOO_LARGE,D.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({maxSize:(0,I.Ng)(i)}))};a=0;u=!0,c=!1,s=void 0;b.label=1;case 1:b.trys.push([1,6,7,8]);d=o[Symbol.iterator]();b.label=2;case 2:return(u=(p=d.next()).done)?[3,5]:[4,p.value.getSize()];case 3:y=b.sent();a+=y;if(y>Math.max(i,209715200)||a>S.zz){l();return[2,!1]}b.label=4;case 4:u=!0;return[3,2];case 5:return[3,8];case 6:m=b.sent();c=!0;s=m;return[3,8];case 7:try{u||null==d.return||d.return()}finally{if(c)throw s}return[7];case 8:b.trys.push([8,10,,11]);return[4,(0,f.$)(o)];case 9:b.sent();return[3,11];case 10:b.sent();h.yr(t,void 0,D.Z.Messages.UPLOADING_FILES_FAILED.format({count:o.length}));return[3,11];case 11:a=o.reduce((function(e,t){var n;return e+=null!==(n=t.size)&&void 0!==n?n:0}),0);v=o.some((function(e){
return e.error===k.evJ.ENTITY_TOO_LARGE}));if(v||a>S.zz){l();return[2,!1]}return[2,!0]}}))}))).apply(this,arguments)}},865289:(e,t,n)=>{n.d(t,{hV:()=>C,ky:()=>x,Q1:()=>E});n(840502),n(780921),n(940712),n(346529);var r=n(807322),o=n(785893),i=n(667294),l=n(294184),a=n.n(l),u=n(440455),c=n(917870),s=n(141636),f=n.n(s);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function h(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}
function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var t,n=e.section,l=e.isSelected,s=e.width,d=e.height,v=e.className,b=e.selectable,g=void 0!==b&&b,O=e.onFocus,w=e.onBlur,_=e.onMouseOver,j=e.onMouseLeave,I=y(e,["section","isSelected","width","height","className","selectable","onFocus","onBlur","onMouseOver","onMouseLeave"]),P=m(i.useState(!1),2),S=P[0],x=P[1],E=i.useCallback((function(){x(!0);null==O||O()}),[O]),C=i.useCallback((function(){x(!1);null==w||w()}),[w]),A=i.useCallback((function(){x(!0);null==_||_()}),[_]),M=i.useCallback((function(){x(!1);null==j||j()}),[j]),T=i.useMemo((function(){if(n.type===r.Qi.APPLICATION){var e;return c.ZP.getApplicationIconURL({id:n.id,icon:n.icon,bot:null===(e=n.application)||void 0===e?void 0:e.bot,botIconFirst:!0,
size:s})}return c.pK[0]}),[n,s]);return(0,o.jsx)("div",h(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){p(e,t,n[t])}))}return e}({},I),{className:a()(f().wrapper,v,(t={},p(t,f().selectable,g),p(t,f().selected,g&&l),t)),onFocus:E,onBlur:C,onMouseOver:A,onMouseLeave:M,children:(0,o.jsx)(u.ZP,{className:f().mask,mask:g&&(l||S)?u.QS.SQUIRCLE:u.QS.AVATAR_DEFAULT,width:s,height:d,children:(0,o.jsx)("img",{alt:"",className:f().icon,style:{width:s,height:d},src:T})})}))}var b=n(377899),g=n(443429),O=n(544934),w=n(497656),_=n.n(w);function j(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function I(e){for(var t=1;t<arguments.length;t++){
var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){j(e,t,n[t])}))}return e}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function S(e){var t,n=e.section,r=e.className,i=e.width,l=e.height,u=e.padding,c=e.isSelected,s=e.selectable,f=void 0!==s&&s,d=P(e,["section","className","width","height","padding","isSelected","selectable"]),p=function(e){switch(e.id){case O.bi.BUILT_IN:return b.Z;case O.bi.FRECENCY:return g.Z;default:return}}(n);return(0,o.jsx)("div",{
className:a()(_().wrapper,r,(t={},j(t,_().selectable,f),j(t,_().selected,f&&c),t)),style:{width:i,height:l,padding:null!=u?u:0},children:null!=p?(0,o.jsx)(p,I({className:_().icon,width:i,height:l},d)):null})}n(461061).UF9.DAY;var x=function(e){return e.type===r.Qi.BUILT_IN?S:v};function E(e){return"".concat(e/16,"rem")}function C(e,t){var n=t,r=!1,o=t.indexOf(":");if(o>=0){var i=t.lastIndexOf(" ",o);if(i>=0){t=t.substring(0,i);r=!0}else t=t.substring(0,o)}else t=t.substring(0,t.length);var l=t.split(" ",O.Vd+1);if(l.length>O.Vd){r=!0;l.pop()}t=l.join(" ");if(n.length>t.length||t.endsWith(" ")){r=!0;t=t.trimEnd()}return{text:t,parts:l,hasSpaceTerminator:r}}},555581:(e,t,n)=>{n.d(t,{i:()=>p,K:()=>h});var r=n(725616),o=n(356004),i=n(721777),l=n(1812),a=n(212218),u=n(653772),c=n(859023),s=n(172458);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t,n){switch(e[0]){case"@":return function(e,t,n){var r=d(e.slice(1).split("#",2),2),i=r[0],l=r[1];if(null!=l){var c=null!=n?o.Z.getChannel(n):null;if(null==c)return null;if(c.isPrivate()){
var s=!0,f=!1,p=void 0;try{for(var h,m=c.recipients[Symbol.iterator]();!(s=(h=m.next()).done);s=!0){var v=h.value;if(y(i,l,v))return{type:"userMention",userId:v,children:[{text:""}]}}}catch(e){f=!0;p=e}finally{try{s||null==m.return||m.return()}finally{if(f)throw p}}}else{var b=a.ZP.getMembers(t),g=!0,O=!1,w=void 0;try{for(var _,j=b[Symbol.iterator]();!(g=(_=j.next()).done);g=!0){var I=_.value.userId;if(y(i,l,I))return{type:"userMention",userId:I,children:[{text:""}]}}}catch(e){O=!0;w=e}finally{try{g||null==j.return||j.return()}finally{if(O)throw w}}}}else{var P=null!=t?u.Z.getGuild(t):null;if(null==P)return null;var S=!0,x=!1,E=void 0;try{for(var C,A=Object.values(P.roles)[Symbol.iterator]();!(S=(C=A.next()).done);S=!0){var M=C.value;if(i===M.name)return{type:"roleMention",roleId:M.id,children:[{text:""}]}}}catch(e){x=!0;E=e}finally{try{S||null==A.return||A.return()}finally{if(x)throw E}}}return null}(e,t,n);case":":return function(e,t){var n=r.Z.EMOJI_NAME_RE.exec(e)
;if(null==n)return null;var o=n[1],l=i.Z.getDisambiguatedEmojiContext(t).getCustomEmoji();if(null!=l&&o in l){var a=l[o];return{type:"customEmoji",emoji:{emojiId:a.id,name:"require_colons"in a&&a.require_colons?":".concat(a.name,":"):a.name,animated:!0===a.animated,jumboable:!1},children:[{text:""}]}}return null}(e,t);case"#":return function(e,t,n){var r=null!=n?o.Z.getChannel(n):null;if(null==r||r.isPrivate())return null;var i=e.slice(1),a=l.ZP.getTextChannelNameDisambiguations(t);for(var u in a){if(a[u].name===i)return{type:"channelMention",channelId:u,children:[{text:""}]}}return null}(e,t,n)}return null}function h(e,t,n){var r=p(e,t,n);return null==r?null:(0,s.VI)(r)}function y(e,t,n){var r=c.default.getUser(n);return null!=r&&(r.username===e&&r.discriminator===t)}},41225:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(785893),o=(n(667294),n(186121)),i=n(409271),l=n(297609),a=n(726283),u=n(959797);function c(e,t){
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.Z.Messages.COPY_ID,c=arguments.length>3?arguments[3]:void 0,s=function(n){var r=null!=t&&n.shiftKey?t:e;(0,a.JG)(r);null==c||c()},f=i.Sb.useSetting();return!__OVERLAY__&&f&&a.wS?(0,r.jsx)(o.sN,{id:"devmode-copy-id",label:n,action:s,icon:l.Z},"devmode-copy-id"):null}},686924:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(785893),o=n(667294),i=n(441143),l=n.n(i),a=n(791462),u=n(307914),c=n(807322),s=n(99298),f=n(448450),d=n(865289),p=n(122768),h=n(767846),y=n.n(h);const m=function(){return(0,r.jsx)("div",{className:y().loadingWrapper,children:(0,r.jsx)(p.Z,{dotRadius:4,themed:!0})})};var v=n(186121),b=n(356004),g=n(653772),O=n(544934),w=n(959797),_=n(929945),j=n.n(_);const I=function(e,t,n,i,p){var h=o.useRef(!1),y=o.useRef(0),_=(0,a.cj)([b.Z,g.Z],(function(){var e=b.Z.getChannel(n);return{channel:e,guild:g.Z.getGuild(null!=i?i:null==e?void 0:e.guild_id)}})),I=_.channel,P=_.guild,S=(0,
u.A3)(I,e,O.Mn,O.lr),x=S.hasMoreAfter,E=S.scrollDown,C=S.sectionDescriptors,A=S.commands,M=S.placeholders,T=o.useMemo((function(){var e=A.concat(M),t={};C.forEach((function(e){t[e.id]=e}));return{visibleCommands:e,sections:t}}),[A,C,M]),N=T.visibleCommands,k=T.sections,D=o.useMemo((function(){return(0,s.nT)(N.length,e,null==P?void 0:P.applicationCommandCounts,I)}),[I,e,null==P?void 0:P.applicationCommandCounts,N.length]);o.useEffect((function(){if(D!==h.current){D&&(null==p||p());h.current=D}}),[D,p]);o.useEffect((function(){Z(y.current)}),[N]);var Z=o.useCallback((function(e){x&&e+500>34*N.length-40&&E();y.current=e}),[x,E,N]),R=o.useCallback((function(e){if(e.inputType===c.iw.PLACEHOLDER)return(0,r.jsx)(v.sN,{id:"menu-command-".concat(e.id),render:function(){return(0,r.jsx)(m,{})}},"menu-command-".concat(e.id));l()(null!=I,"menu item should not show if channel is null");var n=k[e.applicationId],o=null!=n?(0,d.ky)(n):void 0;return(0,r.jsx)(v.sN,{id:e.id,label:e.displayName,
showIconFirst:!0,icon:function(){return null!=o?(0,r.jsx)(o,{channel:I,section:n,width:18,height:18,selectable:!1}):null},action:function(){(0,f.Z)(e,{},{channel:I,guild:P},t)}},e.id)}),[I,P,t,k]);return D&&(0,r.jsx)(v.sN,{id:"apps",label:w.Z.Messages.APPS,onChildrenScroll:Z,childRowHeight:34,listClassName:j().list,children:N.map(R)})}},297609:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(785893),o=(n(667294),n(240243));function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function l(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}
function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function u(e){var t=e.width,n=void 0===t?24:t,u=e.height,c=void 0===u?24:u,s=e.color,f=void 0===s?"currentColor":s,d=e.foreground,p=a(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){i(e,t,n[t])}))}return e}({},(0,o.Z)(p)),{width:n,height:c,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:d,
fill:f,fillRule:"evenodd",clipRule:"evenodd",d:"M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM8.79741 7.72V16H6.74541V7.72H8.79741ZM13.2097 7.72C16.0897 7.72 17.5897 9.388 17.5897 11.848C17.5897 14.308 16.0537 16 13.2577 16H10.3537V7.72H13.2097ZM13.1497 14.404C14.6137 14.404 15.5257 13.636 15.5257 11.86C15.5257 10.12 14.5537 9.316 13.1497 9.316H12.4057V14.404H13.1497Z"})}))}}}]);
//# sourceMappingURL=1ed9d924e5b184bf41f6.js.map