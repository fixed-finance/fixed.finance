(this["webpackJsonpcash-market"]=this["webpackJsonpcash-market"]||[]).push([[12],{1008:function(e,t,n){},1047:function(e,t,ge){"use strict";ge.r(t);var n=ge(52),fe=ge(37),a=ge(3),we=ge.n(a),ye=ge(15),Fe=ge(20),_e=ge(0),c=ge.n(_e),s=ge(899),i=ge.n(s),l=ge(51),o=(ge(948),ge(918)),a=ge.n(o),Ne=ge(218),ve=ge(884),De=ge(159),Ie=ge(262),Be=ge(83),Se=ge(271),Re=ge(1038),Pe=ge(879),Me=ge(460),Ee=ge(881),ke=ge(894),Te=ge(163),Ce=ge(56),s=ge(878),Ae=ge(47),o=ge(46),Le=ge.n(o),ze=ge(104),Ye=ge.n(ze),Xe=ge(328),$e=ge(91),He=ge(105),Je=ge(7),r={totalDepositsBalance:0,totalInterestEarned:0,totalFIXEarned:0};function d(e,t){switch(t.type){case"setTotalDepositsBalance":return Object(fe.a)(Object(fe.a)({},e),{},{totalDepositsBalance:Number(t.setTotalDepositsBalance)});case"setTotalInterestEarned":return Object(fe.a)(Object(fe.a)({},e),{},{totalInterestEarned:Number(t.setTotalInterestEarned)});case"setTotalFIXEarned":return Object(fe.a)(Object(fe.a)({},e),{},{totalFIXEarned:t.setTotalFIXEarned});default:throw new Error}}function Ve(e){var t=Object(_e.useRef)(),n=e.min,a=e.max,c=e.unit,s=e.step,i=e.cur,l=e.dcur,o=e.minLabel,r=e.maxLabel,d=e.onCurrent,b=Object(_e.useState)(i),j=Object(Fe.a)(b,2),b=j[0],m=j[1];return i&&new Error("cur is required"),Object(_e.useEffect)(function(){i&&m(i)},[i]),Object(Je.jsxs)(f,{margin:e.margin||"0",ref:t,children:[Object(Je.jsxs)(w,{children:[o||n,c]}),Object(Je.jsx)(h.a,{style:{margin:"0 0 0 0"},step:s,value:b,min:Number(n),max:Number(a),tooltipVisible:!1,onChange:function(e){d(e),m(e)},trackStyle:{backgroundColor:"rgba(34, 131, 226, 0)",height:"25px"},railStyle:{backgroundImage:"url(".concat(g.default,")"),height:"25px"},handleStyle:{height:"25px",width:"12px",background:"#00A4E3",backgroundSize:"100% 100%",borderRadius:0,margin:0,border:"none"}},Number(l)),Object(Je.jsxs)(y,{children:[r||a,c]})]})}var b,j,m,u,O,p,x=Object(l.b)(ke.a)(Object(n.a)(["\n  border: none;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  \n  .card-body{\n    padding: 16px;\n  }\n"])),qe=(Object(l.b)(s.a)(Object(n.a)(["\n  padding: 0 5px 0 0;\n"])),Object(l.b)(Be.a)(Object(n.a)(["\n  background: #23BEFA;\n  border-color: #23BEFA;\n  font-size: 12px;\n"])),function(e){Object(Ce.g)().account;var t=c.a.useReducer(d,r),t=Object(Fe.a)(t,2),t=(t[0],t[1],c.a.useState(void 0)),t=Object(Fe.a)(t,2),t=(t[0],t[1],c.a.useContext(Xe.a));return Object(Je.jsx)(Pe.a,{className:"content_div_title",children:t.state.isMobile?Object(Je.jsxs)(Je.Fragment,{children:[Object(Je.jsx)(Me.a,{xs:"6",md:"6",style:{paddingRight:"7.5px"},children:Object(Je.jsx)(x,{style:{width:"100%",height:"80px"},children:Object(Je.jsx)(ke.a.Body,{children:Object(Je.jsx)(Pe.a,{className:"content_short",children:Object(Je.jsxs)(Me.a,{md:"12",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content1")}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_content",children:["$",Object(He.g)(e.TotalDeficitFunded.toFixed(4))]})]})})})})}),Object(Je.jsx)(Me.a,{xs:"6",md:"6",style:{paddingLeft:"7.5px"},children:Object(Je.jsx)(x,{style:{width:"100%",height:"80px"},children:Object(Je.jsx)(ke.a.Body,{children:Object(Je.jsx)(Pe.a,{className:"content_short",children:Object(Je.jsxs)(Me.a,{md:"12",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content2")}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_content",children:["$",Object(He.g)(e.TotalRecordedFundedDepositAmount.toFixed(4))]})]})})})})}),Object(Je.jsx)(Me.a,{xs:"6",md:"6",style:{paddingRight:"7.5px"},children:Object(Je.jsx)(x,{style:{width:"100%",height:"98px"},children:Object(Je.jsx)(ke.a.Body,{children:Object(Je.jsx)(Pe.a,{className:"content",children:Object(Je.jsxs)(Me.a,{md:"12",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content3")}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_content",children:["$",Object(He.g)(e.TotalInterestEarned.toFixed(4))]})]})})})})}),Object(Je.jsx)(Me.a,{xs:"6",md:"6",style:{paddingLeft:"7.5px"},children:Object(Je.jsx)(x,{style:{width:"100%",height:"98px"},children:Object(Je.jsx)(ke.a.Body,{children:Object(Je.jsx)(Pe.a,{className:"content",children:Object(Je.jsxs)(Me.a,{md:"12",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content4")}),Object(Je.jsx)(Me.a,{md:"12",className:"content_content",children:Object(He.g)(e.TotalFIX.toFixed(4))}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_desc",children:["$",Object(He.g)(e.TotalFIXEarned.toFixed(4))]})]})})})})})]}):Object(Je.jsx)(Me.a,{xs:"12",md:"12",children:Object(Je.jsx)(ke.a,{style:{width:"100%",height:"142px",marginBottom:"20px",border:"none"},children:Object(Je.jsx)(ke.a.Body,{children:Object(Je.jsxs)(Pe.a,{className:"content_pc",children:[Object(Je.jsxs)(Me.a,{md:"3",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content1")}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_content",children:["$",Object(He.g)(e.TotalDeficitFunded.toFixed(4))]})]}),Object(Je.jsxs)(Me.a,{md:"3",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content2")}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_content",children:["$",Object(He.g)(e.TotalRecordedFundedDepositAmount.toFixed(4))]})]}),Object(Je.jsxs)(Me.a,{md:"3",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content3")}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_content",children:["$",Object(He.g)(e.TotalInterestEarned.toFixed(4))]})]}),Object(Je.jsxs)(Me.a,{md:"3",children:[Object(Je.jsx)(Me.a,{md:"12",className:"content_title",children:Object(Ae.a)("bonds_content4")}),Object(Je.jsx)(Me.a,{md:"12",className:"content_content",children:Object(He.g)(e.TotalFIX.toFixed(4))}),Object(Je.jsxs)(Me.a,{md:"12",className:"content_desc",children:["$",Object(He.g)(e.TotalFIXEarned.toFixed(4))]})]})]})})})})})}),h=ge(896),g=ge(953),f=l.b.div(Object(n.a)(["\n  ","\n"]),function(e){e=e.margin;return Object(l.a)(b=b||Object(n.a)(["\n      margin: ","px 0;\n      position: relative;\n  "]),e)}),s=l.b.span(Object(n.a)(["\n  font-family: Roboto-Medium;\n  font-size: 16px;\n  color: #1B1F2D;\n  line-height: 18px;\n  position: absolute;\n  top: 50px;\n  font-weight: bold;\n  top: 34px;\n"])),w=Object(l.b)(s)(Object(n.a)(["\n  left: 0;\n"])),y=Object(l.b)(s)(Object(n.a)(["\n  right: 0;\n"])),s=(ge(1008),ge(31)),Ge=ge.n(s),Ke=ge(897),Qe=ge(858),Ue=(ge(857),ge(50)),We=ge(222),Ze=ge(18),s=ge(873),et=ge.n(s),tt=ge(331),nt=ge(951),at=ge(902),ct=Ne.a.Option;i.a.extend(a.a);var st={labelCol:{span:24},wrapperCol:{span:24}},it={wrapperCol:{offset:0,span:8}},lt=Object(l.b)(ve.a)(Object(n.a)(["\n.showNumberRow{\n  >div:nth-of-type(1){\n    padding: 0;\n  }\n}\n\n.removeLabelPadding{\n  >div:nth-of-type(n){\n    padding: 0;\n  }\n}\n\n.ant-form-item-label > label{\n  opacity: 0.65;\n  font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 14px;\n  color: #1B1F2D;\n  font-weight: bold;\n}\n\n\n.ant-form-vertical .ant-form-item-label, .ant-col-24.ant-form-item-label, .ant-col-xl-24.ant-form-item-label{\n  padding: 0;\n}\n\n.ant-select-selection-item{\n  font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 16px;\n  color: #1B1F2D;\n  line-height: 18px;\n}\n\n","\n"]),function(e){return e.ismobile,Object(l.a)(j=j||Object(n.a)(["\n  .ant-form-item-label > label{\n    font-size: 10px;\n  }\n"]))}),ot=Object(l.b)(Me.a)(Object(n.a)(["\n  padding-left: 40px;\n  padding-top: 22px;\n  border-right: 10px solid rgba(203, 203, 210, 0.15);\n\n  @media screen and (max-width: 768px){\n    padding-left: 16px;\n    border-right: none;\n    .content_title{\n      padding: 15.5px 0 15.5px 16px;\n    }\n  }\n"])),rt=Object(l.b)(Me.a)(Object(n.a)(["\n  padding-left: 40px;\n  padding-top: 22px;\n  border-left: 10px solid rgba(203, 203, 210, 0.15);\n\n  @media screen and (max-width: 768px){\n    padding-left: 16px;\n    border-left: none;\n    .content_title{\n      padding: 15.5px 0 15.5px 16px;\n    }\n  }\n"])),dt=Object(l.b)(Me.a)(Object(n.a)(["\n  opacity: 0.65;\n  font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 14px;\n  color: #1B1F2D;\n  font-weight: bold;\n\n  @media screen and (max-width: 768px){\n    font-size: 11px;\n  }\n"])),bt=(l.b.a(Object(n.a)(["\n  color: #1DC7EA;\n"])),Object(l.b)(ke.a.Text)(Object(n.a)(["\n  font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 18px;\n  line-height: 18px;\n  color: #0FBCFF;\n  font-weight: bold;\n  background: #FCFAFA;\n  padding 20px;\n  padding-left: 40px;\n  margin-bottom: 0;\n  height:60px;\n  \n  @media screen and (max-width: 768px){\n    font-size: 16px;\n    line-height: 16px;\n    height: 50px;\n  }\n"]))),jt=l.b.span(Object(n.a)(["\n  font-family: Roboto-Medium;\n  font-size: 28px;\n  color: #1B1F2D;\n  font-weight: bold;\n  ","\n"]),function(e){return e.ismobile&&Object(l.a)(m=m||Object(n.a)(["\n    font-size: 29px\n  "]))}),mt=l.b.span(Object(n.a)(["\n  position: absolute;\n  top: 0;\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0FBCFF;\n  ","\n"]),function(e){return e.ismobile&&Object(l.a)(u=u||Object(n.a)(["\n    font-size: 11px\n  "]))}),ut=Object(l.b)(Me.a)(Object(n.a)(["\n&.col{\n  padding: 0 0px;\n}\n\n&.col:nth-of-type(1){\n  font-family: Roboto-Medium;\n  font-size: 20px;\n  color: #1B1F2D;\n  line-height:24px;\n  font-weight: 500;\n}\n\n&.col:nth-of-type(2){\n  opacity: 0.5;\n  font-family: Roboto-Medium;\n  font-size: 12px;\n  color: #1B1F2D;\n}\n\n","\n\n"]),function(e){return e.ismobile&&Object(l.a)(O=O||Object(n.a)(["\n  &.col:nth-of-type(1){\n    font-size: 18px;\n  }\n  &.col:nth-of-type(2){\n    font-size: 8px;\n  }\n"]))}),Ot=Object(l.b)(Me.a)(Object(n.a)(["\n  width: 100%;\n  padding: 6px 15px 6px 6px;\n  .ant-btn{\n    border: 1px solid #0FBCFF;\n    border-radius: 4px;\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #0FBCFF;\n    float: right;\n    // margin-left: 15px;\n  }\n\n\n  @media screen and (max-width: 768px){\n    padding: 0 2px;\n  }\n\n\n"])),pt=(Object(l.b)(Be.a)(Object(n.a)(["\n  background: #23BEFA;\n  border-radius: 4px;\n  border: none;\n"])),l.b.span(Object(n.a)(["\n  ","\n"]),function(e){e=e.ismobile;return Object(l.a)(p=p||Object(n.a)(["\n    font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n    font-size: ",";\n    color: #1B1F2D;\n    line-height: 18px;\n    font-weight: bold;\n    position: relative;\n    top: 10px;\n"]),e?"14px":"18px")}));t.default=function(e){var t=ve.a.useForm(),l=Object(Fe.a)(t,1)[0],n=Object(Ce.g)(),o=n.account,a=n.ethereum,r=n.status,d=Object(_e.useContext)(Xe.a).state,c=Object(_e.useState)(void 0),s=Object(Fe.a)(c,2),f=s[0],i=s[1],b=Object(_e.useState)(0),j=Object(Fe.a)(b,2),w=j[0],m=j[1],u=Object(_e.useState)(0),O=Object(Fe.a)(u,2),y=O[0],p=O[1],x=Object(_e.useState)([]),h=Object(Fe.a)(x,2),F=h[0],g=h[1],_=Object(_e.useState)([]),N=Object(Fe.a)(_,2),v=N[0],D=N[1],I=Object(_e.useState)(0),B=Object(Fe.a)(I,2),S=B[0],R=B[1],P=Object(_e.useState)(0),M=Object(Fe.a)(P,2),E=M[0],k=M[1],T=Object(_e.useState)(!0),C=Object(Fe.a)(T,2),A=C[0],L=C[1],t=Object(_e.useState)(!0),n=Object(Fe.a)(t,2),z=n[0],Y=n[1],c=Object(_e.useState)(!1),s=Object(Fe.a)(c,2),b=s[0],X=s[1],j=Object(_e.useState)(!1),u=Object(Fe.a)(j,2),O=u[0],$=u[1],x=Object(_e.useState)(!1),h=Object(Fe.a)(x,2),_=h[0],H=h[1],N=Object(_e.useState)(""),I=Object(Fe.a)(N,2),B=I[0],J=I[1],P=Object(_e.useState)(""),M=Object(Fe.a)(P,2),T=M[0],V=M[1],C=Object(_e.useState)([]),t=Object(Fe.a)(C,2),q=t[0],G=t[1],n=Object(_e.useState)(""),c=Object(Fe.a)(n,2),s=c[0],K=c[1],j=Object(_e.useState)(""),u=Object(Fe.a)(j,2),x=u[0],Q=u[1],h=Object(_e.useState)(""),N=Object(Fe.a)(h,2),U=N[0],W=N[1],I=Object(_e.useState)(18),P=Object(Fe.a)(I,2),Z=(P[0],P[1]),M=Object(_e.useState)(""),C=Object(Fe.a)(M,2),ee=C[0],te=C[1],t=Object(_e.useState)([]),n=Object(Fe.a)(t,2),ne=n[0],ae=n[1],c=Object(_e.useState)(!1),j=Object(Fe.a)(c,2),ce=j[0],se=j[1],u=Object(_e.useState)({}),h=Object(Fe.a)(u,2),ie=h[0],le=h[1],N=Object(_e.useState)(new Ge.a(0)),I=Object(Fe.a)(N,2),P=I[0],oe=I[1],M=Object(_e.useState)(new Ge.a(0)),C=Object(Fe.a)(M,2),t=C[0],re=C[1],n=Object(_e.useState)(new Ge.a(0)),c=Object(Fe.a)(n,2),j=c[0],de=c[1],u=Object(_e.useState)(new Ge.a(0)),h=Object(Fe.a)(u,2),N=h[0],be=h[1],I=Object(_e.useState)(new Ge.a(0)),M=Object(Fe.a)(I,2),C=M[0],je=M[1],n=Object(_e.useState)({}),c=Object(Fe.a)(n,2),me=c[0],ue=c[1],u=Object(_e.useState)({payDebt:new Ge.a(0).toFixed(4),payDebtAmount:new Ge.a(0).toFixed(4),earnOnDebt:new Ge.a(0).toFixed(4),earnOnDebtAmount:new Ge.a(0).toFixed(4),profitDebt:new Ge.a(0).toFixed(4),profitDebtAmount:new Ge.a(0).toFixed(4),rewardsDebt:new Ge.a(0).toFixed(4),rewardsDebtAmount:new Ge.a(0).toFixed(4),avgTimes:0,middleTimes:0,totalROI:new Ge.a(0).toFixed(4),fixROI:new Ge.a(0).toFixed(4)}),h=Object(Fe.a)(u,2),I=h[0],Oe=h[1],M=Object(nt.a)(U,ee),n=Object(Je.jsxs)(De.a,{className:"menu",children:[Object(Je.jsxs)(Pe.a,{className:"menuTitle",md:"12",children:[Object(Je.jsx)(Me.a,{xs:!0,md:"8",className:"menuLeft floatFont",children:Object(Je.jsxs)("span",{children:[" ",Object(Je.jsx)("span",{style:{whiteSpace:"nowrap"},children:Object(Ae.a)("bonds_right_menu_title")})," (",s,":",x,")"]})}),Object(Je.jsx)(Me.a,{xs:!0,md:"4",className:"menuRight",children:Object(Je.jsx)("span",{children:Object(Ae.a)("bonds_right_menu_date")})})]}),F&&F.map(function(e,t){return Object(Je.jsx)(De.a.Item,{children:Object(Je.jsx)("a",{href:"#!",children:Object(Je.jsxs)(Pe.a,{className:"menuContent",children:[Object(Je.jsx)(Me.a,{xs:!0,md:"6",className:"menuLeft",children:Object(Je.jsx)($e.b,{value:e.amount||0,maximumFractionDigits:4})}),Object(Je.jsx)(Me.a,{xs:!0,md:"6",className:"menuRight",children:Object(Je.jsx)("span",{children:et()(1e3*e.maturationTimestamp).format("YYYY/MM/DD")})})]})})},t)})]});Object(_e.useEffect)(Object(ye.a)(we.a.mark(function e(){return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(Le.a.get("mphPriceObj")),e.abrupt("return",function(){i(void 0)});case 2:case"end":return e.stop()}},e)})),[Le.a.get("mphPriceObj_timestamp")]);c="connected"===r;Object(_e.useEffect)(function(){X("connected"!==r||!o||!z)},[o,r,z]),Object(_e.useEffect)(Object(ye.a)(we.a.mark(function e(){var t,n,a,c,s,i,l;return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&"connected"===r)return e.next=3,Object(Te.c)(o);e.next=9;break;case 3:t=e.sent,ae(function(e){return t.data.dpools}),le(function(e){return Object.assign(e,t.data.funder)}),"{}"!==JSON.stringify(ie)&&f&&(n=[],a=[],c=[],s=new Ge.a(ie.totalFIXEarned),i=new Ge.a(ie.totalFIXEarned).multipliedBy(new Ge.a(f[Ue.b.address])).decimalPlaces(4).toNumber(),ie.totalInterestByPool.map(function(e,t){n.push(new Ge.a(e.totalDeficitFunded).multipliedBy(new Ge.a(f[e.pool.stablecoin])).decimalPlaces(4).toNumber()),a.push(new Ge.a(e.totalRecordedFundedDepositAmount).multipliedBy(new Ge.a(f[e.pool.stablecoin])).decimalPlaces(4).toNumber()),c.push(new Ge.a(e.totalInterestEarned).multipliedBy(new Ge.a(f[e.pool.stablecoin])).decimalPlaces(4).toNumber())}),oe(s),re(i),de(isNaN(Ge.a.sum.apply(null,n))?new Ge.a(0):Ge.a.sum.apply(null,n)),be(isNaN(Ge.a.sum.apply(null,a))?new Ge.a(0):Ge.a.sum.apply(null,a)),je(isNaN(Ge.a.sum.apply(null,c))?new Ge.a(0):Ge.a.sum.apply(null,c))),e.next=13;break;case 9:return e.next=11,Object(Te.b)();case 11:l=e.sent,ae(function(e){return l.data.dpools});case 13:case"end":return e.stop()}},e)})),[o,r,f]),Object(_e.useEffect)(Object(ye.a)(we.a.mark(function e(){var n,a,c,s,i;return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=[],i=d.sec_Arr,ne.length>0&&(Object.keys(Ue.e).forEach(function(t){c=Ye.a.filter(i,function(e){return e.id==t}),s=Ye.a.filter(ne,function(e){return e.id==t}),n.push(Object(fe.a)(Object(fe.a)({id:t,label:Ue.e[t].symbol+"("+Ue.e[t].markey_name+")",symbol:Ue.e[t].symbol,markeyName:Ue.e[t].markey_name,decimal:Ue.e[t].decimal,stablecoin:Ue.e[t].stablecoin,sort:Ue.e[t].sort,oracleInterestRateYear:s[0].oracleInterestRate?new Ge.a(s[0].oracleInterestRate).multipliedBy(new Ge.a(Ze.l)).multipliedBy(100).decimalPlaces(1).toString():10,hasBonds:0-s[0].surplus>0},c[0]),s[0])),a=n.sort(function(e,t){return t.hasBonds-e.hasBonds})}),G(function(e){return a}),q.length>0&&L(!1));case 3:case"end":return e.stop()}},e)})),[Ue.e,G,a,o,d.sec_Arr,ne]),Object(_e.useEffect)(Object(ye.a)(we.a.mark(function e(){return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:q.length>0&&xe(q[0].id);case 1:case"end":return e.stop()}},e)})),[q.length,q]);var pe,xe=(pe=Object(ye.a)(we.a.mark(function e(t){var n,a,c,s,i;return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(te(t),n=((new Date).getTime()/1e3).toFixed(0).toString(),a=Ye.a.filter(q,function(e){return e.id===t}),Y(a[0].hasBonds),R(a[0].oracleInterestRateYear),k(2*a[0].oracleInterestRateYear),a)return i=a[0].latestFundedDeposit&&a[0].latestFundedDeposit.length>0?a[0].latestFundedDeposit[0].nftID:0,e.next=10,Object(Te.a)(a[0].id,i);e.next=17;break;case 10:c=e.sent,i=c.data.dpool.moneyMarketIncomeIndex,s=Ye.a.filter(c.data.dpool.deposits,function(e){return 1==e.active&&new Ge.a(e.maturationTimestamp).minus(new Ge.a(n)).comparedTo(new Ge.a(0))>0}),g(function(e){return s}),D(i),m(s.length),p(s.length);case 17:ue(function(e){return Object.assign(e,a[0])}),$(!1),K(a[0].symbol),Q(a[0].markeyName),W(a[0].stablecoin),Z(a[0].decimal),l.setFieldsValue({LendingPool:t});case 24:case"end":return e.stop()}},e)})),function(e){return pe.apply(this,arguments)});Object(Re.a)(function(){var n,a,c,e,t;"{}"!==JSON.stringify(ie)&&f&&(n=[],a=[],c=[],e=new Ge.a(ie.totalFIXEarned),t=new Ge.a(ie.totalFIXEarned).multipliedBy(new Ge.a(f[Ue.b.address])).decimalPlaces(4).toNumber(),ie.totalInterestByPool.map(function(e,t){n.push(new Ge.a(e.totalDeficitFunded).multipliedBy(new Ge.a(f[e.pool.stablecoin])).decimalPlaces(4).toNumber()),a.push(new Ge.a(e.totalRecordedFundedDepositAmount).multipliedBy(new Ge.a(f[e.pool.stablecoin])).decimalPlaces(4).toNumber()),c.push(new Ge.a(e.totalInterestEarned).multipliedBy(new Ge.a(f[e.pool.stablecoin])).decimalPlaces(4).toNumber())}),oe(e),re(t),de(isNaN(Ge.a.sum.apply(null,n))?new Ge.a(0):Ge.a.sum.apply(null,n)),be(isNaN(Ge.a.sum.apply(null,a))?new Ge.a(0):Ge.a.sum.apply(null,a)),je(isNaN(Ge.a.sum.apply(null,c))?new Ge.a(0):Ge.a.sum.apply(null,c)))},[o,ie,f]),Object(_e.useEffect)(function(){var l,n=[],o=[],r=[],d=[],a=[],b=[],j=[],m=[],u=[],c=new Ge.a(0),O=new Ge.a(0),e=0,t=0,p=((new Date).getTime()/1e3).toFixed(0).toString();F&&w&&(i=F.slice(0,w),w===y?(O=new Ge.a(0).minus(new Ge.a(me.surplus)),c=O.multipliedBy(new Ge.a(f[U])),a.push(O),n.push(c)):i.map(function(e,t){O=new Ge.a(e.interestEarned).minus(new Ge.a(e.amount).multipliedBy(new Ge.a(v).div(new Ge.a(e.initialMoneyMarketIncomeIndex)).minus(1))),c=O.multipliedBy(new Ge.a(f[U])),a.push(O),n.push(c)}),i.map(function(e,t){var n=new Ge.a(e.amount),a=n.multipliedBy(new Ge.a(f[U])),c=new Ge.a(e.maturationTimestamp).minus(new Ge.a(p)).comparedTo(new Ge.a(0))>0?new Ge.a(e.maturationTimestamp).minus(new Ge.a(p)):new Ge.a(0),s=(l=w===y?new Ge.a(e.amount).multipliedBy(c).multipliedBy(new Ge.a(S).div(new Ge.a(Ze.l)).div(new Ge.a(100))):new Ge.a(e.amount).multipliedBy(c).multipliedBy(new Ge.a(S).div(new Ge.a(Ze.l)).div(new Ge.a(100))).minus(O)).multipliedBy(new Ge.a(f[U])),i=c.multipliedBy(new Ge.a(e.amount)).multipliedBy(new Ge.a(me.fixFunderRewardMultiplier)),c=i.multipliedBy(new Ge.a(f[Ue.b.address]));b.push(n),o.push(a),j.push(l),r.push(s),m.push(i),d.push(c),u.push(e.maturationTimestamp)}));var s=et()(1e3*p).format("YYYY-MM-DD HH:mm:ss");u.length>0&&(x=et()(1e3*Object(He.a)(u).toString()).format("YYYY-MM-DD HH:mm:ss"),h=et()(1e3*Object(He.f)(u).toString()).format("YYYY-MM-DD HH:mm:ss"),e=et()(x).diff(et()(s),"hours"),t=et()(h).diff(et()(s),"hours"));var i=(w===y?Ge.a.sum.apply(null,r).minus(O):Ge.a.sum.apply(null,r)).plus(Ge.a.sum.apply(null,d)).div(Ge.a.sum.apply(null,n)).multipliedBy(new Ge.a(100)).decimalPlaces(4).toString(),x=Ge.a.sum.apply(null,d).div(Ge.a.sum.apply(null,n)).multipliedBy(new Ge.a(100)).decimalPlaces(4).toString(),h=(w===y?Ge.a.sum.apply(null,j).minus(O):Ge.a.sum.apply(null,j)).toFixed(4),s=(w===y?Ge.a.sum.apply(null,r).minus(c):Ge.a.sum.apply(null,r)).toFixed(4),g={payDebt:n.length>0?Ge.a.sum.apply(null,n).toFixed(4):new Ge.a(0),payDebtAmount:a.length>0?Ge.a.sum.apply(null,a).toFixed(4):new Ge.a(0),earnOnDebt:o.length>0?Ge.a.sum.apply(null,o).toFixed(4):new Ge.a(0),earnOnDebtAmount:b.length>0?Ge.a.sum.apply(null,b).toFixed(4):new Ge.a(0),profitDebt:r.length>0?s:new Ge.a(0),profitDebtAmount:j.length>0?h:new Ge.a(0),rewardsDebt:d.length>0?Ge.a.sum.apply(null,d).toFixed(4):new Ge.a(0),rewardsDebtAmount:m.length>0?Ge.a.sum.apply(null,m).toFixed(4):new Ge.a(0),avgTimes:u.length>0?e/24:0,middleTimes:u.length>0?t/24:0,totalROI:i,fixROI:x};Oe(function(e){return Object(fe.a)(Object(fe.a)({},e),g)})},[w,S,y,U,F,v,f,ee,me.surplus]);var he,u=Object(_e.useCallback)(Object(ye.a)(we.a.mark(function e(){var t;return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H(!0),J("approve"),$(!0),e.next=6,Object(We.a)(a,U,ee);case 6:(t=e.sent)&&($(!1),V(t.hash),J("success")),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),J("error"),$(!1);case 15:case"end":return e.stop()}},e,null,[[0,10]])})),[$,a,U,ee,o]),h=(he=Object(ye.a)(we.a.mark(function e(){var t,n;return we.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(H(!0),X(!0),!w){e.next=25;break}if(e.prev=3,w===y)return e.next=7,Object(We.b)(a,ee);e.next=12;break;case 7:(t=e.sent)&&(V(t.hash),J("success")),e.next=19;break;case 12:return n=F[w-1].nftID,e.next=16,Object(We.c)(a,ee,n);case 16:(t=e.sent)&&(V(t.hash),J("success"));case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(3),e.t0&&(J("error"),X(!1),Qe.b.error("".concat((e.t0.data||e.t0).message),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 25:X(!1);case 26:case"end":return e.stop()}},e,null,[[3,21]])})),function(){return he.apply(this,arguments)});return Object(Je.jsx)(Je.Fragment,{children:Object(Je.jsxs)(Ee.a,{fluid:!0,className:"bonds-container",children:[Object(Je.jsx)(Qe.a,{}),Object(Je.jsx)(Ke.a,{showAlert:_,status:B,tx:T,handleCancel:function(e){"reset"===e&&(H(!1),J(""),$(!1),V(""))}}),Object(Je.jsxs)(Pe.a,{className:"row_cont_title",children:[d.isMobile?Object(Je.jsx)(at.a,{}):null,Object(Je.jsx)(Me.a,{md:"12",className:"content_title_col",children:Object(Je.jsx)("span",{className:"content_title",children:Object(Ae.a)("bonds_title")})}),Object(Je.jsx)(Me.a,{md:"12",className:"content_title_col content_subtitle_col",children:Object(Je.jsx)("span",{className:"content_desc",children:Object(Ae.a)("bonds_desc1")})})]}),Object(Je.jsx)(qe,{TotalFIX:P,TotalFIXEarned:t,TotalDeficitFunded:j,TotalRecordedFundedDepositAmount:N,TotalInterestEarned:C}),A?Object(Je.jsx)(tt.a,{}):Object(Je.jsx)(Pe.a,{children:Object(Je.jsx)(Me.a,{xs:"12",md:"12",children:Object(Je.jsx)(ke.a,{style:{width:"100%",border:"none"},children:Object(Je.jsx)(Me.a,{md:"12",children:Object(Je.jsxs)(Pe.a,{children:[Object(Je.jsx)(ot,{md:"6",style:{padding:0},children:Object(Je.jsx)(bt,{className:"content_title",children:Object(Ae.a)("bonds_table_title")})}),d.isMobile?"":Object(Je.jsx)(rt,{md:"6",className:z?"":"bonds-table-title2",style:{padding:0},children:z?Object(Je.jsx)(bt,{className:"content_title",children:Object(Ae.a)("bonds_table_title2")}):""}),Object(Je.jsx)(ot,{md:"6",children:Object(Je.jsxs)(lt,Object(fe.a)(Object(fe.a)({},st),{},{form:l,name:"control-hooks",onFinish:function(e){},children:[Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding bonds-table-selectPool-title",name:"LendingPool",label:Object(Ae.a)("bonds_table_selectPool"),children:Object(Je.jsx)(Ne.a,{size:"large",onChange:xe,children:q.map(function(e,t){return Object(Je.jsx)(ct,{value:e.id,children:e.label},e.id+"_"+t)})})}),z&&Object(Je.jsxs)(_e.Fragment,{children:[Object(Je.jsx)(ve.a.Item,{style:{margin:"32px 0"},name:"DepositDebts",children:Object(Je.jsxs)(Pe.a,{style:d.isMobile?{paddingLeft:"16px"}:null,children:[Object(Je.jsxs)(dt,{md:"12",className:"pl-0",children:[Object(Ae.a)("bonds_table_depositDebts")," ",w===y?"All":w]}),Object(Je.jsx)(Me.a,{xs:"7",md:"9",className:"pl-0",style:{paddingRight:"15px"},children:Object(Je.jsx)(Ve,{step:"1",onCurrent:function(e){return m(e)},min:"0",max:y,cur:w,maxLabel:"All"})}),Object(Je.jsx)(Ot,{xs:"5",md:"3",style:d.isMobile?{paddingRight:"15px"}:{paddingRight:"0"},children:Object(Je.jsx)(Ie.a,{overlay:n,placement:"bottomRight",trigger:["click"],children:Object(Je.jsxs)(Be.a,{onClick:function(){se(!ce)},style:d.isMobile?{width:"100%",overflow:"hidden",padding:"4px 0 4px 4px"}:{width:"100%",overflow:"hidden"},children:[ce?Object(Ae.a)("bonds_right_dropdown_hide"):Object(Ae.a)("bonds_right_dropdown_show"),Object(Ae.a)("bonds_right_dropdown"),ce?Object(Je.jsx)("span",{className:"transform-180",children:Object(Je.jsx)(Se.a,{})}):Object(Je.jsx)(Se.a,{})]})})})]})}),Object(Je.jsxs)(Pe.a,{style:{marginBottom:"8px"},children:[Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"YouPay",label:Object(Ae.a)("bonds_right_content1"),style:{margin:"0"},children:Object(Je.jsxs)(Me.a,{style:{padding:0},children:[Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:["$",Object(He.g)(I.payDebt)]}),Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:[Object(He.g)(I.payDebtAmount)," ",s,":",x]})]})})}),Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"YouEarnInterest On",label:Object(Ae.a)("bonds_right_content2"),style:{margin:"0"},children:Object(Je.jsxs)(Me.a,{style:{padding:0},children:[Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:["$",Object(He.g)(I.earnOnDebt)]}),Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:[Object(He.g)(I.earnOnDebtAmount)," ",s,":",x]})]})})})]}),Object(Je.jsxs)(Pe.a,{style:{marginBottom:"8px"},children:[Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"EstimatedProfit",label:Object(Ae.a)("bonds_right_content3"),style:{margin:"0"},children:Object(Je.jsxs)(Me.a,{style:{padding:0},children:[Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:["$",Object(He.g)(I.profitDebt)]}),Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:[Object(He.g)(I.profitDebtAmount)," ",s,":",x]})]})})}),Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"MPHRewards",label:Object(Ae.a)("bonds_right_content4"),style:{margin:"0"},children:Object(Je.jsxs)(Me.a,{style:{padding:0},children:[Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:["$",Object(He.g)(I.rewardsDebt)]}),Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:[Object(He.g)(I.rewardsDebtAmount)," FIX"]})]})})})]}),Object(Je.jsxs)(Pe.a,{style:{marginBottom:"8px"},children:[Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"MPHRewards",label:Object(Ae.a)("bonds_right_content6"),style:{margin:"0"},children:Object(Je.jsx)(Me.a,{style:{padding:0},children:Object(Je.jsx)(ut,{ismobile:d.isMobile?"true":void 0,children:Object(He.g)(I.avgTimes)})})})}),Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"MPHRewards",label:Object(Ae.a)("bonds_right_content7"),children:Object(Je.jsx)(Me.a,{style:{padding:0},children:Object(Je.jsx)(ut,{ismobile:d.isMobile?"true":void 0,children:Object(He.g)(I.middleTimes)})})})})]})]}),Object(Je.jsx)(ve.a.Item,Object(fe.a)(Object(fe.a)({},it),{},{style:{paddingLeft:0},className:"removeLabelPadding bonds-button",children:!Number(M)&&c&&z?Object(Je.jsxs)(Be.a,{type:"primary",disabled:O,onClick:Object(ze.debounce)(u,500),children:[Object(Ae.a)("Approve"),"\xa0",s]}):Object(Je.jsx)(Be.a,{type:"primary",htmlType:"submit",disabled:b,onClick:Object(ze.debounce)(h,500),children:Object(Ae.a)("bonds_button")})}))]}))}),d.isMobile?Object(Je.jsx)(rt,{md:"6",className:z?"":"bonds-table-title2",style:{padding:0},children:z?Object(Je.jsx)(bt,{className:"content_title",children:Object(Ae.a)("bonds_table_title2")}):""}):"",z?Object(Je.jsx)(rt,{md:"6",children:Object(Je.jsxs)(lt,Object(fe.a)(Object(fe.a)({},st),{},{ismobile:d.isMobile?"true":void 0,children:[Object(Je.jsxs)(ve.a.Item,{className:"showNumberRow",name:"FloatingRate",children:[Object(Je.jsxs)(dt,{md:"12",style:{padding:0},children:[Object(Ae.a)("bonds_table_floatingRate")," ",S,"%"]}),Object(Je.jsxs)(Me.a,{style:{padding:0},className:"bonds-table-desc",children:[Object(Je.jsx)(pt,{ismobile:d.isMobile?"true":void 0,children:Object(Ae.a)("bonds_table_desc")}),Object(Je.jsx)(Ve,{step:"0.1",onCurrent:function(e){return R(e)},margin:"12",min:"0",max:E,unit:"%",cur:S})]})]}),Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding bonds-right-EstimatedRol",name:"EstimatedRol",label:Object(Ae.a)("bonds_right_EstimatedRol"),children:Object(Je.jsxs)("div",{children:[Object(Je.jsxs)(jt,{ismobile:d.isMobile?"true":void 0,children:[isNaN(I.totalROI)?"0.000":Object(He.g)(I.totalROI)," %"]}),Object(Je.jsxs)(mt,{ismobile:d.isMobile?"true":void 0,children:["(+",isNaN(I.fixROI)?"0.000":Object(He.g)(I.fixROI),"% FIX)"]})]})}),Object(Je.jsx)(Pe.a,{children:Object(Je.jsx)(Me.a,{xs:"6",md:"6",children:Object(Je.jsx)(ve.a.Item,{className:"removeLabelPadding",name:"EstimatedProfit",label:Object(Ae.a)("bonds_right_content5"),children:Object(Je.jsxs)(Me.a,{style:{padding:0},children:[Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:["$",Object(He.g)(I.profitDebt)]}),Object(Je.jsxs)(ut,{ismobile:d.isMobile?"true":void 0,children:[Object(He.g)(I.profitDebtAmount)," ",s,":",x]})]})})})})]}))}):Object(Je.jsx)(Je.Fragment,{children:d.isMobile?"":Object(Je.jsxs)(Me.a,{md:"6",className:"no-debt-available-box",children:[Object(Je.jsx)("img",{src:ge(954).default,alt:"nodata"}),Object(Je.jsx)("div",{className:"no-debt-available",children:Object(Ae.a)("bonds_right_no_debt_available")})]})})]})})})})})]})})}}}]);