import{_ as l}from"./console_en-BWfI2C_a.js";import{_ as r}from"./addLibrary-m3-5pdM8.js";import{_ as u,r as o,o as d,c as k,a as n,d as s,b as t,w as h,e as p}from"./app-io1X_paZ.js";const m="/img/script_en.svg",g="/img/script_en.png",v="/img/2022.2.3/scriptDonate_en.png",_={},b=n("p",null,[n("strong",null,"Function"),s(": Developers can use Groovy scripts to customize some logic, which makes the API more flexible, such as dynamically encrypting and signing parameters and putting them in the header rather than directly writing dead.")],-1),y=n("strong",null,"Language",-1),f={href:"https://groovy-lang.org/",target:"_blank",rel:"noopener noreferrer"},x=p('<p>The groovy syntax is almost identical to Java.</p><h2 id="script-flow-chart" tabindex="-1"><a class="header-anchor" href="#script-flow-chart"><span>Script flow chart</span></a></h2><p><img src="'+m+'" alt="" loading="lazy"></p><h2 id="test-project" tabindex="-1"><a class="header-anchor" href="#test-project"><span>Test Project</span></a></h2>',4),q={href:"https://github.com/kings1990/fast-request-samples",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"built-in-variable",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#built-in-variable"},[n("span",null,"Built-in variable")])],-1),j=n("div",{class:"hint-container caution"},[n("p",{class:"hint-container-title"},"Notice"),n("p",null,"Developers should pay attention to the fact that the built-in variable has been declared in the script edited by themselves instead of creating a new Request or Response object. Otherwise, it may cause unexpected errors.")],-1),S={href:"https://hutool.cn/",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"cn.hutool.http.HttpRequest",-1),U={id:"request",tabindex:"-1"},H={class:"header-anchor",href:"#request"},N=n("ul",null,[n("li",null,"Remark: Contains request-related information, such as url, header, body, parameters"),n("li",null,"Type: cn.hutool.http.HttpRequest")],-1),T=n("p",null,"Parameters can be dynamically adjusted by modifying the request value.",-1),C={id:"response",tabindex:"-1"},I={class:"header-anchor",href:"#response"},P=n("ul",null,[n("li",null,"Remark: Contains response information"),n("li",null,"Type: cn.hutool.http.HttpResponse")],-1),D=n("p",null,"You can get the result of the response through the response value.",-1),O={id:"rfr",tabindex:"-1"},A={class:"header-anchor",href:"#rfr"},J=n("ul",null,[n("li",null,"Remark: Contains some properties related to plugin interaction")],-1),z={id:"rfr-projectheader",tabindex:"-1"},B={class:"header-anchor",href:"#rfr-projectheader"},L=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Remark: Contains project-level headers, which can be modified to dynamically set values in the UI
Type: java.util.LinkedHashMap
`)])],-1),G={id:"rfr-apiheader",tabindex:"-1"},F={class:"header-anchor",href:"#rfr-apiheader"},E=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Remark: Contains module level headers, which can be modified to dynamically set values in the UI
Type: java.util.LinkedHashMap
`)])],-1),M={id:"rfr-currentprojectname",tabindex:"-1"},V={class:"header-anchor",href:"#rfr-currentprojectname"},Z=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Remark: The project name of the item currently selected in the drop-down box
Type: java.lang.String
`)])],-1),K={id:"rfr-currentenvname",tabindex:"-1"},Y={class:"header-anchor",href:"#rfr-currentenvname"},Q=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Remark: The name of the environment currently selected in the drop-down box
Type: java.lang.String
`)])],-1),W={id:"rfr-currentdomain",tabindex:"-1"},X={class:"header-anchor",href:"#rfr-currentdomain"},$=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Remark: Get the currently active domain link
Type: java.lang.String
`)])],-1),nn={id:"rfr-currentmodulename",tabindex:"-1"},sn={class:"header-anchor",href:"#rfr-currentmodulename"},tn=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`Remark: Get the currently module name of the API
Type: java.lang.String
`)])],-1),an=n("h2",{id:"import-third-jar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-third-jar"},[n("span",null,"Import third jar")])],-1),en={class:"hint-container tip"},on=n("p",{class:"hint-container-title"},"Built-in Jar",-1),pn=n("div",{class:"language-text","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`com.alibaba:fastjson:1.2.78
cn.hutool:hutool-all:5.8.5
com.google.guava:guava:30.1.1-jre
`)])],-1),cn=n("p",null,"The version of Jar will be updated from time to time. If you find a bug, please contact up to upgrade.",-1),ln=n("p",null,"Developers can use the tools and methods provided by the above three Jars to reference directly in the script without relying on third-party Jar.",-1),rn=n("a",{href:"#demo"},"Demo",-1),un={href:"https://www.jetbrains.com/help/idea/auto-completing-code.html",target:"_blank",rel:"noopener noreferrer"},dn=p(`<ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Import jar(maven style)</label></li></ul><p>Downloading the jar may take extra time.</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token annotation punctuation">@Grab</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.apache.commons:commons-lang3:3.12.0&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang3<span class="token punctuation">.</span>StringUtils

