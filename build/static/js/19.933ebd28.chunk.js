(this["webpackJsonpcash-market"]=this["webpackJsonpcash-market"]||[]).push([[19],{938:function(e,t,n){},954:function(e,t,n){"use strict";n.r(t);var a,r,c=n(46),s=n(2),v=n.n(s),y=n(16),_=n(21),k=n(33),A=n(0),F=n.n(A),i=n(714),S=n.n(i),o=n(45),l=n(737),d=n.n(l),b=n(759),u=n.n(b),N=n(48),C=n(72),j=n(34),x=n(123),B=n(52),h=(n(273),n(17)),m=function(){var e=this,t=Object(A.useState)(0),t=Object(_.a)(t,2),t=(t[0],t[1],Object(C.g)()),n=t.ethereum,a=t.account;this.provider=void 0,this.signer=void 0,this.contract=void 0,this.myAccount=void 0,this.address=B.a.Vesting.address,Object(A.useEffect)(function(){n&&a&&(e.unlockWallet(n,a),e.contract||(e.contract=new j.ethers.Contract(e.address,x.Vesting.abi,e.provider)))},[n,a])};m.prototype.unlockWallet=function(e,t){this.provider=new j.ethers.providers.Web3Provider(e),this.signer=this.provider?this.provider.getSigner(0):void 0,this.myAccount=t},m.prototype.getVestWithdrawableAmount=(r=Object(y.a)(v.a.mark(function e(t,n){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.contract)return e.next=3,this.contract.getVestWithdrawableAmount(t,n);e.next=5;break;case 3:return a=e.sent,e.abrupt("return",a);case 5:return e.abrupt("return",void 0);case 6:case"end":return e.stop()}},e,this)})),function(e,t){return r.apply(this,arguments)}),m.prototype.withdrawVested=(a=Object(y.a)(v.a.mark(function e(t,n){var a,r,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.contract)return a=this.contract.connect(this.signer),e.next=4,a.estimateGas.withdrawVested(t,n.toString());e.next=15;break;case 4:return r=(r=e.sent).mul(h.e).div(h.g),e.next=8,this.provider.getGasPrice();case 8:return c=(c=e.sent).mul(h.f).div(h.g),c={gasLimit:r.toString(),gasPrice:c.toString()},e.next=13,a.withdrawVested(t,n.toString(),c).catch(function(e){return e});case 13:return c=e.sent,e.abrupt("return",c);case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)});var z=m,P=n(710),T=n(685),D=n(699),R=n(698),W=n(941),s=n(697),i=n(950),I=n(956),l=n(103),b=n(946),L=n(163),m=n(41),V=n.n(m),m=n(40),E=n.n(m),H=n(261),M=n(707),J=n(709),X=(n(708),n(265)),$=(n(938),n(94)),G=n(5),K=i.a.Countdown;S.a.extend(d.a),S.a.extend(u.a);function Z(e,t){switch(t.type){case"setFirArr":return Object(k.a)(Object(k.a)({},e),{},{fir_Arr:t.setFirArr});case"setSecArr":return Object(k.a)(Object(k.a)({},e),{},{sec_Arr:t.setSecArr})}}var q={fir_Arr:[],sec_Arr:[]},Q=Object(o.b)(s.a)(Object(c.a)(["\n  padding: 0 5px 0 0;\n  width: 14px;\n"])),U=Object(o.b)(W.a.Text)(Object(c.a)(["\n  font-family: 'PingFangSC-Regular, PingFang SC, 微软雅黑';\n  font-size: 18px;\n  color: #0FBCFF;\n  font-weight: bold;\n  background: #FCFAFA;\n  padding 15px;\n  padding-left: 40px;\n  margin-bottom: 0;\n\n"])),Y=Object(o.b)(l.a)(Object(c.a)(["\n  background: #23BEFA;\n  border-color: #23BEFA;\n  font-size: 12px;\n"])),ee=Object(o.b)(R.a)(Object(c.a)(["\n  font-family: 'PingFangSC-Regular, PingFang SC, 微软雅黑';\n  min-width: 100%;\n  div:nth-of-type(1){\n    font-family: 'PingFangSC-Regular, PingFang SC, 微软雅黑';\n    font-size: 18px;\n    color: #1B1F2D;\n    line-height: 20px;\n  }\n  div:nth-of-type(2){\n    opacity: 0.5;\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #1B1F2D;\n  }\n  .ant-statistic-content-value{\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #1B1F2D;\n    white-space: nowrap;\n  }\n  .LockedStyle{\n    font-size: 12px;\n    background-color: #d4f3fe;\n    padding: 2px 3.65px;\n    >.fontStyle{\n      color: #23BEFA;\n    }\n  }\n"])),te=Object(o.b)(R.a)(Object(c.a)(["\n  div:nth-of-type(1){\n    font-family: Roboto-Medium;\n    font-size: 16px;\n    color: #1B1F2D;\n    line-height: 18px;\n    font-weight: bold;\n  }\n  div:nth-of-type(n+2){\n    min-width: 100%;\n    opacity: 0.5;\n    font-family: Roboto-Regular;\n    font-size: 12px;\n    color: #1B1F2D;\n  }\n"])),ne=o.b.span(Object(c.a)(["\n  font-family: Roboto-Medium;\n  font-size: 20px;\n  color: #1B1F2D;\n"])),ae=Object(o.b)(b.a)(Object(c.a)(["\n  .ant-table-thead{\n    opacity: 0.5;\n    font-family: 'PingFangSC-Regular, PingFang SC, 微软雅黑';\n    font-size: 12px;\n    color: #1B1F2D;\n    font-weight: bold;\n  }\n\n  .ant-table-thead > tr > th{\n    background: #fff;\n  }\n  \n  .ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container::before {\n    -webkit-box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n  }\n  .ant-table-ping-left .ant-table-cell-fix-left-first::after,\n  .ant-table-ping-left .ant-table-cell-fix-left-last::after {\n    -webkit-box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset 10px 0 8px -8px rgba(255, 255, 255);\n  }\n  .ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after {\n    -webkit-box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n  }\n  .ant-table-ping-right .ant-table-cell-fix-right-first::after,\n  .ant-table-ping-right .ant-table-cell-fix-right-last::after {\n    -webkit-box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n            box-shadow: inset -10px 0 8px -8px rgba(255, 255, 255);\n  }\n"]));t.default=function(){var t=Object(C.g)().account,e=Object(A.useReducer)(Z,q),n=Object(_.a)(e,2),a=n[0],r=n[1],c=Object(A.useState)(void 0),s=Object(_.a)(c,2),i=s[0],o=s[1],l=Object(A.useState)(!0),d=Object(_.a)(l,2),e=d[0],b=d[1],n=Object(A.useState)(!1),c=Object(_.a)(n,2),s=c[0],u=c[1],l=Object(A.useState)(""),d=Object(_.a)(l,2),n=d[0],j=d[1],c=Object(A.useState)(""),l=Object(_.a)(c,2),d=l[0],x=l[1],c=F.a.useContext(H.a),h=Object(A.useCallback)(Object(y.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)();case 2:t=e.sent,o(function(e){return Object(k.a)(Object(k.a)({},e),t)});case 4:case"end":return e.stop()}},e)})),[t]);Object(A.useEffect)(Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E.a.get("mphPriceObj")?o(E.a.get("mphPriceObj")):h();case 1:case"end":return e.stop()}},e)})),[t,h]);var m,p,f,O=(p=Object(C.g)().account,f=new z,Object(A.useCallback)((m=Object(y.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.withdrawVested(p,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)})),function(e){return m.apply(this,arguments)}),[p,void 0]));Object(A.useEffect)(Object(y.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&(b(!0),Object(L.j)(t).then(function(){var t=Object(y.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t.data.vests.map(function(e){i&&n.push(function(e,t){var n=e.id.split("---")[1],a=B.a.FIXToken,r=t?new V.a(t):void 0;if(r&&e){var c=new V.a(e.amount),s=c.multipliedBy(r),i=new V.a(e.withdrawnAmount),o=i.multipliedBy(r),l=new V.a(S()().unix()),d=new V.a(e.creationTimestamp),t=new V.a(e.vestPeriodInSeconds),d=c.multipliedBy(l.minus(d).dividedBy(t)),t=(d=1===d.comparedTo(c)?c:d).minus(i),d=t.multipliedBy(r),r=!t.isZero();return{vestIdx:n,pools:"#"+n,poolsTimestamp:1e3*(Number(e.creationTimestamp)+Number(e.vestPeriodInSeconds)),fullAmount:c.toFixed(4)+" "+a.symbol,fullAmount_first:"$"+s.toFixed(4),withdrawnAmount:i.toFixed(4)+" "+a.symbol,withdrawnAmount_first:"$"+o.toFixed(4),currentWithdrawableAmount:t.toFixed(4)+" "+a.symbol,currentWithdrawableAmount_first:"$"+d.toFixed(4),isShowWithdraw:r}}}(e,i[B.b.address]))}),r({type:"setFirArr",setFirArr:n}),b(!1);case 4:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)})),[t,i]);var g,l=[{title:"#",dataIndex:"pools",key:"pools",render:function(e,t,n){return Object(G.jsxs)(I.b,{size:"middle",children:[Object(G.jsx)(ne,{children:e}),Object(G.jsxs)(ee,{children:[Object(G.jsx)(T.a,{xs:"12",md:"12",children:Object(G.jsx)("span",{className:"LockedStyle",children:Object(G.jsx)("span",{className:"fontStyle",children:S()().isSameOrAfter(S()(t.poolsTimestamp))?Object(N.a)("market_cur_unLock"):Object(N.a)("vest_cur_Lock")})})}),Object(G.jsx)(T.a,{xs:"12",md:"12",children:0<t.poolsTimestamp-(new Date).getTime()?Object(G.jsx)(K,{value:t.poolsTimestamp,format:"D[d] Hh m[m] s[s]"}):""})]})]})}},{title:Object(N.a)("vest_table_column1"),dataIndex:"fullAmount",key:"fullAmount",render:function(e,t){return Object(G.jsx)(I.b,{size:"middle",children:Object(G.jsxs)(te,{children:[Object(G.jsx)(T.a,{xs:!0,md:"12",children:e}),Object(G.jsx)(T.a,{xs:!0,md:"12",children:t.fullAmount_first})]})})}},{title:Object(N.a)("vest_table_column2"),dataIndex:"withdrawnAmount",key:"withdrawnAmount",render:function(e,t){return e?Object(G.jsx)(I.b,{size:"middle",children:Object(G.jsxs)(te,{children:[Object(G.jsx)(T.a,{xs:!0,md:"12",children:e}),Object(G.jsx)(T.a,{xs:!0,md:"12",children:t.withdrawnAmount_first})]})}):""}},{title:Object(N.a)("vest_table_column3"),dataIndex:"currentWithdrawableAmount",key:"currentWithdrawableAmount",render:function(e,t){return e?Object(G.jsx)(I.b,{size:"middle",children:Object(G.jsxs)(te,{children:[Object(G.jsx)(T.a,{xs:!0,md:"12",children:e}),Object(G.jsx)(T.a,{xs:!0,md:"12",children:t.currentWithdrawableAmount_first})]})}):""}},{render:function(e,t,n){return!t||t.isShowWithdraw?Object(G.jsx)(I.b,{size:"middle",style:{float:"right"},children:Object(G.jsxs)(Y,{type:"primary",size:"small",onClick:Object($.debounce)(function(){return w(t.vestIdx)},500),children:[Object(G.jsx)(Q,{src:P.a}),(S()().isSameOrAfter(S()(t.poolsTimestamp)),Object(N.a)("market_cur_table_withDraw"))]})}):""}}],w=(g=Object(y.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),j(""),e.next=4,O(t);case 4:(n=e.sent)&&n.code||"string"==typeof n&&!n.hash||n&&"{}"==JSON.stringify(n)?(j("error"),J.b.error("".concat(n.data?n.data.message:n.message||n),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):n&&n.hash&&(x(n.hash),j("success"));case 6:case"end":return e.stop()}},e)})),function(e){return g.apply(this,arguments)});return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(D.a,{fluid:!0,children:[Object(G.jsx)(J.a,{}),Object(G.jsx)(M.a,{showAlert:s,status:n,tx:d,handleCancel:function(e){"reset"===e&&(u(!1),j(""),x(""))}}),Object(G.jsxs)(R.a,{className:"row_cont_title",children:[Object(G.jsx)(T.a,{md:"12",className:"content_title_col",children:Object(G.jsx)("span",{className:"content_title",children:Object(N.a)("vest_title")})}),Object(G.jsx)(T.a,{md:"12",className:"content_title_col",children:Object(G.jsx)("span",{className:"content_desc",children:Object(N.a)("vest_desc")})})]}),e?Object(G.jsx)(X.a,{}):Object(G.jsx)(A.Fragment,{children:c.state.isMobile?Object(G.jsx)(R.a,{className:"vest-item",children:!e&&0<a.fir_Arr.length?a.fir_Arr.map(function(e,t){return Object(G.jsxs)(W.a,{children:[Object(G.jsx)(W.a.Header,{as:"h5",children:Object(G.jsxs)(ee,{className:"d-flex align-items-center ml-0",children:[Object(G.jsx)("div",{className:"mr-2",children:e.pools}),Object(G.jsx)("div",{className:"mr-2",children:Object(G.jsx)("span",{className:"LockedStyle",children:Object(G.jsx)("span",{className:"fontStyle",children:S()().isSameOrAfter(S()(e.poolsTimestamp))?Object(N.a)("market_cur_unLock"):Object(N.a)("vest_cur_Lock")})})}),Object(G.jsx)("div",{className:"mr-2",children:0<e.poolsTimestamp-(new Date).getTime()?Object(G.jsx)(K,{value:e.poolsTimestamp,format:"D[d] Hh m[m] s[s]"}):""})]})}),Object(G.jsxs)(W.a.Body,{as:"div",children:[Object(G.jsxs)("div",{className:"d-flex vest-item-info",children:[Object(G.jsxs)("div",{className:"d-flex flex-column item-info text-left",children:[Object(G.jsx)("div",{children:Object(N.a)("vest_table_column1")}),Object(G.jsx)("div",{children:e.fullAmount})]}),Object(G.jsxs)("div",{className:"d-flex flex-column item-info text-center",children:[Object(G.jsx)("div",{children:Object(N.a)("vest_table_column2")}),Object(G.jsx)("div",{children:e.withdrawnAmount})]}),Object(G.jsxs)("div",{className:"d-flex flex-column item-info text-right",children:[Object(G.jsx)("div",{children:Object(N.a)("vest_table_column3")}),Object(G.jsx)("div",{children:e.currentWithdrawableAmount})]})]}),Object(G.jsx)("div",{className:"d-flex justify-content-end",children:Object(G.jsx)(Y,{type:"primary",size:"small",className:"vest-withDraw",onClick:Object($.debounce)(function(){return w(e.vestIdx)},500),children:Object(N.a)("market_cur_table_withDraw")})})]})]},t)}):Object(G.jsx)("div",{className:"no-FIX-extract",children:!e&&Object(N.a)("no_FIX_extract")})}):Object(G.jsx)(R.a,{style:{borderRadius:"4px"},children:Object(G.jsx)(T.a,{xs:"12",md:"12",children:Object(G.jsxs)(W.a,{className:"tableCardSetting",style:{width:"100%",border:"none"},children:[Object(G.jsx)(U,{children:Object(N.a)("vest_table_title")}),Object(G.jsx)(T.a,{md:"12",className:"styleTable",children:Object(G.jsx)(ae,{tableLayout:"fixed",columns:l,dataSource:a.fir_Arr,scroll:c.state.isMobile?{x:800}:{x:1100},rowKey:function(e){return e.pools},pagination:!1},1)})]})})})})]})})}}}]);