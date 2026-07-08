(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const th="181",px=0,Ad=1,mx=2,e0=1,gx=2,zi=3,Ki=0,bn=1,yn=2,qi=0,bs=1,wd=2,Rd=3,Cd=4,xx=5,Nr=100,_x=101,vx=102,yx=103,bx=104,Mx=200,Sx=201,Ex=202,Tx=203,Bl=204,kl=205,Ax=206,wx=207,Rx=208,Cx=209,Lx=210,Px=211,Ix=212,Dx=213,Nx=214,Vl=0,zl=1,Gl=2,As=3,Hl=4,Wl=5,Xl=6,ql=7,t0=0,Ux=1,Fx=2,pr=0,Ox=1,Bx=2,kx=3,n0=4,Vx=5,zx=6,Gx=7,Ld="attached",Hx="detached",i0=300,ws=301,Rs=302,Yl=303,jl=304,dc=306,xr=1e3,gi=1001,Qo=1002,mn=1003,r0=1004,Sa=1005,tn=1006,Ho=1007,Hi=1008,Si=1009,s0=1010,a0=1011,Da=1012,nh=1013,Hr=1014,ii=1015,qs=1016,ih=1017,rh=1018,Na=1020,o0=35902,c0=35899,l0=1021,u0=1022,Yn=1023,Ua=1026,Fa=1027,sh=1028,ah=1029,oh=1030,ch=1031,lh=1033,Wo=33776,Xo=33777,qo=33778,Yo=33779,Kl=35840,$l=35841,Zl=35842,Jl=35843,Ql=36196,eu=37492,tu=37496,nu=37808,iu=37809,ru=37810,su=37811,au=37812,ou=37813,cu=37814,lu=37815,uu=37816,hu=37817,du=37818,fu=37819,pu=37820,mu=37821,gu=36492,xu=36494,_u=36495,vu=36283,yu=36284,bu=36285,Mu=36286,Oa=2300,Ba=2301,Wc=2302,Pd=2400,Id=2401,Dd=2402,Wx=2500,Xx=0,h0=1,Su=2,qx=3200,Yx=3201,d0=0,jx=1,hr="",kt="srgb",gn="srgb-linear",ec="linear",dt="srgb",ts=7680,Nd=519,Kx=512,$x=513,Zx=514,f0=515,Jx=516,Qx=517,e_=518,t_=519,Eu=35044,Ud="300 es",xi=2e3,tc=2001;function p0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n_(){const n=ka("canvas");return n.style.display="block",n}const Fd={};function nc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ee(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Xe(...n){const e="THREE."+n.shift();console.error(e,...n)}function Va(...n){const e=n.join(" ");e in Fd||(Fd[e]=!0,Ee(...n))}function i_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Od=1234567;const wa=Math.PI/180,Cs=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function uh(n,e){return(n%e+e)%e}function r_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function s_(n,e,t){return n!==e?(t-n)/(e-n):0}function Ra(n,e,t){return(1-t)*n+t*e}function a_(n,e,t,i){return Ra(n,e,1-Math.exp(-t*i))}function o_(n,e=1){return e-Math.abs(uh(n,e*2)-e)}function c_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function l_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function u_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function h_(n,e){return n+Math.random()*(e-n)}function d_(n){return n*(.5-Math.random())}function f_(n){n!==void 0&&(Od=n);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p_(n){return n*wa}function m_(n){return n*Cs}function g_(n){return(n&n-1)===0&&n!==0}function x_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function __(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function v_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ft={DEG2RAD:wa,RAD2DEG:Cs,generateUUID:ri,clamp:qe,euclideanModulo:uh,mapLinear:r_,inverseLerp:s_,lerp:Ra,damp:a_,pingpong:o_,smoothstep:c_,smootherstep:l_,randInt:u_,randFloat:h_,randFloatSpread:d_,seededRandom:f_,degToRad:p_,radToDeg:m_,isPowerOfTwo:g_,ceilPowerOfTwo:x_,floorPowerOfTwo:__,setQuaternionFromProperEuler:v_,normalize:ot,denormalize:ti};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),M=Math.sin(E);p=Math.sin(p*E)/M,o=Math.sin(o*E)/M,c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+_*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+_*o;const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new N,Bd=new yr;class ze{constructor(e,t,i,r,s,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],E=r[1],M=r[4],A=r[7],C=r[2],T=r[5],L=r[8];return s[0]=a*_+o*E+c*C,s[3]=a*m+o*M+c*T,s[6]=a*p+o*A+c*L,s[1]=l*_+u*E+h*C,s[4]=l*m+u*M+h*T,s[7]=l*p+u*A+h*L,s[2]=d*_+f*E+g*C,s[5]=d*m+f*M+g*T,s[8]=d*p+f*A+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qc.makeScale(e,t)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new ze,kd=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const n={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gn]:{primaries:e,whitePoint:i,transfer:ec,toXYZ:kd,fromXYZ:Vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:kd,fromXYZ:Vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const et=y_();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ns;class b_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=ka("canvas")),ns.width=e.width,ns.height=e.height;const r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ns}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yc(r[a].image)):s.push(Yc(r[a]))}else s=Yc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?b_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}let S_=0;const jc=new N;class Wt extends Ys{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=gi,r=gi,s=tn,a=Hi,o=Yn,c=Si,l=Wt.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ri(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==i0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=i0;Wt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,A=(f+1)/2,C=(p+1)/2,T=(u+d)/4,L=(h+_)/4,F=(g+m)/4;return M>A&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=L/i):A>C?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=T/r,s=F/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=L/s,r=F/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends Ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Wt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends E_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class m0 extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T_ extends Wt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),uo.subVectors(this.max,da),is.subVectors(e.a,da),rs.subVectors(e.b,da),ss.subVectors(e.c,da),tr.subVectors(rs,is),nr.subVectors(ss,rs),Tr.subVectors(is,ss);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Tr.z,Tr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Tr.z,0,-Tr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Tr.y,Tr.x,0];return!Kc(t,is,rs,ss,uo)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,is,rs,ss,uo))?!1:(ho.crossVectors(tr,nr),t=[ho.x,ho.y,ho.z],Kc(t,is,rs,ss,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new N,new N,new N,new N,new N,new N,new N,new N],Jn=new N,lo=new Ti,is=new N,rs=new N,ss=new N,tr=new N,nr=new N,Tr=new N,da=new N,uo=new N,ho=new N,Ar=new N;function Kc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ar.fromArray(n,s);const o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),c=e.dot(Ar),l=t.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const A_=new Ti,fa=new N,$c=new N;class Ai{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):A_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add($c)),this.expandByPoint(fa.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new N,Zc=new N,fo=new N,ir=new N,Jc=new N,po=new N,Qc=new N;class fc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zc.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(Zc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fo),o=ir.dot(this.direction),c=-ir.dot(fo),l=ir.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zc).addScaledVector(fo,d),f}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){Jc.subVectors(t,e),po.subVectors(i,e),Qc.crossVectors(Jc,po);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ir.subVectors(this.origin,e);const c=o*this.direction.dot(po.crossVectors(ir,po));if(c<0)return null;const l=o*this.direction.dot(Jc.cross(ir));if(l<0||c+l>a)return null;const u=-o*ir.dot(Qc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w_,e,R_)}lookAt(e,t,i){const r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),rr.crossVectors(i,wn),rr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),rr.crossVectors(i,wn)),rr.normalize(),mo.crossVectors(wn,rr),r[0]=rr.x,r[4]=mo.x,r[8]=wn.x,r[1]=rr.y,r[5]=mo.y,r[9]=wn.y,r[2]=rr.z,r[6]=mo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],M=i[7],A=i[11],C=i[15],T=r[0],L=r[4],F=r[8],b=r[12],y=r[1],P=r[5],V=r[9],G=r[13],j=r[2],X=r[6],K=r[10],Q=r[14],H=r[3],ie=r[7],ae=r[11],Re=r[15];return s[0]=a*T+o*y+c*j+l*H,s[4]=a*L+o*P+c*X+l*ie,s[8]=a*F+o*V+c*K+l*ae,s[12]=a*b+o*G+c*Q+l*Re,s[1]=u*T+h*y+d*j+f*H,s[5]=u*L+h*P+d*X+f*ie,s[9]=u*F+h*V+d*K+f*ae,s[13]=u*b+h*G+d*Q+f*Re,s[2]=g*T+_*y+m*j+p*H,s[6]=g*L+_*P+m*X+p*ie,s[10]=g*F+_*V+m*K+p*ae,s[14]=g*b+_*G+m*Q+p*Re,s[3]=E*T+M*y+A*j+C*H,s[7]=E*L+M*P+A*X+C*ie,s[11]=E*F+M*V+A*K+C*ae,s[15]=E*b+M*G+A*Q+C*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,M=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,A=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,C=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,T=t*E+i*M+r*A+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=E*L,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*L,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*L,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*L,e[4]=M*L,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*L,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*L,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*L,e[8]=A*L,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*L,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*L,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*L,e[12]=C*L,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*L,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*L,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,E=c*l,M=c*u,A=c*h,C=i.x,T=i.y,L=i.z;return r[0]=(1-(_+p))*C,r[1]=(f+A)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(f-A)*T,r[5]=(1-(d+p))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(g+M)*L,r[9]=(m-E)*L,r[10]=(1-(d+_))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const a=as.set(r[4],r[5],r[6]).length(),o=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const l=1/s,u=1/a,h=1/o;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=xi,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===xi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===tc)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=xi,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===xi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===tc)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const as=new N,Qn=new Ge,w_=new N(0,0,0),R_=new N(1,1,1),rr=new N,mo=new N,wn=new N,zd=new Ge,Gd=new yr;class ai{constructor(e=0,t=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const Hd=new N,os=new yr,Fi=new Ge,go=new N,pa=new N,L_=new N,P_=new yr,Wd=new N(1,0,0),Xd=new N(0,1,0),qd=new N(0,0,1),Yd={type:"added"},I_={type:"removed"},cs={type:"childadded",child:null},el={type:"childremoved",child:null};class Tt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new N,t=new ai,i=new yr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?go.copy(e):go.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(pa,go,this.up):Fi.lookAt(go,pa,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Fi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),cs.child=e,this.dispatchEvent(cs),cs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,L_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new N,Oi=new N,tl=new N,Bi=new N,ls=new N,us=new N,jd=new N,nl=new N,il=new N,rl=new N,sl=new at,al=new at,ol=new at;class ni{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ei.subVectors(e,t),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ei.subVectors(r,t),Oi.subVectors(i,t),tl.subVectors(e,t);const a=ei.dot(ei),o=ei.dot(Oi),c=ei.dot(tl),l=Oi.dot(Oi),u=Oi.dot(tl),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bi.x),c.addScaledVector(a,Bi.y),c.addScaledVector(o,Bi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return sl.setScalar(0),al.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),al.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sl,s.x),a.addScaledVector(al,s.y),a.addScaledVector(ol,s.z),a}static isFrontFacing(e,t,i,r){return ei.subVectors(i,t),Oi.subVectors(e,t),ei.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ei.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),us.subVectors(s,i),nl.subVectors(e,i);const c=ls.dot(nl),l=us.dot(nl);if(c<=0&&l<=0)return t.copy(i);il.subVectors(e,r);const u=ls.dot(il),h=us.dot(il);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(ls,a);rl.subVectors(e,s);const f=ls.dot(rl),g=us.dot(rl);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(us,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return jd.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(jd,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(ls,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},xo={h:0,s:0,l:0};function cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=uh(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=cl(a,s,e+1/3),this.g=cl(a,s,e),this.b=cl(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=x0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return et.workingToColorSpace(sn.copy(this),e),Math.round(qe(sn.r*255,0,255))*65536+Math.round(qe(sn.g*255,0,255))*256+Math.round(qe(sn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(sn.copy(this),t);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=kt){et.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,r=sn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(xo);const i=Ra(sr.h,xo.h,t),r=Ra(sr.s,xo.s,t),s=Ra(sr.l,xo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Ue;Ue.NAMES=x0;let D_=0;class bi extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=bs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wi extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=t0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new N,_o=new Je;let N_=0;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}}class _0 extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class v0 extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ji extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U_=0;const zn=new Ge,ll=new Tt,hs=new N,Rn=new Ti,ma=new Ti,$t=new N;class Mn extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?v0:_0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ji(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ma.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Rn.min,ma.min),Rn.expandByPoint($t),$t.addVectors(Rn.max,ma.max),Rn.expandByPoint($t)):(Rn.expandByPoint(ma.min),Rn.expandByPoint(ma.max))}Rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$t.fromBufferAttribute(o,l),c&&(hs.fromBufferAttribute(e,l),$t.add(hs)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<i.count;F++)o[F]=new N,c[F]=new N;const l=new N,u=new N,h=new N,d=new Je,f=new Je,g=new Je,_=new N,m=new N;function p(F,b,y){l.fromBufferAttribute(i,F),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,F),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[F].add(_),o[b].add(_),o[y].add(_),c[F].add(m),c[b].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,b=E.length;F<b;++F){const y=E[F],P=y.start,V=y.count;for(let G=P,j=P+V;G<j;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new N,A=new N,C=new N,T=new N;function L(F){C.fromBufferAttribute(r,F),T.copy(C);const b=o[F];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),A.crossVectors(T,b);const P=A.dot(c[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,P)}for(let F=0,b=E.length;F<b;++F){const y=E[F],P=y.start,V=y.count;for(let G=P,j=P+V;G<j;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Qt(d,u,h)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new Ge,wr=new fc,vo=new Ai,$d=new N,yo=new N,bo=new N,Mo=new N,ul=new N,So=new N,Zd=new N,Eo=new N;class Sn extends Tt{constructor(e=new Mn,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ul.fromBufferAttribute(h,e),a?So.addScaledVector(ul,u):So.addScaledVector(ul.sub(t),u))}t.add(So)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(vo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(vo,$d)===null||wr.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Kd.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Kd),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let A=E,C=M;A<C;A+=3){const T=o.getX(A),L=o.getX(A+1),F=o.getX(A+2);r=To(this,p,e,i,l,u,h,T,L,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),M=o.getX(m+1),A=o.getX(m+2);r=To(this,a,e,i,l,u,h,E,M,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let A=E,C=M;A<C;A+=3){const T=A,L=A+1,F=A+2;r=To(this,p,e,i,l,u,h,T,L,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,M=m+1,A=m+2;r=To(this,a,e,i,l,u,h,E,M,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function F_(n,e,t,i,r,s,a,o){let c;if(e.side===bn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ki,o),c===null)return null;Eo.copy(o),Eo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Eo);return l<t.near||l>t.far?null:{distance:l,point:Eo.clone(),object:n}}function To(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,yo),n.getVertexPosition(c,bo),n.getVertexPosition(l,Mo);const u=F_(n,e,t,i,yo,bo,Mo,Zd);if(u){const h=new N;ni.getBarycoord(Zd,yo,bo,Mo,h),r&&(u.uv=ni.getInterpolatedAttribute(r,o,c,l,h,new Je)),s&&(u.uv1=ni.getInterpolatedAttribute(s,o,c,l,h,new Je)),a&&(u.normal=ni.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};ni.getNormal(yo,bo,Mo,d.normal),u.face=d,u.barycoord=h}return u}class $a extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ji(l,3)),this.setAttribute("normal",new ji(u,3)),this.setAttribute("uv",new ji(h,2));function g(_,m,p,E,M,A,C,T,L,F,b){const y=A/L,P=C/F,V=A/2,G=C/2,j=T/2,X=L+1,K=F+1;let Q=0,H=0;const ie=new N;for(let ae=0;ae<K;ae++){const Re=ae*P-G;for(let Qe=0;Qe<X;Qe++){const lt=Qe*y-V;ie[_]=lt*E,ie[m]=Re*M,ie[p]=j,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Qe/L),h.push(1-ae/F),Q+=1}}for(let ae=0;ae<F;ae++)for(let Re=0;Re<L;Re++){const Qe=d+Re+X*ae,lt=d+Re+X*(ae+1),xt=d+(Re+1)+X*(ae+1),_t=d+(Re+1)+X*ae;c.push(Qe,lt,_t),c.push(lt,xt,_t),H+=6}o.addGroup(f,H,b),f+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=Ls(n[t]);for(const r in i)e[r]=i[r]}return e}function O_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function y0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const B_={clone:Ls,merge:fn};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=O_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class b0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new N,Jd=new Je,Qd=new Je;class pn extends b0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,fs=1;class z_ extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(ds,fs,e,t);r.layers=this.layers,this.add(r);const s=new pn(ds,fs,e,t);s.layers=this.layers,this.add(s);const a=new pn(ds,fs,e,t);a.layers=this.layers,this.add(a);const o=new pn(ds,fs,e,t);o.layers=this.layers,this.add(o);const c=new pn(ds,fs,e,t);c.layers=this.layers,this.add(c);const l=new pn(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class M0 extends Wt{constructor(e=[],t=ws,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G_ extends Wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $a(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:qi});s.uniforms.tEquirect.value=t;const a=new Sn(r,s),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=tn),new z_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class _i extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class W_ extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class X_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new N;class dh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){nc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ef=new N,tf=new at,nf=new at,q_=new N,rf=new Ge,Ao=new N,dl=new Ai,sf=new Ge,fl=new fc;class Y_ extends Sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ld,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ao),this.boundingSphere.expandByPoint(Ao)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(r),e.ray.intersectsSphere(dl)!==!1&&(sf.copy(r).invert(),fl.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;tf.fromBufferAttribute(r.attributes.skinIndex,e),nf.fromBufferAttribute(r.attributes.skinWeight,e),ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=nf.getComponent(s);if(a!==0){const o=tf.getComponent(s);rf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(q_.copy(ef).applyMatrix4(rf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class S0 extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fh extends Wt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=mn,u=mn,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const af=new Ge,j_=new Ge;class ph{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ge;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:j_;af.multiplyMatrices(o,t[s]),af.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ph(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new fh(t,e,e,Yn,ii);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(Ee("Skeleton: No bone found with UUID:",s),a=new S0),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Tu extends Qt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Ge,of=new Ge,wo=[],cf=new Ti,K_=new Ge,ga=new Sn,xa=new Ai;class $_ extends Sn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,K_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),cf.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),xa.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ps),of.multiplyMatrices(i,ps),ga.matrixWorld=of,ga.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){const c=wo[a];c.instanceId=s,c.object=this,t.push(c)}wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(r*this.count),r,this.count,sh,ii));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pl=new N,Z_=new N,J_=new ze;class Dr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pl.subVectors(i,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J_.getNormalMatrix(e),r=this.coplanarPoint(pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Ai,Q_=new Je(.5,.5),Ro=new N;class mh{constructor(e=new Dr,t=new Dr,i=new Dr,r=new Dr,s=new Dr,a=new Dr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],E=s[12],M=s[13],A=s[14],C=s[15];if(r[0].setComponents(l-a,f-u,p-g,C-E).normalize(),r[1].setComponents(l+a,f+u,p+g,C+E).normalize(),r[2].setComponents(l+o,f+h,p+_,C+M).normalize(),r[3].setComponents(l-o,f-h,p-_,C-M).normalize(),i)r[4].setComponents(c,d,m,A).normalize(),r[5].setComponents(l-c,f-d,p-m,C-A).normalize();else if(r[4].setComponents(l-c,f-d,p-m,C-A).normalize(),t===xi)r[5].setComponents(l+c,f+d,p+m,C+A).normalize();else if(t===tc)r[5].setComponents(c,d,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const t=Q_.distanceTo(e.center);return Rr.radius=.7071067811865476+t,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ro.x=r.normal.x>0?e.max.x:e.min.x,Ro.y=r.normal.y>0?e.max.y:e.min.y,Ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gh extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new N,rc=new N,lf=new Ge,_a=new fc,Co=new Ai,ml=new N,uf=new N;class za extends Tt{constructor(e=new Mn,t=new gh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ic.fromBufferAttribute(t,r-1),rc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new ji(i,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;lf.copy(r).invert(),_a.copy(e.ray).applyMatrix4(lf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),E=u.getX(_+1),M=Lo(this,e,_a,c,p,E,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Lo(this,e,_a,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Lo(this,e,_a,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Lo(this,e,_a,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lo(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(ic.fromBufferAttribute(o,r),rc.fromBufferAttribute(o,s),t.distanceSqToSegment(ic,rc,ml,uf)>i)return;ml.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ml);if(!(l<e.near||l>e.far))return{distance:l,point:uf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const hf=new N,df=new N;class e1 extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hf.fromBufferAttribute(t,r),df.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hf.distanceTo(df);e.setAttribute("lineDistance",new ji(i,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t1 extends za{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class E0 extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ff=new Ge,Au=new fc,Po=new Ai,Io=new N;class n1 extends Tt{constructor(e=new Mn,t=new E0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;ff.copy(r).invert(),Au.copy(e.ray).applyMatrix4(ff);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Io.fromBufferAttribute(h,m),pf(Io,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Io.fromBufferAttribute(h,g),pf(Io,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pf(n,e,t,i,r,s,a){const o=Au.distanceSqToPoint(n);if(o<t){const c=new N;Au.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class i1 extends Wt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class T0 extends Wt{constructor(e,t,i=Hr,r,s,a,o=mn,c=mn,l,u=Ua,h=1){if(u!==Ua&&u!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class A0 extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let M=0;M<l;M++){const A=M*h-s;g.push(A,-E,0),_.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const M=E+l*p,A=E+l*(p+1),C=E+1+l*(p+1),T=E+1+l*p;f.push(M,A,T),f.push(A,C,T)}this.setIndex(f),this.setAttribute("position",new ji(g,3)),this.setAttribute("normal",new ji(_,3)),this.setAttribute("uv",new ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ga extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends Ga{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class r1 extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s1 extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Do(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function a1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function o1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function mf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=n[o+c]}return r}function w0(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Ja{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class c1 extends Ja{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Id:s=e,o=2*t-i;break;case Dd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Id:a=e,c=2*i-t;break;case Dd:a=1,c=i+r[1]-r[0];break;default:a=e-1,c=t}const l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,A=f*m-f*_;for(let C=0;C!==o;++C)s[C]=p*a[u+C]+E*a[l+C]+M*a[c+C]+A*a[h+C];return s}}class l1 extends Ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class u1 extends Ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class oi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new u1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new l1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new c1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case Ba:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=i[o];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Xe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&a1(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ba;class js extends oi{constructor(e,t,i){super(e,t,i)}}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Oa;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class R0 extends oi{constructor(e,t,i,r){super(e,t,i,r)}}R0.prototype.ValueTypeName="color";class Ps extends oi{constructor(e,t,i,r){super(e,t,i,r)}}Ps.prototype.ValueTypeName="number";class h1 extends Ja{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)yr.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Is extends oi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new h1(this.times,this.values,this.getValueSize(),e)}}Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends oi{constructor(e,t,i){super(e,t,i)}}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Oa;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends oi{constructor(e,t,i,r){super(e,t,i,r)}}Ds.prototype.ValueTypeName="vector";class d1{constructor(e="",t=-1,i=[],r=Wx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(p1(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(oi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=o1(c);c=mf(c,1,u),l=mf(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ps(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(Ee("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Xe("AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];w0(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let E=0;E!==d[g].morphTargets.length;++E){const M=d[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}r.push(new Ps(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";i(Ds,f+".position",d,"pos",r),i(Is,f+".quaternion",d,"rot",r),i(Ds,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function f1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return R0;case"quaternion":return Is;case"bool":case"boolean":return js;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function p1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f1(n.type);if(n.times===void 0){const t=[],i=[];w0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class m1{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const g1=new m1;class $s{constructor(e){this.manager=e!==void 0?e:g1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$s.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class x1 extends Error{constructor(e,t){super(e),this.response=t}}class C0 extends $s{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:r});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ki[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){E();function E(){h.read().then(({done:M,value:A})=>{if(M)p.close();else{_+=A.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,L=u.length;T<L;T++){const F=u[T];F.onProgress&&F.onProgress(C)}p.enqueue(A),E()}},M=>{p.error(M)})}}});return new Response(m)}else throw new x1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Xi.add(`file:${e}`,l);const u=ki[e];delete ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ki[e];if(u===void 0)throw this.manager.itemError(e),l;delete ki[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ms=new WeakMap;class _1 extends $s{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ms.get(a);h===void 0&&(h=[],ms.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=ka("img");function c(){u(),t&&t(this);const h=ms.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}ms.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Xi.remove(`image:${e}`);const d=ms.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class L0 extends $s{constructor(e){super(e)}load(e,t,i,r){const s=new Wt,a=new _1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class pc extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class v1 extends pc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gl=new Ge,gf=new N,xf=new N;class xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y1 extends xh{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Cs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class b1 extends pc{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new y1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _f=new Ge,va=new N,xl=new N;class M1 extends xh{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),xl.copy(i.position),xl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xl),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),_f.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f,i.coordinateSystem,i.reversedDepth)}}class S1 extends pc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new M1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _h extends b0{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E1 extends xh{constructor(){super(new _h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends pc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new E1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ca{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const _l=new WeakMap;class T1 extends $s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Xi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(_l.has(a)===!0)r&&r(_l.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),_l.set(c,l),Xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class A1 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yh="\\[\\]\\.:\\/",w1=new RegExp("["+yh+"]","g"),bh="[^"+yh+"]",R1="[^"+yh.replace("\\.","")+"]",C1=/((?:WC+[\/:])*)/.source.replace("WC",bh),L1=/(WCOD+)?/.source.replace("WCOD",R1),P1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),I1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),D1=new RegExp("^"+C1+L1+P1+I1+"$"),N1=["material","materials","bones","map"];class U1{constructor(e,t,i){const r=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w1,"")}static parseTrackName(e){const t=D1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);N1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=i(o.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=U1;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function vf(n,e,t,i){const r=F1(i);switch(t){case l0:return n*e;case sh:return n*e/r.components*r.byteLength;case ah:return n*e/r.components*r.byteLength;case oh:return n*e*2/r.components*r.byteLength;case ch:return n*e*2/r.components*r.byteLength;case u0:return n*e*3/r.components*r.byteLength;case Yn:return n*e*4/r.components*r.byteLength;case lh:return n*e*4/r.components*r.byteLength;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:case Jl:return Math.max(n,16)*Math.max(e,8)/4;case Kl:case Zl:return Math.max(n,8)*Math.max(e,8)/2;case Ql:case eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gu:case xu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vu:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bu:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F1(n){switch(n){case Si:case s0:return{byteLength:1,components:1};case Da:case a0:case qs:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case Hr:case nh:case ii:return{byteLength:4,components:1};case o0:case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);function P0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function O1(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var B1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Z1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,e3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,l3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p3="gl_FragColor = linearToOutputTexel( gl_FragColor );",m3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,v3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,B3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:B1,alphahash_pars_fragment:k1,alphamap_fragment:V1,alphamap_pars_fragment:z1,alphatest_fragment:G1,alphatest_pars_fragment:H1,aomap_fragment:W1,aomap_pars_fragment:X1,batching_pars_vertex:q1,batching_vertex:Y1,begin_vertex:j1,beginnormal_vertex:K1,bsdfs:$1,iridescence_fragment:Z1,bumpmap_pars_fragment:J1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:e3,clipping_planes_pars_vertex:t3,clipping_planes_vertex:n3,color_fragment:i3,color_pars_fragment:r3,color_pars_vertex:s3,color_vertex:a3,common:o3,cube_uv_reflection_fragment:c3,defaultnormal_vertex:l3,displacementmap_pars_vertex:u3,displacementmap_vertex:h3,emissivemap_fragment:d3,emissivemap_pars_fragment:f3,colorspace_fragment:p3,colorspace_pars_fragment:m3,envmap_fragment:g3,envmap_common_pars_fragment:x3,envmap_pars_fragment:_3,envmap_pars_vertex:v3,envmap_physical_pars_fragment:L3,envmap_vertex:y3,fog_vertex:b3,fog_pars_vertex:M3,fog_fragment:S3,fog_pars_fragment:E3,gradientmap_pars_fragment:T3,lightmap_pars_fragment:A3,lights_lambert_fragment:w3,lights_lambert_pars_fragment:R3,lights_pars_begin:C3,lights_toon_fragment:P3,lights_toon_pars_fragment:I3,lights_phong_fragment:D3,lights_phong_pars_fragment:N3,lights_physical_fragment:U3,lights_physical_pars_fragment:F3,lights_fragment_begin:O3,lights_fragment_maps:B3,lights_fragment_end:k3,logdepthbuf_fragment:V3,logdepthbuf_pars_fragment:z3,logdepthbuf_pars_vertex:G3,logdepthbuf_vertex:H3,map_fragment:W3,map_pars_fragment:X3,map_particle_fragment:q3,map_particle_pars_fragment:Y3,metalnessmap_fragment:j3,metalnessmap_pars_fragment:K3,morphinstance_vertex:$3,morphcolor_vertex:Z3,morphnormal_vertex:J3,morphtarget_pars_vertex:Q3,morphtarget_vertex:e2,normal_fragment_begin:t2,normal_fragment_maps:n2,normal_pars_fragment:i2,normal_pars_vertex:r2,normal_vertex:s2,normalmap_pars_fragment:a2,clearcoat_normal_fragment_begin:o2,clearcoat_normal_fragment_maps:c2,clearcoat_pars_fragment:l2,iridescence_pars_fragment:u2,opaque_fragment:h2,packing:d2,premultiplied_alpha_fragment:f2,project_vertex:p2,dithering_fragment:m2,dithering_pars_fragment:g2,roughnessmap_fragment:x2,roughnessmap_pars_fragment:_2,shadowmap_pars_fragment:v2,shadowmap_pars_vertex:y2,shadowmap_vertex:b2,shadowmask_pars_fragment:M2,skinbase_vertex:S2,skinning_pars_vertex:E2,skinning_vertex:T2,skinnormal_vertex:A2,specularmap_fragment:w2,specularmap_pars_fragment:R2,tonemapping_fragment:C2,tonemapping_pars_fragment:L2,transmission_fragment:P2,transmission_pars_fragment:I2,uv_pars_fragment:D2,uv_pars_vertex:N2,uv_vertex:U2,worldpos_vertex:F2,background_vert:O2,background_frag:B2,backgroundCube_vert:k2,backgroundCube_frag:V2,cube_vert:z2,cube_frag:G2,depth_vert:H2,depth_frag:W2,distanceRGBA_vert:X2,distanceRGBA_frag:q2,equirect_vert:Y2,equirect_frag:j2,linedashed_vert:K2,linedashed_frag:$2,meshbasic_vert:Z2,meshbasic_frag:J2,meshlambert_vert:Q2,meshlambert_frag:ev,meshmatcap_vert:tv,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:rv,meshphong_vert:sv,meshphong_frag:av,meshphysical_vert:ov,meshphysical_frag:cv,meshtoon_vert:lv,meshtoon_frag:uv,points_vert:hv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},oe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},mi={basic:{uniforms:fn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:fn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:fn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:fn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:fn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:fn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:fn([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:fn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:fn([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:fn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:fn([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:fn([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:fn([oe.lights,oe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};mi.physical={uniforms:fn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const No={r:0,b:0,g:0},Cr=new ai,xv=new Ge;function _v(n,e,t,i,r,s,a){const o=new Ue(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let A=M.isScene===!0?M.background:null;return A&&A.isTexture&&(A=(M.backgroundBlurriness>0?t:e).get(A)),A}function _(M){let A=!1;const C=g(M);C===null?p(o,c):C&&C.isColor&&(p(C,1),A=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,A){const C=g(A);C&&(C.isCubeTexture||C.mapping===dc)?(u===void 0&&(u=new Sn(new $a(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ls(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cr.copy(A.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Cr)),u.material.toneMapped=et.getTransfer(C.colorSpace)!==dt,(h!==C||d!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Sn(new Za(2,2),new $i({name:"BackgroundMaterial",uniforms:Ls(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=et.getTransfer(C.colorSpace)!==dt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(No,y0(n)),i.buffers.color.setClear(No.r,No.g,No.b,A,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),c=A,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m,dispose:E}}function vv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,P,V,G,j){let X=!1;const K=h(G,V,P);s!==K&&(s=K,l(s.object)),X=f(y,G,V,j),X&&g(y,G,V,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,A(y,P,V,G),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,P,V){const G=V.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let X=j[P.id];X===void 0&&(X={},j[P.id]=X);let K=X[G];return K===void 0&&(K=d(c()),X[G]=K),K}function d(y){const P=[],V=[],G=[];for(let j=0;j<t;j++)P[j]=0,V[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:G,object:y,attributes:{},index:null}}function f(y,P,V,G){const j=s.attributes,X=P.attributes;let K=0;const Q=V.getAttributes();for(const H in Q)if(Q[H].location>=0){const ae=j[H];let Re=X[H];if(Re===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),ae===void 0||ae.attribute!==Re||Re&&ae.data!==Re.data)return!0;K++}return s.attributesNum!==K||s.index!==G}function g(y,P,V,G){const j={},X=P.attributes;let K=0;const Q=V.getAttributes();for(const H in Q)if(Q[H].location>=0){let ae=X[H];ae===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const Re={};Re.attribute=ae,ae&&ae.data&&(Re.data=ae.data),j[H]=Re,K++}s.attributes=j,s.attributesNum=K,s.index=G}function _(){const y=s.newAttributes;for(let P=0,V=y.length;P<V;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const V=s.newAttributes,G=s.enabledAttributes,j=s.attributeDivisors;V[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),j[y]!==P&&(n.vertexAttribDivisor(y,P),j[y]=P)}function E(){const y=s.newAttributes,P=s.enabledAttributes;for(let V=0,G=P.length;V<G;V++)P[V]!==y[V]&&(n.disableVertexAttribArray(V),P[V]=0)}function M(y,P,V,G,j,X,K){K===!0?n.vertexAttribIPointer(y,P,V,j,X):n.vertexAttribPointer(y,P,V,G,j,X)}function A(y,P,V,G){_();const j=G.attributes,X=V.getAttributes(),K=P.defaultAttributeValues;for(const Q in X){const H=X[Q];if(H.location>=0){let ie=j[Q];if(ie===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const ae=ie.normalized,Re=ie.itemSize,Qe=e.get(ie);if(Qe===void 0)continue;const lt=Qe.buffer,xt=Qe.type,_t=Qe.bytesPerElement,q=xt===n.INT||xt===n.UNSIGNED_INT||ie.gpuType===nh;if(ie.isInterleavedBufferAttribute){const Z=ie.data,pe=Z.stride,Ve=ie.offset;if(Z.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)p(H.location+Te,Z.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Te=0;Te<H.locationSize;Te++)m(H.location+Te);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Te=0;Te<H.locationSize;Te++)M(H.location+Te,Re/H.locationSize,xt,ae,pe*_t,(Ve+Re/H.locationSize*Te)*_t,q)}else{if(ie.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,ie.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Z=0;Z<H.locationSize;Z++)M(H.location+Z,Re/H.locationSize,xt,ae,Re*_t,Re/H.locationSize*Z*_t,q)}}else if(K!==void 0){const ae=K[Q];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(H.location,ae);break;case 3:n.vertexAttrib3fv(H.location,ae);break;case 4:n.vertexAttrib4fv(H.location,ae);break;default:n.vertexAttrib1fv(H.location,ae)}}}}E()}function C(){F();for(const y in i){const P=i[y];for(const V in P){const G=P[V];for(const j in G)u(G[j].object),delete G[j];delete P[V]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const V in P){const G=P[V];for(const j in G)u(G[j].object),delete G[j];delete P[V]}delete i[y.id]}function L(y){for(const P in i){const V=i[P];if(V[y.id]===void 0)continue;const G=V[y.id];for(const j in G)u(G[j].object),delete G[j];delete V[y.id]}}function F(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function yv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function bv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Yn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const F=L===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Si&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ii&&!F)}function c(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ee("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:C,maxSamples:T}}function Mv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Dr,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const E=s?0:i,M=E*4;let A=p.clippingState||null;c.value=A,A=u(g,d,M,f);for(let C=0;C!==M;++C)A[C]=t[C];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,A=f;M!==_;++M,A+=4)a.copy(h[M]).applyMatrix4(E,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sv(n){let e=new WeakMap;function t(a,o){return o===Yl?a.mapping=ws:o===jl&&(a.mapping=Rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yl||o===jl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new G_(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const fr=4,yf=[.125,.215,.35,.446,.526,.582],Ur=20,Ev=256,ya=new _h,bf=new Ue;let vl=null,yl=0,bl=0,Ml=!1;const Tv=new N;class Mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Tv}=s;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,bl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:qs,format:Yn,colorSpace:gn,depthBuffer:!1},r=Sf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Av(s)),this._blurMaterial=Rv(s,e,t),this._ggxMaterial=wv(s,e,t)}return r}_compileMaterial(e){const t=new Sn(new Mn,e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,r,s){const c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(bf),h.toneMapping=pr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new $a,new Wi({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(bf),p=!0);for(let M=0;M<6;M++){const A=M%3;A===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):A===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const C=this._cubeSize;gs(r,A*C,M>2?C:0,C,C),h.setRenderTarget(r),p&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ws||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;gs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=.05+l*.95,f=h*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-fr?i-g+fr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,gs(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,ya),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,gs(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,ya)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ur-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ur;m>Ur&&Ee(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let E=0;for(let L=0;L<Ur;++L){const F=L/_,b=Math.exp(-F*F/2);p.push(b),L===0?E+=b:L<m&&(E+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const A=this._sizeLods[r],C=3*A*(r>M-fr?r-M+fr:0),T=4*(this._cubeSize-A);gs(t,C,T,3*A,2*A),c.setRenderTarget(t),c.render(h,ya)}}function Av(n){const e=[],t=[],i=[];let r=n;const s=n-fr+1+yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-fr?c=yf[a-n+fr-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),M=new Float32Array(m*g*f),A=new Float32Array(p*g*f);for(let T=0;T<f;T++){const L=T%3*2/3-1,F=T>2?0:-1,b=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];E.set(b,_*g*T),M.set(d,m*g*T);const y=[T,T,T,T,T,T];A.set(y,p*g*T)}const C=new Mn;C.setAttribute("position",new Qt(E,_)),C.setAttribute("uv",new Qt(M,m)),C.setAttribute("faceIndex",new Qt(A,p)),i.push(new Sn(C,null)),r>fr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Sf(n,e,t){const i=new Wr(n,e,t);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wv(n,e,t){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Rv(n,e,t){const i=new Float32Array(Ur),r=new N(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ef(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Tf(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yl||c===jl,u=c===ws||c===Rs;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Mf(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Mf(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Lv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Va("WebGLRenderer: "+i+" extension not supported."),r}}}function Pv(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let M=0,A=E.length;M<A;M+=3){const C=E[M+0],T=E[M+1],L=E[M+2];d.push(C,T,T,L,L,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,A=E.length/3-1;M<A;M+=3){const C=M+0,T=M+1,L=M+2;d.push(C,T,T,L,L,C)}}else return;const m=new(p0(d)?v0:_0)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Iv(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Dv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Nv(n,e,t){const i=new WeakMap,r=new at;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),m===!0&&(A=3);let C=o.attributes.position.count*A,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*T*4*h),F=new m0(L,C,T,h);F.type=ii,F.needsUpdate=!0;const b=A*4;for(let P=0;P<h;P++){const V=p[P],G=E[P],j=M[P],X=C*T*4*P;for(let K=0;K<V.count;K++){const Q=K*b;g===!0&&(r.fromBufferAttribute(V,K),L[X+Q+0]=r.x,L[X+Q+1]=r.y,L[X+Q+2]=r.z,L[X+Q+3]=0),_===!0&&(r.fromBufferAttribute(G,K),L[X+Q+4]=r.x,L[X+Q+5]=r.y,L[X+Q+6]=r.z,L[X+Q+7]=0),m===!0&&(r.fromBufferAttribute(j,K),L[X+Q+8]=r.x,L[X+Q+9]=r.y,L[X+Q+10]=r.z,L[X+Q+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:F,size:new Je(C,T)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Uv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const I0=new Wt,Af=new T0(1,1),D0=new m0,N0=new T_,U0=new M0,wf=[],Rf=[],Cf=new Float32Array(16),Lf=new Float32Array(9),Pf=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gc(n,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function Vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;Pf.set(i),n.uniformMatrix2fv(this.addr,!1,Pf),jt(t,i)}}function zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;Lf.set(i),n.uniformMatrix3fv(this.addr,!1,Lf),jt(t,i)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,i))return;Cf.set(i),n.uniformMatrix4fv(this.addr,!1,Cf),jt(t,i)}}function Hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function Yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function Zv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Af.compareFunction=f0,s=Af):s=I0,t.setTexture2D(e||s,r)}function Jv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||N0,r)}function Qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||U0,r)}function ey(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||D0,r)}function ty(n){switch(n){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return kv;case 35674:return Vv;case 35675:return zv;case 35676:return Gv;case 5124:case 35670:return Hv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return jv;case 36295:return Kv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ey}}function ny(n,e){n.uniform1fv(this.addr,e)}function iy(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function ry(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function sy(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function ay(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oy(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cy(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ly(n,e){n.uniform1iv(this.addr,e)}function uy(n,e){n.uniform2iv(this.addr,e)}function hy(n,e){n.uniform3iv(this.addr,e)}function dy(n,e){n.uniform4iv(this.addr,e)}function fy(n,e){n.uniform1uiv(this.addr,e)}function py(n,e){n.uniform2uiv(this.addr,e)}function my(n,e){n.uniform3uiv(this.addr,e)}function gy(n,e){n.uniform4uiv(this.addr,e)}function xy(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||I0,s[a])}function _y(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||N0,s[a])}function vy(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||U0,s[a])}function yy(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||D0,s[a])}function by(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return ry;case 35666:return sy;case 35674:return ay;case 35675:return oy;case 35676:return cy;case 5124:case 35670:return ly;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return yy}}class My{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ty(t.type)}}class Sy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=by(t.type)}}class Ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function If(n,e){n.seq.push(e),n.map[e.id]=e}function Ty(n,e,t){const i=n.name,r=i.length;for(Sl.lastIndex=0;;){const s=Sl.exec(i),a=Sl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){If(t,l===void 0?new My(o,n,e):new Sy(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Ey(o),If(t,h)),t=h}}}class jo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ty(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Df(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ay=37297;let wy=0;function Ry(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Nf=new ze;function Cy(n){et._getMatrix(Nf,et.workingColorSpace,n);const e=`mat3( ${Nf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ec:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Uf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ry(n.getShaderSource(e),o)}else return s}function Ly(n,e){const t=Cy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Py(n,e){let t;switch(e){case Ox:t="Linear";break;case Bx:t="Reinhard";break;case kx:t="Cineon";break;case n0:t="ACESFilmic";break;case zx:t="AgX";break;case Gx:t="Neutral";break;case Vx:t="Custom";break;default:Ee("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new N;function Iy(){et.getLuminanceCoefficients(Uo);const n=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function Ny(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Uy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ea(n){return n!==""}function Ff(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(Fy,By)}const Oy=new Map;function By(n,e){let t=He[e];if(t===void 0){const i=Oy.get(e);if(i!==void 0)t=He[i],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}const ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(n){return n.replace(ky,Vy)}function Vy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===e0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case Rs:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function Wy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case t0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ux:e="ENVMAP_BLENDING_MIX";break;case Fx:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=zy(t),l=Gy(t),u=Hy(t),h=Wy(t),d=Xy(t),f=Dy(t),g=Ny(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?He.tonemapping_pars_fragment:"",t.toneMapping!==pr?Py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=wu(a),a=Ff(a,t),a=Of(a,t),o=wu(o),o=Ff(o,t),o=Of(o,t),a=Bf(a),o=Bf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=E+m+a,A=E+p+o,C=Df(r,r.VERTEX_SHADER,M),T=Df(r,r.FRAGMENT_SHADER,A);r.attachShader(_,C),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(P){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(C)||"",j=r.getShaderInfoLog(T)||"",X=V.trim(),K=G.trim(),Q=j.trim();let H=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,T);else{const ae=Uf(r,C,"vertex"),Re=Uf(r,T,"fragment");Xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+ae+`
`+Re)}else X!==""?Ee("WebGLProgram: Program Info Log:",X):(K===""||Q==="")&&(ie=!1);ie&&(P.diagnostics={runnable:H,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(C),r.deleteShader(T),F=new jo(r,_),b=Uy(r,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Ay)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=T,this}let Yy=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ky(e),t.set(e,i)),i}}class Ky{constructor(e){this.id=Yy++,this.code=e,this.usedTimes=0}}function $y(n,e,t,i,r,s,a){const o=new g0,c=new jy,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,V,G){const j=V.fog,X=G.geometry,K=b.isMeshStandardMaterial?V.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),H=Q&&Q.mapping===dc?Q.image.height:null,ie=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&Ee("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Re=ae!==void 0?ae.length:0;let Qe=0;X.morphAttributes.position!==void 0&&(Qe=1),X.morphAttributes.normal!==void 0&&(Qe=2),X.morphAttributes.color!==void 0&&(Qe=3);let lt,xt,_t,q;if(ie){const ut=mi[ie];lt=ut.vertexShader,xt=ut.fragmentShader}else lt=b.vertexShader,xt=b.fragmentShader,c.update(b),_t=c.getVertexShaderID(b),q=c.getFragmentShaderID(b);const Z=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ve=G.isInstancedMesh===!0,Te=G.isBatchedMesh===!0,je=!!b.map,en=!!b.matcap,We=!!Q,bt=!!b.aoMap,w=!!b.lightMap,Ke=!!b.bumpMap,$e=!!b.normalMap,vt=!!b.displacementMap,xe=!!b.emissiveMap,wt=!!b.metalnessMap,we=!!b.roughnessMap,ke=b.anisotropy>0,S=b.clearcoat>0,x=b.dispersion>0,U=b.iridescence>0,W=b.sheen>0,$=b.transmission>0,z=ke&&!!b.anisotropyMap,Me=S&&!!b.clearcoatMap,ce=S&&!!b.clearcoatNormalMap,Ce=S&&!!b.clearcoatRoughnessMap,ye=U&&!!b.iridescenceMap,J=U&&!!b.iridescenceThicknessMap,ne=W&&!!b.sheenColorMap,Ne=W&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,he=!!b.specularColorMap,Oe=!!b.specularIntensityMap,R=$&&!!b.transmissionMap,le=$&&!!b.thicknessMap,re=!!b.gradientMap,se=!!b.alphaMap,ee=b.alphaTest>0,Y=!!b.alphaHash,me=!!b.extensions;let Be=pr;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Be=n.toneMapping);const yt={shaderID:ie,shaderType:b.type,shaderName:b.name,vertexShader:lt,fragmentShader:xt,defines:b.defines,customVertexShaderID:_t,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Te,batchingColor:Te&&G._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&G.instanceColor!==null,instancingMorph:Ve&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:gn,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:en,envMap:We,envMapMode:We&&Q.mapping,envMapCubeUVHeight:H,aoMap:bt,lightMap:w,bumpMap:Ke,normalMap:$e,displacementMap:d&&vt,emissiveMap:xe,normalMapObjectSpace:$e&&b.normalMapType===jx,normalMapTangentSpace:$e&&b.normalMapType===d0,metalnessMap:wt,roughnessMap:we,anisotropy:ke,anisotropyMap:z,clearcoat:S,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:J,sheen:W,sheenColorMap:ne,sheenRoughnessMap:Ne,specularMap:Ie,specularColorMap:he,specularIntensityMap:Oe,transmission:$,transmissionMap:R,thicknessMap:le,gradientMap:re,opaque:b.transparent===!1&&b.blending===bs&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:ee,alphaHash:Y,combine:b.combine,mapUv:je&&_(b.map.channel),aoMapUv:bt&&_(b.aoMap.channel),lightMapUv:w&&_(b.lightMap.channel),bumpMapUv:Ke&&_(b.bumpMap.channel),normalMapUv:$e&&_(b.normalMap.channel),displacementMapUv:vt&&_(b.displacementMap.channel),emissiveMapUv:xe&&_(b.emissiveMap.channel),metalnessMapUv:wt&&_(b.metalnessMap.channel),roughnessMapUv:we&&_(b.roughnessMap.channel),anisotropyMapUv:z&&_(b.anisotropyMap.channel),clearcoatMapUv:Me&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(b.sheenRoughnessMap.channel),specularMapUv:Ie&&_(b.specularMap.channel),specularColorMapUv:he&&_(b.specularColorMap.channel),specularIntensityMapUv:Oe&&_(b.specularIntensityMap.channel),transmissionMapUv:R&&_(b.transmissionMap.channel),thicknessMapUv:le&&_(b.thicknessMap.channel),alphaMapUv:se&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($e||ke),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(je||se),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:G.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:me&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&b.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(E(y,b),M(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const y=g[b.type];let P;if(y){const V=mi[y];P=B_.clone(V.uniforms)}else P=b.uniforms;return P}function C(b,y){let P;for(let V=0,G=u.length;V<G;V++){const j=u[V];if(j.cacheKey===y){P=j,++P.usedTimes;break}}return P===void 0&&(P=new qy(n,y,b,s),u.push(P)),P}function T(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function L(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:C,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:F}}function Zy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Jy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Jy),i.length>1&&i.sort(d||Vf),r.length>1&&r.sort(d||Vf)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Qy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new zf,n.set(i,[a])):r>=s.length?(a=new zf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ue};break;case"SpotLight":t={position:new N,direction:new N,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n){const e=new eb,t=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new Ge,a=new Ge;function o(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,M=0,A=0,C=0,T=0,L=0;l.sort(ib);for(let b=0,y=l.length;b<y;b++){const P=l[b],V=P.color,G=P.intensity,j=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*G,h+=V.g*G,d+=V.b*G;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],G);L++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=P.shadow.matrix,E++}i.directional[f]=K,f++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(V).multiplyScalar(G),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[_]=K;const Q=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=Q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=X,A++}_++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(V).multiplyScalar(G),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=K,g++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(G),K.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==M||F.numSpotShadows!==A||F.numSpotMaps!==C||F.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=M,F.numSpotShadows=A,F.numSpotMaps=C,F.numLightProbes=L,i.version=nb++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const M=l[p];if(M.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(M.isSpotLight){const A=i.spot[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Gf(n){const e=new rb(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function sb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gf(n),e.set(r,[o])):s>=a.length?(o=new Gf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ob=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cb(n,e,t){let i=new mh;const r=new Je,s=new Je,a=new at,o=new r1({depthPacking:Yx}),c=new s1,l={},u=t.maxTextureSize,h={[Ki]:bn,[bn]:Ki,[yn]:yn},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:ab,fragmentShader:ob}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e0;let p=this.type;this.render=function(T,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),V=n.state;V.setBlending(qi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=p!==zi&&this.type===zi,j=p===zi&&this.type!==zi;for(let X=0,K=T.length;X<K;X++){const Q=T[X],H=Q.shadow;if(H===void 0){Ee("WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ie=H.getFrameExtents();if(r.multiply(ie),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,H.mapSize.y=s.y)),H.map===null||G===!0||j===!0){const Re=this.type!==zi?{minFilter:mn,magFilter:mn}:{};H.map!==null&&H.map.dispose(),H.map=new Wr(r.x,r.y,Re),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ae=H.getViewportCount();for(let Re=0;Re<ae;Re++){const Qe=H.getViewport(Re);a.set(s.x*Qe.x,s.y*Qe.y,s.x*Qe.z,s.y*Qe.w),V.viewport(a),H.updateMatrices(Q,Re),i=H.getFrustum(),A(L,F,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&E(H,F),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,P)};function E(T,L){const F=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,F,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,F,f,_,null)}function M(T,L,F,b){let y=null;const P=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=F.isPointLight===!0?c:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=y.uuid,G=L.uuid;let j=l[V];j===void 0&&(j={},l[V]=j);let X=j[G];X===void 0&&(X=y.clone(),j[G]=X,L.addEventListener("dispose",C)),y=X}if(y.visible=L.visible,y.wireframe=L.wireframe,b===zi?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:h[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=n.properties.get(y);V.light=F}return y}function A(T,L,F,b,y){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===zi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const G=e.update(T),j=T.material;if(Array.isArray(j)){const X=G.groups;for(let K=0,Q=X.length;K<Q;K++){const H=X[K],ie=j[H.materialIndex];if(ie&&ie.visible){const ae=M(T,ie,b,y);T.onBeforeShadow(n,T,L,F,G,ae,H),n.renderBufferDirect(F,null,G,ae,T,H),T.onAfterShadow(n,T,L,F,G,ae,H)}}}else if(j.visible){const X=M(T,j,b,y);T.onBeforeShadow(n,T,L,F,G,X,null),n.renderBufferDirect(F,null,G,X,T,null),T.onAfterShadow(n,T,L,F,G,X,null)}}const V=T.children;for(let G=0,j=V.length;G<j;G++)A(V[G],L,F,b,y)}function C(T){T.target.removeEventListener("dispose",C);for(const F in l){const b=l[F],y=T.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const lb={[Vl]:zl,[Gl]:Xl,[Hl]:ql,[As]:Wl,[zl]:Vl,[Xl]:Gl,[ql]:Hl,[Wl]:As};function ub(n,e){function t(){let R=!1;const le=new at;let re=null;const se=new at(0,0,0,0);return{setMask:function(ee){re!==ee&&!R&&(n.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){R=ee},setClear:function(ee,Y,me,Be,yt){yt===!0&&(ee*=Be,Y*=Be,me*=Be),le.set(ee,Y,me,Be),se.equals(le)===!1&&(n.clearColor(ee,Y,me,Be),se.copy(le))},reset:function(){R=!1,re=null,se.set(-1,0,0,0)}}}function i(){let R=!1,le=!1,re=null,se=null,ee=null;return{setReversed:function(Y){if(le!==Y){const me=e.get("EXT_clip_control");Y?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),le=Y;const Be=ee;ee=null,this.setClear(Be)}},getReversed:function(){return le},setTest:function(Y){Y?Z(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(Y){re!==Y&&!R&&(n.depthMask(Y),re=Y)},setFunc:function(Y){if(le&&(Y=lb[Y]),se!==Y){switch(Y){case Vl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case Gl:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Wl:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case ql:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Y}},setLocked:function(Y){R=Y},setClear:function(Y){ee!==Y&&(le&&(Y=1-Y),n.clearDepth(Y),ee=Y)},reset:function(){R=!1,re=null,se=null,ee=null,le=!1}}}function r(){let R=!1,le=null,re=null,se=null,ee=null,Y=null,me=null,Be=null,yt=null;return{setTest:function(ut){R||(ut?Z(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ut){le!==ut&&!R&&(n.stencilMask(ut),le=ut)},setFunc:function(ut,hi,Zn){(re!==ut||se!==hi||ee!==Zn)&&(n.stencilFunc(ut,hi,Zn),re=ut,se=hi,ee=Zn)},setOp:function(ut,hi,Zn){(Y!==ut||me!==hi||Be!==Zn)&&(n.stencilOp(ut,hi,Zn),Y=ut,me=hi,Be=Zn)},setLocked:function(ut){R=ut},setClear:function(ut){yt!==ut&&(n.clearStencil(ut),yt=ut)},reset:function(){R=!1,le=null,re=null,se=null,ee=null,Y=null,me=null,Be=null,yt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,M=null,A=null,C=null,T=null,L=new Ue(0,0,0),F=0,b=!1,y=null,P=null,V=null,G=null,j=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=Q>=2);let ie=null,ae={};const Re=n.getParameter(n.SCISSOR_BOX),Qe=n.getParameter(n.VIEWPORT),lt=new at().fromArray(Re),xt=new at().fromArray(Qe);function _t(R,le,re,se){const ee=new Uint8Array(4),Y=n.createTexture();n.bindTexture(R,Y),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<re;me++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(le+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return Y}const q={};q[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(As),Ke(!1),$e(Ad),Z(n.CULL_FACE),bt(qi);function Z(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function pe(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Ve(R,le){return h[R]!==le?(n.bindFramebuffer(R,le),h[R]=le,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Te(R,le){let re=f,se=!1;if(R){re=d.get(le),re===void 0&&(re=[],d.set(le,re));const ee=R.textures;if(re.length!==ee.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,me=ee.length;Y<me;Y++)re[Y]=n.COLOR_ATTACHMENT0+Y;re.length=ee.length,se=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,se=!0);se&&n.drawBuffers(re)}function je(R){return g!==R?(n.useProgram(R),g=R,!0):!1}const en={[Nr]:n.FUNC_ADD,[_x]:n.FUNC_SUBTRACT,[vx]:n.FUNC_REVERSE_SUBTRACT};en[yx]=n.MIN,en[bx]=n.MAX;const We={[Mx]:n.ZERO,[Sx]:n.ONE,[Ex]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[Lx]:n.SRC_ALPHA_SATURATE,[Rx]:n.DST_COLOR,[Ax]:n.DST_ALPHA,[Tx]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[Cx]:n.ONE_MINUS_DST_COLOR,[wx]:n.ONE_MINUS_DST_ALPHA,[Px]:n.CONSTANT_COLOR,[Ix]:n.ONE_MINUS_CONSTANT_COLOR,[Dx]:n.CONSTANT_ALPHA,[Nx]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(R,le,re,se,ee,Y,me,Be,yt,ut){if(R===qi){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),R!==xx){if(R!==m||ut!==b){if((p!==Nr||A!==Nr)&&(n.blendEquation(n.FUNC_ADD),p=Nr,A=Nr),ut)switch(R){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.ONE,n.ONE);break;case Rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",R);break}else switch(R){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rd:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cd:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",R);break}E=null,M=null,C=null,T=null,L.set(0,0,0),F=0,m=R,b=ut}return}ee=ee||le,Y=Y||re,me=me||se,(le!==p||ee!==A)&&(n.blendEquationSeparate(en[le],en[ee]),p=le,A=ee),(re!==E||se!==M||Y!==C||me!==T)&&(n.blendFuncSeparate(We[re],We[se],We[Y],We[me]),E=re,M=se,C=Y,T=me),(Be.equals(L)===!1||yt!==F)&&(n.blendColor(Be.r,Be.g,Be.b,yt),L.copy(Be),F=yt),m=R,b=!1}function w(R,le){R.side===yn?pe(n.CULL_FACE):Z(n.CULL_FACE);let re=R.side===bn;le&&(re=!re),Ke(re),R.blending===bs&&R.transparent===!1?bt(qi):bt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const se=R.stencilWrite;o.setTest(se),se&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),xe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(R){y!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),y=R)}function $e(R){R!==px?(Z(n.CULL_FACE),R!==P&&(R===Ad?n.cullFace(n.BACK):R===mx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),P=R}function vt(R){R!==V&&(K&&n.lineWidth(R),V=R)}function xe(R,le,re){R?(Z(n.POLYGON_OFFSET_FILL),(G!==le||j!==re)&&(n.polygonOffset(le,re),G=le,j=re)):pe(n.POLYGON_OFFSET_FILL)}function wt(R){R?Z(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function we(R){R===void 0&&(R=n.TEXTURE0+X-1),ie!==R&&(n.activeTexture(R),ie=R)}function ke(R,le,re){re===void 0&&(ie===null?re=n.TEXTURE0+X-1:re=ie);let se=ae[re];se===void 0&&(se={type:void 0,texture:void 0},ae[re]=se),(se.type!==R||se.texture!==le)&&(ie!==re&&(n.activeTexture(re),ie=re),n.bindTexture(R,le||q[R]),se.type=R,se.texture=le)}function S(){const R=ae[ie];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function W(){try{n.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function $(){try{n.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ce(){try{n.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Ce(){try{n.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ye(){try{n.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ne(R){lt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),lt.copy(R))}function Ne(R){xt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),xt.copy(R))}function Ie(R,le){let re=l.get(le);re===void 0&&(re=new WeakMap,l.set(le,re));let se=re.get(R);se===void 0&&(se=n.getUniformBlockIndex(le,R.name),re.set(R,se))}function he(R,le){const se=l.get(le).get(R);c.get(le)!==se&&(n.uniformBlockBinding(le,se,R.__bindingPointIndex),c.set(le,se))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ie=null,ae={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,M=null,A=null,C=null,T=null,L=new Ue(0,0,0),F=0,b=!1,y=null,P=null,V=null,G=null,j=null,lt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:Ve,drawBuffers:Te,useProgram:je,setBlending:bt,setMaterial:w,setFlipSided:Ke,setCullFace:$e,setLineWidth:vt,setPolygonOffset:xe,setScissorTest:wt,activeTexture:we,bindTexture:ke,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:ye,texImage3D:J,updateUBOMapping:Ie,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:Ce,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:z,compressedTexSubImage3D:Me,scissor:ne,viewport:Ne,reset:Oe}}function hb(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return f?new OffscreenCanvas(S,x):ka("canvas")}function _(S,x,U){let W=1;const $=ke(S);if(($.width>U||$.height>U)&&(W=U/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const z=Math.floor(W*$.width),Me=Math.floor(W*$.height);h===void 0&&(h=g(z,Me));const ce=x?g(z,Me):h;return ce.width=z,ce.height=Me,ce.getContext("2d").drawImage(S,0,0,z,Me),Ee("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+z+"x"+Me+")."),ce}else return"data"in S&&Ee("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(S,x,U,W,$=!1){if(S!==null){if(n[S]!==void 0)return n[S];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=x;if(x===n.RED&&(U===n.FLOAT&&(z=n.R32F),U===n.HALF_FLOAT&&(z=n.R16F),U===n.UNSIGNED_BYTE&&(z=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.R8UI),U===n.UNSIGNED_SHORT&&(z=n.R16UI),U===n.UNSIGNED_INT&&(z=n.R32UI),U===n.BYTE&&(z=n.R8I),U===n.SHORT&&(z=n.R16I),U===n.INT&&(z=n.R32I)),x===n.RG&&(U===n.FLOAT&&(z=n.RG32F),U===n.HALF_FLOAT&&(z=n.RG16F),U===n.UNSIGNED_BYTE&&(z=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.RG8UI),U===n.UNSIGNED_SHORT&&(z=n.RG16UI),U===n.UNSIGNED_INT&&(z=n.RG32UI),U===n.BYTE&&(z=n.RG8I),U===n.SHORT&&(z=n.RG16I),U===n.INT&&(z=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.RGB8UI),U===n.UNSIGNED_SHORT&&(z=n.RGB16UI),U===n.UNSIGNED_INT&&(z=n.RGB32UI),U===n.BYTE&&(z=n.RGB8I),U===n.SHORT&&(z=n.RGB16I),U===n.INT&&(z=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),U===n.UNSIGNED_INT&&(z=n.RGBA32UI),U===n.BYTE&&(z=n.RGBA8I),U===n.SHORT&&(z=n.RGBA16I),U===n.INT&&(z=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),x===n.RGBA){const Me=$?ec:et.getTransfer(W);U===n.FLOAT&&(z=n.RGBA32F),U===n.HALF_FLOAT&&(z=n.RGBA16F),U===n.UNSIGNED_BYTE&&(z=Me===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function A(S,x){let U;return S?x===null||x===Hr||x===Na?U=n.DEPTH24_STENCIL8:x===ii?U=n.DEPTH32F_STENCIL8:x===Da&&(U=n.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hr||x===Na?U=n.DEPTH_COMPONENT24:x===ii?U=n.DEPTH_COMPONENT32F:x===Da&&(U=n.DEPTH_COMPONENT16),U}function C(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==mn&&S.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function T(S){const x=S.target;x.removeEventListener("dispose",T),F(x),x.isVideoTexture&&u.delete(x)}function L(S){const x=S.target;x.removeEventListener("dispose",L),y(x)}function F(S){const x=i.get(S);if(x.__webglInit===void 0)return;const U=S.source,W=d.get(U);if(W){const $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(S),Object.keys(W).length===0&&d.delete(U)}i.remove(S)}function b(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const U=S.source,W=d.get(U);delete W[x.__cacheKey],a.memory.textures--}function y(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[W][$]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=S.textures;for(let W=0,$=U.length;W<$;W++){const z=i.get(U[W]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(U[W])}i.remove(S)}let P=0;function V(){P=0}function G(){const S=P;return S>=r.maxTextures&&Ee("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function j(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function X(S,x){const U=i.get(S);if(S.isVideoTexture&&wt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&U.__version!==S.version){const W=S.image;if(W===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,S,x);return}}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function K(S,x){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){q(U,S,x);return}else S.isExternalTexture&&(U.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function Q(S,x){const U=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){q(U,S,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function H(S,x){const U=i.get(S);if(S.version>0&&U.__version!==S.version){Z(U,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const ie={[xr]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Qo]:n.MIRRORED_REPEAT},ae={[mn]:n.NEAREST,[r0]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},Re={[Kx]:n.NEVER,[t_]:n.ALWAYS,[$x]:n.LESS,[f0]:n.LEQUAL,[Zx]:n.EQUAL,[e_]:n.GEQUAL,[Jx]:n.GREATER,[Qx]:n.NOTEQUAL};function Qe(S,x){if(x.type===ii&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===Ho||x.magFilter===Sa||x.magFilter===Hi||x.minFilter===tn||x.minFilter===Ho||x.minFilter===Sa||x.minFilter===Hi)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ie[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ie[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ie[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ae[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mn||x.minFilter!==Sa&&x.minFilter!==Hi||x.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function lt(S,x){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",T));const W=x.source;let $=d.get(W);$===void 0&&($={},d.set(W,$));const z=j(x);if(z!==S.__cacheKey){$[z]===void 0&&($[z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[z].usedTimes++;const Me=$[S.__cacheKey];Me!==void 0&&($[S.__cacheKey].usedTimes--,Me.usedTimes===0&&b(x)),S.__cacheKey=z,S.__webglTexture=$[z].texture}return U}function xt(S,x,U){return Math.floor(Math.floor(S/U)/x)}function _t(S,x,U,W){const z=S.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,W,x.data);else{z.sort((J,ne)=>J.start-ne.start);let Me=0;for(let J=1;J<z.length;J++){const ne=z[Me],Ne=z[J],Ie=ne.start+ne.count,he=xt(Ne.start,x.width,4),Oe=xt(ne.start,x.width,4);Ne.start<=Ie+1&&he===Oe&&xt(Ne.start+Ne.count-1,x.width,4)===he?ne.count=Math.max(ne.count,Ne.start+Ne.count-ne.start):(++Me,z[Me]=Ne)}z.length=Me+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),Ce=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let J=0,ne=z.length;J<ne;J++){const Ne=z[J],Ie=Math.floor(Ne.start/4),he=Math.ceil(Ne.count/4),Oe=Ie%x.width,R=Math.floor(Ie/x.width),le=he,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,Oe,R,le,re,U,W,x.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ce),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function q(S,x,U){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const $=lt(S,x),z=x.source;t.bindTexture(W,S.__webglTexture,n.TEXTURE0+U);const Me=i.get(z);if(z.version!==Me.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const ce=et.getPrimaries(et.workingColorSpace),Ce=x.colorSpace===hr?null:et.getPrimaries(x.colorSpace),ye=x.colorSpace===hr||ce===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let J=_(x.image,!1,r.maxTextureSize);J=we(x,J);const ne=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let Ie=M(x.internalFormat,ne,Ne,x.colorSpace,x.isVideoTexture);Qe(W,x);let he;const Oe=x.mipmaps,R=x.isVideoTexture!==!0,le=Me.__version===void 0||$===!0,re=z.dataReady,se=C(x,J);if(x.isDepthTexture)Ie=A(x.format===Fa,x.type),le&&(R?t.texStorage2D(n.TEXTURE_2D,1,Ie,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ie,J.width,J.height,0,ne,Ne,null));else if(x.isDataTexture)if(Oe.length>0){R&&le&&t.texStorage2D(n.TEXTURE_2D,se,Ie,Oe[0].width,Oe[0].height);for(let ee=0,Y=Oe.length;ee<Y;ee++)he=Oe[ee],R?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,ne,Ne,he.data):t.texImage2D(n.TEXTURE_2D,ee,Ie,he.width,he.height,0,ne,Ne,he.data);x.generateMipmaps=!1}else R?(le&&t.texStorage2D(n.TEXTURE_2D,se,Ie,J.width,J.height),re&&_t(x,J,ne,Ne)):t.texImage2D(n.TEXTURE_2D,0,Ie,J.width,J.height,0,ne,Ne,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){R&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Ie,Oe[0].width,Oe[0].height,J.depth);for(let ee=0,Y=Oe.length;ee<Y;ee++)if(he=Oe[ee],x.format!==Yn)if(ne!==null)if(R){if(re)if(x.layerUpdates.size>0){const me=vf(he.width,he.height,x.format,x.type);for(const Be of x.layerUpdates){const yt=he.data.subarray(Be*me/he.data.BYTES_PER_ELEMENT,(Be+1)*me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Be,he.width,he.height,1,ne,yt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ne,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ie,he.width,he.height,J.depth,0,he.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,J.depth,ne,Ne,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ie,he.width,he.height,J.depth,0,ne,Ne,he.data)}else{R&&le&&t.texStorage2D(n.TEXTURE_2D,se,Ie,Oe[0].width,Oe[0].height);for(let ee=0,Y=Oe.length;ee<Y;ee++)he=Oe[ee],x.format!==Yn?ne!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,ne,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ie,he.width,he.height,0,he.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,ne,Ne,he.data):t.texImage2D(n.TEXTURE_2D,ee,Ie,he.width,he.height,0,ne,Ne,he.data)}else if(x.isDataArrayTexture)if(R){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,Ie,J.width,J.height,J.depth),re)if(x.layerUpdates.size>0){const ee=vf(J.width,J.height,x.format,x.type);for(const Y of x.layerUpdates){const me=J.data.subarray(Y*ee/J.data.BYTES_PER_ELEMENT,(Y+1)*ee/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,ne,Ne,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ne,Ne,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,J.width,J.height,J.depth,0,ne,Ne,J.data);else if(x.isData3DTexture)R?(le&&t.texStorage3D(n.TEXTURE_3D,se,Ie,J.width,J.height,J.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ne,Ne,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,J.width,J.height,J.depth,0,ne,Ne,J.data);else if(x.isFramebufferTexture){if(le)if(R)t.texStorage2D(n.TEXTURE_2D,se,Ie,J.width,J.height);else{let ee=J.width,Y=J.height;for(let me=0;me<se;me++)t.texImage2D(n.TEXTURE_2D,me,Ie,ee,Y,0,ne,Ne,null),ee>>=1,Y>>=1}}else if(Oe.length>0){if(R&&le){const ee=ke(Oe[0]);t.texStorage2D(n.TEXTURE_2D,se,Ie,ee.width,ee.height)}for(let ee=0,Y=Oe.length;ee<Y;ee++)he=Oe[ee],R?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ne,Ne,he):t.texImage2D(n.TEXTURE_2D,ee,Ie,ne,Ne,he);x.generateMipmaps=!1}else if(R){if(le){const ee=ke(J);t.texStorage2D(n.TEXTURE_2D,se,Ie,ee.width,ee.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,Ne,J)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ne,Ne,J);m(x)&&p(W),Me.__version=z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Z(S,x,U){if(x.image.length!==6)return;const W=lt(S,x),$=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const z=i.get($);if($.version!==z.__version||W===!0){t.activeTexture(n.TEXTURE0+U);const Me=et.getPrimaries(et.workingColorSpace),ce=x.colorSpace===hr?null:et.getPrimaries(x.colorSpace),Ce=x.colorSpace===hr||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let Y=0;Y<6;Y++)!ye&&!J?ne[Y]=_(x.image[Y],!0,r.maxCubemapSize):ne[Y]=J?x.image[Y].image:x.image[Y],ne[Y]=we(x,ne[Y]);const Ne=ne[0],Ie=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Oe=M(x.internalFormat,Ie,he,x.colorSpace),R=x.isVideoTexture!==!0,le=z.__version===void 0||W===!0,re=$.dataReady;let se=C(x,Ne);Qe(n.TEXTURE_CUBE_MAP,x);let ee;if(ye){R&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Oe,Ne.width,Ne.height);for(let Y=0;Y<6;Y++){ee=ne[Y].mipmaps;for(let me=0;me<ee.length;me++){const Be=ee[me];x.format!==Yn?Ie!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,Be.width,Be.height,Ie,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,Oe,Be.width,Be.height,0,Be.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,Be.width,Be.height,Ie,he,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,Oe,Be.width,Be.height,0,Ie,he,Be.data)}}}else{if(ee=x.mipmaps,R&&le){ee.length>0&&se++;const Y=ke(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Oe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ne[Y].width,ne[Y].height,Ie,he,ne[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,ne[Y].width,ne[Y].height,0,Ie,he,ne[Y].data);for(let me=0;me<ee.length;me++){const yt=ee[me].image[Y].image;R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,yt.width,yt.height,Ie,he,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,Oe,yt.width,yt.height,0,Ie,he,yt.data)}}else{R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ie,he,ne[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,Ie,he,ne[Y]);for(let me=0;me<ee.length;me++){const Be=ee[me];R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,Ie,he,Be.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,Oe,Ie,he,Be.image[Y])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),z.__version=$.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function pe(S,x,U,W,$,z){const Me=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),Ce=M(U.internalFormat,Me,ce,U.colorSpace),ye=i.get(x),J=i.get(U);if(J.__renderTarget=x,!ye.__hasExternalTextures){const ne=Math.max(1,x.width>>z),Ne=Math.max(1,x.height>>z);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,z,Ce,ne,Ne,x.depth,0,Me,ce,null):t.texImage2D($,z,Ce,ne,Ne,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,$,J.__webglTexture,0,vt(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,$,J.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(S,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,z=A(x.stencilBuffer,$),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=vt(x);xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,z,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,S)}else{const W=x.textures;for(let $=0;$<W.length;$++){const z=W[$],Me=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),Ce=M(z.internalFormat,Me,ce,z.colorSpace),ye=vt(x);U&&xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ce,x.width,x.height):xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Ce,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const $=W.__webglTexture,z=vt(x);if(x.depthTexture.format===Ua)xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===Fa)xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function je(S){const x=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const W=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const W=S.texture.mipmaps;W&&W.length>0?Te(x.__webglFramebuffer[0],S):Te(x.__webglFramebuffer,S)}else if(U){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Ve(x.__webglDepthbuffer[W],S,!1);else{const $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,z)}}else{const W=S.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ve(x.__webglDepthbuffer,S,!1);else{const $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function en(S,x,U){const W=i.get(S);x!==void 0&&pe(W.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&je(S)}function We(S){const x=S.texture,U=i.get(S),W=i.get(x);S.addEventListener("dispose",L);const $=S.textures,z=S.isWebGLCubeRenderTarget===!0,Me=$.length>1;if(Me||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),z){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)U.__webglFramebuffer[ce][Ce]=n.createFramebuffer()}else U.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)U.__webglFramebuffer[ce]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,Ce=$.length;ce<Ce;ce++){const ye=i.get($[ce]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&xe(S)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const Ce=$[ce];U.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const ye=s.convert(Ce.format,Ce.colorSpace),J=s.convert(Ce.type),ne=M(Ce.internalFormat,ye,J,Ce.colorSpace,S.isXRRenderTarget===!0),Ne=vt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ne,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Qe(n.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)pe(U.__webglFramebuffer[ce][Ce],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ce);else pe(U.__webglFramebuffer[ce],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,Ce=$.length;ce<Ce;ce++){const ye=$[ce],J=i.get(ye);let ne=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ne=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,J.__webglTexture),Qe(ne,ye),pe(U.__webglFramebuffer,S,ye,n.COLOR_ATTACHMENT0+ce,ne,0),m(ye)&&p(ne)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),Qe(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)pe(U.__webglFramebuffer[Ce],S,x,n.COLOR_ATTACHMENT0,ce,Ce);else pe(U.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,ce,0);m(x)&&p(ce),t.unbindTexture()}S.depthBuffer&&je(S)}function bt(S){const x=S.textures;for(let U=0,W=x.length;U<W;U++){const $=x[U];if(m($)){const z=E(S),Me=i.get($).__webglTexture;t.bindTexture(z,Me),p(z),t.unbindTexture()}}}const w=[],Ke=[];function $e(S){if(S.samples>0){if(xe(S)===!1){const x=S.textures,U=S.width,W=S.height;let $=n.COLOR_BUFFER_BIT;const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(S),ce=x.length>1;if(ce)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ce=S.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(S.resolveDepthBuffer&&(S.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const J=i.get(x[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,U,W,0,0,U,W,$,n.NEAREST),c===!0&&(w.length=0,Ke.length=0,w.push(n.COLOR_ATTACHMENT0+ye),S.depthBuffer&&S.resolveDepthBuffer===!1&&(w.push(z),Ke.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const J=i.get(x[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function vt(S){return Math.min(r.maxSamples,S.samples)}function xe(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(S){const x=a.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function we(S,x){const U=S.colorSpace,W=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||U!==gn&&U!==hr&&(et.getTransfer(U)===dt?(W!==Yn||$!==Si)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",U)),x}function ke(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=en,this.setupRenderTarget=We,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xe}function db(n,e){function t(i,r=hr){let s;const a=et.getTransfer(r);if(i===Si)return n.UNSIGNED_BYTE;if(i===ih)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===o0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===c0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===s0)return n.BYTE;if(i===a0)return n.SHORT;if(i===Da)return n.UNSIGNED_SHORT;if(i===nh)return n.INT;if(i===Hr)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===qs)return n.HALF_FLOAT;if(i===l0)return n.ALPHA;if(i===u0)return n.RGB;if(i===Yn)return n.RGBA;if(i===Ua)return n.DEPTH_COMPONENT;if(i===Fa)return n.DEPTH_STENCIL;if(i===sh)return n.RED;if(i===ah)return n.RED_INTEGER;if(i===oh)return n.RG;if(i===ch)return n.RG_INTEGER;if(i===lh)return n.RGBA_INTEGER;if(i===Wo||i===Xo||i===qo||i===Yo)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===$l||i===Zl||i===Jl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ql||i===eu)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===cu||i===lu||i===uu||i===hu||i===du||i===fu||i===pu||i===mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===iu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ru)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===su)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ou)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===du)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gu||i===xu||i===_u)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gu)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_u)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===yu||i===bu||i===Mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new A0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $i({vertexShader:fb,fragmentShader:pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends Ys{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new mb,p={},E=t.getContextAttributes();let M=null,A=null;const C=[],T=[],L=new Je;let F=null;const b=new pn;b.viewport=new at;const y=new pn;y.viewport=new at;const P=[b,y],V=new A1;let G=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=C[q];return Z===void 0&&(Z=new hl,C[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=C[q];return Z===void 0&&(Z=new hl,C[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=C[q];return Z===void 0&&(Z=new hl,C[q]=Z),Z.getHandSpace()};function X(q){const Z=T.indexOf(q.inputSource);if(Z===-1)return;const pe=C[Z];pe!==void 0&&(pe.update(q.inputSource,q.frame,l||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let q=0;q<C.length;q++){const Z=T[q];Z!==null&&(T[q]=null,C[q].disconnect(Z))}G=null,j=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(M),f=null,d=null,h=null,r=null,A=null,_t.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),E.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ve=null,Te=null;E.depth&&(Te=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?Fa:Ua,Ve=E.stencil?Na:Hr);const je={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Wr(d.textureWidth,d.textureHeight,{format:Yn,type:Si,depthTexture:new T0(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Wr(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),_t.setContext(r),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(q){for(let Z=0;Z<q.removed.length;Z++){const pe=q.removed[Z],Ve=T.indexOf(pe);Ve>=0&&(T[Ve]=null,C[Ve].disconnect(pe))}for(let Z=0;Z<q.added.length;Z++){const pe=q.added[Z];let Ve=T.indexOf(pe);if(Ve===-1){for(let je=0;je<C.length;je++)if(je>=T.length){T.push(pe),Ve=je;break}else if(T[je]===null){T[je]=pe,Ve=je;break}if(Ve===-1)break}const Te=C[Ve];Te&&Te.connect(pe)}}const H=new N,ie=new N;function ae(q,Z,pe){H.setFromMatrixPosition(Z.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const Ve=H.distanceTo(ie),Te=Z.projectionMatrix.elements,je=pe.projectionMatrix.elements,en=Te[14]/(Te[10]-1),We=Te[14]/(Te[10]+1),bt=(Te[9]+1)/Te[5],w=(Te[9]-1)/Te[5],Ke=(Te[8]-1)/Te[0],$e=(je[8]+1)/je[0],vt=en*Ke,xe=en*$e,wt=Ve/(-Ke+$e),we=wt*-Ke;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ke=en+wt,S=We+wt,x=vt-we,U=xe+(Ve-we),W=bt*We/S*ke,$=w*We/S*ke;q.projectionMatrix.makePerspective(x,U,W,$,ke,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Re(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Z=q.near,pe=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),V.near=y.near=b.near=Z,V.far=y.far=b.far=pe,(G!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),G=V.near,j=V.far),V.layers.mask=q.layers.mask|6,b.layers.mask=V.layers.mask&3,y.layers.mask=V.layers.mask&5;const Ve=q.parent,Te=V.cameras;Re(V,Ve);for(let je=0;je<Te.length;je++)Re(Te[je],Ve);Te.length===2?ae(V,b,y):V.projectionMatrix.copy(b.projectionMatrix),Qe(q,V,Ve)};function Qe(q,Z,pe){pe===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(q){return p[q]};let lt=null;function xt(q,Z){if(u=Z.getViewerPose(l||a),g=Z,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let Ve=!1;pe.length!==V.cameras.length&&(V.cameras.length=0,Ve=!0);for(let We=0;We<pe.length;We++){const bt=pe[We];let w=null;if(f!==null)w=f.getViewport(bt);else{const $e=h.getViewSubImage(d,bt);w=$e.viewport,We===0&&(e.setRenderTargetTextures(A,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(A))}let Ke=P[We];Ke===void 0&&(Ke=new pn,Ke.layers.enable(We),Ke.viewport=new at,P[We]=Ke),Ke.matrix.fromArray(bt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(bt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(w.x,w.y,w.width,w.height),We===0&&(V.matrix.copy(Ke.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ve===!0&&V.cameras.push(Ke)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const We=h.getDepthInformation(pe[0]);We&&We.isValid&&We.texture&&m.init(We,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<pe.length;We++){const bt=pe[We].camera;if(bt){let w=p[bt];w||(w=new A0,p[bt]=w);const Ke=h.getCameraImage(bt);w.sourceTexture=Ke}}}}for(let pe=0;pe<C.length;pe++){const Ve=T[pe],Te=C[pe];Ve!==null&&Te!==void 0&&Te.update(Ve,Z,l||a)}lt&&lt(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const _t=new P0;_t.setAnimationLoop(xt),this.setAnimationLoop=function(q){lt=q},this.dispose=function(){}}}const Lr=new ai,xb=new Ge;function _b(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,y0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,M,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),M=E.envMap,A=E.envMapRotation;M&&(m.envMap.value=M,Lr.copy(A),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Lr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vb(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const A=M.program;i.uniformBlockBinding(E,A)}function l(E,M){let A=r[E.id];A===void 0&&(g(E),A=u(E),r[E.id]=A,E.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(E,C);const T=e.render.frame;s[E.id]!==T&&(d(E),s[E.id]=T)}function u(E){const M=h();E.__bindingPointIndex=M;const A=n.createBuffer(),C=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=r[E.id],A=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,L=A.length;T<L;T++){const F=Array.isArray(A[T])?A[T]:[A[T]];for(let b=0,y=F.length;b<y;b++){const P=F[b];if(f(P,T,b,C)===!0){const V=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let X=0;X<G.length;X++){const K=G[X],Q=_(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,V+j,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,j),j+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,M,A,C){const T=E.value,L=M+"_"+A;if(C[L]===void 0)return typeof T=="number"||typeof T=="boolean"?C[L]=T:C[L]=T.clone(),!0;{const F=C[L];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return C[L]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(E){const M=E.uniforms;let A=0;const C=16;for(let L=0,F=M.length;L<F;L++){const b=Array.isArray(M[L])?M[L]:[M[L]];for(let y=0,P=b.length;y<P;y++){const V=b[y],G=Array.isArray(V.value)?V.value:[V.value];for(let j=0,X=G.length;j<X;j++){const K=G[j],Q=_(K),H=A%C,ie=H%Q.boundary,ae=H+ie;A+=ie,ae!==0&&C-ae<Q.storage&&(A+=C-ae),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=Q.storage}}}const T=A%C;return T>0&&(A+=C-T),E.__size=A,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ee("WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const yb=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Vi=null;function bb(){return Vi===null&&(Vi=new fh(yb,32,32,oh,qs),Vi.minFilter=tn,Vi.magFilter=tn,Vi.wrapS=gi,Vi.wrapT=gi,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class Mb{constructor(e={}){const{canvas:t=n_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Set([lh,ch,ah]),_=new Set([Si,Hr,Da,Na,ih,rh]),m=new Uint32Array(4),p=new Int32Array(4);let E=null,M=null;const A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=kt;let F=0,b=0,y=null,P=-1,V=null;const G=new at,j=new at;let X=null;const K=new Ue(0);let Q=0,H=t.width,ie=t.height,ae=1,Re=null,Qe=null;const lt=new at(0,0,H,ie),xt=new at(0,0,H,ie);let _t=!1;const q=new mh;let Z=!1,pe=!1;const Ve=new Ge,Te=new N,je=new at,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function bt(){return y===null?ae:1}let w=i;function Ke(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${th}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",me,!1),w===null){const I="webgl2";if(w=Ke(I,v),w===null)throw Ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw v("WebGLRenderer: "+v.message),v}let $e,vt,xe,wt,we,ke,S,x,U,W,$,z,Me,ce,Ce,ye,J,ne,Ne,Ie,he,Oe,R,le;function re(){$e=new Lv(w),$e.init(),Oe=new db(w,$e),vt=new bv(w,$e,e,Oe),xe=new ub(w,$e),vt.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),wt=new Dv(w),we=new Zy,ke=new hb(w,$e,xe,we,vt,Oe,wt),S=new Sv(T),x=new Cv(T),U=new O1(w),R=new vv(w,U),W=new Pv(w,U,wt,R),$=new Uv(w,W,U,wt),Ne=new Nv(w,vt,ke),ye=new Mv(we),z=new $y(T,S,x,$e,vt,R,ye),Me=new _b(T,we),ce=new Qy,Ce=new sb($e),ne=new _v(T,S,x,xe,$,f,c),J=new cb(T,$,vt),le=new vb(w,wt,vt,xe),Ie=new yv(w,$e,wt),he=new Iv(w,$e,wt),wt.programs=z.programs,T.capabilities=vt,T.extensions=$e,T.properties=we,T.renderLists=ce,T.shadowMap=J,T.state=xe,T.info=wt}re();const se=new gb(T,w);this.xr=se,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(v){v!==void 0&&(ae=v,this.setSize(H,ie,!1))},this.getSize=function(v){return v.set(H,ie)},this.setSize=function(v,I,O=!0){if(se.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}H=v,ie=I,t.width=Math.floor(v*ae),t.height=Math.floor(I*ae),O===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(H*ae,ie*ae).floor()},this.setDrawingBufferSize=function(v,I,O){H=v,ie=I,ae=O,t.width=Math.floor(v*O),t.height=Math.floor(I*O),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(G)},this.getViewport=function(v){return v.copy(lt)},this.setViewport=function(v,I,O,k){v.isVector4?lt.set(v.x,v.y,v.z,v.w):lt.set(v,I,O,k),xe.viewport(G.copy(lt).multiplyScalar(ae).round())},this.getScissor=function(v){return v.copy(xt)},this.setScissor=function(v,I,O,k){v.isVector4?xt.set(v.x,v.y,v.z,v.w):xt.set(v,I,O,k),xe.scissor(j.copy(xt).multiplyScalar(ae).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(v){xe.setScissorTest(_t=v)},this.setOpaqueSort=function(v){Re=v},this.setTransparentSort=function(v){Qe=v},this.getClearColor=function(v){return v.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,O=!0){let k=0;if(v){let D=!1;if(y!==null){const te=y.texture.format;D=g.has(te)}if(D){const te=y.texture.type,ue=_.has(te),ge=ne.getClearColor(),de=ne.getClearAlpha(),De=ge.r,Fe=ge.g,Ae=ge.b;ue?(m[0]=De,m[1]=Fe,m[2]=Ae,m[3]=de,w.clearBufferuiv(w.COLOR,0,m)):(p[0]=De,p[1]=Fe,p[2]=Ae,p[3]=de,w.clearBufferiv(w.COLOR,0,p))}else k|=w.COLOR_BUFFER_BIT}I&&(k|=w.DEPTH_BUFFER_BIT),O&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ne.dispose(),ce.dispose(),Ce.dispose(),we.dispose(),S.dispose(),x.dispose(),$.dispose(),R.dispose(),le.dispose(),z.dispose(),se.dispose(),se.removeEventListener("sessionstart",vd),se.removeEventListener("sessionend",yd),Sr.stop()};function ee(v){v.preventDefault(),nc("WebGLRenderer: Context Lost."),L=!0}function Y(){nc("WebGLRenderer: Context Restored."),L=!1;const v=wt.autoReset,I=J.enabled,O=J.autoUpdate,k=J.needsUpdate,D=J.type;re(),wt.autoReset=v,J.enabled=I,J.autoUpdate=O,J.needsUpdate=k,J.type=D}function me(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Be(v){const I=v.target;I.removeEventListener("dispose",Be),yt(I)}function yt(v){ut(v),we.remove(v)}function ut(v){const I=we.get(v).programs;I!==void 0&&(I.forEach(function(O){z.releaseProgram(O)}),v.isShaderMaterial&&z.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,O,k,D,te){I===null&&(I=en);const ue=D.isMesh&&D.matrixWorld.determinant()<0,ge=cx(v,I,O,k,D);xe.setMaterial(k,ue);let de=O.index,De=1;if(k.wireframe===!0){if(de=W.getWireframeAttribute(O),de===void 0)return;De=2}const Fe=O.drawRange,Ae=O.attributes.position;let Ze=Fe.start*De,ht=(Fe.start+Fe.count)*De;te!==null&&(Ze=Math.max(Ze,te.start*De),ht=Math.min(ht,(te.start+te.count)*De)),de!==null?(Ze=Math.max(Ze,0),ht=Math.min(ht,de.count)):Ae!=null&&(Ze=Math.max(Ze,0),ht=Math.min(ht,Ae.count));const Nt=ht-Ze;if(Nt<0||Nt===1/0)return;R.setup(D,k,ge,O,de);let Ut,mt=Ie;if(de!==null&&(Ut=U.get(de),mt=he,mt.setIndex(Ut)),D.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*bt()),mt.setMode(w.LINES)):mt.setMode(w.TRIANGLES);else if(D.isLine){let Le=k.linewidth;Le===void 0&&(Le=1),xe.setLineWidth(Le*bt()),D.isLineSegments?mt.setMode(w.LINES):D.isLineLoop?mt.setMode(w.LINE_LOOP):mt.setMode(w.LINE_STRIP)}else D.isPoints?mt.setMode(w.POINTS):D.isSprite&&mt.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Va("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))mt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Le=D._multiDrawStarts,Rt=D._multiDrawCounts,it=D._multiDrawCount,Tn=de?U.get(de).bytesPerElement:1,es=we.get(k).currentProgram.getUniforms();for(let An=0;An<it;An++)es.setValue(w,"_gl_DrawID",An),mt.render(Le[An]/Tn,Rt[An])}else if(D.isInstancedMesh)mt.renderInstances(Ze,Nt,D.count);else if(O.isInstancedBufferGeometry){const Le=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Rt=Math.min(O.instanceCount,Le);mt.renderInstances(Ze,Nt,Rt)}else mt.render(Ze,Nt)};function hi(v,I,O){v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=bn,v.needsUpdate=!0,co(v,I,O),v.side=Ki,v.needsUpdate=!0,co(v,I,O),v.side=yn):co(v,I,O)}this.compile=function(v,I,O=null){O===null&&(O=v),M=Ce.get(O),M.init(I),C.push(M),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(M.pushLight(D),D.castShadow&&M.pushShadow(D))}),v!==O&&v.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(M.pushLight(D),D.castShadow&&M.pushShadow(D))}),M.setupLights();const k=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const te=D.material;if(te)if(Array.isArray(te))for(let ue=0;ue<te.length;ue++){const ge=te[ue];hi(ge,O,D),k.add(ge)}else hi(te,O,D),k.add(te)}),M=C.pop(),k},this.compileAsync=function(v,I,O=null){const k=this.compile(v,I,O);return new Promise(D=>{function te(){if(k.forEach(function(ue){we.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){D(v);return}setTimeout(te,10)}$e.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Zn=null;function ox(v){Zn&&Zn(v)}function vd(){Sr.stop()}function yd(){Sr.start()}const Sr=new P0;Sr.setAnimationLoop(ox),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(v){Zn=v,se.setAnimationLoop(v),v===null?Sr.stop():Sr.start()},se.addEventListener("sessionstart",vd),se.addEventListener("sessionend",yd),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),v.isScene===!0&&v.onBeforeRender(T,v,I,y),M=Ce.get(v,C.length),M.init(I),C.push(M),Ve.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Ve,xi,I.reversedDepth),pe=this.localClippingEnabled,Z=ye.init(this.clippingPlanes,pe),E=ce.get(v,A.length),E.init(),A.push(E),se.enabled===!0&&se.isPresenting===!0){const te=T.xr.getDepthSensingMesh();te!==null&&Gc(te,I,-1/0,T.sortObjects)}Gc(v,I,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(Re,Qe),We=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,We&&ne.addToRenderList(E,v),this.info.render.frame++,Z===!0&&ye.beginShadows();const O=M.state.shadowsArray;J.render(O,v,I),Z===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=E.opaque,D=E.transmissive;if(M.setupLights(),I.isArrayCamera){const te=I.cameras;if(D.length>0)for(let ue=0,ge=te.length;ue<ge;ue++){const de=te[ue];Md(k,D,v,de)}We&&ne.render(v);for(let ue=0,ge=te.length;ue<ge;ue++){const de=te[ue];bd(E,v,de,de.viewport)}}else D.length>0&&Md(k,D,v,I),We&&ne.render(v),bd(E,v,I);y!==null&&b===0&&(ke.updateMultisampleRenderTarget(y),ke.updateRenderTargetMipmap(y)),v.isScene===!0&&v.onAfterRender(T,v,I),R.resetDefaultState(),P=-1,V=null,C.pop(),C.length>0?(M=C[C.length-1],Z===!0&&ye.setGlobalState(T.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function Gc(v,I,O,k){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||q.intersectsSprite(v)){k&&je.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ve);const ue=$.update(v),ge=v.material;ge.visible&&E.push(v,ue,ge,O,je.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||q.intersectsObject(v))){const ue=$.update(v),ge=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),je.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),je.copy(ue.boundingSphere.center)),je.applyMatrix4(v.matrixWorld).applyMatrix4(Ve)),Array.isArray(ge)){const de=ue.groups;for(let De=0,Fe=de.length;De<Fe;De++){const Ae=de[De],Ze=ge[Ae.materialIndex];Ze&&Ze.visible&&E.push(v,ue,Ze,O,je.z,Ae)}}else ge.visible&&E.push(v,ue,ge,O,je.z,null)}}const te=v.children;for(let ue=0,ge=te.length;ue<ge;ue++)Gc(te[ue],I,O,k)}function bd(v,I,O,k){const{opaque:D,transmissive:te,transparent:ue}=v;M.setupLightsView(O),Z===!0&&ye.setGlobalState(T.clippingPlanes,O),k&&xe.viewport(G.copy(k)),D.length>0&&oo(D,I,O),te.length>0&&oo(te,I,O),ue.length>0&&oo(ue,I,O),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Md(v,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[k.id]===void 0&&(M.state.transmissionRenderTarget[k.id]=new Wr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?qs:Si,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const te=M.state.transmissionRenderTarget[k.id],ue=k.viewport||G;te.setSize(ue.z*T.transmissionResolutionScale,ue.w*T.transmissionResolutionScale);const ge=T.getRenderTarget(),de=T.getActiveCubeFace(),De=T.getActiveMipmapLevel();T.setRenderTarget(te),T.getClearColor(K),Q=T.getClearAlpha(),Q<1&&T.setClearColor(16777215,.5),T.clear(),We&&ne.render(O);const Fe=T.toneMapping;T.toneMapping=pr;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),M.setupLightsView(k),Z===!0&&ye.setGlobalState(T.clippingPlanes,k),oo(v,O,k),ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ht=0,Nt=I.length;ht<Nt;ht++){const Ut=I[ht],{object:mt,geometry:Le,material:Rt,group:it}=Ut;if(Rt.side===yn&&mt.layers.test(k.layers)){const Tn=Rt.side;Rt.side=bn,Rt.needsUpdate=!0,Sd(mt,O,k,Le,Rt,it),Rt.side=Tn,Rt.needsUpdate=!0,Ze=!0}}Ze===!0&&(ke.updateMultisampleRenderTarget(te),ke.updateRenderTargetMipmap(te))}T.setRenderTarget(ge,de,De),T.setClearColor(K,Q),Ae!==void 0&&(k.viewport=Ae),T.toneMapping=Fe}function oo(v,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let D=0,te=v.length;D<te;D++){const ue=v[D],{object:ge,geometry:de,group:De}=ue;let Fe=ue.material;Fe.allowOverride===!0&&k!==null&&(Fe=k),ge.layers.test(O.layers)&&Sd(ge,I,O,de,Fe,De)}}function Sd(v,I,O,k,D,te){v.onBeforeRender(T,I,O,k,D,te),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(T,I,O,k,v,te),D.transparent===!0&&D.side===yn&&D.forceSinglePass===!1?(D.side=bn,D.needsUpdate=!0,T.renderBufferDirect(O,I,k,D,v,te),D.side=Ki,D.needsUpdate=!0,T.renderBufferDirect(O,I,k,D,v,te),D.side=yn):T.renderBufferDirect(O,I,k,D,v,te),v.onAfterRender(T,I,O,k,D,te)}function co(v,I,O){I.isScene!==!0&&(I=en);const k=we.get(v),D=M.state.lights,te=M.state.shadowsArray,ue=D.state.version,ge=z.getParameters(v,D.state,te,I,O),de=z.getProgramCacheKey(ge);let De=k.programs;k.environment=v.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(v.isMeshStandardMaterial?x:S).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",Be),De=new Map,k.programs=De);let Fe=De.get(de);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===ue)return Td(v,ge),Fe}else ge.uniforms=z.getUniforms(v),v.onBeforeCompile(ge,T),Fe=z.acquireProgram(ge,de),De.set(de,Fe),k.uniforms=ge.uniforms;const Ae=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=ye.uniform),Td(v,ge),k.needsLights=ux(v),k.lightsStateVersion=ue,k.needsLights&&(Ae.ambientLightColor.value=D.state.ambient,Ae.lightProbe.value=D.state.probe,Ae.directionalLights.value=D.state.directional,Ae.directionalLightShadows.value=D.state.directionalShadow,Ae.spotLights.value=D.state.spot,Ae.spotLightShadows.value=D.state.spotShadow,Ae.rectAreaLights.value=D.state.rectArea,Ae.ltc_1.value=D.state.rectAreaLTC1,Ae.ltc_2.value=D.state.rectAreaLTC2,Ae.pointLights.value=D.state.point,Ae.pointLightShadows.value=D.state.pointShadow,Ae.hemisphereLights.value=D.state.hemi,Ae.directionalShadowMap.value=D.state.directionalShadowMap,Ae.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ae.spotShadowMap.value=D.state.spotShadowMap,Ae.spotLightMatrix.value=D.state.spotLightMatrix,Ae.spotLightMap.value=D.state.spotLightMap,Ae.pointShadowMap.value=D.state.pointShadowMap,Ae.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function Ed(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=jo.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Td(v,I){const O=we.get(v);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function cx(v,I,O,k,D){I.isScene!==!0&&(I=en),ke.resetTextureUnits();const te=I.fog,ue=k.isMeshStandardMaterial?I.environment:null,ge=y===null?T.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:gn,de=(k.isMeshStandardMaterial?x:S).get(k.envMap||ue),De=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Fe=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,ht=!!O.morphAttributes.color;let Nt=pr;k.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Nt=T.toneMapping);const Ut=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,mt=Ut!==void 0?Ut.length:0,Le=we.get(k),Rt=M.state.lights;if(Z===!0&&(pe===!0||v!==V)){const hn=v===V&&k.id===P;ye.setState(k,v,hn)}let it=!1;k.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rt.state.version||Le.outputColorSpace!==ge||D.isBatchedMesh&&Le.batching===!1||!D.isBatchedMesh&&Le.batching===!0||D.isBatchedMesh&&Le.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Le.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Le.instancing===!1||!D.isInstancedMesh&&Le.instancing===!0||D.isSkinnedMesh&&Le.skinning===!1||!D.isSkinnedMesh&&Le.skinning===!0||D.isInstancedMesh&&Le.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Le.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Le.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Le.instancingMorph===!1&&D.morphTexture!==null||Le.envMap!==de||k.fog===!0&&Le.fog!==te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ye.numPlanes||Le.numIntersection!==ye.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Fe||Le.morphTargets!==Ae||Le.morphNormals!==Ze||Le.morphColors!==ht||Le.toneMapping!==Nt||Le.morphTargetsCount!==mt)&&(it=!0):(it=!0,Le.__version=k.version);let Tn=Le.currentProgram;it===!0&&(Tn=co(k,I,D));let es=!1,An=!1,ha=!1;const Ct=Tn.getUniforms(),xn=Le.uniforms;if(xe.useProgram(Tn.program)&&(es=!0,An=!0,ha=!0),k.id!==P&&(P=k.id,An=!0),es||V!==v){xe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ct.setValue(w,"projectionMatrix",v.projectionMatrix),Ct.setValue(w,"viewMatrix",v.matrixWorldInverse);const _n=Ct.map.cameraPosition;_n!==void 0&&_n.setValue(w,Te.setFromMatrixPosition(v.matrixWorld)),vt.logarithmicDepthBuffer&&Ct.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ct.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),V!==v&&(V=v,An=!0,ha=!0)}if(D.isSkinnedMesh){Ct.setOptional(w,D,"bindMatrix"),Ct.setOptional(w,D,"bindMatrixInverse");const hn=D.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Ct.setValue(w,"boneTexture",hn.boneTexture,ke))}D.isBatchedMesh&&(Ct.setOptional(w,D,"batchingTexture"),Ct.setValue(w,"batchingTexture",D._matricesTexture,ke),Ct.setOptional(w,D,"batchingIdTexture"),Ct.setValue(w,"batchingIdTexture",D._indirectTexture,ke),Ct.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&Ct.setValue(w,"batchingColorTexture",D._colorsTexture,ke));const Vn=O.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Ne.update(D,O,Tn),(An||Le.receiveShadow!==D.receiveShadow)&&(Le.receiveShadow=D.receiveShadow,Ct.setValue(w,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xn.envMap.value=de,xn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(xn.envMapIntensity.value=I.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=bb()),An&&(Ct.setValue(w,"toneMappingExposure",T.toneMappingExposure),Le.needsLights&&lx(xn,ha),te&&k.fog===!0&&Me.refreshFogUniforms(xn,te),Me.refreshMaterialUniforms(xn,k,ae,ie,M.state.transmissionRenderTarget[v.id]),jo.upload(w,Ed(Le),xn,ke)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(jo.upload(w,Ed(Le),xn,ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ct.setValue(w,"center",D.center),Ct.setValue(w,"modelViewMatrix",D.modelViewMatrix),Ct.setValue(w,"normalMatrix",D.normalMatrix),Ct.setValue(w,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const hn=k.uniformsGroups;for(let _n=0,Hc=hn.length;_n<Hc;_n++){const Er=hn[_n];le.update(Er,Tn),le.bind(Er,Tn)}}return Tn}function lx(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function ux(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(v,I,O){const k=we.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),we.get(v.texture).__webglTexture=I,we.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:O,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const O=we.get(v);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0};const hx=w.createFramebuffer();this.setRenderTarget=function(v,I=0,O=0){y=v,F=I,b=O;let k=!0,D=null,te=!1,ue=!1;if(v){const de=we.get(v);if(de.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(v);else if(de.__hasExternalTextures)ke.rebindTextures(v,we.get(v.texture).__webglTexture,we.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ae=v.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&we.has(Ae)&&(v.width!==Ae.image.width||v.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Fe=we.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?D=Fe[I][O]:D=Fe[I],te=!0):v.samples>0&&ke.useMultisampledRTT(v)===!1?D=we.get(v).__webglMultisampledFramebuffer:Array.isArray(Fe)?D=Fe[O]:D=Fe,G.copy(v.viewport),j.copy(v.scissor),X=v.scissorTest}else G.copy(lt).multiplyScalar(ae).floor(),j.copy(xt).multiplyScalar(ae).floor(),X=_t;if(O!==0&&(D=hx),xe.bindFramebuffer(w.FRAMEBUFFER,D)&&k&&xe.drawBuffers(v,D),xe.viewport(G),xe.scissor(j),xe.setScissorTest(X),te){const de=we.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,O)}else if(ue){const de=I;for(let De=0;De<v.textures.length;De++){const Fe=we.get(v.textures[De]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+De,Fe.__webglTexture,O,de)}}else if(v!==null&&O!==0){const de=we.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,de.__webglTexture,O)}P=-1},this.readRenderTargetPixels=function(v,I,O,k,D,te,ue,ge=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){xe.bindFramebuffer(w.FRAMEBUFFER,de);try{const De=v.textures[ge],Fe=De.format,Ae=De.type;if(!vt.textureFormatReadable(Fe)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ae)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-k&&O>=0&&O<=v.height-D&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(I,O,k,D,Oe.convert(Fe),Oe.convert(Ae),te))}finally{const De=y!==null?we.get(y).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(v,I,O,k,D,te,ue,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de)if(I>=0&&I<=v.width-k&&O>=0&&O<=v.height-D){xe.bindFramebuffer(w.FRAMEBUFFER,de);const De=v.textures[ge],Fe=De.format,Ae=De.type;if(!vt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(I,O,k,D,Oe.convert(Fe),Oe.convert(Ae),0);const ht=y!==null?we.get(y).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,ht);const Nt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await i_(w,Nt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ze),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Ze),w.deleteSync(Nt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,O=0){const k=Math.pow(2,-O),D=Math.floor(v.image.width*k),te=Math.floor(v.image.height*k),ue=I!==null?I.x:0,ge=I!==null?I.y:0;ke.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,ue,ge,D,te),xe.unbindTexture()};const dx=w.createFramebuffer(),fx=w.createFramebuffer();this.copyTextureToTexture=function(v,I,O=null,k=null,D=0,te=null){te===null&&(D!==0?(Va("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=D,D=0):te=0);let ue,ge,de,De,Fe,Ae,Ze,ht,Nt;const Ut=v.isCompressedTexture?v.mipmaps[te]:v.image;if(O!==null)ue=O.max.x-O.min.x,ge=O.max.y-O.min.y,de=O.isBox3?O.max.z-O.min.z:1,De=O.min.x,Fe=O.min.y,Ae=O.isBox3?O.min.z:0;else{const Vn=Math.pow(2,-D);ue=Math.floor(Ut.width*Vn),ge=Math.floor(Ut.height*Vn),v.isDataArrayTexture?de=Ut.depth:v.isData3DTexture?de=Math.floor(Ut.depth*Vn):de=1,De=0,Fe=0,Ae=0}k!==null?(Ze=k.x,ht=k.y,Nt=k.z):(Ze=0,ht=0,Nt=0);const mt=Oe.convert(I.format),Le=Oe.convert(I.type);let Rt;I.isData3DTexture?(ke.setTexture3D(I,0),Rt=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ke.setTexture2DArray(I,0),Rt=w.TEXTURE_2D_ARRAY):(ke.setTexture2D(I,0),Rt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const it=w.getParameter(w.UNPACK_ROW_LENGTH),Tn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),es=w.getParameter(w.UNPACK_SKIP_PIXELS),An=w.getParameter(w.UNPACK_SKIP_ROWS),ha=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ut.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ut.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,De),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ae);const Ct=v.isDataArrayTexture||v.isData3DTexture,xn=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const Vn=we.get(v),hn=we.get(I),_n=we.get(Vn.__renderTarget),Hc=we.get(hn.__renderTarget);xe.bindFramebuffer(w.READ_FRAMEBUFFER,_n.__webglFramebuffer),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,Hc.__webglFramebuffer);for(let Er=0;Er<de;Er++)Ct&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,we.get(v).__webglTexture,D,Ae+Er),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,we.get(I).__webglTexture,te,Nt+Er)),w.blitFramebuffer(De,Fe,ue,ge,Ze,ht,ue,ge,w.DEPTH_BUFFER_BIT,w.NEAREST);xe.bindFramebuffer(w.READ_FRAMEBUFFER,null),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||we.has(v)){const Vn=we.get(v),hn=we.get(I);xe.bindFramebuffer(w.READ_FRAMEBUFFER,dx),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,fx);for(let _n=0;_n<de;_n++)Ct?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vn.__webglTexture,D,Ae+_n):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vn.__webglTexture,D),xn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,hn.__webglTexture,te,Nt+_n):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,hn.__webglTexture,te),D!==0?w.blitFramebuffer(De,Fe,ue,ge,Ze,ht,ue,ge,w.COLOR_BUFFER_BIT,w.NEAREST):xn?w.copyTexSubImage3D(Rt,te,Ze,ht,Nt+_n,De,Fe,ue,ge):w.copyTexSubImage2D(Rt,te,Ze,ht,De,Fe,ue,ge);xe.bindFramebuffer(w.READ_FRAMEBUFFER,null),xe.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else xn?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(Rt,te,Ze,ht,Nt,ue,ge,de,mt,Le,Ut.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Rt,te,Ze,ht,Nt,ue,ge,de,mt,Ut.data):w.texSubImage3D(Rt,te,Ze,ht,Nt,ue,ge,de,mt,Le,Ut):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,te,Ze,ht,ue,ge,mt,Le,Ut.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,te,Ze,ht,Ut.width,Ut.height,mt,Ut.data):w.texSubImage2D(w.TEXTURE_2D,te,Ze,ht,ue,ge,mt,Le,Ut);w.pixelStorei(w.UNPACK_ROW_LENGTH,it),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Tn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,es),w.pixelStorei(w.UNPACK_SKIP_ROWS,An),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ha),te===0&&I.generateMipmaps&&w.generateMipmap(Rt),xe.unbindTexture()},this.initRenderTarget=function(v){we.get(v).__webglFramebuffer===void 0&&ke.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ke.setTextureCube(v,0):v.isData3DTexture?ke.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ke.setTexture2DArray(v,0):ke.setTexture2D(v,0),xe.unbindTexture()},this.resetState=function(){F=0,b=0,y=null,xe.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}var Ns=typeof self<"u"?self:{};function F0(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=Ns,r=0;r<t.length;r++)if((i=i[t[r]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function Pr(){throw Error("Invalid UTF8")}function Hf(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let Fo,El;const Sb=typeof TextDecoder<"u";let Eb;const Tb=typeof TextEncoder<"u";function O0(n){if(Tb)n=(Eb||=new TextEncoder).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var e=n.charCodeAt(r);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<n.length){const s=n.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}r--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}function B0(n){Ns.setTimeout((()=>{throw n}),0)}var Ru,Ab=F0(610401301,!1),Wf=F0(748402147,!0);function Xf(){var n=Ns.navigator;return n&&(n=n.userAgent)?n:""}const qf=Ns.navigator;function xc(n){return xc[" "](n),n}Ru=qf&&qf.userAgentData||null,xc[" "]=function(){};const k0={};let Ta=null;function wb(n){const e=n.length;let t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);const i=new Uint8Array(t);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const u=s.charAt(c++),h=Ta[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return l}V0();let c=0;for(;;){const l=o(-1),u=o(0),h=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|u>>4),h!=64&&(a(u<<4&240|h>>2),d!=64&&a(h<<6&192|d))}})(n,(function(s){i[r++]=s})),r!==t?i.subarray(0,r):i}function V0(){if(!Ta){Ta={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let t=0;t<5;t++){const i=n.concat(e[t].split(""));k0[t]=i;for(let r=0;r<i.length;r++){const s=i[r];Ta[s]===void 0&&(Ta[s]=r)}}}}var Rb=typeof Uint8Array<"u",z0=!(!(Ab&&Ru&&Ru.brands.length>0)&&(Xf().indexOf("Trident")!=-1||Xf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Yf=/[-_.]/g,Cb={"-":"+",_:"/",".":"="};function Lb(n){return Cb[n]||""}function G0(n){if(!z0)return wb(n);n=Yf.test(n)?n.replace(Yf,Lb):n,n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Mh(n){return Rb&&n!=null&&n instanceof Uint8Array}var Us={};function Xr(){return Pb||=new Mi(null,Us)}function Sh(n){H0(Us);var e=n.g;return(e=e==null||Mh(e)?e:typeof e=="string"?G0(e):null)==null?e:n.g=e}var Mi=class{h(){return new Uint8Array(Sh(this)||0)}constructor(n,e){if(H0(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Pb,Ib;function H0(n){if(n!==Us)throw Error("illegal external caller")}function W0(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}function Cu(n){return W0(n=Error(n),"warning"),n}function Fs(n,e){if(n!=null){var t=Ib??={},i=t[n]||0;i>=e||(t[n]=i+1,W0(n=Error(),"incident"),B0(n))}}function Js(){return typeof BigInt=="function"}var Qs=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Ri(n,e,t=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?t&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():e}var Db=Ri("jas",void 0,!0),jf=Ri(void 0,"0di"),ba=Ri(void 0,"1oa"),Dn=Ri(void 0,Symbol()),Nb=Ri(void 0,"0ub"),Ub=Ri(void 0,"0ubs"),Lu=Ri(void 0,"0ubsb"),Fb=Ri(void 0,"0actk"),Os=Ri("m_m","Pa",!0),Kf=Ri();const X0={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},q0=Object.defineProperties,_e=Qs?Db:"Ga";var Zr;const $f=[];function Qa(n,e){Qs||_e in n||q0(n,X0),n[_e]|=e}function Kt(n,e){Qs||_e in n||q0(n,X0),n[_e]=e}function eo(n){return Qa(n,34),n}function Ha(n){return Qa(n,8192),n}Kt($f,7),Zr=Object.freeze($f);var Bs={};function Un(n,e){return e===void 0?n.h!==qr&&!!(2&(0|n.v[_e])):!!(2&e)&&n.h!==qr}const qr={};function Eh(n,e){if(n!=null){if(typeof n=="string")n=n?new Mi(n,Us):Xr();else if(n.constructor!==Mi)if(Mh(n))n=n.length?new Mi(new Uint8Array(n),Us):Xr();else{if(!e)throw Error();n=void 0}}return n}class Zf{constructor(e,t,i){this.g=e,this.h=t,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var Ob=Object.freeze({});function Y0(n,e,t){const i=128&e?0:-1,r=n.length;var s;(s=!!r)&&(s=(s=n[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)t(e-i,n[e]);if(s){n=n[r-1];for(const o in n)!isNaN(o)&&t(+o,n[o])}}var j0={};function ea(n){return 128&n?j0:void 0}function _c(n){return n.Na=!0,n}var Bb=_c((n=>typeof n=="number")),Jf=_c((n=>typeof n=="string")),kb=_c((n=>typeof n=="boolean")),vc=typeof Ns.BigInt=="function"&&typeof Ns.BigInt(0)=="bigint";function Nn(n){var e=n;if(Jf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Bb(e)&&!Number.isSafeInteger(e))throw Error(String(e));return vc?BigInt(n):n=kb(n)?n?"1":"0":Jf(n)?n.trim()||"0":String(n)}var Pu=_c((n=>vc?n>=zb&&n<=Hb:n[0]==="-"?Qf(n,Vb):Qf(n,Gb)));const Vb=Number.MIN_SAFE_INTEGER.toString(),zb=vc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Gb=Number.MAX_SAFE_INTEGER.toString(),Hb=vc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Qf(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){const i=n[t],r=e[t];if(i>r)return!1;if(i<r)return!0}}const Wb=typeof Uint8Array.prototype.slice=="function";let Xb,Lt=0,Vt=0;function ep(n){const e=n>>>0;Lt=e,Vt=(n-e)/4294967296>>>0}function ks(n){if(n<0){ep(-n);const[e,t]=wh(Lt,Vt);Lt=e>>>0,Vt=t>>>0}else ep(n)}function Th(n){const e=Xb||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+n,!0),Vt=0,Lt=e.getUint32(0,!0)}function K0(n,e){const t=4294967296*e+(n>>>0);return Number.isSafeInteger(t)?t:Wa(n,e)}function qb(n,e){return Nn(Js()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(n>>>0)):Wa(n,e))}function $0(n,e){return Js()?Nn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(n)))):Nn(Ah(n,e))}function Wa(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else Js()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+tp(t)+tp(n));return t}function tp(n){return n=String(n),"0000000".slice(n.length)+n}function Ah(n,e){if(2147483648&e)if(Js())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=wh(n,e);n="-"+Wa(t,i)}else n=Wa(n,e);return n}function yc(n){if(n.length<16)ks(Number(n));else if(Js())n=BigInt(n),Lt=Number(n&BigInt(4294967295))>>>0,Vt=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");Vt=Lt=0;const t=n.length;for(let i=e,r=(t-e)%6+e;r<=t;i=r,r+=6){const s=Number(n.slice(i,r));Vt*=1e6,Lt=1e6*Lt+s,Lt>=4294967296&&(Vt+=Math.trunc(Lt/4294967296),Vt>>>=0,Lt>>>=0)}if(e){const[i,r]=wh(Lt,Vt);Lt=i,Vt=r}}}function wh(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function si(n){return Array.prototype.slice.call(n)}const to=typeof BigInt=="function"?BigInt.asIntN:void 0,Yb=typeof BigInt=="function"?BigInt.asUintN:void 0,Yr=Number.isSafeInteger,bc=Number.isFinite,Vs=Math.trunc,jb=Nn(0);function Aa(n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);return n}function vi(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Xa(n){if(n!=null&&typeof n!="boolean"){var e=typeof n;throw Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`)}return n}function Z0(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}const Kb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function no(n){switch(typeof n){case"bigint":return!0;case"number":return bc(n);case"string":return Kb.test(n);default:return!1}}function ta(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return bc(n)?0|n:void 0}function J0(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return bc(n)?n>>>0:void 0}function Q0(n){const e=n.length;return(n[0]==="-"?e<20||e===20&&n<="-9223372036854775808":e<19||e===19&&n<="9223372036854775807")?n:(yc(n),Ah(Lt,Vt))}function Rh(n){if(n=Vs(n),!Yr(n)){ks(n);var e=Lt,t=Vt;(n=2147483648&t)&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),n=typeof(e=K0(e,t))=="number"?n?-e:e:n?"-"+e:e}return n}function em(n){var e=Vs(Number(n));return Yr(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Q0(n))}function tm(n){var e=Vs(Number(n));return Yr(e)?Nn(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Js()?Nn(to(64,BigInt(n))):Nn(Q0(n)))}function nm(n){return Yr(n)?n=Nn(Rh(n)):(n=Vs(n),Yr(n)?n=String(n):(ks(n),n=Ah(Lt,Vt)),n=Nn(n)),n}function sc(n){const e=typeof n;return n==null?n:e==="bigint"?Nn(to(64,n)):no(n)?e==="string"?tm(n):nm(n):void 0}function im(n){if(typeof n!="string")throw Error();return n}function io(n){if(n!=null&&typeof n!="string")throw Error();return n}function nn(n){return n==null||typeof n=="string"?n:void 0}function Ch(n,e,t,i){return n!=null&&n[Os]===Bs?n:Array.isArray(n)?((i=(t=0|n[_e])|32&i|2&i)!==t&&Kt(n,i),new e(n)):(t?2&i?((n=e[jf])||(eo((n=new e).v),n=e[jf]=n),e=n):e=new e:e=void 0,e)}function $b(n,e,t){if(e)e:{if(!no(e=n))throw Cu("int64");switch(typeof e){case"string":e=tm(e);break e;case"bigint":e=Nn(to(64,e));break e;default:e=nm(e)}}else e=sc(n);return(n=e)==null?t?jb:void 0:n}const Zb={};let Jb=(function(){try{return xc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Tl{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const Qb=Jb?(Object.setPrototypeOf(Tl.prototype,Map.prototype),Object.defineProperties(Tl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Tl):class extends Map{constructor(){super()}};function np(n){return n}function Al(n){if(2&n.J)throw Error("Cannot mutate an immutable Map")}var Zi=class extends Qb{constructor(n,e,t=np,i=np){super(),this.J=0|n[_e],this.K=e,this.S=t,this.fa=this.K?eM:i;for(let r=0;r<n.length;r++){const s=n[r],a=t(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(n){return Ha(Array.from(super.entries(),n))}clear(){Al(this),super.clear()}delete(n){return Al(this),super.delete(this.S(n,!0,!1))}entries(){if(this.K){var n=super.keys();n=new Zf(n,tM,this)}else n=super.entries();return n}values(){if(this.K){var n=super.keys();n=new Zf(n,Zi.prototype.get,this)}else n=super.values();return n}forEach(n,e){this.K?super.forEach(((t,i,r)=>{n.call(e,r.get(i),i,r)})):super.forEach(n,e)}set(n,e){return Al(this),(n=this.S(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(n){const e=this.S(n[0],!1,!0);n=n[1],n=this.K?n===void 0?null:n:this.fa(n,!1,!0,void 0,!1,this.J),super.set(e,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.K;return t?((t=this.fa(e,!1,!0,t,this.ra,this.J))!==e&&super.set(n,t),t):e}}[Symbol.iterator](){return this.entries()}};function eM(n,e,t,i,r,s){return n=Ch(n,i,t,s),r&&(n=Ph(n)),n}function tM(n){return[n,this.get(n)]}let nM;function ip(){return nM||=new Zi(eo([]),void 0,void 0,void 0,Zb)}function Mc(n){return Dn?n[Dn]:void 0}function ac(n,e){for(const t in n)!isNaN(t)&&e(n,+t,n[t])}Zi.prototype.toJSON=void 0;var Iu=class{};const iM={Ka:!0};function rM(n,e){e<100||Fs(Ub,1)}function Sc(n,e,t,i){const r=i!==void 0;i=!!i;var s,a=Dn;!r&&Qs&&a&&(s=n[a])&&ac(s,rM),a=[];var o=n.length;let c;s=4294967295;let l=!1;const u=!!(64&e),h=u?128&e?0:-1:void 0;1&e||(c=o&&n[o-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--o:c=void 0,!u||128&e||r||(l=!0,s=s-h+h)),e=void 0;for(var d=0;d<o;d++){let f=n[d];if(f!=null&&(f=t(f,i))!=null)if(u&&d>=s){const g=d-h;(e??={})[g]=f}else a[d]=f}if(c)for(let f in c){if((o=c[f])==null||(o=t(o,i))==null)continue;let g;d=+f,u&&!Number.isNaN(d)&&(g=d+h)<s?a[g]=o:(e??={})[f]=o}return e&&(l?a.push(e):a[s]=e),r&&Dn&&(n=Mc(n))&&n instanceof Iu&&(a[Dn]=(function(f){const g=new Iu;return ac(f,((_,m,p)=>{g[m]=si(p)})),g.da=f.da,g})(n)),a}function sM(n){return n[0]=qa(n[0]),n[1]=qa(n[1]),n}function qa(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return Pu(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Array.isArray(n)){var e=0|n[_e];return n.length===0&&1&e?void 0:Sc(n,e,qa)}if(n!=null&&n[Os]===Bs)return rm(n);if(n instanceof Mi){if((e=n.g)==null)n="";else if(typeof e=="string")n=e;else{if(z0){for(var t="",i=0,r=e.length-10240;i<r;)t+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));t+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(t)}else{t===void 0&&(t=0),V0(),t=k0[t],i=Array(Math.floor(e.length/3)),r=t[64]||"";let l=0,u=0;for(;l<e.length-2;l+=3){var s=e[l],a=e[l+1],o=e[l+2],c=t[s>>2];s=t[(3&s)<<4|a>>4],a=t[(15&a)<<2|o>>6],o=t[63&o],i[u++]=c+s+a+o}switch(c=0,o=r,e.length-l){case 2:o=t[(15&(c=e[l+1]))<<2]||r;case 1:e=e[l],i[u]=t[e>>2]+t[(3&e)<<4|c>>4]+o+r}e=i.join("")}n=n.g=e}return n}return n instanceof Zi?n=n.size!==0?n.V(sM):void 0:void 0}return n}let aM,oM;function rm(n){return Sc(n=n.v,0|n[_e],qa)}function Br(n,e){return sm(n,e[0],e[1])}function sm(n,e,t,i=0){if(n==null){var r=32;t?(n=[t],r|=128):n=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(r=0|n[_e],Wf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Wf)throw Error("carr");Fs(Fb,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Kt(n,r|i),n;if(t&&(r|=128,t!==n[0]))throw Error("mid");e:{r|=64;var s=(t=n).length;if(s){var a=s-1;const c=t[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(s=+o)<a&&(t[s+e]=c[o],delete c[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Kt(n,64|r|i),n}function cM(n,e){if(typeof n!="object")return n;if(Array.isArray(n)){var t=0|n[_e];return n.length===0&&1&t?void 0:rp(n,t,e)}if(n!=null&&n[Os]===Bs)return sp(n);if(n instanceof Zi){if(2&(e=n.J))return n;if(!n.size)return;if(t=eo(n.V()),n.K)for(n=0;n<t.length;n++){const i=t[n];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[Os]===Bs?sp(r):Array.isArray(r)?rp(r,0|r[_e],!!(32&e)):void 0,i[1]=r}return t}return n instanceof Mi?n:void 0}function rp(n,e,t){return 2&e||(!t||4096&e||16&e?n=na(n,e,!1,t&&!(16&e)):(Qa(n,34),4&e&&Object.freeze(n))),n}function Lh(n,e,t){return n=new n.constructor(e),t&&(n.h=qr),n.m=qr,n}function sp(n){const e=n.v,t=0|e[_e];return Un(n,t)?n:Ih(n,e,t)?Lh(n,e):na(e,t)}function na(n,e,t,i){return i??=!!(34&e),n=Sc(n,e,cM,i),i=32,t&&(i|=2),Kt(n,e=16769217&e|i),n}function Ph(n){const e=n.v,t=0|e[_e];return Un(n,t)?Ih(n,e,t)?Lh(n,e,!0):new n.constructor(na(e,t,!1)):n}function ia(n){if(n.h!==qr)return!1;var e=n.v;return Qa(e=na(e,0|e[_e]),2048),n.v=e,n.h=void 0,n.m=void 0,!0}function ra(n){if(!ia(n)&&Un(n,0|n.v[_e]))throw Error()}function Jr(n,e){e===void 0&&(e=0|n[_e]),32&e&&!(4096&e)&&Kt(n,4096|e)}function Ih(n,e,t){return!!(2&t)||!(!(32&t)||4096&t)&&(Kt(e,2|t),n.h=qr,!0)}const am=Nn(0),or={};function Pt(n,e,t,i,r){if((e=Ji(n.v,e,t,r))!==null||i&&n.m!==qr)return e}function Ji(n,e,t,i){if(e===-1)return null;const r=e+(t?0:-1),s=n.length-1;let a,o;if(!(s<1+(t?0:-1))){if(r>=s)if(a=n[s],a!=null&&typeof a=="object"&&a.constructor===Object)t=a[e],o=!0;else{if(r!==s)return;t=a}else t=n[r];if(i&&t!=null){if((i=i(t))==null)return i;if(!Object.is(i,t))return o?a[e]=i:n[r]=i,i}return t}}function pt(n,e,t,i){ra(n),Xt(n=n.v,0|n[_e],e,t,i)}function Xt(n,e,t,i,r){const s=t+(r?0:-1);var a=n.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=n[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[t]=i,e}return s<=a?(n[s]=i,e):(i!==void 0&&(t>=(a=(e??=0|n[_e])>>14&1023||536870912)?i!=null&&(n[a+(r?0:-1)]={[t]:i}):n[s]=i),e)}function Fr(){return Ob===void 0?2:4}function Or(n,e,t,i,r){let s=n.v,a=0|s[_e];i=Un(n,a)?1:i,r=!!r||i===3,i===2&&ia(n)&&(s=n.v,a=0|s[_e]);let o=(n=Dh(s,e))===Zr?7:0|n[_e],c=Nh(o,a);var l=!(4&c);if(l){4&c&&(n=si(n),o=0,c=Vr(c,a),a=Xt(s,a,e,n));let u=0,h=0;for(;u<n.length;u++){const d=t(n[u]);d!=null&&(n[h++]=d)}h<u&&(n.length=h),t=-513&(4|c),c=t&=-1025,c&=-4097}return c!==o&&(Kt(n,c),2&c&&Object.freeze(n)),om(n,c,s,a,e,i,l,r)}function om(n,e,t,i,r,s,a,o){let c=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?kr(e)||((e|=!n.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&Kt(n,e),Object.freeze(n)):(s===2&&kr(e)&&(n=si(n),c=0,e=Vr(e,i),i=Xt(t,i,r,n)),kr(e)||(o||(e|=16),e!==c&&Kt(n,e))),2&e||!(4096&e||16&e)||Jr(t,i),n}function Dh(n,e,t){return n=Ji(n,e,t),Array.isArray(n)?n:Zr}function Nh(n,e){return 2&e&&(n|=2),1|n}function kr(n){return!!(2&n)&&!!(4&n)||!!(256&n)}function cm(n){return Eh(n,!0)}function lm(n){n=si(n);for(let e=0;e<n.length;e++){const t=n[e]=si(n[e]);Array.isArray(t[1])&&(t[1]=eo(t[1]))}return Ha(n)}function ur(n,e,t,i){ra(n),Xt(n=n.v,0|n[_e],e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function sa(n,e,t){if(2&e)throw Error();const i=ea(e);let r=Dh(n,t,i),s=r===Zr?7:0|r[_e],a=Nh(s,e);return(2&a||kr(a)||16&a)&&(a===s||kr(a)||Kt(r,a),r=si(r),s=0,a=Vr(a,e),Xt(n,e,t,r,i)),a&=-13,a!==s&&Kt(r,a),r}function wl(n,e){var t=eg;return Fh(Uh(n=n.v),n,void 0,t)===e?e:-1}function Uh(n){if(Qs)return n[ba]??(n[ba]=new Map);if(ba in n)return n[ba];const e=new Map;return Object.defineProperty(n,ba,{value:e}),e}function um(n,e,t,i,r){const s=Uh(n),a=Fh(s,n,e,t,r);return a!==i&&(a&&(e=Xt(n,e,a,void 0,r)),s.set(t,i)),e}function Fh(n,e,t,i,r){let s=n.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Ji(e,o,r)!=null&&(s!==0&&(t=Xt(e,t,s,void 0,r)),s=o)}return n.set(i,s),s}function Oh(n,e,t){let i=0|n[_e];const r=ea(i),s=Ji(n,t,r);let a;if(s!=null&&s[Os]===Bs){if(!Un(s))return ia(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[_e];2&o&&(a=na(a,o))}return a=Br(a,e),a!==s&&Xt(n,i,t,a,r),a}function hm(n,e,t,i,r){let s=!1;if((i=Ji(n,i,r,(a=>{const o=Ch(a,t,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!Un(i)&&Jr(n,e),i}function rt(n,e,t,i){let r=n.v,s=0|r[_e];if((e=hm(r,s,e,t,i))==null)return e;if(s=0|r[_e],!Un(n,s)){const a=Ph(e);a!==e&&(ia(n)&&(r=n.v,s=0|r[_e]),s=Xt(r,s,t,e=a,i),Jr(r,s))}return e}function dm(n,e,t,i,r,s,a,o){var c=Un(n,t);s=c?1:s,a=!!a||s===3,c=o&&!c,(s===2||c)&&ia(n)&&(t=0|(e=n.v)[_e]);var l=(n=Dh(e,r))===Zr?7:0|n[_e],u=Nh(l,t);if(o=!(4&u)){var h=n,d=t;const f=!!(2&u);f&&(d|=2);let g=!f,_=!0,m=0,p=0;for(;m<h.length;m++){const E=Ch(h[m],i,!1,d);if(E instanceof i){if(!f){const M=Un(E);g&&=!M,_&&=M}h[p++]=E}}p<m&&(h.length=p),u|=4,u=_?-4097&u:4096|u,u=g?8|u:-9&u}if(u!==l&&(Kt(n,u),2&u&&Object.freeze(n)),c&&!(8&u||!n.length&&(s===1||s===4&&(2&u||!(16&u)&&32&t)))){for(kr(u)&&(n=si(n),u=Vr(u,t),t=Xt(e,t,r,n)),i=n,c=u,l=0;l<i.length;l++)(h=i[l])!==(u=Ph(h))&&(i[l]=u);c|=8,Kt(n,u=c=i.length?4096|c:-4097&c)}return om(n,u,e,t,r,s,o,a)}function Qi(n,e,t){const i=n.v;return dm(n,i,0|i[_e],e,t,Fr(),!1,!0)}function fm(n){return n==null&&(n=void 0),n}function Pe(n,e,t,i,r){return pt(n,t,i=fm(i),r),i&&!Un(i)&&Jr(n.v),n}function La(n,e,t,i){e:{var r=i=fm(i);ra(n);const s=n.v;let a=0|s[_e];if(r==null){const o=Uh(s);if(Fh(o,s,a,t)!==e)break e;o.set(t,0)}else a=um(s,a,t,e);Xt(s,a,e,r)}i&&!Un(i)&&Jr(n.v)}function Vr(n,e){return-273&(2&e?2|n:-3&n)}function Bh(n,e,t,i){var r=i;ra(n),n=dm(n,i=n.v,0|i[_e],t,e,2,!0),r=r??new t,n.push(r),e=t=n===Zr?7:0|n[_e],(r=Un(r))?(t&=-9,n.length===1&&(t&=-4097)):t|=4096,t!==e&&Kt(n,t),r||Jr(i)}function jn(n,e,t){return ta(Pt(n,e,void 0,t))}function Ot(n,e){return Pt(n,e,void 0,void 0,vi)??0}function er(n,e,t){if(t!=null){if(typeof t!="number"||!bc(t))throw Cu("int32");t|=0}pt(n,e,t)}function Se(n,e,t){pt(n,e,Aa(t))}function Fn(n,e,t){ur(n,e,io(t),"")}function oc(n,e,t){{ra(n);const a=n.v;let o=0|a[_e];if(t==null)Xt(a,o,e);else{var i=n=t===Zr?7:0|t[_e],r=kr(n),s=r||Object.isFrozen(t);for(r||(n=0),s||(t=si(t),i=0,n=Vr(n,o),s=!1),n|=5,n|=(4&n?512&n?512:1024&n?1024:0:void 0)??1024,r=0;r<t.length;r++){const c=t[r],l=im(c);Object.is(c,l)||(s&&(t=si(t),i=0,n=Vr(n,o),s=!1),t[r]=l)}n!==i&&(s&&(t=si(t),n=Vr(n,o)),Kt(t,n)),Xt(a,o,e,t)}}}function Ec(n,e,t){ra(n),Or(n,e,nn,2,!0).push(im(t))}var xs=class{constructor(n,e,t){if(this.buffer=n,t&&!e)throw Error();this.g=e}};function kh(n,e){if(typeof n=="string")return new xs(G0(n),e);if(Array.isArray(n))return new xs(new Uint8Array(n),e);if(n.constructor===Uint8Array)return new xs(n,!1);if(n.constructor===ArrayBuffer)return n=new Uint8Array(n),new xs(n,!1);if(n.constructor===Mi)return e=Sh(n)||new Uint8Array(0),new xs(e,!0,n);if(n instanceof Uint8Array)return n=n.constructor===Uint8Array?n:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new xs(n,!1);throw Error()}function Vh(n,e){let t,i=0,r=0,s=0;const a=n.h;let o=n.g;do t=a[o++],i|=(127&t)<<s,s+=7;while(s<32&&128&t);if(s>32)for(r|=(127&t)>>4,s=3;s<32&&128&t;s+=7)t=a[o++],r|=(127&t)<<s;if(zr(n,o),!(128&t))return e(i>>>0,r>>>0);throw Error()}function zh(n){let e=0,t=n.g;const i=t+10,r=n.h;for(;t<i;){const s=r[t++];if(e|=s,(128&s)==0)return zr(n,t),!!(127&e)}throw Error()}function _r(n){const e=n.h;let t=n.g,i=e[t++],r=127&i;if(128&i&&(i=e[t++],r|=(127&i)<<7,128&i&&(i=e[t++],r|=(127&i)<<14,128&i&&(i=e[t++],r|=(127&i)<<21,128&i&&(i=e[t++],r|=i<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Error();return zr(n,t),r}function Ei(n){return _r(n)>>>0}function cc(n){var e=n.h;const t=n.g;var i=e[t],r=e[t+1];const s=e[t+2];return e=e[t+3],zr(n,n.g+4),n=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:n*(1/0):i==0?1401298464324817e-60*n*r:n*Math.pow(2,i-150)*(r+8388608)}function lM(n){return _r(n)}function zr(n,e){if(n.g=e,e>n.l)throw Error()}function pm(n,e){if(e<0)throw Error();const t=n.g;if((e=t+e)>n.l)throw Error();return n.g=e,t}function mm(n,e){if(e==0)return Xr();var t=pm(n,e);return n.Y&&n.j?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?new Uint8Array(0):Wb?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?Xr():new Mi(t,Us)}var ap=[];function gm(n,e,t,i){if(lc.length){const r=lc.pop();return r.o(i),r.g.init(n,e,t,i),r}return new uM(n,e,t,i)}function xm(n){n.g.clear(),n.l=-1,n.h=-1,lc.length<100&&lc.push(n)}function _m(n){var e=n.g;if(e.g==e.l)return!1;n.m=n.g.g;var t=Ei(n.g);if(e=t>>>3,!((t&=7)>=0&&t<=5)||e<1)throw Error();return n.l=e,n.h=t,!0}function Ko(n){switch(n.h){case 0:n.h!=0?Ko(n):zh(n.g);break;case 1:zr(n=n.g,n.g+8);break;case 2:if(n.h!=2)Ko(n);else{var e=Ei(n.g);zr(n=n.g,n.g+e)}break;case 5:zr(n=n.g,n.g+4);break;case 3:for(e=n.l;;){if(!_m(n))throw Error();if(n.h==4){if(n.l!=e)throw Error();break}Ko(n)}break;default:throw Error()}}function ro(n,e,t){const i=n.g.l;var r=Ei(n.g);let s=(r=n.g.g+r)-i;if(s<=0&&(n.g.l=r,t(e,n,void 0,void 0,void 0),s=r-n.g.g),s)throw Error();return n.g.g=r,n.g.l=i,e}function Gh(n){var e=Ei(n.g),t=pm(n=n.g,e);if(n=n.h,Sb){var i,r=n;(i=El)||(i=El=new TextDecoder("utf-8",{fatal:!0})),e=t+e,r=t===0&&e===r.length?r:r.subarray(t,e);try{var s=i.decode(r)}catch(o){if(Fo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Fo=!0}catch{Fo=!1}}throw!Fo&&(El=void 0),o}}else{e=(s=t)+e,t=[];let o,c=null;for(;s<e;){var a=n[s++];a<128?t.push(a):a<224?s>=e?Pr():(o=n[s++],a<194||(192&o)!=128?(s--,Pr()):t.push((31&a)<<6|63&o)):a<240?s>=e-1?Pr():(o=n[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=n[s++]))!=128?(s--,Pr()):t.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?Pr():(o=n[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=n[s++]))!=128||(192&(r=n[s++]))!=128?(s--,Pr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,t.push(55296+(a>>10&1023),56320+(1023&a)))):Pr(),t.length>=8192&&(c=Hf(c,t),t.length=0)}s=Hf(c,t)}return s}function vm(n){const e=Ei(n.g);return mm(n.g,e)}function Tc(n,e,t){var i=Ei(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var uM=class{constructor(n,e,t,i){if(ap.length){const r=ap.pop();r.init(n,e,t,i),n=r}else n=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:c=!1}={}){this.Y=o,this.ea=c,r&&(r=kh(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(n,e,t,i);this.g=n,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:n=!1}={}){this.ha=n}},lc=[];function op(n){return n?/^\d+$/.test(n)?(yc(n),new Du(Lt,Vt)):null:hM||=new Du(0,0)}var Du=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let hM;function cp(n){return n?/^-?\d+$/.test(n)?(yc(n),new Nu(Lt,Vt)):null:dM||=new Nu(0,0)}var Nu=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let dM;function Ss(n,e,t){for(;t>0||e>127;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function aa(n,e){for(;e>127;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Ac(n,e){if(e>=0)aa(n,e);else{for(let t=0;t<9;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function Hh(n){var e=Lt;n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function zs(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function Kn(n,e,t){aa(n.g,8*e+t)}function Wh(n,e){return Kn(n,e,2),e=n.g.end(),zs(n,e),e.push(n.h),e}function Xh(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function wc(n,e,t){Kn(n,e,2),aa(n.g,t.length),zs(n,n.g.end()),zs(n,t)}function uc(n,e,t,i){t!=null&&(e=Wh(n,e),i(t,n),Xh(n,e))}function Ci(){const n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var qh=Ci(),ym=Ci(),Yh=Ci(),jh=Ci(),Kh=Ci(),bm=Ci(),fM=Ci(),Rc=Ci(),Mm=Ci(),Sm=Ci();function Li(n,e,t){var i=n.v;Dn&&Dn in i&&(i=i[Dn])&&delete i[e.g],e.h?e.j(n,e.h,e.g,t,e.l):e.j(n,e.g,t,e.l)}var ve=class{constructor(n,e){this.v=sm(n,e,void 0,2048)}toJSON(){return rm(this)}j(){var n=jM,e=this.v,t=n.g,i=Dn;if(Qs&&i&&e[i]?.[t]!=null&&Fs(Nb,3),e=n.g,Kf&&Dn&&Kf===void 0&&(i=(t=this.v)[Dn])&&(i=i.da))try{i(t,e,iM)}catch(r){B0(r)}return n.h?n.m(this,n.h,n.g,n.l):n.m(this,n.g,n.defaultValue,n.l)}clone(){const n=this.v,e=0|n[_e];return Ih(this,n,e)?Lh(this,n,!0):new this.constructor(na(n,e,!1))}};ve.prototype[Os]=Bs,ve.prototype.toString=function(){return this.v.toString()};var oa=class{constructor(n,e,t){this.g=n,this.h=e,n=qh,this.l=!!n&&t===n||!1}};function Cc(n,e){return new oa(n,e,qh)}function Em(n,e,t,i,r){uc(n,t,Rm(e,i),r)}const pM=Cc((function(n,e,t,i,r){return n.h===2&&(ro(n,Oh(e,i,t),r),!0)}),Em),mM=Cc((function(n,e,t,i,r){return n.h===2&&(ro(n,Oh(e,i,t),r),!0)}),Em);var Lc=Symbol(),Pc=Symbol(),Uu=Symbol(),lp=Symbol(),up=Symbol();let Tm,Am;function Qr(n,e,t,i){var r=i[n];if(r)return r;(r={}).qa=i,r.T=(function(h){switch(typeof h){case"boolean":return aM||=[0,void 0,!0];case"number":return h>0?void 0:h===0?oM||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Tm??=s,Am??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let h;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof oa?h=s:(h=pM,a--),h?.l){s=i[++a],l=i;var u=a;typeof s=="function"&&(s=s(),l[u]=s),l=s}for(u=c+1,typeof(s=i[++a])=="number"&&s<0&&(u-=s,s=i[++a]);c<u;c++){const d=o[c];l?t(r,c,h,l,d):e(r,c,h,d)}}return i[n]=r}function wm(n){return Array.isArray(n)?n[0]instanceof oa?n:[mM,n]:[n,void 0]}function Rm(n,e){return n instanceof ve?n.v:Array.isArray(n)?Br(n,e):void 0}function $h(n,e,t,i){const r=t.g;n[e]=i?(s,a,o)=>r(s,a,o,i):r}function Zh(n,e,t,i,r){const s=t.g;let a,o;n[e]=(c,l,u)=>s(c,l,u,o||=Qr(Pc,$h,Zh,i).T,a||=Jh(i),r)}function Jh(n){let e=n[Uu];if(e!=null)return e;const t=Qr(Pc,$h,Zh,n);return e=t.ma?(i,r)=>Tm(i,r,t):(i,r)=>{for(;_m(r)&&r.h!=4;){var s=r.l,a=t[s];if(a==null){var o=t.ba;o&&(o=o[s])&&(o=xM(o))!=null&&(a=t[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,Ko(o),o.ha)var c=void 0;else c=o.g.g-a,o.g.g=a,c=mm(o.g,c);a=void 0,o=i,c&&((a=o[Dn]??(o[Dn]=new Iu))[s]??(a[s]=[])).push(c)}}return(i=Mc(i))&&(i.da=t.qa[up]),!0},n[Uu]=e,n[up]=gM.bind(n),e}function gM(n,e,t,i){var r=this[Pc];const s=this[Uu],a=Br(void 0,r.T),o=Mc(n);if(o){var c=!1,l=r.ba;if(l){if(r=(u,h,d)=>{if(d.length!==0)if(l[h])for(const f of d){u=gm(f);try{c=!0,s(a,u)}finally{xm(u)}}else i?.(n,h,d)},e==null)ac(o,r);else if(o!=null){const u=o[e];u&&r(o,e,u)}if(c){let u=0|n[_e];if(2&u&&2048&u&&!t?.Ka)throw Error();const h=ea(u),d=(f,g)=>{if(Ji(n,f,h)!=null){if(t?.Qa===1)return;throw Error()}g!=null&&(u=Xt(n,u,f,g,h)),delete o[f]};e==null?Y0(a,0|a[_e],((f,g)=>{d(f,g)})):d(e,Ji(a,e,h))}}}}function xM(n){const e=(n=wm(n))[0].g;if(n=n[1]){const t=Jh(n),i=Qr(Pc,$h,Zh,n).T;return(r,s,a)=>e(r,s,a,i,t)}return e}function Ic(n,e,t){n[e]=t.h}function Dc(n,e,t,i){let r,s;const a=t.h;n[e]=(o,c,l)=>a(o,c,l,s||=Qr(Lc,Ic,Dc,i).T,r||=Cm(i))}function Cm(n){let e=n[lp];if(!e){const t=Qr(Lc,Ic,Dc,n);e=(i,r)=>Lm(i,r,t),n[lp]=e}return e}function Lm(n,e,t){Y0(n,0|n[_e],((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ba)&&(c=c[o])){var l=(c=wm(c))[0].h;if(c=c[1]){const u=Cm(c),h=Qr(Lc,Ic,Dc,c).T;c=a.ma?Am(h,u):(d,f,g)=>l(d,f,g,h,u)}else c=l;return a[o]=c}})(t,i);s?s(e,r,i):i<500||Fs(Lu,3)}})),(n=Mc(n))&&ac(n,((i,r,s)=>{for(zs(e,e.g.end()),i=0;i<s.length;i++)zs(e,Sh(s[i])||new Uint8Array(0))}))}const _M=Nn(0);function ca(n,e){if(Array.isArray(e)){var t=0|e[_e];if(4&t)return e;for(var i=0,r=0;i<e.length;i++){const s=n(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(n=-1537&(5|t))!==t&&Kt(e,n),2&n&&Object.freeze(e),e}}function ln(n,e,t){return new oa(n,e,t)}function la(n,e,t){return new oa(n,e,t)}function un(n,e,t){Xt(n,0|n[_e],e,t,ea(0|n[_e]))}var vM=Cc((function(n,e,t,i,r){if(n.h!==2)return!1;if(n=si(n=ro(n,Br([void 0,void 0],i),r)),r=ea(i=0|e[_e]),2&i)throw Error();let s=Ji(e,t,r);if(s instanceof Zi)(2&s.J)!=0?(s=s.V(),s.push(n),Xt(e,i,t,s,r)):s.Ma(n);else if(Array.isArray(s)){var a=0|s[_e];8192&a||Kt(s,a|=8192),2&a&&(s=lm(s),Xt(e,i,t,s,r)),s.push(n)}else Xt(e,i,t,Ha([n]),r);return!0}),(function(n,e,t,i,r){if(e instanceof Zi)e.forEach(((s,a)=>{uc(n,t,Br([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&uc(n,t,Br(a,i),r)}Ha(e)}}));function Pm(n,e,t){(e=vi(e))!=null&&(Kn(n,t,5),n=n.g,Th(e),Hh(n))}function Im(n,e,t){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(to(64,i));if(no(i)){if(r==="string")return em(i);if(r==="number")return Rh(i)}})(e),e!=null&&(typeof e=="string"&&cp(e),e!=null))switch(Kn(n,t,0),typeof e){case"number":n=n.g,ks(e),Ss(n,Lt,Vt);break;case"bigint":t=BigInt.asUintN(64,e),t=new Nu(Number(t&BigInt(4294967295)),Number(t>>BigInt(32))),Ss(n.g,t.h,t.g);break;default:t=cp(e),Ss(n.g,t.h,t.g)}}function Dm(n,e,t){(e=ta(e))!=null&&e!=null&&(Kn(n,t,0),Ac(n.g,e))}function Nm(n,e,t){(e=Z0(e))!=null&&(Kn(n,t,0),n.g.g.push(e?1:0))}function Um(n,e,t){(e=nn(e))!=null&&wc(n,t,O0(e))}function Fm(n,e,t,i,r){uc(n,t,Rm(e,i),r)}function Om(n,e,t){(e=e==null||typeof e=="string"||e instanceof Mi?e:void 0)!=null&&wc(n,t,kh(e,!0).buffer)}function Bm(n,e,t){(e=J0(e))!=null&&e!=null&&(Kn(n,t,0),aa(n.g,e))}function km(n,e,t){return(n.h===5||n.h===2)&&(e=sa(e,0|e[_e],t),n.h==2?Tc(n,cc,e):e.push(cc(n.g)),!0)}var zt=ln((function(n,e,t){return n.h===5&&(un(e,t,cc(n.g)),!0)}),Pm,Rc),yM=la(km,(function(n,e,t){if((e=ca(vi,e))!=null)for(let a=0;a<e.length;a++){var i=n,r=t,s=e[a];s!=null&&(Kn(i,r,5),i=i.g,Th(s),Hh(i))}}),Rc),Qh=la(km,(function(n,e,t){if((e=ca(vi,e))!=null&&e.length){Kn(n,t,2),aa(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,Th(e[i]),Hh(t)}}),Rc),bM=ln((function(n,e,t){return n.h===5&&(un(e,t,(n=cc(n.g))===0?void 0:n),!0)}),Pm,Rc),vr=ln((function(n,e,t){return n.h!==0?n=!1:(un(e,t,Vh(n.g,$0)),n=!0),n}),Im,bm),Rl=ln((function(n,e,t){return n.h!==0?e=!1:(un(e,t,(n=Vh(n.g,$0))===_M?void 0:n),e=!0),e}),Im,bm),MM=ln((function(n,e,t){return n.h!==0?n=!1:(un(e,t,Vh(n.g,qb)),n=!0),n}),(function(n,e,t){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(Yb(64,i));if(no(i)){if(r==="string")return r=Vs(Number(i)),Yr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(yc(i),i=Wa(Lt,Vt))),i;if(r==="number")return(i=Vs(i))>=0&&Yr(i)||(ks(i),i=K0(Lt,Vt)),i}})(e),e!=null&&(typeof e=="string"&&op(e),e!=null))switch(Kn(n,t,0),typeof e){case"number":n=n.g,ks(e),Ss(n,Lt,Vt);break;case"bigint":t=BigInt.asUintN(64,e),t=new Du(Number(t&BigInt(4294967295)),Number(t>>BigInt(32))),Ss(n.g,t.h,t.g);break;default:t=op(e),Ss(n.g,t.h,t.g)}}),fM),Ht=ln((function(n,e,t){return n.h===0&&(un(e,t,_r(n.g)),!0)}),Dm,jh),so=la((function(n,e,t){return(n.h===0||n.h===2)&&(e=sa(e,0|e[_e],t),n.h==2?Tc(n,_r,e):e.push(_r(n.g)),!0)}),(function(n,e,t){if((e=ca(ta,e))!=null&&e.length){t=Wh(n,t);for(let i=0;i<e.length;i++)Ac(n.g,e[i]);Xh(n,t)}}),jh),ys=ln((function(n,e,t){return n.h===0&&(un(e,t,(n=_r(n.g))===0?void 0:n),!0)}),Dm,jh),It=ln((function(n,e,t){return n.h===0&&(un(e,t,zh(n.g)),!0)}),Nm,ym),Gr=ln((function(n,e,t){return n.h===0&&(un(e,t,(n=zh(n.g))===!1?void 0:n),!0)}),Nm,ym),on=la((function(n,e,t){return n.h===2&&(n=Gh(n),sa(e,0|e[_e],t).push(n),!0)}),(function(n,e,t){if((e=ca(nn,e))!=null)for(let a=0;a<e.length;a++){var i=n,r=t,s=e[a];s!=null&&wc(i,r,O0(s))}}),Yh),dr=ln((function(n,e,t){return n.h===2&&(un(e,t,(n=Gh(n))===""?void 0:n),!0)}),Um,Yh),gt=ln((function(n,e,t){return n.h===2&&(un(e,t,Gh(n)),!0)}),Um,Yh),Jt=(function(n,e,t=qh){return new oa(n,e,t)})((function(n,e,t,i,r){return n.h===2&&(i=Br(void 0,i),sa(e,0|e[_e],t).push(i),ro(n,i,r),!0)}),(function(n,e,t,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)Fm(n,e[s],t,i,r);1&(n=0|e[_e])||Kt(e,1|n)}})),Et=Cc((function(n,e,t,i,r,s){if(n.h!==2)return!1;let a=0|e[_e];return um(e,a,s,t,ea(a)),ro(n,e=Oh(e,i,t),r),!0}),Fm),Vm=ln((function(n,e,t){return n.h===2&&(un(e,t,vm(n)),!0)}),Om,Mm),SM=la((function(n,e,t){return(n.h===0||n.h===2)&&(e=sa(e,0|e[_e],t),n.h==2?Tc(n,Ei,e):e.push(Ei(n.g)),!0)}),(function(n,e,t){if((e=ca(J0,e))!=null)for(let a=0;a<e.length;a++){var i=n,r=t,s=e[a];s!=null&&(Kn(i,r,0),aa(i.g,s))}}),Kh),EM=ln((function(n,e,t){return n.h===0&&(un(e,t,(n=Ei(n.g))===0?void 0:n),!0)}),Bm,Kh),cn=ln((function(n,e,t){return n.h===0&&(un(e,t,_r(n.g)),!0)}),(function(n,e,t){(e=ta(e))!=null&&(e=parseInt(e,10),Kn(n,t,0),Ac(n.g,e))}),Sm);class TM{constructor(e,t){var i=Bn;this.g=e,this.h=t,this.m=rt,this.j=Pe,this.defaultValue=void 0,this.l=i.Oa!=null?j0:void 0}register(){xc(this)}}function Pi(n,e){return new TM(n,e)}function br(n,e){return(t,i)=>{{const s={ea:!0};i&&Object.assign(s,i),t=gm(t,void 0,void 0,s);try{const a=new n,o=a.v;Jh(e)(o,t);var r=a}finally{xm(t)}}return r}}function Nc(n){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Lm(this.v,e,Qr(Lc,Ic,Dc,n)),zs(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];t.set(o,s),s+=o.length}return e.l=[t],t}}var hp=class extends ve{constructor(n){super(n)}},dp=[0,dr,ln((function(n,e,t){return n.h===2&&(un(e,t,(n=vm(n))===Xr()?void 0:n),!0)}),(function(n,e,t){if(e!=null){if(e instanceof ve){const i=e.Ra;return void(i?(e=i(e),e!=null&&wc(n,t,kh(e,!0).buffer)):Fs(Lu,3))}if(Array.isArray(e))return void Fs(Lu,3)}Om(n,e,t)}),Mm)];let Cl,fp=globalThis.trustedTypes;function pp(n){var e;return Cl===void 0&&(Cl=(function(){let t=null;if(!fp)return t;try{const i=r=>r;t=fp.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t})()),n=(e=Cl)?e.createScriptURL(n):n,new class{constructor(t){this.g=t}toString(){return this.g+""}}(n)}function Oo(n,...e){if(e.length===0)return pp(n[0]);let t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return pp(t)}var zm=[0,Ht,cn,It,-1,so,cn,-1,It],AM=class extends ve{constructor(n){super(n)}},Gm=[0,It,gt,It,cn,-1,la((function(n,e,t){return(n.h===0||n.h===2)&&(e=sa(e,0|e[_e],t),n.h==2?Tc(n,lM,e):e.push(_r(n.g)),!0)}),(function(n,e,t){if((e=ca(ta,e))!=null&&e.length){t=Wh(n,t);for(let i=0;i<e.length;i++)Ac(n.g,e[i]);Xh(n,t)}}),Sm),gt,-1,[0,It,-1],cn,It,-1],Hm=[0,3,It,-1,2,[0,[2],Ht,Et,[0,ln((function(n,e,t){return n.h===0&&(un(e,t,Ei(n.g)),!0)}),Bm,Kh)]],[0,cn,It,cn,It,cn,It,gt,-1],[0,[3,4],gt,-1,Et,[0,Ht],Et,[0,cn]],[0]],Wm=[0,gt,-2],mp=class extends ve{constructor(n){super(n)}},Xm=[0],qm=[0,Ht,It,1,It,-4],Bn=class extends ve{constructor(n){super(n,2)}},qt={};qt[336783863]=[0,gt,It,-1,Ht,[0,[1,2,3,4,5,6,7,8,9],Et,Xm,Et,Gm,Et,Wm,Et,qm,Et,zm,Et,[0,gt,-2],Et,[0,gt,cn],Et,Hm,Et,[0,cn,-1,It]],[0,gt],It,[0,[1,3],[2,4],Et,[0,so],-1,Et,[0,on],-1,Jt,[0,gt,-1]],gt];var gp=[0,Rl,-1,Gr,-3,Rl,so,dr,ys,Rl,-1,Gr,ys,Gr,-2,dr];function At(n,e){Ec(n,3,e)}function tt(n,e){Ec(n,4,e)}var En=class extends ve{constructor(n){super(n,500)}o(n){return Pe(this,0,7,n)}},Pa=[-1,{}],xp=[0,gt,1,Pa],_p=[0,gt,on,Pa];function $n(n,e){Bh(n,1,En,e)}function Dt(n,e){Ec(n,10,e)}function st(n,e){Ec(n,15,e)}var kn=class extends ve{constructor(n){super(n,500)}o(n){return Pe(this,0,1001,n)}},Ym=[-500,Jt,[-500,dr,-1,on,-3,[-2,qt,It],Jt,dp,ys,-1,xp,_p,Jt,[0,dr,Gr],dr,gp,ys,on,987,on],4,Jt,[-500,gt,-1,[-1,{}],998,gt],Jt,[-500,gt,on,-1,[-2,{},It],997,on,-1],ys,Jt,[-500,gt,on,Pa,998,on],on,ys,xp,_p,Jt,[0,dr,-1,Pa],on,-2,gp,dr,-1,Gr,[0,Gr,EM],978,Pa,Jt,dp];kn.prototype.g=Nc(Ym);var wM=br(kn,Ym),RM=class extends ve{constructor(n){super(n)}},jm=class extends ve{constructor(n){super(n)}g(){return Qi(this,RM,1)}},Km=[0,Jt,[0,Ht,zt,gt,-1]],Uc=br(jm,Km),CM=class extends ve{constructor(n){super(n)}},LM=class extends ve{constructor(n){super(n)}},Ll=class extends ve{constructor(n){super(n)}l(){return rt(this,CM,2)}g(){return Qi(this,LM,5)}},$m=br(class extends ve{constructor(n){super(n)}},[0,on,so,Qh,[0,cn,[0,Ht,-3],[0,zt,-3],[0,Ht,-1,[0,Jt,[0,Ht,-2]]],Jt,[0,zt,-1,gt,zt]],gt,-1,vr,Jt,[0,Ht,zt],on,vr]),Zm=class extends ve{constructor(n){super(n)}},Es=br(class extends ve{constructor(n){super(n)}},[0,Jt,[0,zt,-4]]),Jm=class extends ve{constructor(n){super(n)}},ao=br(class extends ve{constructor(n){super(n)}},[0,Jt,[0,zt,-4]]),PM=class extends ve{constructor(n){super(n)}},IM=[0,Ht,-1,Qh,cn],Qm=class extends ve{constructor(n){super(n)}};Qm.prototype.g=Nc([0,zt,-4,vr]);var DM=class extends ve{constructor(n){super(n)}},NM=br(class extends ve{constructor(n){super(n)}},[0,Jt,[0,1,Ht,gt,Km],vr]),vp=class extends ve{constructor(n){super(n)}},UM=class extends ve{constructor(n){super(n)}na(){const n=Pt(this,1,void 0,void 0,cm);return n??Xr()}},FM=class extends ve{constructor(n){super(n)}},eg=[1,2],OM=br(class extends ve{constructor(n){super(n)}},[0,Jt,[0,eg,Et,[0,Qh],Et,[0,Vm],Ht,gt],vr]),ed=class extends ve{constructor(n){super(n)}},tg=[0,gt,Ht,zt,on,-1],yp=class extends ve{constructor(n){super(n)}},BM=[0,It,-1],bp=class extends ve{constructor(n){super(n)}},$o=[1,2,3,4,5,6],hc=class extends ve{constructor(n){super(n)}g(){return Pt(this,1,void 0,void 0,cm)!=null}l(){return nn(Pt(this,2))!=null}},Ft=class extends ve{constructor(n){super(n)}g(){return Z0(Pt(this,2))??!1}},ng=[0,Vm,gt,[0,Ht,vr,-1],[0,MM,vr]],Gt=[0,ng,It,[0,$o,Et,qm,Et,Gm,Et,zm,Et,Xm,Et,Wm,Et,Hm],cn],Fc=class extends ve{constructor(n){super(n)}},td=[0,Gt,zt,-1,Ht],kM=Pi(502141897,Fc);qt[502141897]=td;var VM=br(class extends ve{constructor(n){super(n)}},[0,[0,cn,-1,yM,SM],IM]),ig=class extends ve{constructor(n){super(n)}},rg=class extends ve{constructor(n){super(n)}},Fu=[0,Gt,zt,[0,Gt],It],zM=Pi(508968150,rg);qt[508968150]=[0,Gt,td,Fu,zt,[0,[0,ng]]],qt[508968149]=Fu;var _s=class extends ve{constructor(n){super(n)}l(){return rt(this,ed,2)}g(){pt(this,2)}},sg=[0,Gt,tg];qt[478825465]=sg;var GM=class extends ve{constructor(n){super(n)}},ag=class extends ve{constructor(n){super(n)}},nd=class extends ve{constructor(n){super(n)}},id=class extends ve{constructor(n){super(n)}},og=class extends ve{constructor(n){super(n)}},Mp=[0,Gt,[0,Gt],sg,-1],cg=[0,Gt,zt,Ht],rd=[0,Gt,zt],lg=[0,Gt,cg,rd,zt],HM=Pi(479097054,og);qt[479097054]=[0,Gt,lg,Mp],qt[463370452]=Mp,qt[464864288]=cg;var WM=Pi(462713202,id);qt[462713202]=lg,qt[474472470]=rd;var XM=class extends ve{constructor(n){super(n)}},ug=class extends ve{constructor(n){super(n)}},hg=class extends ve{constructor(n){super(n)}},dg=class extends ve{constructor(n){super(n)}},sd=[0,Gt,zt,-1,Ht],Ou=[0,Gt,zt,It];dg.prototype.g=Nc([0,Gt,rd,[0,Gt],td,Fu,sd,Ou]);var fg=class extends ve{constructor(n){super(n)}},qM=Pi(456383383,fg);qt[456383383]=[0,Gt,tg];var pg=class extends ve{constructor(n){super(n)}},YM=Pi(476348187,pg);qt[476348187]=[0,Gt,BM];var mg=class extends ve{constructor(n){super(n)}},Sp=class extends ve{constructor(n){super(n)}},gg=[0,cn,-1],jM=Pi(458105876,class extends ve{constructor(n){super(n)}g(){let n;var e=this.v;const t=0|e[_e];return n=Un(this,t),e=(function(i,r,s,a){var o=Sp;!a&&ia(i)&&(s=0|(r=i.v)[_e]);var c=Ji(r,2);if(i=!1,c==null){if(a)return ip();c=[]}else if(c.constructor===Zi){if(!(2&c.J)||a)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[_e])):c=[];if(a){if(!c.length)return ip();i||(i=!0,eo(c))}else i&&(i=!1,Ha(c),c=lm(c));return!i&&32&s&&Qa(c,32),s=Xt(r,s,2,a=new Zi(c,o,$b,void 0)),i||Jr(r,s),a})(this,e,t,n),!n&&Sp&&(e.ra=!0),e}});qt[458105876]=[0,gg,vM,[!0,vr,[0,gt,-1,on]],[0,so,It,cn]];var ad=class extends ve{constructor(n){super(n)}},xg=Pi(458105758,ad);qt[458105758]=[0,Gt,gt,gg];var Pl=class extends ve{constructor(n){super(n)}},Ep=[0,bM,-1,Gr],KM=class extends ve{constructor(n){super(n)}},_g=class extends ve{constructor(n){super(n)}},Bu=[1,2];_g.prototype.g=Nc([0,Bu,Et,Ep,Et,[0,Jt,Ep]]);var vg=class extends ve{constructor(n){super(n)}},$M=Pi(443442058,vg);qt[443442058]=[0,Gt,gt,Ht,zt,on,-1,It,zt],qt[514774813]=sd;var yg=class extends ve{constructor(n){super(n)}},ZM=Pi(516587230,yg);function ku(n,e){return e=e?e.clone():new ed,n.displayNamesLocale!==void 0?pt(e,1,io(n.displayNamesLocale)):n.displayNamesLocale===void 0&&pt(e,1),n.maxResults!==void 0?er(e,2,n.maxResults):"maxResults"in n&&pt(e,2),n.scoreThreshold!==void 0?Se(e,3,n.scoreThreshold):"scoreThreshold"in n&&pt(e,3),n.categoryAllowlist!==void 0?oc(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&pt(e,4),n.categoryDenylist!==void 0?oc(e,5,n.categoryDenylist):"categoryDenylist"in n&&pt(e,5),e}function bg(n){const e=Number(n);return Number.isSafeInteger(e)?e:String(n)}function od(n,e=-1,t=""){return{categories:n.map((i=>({index:jn(i,1)??0??-1,score:Ot(i,2)??0,categoryName:nn(Pt(i,3))??""??"",displayName:nn(Pt(i,4))??""??""}))),headIndex:e,headName:t}}function JM(n){const e={classifications:Qi(n,DM,1).map((t=>od(rt(t,jm,4)?.g()??[],jn(t,2)??0,nn(Pt(t,3))??"")))};return(function(t){return t==null?t:typeof t=="bigint"?(Pu(t)?t=Number(t):(t=to(64,t),t=Pu(t)?Number(t):String(t)),t):no(t)?typeof t=="number"?Rh(t):em(t):void 0})(Pt(n,2,void 0,void 0,sc))!=null&&(e.timestampMs=bg(Pt(n,2,void 0,void 0,sc)??am)),e}function Mg(n){var e=Or(n,3,vi,Fr()),t=Or(n,2,ta,Fr()),i=Or(n,1,nn,Fr()),r=Or(n,9,nn,Fr());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:t[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=rt(n,Ll,4)?.l())&&(s.boundingBox={originX:jn(e,1,or)??0,originY:jn(e,2,or)??0,width:jn(e,3,or)??0,height:jn(e,4,or)??0,angle:0}),rt(n,Ll,4)?.g().length)for(const a of rt(n,Ll,4).g())s.keypoints.push({x:Pt(a,1,void 0,or,vi)??0,y:Pt(a,2,void 0,or,vi)??0,score:Pt(a,4,void 0,or,vi)??0,label:nn(Pt(a,3,void 0,or))??""});return s}function Oc(n){const e=[];for(const t of Qi(n,Jm,1))e.push({x:Ot(t,1)??0,y:Ot(t,2)??0,z:Ot(t,3)??0,visibility:Ot(t,4)??0});return e}function Ia(n){const e=[];for(const t of Qi(n,Zm,1))e.push({x:Ot(t,1)??0,y:Ot(t,2)??0,z:Ot(t,3)??0,visibility:Ot(t,4)??0});return e}function Tp(n){return Array.from(n,(e=>e>127?e-256:e))}function Ap(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,r=0;for(let s=0;s<n.length;s++)t+=n[s]*e[s],i+=n[s]*n[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*r)}let Bo;qt[516587230]=[0,Gt,sd,Ou,zt],qt[518928384]=Ou;const QM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Sg(n){if(n)return!0;if(Bo===void 0)try{await WebAssembly.instantiate(QM),Bo=!0}catch{Bo=!1}return Bo}async function ko(n,e,t){return{wasmLoaderPath:`${e}/${n}_${t=`wasm${t?"_module":""}${await Sg(t)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var vs=class{};function Eg(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function wp(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise(((t,i)=>{e.addEventListener("load",(()=>{t()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(n.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const t=self.import;t?await t(n.toString()):await import(n.toString())}}}function Tg(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function be(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function Rp(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Tg(e);return!n.l||i===n.i.canvas.width&&r===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=r),[i,r]}function Cp(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=n.i.stringToNewUTF8(e[r]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const r of i)n.i._free(r);n.i._free(e)}function di(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function cr(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(r,s,a)=>{s?(t(i,a),i=[]):i.push(r)}}vs.forVisionTasks=function(n,e=!1){return ko("vision",n??Oo``,e)},vs.forTextTasks=function(n,e=!1){return ko("text",n??Oo``,e)},vs.forGenAiTasks=function(n,e=!1){return ko("genai",n??Oo``,e)},vs.forAudioTasks=function(n,e=!1){return ko("audio",n??Oo``,e)},vs.isSimdSupported=function(n=!1){return Sg(n)};async function eS(n,e,t,i){return n=await(async(r,s,a,o,c)=>{if(s&&await wp(s),!self.ModuleFactory||a&&(await wp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&r.endsWith(".data")?t.assetBinaryPath.toString():r}),await n.o(i),n}function Il(n,e){const t=rt(n.baseOptions,hc,1)||new hc;typeof e=="string"?(pt(t,2,io(e)),pt(t,1)):e instanceof Uint8Array&&(pt(t,1,Eh(e,!1)),pt(t,2)),Pe(n.baseOptions,0,1,t)}function Lp(n){try{const e=n.H.length;if(e===1)throw Error(n.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.H.map((t=>t.message)).join(", "))}finally{n.H=[]}}function fe(n,e){n.C=Math.max(n.C,e)}function Bc(n,e){n.B=new En,Fn(n.B,2,"PassThroughCalculator"),At(n.B,"free_memory"),tt(n.B,"free_memory_unused_out"),Dt(e,"free_memory"),$n(e,n.B)}function Gs(n,e){At(n.B,e),tt(n.B,e+"_unused_out")}function kc(n){n.g.addBoolToStream(!0,"free_memory",n.C)}var Vu=class{constructor(n){this.g=n,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){if(e){const t=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(rt(this.baseOptions,hc,1)?.g()||rt(this.baseOptions,hc,1)?.l()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=rt(i.baseOptions,bp,3);if(!s){var a=s=new bp,o=new mp;La(a,4,$o,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new AM,La(r,2,$o,a)):(r=s,a=new mp,La(r,4,$o,a))),Pe(i.baseOptions,0,3,s)})(this,t),t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Il(this,"/model.dat"),this.m(),this.L()}));if(t.modelAssetBuffer instanceof Uint8Array)Il(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(t.modelAssetBuffer).then((i=>{Il(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let n;if(this.g.ca((e=>{n=wM(e)})),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener(((t,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(n,e),this.B=void 0,Lp(this)}finishProcessing(){this.g.finishProcessing(),Lp(this)}close(){this.B=void 0,this.g.closeGraph()}};function mr(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Vu.prototype.close=Vu.prototype.close;class tS{constructor(e,t,i,r){this.g=e,this.h=t,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Pp(n,e,t){const i=n.g;if(t=mr(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function Ip(n,e){const t=n.g,i=mr(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const r=mr(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.O),t.vertexAttribPointer(n.O,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const s=mr(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.L),t.vertexAttribPointer(n.L,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new tS(t,i,r,s)}function cd(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function nS(n,e,t,i){return cd(n,e),n.h||(n.m(),n.D()),t?(n.u||(n.u=Ip(n,!0)),t=n.u):(n.A||(n.A=Ip(n,!1)),t=n.A),e.useProgram(n.h),t.bind(),n.l(),n=i(),t.g.bindVertexArray(null),n}function Ag(n,e,t){return cd(n,e),n=mr(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function wg(n,e,t){cd(n,e),n.B||(n.B=mr(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function iS(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var Rg=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=mr(n.createProgram(),"Failed to create WebGL program"),this.X=Pp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.W=Pp(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.O=n.getAttribLocation(this.h,"aVertex"),this.L=n.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.X),n.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Gi(n,e){switch(e){case 0:return n.g.find((t=>t instanceof Uint8Array));case 1:return n.g.find((t=>t instanceof Float32Array));case 2:return n.g.find((t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function zu(n){var e=Gi(n,1);if(!e){if(e=Gi(n,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(n.width*n.height);const i=Hs(n);var t=ld(n);if(wg(t,i,Cg(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=t[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function Cg(n){let e=Gi(n,2);if(!e){const t=Hs(n);e=Pg(n);const i=zu(n),r=Lg(n);t.texImage2D(t.TEXTURE_2D,0,r,n.width,n.height,0,t.RED,t.FLOAT,i),Gu(n)}return e}function Hs(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=mr(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Lg(n){if(n=Hs(n),!Vo)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))Vo=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Vo=n.R16F}return Vo}function ld(n){return n.l||(n.l=new Rg),n.l}function Pg(n){const e=Hs(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=Gi(n,2);return t||(t=Ag(ld(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.j=!0),e.bindTexture(e.TEXTURE_2D,t),t}function Gu(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var Vo,Zt=class{constructor(n,e,t,i,r,s,a){this.g=n,this.m=e,this.j=t,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Dp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Gi(this,0)}ka(){return!!Gi(this,1)}R(){return!!Gi(this,2)}ja(){return(e=Gi(n=this,0))||(e=zu(n),e=new Uint8Array(e.map((t=>Math.round(255*t)))),n.g.push(e)),e;var n,e}ia(){return zu(this)}N(){return Cg(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Hs(this),r=ld(this);i.activeTexture(i.TEXTURE1),t=Ag(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);const s=Lg(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),wg(r,i,t),nS(r,i,!1,(()=>{Pg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Gu(this)})),iS(r),Gu(this)}}n.push(t)}return new Zt(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Hs(this).deleteTexture(Gi(this,2)),Dp=-1}};Zt.prototype.close=Zt.prototype.close,Zt.prototype.clone=Zt.prototype.clone,Zt.prototype.getAsWebGLTexture=Zt.prototype.N,Zt.prototype.getAsFloat32Array=Zt.prototype.ia,Zt.prototype.getAsUint8Array=Zt.prototype.ja,Zt.prototype.hasWebGLTexture=Zt.prototype.R,Zt.prototype.hasFloat32Array=Zt.prototype.ka,Zt.prototype.hasUint8Array=Zt.prototype.Fa;var Dp=250;function ci(...n){return n.map((([e,t])=>({start:e,end:t})))}const rS=(function(n){return class extends n{Ja(){this.i._registerModelResourcesGraphService()}}})((Np=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Eg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),be(this,i||"input_audio",(s=>{be(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,n,e??0,t)}))}))}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ca(n){di(this,"__graph_config__",(e=>{n(e)})),be(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),be(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,t,a,r)}))}addGpuBufferToStream(n,e,t){be(this,e,(i=>{const[r,s]=Rp(this,n,i);this.i._addBoundTextureToStream(i,r,s,t)}))}addBoolToStream(n,e,t){be(this,e,(i=>{this.i._addBoolToInputStream(n,i,t)}))}addDoubleToStream(n,e,t){be(this,e,(i=>{this.i._addDoubleToInputStream(n,i,t)}))}addFloatToStream(n,e,t){be(this,e,(i=>{this.i._addFloatToInputStream(n,i,t)}))}addIntToStream(n,e,t){be(this,e,(i=>{this.i._addIntToInputStream(n,i,t)}))}addUintToStream(n,e,t){be(this,e,(i=>{this.i._addUintToInputStream(n,i,t)}))}addStringToStream(n,e,t){be(this,e,(i=>{be(this,n,(r=>{this.i._addStringToInputStream(r,i,t)}))}))}addStringRecordToStream(n,e,t){be(this,e,(i=>{Cp(this,Object.keys(n),(r=>{Cp(this,Object.values(n),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,t)}))}))}))}addProtoToStream(n,e,t,i){be(this,t,(r=>{be(this,e,(s=>{const a=this.i._malloc(n.length);this.i.HEAPU8.set(n,a),this.i._addProtoToInputStream(a,n.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(n,e){be(this,n,(t=>{this.i._addEmptyPacketToInputStream(t,e)}))}addBoolVectorToStream(n,e,t){be(this,e,(i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,t)}))}addDoubleVectorToStream(n,e,t){be(this,e,(i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,t)}))}addFloatVectorToStream(n,e,t){be(this,e,(i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,t)}))}addIntVectorToStream(n,e,t){be(this,e,(i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,t)}))}addUintVectorToStream(n,e,t){be(this,e,(i=>{const r=this.i._allocateUintVector(n.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,t)}))}addStringVectorToStream(n,e,t){be(this,e,(i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)be(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,t)}))}addBoolToInputSidePacket(n,e){be(this,e,(t=>{this.i._addBoolToInputSidePacket(n,t)}))}addDoubleToInputSidePacket(n,e){be(this,e,(t=>{this.i._addDoubleToInputSidePacket(n,t)}))}addFloatToInputSidePacket(n,e){be(this,e,(t=>{this.i._addFloatToInputSidePacket(n,t)}))}addIntToInputSidePacket(n,e){be(this,e,(t=>{this.i._addIntToInputSidePacket(n,t)}))}addUintToInputSidePacket(n,e){be(this,e,(t=>{this.i._addUintToInputSidePacket(n,t)}))}addStringToInputSidePacket(n,e){be(this,e,(t=>{be(this,n,(i=>{this.i._addStringToInputSidePacket(i,t)}))}))}addProtoToInputSidePacket(n,e,t){be(this,t,(i=>{be(this,e,(r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(n,e){be(this,e,(t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,t)}))}addDoubleVectorToInputSidePacket(n,e){be(this,e,(t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,t)}))}addFloatVectorToInputSidePacket(n,e){be(this,e,(t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,t)}))}addIntVectorToInputSidePacket(n,e){be(this,e,(t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,t)}))}addUintVectorToInputSidePacket(n,e){be(this,e,(t=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,t)}))}addStringVectorToInputSidePacket(n,e){be(this,e,(t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)be(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,t)}))}attachBoolListener(n,e){di(this,n,e),be(this,n,(t=>{this.i._attachBoolListener(t)}))}attachBoolVectorListener(n,e){cr(this,n,e),be(this,n,(t=>{this.i._attachBoolVectorListener(t)}))}attachIntListener(n,e){di(this,n,e),be(this,n,(t=>{this.i._attachIntListener(t)}))}attachIntVectorListener(n,e){cr(this,n,e),be(this,n,(t=>{this.i._attachIntVectorListener(t)}))}attachUintListener(n,e){di(this,n,e),be(this,n,(t=>{this.i._attachUintListener(t)}))}attachUintVectorListener(n,e){cr(this,n,e),be(this,n,(t=>{this.i._attachUintVectorListener(t)}))}attachDoubleListener(n,e){di(this,n,e),be(this,n,(t=>{this.i._attachDoubleListener(t)}))}attachDoubleVectorListener(n,e){cr(this,n,e),be(this,n,(t=>{this.i._attachDoubleVectorListener(t)}))}attachFloatListener(n,e){di(this,n,e),be(this,n,(t=>{this.i._attachFloatListener(t)}))}attachFloatVectorListener(n,e){cr(this,n,e),be(this,n,(t=>{this.i._attachFloatVectorListener(t)}))}attachStringListener(n,e){di(this,n,e),be(this,n,(t=>{this.i._attachStringListener(t)}))}attachStringVectorListener(n,e){cr(this,n,e),be(this,n,(t=>{this.i._attachStringVectorListener(t)}))}attachProtoListener(n,e,t){di(this,n,e),be(this,n,(i=>{this.i._attachProtoListener(i,t||!1)}))}attachProtoVectorListener(n,e,t){cr(this,n,e),be(this,n,(i=>{this.i._attachProtoVectorListener(i,t||!1)}))}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),di(this,n,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),be(this,n,(i=>{this.i._attachAudioListener(i,t||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Np{get ga(){return this.i}pa(n,e,t){be(this,e,(i=>{const[r,s]=Rp(this,n,i);this.ga._addBoundTextureAsImageToStream(i,r,s,t)}))}Z(n,e){di(this,n,e),be(this,n,(t=>{this.ga._attachImageListener(t)}))}aa(n,e){cr(this,n,e),be(this,n,(t=>{this.ga._attachImageVectorListener(t)}))}}));var Np,li=class extends rS{};async function nt(n,e,t){return(async function(i,r,s,a){return eS(i,r,s,a)})(n,t.canvas??(Eg()?void 0:document.createElement("canvas")),e,t)}function Ig(n,e,t,i){if(n.U){const s=new Qm;if(t?.regionOfInterest){if(!n.oa)throw Error("This task doesn't support region-of-interest.");var r=t.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Se(s,1,(r.left+r.right)/2),Se(s,2,(r.top+r.bottom)/2),Se(s,4,r.right-r.left),Se(s,3,r.bottom-r.top)}else Se(s,1,.5),Se(s,2,.5),Se(s,4,1),Se(s,3,1);if(t?.rotationDegrees){if(t?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Se(s,5,-Math.PI*t.rotationDegrees/180),t?.rotationDegrees%180!=0){const[a,o]=Tg(e);t=Ot(s,3)*o/a,r=Ot(s,4)*a/o,Se(s,4,t),Se(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.U,i)}n.g.pa(e,n.X,i??performance.now()),n.finishProcessing()}function ui(n,e,t){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Ig(n,e,t,n.C+1)}function Ii(n,e,t,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Ig(n,e,t,i)}function Ws(n,e,t,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return n=new Zt([r],t,!1,n.g.i.canvas,n.P,s,e),i?n.clone():n}var On=class extends Vu{constructor(n,e,t,i){super(n),this.g=n,this.X=e,this.U=t,this.oa=i,this.P=new Rg}l(n,e=!0){if("runningMode"in n&&pt(this.baseOptions,2,Xa(!!n.runningMode&&n.runningMode!=="IMAGE")),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.P.close(),super.close()}};On.prototype.close=On.prototype.close;var Gn=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Pe(n=this.h=new Fc,0,1,e=new Ft),Se(this.h,2,.5),Se(this.h,3,.3)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Se(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Se(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,e){return this.j={detections:[]},ui(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Ii(this,n,t,e),this.j}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect_in"),st(n,"detections");const e=new Bn;Li(e,kM,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect_in"),tt(t,"DETECTIONS:detections"),t.o(e),$n(n,t),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=$m(s),this.j.detections.push(Mg(i));fe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Gn.prototype.detectForVideo=Gn.prototype.G,Gn.prototype.detect=Gn.prototype.F,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=async function(n,e){return nt(Gn,n,{baseOptions:{modelAssetPath:e}})},Gn.createFromModelBuffer=function(n,e){return nt(Gn,n,{baseOptions:{modelAssetBuffer:e}})},Gn.createFromOptions=function(n,e){return nt(Gn,n,e)};var ud=ci([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),hd=ci([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),dd=ci([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Dg=ci([474,475],[475,476],[476,477],[477,474]),fd=ci([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),pd=ci([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Ng=ci([469,470],[470,471],[471,472],[472,469]),md=ci([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Ug=[...ud,...hd,...dd,...fd,...pd,...md],Fg=ci([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Up(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var St=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Pe(n=this.h=new rg,0,1,e=new Ft),this.A=new ig,Pe(this.h,0,3,this.A),this.u=new Fc,Pe(this.h,0,2,this.u),er(this.u,4,1),Se(this.u,2,.5),Se(this.A,2,.5),Se(this.h,4,.5)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"numFaces"in n&&er(this.u,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Se(this.u,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Se(this.A,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,e){return Up(this),ui(this,n,e),this.j}G(n,e,t){return Up(this),Ii(this,n,t,e),this.j}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect"),st(n,"face_landmarks");const e=new Bn;Li(e,zM,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),tt(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),$n(n,t),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=ao(s),this.j.faceLandmarks.push(Oc(i));fe(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{fe(this,i)})),this.outputFaceBlendshapes&&(st(n,"blendshapes"),tt(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Uc(s),this.j.faceBlendshapes.push(od(i.g()??[]));fe(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{fe(this,i)}))),this.outputFacialTransformationMatrixes&&(st(n,"face_geometry"),tt(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=rt(i=VM(s),PM,2))&&this.j.facialTransformationMatrixes.push({rows:jn(i,1)??0??0,columns:jn(i,2)??0??0,data:Or(i,3,vi,Fr()).slice()??[]});fe(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{fe(this,i)}))),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};St.prototype.detectForVideo=St.prototype.G,St.prototype.detect=St.prototype.F,St.prototype.setOptions=St.prototype.o,St.createFromModelPath=function(n,e){return nt(St,n,{baseOptions:{modelAssetPath:e}})},St.createFromModelBuffer=function(n,e){return nt(St,n,{baseOptions:{modelAssetBuffer:e}})},St.createFromOptions=function(n,e){return nt(St,n,e)},St.FACE_LANDMARKS_LIPS=ud,St.FACE_LANDMARKS_LEFT_EYE=hd,St.FACE_LANDMARKS_LEFT_EYEBROW=dd,St.FACE_LANDMARKS_LEFT_IRIS=Dg,St.FACE_LANDMARKS_RIGHT_EYE=fd,St.FACE_LANDMARKS_RIGHT_EYEBROW=pd,St.FACE_LANDMARKS_RIGHT_IRIS=Ng,St.FACE_LANDMARKS_FACE_OVAL=md,St.FACE_LANDMARKS_CONTOURS=Ug,St.FACE_LANDMARKS_TESSELATION=Fg;var gd=ci([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Fp(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Op(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function Bp(n,e=!0){const t=[];for(const r of n){var i=Uc(r);n=[];for(const s of i.g())i=e&&jn(s,1)!=null?jn(s,1)??0:-1,n.push({score:Ot(s,2)??0,index:i,categoryName:nn(Pt(s,3))??""??"",displayName:nn(Pt(s,4))??""??""});t.push(n)}return t}var Cn=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pe(n=this.j=new og,0,1,e=new Ft),this.u=new id,Pe(this.j,0,2,this.u),this.D=new nd,Pe(this.u,0,3,this.D),this.A=new ag,Pe(this.u,0,2,this.A),this.h=new GM,Pe(this.j,0,3,this.h),Se(this.A,2,.5),Se(this.u,4,.5),Se(this.D,2,.5)}get baseOptions(){return rt(this.j,Ft,1)}set baseOptions(n){Pe(this.j,0,1,n)}o(n){if(er(this.A,3,n.numHands??1),"minHandDetectionConfidence"in n&&Se(this.A,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.u,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Se(this.D,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new _s,t=e,i=ku(n.cannedGesturesClassifierOptions,rt(this.h,_s,3)?.l());Pe(t,0,2,i),Pe(this.h,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&rt(this.h,_s,3)?.g();return n.customGesturesClassifierOptions?(Pe(t=e=new _s,0,2,i=ku(n.customGesturesClassifierOptions,rt(this.h,_s,4)?.l())),Pe(this.h,0,4,e)):n.customGesturesClassifierOptions===void 0&&rt(this.h,_s,4)?.g(),this.l(n)}Ha(n,e){return Fp(this),ui(this,n,e),Op(this)}Ia(n,e,t){return Fp(this),Ii(this,n,t,e),Op(this)}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect"),st(n,"hand_gestures"),st(n,"hand_landmarks"),st(n,"world_hand_landmarks"),st(n,"handedness");const e=new Bn;Li(e,HM,this.j);const t=new En;Fn(t,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),tt(t,"HAND_GESTURES:hand_gestures"),tt(t,"LANDMARKS:hand_landmarks"),tt(t,"WORLD_LANDMARKS:world_hand_landmarks"),tt(t,"HANDEDNESS:handedness"),t.o(e),$n(n,t),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=ao(s);const a=[];for(const o of Qi(i,Jm,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.landmarks.push(a)}fe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{fe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Es(s);const a=[];for(const o of Qi(i,Zm,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.worldLandmarks.push(a)}fe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{fe(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...Bp(i,!1)),fe(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{fe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...Bp(i)),fe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function kp(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Cn.prototype.recognizeForVideo=Cn.prototype.Ia,Cn.prototype.recognize=Cn.prototype.Ha,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(n,e){return nt(Cn,n,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(n,e){return nt(Cn,n,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(n,e){return nt(Cn,n,e)},Cn.HAND_CONNECTIONS=gd;var Ln=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pe(n=this.h=new id,0,1,e=new Ft),this.u=new nd,Pe(this.h,0,3,this.u),this.j=new ag,Pe(this.h,0,2,this.j),er(this.j,3,1),Se(this.j,2,.5),Se(this.u,2,.5),Se(this.h,4,.5)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"numHands"in n&&er(this.j,3,n.numHands??1),"minHandDetectionConfidence"in n&&Se(this.j,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Se(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ui(this,n,e),kp(this)}G(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ii(this,n,t,e),kp(this)}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect"),st(n,"hand_landmarks"),st(n,"world_hand_landmarks"),st(n,"handedness");const e=new Bn;Li(e,WM,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),tt(t,"LANDMARKS:hand_landmarks"),tt(t,"WORLD_LANDMARKS:world_hand_landmarks"),tt(t,"HANDEDNESS:handedness"),t.o(e),$n(n,t),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=ao(s),this.landmarks.push(Oc(i));fe(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{fe(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Es(s),this.worldLandmarks.push(Ia(i));fe(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{fe(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Uc(c);const l=[];for(const u of i.g())l.push({score:Ot(u,2)??0,index:jn(u,1)??0??-1,categoryName:nn(Pt(u,3))??""??"",displayName:nn(Pt(u,4))??""??""});o.push(l)}a.call(s,...o),fe(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ln.prototype.detectForVideo=Ln.prototype.G,Ln.prototype.detect=Ln.prototype.F,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(n,e){return nt(Ln,n,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(n,e){return nt(Ln,n,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(n,e){return nt(Ln,n,e)},Ln.HAND_CONNECTIONS=gd;var Og=ci([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Vp(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function zp(n){try{if(!n.D)return n.h;n.D(n.h)}finally{kc(n)}}function zo(n,e){n=ao(n),e.push(Oc(n))}var Mt=class extends On{constructor(n,e){super(new li(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Pe(n=this.j=new dg,0,1,e=new Ft),this.I=new nd,Pe(this.j,0,2,this.I),this.W=new XM,Pe(this.j,0,3,this.W),this.u=new Fc,Pe(this.j,0,4,this.u),this.O=new ig,Pe(this.j,0,5,this.O),this.A=new ug,Pe(this.j,0,6,this.A),this.M=new hg,Pe(this.j,0,7,this.M),Se(this.u,2,.5),Se(this.u,3,.3),Se(this.O,2,.5),Se(this.A,2,.5),Se(this.A,3,.3),Se(this.M,2,.5),Se(this.I,2,.5)}get baseOptions(){return rt(this.j,Ft,1)}set baseOptions(n){Pe(this.j,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&Se(this.u,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Se(this.u,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Se(this.O,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Se(this.A,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Se(this.A,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Se(this.M,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Se(this.I,2,n.minHandLandmarksConfidence??.5),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:t,Vp(this),ui(this,n,i),zp(this)}G(n,e,t,i){const r=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:i,Vp(this),Ii(this,n,r,e),zp(this)}m(){var n=new kn;Dt(n,"input_frames_image"),st(n,"pose_landmarks"),st(n,"pose_world_landmarks"),st(n,"face_landmarks"),st(n,"left_hand_landmarks"),st(n,"left_hand_world_landmarks"),st(n,"right_hand_landmarks"),st(n,"right_hand_world_landmarks");const e=new Bn,t=new hp;Fn(t,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))pt(r,2,Sc(s,0,qa));else{if(!(typeof s=="string"||s instanceof Mi||Mh(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ur(r,2,Eh(s,!1),Xr())}})(t,this.j.g());const i=new En;Fn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Bh(i,8,hp,t),At(i,"IMAGE:input_frames_image"),tt(i,"POSE_LANDMARKS:pose_landmarks"),tt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),tt(i,"FACE_LANDMARKS:face_landmarks"),tt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),tt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),tt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),tt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),$n(n,i),Bc(this,n),this.g.attachProtoListener("pose_landmarks",((r,s)=>{zo(r,this.h.poseLandmarks),fe(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{fe(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Es(r),a.push(Ia(r)),fe(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{fe(this,r)})),this.outputPoseSegmentationMasks&&(tt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Gs(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Ws(this,r,!0,!this.D)],fe(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],fe(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{zo(r,this.h.faceLandmarks),fe(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{fe(this,r)})),this.outputFaceBlendshapes&&(st(n,"extra_blendshapes"),tt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Uc(r),a.push(od(r.g()??[]))),fe(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{fe(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{zo(r,this.h.leftHandLandmarks),fe(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{fe(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Es(r),a.push(Ia(r)),fe(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{fe(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{zo(r,this.h.rightHandLandmarks),fe(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{fe(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Es(r),a.push(Ia(r)),fe(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{fe(this,r)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Mt.prototype.detectForVideo=Mt.prototype.G,Mt.prototype.detect=Mt.prototype.F,Mt.prototype.setOptions=Mt.prototype.o,Mt.createFromModelPath=function(n,e){return nt(Mt,n,{baseOptions:{modelAssetPath:e}})},Mt.createFromModelBuffer=function(n,e){return nt(Mt,n,{baseOptions:{modelAssetBuffer:e}})},Mt.createFromOptions=function(n,e){return nt(Mt,n,e)},Mt.HAND_CONNECTIONS=gd,Mt.POSE_CONNECTIONS=Og,Mt.FACE_LANDMARKS_LIPS=ud,Mt.FACE_LANDMARKS_LEFT_EYE=hd,Mt.FACE_LANDMARKS_LEFT_EYEBROW=dd,Mt.FACE_LANDMARKS_LEFT_IRIS=Dg,Mt.FACE_LANDMARKS_RIGHT_EYE=fd,Mt.FACE_LANDMARKS_RIGHT_EYEBROW=pd,Mt.FACE_LANDMARKS_RIGHT_IRIS=Ng,Mt.FACE_LANDMARKS_FACE_OVAL=md,Mt.FACE_LANDMARKS_CONTOURS=Ug,Mt.FACE_LANDMARKS_TESSELATION=Fg;var Hn=class extends On{constructor(n,e){super(new li(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},Pe(n=this.h=new fg,0,1,e=new Ft)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return Pe(this.h,0,2,ku(n,rt(this.h,ed,2))),this.l(n)}sa(n,e){return this.j={classifications:[]},ui(this,n,e),this.j}ta(n,e,t){return this.j={classifications:[]},Ii(this,n,t,e),this.j}m(){var n=new kn;Dt(n,"input_image"),Dt(n,"norm_rect"),st(n,"classifications");const e=new Bn;Li(e,qM,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),At(t,"IMAGE:input_image"),At(t,"NORM_RECT:norm_rect"),tt(t,"CLASSIFICATIONS:classifications"),t.o(e),$n(n,t),this.g.attachProtoListener("classifications",((i,r)=>{this.j=JM(NM(i)),fe(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Hn.prototype.classifyForVideo=Hn.prototype.ta,Hn.prototype.classify=Hn.prototype.sa,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=function(n,e){return nt(Hn,n,{baseOptions:{modelAssetPath:e}})},Hn.createFromModelBuffer=function(n,e){return nt(Hn,n,{baseOptions:{modelAssetBuffer:e}})},Hn.createFromOptions=function(n,e){return nt(Hn,n,e)};var Pn=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect",!0),this.h=new pg,this.embeddings={embeddings:[]},Pe(n=this.h,0,1,e=new Ft)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){var e=this.h,t=rt(this.h,yp,2);return t=t?t.clone():new yp,n.l2Normalize!==void 0?pt(t,1,Xa(n.l2Normalize)):"l2Normalize"in n&&pt(t,1),n.quantize!==void 0?pt(t,2,Xa(n.quantize)):"quantize"in n&&pt(t,2),Pe(e,0,2,t),this.l(n)}za(n,e){return ui(this,n,e),this.embeddings}Aa(n,e,t){return Ii(this,n,t,e),this.embeddings}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect"),st(n,"embeddings_out");const e=new Bn;Li(e,YM,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),tt(t,"EMBEDDINGS:embeddings_out"),t.o(e),$n(n,t),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=OM(i),this.embeddings=(function(s){return{embeddings:Qi(s,FM,1).map((a=>{const o={headIndex:jn(a,3)??0??-1,headName:nn(Pt(a,4))??""??""};var c=a.v;return hm(c,0|c[_e],vp,wl(a,1))!==void 0?(a=Or(a=rt(a,vp,wl(a,1),void 0),1,vi,Fr()),o.floatEmbedding=a.slice()):(c=new Uint8Array(0),o.quantizedEmbedding=rt(a,UM,wl(a,2),void 0)?.na()?.h()??c),o})),timestampMs:bg(Pt(s,2,void 0,void 0,sc)??am)}})(i),fe(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=Ap(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=Ap(Tp(n.quantizedEmbedding),Tp(e.quantizedEmbedding))}return n},Pn.prototype.embedForVideo=Pn.prototype.Aa,Pn.prototype.embed=Pn.prototype.za,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(n,e){return nt(Pn,n,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(n,e){return nt(Pn,n,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(n,e){return nt(Pn,n,e)};var Hu=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach((n=>{n.close()})),this.categoryMask?.close()}};function sS(n){const e=(function(t){return Qi(t,En,1)})(n.ca()).filter((t=>(nn(Pt(t,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(n.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(rt(e[0],Bn,7)?.j()?.g()??new Map).forEach(((t,i)=>{n.u[Number(i)]=nn(Pt(t,1))??""}))}function Gp(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Hp(n){try{const e=new Hu(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{kc(n)}}Hu.prototype.close=Hu.prototype.close;var vn=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ad,this.A=new mg,Pe(this.h,0,3,this.A),Pe(n=this.h,0,1,e=new Ft)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,io(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}L(){sS(this)}segment(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,Gp(this),ui(this,n,i),Hp(this)}La(n,e,t,i){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,Gp(this),Ii(this,n,r,e),Hp(this)}Da(){return this.u}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect");const e=new Bn;Li(e,xg,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),t.o(e),$n(n,t),Bc(this,n),this.outputConfidenceMasks&&(st(n,"confidence_masks"),tt(t,"CONFIDENCE_MASKS:confidence_masks"),Gs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ws(this,s,!0,!this.j))),fe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],fe(this,i)}))),this.outputCategoryMask&&(st(n,"category_mask"),tt(t,"CATEGORY_MASK:category_mask"),Gs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ws(this,i,!1,!this.j),fe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,fe(this,i)}))),st(n,"quality_scores"),tt(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,fe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};vn.prototype.getLabels=vn.prototype.Da,vn.prototype.segmentForVideo=vn.prototype.La,vn.prototype.segment=vn.prototype.segment,vn.prototype.setOptions=vn.prototype.o,vn.createFromModelPath=function(n,e){return nt(vn,n,{baseOptions:{modelAssetPath:e}})},vn.createFromModelBuffer=function(n,e){return nt(vn,n,{baseOptions:{modelAssetBuffer:e}})},vn.createFromOptions=function(n,e){return nt(vn,n,e)};var Wu=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){this.confidenceMasks?.forEach((n=>{n.close()})),this.categoryMask?.close()}};Wu.prototype.close=Wu.prototype.close;var fi=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ad,this.u=new mg,Pe(this.h,0,3,this.u),Pe(n=this.h,0,1,e=new Ft)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}segment(n,e,t,i){const r=typeof t!="function"?t:{};if(this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.C+1,i=new _g,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Pl;ur(s,3,Xa(!0),!1),ur(s,1,Aa(e.keypoint.x),0),ur(s,2,Aa(e.keypoint.y),0),La(i,1,Bu,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new KM;for(s of e.scribble)ur(e=new Pl,3,Xa(!0),!1),ur(e,1,Aa(s.x),0),ur(e,2,Aa(s.y),0),Bh(o,1,Pl,e);La(i,2,Bu,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",t),ui(this,n,r);e:{try{const o=new Wu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{kc(this)}a=void 0}return a}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"roi_in"),Dt(n,"norm_rect_in");const e=new Bn;Li(e,xg,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),At(t,"IMAGE:image_in"),At(t,"ROI:roi_in"),At(t,"NORM_RECT:norm_rect_in"),t.o(e),$n(n,t),Bc(this,n),this.outputConfidenceMasks&&(st(n,"confidence_masks"),tt(t,"CONFIDENCE_MASKS:confidence_masks"),Gs(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Ws(this,s,!0,!this.j))),fe(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],fe(this,i)}))),this.outputCategoryMask&&(st(n,"category_mask"),tt(t,"CATEGORY_MASK:category_mask"),Gs(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=Ws(this,i,!1,!this.j),fe(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,fe(this,i)}))),st(n,"quality_scores"),tt(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,fe(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};fi.prototype.segment=fi.prototype.segment,fi.prototype.setOptions=fi.prototype.o,fi.createFromModelPath=function(n,e){return nt(fi,n,{baseOptions:{modelAssetPath:e}})},fi.createFromModelBuffer=function(n,e){return nt(fi,n,{baseOptions:{modelAssetBuffer:e}})},fi.createFromOptions=function(n,e){return nt(fi,n,e)};var Wn=class extends On{constructor(n,e){super(new li(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Pe(n=this.h=new vg,0,1,e=new Ft)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,io(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),n.maxResults!==void 0?er(this.h,3,n.maxResults):"maxResults"in n&&pt(this.h,3),n.scoreThreshold!==void 0?Se(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&pt(this.h,4),n.categoryAllowlist!==void 0?oc(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&pt(this.h,5),n.categoryDenylist!==void 0?oc(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&pt(this.h,6),this.l(n)}F(n,e){return this.j={detections:[]},ui(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Ii(this,n,t,e),this.j}m(){var n=new kn;Dt(n,"input_frame_gpu"),Dt(n,"norm_rect"),st(n,"detections");const e=new Bn;Li(e,$M,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),At(t,"IMAGE:input_frame_gpu"),At(t,"NORM_RECT:norm_rect"),tt(t,"DETECTIONS:detections"),t.o(e),$n(n,t),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=$m(s),this.j.detections.push(Mg(i));fe(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{fe(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Wn.prototype.detectForVideo=Wn.prototype.G,Wn.prototype.detect=Wn.prototype.F,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=async function(n,e){return nt(Wn,n,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(n,e){return nt(Wn,n,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(n,e){return nt(Wn,n,e)};var Xu=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){this.segmentationMasks?.forEach((n=>{n.close()}))}};function Wp(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function Xp(n){try{const e=new Xu(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.u)return e;n.u(e)}finally{kc(n)}}Xu.prototype.close=Xu.prototype.close;var In=class extends On{constructor(n,e){super(new li(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Pe(n=this.h=new yg,0,1,e=new Ft),this.A=new hg,Pe(this.h,0,3,this.A),this.j=new ug,Pe(this.h,0,2,this.j),er(this.j,4,1),Se(this.j,2,.5),Se(this.A,2,.5),Se(this.h,4,.5)}get baseOptions(){return rt(this.h,Ft,1)}set baseOptions(n){Pe(this.h,0,1,n)}o(n){return"numPoses"in n&&er(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Se(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Se(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Se(this.A,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:t,Wp(this),ui(this,n,i),Xp(this)}G(n,e,t,i){const r=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,Wp(this),Ii(this,n,r,e),Xp(this)}m(){var n=new kn;Dt(n,"image_in"),Dt(n,"norm_rect"),st(n,"normalized_landmarks"),st(n,"world_landmarks"),st(n,"segmentation_masks");const e=new Bn;Li(e,ZM,this.h);const t=new En;Fn(t,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),tt(t,"NORM_LANDMARKS:normalized_landmarks"),tt(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),$n(n,t),Bc(this,n),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=ao(s),this.landmarks.push(Oc(i));fe(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],fe(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Es(s),this.worldLandmarks.push(Ia(i));fe(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],fe(this,i)})),this.outputSegmentationMasks&&(tt(t,"SEGMENTATION_MASK:segmentation_masks"),Gs(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Ws(this,s,!0,!this.u))),fe(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],fe(this,i)}))),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};In.prototype.detectForVideo=In.prototype.G,In.prototype.detect=In.prototype.F,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(n,e){return nt(In,n,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(n,e){return nt(In,n,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(n,e){return nt(In,n,e)},In.POSE_CONNECTIONS=Og;function qp(n,e){if(e===Xx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Su||e===h0){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Su)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class aS extends $s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new MS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new ES(t)}),this.register(function(t){return new TS(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ca.extractUrlBase(e);a=Ca.resolveURL(l,this.path)}else a=Ca.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new C0(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bg){try{a[Ye.KHR_BINARY_GLTF]=new AS(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new kS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:a[h]=new lS;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[h]=new wS(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[h]=new RS;break;case Ye.KHR_MESH_QUANTIZATION:a[h]=new CS;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function oS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cS{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ue(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vh(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new S1(u),l.distance=h;break;case"spot":l=new b1(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}}class lS{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Wi}extendParams(e,t,i){const r=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,kt))}return Promise.all(r)}}class uS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(s)}}class dS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class fS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class pS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],gn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,kt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class mS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(o[0],o[1],o[2],gn),Promise.all(s)}}class xS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class _S{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(o[0],o[1],o[2],gn),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,kt)),Promise.all(s)}}class vS{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class yS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class bS{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class MS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class SS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=i.textureLoader;if(o.uri){const l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}}class ES{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,r.mode,r.filter),f})})}else return null}}class TS{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==Xn.TRIANGLES&&l.mode!==Xn.TRIANGLE_STRIP&&l.mode!==Xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Ge,m=new N,p=new yr,E=new N(1,1,1),M=new $_(g.geometry,g.material,d);for(let A=0;A<d;A++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,A),c.SCALE&&E.fromBufferAttribute(c.SCALE,A),M.setMatrixAt(A,_.compose(m,p,E));for(const A in c)if(A==="_COLOR_0"){const C=c[A];M.instanceColor=new Tu(C.array,C.itemSize,C.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,c[A]);Tt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Bg="glTF",Ma=12,Yp={JSON:1313821514,BIN:5130562};class AS{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ma),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ma,s=new DataView(e,Ma);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Yp.JSON){const l=new Uint8Array(e,Ma+a,o);this.content=i.decode(l)}else if(c===Yp.BIN){const l=Ma+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=qu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=qu[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=Ts[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},o,l,gn,d)})})}}class RS{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class CS{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class kg extends Ja{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(i-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,E=1-m,M=p-d+h;for(let A=0;A!==o;A++){const C=a[_+A+o],T=a[_+A+c]*u,L=a[g+A+o],F=a[g+A]*u;s[A]=E*C+M*T+m*L+p*F}return s}}const LS=new yr;class PS extends kg{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return LS.fromArray(s).normalize().toArray(s),s}}const Xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jp={9728:mn,9729:tn,9984:r0,9985:Ho,9986:Sa,9987:Hi},Kp={33071:gi,33648:Qo,10497:xr},Dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IS={CUBICSPLINE:void 0,LINEAR:Ba,STEP:Oa},Nl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DS(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ga({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ki})),n.DefaultMaterial}function Ir(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function NS(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function US(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function FS(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ul(t.attributes):e=n.indices+":"+Ul(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ul(n.targets[i]);return e}function Ul(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Yu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OS(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const BS=new Ge;class kS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new L0(this.options.manager):this.textureLoader=new T1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new C0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Ir(s,o,r),pi(o,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(Ca.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Dl[r.type],o=Ts[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Qt(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Dl[r.type],l=Ts[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let M=t.cache.get(E);M||(_=new l(o,p*f,r.count*f/u),M=new X_(_,f/u),t.cache.add(E,M)),m=new dh(M,c,d%f/u,g)}else o===null?_=new l(r.count*c):_=new l(o,d,r.count*c),m=new Qt(_,c,g);if(r.sparse!==void 0){const p=Dl.SCALAR,E=Ts[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,C=new E(a[1],M,r.sparse.count*p),T=new l(a[2],A,r.sparse.count*c);o!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,F=C.length;L<F;L++){const b=C[L];if(m.setX(b,T[L*c]),c>=2&&m.setY(b,T[L*c+1]),c>=3&&m.setZ(b,T[L*c+2]),c>=4&&m.setW(b,T[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=jp[d.magFilter]||tn,u.minFilter=jp[d.minFilter]||Hi,u.wrapS=Kp[d.wrapS]||xr,u.wrapT=Kp[d.wrapT]||xr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==mn&&u.minFilter!==tn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Wt(_);m.needsUpdate=!0,d(m)}),t.load(Ca.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),pi(h,a),h.userData.mimeType=a.mimeType||OS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new E0,bi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let c=this.cache.get(o);c||(c=new gh,bi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Ga}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const h=r[Ye.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],gn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,kt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=yn);const u=s.alphaMode||Nl.OPAQUE;if(u===Nl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Nl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Wi&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Wi&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Wi){const h=s.emissiveFactor;o.emissive=new Ue().setRGB(h[0],h[1],h[2],gn)}return s.emissiveTexture!==void 0&&a!==Wi&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,kt)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),pi(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ir(r,h,s),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return $p(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=FS(l),h=r[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=$p(new Mn,l,t),r[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?DS(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=a[f];let p;const E=l[f];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Y_(_,E):new Sn(_,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?p.geometry=qp(p.geometry,h0):m.mode===Xn.TRIANGLE_FAN&&(p.geometry=qp(p.geometry,Su));else if(m.mode===Xn.LINES)p=new e1(_,E);else if(m.mode===Xn.LINE_STRIP)p=new za(_,E);else if(m.mode===Xn.LINE_LOOP)p=new t1(_,E);else if(m.mode===Xn.POINTS)p=new n1(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&US(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),pi(p,s),m.extensions&&Ir(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Ir(r,h[0],s),h[0];const d=new _i;s.extensions&&Ir(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new pn(ft.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new _h(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Ge;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ph(o,c)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const f=r.channels[h],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,E=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,A=d.length;M<A;M++){const C=d[M],T=f[M],L=g[M],F=_[M],b=m[M];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const y=i._createAnimationTracks(C,T,L,F,b);if(y)for(let P=0;P<y.length;P++)p.push(y[P])}const E=new d1(s,void 0,p);return pi(E,r),E})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,BS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new S0:l.length>1?u=new _i:l.length===1?u=l[0]:u=new Tt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),pi(u,s),s.extensions&&Ir(i,u,s),s.matrix!==void 0){const h=new Ge;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new _i;i.name&&(s.name=r.createUniqueName(i.name)),pi(s,i),i.extensions&&Ir(t,s,i);const a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of r.associations)(d instanceof bi||d instanceof Wt)&&h.set(d,f);return u.traverse(d=>{const f=r.associations.get(d);f!=null&&h.set(d,f)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];lr[s.path]===lr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(lr[s.path]){case lr.weights:l=Ps;break;case lr.rotation:l=Is;break;case lr.translation:case lr.scale:l=Ds;break;default:i.itemSize===1?l=Ps:l=Ds;break}const u=r.interpolation!==void 0?IS[r.interpolation]:Ba,h=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+lr[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Yu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Is?PS:kg;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VS(n,e,t){const i=e.attributes,r=new Ti;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){const u=Yu(Ts[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,c=new N;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Yu(Ts[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new Ai;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function $p(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){n.setAttribute(o,c)})}for(const a in i){const o=qu[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return et.workingColorSpace!==gn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),pi(n,e),VS(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?NS(n,e.targets,t):n})}const Vg="capacitor-demo-settings-v1",Xs=new URLSearchParams(window.location.search),jr=Xs.get("obs")==="1",zg=Xs.get("controls")==="1"||Xs.get("config")==="1",zS=iE(),Kr=document.querySelector("#scene"),gr=document.querySelector("#status"),GS=document.querySelector("#controls"),yi=document.querySelector("#camera-feed"),Ya=document.querySelector("#morph"),Zp=document.querySelector("#yaw"),Jp=document.querySelector("#pitch"),HS=document.querySelector("#idle"),Qp=document.querySelector("#wire"),$r=document.querySelector("#face-toggle"),ju=document.querySelector("#preview-toggle"),Ku=document.querySelector("#head-mesh"),$u=document.querySelector("#face-y"),Zu=document.querySelector("#face-size"),Ju=document.querySelector("#edge-blur"),Qu=document.querySelector("#burn-edge"),Gg=document.querySelector("#eye-x"),Hg=document.querySelector("#eye-y"),Wg=document.querySelector("#eye-spread"),Xg=document.querySelector("#eye-rot"),qg=document.querySelector("#eye-scale"),Yg=document.querySelector("#mouth-x"),jg=document.querySelector("#mouth-y"),Kg=document.querySelector("#mouth-z"),$g=document.querySelector("#mouth-rot"),Zg=document.querySelector("#mouth-scale"),ja=document.querySelector("#background"),Jg=[...document.querySelectorAll(".preset")],WS=33,Zo=36.449543,Jo=14.488537,XS=.42,qS=.27,YS=new Set(["grid","transparent","green","black"]),jS={leftEye:{indices:[33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246],position:[7.736283,Zo+Jo+4.204556,4.178225],plane:[4,1.35],canvas:[320,150],shape:"eye",padX:1.55,padY:1.95},rightEye:{indices:[362,382,381,380,374,373,390,249,263,466,388,387,386,385,384,398],position:[7.736283,Zo+Jo+4.204558,-4.1782],plane:[4,1.35],canvas:[320,150],shape:"eye",padX:1.55,padY:1.95},mouth:{indices:[0,13,14,17,37,39,40,61,78,80,81,82,87,88,91,95,178,181,267,269,270,291,308,310,311,312,317,318,321,324,402,405],position:[8.69637,Zo+Jo-.420532,-6e-6],plane:[4.9,1.65],canvas:[384,164],shape:"mouth",padX:1.25,padY:1.75}};document.body.dataset.mode=jr?"obs":"app";document.body.dataset.config=zg?"1":"0";GS.hidden=jr&&!zg;ja.value=aE(sE("bg",jr?"transparent":ja.value));$r.checked=eh("face",jr);const Mr=new Mb({canvas:Kr,antialias:!0,alpha:!0,powerPreference:"high-performance"});Mr.setPixelRatio(Math.min(window.devicePixelRatio,2));Mr.outputColorSpace=kt;Mr.toneMapping=n0;Mr.toneMappingExposure=1.05;Mr.setClearColor(0,0);const ua=new W_,Ka=new pn(33,1,.01,100);Ka.position.set(0,.45,6.3);Ka.lookAt(0,.32,0);const qn=new _i;ua.add(qn);const Qg=new vh(8060813,3.4);Qg.position.set(-3.4,3.2,4.2);ua.add(Qg);const ex=new vh(16777215,2.15);ex.position.set(3.8,4.7,5.4);ua.add(ex);const KS=new v1(9356543,1314829,1.8);ua.add(KS);const tx=cE();ua.add(tx);const $S=new L0,Fl=new Map,B={model:null,morphMeshes:[],drag:!1,startX:0,startY:0,yaw:0,pitch:0,pointerYaw:0,pointerPitch:0,baseAvatarScale:1,headPoseActive:!1,headYaw:0,headPitch:0,headRoll:0,headX:0,headY:0,headScale:1,targetMorph:an("morph",0),visibleMorph:an("morph",0),bg:ja.value,cameraStream:null,faceLandmarker:null,faceLoading:null,faceActive:!1,faceInserts:{},faceRig:null,lensHeadMesh:null,headMeshVisible:eh("headMesh",!1),faceScale:an("faceScale",1),faceYOffset:an("faceY",0),edgeBlur:an("edgeBlur",14),burnEdge:an("burnEdge",.75),insetTweaks:{eyeX:an("eyeX",0),eyeY:an("eyeY",0),eyeSpread:an("eyeSpread",0),eyeRot:an("eyeRot",45),eyeScale:an("eyeScale",1),mouthX:an("mouthX",0),mouthY:an("mouthY",0),mouthZ:an("mouthZ",0),mouthRot:an("mouthRot",0),mouthScale:an("mouthScale",1)},fireMaterials:[],lastDetectMs:0,lastVideoTime:-1,lastFaceMs:0,autoMorph:eh("autoMorph",!0)};Ya.value=String(B.targetMorph);Zu.value=String(B.faceScale);$u.value=String(B.faceYOffset);Ju.value=String(B.edgeBlur);Qu.value=String(B.burnEdge);Ku.checked=B.headMeshVisible;Gg.value=String(B.insetTweaks.eyeX);Hg.value=String(B.insetTweaks.eyeY);Wg.value=String(B.insetTweaks.eyeSpread);Xg.value=String(B.insetTweaks.eyeRot);qg.value=String(B.insetTweaks.eyeScale);Yg.value=String(B.insetTweaks.mouthX);jg.value=String(B.insetTweaks.mouthY);Kg.value=String(B.insetTweaks.mouthZ);$g.value=String(B.insetTweaks.mouthRot);Zg.value=String(B.insetTweaks.mouthScale);new aS().load("./assets/capacitor.glb",n=>{gr.textContent="ready",B.model=n.scene,ZS(n.scene),qn.add(n.scene),QS(n.scene),eE(n.scene),tE(n.scene),Vc(),nx(B.targetMorph,!0),zc()},void 0,n=>{console.error(n),gr.textContent="asset error"});Jg.forEach(n=>{n.addEventListener("click",()=>{Ya.value=n.dataset.morph,B.targetMorph=Number(n.dataset.morph),zc(),Di()})});Ya.addEventListener("input",()=>{B.targetMorph=Number(Ya.value),zc(),Di()});Zp.addEventListener("input",()=>{B.yaw=ft.degToRad(Number(Zp.value))});Jp.addEventListener("input",()=>{B.pitch=-ft.degToRad(Number(Jp.value))});Qp.addEventListener("change",()=>{B.model?.traverse(n=>{n.isMesh&&(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>{t.wireframe=Qp.checked})})});Ku.addEventListener("change",()=>{B.headMeshVisible=Ku.checked,B.lensHeadMesh&&(B.lensHeadMesh.visible=B.headMeshVisible),Di()});ja.addEventListener("change",()=>{B.bg=ja.value,sx(),Di()});$r.addEventListener("change",async()=>{$r.checked?await ax():uE(),Di()});ju.addEventListener("change",()=>{document.body.classList.toggle("preview-on",ju.checked&&!!B.cameraStream)});$u.addEventListener("input",()=>{B.faceYOffset=Number($u.value),Vc(),Di()});Zu.addEventListener("input",()=>{B.faceScale=Number(Zu.value),Vc(),Di()});Ju.addEventListener("input",()=>{B.edgeBlur=Number(Ju.value),Di()});Qu.addEventListener("input",()=>{B.burnEdge=Number(Qu.value),Di()});[[Gg,"eyeX"],[Hg,"eyeY"],[Wg,"eyeSpread"],[Xg,"eyeRot"],[qg,"eyeScale"],[Yg,"mouthX"],[jg,"mouthY"],[Kg,"mouthZ"],[$g,"mouthRot"],[Zg,"mouthScale"]].forEach(([n,e])=>{n.addEventListener("input",()=>{B.insetTweaks[e]=Number(n.value),Vc(),Di()})});Kr.addEventListener("pointerdown",n=>{B.drag=!0,B.startX=n.clientX,B.startY=n.clientY,Kr.setPointerCapture(n.pointerId)});Kr.addEventListener("pointermove",n=>{if(!B.drag)return;const e=n.clientX-B.startX,t=n.clientY-B.startY;B.pointerYaw=ft.clamp(e*.006,-.75,.75),B.pointerPitch=ft.clamp(t*-.004,-.35,.35)});Kr.addEventListener("pointerup",n=>{B.drag=!1,B.pointerYaw=0,B.pointerPitch=0,Kr.releasePointerCapture(n.pointerId)});window.addEventListener("resize",ix);ix();sx();requestAnimationFrame(rx);($r.checked||Xs.get("face")==="1")&&ax();function ZS(n){n.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1;const i=(Array.isArray(e.material)?e.material:[e.material]).map(r=>JS(r?.name||"shell"));e.material=Array.isArray(e.material)?i:i[0],e.morphTargetDictionary?.Key1!==void 0&&B.morphMeshes.push(e)})}function JS(n){if(n.toLowerCase().includes("fuzz")){const i=Ol("./assets/textures/card.PNG",{color:!0}),r=new Ga({name:n,map:i,emissiveMap:i,color:16773569,emissive:16726784,emissiveIntensity:.35,roughness:.38,metalness:0,alphaTest:.512,transparent:!1,side:yn});return B.fireMaterials.push(r),r}return new Ga({name:n,map:Ol("./assets/textures/diffuse2.png",{color:!0}),normalMap:Ol("./assets/textures/normals.png"),color:16777215,roughness:.16,metalness:.4,side:yn})}function Ol(n,{color:e=!1}={}){const t=`${n}:${e}`;if(Fl.has(t))return Fl.get(t);const i=$S.load(n);return i.flipY=!1,i.wrapS=xr,i.wrapT=xr,i.anisotropy=Math.min(Mr.capabilities.getMaxAnisotropy(),8),e&&(i.colorSpace=kt),Fl.set(t,i),i}function QS(n){const e=new Ti().setFromObject(n),t=e.getCenter(new N),i=e.getSize(new N);n.position.sub(t),B.baseAvatarScale=3.4/Math.max(i.y,1),qn.scale.setScalar(B.baseAvatarScale),qn.position.set(0,-.05,0),qn.rotation.set(0,-Math.PI/2,0)}function eE(n){const e=new _i;e.name="MediaPipe face inserts",B.faceRig=e,n.add(e),Object.entries(jS).forEach(([t,i])=>{const r=document.createElement("canvas");r.width=i.canvas[0],r.height=i.canvas[1];const s=document.createElement("canvas");s.width=i.canvas[0],s.height=i.canvas[1];const a=new i1(r);a.colorSpace=kt,a.minFilter=tn,a.magFilter=tn,a.generateMipmaps=!1;const o=new Wi({map:a,transparent:!0,opacity:1,side:yn,depthTest:!1,depthWrite:!1,toneMapped:!1}),c=new Sn(new Za(i.plane[0],i.plane[1]),o);c.name=`${t} camera inset`,c.position.set(i.position[0],i.position[1],i.position[2]),c.rotation.y=Math.PI/2,c.renderOrder=40,c.visible=!1,e.add(c),B.faceInserts[t]={...i,canvas:r,ctx:r.getContext("2d",{willReadFrequently:!1}),maskCanvas:s,maskCtx:s.getContext("2d",{willReadFrequently:!1}),texture:a,mesh:c,basePlane:i.plane,basePosition:i.position}})}function Vc(){Object.entries(B.faceInserts).forEach(([n,e])=>{const t=n==="leftEye"||n==="rightEye",i=n==="rightEye"?-1:1,r=B.insetTweaks,s=t?r.eyeScale:r.mouthScale,a=t?n==="leftEye"?-r.eyeRot:r.eyeRot:r.mouthRot,o=t?r.eyeX:r.mouthX,c=t?r.eyeY:r.mouthY,l=t?i*r.eyeSpread:r.mouthZ;e.mesh.scale.setScalar(B.faceScale*s),e.mesh.position.set(e.basePosition[0]+o,e.basePosition[1]+B.faceYOffset+c,e.basePosition[2]+l),e.mesh.rotation.set(ft.degToRad(a),Math.PI/2,0)})}async function tE(n){try{const e=await fetch("./assets/head-face-mesh.json");if(!e.ok)return;const t=await e.json(),i=new Mn,r=t.positions,s=new Float32Array(r.length),a=new Float32Array(t.normals),o=new Float32Array(t.uvs),c=t.bounds.max[2],l=.34,u=.34,h=.22;for(let g=0;g<r.length;g+=3){const _=r[g],m=r[g+1],p=r[g+2];s[g]=8.75+(p-c)*h,s[g+1]=Zo+Jo+m*u,s[g+2]=-_*l}i.setAttribute("position",new Qt(s,3)),i.setAttribute("normal",new Qt(a,3)),i.setAttribute("uv",new Qt(o,2)),i.setIndex(t.indices),i.computeVertexNormals();const d=new Wi({color:16731154,transparent:!0,opacity:.26,wireframe:!0,depthTest:!1,depthWrite:!1,side:yn,toneMapped:!1}),f=new Sn(i,d);f.name="Lens Head.mesh overlay",f.renderOrder=38,f.visible=B.headMeshVisible,n.add(f),B.lensHeadMesh=f}catch(e){console.warn("Lens head mesh overlay failed to load.",e)}}function nx(n,e=!1){B.targetMorph=ft.clamp(n,0,1),e&&(B.visibleMorph=B.targetMorph),B.morphMeshes.forEach(t=>{const i=t.morphTargetDictionary.Key1;t.morphTargetInfluences[i]=B.visibleMorph}),nE(B.visibleMorph)}function nE(n){const e=ft.clamp(n,0,1),t=new Ue(16773569),i=new Ue(16734720),r=new Ue(1771520),s=new Ue(16722432);B.fireMaterials.forEach(a=>{a.color.copy(t).lerp(i,e),a.emissive.copy(r).lerp(s,e),a.emissiveIntensity=.15+e*1.85})}function zc(){Jg.forEach(n=>{const e=Math.abs(Number(n.dataset.morph)-B.targetMorph)<.001;n.classList.toggle("active",e)})}function Di(){const n=new URL(window.location.href),e={morph:B.targetMorph,bg:B.bg,face:$r.checked?1:0,faceY:B.faceYOffset,faceScale:B.faceScale,edgeBlur:B.edgeBlur,burnEdge:B.burnEdge,headMesh:B.headMeshVisible?1:0,...B.insetTweaks},t={morph:0,bg:jr?"transparent":"grid",face:jr?1:0,faceY:0,faceScale:1,edgeBlur:14,burnEdge:.75,headMesh:0,eyeRot:45,eyeScale:1,mouthScale:1};rE(e),window.history?.replaceState&&(Object.entries(e).forEach(([i,r])=>{const s=typeof r=="number"?Number(r.toFixed(3)):r,a=t[i]??0;oE(s,a)?n.searchParams.delete(i):n.searchParams.set(i,String(s))}),window.history.replaceState(null,"",n))}function iE(){try{return JSON.parse(window.localStorage.getItem(Vg)||"{}")||{}}catch{return{}}}function rE(n){try{window.localStorage.setItem(Vg,JSON.stringify(n))}catch(e){console.warn("Could not save capacitor settings.",e)}}function xd(n,e){return Xs.has(n)?Xs.get(n):zS[n]??e}function an(n,e){const t=Number(xd(n,e));return Number.isFinite(t)?t:e}function sE(n,e){const t=xd(n,e);return t==null?e:String(t)}function eh(n,e){const t=xd(n,e?1:0);if(typeof t=="boolean")return t;if(typeof t=="number")return t!==0;const i=String(t).toLowerCase();return["1","true","yes","on"].includes(i)?!0:["0","false","no","off"].includes(i)?!1:e}function aE(n){return YS.has(n)?n:"grid"}function oE(n,e){return typeof n=="number"&&typeof e=="number"?Math.abs(n-e)<5e-4:n===e}function ix(){const n=Kr.getBoundingClientRect(),e=Math.max(1,Math.floor(n.width)),t=Math.max(1,Math.floor(n.height));Mr.setSize(e,t,!1),Ka.aspect=e/t,Ka.updateProjectionMatrix()}function rx(n){hE(n);const e=n*.001,t=HS.checked||jr,i=t?Math.sin(e*.72)*.12:0,r=t?Math.sin(e*.93+.7)*.045:0,s=t?Math.sin(e*.49)*.035:0,a=t?(Math.sin(e*2.6)+1)*.025:0;B.visibleMorph=ft.lerp(B.visibleMorph,B.targetMorph+a,.11),B.visibleMorph=ft.clamp(B.visibleMorph,0,1),nx(B.targetMorph);const o=B.baseAvatarScale*B.headScale;qn.scale.setScalar(ft.lerp(qn.scale.x,o,.14)),qn.rotation.y=-Math.PI/2+B.yaw+i+B.pointerYaw+B.headYaw,qn.rotation.x=B.pitch+r+B.pointerPitch+B.headPitch,qn.rotation.z=s+B.headRoll,qn.position.x=B.headX,qn.position.y=-.08+(t?Math.sin(e*1.2)*.035:0)+B.headY,Mr.render(ua,Ka),requestAnimationFrame(rx)}function cE(){const n=new _i,e=new gh({color:3145580,transparent:!0,opacity:.22});for(let t=-8;t<=8;t+=1){const i=new Mn().setFromPoints([new N(t*.45,-3.4,-1.2),new N(t*.45,3.4,-1.2)]),r=new Mn().setFromPoints([new N(-4.2,t*.45,-1.2),new N(4.2,t*.45,-1.2)]);n.add(new za(i,e)),n.add(new za(r,e))}return n}function sx(){document.body.dataset.bg=B.bg,tx.visible=B.bg==="grid"}async function ax(){if(!B.faceActive){$r.checked=!0,gr.textContent="face loading";try{await lE(),B.cameraStream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"},audio:!1}),yi.srcObject=B.cameraStream,await yi.play(),B.faceActive=!0,document.body.classList.toggle("preview-on",ju.checked&&!!B.cameraStream),gr.textContent="tracking"}catch(n){console.warn(n),$r.checked=!1,B.faceActive=!1,_d(),gr.textContent=n?.name==="NotAllowedError"?"camera denied":"face error"}}}async function lE(){return B.faceLandmarker?B.faceLandmarker:(B.faceLoading||(B.faceLoading=(async()=>{const n=await vs.forVisionTasks("./vendor/mediapipe/wasm"),e={baseOptions:{modelAssetPath:"./assets/face_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0,outputFacialTransformationMatrixes:!0};try{B.faceLandmarker=await St.createFromOptions(n,e)}catch(t){console.warn("MediaPipe GPU delegate failed, falling back to CPU.",t),B.faceLandmarker=await St.createFromOptions(n,{...e,baseOptions:{...e.baseOptions,delegate:"CPU"}})}return B.faceLandmarker})()),B.faceLoading)}function uE(){B.faceActive=!1,B.cameraStream?.getTracks().forEach(n=>n.stop()),B.cameraStream=null,yi.srcObject=null,document.body.classList.remove("preview-on"),_d(),gr.textContent=B.model?"ready":"loading"}function hE(n){if(!B.faceActive||!B.faceLandmarker||yi.readyState<HTMLMediaElement.HAVE_CURRENT_DATA||n-B.lastDetectMs<WS||yi.currentTime===B.lastVideoTime)return;B.lastDetectMs=n,B.lastVideoTime=yi.currentTime;const e=B.faceLandmarker.detectForVideo(yi,n),t=e.faceLandmarks?.[0];if(!t){n-B.lastFaceMs>450&&(_d(),gr.textContent="no face");return}B.lastFaceMs=n,dE(t,e.facialTransformationMatrixes?.[0]),mE(t),yE(e.faceBlendshapes?.[0]),gr.textContent="tracking"}function dE(n,e){const t=fE(n),i=pE(e),r=ft.clamp(i?.yaw??t.noseOffsetX*1.85,-.62,.62),s=ft.clamp(t.pitch,-.54,.54),a=ft.clamp(i?.roll??t.roll,-.36,.36),o=ft.clamp((t.centerX-.5)*3,-.72,.72),c=ft.clamp((.5-t.centerY)*2.3,-.5,.5),l=ft.clamp(1+(t.eyeDistance/qS-1)*.65,.82,1.22);B.headYaw=ft.lerp(B.headYaw,r,.22),B.headPitch=ft.lerp(B.headPitch,s,.18),B.headRoll=ft.lerp(B.headRoll,a,.2),B.headX=ft.lerp(B.headX,o,.18),B.headY=ft.lerp(B.headY,c,.18),B.headScale=ft.lerp(B.headScale,l,.16),B.headPoseActive=!0}function fE(n){const e=n[33],t=n[263],i=n[1],r=n[152],s=n[10]??n[151],a=(e.x+t.x)/2,o=(e.y+t.y)/2,c=t.x-e.x,l=t.y-e.y,u=Math.max(Math.hypot(c,l),.001),h=Math.max(Math.abs(r.y-s.y),u*1.55,.001),d=(i.y-o)/u,f=(r.y-i.y)/h,g=(d-XS)*2.9,_=(.32-f)*2.1;return{centerX:(a+i.x+r.x)/3,centerY:(o+i.y+r.y)/3,eyeDistance:u,roll:Math.atan2(l,c),noseOffsetX:(i.x-a)/u,pitch:g*.75+_*.25}}function pE(n){const e=n?.data;if(!e||e.length<16)return null;const t=new Ge;t.set(e[0],e[1],e[2],0,e[4],e[5],e[6],0,e[8],e[9],e[10],0,0,0,0,1);const i=new ai().setFromRotationMatrix(t,"YXZ");return{yaw:-i.y*.9,pitch:i.x*.75,roll:-i.z}}function mE(n){Object.entries(B.faceInserts).forEach(([e,t])=>{const i=gE(n,t,yi.videoWidth,yi.videoHeight);_E(t,i,e),t.mesh.visible=!0,t.texture.needsUpdate=!0})}function gE(n,e,t,i){let r=1,s=1,a=0,o=0;e.indices.forEach(f=>{const g=n[f];r=Math.min(r,g.x),s=Math.min(s,g.y),a=Math.max(a,g.x),o=Math.max(o,g.y)});const c=(r+a)/2*t,l=(s+o)/2*i,u=Math.max((a-r)*t*e.padX,24),h=Math.max((o-s)*i*e.padY,u*.38);return xE(c,l,u,h,t,i)}function xE(n,e,t,i,r,s){let a=n-t/2,o=e-i/2,c=t,l=i;return a=ft.clamp(a,0,Math.max(0,r-2)),o=ft.clamp(o,0,Math.max(0,s-2)),c=Math.min(c,r-a),l=Math.min(l,s-o),{sx:a,sy:o,sw:Math.max(2,c),sh:Math.max(2,l)}}function _E(n,e,t){const{ctx:i,canvas:r,maskCtx:s,maskCanvas:a}=n,o=r.width,c=r.height,l=ft.clamp(B.edgeBlur,0,48),u=ft.clamp(B.burnEdge,0,1.4);if(i.clearRect(0,0,o,c),i.save(),i.drawImage(yi,e.sx,e.sy,e.sw,e.sh,0,0,o,c),i.globalCompositeOperation="source-atop",i.fillStyle=t==="mouth"?"rgba(255, 95, 70, 0.13)":"rgba(45, 255, 135, 0.08)",i.fillRect(0,0,o,c),i.restore(),s.clearRect(0,0,o,c),s.save(),s.fillStyle="#fff",l>0&&(s.filter=`blur(${l}px)`),Go(s,o,c,n.shape,l*.7),s.fill(),s.restore(),l>0&&(s.save(),s.fillStyle="#fff",Go(s,o,c,n.shape,l*1.25),s.fill(),s.restore()),i.save(),i.globalCompositeOperation="destination-in",i.drawImage(a,0,0),i.restore(),u>0){const h=.54*u,d=.24*u;i.save(),i.globalCompositeOperation="source-atop",i.lineCap="round",i.lineJoin="round",i.filter=`blur(${Math.max(1,l*.28)}px)`,i.lineWidth=Math.max(3,l*.72),i.strokeStyle=`rgba(13, 4, 0, ${h})`,Go(i,o,c,n.shape,Math.max(1,l*.48)),i.stroke(),i.filter="none",i.lineWidth=Math.max(1.5,l*.22),i.strokeStyle=`rgba(255, 86, 15, ${d})`,Go(i,o,c,n.shape,Math.max(0,l*.38)),i.stroke(),i.restore()}}function Go(n,e,t,i,r=0){const s=Math.max(0,r);if(n.beginPath(),i==="mouth"){const a=e*.035+s,o=t*.08+s,c=Math.max(1,e*.93-s*2),l=Math.max(1,t*.84-s*2);vE(n,a,o,c,l,l*.48);return}n.ellipse(e/2,t/2,Math.max(1,e*.47-s),Math.max(1,t*.43-s),0,0,Math.PI*2)}function vE(n,e,t,i,r,s){const a=Math.min(s,i/2,r/2);n.moveTo(e+a,t),n.lineTo(e+i-a,t),n.quadraticCurveTo(e+i,t,e+i,t+a),n.lineTo(e+i,t+r-a),n.quadraticCurveTo(e+i,t+r,e+i-a,t+r),n.lineTo(e+a,t+r),n.quadraticCurveTo(e,t+r,e,t+r-a),n.lineTo(e,t+a),n.quadraticCurveTo(e,t,e+a,t)}function yE(n){if(!B.autoMorph||!n?.categories?.length)return;const e=a=>n.categories.find(o=>o.categoryName===a)?.score??0,t=e("jawOpen"),i=Math.max(e("mouthSmileLeft"),e("mouthSmileRight")),r=e("mouthPucker"),s=ft.clamp(t*1.55+i*.4+r*.35,0,1);Ya.value=String(s),B.targetMorph=s,zc()}function _d(){Object.values(B.faceInserts).forEach(n=>{n.mesh.visible=!1})}
