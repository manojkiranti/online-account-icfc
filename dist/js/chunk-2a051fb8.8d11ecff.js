(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a051fb8"],{1097:function(e,t,a){"use strict";a.r(t);var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("PageHeader",{attrs:{title:e.title,items:e.items}}),a("div",{staticClass:"learning-detail"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-sm-12 col-md-4"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Show  "),a("b-form-select",{attrs:{size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}}),e._v(" entries ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-8"},[a("div",{staticClass:"d-flex justify-content-end align-items-center"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center mb-0 mr-2"},[e._v(" Search: "),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Email"},model:{value:e.searchParams.email,callback:function(t){e.$set(e.searchParams,"email",t)},expression:"searchParams.email"}}),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Mobile"},model:{value:e.searchParams.mobile_no,callback:function(t){e.$set(e.searchParams,"mobile_no",t)},expression:"searchParams.mobile_no"}}),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"ref no"},model:{value:e.searchParams.ref_no,callback:function(t){e.$set(e.searchParams,"ref_no",t)},expression:"searchParams.ref_no"}})],1),a("button",{staticClass:"btn btn-primary btn-sm",on:{click:e.getSearchResults}},[e.isTableDataLoading?a("b-spinner",{attrs:{small:""}}):e._e(),e._v(" Search")],1)]),a("div",{staticClass:"table-actions-btns ml-2"})])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{ref:"serverTable",attrs:{items:e.tableData,fields:e.fields,responsive:"","current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,"filter-included-fields":e.filterOn,busy:e.isTableDataLoading},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"cell(created_at)",fn:function(t){return[e._v(" "+e._s(e._f("dateFormate")(t.item.created_at))+" ")]}},{key:"cell(updated_at)",fn:function(t){return[e._v(" "+e._s(e._f("dateFormate")(t.item.updated_at))+" ")]}},{key:"cell(acc_status)",fn:function(t){return[e._v(" "+e._s(t.item.acc_status.account_status)+" ")]}},{key:"cell(status)",fn:function(t){return[a("div",{staticClass:"badge font-size-12",class:{"badge-soft-danger":""+t.value==="Chargeback","badge-soft-success":""+t.value==="Active","badge-soft-warning":""+t.value==="InActive"}},[e._v(" "+e._s(t.value)+" ")])]}},{key:"cell(action)",fn:function(t){return[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-3 text-primary",attrs:{href:"javascript:void(0);","data-toggle":"tooltip",title:"view"},on:{click:function(a){return e.editItem(t)}}},[a("i",{staticClass:"\n                          mdi mdi-arrow-right-circle-outline\n                          font-size-18\n                        "})]),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-danger mr-3",attrs:{href:"javascript:void(0);",title:"Delete"},on:{click:function(a){return e.deleteItem(t)}}},[a("i",{staticClass:"mdi mdi-trash-can font-size-18"})])]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"\n                      dataTables_paginate\n                      paging_simple_numbers\n                      float-right\n                    "},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},on:{change:e.handlePageChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])])])])])])],1)},i=[],o=a("ade3"),r=a("5530"),c=(a("a4d3"),a("e01a"),a("ac1f"),a("1276"),a("91c8")),l=a.n(c),u=a("e43b"),d=a("5658"),f=a("2579"),m=a("c2a4"),g=(n={page:{title:"New Request",meta:[{name:"description",content:m.description}]},name:"NewRequest",mixins:[l.a],components:{Layout:d["a"],PageHeader:f["a"]},data:function(){return{searchParams:{email:"",mobile_no:"",ref_no:""},title:"All Request",items:[{text:"Online Account",href:"/"},{text:"New Request",active:!0}],formModalTitle:"Create Learning detail",modalType:"create",selectedRow:{},isTableDataLoading:!1,createLearningTypeLoading:!1,detailData:{},totalData:null,totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"sort",sortDesc:!1,fields:[{key:"reference_code",sortable:!1},{key:"full_name",sortable:!1},{key:"salutation",sortable:!0},{key:"email",sortable:!0},{key:"mobile_no",sortable:!1},{key:"acc_branch.title",sortable:!1},{key:"otp_verification",sortable:!1},{key:"created_at",sortable:!0},{key:"updated_at",sortable:!1},{key:"product_id",sortable:!0},{key:"acc_status",sortable:!1},{key:"Action",width:200}],tableData:[],learningId:""}},filters:{dateFormate:function(e){var t=new Date(e);return t.toISOString().split("T")[0]}},mounted:function(){this.getNewRequest()},computed:{rows:function(){return this.totalData}}},Object(o["a"])(n,"filters",{dateFormate:function(e){var t=new Date(e);return t.toISOString().split("T")[0]}}),Object(o["a"])(n,"methods",{editItem:function(e){this.selectedRow=Object(r["a"])({},e.item),console.log("row",e),this.$router.push("/online/all-request/review-account/".concat(this.selectedRow.guid))},deleteItem:function(e){var t=this;console.log("row",e),this.$bvModal.msgBoxConfirm("Are you want to delete selected List?").then((function(a){if(a){t.isTableDataLoading=!0;var n=t.response(u["a"].deleteAccountRequest(e.item.id));n.then((function(e){if(n.isFulfilled()){var a={title:"Success",message:e.message,variant:"success"};t.makeToast(a),t.getNewRequest()}})).catch((function(e){console.log(e);var a={title:"Error",message:e.message,variant:"warning"};t.makeToast(a),t.isTableDataLoading=!1}))}})).catch((function(e){console.log(e)}))},openCreateModal:function(){this.formModalTitle="Create Learning detail",this.modalType="create",this.$refs["modal-1"].show()},onFiltered:function(e){console.log("filteredItems",e),this.totalRows=e.length,this.currentPage=1},makeToast:function(e){this.$bvToast.toast("".concat(e.message),{title:"".concat(e.title),autoHideDelay:5e3,variant:e.variant,appendToast:!1})},getRequestParams:function(e,t,a,n,s){var i={};return e&&(i["page"]=e),t&&(i["size"]=t),a&&(i["email"]=a),n&&(i["mobile_no"]=n),s&&(i["ref_no"]=s),i},getSearchResults:function(){this.getNewRequest("search")},getNewRequest:function(){var e,t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";e="default"==a?this.getRequestParams(this.currentPage,this.perPage):this.getRequestParams(1,10,this.searchParams.email,this.searchParams.mobile_no,this.searchParams.ref_no),this.isTableDataLoading=!0;var n=this.response(u["a"].getNewRequest(e));n.then((function(e){n.isFulfilled()&&(console.log("all-request",e),t.tableData=e.data,t.totalData=e.total,t.perPage=e.per_page,t.currentPage=e.current_page,t.isTableDataLoading=!1)})).catch((function(e){console.log(e);var a={title:"Error",message:e.message,variant:"warning"};t.makeToast(a),t.isTableDataLoading=!1}))},handlePageChange:function(e){console.log("value",e),this.currentPage=e,this.getNewRequest()}}),n),h=g,p=a("2877"),b=Object(p["a"])(h,s,i,!1,null,null,null);t["default"]=b.exports},"91c8":function(e,t){e.exports={methods:{response:function(e){if(e.isResolved)return e;var t=!0,a=!1,n=!1,s=e.then((function(e){return n=!0,t=!1,e}),(function(e){throw a=!0,t=!1,e}));return s.isFulfilled=function(){return n},s.isPending=function(){return t},s.isRejected=function(){return a},s}}}},e43b:function(e,t,a){"use strict";a("d3b7");var n=a("27cb"),s="admin";t["a"]={getNewRequest:function(e){return new Promise((function(t,a){n["a"].get("".concat(s,"/online-account/new"),{params:e}).then((function(e){t(e.data)})).catch((function(e){a(e.response)}))}))},getPreRequest:function(){return new Promise((function(e,t){n["a"].get("".concat(s,"/online-account/account/pre-requisite")).then((function(t){e(t.data)})).catch((function(e){t(e.response)}))}))},getAccountDetail:function(e){return new Promise((function(t,a){n["a"].get("".concat(s,"/online-account/account/").concat(e)).then((function(e){t(e.data)})).catch((function(e){a(e.response)}))}))},updateAccount:function(e,t){return new Promise((function(a,i){n["a"].post("".concat(s,"/online-account/account-update/").concat(e),t).then((function(e){a(e.data)})).catch((function(e){i(e.response)}))}))},deleteAccountRequest:function(e){return new Promise((function(t,a){n["a"].delete("".concat(s,"/online-account/").concat(e)).then((function(e){t(e.data)})).catch((function(e){a(e.response)}))}))},handleAccount:function(e,t){return new Promise((function(a,i){n["a"].put("".concat(s,"/online-account/account-handle/").concat(e),t).then((function(e){a(e.data)})).catch((function(e){i(e.response)}))}))}}}}]);
//# sourceMappingURL=chunk-2a051fb8.8d11ecff.js.map