(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(1),s=a(2),i=a(4),c=a(3),u=a(5),l=a(0),o=a.n(l),m=a(7),h=a.n(m);a(15);function d(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var p=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],isXNext:!0,stepNumber:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();b(a)||a[e]||(a[e]=this.state.isXNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,isXNext:!this.state.isXNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,IsXNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber],r=b(a.squares),n=t.map((function(t,a){var r=a?"Go to move #".concat(a):"Go to game start";return o.a.createElement("li",{key:a,className:"moves-list"},o.a.createElement("button",{onClick:function(){return e.jumpTo(a)}},r))})),s=r?"Winner: ".concat(r):"Next Player: ".concat(this.state.isXNext?"X":"O");return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(p,{squares:a.squares,onClick:function(t){return e.handleClick(t)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,s),o.a.createElement("ol",null,n)))}}]),t}(o.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],i=n[1],c=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[c])return e[s]}return null}h.a.render(o.a.createElement(v,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.c3683b87.chunk.js.map