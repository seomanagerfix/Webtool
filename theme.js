var target = window.location.hash.replace("#", "");

function copyFunction() {
	document.getElementById("getlink").style.display = "inline-block", document.getElementById("getlink").select(), document.execCommand("copy"), document.getElementById("getlink").style.display = "none", document.getElementById("LinkCopy").classList.add("copied"), setTimeout(function() {
		document.getElementById("LinkCopy").classList.remove("copied")
	}, 3e3)
}

function shortCodeIfy(e, t, a) {
	for (var o = e.split("$"), r = /[^{\}]+(?=})/g, i = 0; i < o.length; i++) {
		var s = o[i].split("=");
		if (s[0].trim() == t) return null != (a = s[1]).match(r) && String(a.match(r)).trim()
	}
	return !1
}

function msgError() {
	return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
	return '<div class="loader"></div>'
}

function getFeedUrl(e, t, a, o) {
	switch (a) {
		case "recent":
			o = "/feeds/posts/default?alt=json&max-results=" + t;
			break;
		default:
			o = "comments" == e ? "/feeds/comments/default?alt=json&max-results=" + t : "/feeds/posts/default/-/" + a + "?alt=json&max-results=" + t
	}
	return o
}

function getPostLink(e, t) {
	for (var a = 0; a < e[t].link.length; a++)
		if ("alternate" == e[t].link[a].rel) {
			var o = e[t].link[a].href;
			break
		} return o
}

function getPostTitle(e, t, a) {
	return e[t].title.$t ? e[t].title.$t : exportify.noTitle
}

function getPostTag(e, t, a) {
	return e[t].category ? '<span class="entry-category">' + e[t].category[0].term + "</span>" : ""
}

function getPostAuthor(e, t, a, o) {
	return o = "" != exportify.postAuthorLabel ? '<span class="sp">' + exportify.postAuthorLabel + "</span>" : "", exportify.postAuthor ? '<span class="entry-author mi">' + o + '<span class="author-name">' + e[t].author[0].name.$t + "</span></span>" : ""
}

function getPostDate(e, t, a, o, r, i) {
	monthNames = "undefined" != typeof monthNames ? monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dateFormat = "undefined" != typeof dateFormat ? dateFormat : "{m} {d}, {y}";
	var s = e[t].published.$t,
		n = s.substring(0, 4),
		l = s.substring(5, 7),
		c = s.substring(8, 10),
		d = dateFormat.replace("{m}", monthNames[parseInt(l, 10) - 1]).replace("{d}", c).replace("{y}", n);
	return i = exportify.postAuthor && "" != exportify.postDateLabel ? '<span class="sp">' + exportify.postDateLabel + "</span>" : "", [1 == exportify.postDate ? '<span class="entry-time mi">' + i + '<time class="published" datetime="' + s + '">' + d + "</time></span>" : "", 1 == exportify.postDate ? '<span class="entry-time mi"><time class="published" datetime="' + s + '">' + d + "</time></span>" : ""]
}

function getPostMeta(e, t, a, o, r) {
	if (void 0 !== a[o].thr$total) {
		var i = "";
		("related" == r || "block" == r) && a[o].thr$total.$t > 0 && (i = "<span class='cmt-count'>" + a[o].thr$total.$t + "</span>")
	} else i = "";
	return [1 == exportify.postAuthor || 1 == exportify.postDate ? '<div class="entry-meta">' + e + t[0] + "</div>" : "", 1 == exportify.postDate ? '<div class="entry-meta">' + t[1] + i + "</div>" : ""]
}

function getFirstImage(e, t) {
	var a = $("<div>").html(e).find("img:first").attr("src"),
		o = a.lastIndexOf("/") || 0,
		r = a.lastIndexOf("/", o - 1) || 0,
		i = a.substring(0, r),
		s = a.substring(r, o),
		n = a.substring(o);
	return (s.match(/\/s[0-9]+/g) || s.match(/\/w[0-9]+/g) || "/d" == s) && (s = "/w72-h72-p-k-no-nu"), i + s + n
}

