(this["webpackJsonpvghks-pathol-app"]=this["webpackJsonpvghks-pathol-app"]||[]).push([[11],{1135:function(e,a,t){"use strict";t.d(a,"e",(function(){return f})),t.d(a,"d",(function(){return E})),t.d(a,"c",(function(){return v})),t.d(a,"b",(function(){return p})),t.d(a,"a",(function(){return g}));var n=t(3),r=t(11),c=t(0),i=t.n(c),l=(t(272),t(104),t(44)),o=t(414),d=t(29),m=(t(79),t(111)),s=t(204),u=t(18),b=t(22),j=t(37),O=t(27).compose;function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.division,t=(void 0===a&&b.a.PATH,Object(r.a)(e,["division"])),c=Object(j.b)(),i=c.user,l=Object(m.a)("/api/v1/c2/getC2DoctorList/{division}",{variables:Object(n.a)({division:i.division},t)}),d=l.data,s=void 0===d?[]:d,u=Object(r.a)(l,["data"]),O=null===s||void 0===s?void 0:s.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{id:e.doctorId})})),f={};return Object(o.a)((function(e){return f[e.doctorId]=e}),O),Object(n.a)(Object(n.a)({},u),{},{doctorById:f,data:O,doctorEnums:O})}function E(e){var a=f(),t=a.data,n=a.loading;return i.a.createElement(s.a,Object.assign({disabled:n,loading:n},e),O(Object(d.a)((function(e){return i.a.createElement(s.a.Option,{key:e.id,value:e.doctor},e.doctor)})),Object(l.a)([],[]))(t))}function v(e){var a=function(){var e=Object(m.a)("/api/v1/b1/getBodyParts"),a=e.data,t=void 0===a?[]:a,c=Object(r.a)(e,["data"]),i=null===t||void 0===t?void 0:t.map((function(e){return{id:Object(u.n)(),name:e}}));return Object(n.a)(Object(n.a)({},c),{},{data:i})}().data;return i.a.createElement(s.a,e,a.map((function(e){return i.a.createElement(s.a.Option,{key:e.id,value:e.name},e.name)})))}function p(e){var a=function(){var e=Object(m.a)("/api/v1/b1/getWards"),a=e.data,t=void 0===a?[]:a,c=Object(r.a)(e,["data"]),i=null===t||void 0===t?void 0:t.map((function(e){return{id:Object(u.n)(),name:e}}));return Object(n.a)(Object(n.a)({},c),{},{data:i})}().data;return i.a.createElement(s.a,e,a.map((function(e){return i.a.createElement(s.a.Option,{key:e.id,value:e.name},e.name)})))}function g(e){var a=function(){var e=Object(m.a)("/api/v1/b1/getAppointmentTypes"),a=e.data,t=void 0===a?[]:a,c=Object(r.a)(e,["data"]),i=null===t||void 0===t?void 0:t.map((function(e){return{id:Object(u.n)(),name:e}}));return Object(n.a)(Object(n.a)({},c),{},{data:i})}().data;return i.a.createElement(s.a,e,a.map((function(e){return i.a.createElement(s.a.Option,{key:e.id,value:e.name},e.name)})))}},1136:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(74),r=t(3),c=t(9),i=t(11),l=t(448),o=t(78),d=t(135),m=t(94),s=t(131),u=t(18);function b(e){var a=e.startDateField,t=void 0===a?"startDate":a,b=e.endDateField,j=void 0===b?"endDate":b,O=e.format;return function(e){var a;if(!e)return{};var b=e.date,f=void 0===b?[]:b,E=Object(i.a)(e,["date"]),v=Object(u.c)(f,O),p=Object(c.a)(v,2),g=p[0],h=p[1];return Object(l.a)({createDate:Object(o.a)(d.a,m.a,Object(s.a)(1,"format")("YYYY-MM-DD")),reportDate:Object(o.a)(d.a,m.a,Object(s.a)(1,"format")("YYYY-MM-DD"))})(Object(r.a)(Object(r.a)({},E),{},(a={},Object(n.a)(a,t,g),Object(n.a)(a,j,h),a)))}}},1151:function(e,a,t){"use strict";var n=t(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},c=t(25),i=function(e,a){return n.createElement(c.a,Object.assign({},e,{ref:a,icon:r}))};i.displayName="EyeOutlined";a.a=n.forwardRef(i)},1192:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Z}));t(432);var n=t(345),r=t.n(n),c=(t(201),t(64)),i=t.n(c),l=(t(202),t(41)),o=t.n(l),d=(t(171),t(85)),m=t.n(d),s=(t(346),t(125)),u=t.n(s),b=(t(100),t(20)),j=t.n(b),O=t(9),f=t(0),E=t.n(f),v=t(340),p=t(419),g=t(44),h=t(50),x=t(157),y=t(63),I=t(306),w=t(446),k=t(256),D=t(420),N=t(29),C=t(81),Y=t(1122),q=t(1151),M=t(434),z=t(170),F=t(1136),A=t(158),T=t(1135),B=t(204),H=t(33),J=t(213),P=t(433),R=t(269),_=t(61),K=t(90),L=t(18),S=t(40),U=t(22),V=t(71),W=t(48),G=t(37),Q=t(27).compose,X=Object(V.a)(7);function Z(){Object(M.a)("\u5831\u544a\u67e5\u8a62");var e=Object(G.b)().user,a=Object(z.a)([{name:"\u5831\u544a\u67e5\u8a62"}]),t=j.a.useForm(),n=Object(O.a)(t,1)[0],c=Object(A.g)(),l=c.data,d=c.refetch,s=c.loading,b=Object(F.a)({format:"YYYY-MM-DD"}),f=function(a){var t=Q(Object(v.a)(Object(p.a)("orreqno",a.currentTarget.dataset.id)),Object(g.a)([],["content"]))(l);if(t){var n=Q(Object(h.a)(x.a,"\u5b8c\u6210"),Object(y.a)(["orstatus"])),r=Q(Object(h.a)(x.a,"\u672a\u8f38"),Object(y.a)(["orstatus"])),c=Q(Object(h.a)(x.a,"\u5df2\u8f38"),Object(y.a)(["orstatus"])),i=Object(I.a)(["orreqno"]);Object(w.a)([Q(k.a,n),function(){return e.isClinician}])(t)?u.a.warning("\u5831\u544a\u5c1a\u672a\u8f38\u5165\u5b8c\u6210"):(Object(w.a)([i,n])(t)&&K.a.push("".concat(Object(D.a)(":id",t.orreqno)(S.h),"?finish=1")),Object(w.a)([i,c])(t)&&K.a.push(Object(D.a)(":id",t.orreqno)(S.h)),Object(w.a)([i,r])(t)&&K.a.push("".concat(S.j,"?orreqno=").concat(t.orreqno)))}},V=function(e){var a=Object(D.a)(":id","")(W.a.radiolViewerUrl);window.open("".concat(a,"?AccessionNumber=").concat(e.currentTarget.dataset.id),"__blank")},Z=[{title:"\u7de8\u865f",render:function(e,a,t){return t+1}},{title:"\u7533\u8acb\u5e8f\u865f",dataIndex:"orreqno"},{title:"\u5831\u544a",dataIndex:"x",render:function(e,a){return E.a.createElement(m.a,{title:"\u7de8\u8f2f\u3001\u67e5\u770b\u5831\u544a\u5167\u5bb9"},E.a.createElement(Y.a,{"data-id":a.orreqno,className:"cursor-pointer text-lg",onClick:f}))}},{title:"\u5f71\u50cf",dataIndex:"createAt",render:function(e,a){return E.a.createElement(m.a,{title:"\u958b\u555f\u65b0\u8996\u7a97\u67e5\u770b\u5f71\u50cf"},E.a.createElement(q.a,{"data-id":a.orreqno,className:"cursor-pointer text-lg",onClick:V}))}},{title:"\u75c5\u60a3\u59d3\u540d",dataIndex:"hnamec"},{title:"\u639b\u865f\u5225",dataIndex:"csect",sorter:Object(L.j)("csect")},{title:"\u6aa2\u67e5\u90e8\u4f4d",dataIndex:"orproced"},{title:"\u75c5\u623f",dataIndex:"hnursta",sorter:Object(L.j)("hnursta")},{title:"\u958b\u55ae\u65e5\u671f",dataIndex:"ordate",sorter:Object(L.j)("ordate")},{title:"\u72c0\u614b",dataIndex:"orstatus",sorter:Object(L.j)("orstatus")},{title:"\u5831\u544a\u6642\u9593",dataIndex:"zrdorder",sorter:Object(L.j)("zrdorder")}];return E.a.createElement(r.a,{spinning:s},E.a.createElement(P.a,{style:{minHeight:"calc(100vh - 203px)"}},E.a.createElement(i.a,{justify:"center"},E.a.createElement(o.a,{md:22,xs:24},E.a.createElement(j.a,{form:n,layout:"horizontal",hideRequiredMark:!0,labelAlign:"right",colon:!1},E.a.createElement(i.a,{gutter:12,justify:"space-between"},E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u75c5\u6b77\u865f",name:"hhisnum"}),E.a.createElement(H.c,null))),E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u958b\u55ae\u65e5\u671f",name:"createDate"}),E.a.createElement(J.a,{className:"w-full"}))),E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u639b\u865f\u5225",name:"appointmentType"}),E.a.createElement(T.a,{className:"w-full"})))),E.a.createElement(i.a,{gutter:12,justify:"space-between"},E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u7533\u8acb\u5e8f\u865f",name:"orreqno"}),E.a.createElement(H.c,null))),E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u5831\u544a\u91ab\u751f",name:"doctor"}),E.a.createElement(T.d,{allowClear:!0}))),E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u5831\u544a\u65e5\u671f",name:"reportDate"}),E.a.createElement(J.a,{className:"w-full"}))))," ",E.a.createElement(i.a,{gutter:12,justify:"space-between"},E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u75c5\u623f",name:"ward"}),E.a.createElement(T.b,{className:"w-full"}))),E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u6aa2\u67e5\u90e8\u4f4d",name:"bodypart"}),E.a.createElement(T.c,null))),E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,Object.assign({},X,{label:"\u5831\u544a\u72c0\u614b",name:"status"}),E.a.createElement(B.a,{allowClear:!0},Object(N.a)((function(e){return E.a.createElement(B.a.Option,{key:e.id,value:e.id},e.name)}))(U.d))))),E.a.createElement(i.a,{gutter:12,justify:"end"},E.a.createElement(o.a,{md:6,xs:24},E.a.createElement(j.a.Item,{className:"ml-4"},E.a.createElement(_.a,{color:"primary",style:{width:96},className:"mr-3",onClick:function(){return n.resetFields()}},"\u91cd\u8a2d"),E.a.createElement(_.a,{color:"primary",style:{width:96},onClick:function(){n.validateFields().then((function(e){d(b(e)),a([{name:"\u5831\u544a\u67e5\u8a62"},{name:"\u67e5\u8a62\u7d50\u679c"}])}))}},"\u641c\u5c0b"))))))),Object(C.a)(l.content)>0&&E.a.createElement(E.a.Fragment,null,E.a.createElement(i.a,{className:"mb-2 mt-4",justify:"center"},E.a.createElement(o.a,{md:24,xs:24,className:"text-sm"},"\u6aa2\u7d22\u7d50\u679c\u5171 ",E.a.createElement("span",{className:"text-primary"},l.total)," \u7b46")),E.a.createElement(i.a,{justify:"center"},E.a.createElement(o.a,{md:24,xs:24,className:"sm:overflow-y-scroll"},E.a.createElement(R.a,{rowKey:"id",dataSource:l,columns:Z}))))))}}}]);
//# sourceMappingURL=11.a736cca8.chunk.js.map