String debug <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;debug&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>StringUtils<span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>debug<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//some logic</span>
<span class="token punctuation">}</span>
</code></pre></div><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Import jar(by local jar)</label></li></ul><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token comment">//Note the file: prefix here</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span>classLoader<span class="token punctuation">.</span><span class="token function">addURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;file:/path/to/jar&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> StringUtils <span class="token operator">=</span> Class<span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;org.apache.commons.lang3.StringUtils&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

String debug <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;debug&quot;</span></span><span class="token punctuation">)</span><span class="token comment">//get header</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>StringUtils<span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>debug<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//some logic</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="scope-and-order" tabindex="-1"><a class="header-anchor" href="#scope-and-order"><span>Scope and order</span></a></h2>`,6),kn=n("strong",null,"Scope",-1),hn=n("code",null,"Project-level",-1),mn=n("code",null,"Single API level",-1),gn=n("code",null,"Project-level",-1),vn=n("p",null,[n("code",null,"Project-level"),s(" will effort all APIs in the project, and "),n("code",null,"Single API level"),s(" only affects one API.")],-1),_n=n("p",null,[s("Execute order："),n("code",null,"Project-level"),s("->"),n("code",null,"Single API level")],-1),bn=n("p",null,[n("img",{src:g,alt:"scriptScope",loading:"lazy"})],-1),yn={id:"console",tabindex:"-1"},fn={class:"header-anchor",href:"#console"},xn=p(`<p>The console helps developers print some info you want.</p><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;info&quot;</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;print info&quot;</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;warn&quot;</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;success&quot;</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;error&quot;</span></span><span class="token punctuation">)</span>

</code></pre></div><p><img src="`+l+'" alt="console" loading="lazy"></p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h2>',4),qn={class:"hint-container tip"},wn=n("p",{class:"hint-container-title"},"Code completion support",-1),jn={href:"https://www.jetbrains.com/help/idea/auto-completing-code.html",target:"_blank",rel:"noopener noreferrer"},Sn=n("p",null,[n("img",{src:r,alt:"",loading:"lazy"})],-1),Rn=n("h3",{id:"_1-sign-parameter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-sign-parameter"},[n("span",null,"1. Sign parameter")])],-1),Un=n("p",null,"Create a new xxx.groovy file in your local idea, paste the following code. After appropriate modification, it can ensure that the local can run normally and then paste the code into the script.",-1),Hn=p(`<p><s>HttpRequest request = HttpUtil.createPost(&quot;http://localhost:8081/book/add&quot;)</s></p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>CharsetUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>StrUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>digest<span class="token punctuation">.</span>DigestUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpRequest
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpUtil

<span class="token comment">//Script logic begins</span>
String body <span class="token operator">=</span> StrUtil<span class="token punctuation">.</span><span class="token function">str</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">bodyBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> CharsetUtil<span class="token punctuation">.</span>CHARSET_UTF_8<span class="token punctuation">)</span>
body <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">&quot;xxxx&quot;</span></span><span class="token comment">//just for test</span>
String sign <span class="token operator">=</span> DigestUtil<span class="token punctuation">.</span><span class="token function">md5Hex</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
request<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;sign&quot;</span></span><span class="token punctuation">,</span>sign<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-use-the-response-of-a-request-as-the-header-parameter-of-the-request" tabindex="-1"><a class="header-anchor" href="#_2-use-the-response-of-a-request-as-the-header-parameter-of-the-request"><span>2. Use the response of a request as the Header parameter of the request.</span></a></h3><p>Note that the logic of obtaining the token must be handled in conjunction with the data structure returned by the http response. For example, if response returns</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>It needs to be written like this</p><p><code>String token = JSON.parseObject(myResponse.body()).getJSONObject(&quot;data&quot;).getString(&quot;token&quot;)</code></p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>CharsetUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>StrUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>digest<span class="token punctuation">.</span>DigestUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpRequest
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpResponse
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpUtil
<span class="token keyword">import</span> com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span>JSON

