var target=window.location.hash.replace("#","");function copyFunction(){document.getElementById("getlink").style.display="inline-block",document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("getlink").style.display="none",document.getElementById("LinkCopy").classList.add("copied"),setTimeout((function(){document.getElementById("LinkCopy").classList.remove("copied")}),3e3)}function shortCodeIfy(e,t,a){for(var o=e.split("$"),s=/[^{\}]+(?=})/g,r=0;r<o.length;r++){var i=o[r].split("=");if(i[0].trim()==t)return null!=(a=i[1]).match(s)&&String(a.match(s)).trim()}return!1}function msgError(){return'<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'}function beforeLoader(){return'<div class="loader"></div>'}function getFeedUrl(e,t,a,o){if("recent"===a)o="/feeds/posts/default?alt=json&max-results="+t;else o="comments"==e?"/feeds/comments/default?alt=json&max-results="+t:"/feeds/posts/default/-/"+a+"?alt=json&max-results="+t;return o}function getPostLink(e,t){for(var a=0;a<e[t].link.length;a++)if("alternate"==e[t].link[a].rel){var o=e[t].link[a].href;break}return o}function getPostTitle(e,t,a){return e[t].title.$t?e[t].title.$t:exportify.noTitle}function getPostTag(e,t,a){return e[t].category?'<span class="entry-category">'+e[t].category[0].term+"</span>":""}function getPostAuthor(e,t,a,o){return o=""!=exportify.postAuthorLabel?'<span class="sp">'+exportify.postAuthorLabel+"</span>":"",exportify.postAuthor?'<span class="entry-author mi">'+o+'<span class="author-name">'+e[t].author[0].name.$t+"</span></span>":""}function getPostDate(e,t,a,o,s,r){monthNames="undefined"!=typeof monthNames?monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dateFormat="undefined"!=typeof dateFormat?dateFormat:"{m} {d}, {y}";var i=e[t].published.$t,n=i.substring(0,4),l=i.substring(5,7),c=i.substring(8,10),d=dateFormat.replace("{m}",monthNames[parseInt(l,10)-1]).replace("{d}",c).replace("{y}",n);return r=exportify.postAuthor&&""!=exportify.postDateLabel?'<span class="sp">'+exportify.postDateLabel+"</span>":"",[1==exportify.postDate?'<span class="entry-time mi">'+r+'<time class="published" datetime="'+i+'">'+d+"</time></span>":"",1==exportify.postDate?'<span class="entry-time mi"><time class="published" datetime="'+i+'">'+d+"</time></span>":""]}function getPostMeta(e,t,a,o,s){if(void 0!==a[o].thr$total){var r="";("related"==s||"block"==s)&&a[o].thr$total.$t>0&&(r="<span class='cmt-count'>"+a[o].thr$total.$t+"</span>")}else r="";return[1==exportify.postAuthor||1==exportify.postDate?'<div class="entry-meta">'+e+t[0]+"</div>":"",1==exportify.postDate?'<div class="entry-meta">'+t[1]+r+"</div>":""]}function getFirstImage(e,t){var a=$("<div>").html(e).find("img:first").attr("src"),o=a.lastIndexOf("/")||0,s=a.lastIndexOf("/",o-1)||0,r=a.substring(0,s),i=a.substring(s,o),n=a.substring(o);return(i.match(/\/s[0-9]+/g)||i.match(/\/w[0-9]+/g)||"/d"==i)&&(i="/w72-h72-p-k-no-nu"),r+i+n}function getPostImage(e,t,a,o){var s=null!=e[t].content?e[t].content.$t:"";return a=e[t].media$thumbnail?e[t].media$thumbnail.url:"https://resources.blogblog.com/img/blank.gif",s.indexOf(s.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?s.indexOf("<img")>-1?s.indexOf(s.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<s.indexOf("<img")?a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):getFirstImage(s):a.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):s.indexOf("<img")>-1?getFirstImage(s):"https://resources.blogblog.com/img/blank.gif"}function getPostImageType(e,t){return e.match("i.ytimg.com")?"is-video":"is-image"}function getPostSummary(e,t,a,o,s,r){return e[t].content?'<span class="entry-excerpt excerpt">'+$("<div>").html(e[t].content.$t).text().trim().substr(0,a)+"…</span>":""}function getPostComments(e,t,a,o){var s=e[t].author[0].name.$t,r=e[t].author[0].gd$image.src.replace("/s113","/s72-c").replace("/s220","/s72-c"),i=e[t].title.$t;return(r.match("//img1.blogblog.com/img/blank.gif")||r.match("//img1.blogblog.com/img/b16-rounded.gif"))&&(r="//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg"),'<div class="cmm1-item item-'+t+'"><a class="entry-inner wrap-all-link" href="'+a+'" title="'+s+'"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="'+r+'"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">'+s+'</h2><p class="cmm-snippet excerpt">'+i+"</p></div></a></div>"}function getAjax(e,t,a,o,s){switch("related"==t&&(a=parseInt(a)+1),t){case"msimple":case"ticker":case"featured":case"block":case"grid":case"video":case"list":case"default":case"mini":case"comments":case"related":0==o&&(o="geterror404");var r=getFeedUrl(t,a,o);$.ajax({url:r,type:"GET",dataType:"json",cache:!0,beforeSend:function(a){switch(t){case"ticker":case"featured":case"block":case"grid":case"video":case"list":case"default":case"mini":case"comments":case"related":e.html(beforeLoader()).parent().addClass("type-"+t)}},success:function(a){var s="",r=-1,i=a.feed.entry;if("related"==t&&null!=i)for(var n=0,l=i;n<l.length;n++)clink==l[n].link.slice(-1)[0].href&&(r=n);switch(t){case"msimple":s='<div class="ul mega-items">';break;case"ticker":s='<div class="ticker-items">';break;case"featured":s='<div class="featured-items">';break;case"block":case"grid":case"list":case"video":s='<div class="content-block '+t+'-items">';break;case"default":s='<div class="default-items">';break;case"mini":s='<div class="mini-items">';break;case"comments":s='<div class="cmm1-items">';break;case"related":s='<div class="related-posts">'}var c=a.feed.entry;if(null!=c){var d=0;for(l=c;d<l.length;d++){l.length,i=getPostLink(l,d),n=getPostTitle(l,d);var m=getPostTag(l,d),h=getPostAuthor(l,d),f=getPostDate(l,d,m),p=getPostImage(l,d),u=getPostImageType(p,d),g=getPostMeta(h,f,l,d,t),v="";switch(t){case"msimple":v+='<div class="mega-item post"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2>"+g[1]+"</div>";break;case"ticker":v+='<div class="ticker-item item-'+d+'"><h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2></div>";break;case"featured":v+='<div class="featured-item cs item-'+d+'"><a class="featured-inner" href="'+i+'" title="'+n+'"><span class="entry-image-wrap before-mask '+u+'"><span class="entry-thumb" data-image="'+p+'"></span></span><div class="entry-header entry-info">'+m+'<h2 class="entry-title">'+n+"</h2>"+g[0]+"</div></a></div>";break;case"block":if(1===d)v+='<div class="block-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header">'+g[1]+'<h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2>"+getPostSummary(l,d,160)+"</div></div>";else v+='<div class="block-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header">'+g[1]+'<h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2></div></div>";break;case"grid":v+='<div class="grid-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+n+'" href="'+i+'">'+n+"</a></h2>"+g[1]+"</div></div>";break;case"list":v+='<div class="list-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+n+'" href="'+i+'">'+n+"</a></h2>"+getPostSummary(l,d,120)+g[0]+"</div></div>";break;case"video":v+='<div class="video-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  is-video" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header"><h2 class="entry-title"><a title="'+n+'" href="'+i+'">'+n+"</a></h2>"+g[1]+"</div></div>";break;case"default":v+='<div class="default-item ds item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2>"+g[1]+"</div></div>";break;case"mini":v+='<div class="mini-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="'+p+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2>"+g[1]+"</div></div>";break;case"comments":v+=getPostComments(l,d,i);break;case"related":if(l.length>1&&(d==r||r<0&&d==l.length-1))continue;v+='<div class="related-item item-'+d+'"><a title="'+n+'" class="entry-image-wrap  '+u+'" href="'+i+'"><svg class="entry-thumb" width="100" height="62.5" viewBox="0 0 16 9" width="" data-image="'+p+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+i+'" title="'+n+'">'+n+"</a></h2>"+g[1]+"</div></div>"}s+=v}}else if("msimple"===t)s='<div class="ul mega-items no-items">'+msgError()+"</div>";else s=msgError();switch(t){case"msimple":s+="</div>",e.append(s).addClass("msimple"),e.find("a:first").attr("href",(function(e,t){if("recent"===o)t=t.replace(t,"/search");else t=t.replace(t,"/search/label/"+o);return t}));break;case"ticker":s+="</div>",e.html(s).tickerify();break;default:s+="</div>",e.html(s)}e.find("span.entry-thumb,svg.entry-thumb").lazyify()},error:function(){if("msimple"===t)e.append('<div class="ul mega-items no-items">'+msgError()+"</div>");else e.html(msgError())}})}}function ajaxMega(e,t,a,o,s){if(s.match("getcontent")){if("msimple"==t)return getAjax(e,t,a,o);e.append('<div class="ul mega-items no-items">'+msgError()+"</div>")}}function ajaxTicker(e,t,a,o,s){if(s.match("getcontent")){if("ticker"==t)return getAjax(e,t,a,o);e.html(msgError())}}function ajaxFeatured(e,t,a,o,s){if(s.match("getcontent")){if("featured"==t)return getAjax(e,t,a,o);e.html(msgError())}}function ajaxBlock(e,t,a,o,s,r,i){if(s.match("getcontent")){if("block"==t||"grid"==t||"list"==t||"video"==t)return 0!=o&&(r="recent"==o?"/search":"/search/label/"+o,i=""!=viewAllText.trim()?viewAllText:exportify.viewAll,e.parent().find(".widget-title").append('<a href="'+r+'" class="wt-l">'+i+"</a>")),getAjax(e,t,a,o);e.html(msgError())}}function ajaxWidget(e,t,a,o,s){if(s.match("getcontent")){if("default"==t||"mini"==t||"comments"==t)return getAjax(e,t,a,o);e.html(msgError())}}function ajaxRelated(e,t,a,o,s){return getAjax(e,t,a,o,s)}function disqusComments(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}function beautiAvatar(e){$(e).attr("src",(function(e,t){return(t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35","/s39")}))}function fixedSidebarIfy(e){$(e).each((function(e){fixedSidebar="undefined"==typeof fixedSidebar||fixedSidebar,1==fixedSidebar&&(e=1==fixedMenu?89:30,$(this).theiaStickySidebar({containerSelector:"#content-wrapper > .container",additionalMarginTop:e,additionalMarginBottom:30}))}))}window.location.hash="",$(window).on("load",(function(){target&&$("html, body").animate({scrollTop:$("#"+target).offset().top},700,"swing",(function(){})),$('a[href*="#"]:not(".tocify-wrap a")').on("click",(function(e){let t=this.hash,a=new URL(this.href),o=new URL(window.location.href);a.hash="",o.hash="",t&&$(t).length&&a.href==o.href&&(e.preventDefault(),$("html, body").animate({scrollTop:$(t).offset().top-10},750))}))})),fixedMenu="undefined"==typeof fixedMenu||fixedMenu,viewAllText="undefined"!=typeof viewAllText?viewAllText:exportify.viewAll,$("#vtrick-pro-main-nav").menuify(),$("#vtrick-pro-main-nav .widget").addClass("show-menu"),$(".show-search").on("click",(function(){$("body").addClass("search-active"),$("#main-search-wrap").fadeIn(170).find("input").focus()})),$(".search-close").on("click",(function(){$("body").removeClass("search-active"),$("#main-search-wrap").fadeOut(170).find("input").blur()})),$("html").each((function(){var e=$(this);darkMode="undefined"!=typeof darkMode&&darkMode,userDarkMode="undefined"==typeof userDarkMode||userDarkMode,1!=darkMode&&0!=userDarkMode&&("dark"==localStorage.themeColor&&e.addClass("is-dark"),$(".darkmode-toggle").on("click",(function(){"dark"!=localStorage.themeColor?(e.addClass("is-dark"),localStorage.themeColor="dark"):(e.removeClass("is-dark"),localStorage.themeColor="light")})))})),$("#ticker .PopularPosts .widget-content").tickerify(),$(".bp-title a.wt-l").each((function(){""!=viewAllText.trim()&&$(this).text(viewAllText)})),$(".sidebar .social-icons li a").each((function(e){var t=$(this),a=t.attr("href").split("#");null!=a[1]&&""!=(e=a[1].trim())&&t.append('<span class="text">'+e+"</span>"),t.attr("href",a[0].trim())})),$(".FollowByEmail .widget-content").each((function(e,t){var a=$(this),o=a.data("shortcode");null!=o&&(e=shortCodeIfy(o,"title"),t=shortCodeIfy(o,"text"),0!=e&&a.find(".follow-by-email-title").text(e),0!=t&&a.find(".follow-by-email-text").text(t))})),$(".post-body a").each((function(){var e=$(this),t=e.html(),a=t.toLowerCase(),o=shortCodeIfy(t,"text"),s=shortCodeIfy(t,"icon"),r=shortCodeIfy(t,"color");a.match("getbutton")&&0!=o&&(e.addClass("button btn").text(o),0!=s&&e.addClass(s),0!=r&&e.addClass("colored-button").attr("style","background-color:"+r+";"))})),$(".post-body b").each((function(){var e=$(this),t=e.text().toLowerCase().trim();t.match("{contactform}")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),t.match("{leftsidebar}")&&($("body").addClass("is-left"),e.remove()),t.match("{rightsidebar}")&&($("body").addClass("is-right").removeClass("is-left"),e.remove()),t.match("{fullwidth}")&&($("body").addClass("no-sidebar"),e.remove())})),$("#vtrick-pro-new-before-ad").each((function(){var e=$(this);e.length&&$("#before-ad").appendTo(e)})),$("#vtrick-pro-new-after-ad").each((function(){var e=$(this);e.length&&$("#after-ad").appendTo(e)})),$("#vtrick-pro-main-before-ad .widget").each((function(){var e=$(this);e.length&&e.appendTo($("#before-ad"))})),$("#vtrick-pro-main-after-ad .widget").each((function(){var e=$(this);e.length&&e.appendTo($("#after-ad"))})),$("#vtrick-pro-post-footer-ads .widget").each((function(){var e=$(this);e.length&&e.appendTo($("#post-footer-ads"))})),$(".post-body blockquote").each((function(){var e=$(this),t=e.text().toLowerCase().trim(),a=e.html();if(t.match("{alertsuccess}")){const t=a.replace("{alertSuccess}","");e.replaceWith('<div class="alert-message alert-success">'+t+"</div>")}if(t.match("{alertinfo}")){const t=a.replace("{alertInfo}","");e.replaceWith('<div class="alert-message alert-info">'+t+"</div>")}if(t.match("{alertwarning}")){const t=a.replace("{alertWarning}","");e.replaceWith('<div class="alert-message alert-warning">'+t+"</div>")}if(t.match("{alerterror}")){const t=a.replace("{alertError}","");e.replaceWith('<div class="alert-message alert-error">'+t+"</div>")}if(t.match("{codebox}")){const t=a.replace("{codeBox}","");e.replaceWith('<pre class="code-box">'+t+"</pre>")}})),$(".post-body pre").each((function(){var e=$(this),t=(e.text().toLowerCase().trim(),e.html()),a=e.attr("lang")||"html";e.is("[lang]")&&e.replaceWith('<pre class="language-'+a+'"><code>'+t+"</code></pre>")})),$(".entry-share-links .window-ify,.post-share .window-ify").on("click",(function(){var e=$(this),t=e.data("url"),a=e.data("width"),o=e.data("height"),s=window.screen.width,r=window.screen.height,i=Math.round(s/2-a/2),n=Math.round(r/2-o/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+o+",left="+i+",top="+n).focus()})),$(".vtrick-pro-share-links").each((function(){var e=$(this);e.find(".show-hid a").on("click",(function(){e.toggleClass("show-hidden")}))})),$(".about-author .author-text").each((function(){var e=$(this),t=e.find("a");t.each((function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" rel="noopener noreferrer" target="_blank"/></li>')})),t.length&&e.parent().append('<ul class="author-links social social-color"></ul>'),e.find("li").appendTo(".author-links")})),$("#vtrick-pro-main-nav-menu li.mega-menu").each((function(e,t){var a=$(this),o=a.find("a").data("shortcode");null!=o&&(e=o.toLowerCase(),ajaxMega(a,"msimple",5,shortCodeIfy(o,"label"),e))})),$("#ticker .HTML .widget-content").each((function(e,t){var a=$(this),o=$(window),s=a.data("shortcode");null!=s&&(mtc=s.toLowerCase(),e=shortCodeIfy(s,"results"),t=shortCodeIfy(s,"label"),o.on("load resize scroll",(function s(){o.scrollTop()+o.height()>=a.offset().top&&(o.off("load resize scroll",s),ajaxTicker(a,"ticker",e,t,mtc))})).trigger("scroll"))})),$("#featured .HTML .widget-content").each((function(e){var t=$(this),a=$(window),o=t.data("shortcode");null!=o&&(mtc=o.toLowerCase(),e=shortCodeIfy(o,"label"),a.on("load resize scroll",(function o(){a.scrollTop()+a.height()>=t.offset().top&&(a.off("load resize scroll",o),ajaxFeatured(t,"featured",3,e,mtc))})).trigger("scroll"))})),$(".content-section .HTML .widget-content").each((function(e,t,a){var o=$(this),s=$(window),r=o.data("shortcode");null!=r&&(mtc=r.toLowerCase(),e=shortCodeIfy(r,"results"),t=shortCodeIfy(r,"label"),a=shortCodeIfy(r,"type"),s.on("load resize scroll",(function r(){s.scrollTop()+s.height()>=o.offset().top&&(s.off("load resize scroll",r),ajaxBlock(o,a,e,t,mtc))})).trigger("scroll"))})),$(".vtrick-pro-widget-ready .HTML .widget-content").each((function(e,t,a,o){var s=$(this),r=$(window),i=s.data("shortcode");null!=i&&(e=i.toLowerCase(),t=shortCodeIfy(i,"results"),a=shortCodeIfy(i,"label"),o=shortCodeIfy(i,"type"),r.on("load resize scroll",(function i(){r.scrollTop()+r.height()>=s.offset().top&&(r.off("load resize scroll",i),ajaxWidget(s,o,t,a,e))})).trigger("scroll"))})),$("#vtrick-pro-related-posts .HTML").each((function(e,t){var a=[];$(".vtrick-pro-related-content meta").each((function(){a.push($(this).attr("content"))}));var o=$(this).data("shortcode");if(null!=o){function s(){return e=shortCodeIfy(o,"title"),t=shortCodeIfy(o,"results"),[e,t]}$("#related-wrap").each((function(e,t){var o=$(this),r=$(window),i=o.find(".vtrick-pro-related-content"),n=s();e=0!=n[1]?n[1]:3,0!=n[0]&&o.find(".related-title .title > span").text(n[0]),t=o.find(".related-tag").data("label"),r.on("load resize scroll",(function o(){r.scrollTop()+r.height()>=i.offset().top&&(r.off("load resize scroll",o),ajaxRelated(i,"related",e,t,a))})).trigger("scroll")}))}})),$(".vtrick-pro-blog-post-comments").each((function(){var e=$(this),t=e.data("shortcode"),a=shortCodeIfy(t,"type"),o="comments-system-"+a,s=e.find("#top-continue .comment-reply");switch(a){case"disqus":var r=shortCodeIfy(t,"shortname");0!=r&&(disqus_shortname=r),disqusComments(disqus_shortname),e.addClass(o).show();break;case"facebook":e.addClass(o).find("#comments").html('<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-numposts="5" data-lazy="true"></div>'),e.show();break;case"hide":e.hide();break;default:e.addClass("comments-system-blogger").show(),$(".entry-meta .entry-comments-link").addClass("show"),s.addClass("btn")}})),$((function(){$(".entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar,#particle, .ratio-16-10").lazyify(),$("#vtrick-pro-mobile-menu").each((function(){var e=$(this),t=$("#vtrick-pro-main-nav-menu").clone();t.attr("id","main-mobile-nav"),t.find(".mega-items").remove(),t.find(".mega-menu > a").each((function(e,t){var a=$(this),o=a.data("shortcode");null!=o&&(t="recent"==(e=shortCodeIfy(o.trim(),"label"))?"/search":"/search/label/"+e,a.attr("href",t))})),t.appendTo(e),$(".mobile-menu-toggle, .hide-vtrick-pro-mobile-menu, .overlay").on("click",(function(){$("body").toggleClass("nav-active")})),$(".vtrick-pro-mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".vtrick-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".vtrick-pro-mobile-menu ul li .submenu-toggle").on("click",(function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}))})),$(".mm-footer .mm-social").each((function(){var e=$(this),t=$("#vtrick-pro-about-section ul.social").clone();t.removeClass("social-bg-hover"),t.appendTo(e)})),$(".mm-footer .mm-menu").each((function(){var e=$(this);$("#footer-menu ul.link-list").clone().appendTo(e)})),$("a#vtrick").each((function(){var e=$(this),t="important",a="visibility:visible!"+t+";opacity:1!"+t+";position:relative!"+t+";z-index:1!"+t+";font-size:14px!"+t+";color:var(--footerbar-color)!"+t+";margin:0 0 0 4px!"+t+";";e.attr("href","https://www.csyeduck.com/").removeAttr("rel").attr("style","visibility:visible!"+t+";opacity:1!"+t+";position:relative!"+t+";z-index:1!"+t+";font-size:14px!"+t+";color:var(--footer-bar-color)!"+t+";margin:0!"+t+";"),e.parent().attr("style",a).parent().attr("style",a)})),setInterval((function(){var e="https",t="com/";$("a#vtrick").length||(window.location.href=e+"://www.vietrick."+t),$("a#vtrick:visible").length||(window.location.href=e+"://www.vietrick."+t)}),1e3),$(".header-inner").each((function(){var e=$(this);if(1==fixedMenu&&e.length>0){var t=$(document).scrollTop(),a=e.offset().top,o=e.height(),s=a+o+o;$(window).scroll((function(){var o=$(document).scrollTop();o>s?e.addClass("is-fixed"):(o<a||o<=1)&&e.removeClass("is-fixed"),o>t?e.removeClass("show"):e.addClass("show"),t=o}))}})),fixedSidebarIfy("#main-wrapper, #sidebar-wrapper"),$("#post-body iframe").each((function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="responsive-video-wrap"/>')})),$("p.comment-content").each((function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" class="lazyload" data-src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')})),$("#vtrick-pro-load-more-link").each((function(){var e=$(this).data("load");e&&$("#vtrick-pro-load-more-link").show(),$("#vtrick-pro-load-more-link").on("click",(function(t){$("#vtrick-pro-load-more-link").hide(),$.ajax({url:e,success:function(t){var a=$(t).find(".blog-posts");a.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(a.html()),(e=$(t).find("#vtrick-pro-load-more-link").data("load"))?$("#vtrick-pro-load-more-link").show():($("#vtrick-pro-load-more-link").hide(),$("#blog-pager .no-more").addClass("show"))},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide(),$(".index-post .entry-image-wrap .entry-thumb,.author-avatar-wrap .author-avatar").lazyify(),fixedSidebarIfy("#main-wrapper")}}),t.preventDefault()}))})),$("#vtrick-pro-cookie-ify").each((function(){var e=$(this),t=e.find(".widget.Text").data("shortcode");null!=t&&(ok=shortCodeIfy(t,"ok"),days=shortCodeIfy(t,"days"),0!=ok&&e.find("#vtrick-pro-cookie-ify-accept").text(ok),0!=days?days=Number(days):days=7),e.length>0&&("1"!==$.cookie("vtrick_pro_cookie_ify_consent")&&(e.css("display","block"),$(window).on("load",(function(){e.addClass("is-visible")}))),$("#vtrick-pro-cookie-ify-accept").off("click").on("click",(function(t){t.preventDefault(),t.stopPropagation(),$.cookie("vtrick_pro_cookie_ify_consent","1",{expires:days,path:"/"}),e.removeClass("is-visible"),setTimeout((function(){e.css("display","none")}),500)})),cookieChoices={})})),$("#back-top").each((function(){var e=$(this);$(window).on("scroll",(function(){var t=window.innerHeight,a=$("#vtrick-pro-cta2-section ul.cta-containter");$(this).scrollTop()>=100?(e.fadeIn(170),a.hasClass("has-backtop")||(a.animate({bottom:"+=46px"},170),a.addClass("has-backtop"))):(e.fadeOut(170),a.hasClass("has-backtop")&&(a.animate({bottom:"-=46px"},170),a.removeClass("has-backtop"))),e.hasClass("on-footer")&&!a.hasClass("get-footer")&&(a.animate({bottom:"-=46px"},170),a.addClass("get-footer")),!e.hasClass("on-footer")&&a.hasClass("get-footer")&&(a.animate({bottom:"+=46px"},170),a.removeClass("get-footer")),$(this).scrollTop()+t>=$("#footer-wrapper").offset().top+36?e.addClass("on-footer"):e.removeClass("on-footer")})),e.on("click",(function(){$("html, body").animate({scrollTop:0},500)}))}))}));
