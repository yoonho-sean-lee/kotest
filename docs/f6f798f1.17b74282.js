(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),s=n(7),o=(n(0),n(151)),i={id:"system_extensions",title:"System Extensions",sidebar_label:"System Extensions",slug:"system_extensions.html"},a={unversionedId:"extensions/system_extensions",id:"extensions/system_extensions",isDocsHomePage:!1,title:"System Extensions",description:"System Extensions",source:"@site/docs/extensions/system.md",slug:"/extensions/system_extensions.html",permalink:"/docs/extensions/system_extensions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/system.md",version:"current",sidebar_label:"System Extensions",sidebar:"extensions",previous:{title:"Ktor",permalink:"/docs/extensions/ktor.html"},next:{title:"Test Containers",permalink:"/docs/extensions/test_containers.html"}},c=[{value:"System Extensions",id:"system-extensions",children:[{value:"System Environment",id:"system-environment",children:[]},{value:"System Property Extension",id:"system-property-extension",children:[]},{value:"System Security Manager",id:"system-security-manager",children:[]},{value:"System Exit Extensions",id:"system-exit-extensions",children:[]},{value:"No-stdout / no-stderr listeners",id:"no-stdout--no-stderr-listeners",children:[]},{value:"Locale/Timezone listeners",id:"localetimezone-listeners",children:[]}]}],l={rightToc:c};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"system-extensions"},"System Extensions"),Object(o.b)("p",null,"Sometimes your code might use some functionalities straight from the JVM, which are very hard to simulate. With Kotest System Extensions, these difficulties are made easy to mock and simulate, and your code can be tested correctly. After changing the system and using the extensions, the previous state will be restored."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This code is sensitive to concurrency. Due to the JVM specification there can only be one instance of these extensions running (For example: Only one Environment map must exist). If you try to run more than one instance at a time, the result is unknown."))),Object(o.b)("h3",{id:"system-environment"},"System Environment"),Object(o.b)("p",null,"With ",Object(o.b)("em",{parentName:"p"},"System Environment Extension")," you can simulate how the System Environment is behaving. That is, what you're obtaining from ",Object(o.b)("inlineCode",{parentName:"p"},"System.getenv()"),"."),Object(o.b)("p",null,"Kotest provides some extension functions that provides a System Environment in a specific scope:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'withEnvironment("FooKey", "BarValue") {\n    System.getenv("FooKey") shouldBe "BarValue" // System environment overridden!\n}\n')),Object(o.b)("p",null,"You can also use multiple values in this extension, through a map or list of pairs."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'withEnvironment(mapOf("FooKey" to "BarValue", "BarKey" to "FooValue")) {\n  // Use FooKey and BarKey\n}\n\n')),Object(o.b)("p",null,"These functions will add the keys and values if they're not currently present in the environment, and will override them if they are. Any keys untouched by the function will remain in the environment, and won't be messed with."),Object(o.b)("p",null,"Instead of extensions functions, you can also use the provided Listeners to apply these functionalities in a bigger scope. There's an alternative for the Spec/Per test level, and an alternative for the Project Level."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'\nclass MyTest : FreeSpec() {\n\n      override fun listeners() = listOf(SystemEnvironmentTestListener("foo", "bar"))\n\n    init {\n      "MyTest" {\n        System.getenv("foo") shouldBe "bar"\n      }\n    }\n\n}\n\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'\nclass ProjectConfig : AbstractProjectConfig() {\n\n    override fun listeners(): List<TestListener> = listOf(SystemEnvironmentProjectListener("foo", "bar"))\n\n}\n\n')),Object(o.b)("h3",{id:"system-property-extension"},"System Property Extension"),Object(o.b)("p",null,"In the same fashion as the Environment Extensions, you can override the System Properties (",Object(o.b)("inlineCode",{parentName:"p"},"System.getProperties()"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'withSystemProperty("foo", "bar") {\n  System.getProperty("foo") shouldBe "bar"\n}\n')),Object(o.b)("p",null,"And with similar Listeners:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'    class MyTest : FreeSpec() {\n\n          override fun listeners() = listOf(SystemPropertyListener("foo", "bar"))\n\n        init {\n          "MyTest" {\n            System.getProperty("foo") shouldBe "bar"\n          }\n        }\n\n    }\n')),Object(o.b)("h3",{id:"system-security-manager"},"System Security Manager"),Object(o.b)("p",null,"Similarly, with System Security Manager you can override the System Security Manager (",Object(o.b)("inlineCode",{parentName:"p"},"System.getSecurityManager()"),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"\n    withSecurityManager(myManager) {\n      // Usage of security manager\n    }\n\n")),Object(o.b)("p",null,"And the Listeners:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"    class MyTest : FreeSpec() {\n\n              override fun listeners() = listOf(SecurityManagerListener(myManager))\n\n            init {\n              // Use my security manager\n            }\n\n        }\n")),Object(o.b)("h3",{id:"system-exit-extensions"},"System Exit Extensions"),Object(o.b)("p",null,"Sometimes you want to test that your code calls ",Object(o.b)("inlineCode",{parentName:"p"},"System.exit"),". For that you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"System Exit Listeners"),". The Listener will throw an exception when the ",Object(o.b)("inlineCode",{parentName:"p"},"System.exit")," is called, allowing you to catch it and verify:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'\nclass MyTest : FreeSpec() {\n\n  override fun listeners() = listOf(SpecSystemExitListener)\n\n  init {\n    "Catch exception" {\n      val thrown: SystemExitException = shouldThrow<SystemExitException> {\n        System.exit(22)\n      }\n\n      thrown.exitCode shouldBe 22\n    }\n  }\n}\n\n')),Object(o.b)("h3",{id:"no-stdout--no-stderr-listeners"},"No-stdout / no-stderr listeners"),Object(o.b)("p",null,"Maybe you want to guarantee that you didn't leave any debug messages around, or that you're always using a Logger in your logging."),Object(o.b)("p",null,"For that, Kotest provides you with ",Object(o.b)("inlineCode",{parentName:"p"},"NoSystemOutListener")," and ",Object(o.b)("inlineCode",{parentName:"p"},"NoSystemErrListener"),". These listeners won't allow any messages to be printed straight to ",Object(o.b)("inlineCode",{parentName:"p"},"System.out")," or ",Object(o.b)("inlineCode",{parentName:"p"},"System.err"),", respectively:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"    // In Project or in Spec\n    override fun listeners() = listOf(NoSystemOutListener, NoSystemErrListener)\n")),Object(o.b)("h3",{id:"localetimezone-listeners"},"Locale/Timezone listeners"),Object(o.b)("p",null,"Some codes use and/or are sensitive to the default Locale and default Timezone. Instead of manipulating the system defaults no your own,\nlet Kotest do it for you!"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'withDefaultLocale(Locale.FRANCE) {\n  println("My locale is now France! Tr\xe8s bien!")\n}\n\nwithDefaultTimezone(TimeZone.getTimeZone(ZoneId.of("America/Sao_Paulo"))) {\n  println("My timezone is now America/Sao_Paulo! Muito bem!")\n}\n\n')),Object(o.b)("p",null,"And with the listeners"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'  // In Project or in Spec\n  override fun listeners() = listOf(\n    LocaleTestListener(Locale.FRANCE),\n    TimeZoneTestListener(TimeZone.getTimeZone(ZoneId.of("America/Sao_Paulo")))\n  )\n\n')))}m.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),m=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,y=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return n?s.a.createElement(y,a(a({ref:t},l),{},{components:n})):s.a.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);