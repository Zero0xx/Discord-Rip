"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[69669],{692454:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(675860),o=t(173436),i=t(682684),s=t(278641),a=t(992497),c=t(461061),u=t(959797);function l(e,n,t,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){t(e);return}a.done?n(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){l(i,r,o,s,a,"next",e)}function a(e){l(i,r,o,s,a,"throw",e)}s(void 0)}))}}var d=function(e,n){var t,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,
o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:s.label++;return{value:i[1],done:!1};case 5:s.label++;r=i[1];i=[0];continue;case 7:i=s.ops.pop();s.trys.pop();continue;default:if(!(o=s.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1];o=i;break}if(o&&s.label<o[2]){s.label=o[2];s.ops.push(i);break}o[2]&&s.ops.pop();s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e];r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},p={pinMessage:function(e,n){return f((function(){var t,o;return d(this,(function(s){switch(s.label){case 0:t=e.id,o=e.name;return[4,i.Z.unarchiveThreadIfNecessary(e.id)];case 1:s.sent();r.Z.put({url:c.ANM.PIN(t,n),oldFormErrors:!0}).catch((function(){var n;n=e.isPrivate()?u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({maxPins:c.tG9}):u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
maxPins:c.tG9,channelName:o});a.Z.show({title:u.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,body:n,confirmText:u.Z.Messages.OKAY})}));return[2]}}))}))()},unpinMessage:function(e,n){return f((function(){return d(this,(function(t){switch(t.label){case 0:return[4,i.Z.unarchiveThreadIfNecessary(e.id)];case 1:t.sent();r.Z.delete({url:c.ANM.PIN(e.id,n),oldFormErrors:!0}).catch((function(){return a.Z.show({title:u.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,body:u.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,confirmText:u.Z.Messages.TRY_AGAIN,cancelText:u.Z.Messages.CANCEL,onConfirm:p.unpinMessage.bind(p,e,n)})}));return[2]}}))}))()},ackPins:function(e){o.Z.dispatch({type:"CHANNEL_PINS_ACK",channelId:e})},fetchPins:function(e){var n=s.Z.getPinnedMessages(e);if(null==n||!n.loaded&&!n.loading){o.Z.dispatch({type:"LOAD_PINNED_MESSAGES",channelId:e});r.Z.get({url:c.ANM.PINS(e),retries:2,oldFormErrors:!0}).then((function(n){o.Z.dispatch({type:"LOAD_PINNED_MESSAGES_SUCCESS",messages:n.body,channelId:e})}),(function(){
o.Z.dispatch({type:"LOAD_PINNED_MESSAGES_FAILURE",channelId:e})}))}}};const h=p},857542:(e,n,t)=>{t.d(n,{Z:()=>G});var r=t(785893),o=t(667294),i=t(294184),s=t.n(i),a=t(692454),c=t(549425),u=t(53211),l=t(180445),f=t(849832),d=t(435500),p=t(105405),h=t(859023),g=t(191940),O=t(812895),y=t(736488),E=t(685351),m=t(30741),b=t(897576),v=t(418674),_=t(340034),P=t(461061),S=t(959797),M=t(878101),N=t.n(M);function j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function T(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function x(e){x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return x(e)}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){T(e,n,t[n])}))}return e}function Z(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function w(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function A(e,n){
return!n||"object"!==L(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function D(e,n){D=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return D(e,n)}var L=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function C(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=x(e);if(n){var o=x(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return A(this,t)}}var R=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,
writable:!0,configurable:!0}});n&&D(e,n)}(t,e);var n=C(t);function t(){j(this,t);var e;(e=n.apply(this,arguments)).state={report:!1};e.handleDelete=function(){var n=e.state.report,t=e.props,r=t.channel,o=t.message;n?(0,f.ak)(o,(function(){return c.Z.deleteMessage(r.id,o.id)})):c.Z.deleteMessage(r.id,o.id)};e.handleToggleReport=function(n){e.setState({report:n})};return e}t.prototype.render=function(){var e,n,t=this.state.report,o=this.props,i=o.channel,s=o.message,a=o.showContextMenuHint,c=w(o,["channel","message","showContextMenuHint"]),u=i.type===P.d4z.GUILD_ANNOUNCEMENT&&(0,v.yE)(s.flags,P.iLy.CROSSPOSTED);a&&(e=(0,r.jsx)(O.Z,{className:N().spacingTop,children:S.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()}));(0,_.vc)(s)&&(n=(0,r.jsx)(y.Z,{value:t,onChange:this.handleToggleReport,hideBorder:!0,className:N().spacingTop,children:S.Z.Messages.DELETE_MESSAGE_REPORT}));return(0,r.jsx)(l.Z.Provider,{value:i.guild_id,children:(0,r.jsxs)(m.default,Z(I({
header:u?S.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER:S.Z.Messages.DELETE_MESSAGE_TITLE,confirmText:S.Z.Messages.DELETE,cancelText:S.Z.Messages.CANCEL,onConfirm:this.handleDelete},c),{children:[(0,r.jsx)(E.x,{variant:"text-md/normal",className:N().spacing,children:u?S.Z.Messages.DELETE_FOLLOWED_NEWS_BODY:S.Z.Messages.DELETE_MESSAGE_BODY}),(0,r.jsx)("div",{className:N().message,children:(0,r.jsx)(d.Z,{channel:i,message:s,disableInteraction:!0})}),n,e]}))})};return t}(o.PureComponent);const G={confirmPin:function(e,n){(0,b.h7)((function(t){var o,i=(0,u.F)(e,h.default,p.Z);o=e.isPrivate()?S.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL:S.Z.Messages.PIN_MESSAGE_BODY.format({channelName:i});return(0,r.jsx)(l.Z.Provider,{value:e.guild_id,children:(0,r.jsxs)(m.default,Z(I({header:S.Z.Messages.PIN_MESSAGE_TITLE,confirmText:S.Z.Messages.PIN_CONFIRM,cancelText:S.Z.Messages.CANCEL,confirmButtonColor:g.Co.Colors.BRAND,onConfirm:function(){return a.Z.pinMessage(e,n.id)}},t),{children:[(0,r.jsx)(E.x,{
variant:"text-md/normal",className:N().spacing,children:o}),(0,r.jsx)("div",{className:N().message,children:(0,r.jsx)(d.Z,{channel:e,message:n,animateAvatar:!1,disableInteraction:!0})})]}))})}))},confirmUnpin:function(e,n){(0,b.h7)((function(t){return(0,r.jsx)(l.Z.Provider,{value:e.guild_id,children:(0,r.jsxs)(m.default,Z(I({header:S.Z.Messages.UNPIN_MESSAGE_TITLE,confirmText:S.Z.Messages.UNPIN_CONFIRM,cancelText:S.Z.Messages.CANCEL,onConfirm:function(){return a.Z.unpinMessage(e,n.id)}},t),{children:[(0,r.jsx)(E.x,{variant:"text-md/normal",className:N().spacing,children:S.Z.Messages.UNPIN_MESSAGE_BODY}),(0,r.jsx)("div",{className:s()(N().message,N().spacing),children:(0,r.jsx)(d.Z,{channel:e,message:n,disableInteraction:!0})}),(0,r.jsx)(O.Z,{children:S.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()})]}))})}))},confirmDelete:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,b.h7)((function(o){return(0,r.jsx)(R,I({channel:e,message:n,
showContextMenuHint:t},o))}))},confirmEdit:function(e,n,t){(0,b.h7)((function(o){return(0,r.jsx)(m.default,Z(I({header:S.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,confirmText:S.Z.Messages.CONFIRM,cancelText:S.Z.Messages.CANCEL,confirmButtonColor:g.Co.Colors.BRAND,onConfirm:function(){return c.Z.editMessage(e,n,{content:t})}},o),{children:(0,r.jsx)(E.x,{variant:"text-md/normal",className:N().spacing,children:S.Z.Messages.EDIT_FOLLOWED_NEWS_BODY})}))}))}}},278641:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(496486),o=t.n(r),i=t(791462),s=t(173436),a=t(819525),c=t(817513),u=t(356004),l=t(212218),f=t(653772),d=t(171447),p=t(105405),h=t(859023);function g(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function O(e){O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return O(e)}function y(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function E(e,n){E=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return E(e,n)}var m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=O(e);if(n){var o=O(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)}}var v={};function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=u.Z.getChannel(e),i=null!=o?o.getGuildId():null;return{id:e,
messages:n.map((function(e){return(0,a.e5)(e)})),guildId:i,loaded:t,loading:r}}function P(e){var n=e.channel;delete v[n.id]}function S(){o().forEach(v,(function(e){o().forEach(e.messages,(function(e){e.timestamp.locale(c.default.locale)}))}))}function M(){o().forEach(v,(function(e){e.messages=e.messages.map((function(e){return e.set("blocked",p.Z.isBlocked(e.author.id))}))}))}var N=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&E(e,n)}(t,e);var n=b(t);function t(){g(this,t);return n.apply(this,arguments)}var r=t.prototype;r.initialize=function(){this.waitFor(u.Z,f.Z,l.ZP,d.Z,h.default,c.default)};r.getPinnedMessages=function(e){var n;return null!==(n=v[e])&&void 0!==n?n:void 0};r.loaded=function(e){return null!=v[e]&&v[e].loaded};r.__getLocalVars=function(){return{channels:v}};return t}(i.ZP.Store)
;N.displayName="ChannelPinsStore";const j=new N(s.Z,{CONNECTION_OPEN:function(){v={}},GUILD_DELETE:function(e){var n=e.guild;v=o()(v).filter((function(e){return e.guildId!==n.id})).keyBy("id").value()},MESSAGE_UPDATE:function(e){var n=e.message.id,t=e.message.channel_id;if(null==t)return!1;var r=v[t];if(null!=e.message.author)if(e.message.pinned){if(null==r){r=_(t,[e.message],!1);v[t]=r;return}r.messages=r.messages.slice();var i=o().findIndex(r.messages,(function(e){return e.id===n}));-1===i?r.messages.unshift((0,a.e5)(e.message)):r.messages[i]=(0,a.wi)(r.messages[i],e.message);v[t]=r}else{if(null==r)return;var s=o().findIndex(r.messages,(function(e){return e.id===n}));if(-1===s)return;r.messages=r.messages.slice();r.messages.splice(s,1);v[t]=r}else if(null!=r){var c=o().findIndex(r.messages,(function(e){return e.id===n}));if(c>=0){var u=r.messages[c],l=(0,a.wi)(u,e.message);if(l!==u){var f=r.messages.slice();f[c]=l;v[t].messages=f}}}},MESSAGE_DELETE:function(e){
var n=e.id,t=e.channelId,r=v[t];if(null==r)return!1;if(0===o().remove(r.messages,(function(e){return e.id===n})).length)return!1;r.messages=r.messages.slice();v[t]=r},MESSAGE_DELETE_BULK:function(e){var n=e.ids,t=e.channelId,r=v[t];null!=r&&(r.messages=r.messages.filter((function(e){return-1===n.indexOf(e.id)})))},LOAD_PINNED_MESSAGES:function(e){var n=e.channelId;v[n]=_(n,[],!1,!0)},LOAD_PINNED_MESSAGES_SUCCESS:function(e){var n=e.channelId,t=e.messages;v[n]=_(n,t,!0)},LOAD_PINNED_MESSAGES_FAILURE:function(e){var n=e.channelId;delete v[n]},USER_SETTINGS_PROTO_UPDATE:S,I18N_LOAD_SUCCESS:S,CHANNEL_DELETE:P,THREAD_DELETE:P,RELATIONSHIP_ADD:M,RELATIONSHIP_REMOVE:M})},430834:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(785893),o=t(667294),i=t(294184),s=t.n(i),a=t(647446),c=t(248088),u=t(39802),l=t(832010),f=t(461061),d=t(378902),p=t.n(d);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n,t){n in e?Object.defineProperty(e,n,{
value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function O(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(r=t.next()).done);s=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){a=!0;o=e}finally{try{s||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return h(e,n)
;var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E={mass:1,tension:250},m={TOP:"M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",BOTTOM:"M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"},b={TOP:"M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",BOTTOM:"M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z"},v={TOP:"M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",BOTTOM:"M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"}
;function _(e){var n,t,i,d,h,_,P,S,M=e.id,N=e.onChange,j=e.checked,T=e.disabled,x=e.className,I=e.focusProps,Z=e.innerRef,w=o.useContext(u.S).reducedMotion,A=o.useRef(null),D=y(o.useState(!1),2),L=D[0],C=D[1],R=(0,l.Sl)(f.Ilk.PRIMARY_DARK_400),G=(0,l.Sl)(f.Ilk.STATUS_GREEN_600),k=(0,c.useSpring)({config:E,opacity:T?.3:1,state:L?j?.7:.3:j?1:0}),B=k.state,U=k.opacity;return(0,r.jsx)(a.tE,O(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){g(e,n,t[n])}))}return e}({},I),{within:!0,offset:-2,children:(0,r.jsxs)(c.animated.div,{className:s()(p().container,x,(n={},g(n,p().checked,j),g(n,p().disabled,T),n)),onMouseDown:function(){return!T&&C(!0)},onMouseUp:function(){return C(!1)},onMouseLeave:function(){return C(!1)},style:{opacity:U,
backgroundColor:B.to({output:[R.hex,G.hex]})},tabIndex:-1,children:[(0,r.jsxs)(c.animated.svg,{className:p().slider,viewBox:"0 0 28 20",preserveAspectRatio:"xMinYMid meet",style:{left:B.to({range:[0,.3,.7,1],output:[-3,1,8,12]})},children:[(0,r.jsx)(c.animated.rect,{fill:"white",x:B.to({range:[0,.3,.7,1],output:[4,0,0,4]}),y:B.to({range:[0,.3,.7,1],output:[0,1,1,0]}),height:B.to({range:[0,.3,.7,1],output:[20,18,18,20]}),width:B.to({range:[0,.3,.7,1],output:[20,28,28,20]}),rx:"10"}),(t=B,i=R,d=G,h=w.enabled,_=t.to({output:[i.hex,d.hex]}),P=h?[m.TOP,m.TOP,v.TOP,v.TOP]:[m.TOP,b.TOP,b.TOP,v.TOP],S=h?[m.BOTTOM,m.BOTTOM,v.BOTTOM,v.BOTTOM]:[m.BOTTOM,b.BOTTOM,b.BOTTOM,v.BOTTOM],(0,r.jsxs)("svg",{viewBox:"0 0 20 20",fill:"none",children:[(0,r.jsx)(c.animated.path,{fill:_,d:t.to({range:[0,.3,.7,1],output:P})}),(0,r.jsx)(c.animated.path,{fill:_,d:t.to({range:[0,.3,.7,1],output:S})})]}))]}),(0,r.jsx)("input",{id:M,type:"checkbox",ref:function(e){A.current=e;null!=Z&&(Z.current=e)},
className:p().input,tabIndex:T?-1:0,onKeyDown:function(e){T||e.repeat||" "!==e.key&&"Enter"!==e.key||C(!0)},onKeyUp:function(e){var n;if(!T&&L&&!e.repeat){C(!1);"Enter"===e.key&&(null===(n=A.current)||void 0===n||n.click())}},onChange:function(e){C(!1);null==N||N(e.currentTarget.checked,e)},checked:j,disabled:T})]})}))}},736488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(785893),o=t(667294),i=t(294184),s=t.n(i),a=t(647446),c=t(95467),u=t(892472),l=t(430834),f=t(757987),d=t(272729),p=t(15063),h=t(604175),g=t(959797),O=t(879761),y=t.n(O);function E(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function m(e){var n=e.value,t=e.disabled,i=void 0!==t&&t,O=e.hideBorder,m=void 0!==O&&O,b=e.tooltipNote,v=e.onChange,_=e.className,P=e.style,S=e.note,M=e.helpdeskArticleId,N=e.children,j=o.useRef(null),T=o.useRef(null),x=(0,d.Dt)(),I=(0,r.jsx)(l.Z,{id:x,checked:n,onChange:v,disabled:i,focusProps:{enabled:!1},innerRef:j});return(0,r.jsxs)("div",{
style:P,className:s()(y().container,_,E({},y().disabled,i)),children:[(0,r.jsx)(a.tE,{within:!0,offset:-4,focusTarget:j,ringTarget:T,children:(0,r.jsxs)("div",{className:y().labelRow,ref:T,children:[(0,r.jsx)("label",{htmlFor:x,className:y().title,children:N}),(0,r.jsx)("div",{className:y().control,children:null!=b?(0,r.jsx)(f.DY,{text:b,children:I}):I})]})}),null!=S&&(0,r.jsx)("div",{className:y().note,children:(0,r.jsx)(h.Z,{disabled:i,type:h.Y.DESCRIPTION,children:S})}),null!=M&&(0,r.jsx)("div",{className:y().note,children:(0,r.jsx)(h.Z,{disabled:i,type:h.Y.DESCRIPTION,children:(0,r.jsx)(u.Z,{href:c.Z.getArticleURL(M),children:g.Z.Messages.LEARN_MORE})})}),!m&&(0,r.jsx)(p.Z,{className:y().dividerDefault})]})}},428142:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(785893),o=(t(667294),t(240243));function i(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function s(e,n){n=null!=n?n:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function c(e){var n=e.width,t=void 0===n?24:n,c=e.height,u=void 0===c?24:c,l=e.color,f=void 0===l?"currentColor":l,d=e.foreground,p=a(e,["width","height","color","foreground"]);return(0,
r.jsx)("svg",s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){i(e,n,t[n])}))}return e}({},(0,o.Z)(p)),{width:t,height:u,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:d,fill:f,d:"M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"})}))}},340034:(e,n,t)=>{t.d(n,{a4:()=>c,vc:()=>u});var r=t(356004),o=t(95350),i=t(940712),s=t(859023),a=t(461061);function c(e){return null!=e&&function(e){if(null==e)return!1;var n=e.id,t=s.default.getCurrentUser();return null!=t&&t.id!==n}(e.author)}function u(e){return null!=e&&c(e)&&function(e){var n=r.Z.getChannel(e);if(null==n)return!1;if(n.type===a.d4z.DM||n.type===a.d4z.GROUP_DM)return!0
;if(i.Z.canWithPartialContext(a.Plq.MANAGE_MESSAGES,{channelId:e})){var t=o.Z.getMemberCount(n.getGuildId());return null!=t&&t>=50}return!1}(e.getChannelId())}}}]);
//# sourceMappingURL=cad80e35e426e0236303.js.map