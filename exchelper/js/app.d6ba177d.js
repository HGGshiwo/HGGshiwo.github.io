(function(t){function e(e){for(var s,a,r=e[0],o=e[1],u=e[2],h=0,d=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],s=!0,r=1;r<i.length;r++){var o=i[r];0!==n[o]&&(s=!1)}s&&(c.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},c=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=o;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"23c2":function(t,e,i){t.exports=i.p+"img/do-excise.99607882.png"},"4b0b":function(t,e,i){t.exports=i.p+"img/select-active.7fa752f6.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=i("bc3a"),c=i.n(n),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],o=(i("034f"),i("2877")),u={},l=Object(o["a"])(u,a,r,!1,null,null,null),h=l.exports,d=i("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"home container"},[s("ul",{staticClass:"home exc"},t._l(t.excSetList,(function(e){return s("div",{key:e.name,class:{home:!0,"exc-item":!0,active:e.active},on:{click:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"left",37,i.key,["Left","ArrowLeft"])||"button"in i&&0!==i.button?null:(t.curExcSet.active=!1,e.active=!0,void(t.curExcSet=e))}}},[s("span",{staticClass:"home item-text"},[t._v(t._s(e.name)+" ")]),s("span",{staticClass:"home item-sec-text"},[t._v("作者 "+t._s(e.author))]),s("span",{staticClass:"home item-sec-text"},[t._v("题数 "+t._s(e.num))]),s("span",{staticClass:"home item-sec-text"},[t._v("更新时间 "+t._s(e.lastTime))])])})),0)]),s("div",{staticClass:"tab"},[s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("自选")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("偏好")]),null!=this.curExcSet?s("div",{staticClass:"inner-tab"},[t._v("当前题集 "+t._s(this.curExcSet.name))]):t._e()]),s("ul",{staticClass:"bar"},[s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("4b0b")},on:{click:function(e){return t.toHome()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("23c2")},on:{click:function(e){return t.toDoExcise()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("8615")},on:{click:function(e){return t.toAbout()}}})])])])},p=[],v=i("1da1"),x=(i("96cf"),{name:"Home",data:function(){return{curExcSet:null,excSetList:[]}},mounted:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,this.$axios.get("excset.json").then((function(t){e.push.apply(e,JSON.parse(t.request.responseText))}));case 3:this.excSetList=e,this.curExcSet=e[0];case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{toDoExcise:function(){for(var t=[],e=0;e<this.excSetList.length;e++)this.excSetList[e].active&&t.push(this.excSetList[e]);this.$router.push({name:"do-excise",params:{data:JSON.stringify(t)}})},toHome:function(){location.reload()},toAbout:function(){}}}),m=x,b=(i("cccb"),Object(o["a"])(m,f,p,!1,null,null,null)),g=b.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{}},[s("div",{staticClass:"container"},[s("ul",{staticStyle:{padding:"0px",margin:"0px"}},t._l(this.excList,(function(e){return s("div",{key:e.id,staticClass:"exc"},[s("span",{staticClass:"exc-text"},[s("span",{staticStyle:{"margin-right":"1%"}},[t._v(t._s(e.id))]),s("span",[t._v(t._s(e.text))])]),s("ul",{staticStyle:{padding:"0"}},t._l(e.choices,(function(i){return s("div",{key:i.id,class:{choice:!0,active:i.active},on:{click:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&0!==s.button?null:void(i.active=e.submit?i.active:!i.active)},contextmenu:function(s){e.submit&&i.active?(e.submit=!e.submit,t.handleReset(e)):!e.submit&&i.active?(e.submit=!e.submit,t.handleSubmit(e)):e.submit||i.active||(e.submit=!e.submit,i.active=!0,t.handleSubmit(e))}}},[s("span",{staticClass:"choice-id"},[t._v(t._s(i.id))]),s("span",{staticClass:"choice-text"},[t._v(t._s(i.text))])])})),0),s("div",{class:t.clacResultStyle(e)},[t._v(" 答案 "),e.submit?s("span",[t._v(t._s(e.key.join(",")))]):t._e()])])})),0),s("div",{staticStyle:{height:"25px",width:"100%"}})]),s("div",{staticClass:"tab"},[s("div",{staticClass:"inner-tab"},[t._v("题集 "+t._s(this.$data.curSet)+" ")]),s("div",{staticClass:"inner-tab"},[t._v("题号 "+t._s(this.$data.curExc)+" ")]),s("div",{staticClass:"inner-tab"},[t._v("正确率 "+t._s(t.calcCorRate())+" ")]),s("div",{staticClass:"inner-tab"},[t._v("开始 "+t._s(("00"+this.startHour.toString()).slice(-2)+":"+("00"+this.startMim.toString()).slice(-2))+" ")]),s("div",{staticClass:"inner-tab"},[t._v("时长 "+t._s(this.dTime)+" ")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("刷题模式")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"},on:{click:t.submitAll}},[t._v("提交")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"},on:{click:t.resetAll}},[t._v("重做")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"},on:{click:t.onSearch}},[t._v("搜索")])]),s("ul",{staticClass:"bar"},[s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("aa42")},on:{click:function(e){return t.toHome()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("ca94")},on:{click:function(e){return t.toDoExcise()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:i("8615")},on:{click:function(e){return t.toAbout()}}})])])])},y=[],_=(i("fb6a"),i("d3b7"),i("25f0"),i("b0c0"),i("b680"),i("a434"),{name:"DoExcise",data:function(){var t=this,e=new Date;return{curSet:null,curExc:0,corList:[],doneList:[],excList:[],startHour:e.getHours(),startMim:e.getMinutes(),dTime:"00:00",timer:setInterval((function(){var e=new Date,i=e.getHours()-t.startHour,s=e.getMinutes()-t.startMim;s<0&&(s+=60,i-=1),t.dTime=("00"+i.toString()).slice(-2)+":"+("00"+s.toString()).slice(-2)}),1e3)}},mounted:function(){var t=JSON.parse(this.$route.params.data);this.curSet=t[0].name;var e=localStorage.getItem(this.curSet);console.log(e);var i=[];if(e){var s=JSON.parse(e);this.curExc=s.curExc,this.corList=s.corList,this.doneList=s.doneList,this.excList=s.excList}else this.$axios.get(t[0].path).then((function(t){var e=JSON.parse(t.request.responseText);i.push.apply(i,e)})),this.excList=i},beforeDestroy:function(){this.timer&&clearInterval(this.timer);var t={};t.curExc=this.curExc,t.excList=this.excList,t.corList=this.corList,t.doneList=this.doneList,console.log(this.curSet),localStorage.setItem(this.curSet,JSON.stringify(t))},methods:{toAbout:function(){},calcCorRate:function(){var t=0;return 0!=this.$data.doneList.length&&(t=this.$data.corList.length/this.$data.doneList.length),t.toFixed(2)},submitAll:function(){for(var t=0;t<this.$data.excList.length;t++){for(var e=!1,i=0;i<this.excList[t].choices.length;i++)if(this.excList[t].choices[i].active){e=!0;break}e&&(this.excList[t].submit=!0,this.handleSubmit(this.excList[t]))}},resetAll:function(){for(var t=0;t<this.excList.length;t++){this.excList[t].submit=!1;for(var e=0;e<this.excList[t].choices.length;e++)this.excList[t].choices[e].active=!1;this.handleReset(this.excList[t])}},onSearch:function(){alert("未实现搜索功能。")},toDoExcise:function(){location.reload()},toHome:function(){this.$router.push({path:"/"})},clacResultStyle:function(t){if(!t.submit)return{result:!0,wrong:!1,correct:!1};for(var e=0,i=0;i<t.choices.length;i++)if(t.choices[i].active){if(-1==t.key.indexOf(t.choices[i].id))return{result:!0,wrong:!0,correct:!1};e++}return e!=t.key.length?{result:!0,wrong:!0,correct:!1}:{result:!0,wrong:!1,correct:!0}},handleSubmit:function(t){this.$data.curExc=t.id,this.$data.doneList.push(t.id);for(var e=0,i=0;i<t.choices.length;i++)if(t.choices[i].active){if(-1==t.key.indexOf(t.choices[i].id))return;e++}e==t.key.length&&this.$data.corList.push(t.id)},handleReset:function(t){var e=this.doneList.indexOf(t.id);-1!=e&&this.doneList.splice(e,1);var i=this.corList.indexOf(t.id);-1!=i&&this.corList.splice(i,1)}}}),L=_,C=(i("91f4"),Object(o["a"])(L,S,y,!1,null,null,null)),k=C.exports;s["a"].use(d["a"]);var w=[{path:"/",name:"Home",component:g},{path:"/do-excise/:data",name:"do-excise",component:k}],O=new d["a"]({routes:w}),E=O;s["a"].prototype.$axios=c.a,s["a"].config.productionTip=!1,new s["a"]({router:E,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,i){},7281:function(t,e,i){},"85ec":function(t,e,i){},8615:function(t,e,i){t.exports=i.p+"img/about.b9bed6bd.png"},"91f4":function(t,e,i){"use strict";i("7281")},aa42:function(t,e,i){t.exports=i.p+"img/select.8eded2ba.png"},ca94:function(t,e,i){t.exports=i.p+"img/do-excise-active.2b87e827.png"},cccb:function(t,e,i){"use strict";i("5ced")}});
//# sourceMappingURL=app.d6ba177d.js.map