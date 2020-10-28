(this["webpackJsonpvghks-pathol-app"]=this["webpackJsonpvghks-pathol-app"]||[]).push([[18],{2789:function(e,t,n){"use strict";n.r(t);var r=n(76),a=n.n(r),o=n(156),i=n(34),s=n(44),c=n(40),p=n(41),d=n(0),u=n.n(d),I=n(8),l=n(2761),v=n.n(l),f=n(1252),w=n(1254),h=n(519),m=n.n(h),S=n(1323),D=f.j.redux.actions,y=D.setViewportActive,g=D.setViewportSpecificData,x=f.j.measurements.MeasurementHandlers,O=x.onAdded,U=x.onRemoved,k=x.onModified,b={added:O,removed:U,modified:m()((function(e){return k(e)}),300)},P=Object(w.b)((function(e,t){var n;e.extensions&&e.extensions.cornerstone&&(n=e.extensions.cornerstone);var r=t.viewportIndex,a=r===e.viewports.activeViewportIndex,o=e.viewports.viewportSpecificData[r]||{},i=!1,s=24;if(o&&o.cine){var c=o.cine;i=!0===c.isPlaying,s=c.cineFrameRate||s}return Object(I.a)(Object(I.a)({isActive:a},n),{},{isStackPrefetchEnabled:a,isPlaying:i,frameRate:s})}),(function(e,t){var n=t.viewportIndex;return{setViewportActive:function(){e(y(n))},setViewportSpecificData:function(t){e(g(n,t))},onElementEnabled:function(t){var r=t.detail.element;Object(S.b)(n,r),e(g(n,{plugin:"cornerstone"}))},onMeasurementsChanged:function(e,t){return b[t](e)}}}))(v.a),j=n(1253),E=n.n(j),V=f.j.utils.StackManager,C=function(e){Object(c.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={viewportData:null},e.getViewportData=function(){var e=Object(o.a)(a.a.mark((function e(t,r,o,i,s){var c,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p=n.getCornerstoneStack(t,r,o,i,s),c={StudyInstanceUID:r,displaySetInstanceUID:o,stack:p},e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"setStateFromProps",value:function(){var e=this,t=this.props.viewportData,n=t.studies,r=t.displaySet,a=r.StudyInstanceUID,o=r.displaySetInstanceUID,i=r.sopClassUIDs,s=r.SOPInstanceUID,c=r.frameIndex;a&&o&&(i&&i.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),this.getViewportData(n,a,o,s,c).then((function(t){e.setState({viewportData:t})})))}},{key:"componentDidMount",value:function(){this.setStateFromProps()}},{key:"componentDidUpdate",value:function(e){var t=this.props.viewportData.displaySet,n=e.viewportData.displaySet;t.displaySetInstanceUID===n.displaySetInstanceUID&&t.SOPInstanceUID===n.SOPInstanceUID&&t.frameIndex===n.frameIndex||this.setStateFromProps()}},{key:"render",value:function(){var e=this,t=null;if(!this.state.viewportData)return null;var n=this.props.viewportIndex,r=this.state.viewportData.stack,a=r.imageIds,o=r.currentImageIdIndex;this.props.children&&this.props.children.length&&(t=this.props.children.map((function(t,n){return t&&u.a.cloneElement(t,{viewportIndex:e.props.viewportIndex,key:n})})));return u.a.createElement(u.a.Fragment,null,u.a.createElement(P,Object.assign({viewportIndex:n,imageIds:a,imageIdIndex:o,onNewImage:function(t){var r=t.currentImageIdIndex,a=t.sopInstanceUid,o=e.props.viewportData.displaySet.StudyInstanceUID;r>0&&e.props.onNewImage({StudyInstanceUID:o,SOPInstanceUID:a,frameIndex:r,activeViewportIndex:n})},onNewImageDebounceTime:700},this.props.customProps)),t)}}],[{key:"init",value:function(){console.log("OHIFCornerstoneViewport init()")}},{key:"destroy",value:function(){console.log("OHIFCornerstoneViewport destroy()"),V.clearStacks()}},{key:"getCornerstoneStack",value:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(!e||!e.length)throw new Error("Studies not provided.");if(!t)throw new Error("StudyInstanceUID not provided.");if(!n)throw new Error("StudyInstanceUID not provided.");var o=e.find((function(e){return e.StudyInstanceUID===t}));if(!o)throw new Error("Study not found.");var i=o.displaySets.find((function(e){return e.displaySetInstanceUID===n}));if(!i)throw new Error("Display Set not found.");var s=V.findOrCreateStack(o,i),c=Object.assign({},s);if(c.currentImageIdIndex=a,r){var p=c.imageIds.findIndex((function(e){return E.a.metaData.get("SOPInstanceUID",e)===r}));p>-1?c.currentImageIdIndex=p:console.warn("SOPInstanceUID provided was not found in specified DisplaySet")}return c}}]),n}(d.Component);C.defaultProps={customProps:{}},C.id="OHIFCornerstoneViewport";t.default=C}}]);
//# sourceMappingURL=18.a6fa679c.chunk.js.map