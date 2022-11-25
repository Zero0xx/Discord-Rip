"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[97846,44133],{444133:(e,t,n)=>{n.r(t);n.d(t,{default:()=>w});var r=n(785893),o=n(667294),i=n(191940),c=n(624387),a=n(48843),u=n(685351),s=n(801593),l=n(983319),f=n(67416),p=n(959797),h=n(691838),y=n.n(h);function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return b(e)}function m(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t){v=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return v(e,t)}var g=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&v(e,t)}(n,e);var t=O(n);function n(){d(this,n);var e;(e=t.apply(this,arguments)).state={value:"",error:null,isLoading:!1};e.handleSubmit=function(t){t.preventDefault();var n=e.state.value,r=e.props,o=r.handleSubmit,i=r.onClose,c=r.onError;e.setState({isLoading:!0});o(n).then((function(e){return i(null!=e?e:void 0)}),(function(t){if(null!=t.body){null==c||c(t.body);t.body.password?e.setState({error:t.body.password,isLoading:!1
}):t.body.message&&e.setState({error:t.body.message,isLoading:!1})}}))};e.handleCancel=function(){(0,e.props.onClose)()};e.handlePasswordChange=function(t){var n=e.props.onPasswordChange;null==n||n(t);e.setState({value:t})};return e}n.prototype.render=function(){var e=this.props,t=e.title,n=e.actionText,h=e.children,d=e.transitionState,b=this.state,m=b.error,v=b.isLoading,g=b.value,O=o.Children.count(h)>0?(0,r.jsx)(c.Z,{type:c.Z.Types.WARNING,className:y().card,children:(0,r.jsx)(u.x,{className:y().warning,variant:"text-md/normal",children:h})}):null;return(0,r.jsx)(f.Y0,{transitionState:d,children:(0,r.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,r.jsx)(f.xB,{separator:!1,children:(0,r.jsx)(a.X,{variant:"heading-lg/medium",children:t})}),(0,r.jsxs)(f.hz,{children:[O,(0,r.jsxs)(l.Z,{title:p.Z.Messages.FORM_LABEL_PASSWORD,className:y().spacing,children:[(0,r.jsx)(s.ZP,{type:"password",autoComplete:"off",autoFocus:!0,value:g,onChange:this.handlePasswordChange
}),null!=m&&""!==m?(0,r.jsxs)(u.x,{variant:"text-xs/normal",color:"text-danger",className:y().error,children:[" ",m," "]}):null]})]}),(0,r.jsxs)(f.mz,{children:[(0,r.jsx)(i.Co,{type:"submit",disabled:v,children:null!=n?n:p.Z.Messages.CONFIRM}),(0,r.jsx)(i.Co,{onClick:this.handleCancel,look:i.Co.Looks.LINK,color:i.Co.Colors.PRIMARY,children:p.Z.Messages.CANCEL})]})]})})};return n}(o.PureComponent);j.key=function(){return"password-confirm-modal"};const w=j},997846:(e,t,n)=>{n.r(t);n.d(t,{default:()=>ie});var r=n(785893),o=n(667294),i=n(791462),c=n(444133),a=n(55690),u=n(99918),s=n(859023),l=n(294184),f=n.n(l),p=n(468811),h=n.n(p),y=n(506884),d=n(191940),b=n(796667),m=n(774481),v=n(487502),g=n(45692),O=n(552795),j=n(414597),w=n(959797),C=n(803114),P=n.n(C),S=n(480798),_=n.n(S),E=n(380203),x=n.n(E);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e){N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){
return e.__proto__||Object.getPrototypeOf(e)};return N(e)}function k(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e,t){I=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return I(e,t)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}const B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,
writable:!0,configurable:!0}});t&&I(e,t)}(n,e);var t=Z(n);function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=t.call(this,e)).handleChange=function(e){r.closePopout();r.setState({phone:e.currentTarget.value})};r.handleKeyPress=function(e){r.closePopout();if(13===e.which){e.preventDefault();r.handleSubmit()}};r.handleSubmit=function(){var e=r.props,t=e.onSubmit,n=e.submitting,o=r.state,i=o.countryCode,c=o.phone;n||null==t||t("".concat(i).concat(c))};r.handleTogglePopout=function(){r.setState({open:!r.state.open})};r.handleClick=function(e){var t=A(e.code.split(" "),2),n=t[0],o=t[1];r.setState({open:!1,countryCode:n,phone:null!=o?o:""})};var o=A(g.Z.find((function(e){return"United States"===e.name})).phoneCountryCode.split(" "),2),i=o[0],c=o[1];r.state={countryCode:i,phone:null!=c?c:"",open:!1};return r}var o=n.prototype;o.render=function(){
var e=this.state,t=e.countryCode,n=e.phone,o=e.open,i=this.props,c=i.className,a=i.submitting,u=A(t.split("+"),2)[1];return(0,r.jsxs)(v.Z,{className:f()(P().phoneField,_().elevationLow,c),align:v.Z.Align.CENTER,grow:0,children:[(0,r.jsxs)(d.Co,{size:d.Ph.SMALL,className:P().countryButton,color:d.Tt.PRIMARY,innerClassName:P().countryButtonInner,onClick:this.handleTogglePopout,children:[(0,r.jsxs)(v.Z,{className:f()(P().countryCodeContainer,x().marginReset),justify:v.Z.Justify.CENTER,children:[(0,r.jsx)("div",{className:P().plusSign,children:"+"}),(0,r.jsx)("div",{className:P().countryCode,children:u})]}),(0,r.jsx)(j.Z,{foreground:P().phoneFieldExpand,expanded:o,width:16,height:16})]}),(0,r.jsx)("input",{"aria-label":w.Z.Messages.PHONE_VERIFICATION_PHONE_LABEL,className:P().inputField,value:n,onChange:this.handleChange,onKeyPress:this.handleKeyPress,autoFocus:!0}),(0,r.jsx)(d.Co,{className:P().sendButton,size:d.Ph.SMALL,submitting:a,onClick:this.handleSubmit,children:w.Z.Messages.SEND
}),o?(0,r.jsx)(O.Z,{onClick:this.handleClick}):null]})};o.closePopout=function(){this.state.open&&this.setState({open:!1})};return n}(o.PureComponent);var L=n(67416),D=n(540637),M=n.n(D),F=n(3066),K=n.n(F);function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,o)}function H(e){H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return H(e)}function q(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e,t){z=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return z(e,t)}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){
var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=H(e);if(t){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}var J=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:i=c.ops.pop();c.trys.pop();continue;default:
if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};const Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&z(e,t)}(o,e);var t=G(o);function o(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var n;(n=t.call(this,e))._animItem=null;n.headerId=h().v4();n.setLottieRef=function(e){n._lottieRef=e};n.handleAddPhone=function(e){if(n.state.animated||null==n._animItem)n.setState({phone:e});else{n._animItem.play()
;n.setState({animated:!0,phone:e})}var t=n.props.onAddPhone;null==t||t(e)};n.handleVerifyCaptcha=function(e){var t=n.state.phone,r=n.props.onVerifyCaptcha;null==r||r(t,e)};n.handleVerifyPhone=function(e){var t=n.props.onVerifyPhone;null==t||t(e)};n.handleResendCode=function(){var e=n.props.onAddPhone;null==e||e(n.state.phone)};n.state={animated:!1,phone:""};return n}var i=o.prototype;i.componentDidMount=function(){var e,t=this;return(e=function(){var e,r,o,i;return J(this,(function(c){switch(c.label){case 0:return[4,Promise.all([n.e(20907).then(n.t.bind(n,331037,19)),n.e(11248).then(n.t.bind(n,211248,23))])];case 1:e=W.apply(void 0,[c.sent(),2]),r=e[0],o=e[1],i=o.default;t._animItem=i.loadAnimation({container:t._lottieRef,renderer:"svg",loop:!0,autoplay:!1,animationData:r});return[2]}}))},function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){V(i,r,o,c,a,"next",e)}function a(e){V(i,r,o,c,a,"throw",e)}c(void 0)}))})()}
;i.componentWillUnmount=function(){if(null!=this._animItem){this._animItem.destroy();this._animItem=void 0}};i.render=function(){var e,t,n,o=this.props,i=o.error,c=o.working,a=o.transitionState,u=o.validPhone,s=o.captchaService,l=o.captchaSitekey;e=null!=s?(0,r.jsx)("div",{className:f()(M().description,x().marginBottom20),children:w.Z.Messages.GUILD_JOIN_CAPTCHA_DESCRIPTION}):null!=i&&""!==i?(0,r.jsx)("div",{className:f()(M().description,M().error,x().marginBottom20),children:i}):u?(0,r.jsx)("div",{className:f()(M().description,x().marginBottom20),children:w.Z.Messages.VERIFICATION_PHONE_DESCRIPTION}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:f()(M().description,x().marginBottom20),children:w.Z.Messages.ENTER_PHONE_DESCRIPTION}),(0,r.jsx)("div",{className:f()(M().description,x().marginBottom20),children:w.Z.Messages.ENTER_PHONE_DESCRIPTION_NOTE.format()})]});t=u?(0,r.jsxs)(v.Z,{className:M().field,direction:v.Z.Direction.VERTICAL,align:v.Z.Align.CENTER,children:[(0,
r.jsx)(m.Z,{onSubmit:this.handleVerifyPhone}),(0,r.jsx)(d.Co,{className:x().marginTop8,size:d.Ph.SMALL,look:d.iL.LINK,color:d.Tt.PRIMARY,onClick:this.handleResendCode,children:w.Z.Messages.RESEND_CODE})]}):null!=s?(0,r.jsx)(b.Z,{captchaService:s,sitekey:l,onVerify:this.handleVerifyCaptcha}):(0,r.jsx)(B,{className:M().field,onSubmit:this.handleAddPhone,submitting:c});n=null!=s?w.Z.Messages.GUILD_JOIN_CAPTCHA_HEADER:u?w.Z.Messages.VERIFICATION_PHONE_TITLE:w.Z.Messages.ENTER_PHONE_TITLE;return(0,r.jsxs)(L.Y0,{impressionName:y.zs.USER_VERIFY_PHONE,transitionState:a,className:f()(M().phoneVerificationModal,K().vertical,K().alignCenter,K().justifyCenter,x().marginTop60),"aria-labelledby":this.headerId,children:[(0,r.jsx)("div",{className:M().animationContainer,ref:this.setLottieRef}),(0,r.jsx)("div",{className:f()(M().title,x().marginBottom8),id:this.headerId,children:n}),e,t]})};return o}(o.PureComponent);var X=n(560221);function $(e,t){(null==t||t>e.length)&&(t=e.length)
;for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ee(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,o)}function te(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){ee(i,r,o,c,a,"next",e)}function a(e){ee(i,r,o,c,a,"throw",e)}c(void 0)}))}}function ne(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0){i.push(r.value);if(t&&i.length===t)break}}catch(e){a=!0;o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var oe=function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:c.label++;return{value:i[1],done:!1};case 5:c.label++;r=i[1];i=[0];continue;case 7:
i=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1];o=i;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(i);break}o[2]&&c.ops.pop();c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e];r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};const ie=o.forwardRef((function(e,t){var n=e.onAddedPhone,l=e.onClose,f=e.transitionState,p=e.reason,h=(0,i.e7)([s.default],(function(){return s.default.getCurrentUser()})),y=re(o.useState(null),2),d=y[0],b=y[1],m=re(o.useState(null),2),v=m[0],g=m[1],O=re(o.useState(null),2),j=O[0],C=O[1],P=re(o.useState(!1),2),S=P[0],_=P[1],E=o.useCallback(function(){var e=te((function(e){var t;return oe(this,(function(n){switch(n.label){case 0:_(!0);n.label=1;case 1:n.trys.push([1,3,,4]);return[4,u.Z.beginAddPhone(e,p)];case 2:n.sent();C(null);b(e);return[3,4]
;case 3:t=n.sent();C(new a.Z(t));return[3,4];case 4:_(!1);return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),[p]),x=o.useCallback(function(){var e=te((function(e,t){var n;return oe(this,(function(r){switch(r.label){case 0:_(!0);r.label=1;case 1:r.trys.push([1,3,,4]);return[4,u.Z.beginAddPhone(e,p,t)];case 2:r.sent();C(null);b(e);return[3,4];case 3:n=r.sent();C(new a.Z(n));return[3,4];case 4:_(!1);return[2]}}))}));return function(t,n){return e.apply(this,arguments)}}(),[p]),R=o.useCallback(function(){var e=te((function(e){var t,n;return oe(this,(function(r){switch(r.label){case 0:if(null==d||null==h)return[2];_(!0);r.label=1;case 1:r.trys.push([1,3,,4]);return[4,u.Z.verifyPhone(d,e)];case 2:t=r.sent().token;C(null);g(t);return[3,4];case 3:n=r.sent();C(new a.Z(n));return[3,4];case 4:_(!1);return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),[h,d]),N=o.useCallback(function(){var e=te((function(e){return oe(this,(function(t){switch(t.label){case 0:
return null==v?[2]:[4,u.Z.addPhone(v,e,p)];case 1:t.sent();null==n||n();l();return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),[n,l,v,p]);if(null!=v)return(0,r.jsx)(c.default,{onClose:l,transitionState:f,title:w.Z.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,handleSubmit:N});var k={};if(null!=j&&Object.keys(j.captchaFields).length>0){var I=j.captchaFields;k.captchaService=(0,X.B)(I.captcha_service);k.captchaSitekey=I.captcha_sitekey}return(0,r.jsx)(Q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){ne(e,t,n[t])}))}return e}({onClose:l,transitionState:f,error:null==j?void 0:j.getAnyErrorMessage(),working:S,validPhone:null!=d,onAddPhone:E,onVerifyPhone:R,onVerifyCaptcha:x},k))}))},552795:(e,t,n)=>{n.d(t,{Z:()=>pe
});var r=n(785893),o=n(667294),i=n(294184),c=n.n(i),a=n(824390),u=n.n(a),s=n(496486),l=n.n(s),f=n(45692),p=n(388337),h=n(487502),y=n(851994),d=n(31165),b=n(647446),m=n(316921),v=n(832010),g=n(983067),O=n(461061),j=n(672908),w=n.n(j),C=n(380203),P=n.n(C);function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function E(e){E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return E(e)}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){_(e,t,n[t])}))}return e}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){
if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function N(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){k=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return k(e,t)}var I=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){
var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}var T=l().memoize((function(e){var t=!1;if(null!=e&&(0,m.FX)(e)){var n=(0,m._i)(e);null!=n&&(t=(0,m.Bd)(n)<.2)}return t?(0,v.Lq)(O.Ilk.BLACK_500):(0,v.Lq)(O.Ilk.WHITE_500)})),Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&k(e,t)}(n,e);var t=A(n);function n(){S(this,n);var e;(e=t.apply(this,arguments)).state={color:T(e.props.color)};e.handleKeyUp=function(t){if(t.which===O.yXg.ENTER||t.which===O.yXg.SPACE){var n=e.props;(0,n.onClick)(R(n,["onClick"]))}};e.handleClick=function(){var t=e.props;(0,t.onClick)(R(t,["onClick"]))};return e}n.prototype.render=function(){var e,t=this.props,n=t.selected,o=t.color,i=t.className,a=t.children,u=T(o);n?e={color:u,background:null!=o?o:(0,
v.Lq)(O.Ilk.BRAND_500)}:null!=o&&(e={color:o});return(0,r.jsx)(b.tE,{offset:{left:4},children:(0,r.jsxs)(h.Z,{className:c()(w().selectableItem,i,_({},w().selected,n)),onClick:this.handleClick,onKeyUp:this.handleKeyUp,align:h.Z.Align.CENTER,style:x({},e,this.props.style),role:"button",tabIndex:0,children:[(0,r.jsx)(h.Z,{align:h.Z.Align.CENTER,className:w().selectableItemLabel,shrink:1,children:a}),n&&(0,r.jsx)(h.Z,{wrap:h.Z.Wrap.WRAP,className:P().marginReset,grow:0,shrink:0,children:(0,r.jsx)(g.Z,{color:u})})]})})};return n}(o.PureComponent);const B=Z;var L=n(15063),D=n(622677),M=n.n(D);function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function U(e){U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return U(e)}function V(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&W(e,t)}function H(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){n=i[r];t.indexOf(n)>=0||(o[n]=e[n])}return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){n=i[r]
;t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}return o}function z(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e,t){W=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return W(e,t)}var Y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return z(this,n)}}var J=function(e){V(n,e);var t=G(n);function n(){F(this,n);return t.apply(this,arguments)}
n.prototype.render=function(){var e=this.props,t=e.className,n=q(e,["className"]);return(0,r.jsx)(d.Z,H(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){K(e,t,n[t])}))}return e}({},n),{className:c()(M().popoutListInput,t)}))};return n}(o.PureComponent);J.defaultProps={autoFocus:!0};var Q=function(e){V(n,e);var t=G(n);function n(){F(this,n);return t.apply(this,arguments)}n.prototype.render=function(){var e=this.props,t=e.className,n=e.children;return(0,r.jsx)(y.Z,{className:c()(M().popoutList,t),"aria-label":this.props["aria-label"],children:n})};return n}(o.PureComponent);Q.SearchBar=J;Q.Item=B;Q.Divider=function(){return(0,r.jsx)(L.Z,{className:M().divider})};Q.Empty=function(e){var t=e.children;return(0,r.jsx)("div",{
className:M().popoutListEmpty,children:t})};const X=Q;var $=n(725002),ee=n(959797),te=n(886995),ne=n.n(te),re=n(480798),oe=n.n(re);function ie(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function ce(e){ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return ce(e)}function ae(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function ue(e,t){return!t||"object"!==le(t)&&"function"!=typeof t?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function se(e,t){se=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return se(e,t)}var le=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function fe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=ce(e);if(t){var o=ce(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ue(this,n)}}var pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&se(e,t)}(n,e);var t=fe(n)
;function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r;(r=t.call(this,e)).onChangeQuery=function(e){r.setState({query:e})};r.onClearQuery=function(){r.setState({query:""})};r.onClick=function(e){var t,n;null===(n=(t=r.props).onClick)||void 0===n||n.call(t,e)};r.state={query:""};return r}var o=n.prototype;o.renderItems=function(){var e=this,t=this.state.query,n=f.Z.flatMap((function(e,t){var n=e.alpha2,o=e.phoneCountryCodes,i=e.name,c=(0,p.q9)(n);return o.map((function(e){return{key:"".concat(t,"-").concat(e),name:i,translatedName:c,countryData:{name:i,alpha2:n,code:e},children:(0,r.jsxs)(h.Z,{className:ne().countryItem,justify:h.Z.Justify.CENTER,align:h.Z.Align.CENTER,children:[(0,r.jsx)(h.Z.Child,{className:ne().countryName,children:c}),(0,r.jsx)(h.Z.Child,{className:ne().countryCode,grow:0,shrink:0,children:e})]})}}))})),o=l()(n).filter((function(e){
return 0===t.length||u()(t.toLowerCase(),e.name.toLowerCase())||u()(t.toLowerCase(),e.translatedName.toLowerCase())})).map((function(t){return(0,r.jsx)(X.Item,ae(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){ie(e,t,n[t])}))}return e}({},t),{onClick:function(){return e.onClick(t.countryData)}}))})).value();return 0===o.length?(0,r.jsx)(X.Empty,{children:ee.Z.Messages.NONE}):(0,r.jsx)($.w0,{className:ne().phoneFieldScroller,children:o})};o.render=function(){var e=this.props.className;return(0,r.jsxs)(X,{className:c()(ne().phoneFieldPopout,oe().elevationBorderLow,e),children:[(0,r.jsx)(X.SearchBar,{query:this.state.query,placeholder:ee.Z.Messages.SEARCH_COUNTRY,onChange:this.onChangeQuery,onClear:this.onClearQuery,autoComplete:"off"
}),(0,r.jsx)(X.Divider,{}),this.renderItems()]})};return n}(o.PureComponent)},774481:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(785893),o=n(667294),i=n(294184),c=n.n(i),a=n(487502),u=n(69850),s=n.n(u);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e){f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return f(e)}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&y(e,t)}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}var d=function(e){
return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}var m=function(e){p(n,e);var t=b(n);function n(){l(this,n);var e;(e=t.apply(this,arguments)).setCodeBlockRef=function(t){e._codeBlockRef=t};e.handleKeyDown=function(t){var n=8===t.which||37===t.which||39===t.which,r=t.which>=48&&t.which<=57||t.keyCode>=96&&t.keyCode<=105;n||r||t.preventDefault();var o=e.props.onKeyDown;null==o||o(t)};e.handleChange=function(t){var n=e.props.onChange;null==n||n(t.currentTarget.value)};return e}var o=n.prototype;o.render=function(){var e=this.props.className
;return(0,r.jsx)("input",{ref:this.setCodeBlockRef,className:c()(s().input,e),maxLength:1,value:null!=this.props.code?this.props.code:void 0,autoFocus:this.props.autoFocus,onKeyDown:this.handleKeyDown,onChange:this.handleChange})};o.focus=function(){var e;null===(e=this._codeBlockRef)||void 0===e||e.focus()};o.blur=function(){var e;null===(e=this._codeBlockRef)||void 0===e||e.blur()};return n}(o.PureComponent);m.defaultProps={autoFocus:!1};var v=function(e){p(n,e);var t=b(n);function n(e){l(this,n);var r;(r=t.call(this,e))._codeBlockRefs=new Array(r.props.count);r.state={codes:new Array(e.count)};return r}var o=n.prototype;o.render=function(){for(var e=function(e){e===c.length/2&&u.push((0,r.jsx)("div",{className:s().spacer},"spacer"));u.push((0,r.jsx)(m,{ref:function(n){return t.setCodeBlockRef(e,n)},code:c[e],autoFocus:0===e,onChange:function(n){return t.handleChange(e,n)},onKeyDown:function(n){return t.handleKeyDown(e,n)},className:i},e))
},t=this,n=this.props,o=n.className,i=n.inputClassName,c=this.state.codes,u=[],l=0;l<c.length;l++)e(l);return(0,r.jsx)(a.Z,{align:a.Z.Align.CENTER,justify:a.Z.Justify.CENTER,className:o,children:u})};o.setCodeBlockRef=function(e,t){this._codeBlockRefs[e]=t};o.handleChange=function(e,t){this.state.codes[e]=t;var n=this.getCodeOrFirstEmptyIndex();if("string"==typeof n)this.submit(n);else{var r=this._codeBlockRefs[n];null==r||r.focus()}};o.handleKeyDown=function(e,t){var n=this.state.codes;if(8===t.which&&e>0&&(null==n[e]||0===n[e].length)){var r=e-1;n[r]="";var o=this._codeBlockRefs[r];null==o||o.focus()}};o.getCodeOrFirstEmptyIndex=function(){for(var e=this.state.codes,t="",n=0;n<e.length;n++){if(isNaN(parseInt(e[n])))return n;t+=e[n]}return t};o.submit=function(e){var t=this.props.onSubmit;null==t||t(e)};return n}(o.PureComponent);v.defaultProps={count:6};const g=v}}]);
//# sourceMappingURL=e692a59f439ed5761c93.js.map