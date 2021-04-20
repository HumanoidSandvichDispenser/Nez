(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?a.a.createElement(b,u(u({ref:t},l),{},{components:r})):a.a.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},156:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/ImGuiSample-f7dddfa310ecca5842c46e7556faac26.png"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(109)),i={id:"DearImGui",title:"Dear IMGUI"},u={unversionedId:"features/UI/DearImGui",id:"features/UI/DearImGui",isDocsHomePage:!1,title:"Dear IMGUI",description:"Setup",source:"@site/docs\\features\\UI\\DearImGui.md",slug:"/features/UI/DearImGui",permalink:"/Nez/docs/features/UI/DearImGui",editUrl:"https://github.com/prime31/Nez/edit/master/Nez.github.io/docs/features/UI/DearImGui.md",version:"current",sidebar:"someSidebar",previous:{title:"Nez UI",permalink:"/Nez/docs/features/UI/NezUI"},next:{title:"Behavior",permalink:"/Nez/docs/features/AI/Behavior"}},c=[{value:"Setup",id:"setup",children:[]}],l={toc:c};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"Your main project just needs a reference to the Nez.ImGui project. The ImGui UI can be shown two different ways: by installing a ",Object(o.b)("inlineCode",{parentName:"p"},"GlobalManager")," manually or using the normal Nez debug console. ImGui installs it's own command (toggle-imgui) that takes care of installing the ",Object(o.b)("inlineCode",{parentName:"p"},"GlobalManager")," for you. Note that because ImGui is it's own assembly if you want the ImGui command to get loaded you have to manually load the assembly like this: ",Object(o.b)("inlineCode",{parentName:"p"},'System.Reflection.Assembly.Load("Nez.ImGui")'),"."),Object(o.b)("p",null,"To manually install the ImGui manager, use the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var imGuiManager = new ImGuiManager();\nCore.RegisterGlobalManager( imGuiManager );\n\n// toggle ImGui rendering on/off. It starts out enabled.\nimGuiManager.SetEnabled(false);\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Dear ImGui",src:r(156).default})),Object(o.b)("p",null,"See the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prime31/Nez/blob/master/Nez.ImGui/README.md"},"Nez.ImGui README")," for more information and examples."))}s.isMDXComponent=!0}}]);