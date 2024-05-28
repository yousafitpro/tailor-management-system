import{L as A}from"./Layout.b29e1363.js";import{g as N}from"./debounce.7a1c94a3.js";import{T as D}from"./TextInput.343a9a28.js";import{C as R}from"./CheckboxInput.a724a51d.js";import{L as z}from"./LoadingButton.15007f3d.js";import{T as E}from"./TextareaInput.50f326e8.js";import{_ as G,r as a,o as p,c as m,a as t,b as i,e as h,h as v,t as n,w as H,n as U,d as g,F as j,j as J,f as K}from"./app.f724e820.js";import"./Dropdown.0e5c1d9e.js";import"./FlashMessages.3a43925d.js";import"./InputError.2d165fae.js";const P={layout:A,remember:"form",props:{iservices:Array},components:{CheckboxInput:R,LoadingButton:z,TextInput:D,TextareaInput:E},metaInfo(){return{title:this.$t("create_x",{x:this.$tc("Measurement Field")})}},data(){return{form:{name:null,type:null,order:null,services:[],required:!1,description:null,options:[{value:""},{value:""}]},services:[],sending:!1,types:["Text","Select","Textarea","Checkbox","Radio"]}},mounted(){this.services=this.iservices},methods:{submit(){this.sending=!0;let e={...this.form,options:[...this.form.options],services:this.form.services.map(r=>r.value)};e.options.pop(),this.$inertia.post(this.route("measurement_fields.store"),e,{onFinish:()=>this.sending=!1})},selectAllServices(){this.form.services=[],this.services.map(e=>{this.form.services.push(e)}),this.$refs.desc.focus()},deselectAllServices(){this.form.services=[],this.$refs.desc.focus()},optionChanged(e,r){this.form.options=this.form.options.map((d,u)=>r==u?e:d)},checkOptions(e){const r=this.form.options.length;e==r&&this.form.options.push({value:""})},addOption(){this.form.options.push({value:""})},removeOption(){this.form.options.pop()},searchServices(e,r){e&&(r(!0),this.searchingServices(r,e,this))},searchingServices:N((e,r,d)=>{fetch(d.route("ajax.services")+"?search="+escape(r)).then(u=>{u.json().then(o=>d.services=o),e(!1)})},350)}},Q={class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},W=t("span",{class:"text-gray-400 font-medium mx-2"},"/",-1),X={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},Y={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},Z={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},ee={class:"form-label",for:"type"},re={key:0,class:"form-error"},oe={class:"w-full flex items-center justify-end -mt-2 mb-6 gap-4 ltr:pr-6 rtl:pl-6"},se=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1),te=[se],le=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"})],-1),ie=[le],ne={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},pe={class:"form-label",for:"services"},ae={key:0,class:"form-error"},me={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"};function de(e,r,d,u,o,l){var y,w,k,V,_,x,C,S,$,O,T;const B=a("Icons"),L=a("Link"),f=a("text-input"),b=a("v-select"),I=a("textarea-input"),M=a("checkbox-input"),q=a("loading-button");return p(),m("div",null,[t("h1",Q,[i(L,{class:"text-gray-600 hover:text-gray-800 inline-flex items-center",href:e.route("measurement_fields")},{default:h(()=>[i(B,{name:"back",class:"flex-shrink-0 w-3 h-3 md:w-5 md:h-5 fill-current ltr:mr-2 rtl:ml-2 rtl:rotate"}),v(" "+n(e.$tc("Measurement Field",2)),1)]),_:1},8,["href"]),W,v(" "+n(e.$t("Create")),1)]),t("div",X,[t("form",{onSubmit:r[10]||(r[10]=H((...s)=>l.submit&&l.submit(...s),["prevent"])),autocomplete:"off"},[t("div",Y,[i(f,{label:e.$t("Name"),modelValue:o.form.name,"onUpdate:modelValue":r[0]||(r[0]=s=>o.form.name=s),errors:(y=e.$page.props.errors)==null?void 0:y.name,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),i(f,{type:"number",modelValue:o.form.order,"onUpdate:modelValue":r[1]||(r[1]=s=>o.form.order=s),label:e.$tc("Order"),errors:(w=e.$page.props.errors)==null?void 0:w.order,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["modelValue","label","errors"]),t("div",Z,[t("label",ee,n(e.$tc("Type")),1),i(b,{dir:e.$page.props.user.account.direction,transition:"","input-id":"type",options:o.types,filterable:!1,searchable:!1,modelValue:o.form.type,"onUpdate:modelValue":r[2]||(r[2]=s=>o.form.type=s),placeholder:e.$t("select_x",{x:e.$t("Type")}),class:U({error:((k=e.$page.props.errors)==null?void 0:k.type)&&((V=e.$page.props.errors)==null?void 0:V.type.length)})},null,8,["dir","options","modelValue","placeholder","class"]),(_=e.$page.props.errors)!=null&&_.type?(p(),m("div",re,n((x=e.$page.props.errors)==null?void 0:x.type[0]),1)):g("",!0)]),o.form.type=="Select"||o.form.type=="Radio"||o.form.type=="Checkbox"?(p(),m(j,{key:0},[(p(!0),m(j,null,J(o.form.options,(s,c)=>(p(),K(f,{key:"opt_"+c,modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,onFocus:F=>l.checkOptions(c+1),label:"Option "+(c+1),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:e.$page.props.errors["options."+c+".value"]},null,8,["modelValue","onUpdate:modelValue","onFocus","label","errors"]))),128)),t("div",oe,[t("button",{type:"button",onClick:r[3]||(r[3]=(...s)=>l.addOption&&l.addOption(...s)),class:"bg-gray-700 px-3 py-1.5 rounded-md text-gray-50 hover:bg-gray-800"},te),t("button",{type:"button",onClick:r[4]||(r[4]=(...s)=>l.removeOption&&l.removeOption(...s)),class:"bg-gray-700 px-3 py-1.5 rounded-md text-gray-50 hover:bg-gray-800"},ie)])],64)):g("",!0),t("div",ne,[t("label",pe,n(e.$tc("Service")),1),i(b,{multiple:"",transition:"",options:o.services,"input-id":"services",modelValue:o.form.services,"onUpdate:modelValue":r[7]||(r[7]=s=>o.form.services=s),onSearch:l.searchServices,dir:e.$page.props.user.account.direction,placeholder:e.$t("search_x",{x:e.$tc("Service",2)}),class:U({error:((C=e.$page.props.errors)==null?void 0:C.services)&&((S=e.$page.props.errors)==null?void 0:S.services.length)})},{"list-footer":h(()=>[o.services.length==o.form.services.length?(p(),m("li",{key:0,role:"option",onClick:r[5]||(r[5]=s=>l.deselectAllServices()),class:"vs__dropdown-option bg-gray-300 hover:bg-gray-400"},n(e.$t("Deselect all above")),1)):(p(),m("li",{key:1,role:"option",onClick:r[6]||(r[6]=s=>l.selectAllServices()),class:"vs__dropdown-option bg-gray-300 hover:bg-gray-400"},n(e.$t("Select all above")),1))]),_:1},8,["options","modelValue","onSearch","dir","placeholder","class"]),($=e.$page.props.errors)!=null&&$.services?(p(),m("div",ae,n((O=e.$page.props.errors)==null?void 0:O.services[0]),1)):g("",!0)]),i(I,{ref:"desc",label:e.$t("Description"),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",modelValue:o.form.description,"onUpdate:modelValue":r[8]||(r[8]=s=>o.form.description=s),errors:(T=e.$page.props.errors)==null?void 0:T.description},null,8,["label","modelValue","errors"]),i(M,{class:"mb-8",id:"required",checked:o.form.required,"onUpdate:checked":r[9]||(r[9]=s=>o.form.required=s),label:e.$t("This field is required")},null,8,["checked","label"])]),t("div",me,[i(q,{loading:o.sending,class:"btn-gray",type:"submit"},{default:h(()=>[v(n(e.$t("create_x",{x:e.$tc("Measurement Field")})),1)]),_:1},8,["loading"])])],32)])])}const Ve=G(P,[["render",de]]);export{Ve as default};
