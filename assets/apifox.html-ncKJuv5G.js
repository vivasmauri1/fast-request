import{_ as n,r as a,o as i,c as o,a as e,d as r,b as p,e as c}from"./app-io1X_paZ.js";const s="/img/2024.1.4/apifoxIntegration_en.png",g="/img/features/apifoxGenerateApikey_en.png",l="/img/features/apifoxConfigProject_en.png",d="/img/features/apifoxSyncEnvironment_en.png",m="/img/features/apifoxSyncApi_en.png",f={},h=e("h1",{id:"apifox-integration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#apifox-integration"},[e("span",null,"Apifox integration")])],-1),u=c('<p><img src="'+s+'" alt="apifoxIntegration" loading="lazy"></p><h2 id="_1-api-access-token-configuration" tabindex="-1"><a class="header-anchor" href="#_1-api-access-token-configuration"><span>1. API access token configuration</span></a></h2><p><img src="'+g+'" alt="apifoxGenerateApikey" loading="lazy"></p><p>Setting path: <code>Avatar -&gt; Account Setting-&gt; API Access Token</code>。</p><div class="hint-container tip"><p class="hint-container-title">Expiration</p><p>Note that after the validity period of the Api key, the plugin&#39;s Apifox synchronization function will no longer work, so it is recommended to check <code>no Expriation</code> when creating the Api Access token.</p></div><h2 id="_2-mapping-project" tabindex="-1"><a class="header-anchor" href="#_2-mapping-project"><span>2. Mapping project</span></a></h2><p><img src="'+l+'" alt="apifoxConfigProject" loading="lazy"></p><p>After we have correctly set the Api access token, we need to make a mapping association between the IDEA project and the Apifox project. Click to refresh the project. When the project is loaded, click on the team option and check the target project.</p><h2 id="_3-environment-sync" tabindex="-1"><a class="header-anchor" href="#_3-environment-sync"><span>3. Environment sync</span></a></h2><p><img src="'+d+'" alt="apifoxSyncEnvironment" loading="lazy"></p><p>Environment sync function will synchronize all domain names, variables, and global parameters of the project to Apifox as service parameters, variables, and global parameters. It is recommended to execute this step before <strong>API sync</strong></p><h2 id="_4-api-sync" tabindex="-1"><a class="header-anchor" href="#_4-api-sync"><span>4. API sync</span></a></h2><p><img src="'+m+'" alt="apifoxSyncApi" loading="lazy"></p><p>To synchronize the API, you need to save the API first. It can be triggered manually or automatically. For automatic triggering, you need to check the <code>Sync after save</code> option in the Apifox sync setting.</p>',14);function y(_,x){const t=a("Badge");return i(),o("div",null,[h,e("p",null,[r("Version required: "),p(t,{text:"2024.1.4+"})]),u])}const k=n(f,[["render",y],["__file","apifox.html.vue"]]),v=JSON.parse('{"path":"/en/guide/features/apifox.html","title":"Apifox integration","lang":"en-US","frontmatter":{"description":"Apifox integration Version required: apifoxIntegration 1. API access token configuration apifoxGenerateApikey Setting path: Avatar -> Account Setting-> API Access Token。 Expirat...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://api-buddy.com/guide/features/apifox.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/en/guide/features/apifox.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"Apifox integration"}],["meta",{"property":"og:description","content":"Apifox integration Version required: apifoxIntegration 1. API access token configuration apifoxGenerateApikey Setting path: Avatar -> Account Setting-> API Access Token。 Expirat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/2024.1.4/apifoxIntegration_en.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T09:24:19.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Apifox integration"}],["meta",{"property":"article:modified_time","content":"2024-05-31T09:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apifox integration\\",\\"image\\":[\\"https://api-buddy.com/img/2024.1.4/apifoxIntegration_en.png\\",\\"https://api-buddy.com/img/features/apifoxGenerateApikey_en.png\\",\\"https://api-buddy.com/img/features/apifoxConfigProject_en.png\\",\\"https://api-buddy.com/img/features/apifoxSyncEnvironment_en.png\\",\\"https://api-buddy.com/img/features/apifoxSyncApi_en.png\\"],\\"dateModified\\":\\"2024-05-31T09:24:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. API access token configuration","slug":"_1-api-access-token-configuration","link":"#_1-api-access-token-configuration","children":[]},{"level":2,"title":"2. Mapping project","slug":"_2-mapping-project","link":"#_2-mapping-project","children":[]},{"level":2,"title":"3. Environment sync","slug":"_3-environment-sync","link":"#_3-environment-sync","children":[]},{"level":2,"title":"4. API sync","slug":"_4-api-sync","link":"#_4-api-sync","children":[]}],"git":{"createdTime":1717147459000,"updatedTime":1717147459000,"contributors":[{"name":"Kings","email":"963987632@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"en/guide/features/apifox.md","localizedDate":"May 31, 2024","autoDesc":true}');export{k as comp,v as data};
