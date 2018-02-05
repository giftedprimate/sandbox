webpackJsonp([1],{"1/oy":function(t,e){},"9J7R":function(t,e){},"9M+g":function(t,e){},D4uH:function(t,e,n){"use strict";var i={},o={name:"icon",props:{name:{type:String,validator:function(t){return t?t in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,n){var i="fa-"+(a++).toString(16);return e[n]=i,' id="'+i+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,o){var a=n||o;return a&&e[a]?"#"+e[a]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[e]=n}},icons:i},a=870711;var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var r=n("VU/8")(o,s,!1,function(t){n("KFyI")},null,null);e.a=r.exports},Id91:function(t,e){},Jmt5:function(t,e){},KFyI:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app"},o,!1,function(t){n("SuP1")},null,null).exports,s=(n("Jmt5"),n("9M+g"),n("oPmM"),n("D/PP"),n("v2ns"),n("/ocq")),r=n("7QTg"),c=n.n(r),l=n("D4uH"),u=n("e6fC"),h=n("VK1f"),d=n.n(h),f=n("wvfG"),p=n.n(f),g=n("fZjL"),m=n.n(g),v=n("mvHQ"),b=n.n(v),C=(n("Os2u"),n("7t+N")),_=n.n(C),y=function(t,e){var n=_()(e);_()("html, body").animate({scrollTop:n.offset().top-110},2e3,function(){t.$router.push(e)})},I=function(t){_()("html, body").animate({scrollTop:_()(".table-of-contents").offset().top},1500,function(){t.$router.push("/"+t.threatModel)})},P=function(t,e){return t+": "+e},E={mounted:function(){this.$root.$on("social_shares_open",function(){this.$root.$emit("bv::hide::popover")})},computed:{url:function(){return window.location.href},titleAndSubtitle:function(){var t=_()("#"+this.id).text();return P(this.title,"Bitcoin Security Threat Model"===t?"":t)},description:function(){return this.config.DESCRIPTION},title:function(){return this.config.TITLE},quote:function(){return this.config.QUOTE},hashTags:function(){return this.config.HASHTAGS}},props:["id","config"]},M={render:function(){var t=this.$createElement;return(this._self._c||t)("social-sharing",{attrs:{url:this.url,title:this.titleAndSubtitle,description:this.description,quote:this.quote,hashtags:this.hashTags},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("network",{attrs:{network:"reddit"}},[e("i",{staticClass:"fa fa-reddit",attrs:{title:"Reddit"}})]),this._v(" "),e("network",{attrs:{network:"twitter"}},[e("i",{staticClass:"fa fa-twitter",attrs:{title:"Twitter"}})]),this._v(" "),e("network",{attrs:{network:"linkedin"}},[e("i",{staticClass:"fa fa-linkedin",attrs:{title:"Linkedin"}})]),this._v(" "),e("network",{attrs:{network:"facebook"}},[e("i",{staticClass:"fa fa-facebook",attrs:{title:"Facebook"}})])],1)},staticRenderFns:[]}})},staticRenderFns:[]},S=n("VU/8")(E,M,!1,null,null,null).exports,k={methods:{scrollTop:function(){I(this)}},props:["threatModel"]},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-bar"},[e("b-button-group",{attrs:{vertical:""}},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.auto",modifiers:{hover:!0,auto:!0}}],attrs:{title:"Table of contents"},on:{click:this.scrollTop}},[e("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}})])],1)],1)},staticRenderFns:[]};var w,L,T=n("VU/8")(k,N,!1,function(t){n("o4wj")},"data-v-63565282",null).exports,H=n("Zx67"),O=n.n(H),A=n("Zrlr"),x=n.n(A),R=n("wxAW"),F=n.n(R),D=n("zwoO"),U=n.n(D),j=n("Pf15"),B=n.n(j),z=n("EFqf"),Y=n.n(z),G=function(){function t(){x()(this,t),this.state={headingPage:[],introduction:[],mainContent:[],revisionHistory:[],tableOfContents:[],pageHeading:"",headingPageHeading:"",heading:"",scrollPosition:0,pageNumber:0,introEnd:0,style:{}}}return F()(t,[{key:"makePages",value:function(t,e){var n,i=0,o=[],a=[];function s(t){a.push(t)}for(;t.length;){var r=t.shift();(n=r).indexOf("#")>=0?i+=2.375:n.indexOf("##")>=0?i+=1.875:n.indexOf("###")>=0?i+=1.75:n.indexOf("####")>=0?i+=1.625:n.indexOf("**")>=0||n.indexOf("***")>=0?i+=1.375:n.indexOf("* ")>=0?i+=1:void 0!==n&&n.length&&(i+=2),s(r),(i>=e||!t.length)&&(i=0,o.push(a.join("\n")),a=[])}return o}},{key:"createPages",value:function(t){var e=t.split("---"),n=e.shift(),i=e.shift(),o=e.join("---"),a={};return a.headingPage=this.markPages(this.makePages(n.split("\n"),18)),a.introduction=this.markPages(this.makePages(i.split("\n"),18)),a.mainContent=this.markPages(this.makePages(o.split("\n"),18)),a}},{key:"markPages",value:function(t){return t.map(function(t){return Y()(t,{sanitize:!0})})}},{key:"initializeState",value:function(t){var e=this.createPages(t.TM_MARKDOWN);this.state.style=t.STYLE,this.state.headingPage=e.headingPage,this.state.introduction=e.introduction,this.state.mainContent=e.mainContent}}]),t}(),$=n("rdLu"),J=(w=function(t){if("string"!=typeof t)return 0;var e="strong"===t.toLowerCase()?["4"]:t.match(/\d/g);return e?Math.min.apply(null,e):1},L=function(t){var e=t.selector,n=t.$ele,i=document.createElement("ul");i.className+="toc";var o,a,s=i,r=null,c=(o=t.overwrite,a=t.prefix,function(t,e,n){var i=t.textContent,s=a+"-"+n;e.textContent=i;var r=o?s:t.id||s;r=encodeURIComponent(r),t.id=r,e.href="#",e.name=t.id});return function(t,e){var n=[],i=e;return Array.prototype.forEach.call(i,function(e){var i=e.querySelectorAll(t);n=n.concat(Array.prototype.slice.call(i))}),n}(e,n).reduce(function(t,e,n){var o=w(e.tagName),a=o-t;a>0&&(s=function(t,e){for(;e--;)t=t.appendChild(document.createElement("ul")),e&&(t=t.appendChild(document.createElement("li")));return t}(r,a)),a<0&&(s=function(t,e){for(;e--;)t=t.parentElement;return t}(s,2*-a)),s=s||i;var l=document.createElement("li"),u=document.createElement("a"),h=document.createElement("span");return h.innerText=e.getAttribute("page-num"),c(e,u,n),s.appendChild(l).appendChild(u).append(h),r=l,o},w(e)),i},function(t){if("string"!=typeof(t=function(t,e){for(var n in e)e.hasOwnProperty(n)&&e[n]&&(t[n]=e[n]);return t}({selector:"h1, h2, h3, h4",$ele:document.querySelectorAll("body"),overwrite:!1,prefix:"toc"},t)).selector)throw new TypeError("selector must be a string");var e=location.hash;return e&&setTimeout(function(){var t=document.getElementById(e.slice(1));t&&t.scrollIntoView()},0),L(t)}),V=function(t){function e(t){x()(this,e);var n=U()(this,(e.__proto__||O()(e)).call(this));return n.footnoteId=1,n.config=t,n.initializeState(t),n}return B()(e,t),F()(e,[{key:"applyStyles",value:function(){var t=this.state.style;$._.mapObject(t,function(t,e){document.documentElement.style.setProperty("--"+e,t)})}},{key:"numberHeadings",value:function(t){var e=0,n=0,i=0,o=0,a=t.slice(this.state.introEnd).map(function(t){var a=_()(t);return a.each(function(t,a){var s=_()(a);s.is("h1")?(e+=1,s.prepend("<span>"+e+" </span>"),n=0,i=0,o=0):s.is("h2")?(n+=1,s.prepend("<span>"+e+"."+n+" </span>"),i=1,o=1):s.is("h3")?(s.prepend("<span>"+e+"."+n+"."+i+" </span>"),i+=1,o=1):s.is("h4")&&(s.prepend("<span>"+e+"."+n+"."+i+"."+o+" </span>"),o+=1)}),_()("<div>").append(a).remove().html()});return t.slice(0,this.state.introEnd).concat(a)}},{key:"addRevisionHistory",value:function(t){var e=t.REPO_URL.replace("api.","").replace("repos/","").split("/").slice(0,-1).join("/");return'\n      <h1 id="revision-page" style="visibility: hidden">Revision history or to contribute</h1>\n      <strong>To see the revision history, contribute improvements or point out errors in this document please see the github repo:</strong>\n      <a href="'+e+'" target="_blank">'+e+"</a>\n      <strong>If you would like to financially support this, and other bitcoin community projects, buy bitcoin.</strong>\n    "}},{key:"addPageNumberToElements",value:function(t){return t.map(function(t,e){var n=_()(t).each(function(){_()(this).find("strong").each(function(){_()(this).attr("page-num",e+1),_()(this).attr("id",_()(this).text().toLowerCase().split(" ").join("-")+"-"+e)}),_()(this).attr("page-num",e+1)});return _()("<div>").append(n.clone()).remove().html()})}},{key:"addHeadingToToc",value:function(t){return"<h1>Table of Contents</h1>"+t}},{key:"addPageFooter",value:function(t){return t.map(function(t){return t+'<div class="page-footer">\n        <div class="footer-left"></div>\n        <div class="footer-right tiny-h-font small-h-font medium-h-font"></div>\n      </div>'})}},{key:"addResourceLinks",value:function(t){var e=this;return t.map(function(t){var n=_()(t),i=n.last().find(".footer-left");i.append('<div class="resources"></div>');var o=e;return n.find("a").each(function(){var t=_()(this);t.replaceWith(t.text()+' <span style="font-size: 75%; vertical-align: top; color: #000; text-decoration: underline">'+o.footnoteId+" </span>");var e=t.attr("href");i.find(".resources").append('<a class="tiny-h-font small-h-font medium-h-font" href="'+e+'" title="'+e+'" target="_blank"><span style="font-size: 75%; vertical-align: top; color: #000">'+o.footnoteId+" </span>"+e+"</a>"),i.find(".resources").prepend('<div style="border-top: 0.25px solid #000; width: 30%"></div>'),o.footnoteId++}),_()("<div>").append(n).remove().html()})}},{key:"addPageNumbers",value:function(t){return t.map(function(t){var e=_()(t),n=e.first().attr("page-num");return e.last().find(".footer-right").append('<span class="page-number">'+n+"</span>"),_()("<div>").append(e).remove().html()})}},{key:"createPageHeading",value:function(t){return'\n      <nav variant="faded" class="navbar navbar-default" role="navigation">\n        <b-nav-text class="pull-left">'+t.HEADING+'</b-nav-text>\n        <b-nav-text class="pull-right">'+t.COMPANY_NAME+"</b-nav-text>\n      </nav>\n    "}},{key:"appendPageHeader",value:function(t){var e=t.page;return t.heading+e}},{key:"createHeadingPageHeading",value:function(t){return'\n      <div class="jumbotron">\n        <h1 id="heading-page-header">'+t.COMPANY_NAME+"</h1>\n        <p>"+t.PUBLISH_DATE+"</p>\n      </div>\n    "}},{key:"addTitle",value:function(t){var e=document.title.split("|")[0].trim();document.title="",document.title=e+" | "+t}},{key:"appendHeadingPageHeader",value:function(t){var e=this.state.headingPage.pop();this.state.headingPage.push(e+t)}},{key:"addFavicon",value:function(t){_()("head").prepend(_()('<link href="'+t+'" rel="shortcut icon" type="image/x-icon">'))}},{key:"createTableOfContents",value:function(t){var e=J({$ele:_()("<div>"+t+"</div>")});return _()("<div>").append(e).remove().html()}},{key:"init",value:function(t){var e=this;this.applyStyles(),this.appendHeadingPageHeader(this.createHeadingPageHeading({COMPANY_NAME:this.config.COMPANY_NAME,PUBLISH_DATE:this.config.PUBLISH_DATE})),this.state.revisionHistory=[this.addRevisionHistory({REPO_URL:this.config.REPO_URL})],this.state.pageHeading=this.createPageHeading({HEADING:this.config.TITLE,COMPANY_NAME:this.config.COMPANY_NAME}),this.state.revisionHistory=this.state.revisionHistory.map(function(t){return e.appendPageHeader({page:t,heading:e.state.pageHeading})}),this.state.introduction=this.state.introduction.map(function(t){return e.appendPageHeader({page:t,heading:e.state.pageHeading})}),this.state.introduction=this.addPageFooter(this.state.introduction),this.state.mainContent=this.state.mainContent.map(function(t){return e.appendPageHeader({page:t,heading:e.state.pageHeading})}),this.state.mainContent=this.addPageNumberToElements(this.state.mainContent),this.state.mainContent=this.numberHeadings(this.state.mainContent),this.state.mainContent=this.addPageFooter(this.state.mainContent),this.state.mainContent=this.addResourceLinks(this.state.mainContent),this.state.mainContent=this.addPageNumbers(this.state.mainContent),this.state.tableOfContents=[this.createTableOfContents(this.state.mainContent)],this.state.tableOfContents=this.state.tableOfContents.map(function(t){return e.appendPageHeader({page:t,heading:e.state.pageHeading})}),this.state.tableOfContents=this.addPageFooter(this.state.tableOfContents),this.addTitle(this.config.TITLE),t(this.state)}}]),e}(G),W=n("mtWM"),q=n.n(W),Q=n("RYeZ"),K=n.n(Q),Z=n("5BS9"),X=n.n(Z),tt=n("Rm85"),et=n("+FfA"),nt={name:"Main",beforeMount:function(){var t=localStorage.getItem("CONFIG");if(null!==t){var e=JSON.parse(t);this.config=b()($._.omit(e,"TM_MARKDOWN"),null,4),this.pageConfig=e,this.editConfig=!1,this.buildPages()}},mounted:function(){this.testConfig()},data:function(){return{fillMeInsSuccess:!1,repoSuccess:!1,handleSuccess:!1,jsonSuccess:!1,pageConfig:null,builtPage:null,popoverOpen:!1,hTagIds:[],alertHeading:"",alertVariant:null,dismissSecs:3,dismissCountDown:0,threatModel:"",config:' {\n        "COMPANY_NAME" : "<FILL ME IN>",\n        "PUBLISH_DATE" : "<FILL ME IN>",\n        "DESCRIPTION" : "<FILL ME IN>",\n        "TITLE" : "<FILL ME IN>",\n        "FAVICON" : "<FILL ME IN>",\n        "QUOTE" : "<FILL ME IN>",\n        "HASHTAGS" : "<FILL ME IN>",\n        "MAIN_IMAGE" : "<FILL ME IN>",\n        "REPO_URL" : "https://api.github.com/repos/<YOUR GITHUB HANDLE>/<REPO NAME>/readme",\n        "STYLE" : {\n          "heading-page-background-color" : "#fff",\n          "heading-page-h1-color" : "#2c3e50",\n          "heading-page-h2-color" : "#2c3e50",\n          "heading-page-h3-color" : "#f5922f",\n          "heading-page-h4-color" : "#2c3e50",\n          "heading-page-jumbotron-color" : "#2c3e50",\n          "page-background-color" : "#fff",\n          "page-color" : "#2c3e50",\n          "page-h1-color" : "#f7931a",\n          "page-h2-color" : "#5b5b5b",\n          "page-h3-color" : "#2c3e50",\n          "page-h4-color" : "#2c3e50",\n          "page-bold-color" : "#2c3e50",\n          "page-page-header-background-color" : "#fff2ce",\n          "page-page-header-color" : "#2c3e50",\n          "page-page-footer-background-color" : "#fff2ce",\n          "page-page-footer-color" : "#f7931a",\n          "page-page-footer-resources-color" : "#f7931a"\n        }\n      }',editConfig:!0,alertMessage:""}},computed:{testJson:function(){return X()(this.config)},fillMeInsColor:function(){return this.fillMeInsSuccess?"text-success":"text-danger"},repoColor:function(){return this.repoSuccess?"text-success":"text-danger"},handleColor:function(){return this.handleSuccess?"text-success":"text-danger"},jsonColor:function(){return this.jsonSuccess?"text-success":"text-danger"},headingPage:function(){return this.builtPage.headingPage},introductionPage:function(){return this.builtPage.introduction},revisionHistoryPage:function(){return this.builtPage.revisionHistory},tableOfContentsPage:function(){return this.builtPage.tableOfContents},mainContent:function(){return this.builtPage.mainContent}},methods:{missingAlert:function(){var t="";this.fillMeInsSuccess||(t+="<FILL ME IN>"),this.handleSuccess||(t+="<YOUR GITHUB HANDLE>"),this.repoSuccess||(t+="<REPO NAME>"),this.jsonSuccess||(t+="Invalid JSON"),this.showAlert("Your missing a few things...",t,"danger",20)},copyConfig:function(){if(this.testConfig()){var t=document.getElementById("textarea1");t.select(),document.execCommand("Copy"),this.showAlert(t.value,"Copied to clipboard!","success",5)}else this.missingAlert()},editConfiguration:function(){this.editConfig=!this.editConfig},testRepo:function(){return $._.values($._.pick(JSON.parse(this.config),"REPO_URL")).pop().indexOf("<REPO NAME>")<0},testHandle:function(){return $._.values($._.pick(JSON.parse(this.config),"REPO_URL")).pop().indexOf("<YOUR GITHUB HANDLE>")<0},testFillMeIn:function(t){return t.indexOf("<FILL ME IN>")<0},testFillMeIns:function(){var t=this,e=$._.omit($._.pick(JSON.parse(this.config),["COMPANY_NAME","PUBLISH_DATE","DESCRIPTION","TITLE","FAVICON","QUOTE","HASHTAGS","MAIN_IMAGE"]),function(e){if(t.testFillMeIn(e))return e});return this.fillMeInsSuccess=!m()(e).length,this.fillMeInsSuccess},testConfig:$._.debounce(function(){return this.jsonSuccess=!1,this.fillMeInsSuccess=this.testFillMeIns(),this.repoSuccess=this.testRepo(),this.handleSuccess=this.testHandle(),this.jsonSuccess=this.testJson,this.jsonSuccess&&this.fillMeInsSuccess&&this.repoSuccess&&this.handleSuccess},300),buildPages:function(){var t=this;new V(this.pageConfig).init(function(e){t.builtPage=e,t.processPages(),t.editConfig=!1})},newConfig:function(){this.config=' {\n        "COMPANY_NAME" : "<FILL ME IN>",\n        "PUBLISH_DATE" : "<FILL ME IN>",\n        "DESCRIPTION" : "<FILL ME IN>",\n        "TITLE" : "<FILL ME IN>",\n        "FAVICON" : "<FILL ME IN>",\n        "QUOTE" : "<FILL ME IN>",\n        "HASHTAGS" : "<FILL ME IN>",\n        "MAIN_IMAGE" : "<FILL ME IN>",\n        "REPO_URL" : "https://api.github.com/repos/<YOUR GITHUB HANDLE>/<REPO NAME>/readme",\n        "STYLE" : {\n          "heading-page-background-color" : "#fff",\n          "heading-page-h1-color" : "#2c3e50",\n          "heading-page-h2-color" : "#2c3e50",\n          "heading-page-h3-color" : "#f5922f",\n          "heading-page-h4-color" : "#2c3e50",\n          "heading-page-jumbotron-color" : "#2c3e50",\n          "page-background-color" : "#fff",\n          "page-color" : "#2c3e50",\n          "page-h1-color" : "#f7931a",\n          "page-h2-color" : "#5b5b5b",\n          "page-h3-color" : "#2c3e50",\n          "page-h4-color" : "#2c3e50",\n          "page-bold-color" : "#2c3e50",\n          "page-page-header-background-color" : "#fff2ce",\n          "page-page-header-color" : "#2c3e50",\n          "page-page-footer-background-color" : "#fff2ce",\n          "page-page-footer-color" : "#f7931a",\n          "page-page-footer-resources-color" : "#f7931a"\n        }\n      }',this.editConfig=!0,this.pageConfig=null,this.builtPage=null,localStorage.removeItem("CONFIG")},computeData:function(){var t=this;if(this.testConfig()){var e=JSON.parse(this.config),n=e.REPO_URL;console.log(n),q.a.get(n).then(function(n){t.pageConfig=e;var i=n.data.content;t.pageConfig.TM_MARKDOWN=K.a.decode(i),localStorage.setItem("CONFIG",b()(t.pageConfig)),t.buildPages()}).catch(console.error)}else this.missingAlert()},copyClipboard:function(t){var e=window.location.href.split("#")[0]+"#/"+this.threatModel+"#"+t,n=document.createElement("input");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy",!1),n.remove(),this.showAlert(e,"Copied to clipboard!","success",4)},scrollToo:function(t){y(this,"#"+t)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(t,e,n,i){this.alertHeading=t,this.alertMessage=e,this.alertVariant=n,this.dismissSecs=i,this.dismissCountDown=this.dismissSecs,this.clearClipData(this.dismissSecs)},clearClipData:function(t){var e=this;setTimeout(function(){e.clipboardLink="",e.alertMessage="",e.alertVariant=""},1e3*t)},processPages:function(){var t=this,e=this;setTimeout(function(){var n=_()(".page"),i=window.location.href.split("#").pop();i!=="/"+t.threatModel&&y(t,"#"+i),n.find("img").addClass("img-fluid"),_()(".table-of-contents").find("a").on("click",function(){var t=_()(this).attr("name");y(e,"#"+t)}),n.find("h1, h2, h3, h4").each(function(){var t=_()(this).attr("id");void 0!==t&&e.hTagIds.push(t)});var o=_()(".page:not(:first-child) h1, .page:not(:first-child) h2, .page:not(:first-child) h3, .page:not(:first-child) h4");o.each(function(){_()(this).attr("class","tiny-h-font small-h-font medium-h-font")}),_()("strong").each(function(){_()(this).attr("class","tiny-strong-font small-strong-font medium-strong-font")}),o.each(function(){_()(this).mouseenter(function(){var t=_()(this),e=t.attr("id");"heading-page-header"!==e&&t.before(function(){var n=_()("#social-"+e);t.prepend(n),n.css({display:"inline-block","background-color":t.css("color"),"margin-right":"10px"})})}),_()(this).mouseleave(function(){_()(this).find(".social-zone").css({display:"none"})})})},200)}},components:{Jumbotron:et.a,Pagination:tt.a,Social:S,RightBar:T}},it={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{staticClass:"animated bounceInRight",attrs:{show:t.dismissCountDown,dismissible:"",variant:t.alertVariant},on:{dismissed:function(e){t.dismissCountdown=0},"dismiss-count-down":t.countDownChanged}},[n("p",[t._v(t._s(t.alertHeading))]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v(t._s(t.alertMessage))])])]),t._v(" "),t.editConfig?n("b-jumbotron",{staticClass:"config-jumbotron",attrs:{header:"Create config"}},[n("b-list-group",[n("b-list-group-item",{class:t.fillMeInsColor},[t._v("Replace all the <FILL ME IN> placeholders")]),t._v(" "),n("b-list-group-item",{class:t.handleColor},[t._v("Replace <YOUR GITHUB HANDLE> with valid handle")]),t._v(" "),n("b-list-group-item",{class:t.repoColor},[t._v("Replace <REPO NAME> with repo name")]),t._v(" "),n("b-list-group-item",{class:t.jsonColor},[t._v("Must be valid JSON")]),t._v(" "),n("b-list-group-item",[t._v('Click "Submit" to load page and save config to local storage')])],1),t._v(" "),n("b-button",{on:{click:function(e){t.computeData()}}},[t._v("Submit")]),t._v(" "),n("b-button",{on:{click:function(e){t.newConfig()}}},[t._v("Reset Config")]),t._v(" "),n("b-button",{on:{click:function(e){t.copyConfig()}}},[t._v("Copy Config to Clipboard")]),t._v(" "),n("b-form-textarea",{attrs:{id:"textarea1",state:t.testConfig(),rows:31,"max-rows":100},model:{value:t.config,callback:function(e){t.config=e},expression:"config"}})],1):t._e(),t._v(" "),n("b-button",{class:"config-button",on:{click:function(e){t.editConfiguration()}}},[t._v(t._s(t.editConfig?"Close Config":"Edit Config"))]),t._v(" "),null===t.builtPage?n("jumbotron",{attrs:{header:"Please fill out config",lead:"Click Edit Config at the top of the page"}},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":"../../static/markdown.png","img-alt":"Markdown Symbol","img-top":"",tag:"article"}})],1):n("div",{staticClass:"text-center fadeIn",attrs:{id:"md-app"}},[n("div",{staticClass:"row",attrs:{id:"text-zone"}},[n("div",{attrs:{id:"pages",cols:"12"}},[t._l(t.hTagIds,function(e,i){return n("div",{key:"social:"+i,staticClass:"social-zone",attrs:{id:"social-"+e},on:{click:function(n){t.scrollToo(e)}}},[n("Social",{attrs:{config:t.config,id:e}}),t._v(" "),n("span",[n("i",{staticClass:"fa fa-link",attrs:{title:"Clipboard"},on:{click:function(n){t.copyClipboard(e)}}})])],1)}),t._v(" "),n("div",{attrs:{id:"page-actual"}},[t._l(t.headingPage,function(e,i){return n("b-col",{key:"heading-"+i,staticClass:"page heading medium-font small-font tiny-font",class:"heading-"+i,domProps:{innerHTML:t._s(e)}})}),t._v(" "),t._l(t.introductionPage,function(e,i){return n("b-col",{key:"introduction-"+i,staticClass:"page introduction medium-font small-font tiny-font",class:"introduction-"+i,domProps:{innerHTML:t._s(e)}})}),t._v(" "),t._l(t.revisionHistoryPage,function(e,i){return n("b-col",{key:"revision-"+i,staticClass:"page revision medium-font small-font tiny-font",class:"revision-"+i,domProps:{innerHTML:t._s(e)}})}),t._v(" "),t._l(t.tableOfContentsPage,function(e,i){return n("b-col",{key:"table-of-contents-"+i,staticClass:"page table-of-contents medium-font small-font tiny-font",class:"table-of-contents-"+i,domProps:{innerHTML:t._s(e)}})}),t._v(" "),t._l(t.mainContent,function(e,i){return n("b-col",{key:"page:"+i,staticClass:"page main-content medium-font small-font tiny-font",class:"page-"+i,domProps:{innerHTML:t._s(e)}})})],2)],2),t._v(" "),n("text",{attrs:{id:"clipboardTextDummy"}}),t._v(" "),n("RightBar",{attrs:{threatModel:t.threatModel}})],1)])],1)},staticRenderFns:[]};var ot=n("VU/8")(nt,it,!1,function(t){n("9J7R")},null,null).exports;i.default.use(p.a),i.default.use(s.a),i.default.use(c.a),i.default.component("icon",l.a),i.default.use(u.a),i.default.use(d.a);var at=new s.a({routes:[{path:"/",name:"MdRender",component:ot},{path:"*",redirect:"/"}]});i.default.config.productionTip=!1,new i.default({el:"#app",router:at,template:"<App/>",components:{App:a}})},SuP1:function(t,e){},o4wj:function(t,e){},oPmM:function(t,e){},v2ns:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.aa1c48a3d79e7b5fdb46.js.map