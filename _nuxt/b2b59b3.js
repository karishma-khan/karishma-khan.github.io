(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{287:function(t,o,e){var content=e(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(81).default)("3c281cca",content,!0,{sourceMap:!1})},290:function(t,o,e){"use strict";e(287)},291:function(t,o,e){var n=e(80)((function(i){return i[1]}));n.push([t.i,".custom-tooltip[data-v-50d1443d]{background:#000;border-radius:16px;color:#fff;padding:10px;pointer-events:none;position:absolute;transform:translateX(-50%);transition:all .1s ease;white-space:nowrap}.canvas[data-v-50d1443d]{height:300px!important}.head[data-v-50d1443d]{font-family:SF Pro;font-weight:200;text-align:left}.head[data-v-50d1443d],.tooltipValue[data-v-50d1443d]{font-size:14px;line-height:20px}.tooltipValue[data-v-50d1443d]{font-family:SF Pro Bold;font-weight:800}.chartjs-tooltip-key[data-v-50d1443d]{display:inline-block;height:10px;margin-right:10px;width:10px}",""]),n.locals={},t.exports=n},295:function(t,o,e){"use strict";e.r(o);e(109),e(47),e(22),e(38),e(39);var n={mounted:function(){this.chartData&&this.renderChart()},props:["chartData"],methods:{renderChart:function(){var t=document.getElementById("myChart").getContext("2d");new Chart(t,{type:"bar",data:{labels:this.chartData.labels,datasets:[{label:"",data:this.chartData.values,backgroundColor:"white",borderRadius:20,borderSkipped:!1,borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,ticks:{color:"white"}},x:{ticks:{color:"white"}}},plugins:{tooltip:{enabled:!1,external:this.customTooltip}}}})},customTooltip:function(t){var o=document.getElementById("chartjs-tooltip");if(t.tooltip.body){var e=t.tooltip.title||[],n=t.tooltip.body.map((function(b){return b.lines})),r='<div class="flex justify-between rounded-3xl">',d=[];e.forEach((function(title){d.push(title)})),n.forEach((function(body,i){var t="font-family: SF Pro;font-size: 12px;font-weight: 200;color:rgb(255,255,255,0.7)",o="font-family: SF Pro Bold;font-size: 12px;font-weight: 800;",e='<div class="border-r border-[#FFFFFF4A] px-4 pr-6"><div style="'.concat(t,'">Date</div><div style="').concat(o,'">').concat(d[i],"</div></div>"),n='<div class="px-4 pl-6"><div style="'.concat(t,'">Ad Spend</div><div style="').concat(o,'">').concat(body,"</div></div>");r+="".concat(e," ").concat(n)})),r+="</div>";var l=o.querySelector("table");l||(l=document.createElement("table"),o.appendChild(l),o.classList.add("rounded-3xl")),l.innerHTML=r}var c=t.chart.canvas.offsetTop,h=t.chart.canvas.offsetLeft;o.style.opacity=1,o.style.left=h+t.tooltip.caretX+"px",o.style.top=c+(t.tooltip.caretY-40)+"px"}}},r=(e(290),e(25)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"chart-wrapper"},[t("canvas",{attrs:{id:"myChart",height:"360px"}}),this._v(" "),t("div",{staticClass:"custom-tooltip",staticStyle:{opacity:"0"},attrs:{id:"chartjs-tooltip"}})])}],!1,null,"50d1443d",null);o.default=component.exports}}]);