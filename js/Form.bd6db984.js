(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Form"],{"0fd9":function(t,e,n){"use strict";n("a4d3"),n("99af"),n("4de4"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("ade3"),a=(n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=["sm","md","lg","xl"],u=["start","end","center"];function d(t,e){return l.reduce((function(n,i){return n[t+Object(s["B"])(i)]=e(),n}),{})}var f=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=d("justify",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:m}})),b={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function O(t,e,n){var i=y[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var x=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:c({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},h,{justify:{type:String,default:null,validator:v}},p,{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var n=e.props,a=e.data,s=e.children,o="";for(var c in n)o+=String(n[c]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var i=n[t],a=O(e,t,i);a&&l.push(a)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(o,l)}(),t(n.tag,Object(r["a"])(a,{staticClass:"row",class:l}),s)}})},"368e":function(t,e,n){},"4bd4":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("e439"),n("dbb4"),n("b64b"),n("07ac"),n("2532"),n("159b");var i=n("ade3"),a=n("58df"),r=n("7e2b"),s=n("3206");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]=Object(a["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"517a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-data-iterator",{attrs:{items:t.items,"items-per-page":t.itemsPerPage,page:t.page,"hide-default-footer":""},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("v-row",t._l(e.items,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[n("v-card",[n("v-card-title",{staticClass:"subheading"},[t._v(t._s(e.username))]),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.keys,(function(i,a){return n("v-list-item",{key:a},[n("v-list-item-content",[t._v(t._s(i.text)+" :")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e[i.value]))])],1)})),1),n("v-card-actions",[n("v-spacer"),n("div",[n("v-btn",{directives:[{name:"perm",rawName:"v-perm",value:"user:update",expression:"'user:update'"}],attrs:{text:"",color:"success"}},[t._v(" Edit ")]),n("v-btn",{directives:[{name:"perm",rawName:"v-perm",value:"user:delete",expression:"'user:delete'"}],attrs:{text:"",color:"error"}},[t._v(" Delete ")])],1)],1)],1)],1)})),1)]}},{key:"footer",fn:function(){return[n("v-row",{attrs:{align:"center"}},[n("span",{staticClass:"grey--text"},[t._v("Items per page")]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"ml-2",attrs:{dark:"",text:"",color:"primary"}},i),[t._v(" "+t._s(t.itemsPerPage)+" "),n("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[n("v-list",t._l(t.itemsPerPageArray,(function(e,i){return n("v-list-item",{key:i,on:{click:function(n){return t.updateItemsPerPage(e)}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),n("v-spacer"),n("span",{staticClass:"mr-4\n          grey--text"},[t._v(" Total "+t._s(t.total)+" ")]),n("span",{staticClass:"mr-4\n          grey--text"},[t._v(" Page "+t._s(t.page)+" of "+t._s(t.pages)+" ")]),n("v-btn",{staticClass:"mr-1",attrs:{fab:"",small:"",dark:"",color:"blue darken-3"},on:{click:t.formerPage}},[n("v-icon",[t._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"ml-1",attrs:{fab:"",small:"",dark:"",color:"blue darken-3"},on:{click:t.nextPage}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])})],1)},a=[],r=(n("d3b7"),n("8593")),s={name:"UserManagement",data:function(){return{search:"",itemsPerPageArray:[3,6,9],page:1,pages:1,itemsPerPage:3,keys:[{text:"Account",value:"account"},{text:"Registe Time",value:"regTime"}],items:[],total:0}},methods:{nextPage:function(){this.page+1<=this.pages&&(this.page+=1,this.getDate())},formerPage:function(){this.page-1>=1&&(this.page-=1,this.getDate())},updateItemsPerPage:function(t){this.itemsPerPage=t,this.getDate()},getDate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.itemsPerPage;Object(r["c"])(e,n).then((function(e){var n=e.code,i=e.data,a=i.list,r=i.total,s=i.pageNum,o=i.pageSize,c=i.pages;200===n&&(t.items=a,t.total=r,t.page=s,t.itemsPerPage=o,t.pages=c)})).catch((function(t){console.error(t)})).finally((function(){}))}},activated:function(){this.getDate()}},o=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("8336"),f=n("b0af"),h=n("99d9"),v=n("62ad"),p=n("a523"),m=n("c377"),g=n("ce7e"),b=n("132d"),y=n("8860"),O=n("da13"),x=n("5d23"),w=n("e449"),k=n("0fd9"),j=n("2fa4"),P=Object(c["a"])(o,i,a,!1,null,"8de1a74e",null);e["default"]=P.exports;u()(P,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardTitle:h["c"],VCol:v["a"],VContainer:p["a"],VDataIterator:m["a"],VDivider:g["a"],VIcon:b["a"],VList:y["a"],VListItem:O["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VMenu:w["a"],VRow:k["a"],VSpacer:j["a"]})},"5df2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"Item is required"}],label:"Item",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v(" Validate ")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Reset Form ")]),n("v-btn",{attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v(" Reset Validation ")])],1)},a=[],r={name:"Form",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},s=r,o=n("2877"),c=n("6544"),l=n.n(c),u=n("8336"),d=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("25f0"),n("159b"),n("ade3")),f=(n("6ca7"),n("ec29"),n("9d26")),h=n("c37a"),v=(n("45fc"),n("5607")),p=n("2b0e"),m=p["a"].extend({name:"rippleable",directives:{ripple:v["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),g=n("8547"),b=n("58df"),y=Object(b["a"])(h["a"],m,g["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=h["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(d["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=y.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return x({},h["a"].options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",x({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(f["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),k=n("4bd4"),j=n("b974"),P=n("8654"),C=Object(o["a"])(s,i,a,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:u["a"],VCheckbox:w,VForm:k["a"],VSelect:j["a"],VTextField:P["a"]})},"62ad":function(t,e,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var i=n("ade3"),a=(n("4b85"),n("2b0e")),r=n("d9f7"),s=n("80d2");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["offset"+Object(s["B"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return l.reduce((function(t,e){return t["order"+Object(s["B"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(u),offset:Object.keys(d),order:Object.keys(f)};function v(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var p=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:c({cols:{type:[Boolean,String,Number],default:!1}},u,{offset:{type:[String,Number],default:null}},d,{order:{type:[String,Number],default:null}},f,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,s=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=p.get(o);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var i=n[t],a=v(e,t,i);a&&l.push(a)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(o,l)}(),t(n.tag,Object(r["a"])(a,{class:l}),s)}})},"6ca7":function(t,e,n){},8593:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));n("be3b");var i=axios;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("/user/all",{params:{pageNum:t,pageSize:e}})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("/role/all",{params:{pageNum:t,pageSize:e}})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i.get("/permission/all",{params:{pageNum:t,pageSize:e}})}},"8b74":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-data-table",{attrs:{headers:t.headers,items:t.desserts,search:t.search,loading:t.loading,options:t.options,"server-items-length":t.total},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[t._v("Permission")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("New Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Code"},model:{value:t.editedItem.perCode,callback:function(e){t.$set(t.editedItem,"perCode",e)},expression:"editedItem.perCode"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[n("v-icon",{directives:[{name:"perm",rawName:"v-perm",value:"permission:update",expression:"`permission:update`"}],on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-table-edit ")]),n("v-icon",{directives:[{name:"perm",rawName:"v-perm",value:"permission:delete",expression:"`permission:delete`"}],on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}}])})],1)},a=[],r=(n("c975"),n("a434"),n("d3b7"),n("8593")),s={name:"PermissionManagement",data:function(){return{search:"",loading:!1,dialog:!1,headers:[{text:"Id",align:"left",value:"id"},{text:"Name",sortable:!1,value:"name"},{text:"Code",value:"perCode"},{text:"Actions",value:"action",sortable:!1}],desserts:[],options:{page:1,itemsPerPage:5},total:0,editedIndex:-1,editedItem:{name:"",perCode:""},defaultItem:{name:"",perCode:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},methods:{getDate:function(){var t=this,e=this.options,n=e.page,i=e.itemsPerPage;this.loading=!0,Object(r["a"])(n,i).then((function(e){var n=e.code,i=e.data,a=i.list,r=i.total;200===n&&(t.desserts=a,t.total=r)})).catch((function(t){console.error(t)})).finally((function(){t.loading=!1}))},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.desserts.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}},watch:{options:{handler:function(){this.getDate()},deep:!0},dialog:function(t){t||this.close()}},activated:function(){this.getDate()}},o=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("8336"),f=n("b0af"),h=n("99d9"),v=n("62ad"),p=n("a523"),m=n("8fea"),g=(n("a4d3"),n("4de4"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("2532"),n("498a"),n("159b"),n("ade3")),b=(n("368e"),n("480e")),y=n("4ad4"),O=n("b848"),x=n("75eb"),w=n("e707"),k=n("e4d3"),j=n("21be"),P=n("f2e7"),C=n("a293"),_=n("58df"),V=n("d9bd"),I=n("80d2");function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A=Object(_["a"])(y["a"],O["a"],x["a"],w["a"],k["a"],j["a"],P["a"]),$=A.extend({name:"v-dialog",directives:{ClickOutside:C["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(g["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(g["a"])(t,"v-dialog--active",this.isActive),Object(g["a"])(t,"v-dialog--persistent",this.persistent),Object(g["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(g["a"])(t,"v-dialog--scrollable",this.scrollable),Object(g["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(V["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):w["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===I["u"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}}},render:function(t){var e=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(I["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(I["g"])(this.width)}),e.push(this.genActivator());var i=t("div",n,this.showLazyContent(this.getContentSlot()));return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),e.push(t("div",{class:this.contentClasses,attrs:D({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(b["a"],{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}}),B=n("ce7e"),E=n("132d"),T=n("0fd9"),N=n("2fa4"),L=n("8654"),F=n("71d9"),M=n("2a7f"),z=Object(c["a"])(o,i,a,!1,null,"284d8368",null);e["default"]=z.exports;u()(z,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:v["a"],VContainer:p["a"],VDataTable:m["a"],VDialog:$,VDivider:B["a"],VIcon:E["a"],VRow:T["a"],VSpacer:N["a"],VTextField:L["a"],VToolbar:F["a"],VToolbarTitle:M["a"]})},b14e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-data-iterator",{attrs:{items:t.items,"items-per-page":t.itemsPerPage,page:t.page,"hide-default-footer":""},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("v-row",t._l(e.items,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[n("v-card",[n("v-card-title",{staticClass:"subheading"},[t._v(t._s(e.name.toUpperCase()))]),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.keys,(function(i,a){return n("v-list-item",{key:a},[n("v-list-item-content",[t._v(t._s(i.text)+" :")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e[i.value]))])],1)})),1),n("v-card-actions",[n("v-spacer"),n("div",[n("v-btn",{directives:[{name:"perm",rawName:"v-perm",value:"role:update",expression:"'role:update'"}],attrs:{text:"",color:"success"}},[t._v(" Edit ")]),n("v-btn",{directives:[{name:"perm",rawName:"v-perm",value:"role:delete",expression:"'role:delete'"}],attrs:{text:"",color:"error"}},[t._v(" Delete ")])],1)],1)],1)],1)})),1)]}},{key:"footer",fn:function(){return[n("v-row",{attrs:{align:"center"}},[n("span",{staticClass:"grey--text"},[t._v("Items per page")]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({staticClass:"ml-2",attrs:{dark:"",text:"",color:"primary"}},i),[t._v(" "+t._s(t.itemsPerPage)+" "),n("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[n("v-list",t._l(t.itemsPerPageArray,(function(e,i){return n("v-list-item",{key:i,on:{click:function(n){return t.updateItemsPerPage(e)}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),n("v-spacer"),n("span",{staticClass:"mr-4\n          grey--text"},[t._v(" Total "+t._s(t.total)+" ")]),n("span",{staticClass:"mr-4\n          grey--text"},[t._v(" Page "+t._s(t.page)+" of "+t._s(t.pages)+" ")]),n("v-btn",{staticClass:"mr-1",attrs:{fab:"",small:"",dark:"",color:"blue darken-3"},on:{click:t.formerPage}},[n("v-icon",[t._v("mdi-chevron-left")])],1),n("v-btn",{staticClass:"ml-1",attrs:{fab:"",small:"",dark:"",color:"blue darken-3"},on:{click:t.nextPage}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])})],1)},a=[],r=(n("d3b7"),n("8593")),s={name:"RoleManagement",data:function(){return{search:"",itemsPerPageArray:[3,6,9],page:1,pages:1,itemsPerPage:3,keys:[{text:"Name",value:"name"}],items:[],total:0}},methods:{nextPage:function(){this.page+1<=this.pages&&(this.page+=1,this.getDate())},formerPage:function(){this.page-1>=1&&(this.page-=1,this.getDate())},updateItemsPerPage:function(t){this.itemsPerPage=t,this.getDate()},getDate:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.itemsPerPage;Object(r["b"])(e,n).then((function(e){var n=e.code,i=e.data,a=i.list,r=i.total,s=i.pageNum,o=i.pageSize,c=i.pages;200===n&&(t.items=a,t.total=r,t.page=s,t.itemsPerPage=o,t.pages=c)})).catch((function(t){console.error(t)})).finally((function(){}))}},activated:function(){this.getDate()}},o=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("8336"),f=n("b0af"),h=n("99d9"),v=n("62ad"),p=n("a523"),m=n("c377"),g=n("ce7e"),b=n("132d"),y=n("8860"),O=n("da13"),x=n("5d23"),w=n("e449"),k=n("0fd9"),j=n("2fa4"),P=Object(c["a"])(o,i,a,!1,null,"3020eb75",null);e["default"]=P.exports;u()(P,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardTitle:h["c"],VCol:v["a"],VContainer:p["a"],VDataIterator:m["a"],VDivider:g["a"],VIcon:b["a"],VList:y["a"],VListItem:O["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VMenu:w["a"],VRow:k["a"],VSpacer:j["a"]})},ec29:function(t,e,n){}}]);