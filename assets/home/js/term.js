!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=58)}({58:function(e,t,n){e.exports=n(59)},59:function(e,t){jQuery(document).ready((function(e){e(".njt_gdpr_term_accept_btn, .njt_gdpr_term_decline_btn").on("click",(function(t){t.preventDefault();var n=e(this),r=n.hasClass("njt_gdpr_term_accept_btn")?"1":"0";n.addClass("njt-btn-loading"),e.ajax({url:njt_gdpr_term.ajaxurl+"?lang="+njt_gdpr.current_lang,type:"POST",data:{action:"njt_gdpr_accept_term",nonce:njt_gdpr_term.nonce,allow:r}}).done((function(e){e.success&&location.replace(e.data.redirect_url),n.removeClass("njt-btn-loading")})).fail((function(){n.removeClass("njt-btn-loading"),alert("Please refresh and try again.")}))}))}))}});