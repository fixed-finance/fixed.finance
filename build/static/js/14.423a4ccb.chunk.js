(this["webpackJsonpcash-market"]=this["webpackJsonpcash-market"]||[]).push([[14],{1037:function(e,t,n){"use strict";var a=n(0),l=n(281),c=Object.prototype.hasOwnProperty;function d(e,t,n){var a,r=Object(l.a)(e.keys());try{for(r.s();!(a=r.n()).done;)if(h(n=a.value,t))return n}catch(e){r.e(e)}finally{r.f()}}function h(e,t){var n,a,r;if(e===t)return 1;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((a=e.length)===t.length)for(;a--&&h(e[a],t[a]););return-1===a}if(n===Set){if(e.size!==t.size)return;var o,i=Object(l.a)(e);try{for(i.s();!(o=i.n()).done;){if((r=a=o.value)&&"object"===typeof r&&!(r=d(t,r)))return;if(!t.has(r))return}}catch(e){i.e(e)}finally{i.f()}return 1}if(n===Map){if(e.size!==t.size)return;var s,u=Object(l.a)(e);try{for(u.s();!(s=u.n()).done;){if((r=(a=s.value)[0])&&"object"===typeof r&&!(r=d(t,r)))return;if(!h(a[1],t.get(r)))return}}catch(e){u.e(e)}finally{u.f()}return 1}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((a=e.byteLength)===t.byteLength)for(;a--&&e.getInt8(a)===t.getInt8(a););return-1===a}if(ArrayBuffer.isView(e)){if((a=e.byteLength)===t.byteLength)for(;a--&&e[a]===t[a];);return-1===a}if(!n||"object"===typeof e){for(n in a=0,e){if(c.call(e,n)&&++a&&!c.call(t,n))return;if(!(n in t)||!h(e[n],t[n]))return}return Object.keys(t).length===a}}return e!==e&&t!==t}t.a=function(e,t){return Object(a.useEffect)(e,(n=t,e=Object(a.useRef)(),t=Object(a.useRef)(0),h(n,e.current)||(e.current=n,t.current+=1),[t.current]));var n}},325:function(e,t,n){"use strict";n.d(t,"b",function(){return K}),n.d(t,"a",function(){return f});function j(e){var t=e.className,n=e.included,a=e.vertical,r=e.style,o=e.length,i=e.offset,e=e.reverse;o<0&&(e=!e,o=Math.abs(o),i=100-i);var s=a?(a={},Object(M.a)(a,e?"top":"bottom","".concat(i,"%")),Object(M.a)(a,e?"bottom":"top","auto"),Object(M.a)(a,"height","".concat(o,"%")),a):(s={},Object(M.a)(s,e?"right":"left","".concat(i,"%")),Object(M.a)(s,e?"left":"right","auto"),Object(M.a)(s,"width","".concat(o,"%")),s),s=Object(k.a)(Object(k.a)({},r),s);return n?x.a.createElement("div",{className:t,style:s}):null}var k=n(5),u=n(23),s=n(24),l=n(25),c=n(27),d=n(0),x=n.n(d),p=n(41),M=n(2),b=n(1),m=n(44),h=n(16),S=n(174);function C(e,t,n){return(C="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){e=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(S.a)(e)););return e}(e,t);if(e){t=Object.getOwnPropertyDescriptor(e,t);return t.get?t.get.call(n):t.value}})(e,t,n||e)}function B(e){var r=e.prefixCls,o=e.vertical,i=e.reverse,t=e.marks,n=e.dots,a=e.step,s=e.included,u=e.lowerBound,l=e.upperBound,c=e.max,d=e.min,h=e.dotStyle,f=e.activeDotStyle,v=c-d,c=function(e,t,n,a,r){Object(p.a)(!t||n>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var o=Object.keys(e).map(parseFloat).sort(function(e,t){return e-t});if(t&&n)for(var i=a;i<=r;i+=n)-1===o.indexOf(i)&&o.push(i);return o}(t,n,a,d,c).map(function(e){var t="".concat(Math.abs(e-d)/v*100,"%"),n=!s&&e===l||s&&e<=l&&e>=u,a=o?Object(k.a)(Object(k.a)({},h),{},Object(M.a)({},i?"top":"bottom",t)):Object(k.a)(Object(k.a)({},h),{},Object(M.a)({},i?"right":"left",t));n&&(a=Object(k.a)(Object(k.a)({},a),f));t=T()((t={},Object(M.a)(t,"".concat(r,"-dot"),!0),Object(M.a)(t,"".concat(r,"-dot-active"),n),Object(M.a)(t,"".concat(r,"-dot-reverse"),i),t));return x.a.createElement("span",{className:t,style:a,key:e})});return x.a.createElement("div",{className:"".concat(r,"-step")},c)}function w(e){var s=e.className,u=e.vertical,l=e.reverse,c=e.marks,d=e.included,h=e.upperBound,f=e.lowerBound,t=e.max,v=e.min,p=e.onClickLabel,e=Object.keys(c),b=t-v,e=e.map(parseFloat).sort(function(e,t){return e-t}).map(function(t){var e=c[t],n="object"===Object(g.a)(e)&&!x.a.isValidElement(e),a=n?e.label:e;if(!a&&0!==a)return null;var r=!d&&t===h||d&&t<=h&&t>=f,o=T()((i={},Object(M.a)(i,"".concat(s,"-text"),!0),Object(M.a)(i,"".concat(s,"-text-active"),r),i)),r=Object(M.a)({marginBottom:"-50%"},l?"top":"bottom","".concat((t-v)/b*100,"%")),i=Object(M.a)({transform:"translateX(".concat(l?"50%":"-50%",")"),msTransform:"translateX(".concat(l?"50%":"-50%",")")},l?"right":"left","".concat((t-v)/b*100,"%")),i=u?r:i,i=n?Object(k.a)(Object(k.a)({},i),e.style):i;return x.a.createElement("span",{className:o,style:i,key:t,onMouseDown:function(e){return p(e,t)},onTouchStart:function(e){return p(e,t)}},a)});return x.a.createElement("div",{className:s},e)}var o=n(152),a=n(6),T=n.n(a),g=n(22),f=function(e){Object(l.a)(a,e);var n=Object(c.a)(a);function a(){var t;return Object(u.a)(this,a),(t=n.apply(this,arguments)).state={clickFocused:!1},t.setHandleRef=function(e){t.handle=e},t.handleMouseUp=function(){document.activeElement===t.handle&&t.setClickFocus(!0)},t.handleMouseDown=function(e){e.preventDefault(),t.focus()},t.handleBlur=function(){t.setClickFocus(!1)},t.handleKeyDown=function(){t.setClickFocus(!1)},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.onMouseUpListener=Object(o.a)(document,"mouseup",this.handleMouseUp)}},{key:"componentWillUnmount",value:function(){this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"setClickFocus",value:function(e){this.setState({clickFocused:e})}},{key:"clickFocus",value:function(){this.setClickFocus(!0),this.focus()}},{key:"focus",value:function(){this.handle.focus()}},{key:"blur",value:function(){this.handle.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.vertical,r=t.reverse,o=t.offset,i=t.style,s=t.disabled,u=t.min,l=t.max,c=t.value,d=t.tabIndex,h=t.ariaLabel,f=t.ariaLabelledBy,v=t.ariaValueTextFormatter,t=Object(m.a)(t,["prefixCls","vertical","reverse","offset","style","disabled","min","max","value","tabIndex","ariaLabel","ariaLabelledBy","ariaValueTextFormatter"]),n=T()(this.props.className,Object(M.a)({},"".concat(n,"-handle-click-focused"),this.state.clickFocused)),p=a?(a={},Object(M.a)(a,r?"top":"bottom","".concat(o,"%")),Object(M.a)(a,r?"bottom":"top","auto"),Object(M.a)(a,"transform",r?null:"translateY(+50%)"),a):(p={},Object(M.a)(p,r?"right":"left","".concat(o,"%")),Object(M.a)(p,r?"left":"right","auto"),Object(M.a)(p,"transform","translateX(".concat(r?"+":"-","50%)")),p),p=Object(k.a)(Object(k.a)({},i),p),d=!s&&null!==d?d||0:null;return v&&(e=v(c)),x.a.createElement("div",Object(b.a)({ref:this.setHandleRef,tabIndex:d},t,{className:n,style:p,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,role:"slider","aria-valuemin":u,"aria-valuemax":l,"aria-valuenow":c,"aria-disabled":!!s,"aria-label":h,"aria-labelledby":f,"aria-valuetext":e}))}}]),a}(x.a.Component),r=n(48),i=n(36);function v(t,n){try{return Object.keys(n).some(function(e){return t.target===Object(r.findDOMNode)(n[e])})}catch(e){return!1}}function y(e,t){var n=t.min,t=t.max;return e<n||e>t}function E(e){return e.touches.length>1||"touchend"===e.type.toLowerCase()&&e.touches.length>0}function O(t,e){var n=e.marks,a=e.step,r=e.min,e=e.max,n=Object.keys(n).map(parseFloat);null!==a&&(o=Math.pow(10,L(a)),o=Math.floor((e*o-r*o)/(a*o)),o=Math.min((t-r)/a,o),o=Math.round(o)*a+r,n.push(o));var o=n.map(function(e){return Math.abs(t-e)});return n[o.indexOf(Math.min.apply(Math,Object(h.a)(o)))]}function L(e){var t=e.toString(),e=0;return e=t.indexOf(".")>=0?t.length-t.indexOf(".")-1:e}function D(e,t){return e?t.clientY:t.pageX}function V(e,t){return e?t.touches[0].clientY:t.touches[0].pageX}function F(e,t){t=t.getBoundingClientRect();return e?t.top+.5*t.height:window.pageXOffset+t.left+.5*t.width}function P(e,t){var n=t.max,t=t.min;return e<=t?t:e>=n?n:e}function R(e,t){var n=t.step,t=isFinite(O(e,t))?O(e,t):0;return null===n?t:parseFloat(t.toFixed(L(n)))}function H(e){e.stopPropagation(),e.preventDefault()}function N(e,t,n){var a="increase",r="decrease",o=a;switch(e.keyCode){case i.a.UP:o=t&&n?r:a;break;case i.a.RIGHT:o=!t&&n?r:a;break;case i.a.DOWN:o=t&&n?a:r;break;case i.a.LEFT:o=!t&&n?a:r;break;case i.a.END:return function(e,t){return t.max};case i.a.HOME:return function(e,t){return t.min};case i.a.PAGE_UP:return function(e,t){return e+2*t.step};case i.a.PAGE_DOWN:return function(e,t){return e-2*t.step};default:return}return function(e,t){return n=e,a=t,t=(r={increase:function(e,t){return e+t},decrease:function(e,t){return e-t}})[e=o](Object.keys(a.marks).indexOf(JSON.stringify(n)),1),t=Object.keys(a.marks)[t],a.step?r[e](n,a.step):Object.keys(a.marks).length&&a.marks[t]?a.marks[t]:n;var n,a,r}}function U(){}function A(e){var t;return(t=function(e){Object(l.a)(O,e);var r=Object(c.a)(O);function O(e){var s;Object(u.a)(this,O),(s=r.call(this,e)).onDown=function(e,t){var n=t,a=s.props,r=a.draggableTrack,t=a.vertical,o=s.state.bounds,i=r&&s.positionGetValue&&s.positionGetValue(n)||[],a=v(e,s.handlesRefs);s.dragTrack=r&&o.length>=2&&!a&&!i.map(function(e,t){var n=!!t||e>=o[t];return t===i.length-1?e<=o[t]:n}).some(function(e){return!e}),s.dragTrack?(s.dragOffset=n,s.startBounds=Object(h.a)(o)):(a?(e=F(t,e.target),s.dragOffset=n-e,n=e):s.dragOffset=0,s.onStart(n))},s.onMouseDown=function(e){var t;0===e.button&&(s.removeDocumentEvents(),t=D(s.props.vertical,e),s.onDown(e,t),s.addDocumentMouseEvents())},s.onTouchStart=function(e){var t;E(e)||(t=V(s.props.vertical,e),s.onDown(e,t),s.addDocumentTouchEvents(),H(e))},s.onFocus=function(e){var t=s.props,n=t.onFocus,t=t.vertical;v(e,s.handlesRefs)&&!s.dragTrack&&(t=F(t,e.target),s.dragOffset=0,s.onStart(t),H(e),n&&n(e))},s.onBlur=function(e){var t=s.props.onBlur;s.dragTrack||s.onEnd(),t&&t(e)},s.onMouseUp=function(){s.handlesRefs[s.prevMovedHandleIndex]&&s.handlesRefs[s.prevMovedHandleIndex].clickFocus()},s.onMouseMove=function(e){var t;s.sliderRef?(t=D(s.props.vertical,e),s.onMove(e,t-s.dragOffset,s.dragTrack,s.startBounds)):s.onEnd()},s.onTouchMove=function(e){var t;!E(e)&&s.sliderRef?(t=V(s.props.vertical,e),s.onMove(e,t-s.dragOffset,s.dragTrack,s.startBounds)):s.onEnd()},s.onKeyDown=function(e){s.sliderRef&&v(e,s.handlesRefs)&&s.onKeyboard(e)},s.onClickMarkLabel=function(e,t){e.stopPropagation(),s.onChange({value:t}),s.setState({value:t},function(){return s.onEnd(!0)})},s.saveSlider=function(e){s.sliderRef=e};var t=e.step,n=e.max,a=e.min,e=!isFinite(n-a)||(n-a)%t===0;return Object(p.a)(!t||Math.floor(t)!==t||e,"Slider[max] - Slider[min] (".concat(n-a,") should be a multiple of Slider[step] (").concat(t,")")),s.handlesRefs={},s}return Object(s.a)(O,[{key:"componentDidMount",value:function(){this.document=this.sliderRef&&this.sliderRef.ownerDocument;var e=this.props,t=e.autoFocus,e=e.disabled;t&&!e&&this.focus()}},{key:"componentWillUnmount",value:function(){C(Object(S.a)(O.prototype),"componentWillUnmount",this)&&C(Object(S.a)(O.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"getSliderStart",value:function(){var e=this.sliderRef,t=this.props,n=t.vertical,t=t.reverse,e=e.getBoundingClientRect();return n?t?e.bottom:e.top:window.pageXOffset+(t?e.right:e.left)}},{key:"getSliderLength",value:function(){var e=this.sliderRef;if(!e)return 0;e=e.getBoundingClientRect();return this.props.vertical?e.height:e.width}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=Object(o.a)(this.document,"touchmove",this.onTouchMove),this.onTouchUpListener=Object(o.a)(this.document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=Object(o.a)(this.document,"mousemove",this.onMouseMove),this.onMouseUpListener=Object(o.a)(this.document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"focus",value:function(){var e;this.props.disabled||null===(e=this.handlesRefs[0])||void 0===e||e.focus()}},{key:"blur",value:function(){var n=this;this.props.disabled||Object.keys(this.handlesRefs).forEach(function(e){var t;null===(e=n.handlesRefs[e])||void 0===e||null===(t=e.blur)||void 0===t||t.call(e)})}},{key:"calcValue",value:function(e){var t=this.props,n=t.vertical,a=t.min,t=t.max,e=Math.abs(Math.max(e,0)/this.getSliderLength());return n?(1-e)*(t-a)+a:e*(t-a)+a}},{key:"calcValueByPos",value:function(e){e=(this.props.reverse?-1:1)*(e-this.getSliderStart());return this.trimAlignValue(this.calcValue(e))}},{key:"calcOffset",value:function(e){var t=this.props,n=t.min,n=(e-n)/(t.max-n);return Math.max(0,100*n)}},{key:"saveHandle",value:function(e,t){this.handlesRefs[e]=t}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.marks,r=e.dots,o=e.step,i=e.included,s=e.disabled,u=e.vertical,l=e.reverse,c=e.min,d=e.max,h=e.children,f=e.maximumTrackStyle,v=e.style,p=e.railStyle,b=e.dotStyle,m=e.activeDotStyle,g=C(Object(S.a)(O.prototype),"render",this).call(this),y=g.tracks,e=g.handles,g=T()(t,(g={},Object(M.a)(g,"".concat(t,"-with-marks"),Object.keys(a).length),Object(M.a)(g,"".concat(t,"-disabled"),s),Object(M.a)(g,"".concat(t,"-vertical"),u),Object(M.a)(g,n,n),g));return x.a.createElement("div",{ref:this.saveSlider,className:g,onTouchStart:s?U:this.onTouchStart,onMouseDown:s?U:this.onMouseDown,onMouseUp:s?U:this.onMouseUp,onKeyDown:s?U:this.onKeyDown,onFocus:s?U:this.onFocus,onBlur:s?U:this.onBlur,style:v},x.a.createElement("div",{className:"".concat(t,"-rail"),style:Object(k.a)(Object(k.a)({},f),p)}),y,x.a.createElement(B,{prefixCls:t,vertical:u,reverse:l,marks:a,dots:r,step:o,included:i,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:c,dotStyle:b,activeDotStyle:m}),e,x.a.createElement(w,{className:"".concat(t,"-mark"),onClickLabel:s?U:this.onClickMarkLabel,vertical:u,marks:a,included:i,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:c,reverse:l}),h)}}]),O}(e)).displayName="ComponentEnhancer(".concat(e.displayName,")"),t.defaultProps=Object(k.a)(Object(k.a)({},e.defaultProps),{},{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(e){var t=e.index,e=Object(m.a)(e,["index"]);return delete e.dragging,null===e.value?null:x.a.createElement(f,Object(b.a)({},e,{key:t}))},onBeforeChange:U,onChange:U,onAfterChange:U,included:!0,disabled:!1,dots:!1,vertical:!1,reverse:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),t}var I=A(function(e){Object(l.a)(r,e);var a=Object(c.a)(r);function r(e){var n;Object(u.a)(this,r),(n=a.call(this,e)).positionGetValue=function(e){return[]},n.onEnd=function(e){var t=n.state.dragging;n.removeDocumentEvents(),(t||e)&&n.props.onAfterChange(n.getValue()),n.setState({dragging:!1})};var t=void 0!==e.defaultValue?e.defaultValue:e.min,t=void 0!==e.value?e.value:t;return n.state={value:n.trimAlignValue(t),dragging:!1},Object(p.a)(!("minimumTrackStyle"in e),"minimumTrackStyle will be deprecated, please use trackStyle instead."),Object(p.a)(!("maximumTrackStyle"in e),"maximumTrackStyle will be deprecated, please use railStyle instead."),n}return Object(s.a)(r,[{key:"calcValueByPos",value:function(e){return 0}},{key:"calcOffset",value:function(e){return 0}},{key:"saveHandle",value:function(e,t){}},{key:"removeDocumentEvents",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.min,r=n.max,o=n.value,i=n.onChange;("min"in this.props||"max"in this.props)&&(n=void 0!==o?o:t.value,(o=this.trimAlignValue(n,this.props))!==t.value&&(this.setState({value:o}),a===e.min&&r===e.max||!y(n,this.props)||i(o)))}},{key:"onChange",value:function(e){var t=this.props,n=!("value"in t),e=e.value>this.props.max?Object(k.a)(Object(k.a)({},e),{},{value:this.props.max}):e;n&&this.setState(e);e=e.value;t.onChange(e)}},{key:"onStart",value:function(e){this.setState({dragging:!0});var t=this.props,n=this.getValue();t.onBeforeChange(n);t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e,t!==n&&(this.prevMovedHandleIndex=0,this.onChange({value:t}))}},{key:"onMove",value:function(e,t){H(e);e=this.state.value,t=this.calcValueByPos(t);t!==e&&this.onChange({value:t})}},{key:"onKeyboard",value:function(e){var t=this.props,n=t.reverse,n=N(e,t.vertical,n);n&&(H(e),n=n(e=this.state.value,this.props),(n=this.trimAlignValue(n))!==e&&(this.onChange({value:n}),this.props.onAfterChange(n),this.onEnd()))}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){var e=this.props.startPoint||this.props.min;return this.state.value>e?e:this.state.value}},{key:"getUpperBound",value:function(){return this.state.value<this.props.startPoint?this.props.startPoint:this.state.value}},{key:"trimAlignValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===e)return null;t=Object(k.a)(Object(k.a)({},this.props),t);return R(P(e,t),t)}},{key:"render",value:function(){var t=this,e=this.props,n=e.prefixCls,a=e.vertical,r=e.included,o=e.disabled,i=e.minimumTrackStyle,s=e.trackStyle,u=e.handleStyle,l=e.tabIndex,c=e.ariaLabelForHandle,d=e.ariaLabelledByForHandle,h=e.ariaValueTextFormatterForHandle,f=e.min,v=e.max,p=e.startPoint,b=e.reverse,m=e.handle,g=this.state,y=g.value,e=g.dragging,g=this.calcOffset(y),u=m({className:"".concat(n,"-handle"),prefixCls:n,vertical:a,offset:g,value:y,dragging:e,disabled:o,min:f,max:v,reverse:b,index:0,tabIndex:l,ariaLabel:c,ariaLabelledBy:d,ariaValueTextFormatter:h,style:u[0]||u,ref:function(e){return t.saveHandle(0,e)}}),p=void 0!==p?this.calcOffset(p):0,s=s[0]||s;return{tracks:x.a.createElement(j,{className:"".concat(n,"-track"),vertical:a,included:r,offset:p,reverse:b,length:g-p,style:Object(k.a)(Object(k.a)({},i),s)}),handles:u}}}]),r}(x.a.Component)),G=function(e){var t=e.value,n=e.handle,a=e.bounds,r=e.props,o=r.allowCross,i=r.pushable,e=Number(i),i=P(t,r),t=i;return o||null==n||void 0===a||(n>0&&i<=a[n-1]+e&&(t=a[n-1]+e),n<a.length-1&&i>=a[n+1]-e&&(t=a[n+1]-e)),R(t,r)},a=function(e){Object(l.a)(i,e);var o=Object(c.a)(i);function i(n){var a;Object(u.a)(this,i),(a=o.call(this,n)).positionGetValue=function(e){var t=a.getValue(),n=a.calcValueByPos(e),e=a.getClosestBound(n),e=a.getBoundNeedMoving(n,e);if(n===t[e])return null;t=Object(h.a)(t);return t[e]=n,t},a.onEnd=function(e){var t=a.state.handle;a.removeDocumentEvents(),t||(a.dragTrack=!1),null===t&&!e||a.props.onAfterChange(a.getValue()),a.setState({handle:null})};var e=n.count,t=n.min,r=n.max,e=Array.apply(void 0,Object(h.a)(Array(e+1))).map(function(){return t}),e="defaultValue"in n?n.defaultValue:e,e=(void 0!==n.value?n.value:e).map(function(e,t){return G({value:e,handle:t,props:n})}),r=e[0]===r?0:e.length-1;return a.state={handle:null,recent:r,bounds:e},a}return Object(s.a)(i,[{key:"calcValueByPos",value:function(e){return 0}},{key:"getSliderLength",value:function(){return 0}},{key:"calcOffset",value:function(e){return 0}},{key:"saveHandle",value:function(e,t){}},{key:"removeDocumentEvents",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.props,r=a.onChange,o=a.value,i=a.min,a=a.max;!("min"in this.props||"max"in this.props)||i===e.min&&a===e.max||(t=o||t.bounds).some(function(e){return y(e,n.props)})&&r(t.map(function(e){return P(e,n.props)}))}},{key:"onChange",value:function(t){var n,e=this.props;"value"in e?(n={},["handle","recent"].forEach(function(e){void 0!==t[e]&&(n[e]=t[e])}),Object.keys(n).length&&this.setState(n)):this.setState(t);var a=Object(k.a)(Object(k.a)({},this.state),t).bounds;e.onChange(a)}},{key:"onStart",value:function(e){var t=this.props,n=this.state,a=this.getValue();t.onBeforeChange(a);t=this.calcValueByPos(e);this.startValue=t,this.startPosition=e;e=this.getClosestBound(t);this.prevMovedHandleIndex=this.getBoundNeedMoving(t,e),this.setState({handle:this.prevMovedHandleIndex,recent:this.prevMovedHandleIndex}),t!==a[this.prevMovedHandleIndex]&&((n=Object(h.a)(n.bounds))[this.prevMovedHandleIndex]=t,this.onChange({bounds:n}))}},{key:"onMove",value:function(e,t,n,a){H(e);var r,o,i=this.state,s=this.props,u=s.max||100,l=s.min||0;n?(e=s.vertical?-t:t,e=s.reverse?-e:e,n=u-Math.max.apply(Math,Object(h.a)(a)),s=l-Math.min.apply(Math,Object(h.a)(a)),r=Math.min(Math.max(e/(this.getSliderLength()/100),s),n),o=a.map(function(e){return Math.floor(Math.max(Math.min(e+r,u),l))}),i.bounds.map(function(e,t){return e===o[t]}).some(function(e){return!e})&&this.onChange({bounds:o})):(t=this.calcValueByPos(t))!==i.bounds[i.handle]&&this.moveTo(t)}},{key:"onKeyboard",value:function(e){var t,n=this.props,a=n.reverse,r=N(e,n.vertical,a);r&&(H(e),t=this.state,n=this.props,r=r(e=t.bounds[null===(a=t.handle)?t.recent:a],n),(n=G({value:r,handle:a,bounds:t.bounds,props:n}))!==e&&this.moveTo(n,!0))}},{key:"getValue",value:function(){return this.state.bounds}},{key:"getClosestBound",value:function(e){for(var t=this.state.bounds,n=0,a=1;a<t.length-1;a+=1)e>=t[a]&&(n=a);return Math.abs(t[n+1]-e)<Math.abs(t[n]-e)&&(n+=1),n}},{key:"getBoundNeedMoving",value:function(e,t){var n=this.state,a=n.bounds,r=n.recent,o=t,n=a[t+1]===a[t];return n&&a[r]===a[t]&&(o=r),o=n&&e!==a[t+1]?e<a[t+1]?t:t+1:o}},{key:"getLowerBound",value:function(){return this.state.bounds[0]}},{key:"getUpperBound",value:function(){var e=this.state.bounds;return e[e.length-1]}},{key:"getPoints",value:function(){var e=this.props,t=e.marks,n=e.step,a=e.min,r=e.max,e=this.internalPointsCache;if(!e||e.marks!==t||e.step!==n){var o=Object(k.a)({},t);if(null!==n)for(var i=a;i<=r;i+=n)o[i]=i;a=Object.keys(o).map(parseFloat);a.sort(function(e,t){return e-t}),this.internalPointsCache={marks:t,step:n,points:a}}return this.internalPointsCache.points}},{key:"moveTo",value:function(e,t){var n=this,a=this.state,r=this.props,o=Object(h.a)(a.bounds),a=null===a.handle?a.recent:a.handle;o[a]=e;var i=a;!1!==r.pushable?this.pushSurroundingHandles(o,i):r.allowCross&&(o.sort(function(e,t){return e-t}),i=o.indexOf(e)),this.onChange({recent:i,handle:i,bounds:o}),t&&(this.props.onAfterChange(o),this.setState({},function(){n.handlesRefs[i].focus()}),this.onEnd())}},{key:"pushSurroundingHandles",value:function(e,t){var n=e[t],a=this.props.pushable,r=Number(a),o=0;e[t+1]-n<r&&(o=1),0!==(o=n-e[t-1]<r?-1:o)&&(n=o*(e[a=t+o]-n),this.pushHandle(e,a,o,r-n)||(e[t]=e[a]-o*r))}},{key:"pushHandle",value:function(e,t,n,a){for(var r=e[t],o=e[t];n*(o-r)<a;){if(!this.pushHandleOnePoint(e,t,n))return e[t]=r,!1;o=e[t]}return!0}},{key:"pushHandleOnePoint",value:function(e,t,n){var a=this.getPoints(),r=a.indexOf(e[t])+n;if(r>=a.length||r<0)return!1;var o=t+n,i=a[r],a=this.props.pushable,r=Number(a),a=n*(e[o]-i);return!!this.pushHandle(e,o,n,r-a)&&(e[t]=i,!0)}},{key:"trimAlignValue",value:function(e){var t=this.state,n=t.handle,t=t.bounds;return G({value:e,handle:n,bounds:t,props:this.props})}},{key:"render",value:function(){var o=this,e=this.state,i=e.handle,t=e.bounds,e=this.props,s=e.prefixCls,u=e.vertical,r=e.included,l=e.disabled,c=e.min,d=e.max,h=e.reverse,f=e.handle,v=e.trackStyle,p=e.handleStyle,b=e.tabIndex,m=e.ariaLabelGroupForHandles,g=e.ariaLabelledByGroupForHandles,y=e.ariaValueTextFormatterGroupForHandles,O=t.map(function(e){return o.calcOffset(e)}),k="".concat(s,"-handle"),e=t.map(function(e,t){var n,a=b[t]||0;!l&&null!==b[t]||(a=null);var r=i===t;return f({className:T()((n={},Object(M.a)(n,k,!0),Object(M.a)(n,"".concat(k,"-").concat(t+1),!0),Object(M.a)(n,"".concat(k,"-dragging"),r),n)),prefixCls:s,vertical:u,dragging:r,offset:O[t],value:e,index:t,tabIndex:a,min:c,max:d,reverse:h,disabled:l,style:p[t],ref:function(e){return o.saveHandle(t,e)},ariaLabel:m[t],ariaLabelledBy:g[t],ariaValueTextFormatter:y[t]})});return{tracks:t.slice(0,-1).map(function(e,t){var n=t+1,a=T()((a={},Object(M.a)(a,"".concat(s,"-track"),!0),Object(M.a)(a,"".concat(s,"-track-").concat(n),!0),a));return x.a.createElement(j,{className:a,vertical:u,reverse:h,included:r,offset:O[n-1],length:O[n]-O[n-1],style:v[t],key:n})}),handles:e}}}],[{key:"getDerivedStateFromProps",value:function(n,a){if(!("value"in n||"min"in n||"max"in n))return null;var e=n.value||a.bounds,t=e.map(function(e,t){return G({value:e,handle:t,bounds:a.bounds,props:n})});if(a.bounds.length===t.length){if(t.every(function(e,t){return e===a.bounds[t]}))return null}else t=e.map(function(e,t){return G({value:e,handle:t,props:n})});return Object(k.a)(Object(k.a)({},a),{},{bounds:t})}}]),i}(x.a.Component);a.displayName="Range",a.defaultProps={count:1,allowCross:!0,pushable:!1,draggableTrack:!1,tabIndex:[],ariaLabelGroupForHandles:[],ariaLabelledByGroupForHandles:[],ariaValueTextFormatterGroupForHandles:[]};var K=A(a),W=n(443),X=n(57),z=n(32),J=d.forwardRef(function(e,t){var n=e.visible,a=e.overlay,r=d.useRef(null),t=Object(X.a)(t,r),o=d.useRef(null);function i(){z.a.cancel(o.current)}return d.useEffect(function(){return n?o.current=Object(z.a)(function(){var e;null===(e=r.current)||void 0===e||e.forcePopupAlign()}):i(),i},[n,a]),d.createElement(W.a,Object(b.a)({ref:t},e))}),I=I;I.Range=K,I.Handle=f,I.createSliderWithTooltip=function(a){var e;return(e=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var h;return Object(u.a)(this,n),(h=t.apply(this,arguments)).state={visibles:{}},h.handleTooltipVisibleChange=function(t,n){h.setState(function(e){return{visibles:Object(k.a)(Object(k.a)({},e.visibles),{},Object(M.a)({},t,n))}})},h.handleWithTooltip=function(e){var t=e.value,n=e.dragging,a=e.index,r=e.disabled,o=Object(m.a)(e,["value","dragging","index","disabled"]),i=h.props,s=i.tipFormatter,u=i.tipProps,l=i.handleStyle,c=i.getTooltipContainer,d=u.prefixCls,e=void 0===d?"rc-slider-tooltip":d,i=u.overlay,d=void 0===i?s(t):i,s=u.placement,i=void 0===s?"top":s,s=u.visible,s=void 0!==s&&s,u=Object(m.a)(u,["prefixCls","overlay","placement","visible"]),l=Array.isArray(l)?l[a]||l[0]:l;return x.a.createElement(J,Object(b.a)({},u,{getTooltipContainer:c,prefixCls:e,overlay:d,placement:i,visible:!r&&(h.state.visibles[a]||n)||s,key:a}),x.a.createElement(f,Object(b.a)({},o,{style:Object(k.a)({},l),value:t,onMouseEnter:function(){return h.handleTooltipVisibleChange(a,!0)},onMouseLeave:function(){return h.handleTooltipVisibleChange(a,!1)}})))},h}return Object(s.a)(n,[{key:"render",value:function(){return x.a.createElement(a,Object(b.a)({},this.props,{handle:this.handleWithTooltip}))}}]),n}(x.a.Component)).defaultProps={tipFormatter:function(e){return e},handleStyle:[{}],tipProps:{},getTooltipContainer:function(e){return e.parentNode}},e},t.c=I}}]);