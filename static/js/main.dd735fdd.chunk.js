(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(79),r=a.n(i),o=(a(87),a(14)),c=a(32),l=a(16),u=a(15),p=a(17),g=(a(89),a(81)),f=a(20),d=function(e){var t;switch(e.tileType){case 1:t=s.a.createElement("div",{className:"tile grass"});break;case 2:t=s.a.createElement("div",{className:"tile rock"});break;case 3:t=s.a.createElement("div",{className:"tile tree"});break;case 4:t=s.a.createElement("div",{className:"tile water"});break;default:t=s.a.createElement("div",{className:e.tileType})}return t},m=a(3),w=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={};var n=e.position?e.position:m[e.type].startPosition;return a.state={id:e.id,type:e.type,str:m[e.type].str,agi:m[e.type].agi,dex:m[e.type].dex,wis:m[e.type].wis,int:m[e.type].int,position:n},a}return Object(p.a)(t,e),t}(n.Component),h=function(e,t){return e.map(function(e){return e[0]===t[0]&&e[1]===t[1]}).includes(!0)},y=function(e,t,a){return e[t][a]},v=function(e,t){return t.find(function(t){return t.state.id===e})},b=function(e,t){e&&console.log(t)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*e-1)+t},k=function(e,t){for(var a=[],n=0;n<e.rows;n++)a.push([]);for(var s=0;s<e.rows;s++)for(var i=0;i<e.columns;i++){var r=O(100);r>=t.tileOccuranceLimits[0]&&r<t.tileOccuranceLimits[1]?a[s].push(1):r>=t.tileOccuranceLimits[1]&&r<t.tileOccuranceLimits[2]?a[s].push(2):r>=t.tileOccuranceLimits[2]&&r<t.tileOccuranceLimits[3]?a[s].push(3):r>=t.tileOccuranceLimits[3]&&r<t.tileOccuranceLimits[4]&&a[s].push(4)}var o=T(e,t,a,a);return x(t,o,a),b(t.test,o),a},T=function(e,t,a,n){for(var s,i,r=[],o=0;o<e.rows;o++)for(var c=0;c<e.columns;c++)if(a[o][c]===t.tileTypes.water){if(!(s=!r.length>0)){for(var l=[],u=0;u<r.length;u++)l.push(h(r[u],[o,c]));i=!l.includes(!0)}if(s||i){for(var p=[[o,c]],g=void 0,f=void 0,d=0;d<p.length;d++)g=p[d][0],f=p[d][1],d<10?j(t,n,g,f,p):b(t.test,"Error - newPondTile >= 10");r.push(p)}}return r},j=function(e,t,a,n,s){0!==a&&y(t,a-1,n)===e.tileTypes.water&&(h(s,[a-1,n])||s.push([a-1,n])),a!==e.rows-1&&y(t,a+1,n)===e.tileTypes.water&&(h(s,[a+1,n])||s.push([a+1,n])),0!==n&&y(t,a,n-1)===e.tileTypes.water&&(h(s,[a,n-1])||s.push([a,n-1])),n!==e.columns-1&&y(t,a,n+1)===e.tileTypes.water&&(h(s,[a,n+1])||s.push([a,n+1]))},x=function(e,t,a){var n=0,s=e.condenseLimit,i=e.tileTypes.water,r=e.rows;return t.map(function(e){if(n=Math.floor(Math.random()*s-1)+1,e.length<3)for(var t=function(t){e.map(function(e){0!==e[0]&&a[e[0]-1][e[1]]!==i&&t<n&&(a[e[0]-1][e[1]]=i,t++),e[0]!==r-1&&a[e[0]+1][e[1]]!==i&&t<n&&(a[e[0]+1][e[1]]=i,t++),0!==e[1]&&a[e[0]][e[1]-1]!==i&&t<n&&(a[e[0]][e[1]-1]=i,t++),e[1]!==r-1&&a[e[0]][e[1]+1]!==i&&t<n&&(a[e[0]][e[1]+1]=i,t++)}),o=t},o=0;o<n;o++)t(o)})},E=a(80),L=a.n(E),S=function(e,t){var a=Object(f.a)(e.agents),n=0,s=A("a"+n,"player");return a.push(s),n++,t.forEach(function(t,i){t.forEach(function(t,r){var o=O(100)<10;if(L.a.isEqual(s.state.position,[i,r])&&(o=!1),o){var c=O(Object.keys(m).length-1,1);switch(t){case e.tileTypes.grass:case e.tileTypes.rock:case e.tileTypes.tree:case e.tileTypes.water:}var l=Object.keys(m).filter(function(e){return"player"!==e})[c];a.push(A("a"+n,l,[i,r])),n++}})}),b(e.test,Object.keys(m)),a},A=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new w({id:e,type:t,position:a})},P=function(e,t){var a=v("a0",t),n=a.state.position;return e[n[1]][n[0]]=a.state.id,t.forEach(function(t){var a=t.state.position;e[a[1]][a[0]]=t.state.id}),e},C=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={test:a.props.test,agentCounter:0,columns:a.props.columns,rows:a.props.rows,tilesStates:[[]],tilesAgentsStates:[[]],tileTypes:{grass:0,rock:1,tree:2,water:3},tileOccuranceLimits:[0,60,75,85,100],playerOn:1,ponds:[],condenseLimit:3,agents:[]},a.updatePlayerPos=function(e,t){var n=a.state.tilesStates.slice(0);return n[t[1]][t[0]]=a.state.playerOn,n[e[1]][e[0]]="a0",n},a.handleKeyPress=function(e){b(a.state.test,"key pressed "+e.key);var t,n=Object(f.a)(a.state.agents),s=Object(f.a)(v("a0",n).state.position);switch(e.key){case"ArrowLeft":if((t=[s[0]-1,s[1]])[0]<=0)return;break;case"ArrowRight":if((t=[s[0]+1,s[1]])[0]>=a.props.columns-1)return;break;case"ArrowUp":if((t=[s[0],s[1]-1])[1]<=0)return;break;case"ArrowDown":if((t=[s[0],s[1]+1])[1]>=a.props.rows-1)return;break;default:t=s}v("a0",n).state.position=t,t!==s&&a.setState(function(e){return{agents:n,playerOn:a.state.tilesStates[t[1]][t[0]],tileStates:a.updatePlayerPos(t,s)}})};var n=k(e,a.state),s=S(a.state,n),i=P(n,s);return a.state=Object(g.a)({},a.state,{agents:s,tilesStates:n,tilesAgentsStates:i,agentCounter:a.state.agentCounter+s.length}),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return b(this.state.test,this.state.tilesAgentsStates),s.a.createElement("div",{tabIndex:"0",onKeyDown:this.handleKeyPress},this.state.tilesAgentsStates.map(function(t,a){return s.a.createElement("div",{key:a},e.state.tilesAgentsStates[a].map(function(t,n){return s.a.createElement(d,{tileType:"a"===t[0]?"tile "+v(t,e.state.agents).state.type:t,key:a*e.state.rows+n,test:e.state.test})}))}))}}]),t}(n.Component),N=(a(206),a(208),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,{rows:10,columns:10,test:!0}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e){e.exports={player:{name:"player",str:5,agi:5,dex:5,wis:5,int:5,startPosition:[1,1],genericTags:""},dog:{name:"dog",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},cat:{name:"cat",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},snake:{name:"snake",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},pigeon:{name:"pigeon",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},bear:{name:"bear",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},piranha:{name:"piranha",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},alligator:{name:"alligator",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},tarantula:{name:"tarantula",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},"sydney-funnel-web":{name:"sydney-funnel-web",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},gorilla:{name:"gorilla",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""},"silverback-gorilla":{name:"silverback-gorilla",str:5,agi:5,dex:5,wis:5,int:5,genericTags:""}}},82:function(e,t,a){e.exports=a(210)},87:function(e,t,a){},89:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[82,2,1]]]);
//# sourceMappingURL=main.dd735fdd.chunk.js.map