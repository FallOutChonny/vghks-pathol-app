(this["webpackJsonpvghks-pathol-app"]=this["webpackJsonpvghks-pathol-app"]||[]).push([[13],{1502:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(77),n=a(3),c=a(9),l=a(11),o=a(530),i=a(83),s=a(109),d=a(96),u=a(147),m=a(20);function b(e){var t=e.startDateField,a=void 0===t?"startDate":t,b=e.endDateField,j=void 0===b?"endDate":b,O=e.format;return function(e){var t;if(!e)return{};var b=e.date,f=void 0===b?[]:b,p=Object(l.a)(e,["date"]),h=Object(m.c)(f,O),E=Object(c.a)(h,2),v=E[0],x=E[1];return Object(o.a)({createDate:Object(i.a)(s.a,d.a,Object(u.a)(1,"format")("YYYY-MM-DD")),reportDate:Object(i.a)(s.a,d.a,Object(u.a)(1,"format")("YYYY-MM-DD"))})(Object(n.a)(Object(n.a)({},p),{},(t={},Object(r.a)(t,a,v),Object(r.a)(t,j,x),t)))}}},1517:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},c=a(26),l=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="EyeOutlined";t.a=r.forwardRef(l)},1557:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ie}));a(514);var r=a(402),n=a.n(r),c=(a(233),a(70)),l=a.n(c),o=(a(234),a(44)),i=a.n(o),s=(a(194),a(89)),d=a.n(s),u=a(69),m=a.n(u),b=a(3),j=a(144),O=(a(403),a(140)),f=a.n(O),p=(a(105),a(19)),h=a.n(p),E=a(9),v=a(0),x=a.n(v),g=a(83),y=a(175),I=a(110),w=a(96),q=a(361),C=a(52),k=a(176),D=a(78),N=a(528),Y=a(299),M=a(501),F=a(397),R=a(500),z=a(45),S=a(58),T=a(147),U=a(29),A=a(805),H=a.n(A),B=a(1517),J=a(1480),K=a(516),P=a(193),V=a(1502),_=a(177),Q=a(236),W=a(34),G=a(246),L=a(515),X=a(312),Z=a(64),$=a(92),ee=a(22),te=a(48),ae=a(74),re=a(20),ne=a(60),ce=a(38),le=a(24).compose,oe=Object(ae.a)(6);function ie(){Object(K.a)("\u5831\u544a\u67e5\u8a62");var e=Object(ce.b)().user,t=Object(P.a)([{name:"\u5831\u544a\u67e5\u8a62"}]),a=x.a.useState(!1),r=Object(E.a)(a,2),c=r[0],o=r[1],s=h.a.useForm(),u=Object(E.a)(s,1)[0],O=Object(V.a)({format:"YYYY-MM-DD"}),p=Object(_.g)({onCompleted:function(t){if(o(!1),c){var a=Object(g.a)(Object(y.a)(Array),I.a,w.a)(t),r=Object(q.a)(["templateId"]),n=le(Object(C.a)(k.a,"\u5b8c\u6210"),Object(D.a)(["orstatus"])),l=Object(q.a)(["orreqno"]);Object(N.a)([le(Y.a,n),function(){return e.isClinician}])(a)||(Object(N.a)([l,r,n])(a)&&$.a.push("".concat(Object(M.a)(":id",a.orreqno)(te.h),"?finish=1")),Object(N.a)([l,r])(a)&&$.a.push(Object(M.a)(":id",a.orreqno)(te.h)),Object(N.a)([l,le(Y.a,r)])(a)&&$.a.push("".concat(te.j,"?orreqno=").concat(a.orreqno)),le(Y.a,Object(q.a)(["orreqno"]))(a)&&f.a.error("\u67e5\u7121\u5831\u544a"))}}}),v=p.loading,A=p.data,ie=p.refetch,se=p.called,de=function(t){var a=le(Object(F.a)(Object(R.a)("orreqno",t.currentTarget.dataset.id)),Object(z.a)([],["content"]))(A);if(a){var r=le(Object(C.a)(k.a,"\u5b8c\u6210"),Object(D.a)(["orstatus"])),n=le(Object(C.a)(k.a,"\u672a\u8f38"),Object(D.a)(["orstatus"])),c=le(Object(C.a)(k.a,"\u5df2\u8f38"),Object(D.a)(["orstatus"])),l=Object(q.a)(["orreqno"]);Object(N.a)([le(Y.a,r),function(){return e.isClinician}])(a)||(Object(N.a)([l,r])(a)&&$.a.push("".concat(Object(M.a)(":id",a.orreqno)(te.h),"?finish=1")),Object(N.a)([l,c])(a)&&$.a.push(Object(M.a)(":id",a.orreqno)(te.h)),Object(N.a)([l,n])(a)&&$.a.push("".concat(te.j,"?orreqno=").concat(a.orreqno)))}},ue=function(e){var t=Object(M.a)(":id","")(ne.a.viewerUrl);window.open("".concat(t,"?PatientID=").concat(e.currentTarget.dataset.id),"__blank")},me=function(e){$.a.push(Object(M.a)(":id","".concat(e.currentTarget.dataset.id))(te.d))},be=[{title:"\u7533\u8acb\u5e8f\u865f",dataIndex:"orreqno",sorter:Object(re.j)("orreqno")},{title:"\u59d3\u540d",dataIndex:"hnamec"},{title:"\u75c5\u7406\u865f",dataIndex:"orworkno",sorter:Object(re.j)("orworkno")},{title:"\u75c5\u6b77\u865f",dataIndex:"hhisnum",sorter:Object(re.j)("hhisnum")},{title:"\u75c5\u623f",dataIndex:"hnursta",sorter:Object(re.j)("hnursta")},{title:"\u5e8a\u865f",dataIndex:"hbed",sorter:Object(re.j)("hbed")},{title:"\u6027\u5225",dataIndex:"hsex",sorter:Object(re.j)("hsex")},{title:"\u7c3d\u6536\u65e5\u671f",dataIndex:"zrsregord",sorter:Object(re.j)("zrsregord")},{title:"\u6536\u8cbb\u78bc",dataIndex:"ordclnm"},{title:"\u79d1\u5225",dataIndex:"csect",sorter:Object(re.j)("csect")},{title:"\u72c0\u614b",dataIndex:"orstatus",sorter:Object(re.j)("orstatus")},{title:"\u91ab\u56d1",dataIndex:"ORPROCED",render:function(e,t){return x.a.createElement(d.a,{title:"\u67e5\u770b\u91ab\u56d1\u5167\u5bb9"},x.a.createElement(B.a,{"data-id":t.orreqno,className:"cursor-pointer text-lg",onClick:me}))}},{title:"\u5831\u544a",dataIndex:"x",render:function(e,t){return x.a.createElement(d.a,{title:"\u7de8\u8f2f\u3001\u67e5\u770b\u5831\u544a\u5167\u5bb9"},x.a.createElement(J.a,{"data-id":t.orreqno,className:"cursor-pointer text-lg",onClick:de}))}},{title:"\u5f71\u50cf",dataIndex:"createAt",render:function(e,t){return x.a.createElement(d.a,{title:"\u958b\u555f\u65b0\u8996\u7a97\u67e5\u770b\u5f71\u50cf"},x.a.createElement(B.a,{"data-id":t.hhisnum,className:"cursor-pointer text-lg",onClick:ue}))}}],je=function(e){return x.a.createElement(h.a.Item,{noStyle:!0,shouldUpdate:!0},(function(t){var a=t.getFieldValue;return e({disabled:"rpresult"===a("classification")})}))};return x.a.createElement(n.a,{spinning:v},x.a.createElement(L.a,{style:{minHeight:"calc(100vh - 203px)"}},x.a.createElement(l.a,{justify:"center"},x.a.createElement(i.a,{md:22,xs:24},x.a.createElement(h.a,{form:u,layout:"horizontal",hideRequiredMark:!0,labelAlign:"left",colon:!1},x.a.createElement(l.a,{gutter:12,justify:"space-between"},x.a.createElement(i.a,{md:7,xs:24},x.a.createElement(H.a,{noStyle:!0,shouldUpdate:!0},(function(e){var t=le(Object(g.a)(Object(C.a)(k.a,"rpresult"),Object(S.a)({rules:[ae.d.required]}),Object(S.a)({})),Object(T.a)(1,"getFieldValue")("classification"))(e);return x.a.createElement(h.a.Item,Object.assign({},t,{labelCol:{span:5},wrapperCol:{span:19},label:"\u67e5\u8a62\u55ae\u865f",name:"no"}),x.a.createElement(W.c,{addonBefore:x.a.createElement(h.a.Item,{noStyle:!0,name:"noType"},x.a.createElement(Q.a,Object.assign({},t,{allowClear:!0,style:{width:100},placeholder:"\u55ae\u865f\u985e\u578b"}),x.a.createElement(Q.a.Option,{value:"ORREQNO"},"\u7533\u8acb\u5e8f\u865f"),x.a.createElement(Q.a.Option,{value:"ORWORKNO"},"\u75c5\u7406\u865f"),x.a.createElement(Q.a.Option,{value:"HHISNUM"},"\u75c5\u6b77\u865f")))}))}))),x.a.createElement(i.a,{md:5,xs:24},x.a.createElement(h.a.Item,Object.assign({},oe,{label:"\u67e5\u8a62\u985e\u5225",name:"classification",rules:[ae.d.required]}),x.a.createElement(Q.a,{allowClear:!0},x.a.createElement(Q.a.Option,{value:"pathorderview"},"\u91ab\u56d1"),x.a.createElement(Q.a.Option,{value:"rpresult"},"\b\u5831\u544a")))),x.a.createElement(i.a,{md:6,xs:24},je((function(e){var t=e.disabled;return x.a.createElement(h.a.Item,Object.assign({},oe,{label:"\u7c3d\u6536\u65e5\u671f",name:"date"}),x.a.createElement(G.b,{className:"w-full",disabled:t}))}))),x.a.createElement(i.a,{md:6,xs:24},je((function(e){var t=e.disabled;return x.a.createElement(h.a.Item,Object.assign({},oe,{label:"\u5831\u544a\u72c0\u614b",name:"reportStatus"}),x.a.createElement(Q.a,{allowClear:!0,disabled:t},Object(U.a)((function(e){return x.a.createElement(Q.a.Option,{key:e.id,value:e.id},e.name)}))(ee.d)))})))),x.a.createElement(l.a,{className:"mt-4"},x.a.createElement(i.a,{md:24,xs:24,className:"flex justify-end"},x.a.createElement(h.a.Item,null,x.a.createElement(Z.a,{color:"primary",style:{width:96},className:"mr-3",onClick:function(){return u.resetFields()}},"\u91cd\u8a2d"),x.a.createElement(Z.a,{color:"primary",style:{width:96},onClick:function(){u.validateFields().then(function(){var e=Object(j.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"rpresult"===a.classification&&o(!0),ie(O(Object(b.a)({},a))),t([{name:"\u5831\u544a\u67e5\u8a62"},{name:"\u67e5\u8a62\u7d50\u679c"}]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"\u641c\u5c0b"))))))),se&&!c&&x.a.createElement(x.a.Fragment,null,x.a.createElement(l.a,{className:"mb-2 mt-4",justify:"center"},x.a.createElement(i.a,{md:24,xs:24,className:"text-sm"},"\u6aa2\u7d22\u7d50\u679c\u5171 ",x.a.createElement("span",{className:"text-primary"},A.total)," \u7b46")),x.a.createElement(l.a,{justify:"center"},x.a.createElement(i.a,{md:24,xs:24},x.a.createElement(X.a,{rowKey:"id",dataSource:A,columns:be}))))))}}}]);
//# sourceMappingURL=13.af17b1bf.chunk.js.map