function getPostImage(e, t, a, o) {
	var r = null != e[t].content ? e[t].content.$t : "";
	return a = e[t].media$thumbnail ? e[t].media$thumbnail.url : "https://resources.blogblog.com/img/blank.gif", r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? r.indexOf("<img") > -1 ? r.indexOf(r.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < r.indexOf("<img") ? a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : getFirstImage(r) : a.replace("img.youtube.com", "i.ytimg.com").replace("/default.", "/maxresdefault.") : r.indexOf("<img") > -1 ? getFirstImage(r) : "https://resources.blogblog.com/img/blank.gif"
}

function getPostImageType(e, t) {
	return e.match("i.ytimg.com") ? "is-video" : "is-image"
}

function getPostSummary(e, t, a, o, r, i) {
	return e[t].content ? '<span class="entry-excerpt excerpt">' + $("<div>").html(e[t].content.$t).text().trim().substr(0, a) + "…</span>" : ""
}

function getPostComments(e, t, a, o) {
	var r = e[t].author[0].name.$t,
		i = e[t].author[0].gd$image.src.replace("/s113", "/s72-c").replace("/s220", "/s72-c"),
		s = e[t].title.$t;
	return (i.match("//img1.blogblog.com/img/blank.gif") || i.match("//img1.blogblog.com/img/b16-rounded.gif")) && (i = "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg"), '<div class="cmm1-item item-' + t + '"><a class="entry-inner wrap-all-link" href="' + a + '" title="' + r + '"><span class="entry-image-wrap cmm-avatar"><span class="entry-thumb" data-image="' + i + '"></span></span><div class="entry-header"><h2 class="entry-title cmm-title">' + r + '</h2><p class="cmm-snippet excerpt">' + s + "</p></div></a></div>"
}

function getAjax(e, t, a, o, r) {
	switch ("related" == t && (a = parseInt(a) + 1), t) {
		case "msimple":
		case "ticker":
		case "featured":
		case "block":
		case "grid":
		case "video":
		case "list":
		case "default":
		case "mini":
		case "comments":
		case "related":
			0 == o && (o = "geterror404");
			var i = getFeedUrl(t, a, o);
			$.ajax({
				url: i,
				type: "GET",
				dataType: "json",
				cache: !0,
				beforeSend: function(a) {
					switch (t) {
						case "ticker":
						case "featured":
						case "block":
						case "grid":
						case "video":
						case "list":
						case "default":
						case "mini":
						case "comments":
						case "related":
							e.html(beforeLoader()).parent().addClass("type-" + t)
					}
				},
				success: function(a) {
					var r = "",
						i = -1,
						s = a.feed.entry;
					if ("related" == t && null != s)
						for (var n = 0, l = s; n < l.length; n++) clink == l[n].link.slice(-1)[0].href && (i = n);
					switch (t) {
						case "msimple":
							r = '<div class="ul mega-items">';
							break;
						case "ticker":
							r = '<div class="ticker-items">';
							break;
						case "featured":
							r = '<div class="featured-items">';
							break;
						case "block":
						case "grid":
						case "list":
						case "video":
							r = '<div class="content-block ' + t + '-items">';
							break;
						case "default":
							r = '<div class="default-items">';
							break;
						case "mini":
							r = '<div class="mini-items">';
							break;
						case "comments":
							r = '<div class="cmm1-items">';
							break;
						case "related":
							r = '<div class="related-posts">'
					}
					var c = a.feed.entry;
					if (null != c) {
						var d = 0;
						for (l = c; d < l.length; d++) {
							l.length;
							s = getPostLink(l, d), n = getPostTitle(l, d);
							var m = getPostTag(l, d),
								h = getPostAuthor(l, d),
								f = getPostDate(l, d, m),
								p = getPostImage(l, d),
								u = getPostImageType(p, d),
								g = getPostMeta(h, f, l, d, t),
								v = "";
							switch (t) {
								case "msimple":
									v += '<div class="mega-item post"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2>" + g[1] + "</div>";
									break;
								case "ticker":
									v += '<div class="ticker-item item-' + d + '"><h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2></div>";
									break;
								case "featured":
									v += '<div class="featured-item cs item-' + d + '"><a class="featured-inner" href="' + s + '" title="' + n + '"><span class="entry-image-wrap before-mask ' + u + '"><span class="entry-thumb" data-image="' + p + '"></span></span><div class="entry-header entry-info">' + m + '<h2 class="entry-title">' + n + "</h2>" + g[0] + "</div></a></div>";
									break;
								case "block":
									switch (d) {
										case 1:
											v += '<div class="block-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header">' + g[1] + '<h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2>" + getPostSummary(l, d, 160) + "</div></div>";
											break;
										default:
											v += '<div class="block-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header">' + g[1] + '<h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2></div></div>"
									}
									break;
								case "grid":
									v += '<div class="grid-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a title="' + n + '" href="' + s + '">' + n + "</a></h2>" + g[1] + "</div></div>";
									break;
								case "list":
									v += '<div class="list-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a title="' + n + '" href="' + s + '">' + n + "</a></h2>" + getPostSummary(l, d, 120) + g[0] + "</div></div>";
									break;
								case "video":
									v += '<div class="video-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  is-video" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a title="' + n + '" href="' + s + '">' + n + "</a></h2>" + g[1] + "</div></div>";
									break;
								case "default":
									v += '<div class="default-item ds item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2>" + g[1] + "</div></div>";
									break;
								case "mini":
									v += '<div class="mini-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" viewBox="0 0 16 9" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2>" + g[1] + "</div></div>";
									break;
								case "comments":
									v += getPostComments(l, d, s);
									break;
								case "related":
									if (l.length > 1 && (d == i || i < 0 && d == l.length - 1)) continue;
									v += '<div class="related-item item-' + d + '"><a title="' + n + '" class="entry-image-wrap  ' + u + '" href="' + s + '"><svg class="entry-thumb" width="100" height="62.5" viewBox="0 0 16 9" width="" data-image="' + p + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + s + '" title="' + n + '">' + n + "</a></h2>" + g[1] + "</div></div>"
							}
							r += v
						}
					} else switch (t) {
						case "msimple":
							r = '<div class="ul mega-items no-items">' + msgError() + "</div>";
							break;
						default:
							r = msgError()
					}
					switch (t) {
						case "msimple":
							r += "</div>", e.append(r).addClass("msimple"), e.find("a:first").attr("href", function(e, t) {
								switch (o) {
									case "recent":
										t = t.replace(t, "/search");
										break;
									default:
										t = t.replace(t, "/search/label/" + o)
								}
								return t
							});
							break;
						case "ticker":
							r += "</div>", e.html(r).tickerify();
							break;
						default:
							r += "</div>", e.html(r)
					}
					e.find("span.entry-thumb,svg.entry-thumb").lazyify()
				},
				error: function() {
					switch (t) {
						case "msimple":
							e.append('<div class="ul mega-items no-items">' + msgError() + "</div>");
							break;
						default:
							e.html(msgError())
					}
				}
			})
	}
}

function ajaxMega(e, t, a, o, r) {
	if (r.match("getcontent")) {
		if ("msimple" == t) return getAjax(e, t, a, o);
		e.append('<div class="ul mega-items no-items">' + msgError() + "</div>")
	}
}

function ajaxTicker(e, t, a, o, r) {
	if (r.match("getcontent")) {
		if ("ticker" == t) return getAjax(e, t, a, o);
		e.html(msgError())
	}
}

function ajaxFeatured(e, t, a, o, r) {
	if (r.match("getcontent")) {
		if ("featured" == t) return getAjax(e, t, a, o);
		e.html(msgError())
	}
}

function ajaxBlock(e, t, a, o, r, i, s) {
	if (r.match("getcontent")) {
		if ("block" == t || "grid" == t || "list" == t || "video" == t) return 0 != o && (i = "recent" == o ? "/search" : "/search/label/" + o, s = "" != viewAllText.trim() ? viewAllText : exportify.viewAll, e.parent().find(".widget-title").append('<a href="' + i + '" class="wt-l">' + s + "</a>")), getAjax(e, t, a, o);
		e.html(msgError())
	}
}

function ajaxWidget(e, t, a, o, r) {
	if (r.match("getcontent")) {
		if ("default" == t || "mini" == t || "comments" == t) return getAjax(e, t, a, o);
		e.html(msgError())
	}
}

function ajaxRelated(e, t, a, o, r) {
	return getAjax(e, t, a, o, r)
}

function disqusComments(e) {
	var t = document.createElement("script");
	t.type = "text/javascript", t.async = !0, t.src = "//" + e + ".disqus.com/blogger_item.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
}

function beautiAvatar(e) {
	$(e).attr("src", function(e, t) {
		return (t = (t = t.replace("//resources.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35", "/s39")
	})
}

function fixedSidebarIfy(e) {
	$(e).each(function(e) {
		fixedSidebar = "undefined" == typeof fixedSidebar || fixedSidebar, 1 == fixedSidebar && (e = 1 == fixedMenu ? 89 : 30, $(this).theiaStickySidebar({
			containerSelector: "#content-wrapper > .container",
			additionalMarginTop: e,
			additionalMarginBottom: 30
		}))
	})
}
