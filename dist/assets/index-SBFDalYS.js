var w=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var n=(a,e,t)=>(w(a,e,"read from private field"),t?t.call(a):e.get(a)),i=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},h=(a,e,t,o)=>(w(a,e,"write to private field"),o?o.call(a,t):e.set(a,t),t);var d=(a,e,t)=>(w(a,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const M of r.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&o(M)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var u,x;class S{constructor(){i(this,u,null);i(this,x,null)}async init(e){const t=await fetch(e);h(this,u,await t.json()),h(this,x,new Map),n(this,u).weekExpense.forEach(o=>{n(this,x).set(o.day,o.amount)})}getDayAmount(e){return n(this,x).get(e)}getBalance(){return n(this,u).balance}getMonthExpense(){return n(this,u).monthExpense}getPreMonthExpense(){return n(this,u).preMonthExpense}getWeekExpenses(){return n(this,u).weekExpense}}u=new WeakMap,x=new WeakMap;var c,T,b,g,D;class q{constructor(e){i(this,T);i(this,g);i(this,c,null);h(this,c,e)}getMonthExpenseRatioText(){const e=d(this,T,b).call(this).toFixed(2),t=e>=0?"더":"덜";return`${Math.abs(e)}% ${t}`}getDayExpensesText(e){return d(this,g,D).call(this,n(this,c).getDayAmount(e))}getBalanceText(){return d(this,g,D).call(this,n(this,c).getBalance())}getMonthExpenseText(){return d(this,g,D).call(this,n(this,c).getMonthExpense())}getHighestExpenseDay(){const e=n(this,c).getWeekExpenses();let t="",o=0;return e.forEach(s=>{o>=s.amount||(o=s.amount,t=s.day)}),t}}c=new WeakMap,T=new WeakSet,b=function(){return(n(this,c).getMonthExpense()-n(this,c).getPreMonthExpense())/n(this,c).getMonthExpense()*100},g=new WeakSet,D=function(e){const t=new RegExp("(?<=[0-9])(?=([0-9]{3})+$)","g");return e.toString().replaceAll(t,",$&")+"원"};var l,E,y,p,m,f;class B{constructor(e){i(this,l,null);i(this,E,null);i(this,y,null);i(this,p,null);i(this,m,null);i(this,f,null);h(this,l,e),h(this,E,document.querySelector("[data-balance]")),h(this,y,document.querySelector("[data-month-expense]")),h(this,m,document.querySelector("[data-ratio]")),h(this,f,Number(document.querySelector("[data-max-height]").dataset.maxHeight)),h(this,p,new Map);const t=[...document.querySelectorAll("[data-day]")],o=[...document.querySelectorAll("[data-value]")];t.forEach((s,r)=>{n(this,p).set(s.textContent,o[r])})}injectBalanceText(){n(this,E).textContent=n(this,l).getBalanceText()}injectMonthExpenseText(){n(this,y).textContent=n(this,l).getMonthExpenseText()}injectMonthExpenseRatioText(){n(this,m).textContent=n(this,l).getMonthExpenseRatioText()}addClassExpenseHighestDay(){const e=n(this,l).getHighestExpenseDay();n(this,p).get(e).classList.add("graph__value--highest")}calcGraphValueHeight(e){const t=n(this,l).getHighestExpenseDay(),o=e.getDayAmount(t);n(this,p).forEach((s,r,M)=>{const j=e.getDayAmount(r),A=n(this,l).getDayExpensesText(r),H=j/o*n(this,f);s.style.height=`${H}rem`,s.textContent=A,s.dataset.value=A})}}l=new WeakMap,E=new WeakMap,y=new WeakMap,p=new WeakMap,m=new WeakMap,f=new WeakMap;(async()=>{const a=new S;await a.init("https://my-json-server.typicode.com/home1201/practice02-db/posts/1");const e=new q(a),t=new B(e);t.injectBalanceText(),t.injectMonthExpenseText(),t.injectMonthExpenseRatioText(),t.addClassExpenseHighestDay(),t.calcGraphValueHeight(a)})();