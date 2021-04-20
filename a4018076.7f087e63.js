(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,h=p["".concat(s,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(h,i(i({ref:t},d),{},{components:n})):a.a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(109)),s={id:"Rendering",title:"Rendering"},i={unversionedId:"features/Graphics/Rendering",id:"features/Graphics/Rendering",isDocsHomePage:!1,title:"Rendering",description:"First and foremost with regard to rendering is the type of filtering used for your textures. Nez has several subsystems (such as Renderers, Scenes and PostProcessors) that all need to know how you want your textures to look. Everything is configurable on a per object basis but you will want to set a default as well so you don't have to bother changing the SamplerState all over the place. Core.DefaultSamplerState should be set before you create your first Scene. It defaults to SamplerState.PointClamp which is good for pixel art. If you are using high-def art then make sure you set it to SamplerState.LinearClamp so you don't get ugly results.",source:"@site/docs\\features\\Graphics\\Rendering.md",slug:"/features/Graphics/Rendering",permalink:"/Nez/docs/features/Graphics/Rendering",editUrl:"https://github.com/prime31/Nez/edit/master/Nez.github.io/docs/features/Graphics/Rendering.md",version:"current",sidebar:"someSidebar",previous:{title:"Collections",permalink:"/Nez/docs/features/Utils/Collections"},next:{title:"Deferred Lighting",permalink:"/Nez/docs/features/Graphics/DeferredLighting"}},l=[{value:"Custom Sorting",id:"custom-sorting",children:[]},{value:"Post Processors",id:"post-processors",children:[]},{value:"Mixing 2D and 3D Content",id:"mixing-2d-and-3d-content",children:[]},{value:"IFinalRenderDelegate",id:"ifinalrenderdelegate",children:[]}],d={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"First and foremost with regard to rendering is the type of filtering used for your textures. Nez has several subsystems (such as Renderers, Scenes and PostProcessors) that all need to know how you want your textures to look. Everything is configurable on a per object basis but you will want to set a default as well so you don't have to bother changing the SamplerState all over the place. ",Object(o.b)("inlineCode",{parentName:"p"},"Core.DefaultSamplerState")," should be set before you create your first Scene. It defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"SamplerState.PointClamp")," which is good for pixel art. If you are using high-def art then make sure you set it to SamplerState.LinearClamp so you don't get ugly results."),Object(o.b)("p",null,"The Nez rendering setup was designed to be really easy to get up and running but at the same time flexible so that advanced users can do whatever they need to out of the box. The basic gist of how the rendering system works revolves around the ",Object(o.b)("inlineCode",{parentName:"p"},"Renderer")," class. You add one or more Renderers to your Scene (",Object(o.b)("inlineCode",{parentName:"p"},"AddRenderer")," and ",Object(o.b)("inlineCode",{parentName:"p"},"RemoveRenderer")," methods) and each of your Renderers will be called after all Entities/Components have had their update method called. All rendering is done into a RenderTexture which is then displayed (with optional post processing) after all Renders have finished rendering. Several default Renderers are provided to get you started and cover the most common setups. The included renderers are described below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DefaultRenderer"),": renders every RenderableComponent that is enabled in your scene"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RenderLayerRenderer"),": renders only the RenderableComponents in your Scene that are on the specified renderLayers"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RenderLayerExcludeRenderer"),": renders all the RenderableComponents in your Scene that are not on the specified renderLayers")),Object(o.b)("p",null,"You are free to subclass Renderer and render things in any way that you want. The Scene contains a RenderableComponents field that contains all the RenderableComponents for easy access and filtering. The ",Object(o.b)("inlineCode",{parentName:"p"},"RenderableComponentList")," provides access by specific RenderLayer as well. By default, RenderableComponents are sorted RenderLayer and then by LayerDepth for fine-grained render order control. This is overrideable allowing you to sort however you want (see below). The Renderer class provides a solid, configurable base that lets you customize various attributes as well as render to a ",Object(o.b)("inlineCode",{parentName:"p"},"RenderTexture")," instead of directly to the backbuffer. If you do decide to render to a RenderTexture in most cases you will want to use a ",Object(o.b)("inlineCode",{parentName:"p"},"PostProcessor")," to draw it later. It should also be noted that RenderTextures on a Renderer are automatically resized for you when the screen size changes. You can change this behavior via the ",Object(o.b)("inlineCode",{parentName:"p"},"RenderTexture.ResizeBehavior")," enum."),Object(o.b)("p",null,"Sometimes you will want to do some rendering after all PostProcessors have run. For example, in most cases your UI will be rendered without any post process effects. To deal with cases like these a ",Object(o.b)("inlineCode",{parentName:"p"},"Renderer")," can set the ",Object(o.b)("inlineCode",{parentName:"p"},"Renderer.wantsToRenderAfterPostProcessors")," field. This must be set ",Object(o.b)("em",{parentName:"p"},"before")," calling ",Object(o.b)("inlineCode",{parentName:"p"},"AddRenderer")," for it to take effect."),Object(o.b)("h2",{id:"custom-sorting"},"Custom Sorting"),Object(o.b)("p",null,"You can set a custom sort for all the ",Object(o.b)("inlineCode",{parentName:"p"},"IRenderables")," in your Scene by setting the static field ",Object(o.b)("inlineCode",{parentName:"p"},"RenderableComponentList.CompareUpdatableOrder"),". The sort class must be a subclass of ",Object(o.b)("inlineCode",{parentName:"p"},"IComparer<IRenderable>"),". Each RenderLayer list of IRenderables will be sorted with the comparer. Note that you must set the sort dirty flag manually when appropriate based on your implementation. By default, lists are only dirtied when components are added. You can set the dirty flag for any RenderLayer via ",Object(o.b)("inlineCode",{parentName:"p"},"Scene.RenderableComponents.SetRenderLayerNeedsComponentSort"),". For example, if you are doing an isometric game and sorting based on the y-value of the Entity's Transform you would need to call ",Object(o.b)("inlineCode",{parentName:"p"},"Scene.RenderableComponents.SetRenderLayerNeedsComponentSort")," whenever the Entity moves on the y-axis."),Object(o.b)("h2",{id:"post-processors"},"Post Processors"),Object(o.b)("p",null,"Much like Renderers, you can add one or more PostProcessors to the Scene via the ",Object(o.b)("strong",{parentName:"p"},"AddPostProcessor")," and ",Object(o.b)("strong",{parentName:"p"},"RemovePostProcessor")," methods. PostProcessors are called after all Renderers have been called. One common use case for a PostProcessor is to display a RenderTexture that a Renderer rendered into most often with some Effects applied. Applying effects to the fully rendered scene is also a very common use case. You can globally enable/disable PostProcessors via the ",Object(o.b)("strong",{parentName:"p"},"Scene.EnablePostProcessing")," bool. Additionally, each PostProcessor can be enabled/disable for fine-grained control."),Object(o.b)("p",null,"A basic example of a PostProcessor is below. It takes a RenderTexture that a Renderer rendered into and composites that with the rest of the scene with an Effect."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class SimplePostProcessor : PostProcessor\n{\n    RenderTexture _renderTexture;\n    \n    public SimplePostProcessor( RenderTexture renderTexture, Effect effect ) : base( 0 )\n    {\n        _renderTexture = renderTexture;\n        this.effect = effect;\n    }\n\n\n    public override void Process( RenderTarget2D source, RenderTarget2D destination )\n    {\n            Core.graphicsDevice.SetRenderTarget( destination );\n\n            Graphics.instance.spriteBatch.Begin( effect: effect );\n            // render source contains all of the Scene that was not rendered into _renderTexture\n            Graphics.instance.spriteBatch.Draw( source, Vector2.Zero, Color.White );\n            \n            // now we render the contents of our _renderTexture on top of it\n            Graphics.instance.spriteBatch.Draw( _renderTexture, Vector2.Zero );\n            Graphics.instance.spriteBatch.End();\n    }\n}\n")),Object(o.b)("h2",{id:"mixing-2d-and-3d-content"},"Mixing 2D and 3D Content"),Object(o.b)("p",null,"Nez is technically a 2D framework. That being said, there may be times when you want to stick some 3D content into your 2D game. Nez attempts to make it very simple to add 3D content. The Nez Camera class is a 5D system (2D + 3D). What it is doing under the hood is really quite simple: it provides a ",Object(o.b)("inlineCode",{parentName:"p"},"ViewMatrix3D")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ProjectionMatrix3D")," that you can use to render 3D content. The matrices returned will end up with a frustum that at a z-position of 0 exactly matches the 2D orthographic matrices. The grand result of all this is that you can position your 3D objects x and y values and it will match exactly your 2D content."),Object(o.b)("p",null,"There are a few 3D specific fields that you can tweak on the Camera as well (all 3D fields/properties have a suffix of ",Object(o.b)("strong",{parentName:"p"},"3D")," for clarity): ",Object(o.b)("inlineCode",{parentName:"p"},"PositionZ3D"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NearClipPlane3D"),", ",Object(o.b)("inlineCode",{parentName:"p"},"FarClipPlane3D"),". When dealing with 3D content it is important to note that your distances and scales will be very large. The reason for this is because the 2D orthographic view is huge compared to a standard 3D camera. You may need to play with your scales depending on which modeling software you use."),Object(o.b)("p",null,"Nez provides some built in Components to make it as simple as possible to get some 3D content on screen. The ",Object(o.b)("inlineCode",{parentName:"p"},"Cube3D"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Sphere3D")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Torus3D")," classes can be added to an Entity straight away. These classes procedurally create their meshes. The ",Object(o.b)("inlineCode",{parentName:"p"},"Model3D")," class can be used when you want to display a 3D model that was processed by the MonoGame content builder. It will display a standard ",Object(o.b)("inlineCode",{parentName:"p"},"Model"),"."),Object(o.b)("p",null,"All of the *3D classes subclass ",Object(o.b)("inlineCode",{parentName:"p"},"Renderable3D"),". ",Object(o.b)("inlineCode",{parentName:"p"},"Renderable3D")," is a thin wrapper that provides Vector3s for position, rotation and scale. These wrap the 2D values from the standard ",Object(o.b)("inlineCode",{parentName:"p"},"Transform")," class where possible so that you can use ",Object(o.b)("inlineCode",{parentName:"p"},"Transform")," parenting with 2D and 3D objects seamlessly."),Object(o.b)("h2",{id:"ifinalrenderdelegate"},"IFinalRenderDelegate"),Object(o.b)("p",null,"By default, Nez will take your fully rendered scene and render it to the screen. In some rare circumstances this may not be the way you want the final render to occur. By setting ",Object(o.b)("strong",{parentName:"p"},"Scene.FinalRenderDelegate")," you can take over that final render to the screen and do it however you want. For an example of using the ",Object(o.b)("em",{parentName:"p"},"IFinalRenderDelegate")," see the ",Object(o.b)("inlineCode",{parentName:"p"},"PixelMosaicRenderDelegate")," class."))}c.isMDXComponent=!0}}]);