(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(38)},29:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),l=n(10),i=n(2),u=n(3),s=n(5),p=n(4),h=n(6),m=(n(29),n(23)),f=n(13),b=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={menu:[],loading:!1},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://swapi.co/api/").then(function(t){return t.json()}).then(function(e){var n=Object.entries(e).map(function(t,e){var n=Object(f.a)(t,2);return{id:e,name:n[0],link:n[1]}});t.setState({menu:Object(m.a)(n),loading:!1})})}},{key:"render",value:function(){var t=this.state,e=t.menu,n=t.loading;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Hola"),n&&"Loading...",c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),e.map(function(t){return c.a.createElement("li",{key:t.id},c.a.createElement(l.b,{to:"/".concat(t.name)},t.name))})))}}]),e}(a.Component),d=n(11),v=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"This is a Home page"),c.a.createElement(b,null))}}]),e}(a.Component),j=function(t){var e=t.activePage,n=t.count,a=t.handleButtonClick,r=Math.ceil(n/10),o=Array(r).fill(0).map(function(t,e){return e+1});return c.a.createElement("div",null,o.map(function(t){return c.a.createElement("button",{key:t,style:t===e?{background:"red"}:{},onClick:function(){return a(t)}},t)}))},E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={roster:[],loading:!1,activePage:1,nextPage:"",prevPage:"",count:null},n.handleButtonClick=function(t){n.setState({activePage:t}),n.fetchData(n.props.match.path)},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"fetchData",value:function(t){var e=this;this.setState({loading:!0}),fetch("https://swapi.co/api".concat(t,"/?page=").concat(this.state.activePage)).then(function(t){return t.json()}).then(function(t){console.log(t),e.setState({roster:t.results,loading:!1,count:t.count})})}},{key:"componentDidMount",value:function(){this.fetchData(this.props.match.path)}},{key:"componentDidUpdate",value:function(t){this.props.match.path!==t.match.path&&this.fetchData(this.props.match.path)}},{key:"render",value:function(){var t=this,e=this.state,n=e.roster,a=e.loading,r=e.activePage,o=e.count;return c.a.createElement("div",null,c.a.createElement("ul",null,a?"Loading...":n.map(function(e,n){return c.a.createElement("li",{key:n,style:{display:"inline-block",marginRight:10,border:"1px solid black"}},c.a.createElement(l.b,{to:"".concat(t.props.match.path,"/").concat(n+1)},e.name?e.name:e.title))})),a?"":c.a.createElement(j,{activePage:r,count:o,handleButtonClick:this.handleButtonClick}))}}]),e}(a.Component),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={item:{},loading:!1},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),fetch("https://swapi.co/api".concat(this.props.match.url)).then(function(t){return t.json()}).then(function(e){t.setState({item:e})})}},{key:"render",value:function(){var t=this.state.item;return console.log(t),c.a.createElement("div",null,c.a.createElement("ul",null,Object.entries(t).map(function(t){var e=Object(f.a)(t,2),n=e[0],a=e[1];return"string"===typeof a&&c.a.createElement("li",{key:n},c.a.createElement("span",{style:{textDecoration:"underline",marginRight:10}},n),a)})))}}]),e}(a.Component),g=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={page:1},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,this.props.match.path),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"".concat(this.props.match.path),component:E}),c.a.createElement(d.a,{path:"".concat(this.props.match.path,"/:number"),component:O})))}}]),e}(a.Component),y=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:v}),c.a.createElement(d.a,{path:"/people",component:g}),c.a.createElement(d.a,{path:"/films",component:g}),c.a.createElement(d.a,{path:"/starships",component:g}),c.a.createElement(d.a,{path:"/species",component:g}),c.a.createElement(d.a,{path:"/planets",component:g}),c.a.createElement(d.a,{path:"/vehicles",component:g})))}}]),e}(a.Component),k=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(y,null))}}]),e}(a.Component);o.a.render(c.a.createElement(l.a,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.97af911d.chunk.js.map