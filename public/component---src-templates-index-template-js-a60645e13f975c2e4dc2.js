(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6V6j":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("wd/R"),s=t.n(i),l=t("Wbzz"),c=t("1xLx"),m=t.n(c),o=function(e){var a=e.edges;return r.a.createElement("div",{className:m.a.feed},a.map((function(e){return r.a.createElement("div",{className:m.a.feed__item,key:e.node.fields.slug},r.a.createElement("div",{className:m.a["feed__item-meta"]},r.a.createElement("time",{className:m.a["feed__item-meta-time"],dateTime:s()(e.node.frontmatter.date).format("MMMM D, YYYY")},s()(e.node.frontmatter.date).format("MMMM YYYY")),r.a.createElement("span",{className:m.a["feed__item-meta-divider"]}),r.a.createElement("span",{className:m.a["feed__item-meta-category"]},r.a.createElement(l.Link,{to:e.node.fields.categorySlug,className:m.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),r.a.createElement("h2",{className:m.a["feed__item-title"]},r.a.createElement(l.Link,{className:m.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",{className:m.a["feed__item-description"]},e.node.frontmatter.description),r.a.createElement(l.Link,{className:m.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))})))};t.d(a,"a",(function(){return o}))},"999l":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return d}));var n=t("q1tI"),r=t.n(n),i=t("Zttt"),s=t("/d1K"),l=t("6V6j"),c=t("RXmK"),m=t("v0M6"),o=t("gGy4"),d="167617260";a.default=function(e){var a=e.data,t=e.pageContext,n=Object(o.b)(),d=n.title,f=n.subtitle,u=t.currentPage,p=t.hasNextPage,g=t.hasPrevPage,_=t.prevPagePath,v=t.nextPagePath,P=a.allMarkdownRemark.edges,E=u>0?"Posts - Page "+u+" - "+d:d;return r.a.createElement(i.a,{title:E,description:f},r.a.createElement(s.a,{isIndex:!0}),r.a.createElement(c.a,null,r.a.createElement(l.a,{edges:P}),r.a.createElement(m.a,{prevPagePath:_,nextPagePath:v,hasPrevPage:g,hasNextPage:p})))}},UbMB:function(e,a,t){var n;t("LK8F"),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===i)for(var s in n)t.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},v0M6:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("UbMB"),s=t.n(i),l=t("Wbzz"),c=t("WlAH"),m=t("U4DU"),o=t.n(m),d=s.a.bind(o.a),f=function(e){var a=e.prevPagePath,t=e.nextPagePath,n=e.hasNextPage,i=e.hasPrevPage,s=d({"pagination__prev-link":!0,"pagination__prev-link--disable":!i}),m=d({"pagination__next-link":!0,"pagination__next-link--disable":!n});return r.a.createElement("div",{className:o.a.pagination},r.a.createElement("div",{className:o.a.pagination__prev},r.a.createElement(l.Link,{rel:"prev",to:i?a:"/",className:s},c.b.PREV_PAGE)),r.a.createElement("div",{className:o.a.pagination__next},r.a.createElement(l.Link,{rel:"next",to:n?t:"/",className:m},c.b.NEXT_PAGE)))};t.d(a,"a",(function(){return f}))}}]);
//# sourceMappingURL=component---src-templates-index-template-js-a60645e13f975c2e4dc2.js.map