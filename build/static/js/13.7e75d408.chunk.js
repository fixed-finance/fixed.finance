(this["webpackJsonpcash-market"]=this["webpackJsonpcash-market"]||[]).push([[13],{1e3:function(e,t,n){"use strict";n.r(t);var a,r,c=n(52),s=n(3),y=n.n(s),_=n(15),k=n(20),A=n(37),F=n(0),S=n.n(F),i=n(891),N=n.n(i),o=n(51),l=n(902),d=n.n(l),b=n(920),u=n.n(b),C=n(50),B=n(55),j=n(35),x=n(119),z=n(49),h=(n(328),n(18)),m=function(){var e=this,t=Object(F.useState)(0),t=Object(k.a)(t,2),t=(t[0],t[1],Object(B.g)()),n=t.ethereum,a=t.account;this.provider=void 0,this.signer=void 0,this.contract=void 0,this.myAccount=void 0,this.address=z.a.Vesting.address,Object(F.useEffect)(function(){n&&a&&(e.unlockWallet(n,a),e.contract||(e.contract=new j.ethers.Contract(e.address,x.Vesting.abi,e.provider)))},[n,a])};m.prototype.unlockWallet=function(e,t){this.provider=new j.ethers.providers.Web3Provider(e),this.signer=this.provider?this.provider.getSigner(0):void 0,this.myAccount=t},m.prototype.getVestWithdrawableAmount=(r=Object(_.a)(y.a.mark(function e(t,n){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.contract)return e.next=3,this.contract.getVestWithdrawableAmount(t,n);e.next=5;break;case 3:return a=e.sent,e.abrupt("return",a);case 5:return e.abrupt("return",void 0);case 6:case"end":return e.stop()}},e,this)})),function(e,t){return r.apply(this,arguments)}),m.prototype.withdrawVested=(a=Object(_.a)(y.a.mark(function e(t,n){var a,r,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.contract)return a=this.contract.connect(this.signer),e.next=4,a.estimateGas.withdrawVested(t,n.toString());e.next=15;break;case 4:return r=(r=e.sent).mul(h.e).div(h.g),e.next=8,this.provider.getGasPrice();case 8:return c=(c=e.sent).mul(h.f).div(h.g),c={gasLimit:r.toString(),gasPrice:c.toString()},e.next=13,a.withdrawVested(t,n.toString(),c).catch(function(e){return e});case 13:return c=e.sent,e.abrupt("return",c);case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)});var D=m,P=n(892),R=n(453),T=n(871),W=n(869),I=n(884),s=n(868),i=n(876),L=n(885),l=n(83),b=n(873),V=n(163),m=n(33),E=n.n(m),m=n(46),M=n.n(m),H=n(322),J=n(888),X=n(846),$=(n(845),n(324)),G=(n(991),n(103)),K=n(893),Z=n(7),q=i.a.Countdown;N.a.extend(d.a),N.a.extend(u.a);function Q(e,t){switch(t.type){case"setFirArr":return Object(A.a)(Object(A.a)({},e),{},{fir_Arr:t.setFirArr});case"setSecArr":return Object(A.a)(Object(A.a)({},e),{},{sec_Arr:t.setSecArr})}}var U={fir_Arr:[],sec_Arr:[]},Y=Object(o.b)(s.a)(Object(c.a)(["\n  padding: 0 5px 0 0;\n  width: 14px;\n"])),ee=Object(o.b)(I.a.Text)(Object(c.a)(["\n  font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n  font-size: 18px;\n  color: #0FBCFF;\n  font-weight: bold;\n  background: #FCFAFA;\n  padding 15px;\n  padding-left: 40px;\n  margin-bottom: 0;\n\n"])),te=Object(o.b)(l.a)(Object(c.a)(["\n  background: #23BEFA;\n  border-color: #23BEFA;\n  font-size: 12px;\n"])),ne=Object(o.b)(W.a)(Object(c.a)(["\n  font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n  min-width: 100%;\n  div:nth-of-type(1){\n    font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n    font-size: 18px;\n    color: #1B1F2D;\n    line-height: 20px;\n  }\n  div:nth-of-type(2){\n    opacity: 0.5;\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #1B1F2D;\n  }\n  .ant-statistic-content-value{\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #1B1F2D;\n    white-space: nowrap;\n  }\n  .LockedStyle{\n    font-size: 12px;\n    background-color: #DBF0F9;\n    padding: 2px 3.65px;\n    >.fontStyle{\n      color: #23BEFA;\n    }\n  }\n\n\n  @media screen and (max-width: 768px){\n    div:nth-of-type(2){\n      opacity: 1;\n      font-family: Roboto-Regular;\n      font-size: 12px;\n      color: #1B1F2D;\n    }\n  }\n"])),ae=Object(o.b)(W.a)(Object(c.a)(["\n  div:nth-of-type(1){\n    font-family: Roboto-Medium;\n    font-size: 16px;\n    color: #1B1F2D;\n    line-height: 18px;\n    font-weight: bold;\n  }\n  div:nth-of-type(n+2){\n    min-width: 100%;\n    opacity: 0.5;\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #1B1F2D;\n  }\n"])),re=o.b.span(Object(c.a)(["\n  font-family: Roboto-Medium;\n  font-size: 20px;\n  color: #1B1F2D;\n"])),ce=Object(o.b)(b.a)(Object(c.a)(["\n  .ant-table-thead{\n    opacity: 0.5;\n    font-family: 'PingFangSC-Regular, PingFang SC, \u5fae\u8f6f\u96c5\u9ed1';\n    font-size: 12px;\n    color: #1B1F2D;\n    font-weight: bold;\n  }\n\n  .ant-table-thead > tr > th{\n    background: #fff;\n  }\n  \n  .ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container::before {\n    -webkit-box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n  }\n  .ant-table-ping-left .ant-table-cell-fix-left-first::after,\n  .ant-table-ping-left .ant-table-cell-fix-left-last::after {\n    -webkit-box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n  }\n  .ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after {\n    -webkit-box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n  }\n  .ant-table-ping-right .ant-table-cell-fix-right-first::after,\n  .ant-table-ping-right .ant-table-cell-fix-right-last::after {\n    -webkit-box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n  }\n"]));t.default=function(){var e=Object(B.g)(),t=e.account,n=e.status,a=Object(F.useReducer)(Q,U),r=Object(k.a)(a,2),c=r[0],s=r[1],i=Object(F.useState)(void 0),o=Object(k.a)(i,2),l=o[0],d=o[1],b=Object(F.useState)(!0),e=Object(k.a)(b,2),a=e[0],u=e[1],r=Object(F.useState)(!1),i=Object(k.a)(r,2),o=i[0],j=i[1],b=Object(F.useState)(""),e=Object(k.a)(b,2),r=e[0],x=e[1],i=Object(F.useState)(""),b=Object(k.a)(i,2),e=b[0],h=b[1],i=S.a.useContext(H.a),b="connected"===n,m=Object(F.useCallback)(Object(_.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.e)();case 2:t=e.sent,d(function(e){return Object(A.a)(Object(A.a)({},e),t)});case 4:case"end":return e.stop()}},e)})),[t]);Object(F.useEffect)(Object(_.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:M.a.get("mphPriceObj")?d(M.a.get("mphPriceObj")):m();case 1:case"end":return e.stop()}},e)})),[t,m]);var p,f,O,g=(f=Object(B.g)().account,O=new D,Object(F.useCallback)((p=Object(_.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.withdrawVested(f,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)})),function(e){return p.apply(this,arguments)}),[f,void 0]));Object(F.useEffect)(Object(_.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&l&&(u(!0),Object(V.j)(t).then(function(){var t=Object(_.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.data.vests.map(function(e){l&&n.push(function(e,t){var n=e.id.split("---")[1],a=z.a.FIXToken,r=t?new E.a(t):void 0;if(r&&e){var c=new E.a(e.amount),s=c.multipliedBy(r),i=new E.a(e.withdrawnAmount),o=i.multipliedBy(r),l=new E.a(N()().unix()),d=new E.a(e.creationTimestamp),t=new E.a(e.vestPeriodInSeconds),d=c.multipliedBy(l.minus(d).dividedBy(t)),t=(d=1===d.comparedTo(c)?c:d).minus(i),d=t.multipliedBy(r),r=!t.isZero();return{vestIdx:n,pools:"#"+n,poolsTimestamp:1e3*(Number(e.creationTimestamp)+Number(e.vestPeriodInSeconds)),fullAmount:c.toFixed(4)+" "+a.symbol,fullAmount_first:"$"+s.toFixed(4),withdrawnAmount:i.toFixed(4)+" "+a.symbol,withdrawnAmount_first:"$"+o.toFixed(4),currentWithdrawableAmount:t.toFixed(4)+" "+a.symbol,currentWithdrawableAmount_first:"$"+d.toFixed(4),isShowWithdraw:r}}}(e,l[z.b.address]))}),s({type:"setFirArr",setFirArr:n}),u(!1);case 4:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)})),[t,l]);var w,n=[{title:"#",dataIndex:"pools",key:"pools",width:"25%",render:function(e,t,n){return Object(Z.jsxs)(L.b,{size:"middle",children:[Object(Z.jsx)(re,{children:e}),Object(Z.jsxs)(ne,{children:[Object(Z.jsx)(R.a,{xs:"12",md:"12",children:Object(Z.jsx)("span",{className:"LockedStyle",children:Object(Z.jsx)("span",{className:"fontStyle",children:N()().isSameOrAfter(N()(t.poolsTimestamp))?Object(C.a)("market_cur_unLock"):Object(C.a)("vest_cur_Lock")})})}),Object(Z.jsx)(R.a,{xs:"12",md:"12",children:t.poolsTimestamp-(new Date).getTime()>0?Object(Z.jsx)(q,{value:t.poolsTimestamp,format:"D[d] Hh m[m] s[s]"}):""})]})]})}},{title:Object(C.a)("vest_table_column1"),dataIndex:"fullAmount",key:"fullAmount",render:function(e,t){return Object(Z.jsx)(L.b,{size:"middle",children:Object(Z.jsxs)(ae,{children:[Object(Z.jsx)(R.a,{xs:!0,md:"12",children:e}),Object(Z.jsx)(R.a,{xs:!0,md:"12",children:t.fullAmount_first})]})})}},{title:Object(C.a)("vest_table_column2"),dataIndex:"withdrawnAmount",key:"withdrawnAmount",render:function(e,t){return e?Object(Z.jsx)(L.b,{size:"middle",children:Object(Z.jsxs)(ae,{children:[Object(Z.jsx)(R.a,{xs:!0,md:"12",children:e}),Object(Z.jsx)(R.a,{xs:!0,md:"12",children:t.withdrawnAmount_first})]})}):""}},{title:Object(C.a)("vest_table_column3"),dataIndex:"currentWithdrawableAmount",key:"currentWithdrawableAmount",render:function(e,t){return e?Object(Z.jsx)(L.b,{size:"middle",children:Object(Z.jsxs)(ae,{children:[Object(Z.jsx)(R.a,{xs:!0,md:"12",children:e}),Object(Z.jsx)(R.a,{xs:!0,md:"12",children:t.currentWithdrawableAmount_first})]})}):""}},{render:function(e,t,n){return!t||t.isShowWithdraw?Object(Z.jsx)(L.b,{size:"middle",style:{float:"right"},children:Object(Z.jsxs)(te,{type:"primary",size:"small",onClick:Object(G.debounce)(function(){return v(t.vestIdx)},500),children:[Object(Z.jsx)(Y,{src:P.a}),(N()().isSameOrAfter(N()(t.poolsTimestamp)),Object(C.a)("market_cur_table_withDraw"))]})}):""}}],v=(w=Object(_.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),x(""),e.next=4,g(t);case 4:(n=e.sent)&&n.code||"string"===typeof n&&!n.hash||n&&"{}"==JSON.stringify(n)?(x("error"),X.b.error("".concat(n.data?n.data.message:n.message||n),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n&&n.hash&&(h(n.hash),x("success"));case 6:case"end":return e.stop()}},e)})),function(e){return w.apply(this,arguments)});return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(T.a,{fluid:!0,children:[Object(Z.jsx)(X.a,{}),Object(Z.jsx)(J.a,{showAlert:o,status:r,tx:e,handleCancel:function(e){"reset"===e&&(j(!1),x(""),h(""))}}),Object(Z.jsxs)(W.a,{className:i.state.isMobile?"row_cont_title ":"row_cont_title_fixed",children:[i.state.isMobile?Object(Z.jsx)(K.a,{}):null,Object(Z.jsx)(R.a,{md:"12",className:"content_title_col",children:Object(Z.jsx)("span",{className:"content_title",children:Object(C.a)("vest_title")})}),Object(Z.jsx)(R.a,{md:"12",className:"content_title_col content_subtitle_col",children:Object(Z.jsx)("span",{className:"content_desc",children:Object(C.a)("vest_desc")})})]}),a&&b?Object(Z.jsx)($.a,{}):Object(Z.jsx)(F.Fragment,{children:i.state.isMobile?Object(Z.jsx)(F.Fragment,{children:Object(Z.jsx)(W.a,{className:"vest-item",children:!a&&c.fir_Arr.length>0?c.fir_Arr.map(function(e,t){return Object(Z.jsxs)(I.a,{children:[Object(Z.jsx)(I.a.Header,{as:"h5",children:Object(Z.jsxs)(ne,{className:"d-flex align-items-center ml-0",children:[Object(Z.jsx)("div",{className:"mr-2",children:e.pools}),Object(Z.jsx)("div",{className:"mr-2",children:Object(Z.jsx)("span",{className:"LockedStyle",children:Object(Z.jsx)("span",{className:"fontStyle",children:N()().isSameOrAfter(N()(e.poolsTimestamp))?Object(C.a)("market_cur_unLock"):Object(C.a)("vest_cur_Lock")})})}),Object(Z.jsx)("div",{className:"mr-2",children:e.poolsTimestamp-(new Date).getTime()>0?Object(Z.jsx)(q,{value:e.poolsTimestamp,format:"D[d] Hh m[m] s[s]"}):""})]})}),Object(Z.jsxs)(I.a.Body,{as:"div",children:[Object(Z.jsxs)("div",{className:"d-flex vest-item-info",children:[Object(Z.jsxs)("div",{className:"d-flex flex-column item-info text-left",children:[Object(Z.jsx)("div",{children:Object(C.a)("vest_table_column1")}),Object(Z.jsx)("div",{children:e.fullAmount})]}),Object(Z.jsxs)("div",{className:"d-flex flex-column item-info text-center",children:[Object(Z.jsx)("div",{children:Object(C.a)("vest_table_column2")}),Object(Z.jsx)("div",{children:e.withdrawnAmount})]}),Object(Z.jsxs)("div",{className:"d-flex flex-column item-info text-right",children:[Object(Z.jsx)("div",{children:Object(C.a)("vest_table_column3")}),Object(Z.jsx)("div",{children:e.currentWithdrawableAmount})]})]}),Object(Z.jsx)("div",{className:"d-flex justify-content-end",children:Object(Z.jsx)(te,{type:"primary",size:"small",className:"vest-withDraw",onClick:Object(G.debounce)(function(){return v(e.vestIdx)},500),children:Object(C.a)("market_cur_table_withDraw")})})]})]},t)}):Object(Z.jsx)("div",{className:"no-FIX-extract",children:(!a||!b)&&Object(C.a)("no_FIX_extract")})})}):Object(Z.jsx)(W.a,{style:{borderRadius:"4px"},children:Object(Z.jsx)(R.a,{xs:"12",md:"12",children:Object(Z.jsxs)(I.a,{className:"tableCardSetting",style:{width:"100%",border:"none"},children:[Object(Z.jsx)(ee,{children:Object(C.a)("vest_table_title")}),Object(Z.jsx)(R.a,{md:"12",className:"styleTable",children:Object(Z.jsx)(ce,{tableLayout:"fixed",columns:n,dataSource:c.fir_Arr,scroll:i.state.isMobile?{x:800}:{x:1100},rowKey:function(e){return e.pools},pagination:!1},1)})]})})})})]})})}},991:function(e,t,n){}}]);