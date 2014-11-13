(function(){var e,t,n,o,r,i,a,c,s,l,u,f,d,h,p,m,w=[].slice,b={}.hasOwnProperty,g=function(e,t){for(var n in t){if(b.call(t,n))e[n]=t[n]}function o(){this.constructor=e}o.prototype=t.prototype;e.prototype=new o;e.__super__=t.prototype;return e};n={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(n.script=document.getElementById(n.scriptId)){n.url=n.script.src.replace(/[?#].*$/,"").replace(/buttons.js$/,"")}r=function(){var e;function t(){}t.flatten=function(t){var n,o;n=function(t,r){var i,a,c,s,l,u;switch(e.call(t)){case"[object Object]":for(c in t){s=t[c];n(s,r?""+r+"."+c:c)}break;case"[object Array]":for(i=l=0,u=t.length;l<u;i=++l){a=t[i];n(a,r?""+r+"["+i+"]":"["+i+"]")}break;default:o[r]=t}};o={};n(t);return o};t.expand=function(t){var n,o,r,i,a,c,s,l,u,f,d,h,p,m;a=[];for(n in t){l=t[n];r=[];p=n.split(".");for(u=0,d=p.length;u<d;u++){o=p[u];i=o.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(i[1]){r.push(i[1])}if(i[2]){m=i[2].replace(/^\[|\]$/g,"").split("][");for(f=0,h=m.length;f<h;f++){c=m[f];r.push(Number(c))}}}s=a;o=0;while(r.length){if(s[o]==null){switch(e.call(r[0])){case"[object String]":s[o]={};break;case"[object Number]":s[o]=[]}}s=s[o];o=r.shift()}s[o]=l}return a[0]};e=Object.prototype.toString;return t}();d=function(){function e(){}e.stringify=function(e){var t,n,o;n=[];for(t in e){o=e[t];if(o==null){o=""}n.push(""+t+"="+o)}return n.join("&")};e.parse=function(e){var t,n,o,r,i,a,c,s;n={};c=e.split("&");for(i=0,a=c.length;i<a;i++){o=c[i];if(!(o!=="")){continue}s=o.split("="),t=s[0],r=2<=s.length?w.call(s,1):[];if(t!==""){n[t]=r.join("=")}}return n};return e}();s=function(){function e(){}e.encode=function(e){return"#"+encodeURIComponent(d.stringify(r.flatten(e)))};e.decode=function(e){if(e==null){e=document.location.hash}return r.expand(d.parse(decodeURIComponent(e.replace(/^#/,""))))||{}};return e}();o=function(){var e,t,n,o,r,i,a;function c(e,t){this.element=document.createElement(e);if(t){t(this.element)}}c.prototype.on=function(e,n){t(this.element,e,n)};c.prototype.once=function(e,n){var o;o=function(t){return function(){a(t.element,e,o);n()}}(this);t(this.element,e,o)};c.prototype.addClass=function(t){if(!n(this.element,t)){e(this.element,t)}};c.prototype.removeClass=function(e){if(n(this.element,e)){i(this.element,e)}};c.prototype.hasClass=function(e){return n(this.element,e)};t=function(e,t,n){if(e.addEventListener){e.addEventListener(""+t,n)}else{e.attachEvent("on"+t,n)}};a=function(e,t,n){if(e.removeEventListener){e.removeEventListener(""+t,n)}else{e.detachEvent("on"+t,n)}};r=/[ \t\n\f\r]+/g;o=/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g;e=function(e,t){e.className+=" "+t};i=function(e,t){e.className=(" "+e.className+" ").replace(r," ").replace(" "+t+" ","").replace(o,"")};n=function(e,t){return(" "+e.className+" ").replace(r," ").indexOf(" "+t+" ")>=0};return c}();e=function(){var e;function t(){}t.parse=function(t){return{href:e(t.href),text:t.getAttribute("data-text")||t.textContent||t.innerText,data:{count:{api:function(){var e;if(e=t.getAttribute("data-count-api")){if("/"!==e.charAt(0)){e="/"+e}return e}}(),href:function(){var n;if((n=t.getAttribute("data-count-href"))&&(n=e(n))){return n}else{return e(t.href)}}()},style:function(){var e,o,r,i,a;if(o=t.getAttribute("data-style")){a=n.styles;for(r=0,i=a.length;r<i;r++){e=a[r];if(e===o){return o}}}return n.styles[0]}(),icon:function(){var e;if(e=t.getAttribute("data-icon")){return e}}()}}};e=function(e){if(!/^\s*javascript:/i.test(e)){return e}};return t}();a=function(e){g(t,e);function t(){var e,o;o=arguments[0],e=2<=arguments.length?w.call(arguments,1):[];this.hash=o;this.callback=e;t.__super__.constructor.call(this,"iframe",function(t){var n,o,r,i;r={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in r){o=r[n];t.setAttribute(n,o)}i={border:"none",height:"0",width:"1px"};for(n in i){o=i[n];t.style[n]=o}if(e[0]){e[0](t)}});this.once("load",function(e){return function(){var t,n,o,r,i;if(e.element.contentWindow.callback){n=e.element.contentWindow.callback.script;if(n.readyState){e.on.call({element:n},"readystatechange",function(){if(/loaded|complete/.test(n.readyState)){e.reload()}})}else{i=["load","error"];for(o=0,r=i.length;o<r;o++){t=i[o];e.on.call({element:n},t,function(){e.reload()})}}}else{e.reload()}}}(this));this.element.contentWindow.document.open();this.element.contentWindow.document.write('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+n.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+this.hash+'";</script>\n</head>\n<body>\n<script src="'+n.script.src+'"></script>\n</body>\n</html>');this.element.contentWindow.document.close()}t.prototype.reload=function(){var e,t,o,r;t=this.element.contentWindow.document;o=t.documentElement;e=t.body;o.style.overflow=e.style.overflow=window.opera?"scroll":"visible";r={height:""+e.scrollHeight+"px",width:""+e.scrollWidth+"px"};o.style.overflow=e.style.overflow="";this.once("load",function(e){return function(){var t,n;for(t in r){n=r[t];e.element.style[t]=n}if(e.callback[1]){e.callback[1](e.element)}}}(this));this.element.src=""+n.url+"buttons.html"+this.hash};return t}(o);c=function(){var e,t;function i(n){if(n&&n.data){document.body.className=n.data.style;document.getElementsByTagName("base")[0].href=n.href;new e(n,function(e){document.body.appendChild(e)});new t(n,function(e){document.body.appendChild(e)})}}e=function(e){g(t,e);function t(e,r){t.__super__.constructor.call(this,"a",function(t){t.className="button";if(e.href){t.href=e.href}new o("i",function(o){o=document.createElement("i");o.className=function(){var t;t=[e.data.icon||n.icon];if(n.iconClass){t.push(n.iconClass)}return t.join(" ")}();t.appendChild(o)});new o("span",function(e){e.appendChild(document.createTextNode(" "));t.appendChild(e)});new o("span",function(n){if(e.text){n.appendChild(document.createTextNode(e.text))}t.appendChild(n)});if(r){r(t)}})}return t}(o);t=function(e){g(t,e);function t(e,i){if(e.data.count.api){t.__super__.constructor.call(this,"a",function(t){t.className="count";if(e.data.count.href){t.href=e.data.count.href}new o("b",function(e){t.appendChild(e)});new o("i",function(e){t.appendChild(e)});new o("span",function(a){var c;t.appendChild(a);c=function(){var t,n;n=e.data.count.api.split("#")[0];t=d.parse(n.split("?").slice(1).join("?"));t.callback="callback";return""+n.split("?")[0]+"?"+d.stringify(t)}();new o("script",function(s){var l;s.async=true;s.src=""+n.api+c;window.callback=function(n){var o;window.callback=null;if(n.meta.status===200){o=r.flatten(n.data)[e.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(o)==="[object Number]"){o=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}a.appendChild(document.createTextNode(" "+o+" "));if(i){i(t)}}};window.callback.script=s;o.prototype.on.call({element:s},"error",function(){window.callback=null});if(s.readyState){o.prototype.on.call({element:s},"readystatechange",function(){if(s.readyState==="loaded"&&s.children&&s.readyState==="loading"){window.callback=null}})}l=document.getElementsByTagName("head")[0];l.insertBefore(s,l.firstChild)})})})}}return t}(o);return i}();m=function(e){g(t,e);function t(e){this.element=e}return t}(o);i=function(e){g(t,e);function t(e,t){var n,o,r,i;this.element=e;if(t){n=function(e){return function(){t(e.serialize())}}(this);i=this.element.elements;for(o=0,r=i.length;o<r;o++){e=i[o];this.on.call({element:e},"change",n);if(e.type==="text"){this.on.call({element:e},"input",n)}}}}t.prototype.serialize=function(){var e,t,n,o,r;e={};r=this.element.elements;for(n=0,o=r.length;n<o;n++){t=r[n];if(t.name){switch(t.type){case"radio":case"checkbox":if(t.checked){e[t.name]=t.value}break;default:e[t.name]=t.value}}}return e};t.prototype.parse=function(){return t.parse(this.serialize())};t.parse=function(e){var t,n,o,r;o=e.type,r=e.user,n=e.repo;t={className:"github-button",href:function(){switch(o){case"follow":return"https://github.com/"+r;case"watch":case"star":case"fork":return"https://github.com/"+r+"/"+n;case"issue":return"https://github.com/"+r+"/"+n+"/issues";case"download":return"https://github.com/"+r+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(o){case"follow":return"Follow @"+r;default:return o.charAt(0).toUpperCase()+o.slice(1).toLowerCase()}}(),data:{icon:function(){switch(o){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-git-branch";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()}};if(e["large-button"]!=null){t.data.style="mega"}if(e["show-count"]!=null){switch(o){case"follow":t.data["count-href"]="/"+r+"/followers";t.data["count-api"]="/users/"+r+"#followers";break;case"watch":t.data["count-href"]="/"+r+"/"+n+"/watchers";t.data["count-api"]="/repos/"+r+"/"+n+"#subscribers_count";break;case"star":t.data["count-href"]="/"+r+"/"+n+"/stargazers";t.data["count-api"]="/repos/"+r+"/"+n+"#stargazers_count";break;case"fork":t.data["count-href"]="/"+r+"/"+n+"/network";t.data["count-api"]="/repos/"+r+"/"+n+"#forks_count";break;case"issue":t.data["count-api"]="/repos/"+r+"/"+n+"#open_issues_count"}}if(e["standard-icon"]!=null||t.data.icon==="octicon-mark-github"){delete t.data.icon}return t};return t}(o);a=function(e){g(t,e);function t(e){this.element=e;this.on("load",function(e){return function(){var t,n,o,r;r=e.element.contentWindow.document.getElementsByTagName("a");for(n=0,o=r.length;n<o;n++){t=r[n];e.on.call({element:t},"click",function(e){e.preventDefault();return false})}e.on.call({element:e.element.contentWindow.document.body},"click",function(){e.element.parentNode.click()})}}(this))}return t}(o);l=function(e){g(t,e);function t(e,o){var r,i,a;i=e.href,a=e.text,r=e.data;t.__super__.constructor.call(this,"a",function(e){var t,c;e.className=n.anchorClass;e.href=i;e.appendChild(document.createTextNode(""+a));for(t in r){c=r[t];e.setAttribute("data-"+t,c)}if(o){o(e)}})}return t}(o);f=function(e){g(t,e);function t(e){this.element=e;this.on("load",function(e){return function(){var t,n,o,r,i;if(e.element.contentWindow.callback){n=e.element.contentWindow.document.getElementsByTagName("script")[0];if(n.readyState){e.on.call({element:n},"readystatechange",function(){if(/loaded|complete/.test(n.readyState)){e.resize()}})}else{i=["load","error"];for(o=0,r=i.length;o<r;o++){t=i[o];e.on.call({element:n},t,function(){e.resize()})}}}else{e.resize()}}}(this))}t.prototype.load=function(e){var t,n,o;this.element.parentNode.style.height=""+((e.data.style==="mega"?28:20)+2)+"px";n={height:"0",width:"1px"};for(t in n){o=n[t];this.element.style[t]=o}this.element.src="buttons.html"+s.encode(e);this.element.contentWindow.document.location.reload()};t.prototype.resize=function(){var e,t,n,o,r,i;t=this.element.contentWindow.document;n=t.documentElement;e=t.body;n.style.overflow=e.style.overflow=window.opera?"scroll":"visible";r={height:""+e.scrollHeight+"px",width:""+e.scrollWidth+"px"};n.style.overflow=e.style.overflow="";for(o in r){i=r[o];this.element.style[o]=i}};return t}(o);u=function(t){g(n,t);function n(e,t){this.element=e;this.ui=t;this.on("click",function(e){return function(){event.preventDefault();e.preview();return false}}(this))}n.prototype.preview=function(t,n){if(t==null){t=this.ui.form.parse()}if(n==null){n=false}new l(t,function(t){return function(o){t.ui.code.element.value="<!-- Place this tag where you want the button to render. -->\n"+o.outerHTML;if(n){o.removeAttribute("data-count-api")}t.ui.preview_frame.load(e.parse(o));o=null}}(this))};return n}(o);t=function(e){g(t,e);function t(e){this.element=e;this.on("focus",function(e){return function(){e.element.select()}}(this));this.on("click",function(e){return function(){e.element.select()}}(this));this.on("mouseup",function(){event.preventDefault();return false})}return t}(o);h=function(e){g(t,e);function t(){t.__super__.constructor.apply(this,arguments);this.element.value='<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>'}return t}(t);p=function(){function e(){var e,n,o,r;r=document.getElementsByTagName("iframe");for(n=0,o=r.length;n<o;n++){e=r[n];if(e.parentNode.id==="preview"){this.preview_frame=new f(e)}else{new a(e)}}this.content=new m(document.getElementById("content"));this.form=new i(document.getElementById("button-config"),function(e){return function(t){var n,o,r,a,c,s,l;if(t.type){s=["repo","standard-icon"];for(o=0,a=s.length;o<a;o++){n=s[o];e.form.element.elements[n].disabled=t.type==="follow"}l=["show-count"];for(r=0,c=l.length;r<c;r++){n=l[r];e.form.element.elements[n].disabled=t.type==="download"}if(t["show-count"]!=null&&t.type!=="download"){e.preview_button.removeClass("hidden")}else{e.preview_button.addClass("hidden")}if(!((!t.user||/^[a-z0-9][a-z0-9-]*$/i.test(t.user))&&(t.type==="follow"||!t.repo||/^[\w.-]+$/.test(t.repo)&&!/^\.\.?$/.test(t.repo)))){e.user_repo.addClass("has-error")}else{e.user_repo.removeClass("has-error");if(t.user===""||t.type!=="follow"&&t.repo===""){e.user_repo.addClass("has-warning")}else{e.user_repo.removeClass("has-warning")}}if(e.user_repo.hasClass("has-error")||e.user_repo.hasClass("has-warning")){t.user="ntkme";t.repo="github-buttons";e.preview_button.addClass("hidden");e.preview_button.preview(i.parse(t))}else{e.preview_button.preview(i.parse(t),true)}e.content.removeClass("hidden")}}}(this));this.user_repo=new m(document.getElementById("user-repo"));this.preview_button=new u(document.getElementById("preview-button"),this);this.code=new t(document.getElementById("code"));this.snippet=new h(document.getElementById("snippet"))}return e}();new p;this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map