(this["webpackJsonpmarkdown-nice-editor"]=this["webpackJsonpmarkdown-nice-editor"]||[]).push([[42],{703:function(e,n,i){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(n){var i=n.string.search(/[\t ]+?$/);if(!n.sol()||0===i)return n.skipToEnd(),("error "+(e[n.string.charAt(0)]||"")).replace(/ $/,"");var t=e[n.peek()]||n.skipToEnd();return-1===i?n.skipToEnd():n.pos=i,t}}})),e.defineMIME("text/x-diff","diff")}(i(40))}}]);
//# sourceMappingURL=42.25f8861e.chunk.js.map