HttpRequest myRequest <span class="token operator">=</span> HttpUtil<span class="token punctuation">.</span><span class="token function">createPost</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;http://localhost:8081/api/v1.0/login&quot;</span></span><span class="token punctuation">)</span>
HttpResponse myResponse <span class="token operator">=</span> myRequest<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>myResponse<span class="token punctuation">.</span><span class="token function">isOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    String token <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>myResponse<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;token&quot;</span></span><span class="token punctuation">)</span>
    request<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;token&quot;</span></span><span class="token punctuation">,</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-set-an-environment-variable" tabindex="-1"><a class="header-anchor" href="#_3-set-an-environment-variable"><span>3. Set an environment variable</span></a></h3><p>If response returns</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can add this code in the post-script</p><div class="language-groovy line-numbers-mode" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>CharsetUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>StrUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span>digest<span class="token punctuation">.</span>DigestUtil
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpRequest
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpResponse
<span class="token keyword">import</span> cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpUtil
<span class="token keyword">import</span> com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>fastjson<span class="token punctuation">.</span>JSON

HttpRequest myRequest <span class="token operator">=</span> HttpUtil<span class="token punctuation">.</span><span class="token function">createPost</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;http://localhost:8081/api/v1.0/login&quot;</span></span><span class="token punctuation">)</span>
HttpResponse myResponse <span class="token operator">=</span> myRequest<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>myResponse<span class="token punctuation">.</span><span class="token function">isOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    String token <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>myResponse<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getJSONObject</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;data&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;token&quot;</span></span><span class="token punctuation">)</span>
    rfr<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;token&quot;</span></span><span class="token punctuation">,</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h2><ul><li>Groovy scripts are not sensitive to <code>;</code>, Java uses <code>;</code> as the end of the statement code, Groovy uses a newline to indicate the end of a code</li><li>The built-in variable has been declared. For example, in Demo 2, if an additional request needs to be created, the variable name needs to be noted that it cannot be the same as the built-in variable.</li></ul><h2 id="script-contribute" tabindex="-1"><a class="header-anchor" href="#script-contribute"><span>Script contribute 🌟</span></a></h2><p>In order to make the script more powerful, community script are welcome, and developers can donate the script in comments</p><ul><li>Format</li></ul><div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="token comment">/**
 * Author:Kings
 * Main Page:https://github.com/kings1990
 * Function:xxxxx
 */</span>

