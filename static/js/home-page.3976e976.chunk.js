(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2,6],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var a=r(57),n=r(0),c=r(10),i=r(58),u=r(53),s=r(54),o=r(55),A=r(94),l=r.n(A),p=r(56),h=r(1);var g=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),r=t[0],A=t[1],g=Object(n.useState)(null),I=Object(a.a)(g,2),m=I[0],v=I[1],b=Object(n.useState)(u.a.IDLE),E=Object(a.a)(b,2),d=E[0],Z=E[1];return Object(n.useEffect)((function(){Z(u.a.PENDING),s.a.getPopularMovies().then((function(e){A(e),Z(u.a.RESOLVED)})).catch((function(e){console.log(e),v(e),Z(u.a.REJECTED)}))}),[m]),Object(h.jsxs)("main",{className:l.a.container,children:[d===u.a.PENDING&&Object(h.jsx)(i.a,{}),d===u.a.REJECTED&&Object(h.jsx)(o.default,{}),d===u.a.RESOLVED&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("ul",{className:l.a.moviesList,children:r.map((function(e){var t=e.id,r=e.poster_path,a=e.title;return Object(h.jsxs)("li",{className:l.a.moviesItem,children:[Object(h.jsx)(c.b,{to:{pathname:"movies/".concat(t)},children:Object(h.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):p.a,alt:a,className:l.a.poster})}),Object(h.jsx)("div",{className:l.a.titleBox,children:Object(h.jsx)("p",{className:l.a.title,children:a})})]},t)}))})})]})}},53:function(e,t,r){"use strict";t.a={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},54:function(e,t,r){"use strict";var a=r(63),n=r.n(a),c=r(64),i=r(65),u=r.n(i);function s(){return(s=Object(c.a)(n.a.mark((function e(){var t,r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/day"},e.next=4,u()(t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"search/movie",params:{query:t}},e.next=4,u()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function A(){return(A=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,u()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,u()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,u()(r,t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}u.a.defaults.baseURL="https://api.themoviedb.org/3/",u.a.defaults.params={api_key:"3b0a0f3678b03bfe7113d836939cb420",language:"en-US"};var h={getPopularMovies:function(){return s.apply(this,arguments)},getMoviesByKeyWord:function(e){return o.apply(this,arguments)},getMovieById:function(e){return A.apply(this,arguments)},getCastInfo:function(e){return l.apply(this,arguments)},getMovieReviews:function(e){return p.apply(this,arguments)}};t.a=h},55:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return n}));var a=r(1);function n(){return Object(a.jsx)("h1",{children:"404 - page not found "})}},56:function(e,t,r){"use strict";t.a="data:image/gif;base64,R0lGODlhIAKEAcQAAKurq/b29srKypeXlzo6OoqKit7e3uLi4llZWYODg8HBwba2tkJCQnt7e7i4uHR0dO/v72pqavz8/NDQ0EpKSunp6ebm5lBQUGJiYqampvr6+qKiolZWVvPz89bW1v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTUxMERDRTFBODNDMTFFN0IxQTY4M0E2RTMzNjRGMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTUxMERDRTJBODNDMTFFN0IxQTY4M0E2RTMzNjRGMDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNTEwRENERkE4M0MxMUU3QjFBNjgzQTZFMzM2NEYwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNTEwRENFMEE4M0MxMUU3QjFBNjgzQTZFMzM2NEYwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVu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"},58:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(15),n=r.n(a),c=(r(62),r(59)),i=r.n(c),u=r(1);var s=function(){return Object(u.jsx)("div",{className:i.a.loaderContainer,children:Object(u.jsx)(n.a,{className:"Loader",type:"Plane",color:"#5F5FF6",height:100,width:100})})}},59:function(e,t,r){e.exports={loaderContainer:"Loader_loaderContainer__3UUvs"}},94:function(e,t,r){e.exports={container:"HomePage_container__3vPro",mainTitle:"HomePage_mainTitle__1O9Y1",moviesList:"HomePage_moviesList__2qIUB",moviesItem:"HomePage_moviesItem__21Spv",titleBox:"HomePage_titleBox__k1WK1",poster:"HomePage_poster__3OhGb",title:"HomePage_title__2f1sJ"}}}]);
//# sourceMappingURL=home-page.3976e976.chunk.js.map