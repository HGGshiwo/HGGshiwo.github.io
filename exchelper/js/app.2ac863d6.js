(function(e){function t(t){for(var i,n,o=t[0],a=t[1],l=t[2],u=0,O=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&O.push(s[n][0]),s[n]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);b&&b(t);while(O.length)O.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],i=!0,o=1;o<c.length;o++){var a=c[o];0!==s[a]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=c[0]))}return e}var i={},s={app:0},r=[];function n(t){if(i[t])return i[t].exports;var c=i[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=i,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(c,i,function(t){return e[t]}.bind(null,i));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var b=a;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"150e":function(e,t,c){"use strict";c("37af")},"37af":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);var i=c("7a23"),s=c("1250");c("7437");function r(e,t,c,s,r,n){const o=Object(i["T"])("user-filled"),a=Object(i["T"])("user"),l=Object(i["T"])("el-icon"),b=Object(i["T"])("el-menu-item"),u=Object(i["T"])("goods-filled"),O=Object(i["T"])("goods"),j=Object(i["T"])("more-filled"),h=Object(i["T"])("more"),d=Object(i["T"])("el-menu"),p=Object(i["T"])("el-aside"),m=Object(i["T"])("exc-page"),f=Object(i["T"])("el-main"),x=Object(i["T"])("user-page"),y=Object(i["T"])("shop-page"),g=Object(i["T"])("more-page"),v=Object(i["T"])("el-container");return Object(i["M"])(),Object(i["k"])(v,null,{default:Object(i["ib"])(()=>[Object(i["r"])(p,{style:{width:"60px",position:"fixed"}},{default:Object(i["ib"])(()=>[Object(i["r"])(d,null,{default:Object(i["ib"])(()=>[Object(i["r"])(b,{onClick:t[0]||(t[0]=e=>n.toUser())},{default:Object(i["ib"])(()=>[Object(i["r"])(l,{size:20},{default:Object(i["ib"])(()=>["user"==this.$store.state.curPage?(Object(i["M"])(),Object(i["k"])(o,{key:0})):(Object(i["M"])(),Object(i["k"])(a,{key:1}))]),_:1})]),_:1}),Object(i["r"])(b,{onClick:t[1]||(t[1]=e=>n.toShop())},{default:Object(i["ib"])(()=>[Object(i["r"])(l,{size:20},{default:Object(i["ib"])(()=>["shop"==this.$store.state.curPage?(Object(i["M"])(),Object(i["k"])(u,{key:0})):(Object(i["M"])(),Object(i["k"])(O,{key:1}))]),_:1})]),_:1}),Object(i["r"])(b,{onClick:t[2]||(t[2]=e=>n.toMore())},{default:Object(i["ib"])(()=>[Object(i["r"])(l,{size:20},{default:Object(i["ib"])(()=>["more"==this.$store.state.curPage?(Object(i["M"])(),Object(i["k"])(j,{key:0})):(Object(i["M"])(),Object(i["k"])(h,{key:1}))]),_:1})]),_:1})]),_:1})]),_:1}),"exc"==this.$store.state.curPage?(Object(i["M"])(),Object(i["k"])(f,{key:0},{default:Object(i["ib"])(()=>[Object(i["r"])(m)]),_:1})):"user"==this.$store.state.curPage?(Object(i["M"])(),Object(i["k"])(f,{key:1},{default:Object(i["ib"])(()=>[Object(i["r"])(x)]),_:1})):"shop"==this.$store.state.curPage?(Object(i["M"])(),Object(i["k"])(f,{key:2},{default:Object(i["ib"])(()=>[Object(i["r"])(y)]),_:1})):(Object(i["M"])(),Object(i["k"])(f,{key:3},{default:Object(i["ib"])(()=>[Object(i["r"])(g)]),_:1}))]),_:1})}var n=c("5175"),o=c("d382"),a=c("5344"),l=c("236d"),b=c("59e0"),u=c("5f12");const O={class:"title"},j=["id"],h={style:{"white-space":"pre-wrap"}},d=["onClick","onContextmenu"],p={style:{"white-space":"pre-wrap"}},m={key:1,class:Object(i["B"])({choice:!0})},f=Object(i["n"])("span",null,"答案",-1),x=[f],y={class:"bar"};function g(e,t,c,s,r,n){const o=Object(i["T"])("el-divider"),a=Object(i["T"])("el-card"),l=Object(i["T"])("el-button"),b=Object(i["T"])("el-progress"),u=Object(i["T"])("el-collapse-transition"),f=Object(i["T"])("el-container");return Object(i["M"])(),Object(i["k"])(f,{direction:"vertical"},{default:Object(i["ib"])(()=>[Object(i["r"])(o,{"content-position":"left"},{default:Object(i["ib"])(()=>[Object(i["n"])("span",O,Object(i["X"])(this.$store.state.myExcSet[this.$store.state.curExcSet].name),1)]),_:1}),(Object(i["M"])(!0),Object(i["m"])(i["b"],null,Object(i["R"])(this.curExcList,(e,t)=>(Object(i["M"])(),Object(i["m"])("div",{id:t,key:t},[Object(i["r"])(a,null,{default:Object(i["ib"])(()=>[Object(i["n"])("span",h,Object(i["X"])(e.id)+"  "+Object(i["X"])(e.text),1),Object(i["r"])(o,{style:{"margin-bottom":"0"}}),(Object(i["M"])(!0),Object(i["m"])(i["b"],null,Object(i["R"])(e.choices,(t,c)=>(Object(i["M"])(),Object(i["m"])("div",{class:Object(i["B"])({choice:!0,active:t.active}),key:c,onClick:Object(i["lb"])(c=>n.clickLeft(t,e),["left"]),onContextmenu:Object(i["lb"])(c=>n.clickRight(t,e),["right"])},[Object(i["n"])("span",p,Object(i["X"])(t.id)+" "+Object(i["X"])(t.text),1)],42,d))),128)),e.submit?(Object(i["M"])(),Object(i["m"])("div",{key:0,class:Object(i["B"])(n.clacResultStyle(e))},"答案 "+Object(i["X"])(e.key.join(" ")),3)):(Object(i["M"])(),Object(i["m"])("div",m,x))]),_:2},1024)],8,j))),128)),Object(i["n"])("div",y,[Object(i["n"])("div",null,[Object(i["r"])(l,{circle:"",icon:"el-icon-circle-check",type:"primary",style:{margin:"5px"},onClick:t[0]||(t[0]=e=>n.submitAll())})]),Object(i["n"])("div",null,[Object(i["r"])(l,{circle:"",icon:"el-icon-refresh-right",type:"primary",style:{margin:"5px"},onClick:t[1]||(t[1]=e=>n.resetAll())})]),Object(i["n"])("div",null,[Object(i["r"])(l,{circle:"",icon:"el-icon-thumb",type:"primary",style:{margin:"5px"},onClick:t[2]||(t[2]=e=>n.toCur())})]),Object(i["n"])("div",null,[Object(i["r"])(l,{circle:"",icon:"el-icon-more",type:"primary",style:{margin:"5px"},onClick:t[3]||(t[3]=e=>this.hidden=!this.hidden)})]),Object(i["r"])(u,null,{default:Object(i["ib"])(()=>[Object(i["jb"])(Object(i["n"])("div",null,[Object(i["n"])("div",null,[Object(i["r"])(b,{style:{"margin-top":"10px"},type:"circle",percentage:Math.round(this.span%60/60*1e3)/10,width:100},{default:Object(i["ib"])(()=>[Object(i["q"])(Object(i["X"])(this.stdSpan),1)]),_:1},8,["percentage"])]),Object(i["n"])("div",null,[Object(i["r"])(b,{style:{"margin-top":"10px"},type:"circle",percentage:this.correctRate,status:"success",width:100},{default:Object(i["ib"])(()=>[Object(i["q"])(Object(i["X"])(this.correctRate)+"%",1)]),_:1},8,["percentage"])])],512),[[i["fb"],!this.hidden]])]),_:1})])]),_:1})}var v=c("4995"),S={components:{ElMessage:v["a"]},data:function(){return{curExcList:[],corList:[],doneList:[],curExc:0,span:0,hidden:!0,timer:setInterval(()=>{this.span+=1},1e3)}},beforeUnmount(){this.timer&&clearInterval(this.timer),this.save()},mounted:async function(){var e=this.$store.state.myExcSet[this.$store.state.curExcSet],t=localStorage.getItem(e.name),c=[];if(t){var i=JSON.parse(t);this.curExc=i.curExc,this.corList=i.corList,this.doneList=i.doneList,this.curExcList=i.curExcList}else await this.$axios.get(e.path).then(e=>{var t=JSON.parse(e.request.responseText);c.push.apply(c,t)}),this.curExcList=c},methods:{save(){this.$store.commit("updateDone",this.doneList.length);var e={};e.curExc=this.curExc,e.curExcList=this.curExcList,e.corList=this.corList,e.doneList=this.doneList;var t=this.$store.state.myExcSet[this.$store.state.curExcSet];localStorage.setItem(t.name,JSON.stringify(e))},toCur(){window.location.hash="#"+String(this.curExc)},checkChooseLogic(e,t){if(1==e.key.length)for(var c=0;c<e.choices.length;c++)e.choices[c].id!=t.id&&(e.choices[c].active=!1)},handleSubmit(e){this.$data.curExc=e.id,this.$data.doneList.push(e.id);for(var t=0,c=0;c<e.choices.length;c++)if(e.choices[c].active){if(-1==e.key.indexOf(e.choices[c].id))return;t++}t==e.key.length&&this.$data.corList.push(e.id)},handleReset(e){var t=this.doneList.indexOf(e.id);-1!=t&&this.doneList.splice(t,1);var c=this.corList.indexOf(e.id);-1!=c&&this.corList.splice(c,1)},clacResultStyle(e){if(!e.submit)return{choice:!0,wrong:!1,correct:!1};for(var t=0,c=0;c<e.choices.length;c++)if(e.choices[c].active){if(-1==e.key.indexOf(e.choices[c].id))return{choice:!0,wrong:!0,correct:!1};t++}return t!=e.key.length?{choice:!0,wrong:!0,correct:!1}:{choice:!0,wrong:!1,correct:!0}},clickLeft(e,t){e.active=t.submit?e.active:!e.active,t.submit||this.checkChooseLogic(t,e)},clickRight(e,t){t.submit&&e.active?(t.submit=!t.submit,this.handleReset(t)):!t.submit&&e.active?(t.submit=!t.submit,this.handleSubmit(t)):t.submit||e.active||(t.submit=!t.submit,e.active=!0,this.checkChooseLogic(t,e),this.handleSubmit(t))},submitAll(){for(var e in this.curExcList){var t=!1;for(var c in this.curExcList[e].choices)if(this.curExcList[e].choices[c].active){t=!0;break}t&&(this.curExcList[e].submit=!0,this.handleSubmit(this.curExcList[e]))}this.save(),v["a"].success({message:"提交成功!",type:"success"})},resetAll(){for(var e in this.curExcList){for(var t in this.curExcList[e].submit=!1,this.curExcList[e].choices)this.curExcList[e].choices[t].active=!1;this.handleReset(this.curExcList[e])}this.save(),v["a"].success({message:"重置成功!",type:"success"})}},computed:{correctRate(){return this.doneList.length?Math.round(this.corList.length/this.doneList.length*1e3)/10:0},stdSpan(){return("00"+Math.floor(this.span/360).toString()).slice(-2)+":"+("00"+Math.floor(this.span/60).toString()).slice(-2)+":"+("00"+(this.span%60).toString()).slice(-2)}}};c("b116");S.render=g;var E=S;const k={style:{"text-align":"center",width:"100%"}},M=Object(i["n"])("div",{class:"main-title"},[Object(i["n"])("i",{class:"el-icon-s-promotion"}),Object(i["q"])("一个新的框架!")],-1),_=Object(i["n"])("div",null,[Object(i["n"])("i",{class:"el-icon-goods",style:{"font-size":"20px"}}),Object(i["q"])("题库选择")],-1),L=Object(i["n"])("ul",{style:{"text-align":"left","line-height":"2"}},[Object(i["n"])("li",null,"根据信息选择题集!"),Object(i["n"])("li",null,"将题集加入您的收藏!")],-1),T=Object(i["n"])("div",null,[Object(i["n"])("i",{class:"el-icon-user",style:{"font-size":"20px"}}),Object(i["q"])("个人收藏")],-1),$=Object(i["n"])("ul",{style:{"text-align":"left","line-height":"2"}},[Object(i["n"])("li",null,"显示收藏的题库做题进度"),Object(i["n"])("li",null,"点击做题，开始做题!"),Object(i["n"])("li",null,"点击删除，删除题集"),Object(i["n"])("li",null,"点击刷新，更新题集")],-1),w=Object(i["n"])("div",null,[Object(i["n"])("i",{class:"el-icon-edit",style:{"font-size":"20px"}}),Object(i["q"])("开始做题")],-1),C=Object(i["n"])("ul",{style:{"text-align":"left","line-height":"2"}},[Object(i["n"])("li",null,"点击确定，全部提交!"),Object(i["n"])("li",null,"点击刷新，全部取消提交!"),Object(i["n"])("li",null,"点击更多，查看时间和正确率"),Object(i["n"])("li",null,"左键选项进行选择，右键选项进行提交, 再次右键取消提交!")],-1),P=Object(i["p"])('<nav style="margin-top:100px;"><a class="contact" href="mailto:1272126735@qq.com">联系作者</a><span class="contact">|</span><a class="contact" href="https://github.com/HGGshiwo/exchelper2">项目地址</a><span class="contact">|</span><a class="contact" href="http://www.cc98.org/user/id/632571">CC98</a></nav>',1);function q(e,t,c,s,r,n){const o=Object(i["T"])("el-divider"),a=Object(i["T"])("el-card"),l=Object(i["T"])("el-space");return Object(i["M"])(),Object(i["m"])("div",k,[M,Object(i["r"])(l,{size:100,style:{"font-size":"18px"}},{default:Object(i["ib"])(()=>[Object(i["r"])(a,{style:{width:"300px",height:"400px"}},{default:Object(i["ib"])(()=>[_,Object(i["r"])(o),L]),_:1}),Object(i["r"])(a,{style:{width:"300px",height:"400px"}},{default:Object(i["ib"])(()=>[T,Object(i["r"])(o),$]),_:1}),Object(i["r"])(a,{style:{width:"300px",height:"400px"}},{default:Object(i["ib"])(()=>[w,Object(i["r"])(o),C]),_:1})]),_:1}),P])}var R={};c("e2b0");R.render=q;var X=R;const J=Object(i["n"])("span",{class:"title"},"商店",-1),N=Object(i["n"])("br",null,null,-1),z=Object(i["n"])("br",null,null,-1);function I(e,t,c,s,r,n){const o=Object(i["T"])("el-divider"),a=Object(i["T"])("el-space"),l=Object(i["T"])("el-button"),b=Object(i["T"])("el-card"),u=Object(i["T"])("el-container");return Object(i["M"])(),Object(i["k"])(u,{direction:"vertical"},{default:Object(i["ib"])(()=>[Object(i["r"])(o,{"content-position":"left"},{default:Object(i["ib"])(()=>[J]),_:1}),Object(i["r"])(a,{wrap:""},{default:Object(i["ib"])(()=>[(Object(i["M"])(!0),Object(i["m"])(i["b"],null,Object(i["R"])(this.$store.state.allExcSet,(e,t)=>(Object(i["M"])(),Object(i["k"])(b,{class:"box-card",key:t},{default:Object(i["ib"])(()=>[Object(i["r"])(a,{class:"title"},{default:Object(i["ib"])(()=>[Object(i["q"])(Object(i["X"])(e.name),1)]),_:2},1024),Object(i["r"])(o),Object(i["r"])(a,{class:"subtitle",style:{"margin-top":"0px"}},{default:Object(i["ib"])(()=>[Object(i["q"])("作者: "+Object(i["X"])(e.author),1)]),_:2},1024),N,Object(i["r"])(a,{class:"subtitle"},{default:Object(i["ib"])(()=>[Object(i["q"])("题数: "+Object(i["X"])(e.total),1)]),_:2},1024),z,Object(i["r"])(a,{class:"subtitle"},{default:Object(i["ib"])(()=>[Object(i["q"])("更新: "+Object(i["X"])(e.update),1)]),_:2},1024),Object(i["r"])(a,{style:{"margin-top":"30px"}},{default:Object(i["ib"])(()=>[Object(i["r"])(l,{circle:"",icon:"el-icon-star-off",style:{"margin-right":"20px"},type:"primary",onClick:t=>n.addExcSet(e)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var A={mounted:async function(){var e;await this.$axios.get("excset.json").then(t=>{e=JSON.parse(t.request.responseText)}),this.$store.commit("setAllExcSet",e)},components:{ElMessage:v["a"]},methods:{addExcSet:function(e){for(var t in this.$store.state.myExcSet)if(this.$store.state.myExcSet[t].name==e.name)return void v["a"].error({message:e.name+"已经在您的收藏中!"});this.$store.commit("addMyExcSet",e),v["a"].success({message:e.name+"加入收藏!",type:"success"})}}};A.render=I;var B=A;const U=Object(i["n"])("span",{class:"title"},"您的收藏",-1);function D(e,t,c,s,r,n){const o=Object(i["T"])("el-divider"),a=Object(i["T"])("el-empty"),l=Object(i["T"])("el-progress"),b=Object(i["T"])("el-space"),u=Object(i["T"])("el-button"),O=Object(i["T"])("el-card"),j=Object(i["T"])("el-container");return Object(i["M"])(),Object(i["k"])(j,{direction:"vertical"},{default:Object(i["ib"])(()=>[Object(i["r"])(o,{"content-position":"left"},{default:Object(i["ib"])(()=>[U]),_:1}),0==this.$store.state.myExcSet.length?(Object(i["M"])(),Object(i["k"])(a,{key:0,description:"您的收藏为空"})):Object(i["l"])("",!0),Object(i["r"])(b,{wrap:""},{default:Object(i["ib"])(()=>[(Object(i["M"])(!0),Object(i["m"])(i["b"],null,Object(i["R"])(this.$store.state.myExcSet,(e,t)=>(Object(i["M"])(),Object(i["k"])(O,{class:"box-card",key:t},{default:Object(i["ib"])(()=>[Object(i["r"])(l,{type:"circle",percentage:n.pre(t)},null,8,["percentage"]),Object(i["r"])(b,{class:"title"},{default:Object(i["ib"])(()=>[Object(i["q"])(Object(i["X"])(e.name),1)]),_:2},1024),Object(i["r"])(b,{style:{"margin-top":"60px"}},{default:Object(i["ib"])(()=>[Object(i["r"])(u,{circle:"",icon:"el-icon-edit",type:"primary",onClick:e=>n.toExc(t)},null,8,["onClick"]),Object(i["r"])(u,{circle:"",icon:"el-icon-delete",type:"primary",onClick:e=>n.remove(t)},null,8,["onClick"]),Object(i["r"])(u,{circle:"",icon:"el-icon-refresh-right",type:"primary"})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}var G={components:{ElMessage:v["a"]},methods:{pre:function(e){return Math.round(this.$store.state.myExcSet[e].done/this.$store.state.myExcSet[e].total*1e3)/10},toExc:function(e){this.$store.commit("setCurPage","exc"),this.$store.commit("setCurExcSet",e)},remove:function(e){var t=this.$store.state.myExcSet[e].name;this.$store.commit("removeMyExcSet",e),v["a"].success({message:t+"已删除!",type:"success"})}}};G.render=D;var H=G,F={components:{"exc-page":E,"more-page":X,"user-page":H,"shop-page":B,user:n["a"],goods:o["a"],more:a["a"],"user-filled":l["a"],"goods-filled":b["a"],"more-filled":u["a"]},mounted:function(){var e=localStorage.getItem("myExcSet");if(e){var t=JSON.parse(e);this.$store.commit("setMyExcSet",t)}else this.$store.commit("setMyExcSet",[]);var c=this;this.$axios.get("excset.json").then(e=>{var t=JSON.parse(e.request.responseText);c.$store.commit("setAllExcSet",t)})},methods:{toUser:function(){this.$store.commit("setCurPage","user")},toMore:function(){this.$store.commit("setCurPage","more")},toShop:function(){this.$store.commit("setCurPage","shop")}}};c("150e");F.render=r;var K=F,Q=c("bc3a"),V=c.n(Q),W=c("5502");const Y=Object(W["a"])({state:{curExcSet:0,curPage:"user",allExcSet:[],myExcSet:[]},mutations:{setAllExcSet:function(e,t){e.allExcSet=t},setMyExcSet:function(e,t){e.myExcSet=t},addMyExcSet:function(e,t){e.myExcSet.push({name:t.name,author:t.author,done:0,total:t.total,update:t.update,path:t.path}),localStorage.setItem("myExcSet",JSON.stringify(e.myExcSet))},removeMyExcSet:function(e,t){e.myExcSet.splice(t,1),localStorage.setItem("myExcSet",JSON.stringify(e.myExcSet))},setCurExcSet:function(e,t){e.curExcSet=t},setCurPage:function(e,t){e.curPage=t},updateDone:function(e,t){e.myExcSet[e.curExcSet].done=t,localStorage.setItem("myExcSet",JSON.stringify(e.myExcSet))}}}),Z=Object(i["j"])(K);Z.config.globalProperties.$axios=V.a,Z.use(s["a"]),Z.use(Y),Z.mount("#app")},7151:function(e,t,c){},b116:function(e,t,c){"use strict";c("7151")},e2b0:function(e,t,c){"use strict";c("fea3")},fea3:function(e,t,c){}});
//# sourceMappingURL=app.2ac863d6.js.map