(function(t){function i(i){for(var s,n,r=i[0],o=i[1],l=i[2],h=0,d=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(i);while(d.length)d.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,i=0;i<c.length;i++){for(var e=c[i],s=!0,r=1;r<e.length;r++){var o=e[r];0!==a[o]&&(s=!1)}s&&(c.splice(i--,1),t=n(n.s=e[0]))}return t}var s={},a={app:0},c=[];function n(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)n.d(e,s,function(i){return t[i]}.bind(null,s));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var u=o;c.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";e("85ec")},"23c2":function(t,i,e){t.exports=e.p+"img/do-excise.99607882.png"},"4b0b":function(t,i,e){t.exports=e.p+"img/select-active.7fa752f6.png"},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),a=e("bc3a"),c=e.n(a),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],o=(e("034f"),e("2877")),l={},u=Object(o["a"])(l,n,r,!1,null,null,null),h=u.exports,d=e("8c4f"),f=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("ul",{staticClass:"bar"},[s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("4b0b")},on:{click:function(i){return t.toHome()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("23c2")},on:{click:function(i){return t.toDoExcise()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("8615")},on:{click:function(i){return t.toAbout()}}})])]),s("div",{staticClass:"container"},[s("ul",{staticClass:"home exc"},t._l(t.excSetList,(function(i){return s("div",{key:i.name,class:{home:!0,"exc-item":!0,active:i.active},on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:(t.curExcSet.active=!1,i.active=!0,void(t.curExcSet=i))}}},[s("span",{staticClass:"home item-text"},[t._v(t._s(i.name)+" ")]),s("span",{staticClass:"home item-sec-text"},[t._v("作者 "+t._s(i.author))]),s("span",{staticClass:"home item-sec-text"},[t._v("题数 "+t._s(i.num))]),s("span",{staticClass:"home item-sec-text"},[t._v("更新时间 "+t._s(i.lastTime))])])})),0)]),s("div",{staticClass:"tab"},[s("div",{staticClass:"inner-tab",staticStyle:{float:"left",cursor:"pointer"},on:{click:t.fresh}},[t._v("更新")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("自选")]),null!=this.curExcSet?s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("当前题集 "+t._s(this.curExcSet.name))]):t._e()])])},p=[],v=e("1da1"),x=(e("96cf"),{name:"Home",data:function(){return{curExcSet:null,excSetList:[]}},mounted:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=[],t.next=3,this.$axios.get("excset.json").then((function(t){i.push.apply(i,JSON.parse(t.request.responseText))}));case 3:this.excSetList=i,this.curExcSet=i[0];case 5:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),methods:{toDoExcise:function(){this.$router.push({name:"do-excise",params:{data:JSON.stringify(this.curExcSet)}})},toHome:function(){location.reload()},toAbout:function(){this.$router.push({name:"about",params:{data:JSON.stringify(this.curExcSet)}})},fresh:function(){}}}),m=x,b=(e("cccb"),Object(o["a"])(m,f,p,!1,null,null,null)),g=b.exports,_=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("ul",{staticClass:"bar"},[s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("aa42")},on:{click:function(i){return t.toHome()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("ca94")},on:{click:function(i){return t.toDoExcise()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("8615")},on:{click:function(i){return t.toAbout()}}})])]),s("div",{staticClass:"container"},[s("ul",{staticClass:"exc"},t._l(this.excList,(function(i){return s("div",{key:i.id,staticClass:"exc-item"},[s("a",{attrs:{id:i.id}}),s("span",{staticClass:"exc-text"},[s("span",{staticStyle:{"margin-right":"1%"}},[t._v(t._s(i.id))]),s("span",[t._v(t._s(i.text))])]),s("ul",{staticStyle:{padding:"0"}},t._l(i.choices,(function(e){return s("div",{key:e.id,class:{choice:!0,active:e.active},on:{click:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&0!==s.button?null:(e.active=i.submit?e.active:!e.active,void(i.submit||t.checkChooseLogic(i,e)))},contextmenu:function(s){i.submit&&e.active?(i.submit=!i.submit,t.handleReset(i)):!i.submit&&e.active?(i.submit=!i.submit,t.handleSubmit(i)):i.submit||e.active||(i.submit=!i.submit,e.active=!0,t.checkChooseLogic(i,e),t.handleSubmit(i))}}},[s("span",{staticClass:"choice-id"},[t._v(t._s(e.id))]),s("span",{staticClass:"choice-text"},[t._v(t._s(e.text))])])})),0),s("div",{class:t.clacResultStyle(i)},[t._v(" 答案 "),i.submit?s("span",[t._v(t._s(i.key.join(",")))]):t._e()])])})),0),s("div",{staticStyle:{height:"25px",width:"100%"}})]),s("div",{staticClass:"tab"},[s("div",{staticClass:"inner-tab",staticStyle:{float:"left",cursor:"pointer"},on:{click:t.submitAll}},[t._v("提交")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"left",cursor:"pointer"},on:{click:t.resetAll}},[t._v("重做")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"left",cursor:"pointer"},on:{click:t.toCurExc}},[t._v("当前")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("刷题模式")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("正确率 "+t._s(t.calcCorRate())+" ")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("开始 "+t._s(("00"+this.startHour.toString()).slice(-2)+":"+("00"+this.startMim.toString()).slice(-2))+" ")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("时长 "+t._s(this.dTime)+" ")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("题号 "+t._s(this.$data.curExc)+" ")]),s("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("题集 "+t._s(this.$data.curSet)+" ")])])])},y=[],S=(e("fb6a"),e("d3b7"),e("25f0"),e("b0c0"),e("b680"),e("a434"),{name:"DoExcise",data:function(){var t=this,i=new Date;return{curSet:null,curExc:0,corList:[],doneList:[],excList:[],startHour:i.getHours(),startMim:i.getMinutes(),dTime:"00:00",timer:setInterval((function(){var i=new Date,e=i.getHours()-t.startHour,s=i.getMinutes()-t.startMim;s<0&&(s+=60,e-=1),t.dTime=("00"+e.toString()).slice(-2)+":"+("00"+s.toString()).slice(-2)}),1e3)}},mounted:function(){var t=JSON.parse(this.$route.params.data);this.curSet=t.name;var i=localStorage.getItem(this.curSet);console.log(i);var e=[];if(i){var s=JSON.parse(i);this.curExc=s.curExc,this.corList=s.corList,this.doneList=s.doneList,this.excList=s.excList}else this.$axios.get(t.path).then((function(t){var i=JSON.parse(t.request.responseText);e.push.apply(e,i)})),this.excList=e},beforeDestroy:function(){this.timer&&clearInterval(this.timer);var t={};t.curExc=this.curExc,t.excList=this.excList,t.corList=this.corList,t.doneList=this.doneList,console.log(this.curSet),localStorage.setItem(this.curSet,JSON.stringify(t))},methods:{calcCorRate:function(){var t=0;return 0!=this.$data.doneList.length&&(t=this.$data.corList.length/this.$data.doneList.length),t.toFixed(2)},submitAll:function(){for(var t=0;t<this.$data.excList.length;t++){for(var i=!1,e=0;e<this.excList[t].choices.length;e++)if(this.excList[t].choices[e].active){i=!0;break}i&&(this.excList[t].submit=!0,this.handleSubmit(this.excList[t]))}},resetAll:function(){for(var t=0;t<this.excList.length;t++){this.excList[t].submit=!1;for(var i=0;i<this.excList[t].choices.length;i++)this.excList[t].choices[i].active=!1;this.handleReset(this.excList[t])}},toCurExc:function(){window.location.hash="#"+String(this.curExc)},checkChooseLogic:function(t,i){if(1==t.key.length)for(var e=0;e<t.choices.length;e++)t.choices[e].id!=i.id&&(t.choices[e].active=!1)},toDoExcise:function(){location.reload()},toHome:function(){this.$router.push({path:"/"})},toAbout:function(){this.$router.push({name:"about",params:this.$route.params.data})},clacResultStyle:function(t){if(!t.submit)return{result:!0,wrong:!1,correct:!1};for(var i=0,e=0;e<t.choices.length;e++)if(t.choices[e].active){if(-1==t.key.indexOf(t.choices[e].id))return{result:!0,wrong:!0,correct:!1};i++}return i!=t.key.length?{result:!0,wrong:!0,correct:!1}:{result:!0,wrong:!1,correct:!0}},handleSubmit:function(t){this.$data.curExc=t.id,this.$data.doneList.push(t.id);for(var i=0,e=0;e<t.choices.length;e++)if(t.choices[e].active){if(-1==t.key.indexOf(t.choices[e].id))return;i++}i==t.key.length&&this.$data.corList.push(t.id)},handleReset:function(t){var i=this.doneList.indexOf(t.id);-1!=i&&this.doneList.splice(i,1);var e=this.corList.indexOf(t.id);-1!=e&&this.corList.splice(e,1)}}}),C=S,L=(e("91f4"),Object(o["a"])(C,_,y,!1,null,null,null)),w=L.exports,k=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t._m(0),t._m(1),s("ul",{staticClass:"bar"},[s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("aa42")},on:{click:function(i){return t.toHome()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("23c2")},on:{click:function(i){return t.toDoExcise()}}})]),s("div",{staticClass:"inner-bar"},[s("img",{staticStyle:{width:"35px",height:"35px"},attrs:{src:e("94b6")},on:{click:function(i){return t.toAbout()}}})])])])},E=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"about container"},[s("div",{staticClass:"text hello"},[t._v("你好, ExcHelper")]),s("div",{staticClass:"text",staticStyle:{"padding-left":"30%","padding-top":"50px"}},[s("div",[s("img",{staticStyle:{height:"30px",width:"30px",float:"left","margin-right":"0.5%"},attrs:{src:e("aa42")}}),s("div",{staticClass:"text h2"},[t._v("自选")])]),s("ul",[s("li",{staticClass:"about list"},[t._v("在自选界面选择题库，当前只支持选择一个题库")]),s("li",{staticClass:"about list"},[t._v("点击右侧导航栏的刷题进入刷题模式")])]),s("div",{staticStyle:{"margin-top":"40px"}},[s("img",{staticStyle:{height:"30px",width:"30px",float:"left","margin-right":"0.5%"},attrs:{src:e("23c2")}}),s("div",{staticClass:"text h2"},[t._v("刷题")])]),s("ul",[s("li",{staticClass:"about list"},[t._v("在刷题界面，左键点击选项选择，再次点击取消选择")]),s("li",{staticClass:"about list"},[t._v("右键点击选项提交答案，注意：被点击的选项也会被选择")]),s("li",{staticClass:"about list"},[t._v("选项提交后将会显示答案。")]),s("li",{staticClass:"about list"},[t._v("对于已经提交的选项，支持右键点击被选择的选项，取消提交")]),s("li",{staticClass:"about list"},[t._v("点击页面下方工具栏中重做，取消所有提交")]),s("li",{staticClass:"about list"},[t._v("点击页面下方工具栏中提交，提交所有选项")]),s("li",{staticClass:"about list"},[t._v("使用同一个浏览器，保存最近一次的做题记录。")])]),s("div",{staticStyle:{"margin-top":"40px"}},[s("img",{staticStyle:{height:"30px",width:"30px",float:"left","margin-right":"0.5%"},attrs:{src:e("8615")}}),s("div",{staticClass:"text h2"},[t._v("相关")]),s("ul",[s("li",{staticClass:"about list"},[t._v("使用介绍和其他")])])])]),s("nav",{staticStyle:{"margin-top":"100px"}},[s("a",{staticClass:"contact",attrs:{href:"mailto:1272126735@qq.com"}},[t._v("联系作者")]),s("span",{staticClass:"contact"},[t._v("|")]),s("a",{staticClass:"contact",attrs:{href:"https://github.com/HGGshiwo/exchelper2"}},[t._v("项目地址")]),s("span",{staticClass:"contact"},[t._v("|")]),s("a",{staticClass:"contact",attrs:{href:"http://www.cc98.org/user/id/632571"}},[t._v("CC98")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tab"},[e("div",{staticClass:"inner-tab",staticStyle:{float:"right"}},[t._v("关于")])])}],O={methods:{toDoExcise:function(){this.$router.push({name:"do-excise",params:this.$route.params.data})},toHome:function(){this.$router.push({path:"/"})},toAbout:function(){location.reload()}}},$=O,j=(e("e76e"),Object(o["a"])($,k,E,!1,null,null,null)),H=j.exports;s["a"].use(d["a"]);var A=[{path:"/",name:"home",component:g},{path:"/do-excise/:data",name:"do-excise",component:w},{path:"/about/:data",name:"about",component:H}],D=new d["a"]({routes:A}),J=D;s["a"].prototype.$axios=c.a,s["a"].config.productionTip=!1,new s["a"]({router:J,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,i,e){},7281:function(t,i,e){},"85ec":function(t,i,e){},8615:function(t,i,e){t.exports=e.p+"img/about.b9bed6bd.png"},"91aa":function(t,i,e){},"91f4":function(t,i,e){"use strict";e("7281")},"94b6":function(t,i,e){t.exports=e.p+"img/about-active.f82c6e0a.png"},aa42:function(t,i,e){t.exports=e.p+"img/select.8eded2ba.png"},ca94:function(t,i,e){t.exports=e.p+"img/do-excise-active.2b87e827.png"},cccb:function(t,i,e){"use strict";e("5ced")},e76e:function(t,i,e){"use strict";e("91aa")}});
//# sourceMappingURL=app.e86830c6.js.map