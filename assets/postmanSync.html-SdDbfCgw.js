import{_ as p,a as c,b as m,c as d,d as u,e as h}from"./postmanScript-vSQGq89I.js";import{_ as g,r as o,o as _,c as y,a as t,d as e,b as n,w as i,e as k}from"./app-io1X_paZ.js";const f="/img/2023.2.3/postmanSync.png",v={},P=t("h1",{id:"postman-集成",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#postman-集成"},[t("span",null,"Postman 集成")])],-1),I=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,[e("由于历史原因,历史保存的持久化数据丢失了一部分字段,为了能够将同步至postman的数据更完整, 建议在插件postman配置中勾上"),t("code",null,"保存后同步"),e("postman选项,通过保存操作来触发同步.")]),t("p",null,"同时推荐使用该功能来同步api而不是导出")],-1),b={class:"hint-container caution"},A=t("p",{class:"hint-container-title"},"Postman API 用量问题",-1),w={href:"https://fastrequest.postman.co/billing/add-ons/overview",target:"_blank",rel:"noopener noreferrer"},C=t("strong",null,"Postman API Usage",-1),S=t("p",null,[t("img",{src:f,alt:"postmanSync",loading:"lazy"})],-1),W=t("h2",{id:"api-key",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#api-key"},[t("span",null,"Api key")])],-1),x=t("p",null,[e("Api key 用于使用 Postman 在线 API 执行一些手工行为.例如"),t("strong",null,"创建Collection"),e("、"),t("strong",null,"创建目录"),e("、"),t("strong",null,"创建 Request"),e(" 等行为.")],-1),R={href:"https://postman.co/settings/me/api-keys",target:"_blank",rel:"noopener noreferrer"},q=k('<p><img src="'+c+'" alt="postmanApiKey" loading="lazy"></p><h2 id="workspaceid" tabindex="-1"><a class="header-anchor" href="#workspaceid"><span>WorkspaceId</span></a></h2><p>Workspace id 是 Postman 工作空间的Id. 有2中策略来创建Workspace</p><ol><li>每个项目来区分创建1个Workspace(推荐)</li><li>创建1个Workspace表示某个公司的,不同的Collection来表示公司下面不同的项目</li></ol><hr><p><strong>获取WorkspaceId的步骤如下↓↓↓</strong></p><p>a. 创建一个 Workspace,已有则忽略</p><p><img src="'+m+'" alt="createWorkspace" loading="lazy"></p><p>b. 点击 Workspace,并点击Workspace的info图标(注意不是点击Workspace Settings)</p><p><img src="'+d+'" alt="showWorkspaceId" loading="lazy"></p><p>c.复制得到Workspace id</p><p><img src="'+u+'" alt="workspaceInfo" loading="lazy"></p><h2 id="initial-value-与-current-value" tabindex="-1"><a class="header-anchor" href="#initial-value-与-current-value"><span>Initial value 与 Current value</span></a></h2><p>Environment 中变量的值包含 <strong>Initial value</strong> 和 <strong>Current value</strong>,<strong>Initial value</strong>是云端共享的,与之对应的<strong>Current value</strong>仅保留在本地. Postman中实际Request使用的是<strong>Current value</strong>.</p><p>但是,<mark><strong>Restful Fast Request在对 Environment 同步的时候同步的是 Initial value</strong></mark>.</p><p>所以如果插件中更新了 Environment 值,并且同步到了 Postman ,此时在 Postman 中执行 Request 并不会立刻使用同步的值, 而是需要在 Environment 中手工替换或者全部替换(点击Reset All).</p><p><img src="'+h+'" alt="workspaceInfo" loading="lazy"></p><h2 id="前后置脚本" tabindex="-1"><a class="header-anchor" href="#前后置脚本"><span>前后置脚本</span></a></h2>',18),z=t("p",null,[t("img",{src:p,alt:"postmanScript",loading:"lazy"})],-1),T=t("h2",{id:"注意事项",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#注意事项"},[t("span",null,"注意事项")])],-1),E=t("li",null,"推荐勾选保存后即同步到Postman,如果没有勾选,则在手动触发的时候需要先保存,再点击同步",-1),N=t("li",null,"多方协作,如果发现同一个workspace出现多个相同的collection,只需使用其中一方的collection id在配置中手动替换即可",-1),V=t("li",null,[e("多方协作,如果发现同一个collection出现多个相同的folder,只需使用其中一方的"),t("code",null,".fastRequest/collections/ROOT/模块名/类名/directory.json"),e("中的"),t("code",null,"pmFolderId"),e("属性即可")],-1),B=t("code",null,"pmRequestId",-1),L=t("code",null,"pmResponseId",-1),j=t("code",null,"rapi",-1);function D(F,K){const l=o("Badge"),a=o("ExternalLinkIcon"),s=o("RouteLink"),r=o("ColorIcon");return _(),y("div",null,[P,t("p",null,[e("版本要求: "),n(l,{text:"2023.2.3"})]),I,t("div",b,[A,t("p",null,[e("插件使用 Postman API 来同步数据，需要注意的是 Postman 同步涉及到 Postman API 的"),t("a",w,[e("用量"),n(a)]),e("问题，点击链接需要注意 "),C,e(" 这一栏，每月最多免费使用 1000次。超过额度会导致同步失败！")])]),S,W,x,t("p",null,[e("打开 "),t("a",R,[e("https://postman.co/settings/me/api-keys"),n(a)]),e(" 并登录,并执行创建.注意最好是创建一个没有有效期的Api key.")]),q,t("p",null,[e("因为语言的不同,插件并不会同步前后置脚本.所以在使用插件的时候最好把一些共用的脚本写在"),n(s,{to:"/guide/features/projectValueConfig.html"},{default:i(()=>[e("项目级别配置")]),_:1}),e("中的前后置脚本,这样子也只需要在同步到Postman以后, 在Postman中的Collection级别下写前后置脚本.")]),z,T,t("ol",null,[E,N,V,t("li",null,[e("多方协作,如果发现同一个api在postman上有2份,则可以通过修改其中一份数据的"),B,e("和"),L,e("来是他们保持统一,可以通过"),n(s,{to:"/guide/features/navigateCurrentMethodJson.html"},{default:i(()=>[n(r,{icon:"storeData"}),e(" 多窗口 Tab")]),_:1}),e("来定位存储的文件.最好的方式是通过git管理提交"),j,e("文件使api底层存储数据保持一致")])])])}const J=g(v,[["render",D],["__file","postmanSync.html.vue"]]),M=JSON.parse('{"path":"/guide/features/postmanSync.html","title":"Postman 集成","lang":"zh-CN","frontmatter":{"description":"Postman 集成 版本要求: 提示 由于历史原因,历史保存的持久化数据丢失了一部分字段,为了能够将同步至postman的数据更完整, 建议在插件postman配置中勾上保存后同步postman选项,通过保存操作来触发同步. 同时推荐使用该功能来同步api而不是导出 Postman API 用量问题 插件使用 Postman API 来同步数据，需要...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://api-buddy.com/en/guide/features/postmanSync.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/guide/features/postmanSync.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"Postman 集成"}],["meta",{"property":"og:description","content":"Postman 集成 版本要求: 提示 由于历史原因,历史保存的持久化数据丢失了一部分字段,为了能够将同步至postman的数据更完整, 建议在插件postman配置中勾上保存后同步postman选项,通过保存操作来触发同步. 同时推荐使用该功能来同步api而不是导出 Postman API 用量问题 插件使用 Postman API 来同步数据，需要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/2023.2.3/postmanSync.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-31T09:24:19.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Postman 集成"}],["meta",{"property":"article:modified_time","content":"2024-05-31T09:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Postman 集成\\",\\"image\\":[\\"https://api-buddy.com/img/2023.2.3/postmanSync.png\\",\\"https://api-buddy.com/img/2023.2.3/postmanApiKey.png\\",\\"https://api-buddy.com/img/2023.2.3/createWorkspace.png\\",\\"https://api-buddy.com/img/2023.2.3/showWorkspaceId.png\\",\\"https://api-buddy.com/img/2023.2.3/workspaceInfo.png\\",\\"https://api-buddy.com/img/2023.2.3/resetEnvironmentValue.png\\",\\"https://api-buddy.com/img/2023.2.3/postmanScript.png\\"],\\"dateModified\\":\\"2024-05-31T09:24:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Api key","slug":"api-key","link":"#api-key","children":[]},{"level":2,"title":"WorkspaceId","slug":"workspaceid","link":"#workspaceid","children":[]},{"level":2,"title":"Initial value 与 Current value","slug":"initial-value-与-current-value","link":"#initial-value-与-current-value","children":[]},{"level":2,"title":"前后置脚本","slug":"前后置脚本","link":"#前后置脚本","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1717147459000,"updatedTime":1717147459000,"contributors":[{"name":"Kings","email":"963987632@qq.com","commits":1}]},"readingTime":{"minutes":2.72,"words":815},"filePathRelative":"guide/features/postmanSync.md","localizedDate":"2024年5月31日","autoDesc":true}');export{J as comp,M as data};
