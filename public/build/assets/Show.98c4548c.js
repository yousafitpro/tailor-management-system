import{L as v,D as b}from"./Dropdown.0e5c1d9e.js";import{S as x}from"./SmsDialog.41989227.js";import{_ as w,r as u,o as a,c as o,a as e,t as n,b as y,d as i,f as p,h as c,n as k,e as P}from"./app.f724e820.js";import"./LoadingButton.15007f3d.js";import"./TextareaInput.50f326e8.js";import"./InputError.2d165fae.js";const C={components:{Logo:v,Dropdown:b,SmsDialog:x},props:{payment:Object,modal:{default:!0},edit:{type:Function}},metaInfo(){return{title:this.$t("Payment Number",{x:this.payment.id})}},data(){return{sending:!1,emailing:!1,viewsms:!1}},methods:{printPayment(){window.print()},editPayment(){this.$emit("close"),this.$inertia.visit(this.route("payments.edit",this.payment.id))},receivedPayment(){this.payment.received||(this.$emit("close"),this.$inertia.put(this.route("payments.status",this.payment.id),{received:1}))},smsToCustomer(){this.viewsms=!0},emailPayment(){this.sending=!0,this.emailing=!0,console.log("Emailing the order no "+this.payment.id),this.$axios.post(this.route("payments.email",this.payment.id)).then(t=>{this.sending=!1,this.emailing=!1,this.$page.props.flash.message=t.data.success?"Payment has been sent to the customer email address.":"System is unable to sent email, either customer do not have email or system settings are not correct."}).catch(t=>{this.sending=!1,this.emailing=!1,this.$page.props.flash.error="Request has been failed, please check the logs in storage folder and contact developer."})}}},N={key:0,class:"w-full ltr:text-left rtl:text-right"},D={key:0,class:"np flex justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t"},S={class:"font-bold flex-1"},j={class:"flex items-center"},T=e("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[e("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),B=[T],E={class:"print"},L={class:"max-w-2xl h-full py-4 px-6 leading-normal"},M={class:"flex flex-wrap xs:flex-no-wrap justify-around w-full items-start"},V={class:"text-gray-900 mx-auto xs:mx-0",style:{width:"180px"}},$=["alt","src"],q={class:"text-sm px-4 py-4 xs:py-0 text-center xs:text-left"},I={class:"font-extrabold"},R={class:"font-bold"},z={class:"text-sm"},A={class:"flex"},U={class:"text-right ltr:mr-2 rtl:ml-2",style:{width:"90px"}},F={class:"font-bold"},G={class:"flex"},O={class:"text-right ltr:mr-2 rtl:ml-2",style:{width:"90px"}},H={class:"font-bold"},J={class:"inline-block"},K={class:"flex"},Q={class:"text-right ltr:mr-2 rtl:ml-2",style:{width:"90px"}},W={class:"font-bold"},X={key:0,class:"my-6 px-4 py-3 border rounded"},Y=["href"],Z={id:"details",class:"block xs:flex my-6"},ee={id:"company",class:"ltr:pr-0 rtl:pl-0 xs:ltr:pr-3 xs:rtl:pl-3 w-full xs:max-w-1/2"},te={class:"px-2 py-2 border rounded-t font-bold"},se={class:"border rounded-b border-t-0 px-2 py-2"},ne={class:"flex"},ae={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},oe={key:0,class:"flex"},le={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},ie={class:"flex"},re={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},de={key:1,class:"flex"},me={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},ce={id:"customer",class:"mt-4 xs:mt-0 pl-0 xs:pl-3 w-full xs:max-w-1/2"},ye={class:"px-2 py-2 border rounded-t font-bold"},he={class:"border rounded-b border-t-0 px-2 py-2"},ue={class:"flex"},pe={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},_e={key:0,class:"flex"},ge={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},fe={class:"flex"},ve={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},be={key:1,class:"flex"},xe={class:"ltr:mr-2 rtl:ml-2",style:{"min-width":"70px"}},we={class:"mt-6 px-4 py-3 border rounded font-bold text-lg"},ke={class:"border-b pb-4 px-4 -mx-4"},Pe={class:"flex items-center justify-between mt-4"},Ce={class:"text-right"},Ne={key:0},De={class:"text-sm flex items-center justify-between mt-4"},Se={class:"text-right"},je={key:0,class:"text-sm flex items-center justify-between mt-1"},Te={class:"text-right"},Be={key:1,class:"flex items-center mt-4 px-4 py-3 rounded bg-red-500 text-white fill-white text-sm"},Ee=["href"],Le={key:2,class:"pt-6"},Me={class:"font-bold"},Ve={class:"print-only fixed bottom-0 w-full text-center text-sm text-gray-600 pt-6"},$e={key:1,class:"np block xs:flex items-end justify-between px-6 py-4 mt-4 bg-gray-100 border-t rounded-b"},qe={class:"m-1 xs:m-0"},Ie=["disabled"],Re={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"},ze=["disabled"],Ae={key:0,class:"btn-spinner dark ltr:mr-2 rtl:ml-2"};function Ue(t,l,s,Fe,d,m){const h=u("Icons"),_=u("logo"),g=u("SmsDialog"),f=u("Modal");return a(),o("div",null,[s.payment&&s.payment.id?(a(),o("div",N,[s.modal?(a(),o("div",D,[e("p",S,n(t.$t("Payment No",{x:s.payment.id})),1),e("div",j,[s.payment.received?i("",!0):(a(),o("a",{key:0,onClick:l[0]||(l[0]=r=>m.receivedPayment()),class:"modal-close cursor-pointer text-gray-700 hover:text-gray-800"},[y(h,{name:"check2",class:"h-5 w-5 fill-current mr-3"})])),e("a",{class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800",onClick:l[1]||(l[1]=r=>m.printPayment())},[y(h,{name:"printer",class:"h-5 w-5 fill-current"})]),e("a",{class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800",onClick:l[2]||(l[2]=r=>m.editPayment(s.payment.id))},[y(h,{name:"pencil",class:"h-5 w-5 fill-current"})]),t.$page.props.user.account.sms_enabled&&t.$page.props.user.can_sms?(a(),o("a",{key:1,onClick:l[3]||(l[3]=r=>m.smsToCustomer()),class:"modal-close mx-2 cursor-pointer text-gray-700 hover:text-gray-800"},[y(h,{name:"sms",class:"h-5 w-5 fill-current"})])):i("",!0),e("a",{class:"modal-close ml-2 cursor-pointer",onClick:l[4]||(l[4]=r=>t.$emit("close"))},B)])])):i("",!0),e("div",E,[e("div",L,[e("div",M,[e("div",V,[t.$page.props.user.account.logo_path?(a(),o("img",{key:0,alt:t.$page.props.user.account.name,src:t.$page.props.user.account.logo_path},null,8,$)):(a(),p(_,{key:1}))]),e("div",q,[e("div",I,n(s.payment.account.name),1),e("div",R,n(s.payment.account.phone),1),c(" "+n(s.payment.account.email),1)]),e("div",z,[e("div",A,[e("span",U,n(t.$t("Payment No",{x:s.payment.id}))+": ",1),e("span",F,n(s.payment.id),1)]),e("div",G,[e("span",O,n(t.$t("Date"))+": ",1),e("span",H,[e("span",J,n(t.$datetime(s.payment.created_at)),1)])]),e("div",K,[e("span",Q,n(t.$t("Reference"))+": ",1),e("span",W,n(t.$reference(s.payment.reference)),1)])])]),s.payment.account.header?(a(),o("div",X,n(s.payment.account.header),1)):i("",!0),s.payment.photo_path?(a(),o("a",{key:1,target:"_blank",class:"np w-full block my-6 px-4 py-3 rounded border bg-gray-200 hover:bg-gray-300",href:`/img/${s.payment.photo_path}?ref=${t.$page.props.user?t.$page.props.user.id+"_"+s.payment.hash:s.payment.hash}`},n(t.$t("View Payment Photo")),9,Y)):i("",!0),e("div",Z,[e("div",ee,[e("div",te,n(t.$t("Company Details")),1),e("div",se,[e("div",ne,[e("span",ae,n(t.$t("Name"))+": ",1),e("span",null,[e("strong",null,n(s.payment.account.name),1)])]),s.payment.account.address?(a(),o("div",oe,[e("span",le,n(t.$t("Address"))+": ",1),e("span",null,n(s.payment.account.address),1)])):i("",!0),e("div",ie,[e("span",re,n(t.$t("Phone"))+": ",1),e("span",null,n(s.payment.account.phone),1)]),s.payment.account.email?(a(),o("div",de,[e("span",me,n(t.$t("Email"))+": ",1),e("span",null,n(s.payment.account.email),1)])):i("",!0)])]),e("div",ce,[e("div",ye,n(t.$t("Customer Details")),1),e("div",he,[e("div",ue,[e("span",pe,n(t.$t("Name"))+": ",1),e("span",null,[e("strong",null,n(s.payment.customer.name),1)])]),s.payment.customer.address?(a(),o("div",_e,[e("span",ge,n(t.$t("Address"))+": ",1),e("span",null,n(s.payment.customer.address),1)])):i("",!0),e("div",fe,[e("span",ve,n(t.$t("Phone"))+": ",1),e("span",null,n(s.payment.customer.phone),1)]),s.payment.customer.email?(a(),o("div",be,[e("span",xe,n(t.$t("Email"))+": ",1),e("span",null,n(s.payment.customer.email),1)])):i("",!0)])])]),e("div",we,[e("h1",ke,n(s.payment.received?t.$t("Payment Note"):t.$t("Payment Request")),1),e("div",Pe,[c(n(t.$t("Amount"))+" ",1),e("div",Ce,n(t.$number(s.payment.amount)),1)]),s.payment.received?(a(),o("div",Ne,[e("div",De,[c(n(t.$t("Paid by"))+" ",1),e("div",Se,n(t.$capitalize(s.payment.gateway)),1)]),s.payment.gateway_transaction_id?(a(),o("div",je,[c(n(t.$t("Gateway Transaction Id"))+" ",1),e("div",Te,n(s.payment.gateway_transaction_id),1)])):i("",!0)])):(a(),o("div",Be,[c(n(t.$t("Payment is not yet received"))+" ",1),s.payment.gateway=="PayU"?(a(),o("a",{key:0,class:"ltr:ml-auto rtl:mr-auto bg-gray-700 hover:bg-gray-800 px-2 py-1 rounded -my-1 -ltr:mr-2 rtl:ml-2 text-center",href:t.route("payu.request",s.payment.id)},n(t.$t("Try again with PayU")),9,Ee)):i("",!0)]))]),s.payment.description?(a(),o("div",Le,[e("h4",Me,n(t.$t("Comment / Note")),1),e("p",null,n(s.payment.description),1)])):i("",!0),s.payment.account.footer?(a(),o("div",{key:3,class:k(["mt-6 px-4 py-3 border rounded",s.modal?"":"mb-3"])},n(s.payment.account.footer),3)):i("",!0),e("div",Ve,n(t.$t("This is a computer-generated document. No signature is required.")),1)])]),s.modal?(a(),o("div",$e,[e("div",qe,[e("button",{type:"button",onClick:l[5]||(l[5]=r=>m.editPayment()),class:"px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},n(t.$t("Edit")),1),t.$page.props.user.account.sms_enabled&&t.$page.props.user.can_sms?(a(),o("button",{key:0,type:"button",disabled:d.sending,onClick:l[6]||(l[6]=r=>m.smsToCustomer()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[d.sending?(a(),o("div",Re)):i("",!0),c(" "+n(t.$t("SMS")),1)],8,Ie)):i("",!0),s.payment.received?i("",!0):(a(),o("button",{key:1,type:"button",disabled:d.sending,onClick:l[7]||(l[7]=r=>m.receivedPayment()),class:"inline-flex items-center mt-1 px-4 py-3 text-sm rounded bg-gray-200 hover:bg-gray-400 border ltr:mr-2 rtl:ml-2"},[d.sending?(a(),o("div",Ae)):i("",!0),c(" "+n(t.$t("Mark as Received")),1)],8,ze))]),e("button",{type:"button",onClick:l[8]||(l[8]=r=>t.$emit("close")),class:"btn-gray"},n(t.$t("Close")),1)])):i("",!0)])):i("",!0),d.viewsms?(a(),p(f,{key:1,show:d.viewsms,"max-width":"2xl",closeable:!0,onClose:l[10]||(l[10]=r=>d.viewsms=!1)},{default:P(()=>[y(g,{order:s.payment,onClose:l[9]||(l[9]=()=>d.viewsms=!1)},null,8,["order"])]),_:1},8,["show"])):i("",!0)])}const We=w(C,[["render",Ue]]);export{We as default};
