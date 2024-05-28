import{T as u,a as c}from"./InputError.2d165fae.js";import{_ as d,v as m,r as o,o as a,c as f,b as g,a as p,q as h,f as _,d as b}from"./app.f724e820.js";const x={emits:["update:modelValue"],components:{TecLabel:u,TecInputError:c},props:{id:{type:String,default(){return m()}},modelValue:String,label:String,error:String,resize:{type:Boolean,default:!0}},mounted(){this.$nextTick(()=>{this.$refs.input.setAttribute("style",`height: ${this.$refs.input.scrollHeight+2}px`)})},methods:{focus(){this.$refs.input.focus()},select(){this.$refs.input.select()},autoResizeAndEmit(t){this.resize&&(t.target.style.height="auto",t.target.style.height=`${t.target.scrollHeight+2}px`),this.$emit("update:modelValue",t.target.value)}}},y={class:"col-span-6 sm:col-span-4"},V=["id","value"];function v(t,r,e,z,T,s){const i=o("tec-label"),n=o("tec-input-error");return a(),f("div",y,[g(i,{for:e.id,value:e.label},null,8,["for","value"]),p("textarea",h({id:e.id,ref:"input"},t.$attrs,{value:e.modelValue,onInput:r[0]||(r[0]=(...l)=>s.autoResizeAndEmit&&s.autoResizeAndEmit(...l)),class:[{"border-red-500 input-error":e.error,"min-h-[80px]":!e.resize},"w-full mt-1 border py-2 px-3 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"]}),null,16,V),e.error?(a(),_(n,{key:0,message:e.error,class:"mt-0"},null,8,["message"])):b("",!0)])}const E=d(x,[["render",v]]);export{E as T};
