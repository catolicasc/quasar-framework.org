webpackJsonp([78],{118:function(o,e,a){var l=a(2)(a(254),a(417),null,null,null);o.exports=l.exports},254:function(o,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(0);e.default={components:{QOptionGroup:l.QOptionGroup,QField:l.QField},data:function(){return{radio:"london",checkbox:["bucharest","paris"],toggle:["paris"]}}}},417:function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",{staticClass:"layout-padding row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("p",{staticClass:"caption"},[o._v("Radio group")]),o._v(" "),a("q-option-group",{attrs:{type:"radio",color:"secondary",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris",color:"red"}]},model:{value:o.radio,callback:function(e){o.radio=e},expression:"radio"}}),o._v(" "),a("p",{staticClass:"caption"},[o._v("Checkbox group")]),o._v(" "),a("q-option-group",{attrs:{type:"checkbox",color:"amber",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris",color:"primary"}]},model:{value:o.checkbox,callback:function(e){o.checkbox=e},expression:"checkbox"}}),o._v(" "),a("p",{staticClass:"caption"},[o._v("Toggle group")]),o._v(" "),a("q-option-group",{attrs:{type:"toggle",color:"purple",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris",color:"red"}]},model:{value:o.toggle,callback:function(e){o.toggle=e},expression:"toggle"}}),o._v(" "),a("p",{staticClass:"caption"},[o._v("Inline options")]),o._v(" "),a("q-option-group",{attrs:{inline:"",type:"toggle",color:"secondary",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris",color:"orange"}]},model:{value:o.toggle,callback:function(e){o.toggle=e},expression:"toggle"}}),o._v(" "),a("p",{staticClass:"caption"},[o._v("Labels on left side")]),o._v(" "),a("q-option-group",{attrs:{"left-label":"",inline:"",type:"checkbox",color:"secondary",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris",color:"orange"}]},model:{value:o.toggle,callback:function(e){o.toggle=e},expression:"toggle"}}),o._v(" "),a("p",{staticClass:"caption"},[o._v("Disabled")]),o._v(" "),a("q-option-group",{attrs:{type:"radio",disable:"",color:"secondary",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris",color:"red"}]},model:{value:o.radio,callback:function(e){o.radio=e},expression:"radio"}}),o._v(" "),a("p",{staticClass:"caption"},[o._v("In a Field")]),o._v(" "),a("q-field",{attrs:{icon:"place",label:"City of residence",helper:"Pick the city you live in the most"}},[a("q-option-group",{attrs:{type:"radio",options:[{label:"Bucharest",value:"bucharest",color:"amber"},{label:"London",value:"london",color:"secondary"},{label:"Paris",value:"paris",color:"primary"}]},model:{value:o.radio,callback:function(e){o.radio=e},expression:"radio"}})],1)],1)])},staticRenderFns:[]}}});