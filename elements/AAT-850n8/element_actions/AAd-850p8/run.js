function(instance, properties, context) {

	// Styles is a property on the docDefinition object, and Style's value is an object. Every style itself is a property on Styles and has an object as a value. 
	
	  
	// A function that helps converting RGBA into hex, because Bubble only passes rgba from the color picker ¬¬ (pdfmake can't understand it) - taken from https://github.com/metaloha/color2color
	  
	 !function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],2:[function(a,b,c){(function(c){"use strict";function colorcolor(b){var c=arguments.length<=1||void 0===arguments[1]?"rgba":arguments[1],i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];b=b.toLowerCase(),c=c.toLowerCase();var j,l,m,n,o=b,p=a("color-name"),q=4,r={rgb:{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],toRGBA:function(a){return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),1]}},rgba:{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,example:["rgba(123, 234, 45, 1)","rgba(255,234,245, 0.5)"],toRGBA:function(a){return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),parseFloat(a[4])]}},hex:{re:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["00ff00","336699"],toRGBA:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]}},hex3:{re:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["fb0","f0f"],toRGBA:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),1]}},hexa:{re:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["00ff00ff","336699a0"],toRGBA:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),parseInt(a[4],16)/255]}},hex4a:{re:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["fb0f","f0f8"],toRGBA:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),parseInt(a[4]+a[4],16)/255]}},hsl:{re:/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsl(120, 100%, 25%)","hsl(0, 100%, 50%)"],toRGBA:function(a){a[4]=1;var b=e(a);return[b.r,b.g,b.b,b.a]}},hsla:{re:/^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,example:["hsla(120, 100%, 25%, 1)","hsla(0, 100%, 50%, 0.5)"],toRGBA:function(a){var b=e(a);return[b.r,b.g,b.b,b.a]}},hsv:{re:/^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsv(120, 100%, 25%)","hsv(0, 100%, 50%)"],toRGBA:function(a){var b=g(a);return[b.r,b.g,b.b,1]}},hsb:{re:/^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsb(120, 100%, 25%)","hsb(0, 100%, 50%)"],toRGBA:function(a){var b=g(a);return[b.r,b.g,b.b,1]}}};p.hasOwnProperty(b)&&(b=p[b],b.forEach(function(a,c){b[c]=("0"+a.toString(16)).slice(-2)}),b="#"+b.join(""));for(var s in r){var t=r[s].re,u=r[s].toRGBA,v=t.exec(b);if(v){var w=u(v);j=w[0],l=w[1],m=w[2],n=+(Math.round(w[3]+("e+"+q))+("e-"+q))}}switch(j=Math.round(j<0||isNaN(j)?0:j>255?255:j),l=Math.round(l<0||isNaN(l)?0:l>255?255:l),m=Math.round(m<0||isNaN(m)?0:m>255?255:m),n=n<0||isNaN(n)?0:n>1?1:n,c){case"hex":o="#"+("0"+j.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)+("0"+m.toString(16)).slice(-2);break;case"hexa":if(i){var x=d(j,l,m,n),y=k(x,4);j=y[0],l=y[1],m=y[2],n=y[3]}o="#"+("0"+j.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)+("0"+m.toString(16)).slice(-2)+("0"+Math.round(255*n).toString(16)).slice(-2);break;case"hsl":var z=f({r:j,g:l,b:m});o="hsl("+z.h+","+z.s+"%,"+z.l+"%)";break;case"hsla":if(i){var A=d(j,l,m,n),B=k(A,4);j=B[0],l=B[1],m=B[2],n=B[3]}var C=f({r:j,g:l,b:m,a:n});o="hsla("+C.h+","+C.s+"%,"+C.l+"%,"+C.a+")";break;case"hsb":var D=h({r:j,g:l,b:m});o="hsb("+D.h+","+D.s+"%,"+D.v+"%)";break;case"hsv":var E=h({r:j,g:l,b:m});o="hsv("+E.h+","+E.s+"%,"+E.v+"%)";break;case"rgb":o="rgb("+j+","+l+","+m+")";break;case"rgba":default:if(i){var F=d(j,l,m,n),G=k(F,4);j=G[0],l=G[1],m=G[2],n=G[3]}o="rgba("+j+","+l+","+m+","+n+")"}return o}function d(a,b,c,d){var e=0;return d=(255-(e=Math.min(a,b,c)))/255,a=((a-e)/d).toFixed(0),b=((b-e)/d).toFixed(0),c=((c-e)/d).toFixed(0),d=parseFloat(d.toFixed(4)),[a,b,c,d]}function e(a){var b={},c={h:a[1]/360,s:a[2]/100,l:a[3]/100,a:parseFloat(a[4])};if(0===c.s){var d=255*c.l;b={r:d,g:d,b:d,a:c.a}}else{var e=c.l<.5?c.l*(1+c.s):c.l+c.s-c.l*c.s,f=2*c.l-e;b.r=255*i(f,e,c.h+1/3),b.g=255*i(f,e,c.h),b.b=255*i(f,e,c.h-1/3),b.a=c.a}return b}function f(a){a.r=a.r/255,a.g=a.g/255,a.b=a.b/255;var b,c=Math.max(a.r,a.g,a.b),d=Math.min(a.r,a.g,a.b),e=[];if(e.a=a.a,e.l=(c+d)/2,c===d)e.h=0,e.s=0;else{switch(b=c-d,e.s=e.l>=.5?b/(2-c-d):b/(c+d),c){case a.r:e.h=(a.g-a.b)/b+(a.g<a.b?6:0);break;case a.g:e.h=(a.b-a.r)/b+2;break;case a.b:e.h=(a.r-a.g)/b+4}e.h/=6}return e.h=parseInt((360*e.h).toFixed(0),10),e.s=parseInt((100*e.s).toFixed(0),10),e.l=parseInt((100*e.l).toFixed(0),10),e}function g(a){var b={},c={h:a[1]/360,s:a[2]/100,v:a[3]/100},d=Math.floor(6*c.h),e=6*c.h-d,f=c.v*(1-c.s),g=c.v*(1-e*c.s),h=c.v*(1-(1-e)*c.s);switch(d%6){case 0:b.r=c.v,b.g=h,b.b=f;break;case 1:b.r=g,b.g=c.v,b.b=f;break;case 2:b.r=f,b.g=c.v,b.b=h;break;case 3:b.r=f,b.g=g,b.b=c.v;break;case 4:b.r=h,b.g=f,b.b=c.v;break;case 5:b.r=c.v,b.g=f,b.b=g}return b.r=255*b.r,b.g=255*b.g,b.b=255*b.b,b}function h(a){a.r=j(parseInt(a.r,10)%256,256),a.g=j(parseInt(a.g,10)%256,256),a.b=j(parseInt(a.b,10)%256,256);var b=Math.max(a.r,a.g,a.b),c=Math.min(a.r,a.g,a.b),d=b-c,e={h:0,s:0===b?0:d/b,v:b};if(b!==c){switch(b){case a.r:e.h=(a.g-a.b)/d+(a.g<a.b?6:0);break;case a.g:e.h=(a.b-a.r)/d+2;break;case a.b:e.h=(a.r-a.g)/d+4}e.h/=6}return e.h=parseInt((360*e.h).toFixed(0),10),e.s=parseInt((100*e.s).toFixed(0),10),e.v=parseInt((100*e.v).toFixed(0),10),e}function i(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(6*(2/3-c)):a}function j(a,b){return a/b}var k=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();b.exports=colorcolor,c.colorcolor=b.exports}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"color-name":1}]},{},[2]);
	
	// actual conversion being made
	let newColor = colorcolor( properties.color, "hex" );
	  
	  
	  
	  
	// This grabs and structures the style inputed by the user into an object and defines it as a property for "Styles".
	let styleName = properties.name.replaceAll(/\W/g, '')
	  
	instance.data.docDefinition.styles[styleName.toLowerCase()]= {
														  color: newColor,
														   fontSize: properties.fontSize,
														   bold: properties.bold,
														   italics: properties.italics,
														   alignment: properties.alignment
		
													 } 
	
	  
	
	}