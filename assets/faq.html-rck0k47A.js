import{_ as c,a as d,b as u,c as h,d as m}from"./showToolbar-1uOrduVA.js";import{_ as g}from"./ignoreFiled_en-EyuGDq4I.js";import{_ as f}from"./apiPreview-TsYf71lp.js";import{_ as k,r as p,o as v,c as b,a as e,b as t,d as n,w as a,e as i}from"./app-io1X_paZ.js";const y="/img/manageConfig_en.png",w="/img/faq/timeout_en.png",q="/img/skill/urlError_en.png",_={},x=e("p",null,"Keywords meaning",-1),S=e("hr",null,null,-1),A=e("p",null,"We will constantly update the problems encountered by developers and the corresponding solutions.",-1),C={class:"table-of-contents"},T=i('<h2 id="s-slow-operations-are-prohibited-on-edt" tabindex="-1"><a class="header-anchor" href="#s-slow-operations-are-prohibited-on-edt"><span>S: Slow operations are prohibited on EDT</span></a></h2><p><code>Slow operations are prohibited on EDT</code> error.</p><p>Fill into the keywords <code>ide.slow.operations.assertion</code> in <strong>SearchEveryWhere</strong> and uncheck them like following.</p><p><img src="'+d+'" alt="slowOperationsConfig" loading="lazy"></p><h2 id="s-send-button-is-disabled-but-there-is-no-notification-message" tabindex="-1"><a class="header-anchor" href="#s-send-button-is-disabled-but-there-is-no-notification-message"><span>S: Send button is disabled, but there is no notification message</span></a></h2><p>You need to manually turn on the notification message. If notification messages are not turned on, many messages cannot be displayed, so IDEA&#39;s message notification settings need to be configured. Other situations are handled similarly.</p><p>Go to <code>Setting-&gt; Appearance &amp; Behavior-&gt;Nofications</code> , check <code>Display ballon notifications</code> and <code>Enable system notifications</code>. If Fast Request is checked in <code>Don&#39;t ask again nofications</code>, this item needs to be removed.</p><p><img src="'+u+'" alt="enableNotifications" loading="lazy"></p><h2 id="s-timeout-setting" tabindex="-1"><a class="header-anchor" href="#s-timeout-setting"><span>S: Timeout setting</span></a></h2><p>Default: 60 s</p><p>Click the plug-in settings button <strong>Manage Configuration</strong> and set the values of Connect Timeout and Read Timeout.</p><p><img src="'+y+'" alt="manageConfig" loading="lazy"></p><p><img src="'+w+'" alt="timeout" loading="lazy"></p><h2 id="s-quickly-add-domain" tabindex="-1"><a class="header-anchor" href="#s-quickly-add-domain"><span>S: Quickly add domain</span></a></h2>',14),Q=e("strong",null,"2023.1.1",-1),I=e("h2",{id:"s-apis-lost",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#s-apis-lost"},[e("span",null,"S: APIs lost")])],-1),j=e("p",null,"So sorry to inform you that installing the 2023.1.3 version of (have been hidden) will cause loss of historical APIs, and you will need to manually retrieve the data. Here's what you need to do:",-1),P={start:"0"},E=e("li",null,"Download 2023.1.3.2+ version of plugin",-1),R=e("li",null,[n('Go to the .idea directory in your project, right-click and click on "Local history", find the change log about '),e("code",null,".idea/FastRequestCollection.xml"),n(' (the title contains "Deleting"), and locate the last version. Copy the contents of this version and paste them into '),e("code",null,".idea/fastRequest/fastRequestCollection.xml")],-1),F=e("li",null,"Restart IntelliJ IDEA.",-1),D=e("p",null,[e("img",{src:c,alt:"dataTransfer20231",loading:"lazy"})],-1),z=e("h2",{id:"s-url-error",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#s-url-error"},[e("span",null,"S: Url error")])],-1),H=e("p",null,[e("img",{src:q,alt:"urlError",loading:"lazy"})],-1),U=i(`<ol><li>Configure the correct domain name and enable the 2 drop-down boxes for the project and environment</li><li>Set the correct URL, for example, to replace the variable {id} on the URL, you can replace the variable in the Path Param tab</li></ol><h2 id="s-how-to-ignore-the-field-of-the-entity" tabindex="-1"><a class="header-anchor" href="#s-how-to-ignore-the-field-of-the-entity"><span>S: How to ignore the field of the entity</span></a></h2><p>Way 1: Use one of the following 2 annotations.</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>com.fasterxml.jackson.annotation.JsonIgnore

com.alibaba.fastjson.annotation.JSONField(serialize = false)
</code></pre></div><p>Way 2: Add the <code>static</code> modifier to the field.</p><p>Way 3: Add <code>@fastRequestParseIgnore</code> in comment</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * xxx description
 * <span class="token keyword">@fastRequestParseIgnore</span>
 */</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> someIgnoreField<span class="token punctuation">;</span>
</code></pre></div><p>Way 4: Ignore field name <img src="`+g+'" alt="ignoreFiled" loading="lazy"></p><p>Only need to add field names in the configuration to ignore target fields in the entity class.</p><h2 id="s-quick-locate" tabindex="-1"><a class="header-anchor" href="#s-quick-locate"><span>S: Quick locate</span></a></h2><p>After getting the focus of the window or pop-up box, enter the letters to position, then use the <code>↑</code> arrow or the <code>↓</code> arrow for jump position</p><p>For example:</p><p><img src="'+f+'" alt="apiDocExample" loading="lazy"></p><h2 id="s-multi-file-upload" tabindex="-1"><a class="header-anchor" href="#s-multi-file-upload"><span>S: Multi-file upload</span></a></h2><p>Enter multiple values and set the field type to file</p><p><img src="'+h+'" alt="multiFileUpload" loading="lazy"></p><h2 id="s-pass-text-plain-param-in-body" tabindex="-1"><a class="header-anchor" href="#s-pass-text-plain-param-in-body"><span>S: Pass text/plain param in body</span></a></h2><p>Please add <strong>Content-Type: text/plain</strong> in the header</p>',18),B=e("code",null,"Common header",-1),W=e("h2",{id:"s-no-controller-how-to-send-a-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#s-no-controller-how-to-send-a-request"},[e("span",null,"S: No controller, how to send a request")])],-1),N=i(`<h2 id="s-get-code-hints-while-writing-scripts" tabindex="-1"><a class="header-anchor" href="#s-get-code-hints-while-writing-scripts"><span>S: Get code hints while writing scripts</span></a></h2><p>Copy the code and delete it after finish the script</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>import cn.hutool.http.HttpUtil

def request = HttpUtil.createGet(&quot;shouldremove&quot;)
def response = request.execute()
</code></pre></div><h2 id="s-api-doc-sync" tabindex="-1"><a class="header-anchor" href="#s-api-doc-sync"><span>S: API doc sync</span></a></h2>`,4),G=e("p",null,"Recommendation: There is no need to create a repo in Github, Gitee, and Gitlab in advance. Plug-ins will automatically help create a repo. Developers only need to provide the repo name.",-1),O=e("h2",{id:"s-apis-echo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#s-apis-echo"},[e("span",null,"S: APIs echo")])],-1),L=e("code",null,"save button",-1),V=i(`<h2 id="s-best-visual-effects" tabindex="-1"><a class="header-anchor" href="#s-best-visual-effects"><span>S: Best Visual Effects</span></a></h2><p>Adjust tool window width to <code>610</code>+ pixel and will achieve the best visual effect</p><h2 id="q-header-likes-origin-not-effect" tabindex="-1"><a class="header-anchor" href="#q-header-likes-origin-not-effect"><span>Q: Header likes Origin not effect</span></a></h2><p>Because the <strong>restrictedHeaders</strong> strategy of <code>sun.net.www.protocol.http.HttpURLConnection</code> . If you want to use the following headers, you need to configure vm parameters for IDEA</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> restrictedHeaders <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">/* Restricted by XMLHttpRequest2 */</span>
        <span class="token comment">//&quot;Accept-Charset&quot;,</span>
        <span class="token comment">//&quot;Accept-Encoding&quot;,</span>
        <span class="token string">&quot;Access-Control-Request-Headers&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Access-Control-Request-Method&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Connection&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* close is allowed */</span>
        <span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//&quot;Cookie&quot;,</span>
        <span class="token comment">//&quot;Cookie2&quot;,</span>
        <span class="token string">&quot;Content-Transfer-Encoding&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//&quot;Date&quot;,</span>
        <span class="token comment">//&quot;Expect&quot;,</span>
        <span class="token string">&quot;Host&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Keep-Alive&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Origin&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// &quot;Referer&quot;,</span>
        <span class="token comment">// &quot;TE&quot;,</span>
        <span class="token string">&quot;Trailer&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Transfer-Encoding&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Upgrade&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//&quot;User-Agent&quot;,</span>
        <span class="token string">&quot;Via&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Click <strong>help-&gt;Edit Custom Vm Options...</strong>,add the following config in <strong>idea.vmoptions</strong>(linux) or <strong>idea64.exe.vmoptions</strong>(windows)</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>-Dsun.net.http.allowRestrictedHeaders=true
</code></pre></div><h2 id="q-response-return-unexpected-end-of-file-from-server" tabindex="-1"><a class="header-anchor" href="#q-response-return-unexpected-end-of-file-from-server"><span>Q: Response return Unexpected end of file from server</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>1. Network connection was lost
2. The server decided to close the connection
3. Something in between the client and the server (nginx, router, etc) terminated the request
4. The server-side api requires a proxy but IDEA is not configured, especially for some intranet projects
</code></pre></div><p>How to set IDEA proxy: <code>Setting-&gt; Appearance &amp; Behavior-&gt;System Settings-&gt;HTTP Proxy</code></p><h2 id="q-spring-get-request-with-array-collection-parameter-reports-400-error" tabindex="-1"><a class="header-anchor" href="#q-spring-get-request-with-array-collection-parameter-reports-400-error"><span>Q: Spring Get request with array/collection parameter reports 400 error</span></a></h2><p>For example Url = <code>http://localhost:8081/test?a[0].b[0].token=xxx&amp;a[0].b[0].name=yyy</code></p><p>Add the following configuration:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>embedded<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span></span><span class="token class-name">TomcatConnectorCustomizer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>embedded<span class="token punctuation">.</span>tomcat<span class="token punctuation">.</span></span><span class="token class-name">TomcatServletWebServerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ConfigurableServletWebServerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ConfigurableServletWebServerFactory</span> <span class="token function">webServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TomcatServletWebServerFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TomcatServletWebServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        factory<span class="token punctuation">.</span><span class="token function">addConnectorCustomizers</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TomcatConnectorCustomizer</span><span class="token punctuation">)</span> connector <span class="token operator">-&gt;</span> connector<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;relaxedQueryChars&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;|{}[]\\\\&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> factory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="q-action-buttons-are-not-visible" tabindex="-1"><a class="header-anchor" href="#q-action-buttons-are-not-visible"><span>Q: Action buttons are not visible</span></a></h2><p>Click <code>Options</code> and check <code>Show Toolbar</code></p><p><img src="`+m+'" alt="" loading="lazy"></p><h2 id="q-generate-parameters、jump-error" tabindex="-1"><a class="header-anchor" href="#q-generate-parameters、jump-error"><span>Q: Generate parameters、jump error</span></a></h2><p><strong>A:</strong> Do not have methods with the same method name in the controller code</p><h2 id="q-left-icon-missing" tabindex="-1"><a class="header-anchor" href="#q-left-icon-missing"><span>Q: Left icon missing</span></a></h2>',20),M=i(`<p><strong>A:</strong> Open config <code>setting-&gt;Editor-&gt;Gutter icons-&gt;show gutter icon</code></p><h2 id="q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid" tabindex="-1"><a class="header-anchor" href="#q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid"><span>Q: After entering the parameters, the API call found that the parameters were invalid</span></a></h2><p><strong>A:</strong> Plugin version less than <mark>2022.2.3</mark>, when editing a value in the table, you need to <mark>click in the blank space</mark> after editing the value, then send the request. The bug has been fixed in the 2022.2.3+ version.</p><h2 id="q-why-the-plugin-doesn-t-respond" tabindex="-1"><a class="header-anchor" href="#q-why-the-plugin-doesn-t-respond"><span>Q: Why the plugin doesn&#39;t respond</span></a></h2><p><strong>A:</strong> Please configure the relevant configuration according to the steps introduced in the first chapter first, and then click the icon.</p><h2 id="q-idea-freezes-after-clicking-the-fastrequest-icon" tabindex="-1"><a class="header-anchor" href="#q-idea-freezes-after-clicking-the-fastrequest-icon"><span>Q: Idea freezes after clicking the fastRequest icon</span></a></h2><p><strong>A:</strong> :The entity class you designed is nested and recursive, the plugin does not support.</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A</span> a<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you don&#39;t need the B property in the above case, then you can manually add a static keywords to property B when generating</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function K(J,Z){const l=p("Badge"),s=p("router-link"),o=p("ColorIcon"),r=p("RouteLink");return v(),b("div",null,[e("blockquote",null,[x,t(l,{text:"S: Skill",color:"#087CFA"}),n(),t(l,{text:"Q: Question",color:"#FE2857"}),n(),t(l,{text:"A: Answer",color:"#21D789"}),S,A]),e("nav",C,[e("ul",null,[e("li",null,[t(s,{to:"#s-slow-operations-are-prohibited-on-edt"},{default:a(()=>[n("S: Slow operations are prohibited on EDT")]),_:1})]),e("li",null,[t(s,{to:"#s-send-button-is-disabled-but-there-is-no-notification-message"},{default:a(()=>[n("S: Send button is disabled, but there is no notification message")]),_:1})]),e("li",null,[t(s,{to:"#s-timeout-setting"},{default:a(()=>[n("S: Timeout setting")]),_:1})]),e("li",null,[t(s,{to:"#s-quickly-add-domain"},{default:a(()=>[n("S: Quickly add domain")]),_:1})]),e("li",null,[t(s,{to:"#s-apis-lost"},{default:a(()=>[n("S: APIs lost")]),_:1})]),e("li",null,[t(s,{to:"#s-url-error"},{default:a(()=>[n("S: Url error")]),_:1})]),e("li",null,[t(s,{to:"#s-how-to-ignore-the-field-of-the-entity"},{default:a(()=>[n("S: How to ignore the field of the entity")]),_:1})]),e("li",null,[t(s,{to:"#s-quick-locate"},{default:a(()=>[n("S: Quick locate")]),_:1})]),e("li",null,[t(s,{to:"#s-multi-file-upload"},{default:a(()=>[n("S: Multi-file upload")]),_:1})]),e("li",null,[t(s,{to:"#s-pass-text-plain-param-in-body"},{default:a(()=>[n("S: Pass text/plain param in body")]),_:1})]),e("li",null,[t(s,{to:"#s-no-controller-how-to-send-a-request"},{default:a(()=>[n("S: No controller, how to send a request")]),_:1})]),e("li",null,[t(s,{to:"#s-get-code-hints-while-writing-scripts"},{default:a(()=>[n("S: Get code hints while writing scripts")]),_:1})]),e("li",null,[t(s,{to:"#s-api-doc-sync"},{default:a(()=>[n("S: API doc sync")]),_:1})]),e("li",null,[t(s,{to:"#s-apis-echo"},{default:a(()=>[n("S: APIs echo")]),_:1})]),e("li",null,[t(s,{to:"#s-best-visual-effects"},{default:a(()=>[n("S: Best Visual Effects")]),_:1})]),e("li",null,[t(s,{to:"#q-header-likes-origin-not-effect"},{default:a(()=>[n("Q: Header likes Origin not effect")]),_:1})]),e("li",null,[t(s,{to:"#q-response-return-unexpected-end-of-file-from-server"},{default:a(()=>[n("Q: Response return Unexpected end of file from server")]),_:1})]),e("li",null,[t(s,{to:"#q-spring-get-request-with-array-collection-parameter-reports-400-error"},{default:a(()=>[n("Q: Spring Get request with array/collection parameter reports 400 error")]),_:1})]),e("li",null,[t(s,{to:"#q-action-buttons-are-not-visible"},{default:a(()=>[n("Q: Action buttons are not visible")]),_:1})]),e("li",null,[t(s,{to:"#q-generate-parameters、jump-error"},{default:a(()=>[n("Q: Generate parameters、jump error")]),_:1})]),e("li",null,[t(s,{to:"#q-left-icon-missing"},{default:a(()=>[n("Q: Left icon missing")]),_:1})]),e("li",null,[t(s,{to:"#q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid"},{default:a(()=>[n("Q: After entering the parameters, the API call found that the parameters were invalid")]),_:1})]),e("li",null,[t(s,{to:"#q-why-the-plugin-doesn-t-respond"},{default:a(()=>[n("Q: Why the plugin doesn't respond")]),_:1})]),e("li",null,[t(s,{to:"#q-idea-freezes-after-clicking-the-fastrequest-icon"},{default:a(()=>[n("Q: Idea freezes after clicking the fastRequest icon")]),_:1})])])]),T,e("p",null,[n("Please refer "),t(r,{to:"/en/guide/features/projectLevelDomainConfig.html"},{default:a(()=>[t(o,{icon:"domainConfig"}),n(" Project-level domain config")]),_:1}),n(" (Plugin version>="),Q,n(")")]),I,j,e("ol",P,[E,R,F,e("li",null,[n("Click on the icon "),t(o,{icon:"dataTransfer"}),n(" in the APIs tab and do transfer")])]),D,z,H,t(l,{text:"Solution",type:"tip"}),U,e("p",null,[n("Consider using add header by "),t(r,{to:"/en/guide/features/commonHeader.html"},{default:a(()=>[B]),_:1})]),W,e("p",null,[n("Refer to "),t(r,{to:"/en/guide/features/tempRequest.html"},{default:a(()=>[n("Temporary request")]),_:1})]),N,e("p",null,[n("When you modify your method, the API returned from the APIs list is the API saved before you update it. At this time, if you want to ensure that the online API document is your modified one, you need to click "),t(o,{icon:"saveNew"}),n("(save) or click "),t(o,{icon:"restfulFastRequest"}),n(" again and then sync api doc.")]),G,O,e("p",null,[n("For the saved API, you modify it again, and you need manually fill in the parameters and save "),t(o,{icon:"saveNew"}),n(" it. If you don't want the parameters you saved before at all, you can just click "),t(o,{icon:"regenerate"}),n("("),t(r,{to:"/guide/features/regenerate.html"},{default:a(()=>[n("Re generate")]),_:1}),n(").")]),e("blockquote",null,[e("p",null,[n("Please ensure that click "),L,n(),t(o,{icon:"saveNew"}),n(" every time you modify api params.")])]),V,e("p",null,[n("Left icon "),t(o,{icon:"restfulFastRequest"}),n(" missing.")]),M])}const ne=k(_,[["render",K],["__file","faq.html.vue"]]),te=JSON.parse(`{"path":"/en/guide/faq.html","title":"FAQ","lang":"en-US","frontmatter":{"title":"FAQ","icon":"faq","description":" Keywords meaning S: Slow operations are prohibited on EDT Slow operations are prohibited on EDT error. Fill into the keywords ide.slow.operations.assertion in SearchEveryWhere ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://api-buddy.com/guide/faq.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/en/guide/faq.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"FAQ"}],["meta",{"property":"og:description","content":" Keywords meaning S: Slow operations are prohibited on EDT Slow operations are prohibited on EDT error. Fill into the keywords ide.slow.operations.assertion in SearchEveryWhere ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/faq/slowOperationsConfig.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T09:24:19.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"FAQ"}],["meta",{"property":"article:modified_time","content":"2024-05-31T09:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FAQ\\",\\"image\\":[\\"https://api-buddy.com/img/faq/slowOperationsConfig.png\\",\\"https://api-buddy.com/img/faq/enableNotifications.png\\",\\"https://api-buddy.com/img/manageConfig_en.png\\",\\"https://api-buddy.com/img/faq/timeout_en.png\\",\\"https://api-buddy.com/img/faq/dataTransfer202313.png\\",\\"https://api-buddy.com/img/skill/urlError_en.png\\",\\"https://api-buddy.com/img/2024.1.1/ignoreFiled_en.png\\",\\"https://api-buddy.com/img/apiPreview.gif\\",\\"https://api-buddy.com/img/skill/multiFileUpload.png\\",\\"https://api-buddy.com/img/faq/showToolbar.png\\"],\\"dateModified\\":\\"2024-05-31T09:24:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"S: Slow operations are prohibited on EDT","slug":"s-slow-operations-are-prohibited-on-edt","link":"#s-slow-operations-are-prohibited-on-edt","children":[]},{"level":2,"title":"S: Send button is disabled, but there is no notification message","slug":"s-send-button-is-disabled-but-there-is-no-notification-message","link":"#s-send-button-is-disabled-but-there-is-no-notification-message","children":[]},{"level":2,"title":"S: Timeout setting","slug":"s-timeout-setting","link":"#s-timeout-setting","children":[]},{"level":2,"title":"S: Quickly add domain","slug":"s-quickly-add-domain","link":"#s-quickly-add-domain","children":[]},{"level":2,"title":"S: APIs lost","slug":"s-apis-lost","link":"#s-apis-lost","children":[]},{"level":2,"title":"S: Url error","slug":"s-url-error","link":"#s-url-error","children":[]},{"level":2,"title":"S: How to ignore the field of the entity","slug":"s-how-to-ignore-the-field-of-the-entity","link":"#s-how-to-ignore-the-field-of-the-entity","children":[]},{"level":2,"title":"S: Quick locate","slug":"s-quick-locate","link":"#s-quick-locate","children":[]},{"level":2,"title":"S: Multi-file upload","slug":"s-multi-file-upload","link":"#s-multi-file-upload","children":[]},{"level":2,"title":"S: Pass text/plain param in body","slug":"s-pass-text-plain-param-in-body","link":"#s-pass-text-plain-param-in-body","children":[]},{"level":2,"title":"S: No controller, how to send a request","slug":"s-no-controller-how-to-send-a-request","link":"#s-no-controller-how-to-send-a-request","children":[]},{"level":2,"title":"S: Get code hints while writing scripts","slug":"s-get-code-hints-while-writing-scripts","link":"#s-get-code-hints-while-writing-scripts","children":[]},{"level":2,"title":"S: API doc sync","slug":"s-api-doc-sync","link":"#s-api-doc-sync","children":[]},{"level":2,"title":"S: APIs echo","slug":"s-apis-echo","link":"#s-apis-echo","children":[]},{"level":2,"title":"S: Best Visual Effects","slug":"s-best-visual-effects","link":"#s-best-visual-effects","children":[]},{"level":2,"title":"Q: Header likes Origin not effect","slug":"q-header-likes-origin-not-effect","link":"#q-header-likes-origin-not-effect","children":[]},{"level":2,"title":"Q: Response return Unexpected end of file from server","slug":"q-response-return-unexpected-end-of-file-from-server","link":"#q-response-return-unexpected-end-of-file-from-server","children":[]},{"level":2,"title":"Q: Spring Get request with array/collection parameter reports 400 error","slug":"q-spring-get-request-with-array-collection-parameter-reports-400-error","link":"#q-spring-get-request-with-array-collection-parameter-reports-400-error","children":[]},{"level":2,"title":"Q: Action buttons are not visible","slug":"q-action-buttons-are-not-visible","link":"#q-action-buttons-are-not-visible","children":[]},{"level":2,"title":"Q: Generate parameters、jump error","slug":"q-generate-parameters、jump-error","link":"#q-generate-parameters、jump-error","children":[]},{"level":2,"title":"Q: Left icon missing","slug":"q-left-icon-missing","link":"#q-left-icon-missing","children":[]},{"level":2,"title":"Q: After entering the parameters, the API call found that the parameters were invalid","slug":"q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid","link":"#q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid","children":[]},{"level":2,"title":"Q: Why the plugin doesn't respond","slug":"q-why-the-plugin-doesn-t-respond","link":"#q-why-the-plugin-doesn-t-respond","children":[]},{"level":2,"title":"Q: Idea freezes after clicking the fastRequest icon","slug":"q-idea-freezes-after-clicking-the-fastrequest-icon","link":"#q-idea-freezes-after-clicking-the-fastrequest-icon","children":[]}],"git":{"createdTime":1717147459000,"updatedTime":1717147459000,"contributors":[{"name":"Kings","email":"963987632@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1164},"filePathRelative":"en/guide/faq.md","localizedDate":"May 31, 2024","autoDesc":true}`);export{ne as comp,te as data};
