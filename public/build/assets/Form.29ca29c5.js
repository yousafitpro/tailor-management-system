import{g as L}from"./debounce.91c4d28d.js";import{T as P}from"./TextInput.9b0b3eea.js";import{R as q}from"./RadioInput.90881f6f.js";import{S as G}from"./SelectInput.4008e17a.js";import{T as H}from"./TextareaInput.b3edac7f.js";import{C as Q}from"./CheckboxInput.de8f6547.js";import{L as W}from"./LoadingButton.df0f61cd.js";import{D as X}from"./DeleteRestoreComponent.8fa0eedf.js";import{_ as Y,r as h,o as l,c as a,a as i,t as m,d as c,n as v,w as Z,b,m as ee,D as se,F as _,j as g,e as R,f as k,h as re}from"./app.576bfb6d.js";import"./InputError.ce2fc15d.js";import"./Dialog.e26fd9fa.js";import"./Modal.df3141f0.js";const te={components:{CheckboxInput:Q,LoadingButton:W,RadioInput:q,SelectInput:G,TextInput:P,TextareaInput:H,DeleteRestoreComponent:X},props:{data:Object,ddData:{type:Object},modal:Boolean,action:Function,iservices:Array,icustomers:Array},data(){return{form:{name:null,service_id:null,customer_id:null,measurement:null,extra_attributes:[]},fields:null,services:[],customers:[],service:null,customer:null,loading:!1,sending:!1}},watch:{ddData:function(e){e&&(e.name&&(this.form.name=e.name),e.service&&(this.service=e.service,this.services.push(this.service),this.form.service_id=this.service.value,this.service.measurement_fields.map(s=>{s.type=="Checkbox"?(this.form[s.name]={},s.options.map(o=>this.form[s.name][o.value]=!1)):this.form[s.name]=null})),e.customer&&(this.customer=e.customer,this.customers=[this.customer],this.form.customer_id=this.customer.value))},customer:function(e,s){this.form.customer_id=e?e.value:null,(!this.form.name||this.service&&this.form.name==this.service.label||this.form.name==(s?s.label+"'s ":"")+(this.service?this.service.label:""))&&(this.form.name=(e?e.label:"")+(this.service?"'s "+this.service.label:""))},service:function(e,s){this.form.service_id=e?e.value:null,(!this.form.name||this.customer&&this.form.name==this.customer.label||this.form.name==(this.customer?this.customer.label+"'s ":"")+(s?s.label:""))&&(this.form.name=(this.customer?this.customer.label+"'s ":"")+(e?e.label:"")),s&&s.measurement_fields.map(o=>{delete this.form[o.name]}),e&&e.measurement_fields.map(o=>{o.type=="Checkbox"?(this.form[o.name]={},o.options.map(p=>this.form[o.name][p.value]=!1)):this.form[o.name]=null})}},created(){this.services=this.iservices,this.customers=this.icustomers,this.data&&(this.form=this.data),this.ddData&&(this.ddData.name&&(this.form.name=this.ddData.name),this.ddData.service&&(this.service=this.ddData.service,this.services.push(this.service),this.form.service_id=this.service.value,this.service.measurement_fields.map(e=>{e.type=="Checkbox"?(this.form[e.name]={},e.options.map(s=>this.form[e.name][s.value]=!1)):this.form[e.name]=null})),this.ddData.customer&&(this.customer=this.ddData.customer,this.customers=[this.customer],this.form.customer_id=this.customer.value))},methods:{submit(){this.sending=!0;let e={...this.form};if(this.service&&this.service.measurement_fields&&this.service.measurement_fields.length>0){let s=[];this.service.measurement_fields.map((o,p)=>{delete e[o.name];let t={};t[o.name]=o.type=="Checkbox"?JSON.stringify(this.form[o.name]):this.form[o.name],s[p]={...t}}),e.extra_attributes=[...s]}this.modal?(e.ajax=!0,this.$axios.post(this.route("measurements.store"),e).then(s=>{this.sending=!1,this.action(s.data),this.errors={},this.$emit("close")}).catch(s=>{this.sending=!1,s.response.data.errors&&(this.errors=s.response.data.errors)})):this.$inertia.post(this.route("measurements.store"),e,{onFinish:()=>this.sending=!1})},updateFormValue(e,s,o){o?this.form[s][o]=e:this.form[s]=e},searchCustomers(e,s){e&&(s(!0),this.searchingCustomers(s,e,this))},searchingCustomers:L((e,s,o)=>{fetch(o.route("ajax.customers")+"?search="+escape(s)).then(p=>{p.json().then(t=>o.customers=t),e(!1)})},350),searchServices(e,s){e&&(s(!0),this.searchingServices(s,e,this))},searchingServices:L((e,s,o)=>{fetch(o.route("ajax.services")+"?with_fields=1&search="+escape(s)).then(p=>{p.json().then(t=>o.services=t),e(!1)})},350)}},oe={class:"w-full ltr:text-left rtl:text-right"},le={key:0,class:"w-full flex items-start justify-between border-b"},ie={class:"font-bold flex-1 mb-4"},ae={class:"flex items-center"},ne=i("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[i("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),me=[ne],ue={class:"px-8 py-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},pe={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},ce={class:"form-label",for:"customer_id"},de={key:0,class:"form-error"},he={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},fe={class:"form-label",for:"service_id"},ve={key:0,class:"form-error"},be={class:"mb-8 ltr:mr-6 rtl:ml-6 flex flex-wrap"},_e={class:"form-label",for:"name"},ge=["placeholder"],ye={class:"text-sm mt-1"},ke={key:0,class:"form-error"},we={key:0,class:"ltr:pr-6 rtl:pl-6 ltr:-mr-12 rtl:-ml-12 w-full"},Ve={class:"font-bold mb-2"},xe=i("hr",{class:"mb-8"},null,-1),Ce={class:"ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 col-span-full grid grid-cols-1 sm:grid-cols-2"},Se=["value"],$e=i("div",{class:"py-2"},null,-1),je={key:0,class:"form-error"},Te=i("div",{class:"py-2"},null,-1),Ue={key:0,class:"form-error"};function Be(e,s,o,p,t,f){var x,C,S,$,j,T,U,B,D,F,I,M,N,z;const w=h("v-select"),O=h("text-input"),A=h("select-input"),V=h("textarea-input"),J=h("checkbox-input"),E=h("radio-input"),K=h("loading-button");return l(),a("div",oe,[i("div",{class:v(o.modal?"np flex flex-col justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t":"")},[o.modal?(l(),a("div",le,[i("p",ie,m(e.$t("add_x",{x:e.$tc("Measurement")})),1),i("div",ae,[i("a",{class:"modal-close cursor-pointer z-50",onClick:s[0]||(s[0]=r=>e.$emit("close"))},me)])])):c("",!0),i("div",{class:v(o.modal?"print bg-white -mx-6 -mb-8 rounded-md":"")},[i("form",{onSubmit:s[5]||(s[5]=Z((...r)=>f.submit&&f.submit(...r),["prevent"])),autocomplete:"off"},[i("div",ue,[i("div",pe,[i("label",ce,m(e.$tc("Customer")),1),b(w,{modelValue:t.customer,"onUpdate:modelValue":s[1]||(s[1]=r=>t.customer=r),options:t.customers,"input-id":"customer_id",onSearch:f.searchCustomers,dir:e.$page.props.user.account.direction,placeholder:e.$t("search_x",{x:e.$tc("Customer",2)}),class:v({error:((x=e.$page.props.errors)==null?void 0:x.customer_id)&&((C=e.$page.props.errors)==null?void 0:C.customer_id.length)})},null,8,["modelValue","options","onSearch","dir","placeholder","class"]),(S=e.$page.props.errors)!=null&&S.customer_id?(l(),a("div",de,m(($=e.$page.props.errors)==null?void 0:$.customer_id[0]),1)):c("",!0)]),i("div",he,[i("label",fe,m(e.$tc("Service")),1),b(w,{modelValue:t.service,"onUpdate:modelValue":s[2]||(s[2]=r=>t.service=r),options:t.services,"input-id":"service_id",onSearch:f.searchServices,dir:e.$page.props.user.account.direction,placeholder:e.$t("search_x",{x:e.$tc("Service",2)}),class:v({error:((j=e.$page.props.errors)==null?void 0:j.service_id)&&((T=e.$page.props.errors)==null?void 0:T.service_id.length)})},null,8,["modelValue","options","onSearch","dir","placeholder","class"]),(U=e.$page.props.errors)!=null&&U.service_id?(l(),a("div",ve,m((B=e.$page.props.errors)==null?void 0:B.service_id[0]),1)):c("",!0)]),i("div",be,[i("label",_e,m(e.$t("Type Name")),1),ee(i("input",{id:"name",type:"text","onUpdate:modelValue":s[3]||(s[3]=r=>t.form.name=r),placeholder:e.$t("Type Name"),class:v(["form-input block w-full mt-1 rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100",{error:((D=e.$page.props.errors)==null?void 0:D.name)&&((F=e.$page.props.errors)==null?void 0:F.name.length)}])},null,10,ge),[[se,t.form.name]]),i("div",null,[i("div",ye,m(e.$t("Person name with services name i.e, John's Son Blazer, Mike Kurta or Shalini Blouse etc")),1),((I=e.$page.props.errors)==null?void 0:I.name)&&((M=e.$page.props.errors)==null?void 0:M.name.length)?(l(),a("div",ke,m((N=e.$page.props.errors)==null?void 0:N.name[0]),1)):c("",!0)])]),t.service&&t.service.measurement_fields&&t.service.measurement_fields.length?(l(),a("div",we,[i("h1",Ve,m(e.$tc("Measurement Field",2)),1),xe,i("div",Ce,[(l(!0),a(_,null,g(t.service.measurement_fields,(r,u)=>(l(),a(_,null,[r.type=="Text"?(l(),a("div",{key:"in_"+u},[b(O,{label:r.name,modelValue:t.form[r.name],"onUpdate:modelValue":n=>t.form[r.name]=n,errors:e.$page.props.errors[r.name],class:"ltr:pr-6 rtl:pl-6 pb-8"},null,8,["label","modelValue","onUpdate:modelValue","errors"])])):r.type=="Select"?(l(),a("div",{key:"in_"+u},[b(A,{label:r.name,modelValue:t.form[r.name],"onUpdate:modelValue":n=>t.form[r.name]=n,errors:e.$page.props.errors[r.name],class:"ltr:pr-6 rtl:pl-6"},{default:R(()=>[(l(!0),a(_,null,g(r.options,(n,d)=>(l(),a("option",{key:"o_"+d,value:n.value},m(n.value),9,Se))),128))]),_:2},1032,["label","modelValue","onUpdate:modelValue","errors"])])):r.type=="Textarea"?(l(),a("div",{key:"in_"+u,class:"col-span-full"},[(l(),k(V,{label:r.name,key:"in_"+u,modelValue:t.form[r.name],"onUpdate:modelValue":n=>t.form[r.name]=n,errors:e.$page.props.errors[r.name],class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","onUpdate:modelValue","errors"]))])):r.type=="Checkbox"?(l(),a("div",{key:"in_"+u},[(l(),a("div",{class:"ltr:text-left rtl:text-right ltr:pr-6 rtl:pl-6 mb-8",key:"in_"+u},[(l(),a("label",{class:"form-label mr-6",key:"in_"+u},m(r.name),1)),$e,(l(!0),a(_,null,g(r.options,(n,d)=>(l(),k(J,{label:n.value,class:"mb-2 w-full",id:"cb_"+d+"_"+u,key:"cb_"+d+"_"+u,errors:e.$page.props.errors[r.name],value:t.form[r.name][n.value],onInput:y=>f.updateFormValue(y,r.name,n.value)},null,8,["label","id","errors","value","onInput"]))),128)),e.$page.props.errors[r.name]&&e.$page.props.errors[r.name].length?(l(),a("div",je,m(e.$page.props.errors[r.name][0]),1)):c("",!0)]))])):r.type=="Radio"?(l(),a("div",{key:"in_"+u},[(l(),a("div",{class:"ltr:text-left rtl:text-right ltr:pr-6 rtl:pl-6 mb-8",key:"in_"+u},[(l(),a("label",{class:"form-label mr-6",key:"in_"+u},m(r.name),1)),Te,(l(!0),a(_,null,g(r.options,(n,d)=>(l(),k(E,{name:r.name,label:n.value,value:n.value,class:"mb-2 w-full mr-6",id:"r_"+d+"_"+u,key:"r_"+d+"_"+u,errors:e.$page.props.errors[r.name],onInput:y=>f.updateFormValue(y,r.name)},null,8,["name","label","value","id","errors","onInput"]))),128)),e.$page.props.errors[r.name]&&e.$page.props.errors[r.name].length?(l(),a("div",Ue,m(e.$page.props.errors[r.name][0]),1)):c("",!0)]))])):c("",!0)],64))),256))])])):c("",!0),b(V,{high:"",resize:!o.modal,label:e.$t("Description"),modelValue:t.form.measurement,"onUpdate:modelValue":s[4]||(s[4]=r=>t.form.measurement=r),errors:(z=e.$page.props.errors)==null?void 0:z.measurement,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["resize","label","modelValue","errors"])]),i("div",{class:v([o.modal?"rounded-b":"","px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"])},[b(K,{type:"submit",class:"btn-gray",loading:t.sending,disabled:t.loading||t.sending},{default:R(()=>[re(m(e.$t("create_x",{x:e.$tc("Measurement")})),1)]),_:1},8,["loading","disabled"])],2)],32)],2)],2)])}const Ke=Y(te,[["render",Be]]);export{Ke as default};