(this["webpackJsonpcash-market"]=this["webpackJsonpcash-market"]||[]).push([[3],{1e3:function(e,t,a){"use strict";a.r(t);function G(t){function a(){t.getShowWallet(!1)}var s=(m=Object(Q.g)()).account,e=m.status,c=m.ethereum,n=Object(z.useState)(0),r=(P=Object(U.a)(n,2))[0],i=P[1],l=Object(z.useState)(0),d=(g=Object(U.a)(l,2))[0],b=g[1],o=Object(z.useState)(!0),j=(v=Object(U.a)(o,2))[0],O=v[1],u=Object(z.useState)(void 0),p=(F=Object(U.a)(u,2))[0],h=F[1],x=Object(z.useState)(!1),m=(w=Object(U.a)(x,2))[0],k=w[1],n=Object(z.useState)(!1),l=(P=Object(U.a)(n,2))[0],f=P[1],g=Object(z.useState)(""),v=(o=Object(U.a)(g,2))[0],_=o[1],u=Object(z.useState)(""),x=(F=Object(U.a)(u,2))[0],y=F[1],w="connected"===e,n=W.a.useContext(de.a).state,P=W.a.useState(n.isMobile),g=Object(U.a)(P,1)[0],N=Object(M.a)(ce.a.Rewards.stakeToken),C=Object(re.b)(),u=(o=Object(ce.c)(ce.a.Rewards.stakeToken))?o.symbol:"?",S=Object(H.b)().onStake,I=Object(L.b)().onUnStake;Object(z.useEffect)(Object(Y.a)(J.a.mark(function e(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)(c,ce.a.Rewards.stakeToken,ce.a.Rewards.address,s).then(function(e){h(e)});case 2:case"end":return e.stop()}},e)})),[c,s,h]);var B,A,F=Object(z.useCallback)(function(e){i(e.target.value),b(Object(se.d)(e.target.value,ce.a.Rewards.decimal)),e.target.value&&Number(Object(se.d)(e.target.value,ce.a.Rewards.decimal))>0?"stake"===t.type&&N?Number(Object(se.d)(e.target.value,ce.a.Rewards.decimal))<N.toNumber()?O(!1):O(!0):"unstake"===t.type&&C&&(Number(Object(se.d)(e.target.value,ce.a.Rewards.decimal))<C.toNumber()?O(!1):O(!0)):O(!0)},[i,b,N,C]),e=Object(z.useCallback)(function(){"stake"===t.type?N?(O(!1),i(Object(se.b)(N)),b(N)):(i(Object(se.b)(0)),b(0)):"unstake"===t.type&&(C?(O(!1),i(Object(se.b)(C)),b(C)):(i(Object(se.b)(0)),b(0)))},[N,C,i,b]),n=(A=Object(Y.a)(J.a.mark(function e(){var t;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),_(""),e.next=5,S(d);case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(_("error"),O(!1),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(y(t.hash),_("success"),O(!1));case 8:case"end":return e.stop()}},e)})),function(){return A.apply(this,arguments)}),P=(B=Object(Y.a)(J.a.mark(function e(){var t;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),_(""),e.next=5,I(d);case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(_("error"),O(!1),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(y(t.hash),_("success"),O(!1));case 7:case"end":return e.stop()}},e)})),function(){return B.apply(this,arguments)}),o=Object(z.useCallback)(Object(Y.a)(J.a.mark(function e(){var t;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),_("approve"),e.next=5,Object(V.a)(c,ce.a.Rewards.stakeToken,ce.a.Rewards.address);case 5:if(t=e.sent)return _("success"),y(t.hash),k(!1),e.next=13,Object(V.f)(c,ce.a.Rewards.stakeToken,ce.a.Rewards.address,s).then(function(e){h(e)});e.next=13;break;case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),_("error"),k(!1);case 20:case"end":return e.stop()}},e,null,[[0,15]])})),[k,c,s]);return Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsxs)(K.a,{fluid:!0,className:"stake_modal",children:[Object(oe.jsx)(le.a,{}),Object(oe.jsx)(ie.a,{showAlert:l,status:v,tx:x,handleCancel:function(e){"reset"===e&&(f(!1),_(""),O(!1),y(""),a())}}),Object(oe.jsx)(q.a,{children:Object(oe.jsxs)("div",{className:"stake_modal_close",onClick:a,children:[Object(oe.jsx)(D,{src:E.a}),Object(ne.a)("stake_modal_back")]})}),Object(oe.jsxs)(q.a,{className:"stake_box ",children:[Object(oe.jsx)($.a,{xs:!0,md:"12",className:"text-center backGroundLineGradient",children:Object(oe.jsx)("span",{className:"content_title",children:"stake"===t.type?Object(ne.a)("stake_modal_title"):Object(ne.a)("unstake_modal_title")})}),"stake"===t.type?Object(oe.jsx)($.a,{xs:!0,md:"12",className:"text-center",children:Object(oe.jsxs)("span",{className:"content_desc",children:[" ",Object(ne.b)("stake_modal_sub_title",{name:u})]})}):"",g?Object(oe.jsx)($.a,{children:Object(oe.jsx)(Z.a,{children:Object(oe.jsxs)(Z.a.Body,{children:[Object(oe.jsxs)(R.a.Group,{controlId:"formAmount",children:[Object(oe.jsx)(R.a.Label,{children:Object(ne.a)("stake_modal_amount")}),Object(oe.jsx)(R.a.Control,{type:"number",placeholder:"0",value:r,onChange:F}),Object(oe.jsx)(T.a,{className:"max_btn",onClick:e,children:"max"}),Object(oe.jsxs)(R.a.Text,{className:"text-muted",children:["stake"===t.type?N?Object(se.b)(N):0:C?Object(se.b)(C):0," "," ",u," ","stake"===t.type?Object(ne.a)("stake_modal_available"):Object(ne.a)("unstake_modal_available")]})]}),"stake"===t.type?!Number(p)&&void 0!==p&&w?Object(oe.jsx)(T.a,{disabled:w?m:!w,className:"stake-btn",onClick:Object(be.debounce)(o,500),children:void 0===p?"":Object(oe.jsxs)("span",{children:[" ",Object(ne.a)("Approve")," ",u," "]})}):Object(oe.jsx)(T.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(be.debounce)(n,500),children:void 0===p?"":Object(oe.jsxs)("span",{children:[" ",Object(ne.a)("stake_modal_button")," "]})}):Object(oe.jsx)(T.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(be.debounce)(P,500),children:Object(ne.a)("unstake_modal_button")})]})})}):Object(oe.jsx)(Z.a,{children:Object(oe.jsxs)(Z.a.Body,{children:[Object(oe.jsxs)(R.a.Group,{controlId:"formAmount",children:[Object(oe.jsx)(R.a.Label,{children:Object(ne.a)("stake_modal_amount")}),Object(oe.jsx)(R.a.Control,{type:"number",placeholder:"0",value:r,onChange:F}),Object(oe.jsx)(T.a,{className:"max_btn",onClick:e,children:"max"}),Object(oe.jsxs)(R.a.Text,{className:"text-muted",children:["stake"===t.type?N?Object(se.b)(N):0:C?Object(se.b)(C):0," "," ",u," ","stake"===t.type?Object(ne.a)("stake_modal_available"):Object(ne.a)("unstake_modal_available")]})]}),"stake"===t.type?!Number(p)&&void 0!==p&&w?Object(oe.jsx)(T.a,{disabled:w?m:!w,className:"stake-btn",onClick:Object(be.debounce)(o,500),children:void 0===p?"":Object(oe.jsxs)("span",{children:[" ",Object(ne.a)("Approve")," ",u," "]})}):Object(oe.jsx)(T.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(be.debounce)(n,500),children:void 0===p?"":Object(oe.jsxs)("span",{children:[" ",Object(ne.a)("stake_modal_button")," "]})}):Object(oe.jsx)(T.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(be.debounce)(P,500),children:Object(ne.a)("unstake_modal_button")})]})})]}),Object(oe.jsx)(q.a,{})]})})}var s=a(52),c=a(3),J=a.n(c),Y=a(15),U=a(20),z=a(0),W=a.n(z),n=a(110),r=a(890),X=a.n(r),i=a(51),K=a(870),q=a(868),$=a(453),Z=a(883),c=a(867),T=a(83),ee=a(897),te=a(891),ae=a(163),se=a(104),ce=a(49),ne=a(50),R=(a(921),a(876)),E=(a(922),a(923)),M=(a(277),a(164)),H=a(924),L=a(925),re=a(325),Q=a(55),V=a(221),ie=a(887),le=a(846),de=(a(845),a(322)),be=a(103),oe=a(7),D=Object(i.b)(c.a)(Object(s.a)(["\n  width:20px;\n  padding: 0 5px 0 0;\n"])),r=a(46),je=a.n(r),r=a(33),Oe=a.n(r),ue=a(72),pe=a(892),he=Object(i.b)(c.a)(Object(s.a)(["\n  padding: 0 5px 3px 0;\nwidth: 14px;\n"])),xe=Object(i.b)(T.a)(Object(s.a)(["\n  background: #23BEFA;\n  border-color: #23BEFA;\n  font-size: 12px;\n"]));t.default=Object(n.e)(function(e){var t=Object(z.useState)(!1),a=Object(U.a)(t,2),s=a[0],c=a[1],n=Object(z.useState)(!0),r=Object(U.a)(n,2),i=r[0],l=r[1],d=Object(z.useState)(void 0),b=Object(U.a)(d,2),o=b[0],j=b[1],O=Object(z.useState)(void 0),u=Object(U.a)(O,2),p=u[0],h=u[1],x=Object(z.useState)(void 0),m=Object(U.a)(x,2),k=m[0],f=m[1],g=Object(z.useState)(void 0),v=Object(U.a)(g,2),_=v[0],y=v[1],w=Object(z.useState)(!1),P=Object(U.a)(w,2),N=P[0],C=P[1],S=Object(z.useState)(""),I=Object(U.a)(S,2),t=I[0],B=I[1],a=Object(z.useState)(""),n=Object(U.a)(a,2),r=n[0],A=n[1],F=e.intl,d=W.a.useContext(de.a);Object(z.useEffect)(Object(Y.a)(J.a.mark(function e(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y(je.a.get("mphPriceObj"));case 1:case"end":return e.stop()}},e)})),[je.a.get("mphPriceObj_timestamp")]);var T=Object(ce.c)(ce.a.Rewards.stakeToken),b=T?T.symbol:"?",R=Object(ce.c)(ce.a.Rewards.rewardToken),O=R?R.symbol:"?",u=new Oe.a(86400),x=new Oe.a(604800),m=Object(re.c)(),E=Object(re.b)(),g=E?Object(se.c)(E,T.decimal,4):"--",v=Object(re.g)(),w=v?Object(se.c)(v,18,4):"--",P=!o||!v||isNaN(v.multipliedBy(o))?"--":Object(se.c)(v.multipliedBy(o),18,4),S=E&&v?v.isGreaterThan(0)?E.dividedBy(v):new Oe.a(0):void 0,I=(E&&v&&S&&S.multipliedBy(new Oe.a("100")).toFixed(4),!E||!o||isNaN(E.multipliedBy(o))?"--":Object(se.c)(E.multipliedBy(o),ce.b.decimal,4)),a=Object(re.f)(),n=a&&m?a.minus(m):void 0,e=(a&&X.a.unix(a.toNumber()).format("YYYY-MM-DD HH:mm:ss"),n&&X.a.unix(n.toNumber()).format("YYYY-MM-DD HH:mm:ss"),new Oe.a(10).pow(18)),v=new Oe.a(10).pow(R.decimal),a=k?new Oe.a(k.rewardPerFIXPerSecond).multipliedBy(e).dividedBy(v):void 0,n=k?new Oe.a(k.rewardPerSecond).multipliedBy(e).dividedBy(v):void 0,v=(n&&m&&n.multipliedBy(m).toFixed(4),n&&n.multipliedBy(u).toFixed(4),k?new Oe.a(k.totalHistoricalReward).multipliedBy(e).dividedBy(v):void 0),M=(v&&new Oe.a(v.toString()).toFixed(4),S&&n?S.multipliedBy(n).multipliedBy(x):new Oe.a(0)),x=(S&&n&&S.multipliedBy(n).multipliedBy(x).toFixed(4),Object(ue.a)(a,o,p)),a=x.day,o=x.week,p=x.month,x=x.year,a=(a&&a.toFixed(4),o&&o.toFixed(4),p&&p.toFixed(4),x?x.toFixed(4):"--"),o=Object(re.a)(),p=o?Object(se.c)(o,R.decimal,4):"--",H=Object(re.d)().onExit,L=Object(re.e)().onClaim;Object(z.useEffect)(Object(Y.a)(J.a.mark(function e(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:R&&_&&h(new Oe.a(_[R.address]));case 1:case"end":return e.stop()}},e)})),[_]),Object(z.useEffect)(Object(Y.a)(J.a.mark(function e(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.f)().then(function(e){f(e.data.fix)});case 2:case"end":return e.stop()}},e)})),[]),Object(z.useEffect)(Object(Y.a)(J.a.mark(function e(){return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:_&&j(new Oe.a(_[T.address]));case 1:case"end":return e.stop()}},e)})),[_]);function Q(e){l(e),c(!0)}var V,D,x=(D=Object(Y.a)(J.a.mark(function e(){var t;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(E&&E.toNumber())return C(!0),B(""),e.next=5,H();e.next=9;break;case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(B("error"),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(A(t.hash),B("success")),e.next=11;break;case 9:t=F.formatMessage({id:"no_balance_extract"}),le.b.error("".concat(t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 11:case"end":return e.stop()}},e)})),function(){return D.apply(this,arguments)}),o=(V=Object(Y.a)(J.a.mark(function e(){var t;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(M&&M.toNumber())return C(!0),B(""),e.next=5,L();e.next=9;break;case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(B("error"),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(A(t.hash),B("success")),e.next=11;break;case 9:t=F.formatMessage({id:"no_balance_extract"}),le.b.error("".concat(t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 11:case"end":return e.stop()}},e)})),function(){return V.apply(this,arguments)});return Object(oe.jsxs)(oe.Fragment,{children:[s?Object(oe.jsx)(G,{type:i,getShowWallet:function(e){c(e)}}):"",Object(oe.jsxs)(K.a,{fluid:!0,style:s?{height:"calc(100vh - 100px)",overflow:"hidden",padding:"0 15px"}:{padding:"0 15px"},children:[Object(oe.jsx)(le.a,{}),Object(oe.jsx)(ie.a,{showAlert:N,status:t,tx:r,handleCancel:function(e){"reset"===e&&(C(!1),B(""),A(""))}}),Object(oe.jsxs)(q.a,{className:"row_cont_title",children:[d.state.isMobile?Object(oe.jsx)(pe.a,{}):null,Object(oe.jsx)($.a,{md:"12",className:"content_title_col",children:Object(oe.jsx)("span",{className:"content_title",children:Object(ne.a)("stake_title")})}),Object(oe.jsx)($.a,{md:"12",className:"content_title_col content_subtitle_col",children:Object(oe.jsx)("span",{className:"content_desc",children:Object(ne.b)("stake_sub_title",{token:O})})})]}),Object(oe.jsxs)(q.a,{className:"stake-card mt-3",children:[Object(oe.jsx)($.a,{xs:12,md:6,style:{paddingTop:"0",paddingLeft:"15px"},children:Object(oe.jsxs)(Z.a,{children:[Object(oe.jsxs)(Z.a.Header,{as:"h5",children:[" ",Object(ne.a)("staked_FIX")]}),Object(oe.jsxs)(Z.a.Body,{children:[Object(oe.jsxs)(Z.a.Title,{children:[g," ",b]}),Object(oe.jsxs)("div",{className:"mt-2 staked_pool",children:["$",I]}),Object(oe.jsxs)("div",{className:"d-flex",children:[Object(oe.jsxs)(xe,{type:"primary",size:"small",style:{marginRight:"5px"},onClick:function(){return Q("stake")},children:[Object(oe.jsx)(he,{src:ee.a}),Object(ne.a)("stake")]}),Object(oe.jsxs)(xe,{type:"primary",size:"small",className:"ml-2",style:{margin:"0 5px"},onClick:function(){return Q("unstake")},children:[Object(oe.jsx)(he,{src:te.a}),Object(ne.a)("unstake")]}),Object(oe.jsxs)(xe,{type:"primary",size:"small",className:"ml-2",style:{margin:"0 5px"},onClick:Object(be.debounce)(x,500),children:[Object(oe.jsx)(he,{src:te.a}),Object(ne.a)("instake_all_claim")]})]})]})]})}),Object(oe.jsx)($.a,{xs:12,md:6,style:{paddingTop:"0",paddingRight:"15px"},children:Object(oe.jsxs)(Z.a,{children:[Object(oe.jsx)(Z.a.Header,{as:"h5",children:Object(ne.a)("staked_claimable_rewards")}),Object(oe.jsxs)(Z.a.Body,{children:[Object(oe.jsx)(Z.a.Title,{children:Object(oe.jsxs)(Z.a.Title,{children:[p," ",O]})}),Object(oe.jsx)("div",{className:"mt-2 staked_pool staked_pool_hidden",children:Object(ne.a)("staked_claimable_rewards_week")}),Object(oe.jsxs)(xe,{type:"primary",size:"small",onClick:Object(be.debounce)(o,500),children:[Object(oe.jsx)(he,{src:te.a}),Object(ne.a)("claim")]})]})]})})]}),Object(oe.jsx)(q.a,{className:"stake-card ",children:Object(oe.jsx)($.a,{xs:12,md:12,style:{paddingLeft:"15px",paddingRight:"15px"},children:Object(oe.jsxs)(Z.a,{children:[Object(oe.jsxs)(Z.a.Header,{as:"h5",children:[" ",Object(ne.a)("staked_overall_statisics")]}),Object(oe.jsxs)(Z.a.Body,{className:"stake_body",children:[Object(oe.jsxs)("div",{className:"stake_row",children:[Object(oe.jsx)("div",{children:Object(ne.a)("overall_total_value_staked")}),Object(oe.jsxs)("div",{className:"stake_row_right",children:[Object(oe.jsxs)("div",{children:[w," ",b]}),Object(oe.jsxs)("div",{className:"stake_row_dollar",children:["$",P]})]})]}),Object(oe.jsxs)("div",{className:"stake_row border-0",children:[Object(oe.jsx)("div",{children:Object(ne.a)("Stake_rewards")}),Object(oe.jsxs)("div",{children:[isNaN(a)?"--":a,"%"]})]})]})]})})}),""]})]})})},1001:function(e,t,a){"use strict";a.r(t);function M(t){function a(){t.getShowWallet(!1)}var s=(m=Object(ne.g)()).account,e=m.status,c=m.ethereum,n=Object(V.useState)(0),r=(P=Object(Q.a)(n,2))[0],i=P[1],l=Object(V.useState)(0),d=(g=Object(Q.a)(l,2))[0],b=g[1],o=Object(V.useState)(!0),j=(v=Object(Q.a)(o,2))[0],O=v[1],u=Object(V.useState)(void 0),p=(F=Object(Q.a)(u,2))[0],h=F[1],x=Object(V.useState)(!1),m=(w=Object(Q.a)(x,2))[0],k=w[1],n=Object(V.useState)(!1),l=(P=Object(Q.a)(n,2))[0],f=P[1],g=Object(V.useState)(""),v=(o=Object(Q.a)(g,2))[0],_=o[1],u=Object(V.useState)(""),x=(F=Object(Q.a)(u,2))[0],y=F[1],w="connected"===e,n=D.a.useContext(de.a).state,P=D.a.useState(n.isMobile),g=Object(Q.a)(P,1)[0],N=Object(te.a)(K.a.LPRewards.stakeToken),C=Object(ce.c)(),u=(o=Object(K.c)(K.a.LPRewards.stakeToken))?o.symbol:"?";Object(V.useEffect)(Object(L.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.f)(c,K.a.LPRewards.stakeToken,K.a.LPRewards.address,s).then(function(e){h(e)});case 2:case"end":return e.stop()}},e)})),[c,s,h]);var S,I,B=Object(ae.a)().onLPStake,A=Object(se.a)().onLPUnStake,F=Object(V.useCallback)(function(e){i(e.target.value),b(Object($.d)(e.target.value,K.a.LPRewards.decimal)),e.target.value&&Number(Object($.d)(e.target.value,K.a.LPRewards.decimal))>0?"stake"===t.type&&N?Number(Object($.d)(e.target.value,K.a.LPRewards.decimal))<N.toNumber()?O(!1):O(!0):"unstake"===t.type&&C&&(Number(Object($.d)(e.target.value,K.a.LPRewards.decimal))<C.toNumber()?O(!1):O(!0)):O(!0)},[i,b,N,C]),e=Object(V.useCallback)(function(){"stake"===t.type?N?(i(Object($.b)(N)),b(N),O(!1)):(i(Object($.b)(0)),b(0)):"unstake"===t.type&&(C?(i(Object($.b)(C)),b(C),O(!1)):(i(Object($.b)(0)),b(0)))},[N,C,i,b]),n=(I=Object(L.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),_(""),e.next=5,B(d);case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(_("error"),O(!1),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(y(t.hash),_("success"),O(!1));case 7:case"end":return e.stop()}},e)})),function(){return I.apply(this,arguments)}),P=(S=Object(L.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),f(!0),_(""),e.next=5,A(d);case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(_("error"),O(!1),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(y(t.hash),_("success"),O(!1));case 7:case"end":return e.stop()}},e)})),function(){return S.apply(this,arguments)}),o=Object(V.useCallback)(Object(L.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),_("approve"),e.next=5,Object(re.a)(c,K.a.LPRewards.stakeToken,K.a.LPRewards.address);case 5:if(t=e.sent)return _("success"),y(t.hash),k(!1),e.next=13,Object(re.f)(c,K.a.LPRewards.stakeToken,K.a.LPRewards.address,s).then(function(e){h(e)});e.next=13;break;case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),_("error"),k(!1);case 20:case"end":return e.stop()}},e,null,[[0,15]])})),[k,c,s]);return Object(be.jsx)(be.Fragment,{children:Object(be.jsxs)(J.a,{fluid:!0,className:"stake_modal",children:[Object(be.jsx)(le.a,{}),Object(be.jsx)(ie.a,{showAlert:l,status:v,tx:x,handleCancel:function(e){"reset"===e&&(f(!1),_(""),O(!1),y(""),a())}}),Object(be.jsx)(Y.a,{children:Object(be.jsxs)("div",{className:"stake_modal_close",onClick:a,children:[Object(be.jsx)(oe,{src:E.a}),Object(q.a)("stake_modal_back")]})}),Object(be.jsxs)(Y.a,{className:"stake_box",children:[Object(be.jsx)(U.a,{md:"12",className:"text-center backGroundLineGradient",children:Object(be.jsx)("span",{className:"content_title",children:"stake"===t.type?Object(q.a)("stake_modal_title2"):Object(q.a)("unstake_modal_title")})}),"stake"===t.type?Object(be.jsx)(U.a,{md:"12",className:"text-center",children:Object(be.jsxs)("span",{className:"content_desc",children:[" ",Object(q.b)("stake_modal_sub_title",{name:u})]})}):"",g?Object(be.jsx)(U.a,{children:Object(be.jsx)(z.a,{children:Object(be.jsxs)(z.a.Body,{children:[Object(be.jsxs)(T.a.Group,{controlId:"formAmount",children:[Object(be.jsx)(T.a.Label,{children:Object(q.a)("stake_modal_amount")}),Object(be.jsx)(T.a.Control,{type:"number",placeholder:"0",value:r,onChange:F}),Object(be.jsx)(R.a,{className:"max_btn",onClick:e,children:"max"}),Object(be.jsxs)(T.a.Text,{className:"text-muted",children:["stake"===t.type?N?Object($.b)(N):0:C?Object($.b)(C):0," "," ",u," ","stake"===t.type?Object(q.a)("stake_modal_available"):Object(q.a)("unstake_modal_available")]})]}),"stake"===t.type?!Number(p)&&void 0!==p&&w?Object(be.jsx)(R.a,{disabled:w?m:!w,className:"stake-btn",onClick:Object(Z.debounce)(o,500),children:void 0===p?"":Object(be.jsxs)("span",{children:[" ",Object(q.a)("Approve")," ",u," "]})}):Object(be.jsx)(R.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(Z.debounce)(n,500),children:void 0===p?"":Object(be.jsxs)("span",{children:[" ",Object(q.a)("stake_modal_button")," "]})}):Object(be.jsx)(R.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(Z.debounce)(P,500),children:Object(q.a)("unstake_modal_button")})]})})}):Object(be.jsx)(z.a,{children:Object(be.jsxs)(z.a.Body,{children:[Object(be.jsxs)(T.a.Group,{controlId:"formAmount",children:[Object(be.jsx)(T.a.Label,{children:Object(q.a)("stake_modal_amount")}),Object(be.jsx)(T.a.Control,{type:"number",placeholder:"0",value:r,onChange:F}),Object(be.jsx)(R.a,{className:"max_btn",onClick:e,children:"max"}),Object(be.jsxs)(T.a.Text,{className:"text-muted",children:["stake"===t.type?N?Object($.b)(N):0:C?Object($.b)(C):0," "," ",u," ","stake"===t.type?Object(q.a)("stake_modal_available"):Object(q.a)("unstake_modal_available")]})]}),"stake"===t.type?!Number(p)&&void 0!==p&&w?Object(be.jsx)(R.a,{disabled:w?m:!w,className:"stake-btn",onClick:Object(Z.debounce)(o,500),children:void 0===p?"":Object(be.jsxs)("span",{children:[" ",Object(q.a)("Approve")," ",u," "]})}):Object(be.jsx)(R.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(Z.debounce)(n,500),children:void 0===p?"":Object(be.jsxs)("span",{children:[" ",Object(q.a)("stake_modal_button")," "]})}):Object(be.jsx)(R.a,{disabled:w?j:!w,className:"stake-btn",onClick:Object(Z.debounce)(P,500),children:Object(q.a)("unstake_modal_button")})]})})]}),Object(be.jsx)(Y.a,{})]})})}var s=a(52),c=a(3),H=a.n(c),L=a(15),Q=a(20),V=a(0),D=a.n(V),n=a(110),r=a(890),G=a.n(r),i=a(51),J=a(870),Y=a(868),U=a(453),z=a(883),l=a(867),c=a(83),W=a(897),X=a(891),K=a(49),q=a(50),T=(a(921),a(876)),R=a(869),$=a(104),Z=a(103),E=(a(922),a(923)),ee=a(277),te=a(164),ae=a(924),se=a(925),ce=a(280),ne=a(55),re=a(221),ie=a(887),le=a(846),de=(a(845),a(322)),be=a(7),oe=Object(i.b)(l.a)(Object(s.a)(["\n  width:20px;\n  padding: 0 5px 0 0;\n"])),r=a(33),je=a.n(r),Oe=a(72),r=a(46),ue=a.n(r),pe=a(892),he=Object(i.b)(l.a)(Object(s.a)(["\n  padding: 0 5px 3px 0;\n  width: 15px;\n"])),xe=(Object(i.b)(l.a)(Object(s.a)(["\npadding: 5px 0px 0px 5px;\nwidth: 15px;\n  transform: rotate(180deg);\n"])),Object(i.b)(c.a)(Object(s.a)(["\n  background: #23BEFA;\n  border-color: #23BEFA;\n  font-size: 12px;\n"]))),me=Object(i.b)(z.a)(Object(s.a)(["\n  border: none;\n"]));t.default=Object(n.e)(function(e){var t=Object(V.useState)(!1),a=Object(Q.a)(t,2),s=a[0],c=a[1],n=Object(V.useState)(!0),r=Object(Q.a)(n,2),i=r[0],l=r[1],d=Object(K.c)(K.a.LPRewards.stakeToken),b=Object(K.c)(K.a.LPRewards.rewardToken),o=Object(V.useState)(void 0),j=Object(Q.a)(o,2),O=j[0],u=j[1],p=D.a.useState(void 0),h=Object(Q.a)(p,2),x=h[0],m=h[1],k=Object(V.useState)(!1),f=Object(Q.a)(k,2),g=f[0],v=f[1],_=Object(V.useState)(""),y=Object(Q.a)(_,2),w=y[0],P=y[1],N=Object(V.useState)(""),t=Object(Q.a)(N,2),a=t[0],C=t[1],S=e.intl,n=D.a.useContext(de.a);Object(V.useEffect)(Object(L.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m(ue.a.get("mphPriceObj"));case 1:case"end":return e.stop()}},e)})),[ue.a.get("mphPriceObj_timestamp")]);var r=new je.a(86400),o=new je.a(604800),j=Object(ce.d)(),I=Object(ce.c)(),p=I?Object($.c)(I,18,4):"--",h=Object(ce.h)(),k=Object(ee.b)(d.address),f=Object(ee.a)(d.address,K.a.FIXToken.address),_=f&&k&&O?k.isGreaterThan(0)?f.dividedBy(k).multipliedBy(new je.a(2)).multipliedBy(O):0:void 0,y=(I&&h&&h.isGreaterThan(0)&&I.dividedBy(h).multipliedBy(new je.a("100")).toFixed(4),!I||!_||isNaN(I.multipliedBy(_))?"--":Object($.c)(I.multipliedBy(_),d.decimal,4)),N=h?Object($.c)(h,d.decimal,4):"--",t=_&&h?h.isGreaterThan(0)?h.multipliedBy(_):0:void 0,e=!t||isNaN(t)?"--":Object($.c)(t,d.decimal,2),B=Object(ce.a)(),f=B?Object($.c)(B,b.decimal,4):"--",k=Object(ce.g)(),t=k&&j?k.minus(j):void 0,t=(k&&G.a.unix(k.toNumber()).format("YYYY-MM-DD HH:mm:ss"),t&&G.a.unix(t.toNumber()).format("YYYY-MM-DD HH:mm:ss"),Object(ce.b)()),r=(t&&j&&Object($.c)(t.multipliedBy(j),d.decimal,0),t?t.multipliedBy(r):void 0),r=void(r&&Object($.c)(r,d.decimal,4)),r=(r&&new je.a(r.toString()).toFixed(4),t&&h?h.isGreaterThan(0)?t.dividedBy(h):0:void 0),t=Object(Oe.a)(r,_,O),h=t.day,_=t.week,O=t.month,t=t.year,O=(h&&h.toFixed(4),_&&_.toFixed(4),O&&O.toFixed(4),t?t.toFixed(4):"--"),t=new je.a(10).pow(d.decimal),o=r&&I&&t?I.multipliedBy(r).multipliedBy(o).dividedBy(t):void 0,A=(o&&o.toFixed(4),Object(ce.e)().onExit),F=Object(ce.f)().onClaim;Object(V.useEffect)(Object(L.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:x&&u(new je.a(x[b.address]));case 1:case"end":return e.stop()}},e)})),[x]);function T(e){l(e),c(!0)}var R,E,t=(E=Object(L.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(I&&I.toNumber())return v(!0),P(""),e.next=5,A();e.next=9;break;case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(P("error"),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(C(t.hash),P("success")),e.next=11;break;case 9:t=S.formatMessage({id:"no_balance_extract"}),le.b.error("".concat(t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 11:case"end":return e.stop()}},e)})),function(){return E.apply(this,arguments)}),o=(R=Object(L.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(B&&B.toNumber())return v(!0),P(""),e.next=5,F();e.next=10;break;case 5:(t=e.sent)&&t.code||"string"===typeof t&&!t.hash||t&&"{}"==JSON.stringify(t)?(P("error"),le.b.error("".concat(t.data?t.data.message:t.message||t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})):t&&t.hash&&(C(t.hash),P("success")),e.next=12;break;case 10:t=S.formatMessage({id:"no_balance_extract"}),le.b.error("".concat(t),{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 12:case"end":return e.stop()}},e)})),function(){return R.apply(this,arguments)});return Object(be.jsxs)(be.Fragment,{children:[s?Object(be.jsx)(M,{type:i,getShowWallet:function(e){c(e)}}):"",Object(be.jsxs)(J.a,{fluid:!0,style:s?{height:"calc(100vh - 100px)",overflow:"hidden",padding:"0 15px"}:{padding:"0 15px"},children:[Object(be.jsx)(le.a,{}),Object(be.jsx)(ie.a,{showAlert:g,status:w,tx:a,handleCancel:function(e){"reset"===e&&(v(!1),P(""),C(""))}}),Object(be.jsxs)(Y.a,{className:"row_cont_title",children:[n.state.isMobile?Object(be.jsx)(pe.a,{}):null,Object(be.jsx)(U.a,{md:"12",className:"content_title_col",children:Object(be.jsx)("span",{className:"content_title",children:Object(q.a)("farming_title")})}),Object(be.jsx)(U.a,{md:"12",className:"content_title_col content_subtitle_col",children:Object(be.jsxs)("span",{className:"content_desc",children:[Object(q.a)("farming_sub_title1"),Object(be.jsx)("a",{href:"https://ht.mdex.com/#/add/0xDe9495De889996404b14dDBf05f66Db7401F0733/0xa71EdC38d189767582C38A3145b5873052c3e47a",target:"_blank",style:{color:"#23BEFA",fontWeight:"500"},children:"Mdex.com"}),Object(q.a)("farming_sub_title2")]})})]}),Object(be.jsxs)(Y.a,{className:"stake-card mt-3",children:[Object(be.jsx)(U.a,{xs:12,md:6,style:{paddingTop:"0",paddingLeft:"15px"},children:Object(be.jsxs)(me,{children:[Object(be.jsxs)(z.a.Header,{as:"h5",children:[" ",Object(q.a)("farming_lp_token")]}),Object(be.jsxs)(z.a.Body,{children:[Object(be.jsxs)(z.a.Title,{children:[p," ",d.symbol]}),Object(be.jsxs)("div",{className:"mt-2 staked_pool",children:["$",y]}),Object(be.jsxs)("div",{className:"d-flex",children:[Object(be.jsxs)(xe,{type:"primary",size:"small",style:{marginRight:"5px"},onClick:function(){return T("stake")},children:[Object(be.jsx)(he,{src:W.a}),Object(q.a)("stake")]}),Object(be.jsxs)(xe,{type:"primary",size:"small",style:{margin:"0 5px"},className:"ml-2",onClick:function(){return T("unstake")},children:[Object(be.jsx)(he,{src:X.a}),Object(q.a)("unstake")]}),Object(be.jsxs)(xe,{type:"primary",size:"small",style:{margin:"0 5px"},className:"ml-2",onClick:Object(Z.debounce)(t,500),children:[Object(be.jsx)(he,{src:X.a}),Object(q.a)("instake_all_claim")]})]})]})]})}),Object(be.jsx)(U.a,{xs:12,md:6,style:{paddingTop:"0",paddingRight:"15px"},children:Object(be.jsxs)(me,{children:[Object(be.jsx)(z.a.Header,{as:"h5",children:Object(q.a)("staked_claimable_rewards")}),Object(be.jsxs)(z.a.Body,{children:[Object(be.jsx)(z.a.Title,{children:Object(be.jsxs)(z.a.Title,{children:[f," ",b.symbol]})}),Object(be.jsx)("div",{className:"mt-2 staked_pool staked_pool_hidden",children:Object(q.a)("staked_claimable_rewards_week")}),Object(be.jsxs)(xe,{type:"primary",size:"small",onClick:Object(Z.debounce)(o,500),children:[Object(be.jsx)(he,{src:X.a}),Object(q.a)("claim")]})]})]})})]}),Object(be.jsx)(Y.a,{className:"stake-card",children:Object(be.jsx)(U.a,{xs:12,md:12,style:{paddingLeft:"15px",paddingRight:"15px"},children:Object(be.jsxs)(me,{children:[Object(be.jsxs)(z.a.Header,{as:"h5",children:[" ",Object(q.a)("staked_overall_statisics")]}),Object(be.jsxs)(z.a.Body,{className:"stake_body",children:[Object(be.jsxs)("div",{className:"stake_row",children:[Object(be.jsx)("div",{children:Object(q.a)("overall_total_value_staked")}),Object(be.jsxs)("div",{className:"stake_row_right",children:[Object(be.jsxs)("div",{children:[N," ",d.symbol]}),Object(be.jsxs)("div",{className:"stake_row_dollar",children:["$",e]})]})]}),Object(be.jsxs)("div",{className:"stake_row border-0",children:[Object(be.jsx)("div",{children:Object(q.a)("Liquidity_mining_rewards")}),Object(be.jsxs)("div",{children:[isNaN(O)?"--":O,"%"]})]})]})]})})})]})]})})},921:function(e,t,a){},922:function(e,t,a){},923:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABm1BMVEUAAAA4PVE4PFA4PlI3PVI5P1E3PFA5PlI4PlI3PlI5P1M4PlM4PlE3QFI4PlI4PFM2P1Q4PlE6PVI4PlI5Pk8qKlU4PlE4PlI4P1I8PEs6OlI4PlI2PFE1QFU7O045PVE9PVI4PlI4PVI4QFA3PlA6P1E3PlNVVVU6OlE3P1I4PVI4P1A5PlM4PVI4PVI4PVI4PlM5PlE3PVM4PlI3PlI4PlI3PVM4PlI4PlI4PlI3PlE4PlI5QFQ5PlI4PVI4P1E3P1M4P1I4PlI5PVI4PlI3PlM6P1I2QFM1Pk84PlI4PlM2PVI3PVI4PlI4QFI5PVM3PlI5PFE5PlQ3PlM5PVA5PFE3P1E1QFA5PVQ6QFE5PVE3PlM0PFI4PVI5PVM5QlU4PlI6P1IzQFk8PFo5PlM3N0k2PFEzM002P1EkSUk3PVU7O045QFM5QFU8PFI4PlI7O1U7O042Q1EzQE05OVUwQFAqVVU4PlJGRl05OVVJSUkzM2YAAAA4P1I4PlM3P1I4PlI3P1I4P1I5PlE4PlI4PlI3P1I5QE44PlL1hMRxAAAAiHRSTlMAv0CAqlUzmcxmddtSHO03PSlLTi0GW6R6ER/lJhgNphn5MiBGOYsDFkGSSYv5lonuwlyyxt9T21fWdN5MY2Ru2OCucKhvXTQd7NJLVOFEULhMOko2SEUwQyw/JSI7Rxt/NRQRMQ4vCjkHKicoJCKxHhoTFBIQBsgLCQcFAW22XceGn7msk2okFwTJNAAAAntJREFUeAHt04OaJFgQROEoq23bY/bYttbeXtvmMN56jHLlx755J/43OAmIiIiIiIiIiIi83OY27ty16ey59PYReFbI87lcFl7N5VlhBT7tY7VVeJRirXwkHeSWSDrI3ZF0cFskHeRAJB0cjKSDHZF0kGuRdLA7kg4mI+ngWCQdnIikYzWSDq5E0sENkXRMRtLBzkg6jkfSkYukI60OdahDHepQhzrUoQ51qEMd6lDHulCHOtShDnWoQx3qUIc61KEOdahDHYn1tyOX+szQ4cPo5i9ddBhsTfnoMDiGWkV69C2qHaBPh1CpvUSnOlFhgV5NotzMNN3qMXy6CydQJkHH1vACPeuJJeRgLCFDsYQcjiVkTywhSbyQpl97UaYQya9jaT+9Gp1CuZP06n1UukKfjkyhUvdRutSFam30KIVaGbpz8RQQQcn0QjvgvyRRnEED5pJMcr2dPtOPJuwlCJ5KVKISlahEJSpRSVBU0hZNSW80JecRvAs0eRfBa6PJJQTvMk2WEbxemnQheFdpcg3Bu06TGwjeKzTJIniv0uQ1BO91mryB4C3TpBvBe5MmbyF4XTR5G8F7hyYjCN48Td5D8DppMo7gfUCTDxG8LE2GEbyPaPIxgvcJTT5F8Ppo8jmC9wVNFhG8r2iC8I3RYhXh+5oWaYTvG1oUEL5ZGuThwHc0GIAD7WxtEB58z5Y64MI4W/oBLiyxlT748CNbmIcTP7G5WXjxM5v6BW5MsIlf4chvbCwFT35nQ1m48gcbyMGZPw0L8WGR9WTgz1+s9Tdc+odVUnAqx3L5f+FWNtfBp/4rwLX+nv9v3rp95+49+CQiIiIiIiIiIiLyAPC5t6bTaapHAAAAAElFTkSuQmCC"},924:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return b});var t=a(3),c=a.n(t),n=a(15),r=a(0),i=a(55),l=a(101),d=a(100),s=function(e){var t,a=Object(i.g)().account,s=new l.a;return{onStake:Object(r.useCallback)((t=Object(n.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.stake(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),[a,e])}},b=function(e){var t,a=Object(i.g)().account,s=new d.a;return{onLPStake:Object(r.useCallback)((t=Object(n.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.stake(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),[a,e])}}},925:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return b});var t=a(3),c=a.n(t),n=a(15),r=a(0),i=a(55),l=a(101),d=a(100),s=function(e){var t,a=Object(i.g)().account,s=new l.a;return{onUnStake:Object(r.useCallback)((t=Object(n.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.withdraw(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),[a,e])}},b=function(e){var t,a=Object(i.g)().account,s=new d.a;return{onLPUnStake:Object(r.useCallback)((t=Object(n.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.withdraw(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),[a,e])}}},991:function(e,t,a){},995:function(e,t,a){"use strict";a.r(t);var s=a(52),c=a(3),f=a.n(c),g=a(15),v=a(20),_=a(0),y=a.n(_),n=a(51),w=a(870),P=a(868),N=a(453),C=a(883),r=a(867),S=(a(163),a(49)),I=a(119),B=a(50),c=a(33),A=a.n(c),F=a(104),T=a(72),R=a(221),c=(a(991),a(46)),E=a.n(c),M=a(322),H=a(7);Object(n.b)(r.a)(Object(s.a)(["\n  padding: 0 5px 0 0;\n"])),Object(n.b)(r.a)(Object(s.a)(["\npadding: 5px 0px 0px 5px;\n  transform: rotate(180deg);\n"])),t.default=function(){var e=Object(_.useState)(0),t=Object(v.a)(e,2),a=(t[0],t[1],Object(_.useState)(0)),s=Object(v.a)(a,2),c=s[0],i=s[1],n=Object(_.useState)([]),r=Object(v.a)(n,2),l=(r[0],r[1]),d=Object(_.useState)(0),e=Object(v.a)(d,2),t=e[0],b=e[1],a=Object(_.useState)(0),s=Object(v.a)(a,2),n=s[0],o=s[1],r=Object(_.useState)(0),d=Object(v.a)(r,2),e=d[0],j=d[1],a=Object(_.useState)(0),s=Object(v.a)(a,2),O=(s[0],s[1]),r=Object(_.useState)(0),d=Object(v.a)(r,2),a=d[0],u=d[1],s=Object(_.useState)(0),r=Object(v.a)(s,2),d=r[0],p=r[1],s=Object(_.useState)(0),r=Object(v.a)(s,2),s=r[0],h=r[1],r=Object(_.useState)(void 0),r=Object(v.a)(r,2),x=r[0],m=r[1],r=y.a.useContext(M.a),k=r.state;return r.dispatch,Object(_.useEffect)(Object(g.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m(E.a.get("mphPriceObj"));case 1:case"end":return e.stop()}},e)})),[E.a.get("mphPriceObj_timestamp")]),Object(_.useEffect)(Object(g.a)(f.a.mark(function e(){var s,t,a,c,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(c in s=[],a=t=0,S.e)n=S.e[c],s.push({id:c,name:n.symbol,pools_desc:n.markey_name,totalActiveDeposit:0,totalInterestPaid:0,totalActiveDepositPrice:0,totalInterestPaidPrice:0,price:0});for(k.fixStats&&(l(k.fixStats.dpools),k.fixStats&&k.fixStats.fix&&i(k.fixStats.fix.totalHistoricalReward),x&&k.fixStats.dpools&&k.fixStats.dpools.map(function(e,t){if(S.e[e.id]&&x[e.stablecoin]&&e)for(var a=0;a<s.length;a++)s[a].id===e.id&&(s[a].price=x[e.stablecoin],s[a].totalActiveDeposit=e.totalActiveDeposit,s[a].totalInterestPaid=e.totalInterestPaid,s[a].totalActiveDepositPrice=new A.a(e.totalActiveDeposit).multipliedBy(x[e.stablecoin]).decimalPlaces(4).toString(),s[a].totalInterestPaidPrice=new A.a(e.totalInterestPaid).multipliedBy(x[e.stablecoin]).decimalPlaces(4).toString())})),r=0;r<s.length;r++)t+=parseFloat(s[r].totalActiveDepositPrice),a+=parseFloat(s[r].totalInterestPaidPrice);b(t),o(a);case 7:case"end":return e.stop()}},e)})),[x,k.fixStats]),Object(_.useEffect)(function(){var a,s;Object(R.h)(S.b.address,S.b.abi).then(function(e){a=e;var t=E.a.get("price"),e=Object(F.b)(new A.a(e));j(e);t=new A.a(e).multipliedBy(t).toString();u(t),Object(R.h)(S.a.Rewards.address,I.Rewards.abi).then(function(e){s=e;var t=E.a.get("price"),e=Object(F.b)(new A.a(e));O(e);t=new A.a(e).multipliedBy(t).toString();p(t),0!==a&&(t=(100*new A.a(s).div(new A.a(a)).decimalPlaces(10).toString()||0).toFixed(4),h(t))})})},[]),Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(w.a,{fluid:!0,style:{padding:"0 15px"},children:[Object(H.jsx)(P.a,{className:"row_cont_title",children:Object(H.jsx)(N.a,{md:"12",className:"content_title_col",children:Object(H.jsx)("span",{className:"content_title",children:Object(B.a)("stats_title")})})}),Object(H.jsxs)(P.a,{className:"stats-card mt-4",children:[Object(H.jsx)(N.a,{xs:12,md:12,lg:4,style:{paddingTop:0,paddingLeft:"15px"},children:Object(H.jsxs)(C.a,{children:[Object(H.jsxs)(C.a.Header,{as:"h5",style:{maxHeight:"60px"},children:[" ",Object(B.a)("stats_total_deposit")," "]}),Object(H.jsx)(C.a.Body,{children:Object(H.jsxs)(C.a.Title,{children:["$",Object(T.b)(t)]})})]})}),Object(H.jsx)(N.a,{xs:12,md:12,lg:4,style:{paddingTop:0},children:Object(H.jsxs)(C.a,{children:[Object(H.jsxs)(C.a.Header,{as:"h5",style:{maxHeight:"60px"},children:[" ",Object(B.a)("stats_historical_interest_distributed")," "]}),Object(H.jsx)(C.a.Body,{children:Object(H.jsxs)(C.a.Title,{children:["$",Object(T.b)(n)]})})]})}),Object(H.jsx)(N.a,{xs:12,md:12,lg:4,style:{paddingTop:0,paddingRight:"15px"},children:Object(H.jsxs)(C.a,{children:[Object(H.jsxs)(C.a.Header,{as:"h5",style:{maxHeight:"60px"},children:[" ",Object(B.a)("stats_FIX_historical")]}),Object(H.jsx)(C.a.Body,{children:Object(H.jsxs)(C.a.Title,{children:[Object(T.b)(c)," FIX"]})})]})})]}),Object(H.jsxs)(P.a,{className:"stats-card",children:[Object(H.jsx)(N.a,{xs:12,md:12,lg:4,style:{paddingLeft:"15px"},children:Object(H.jsxs)(C.a,{children:[Object(H.jsxs)(C.a.Header,{as:"h5",style:{maxHeight:"60px"},children:[" ",Object(B.a)("stats_FIX_total_supply")," "]}),Object(H.jsxs)(C.a.Body,{children:[Object(H.jsxs)(C.a.Title,{children:[Object(T.b)(e)," FIX"]}),Object(H.jsxs)(C.a.Text,{className:k.isMobile?"stats_dollar":"mt-2 stats_dollar",children:["$",Object(T.b)(a)]})]})]})}),Object(H.jsx)(N.a,{xs:12,md:12,lg:4,children:Object(H.jsxs)(C.a,{children:[Object(H.jsxs)(C.a.Header,{as:"h5",style:{maxHeight:"60px"},children:[" ",Object(B.a)("stats_FIX_staked")," "]}),Object(H.jsxs)(C.a.Body,{children:[Object(H.jsxs)(C.a.Title,{children:[s,"%"]}),Object(H.jsxs)(C.a.Text,{className:k.isMobile?"stats_dollar":"mt-2 stats_dollar",children:["$",Object(T.b)(d)]})]})]})})]})]})})}}}]);