(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2b29"],{"24e6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("Stat")],1)])],1)},i=[],l=a("5658"),n=a("2579"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},t._l(t.statData,(function(e,s){return a("div",{key:s,staticClass:"col-md-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-body overflow-hidden"},[a("p",{staticClass:"text-truncate font-size-14 mb-2"},[t._v(t._s(e.title))]),a("h4",{staticClass:"mb-0"},[t._v(t._s(t.stat[0][e.key]))])]),a("div",{staticClass:"text-primary"},[a("i",{class:e.icon+" font-size-24"})])])]),t._m(0,!0)])])})),0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body border-top py-3"},[a("div",{staticClass:"text-truncate"},[a("span",{staticClass:"text-muted ml-2"},[t._v("From All Time period")])])])}],r=a("27cb"),d={data:function(){return{stat:[],statData:[{title:"Total Request",key:"total",icon:"ri-stack-line",value:""},{title:"Total Approved Request",key:"approved",icon:"ri-store-2-line",value:""},{title:"Total Rejected Request",key:"rejected",icon:"ri-briefcase-4-line",value:""},{title:"Total Submitted Request",key:"submitted",icon:"ri-briefcase-4-line",value:""}]}},methods:{},mounted:function(){var t=this;r["a"].get("dashboard").then((function(e){t.stat=e.data})).catch((function(t){console.log(t)}))}},u=d,v=a("2877"),m=Object(v["a"])(u,c,o,!1,null,null,null),b=m.exports,f={components:{Layout:l["a"],PageHeader:n["a"],Stat:b},data:function(){return{title:"Dashboard",items:[{text:"online account"},{text:"Dashboard",active:!0}]}}},p=f,h=Object(v["a"])(p,s,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2b29.fe788a81.js.map