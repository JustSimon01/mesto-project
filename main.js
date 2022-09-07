(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{id:()=>H});var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__input-error_active"},n=document.querySelector(".popup__image-container").closest(".popup"),o=(n.querySelector(".popup__close-button"),document.querySelectorAll(".popup__close-button")),r=n.querySelector(".popup__image"),c=n.querySelector(".popup__image-subtitle"),a=document.querySelector(".cards"),u=document.querySelector("#card").content,i=document.querySelector("#cardUpload"),s=i.querySelector("#card-name-input"),l=i.querySelector("#link-input"),d=i.closest(".popup"),p=i.querySelector(t.submitButtonSelector),f=document.querySelector(".profile__avatar"),m=document.querySelector(".profile__avatar-edit"),v=document.querySelector("#change-avatar").closest(".popup"),y=v.querySelector(t.submitButtonSelector),_=v.querySelector(".popup__close-button"),h=document.querySelector("#avatar-link-input"),b=document.querySelector(".profile__avatar"),S=document.querySelector(".profile__add-button"),L=document.querySelector("#cardUpload").closest(".popup"),q=(L.querySelector(".popup__close-button"),document.querySelector(".profile__edit-button")),g=document.querySelector("#profileEdit").closest(".popup"),E=(g.querySelector(".popup__close-button"),document.querySelector("#profileEdit")),k=E.querySelector("#name-input"),C=document.querySelector(".profile__name"),x=E.querySelector("#about-input"),j=document.querySelector(".profile__career"),P=E.querySelector(t.submitButtonSelector),A={baseURL:"https://mesto.nomoreparties.co/v1/plus-cohort-14",headers:{authorization:"bff12cd7-d8f7-418f-b6b2-2cd8334e6767","Content-Type":"application/json"}};function U(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function T(e){e.classList.add("popup_opened"),document.addEventListener("keydown",O),document.addEventListener("click",R)}function B(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",O),document.removeEventListener("click",R)}function O(e){"Escape"===e.key&&B(document.querySelector(".popup_opened"))}function R(e){e.target.classList.contains("popup_opened")&&B(e.target)}function w(){m.classList.toggle("profile__avatar-edit_active")}function N(e,t){t.textContent=!0===e?"Сохренение...":"Сохранить"}function D(e,t){var o=u.querySelector(".card").cloneNode(!0),a=o.querySelector(".card__image"),i=o.querySelector(".card__text");a.src=e.link,a.alt=e.name,i.textContent=e.name;var s=o.querySelector(".card__delete-button");t===e.owner._id?s.addEventListener("click",(function(t){(function(e){return fetch("".concat(A.baseURL,"/cards/").concat(e._id),{method:"DELETE",headers:A.headers})})(e).then((function(e){return e.ok?(t.target.closest(".card").remove(),e):Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))})):s.classList.add("card__delete-button_disabled");var l=o.querySelector(".like-button"),d=o.querySelector(".like__count");d.textContent=Number(e.likes.length),l.addEventListener("click",(function(t){t.target.classList.contains("like-button_active")?function(e){return fetch("".concat(A.baseURL,"/cards/likes/").concat(e._id),{method:"DELETE",headers:A.headers})}(e).then((function(e){return e.ok?(t.target.classList.remove("like-button_active"),d.textContent=Number(d.textContent)-1,e):Promise.reject("Ошибкdfsа: ".concat(e.status))})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(A.baseURL,"/cards/likes/").concat(e._id),{method:"PUT",headers:A.headers})}(e).then((function(e){return e.ok?(t.target.classList.add("like-button_active"),d.textContent=Number(d.textContent)+1,e):Promise.reject("Ошибкrrа: ".concat(e.status))})).catch((function(e){console.log(e)}))})),e.likes.forEach((function(e){e._id===t&&l.classList.add("like-button_active")}));var p=o.querySelector(".card__image");return p.addEventListener("click",(function(e){r.src=p.src,r.alt=p.alt,c.textContent=p.alt,T(n)})),o}function I(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n?t.prepend(e):t.append(e)}var M=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):(t.classList.add(n.inactiveButtonClass),t.disabled=!0)};function J(e){e.classList.add(t.inactiveButtonClass),e.disabled=!0}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var H="";Promise.all([fetch("".concat(A.baseURL,"/users/me"),{method:"GET",headers:A.headers}).then((function(e){return U(e)})),fetch("".concat(A.baseURL,"/cards"),{method:"GET",headers:A.headers}).then((function(e){return U(e)}))]).then((function(e){var n,o,r=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return c}}(n,o)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],u=r[1];return C.textContent=c.name,j.textContent=c.about,k.value=c.name,x.value=c.about,b.style.backgroundImage="url(".concat(c.avatar,")"),function(e,t){e.forEach((function(e){I(D(e,t),a,!1)}))}(u,c._id),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);M(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent="",o.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),M(n,o,t)}))}))}(t,e)}))}(t),H="".concat(c._id)})).catch((function(e){console.log(e)})),S.addEventListener("click",(function(){T(L)})),q.addEventListener("click",(function(){x.value=j.textContent,k.value=C.textContent,T(g)})),E.addEventListener("submit",(function(e){e.preventDefault(),N(!0,P),fetch("".concat(A.baseURL,"/users/me"),{method:"PATCH",headers:A.headers,body:JSON.stringify({name:"".concat(k.value),about:"".concat(x.value)})}).then((function(e){return e.ok?(C.textContent="".concat(k.value),j.textContent="".concat(x.value),B(g),e.json()):Promise.reject(e.status)})).finally((function(){return N(!1,P)}))})),o.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return B(t)}))})),i.addEventListener("submit",(function(e){(function(e){e.preventDefault(),N(!0,p),fetch("".concat(A.baseURL,"/cards"),{method:"POST",headers:A.headers,body:JSON.stringify({name:"".concat(s.value),link:"".concat(l.value)})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(t){I(D(t,H),a,!0),B(d),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){return N(!1,p)}))})(e),J(p)})),_.addEventListener("click",(function(){B(v)})),f.addEventListener("mouseover",w),f.addEventListener("mouseout",w),f.addEventListener("click",(function(){T(v)})),document.querySelector("#change-avatar").addEventListener("submit",(function(e){(function(e){e.preventDefault(),N(!0,y),fetch("".concat(A.baseURL,"/users/me/avatar"),{method:"PATCH",headers:A.headers,body:JSON.stringify({avatar:"".concat(h.value)})}).then((function(t){if(!t.ok)return Promise.reject(t.status);b.style.backgroundImage="url(".concat(h.value,")"),e.target.reset(),B(v)})).finally((function(){return N(!1,y)}))})(e),J(y)}))})();