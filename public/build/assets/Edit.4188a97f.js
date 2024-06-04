import{L as re}from"./Layout.552d4a0a.js";import{F as oe}from"./FileInput.5b586f1f.js";import{T as se}from"./TextInput.a9140c34.js";import{C as te}from"./CheckboxInput.b20b031f.js";import{T as ae}from"./TextareaInput.2286e672.js";import{L as pe}from"./LoadingButton.b23816ca.js";import{_ as ne,r as b,o as m,c as i,a,w as me,b as s,t as n,d,e as S,n as O,f as ie,T as ue,g as x,h as de}from"./app.beedf8fa.js";import"./Dropdown.9c297445.js";import"./FlashMessages.01bf9828.js";import"./InputError.a8df13b4.js";const Ee={layout:re,remember:"form",props:{taxes:Array,account:Object,timezones:Array},components:{FileInput:oe,LoadingButton:pe,CheckboxInput:te,TextInput:se,TextareaInput:ae},metaInfo(){return{title:this.$tc("Setting",2)}},data(){return{errors:{},error:null,message:null,sending:!1,timezone:{label:"",value:""},form:{logo:null,name:this.account.name,email:this.account.email,phone:this.account.phone,address:this.account.address,gateways:this.account.gateways,header:this.account.header,footer:this.account.footer,fraction:this.account.fraction,per_page:this.account.per_page,language:this.account.language,direction:this.account.direction,default_tax:this.account.default_tax,default_locale:this.account.default_locale,APP_TIMEZONE:this.account.APP_TIMEZONE,MAIL_FROM_NAME:this.account.MAIL_FROM_NAME,MAIL_FROM_ADDRESS:this.account.MAIL_FROM_ADDRESS,MAIL_MAILER:this.account.MAIL_MAILER,MAIL_HOST:this.account.MAIL_HOST,MAIL_PORT:this.account.MAIL_PORT,MAIL_ENCRYPTION:this.account.MAIL_ENCRYPTION,MAIL_USERNAME:this.account.MAIL_USERNAME,MAIL_PASSWORD:this.account.MAIL_PASSWORD,STRIPE_KEY:this.account.STRIPE_KEY,STRIPE_SECRET:this.account.STRIPE_SECRET,STRIPE_CURRENCY:this.account.STRIPE_CURRENCY,PAYU_DEFAULT_GATEWAY:this.account.PAYU_DEFAULT_GATEWAY,PAYU_BIZ_KEY:this.account.PAYU_BIZ_KEY,PAYU_BIZ_SALT:this.account.PAYU_BIZ_SALT,PAYU_BIZ_MODE:this.account.PAYU_BIZ_MODE,PAYU_MONEY_KEY:this.account.PAYU_MONEY_KEY,PAYU_MONEY_SALT:this.account.PAYU_MONEY_SALT,PAYU_MONEY_AUTH:this.account.PAYU_MONEY_AUTH,PAYU_MONEY_MODE:this.account.PAYU_MONEY_MODE,SMS_FROM:this.account.SMS_FROM,VONAGE_KEY:this.account.VONAGE_KEY,VONAGE_SECRET:this.account.VONAGE_SECRET,VONAGE_SIGNATURE_SECRET:this.account.VONAGE_SIGNATURE_SECRET,VONAGE_APP_NAME:this.account.VONAGE_APP_NAME,VONAGE_APP_VERSION:this.account.VONAGE_APP_VERSION,MAILGUN_DOMAIN:this.account.MAILGUN_DOMAIN,MAILGUN_SECRET:this.account.MAILGUN_SECRET,MAILGUN_ENDPOINT:this.account.MAILGUN_ENDPOINT,POSTMARK_TOKEN:this.account.POSTMARK_TOKEN,AWS_ACCESS_KEY_ID:this.account.AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY:this.account.AWS_SECRET_ACCESS_KEY,AWS_DEFAULT_REGION:this.account.AWS_DEFAULT_REGION,stripe:this.account.stripe==1,payu:this.account.payu==1,sms_enabled:this.account.sms_enabled==1,email_enabled:this.account.email_enabled==1,notifications:this.account.notifications==1},tax:null,language:null}},watch:{timezone:function(e){e&&e.value&&(this.form.APP_TIMEZONE=e.value)}},mounted(){this.account.default_tax&&(this.tax=this.taxes.find(e=>e.value==this.account.default_tax)),this.account.language&&(this.language=this.$page.props.locales.find(e=>e.value==this.account.language)),this.form.APP_TIMEZONE&&(this.timezone=this.timezones.find(e=>e.value==this.form.APP_TIMEZONE))},methods:{taxChanged(e){this.tax=e||null,this.form.default_tax=e?e.value:null},langChanged(e){this.language=e||null,this.form.language=e?e.value:null},submit(){this.sending=!0;var e=new FormData;e.append("logo",this.form.logo||""),e.append("name",this.form.name||""),e.append("email",this.form.email||""),e.append("phone",this.form.phone||""),e.append("address",this.form.address||""),e.append("gateways",this.form.gateways||""),e.append("header",this.form.header||""),e.append("footer",this.form.footer||""),e.append("per_page",this.form.per_page||""),e.append("language",this.form.language||""),e.append("direction",this.form.direction||""),e.append("fraction",this.form.fraction||2),e.append("default_tax",this.form.default_tax||""),e.append("default_locale",this.form.default_locale||""),e.append("APP_TIMEZONE",this.form.APP_TIMEZONE||""),e.append("MAIL_MAILER",this.form.MAIL_MAILER||""),e.append("MAIL_HOST",this.form.MAIL_HOST||""),e.append("MAIL_PORT",this.form.MAIL_PORT||""),e.append("MAIL_ENCRYPTION",this.form.MAIL_ENCRYPTION||""),e.append("MAIL_USERNAME",this.form.MAIL_USERNAME||""),e.append("MAIL_PASSWORD",this.form.MAIL_PASSWORD||""),e.append("MAIL_FROM_NAME",this.form.MAIL_FROM_NAME||""),e.append("MAIL_FROM_ADDRESS",this.form.MAIL_FROM_ADDRESS||""),e.append("STRIPE_KEY",this.form.STRIPE_KEY||""),e.append("STRIPE_SECRET",this.form.STRIPE_SECRET||""),e.append("STRIPE_CURRENCY",this.form.STRIPE_CURRENCY||""),e.append("PAYU_DEFAULT_GATEWAY",this.form.PAYU_DEFAULT_GATEWAY||""),e.append("PAYU_BIZ_KEY",this.form.PAYU_BIZ_KEY||""),e.append("PAYU_BIZ_SALT",this.form.PAYU_BIZ_SALT||""),e.append("PAYU_BIZ_MODE",this.form.PAYU_BIZ_MODE||""),e.append("PAYU_MONEY_KEY",this.form.PAYU_MONEY_KEY||""),e.append("PAYU_MONEY_SALT",this.form.PAYU_MONEY_SALT||""),e.append("PAYU_MONEY_AUTH",this.form.PAYU_MONEY_AUTH||""),e.append("PAYU_MONEY_MODE",this.form.PAYU_MONEY_MODE||""),e.append("SMS_FROM",this.form.SMS_FROM||""),e.append("VONAGE_KEY",this.form.VONAGE_KEY||""),e.append("VONAGE_SECRET",this.form.VONAGE_SECRET||""),e.append("VONAGE_SIGNATURE_SECRET",this.form.VONAGE_SIGNATURE_SECRET||""),e.append("MAILGUN_DOMAIN",this.form.MAILGUN_DOMAIN||""),e.append("MAILGUN_SECRET",this.form.MAILGUN_SECRET||""),e.append("MAILGUN_ENDPOINT",this.form.MAILGUN_ENDPOINT||""),e.append("service_postmark_postmark",this.form.service_postmark_postmark||""),e.append("AWS_ACCESS_KEY_ID",this.form.AWS_ACCESS_KEY_ID||""),e.append("AWS_SECRET_ACCESS_KEY",this.form.AWS_SECRET_ACCESS_KEY||""),e.append("AWS_DEFAULT_REGION",this.form.AWS_DEFAULT_REGION||""),e.append("payu",!!this.form.payu),e.append("stripe",!!this.form.stripe),e.append("sms_enabled",!!this.form.sms_enabled),e.append("email_enabled",!!this.form.email_enabled),e.append("_method","put"),this.$axios.post(route("settings.update"),e).then(r=>{this.sending=!1,r.data.success&&(this.$page.props.flash.success=r.data.message,this.form.logo=null,this.$nextTick(()=>{document.body.dir=this.form.direction,document.getElementById("page-contents").scrollTop=0,this.$page.props.user.account.direction=this.form.direction,this.$i18n.global.locale=this.form.language}))}).catch(r=>{this.sending=!1,this.$page.props.flash.error=r.response.data.message,r.response.data.errors&&(this.errors=r.response.data.errors),this.$nextTick(()=>{document.getElementById("page-contents").scrollTop=0})})}}},fe=a("h1",{class:"mb-6 mt-2 font-bold text-lg md:text-2xl"},"Settings",-1),Ae={class:"bg-white rounded shadow overflow-hidden max-w-3xl"},_e={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},Me={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},be={class:"form-label",for:"fraction"},Se={key:0,class:"form-error"},Ie={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},ge={class:"form-label",for:"default_tax"},Ue={key:0,class:"form-error"},Te={key:0,class:"mb-4 ltr:mr-6 rtl:ml-6 p-4 w-full border rounded text-center"},Pe=["src","alt"],Oe={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},Ne={class:"form-label",for:"language"},Ye={key:0,class:"form-error"},he={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},ce={class:"form-label",for:"direction"},Ve={class:"uppercase"},Re={key:0,class:"form-error"},Le=a("div",{class:"w-full"},null,-1),we={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},Ce={class:"form-label",for:"timezone"},De={key:0,class:"form-error"},ye={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},Ge={class:"form-label",for:"mail_driver"},ve={key:0,class:"form-error"},Ke=a("div",{class:"w-full"},null,-1),ke={class:"ml-3 mt-2 w-full",key:"postmark"},Fe={class:"ml-3 mt-2 flex flex-wrap w-full",key:"mailgun"},We={class:"ml-3 mt-2 flex flex-wrap w-full",key:"ses"},Be={class:"ml-3 mt-2 flex flex-wrap w-full",key:"smtp"},Ze=a("div",{class:"w-full"},null,-1),ze={class:"flex items-center flex-wrap mb-6 gap-x-6"},He={class:"text-sm mb-2"},$e={class:"mb-8 -mt-2 text-xs font-bold text-orange-600"},je={class:"px-8 -mt-8 mb-10 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 flex flex-wrap"},qe={key:0,class:"w-full mt-6"},Je={class:"px-8 -mt-8 mb-6 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 flex flex-wrap"},Qe={key:0,class:"w-full mt-6 -mb-6"},Xe={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},xe={class:"form-label",for:"mail_driver"},el={key:0,class:"form-error"},ll={key:0},rl={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},ol={class:"form-label",for:"PAYU_BIZ_KEY"},sl={key:0,class:"form-error"},tl={key:1},al={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},pl={class:"form-label",for:"PAYU_MONEY_KEY"},nl={key:0,class:"form-error"},ml={class:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"};function il(e,r,I,ul,l,M){var h,c,V,R,L,w,C,D,y,G,v,K,k,F,W,B,Z,z,H,$,j,q;const t=b("text-input"),f=b("v-select"),ee=b("file-input"),Y=b("textarea-input"),N=b("checkbox-input"),le=b("loading-button");return m(),i("div",null,[fe,a("div",Ae,[a("form",{onSubmit:r[48]||(r[48]=me((...o)=>M.submit&&M.submit(...o),["prevent"])),autocomplete:"off"},[a("div",_e,[s(t,{modelValue:l.form.name,"onUpdate:modelValue":r[0]||(r[0]=o=>l.form.name=o),errors:(h=e.$page.props.errors)==null?void 0:h.name,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Name")},null,8,["modelValue","errors","label"]),s(t,{label:e.$t("Phone"),modelValue:l.form.phone,"onUpdate:modelValue":r[1]||(r[1]=o=>l.form.phone=o),errors:(c=e.$page.props.errors)==null?void 0:c.phone,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),s(t,{label:e.$t("Email"),modelValue:l.form.email,"onUpdate:modelValue":r[2]||(r[2]=o=>l.form.email=o),errors:(V=e.$page.props.errors)==null?void 0:V.email,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),s(t,{min:"10",max:"100",type:"number",modelValue:l.form.per_page,"onUpdate:modelValue":r[3]||(r[3]=o=>l.form.per_page=o),label:e.$t("Record per page"),errors:(R=e.$page.props.errors)==null?void 0:R.per_page,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["modelValue","label","errors"]),a("div",Me,[a("label",be,n(e.$t("Decimals")),1),s(f,{transition:"",clearable:!1,"input-id":"fraction",modelValue:l.form.fraction,"onUpdate:modelValue":r[4]||(r[4]=o=>l.form.fraction=o),options:[0,1,2,3,4],dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Decimals")})},null,8,["modelValue","dir","placeholder"]),(L=e.$page.props.errors)!=null&&L.fraction?(m(),i("div",Se,n(l.errors.fraction[0]),1)):d("",!0)]),s(ee,{type:"file",accept:"image/*",label:e.$t("Logo"),modelValue:l.form.logo,"onUpdate:modelValue":r[5]||(r[5]=o=>l.form.logo=o),errors:(w=e.$page.props.errors)==null?void 0:w.logo,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),a("div",Ie,[a("label",ge,n(e.$t("Default Tax")),1),s(f,{value:l.tax,transition:"",options:I.taxes,onInput:M.taxChanged,"input-id":"default_tax","onOption:selected":M.taxChanged,dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Default Tax")})},null,8,["value","options","onInput","onOption:selected","dir","placeholder"]),(C=e.$page.props.errors)!=null&&C.default_tax?(m(),i("div",Ue,n(l.errors.default_tax[0]),1)):d("",!0)]),I.account.logo_path?(m(),i("div",Te,[a("img",{src:I.account.logo_path,alt:I.account.name},null,8,Pe)])):d("",!0),a("div",Oe,[a("label",Ne,n(e.$t("Language")),1),s(f,{transition:"",modelValue:l.language,"onUpdate:modelValue":r[6]||(r[6]=o=>l.language=o),clearable:!1,"input-id":"language",onInput:M.langChanged,"onOption:selected":M.langChanged,options:e.$page.props.locales,dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Language")})},null,8,["modelValue","onInput","onOption:selected","options","dir","placeholder"]),(D=e.$page.props.errors)!=null&&D.language?(m(),i("div",Ye,n(l.errors.language[0]),1)):d("",!0)]),s(t,{type:"text",modelValue:l.form.default_locale,"onUpdate:modelValue":r[7]||(r[7]=o=>l.form.default_locale=o),label:e.$t("Locale for date & number"),errors:(y=e.$page.props.errors)==null?void 0:y.default_locale,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["modelValue","label","errors"]),a("div",he,[a("label",ce,n(e.$t("Direction")),1),s(f,{transition:"",clearable:!1,"input-id":"direction",modelValue:l.form.direction,"onUpdate:modelValue":r[8]||(r[8]=o=>l.form.direction=o),options:["ltr","rtl"],dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Direction")})},{option:S(({label:o})=>[a("span",Ve,n(o),1)]),_:1},8,["modelValue","dir","placeholder"]),(G=e.$page.props.errors)!=null&&G.direction?(m(),i("div",Re,n(l.errors.direction[0]),1)):d("",!0)]),s(t,{label:e.$t("Gateways"),modelValue:l.form.gateways,"onUpdate:modelValue":r[9]||(r[9]=o=>l.form.gateways=o),errors:(v=e.$page.props.errors)==null?void 0:v.gateways,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","errors"]),s(t,{modelValue:l.form.address,"onUpdate:modelValue":r[10]||(r[10]=o=>l.form.address=o),errors:(K=e.$page.props.errors)==null?void 0:K.address,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Address")},null,8,["modelValue","errors","label"]),s(Y,{modelValue:l.form.header,"onUpdate:modelValue":r[11]||(r[11]=o=>l.form.header=o),errors:(k=e.$page.props.errors)==null?void 0:k.header,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Order Header")},null,8,["modelValue","errors","label"]),s(Y,{modelValue:l.form.footer,"onUpdate:modelValue":r[12]||(r[12]=o=>l.form.footer=o),errors:(F=e.$page.props.errors)==null?void 0:F.footer,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Order Footer")},null,8,["modelValue","errors","label"]),Le,a("div",we,[a("label",Ce,n(e.$t("Timezone")),1),s(f,{clearable:!1,modelValue:l.timezone,"onUpdate:modelValue":r[13]||(r[13]=o=>l.timezone=o),options:I.timezones,dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Timezone")}),class:O({error:l.errors.APP_TIMEZONE&&l.errors.APP_TIMEZONE.length})},{option:S(o=>[(m(),i("span",{class:"text-sm",key:o.value},n(o.label),1))]),_:1},8,["modelValue","options","dir","placeholder","class"]),(W=e.$page.props.errors)!=null&&W.APP_TIMEZONE?(m(),i("div",De,n(l.errors.APP_TIMEZONE[0]),1)):d("",!0)]),s(t,{label:e.$t("From Name"),modelValue:l.form.MAIL_FROM_NAME,"onUpdate:modelValue":r[14]||(r[14]=o=>l.form.MAIL_FROM_NAME=o),errors:(B=e.$page.props.errors)==null?void 0:B.MAIL_FROM_NAME,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),s(t,{label:e.$t("From Email"),modelValue:l.form.MAIL_FROM_ADDRESS,"onUpdate:modelValue":r[15]||(r[15]=o=>l.form.MAIL_FROM_ADDRESS=o),errors:(Z=e.$page.props.errors)==null?void 0:Z.MAIL_FROM_ADDRESS,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),a("div",ye,[a("label",Ge,n(e.$t("Mail Driver")),1),s(f,{searchable:!1,clearable:!1,filterable:!1,modelValue:l.form.MAIL_MAILER,"onUpdate:modelValue":r[16]||(r[16]=o=>l.form.MAIL_MAILER=o),dir:e.$page.props.user.account.direction,options:["smtp","mailgun","postmark","ses"],placeholder:e.$t("select_x",{x:e.$t("Mail Driver")}),class:O({error:l.errors.MAIL_MAILER&&l.errors.MAIL_MAILER.length})},null,8,["modelValue","dir","placeholder","class"]),(z=e.$page.props.errors)!=null&&z.MAIL_MAILER?(m(),i("div",ve,n(l.errors.MAIL_MAILER[0]),1)):d("",!0)]),Ke,l.form.MAIL_MAILER?(m(),ie(ue,{key:1,tag:"div",name:"slide-fade",class:"w-full bg-gray-200 rounded border px-4 pt-4 mb-6 ltr:mr-6 rtl:ml-6"},{default:S(()=>{var o,A,_,E,g,U,T,P,u,J,Q,X;return[l.form.MAIL_MAILER=="postmark"?(m(),i("div",ke,[s(t,{class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Postmark Token"),modelValue:l.form.POSTMARK_TOKEN,"onUpdate:modelValue":r[17]||(r[17]=p=>l.form.POSTMARK_TOKEN=p),errors:(o=e.$page.props.errors)==null?void 0:o.POSTMARK_TOKEN},null,8,["label","modelValue","errors"])])):l.form.MAIL_MAILER=="mailgun"?(m(),i("div",Fe,[s(t,{modelValue:l.form.MAILGUN_DOMAIN,"onUpdate:modelValue":r[18]||(r[18]=p=>l.form.MAILGUN_DOMAIN=p),errors:(A=e.$page.props.errors)==null?void 0:A.MAILGUN_DOMAIN,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Mailgun Domain")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.MAILGUN_SECRET,"onUpdate:modelValue":r[19]||(r[19]=p=>l.form.MAILGUN_SECRET=p),errors:(_=e.$page.props.errors)==null?void 0:_.MAILGUN_SECRET,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("Mailgun Secret")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.MAILGUN_ENDPOINT,"onUpdate:modelValue":r[20]||(r[20]=p=>l.form.MAILGUN_ENDPOINT=p),errors:(E=e.$page.props.errors)==null?void 0:E.MAILGUN_ENDPOINT,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Mailgun Endpoint")},null,8,["modelValue","errors","label"])])):l.form.MAIL_MAILER=="ses"?(m(),i("div",We,[s(t,{modelValue:l.form.AWS_ACCESS_KEY_ID,"onUpdate:modelValue":r[21]||(r[21]=p=>l.form.AWS_ACCESS_KEY_ID=p),errors:(g=e.$page.props.errors)==null?void 0:g.AWS_ACCESS_KEY_ID,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("SES Key")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.AWS_SECRET_ACCESS_KEY,"onUpdate:modelValue":r[22]||(r[22]=p=>l.form.AWS_SECRET_ACCESS_KEY=p),errors:(U=e.$page.props.errors)==null?void 0:U.AWS_SECRET_ACCESS_KEY,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",label:e.$t("SES Secret")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.AWS_DEFAULT_REGION,"onUpdate:modelValue":r[23]||(r[23]=p=>l.form.AWS_DEFAULT_REGION=p),errors:(T=e.$page.props.errors)==null?void 0:T.AWS_DEFAULT_REGION,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("SES Region")},null,8,["modelValue","errors","label"])])):l.form.MAIL_MAILER=="smtp"?(m(),i("div",Be,[s(t,{modelValue:l.form.MAIL_HOST,"onUpdate:modelValue":r[24]||(r[24]=p=>l.form.MAIL_HOST=p),errors:(P=e.$page.props.errors)==null?void 0:P.MAIL_HOST,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-2/4",label:e.$t("SMTP Host")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.MAIL_PORT,"onUpdate:modelValue":r[25]||(r[25]=p=>l.form.MAIL_PORT=p),errors:(u=e.$page.props.errors)==null?void 0:u.MAIL_PORT,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/4",label:e.$t("SMTP Port")},null,8,["modelValue","errors","label"]),s(t,{label:e.$t("Encryption"),modelValue:l.form.MAIL_ENCRYPTION,"onUpdate:modelValue":r[26]||(r[26]=p=>l.form.MAIL_ENCRYPTION=p),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/4",errors:(J=e.$page.props.errors)==null?void 0:J.MAIL_ENCRYPTION},null,8,["label","modelValue","errors"]),s(t,{label:e.$t("SMTP Username"),modelValue:l.form.MAIL_USERNAME,"onUpdate:modelValue":r[27]||(r[27]=p=>l.form.MAIL_USERNAME=p),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:(Q=e.$page.props.errors)==null?void 0:Q.MAIL_USERNAME},null,8,["label","modelValue","errors"]),s(t,{label:e.$t("SMTP Password"),modelValue:l.form.MAIL_PASSWORD,"onUpdate:modelValue":r[28]||(r[28]=p=>l.form.MAIL_PASSWORD=p),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:(X=e.$page.props.errors)==null?void 0:X.MAIL_PASSWORD},null,8,["label","modelValue","errors"])])):d("",!0)]}),_:1})):d("",!0),s(t,{modelValue:l.form.VONAGE_KEY,"onUpdate:modelValue":r[29]||(r[29]=o=>l.form.VONAGE_KEY=o),label:e.$t("Vonage API Key"),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:(H=e.$page.props.errors)==null?void 0:H.VONAGE_KEY},null,8,["modelValue","label","errors"]),s(t,{modelValue:l.form.VONAGE_SECRET,"onUpdate:modelValue":r[30]||(r[30]=o=>l.form.VONAGE_SECRET=o),label:e.$t("Vonage API Secret"),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:($=e.$page.props.errors)==null?void 0:$.VONAGE_SECRET},null,8,["modelValue","label","errors"]),s(t,{modelValue:l.form.SMS_FROM,"onUpdate:modelValue":r[31]||(r[31]=o=>l.form.SMS_FROM=o),label:e.$t("Vonage SMS From"),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:(j=e.$page.props.errors)==null?void 0:j.SMS_FROM},null,8,["modelValue","label","errors"]),s(t,{label:e.$t("Vonage Signature Secret"),modelValue:l.form.VONAGE_SIGNATURE_SECRET,"onUpdate:modelValue":r[32]||(r[32]=o=>l.form.VONAGE_SIGNATURE_SECRET=o),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2",errors:(q=e.$page.props.errors)==null?void 0:q.VONAGE_SIGNATURE_SECRET},null,8,["label","modelValue","errors"]),Ze,a("div",ze,[a("p",He,n(e.$t("Enable Auto Notifications")),1),s(N,{class:"mb-2",id:"email_enabled",label:e.$t("By Email"),checked:l.form.email_enabled,"onUpdate:checked":r[33]||(r[33]=o=>l.form.email_enabled=o)},null,8,["label","checked"]),s(N,{class:"mb-2",id:"sms_enabled",label:e.$t("By SMS"),checked:l.form.sms_enabled,"onUpdate:checked":r[34]||(r[34]=o=>l.form.sms_enabled=o)},null,8,["label","checked"])]),a("p",$e,n(e.$t("Please make sure that you have filled all Mail & Vonage settings correctly before enabling the notifications.")),1)]),a("div",je,[s(N,{id:"stripe",class:"mb-2",checked:l.form.stripe,"onUpdate:checked":r[35]||(r[35]=o=>l.form.stripe=o),label:e.$t("Enable Stripe Payments")},null,8,["checked","label"]),s(x,{name:"slide-fade",class:"w-full bg-gray-200 rounded border px-4 pt-4 mb-6 ltr:mr-6 rtl:ml-6"},{default:S(()=>{var o,A,_;return[l.form.stripe?(m(),i("div",qe,[s(t,{modelValue:l.form.STRIPE_KEY,"onUpdate:modelValue":r[36]||(r[36]=E=>l.form.STRIPE_KEY=E),errors:(o=e.$page.props.errors)==null?void 0:o.STRIPE_KEY,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Stripe Publishable Key")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.STRIPE_SECRET,"onUpdate:modelValue":r[37]||(r[37]=E=>l.form.STRIPE_SECRET=E),errors:(A=e.$page.props.errors)==null?void 0:A.STRIPE_SECRET,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Stripe Secret Key")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.STRIPE_CURRENCY,"onUpdate:modelValue":r[38]||(r[38]=E=>l.form.STRIPE_CURRENCY=E),errors:(_=e.$page.props.errors)==null?void 0:_.STRIPE_CURRENCY,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("Stripe Currency (ISO code, USD, EUR etc)")},null,8,["modelValue","errors","label"])])):d("",!0)]}),_:1})]),a("div",Je,[s(N,{id:"payu",class:"mb-2",checked:l.form.payu,"onUpdate:checked":r[39]||(r[39]=o=>l.form.payu=o),label:e.$t("Enable PayU India Payments (\u20B9)")},null,8,["checked","label"]),s(x,{name:"slide-fade",class:"w-full bg-gray-200 rounded border px-4 pt-4 mb-6 ltr:mr-6 rtl:ml-6"},{default:S(()=>{var o,A,_,E,g,U,T,P;return[l.form.payu?(m(),i("div",Qe,[a("div",Xe,[a("label",xe,n(e.$t("PayU Gateway")),1),s(f,{clearable:!1,searchable:!1,filterable:!1,options:["biz","money"],modelValue:l.form.PAYU_DEFAULT_GATEWAY,"onUpdate:modelValue":r[40]||(r[40]=u=>l.form.PAYU_DEFAULT_GATEWAY=u),dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("PayU Gateway")}),class:O({error:l.errors.PAYU_DEFAULT_GATEWAY&&l.errors.PAYU_DEFAULT_GATEWAY.length})},null,8,["modelValue","dir","placeholder","class"]),(o=e.$page.props.errors)!=null&&o.PAYU_DEFAULT_GATEWAY?(m(),i("div",el,n(l.errors.PAYU_DEFAULT_GATEWAY[0]),1)):d("",!0)]),l.form.PAYU_DEFAULT_GATEWAY=="biz"?(m(),i("span",ll,[a("div",rl,[a("label",ol,n(e.$t("PayU Mode")),1),s(f,{searchable:!1,clearable:!1,filterable:!1,options:["live","test"],modelValue:l.form.PAYU_BIZ_MODE,"onUpdate:modelValue":r[41]||(r[41]=u=>l.form.PAYU_BIZ_MODE=u),dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("PayU Mode")}),class:O({error:l.errors.PAYU_BIZ_MODE&&l.errors.PAYU_BIZ_MODE.length})},null,8,["modelValue","dir","placeholder","class"]),(A=e.$page.props.errors)!=null&&A.PAYU_BIZ_MODE?(m(),i("div",sl,n(l.errors.PAYU_BIZ_MODE[0]),1)):d("",!0)]),s(t,{modelValue:l.form.PAYU_BIZ_KEY,"onUpdate:modelValue":r[42]||(r[42]=u=>l.form.PAYU_BIZ_KEY=u),errors:(_=e.$page.props.errors)==null?void 0:_.PAYU_BIZ_KEY,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("PayU Biz Key")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.PAYU_BIZ_SALT,"onUpdate:modelValue":r[43]||(r[43]=u=>l.form.PAYU_BIZ_SALT=u),errors:(E=e.$page.props.errors)==null?void 0:E.PAYU_BIZ_SALT,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("PayU Biz Salt")},null,8,["modelValue","errors","label"])])):d("",!0),l.form.PAYU_DEFAULT_GATEWAY=="money"?(m(),i("span",tl,[a("div",al,[a("label",pl,n(e.$t("PayU Mode")),1),s(f,{searchable:!1,clearable:!1,filterable:!1,options:["live","test"],modelValue:l.form.PAYU_MONEY_MODE,"onUpdate:modelValue":r[44]||(r[44]=u=>l.form.PAYU_MONEY_MODE=u),dir:e.$page.props.user.account.direction,placeholder:e.$t("select_x",{x:e.$t("PayU Mode")}),class:O({error:l.errors.PAYU_MONEY_MODE&&l.errors.PAYU_MONEY_MODE.length})},null,8,["modelValue","dir","placeholder","class"]),(g=e.$page.props.errors)!=null&&g.PAYU_MONEY_MODE?(m(),i("div",nl,n(l.errors.PAYU_MONEY_MODE[0]),1)):d("",!0)]),s(t,{modelValue:l.form.PAYU_MONEY_KEY,"onUpdate:modelValue":r[45]||(r[45]=u=>l.form.PAYU_MONEY_KEY=u),errors:(U=e.$page.props.errors)==null?void 0:U.PAYU_MONEY_KEY,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("PayU Money Key")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.PAYU_MONEY_SALT,"onUpdate:modelValue":r[46]||(r[46]=u=>l.form.PAYU_MONEY_SALT=u),errors:(T=e.$page.props.errors)==null?void 0:T.PAYU_MONEY_SALT,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",label:e.$t("PayU Money Salt")},null,8,["modelValue","errors","label"]),s(t,{modelValue:l.form.PAYU_MONEY_AUTH,"onUpdate:modelValue":r[47]||(r[47]=u=>l.form.PAYU_MONEY_AUTH=u),class:"ltr:pr-6 rtl:pl-6 pb-8 w-full",errors:(P=e.$page.props.errors)==null?void 0:P.PAYU_MONEY_AUTH,label:e.$t("PayU Money Auth")},null,8,["modelValue","errors","label"])])):d("",!0)])):d("",!0)]}),_:1})]),a("div",ml,[s(le,{loading:l.sending,class:"btn-gray ltr:ml-auto rtl:mr-auto",type:"submit"},{default:S(()=>[de(n(e.$t("update_x",{x:e.$tc("Setting",2)})),1)]),_:1},8,["loading"])])],32)])])}const Ul=ne(Ee,[["render",il]]);export{Ul as default};