(function(e){function t(t){for(var i,a,n=t[0],s=t[1],c=t[2],u=0,p=[];u<n.length;u++)a=n[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],i=!0,n=1;n<o.length;n++){var s=o[n];0!==r[s]&&(i=!1)}i&&(l.splice(t--,1),e=a(a.s=o[0]))}return e}var i={},r={main:0},l=[];function a(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=i,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(o,i,function(t){return e[t]}.bind(null,i));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=s;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("7928")},7928:function(e,t,o){"use strict";o.r(t);var i=o("a026"),r=o("25ae"),l=o.n(r),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CKEditor"},[o("ckeditor",{attrs:{config:e.editorConfig},model:{value:e.editorData,callback:function(t){e.editorData=t},expression:"editorData"}})],1)},n=[],s=o("a1bc"),c=o.n(s),d={name:"CKEditor",data(){return{editorData:"",editorConfig:c.a}}},u=d,p=o("2877"),f=Object(p["a"])(u,a,n,!1,null,null,null),m=f.exports;i["a"].config.ignoreElements=["x-test"],i["a"].config.devtools=!1,i["a"].use(l.a);new i["a"]({el:"#app",components:{ckeditor4:m}})},a1bc:function(e,t){CKEDITOR.editorConfig=function(e){e.plugins="a11ychecker,dialogui,dialog,a11yhelp,about,xml,ajax,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,codemirror,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,copyformatting,dialogadvtab,div,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,format,horizontalrule,htmlwriter,iframe,image,indent,indentblock,indentlist,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,removeformat,resize,save,scayt,selectall,showblocks,showborders,smiley,sourcearea,sourcedialog,specialchar,stylescombo,tab,table,tabletools,undo,videodetector,wsc,wysiwygarea,lineutils,widgetselection,widget,html5video,markdown",e.filebrowserBrowseUrl=CKEDITOR.basePath+"../../../third_party/kcfinder/browse.php?type=files",e.filebrowserImageBrowseUrl=CKEDITOR.basePath+"../../../third_party/kcfinder/browse.php?type=images",e.filebrowserFlashBrowseUrl=CKEDITOR.basePath+"../../../third_party/kcfinder/browse.php?type=flash",e.filebrowserUploadUrl=CKEDITOR.basePath+"../../../third_party/kcfinder/upload.php?type=files",e.filebrowserImageUploadUrl=CKEDITOR.basePath+"../../../third_party/kcfinder/upload.php?type=images",e.filebrowserFlashUploadUrl=CKEDITOR.basePath+"../../../third_party/kcfinder/upload.php?type=flash",e.removeDialogTabs="link:upload;image:Upload",e.image_prefillDimensions=!1,e.image2_prefillDimensions=!1,e.allowedContent=!0,e.skin="bootstrapck",e.autoParagraph=!1,e.basicEntities=!1,e.entities=!1,e.uiColor="#f1f1f1","rtl"==$("html").attr("dir")&&(e.contentsLangDirection="rtl"),e.toolbar_popup=[["Save","Source","Createlimereplacementfields"],["Cut","Copy","Paste","PasteText","PasteFromWord"],"Undo Redo - Find Replace - SelectAll RemoveFormat".split(" "),"Image Html5video VideoDetector Flash Table HorizontalRule Smiley SpecialChar".split(" "),"/","Bold Italic Underline Strike - Subscript Superscript".split(" "),"NumberedList BulletedList - Outdent Indent Blockquote CreateDiv".split(" "),["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],["BidiLtr","BidiRtl"],["Link","Unlink","Anchor","Iframe"],"/",["Styles","Format","Font","FontSize"],["TextColor","BGColor"],["ShowBlocks","Templates"]],e.toolbar_inline=[["Maximize","Source","Createlimereplacementfields"],["Cut","Copy","Paste","PasteText","PasteFromWord"],"Undo Redo - Find Replace - SelectAll RemoveFormat".split(" "),["Image","Html5video","VideoDetector","Flash"],["Table","HorizontalRule","Smiley","SpecialChar"],["Bold","Italic","Underline","Strike"],["Subscript","Superscript"],["NumberedList","BulletedList"],["Outdent","Indent","Blockquote","CreateDiv"],["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],["BidiLtr","BidiRtl"],["ShowBlocks","Templates"],["Link","Unlink"],["Styles","Format","Font","FontSize"],["Anchor","Iframe"],["TextColor","BGColor"]],e.toolbar_inline2=[["Maximize","Createlimereplacementfields"],["Bold","Italic","Underline"],["NumberedList","BulletedList","-","Outdent","Indent"],["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],["Link","Unlink","Image"],["Source"]],e.toolbar=[["Source","Createlimereplacementfields"],["Cut","Copy","Paste","PasteText","PasteFromWord"],"Undo Redo - Find Replace - SelectAll RemoveFormat".split(" "),["Image","Html5video","VideoDetector","Flash"],["Table","HorizontalRule","Smiley","SpecialChar"],["Bold","Italic","Underline","Strike"],["Subscript","Superscript"],["NumberedList","BulletedList"],["Outdent","Indent","Blockquote","CreateDiv"],["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"],["BidiLtr","BidiRtl"],["ShowBlocks","Templates"],["Link","Unlink"],["Styles","Format","Font","FontSize"],["Anchor","Iframe"],["TextColor","BGColor"]],e.extraPlugins="limereplacementfields,codemirror,sourcedialog",e.removePlugins="sourcearea"}}});
//# sourceMappingURL=ckeditor4vue.js.map