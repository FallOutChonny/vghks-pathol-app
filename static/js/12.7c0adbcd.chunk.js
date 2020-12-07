(this["webpackJsonpvghks-pathol-app"]=this["webpackJsonpvghks-pathol-app"]||[]).push([[12],{1499:function(e,t,a){"use strict";a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return E}));var n=a(3),r=a(12),c=a(0),o=a.n(c),i=(a(313),a(128),a(56)),l=a(493),d=a(30),s=(a(83),a(121)),u=a(233),m=a(20),b=a(22),O=a(26).compose;function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.division,a=void 0===t?b.a.PATH:t,c=Object(r.a)(e,["division"]),o=Object(s.a)("/api/v1/c2/getC2DoctorList/{division}",{variables:Object(n.a)({division:a},c)}),i=o.data,d=void 0===i?[]:i,u=Object(r.a)(o,["data"]),m=null===d||void 0===d?void 0:d.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{id:e.doctorId})})),O={};return Object(l.a)((function(e){return O[e.doctorId]=e}),m),Object(n.a)(Object(n.a)({},u),{},{doctorById:O,data:m,doctorEnums:m})}function f(e){var t=j(),a=t.data,n=t.loading;return o.a.createElement(u.a,Object.assign({disabled:n,loading:n},e),O(Object(d.a)((function(e){return o.a.createElement(u.a.Option,{key:e.id,value:e.doctor},e.doctor)})),Object(i.a)([],[]))(a))}function p(e){var t=function(){var e=Object(s.a)("/api/v1/b1/getBodyParts"),t=e.data,a=void 0===t?[]:t,c=Object(r.a)(e,["data"]),o=null===a||void 0===a?void 0:a.map((function(e){return{id:Object(m.n)(),name:e}}));return Object(n.a)(Object(n.a)({},c),{},{data:o})}().data;return o.a.createElement(u.a,e,t.map((function(e){return o.a.createElement(u.a.Option,{key:e.id,value:e.name},e.name)})))}function v(e){var t=function(){var e=Object(s.a)("/api/v1/b1/getWards"),t=e.data,a=void 0===t?[]:t,c=Object(r.a)(e,["data"]),o=null===a||void 0===a?void 0:a.map((function(e){return{id:Object(m.n)(),name:e}}));return Object(n.a)(Object(n.a)({},c),{},{data:o})}().data;return o.a.createElement(u.a,e,t.map((function(e){return o.a.createElement(u.a.Option,{key:e.id,value:e.name},e.name)})))}function E(e){var t=function(){var e=Object(s.a)("/api/v1/b1/getAppointmentTypes"),t=e.data,a=void 0===t?[]:t,c=Object(r.a)(e,["data"]),o=null===a||void 0===a?void 0:a.map((function(e){return{id:Object(m.n)(),name:e}}));return Object(n.a)(Object(n.a)({},c),{},{data:o})}().data;return o.a.createElement(u.a,e,t.map((function(e){return o.a.createElement(u.a.Option,{key:e.id,value:e.name},e.name)})))}},1502:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(75),r=a(3),c=a(9),o=a(12),i=a(527),l=a(77),d=a(108),s=a(87),u=a(138),m=a(20);function b(e){var t=e.startDateField,a=void 0===t?"startDate":t,b=e.endDateField,O=void 0===b?"endDate":b,j=e.format;return function(e){var t;if(!e)return{};var b=e.date,f=void 0===b?[]:b,p=Object(o.a)(e,["date"]),v=Object(m.c)(f,j),E=Object(c.a)(v,2),h=E[0],g=E[1];return Object(i.a)({createDate:Object(l.a)(d.a,s.a,Object(u.a)(1,"format")("YYYY-MM-DD")),reportDate:Object(l.a)(d.a,s.a,Object(u.a)(1,"format")("YYYY-MM-DD"))})(Object(r.a)(Object(r.a)({},p),{},(t={},Object(n.a)(t,a,h),Object(n.a)(t,O,g),t)))}}},1518:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},c=a(24),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="EyeOutlined";t.a=n.forwardRef(o)},1559:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return le}));a(511);var n=a(402),r=a.n(n),c=(a(268),a(73)),o=a.n(c),i=(a(269),a(44)),l=a.n(i),d=(a(215),a(92)),s=a.n(d),u=a(68),m=a.n(u),b=a(3),O=a(145),j=(a(514),a(157)),f=a.n(j),p=(a(110),a(19)),v=a.n(p),E=a(9),h=a(0),g=a.n(h),x=a(77),y=a(176),I=a(128),w=a(87),k=a(360),q=a(49),C=a(141),D=a(93),N=a(525),Y=a(499),M=a(299),R=a(397),z=a(498),F=a(56),S=a(55),T=a(138),A=a(30),B=a(1518),H=a(1480),P=a(513),U=a(193),J=a(1502),K=a(235),W=a(1499),_=a(233),L=a(33),Q=a(246),V=a(512),G=a(312),X=a(63),Z=a(101),$=a(22),ee=a(45),te=a(72),ae=a(20),ne=a(62),re=a(803),ce=a.n(re),oe=a(26).compose,ie=Object(te.a)(6);function le(){Object(P.a)("\u5831\u544a\u67e5\u8a62");var e=Object(U.a)([{name:"\u5831\u544a\u67e5\u8a62"}]),t=g.a.useState(!1),a=Object(E.a)(t,2),n=a[0],c=a[1],i=v.a.useForm(),d=Object(E.a)(i,1)[0],u=Object(J.a)({format:"YYYY-MM-DD"}),j=Object(K.f)({onCompleted:function(e){if(c(!1),n){var t=Object(x.a)(Object(y.a)(Array),I.a,w.a)(e),a=Object(k.a)(["templateId"]),r=oe(Object(q.a)(C.a,"\u5b8c\u6210"),Object(D.a)(["orstatus"])),o=Object(k.a)(["orreqno"]);Object(N.a)([o,a,r])(t)&&Z.a.push("".concat(Object(Y.a)(":id",t.orreqno)(ee.h),"?finish=1")),Object(N.a)([o,a])(t)&&Z.a.push(Object(Y.a)(":id",t.orreqno)(ee.h)),Object(N.a)([o,oe(M.a,a)])(t)&&Z.a.push("".concat(ee.j,"?orreqno=").concat(t.orreqno)),oe(M.a,Object(k.a)(["orreqno"]))(t)&&f.a.error("\u67e5\u7121\u5831\u544a")}}}),p=j.loading,h=j.data,re=j.refetch,le=j.called,de=function(e){var t=oe(Object(R.a)(Object(z.a)("orreqno",e.currentTarget.dataset.id)),Object(F.a)([],["content"]))(h);if(t){var a=oe(Object(q.a)(C.a,"\u5b8c\u6210"),Object(D.a)(["orstatus"])),n=oe(Object(q.a)(C.a,"\u672a\u8f38"),Object(D.a)(["orstatus"])),r=oe(Object(q.a)(C.a,"\u5df2\u8f38"),Object(D.a)(["orstatus"])),c=Object(k.a)(["orreqno"]);Object(N.a)([c,a])(t)&&Z.a.push("".concat(Object(Y.a)(":id",t.orreqno)(ee.h),"?finish=1")),Object(N.a)([c,r])(t)&&Z.a.push(Object(Y.a)(":id",t.orreqno)(ee.h)),Object(N.a)([c,n])(t)&&Z.a.push("".concat(ee.j,"?orreqno=").concat(t.orreqno))}},se=function(e){var t=Object(Y.a)(":id","")(ne.a.viewerUrl);window.open("".concat(t,"?PatientID=").concat(e.currentTarget.dataset.id),"__blank")},ue=function(e){Z.a.push(Object(Y.a)(":id","".concat(e.currentTarget.dataset.id))(ee.d))},me=[{title:"\u7533\u8acb\u5e8f\u865f",dataIndex:"orreqno",sorter:Object(ae.j)("orreqno")},{title:"\u59d3\u540d",dataIndex:"hnamec"},{title:"\u75c5\u7406\u865f",dataIndex:"orworkno",sorter:Object(ae.j)("orworkno")},{title:"\u75c5\u6b77\u865f",dataIndex:"hhisnum",sorter:Object(ae.j)("hhisnum")},{title:"\u75c5\u623f",dataIndex:"hnursta",sorter:Object(ae.j)("hnursta")},{title:"\u5e8a\u865f",dataIndex:"hbed",sorter:Object(ae.j)("hbed")},{title:"\u6027\u5225",dataIndex:"hsex",sorter:Object(ae.j)("hsex")},{title:"\u7c3d\u6536\u65e5\u671f",dataIndex:"zrsregord",sorter:Object(ae.j)("zrsregord")},{title:"\u6536\u8cbb\u78bc",dataIndex:"ordclnm"},{title:"\u79d1\u5225",dataIndex:"csect",sorter:Object(ae.j)("csect")},{title:"\u72c0\u614b",dataIndex:"orstatus",sorter:Object(ae.j)("orstatus")},{title:"\u91ab\u56d1",dataIndex:"ORPROCED",render:function(e,t){return g.a.createElement(s.a,{title:"\u67e5\u770b\u91ab\u56d1\u5167\u5bb9"},g.a.createElement(B.a,{"data-id":t.orreqno,className:"cursor-pointer text-lg",onClick:ue}))}},{title:"\u5831\u544a",dataIndex:"x",render:function(e,t){return g.a.createElement(s.a,{title:"\u7de8\u8f2f\u3001\u67e5\u770b\u5831\u544a\u5167\u5bb9"},g.a.createElement(H.a,{"data-id":t.orreqno,className:"cursor-pointer text-lg",onClick:de}))}},{title:"\u5f71\u50cf",dataIndex:"createAt",render:function(e,t){return g.a.createElement(s.a,{title:"\u958b\u555f\u65b0\u8996\u7a97\u67e5\u770b\u5f71\u50cf"},g.a.createElement(B.a,{"data-id":t.hhisnum,className:"cursor-pointer text-lg",onClick:se}))}}];return g.a.createElement(r.a,{spinning:p},g.a.createElement(V.a,{style:{minHeight:"calc(100vh - 203px)"}},g.a.createElement(o.a,{justify:"center"},g.a.createElement(l.a,{md:22,xs:24},g.a.createElement(v.a,{form:d,layout:"horizontal",hideRequiredMark:!0,labelAlign:"left",colon:!1},g.a.createElement(o.a,{gutter:12,justify:"space-between"},g.a.createElement(l.a,{md:7,xs:24},g.a.createElement(ce.a,{noStyle:!0,shouldUpdate:!0},(function(e){var t=oe(Object(x.a)(Object(q.a)(C.a,"rpresult"),Object(S.a)({rules:[te.d.required]}),Object(S.a)({})),Object(T.a)(1,"getFieldValue")("classification"))(e);return g.a.createElement(v.a.Item,Object.assign({},ie,t,{label:"\u67e5\u8a62\u55ae\u865f",name:"no"}),g.a.createElement(L.c,{addonBefore:g.a.createElement(v.a.Item,{noStyle:!0,name:"noType"},g.a.createElement(_.a,Object.assign({},t,{allowClear:!0,style:{width:100},placeholder:"\u55ae\u865f\u985e\u578b"}),g.a.createElement(_.a.Option,{value:"ORREQNO"},"\u7533\u8acb\u5e8f\u865f"),g.a.createElement(_.a.Option,{value:"ORWORKNO"},"\u75c5\u7406\u865f"),g.a.createElement(_.a.Option,{value:"HHISNUM"},"\u75c5\u6b77\u865f")))}))}))),g.a.createElement(l.a,{md:7,xs:24},g.a.createElement(v.a.Item,Object.assign({},ie,{label:"\u67e5\u8a62\u985e\u5225",name:"classification",rules:[te.d.required]}),g.a.createElement(_.a,{allowClear:!0},g.a.createElement(_.a.Option,{value:"pathorderview"},"\u91ab\u56d1"),g.a.createElement(_.a.Option,{value:"rpresult"},"\b\u5831\u544a")))),g.a.createElement(l.a,{md:7,xs:24},g.a.createElement(v.a.Item,Object.assign({},ie,{label:"\u7c3d\u6536\u65e5\u671f",name:"date"}),g.a.createElement(Q.b,{className:"w-full"})))),g.a.createElement(o.a,{gutter:12,justify:"space-between"},g.a.createElement(l.a,{md:7,xs:24},g.a.createElement(v.a.Item,Object.assign({},ie,{label:"\u91ab\u5e2b",name:"doctor"}),g.a.createElement(W.d,{allowClear:!0}))),g.a.createElement(l.a,{md:7,xs:24},g.a.createElement(v.a.Item,Object.assign({},ie,{label:"\u5831\u544a\u72c0\u614b",name:"reportStatus"}),g.a.createElement(_.a,{allowClear:!0},Object(A.a)((function(e){return g.a.createElement(_.a.Option,{key:e.id,value:e.id},e.name)}))($.d)))),g.a.createElement(l.a,{md:7,xs:24},g.a.createElement(v.a.Item,null,g.a.createElement(X.a,{color:"primary",style:{width:120},className:"mr-3",onClick:function(){return d.resetFields()}},"\u91cd\u8a2d"),g.a.createElement(X.a,{color:"primary",style:{width:120},onClick:function(){d.validateFields().then(function(){var t=Object(O.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"rpresult"===a.classification&&c(!0),re(u(Object(b.a)({},a))),e([{name:"\u5831\u544a\u67e5\u8a62"},{name:"\u67e5\u8a62\u7d50\u679c"}]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},"\u641c\u5c0b"))))))),le&&!n&&g.a.createElement(g.a.Fragment,null,g.a.createElement(o.a,{className:"mb-2 mt-4",justify:"center"},g.a.createElement(l.a,{md:24,xs:24,className:"text-sm"},"\u6aa2\u7d22\u7d50\u679c\u5171 ",g.a.createElement("span",{className:"text-primary"},h.total)," \u7b46")),g.a.createElement(o.a,{justify:"center"},g.a.createElement(l.a,{md:24,xs:24},g.a.createElement(G.a,{rowKey:"id",dataSource:h,columns:me}))))))}}}]);
//# sourceMappingURL=12.7c0adbcd.chunk.js.map