<span class="token comment">//Script begin</span>
<span class="token punctuation">....</span>
</code></pre></div><p><img src="`+v+'" alt="scriptDonate" loading="lazy"></p>',20);function Nn(Tn,Cn){const e=o("ExternalLinkIcon"),a=o("Badge"),c=o("ColorIcon"),i=o("RouteLink");return d(),k("div",null,[b,n("p",null,[y,s(": "),n("a",f,[s("Groovy"),t(e)])]),x,n("p",null,[n("a",q,[s("https://github.com/kings1990/fast-request-samples"),t(e)])]),w,j,n("p",null,[s("Plugin use "),n("a",S,[s("hutool"),t(e)]),s(),R,s(" to send request")]),n("h3",U,[n("a",H,[n("span",null,[s("request "),t(a,{text:"2022.2.3️",type:"tip"})])])]),N,T,n("h3",C,[n("a",I,[n("span",null,[s("response "),t(a,{text:"2022.2.3️",type:"tip"})])])]),P,D,n("h3",O,[n("a",A,[n("span",null,[s("rfr "),t(a,{text:"2022.2.3️",type:"tip"})])])]),J,n("h4",z,[n("a",B,[n("span",null,[s("rfr.projectHeader "),t(a,{text:"2022.2.3️",type:"tip"})])])]),L,n("h4",G,[n("a",F,[n("span",null,[s("rfr.apiHeader "),t(a,{text:"2022.2.3️",type:"tip"})])])]),E,n("h4",M,[n("a",V,[n("span",null,[s("rfr.currentProjectName "),t(a,{text:"2022.2.5️",type:"tip"})])])]),Z,n("h4",K,[n("a",Y,[n("span",null,[s("rfr.currentEnvName "),t(a,{text:"2022.2.5️",type:"tip"})])])]),Q,n("h4",W,[n("a",X,[n("span",null,[s("rfr.currentDomain "),t(a,{text:"2022.3.1️",type:"tip"})])])]),$,n("h4",nn,[n("a",sn,[n("span",null,[s("rfr.currentModuleName "),t(a,{text:"2022.3.1️",type:"tip"})])])]),tn,an,n("div",en,[on,pn,cn,ln,n("p",null,[s("Go to "),rn,s(" to learn how to get "),n("a",un,[s("Code completion"),t(e)]),s(".")])]),dn,n("p",null,[kn,s(": "),hn,s(" and "),mn,s("，"),gn,s(" needs to click "),t(i,{to:"/en/guide/features/projectValueConfig.html"},{default:h(()=>[t(c,{icon:"quanjucanshu"}),s(" Project-level config")]),_:1}),s(".")]),vn,_n,bn,n("h2",yn,[n("a",fn,[n("span",null,[s("Console "),t(a,{text:"2022.2.5",type:"tip"})])])]),xn,n("div",qn,[wn,n("p",null,[s("Add the following dependency to the project (if there is none), then you can use "),n("a",jn,[s("Code completion"),t(e)]),s(" for the plugin's core classes in the editor (quickly importing classes, getting method hints, etc.).")]),Sn]),Rn,Un,n("ul",null,[n("li",null,[t(a,{text:"Note that the final script needs to remove this line of code",type:"danger"})])]),Hn])}const On=u(_,[["render",Nn],["__file","script.html.vue"]]),An=JSON.parse('{"path":"/en/guide/script.html","title":"Script","lang":"en-US","frontmatter":{"title":"Script","icon":"code-box-fill","description":"Function: Developers can use Groovy scripts to customize some logic, which makes the API more flexible, such as dynamically encrypting and signing parameters and putting them in...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://api-buddy.com/guide/script.html"}],["meta",{"property":"og:url","content":"https://api-buddy.com/en/guide/script.html"}],["meta",{"property":"og:site_name","content":"Fast Request"}],["meta",{"property":"og:title","content":"Script"}],["meta",{"property":"og:description","content":"Function: Developers can use Groovy scripts to customize some logic, which makes the API more flexible, such as dynamically encrypting and signing parameters and putting them in..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api-buddy.com/img/script_en.svg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-31T09:24:19.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Script"}],["meta",{"property":"article:modified_time","content":"2024-05-31T09:24:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Script\\",\\"image\\":[\\"https://api-buddy.com/img/script_en.svg\\",\\"https://api-buddy.com/img/script_en.png\\",\\"https://api-buddy.com/img/2022.2.5/console_en.png\\",\\"https://api-buddy.com/img/2024.1.5/addLibrary.png\\",\\"https://api-buddy.com/img/2022.2.3/scriptDonate_en.png\\"],\\"dateModified\\":\\"2024-05-31T09:24:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Script flow chart","slug":"script-flow-chart","link":"#script-flow-chart","children":[]},{"level":2,"title":"Test Project","slug":"test-project","link":"#test-project","children":[]},{"level":2,"title":"Built-in variable","slug":"built-in-variable","link":"#built-in-variable","children":[{"level":3,"title":"request","slug":"request","link":"#request","children":[]},{"level":3,"title":"response","slug":"response","link":"#response","children":[]},{"level":3,"title":"rfr","slug":"rfr","link":"#rfr","children":[]}]},{"level":2,"title":"Import third jar","slug":"import-third-jar","link":"#import-third-jar","children":[]},{"level":2,"title":"Scope and order","slug":"scope-and-order","link":"#scope-and-order","children":[]},{"level":2,"title":"Console","slug":"console","link":"#console","children":[]},{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[{"level":3,"title":"1. Sign parameter","slug":"_1-sign-parameter","link":"#_1-sign-parameter","children":[]},{"level":3,"title":"2. Use the response of a request as the Header parameter of the request.","slug":"_2-use-the-response-of-a-request-as-the-header-parameter-of-the-request","link":"#_2-use-the-response-of-a-request-as-the-header-parameter-of-the-request","children":[]},{"level":3,"title":"3. Set an environment variable","slug":"_3-set-an-environment-variable","link":"#_3-set-an-environment-variable","children":[]}]},{"level":2,"title":"Note","slug":"note","link":"#note","children":[]},{"level":2,"title":"Script contribute 🌟","slug":"script-contribute","link":"#script-contribute","children":[]}],"git":{"createdTime":1717147459000,"updatedTime":1717147459000,"contributors":[{"name":"Kings","email":"963987632@qq.com","commits":1}]},"readingTime":{"minutes":3.13,"words":939},"filePathRelative":"en/guide/script.md","localizedDate":"May 31, 2024","autoDesc":true}');export{On as comp,An as data};
