(this["webpackJsonp2021-07-shooting-tracker"]=this["webpackJsonp2021-07-shooting-tracker"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),a=n.n(r),c=n(34),s=n.n(c),o=(n(129),n(11)),l=(n(130),n(229)),d=n(222);n(214);function u(){return Object(i.jsx)("div",{className:"loader-wrapper",children:Object(i.jsxs)("div",{className:"lds-ellipsis",children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})})}function h(){var e=document.querySelector(".article-inner")&&document.querySelector(".article-inner").querySelectorAll("p:not(.g-p-project)"),t=e&&Array.from(e).map((function(e,t){return Object(i.jsx)("p",{className:"g-p-project",dangerouslySetInnerHTML:{__html:e.innerHTML}},"p-"+t)}));return Object(i.jsx)(i.Fragment,{children:t||""})}function g(e){var t=e.id,n=e.heading,r=e.chatter,a=(e.toggle,e.children),c=(e.defaultToggle,e.source);return Object(i.jsxs)("div",{id:"g-pod-".concat(t),className:"g-main-container__pod",children:[Object(i.jsx)("a",{id:"g-pod-anchor-".concat(t),className:"offset-anchor"}),Object(i.jsx)("h3",{className:"g-pod-heading",children:n}),r?Object(i.jsx)("p",{className:"g-pod-chatter g-p-project",dangerouslySetInnerHTML:{__html:r}}):"",a,c?Object(i.jsx)("div",{className:"g-source",dangerouslySetInnerHTML:{__html:"SOURCE: ".concat(c)}}):""]},"g-pod-".concat(t))}function j(e,t){var n=function(e){var t=new Date;return t.setDate(t.getDate()-e)},i=n(365),r=n(30),a=n(7);return"year"===t?e.filter((function(e){return e.datetime>i})):"month"===t?e.filter((function(e){return e.datetime>r})):"week"===t?e.filter((function(e){return e.datetime>a})):e.filter((function(e){return e.year==t}))}function b(e,t){for(var n,i,r=0,a=[],c=[];r<e.length;r++)n=e[r][t],(i=a.indexOf(n))>-1?c[i].push(e[r]):(a.push(n),c.push([e[r]]));return c}n(132),n(133);var f=n(13),m=n(14),p=n(23),v=n(24);n(134);var O=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"setLetter",value:function(e){var t=["A","B","C","D","E","F","G","H","I","J","K","L"],n=["M","N","O","P","Q","R","S"],i=["T","U","V"],r=["W"],a=["X","Y","Z","a","b","d","e"],c=["f","g","h"],s=function(e){return e[Math.floor(Math.random()*e.length)]};switch(e){case"man":case"male victim":case"victim":return s(t);case"woman":case"female victim":return s(n);case"male teenager":case"teenager":return s(i);case"female teenager":return s(r);case"boy":return s(a);case"girl":return s(c)}}},{key:"render",value:function(){var e=this;!function(e){var t=e.filter((function(e){return"no"===e.homicide})).length,n=e.filter((function(e){return"yes"===e.homicide})).length,i='<span class="g-highlight killed">'.concat(n,' people have been killed</span> and <span class="g-highlight wounded">').concat(t,"</span> were wounded by gun violence in Delaware in the past 365 days"),r=document.querySelector(".topper__headline");r&&(r.innerHTML='<div id="g-topper-wrapper">'.concat(i,"</div>"))}(this.props.data);var t=this.props.data.map((function(t,n){var r="yes"===t.homicide&&t.first_name&&t.last_name;return Object(i.jsxs)("div",{"data-age":"".concat(t.age?t.age:"undefined"),"data-gender":"".concat(t.gender?t.gender:"undefined"),className:"item noclick g-icon people ".concat(r?"highlight":""," ").concat(t.gender," ").concat("yes"===t.homicide?"homicide":""),style:{letterSpacing:"".concat(-1*Math.floor(Math.floor(8*Math.random())+8),"px")},children:[e.setLetter(t.demo),r?Object(i.jsx)("div",{className:"highlight-box",children:Object(i.jsxs)("div",{className:"h-text",children:[Object(i.jsxs)("div",{className:"h-text-main",children:[t.first_name," ",t.last_name]}),Object(i.jsxs)("div",{className:"h-text-accent",children:["Killed",t.age?Object(i.jsxs)(i.Fragment,{children:[" at ",t.age]}):""]})]})}):""]},"".concat(t.incident_id,"-").concat(n))}));return Object(i.jsx)("div",{id:"g-victims-topper",children:Object(i.jsx)("div",{id:"g-victims-topper-wrapper",children:t})})}}]),n}(r.Component),x=n(45),y=(n(135),n(110)),w=n(41),k=n(35);function N(e,t){return e.map((function(e){return e[t]})).filter((function(e,t,n){return n.indexOf(e)==t}))}function D(e){return"string"===typeof e?e.charAt(0).toUpperCase()+e.slice(1):e}function S(e){var t=e.data.flat(),n={};n.years=N(t,"year"),n.optionsArr=["year","gender","city","homicide","age_group","officer_involved"],n.filterArr=[],n.optionsArr.forEach((function(e){var i={};i.name=e;var r=[];N(t,e).map((function(e){return""!==e&&r.push({value:e})})),r.sort((function(e,t){return e.value.toString()-t.value.toString()})),i.options=r.sort((function(e,t){return(e=e.value.toString().toLowerCase())<(t=t.value.toString().toLowerCase())?-1:e>t?1:0})),n.filterArr.push(i)})),n.filterArr.push({name:"multiple victims",options:[{value:"no"},{value:"yes"}]});var r=e.filters.map((function(e){return e.split(":")[0]})),a=n.filterArr.filter((function(e){return e.options.length>1})).map((function(t){return Object(i.jsxs)("div",{className:"g-filter","data-active":!!r.includes(t.name),children:[Object(i.jsxs)("div",{className:"g-filter-label",children:["+ ",D(t.name.replace("_"," "))]}),Object(i.jsx)("div",{className:"g-filter-dropdown",children:t.options.map((function(n){return Object(i.jsx)("div",{className:"g-filter-dropdown-option","data-list":t.name,"data-option":n.value,onClick:function(){return e.addFilter("".concat(t.name.toLowerCase(),":").concat(n.value))},children:D(n.value)})}))})]})})),c=e.filters.map((function(t){var n=t.split(":");return Object(i.jsxs)("div",{className:"g-active-filter",onClick:function(){return e.removeFilter(t)},children:[D(n[0].replace("_"," ")),": ",Object(i.jsx)("b",{children:D(n[1])})," ",Object(i.jsx)(w.a,{icon:k.f})]})}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{id:"g-most-recent-shootings-filter",children:[a,Object(i.jsxs)("div",{id:"victim-search",children:[Object(i.jsx)(w.a,{icon:k.b}),Object(i.jsx)("input",{type:"search",name:"q","aria-label":"Search by name",placeholder:"Search by name",onChange:function(t){return e.onSearch(t)}})]})]}),Object(i.jsx)("div",{id:"g-active-filters",children:c})]})}function Y(e){return(e=e.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[e]).length>1&&((e=e.slice(1))[5]=+e[0]<12?" AM":" PM",e[0]=+e[0]%12||12),e.join("").replace(":00 "," ")}function F(e){return 1!==e}n(140);n(141);function M(e){var t=e.container,n=e.incident,r=e.wounded,a=e.killed,c=e.mostRecent,s=n[0],o=s.incident_id,l=s.date,d=s.time,u=s.headline,h=s.city,g=s.location,j=s.officer_involved,b=s.narrative,f=s.story_url;return Object(i.jsxs)("div",{className:"".concat(t,"-card g-card"),children:[o===c&&"g-table"===t&&Object(i.jsx)("div",{className:"g-header",children:"Most recent"}),Object(i.jsxs)("div",{className:"g-card-inner",children:[Object(i.jsxs)("div",{className:"g-datetime",children:[l," ",d?" \u2022 "+Y(d):""]}),Object(i.jsxs)("h3",{className:"g-heading",children:[u||"".concat("yes"==j?"Officer-involved shooting":"Shooting"," in ").concat(h," leaves ").concat(r>0?"".concat(r," wounded"):"").concat(r>0&&a>0?", ":"").concat(a>0?"".concat(a," dead"):"")," "]}),Object(i.jsxs)("div",{className:"g-location",children:[g,g&&h?", ":"",h]}),b&&"g-table"===t&&Object(i.jsx)("div",{className:"g-narrative",children:b.match(/[^\r\n]+/g).map((function(e){return Object(i.jsx)("p",{className:"g-p-project",children:e})}))}),f&&Object(i.jsx)("div",{className:"g-storyUrl",children:Object(i.jsxs)("a",{target:"_blank",href:f,children:[Object(i.jsx)(w.a,{icon:k.a}),"  Read our coverage"]})})]}),"g-table"===t?Object(i.jsxs)("div",{className:"g-footer",children:[Object(i.jsx)("h5",{className:"g-instruction",children:"Victims"}),Object(i.jsx)("ul",{children:n.sort((function(e,t){return t.homicide.localeCompare(e.homicide)||e.age-t.age})).map((function(e){return Object(i.jsxs)("li",{children:[e.first_name&&e.last_name?Object(i.jsxs)(i.Fragment,{children:[e.first_name," ",e.last_name]}):Object(i.jsxs)(i.Fragment,{children:["An unidentified ",e.demo]}),e.age?Object(i.jsxs)(i.Fragment,{children:[",  ","yes"===e.homicide?Object(i.jsx)(i.Fragment,{children:"killed at "}):"",e.age]}):""]})}))})]}):""]},"".concat(t,"-card-").concat(o))}var C=r.memo(M),_={};function T(e){var t=Object(r.useState)(["year:".concat((new Date).getFullYear()==e.data[0].year?(new Date).getFullYear():e.data[0].year)]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),l=Object(o.a)(s,2),d=l[0],u=l[1],h=Object(r.useState)(10),f=Object(o.a)(h,2),m=f[0],p=f[1],v=function(){return document.querySelector("#g-most-recent-shootings-table-wrapper").scrollTo(0,0)},O=Object(r.useState)(!0),w=Object(o.a)(O,2),k=w[0],N=w[1];k&&function(){var t=j(e.data,"week");_.woundedWeek=t.filter((function(e){return"no"===e.homicide})).length,_.killedWeek=t.filter((function(e){return"yes"===e.homicide})).length,_.groupByIncidentWeek=b(t,"incident_id"),_.groupByIncident=b(e.data,"incident_id"),_.groupByIncident.forEach((function(e){return e.forEach((function(t){return t["multiple victims"]=e.length>1?"yes":"no"}))})),N(!1)}();var D={};a.forEach((function(e){var t=e.split(":");D[t[0].toLowerCase()]=t[1]}));var Y=function(e,t){var n=Object.keys(t);return e.filter((function(e){return n.every((function(n){return!t[n].length||e.filter((function(e){return t[n].includes(e[n])&&""!==e[n]})).length>0}))}))}(_.groupByIncident,D).filter((function(e){return e.filter((function(e){return"".concat(e.first_name," ").concat(e.last_name).toLowerCase().includes(d)})).length>0})),M=Object.keys(Y).slice(0,m).map((function(t,n){var r=Y[t],a=r.filter((function(e){return"no"===e.homicide})).length,c=r.filter((function(e){return"yes"===e.homicide})).length;return Object(i.jsx)(C,{container:"g-table",incident:r,wounded:a,killed:c,mostRecent:e.data[0].incident_id})})),T=(Object.keys(Y).length,function(){p(m+10)}),A=Y.flat().filter((function(e){for(var t in D)if(void 0===e[t]||e[t]!=D[t])return!1;return!0}));return Object(i.jsxs)(g,{id:"recent-shootings",heading:"Search shooting incidents",chatter:"Over the past week, there have been <b>".concat(_.groupByIncidentWeek.length,' shootings incidents</b>, leaving <span class="g-underline wounded">').concat(_.woundedWeek,' people wounded</span> and <span class="g-underline killed">').concat(_.killedWeek," killed</span>."),children:[a.length?Object(i.jsxs)("p",{className:"g-p-project",children:[Object(i.jsxs)("b",{children:[Object.keys(Y).length," incident",F(Object.keys(Y).length)?"s":""]})," of gun violence and ",Object(i.jsxs)("b",{children:[A.length," victim",F(A.length)?"s":""]})," match your filters. ",Y.flat().length===A.length?"":Object(i.jsxs)(i.Fragment,{children:["A total of ",Object(i.jsxs)("b",{children:[Y.flat().length," victim",F(Y.flat().length)?"s":""]})," were involved in these incidents."]})]}):"",Object(i.jsx)("h5",{className:"g-instruction",children:"Filters"}),Object(i.jsx)(S,{addFilter:function(e){c([].concat(Object(x.a)(a),[e])),p(10),v(),T()},removeFilter:function(e){c(a.filter((function(t){return t!==e}))),p(10),v(),T()},onSearch:function(e){u(e.target.value.toLowerCase()),v()},filters:a,data:Y}),Object(i.jsxs)("div",{id:"g-most-recent-shootings-table",children:[Object(i.jsx)("div",{id:"g-most-recent-shootings-table-wrapper",children:Object(i.jsx)(y.a,{dataLength:M.length,hasMore:!0,next:T,loader:"",scrollableTarget:"g-most-recent-shootings-table-wrapper",endMessage:"",children:M})}),Object(i.jsx)("div",{className:"g-note",children:"Delaware Online/The News Journal identifies a shooting incident as when a reported shooting or multiple shootings that result in at least one victim being wounded or killed occur at roughly the same time and location. Multiple shooting incidents may be connected, but if they occur at different times and locations they are recorded individually."})]})]})}n(80),n(142);var A=n(38),W=n(225),I=n(230),z=n(224),L=n(233),E=n(228),J=n(232),H=n(226),B=n(87),R=n(231),U=(n(143),["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]);function q(e,t){var n={width:e,height:t,margin:{top:10,right:20,bottom:50,left:50}};return n.boundedWidth=n.width-n.margin.left-n.margin.right,n.boundedHeight=n.height-n.margin.top-n.margin.bottom,n}var V=function(e,t,n){e.append("g").call(Object(J.b)(t).ticks(4).tickSize(-n.boundedWidth).tickFormat("")).attr("class","gridlines")};function Z(e){var t=new Date(e),n=new Date(t.getFullYear(),0,0),i=t-n+60*(n.getTimezoneOffset()-t.getTimezoneOffset())*1e3;return Math.floor(i/864e5)}n(81);var X=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).state={dimensions:null},i.createChart=i.createChart.bind(Object(A.a)(i)),i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth,height:this.container.offsetHeight}}),this.state.dimensions&&this.createChart()}},{key:"componentDidUpdate",value:function(){this.createChart()}},{key:"createChart",value:function(){var e=this.props.data,t=e.map((function(e){return e.year})).filter((function(e,t,n){return n.indexOf(e)===t}));function n(e,t){var n=new Date(e,0);return new Date(n.setDate(t))}var i=[],r=[];t.sort().slice(t.length-5,t.length).forEach((function(t,a){i.push({year:t,points:[]});var c,s,o=e.filter((function(e){return e.year==t})),l=0,d=0;c=((s=t)%100===0?s%400===0:s%4===0)?366:365;for(var u=1;u<c;u++){var h=[];h.push(o.filter((function(e){return 2024==t&&83==u&&console.log(e.datetime,Z(e.datetime),e),Z(e.datetime)==u}))),l=h[0].length,n(t,u)>new Date?d=null:d+=l,i[a].points.push({y:d,x:n(t,u)}),u===c-1&&r.push(d)}}));var a=q(this.container.offsetWidth,450),c={};t.forEach((function(e){c["scale"+e]=Object(W.a)().domain([new Date(+e,0,1),new Date(+e,11,31)]).range([0,a.boundedWidth])}));var s=this.node;Object(d.a)(s).html("");var o=Object(d.a)(s).append("g").style("transform","translate(".concat(a.margin.left,"px, ").concat(a.margin.top,"px)")),l=Object(I.a)().range([a.boundedHeight,0]).domain([0,Object(z.a)(r)]);V(o,l,a);var u,h=o.append("g").attr("class","chartGroup"),g=h.selectAll("foo").data(i).enter().append("path"),j=Object(E.a)().x((function(e){return c[u](e.x)})).y((function(e){return l(e.y)})).defined((function(e){return e.y}));g.attr("d",(function(e){return u="scale"+e.year,j(e.points)})).attr("class",(function(e){return e.year==(new Date).getFullYear()?"g-line current ":e.year==(new Date).getFullYear()-1?"g-line previousYear":"g-line"})).attr("fill","none");var b=Object(J.a)().tickFormat(Object(L.a)("%b.")).scale(c.scale2017).tickSize(0),f=(o.append("g").call(b).style("transform","translateY(".concat(a.boundedHeight,"px)")).attr("class","x axis alternate"),Object(J.b)().scale(l).ticks(4,"s").tickFormat((function(e){return Object(H.a)("~s")(e)})));o.append("g").call(f).attr("class","y axis");!function(e,t,n,i,r,a,c){var s=t.append("line").style("display","none"),o=t.append("g").attr("class","focus").style("display","none");o.selectAll(".circle").data(n).enter().append("circle").attr("r",4).attr("class","circle").attr("stroke-width",2).attr("stroke","white");var l=Object(d.a)("body").append("div").attr("class","g-tooltip").style("display","none");t.append("rect").attr("class","overlay").attr("width",r.boundedWidth).attr("height",r.boundedHeight).style("opacity",0).on("mouseover",(function(){o.style("display",null),l.style("display",null),s.style("display",null)})).on("mouseout",(function(){o.style("display","none"),l.style("display","none"),s.style("display","none")})).on("mousemove",(function(e){var t=Object(B.a)((function(e){return e.x})).left,i=Object(R.a)(e)[0],d=[];if(n.forEach((function(e){var n=t(e.points,a["scale".concat(e.year)].invert(i)),r=e.points[n];d.push(r)})),d[0]){d.sort((function(e,t){return t.x.getFullYear()-e.x.getFullYear()}));var u="";u+="<h4>".concat(U[d[3].x.getMonth()]," ").concat(d[3].x.getDate(),"</h4>"),d.forEach((function(e,t){u+=e.y?"<div class='".concat(t?"row ":"row current","'>").concat(e.x.getFullYear(),": ").concat(e.y,"</div>"):""})),o.selectAll(".circle").data(d).attr("transform",(function(e){return null==e?"translate(0, 0)":"translate(".concat(a["scale"+e.x.getFullYear()](e.x),",").concat(e.y?c(e.y):c(0),")")})).style("visibility",(function(e){return e&&e.y?"visible":"hidden"})),s.attr("stroke","#ddd").attr("id","tooltipLine").attr("x1",a.scale2017(d[d.length-1].x)).attr("x2",a.scale2017(d[d.length-1].x)).attr("y1",0).attr("y2",r.boundedHeight);var h=e.pageX<window.innerWidth/2?20:120;l.html(u).style("left",e.pageX-h+"px").style("top",e.pageY-20*(d.filter((function(e){return e.y})).length+2)+"px")}}))}(0,h,i,0,a,c,l)}},{key:"render",value:function(){var e=this,t=this.state.dimensions;return Object(i.jsx)("div",{className:"g-pod-chart",ref:function(t){return e.container=t},children:t&&Object(i.jsx)("svg",{className:"g-chart line",ref:function(t){return e.node=t},width:t.width,height:450})})}}]),n}(r.Component);function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abrev";return"full"==t?["January","February","March","April","May","June","July","August","September","October","November","December"][e]:"abrev"===t?["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e]:void 0}var Q=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).state={dimensions:null},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth}})}},{key:"render",value:function(){var e=this,t=b(this.props.data,"year"),n={},r=t.map((function(e){var t=e[0].year,r=e.map((function(e){return e.incident_id})).filter((function(e,t,n){return n.indexOf(e)==t})).length,a=e.filter((function(e){return"no"===e.homicide})).length,c=e.filter((function(e){return"yes"===e.homicide})).length,s=function(e){var t=new Date,n=t.getMonth(),i=t.getDate();return e.filter((function(e){var t=new Date(e.date),r=t.getMonth(),a=t.getDate();return r<n||r===n&&a<=i}))}(e),o=s.map((function(e){return e.incident_id})).filter((function(e,t,n){return n.indexOf(e)==t})).length,l=s.filter((function(e){return"no"===e.homicide})).length,d=s.filter((function(e){return"yes"===e.homicide})).length;return t==(new Date).getFullYear()?n.current={year:t,incidentsYTD:o,woundedYTD:l,homicidesYTD:d}:t==(new Date).getFullYear()-1&&(n.lastYear={year:t,incidentsYTD:o,woundedYTD:l,homicidesYTD:d}),s.length||(n.current={year:(new Date).getFullYear(),incidentsYTD:0,woundedYTD:0,homicidesYTD:0}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"border-right",children:t}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{className:"border-right",children:c+a}),Object(i.jsx)("td",{children:o}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:d}),Object(i.jsx)("td",{children:d+l})]})}));return n.change=((n.current.incidentsYTD-n.lastYear.incidentsYTD)/n.lastYear.incidentsYTD*100).toFixed(1),n.change>0?n.changeText="up ".concat(n.change,"% from"):n.change<0?n.changeText="down ".concat(n.change,"% from"):n.changeText="the same as it was",Object(i.jsxs)(g,{id:"shootings-by-year",heading:"Shootings victims by year",chatter:"So far in ".concat(n.current.year,", there have been ").concat(n.current.incidentsYTD," shooting incidents, leaving ").concat(n.current.woundedYTD," people wounded and ").concat(n.current.homicidesYTD," killed. The number of incidents is ").concat(n.changeText," this point last year."),children:[Object(i.jsxs)("div",{className:"g-pod-chart-legend",children:[Object(i.jsxs)("div",{className:"g-pod-chart-legend-item",children:[Object(i.jsx)("div",{className:"g-pod-chart-legend-item-symbol line current"}),n.current.year]}),Object(i.jsxs)("div",{className:"g-pod-chart-legend-item",children:[Object(i.jsx)("div",{className:"g-pod-chart-legend-item-symbol line previous"}),n.current.year-1]})]}),Object(i.jsx)(X,{data:this.props.data}),Object(i.jsxs)("div",{id:"g-shootings-by-year",className:"g-table-container",children:[this.state.dimensions&&this.props.isMobile&&this.state.dimensions.width>window.innerWidth?Object(i.jsx)("h5",{className:"g-instruction",children:"Scroll right \u2192"}):"",Object(i.jsx)("div",{id:"g-shootings-by-year-wrapper",className:"g-table-wrapper",children:Object(i.jsx)("table",{ref:function(t){return e.container=t},children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{className:"g-table-header-no-border white",children:[Object(i.jsx)("th",{rowSpan:"1"}),Object(i.jsx)("th",{colSpan:"4",scope:"colgroup",children:"Annual total"}),Object(i.jsxs)("th",{colSpan:"4",scope:"colgroup",children:["Year-to-date (",G((new Date).getMonth())," ",(new Date).getDate(),")"]})]}),Object(i.jsxs)("tr",{className:"colored",children:[Object(i.jsx)("th",{className:"border-right",children:"Year"}),Object(i.jsx)("th",{children:"Incidents"}),Object(i.jsx)("th",{children:"Wounded"}),Object(i.jsx)("th",{children:"Killed"}),Object(i.jsx)("th",{className:"border-right",children:"Victims"}),Object(i.jsx)("th",{children:"Incidents"}),Object(i.jsx)("th",{children:"Wounded"}),Object(i.jsx)("th",{children:"Killed"}),Object(i.jsx)("th",{children:"Victims"})]}),r]})})}),Object(i.jsx)("div",{className:"g-note",children:"Delaware Online/The News Journal identifies a shooting victim as someone wounded or killed by gunfire. Occasionally, this may include a shooting that concludes in a neighboring state if and when the pursuit began in Delaware and was directly connected with another shooting."})]})]})}}]),n}(r.Component);n(144);function P(e){var t=e.data.map((function(e){return e.year})).filter((function(e,t,n){return n.indexOf(e)===t}));return Object(i.jsxs)("p",{className:"g-pod-select g-p-project",children:["Show data for ",Object(i.jsx)("select",{onChange:function(t){return e.onYearChange(t)},children:t.map((function(e){return Object(i.jsx)("option",{children:e})}))})]})}var K=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).onYearChange=function(e){i.setState({yearFilter:e.target.value})},i.onHeaderClick=function(e){i.setState((function(t){return{active:e,sortAscending:!t.sortAscending}}))},i.state={active:"victims",sortAscending:!1,yearFilter:(new Date).getFullYear()==i.props.data[0].year?(new Date).getFullYear():i.props.data[0].year,dimensions:null},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth}})}},{key:"render",value:function(){var e=this,t=b(this.props.data.filter((function(t){return t.year==e.state.yearFilter&&t.city.length})),"city").map((function(e){var t=e[0].city,n=e[0].year,i=e.map((function(e){return e.incident_id})).filter((function(e,t,n){return n.indexOf(e)==t})).length,r=e.filter((function(e){return"no"==e.homicide})).length,a=e.filter((function(e){return"yes"==e.homicide})).length;return{year:n,city:t,incidents:i,wounded:r,killed:a,victims:r+a}})).sort((function(t,n){return"city"==e.state.active?(t=t.city.toLowerCase(),n=n.city.toLowerCase(),e.state.sortAscending?t<n?-1:t>n?1:0:t>n?-1:t<n?1:0):e.state.sortAscending?t[e.state.active]-n[e.state.active]:n[e.state.active]-t[e.state.active]})).map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.city}),Object(i.jsx)("td",{children:e.incidents}),Object(i.jsx)("td",{children:e.wounded}),Object(i.jsx)("td",{children:e.killed}),Object(i.jsx)("td",{children:e.victims})]})}));return Object(i.jsxs)(g,{id:"recent-shootings",heading:"Shootings by city",children:[Object(i.jsx)(P,{data:this.props.data,onYearChange:this.onYearChange}),Object(i.jsxs)("div",{id:"g-shootings-by-city",className:"g-table-container",children:[this.state.dimensions&&this.props.isMobile&&this.state.dimensions.width>window.innerWidth?Object(i.jsx)("h5",{className:"g-instruction",children:"Scroll right \u2192"}):"",Object(i.jsx)("div",{id:"g-shootings-by-city-wrapper",className:"g-table-wrapper",children:Object(i.jsx)("table",{ref:function(t){return e.container=t},children:Object(i.jsxs)("tbody",{children:[Object(i.jsx)("tr",{className:"colored",children:["city","incidents","wounded","killed","victims"].map((function(t){return Object(i.jsxs)("th",{className:t==e.state.active?"active":"",onClick:function(){return e.onHeaderClick(t)},children:[t," ",Object(i.jsx)(w.a,{icon:t==e.state.active?e.state.sortAscending?k.e:k.d:k.c})]})}))}),t]})})})]})]})}}]),n}(r.Component),$=n(25),ee=n(60),te=n(86),ne=n(119),ie=n(37),re=(n(105),n(106),Object(ee.default)({accessToken:"pk.eyJ1IjoiamFyZWQtd2hhbGVuIiwiYSI6ImNrMm5sMzNqYTB0dXMzY3FlZTBuaXBxenIifQ.m21qGljLeU7ZZOm4FEEcmg"})),ae={center:[-75.5258646,39.508569],zoom:[9],style:"mapbox://styles/jared-whalen/ck5zrdq633ep91in63izudbal",containerStyle:{height:"500px",width:"100%"},scrollZoom:!1,dragRotate:!1},ce=(r.Component,n(31)),se=(n(212),{id:"clusters",type:"circle",source:"shootings",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#FFE1C3",100,"#FA9632",750,"#BB3C04"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}}),oe={id:"cluster-count",type:"symbol",source:"shootings",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}},le={id:"unclustered-point",type:"circle",source:"shootings",filter:["!",["has","point_count"]],paint:{"circle-color":["match",["get","homicide"],"yes","#FA9632","no","#878787","#ccc"],"circle-radius":7,"circle-opacity":.75,"circle-stroke-width":2,"circle-stroke-color":"#6c6c6c"}},de="pk.eyJ1IjoiamFyZWQtd2hhbGVuIiwiYSI6ImNrMm5sMzNqYTB0dXMzY3FlZTBuaXBxenIifQ.m21qGljLeU7ZZOm4FEEcmg";function ue(e){var t=Object(r.useState)((new Date).getFullYear()==e.data[0].year?(new Date).getFullYear():e.data[0].year),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)({latitude:39.508569,longitude:-75.5258646,zoom:9,bearing:0,pitch:0}),l=Object(o.a)(s,2),d=l[0],u=l[1],h=Object(r.useState)(null),j=Object(o.a)(h,2),f=j[0],m=j[1],p=Object(r.useRef)(null),v=Object(r.useCallback)((function(e){return u(e)}),[]),O=Object(r.useCallback)((function(e){return v(Object($.a)(Object($.a)({},e),{transitionDuration:500}))}),[]),x=b(e.data.filter((function(e){return e.year==a})),"incident_id"),y=Object(ie.featureCollection)(x.map((function(e){return Object(ie.point)([e[0].longitude,e[0].latitude],{incident_id:e[0].incident_id,homicide:e.filter((function(e){return"yes"===e.homicide})).length>0?"yes":"no",longitude:e[0].longitude,latitude:e[0].latitude,location:e[0].location,city:e[0].city,zip:e[0].zip,date:e[0].date,time:e[0].time,datetime:e[0].datetime,story_url:e[0].story_url,victims:JSON.stringify(e)})})));return Object(i.jsxs)(g,{id:"recent-shootings",heading:"Mapping gun violence",children:[Object(i.jsx)(P,{data:e.data,onYearChange:function(e){c(e.target.value)}}),Object(i.jsxs)("div",{className:"g-pod-chart-legend",children:[Object(i.jsxs)("div",{className:"g-pod-chart-legend-item",children:[Object(i.jsx)("div",{className:"g-pod-chart-legend-item-symbol circle cluster"}),"Shooting cluster"]}),Object(i.jsxs)("div",{className:"g-pod-chart-legend-item",children:[Object(i.jsx)("div",{className:"g-pod-chart-legend-item-symbol circle homicide"}),"Shooting incident with homicide"]}),Object(i.jsxs)("div",{className:"g-pod-chart-legend-item",children:[Object(i.jsx)("div",{className:"g-pod-chart-legend-item-symbol circle incident"}),"Shooting incident"]})]}),Object(i.jsxs)(ce.g,Object($.a)(Object($.a)({},d),{},{width:"100%",height:"500px",style:{marginTop:"10px"},mapStyle:"mapbox://styles/jared-whalen/ck5zrdq633ep91in63izudbal",onViewportChange:u,mapboxApiAccessToken:de,interactiveLayerIds:[se.id,le.id],onClick:function(e){var t=e.features[0];if(t){if("clusters"===t.layer.id){var n=t.properties.cluster_id;p.current.getMap().getSource("shootings").getClusterExpansionZoom(n,(function(e,n){e||u(Object($.a)(Object($.a)({},d),{},{longitude:t.geometry.coordinates[0],latitude:t.geometry.coordinates[1],zoom:n,transitionDuration:100}))}))}if("unclustered-point"===t.layer.id){var i=t.properties,r=JSON.parse(i.victims),a=r.filter((function(e){return"no"===e.homicide})).length,c=r.filter((function(e){return"yes"===e.homicide})).length;m(Object($.a)(Object($.a)({},i),{},{wounded:a,killed:c}))}}else m(null)},ref:p,dragRotate:!1,children:[Object(i.jsxs)(ce.f,{id:"shootings",type:"geojson",data:y,cluster:!0,clusterMaxZoom:13,clusterRadius:40,clusterMinPoints:3,children:[Object(i.jsx)(ce.c,Object($.a)({},se)),Object(i.jsx)(ce.c,Object($.a)({},oe)),Object(i.jsx)(ce.c,Object($.a)({},le))]}),f&&Object(i.jsx)(ce.e,{tipSize:5,anchor:"top",longitude:f.longitude,latitude:f.latitude,closeOnClick:!1,onClose:m,children:Object(i.jsx)(C,{container:"g-popup",incident:[f],wounded:f.wounded,killed:f.killed,mostRecent:f.incident_id})}),Object(i.jsx)(te.a,{mapRef:p,onViewportChange:O,mapboxApiAccessToken:de,position:"top-left",countries:"us",bbox:[-75.789,38.4511,-74.9849,39.8394],filter:function(e){return e.context.map((function(e){return"region"===e.id.split(".").shift()&&"Delaware"===e.text})).reduce((function(e,t){return e||t}))}}),Object(i.jsx)("div",{style:{position:"absolute",right:10,top:10},children:Object(i.jsx)(ce.d,{showCompass:!1})}),Object(i.jsx)("div",{style:{position:"absolute",right:10,top:75},children:Object(i.jsx)(ce.b,{})})]}))]})}function he(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=new Date(e.getFullYear(),0,0),n=e-t+60*(t.getTimezoneOffset()-e.getTimezoneOffset())*1e3,i=864e5,r=Math.floor(n/i);return r}var ge=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).state={dimensions:null},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth}})}},{key:"render",value:function(){var e=this,t=b(this.props.data,"year").map((function(e){var t=e[0].year,n=b(e,"incident_id"),r=n.filter((function(e){return 3==e.length})).length,a=n.filter((function(e){return e.length>=4})).length,c=b(e.filter((function(e){return he(e.datetime)<=he()})),"incident_id"),s=c.filter((function(e){return 3==e.length})).length,o=c.filter((function(e){return e.length>=4})).length;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"border-right",children:t}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{className:"border-right",children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:o})]})}));return Object(i.jsx)(g,{id:"multi-victim-shootings",heading:"Multi-victim shooting incidents by year",children:Object(i.jsxs)("div",{id:"g-multi-victim-shootings",className:"g-table-container",children:[this.state.dimensions&&this.props.isMobile&&this.state.dimensions.width>window.innerWidth?Object(i.jsx)("h5",{className:"g-instruction",children:"Scroll right \u2192"}):"",Object(i.jsx)("div",{id:"g-multi-victim-shootings-wrapper",className:"g-table-wrapper",children:Object(i.jsx)("table",{ref:function(t){return e.container=t},children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{className:"g-table-header-no-border white",children:[Object(i.jsx)("th",{rowSpan:"1"}),Object(i.jsx)("th",{colSpan:"2",scope:"colgroup",children:"Annual total"}),Object(i.jsxs)("th",{colSpan:"2",scope:"colgroup",children:["Year-to-date (",G((new Date).getMonth())," ",(new Date).getDate(),")"]})]}),Object(i.jsxs)("tr",{className:"colored",children:[Object(i.jsx)("th",{className:"border-right",children:"Year"}),Object(i.jsx)("th",{children:"Incidents with 3 victims"}),Object(i.jsx)("th",{className:"border-right",children:"4 or more victims"}),Object(i.jsx)("th",{children:"3 victims"}),Object(i.jsx)("th",{children:"4 or more victims"})]}),t]})})})]})})}}]),n}(r.Component),je=n(227);n(81);var be=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).state={dimensions:null},i.createChart=i.createChart.bind(Object(A.a)(i)),i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({dimensions:{width:this.container.offsetWidth,height:this.container.offsetHeight}}),this.state.dimensions&&this.createChart()}},{key:"componentDidUpdate",value:function(){this.createChart()}},{key:"createChart",value:function(){var e=this.props.data,t=q(this.container.offsetWidth,350),n=this.node;Object(d.a)(n).html("");var i=Object(d.a)(n).append("g").style("transform","translate(".concat(t.margin.left,"px, ").concat(t.margin.top,"px)")),r=Object(d.a)("body").append("div").attr("class","g-tooltip").style("display","none"),a=Object(je.a)().range([0,t.boundedWidth]).domain(e.map((function(e){return e.group}))).padding(.2),c=Object(I.a)().domain([0,Object(z.a)(e,(function(e){return e.value}))]).range([t.boundedHeight,0]);V(i,c,t),i.selectAll("mybar").data(e).enter().append("rect").attr("x",(function(e){return a(e.group)})).attr("y",(function(e){return c(e.value)})).attr("width",a.bandwidth()).attr("height",(function(e){return t.boundedHeight-c(e.value)})).attr("fill","#fa9632").on("mousemove",(function(e,t){var n=e.pageX<window.innerWidth/2?20:120;r.style("left",e.pageX-n+"px").style("top",e.pageY-50+"px").style("display","inline-block").html("Age group: <b>".concat(t.group," years old</b><br>Victims: <b>").concat(t.value,"</b>"))})).on("mouseout",(function(e){r.style("display","none")})),this.props.setBarWidth(a.bandwidth());var s=Object(J.a)().scale(a).tickSize(0),o=(i.append("g").call(s).style("transform","translateY(".concat(t.boundedHeight,"px)")).attr("class","x axis").selectAll("text").attr("transform","translate(-3,1)rotate(-45)").style("text-anchor","end"),Object(J.b)().scale(c).ticks(4,"s").tickFormat((function(e){return Object(H.a)("~s")(e)})));i.append("g").call(o).attr("class","y axis")}},{key:"render",value:function(){var e=this,t=this.state.dimensions;return Object(i.jsx)("div",{className:"g-pod-chart",ref:function(t){return e.container=t},children:t&&Object(i.jsx)("svg",{className:"g-chart column",ref:function(t){return e.node=t},width:t.width,height:350})})}}]),n}(r.Component);n(81);function fe(e){var t=Object(r.useState)((new Date).getFullYear()==e.data[0].year?(new Date).getFullYear():e.data[0].year),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(void 0),l=Object(o.a)(s,2),d=l[0],u=l[1],h=b(e.data.filter((function(e){return e.year==a&&"Unknown"!==e["age interval"]})),"age interval").map((function(e){return{group:e[0]["age interval"],value:e.length}})),j=[];["0-4","5-9","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80-84","85+"].forEach((function(e){var t=h.filter((function(t){return t.group==e}));t.length?j.push(t[0]):j.push({group:e,value:0})})),j.sort((function(e,t){return Number(e.group.split("-")[0])-Number(t.group.split("-")[0])}));var f=b(e.data.filter((function(e){return e.year==a&&e.gender.length})),"gender"),m=(f.map((function(e){return{group:e[0].gender,value:e.length}})),f.map((function(e){return Object(i.jsxs)("div",{className:"g-chart bar","data-group":e[0].gender,children:[Object(i.jsx)("div",{className:"g-bar-label",children:e[0].gender}),Object(i.jsxs)("div",{className:"g-bar-rect-wrap",children:[Object(i.jsx)("div",{className:"g-bar-rect",style:{width:"".concat(e.length/f.flat().length*100,"%"),height:d||0},children:" "}),Object(i.jsx)("div",{className:"g-bar-rect-number",children:e.length})]})]})})));return Object(i.jsxs)(g,{id:"age-and-gender-plot",heading:"Shooting victims by age and gender",children:[Object(i.jsx)(P,{data:e.data,onYearChange:function(e){c(e.target.value)}}),Object(i.jsx)("h5",{class:"g-instruction",children:"Victims by age"}),Object(i.jsx)(be,{data:j,setBarWidth:u}),Object(i.jsx)("h5",{class:"g-instruction",children:"Victims by gender"}),Object(i.jsx)("div",{className:"g-pod-chart",children:m})]})}var me=function(){var e=Object(r.useState)(void 0),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){Object(l.a)("https://www.googleapis.com/drive/v3/files/15l4G2w4PD4RRJLozI9c9ma0sexXYF4kv?alt=media&key=AIzaSyCmo9e2erA8mwwIXl5NGLTxsHEin8JajNQ&"+function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=n.length,r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*i));return t}(100)).then((function(e){e.forEach((function(e){var t;e.demo=function(e){var t,n=e.age,i=e.gender;switch(n=n.length?Number(n):void 0,i){case"Male":switch(!0){case n<=13:t="boy";break;case n>=13&&n<18:t="male teenager";break;case n>=18:t="man";break;case!n:t="male victim"}break;case"Female":switch(!0){case n<=13:t="girl";break;case n>=13&&n<18:t="female teenager";break;case n>=18:t="woman";break;case!n:t="female victim"}break;default:switch(!0){case n<=13:t="child";break;case n>=13&&n<18:t="teenager";break;case n>=18||void 0===n:t="victim"}}return t}(e),e.datetime=new Date(e.date),e.year=new Date(e.date).getFullYear(),e.age=e.age.length?Number(e.age):void 0,e.latitude=Number(e.latitude),e.longitude=Number(e.longitude),e.age_group=function(e){switch(!0){case void 0==typeof e:return"Unknown";case e<18:return"17 and under";case e>=18&&e<=29:return"18 to 29";case e>=30&&e<=44:return"30 to 44";case e>=45:return"45 and up";default:return"Unknown"}}(e.age),e["age interval"]="number"!==typeof(t=e.age)?"Unknown":["0-4","5-9","10-14","15-19","20-24","25-29","30-34","35-39","40-44","45-49","50-54","55-59","60-64","65-69","70-74","75-79","80-84","85+"].filter((function(e){var n=e.replace("+","").split("-");return t>=Number(n[0])&&t<=(Number(n[1])||999)}))[0],e.homicide="-1"==e.homicide?"yes":"no",e.officer_involved="-1"==e.officer_involved?"yes":"no"})),e.sort((function(e,t){return new Date(t.date)-new Date(e.date)||t.time.replace(":","")-e.time.replace(":","")}));var t={};t.shootings=e,c(t),Object(d.a)(".topper__inner").transition().duration(500).style("opacity",1)}))}),[]);var s=a.a.useState({width:window.innerWidth}),g=Object(o.a)(s,2),b=g[0],f=g[1];Object(r.useEffect)((function(){var e=function(e,t){var n,i=arguments,r=this;return function(a){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(r,i)}),t)}}((function(){b.width!==window.innerWidth&&f({width:window.innerWidth})}),1e3);return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}}));var m=b.width<480,p=Object(r.useRef)(null);return Object(i.jsx)("div",{className:"App",children:n&&n.shootings?Object(i.jsxs)(i.Fragment,{children:[m?Object(i.jsxs)("div",{id:"g-skip-intro",children:[" ",Object(i.jsx)("button",{onClick:function(){return p.current.scrollIntoView()},children:" Skip intro "})]}):"",Object(i.jsx)(O,{data:j(n.shootings,"year")}),Object(i.jsxs)("section",{className:"sectioned",style:{backgroundColor:"#ffffff",position:"relative"},children:[Object(i.jsx)("div",{ref:p,style:{visibility:"hidden",position:"absolute",top:-100}}),Object(i.jsx)(h,{}),Object(i.jsx)(T,{data:n.shootings}),Object(i.jsx)(Q,{data:n.shootings,isMobile:m}),Object(i.jsx)(fe,{data:n.shootings}),Object(i.jsx)(ge,{data:n.shootings,isMobile:m}),Object(i.jsx)(ue,{data:n.shootings}),Object(i.jsx)(K,{data:n.shootings,isMobile:m})]})]}):Object(i.jsx)(u,{})})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(me,{})}),document.getElementById("root"))},80:function(e,t,n){},81:function(e,t,n){}},[[213,1,2]]]);
//# sourceMappingURL=main.357ad3e5.chunk.js.map