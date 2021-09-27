<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateVersion='1.3.0' expr:class='data:blog.languageDirection' expr:dir='data:blog.languageDirection' expr:lang='data:blog.localeUnderscoreDelimited' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<b:include name='theme-dark-mode'/>
<head>
<b:if cond='data:view.isSingleItem'>
<meta content='article' property='og:type'/>
<else/>
<meta content='website' property='og:type'/>
</b:if>
<b:include data='blog' name='all-head-content'/>
<title>
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <data:blog.title/>
        <b:else/>
        <b:if cond='data:blog.pageType != &quot;error_page&quot;'>
            <data:blog.pageName/>
            <b:else/> ERROR 404 - <data:blog.title/>
        </b:if>
    </b:if>
</title>
<b:if cond='!data:view.isHomepage and !data:view.isSingleItem'>
 <meta content='noindex,follow' name='robots'/>
<else/>
 <meta content='max-snippet:-1, max-image-preview:large, max-video-preview:-1' name='robots'/>
</b:if>
<meta content='https://www.facebook.com/educsyLearn' property='article:publisher'/>
<meta content='https://www.facebook.com/educsy.fb' property='article:author'/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
    <meta expr:content='data:blog.pageName' property='og:title'/>
    <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
    <meta content='article' property='og:type'/>
</b:if>
<b:if cond='data:blog.postImageUrl'>
    <meta expr:content='data:blog.postImageUrl' property='og:image'/>
    <meta expr:content='data:blog.postImageUrl' property='og:image:secure_url'/>

    <b:else/>
    <b:if cond='data:blog.postImageThumbnailUrl'>
        <meta expr:content='data:blog.postImageUrl' property='og:image'/>
    </b:if>
</b:if>
<b:if cond='data:blog.metaDescription != &quot;&quot;'>
    <meta expr:content='data:blog.metaDescription' name='og:description'/>
</b:if>
<meta expr:content='data:blog.title' property='og:site_name'/>
<meta expr:content='data:blog.homepageUrl' name='twitter:domain'/>
<meta expr:content='data:blog.pageName' name='twitter:title'/>
<b:if cond='data:blog.postImageUrl'>
    <meta content='summary_large_image' name='twitter:card'/>
    <meta expr:content='data:blog.postImageUrl' name='twitter:image'/>
    <b:else/>
    <meta content='summary' name='twitter:card'/>
    <b:if cond='data:blog.postImageThumbnailUrl'>
        <meta expr:content='data:blog.postImageThumbnailUrl' name='twitter:image'/>
    </b:if>
</b:if>
<meta expr:content='data:blog.pageName' name='twitter:title'/>
<b:if cond='data:blog.metaDescription'>
    <meta expr:content='data:blog.metaDescription' name='twitter:description'/>
</b:if>
<!-- Social Media meta tag need customer customization -->
 
<meta content='anWmmR9ZM_J-FhMir6Tp5_bdilYA3EXQAeXMWf3A-bo' name='google-site-verification'/>
<meta content='learning, courses, education, tutorial, web development' name='keywords'/> 
<meta content='Your Bing Verification Code' name='msvalidate.01'/>
<meta content='237674344880643' property='fb:app_id'/>
<meta content='100072897691204' property='fb:admins'/>
<meta content='1437774049346719746' name='twitter:site'/>
<meta content='1437774049346719746' name='twitter:creator'/>
<meta content='Algeria' name='geo.placename'/>
<meta content='james chan lewis' name='Author'/>
<meta content='general' name='rating'/>
<meta content='DZ' name='geo.country'/>


  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async='async' src='https://www.googletagmanager.com/gtag/js?id=UA-207439571-1'/>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(&#39;js&#39;, new Date());

  gtag(&#39;config&#39;, &#39;UA-207439571-1&#39;);
</script> 
 <script async='async' src='https://www.googletagmanager.com/gtag/js?id=G-KCFD0Q2QRV'/> 

  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({&#39;gtm.start&#39;:
new Date().getTime(),event:&#39;gtm.js&#39;});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!=&#39;dataLayer&#39;?&#39;&amp;l=&#39;+l:&#39;&#39;;j.async=true;j.src=
&#39;https://www.googletagmanager.com/gtm.js?id=&#39;+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,&#39;script&#39;,&#39;dataLayer&#39;,&#39;GTM-NK352VJ&#39;);</script>
<!-- End Google Tag Manager --> 

  
<b:include name='theme-head'/>
<b:if cond='!data:view.isLayoutMode'>
<!-- Theme CSS Style -->
<b:skin version='1.3.0'><![CDATA[


/* -----------------------------------------------
Blogger Template Style
Name:         VTrick - Premium Creative Blogger Template
Version:      v1.8.26
Download:     https://www.vietrick.com/vtrick-creative-blogger-template
Author:       Lê Hòa
Author Url:   https://www.vietrick.com
-----------------------------------------------*/

/*
<!-- Variable definitions -->
<Variable name="keycolor" description="Main Color" type="color" default="#1A73E8" value="#1A73E8"/>
<Group description="Theme Options">
    <Variable name="darkmode" description="Native Dark Mode" type="length" default="0px" min="0px" max="1px" value="0px"/>
    <Variable name="userdarkmode" description="User Dark Mode" type="length" default="1px" min="0px" max="1px" value="1px"/>
    <Variable name="fixedmenu" description="Fixed Menu" type="length" default="1px" min="0px" max="1px" value="1px"/>
    <Variable name="sidebar" description="Left Sidebar" type="length" default="0px" min="0px" max="1px" value="0px"/>
    <Variable name="fixedsidebar" description="Fixed Sidebar" type="length" default="1px" min="0px" max="1px" value="1px"/>
	<Variable name="postrate" description="Fake post rating" type="length" default="1px" min="0px" max="1px" value="1px"/>
	<Variable name="blockcode" description="Code Syntax Highlight" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>
<Group description="Homepage widget Options">
	<Variable name="home.featured.meta" description="Disable Featured post meta on homepage" type="length" default="1px" min="0px" max="1px" value="1px"/>
    <Variable name="home.featured.cate" description="Disable Featured post category on homepage" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>
<Group description="TOC Options">
	<Variable name="autotoc" description="Auto Table of Content" type="length" default="1px" min="0px" max="1px" value="1px"/>
	<Variable name="expandtoc" description="Expand Table of Content" type="length" default="0px" min="0px" max="1px" value="0px"/>
	<Variable name="pagetoc" description="Enable Auto TOC in Page" type="length" default="0px" min="0px" max="1px" value="1px"/>
</Group>
<Group description="Theme Widths">
    <Variable name="boxed" description="Boxed Mode" type="length" default="0px" min="0px" max="1px" value="0px"/>
    <Variable name="row.width" description="Container Width" type="length" default="1600px" min="970px" max="1600px" value="1600px"/>
    <Variable name="sidebar.width" description="Sidebar Width" type="length" default="300px" min="250px" max="336px" value="300px"/>
</Group>
<Group description="Theme Fonts">
	<Variable name="main.font" description="Site Font" type="font" family="Quicksand" default="normal 400 14px $(family)"  value="normal 400 14px $(family)"/>
    <Variable name="menu.font" description="Menu Font" type="font" family="Quicksand" default="normal 400 14px $(family)" value="normal 400 14px $(family)"/>
    <Variable name="title.font" description="Title Font" type="font" family="Segoe UI" default="normal 400 14px $(family)" value="normal 400 14px $(family)"/>
    <Variable name="text.font" description="Text Font" type="font" family="Quicksand" default="normal 400 14px $(family)"  value="normal 400 14px $(family)"/>
</Group>
<Group description="Background">
    <Variable name="background.color" description="Body Background" type="color" default="#FFF"  value="#FFFFFF"/>
    <Variable name="body.background" description="Background" type="background" color="$(background.color)" default="$(color) none repeat fixed top left" value="$(color) none repeat fixed top left"/>
    <Variable name="outer.bg" description="Outer Background" type="color" default="#F2F2F2"  value="#F0F2F5"/>
    <Variable name="outer.mobile.bg" description="Outer Mobile Background" type="color" default="#F2F2F2"  value="#F0F2F5"/>
</Group>
<Group description="Theme Colors">
    <Variable name="main.color" description="Theme Color" type="color" default="#FF3152" value="#ff7a18"/>
    <Variable name="title.color" description="Title Color" type="color" default="#202124" value="#202124"/>
    <Variable name="title.hover.color" description="Title Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
    <Variable name="meta.color" description="Meta Color" type="color" default="#959595" value="#959595"/>
    <Variable name="text.color" description="Text Color" type="color" default="#757575"  value="#474747"/>
	<Variable name="accent.color" description="Accent Color" type="color" default="#0066cc"  value="#0066cc"/>
</Group>
<Group description="Site Header" selector="#header-wrapper">
    <Variable name="header.bg" description="Header Background" type="color" default="#FFFFFF" value="#FFFFFF"/>
    <Variable name="header.color" description="Header Color" type="color" default="$(title.color)" value="#050505"/>
    <Variable name="header.hover.color" description="Header Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
</Group>
<Group description="Sub Menu">
    <Variable name="submenu.bg" description="Sub Menu Background" type="color" default="#FFFFFF" value="#FFFFFF"/>
    <Variable name="submenu.color" description="Sub Menu Color" type="color" default="$(title.color)" value="#202124"/>
    <Variable name="submenu.hover.color" description="Sub Menu Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
</Group>
<Group description="Mega Menu">
    <Variable name="megamenu.bg" description="Mega Menu Background" type="color" default="$(submenu.bg)" value="#FFFFFF"/>
    <Variable name="megamenu.color" description="Mega Menu Color" type="color" default="$(submenu.color)" value="#202124"/>
    <Variable name="megamenu.hover.color" description="MegaMenu Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
</Group>
<Group description="Mobile Menu">
    <Variable name="mmenu.bg" description="Mobile Menu Background" type="color" default="$(outer.bg)" value="#FFFFFF"/>
    <Variable name="mmenu.color" description="Mobile Menu Color" type="color" default="$(title.color)" value="#202124"/>
    <Variable name="mmenu.hover.color" description="Mobile Menu Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
</Group>
<Group description="Header ADS" selector="#header-ads-wrap">
    <Variable name="headerad.onpost" description="Show on Post Page" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>
<Group description="Theme Widgets" select="#sidebar">
    <Variable name="wtitle.color" description="Widget Title Color" type="color" default="$(title.color)" value="#202124"/>
	<Variable name="widget.bg" description="Widget Background" type="color" default="#FFFFFF" value="#FFFFFF"/>
</Group>
<Group description="Post Styles" select="#main">
    <Variable name="post.title.color" description="Post Title Color" type="color" default="$(title.color)" value="#202124"/>
    <Variable name="post.title.hover.color" description="Post Title Hover Color" type="color" default="$(title.hover.color)" value="#1A73E8"/>
    <Variable name="post.img.border" description="Post Image Border radius" type="length" default="4px" min="0px" max="10px" value="4px"/>
    <Variable name="post.text.color" description="Post Page Text Color" type="color" default="$(text.color)" value="#3C4043"/>
    <Variable name="itempost.title.size" description="Post Page Title Font Size" type="length" default="37px" min="20px" max="50px" value="37px"/>
    <Variable name="itempost.content.size" description="Post Page Text Font Size" type="length" default="14px" min="12px" max="20px" value="16px"/>
	<Variable name="itempost.comment.size" description="Comment Text Font Size" type="length" default="14px" min="12px" max="20px" value="14px"/>
</Group>
<Group description="Post Page Options" select="#main">
    <Variable name="breadcrumb" description="Post Breadcrumbs" type="length" default="1px" min="0px" max="1px" value="1px"/>
    <Variable name="cmm.count" description="Comments Count" type="length" default="1px" min="0px" max="1px" value="1px"/>
    <Variable name="postnav" description="Post Navigation" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>
<Group description="Footer ADS" selector="#footer-ads-wrap">
    <Variable name="footerad.onpost" description="Show on Post Page" type="length" default="1px" min="0px" max="1px" value="1px"/>
</Group>
<Group description="Theme Footer" selector="#footer-wrapper">
    <Variable name="footer.bg" description="Footer Background" type="color" default="#5ca2d2" value="#5ca2d2"/>
    <Variable name="footer.color" description="Footer Color" type="color" default="#f6f7f8" value="#f6f7f8"/>
    <Variable name="footer.hover.color" description="Footer Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
</Group>
<Group description="FooterBar" selector=".footerbar">
    <Variable name="footerbar.bg" description="FooterBar Background" type="color" default="$(footer.bg)" value="#f5f5f7"/>
    <Variable name="footerbar.color" description="FooterBar Color" type="color" default="$(title.color)" value="#1d1d1f"/>
    <Variable name="footerbar.hover.color" description="FooterBar Hover Color" type="color" default="$(main.color)" value="#1A73E8"/>
</Group>
<Group description="Cookie Consent" selector="#gnews-pro-cookie-ify">
    <Variable name="cookie.bg" description="Cookie Background" type="color" default="#FFFFFF" value="#FFFFFF"/>
    <Variable name="cookie.color" description="Cookie Text Color" type="color" default="$(text.color)" value="#3C4043"/>
</Group>
<Group description="Theme Buttons">
    <Variable name="button.bg" description="Button Background" type="color" default="$(main.color)" value="#1A73E8"/>
    <Variable name="button.color" description="Button Color" type="color" default="#FFFFFF" value="#FFFFFF"/>
    <Variable name="button.hover.bg" description="Button Hover Background" type="color" default="#1767D0" value="#1767D0"/>
    <Variable name="button.hover.color" description="Button Hover Color" type="color" default="#FFFFFF" value="#FFFFFF"/>
</Group>
<Group description="Theme Fonts (Reset)">
    <!-- Site Font -->
    <Variable name="mainfont.italic" description="Main Font Italic" type="font" default="italic 400 14px $(main.font.family)" value="italic 400 14px $(family)"/>
    <Variable name="mainfont.medium" description="Main Font Medium" type="font" default="normal 500 14px $(main.font.family)" value="normal 500 14px $(family)"/>
    <Variable name="mainfont.mediumitalic" description="Main Font Medium Italic" type="font" default="italic 500 14px $(main.font.family)" value="italic 500 14px $(family)"/>
    <Variable name="mainfont.bold" description="Main Font Bold" type="font" default="normal 700 14px $(main.font.family)" value="normal 700 14px $(family)"/>
    <Variable name="mainfont.bolditalic" description="Main Font Bold Italic" type="font" default="italic 700 14px $(main.font.family)" value="italic 700 14px $(family)"/>
    <!-- Menu Font -->
    <Variable name="menufont.italic" description="Menu Font Italic" type="font" default="italic 400 14px $(menu.font.family)" value="italic 400 14px $(family)"/>
    <Variable name="menufont.sb" description="Menu Font SemiBold" type="font" default="normal 600 14px $(menu.font.family)" value="normal 600 14px $(family)"/>
    <Variable name="menufont.sbitalic" description="Menu Font SemiBold Italic" type="font" default="italic 600 14px $(menu.font.family)" value="italic 600 14px $(family)"/>
    <Variable name="menufont.bold" description="Menu Font Bold" type="font" default="normal 700 14px $(menu.font.family)" value="normal 700 14px $(family)"/>
    <Variable name="menufont.bolditalic" description="Menu Font Bold Italic" type="font" default="italic 700 14px $(menu.font.family)" value="italic 700 14px $(family)"/>
    <!-- Title Font -->
    <Variable name="titlefont.italic" description="Title Font Italic" type="font" default="italic 400 14px $(title.font.family)" value="italic 400 14px $(family)"/>
    <Variable name="titlefont.sb" description="Title Font SemiBold" type="font" default="normal 600 14px $(title.font.family)" value="normal 600 14px $(family)"/>
    <Variable name="titlefont.sbitalic" description="Title Font SemiBold Italic" type="font" default="italic 600 14px $(title.font.family)" value="italic 600 14px $(family)"/>
    <Variable name="titlefont.bold" description="Title Font Bold" type="font" default="normal 700 14px $(title.font.family)" value="normal 700 14px $(family)"/>
    <Variable name="titlefont.bolditalic" description="Title Font Bold Italic" type="font" default="italic 700 14px $(title.font.family)" value="italic 700 14px $(family)"/>
    <!-- Text Font -->
    <Variable name="textfont.italic" description="Text Font Italic" type="font" default="italic 400 14px $(text.font.family)" value="italic 400 14px $(family)"/>
    <Variable name="textfont.medium" description="Text Font Medium" type="font" default="normal 500 14px $(text.font.family)" value="normal 500 14px $(family)"/>
    <Variable name="textfont.mediumitalic" description="Text Font Medium Italic" type="font" default="italic 500 14px $(text.font.family)" value="italic 500 14px $(family)"/>
    <Variable name="textfont.bold" description="Text Font Bold" type="font" default="normal 700 14px $(text.font.family)" value="normal 700 14px $(family)"/>
    <Variable name="textfont.bolditalic" description="Text Font Bold Italic" type="font" default="italic 700 14px $(text.font.family)" value="italic 700 14px $(family)"/>
</Group>
<!-- Hidden Variables -->
<Variable name="body.background.color" description="Comments Background" hideEditor="true" type="color" default="transparent"  value="transparent"/>
<Variable name="body.title.color" description="Comments Color" hideEditor="true" type="color" default="$(title.color)" value="#202124"/>
<Variable name="body.text.color" description="Comments Text Color" hideEditor="true" type="color" default="$(text.color)"  value="#3C4043"/>
<Variable name="body.link.color" description="Comments Link Color" hideEditor="true" type="color" default="$(main.color)"  value="#1A73E8"/>
<Variable name="body.text.font" description="Comments Font 1" hideEditor="true" type="font" default="normal 400 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"  value="normal 400 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji !important"/>
<Variable name="body.action.font.large" description="Comments Font 2" hideEditor="true" type="font" default="normal 700 14px Montserrat, Arial, sans-serif !important"  value="normal 700 14px Montserrat, Arial, sans-serif !important"/>
*/

/*-- Google Fonts --*/
@font-face{font-family:Quicksand;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkKEo58m-wi40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkKEo58i-wi40.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkKEo58a-wg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58m-wi40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58i-wi40.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o58a-wg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkM0o58m-wi40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkM0o58i-wi40.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkM0o58a-wg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkCEv58m-wi40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkCEv58i-wi40.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkCEv58a-wg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58m-wi40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58i-wi40.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkBgv58a-wg.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}

/*-- Bootstrap Icon v1.5.0 --*/
@font-face{font-family:bootstrap-icons;src:url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/fonts/bootstrap-icons.woff2?856008caa5eb66df68595e734e59580d) format("woff2"),url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/fonts/bootstrap-icons.woff?856008caa5eb66df68595e734e59580d) format("woff")}
[class*=" bi-"]::before,[class^=bi-]::before{display:inline-block;font-family:bootstrap-icons!important;font-style:normal;font-weight:400!important;font-variant:normal;text-transform:none;line-height:1;vertical-align:-.125em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}

/*-- CSS Variables --*/
:root{--max-width:$(row.width);--gap:3rem;--body-font:'$(main.font.family)',Arial,sans-serif;--menu-font:'$(menu.font.family)',Arial,sans-serif;--title-font:'$(title.font.family)',Arial,sans-serif;--title-font:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--text-font:'$(text.font.family)',Arial,sans-serif;--body-bg-color:$(background.color);--body-bg:$(body.background);--outer-bg:$(outer.bg);--outer-mobile-bg:$(outer.mobile.bg);--main-color:$(main.color);--title-color:$(title.color);--title-hover-color:$(title.hover.color);--meta-color:$(meta.color);--text-color:$(text.color);--header-bg:$(header.bg);--header-color:$(header.color);--header-hover-color:$(header.hover.color);--submenu-bg:$(submenu.bg);--submenu-color:$(submenu.color);--submenu-hover-color:$(submenu.hover.color);--megamenu-bg:$(megamenu.bg);--megamenu-color:$(megamenu.color);--megamenu-hover-color:$(megamenu.hover.color);--mobilemenu-bg:$(mmenu.bg);--mobilemenu-color:$(mmenu.color);--mobilemenu-hover-color:$(mmenu.hover.color);--widget-bg:$(widget.bg);--widget-title-color:$(wtitle.color);--post-card-bg:$(widget.bg);--post-title-color:$(post.title.color);--post-title-hover-color:$(post.title.hover.color);--post-text-color:$(post.text.color);--footer-bg:$(footer.bg);--footer-linear-bg:linear-gradient(to right,#1fc59f 0%,#2958dc 100%);--footer-radial-bg:radial-gradient(circle at 0% -25%,#FF7948 0%,#FF8355 0,#DA2C84 42%,#3E13A4 110%);--footer-color:$(footer.color);--footer-hover-color:$(footer.hover.color);--footerbar-bg:$(footerbar.bg);--footerbar-color:$(footerbar.color);--footerbar-hover-color:$(footerbar.hover.color);--cookie-bg:$(cookie.bg);--cookie-color:$(cookie.color);--button-bg:$(button.bg);--button-lite-bg:$(button.bg) 10;--button-color:$(button.color);--button-hover-bg:$(button.hover.bg);--button-hover-color:$(button.hover.color);--rgba-gray:#F0F2F5;--border-color:rgba(155,155,155,0.15);--border-radius:6px;--radius:8px;--widget-shadow:0 1px 2px rgba(0,0,0,0.025);--avatar-shadow:0px 1px 4px rgba(0,0,0,0.05);--toc-bg:#fef6ec;--toc-link:#0089c7;--accent:$(accent.color);--trending-color:#1d1d1f;--transition-1:all .1s ease;--transition-2:all .2s ease;--transition-4:all .4s ease;--shadow-1:rgba(0, 0, 0, 0.1);--shadow-2:rgba(0, 0, 0, 0.2);--shadow-5:rgba(0, 0, 0, 0.5);--shadow-8:rgba(0, 0, 0, 0.8);--box-shadow:0 1px 2px var(--shadow-2);--box-shadow-0:0px 0px 0px 0px rgba(0,0,0,0.1),0px 0px 0px 0px rgba(0,0,0,0.1);--box-shadow-1:0px 0px 5px 0px rgba(0,0,0,0.1),0px 0px 1px 0px rgba(0,0,0,0.1);--box-shadow-2:0px 2px 8px 0px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.1);--box-shadow-3:0px 2px 12px 2px rgba(0,0,0,0.1),0px 1px 2px 0px rgba(0,0,0,0.1);--box-shadow-4:0px 8px 24px 4px rgba(0,0,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.1);--card-shadow:0 2px 12px var(--shadow-2);--box-radius:max(0px, min(8px, ((100vw - 4px) - 100%) * 9999))/8px;--secondary-button-bg:#E4E6EB;--secondary-button-color:#050505;--secondary-button-hover-bg:#CCD0D5;--comment-color:#434343;--comment-bg-color:#f0f2f5;--comment-action-color:#65676b;--scroll-bg:rgba(168,173,179,.84);--content-bg:#FFF;--grd-bg:linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);--block-linear-bg:linear-gradient(to bottom,#e5e6ed 42%,#f1f2f4 81%,#ffffff 97%);--card-grd:linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.013) 8.1%,hsla(0,0%,100%,.049) 15.5%,hsla(0,0%,100%,.104) 22.5%,hsla(0,0%,100%,.175) 29%,hsla(0,0%,100%,.259) 35.3%,hsla(0,0%,100%,.352) 41.2%,hsla(0,0%,100%,.45) 47.1%,hsla(0,0%,100%,.55) 52.9%,hsla(0,0%,100%,.648) 58.8%,hsla(0,0%,100%,.741) 64.7%,hsla(0,0%,100%,.825) 71%,hsla(0,0%,100%,.896) 77.5%,hsla(0,0%,100%,.951) 84.5%,hsla(0,0%,100%,.987) 91.9%,#fff)}
html.is-dark{--body-bg-color:#2b2b2b;--body-bg:#F1F3F4 none repeat fixed top left;--outer-bg:#1a1a1a;--outer-mobile-bg:#1a1a1a;--title-color:#f6f7f8;--title-hover-color:#1A73E8;--meta-color:#aaaaaa;--text-color:#b4b6ba;--header-bg:#242526;--header-color:#f6f7f8;--header-hover-color:#1A73E8;--submenu-bg:#252525;--submenu-color:#f6f7f8;--submenu-hover-color:#1A73E8;--megamenu-bg:#252525;--megamenu-color:#f6f7f8;--megamenu-hover-color:#1A73E8;--mobilemenu-bg:#1b1b1b;--mobilemenu-color:#f6f7f8;--mobilemenu-hover-color:#1A73E8;--widget-bg:#202020;--widget-title-color:#f6f7f8;--post-card-bg:#2b2b2b;--post-title-color:#f6f7f8;--post-title-hover-color:#1A73E8;--post-text-color:b4b6ba;--footer-bg:#202020;--footer-color:$(footer.color);--footer-hover-color:#1A73E8;--footerbar-bg:#202020;--footerbar-color:#f6f7f8;--footerbar-hover-color:#1A73E8;--cookie-bg:#202020;--cookie-color:#b4b6ba;--button-bg:$(button.bg);--button-color:$(button.color);--button-hover-bg:$(button.hover.bg);--button-hover-color:$(button.hover.color);--rgba-gray:#3A3B3C;--border-color:rgba(155,155,155,0.03);--toc-bg:#202020;--toc-link:#0089c7;--secondary-button-bg:#3A3B3C;--secondary-button-hover-bg:#505151;--secondary-button-color:#E4E6EB;--secondary-text:#B0B3B8;--secondary-text:#65676B;--comment-color:#E4E6EB;--comment-bg-color:#3A3B3C;--comment-action-color:#B0B3B8;--content-bg:#2b2b2b;--scroll-bg:rgba(88,88,88,.84);--block-linear-bg:linear-gradient(to bottom,var(--outer-bg) 42%,#252525 81%,var(--body-bg-color) 97%);--card-grd:linear-gradient(90deg,hsla(0deg 0% 17% /0) 0,hsla(0deg 0% 17% /.013) 8.1%,hsla(0deg 0% 17% /.049) 15.5%,hsla(0deg 0% 17% /.104) 22.5%,hsla(0deg 0% 17% /.175) 29%,hsla(0deg 0% 17% /.259) 35.3%,hsla(0deg 0% 17% /.352) 41.2%,hsla(0deg 0% 17% /.45) 47.1%,hsla(0deg 0% 17% /.55) 52.9%,hsla(0deg 0% 17% /.648) 58.8%,hsla(0deg 0% 17% /.741) 64.7%,hsla(0deg 0% 17% /.825) 71%,hsla(0deg 0% 17% /.896) 77.5%,hsla(0deg 0% 17% /.951) 84.5%,hsla(0deg 0% 17% /.987) 91.9%,var(--content-bg))}
html.rtl{--body-font:'Tajawal',Arial,sans-serif;--menu-font:'Tajawal',Arial,sans-serif;--title-font:'Tajawal',Arial,sans-serif;--text-font:'Tajawal',Arial,sans-serif}
/*-- Reset CSS --*/
a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var{padding:0;margin:0;border:0;outline:none;vertical-align:baseline;background:0 0;text-decoration:none}dl,ul{list-style-position:inside;list-style:none}ul li{list-style:none}caption{text-align:center}img{border:none;position:relative}a,a:visited{text-decoration:none}.clearfix{clear:both}.section,.widget,.widget ul{margin:0;padding:0}a{color:var(--main-color)}a img{border:0}abbr{text-decoration:none}.CSS_LIGHTBOX{z-index:999999!important}.CSS_LIGHTBOX_ATTRIBUTION_INDEX_CONTAINER .CSS_HCONT_CHILDREN_HOLDER > .CSS_LAYOUT_COMPONENT.CSS_HCONT_CHILD:first-child > .CSS_LAYOUT_COMPONENT{opacity:0}.separator a{text-decoration:none!important;clear:none!important;float:none!important;margin-left:0!important;margin-right:0!important}#Navbar1,#navbar-iframe,.widget-item-control,a.quickedit,.home-link,.feed-links{display:none!important}.center{display:table;margin:0 auto;position:relative}.widget > h2,.widget > h3{display:none}.widget iframe,.widget img{max-width:100%}button,input,select,textarea{font-family:var(--body-font);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border-radius:0}input[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none}
/*-- Style CSS --*/
*{box-sizing:border-box}
html{position:relative;word-break:break-word;word-wrap:break-word;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;font-size: clamp(12px,calc(.7rem + .25vw),20px)}
body{position:relative;background:var(--body-bg);background-color:var(--body-bg-color);font-family:var(--body-font);font-size:14px;color:var(--text-color);font-weight:400;font-style:normal;line-height:1.4em}
.rtl{direction:rtl}h1,h2,h3,h4,h5,h6{font-family:var(--title-font);font-weight:700}a,button,input{transition:all 0s ease}#outer-wrapper{position:relative;overflow:hidden;width:100%;max-width:100%;background-color:var(--outer-bg);margin:0 auto;padding:0}.is-boxed #outer-wrapper{width:$(row.width + 60px);max-width:100%;box-shadow:0 0 20px rgba(0,0,0,.1)}.is-dark .is-boxed #outer-wrapper{box-shadow:0 0 20px rgba(0,0,0,.3)}.container{position:relative}.row-x1{width:100%;max-width:var(--max-width)}.row-x2{width:100%}.flex-center{display:flex;justify-content:center}#content-wrapper,#footer-ads-wrap,#header-ads-wrap{position:relative;width:100%;overflow:hidden;padding:0 var(--gap) calc(var(--gap)/2) var(--gap);margin:0 auto;max-width:var(--max-width)}#content-wrapper>.container{display:flex;justify-content:space-between}.is-left #content-wrapper>.container,.rtl .is-right #content-wrapper>.container{flex-direction:row-reverse}.rtl .is-left #content-wrapper>.container{flex-direction:row}.theiaStickySidebar:after,.theiaStickySidebar:before{content:'';display:table;clear:both}#main-wrapper{position:relative;width:calc(100% - $(sidebar.width + 30px))}.no-sidebar #main-wrapper{width:100%}#sidebar-wrapper{position:relative;width:$(sidebar.width)}.no-sidebar #sidebar-wrapper{display:none}.btn{position:relative;border:0;border-radius:var(--radius)}

/*! Ratio16:10 */
.svg-wrap {display: grid!important}
.svg-wrap > * {grid-area: 1/1;}

/*! Base */
.author-avatar-wrap,.comments .avatar-image-container,.entry-image-wrap{display:block;position:relative;overflow:hidden;z-index:5;color:transparent!important}.author-row{-webkit-margin-before:auto;margin-block-start:auto;display:flex;align-items:center;color:#565656;line-height:1.3;font-size:clamp(12px,calc(.7rem + .25vw),20px)}.author-row .author-name{font-weight:600}.PopularPosts .on.sp,.author-row .on.sp{padding:0 .5rem}.author-row .cmt-count{margin-left:auto;color:inherit}.author-row .cmt-count:hover{color:var(--main-color)}.PopularPosts .cmt-count:after,.author-row .cmt-count:after,.block-items .cmt-count:after,.related-posts .cmt-count:after{content:"\f268";font-family:bootstrap-icons;vertical-align:bottom;margin-left:4px}.cmt-count{color:inherit}.author-avatar,.entry-thumb{display:block;position:relative;width:100%;height:100%;background-size:cover;background-position:center center;background-repeat:no-repeat;z-index:1;opacity:0;transition:opacity .35s ease,filter 0s ease}.author-avatar{border-radius:50%;background-size:100%;background-position:0 0}.author-avatar.lazy-ify,.entry-thumb.lazy-ify{opacity:1}.cs:hover .entry-image-wrap .entry-thumb,.entry-image-wrap:hover .entry-thumb{filter:brightness(1.03)}.entry-image-wrap.is-video:after{position:absolute;content:"\f4f4";top:50%;right:50%;width:38px;height:27px;background-color:rgba(0,0,0,.5);font-family:bootstrap-icons;font-size:16px;color:#fff;font-weight:900;display:flex;align-items:center;justify-content:center;z-index:5;transform:translate(50%,-50%);box-sizing:border-box;padding:0 0 0 1px;margin:0;border-radius:var(--radius);box-shadow:0 1px 3px 0 rgb(0,0,0,.1);transition:background .17s ease}.cs:hover .entry-image-wrap.is-video:after,.entry-image-wrap.is-video:hover:after{background-color:#f50000}.cs .entry-image-wrap.is-video:after{top:15px;right:15px;transform:translate(0)}.rtl .cs .entry-image-wrap.is-video:after{left:15px;right:unset}.entry-category{display:flex;width:-moz-fit-content;width:fit-content;height:20px;background-color:var(--main-color);font-size:12px;color:#fff;align-items:center;padding:0 10px;margin:0 0 10px;border-radius:20px}.entry-title{display:block;color:var(--post-title-color);font-weight:700;line-height:1.3em}.entry-title a{display:block;color:var(--post-title-color)}.entry-title a:hover{color:var(--post-title-hover-color)}.entry-meta{display:flex;font-size:12px;color:var(--meta-color);font-weight:400;margin:4px 0 0}.entry-meta .mi{display:flex}.entry-meta .mi,.entry-meta .sp{margin:0 3px 0 0}.rtl .entry-meta .mi,.rtl .entry-meta .sp{margin:0 0 0 3px}.entry-meta .author-name{color:var(--meta-color);font-weight:500}.entry-meta .entry-tag{color:var(--accent);text-transform:uppercase;letter-spacing:.5px;font-weight:600;font-family:var(--title-font)}.entry-meta.mi .entry-tag:not(:last-child){margin:0 1rem 0 0}.entry-meta.mi .entry-tag:before{content:"#"}.excerpt{font-family:var(--text-font);line-height:1.7;margin-bottom:1.5rem}.before-mask:before{content:'';position:absolute;left:0;right:0;bottom:0;height:100%;background-image:linear-gradient(to bottom,rgba(0,0,0,0) 30%,rgba(0,0,0,.5));-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:2;opacity:1;margin:0;transition:opacity .25s ease}.cs{overflow:hidden}.entry-info{position:absolute;left:0;bottom:0;width:100%;background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.5));overflow:hidden;z-index:10;display:flex;flex-direction:column;padding:16px}.entry-info .entry-title{color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.1)}.entry-info .entry-meta{color:#c5c5c5;text-shadow:0 1px 2px rgba(0,0,0,.1)}.entry-info .entry-meta .author-name{color:#d5d5d5;font-weight:400}.error-msg{display:flex;align-items:center;font-size:14px;color:var(--meta-color);padding:20px 0;font-weight:400}.error-msg b{font-weight:500}.loader{position:relative;width:100%;height:100%;overflow:hidden;display:flex;align-items:center;justify-content:center;margin:0}.loader:after{content:'';display:block;width:30px;height:30px;box-sizing:border-box;margin:0;border:1.45px solid var(--main-color);border-right-color:var(--border-color);border-radius:100%;animation:spinner .65s infinite linear;transform-origin:center}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}

/*! Social */
.social a:before{display:inline-block;font-family:bootstrap-icons;font-style:normal;font-weight:400}.social .blogger a:before{content:'\f37d'}.social .apple a:before{content:'\f179'}.social .amazon a:before{content:'\f270'}.social .microsoft a:before{content:'\f3ca'}.social .facebook a:before{content:"\f344"}.social .facebook-f a:before{content:'\f39e'}.social .twitter a:before{content:"\f5ef"}.social .rss a:before{content:"\f521"}.social .youtube a:before{content:"\f62b"}.social .skype a:before{content:'\f17e'}.social .stumbleupon a:before{content:'\f1a4'}.social .tumblr a:before{content:'\f173'}.social .vk a:before{content:'\f189'}.social .stack-overflow a:before{content:'\f16c'}.social .github a:before{content:'\f09b'}.social .linkedin a:before{content:"\f472"}.social .dribbble a:before{content:'\f17d'}.social .soundcloud a:before{content:'\f1be'}.social .behance a:before{content:'\f1b4'}.social .digg a:before{content:'\f1a6'}.social .instagram a:before{content:"\f437"}.social .pinterest a:before{content:'\f0d2'}.social .pinterest-p a:before{content:'\f231'}.social .twitch a:before{content:'\f1e8'}.social .delicious a:before{content:'\f1a5'}.social .codepen a:before{content:'\f1cb'}.social .flipboard a:before{content:'\f44d'}.social .reddit a:before{content:"\f650"}.social .whatsapp a:before{content:"\f618"}.social .messenger a:before{content:"\f648"}.social .snapchat a:before{content:'\f2ac'}.social .telegram a:before{content:"\f5b3"}.social .steam a:before{content:'\f3f6'}.social .discord a:before{content:'\f392'}.social .quora a:before{content:'\f2c4'}.social .tiktok a:before{content:'\e07b'}.social .share a:before{content:'\f064';font-family:'Font Awesome 5 Free';font-weight:900}.social .email a:before{content:"\f32f";font-family:bootstrap-icons}.social .external-link a:before{content:'\f35d';font-family:'Font Awesome 5 Free';font-weight:900}.social-bg .blogger a,.social-bg-hover .blogger a:hover{background-color:#ff5722}.social-bg .apple a,.social-bg-hover .apple a:hover{background-color:#333}.social-bg .amazon a,.social-bg-hover .amazon a:hover{background-color:#fe9800}.social-bg .microsoft a,.social-bg-hover .microsoft a:hover{background-color:#0067b8}.social-bg .facebook a,.social-bg .facebook-f a,.social-bg-hover .facebook a:hover,.social-bg-hover .facebook-f a:hover{background-color:#3b5999}.social-bg .twitter a,.social-bg-hover .twitter a:hover{background-color:#00acee}.social-bg .youtube a,.social-bg-hover .youtube a:hover{background-color:#f50000}.social-bg .instagram a,.social-bg-hover .instagram a:hover{background:linear-gradient(15deg,#ffb13d,#dd277b,#4d5ed4)}.social-bg .pinterest a,.social-bg .pinterest-p a,.social-bg-hover .pinterest a:hover,.social-bg-hover .pinterest-p a:hover{background-color:#ca2127}.social-bg .dribbble a,.social-bg-hover .dribbble a:hover{background-color:#ea4c89}.social-bg .linkedin a,.social-bg-hover .linkedin a:hover{background-color:#0077b5}.social-bg .tumblr a,.social-bg-hover .tumblr a:hover{background-color:#365069}.social-bg .twitch a,.social-bg-hover .twitch a:hover{background-color:#6441a5}.social-bg .rss a,.social-bg-hover .rss a:hover{background-color:#ffc200}.social-bg .skype a,.social-bg-hover .skype a:hover{background-color:#00aff0}.social-bg .stumbleupon a,.social-bg-hover .stumbleupon a:hover{background-color:#eb4823}.social-bg .vk a,.social-bg-hover .vk a:hover{background-color:#4a76a8}.social-bg .stack-overflow a,.social-bg-hover .stack-overflow a:hover{background-color:#f48024}.social-bg .github a,.social-bg-hover .github a:hover{background-color:#24292e}.social-bg .soundcloud a,.social-bg-hover .soundcloud a:hover{background:linear-gradient(#ff7400,#ff3400)}.social-bg .behance a,.social-bg-hover .behance a:hover{background-color:#191919}.social-bg .digg a,.social-bg-hover .digg a:hover{background-color:#1b1a19}.social-bg .delicious a,.social-bg-hover .delicious a:hover{background-color:#0076e8}.social-bg .codepen a,.social-bg-hover .codepen a:hover{background-color:#000}.social-bg .flipboard a,.social-bg-hover .flipboard a:hover{background-color:#f52828}.social-bg .reddit a,.social-bg-hover .reddit a:hover{background-color:#ff4500}.social-bg .whatsapp a,.social-bg-hover .whatsapp a:hover{background-color:#3fbb50}.social-bg .messenger a,.social-bg-hover .messenger a:hover{background-color:#0084ff}.social-bg .snapchat a,.social-bg-hover .snapchat a:hover{background-color:#ffe700}.social-bg .telegram a,.social-bg-hover .telegram a:hover{background-color:#179cde}.social-bg .steam a,.social-bg-hover .steam a:hover{background:linear-gradient(5deg,#0d89bc,#112c5b,#0d1c47)}.social-bg .discord a,.social-bg-hover .discord a:hover{background-color:#7289da}.social-bg .quora a,.social-bg-hover .quora a:hover{background-color:#b92b27}.social-bg .tiktok a,.social-bg-hover .tiktok a:hover{background-color:#fe2c55}.social-bg .share a,.social-bg-hover .share a:hover{background-color:var(--meta-color)}.social-bg .email a,.social-bg-hover .email a:hover{background-color:#888}.social-bg .external-link a,.social-bg-hover .external-link a:hover{background-color:var(--title-color)}.social-color .blogger a,.social-color-hover .blogger a:hover{color:#ff5722}.social-color .apple a,.social-color-hover .apple a:hover{color:#333}.social-color .amazon a,.social-color-hover .amazon a:hover{color:#fe9800}.social-color .microsoft a,.social-color-hover .microsoft a:hover{color:#0067b8}.social-color .facebook a,.social-color .facebook-f a,.social-color-hover .facebook a:hover,.social-color-hover .facebook-f a:hover{color:#3b5999}.social-color .twitter a,.social-color-hover .twitter a:hover{color:#00acee}.social-color .youtube a,.social-color-hover .youtube a:hover{color:#f50000}.social-color .instagram a,.social-color-hover .instagram a:hover{color:#dd277b}.social-color .pinterest a,.social-color .pinterest-p a,.social-color-hover .pinterest a:hover,.social-color-hover .pinterest-p a:hover{color:#ca2127}.social-color .dribbble a,.social-color-hover .dribbble a:hover{color:#ea4c89}.social-color .linkedin a,.social-color-hover .linkedin a:hover{color:#0077b5}.social-color .tumblr a,.social-color-hover .tumblr a:hover{color:#365069}.social-color .twitch a,.social-color-hover .twitch a:hover{color:#6441a5}.social-color .rss a,.social-color-hover .rss a:hover{color:#ffc200}.social-color .skype a,.social-color-hover .skype a:hover{color:#00aff0}.social-color .stumbleupon a,.social-color-hover .stumbleupon a:hover{color:#eb4823}.social-color .vk a,.social-color-hover .vk a:hover{color:#4a76a8}.social-color .stack-overflow a,.social-color-hover .stack-overflow a:hover{color:#f48024}.social-color .github a,.social-color-hover .github a:hover{color:#24292e}.social-color .soundcloud a,.social-color-hover .soundcloud a:hover{color:#ff7400}.social-color .behance a,.social-color-hover .behance a:hover{color:#191919}.social-color .digg a,.social-color-hover .digg a:hover{color:#1b1a19}.social-color .delicious a,.social-color-hover .delicious a:hover{color:#0076e8}.social-color .codepen a,.social-color-hover .codepen a:hover{color:#000}.social-color .flipboard a,.social-color-hover .flipboard a:hover{color:#f52828}.social-color .reddit a,.social-color-hover .reddit a:hover{color:#ff4500}.social-color .whatsapp a,.social-color-hover .whatsapp a:hover{color:#3fbb50}.social-color .messenger a,.social-color-hover .messenger a:hover{color:#0084ff}.social-color .snapchat a,.social-color-hover .snapchat a:hover{color:#ffe700}.social-color .telegram a,.social-color-hover .telegram a:hover{color:#179cde}.social-color .steam a,.social-color-hover .steam a:hover{color:#112c5b}.social-color .discord a,.social-color-hover .discord a:hover{color:#7289da}.social-color .quora a,.social-color-hover .quora a:hover{color:#b92b27}.social-color .tiktok a,.social-color-hover .tiktok a:hover{color:#fe2c55}.social-color .share a,.social-color-hover .share a:hover{color:var(--meta-color)}.social-color .email a,.social-color-hover .email a:hover{color:#888}.social-color .external-link a,.social-color-hover .external-link a:hover{color:var(--title-color)}

/*! Header */
#header-wrapper{position:relative;float:left;width:100%;z-index:50;margin-bottom:1.5rem}.header-inner,.main-header{position:relative;float:left;width:100%;height:59px}.header-inner{background-color:var(--header-bg);box-shadow:var(--box-shadow)}.header-inner.is-fixed{position:fixed;top:-59px;left:0;width:100%;z-index:990;backface-visibility:hidden;visibility:hidden;opacity:0;transition:all .25s ease}.header-inner.is-fixed.show{top:0;opacity:1;visibility:visible;margin:0}.header-header{position:relative;width:100%;height:59px;border-bottom:1px solid var(--border-color);padding:0 var(--gap);max-width:var(--max-width);margin:0 auto}.is-boxed .header-header{float:none;width:$(row.width + 60px);max-width:100%;margin:0 auto;padding:0}.header-items{position:relative;float:left;width:100%;display:flex;flex-wrap:wrap;justify-content:space-between}.flex-left{position:static;display:flex;z-index:10}.flex-right{position:absolute;top:0;right:0;z-index:20}.rtl .flex-right{left:0;right:unset}.main-logo{position:relative;float:left;height:58px;overflow:hidden;padding:0 13px 0 0}.rtl .main-logo{padding:0 0 0 13px}.main-logo .widget{position:relative;height:100%;display:flex;align-items:center}.main-logo .logo-img{display:flex;align-items:center;height:34px;overflow:hidden}.main-logo img{display:block;max-width:100%;max-height:100%}.main-logo .blog-title{display:block;font-size:23px;font-family:var(--title-font);color:var(--header-color);font-weight:700}.main-logo .blog-title a{color:var(--header-color)}.main-logo .blog-title a:hover{color:var(--header-hover-color)}.main-logo #h1-off{position:absolute;top:-9000px;left:-9000px;display:none;visibility:hidden}#vtrick-pro-main-nav{position:static;height:58px;z-index:10}#vtrick-pro-main-nav .widget,#vtrick-pro-main-nav .widget>.widget-title{display:none}#vtrick-pro-main-nav .show-menu{display:block}#vtrick-pro-main-nav ul#vtrick-pro-main-nav-menu{display:flex;flex-wrap:wrap}#vtrick-pro-main-nav ul>li{position:relative;padding:0;margin:0}#vtrick-pro-main-nav-menu>li:not(:first-child){margin-left:8px}#vtrick-pro-main-nav-menu>li>a{position:relative;display:block;height:50px;font-family:var(--menu-font);font-size:15px;color:var(--header-color);font-weight:600;line-height:50px;padding:0 14px;border-radius:var(--box-radius);margin:4px 0}#vtrick-pro-main-nav-menu>li>a:hover{background:var(--rgba-gray)}#vtrick-pro-main-nav ul>li>.ul,#vtrick-pro-main-nav ul>li>ul{position:absolute;left:0;top:58px;width:180px;background-color:var(--submenu-bg);z-index:99999;padding:5px 0;backface-visibility:hidden;visibility:hidden;opacity:0;transform:translate3d(0,-10px,0);border-radius:var(--radius);box-shadow:0 1px 2px rgba(0,0,0,.1),0 5px 10px 0 rgba(0,0,0,.1)}.rtl #vtrick-pro-main-nav ul>li>.ul,.rtl #vtrick-pro-main-nav ul>li>ul{left:auto;right:0}#vtrick-pro-main-nav ul>li>ul>li>ul{position:absolute;top:-5px;left:100%;transform:translate3d(-10px,0,0);margin:0}.rtl #vtrick-pro-main-nav ul>li>ul>li>ul{left:unset;right:100%;transform:translate3d(10px,0,0)}#vtrick-pro-main-nav ul>li>ul>li{display:block;float:none;position:relative}.rtl #vtrick-pro-main-nav ul>li>ul>li{float:none}#vtrick-pro-main-nav ul>li>ul>li a{position:relative;display:block;font-size:14px;color:var(--submenu-color);font-weight:400;padding:8px 14px;margin:0}#vtrick-pro-main-nav ul>li>ul>li:hover>a{color:var(--submenu-hover-color)}#vtrick-pro-main-nav ul>li.has-sub>a:after{content:"\f282";float:right;font-family:bootstrap-icons;font-size:9px;font-weight:900;margin:0 0 0 4px}.rtl #vtrick-pro-main-nav ul>li.has-sub>a:after{float:left;margin:-1px 4px 0 0}#vtrick-pro-main-nav ul>li>ul>li.has-sub>a:after{content:"\f285";float:right;margin:0}.rtl #vtrick-pro-main-nav ul>li>ul>li.has-sub>a:after{content:"\f285"}#vtrick-pro-main-nav ul .ul,#vtrick-pro-main-nav ul ul{transition:visibility .1s ease,opacity .17s ease,transform .17s ease}#vtrick-pro-main-nav ul>li:hover>.ul,#vtrick-pro-main-nav ul>li:hover>ul,#vtrick-pro-main-nav ul>li>ul>li:hover>ul{visibility:visible;opacity:1;transform:translate3d(0,0,0);margin:0}#vtrick-pro-main-nav .mega-menu{position:static!important}#vtrick-pro-main-nav .mega-menu>.ul{width:100%;background-color:var(--megamenu-bg);overflow:hidden;padding:20px}.mega-menu .mega-items{display:grid;grid-template-columns:repeat(5,1fr);column-gap:20px}.mega-menu .mega-items.no-items{grid-template-columns:1fr}.mega-items .mega-item{position:relative;width:100%;display:flex;flex-direction:column;padding:0}.mega-item .entry-image-wrap{width:100%;z-index:1;margin:0 0 8px;border-radius:var(--radius)}.mega-item .entry-title{font-size:14px}.mega-item .entry-title a{color:var(--megamenu-color)}.mega-item .entry-title a:hover{color:var(--megamenu-hover-color)}.mega-menu .error-msg{justify-content:center}.mobile-menu-toggle{display:none;height:40px;font-size:18px;color:var(--header-color);align-items:center;padding-right:1rem}.mobile-menu-toggle:after{content:"\f479";font-family:bootstrap-icons;font-weight:900;margin:0}.mobile-menu-toggle:hover{color:var(--header-hover-color)}.tgl-wrap{height:58px;display:flex;align-items:center;z-index:20;margin:0}.tgl-wrap>a:not(:last-child){margin-right:.5rem}.tgl-style{width:40px;height:40px;background-color:var(--secondary-button-bg);color:var(--header-color);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:20;border-radius:50%}.tgl-style:after{content:"\f52a";font-family:bootstrap-icons;font-weight:700}.darkmode-toggle:after{content:"\f494"}.is-dark .darkmode-toggle:after{content:"\f2bd";font-weight:400}.show-search{transition:opacity .17s ease}.tgl-style:hover{background:var(--secondary-button-hover-bg)}#main-search-wrap{display:none;position:absolute;top:0;right:0;width:$(sidebar.width);height:58px;background-color:var(--header-bg);z-index:25}.rtl #main-search-wrap{left:0;right:unset}@-webkit-keyframes showSearch{0%{width:80%;opacity:0}100%{width:100%;opacity:1}}.main-search{position:relative;float:right;width:100%;height:100%;display:flex;align-items:center;animation:showSearch .17s ease}.rtl .main-search{float:left}.main-search .search-form{position:relative;height:38px;background-color:var(--rgba-gray);display:flex;flex:1;border:0;border-radius:var(--radius)}.is-dark .main-search .search-form:focus-within{background-color:var(--rgba-gray)}.main-search .search-input{width:100%;flex:1;background-color:rgba(0,0,0,0);font-family:inherit;font-size:14px;color:var(--header-color);font-weight:400;text-align:left;padding:0 16px;border:0}.rtl .main-search .search-input{text-align:right}.main-search .search-input::placeholder,.main-search .search-input:focus{color:var(--header-color);outline:0}.main-search .search-input::placeholder{opacity:.65}.main-search .search-close{width:40px;background-color:unset;font-size:16px;color:var(--header-color);text-align:center;cursor:pointer;border:0}.main-search .search-close:before{display:block;content:"\f62a";font-family:bootstrap-icons;font-weight:900}.main-search .search-close:hover{color:var(--header-hover-color)}.overlay{visibility:hidden;opacity:0;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.8);z-index:1000;margin:0;transition:all .25s ease}#slide-menu{display:none;position:fixed;width:300px;height:100%;top:0;left:0;bottom:0;background-color:var(--mobilemenu-bg);overflow:hidden;z-index:1010;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);visibility:hidden;box-shadow:3px 0 7px rgba(0,0,0,.1);transition:all .25s ease}.rtl #slide-menu{left:unset;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.nav-active #slide-menu,.rtl .nav-active #slide-menu{-webkit-transform:translateX(0);transform:translateX(0);visibility:visible}.slide-menu-header{position:relative;float:left;width:100%;height:59px;background-color:var(--mobilemenu-bg);overflow:hidden;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border-color)}.mobile-search{flex:1;padding-right:1rem}.rtl .mobile-search{padding-left:1rem}.mobile-search .search-form{width:100%;height:34px;background-color:var(--rgba-gray);overflow:hidden;display:flex;justify-content:space-between;border:0;border-radius:var(--radius)}.mobile-search .search-form:focus-within{background-color:var(--mobilemenu-bg);box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2)}.is-dark .mobile-search .search-form:focus-within{background-color:var(--rgba-gray)}.mobile-search .search-input{flex:1;width:100%;background-color:rgba(0,0,0,0);font-family:inherit;font-size:14px;color:var(--mobilemenu-color);font-weight:400;padding:0 10px;border:0}.mobile-search .search-input::placeholder,.mobile-search .search-input:focus{color:var(--mobilemenu-color)}.mobile-search .search-input::placeholder{opacity:.65}.mobile-search .search-action{background-color:rgba(0,0,0,0);font-family:inherit;font-size:12px;color:var(--mobilemenu-color);font-weight:400;text-align:center;cursor:pointer;padding:0 10px;border:0;opacity:.65}.mobile-search .search-action:before{display:block;content:"\f52a";font-family:bootstrap-icons;font-weight:900}.mobile-search .search-action:hover{opacity:1}.hide-vtrick-pro-mobile-menu{display:flex;height:100%;color:var(--mobilemenu-color);font-size:16px;align-items:center;cursor:pointer;z-index:20;padding:0 1rem}.hide-vtrick-pro-mobile-menu:before{content:"\f284";font-family:bootstrap-icons;font-weight:900}.hide-vtrick-pro-mobile-menu:hover{color:var(--mobilemenu-hover-color)}.slide-menu-flex{position:relative;float:left;width:100%;height:calc(100% - 59px);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;margin:0}.vtrick-pro-mobile-menu{position:relative;float:left;width:100%;padding:16px}.vtrick-pro-mobile-menu .m-sub{display:none}.vtrick-pro-mobile-menu ul li{position:relative;display:block;overflow:hidden;float:left;width:100%;margin:0}.vtrick-pro-mobile-menu>ul li ul{overflow:hidden}.vtrick-pro-mobile-menu ul li a{font-size:15px;color:var(--mobilemenu-color);font-weight:400;padding:8px 0;display:block}.vtrick-pro-mobile-menu>ul>li>a{font-family:var(--menu-font);font-weight:600}.vtrick-pro-mobile-menu ul li.has-sub .submenu-toggle{position:absolute;top:0;right:0;width:30px;color:var(--mobilemenu-color);text-align:right;cursor:pointer;padding:8px 0}.rtl .vtrick-pro-mobile-menu ul li.has-sub .submenu-toggle{text-align:left;right:auto;left:0}.vtrick-pro-mobile-menu ul li.has-sub .submenu-toggle:after{content:"\f282";font-family:bootstrap-icons;font-weight:900;float:right;font-size:12px;text-align:right;transition:all 0s ease}.rtl .vtrick-pro-mobile-menu ul li.has-sub .submenu-toggle:after{float:left}.vtrick-pro-mobile-menu ul li.has-sub.show>.submenu-toggle:after{content:"\f286"}.vtrick-pro-mobile-menu ul li a:hover,.vtrick-pro-mobile-menu ul li.has-sub.show>.submenu-toggle,.vtrick-pro-mobile-menu ul li.has-sub.show>a{color:var(--mobilemenu-hover-color)}.vtrick-pro-mobile-menu>ul>li>ul>li a{font-size:14px;opacity:.75;padding:8px 0 8px 10px}.rtl .vtrick-pro-mobile-menu>ul>li>ul>li a{padding:8px 10px 8px 0}.vtrick-pro-mobile-menu>ul>li>ul>li>ul>li>a{padding:8px 0 8px 20px}.rtl .vtrick-pro-mobile-menu>ul>li>ul>li>ul>li>a{padding:8px 20px 8px 0}.vtrick-pro-mobile-menu ul>li>.submenu-toggle:hover{color:var(--mobilemenu-hover-color)}
.mm-footer{position:relative;float:left;width:100%;padding:20px 16px;margin:0}.mm-footer .mm-menu,.mm-footer .mm-social{position:relative;float:left;width:100%;margin:8px 0 0}.mm-footer .mm-social{margin:0}.mm-footer ul{display:flex;flex-wrap:wrap}.mm-footer .mm-social ul li{margin:0 16px 0 0}.rtl .mm-footer .mm-social ul li{margin:0 0 0 16px}.mm-footer .mm-social ul li:last-child{margin:0}.mm-footer .mm-social ul li a{display:block;font-size:14px;color:var(--mobilemenu-color);padding:0}.mm-footer .mm-social ul li a:hover{color:var(--mobilemenu-hover-color)}.mm-footer .mm-menu ul li{margin:5px 18px 0 0}.rtl .mm-footer .mm-menu ul li{margin:5px 0 0 18px}.mm-footer .mm-menu ul li:last-child{margin:5px 0 0}.mm-footer .mm-menu ul li a{display:block;font-size:14px;color:var(--mobilemenu-color);font-weight:400;padding:0}.mm-footer .mm-menu ul li a:hover{color:var(--mobilemenu-hover-color)}#header-ads-wrap{position:relative;float:left;width:100%;margin:0}.header-ads .widget,.header-ads .widget-content{position:relative;float:left;width:100%;margin:0}.header-ads .widget{margin:1rem 0 0}

/*! Ticker */
#featured-wrapper,#hero-wrapper,#ticker-wrapper,#trending-wrapper{padding:0 var(--gap)}#hero-wrapper,#ticker .widget,#ticker-wrapper,#trending-wrapper{position:relative;float:left;width:100%;margin:0}#ticker .widget{display:none;background-color:var(--widget-bg);align-items:flex-start;padding:1.5rem 1rem;margin:0 0 2rem;box-shadow:var(--box-shadow);border-radius:var(--box-radius)}#ticker .widget.PopularPosts,#ticker .widget.is-visible{display:flex}.ticker .widget-title{padding:0 8px 0 0}.rtl .ticker .widget-title{padding:0 0 0 8px}.ticker .widget-title .title{font-size:15px;color:var(--main-color);font-weight:400;line-height:20px}.ticker .widget-content{position:relative;height:20px;display:flex;justify-content:space-between;flex:1;margin:0}.ticker .loader{justify-content:flex-start}.ticker .loader:after{width:20px;height:20px}.ticker .error-msg{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0}.ticker-items{position:relative;display:flex;align-items:center;flex:1;overflow:hidden}.ticker-item{position:absolute;top:0;left:0;width:100%;opacity:0;visibility:hidden;transform:translate3d(10px,0,0);pointer-events:none;transition:all .85s ease}.rtl .ticker-item{left:unset;right:0;transform:translate3d(-10px,0,0)}.ticker-item.active{opacity:1;visibility:visible;transform:translate3d(0,0,0);pointer-events:initial}.ticker-item .entry-title{height:20px;display:flex;font-size:15px;font-weight:600;line-height:20px}.ticker-item .entry-title a{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.ticker-nav{display:grid;grid-template-columns:1fr 1fr;grid-gap:5px;padding:0 0 0 10px}.rtl .ticker-nav{padding:0 10px 0 0}.ticker-nav a{display:flex;width:20px;height:20px;background-color:var(--rgba-gray);font-size:9px;color:var(--title-color);align-items:center;justify-content:center;border-radius:var(--radius)}.ticker-nav a:hover{color:var(--main-color)}.ticker-nav a:before{display:block;font-family:bootstrap-icons;font-weight:900}.rtl .ticker-nav a.tn-next:before,.ticker-nav .tn-prev:before{content:"\f284"}.rtl .ticker-nav .tn-prev:before,.ticker-nav a.tn-next:before{content:"\f285"}

/*! Trending */
.trending .widget.PopularPosts{box-sizing:content-box;display:flex!important;margin:-3rem 0 calc(var(--gap)/2) 0;position:relative;margin-top:-3rem}.trending .widget.PopularPosts:after{content:"";position:absolute;right:0;top:3rem;bottom:3.5rem;width:5px;border-radius:5px;background:linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)}.trending .widget.PopularPosts .widget-title{margin-top:4rem;flex:0 0 180px;margin-right:1rem;position:relative;display:flex;flex-direction:column;justify-content:center;padding:1.5rem;transform:translateY(-10px)}.trending .widget.PopularPosts .widget-title .title{z-index:3;position:relative;font-family:var(--title-font);font-weight:700;font-size:clamp(1.5rem,calc(1.5rem + .2vw),3rem);line-height:1.2;color:#fff;letter-spacing:-.05rem}.trending .widget.PopularPosts .widget-title .title:after{display:none}.trending .widget.PopularPosts .widget-title .title:before{content:"\f25f";font-family:bootstrap-icons;font-size:.8em;font-weight:400;display:block}.trending .widget.PopularPosts .widget-title:before{content:"";background:linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);position:absolute;top:-5px;left:-5px;width:calc(100% + 10px);height:calc(100% + 10px);z-index:1;border-radius:12px}.trending .widget.PopularPosts .widget-title:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#000;z-index:2;border-radius:8px}.trending .widget.PopularPosts .widget-content{scrollbar-color:#666 #201c29;scrollbar-gutter:always;padding:3rem 3rem 3rem 2rem;margin:0;display:flex;overflow-x:scroll;-webkit-overflow-scrolling:touch}.trending .widget.PopularPosts .widget-content::-webkit-scrollbar{width:8px;height:8px}.trending .widget.PopularPosts .widget-content::-webkit-scrollbar-thumb{background:var(--scroll-bg);border-radius:10px}.trending .widget.PopularPosts .widget-content .popular-post.post{padding:1.5rem;border-radius:16px;background:linear-gradient(135deg,#d4e9bc 0,#f2f5c0 100%);color:#000;display:flex;flex-direction:column;transition:.2s;margin:0;min-width:200px;max-width:230px;min-height:280px;box-shadow:var(--box-shadow-4)}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(2){background-image:-webkit-linear-gradient(135deg,#fbd0b8 0,#fcdcbe 48%,#fcdcbe 49%,#fceac3 100%)}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(3){background:linear-gradient(33deg,#e2c8df,#f2ced8)}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(4){background:linear-gradient(218deg,#c9dae7 0,#ebeff9 100%)}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(6){background:linear-gradient(-64deg,#b3dcb7 0,#f4f5c0 100%)}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(7){background:linear-gradient(135deg,#ffe9e9 0,#f7abab 100%,#fddede 100%)}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(5){background:#f9e4ae}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(8){background:#fce8d4}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(9){background:#b0d9eb}.trending .widget.PopularPosts .widget-content .popular-post.post:nth-child(10){background:#d4ecbf}.trending .widget.PopularPosts .widget-content .popular-post.post:not(:first-child){margin-left:-50px}.trending .widget.PopularPosts .widget-content .popular-post.post:hover{transform:translateY(-1rem) rotate(3deg)}.trending .widget.PopularPosts .widget-content .popular-post.post:hover~.popular-post.post{transform:translateX(50px)}.trending .widget.PopularPosts .item-0 .entry-header{background:0 0}.trending .widget.PopularPosts .entry-header{display:flex;flex-direction:column;flex:1;padding:0}.trending .widget.PopularPosts .widget-content .entry-meta{margin:0 0 10px}.trending .widget.PopularPosts .widget-content .entry-title a{color:var(--trending-color);font-size:1.2rem;font-weight:700;line-height:1.3;margin-bottom:1rem}.trending .widget.PopularPosts .widget-content .entry-tag{font-size:8px;font-weight:500;margin-right:.8rem;color:var(--accent)}.trending .widget.PopularPosts .widget-content .author-row{-webkit-margin-before:unset;margin-block-start:unset}.trending .widget.PopularPosts .widget-content .author-row .author-name{color:var(--meta-color);font-size:12px;font-weight:500}.trending .widget.PopularPosts .widget-content .entry-meta.mi.tag{max-height:5em;overflow-y:hidden;line-height:1.1;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;margin:auto 0 1rem}

/*! Featured */
.hero-post .hero-post{position:relative;float:left;width:100%;margin:0 0 2rem;display:grid;grid-template-columns:50% 50%;color:var(--card-color);border-radius:8px;z-index:1;overflow:hidden;box-shadow:var(--box-shadow)}.hero-post .entry-image-wrap:before,.index-post .entry-image-wrap:before{pointer-events:none;background:linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);position:absolute;mix-blend-mode:screen;opacity:.35;width:120%;min-height:500px;height:100%;z-index:2}.hero-post .entry-image-wrap:after{pointer-events:none;content:"";position:absolute;z-index:3;left:75%;height:100%;top:0;width:26%;background:var(--card-grd)}.hero-post .entry-image-wrap{float:left;width:100%;height:100%;background-color:rgba(155,155,155,.05);z-index:1;margin:0}.hero-post .entry-image-wrap span{width:100%;height:100%}.hero-post .flex-center{background:var(--content-bg);width:100%;height:100%;margin:0}.hero-post .entry-header-wrap{display:flex;align-items:flex-start}.hero-post .entry-header{overflow:hidden;z-index:5;padding:3rem;margin:0}.hero-post .entry-header p{margin-bottom:1.5rem;font-size:1.2rem}.rtl .hero-post .entry-header{left:unset;right:0}.hero-post .entry-meta{display:inline-block;font-size:13px;margin:0 0 10px}.hero-post .entry-title{font-size:2.5rem;line-height:1.3;margin-bottom:1.5rem}.hero-post .author-avatar-wrap{float:left}.hero-post .author-name{line-height:26px;font-weight:600}.hero-post .hero-rm a{display:inline-block;font-size:13px;color:var(--main-color);font-weight:500;text-transform:uppercase;margin:12px 0 0}.hero-post .hero-rm a:after{display:inline-block;content:'\f30b';font-family:'Font Awesome 5 Free';font-weight:900;padding:0 5px;transition:all .17s ease}.rtl .hero-post .hero-rm a:after{content:'\f30a'}.hero-post .hero-rm a:hover:after{padding:0 7px}.hero-post.is-video .entry-title a:before{display:inline-block;content:"\f62b";font-family:bootstrap-icons!important;color:red;vertical-align:-.125em;margin:0 8px 0 0}.rtl .hero-post.is-video .entry-title a:before{margin:-4px 0 0 10px}#featured .widget,#featured .widget-content,#featured-wrapper{position:relative;float:left;width:100%;margin:0}#featured .widget{display:none;margin:30px 0 0}#featured .widget.HTML,#featured .widget.PopularPosts,#featured .widget.is-visible{display:block}#featured .widget.PopularPosts .widget-content{display:flex;align-items:center;justify-content:center;min-height:200px;margin:0}#featured .error-msg{padding:0}.featured-items{position:relative;float:left;width:100%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px}.featured-item{position:relative;width:100%;height:200px}.featured-inner{position:relative;width:100%;height:100%;display:flex;flex-direction:column;z-index:11;overflow:hidden;border-radius:var(--radius)}.featured-item .entry-image-wrap{width:100%;height:100%}.featured-item .entry-title{font-size:19px}.featured-item .entry-meta{flex-wrap:wrap}

/*! AJAX */
.title-wrap{position:relative;float:left;width:100%;display:flex;align-items:center;justify-content:space-between;margin:0 0 16px}.title-wrap>*{display:flex;align-items:center}.title-wrap>.title{font-family:var(--title-font);font-size:18px;color:var(--widget-title-color);font-weight:700;margin:0}.title-wrap>.title:after{content:"\f285";font-family:bootstrap-icons;font-size:10px;font-weight:900;line-height:1;margin:2px 0 0 3px}.rtl .title-wrap>.title:after{content:"\f285";margin:2px 3px 0 0}.title-wrap>a.wt-l{font-size:12px;color:var(--meta-color);font-weight:400;line-height:1}.title-wrap>a.wt-l:hover{color:var(--main-color)}.content-section,.content-section .content-block,.content-section .widget,.content-section .widget-content{position:relative;float:left;width:100%;margin:0}.content-section .widget{display:none;margin:0 0 30px}.content-section .widget.is-ad,.content-section .widget.is-visible{display:block}#content-section-2 .widget:last-child{margin:0}.content-section .loader{height:200px}.block-items{display:grid;grid-template:"prm1 prm1 prm2" "snd1 snd2 snd3"/1fr 1fr 1fr;gap:1.5rem;padding:1.5rem;background:var(--body-bg-color);border-radius:var(--box-radius);box-shadow:var(--box-shadow)}.block-items .block-item.item-0{grid-area:prm1}.block-items .block-item.item-1{grid-area:prm2;border-radius:var(--radius) var(--radius) 0 0;background-image:var(--block-linear-bg)}.block-items .block-item.item-2{grid-area:snd1}.block-items .block-item.item-3{grid-area:snd2}.block-items .block-item.item-4{grid-area:snd3}.block-items .entry-header{display:flex;flex-direction:column;flex:1}.block-items .block-item.item-1 .entry-header{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:7;padding:.5rem 1rem}.block-items .entry-header .entry-meta{font-size:10px}.block-items .entry-header .entry-meta .cmt-count:before{content:'-';margin-right:4px}.block-items .entry-header .entry-title{font-size:1.1rem;padding:.4rem 0}.block-items .block-item.item-0 .entry-header .entry-title{font-size:1.4rem}.block-items .entry-image-wrap{width:100%;margin:0 12px 0 0;border-radius:var(--radius)}.grid-items{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px}.grid-item{position:relative;background-color:var(--post-card-bg);display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--box-shadow);border-radius:var(--box-radius)}.grid-item .entry-image-wrap{width:100%;border-radius:var(--radius) var(--radius) 0 0}.grid-item .entry-header{padding:13px 16px}.grid-item .entry-title{font-size:15px}.list-items{display:flex;flex-direction:column}.content-block.list-items .entry-thumb{border:1px solid var(--border-color);border-radius:var(--radius)}.list-item{position:relative;width:100%;background-color:var(--post-card-bg);display:flex;padding:16px;margin:20px 0 0;box-shadow:var(--box-shadow);border-radius:var(--box-radius)}.list-item.item-0{margin:0}.list-item .entry-image-wrap{width:200px;margin:0 16px 0 0;border-radius:var(--radius)}.rtl .list-item .entry-image-wrap{margin:0 0 0 16px}.list-item .entry-header{display:flex;flex-direction:column;flex:1;margin:0}.list-item .entry-title{font-size:20px;margin:0}.list-item .entry-excerpt{font-size:14px;color:var(--text-color);margin:8px 0}.list-item .entry-meta{flex-wrap:wrap;font-size:12px;margin-top:auto}.video-items{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px}.video-item{position:relative;background-color:var(--post-card-bg);display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--box-shadow);border-radius:var(--box-radius)}.video-item .entry-image-wrap{width:100%;border-radius:var(--radius) var(--radius) 0 0}.video-item .entry-header{padding:13px 16px}.video-item .entry-title{font-size:15px}

/*! Blog */
#main .Blog,#main-wrapper #main{position:relative;float:left;width:100%;margin:0}.is-home #main-wrapper.has-cs2 #main{margin:0 0 30px}.blog-posts-wrap{position:relative;float:left;width:100%}.queryMessage{float:left;width:100%}.Blog.no-posts .queryMessage,.queryMessage .query-info{margin:0}.queryMessage .query-info{position:relative;float:left;width:100%;display:flex;align-items:center;font-family:var(--title-font);font-size:16px;color:var(--widget-title-color);font-weight:700;margin:0 0 16px}.queryMessage .query-info:after{content:"\f285";font-family:bootstrap-icons;font-size:10px;font-weight:900;line-height:1;margin:1px 0 0 3px}.rtl .queryMessage .query-info:after{content:"\f285";margin:1px 3px 0 0}.queryEmpty{float:left;width:100%;font-size:14px;color:var(--text-color);font-weight:400;text-align:center;margin:50px 0}.index-post-wrap{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:calc(var(--gap)*2/3);margin:0 0 var(--gap);width:100%}.no-posts .index-post-wrap{display:none}.blog-post{display:block;word-wrap:break-word}.index-post{background:var(--post-card-bg);color:var(--text-color);border-radius:8px;position:relative;z-index:1;overflow:hidden;box-shadow:var(--box-shadow);display:flex;flex-direction:column}.index-post.ad-type{display:block;background-color:transparent;padding:0;border:0;border-radius:0}.index-post-wrap .index-post:last-child{margin:0}.index-post .entry-image-wrap{width:100%;margin:0}.rtl .index-post .entry-image-wrap{margin:0 0 0 16px}.index-post .entry-header{flex:1;position:relative;z-index:5;padding:1.5rem;display:flex;flex-direction:column}.index-post .entry-title{font-size:clamp(1.6rem,calc(1.6rem + .2vw),2.8rem);letter-spacing:-.05rem;font-weight:700;margin:0 0 1.5rem;line-height:1.2}.index-post .entry-meta{flex-wrap:wrap;font-size:10px;margin:0 0 8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.inline-ad-wrap{position:relative;float:left;width:100%;margin:0}.inline-ad{position:relative;float:left;width:100%;text-align:center;line-height:1;margin:0}.post-animated{-webkit-animation-duration:.5s;animation-duration:.5s}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,10px,0)}to{opacity:1;transform:translate3d(0,0,0)}}.post-fadeInUp{animation-name:fadeInUp}.is-single .item-post,.item-post-inner,.item-post-wrap{position:relative;float:left;width:100%;margin:0}.item-post .blog-entry-header{position:relative;float:left;width:100%;display:flex;flex-direction:column}#breadcrumb{float:left;display:flex;width:100%;font-size:12px;color:var(--meta-color);font-weight:400;line-height:1;margin:0 0 .5rem}#breadcrumb a{color:var(--meta-color)}#breadcrumb a.home,#breadcrumb a:hover{color:var(--main-color)}#breadcrumb em:after{content:"\f285";font-family:bootstrap-icons;font-size:9px;font-weight:900;font-style:normal;vertical-align:middle;margin:0 4px}.rtl #breadcrumb em:after{content:"\f285"}.item-post h1.entry-title{position:relative;float:left;width:100%;font-size:$(itempost.title.size);font-weight:700;margin:0}.item-post .has-meta h1.entry-title{margin:1rem 0 1.5rem}.p-eh .entry-meta{flex-wrap:wrap;justify-content:space-between;font-size:clamp(12px,calc(.7rem + .25vw),20px);margin:0}.p-eh .entry-meta .align-left,.p-eh .entry-meta .align-right{display:flex;flex-wrap:wrap;align-items:center}.p-eh .entry-meta .mi,.p-eh .entry-meta .sp{margin:0 4px 0 0}.rtl .p-eh .entry-meta .mi,.rtl .p-eh .entry-meta .sp{margin:0 0 0 4px}.p-eh .entry-meta .entry-author{align-items:center}.p-eh .entry-meta .entry-author:before{display:none}.author-avatar-wrap,.p-eh .entry-meta .author-avatar-wrap{overflow:visible;width:30px;height:30px;padding:0;margin:0 5px 0 0;border-radius:100%;border:.2em solid var(--accent)}.rtl .p-eh .entry-meta .author-avatar-wrap{margin:0 0 0 5px}.p-eh .entry-meta .author-avatar{z-index:2;border-radius:50%}.p-eh .entry-meta .author-name{font-weight:600}.entry-meta .entry-comments-link{display:none;margin:0 0 0 10px}.rlt .entry-meta .entry-comments-link{margin:0 10px 0 0}.entry-meta .entry-comments-link:before{display:inline-block;content:"\f268";font-family:bootstrap-icons;font-size:14px;color:var(--meta-color);font-weight:400;margin:0 4px 0 0;transform:scale(-1,1)}.rtl .entry-meta .entry-comments-link:before{margin:0 0 0 4px}.entry-meta .entry-comments-link.show{display:block;color:var(--meta-color)}.entry-content-wrap{position:relative;float:left;width:100%;background:var(--body-bg-color);border-radius:var(--box-radius);box-shadow:var(--box-shadow);padding:4rem 4rem .5rem;margin:2rem 0 0}#post-body{position:relative;float:left;width:100%;font-family:var(--text-font);font-size:$(itempost.content.size);color:var(--post-text-color);line-height:1.6em;padding:0;margin:0}.post-body p{margin-bottom:1rem;margin-top:1rem}.post-body p+p{margin-top:0}.post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6{font-size:17px;color:var(--title-color);line-height:1.3em;margin:0 0 1rem;font-weight:700}.post-body h1{font-size:26px}.post-body h2{font-size:23px;margin-top:2rem}.post-body h3{font-size:20px}.post-body h4{margin-top:1rem}.post-body h2+h3,.post-body h3+h4{margin-top:1rem}.post-body img{border-radius:$(post.img.border);height:auto!important}blockquote{position:relative;background-color:var(--rgba-gray);color:var(--title-color);font-style:normal;padding:1rem 1rem 1rem 4rem;margin:0;border-radius:var(--box-radius)}

/*! ShortCodes */
blockquote:before{position:absolute;left:1rem;top:10px;content:"\f255";font-family:bootstrap-icons;font-size:2rem;font-style:normal;color:var(--title-color);line-height:1;opacity:.25;margin:0}blockquote.alert,blockquote.check,blockquote.flag,blockquote.star,blockquote.warn{color:#127d55;background-color:#e6fcf3;padding:20px 20px 20px 60px}blockquote.alert:before,blockquote.check:before,blockquote.flag:before,blockquote.star:before,blockquote.warn:before{content:"\f28b";color:inherit;font-size:20px;opacity:1;left:20px;top:26px}blockquote.flag{background-color:#e1f5fe;color:#01579b}blockquote.flag:before{content:"\f3cc"}blockquote.warn{color:#68610c;background-color:#fbfecb}blockquote.warn:before{content:"\f33b"}blockquote.alert{color:#7d1212;background-color:#fce6e6}blockquote.alert:before{content:"\f2e6"}blockquote.star{color:#365aaa;background-color:#ecedfb}blockquote.star:before{content:"\f19f"}.post-body blockquote>p:first-child{margin-top:0}.post-body blockquote>p:last-child{margin-bottom:0}.post-body a.dl{display:inline-grid;grid-template-areas:"ftype ftitle" "ftype fsize";grid-template-columns:min-content;column-gap:1rem;text-align:left;padding:.5rem 1rem .5rem .5rem;margin:.5rem;border-radius:var(--radius);min-width:min(300px,50%);font-size:14px;font-weight:700;background-color:var(--comment-bg-color);color:var(--comment-color);box-shadow:var(--box-shadow)}.post-body a.dl:before{content:"\f355";font-family:bootstrap-icons;font-weight:400;grid-area:ftype;font-size:24px;line-height:1;justify-self:center;border-radius:calc(var(--radius)/ 2);padding:.65rem;color:var(--body-bg-color);background:var(--main-color)}.post-body a.dl:after{content:attr(file-size);grid-area:fsize;font-size:.8em;font-weight:400;font-style:italic;color:var(--meta-color);line-height:1.2}.post-body a.dl.zip:before{content:"\f390"}.post-body a.dl.pdf:before{content:"\f63d"}.post-body a.dl.code:before{content:"\f361"}.post-body a.dl.media:before{content:"\f37a"}.post-body a.dl:focus,.post-body a.dl:hover{text-decoration:none}.rtl blockquote:before{left:unset;right:10px}.post-body .responsive-video-wrap{position:relative;width:100%;padding:0;padding-top:56%}.post-body .responsive-video-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%}.post-body ul{margin:0 0 1rem 2rem;list-style-position:outside}.rtl .post-body ul{padding:0 16px 0 0}.post-body li{margin:0 0 2px;padding:0}.post-body li::marker{color:var(--accent)}.post-body ul li{list-style:disc}.post-body ul ul li{list-style:circle}.rtl .post-body ul li:before{margin:0 0 0 5px}.post-body ol{counter-reset:ify;padding:0 0 0 16px;margin:10px 0}.rtl .post-body ol{padding:0 16px 0 0}.post-body ol>li{counter-increment:ify;list-style:none}.post-body ol>li:before{display:inline-block;content:counters(ify,'.') '.';margin:0 5px 0 0;color:var(--accent)}.rtl .post-body ol>li:before{margin:0 0 0 5px}.post-body u{text-decoration:underline}.post-body strike{text-decoration:line-through}.post-body sup{vertical-align:super}.post-body a{color:var(--main-color)}.post-body a:hover{text-decoration:underline}.post-body hr{border:0;height:1px;background-image:linear-gradient(to right,#f0f0f0,#00b9ff,#59d941,#f0f0f0)}

/* Button */
.post-body a.button{display:inline-block;height:36px;background-color:var(--button-bg);font-family:var(--body-font);font-size:14px;color:var(--button-color);font-weight:400;line-height:36px;text-align:center;text-decoration:none;cursor:pointer;padding:0 20px;margin:0 6px 8px 0;border-radius:36px}.post-body a.red{background-color:#ee4e2e}.post-body a.yellow{background-color:#ffc107;color:#111}.post-body a.purple{background-color:#673ab7}.post-body a.blue{background-color:#2196f3}.post-body a.orange{background-color:#ff9800}.post-body a.dark{background-color:#253b45}.post-body a.green{background-color:#4caf50}.post-body a.white{background-color:#fafafa;color:#111;border:1px solid var(--border-color)}.post-body a.button:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.post-body a.colored-button:hover{background-color:var(--button-hover-bg)!important;color:var(--button-hover-color)!important}.button:before{float:left;font-family:bootstrap-icons;font-weight:400;display:inline-block;margin:0 8px 0 0}.rtl .button:before{float:right;margin:0 0 0 8px}.button.preview:before{content:"\f33e"}.button.download:before{content:"\f30a"}.button.link:before{content:"\f470"}.button.cart:before{content:"\f23d"}.button.info:before{content:"\f430"}.button.share:before{content:"\f52d"}.button.contact:before{content:"\f4db"}.post-body table{width:100%;overflow-x:auto;text-align:left;margin:0;border-collapse:collapse;border:1px solid var(--border-color)}.rtl .post-body table{text-align:right}.post-body table td,.post-body table th{padding:6px 12px;border:1px solid var(--border-color)}#featured table thead,.post-body table thead{background:#0c5dc8}#featured table thead th,.post-body table thead th{color:var(--post-title-color);color:#fff;font-weight:700;vertical-align:bottom}#featured table tbody tr:nth-of-type(even),.post-body table tbody tr:nth-of-type(even){background-color:var(--rgba-gray)}.post-body table.tr-caption-container tbody tr{background:unset}.post-body table.tr-caption-container td.tr-caption:before{content:"\f226";font-family:bootstrap-icons;vertical-align:bottom;display:inline-block;margin:0 4px 0 0}table.tr-caption-container,table.tr-caption-container td,table.tr-caption-container th{padding:0;border:0}table.tr-caption-container td.tr-caption{font-size:13px;color:var(--meta-color);padding:6px 0 0}#featured table{width:100%;overflow:auto;text-align:left;margin:0;border-collapse:collapse;border-spacing:0}#featured table td,#featured table th{padding:6px 12px;border:1px solid var(--border-color)}#featured .table-wrap{overflow:hidden;border-radius:8px}

/* TOC */
.tocify-wrap{display:flex;width:100%;clear:both;margin:1rem 0}.tocify-inner{position:relative;width:100%;background-color:var(--toc-bg);padding:1rem;display:flex;flex-direction:column;overflow:hidden;font-size:16px;color:var(--title-color);line-height:1.6em;border-radius:var(--border-radius)}a.tocify-title{position:relative;height:38px;font-size:16px;color:var(--title-color);font-weight:600;display:flex;align-items:center;justify-content:space-between;padding:0 15px;margin:0}.tocify-title-text{display:flex;font-weight:900;font-family:var(--title-font);font-size:20px}.tocify-title-text:before{content:"\f475";font-family:bootstrap-icons;font-size:28px;font-weight:400;margin:0 6px 0 0}.rtl .tocify-title-text:after{margin:0 0 0 6px}.tocify-title:after{content:"\f282";font-family:bootstrap-icons;font-size:16px;font-weight:900;margin:0 0 0 25px}.rtl .tocify-title:after{margin:0 25px 0 0}.tocify-title.is-expanded:after{content:"\f286"}a.tocify-title:hover{text-decoration:none}#tocify{display:none;padding:0 15px 10px;margin:0}#tocify ol{padding:0 0 0 15px}.rtl #tocify ol{padding:0 15px 0 0}#tocify li{font-size:16px;margin:8px 0}#tocify li a{color:var(--toc-link)}#tocify li a:hover{color:var(--main-color);text-decoration:underline}

/*! Rating */
#post-rating .rating{margin-left:auto}#post-rating .stars{display:inline-block;position:relative;vertical-align:text-bottom;height:17px;width:85px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg5NDU5NTUwMjEwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1NDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk4Ny40MjkgNDEyLjM2N3EwIDEyLjU4MS0xNC44NDggMjcuNDI5bC0yMDcuNDMzIDIwMi4yNzcgNDkuMTUyIDI4NS42OTZxMC41ODUgMy45ODYgMC41ODUgMTEuNDQ3IDAgMTEuOTk1LTUuOTk4IDIwLjI5N3QtMTcuNDQ1IDguMzAycS0xMC44NjIgMC0yMi44NTctNi44MzlsLTI1Ni41ODUtMTM0LjgzOS0yNTYuNTg1IDEzNC44MzlxLTEyLjU4MSA2LjgzOS0yMi44NTcgNi44MzktMTEuOTk1IDAtMTcuOTkzLTguMzAydC01Ljk5OC0yMC4yOTdxMC0zLjQzOCAxLjEzNC0xMS40NDdsNDkuMTUyLTI4NS42OTYtMjA4LjAxOC0yMDIuMjc3cS0xNC4yOTktMTUuNDMzLTE0LjI5OS0yNy40MjkgMC0yMS4xMzggMzItMjYuMjk1bDI4Ni44NjYtNDEuNzI4IDEyOC41ODUtMjU5Ljk4NnExMC44NjItMjMuNDQyIDI4LjAxNC0yMy40NDJ0MjguMDE0IDIzLjQ0MmwxMjguNTg1IDI1OS45ODYgMjg2Ljg2NiA0MS43MjhxMzIgNS4xNTcgMzIgMjYuMjk1eiIgcC1pZD0iMTU0NyIgZmlsbD0iI2Q5ZDlkOSI+PC9wYXRoPjwvc3ZnPg==);background-size:17px;background-repeat:repeat-x;margin:0 4px 0 0}#post-rating .stars .score{display:block;margin:0;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg5NDU5NTUwMjEwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1NDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk4Ny40MjkgNDEyLjM2N3EwIDEyLjU4MS0xNC44NDggMjcuNDI5bC0yMDcuNDMzIDIwMi4yNzcgNDkuMTUyIDI4NS42OTZxMC41ODUgMy45ODYgMC41ODUgMTEuNDQ3IDAgMTEuOTk1LTUuOTk4IDIwLjI5N3QtMTcuNDQ1IDguMzAycS0xMC44NjIgMC0yMi44NTctNi44MzlsLTI1Ni41ODUtMTM0LjgzOS0yNTYuNTg1IDEzNC44MzlxLTEyLjU4MSA2LjgzOS0yMi44NTcgNi44MzktMTEuOTk1IDAtMTcuOTkzLTguMzAydC01Ljk5OC0yMC4yOTdxMC0zLjQzOCAxLjEzNC0xMS40NDdsNDkuMTUyLTI4NS42OTYtMjA4LjAxOC0yMDIuMjc3cS0xNC4yOTktMTUuNDMzLTE0LjI5OS0yNy40MjkgMC0yMS4xMzggMzItMjYuMjk1bDI4Ni44NjYtNDEuNzI4IDEyOC41ODUtMjU5Ljk4NnExMC44NjItMjMuNDQyIDI4LjAxNC0yMy40NDJ0MjguMDE0IDIzLjQ0MmwxMjguNTg1IDI1OS45ODYgMjg2Ljg2NiA0MS43MjhxMzIgNS4xNTcgMzIgMjYuMjk1eiIgcC1pZD0iMTU0NyIgZmlsbD0iI2ZhOGIxNSI+PC9wYXRoPjwvc3ZnPg==);background-size:17px;background-repeat:repeat-x;height:17px;width:80px}#post-rating .rate-count,#post-rating .rate-value{margin:0}

/*! Widget and Post */
.post-body .contact-form{display:table;font-family:var(--body-font)}.contact-form .widget-title{display:none}.contact-form .contact-form-name{width:calc(50% - 5px)}.rtl .contact-form .contact-form-name{float:right}.contact-form .contact-form-email{float:right;width:calc(50% - 5px)}.rtl .contact-form .contact-form-email{float:left}.post-body pre,pre.code-box{position:relative;display:block;background-color:var(--rgba-gray);font-family:Monospace;font-size:13px;color:var(--post-text-color);white-space:pre-wrap;line-height:1.4em;padding:16px;border:0;border-radius:var(--radius)}.post-body pre{font-size:14px;padding:1em;line-height:1.375;overflow:auto;font-family:Consolas,Menlo,Monaco,"Andale Mono WT","Andale Mono","Lucida Console","Lucida Sans Typewriter","DejaVu Sans Mono","Bitstream Vera Sans Mono","Liberation Mono","Nimbus Mono L","Courier New",Courier,monospace}.post-body code[class*=language-],.post-body pre,.post-body pre[class*=language-]{margin:1rem 0;border-radius:var(--radius);background-color:var(--comment-bg-color)}.post-body .code-toolbar .toolbar{opacity:1;top:0;right:0;padding-top:.8em;padding-right:.4em;border-top-right-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);background-color:var(--comment-bg-color)}.post-body .code-toolbar .toolbar-item .copy-to-clipboard-button{background:unset;cursor:pointer;box-shadow:none;border:none;color:var(--comment-color);font-size:16px}.post-body .code-toolbar .toolbar-item .copy-to-clipboard-button:hover{color:var(--main-color)}.post-body .code-toolbar .toolbar-item .copy-to-clipboard-button>span{display:none}.post-body .code-toolbar .toolbar-item .copy-to-clipboard-button:before{content:"\f28b";font-family:bootstrap-icons;color:#4caf50}.post-body .code-toolbar .toolbar-item .copy-to-clipboard-button[data-copy-state=copy]:before{content:"\f290";color:inherit}.post-body pre::-webkit-scrollbar-track{background:var(--comment-bg-color)}.post-body pre::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:.5em}.post-body pre::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.45)}.post-body pre::-webkit-scrollbar{width:.5em;height:.5em}.post-body code:not(pre[class*=language-]>code){padding:.1rem .3rem .2rem;border-radius:.2rem;background:#ffeff0;color:#954806;font-family:monospace}.post-body .google-auto-placed{margin:25px 0}.post-footer{position:relative;float:left;width:100%;margin:0}cite.user.author-comment:after{content:"\f26a";font-family:bootstrap-icons;font-weight:400;color:var(--accent);vertical-align:bottom;font-size:.9em;margin-left:4px}#readTime{display:inline-block;min-width:8ch}.entry-labels{position:relative;float:left;width:100%;display:flex;flex-wrap:wrap;margin:20px 0 0}.entry-labels a,.entry-labels span{font-size:14px;color:var(--main-color);font-weight:400;margin:5px 6px 0 0}#post-rating{justify-content:space-between}.rtl .entry-labels a,.rtl .entry-labels span{margin:5px 0 0 6px}.entry-labels span{color:var(--title-color);font-weight:700}.entry-labels a:hover{text-decoration:underline}.entry-labels a:after{content:',';color:var(--meta-color)}.entry-labels a:last-child:after{display:none}.post-share{position:relative;float:left;width:100%;margin-top:1rem;padding-top:.5rem;border-top:1px solid var(--border-color)}ul.vtrick-pro-share-links{display:flex;flex-wrap:wrap;align-items:flex-start}.vtrick-pro-share-links li{width:25%}.vtrick-pro-share-links li:not(:last-child){padding:0 5px 0 0}.rtl .vtrick-pro-share-links li{padding:0 0 0 5px}.vtrick-pro-share-links li a{display:flex;width:34px;height:34px;font-size:16px;color:#fff;font-weight:400;cursor:pointer;align-items:center;justify-content:center}.vtrick-pro-share-links li.has-span a{width:auto;justify-content:flex-start}.vtrick-pro-share-links li.has-span a:before{padding:0 10px}.vtrick-pro-share-links span{font-size:14px;line-height:1}.rtl .vtrick-pro-share-links span{padding:0 10px 0 20px;border-left:0;border-right:1px solid rgba(255,255,255,.2)}.vtrick-pro-share-links li a:hover{opacity:.9}.vtrick-pro-share-links .show-hid a{background-color:var(--rgba-gray);font-size:20px;color:rgba(155,155,155,.8)}.vtrick-pro-share-links .show-hid a:before{content:"\f4fe";font-family:bootstrap-icons;font-weight:900}.vtrick-pro-share-links .button a{width:unset}.vtrick-pro-share-links .button a:hover{background:var(--comment-bg-color)}.vtrick-pro-share-links .button a span{color:var(--comment-action-color);font-weight:700}.shareBox ul li a:before,.vtrick-pro-share-links .button a span:before{display:inline-block;font-family:bootstrap-icons;font-size:20px;font-weight:400;line-height:1;vertical-align:-.2em;margin-right:4px}.vtrick-pro-share-links .button .btn.facebook span:before{content:"\f344"}.vtrick-pro-share-links .button .btn.twitter span:before{content:"\f5ef"}.vtrick-pro-share-links .button .btn.copy span:before{content:"\f470"}.vtrick-pro-share-links #getlink{display:none;border:0;float:left}.vtrick-pro-share-links .LinkCopy{position:fixed;top:6px;right:-200px;z-index:60;font-size:90%;display:block;margin:0 auto 20px;padding:1rem 3rem;border-radius:var(--radius);background-color:rgb(0 0 0 / 90%);color:#fff;box-shadow:var(--card-shadow);line-height:20px;text-align:center;opacity:0;transition:var(--transition-4);-webkit-animation:slidein 2s ease forwards;animation:slidein 2s ease forwards}.vtrick-pro-share-links .LinkCopy.copied{opacity:1;right:10px}.vtrick-pro-share-links .button .btn.share span:before{content:"\f520";transform:scale(-1,1)}.vtrick-pro-share-links .button .btn.share label{width:100%;text-align:center;line-height:34px;cursor:pointer}.shareBlock label,.shareBlock label span{cursor:pointer}.shareBox a.telegram:before{content:"\f5b3";color:#179cde}.shareBox a.whatsapp:before{content:"\f618";color:#3fbb50}.shareBox a.linkedin:before{content:"\f472";color:#0077b5}.shareBox a.reddit:before{content:"\f650";color:#ff5700}.shareBox a.email:before{content:"\f42c";color:#1a73e8}.shareBox a.pinterest svg{color:#ca2127}.shareBox a.tumblr svg{background-color:#365069;color:#fff;border-radius:100%}.show-hidden .show-hid a:before{content:"\f2ea"}.vtrick-pro-share-links li.linkedin,.vtrick-pro-share-links li.reddit,.vtrick-pro-share-links li.telegram,.vtrick-pro-share-links li.tumblr{display:none}.show-hidden li.linkedin,.show-hidden li.reddit,.show-hidden li.telegram,.show-hidden li.tumblr{display:inline-block}.about-author{position:relative;float:left;width:100%;background-color:var(--widget-bg);display:flex;padding:16px;margin:30px 0 0;border:1px solid var(--border-color);border-radius:var(--radius)}.about-author .author-avatar-wrap{width:60px;height:60px;margin:0 15px 0 0;border-radius:50%;box-shadow:var(--avatar-shadow)}.rtl .about-author .author-avatar-wrap{margin:0 0 0 15px}.about-author .author-title{display:block;font-family:var(--title-font);font-size:16px;color:var(--title-color);font-weight:700;margin:0 0 10px}.about-author .author-title a{color:var(--title-color)}.about-author .author-title a:hover{color:var(--title-hover-color)}.author-description{display:flex;flex-direction:column;flex:1}.author-description .author-text{display:block;font-size:14px;color:var(--text-color);line-height:1.6em;font-weight:400}.author-description .author-text a,.author-description .author-text br{display:none}ul.author-links{display:flex;flex-wrap:wrap;padding:0}.author-links li{margin:10px 12px 0 0}.rtl .author-links li{margin:10px 0 0 12px}.author-links li a{display:block;font-size:14px;color:var(--text-color);padding:0}.author-links li a:hover{opacity:.9}#related-wrap .related-tag,#vtrick-pro-related-posts{display:none}#related-wrap,.vtrick-pro-related-content{position:relative;float:left;width:100%}#related-wrap{margin:30px 0 0}#related-wrap .title-wrap>.title:before{content:"\f196";font-family:bootstrap-icons;font-weight:400;font-size:inherit;line-height:1;margin:0 4px 0 0}.vtrick-pro-related-content .loader{height:200px}.related-posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));grid-gap:1rem}.related-item{position:relative;background-color:var(--post-card-bg);display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border-color);border-radius:var(--radius);box-shadow:0 0 30px 12px var(--border-color)}.related-item .entry-image-wrap{width:100%;border-radius:var(--radius) var(--radius) 0 0;margin:10px;width:calc(100% - 20px);border-radius:5px}.related-item .entry-header{padding:0 10px 10px}.related-item .entry-title{font-size:15px}.related-posts .entry-header{display:flex;flex:1;flex-direction:column}.related-posts .entry-header .entry-meta{margin-block-start:auto}.related-posts .cmt-count,.sidebar .cmt-count{margin-left:auto}

/*! Comments */
.vtrick-pro-blog-post-comments{display:none;float:left;width:100%;margin:30px 0 0}.vtrick-pro-blog-post-comments .title-wrap>.title{position:relative;float:left;line-height:1.5}.vtrick-pro-blog-post-comments .title-wrap>.title:before{content:"";position:absolute;top:100%;left:0;width:100%;height:3px;border-radius:2px;background:var(--grd-bg)}.vtrick-pro-blog-post-comments .title-wrap>.title:after{content:"\f268";font-size:16px;margin:0 0 0 4px;transform:Scale(-1,1)}.comments-system-disqus,.comments-system-facebook{margin:20px 0 0}.vtrick-pro-blog-post-comments .fb_iframe_widget_fluid_desktop{float:left;display:block!important;width:calc(100% + 16px)!important;max-width:calc(100% + 16px)!important;margin:0 -8px}.vtrick-pro-blog-post-comments .fb_iframe_widget_fluid_desktop iframe,.vtrick-pro-blog-post-comments .fb_iframe_widget_fluid_desktop span{float:left;display:block!important;width:100%!important}#comments,#disqus_thread{position:relative;float:left;width:100%;display:block;clear:both}#disqus_thread,.fb-comments{padding:0}.comments-system-blogger .comments-title{display:block}.comments-system-facebook{background:#fff;padding:20px;border-radius:var(--box-radius);box-shadow:var(--box-shadow)}.comments .comments-content{float:left;width:100%;margin:0}.comments .comment-content{display:block;font-family:var(--text-font);font-size:$(itempost.comment.size);color:var(--comment-color);line-height:1.6em;margin:4px 0 0}.comments .comment-content>a:hover{text-decoration:underline}.comment-thread .comment{position:relative;list-style:none;padding:0;margin:0}.comment-thread .comment .comment{border:unset;padding:0 0 0 20px}.comment-thread ol{padding:0 0 0 15px;margin:0;border-left:1px solid rgba(155,155,155,.2)}.top-comment-wrap{border-radius:var(--box-radius);background:var(--content-bg);padding:20px;box-shadow:var(--box-shadow)}#top-ra{display:flex;flex-direction:column;border:unset;padding:0}.toplevel-thread ol>li:first-child{margin:0}.toplevel-thread ol>li>.comment-block{margin:0 0 0 48px;padding:.6rem 1rem 1rem;border-radius:var(--border-radius);background:var(--comment-bg-color)}.comment-replies .comment .comment-block{margin-left:30px}.comments .comment-replybox-single iframe{background:var(--comment-bg-color);padding:0 1rem;border-radius:var(--border-radius)}.comment-replybox-single{margin-left:30px}#comment-holder .loadmore{text-align:center}#comment-holder .loadmore a{display:inline-block;padding:10px 2rem;background:var(--comment-bg-color);font-size:14px;font-weight:700;color:var(--comment-action-color);border-radius:20px}#top-ra>li>.comment-replybox-single{margin-left:48px}.rtl .comment-thread ol ol .comment:before{content:'\f3be';left:unset;right:-25px}.comments .comment-replybox-single iframe{background:var(--comment-bg-color);padding:0 1rem;border-radius:var(--border-radius)}.comments .comment-replybox-single{margin-left:30px}.rtl .comments .comment-replybox-single iframe{padding:0 48px 0 0}.comment-thread .avatar-image-container{position:absolute;top:0;left:0;width:35px;height:35px;overflow:hidden;border-radius:50%;box-shadow:var(--avatar-shadow)}.rtl .comment-thread .avatar-image-container{left:auto;right:16px}.avatar-image-container img{width:100%;height:100%}.comments .comment-header{display:flex}.rtl .comments .comment-header{padding:0 48px 0 0}.comments .comment-header .user{display:inline-block;font-family:var(--title-font);font-size:13px;color:var(--title-color);font-style:normal;font-weight:600;margin-right:.8rem}.comments .comment-header .user a{color:var(--comment-color)}.comments .comment-header .user a:hover{color:var(--title-hover-color)}.comments .comment-header .icon.user{display:none}.comments .comment-header .icon.blog-author{display:inline-block;font-size:13px;color:#2d88ff;font-weight:400;vertical-align:top;margin:0 0 0 4px}.rtl .comments .comment-header .icon.blog-author{margin:-5px 4px 0 0}.comments .comment-header .icon.blog-author:before{content:"\f26a";font-family:bootstrap-icons;font-weight:400}.comments .comment-header .datetime{display:block;margin:0}.comments .comment-actions .datetime a{font-family:var(--meta-font);font-size:11px;color:var(--meta-color);font-weight:400;padding:0}.comments .comment-actions{display:block;margin:0 0 5px calc(48px + 1rem)}.comment-replies .comment .comment-actions{margin:0 0 5px calc(30px + 1rem)}.comments .comment-actions a{display:inline-block;font-size:12px;color:var(--comment-action-color);font-weight:700;font-style:normal;padding:0;margin:0}.comments .comment-actions .blog-admin:after,.comments .comment-actions .comment-reply:after{content:'\00B7';padding:0 .4rem}.rtl .comments .comment-actions a{margin:0 0 0 15px}.comments .comment-actions a:hover{color:var(--title-color)}.cancel-reply{margin-left:1rem}.cancel-reply .cancel-button{display:block;background:0 0;border:none;padding:0;margin:5px 0 10px;font-size:12px;color:var(--comment-action-color);font-weight:700;cursor:pointer}.item-control{display:none}.loadmore.loaded a{display:inline-block;border-bottom:1px solid rgba(155,155,155,.51);text-decoration:none;margin-top:15px}.comments .comment-replies{padding:0 0 0 48px}.comments .comment-replies .comment-replies{padding:0 0 0 30px}.rtl .comments .comment-replies{padding:0 48px 0 0}.thread-expanded .thread-count a{display:none}.comments .footer{float:left;width:100%;font-size:13px;margin:0}.comment-form{float:left;width:100%;margin:0}p.comments-message{display:block;float:left;width:100%;font-size:13px;color:var(--meta-color);font-style:italic;margin:0 0 16px}p.comments-message.no-new-comments{padding:0;margin:0;border:0}p.comments-message>a{color:var(--main-color)}p.comments-message>a:hover{color:var(--title-color)}p.comments-message>em{color:#ff3f34;font-style:normal;margin:0 3px}#comments[data-embed=false] p.comments-message>i{color:var(--main-color);font-style:normal}.comment-form>p{display:none}.comment-content .responsive-video-wrap{position:relative;width:100%;padding:0;padding-top:56%}.comment-content .responsive-video-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%}.comments #top-ce.comment-replybox-thread,.comments.no-comments .comment-form{padding:10px 20px;margin:0 0 2rem;background:var(--comment-bg-color);border:1px solid var(--border-color);border-radius:var(--box-radius)}.comment-thread>.comment-replybox-thread,.comments #top-ce.comment-replybox-thread{background:var(--content-bg);box-shadow:var(--box-shadow)}.comments .comment-replybox-thread .cancel-reply{margin:0}.comment-thread>.comment-replybox-thread{padding:10px 20px;margin:2rem 0 0;border-radius:var(--box-radius);box-shadow:var(--box-shadow)}.comments.no-comments .comment-form{background:var(--content-bg);box-shadow:var(--box-shadow);margin:0}.comments #top-continue a{display:block;width:100%;max-width:300px;height:38px;background-color:var(--button-bg);font-size:14px;color:var(--button-color);font-weight:700;line-height:38px;text-align:center;padding:0;margin:calc(var(--gap)/2) auto 0;border-radius:var(--radius)}.comments #top-continue a:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.comment-control{display:flex;margin-bottom:.5rem}.comment-control .commentSort{margin-left:auto}#comment-holder .comment-control .loadmore a{display:none;background:0 0;padding:0;margin:0;color:var(--comment-action-color)}#comment-holder .comment-control.top .loadmore a{display:block}#comment-holder .comment-control.top .loadmore a.hidden,#comment-holder .loadmore a.hidden{display:none}#comment-holder .loadmore a:after{content:"\f112";font-family:bootstrap-icons;vertical-align:-.125em;margin-left:4px}#comment-holder .comment-control.top .loadmore a:after{content:"\f115"}.comment-control .sort-label{cursor:pointer}.comment-control .sort-label:before{content:attr(data-first)}.comment-control.top .sort-label:before{content:attr(data-last)}.comment-control .sort-label:after{content:"\f575";font-family:bootstrap-icons;vertical-align:-.125em;margin-left:4px}.comment-control.top .sort-label:after{content:"\f57a"}.thirdlevel-thread .comment:not(:last-child) .comment-actions .comment-reply{display:none}

/*! Sidebar and Nav */
.post-nav{float:left;width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;font-size:14px;font-weight:400;margin:30px 0 0}.post-nav a,.post-nav span{display:flex;align-items:center;color:var(--meta-color)}.post-nav a:hover{color:var(--main-color)}.post-nav span{color:var(--meta-color);cursor:no-drop;opacity:.65}.post-nav-newer-link:before,.rtl .post-nav-older-link:after{content:"\f284";font-family:bootstrap-icons;font-size:9px;font-weight:900;margin:1px 4px 0 0}.post-nav-older-link:after,.rtl .post-nav-newer-link:before{content:"\f285";font-family:bootstrap-icons;font-size:9px;font-weight:900;margin:1px 0 0 4px}#custom-ads,#vtrick-pro-post-footer-ads{position:relative;float:left;width:100%;opacity:0;visibility:hidden;padding:0;margin:0;border:0}#after-ad,#before-ad{float:left;width:100%;margin:0}#after-ad .widget>.widget-title,#before-ad .widget>.widget-title{display:block}#after-ad .widget>.widget-title>.title,#before-ad .widget>.widget-title>.title{font-size:10px;color:var(--meta-color);font-weight:400;line-height:1;margin:0 0 6px}#after-ad .widget,#before-ad .widget{width:100%;margin:0 0 25px}#after-ad .widget{margin:25px 0 0}#after-ad .widget-content,#before-ad .widget-content{position:relative;width:100%}#vtrick-pro-new-after-ad #after-ad,#vtrick-pro-new-before-ad #before-ad{float:none;display:block;margin:0}#vtrick-pro-new-after-ad #after-ad .widget,#vtrick-pro-new-before-ad #before-ad .widget{margin:0}#post-footer-ads{position:relative;float:left;width:100%;padding:0;margin:30px 0 0}#post-footer-ads .widget,#post-footer-ads .widget-content{float:left;width:100%}#blog-pager{position:relative;float:left;width:100%;display:flex;justify-content:center}#blog-pager.no-blog-posts{display:none}#blog-pager .load-more{position:relative;display:flex;height:34px;background-color:var(--button-bg);font-size:14px;color:var(--button-color);align-items:center;cursor:pointer;padding:0 30px}#blog-pager #vtrick-pro-load-more-link:after{content:"\f130";display:inline-block;font-family:bootstrap-icons;font-size:14px;margin:0 0 0 4px}.rtl #blog-pager #vtrick-pro-load-more-link:after{margin:0 4px 0 0}#blog-pager #vtrick-pro-load-more-link:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}#blog-pager .no-more.show{display:flex;background-color:var(--rgba-gray);color:var(--meta-color);cursor:not-allowed}#blog-pager .loading,#blog-pager .no-more{display:none}#blog-pager .loading .loader{height:34px}.sidebar{position:relative;float:left;width:100%;margin:0}.sidebar>.widget{position:relative;float:left;width:100%;background-color:var(--widget-bg);margin:0 0 30px;border:1px solid var(--border-color);border-radius:var(--radius)}.sidebar>.widget:last-child{margin:0}.sidebar .title-wrap{padding:1rem;margin:0}.sidebar .title-wrap .title:after{display:none}.sidebar .widget-content{position:relative;float:left;width:100%;padding:0 1rem 1rem}.sidebar .widget-content .entry-meta{margin-top:auto}.sidebar .widget.is-ad{background-color:transparent;border:0}.sidebar .widget.is-ad>.widget-title{display:none}.sidebar .widget.is-ad .widget-content{padding:0}.sidebar ul.social-icons{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:5px;margin:0}.sidebar .social-icons li{display:block;margin:0}.sidebar .social-icons a{position:relative;display:flex;height:34px;font-size:16px;color:#fff;font-weight:400;align-items:center}.sidebar .social-icons a:before{padding:0 10px}.sidebar .social-icons span{font-size:14px;line-height:1;padding:0 10px;border-left:1px solid rgba(255,255,255,.2)}.sidebar .contact-form-widget{padding:1rem}.rtl .sidebar .social-icons span{border-left:0;border-right:1px solid rgba(255,255,255,.2)}.sidebar .social-icons a:hover{opacity:.9}.sidebar .loader{height:180px}.default-items{display:flex;flex-direction:column}.default-items .cs{height:180px;overflow:hidden;border-radius:var(--radius)}.default-items .default-inner{position:relative;width:100%;height:100%;display:flex;flex-direction:column}.default-items .cs .entry-image-wrap{width:100%;height:100%;margin:0}.default-items .entry-header{display:flex;flex-direction:column}.default-items .cs .entry-title{font-size:18px}.default-items .cs .entry-meta{flex-wrap:wrap}.default-items .ds{display:flex;margin:20px 0 0}.default-items .ds.item-0{margin:0;flex-direction:column}.default-items .ds.item-0 .entry-image-wrap{width:100%;height:100%;margin:0 0 6px;box-shadow:var(--box-shadow-3)}.default-items .ds.item-0 .entry-header{flex-direction:column-reverse}.default-items .ds.item-0 .entry-title{margin:6px 0}.default-items .ds.item-1{margin:10px 0 0}.default-items .ds .entry-image-wrap{width:100px;height:56.25px;z-index:1;margin:0 12px 0 0;border-radius:var(--radius)}.rtl .default-items .ds .entry-image-wrap{margin:0 0 0 12px}.default-items .ds .entry-image-wrap.is-video:after{transform:translate(50%,-50%) scale(.7)}.default-items .ds .entry-header{flex:1}.default-items .ds .entry-title{font-size:14px}.mini-items{position:relative;float:left;width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px}.mini-item{position:relative;display:flex;flex-direction:column}.mini-item .entry-image-wrap{width:100%;margin:0 0 8px;border-radius:var(--radius)}.mini-item .entry-image-wrap.is-video:after{transform:translate(50%,-50%) scale(.85)}.mini-item .entry-title{font-size:13px;font-weight:500}.cmm1-items{display:flex;flex-direction:column}.cmm1-items .cmm1-item{position:relative;width:100%;padding:1rem 0 0;margin:1rem 0 0;border-top:1px solid var(--border-color)}.cmm1-items .cmm1-item.item-0{padding:0;margin:0;border:0}.cmm1-items .entry-inner{display:flex}.cmm1-items .entry-image-wrap{width:30px;height:30px;z-index:1;margin:0 12px 0 0;border-radius:50%;box-shadow:var(--avatar-shadow)}.rtl .cmm1-items .entry-image-wrap{margin:0 0 0 12px}.cmm1-items .entry-header{position:relative;flex:1;padding:.5rem;background:var(--comment-bg-color);border-radius:var(--box-radius)}.cmm1-items .entry-header:before{content:'';position:absolute;left:-10px;top:14px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid var(--comment-bg-color);transform:translatey(-50%) rotate(-90deg)}.cmm1-items .entry-title{font-size:12px}.cmm1-items .entry-inner:hover .entry-title{color:var(--post-title-hover-color)}.cmm1-items .cmm-snippet{font-size:12px;color:var(--text-color);margin:4px 0 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.FeaturedPost .featured-post{position:relative;width:100%;height:160px}.FeaturedPost .fp-inner{position:relative;width:100%;height:100%;display:flex;flex-direction:column;z-index:11;overflow:hidden;border-radius:var(--radius)}.featured-post .entry-image-wrap{width:100%;height:100%;z-index:1;margin:0}.featured-post .entry-title{font-size:17px}.featured-post .entry-meta{flex-wrap:wrap}.FollowByEmail .follow-by-email-title{display:block;font-family:var(--title-font);font-size:16px;color:var(--widget-title-color);margin:0 0 10px}.FollowByEmail .follow-by-email-text{display:block;font-size:14px;margin:0 0 15px}.FollowByEmail .follow-by-email-address{width:100%;height:34px;background-color:var(--rgba-gray);font-family:inherit;font-size:14px;color:var(--text-color);padding:0 13px;margin:0 0 10px;border:0;border-radius:var(--radius)}.FollowByEmail .follow-by-email-address::placeholder{color:var(--text-color);opacity:.75}.FollowByEmail .follow-by-email-address:focus{background-color:var(--widget-bg);box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2)}.is-dark .FollowByEmail .follow-by-email-address:focus{background-color:var(--rgba-gray)}.FollowByEmail .follow-by-email-submit{width:100%;height:34px;background-color:var(--button-bg);font-family:inherit;font-size:14px;color:var(--button-color);font-weight:400;cursor:pointer;padding:0 20px;border:0;border-radius:var(--radius)}.FollowByEmail .follow-by-email-submit:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.section .list-style li{position:relative;display:block;font-size:14px;color:var(--title-color);font-weight:400}.section .list-style li a{display:block;color:var(--title-color);padding:8px 0}.section .list-style li a.has-count{display:flex;justify-content:space-between}.section .list-style li:first-child a,.section .text-list li:first-child{padding:0 0 8px}.section .list-style li:last-child a,.section .text-list li:last-child{padding:8px 0 0}.section .list-style li a:hover{color:var(--title-hover-color)}.section .list-style li a span{display:inline-block;color:var(--main-color)}.section .text-list li{padding:8px 0}.cloud-label ul{display:flex;flex-wrap:wrap;margin:-6px 0 0}.cloud-label li{margin:6px 5px 0 0}.rtl .cloud-label li{margin:6px 0 0 5px}.cloud-label li a{display:flex;height:29px;color:var(--comment-action-color);background:var(--comment-bg-color);font-size:13px;line-height:28px;font-weight:400;padding:0 11px}.cloud-label li a:hover{background-color:var(--button-bg);color:var(--button-color);border-color:var(--button-bg)}.cloud-label .label-count{display:inline-block;margin:0 0 0 10px}.rtl .cloud-label .label-count{margin:0 10px 0 0}.search-widget .search-form{float:left;width:100%;display:flex;margin:0}.search-widget .search-input{display:inline-block;flex:1;width:100%;height:34px;background-color:var(--rgba-gray);font-family:inherit;font-weight:400;font-size:14px;color:var(--text-color);padding:0 13px;margin:0;border:0;border-radius:var(--radius)}.search-widget .search-input::placeholder{color:var(--text-color);opacity:.9}.search-widget .search-input:focus{background-color:var(--widget-bg);box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2)}.is-dark .search-widget .search-input:focus{background-color:var(--rgba-gray)}.search-widget .search-action{display:inline-block;width:36px;height:34px;background-color:var(--button-bg);font-family:inherit;font-size:14px;color:var(--button-color);font-weight:400;line-height:34px;cursor:pointer;padding:0;margin:0 0 0 5px;border:0;border-radius:var(--radius)}.rtl .search-widget .search-action{margin:0 5px 0 0}.search-widget .search-action:before{display:block;content:"\f52a";font-family:'Font Awesome 5 Free';font-weight:900}.search-widget .search-action:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.Profile ul li{float:left;width:100%;padding:20px 0 0;margin:20px 0 0;border-top:1px solid var(--border-color)}.Profile ul li:first-child{padding:0;margin:0;border:0}.Profile .individual,.Profile .team-member{display:flex}.Profile .profile-img{width:35px;height:35px;background-color:var(--rgba-gray);overflow:hidden;color:transparent!important;margin:0 12px 0 0;border-radius:50%;box-shadow:var(--avatar-shadow)}.rtl .Profile .profile-img{margin:0 0 0 12px}.Profile .profile-info{flex:1}.Profile .profile-name{display:block;font-family:var(--title-font);font-size:15px;color:var(--title-color);font-weight:700;margin:0}.Profile .profile-name:hover{color:var(--title-hover-color)}.Profile .profile-link{display:block;font-size:12px;color:var(--meta-color);font-weight:400;margin:0}.Profile .profile-link:hover{color:var(--main-color)}.Text .widget-content{font-family:var(--text-font);font-size:14px;color:var(--text-color);margin:0}.Image .image-caption{display:block;font-size:14px;color:var(--text-color);margin:6px 0 0}.contact-form-widget form{font-family:inherit;font-weight:400}.contact-form-name{float:left;width:100%;height:34px;background-color:var(--rgba-gray);font-family:inherit;font-size:14px;color:var(--text-color);line-height:34px;padding:0 15px;margin:0 0 10px;border:0;border-radius:var(--radius)}.contact-form-email{float:left;width:100%;height:34px;background-color:var(--rgba-gray);font-family:inherit;font-size:14px;color:var(--text-color);line-height:34px;padding:0 15px;margin:0 0 10px;border:0;border-radius:var(--radius)}.contact-form-email.error{border-color:var(--main-color)}.contact-form-email-message{float:left;width:100%;background-color:var(--rgba-gray);font-family:inherit;font-size:14px;color:var(--text-color);padding:10px 15px;margin:0 0 10px;border:0;border-radius:var(--radius)}.contact-form-email-message.error{border-color:var(--main-color)}.contact-form-button-submit{float:left;width:100%;height:34px;background-color:var(--button-bg);font-family:inherit;font-size:14px;color:var(--button-color);font-weight:700;cursor:pointer;padding:0 20px;border:0;border-radius:var(--radius);margin-bottom:1rem}.contact-form-button-submit:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.contact-form-widget p{margin:0}.contact-form-widget p.contact-form-error-message-with-border,p.contact-form-success-message-with-border{float:left;width:100%;background-color:rgba(0,0,0,0);font-size:13px;color:#e74c3c;text-align:left;line-height:1;padding:0;margin:10px 0 0;border:0}.contact-form-widget .contact-form-success-message-with-border{color:#27ae60}.rtl .contact-form-error-message-with-border,.rtl .contact-form-success-message-with-border{text-align:right}.contact-form-cross{cursor:pointer;margin:0 0 0 3px}.rtl .contact-form-cross{margin:0 3px 0 0}.contact-form-email-message::placeholder,.contact-form-email::placeholder,.contact-form-name::placeholder{color:var(--text-color);opacity:.9}.contact-form-widget .cf-s:focus{background-color:var(--widget-bg);box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2)}.is-dark .contact-form-widget .cf-s:focus{background-color:var(--rgba-gray)}.Attribution a{font-size:14px;line-height:16px;display:block}.Attribution a>svg{width:16px;height:16px;float:left;margin:0 4px 0 0}.Attribution .copyright{font-size:12px;color:var(--meta-color);padding:0 20px;margin:3px 0 0}#google_translate_element{position:relative;float:left;width:100%;padding:20px;margin:0}.Stats .text-counter-wrapper{display:flex;align-items:center;font-size:20px;color:var(--title-color);font-weight:700;text-transform:uppercase;line-height:1;margin:0}.Stats .text-counter-wrapper:before{content:'\f201';font-family:'Font Awesome 5 Free';font-size:18px;color:var(--main-color);font-weight:900;margin:1px 4px 0 0}.rtl .Stats .text-counter-wrapper:before{margin:1px 0 0 4px}.sidebar>.widget.ReportAbuse{display:block;padding:15px 20px;border:1px solid var(--border-color);border-radius:var(--radius)}.ReportAbuse>h3{display:flex;float:left;width:100%;font-size:14px;font-weight:400;margin:0}.ReportAbuse>h3:before{content:'\f071';font-family:'Font Awesome 5 Free';color:var(--title-color);font-weight:900;margin:0 4px 0 0}.rtl .ReportAbuse>h3:before{margin:0 0 0 4px}.ReportAbuse>h3 a:hover{text-decoration:underline}

/*! Footer */
#footer-ads-wrap,.footer-ads .widget,.footer-ads .widget-content{position:relative;float:left;width:100%;margin:0}.footer-ads .widget{margin:0 0 1rem}.footer-ads .widget>.widget-title{display:none}#footer-wrapper{position:relative;float:left;width:100%;background-color:var(--footer-bg);color:var(--footer-color)}#footer-wrapper .primary-footer{position:relative;float:left;width:100%;border-top:1px solid var(--border-color)}.primary-footer.no-widget{display:none}#vtrick-pro-about-section,#vtrick-pro-col2-section,#vtrick-pro-col3-section{position:relative;flex-direction:column;display:flex;flex-wrap:wrap;padding:0;margin:0;min-width:20%}#vtrick-pro-col2-section .widget:not(:first-child),#vtrick-pro-col3-section .widget:not(:first-child){margin-top:2rem}.footer-info{flex:1}#footer-3col{display:flex;justify-content:space-between;padding:var(--gap)}#footer-3col>div:not(:last-child){margin-right:1rem}#footer-3col .widget-title h3{margin-bottom:.8rem;font-family:var(--text-font);font-weight:500;text-transform:uppercase;letter-spacing:1px}#footer-3col .widget-content ul li:not(:first-child){padding:8px 0 0}.vtrick-pro-about-section .Image{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:0;margin-bottom:1rem}.vtrick-pro-about-section .footer-logo{align-self:flex-start;padding:0;margin-bottom:.5rem}.rtl .vtrick-pro-about-section .footer-logo{padding:0 0 0 25px}.vtrick-pro-about-section .footer-logo img{display:block;max-height:34px;margin:0}.vtrick-pro-about-section .Image .image-caption{font-size:14px;color:var(--footer-color);max-width:50ch;margin:0}.vtrick-pro-about-section .Image .image-caption a{color:var(--footer-color)}.vtrick-pro-about-section .Image .image-caption a:hover{color:var(--footer-hover-color)}.vtrick-pro-about-section .LinkList{width:$(sidebar.width);display:flex;align-items:center;margin:0}.vtrick-pro-about-section ul.social-icons{display:flex;flex-wrap:wrap}.vtrick-pro-about-section .social-icons li:not(:first-child){margin:0 0 0 10px}.rtl .vtrick-pro-about-section .social-icons li{margin:0 10px 0 0}.vtrick-pro-about-section .social-icons li a{display:flex;width:34px;height:34px;background-color:rgb(255 255 255 / 15%);font-size:16px;color:var(--footer-color);align-items:center;justify-content:center}.vtrick-pro-about-section .social-icons li a:hover{color:#fff}.footerbar{position:relative;float:left;width:100%;background-color:var(--footerbar-bg);color:var(--footerbar-color);padding:20px var(--gap);border-top:1px solid var(--border-color)}.footerbar .container{display:flex;flex-wrap:wrap;justify-content:space-between}.footerbar .footer-copyright{font-size:14px;font-weight:400;margin:0}.footerbar .footer-copyright a{color:var(--footerbar-color)}.footerbar .footer-copyright a:hover{color:var(--footerbar-hover-color)}.footerbar .footer-copyright .designed{margin-left:4px;opacity:1;font-size:inherit}#footer-menu{position:relative;display:block;margin:0}.footer-menu ul{display:flex;flex-wrap:wrap}.footer-menu ul li a{font-size:14px;color:var(--footerbar-color);padding:0;margin:0 0 0 25px}.rtl .footer-menu ul li a{margin:0 25px 0 0}#footer-menu ul li a:hover{color:var(--footerbar-hover-color)}#hidden-widgets-wrap,.hidden-widgets{display:none;visibility:hidden}#back-top{display:none;position:fixed;bottom:20px;right:6px;width:36px;height:36px;background-color:#fff;cursor:pointer;overflow:hidden;font-size:15px;color:var(--accent);text-align:center;border-radius:36px;line-height:36px;z-index:50;margin:0;transition:background .17s ease,color .17s ease;box-shadow:0 2px 4px rgb(0 0 0 / 25%)}.on-footer{position:absolute!important;top:-16px}.rtl #back-top{right:auto;left:20px}#back-top:before{content:"\f286";position:relative;font-family:bootstrap-icons;font-weight:900}#back-top:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}

/* VTrick CTA */
ul.cta-containter{display:block;position:fixed;z-index:50;width:40px;bottom:18px;right:4px}#vtrick-pro-cta1-section>div>ul.cta-containter{left:4px;bottom:14px}ul.cta-containter>li{padding:2px}ul.cta-containter>li:not(:first-child){margin-top:10px}ul.cta-containter>li>a{display:block;width:36px;height:36px;background-color:#fff;border-radius:36px;overflow:hidden;box-shadow:0 2px 4px rgb(0 0 0 / 25%);background-image:url(data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjQsMjJhMSwxLDAsMCwxLS42NC0uMjNMMTguODQsMThIMTdBOCw4LDAsMCwxLDE3LDJoNmE4LDgsMCwwLDEsMiwxNS43NFYyMWExLDEsMCwwLDEtLjU4LjkxQTEsMSwwLDAsMSwyNCwyMlpNMTcsNGE2LDYsMCwwLDAsMCwxMmgyLjJhMSwxLDAsMCwxLC42NC4yM0wyMywxOC44NlYxNi45MmExLDEsMCwwLDEsLjg2LTFBNiw2LDAsMCwwLDIzLDRaIj48L3BhdGg+PHJlY3QgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMTkiIHk9IjkiPjwvcmVjdD48cmVjdCBoZWlnaHQ9IjIiIHdpZHRoPSIyIiB4PSIxNCIgeT0iOSI+PC9yZWN0PjxyZWN0IGhlaWdodD0iMiIgd2lkdGg9IjIiIHg9IjI0IiB5PSI5Ij48L3JlY3Q+PHBhdGggZD0iTTgsMzBhMSwxLDAsMCwxLS40Mi0uMDlBMSwxLDAsMCwxLDcsMjlWMjUuNzRhOCw4LDAsMCwxLTEuMjgtMTUsMSwxLDAsMSwxLC44MiwxLjgyLDYsNiwwLDAsMCwxLjYsMTEuNCwxLDEsMCwwLDEsLjg2LDF2MS45NGwzLjE2LTIuNjNBMSwxLDAsMCwxLDEyLjgsMjRIMTVhNS45NCw1Ljk0LDAsMCwwLDQuMjktMS44MiwxLDEsMCwwLDEsMS40NCwxLjRBOCw4LDAsMCwxLDE1LDI2SDEzLjE2TDguNjQsMjkuNzdBMSwxLDAsMCwxLDgsMzBaIj48L3BhdGg+PC9zdmc+DQo8IS0tPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2hhdC1kb3RzIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNNSA4YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMHptNCAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMHptMyAxYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnoiLz4NCiAgPHBhdGggZD0ibTIuMTY1IDE1LjgwMy4wMi0uMDA0YzEuODMtLjM2MyAyLjk0OC0uODQyIDMuNDY4LTEuMTA1QTkuMDYgOS4wNiAwIDAgMCA4IDE1YzQuNDE4IDAgOC0zLjEzNCA4LTdzLTMuNTgyLTctOC03LTggMy4xMzQtOCA3YzAgMS43Ni43NDMgMy4zNyAxLjk3IDQuNmExMC40MzcgMTAuNDM3IDAgMCAxLS41MjQgMi4zMThsLS4wMDMuMDExYTEwLjcyMiAxMC43MjIgMCAwIDEtLjI0NC42MzdjLS4wNzkuMTg2LjA3NC4zOTQuMjczLjM2MmEyMS42NzMgMjEuNjczIDAgMCAwIC42OTMtLjEyNXptLjgtMy4xMDhhMSAxIDAgMCAwLS4yODctLjgwMUMxLjYxOCAxMC44MyAxIDkuNDY4IDEgOGMwLTMuMTkyIDMuMDA0LTYgNy02czcgMi44MDggNyA2YzAgMy4xOTMtMy4wMDQgNi03IDZhOC4wNiA4LjA2IDAgMCAxLTIuMDg4LS4yNzIgMSAxIDAgMCAwLS43MTEuMDc0Yy0uMzg3LjE5Ni0xLjI0LjU3LTIuNjM0Ljg5M2ExMC45NyAxMC45NyAwIDAgMCAuMzk4LTJ6Ii8+DQo8L3N2Zz4tLT4=);background-position:50%;background-repeat:no-repeat}ul.cta-containter>li>a.messenger{background-image:url(https://1.bp.blogspot.com/-ICguebZnUe4/YMdxT578EuI/AAAAAAAAEhg/frlSaIRNUTwlXgY_Ft7ZQDicVAd2lzAqgCNcBGAsYHQ/s0/messenger.png);background-size:34px}ul.cta-containter>li>a.wechat{background-image:url(https://1.bp.blogspot.com/-G0QPz5f64G4/YOVZ3sdbnKI/AAAAAAAAEpA/9Tz877bfZYkvdRh1EESNrn6j4t5X3xLIQCNcBGAsYHQ/s36/wechat.png);background-color:#1ab26e;background-size:28px}ul.cta-containter>li>a.whatsapp{background-image:url(https://1.bp.blogspot.com/-J37ImVXZ0a0/YOVdvvVWzjI/AAAAAAAAEpQ/7Zl8RS92sXk9dAuBVLJIIEfW7e6NXWhxwCNcBGAsYHQ/s36-cc/whatsapp-logo.png);background-color:#25d366;background-size:34px}ul.cta-containter>li>a.telegram{background-image:url(https://1.bp.blogspot.com/-rpl8buENyXo/YOVfFWI4dCI/AAAAAAAAEpY/_IvOfD30HsY745UFLS7deaBMMb9-KF0RQCNcBGAsYHQ/s40/telegram.png);background-size:32px}ul.cta-containter>li>a.zalo{background-color:#0068ff;background-image:url(https://1.bp.blogspot.com/-WfYtm6mmL2E/YMdxSfoSEII/AAAAAAAAEhc/9WoJMLNqpUw2jth4nWyRh6P50OAOJAPzACNcBGAsYHQ/s0/zalo.png);background-size:36px;background-position:4px -4px}ul.cta-containter>li>a.call{background-image:url(https://1.bp.blogspot.com/-wqw_kAGSmpg/YMdxZ_FoPHI/AAAAAAAAEhk/rdDr_yMy5ZURvvAn5cGGKMkafqlel1hqQCNcBGAsYHQ/s0/calling.gif);background-size:36px}

/*! Others */
.is-error #main-wrapper{width:100%}.is-error #sidebar-wrapper{display:none}.errorWrap{color:var(--title-color);text-align:center;padding:60px 0}.errorWrap h3{font-size:160px;color:var(--title-color);line-height:1;margin:0 0 25px}.errorWrap h4{font-size:27px;color:var(--title-color);margin:0 0 25px}.errorWrap p{color:var(--text-color);font-size:14px;margin:0 0 15px}.errorWrap a{display:inline-block;height:34px;background-color:var(--button-bg);font-size:14px;color:var(--button-color);font-weight:400;line-height:34px;padding:0 30px;margin:15px 0 0;border-radius:var(--radius)}.errorWrap a:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.cookie-choices-info{display:none;visibility:hidden;opacity:0}#vtrick-pro-cookie-ify{display:none;position:fixed;bottom:20px;left:20px;width:300px;background-color:var(--cookie-bg);z-index:1020;padding:16px;visibility:hidden;opacity:0;border:1px solid var(--border-color);border-radius:var(--radius);box-shadow:0 1px 8px rgba(0,0,0,.1);transition:all .35s ease,background 0s ease}.rtl #vtrick-pro-cookie-ify{left:unset;right:20px}#vtrick-pro-cookie-ify.is-visible{visibility:visible;opacity:1}.vtrick-pro-cookie-ify-content{display:block;font-size:14px;color:var(--cookie-color);margin:0 0 15px}.vtrick-pro-cookie-ify-content a{color:var(--cookie-color);text-decoration:underline}.vtrick-pro-cookie-ify-content a:hover{color:var(--main-color)}#vtrick-pro-cookie-ify-accept{display:inline-block;height:34px;background-color:var(--button-bg);font-size:14px;color:var(--button-color);font-weight:400;line-height:34px;padding:0 20px}#vtrick-pro-cookie-ify-accept:hover{background-color:var(--button-hover-bg);color:var(--button-hover-color)}.hidden,.replaced{display:none}ins.adsbygoogle-noablate[data-anchor-shown=true]{z-index:990!important}a.ads-here{position:relative;display:flex;align-items:center;justify-content:center;height:78px;background-color:var(--rgba-gray);font-size:15px;color:rgba(155,155,155,.5);font-weight:500;font-style:italic;border:1px solid var(--border-color);border-radius:var(--radius)}.is-dark a.ads-here{background-color:var(--widget-bg)}.sidebar a.ads-here{height:250px}a.ads-here:hover{color:rgba(155,155,155,.65)}

/* SHARE Button */
.shareIn:checked~.cta-containter{display:none}.fullClose{display:block;position:fixed;top:0;left:0;right:0;bottom:0;z-index:2;transition:var(--transition-1);background:0 0;opacity:0;visibility:hidden}.shareInner{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;z-index:20;transition:var(--transition-1);opacity:0;visibility:hidden}.shareBlock{width:100%;max-width:500px;max-height:90%;display:flex;margin:0 auto -100%;background-color:var(--body-bg-color);border-radius:var(--box-radius);transition:inherit;z-index:3;overflow:hidden;position:relative;box-shadow:var(--box-shadow-4)}.shareBox{padding-top:45px;max-height:100%;width:100%;overflow-y:auto}.shareHeader{padding:1rem;color:var(--title-color);font-weight:700;background-color:inherit;display:flex;align-items:center;position:absolute;top:0;left:0;right:0;z-index:1}.shareHeader:before,.sharePreview .previewLabel>:before,.sharePreview .previewTitle:before{content:attr(data-text)}.shareHeader label{margin-left:auto;display:flex;align-items:center;font-size:12px}.shareHeader label svg.line{width:20px;height:20px;stroke-width:1}.shareHeader label:before{content:"Close";opacity:.7;padding-right:8px}.sharePreview{padding:1rem;background:var(--comment-bg-color);border-left:0;border-right:0;display:flex}.sharePreview .previewImg{width:120px;height:70px;display:flex;flex-shrink:0;align-items:center;justify-content:center;background-color:var(--transparent-bg);background-size:cover;background-position:center;background-repeat:no-repeat;border-radius:5px;margin-right:1rem}.sharePreview .previewImg svg{stroke-width:1;opacity:.6}.sharePreview .previewTitle{font-size:13px;font-weight:700;line-height:1.5em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.sharePreview .previewLabel{font-size:12px;opacity:.7;margin-top:5px}.shareInner ul{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:10px 20px 20px}.shareInner li{width:25%;text-align:center}.shareInner li a,.shareInner li label{display:block;max-width:80px;height:80px;margin:0 auto;padding:15px 0;border-radius:var(--box-radius);color:inherit}.shareInner li a:hover,.shareInner li label:hover{background-color:var(--rgba-gray)}.shareInner li>* svg{width:20px;height:20px;vertical-align:-.2em}.shareInner li a:after,.shareInner li label:after{content:attr(data-text);display:block;margin-top:4px;font-size:12px;opacity:.7}.shareInner li input{margin:0;padding:0;outline:0;border:0;width:1px;height:0;opacity:0}.shareNotif span{position:absolute;left:0;right:0;bottom:-70px;font-size:90%;display:block;width:240px;margin:0 auto 20px;padding:15px 10px;border-radius:3px;background-color:rgba(0,0,0,.8);color:#fefefe;line-height:20px;text-align:center;opacity:0;transition:var(--transition-4);-webkit-animation:slidein 2s ease forwards;animation:slidein 2s ease forwards}.shareIn:checked~.shareInner{opacity:1;visibility:visible}.shareIn:checked~.shareInner .shareBlock{margin-bottom:0}.shareIn:checked~.shareInner .fullClose{background:rgba(0,0,0,.5);opacity:1;visibility:visible;/*-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)*/}

/* Footer Animation */
@keyframes ring{0%{transform:rotate(0)}1%{transform:rotate(30deg)}3%{transform:rotate(-28deg)}5%{transform:rotate(34deg)}7%{transform:rotate(-32deg)}9%{transform:rotate(30deg)}11%{transform:rotate(-28deg)}13%{transform:rotate(26deg)}15%{transform:rotate(-24deg)}17%{transform:rotate(22deg)}19%{transform:rotate(-20deg)}21%{transform:rotate(18deg)}23%{transform:rotate(-16deg)}25%{transform:rotate(14deg)}27%{transform:rotate(-12deg)}29%{transform:rotate(10deg)}31%{transform:rotate(-8deg)}33%{transform:rotate(6deg)}35%{transform:rotate(-4deg)}37%{transform:rotate(2deg)}39%{transform:rotate(-1deg)}41%{transform:rotate(1deg)}43%{transform:rotate(0)}100%{transform:rotate(0)}}@keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes square{0%{-webkit-transform:translateY(0) scale(2) rotate(0);transform:translateY(0) scale(2) rotate(0);opacity:1}100%{-webkit-transform:translateY(-600px) scale(0) rotate(-500deg);transform:translateY(-600px) scale(0) rotate(-500deg);opacity:0}}

/* Footer Particle */
.particle{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;-webkit-transform:translateZ(0);transform:translateZ(0)}.particle::after,.particle::before,[class*=particle-]::after,[class*=particle-]::before{content:"";display:block;position:absolute;bottom:-100px;border:4px solid rgba(255,255,255,.1);-webkit-animation:square 10s infinite;animation:square 10s infinite;border-radius:50%}.particle-dark [class*=particle-]::after,.particle-dark [class*=particle-]::before,.particle-dark::after,.particle-dark::before{border-color:rgba(0,0,0,.8)}.particle-item:nth-child(3)::before,.particle-item:nth-child(5)::after,.particle-item:nth-child(5)::before,.particle::after,.particle::before{border-radius:0}.particle-item:nth-child(1)::after,.particle-item:nth-child(1)::before,.particle-item:nth-child(5)::after,.particle::before{width:15px;height:15px}.particle-item:nth-child(2)::after,.particle-item:nth-child(4)::after,.particle-item:nth-child(5)::before{width:28px;height:28px}.particle-item:nth-child(2)::before,.particle-item:nth-child(3)::after{width:18px;height:18px}.particle-item:nth-child(3)::before,.particle-item:nth-child(4)::before,.particle::after{width:20px;height:20px}.particle::before{left:20%;-webkit-animation-duration:16s;animation-duration:16s}.particle-item:nth-child(1)::before{left:38%}.particle-item:nth-child(1)::after{left:24%;-webkit-animation-duration:8s;animation-duration:8s}.particle-item:nth-child(2)::after{left:50%;-webkit-animation-delay:5s;animation-delay:5s}.particle-item:nth-child(2)::before{left:40%;-webkit-animation-delay:7s;animation-delay:7s;-webkit-animation-duration:15s;animation-duration:15s}.particle-item:nth-child(3)::after{left:36%;-webkit-animation-delay:6s;animation-delay:6s}.particle-item:nth-child(3)::before{left:44%;-webkit-animation-delay:10s;animation-delay:10s;-webkit-animation-duration:20s;animation-duration:20s}.particle-item:nth-child(4)::after{left:58%;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:18s;animation-duration:18s}.particle-item:nth-child(4)::before{left:45%;-webkit-animation-duration:14s;animation-duration:14s}.particle-item:nth-child(5)::after{left:66%;-webkit-animation-delay:3s;animation-delay:3s;-webkit-animation-duration:12s;animation-duration:12s}.particle-item:nth-child(5)::before{left:74%;-webkit-animation-duration:25s;animation-duration:25s}.particle::after{left:80%;-webkit-animation-delay:4s;animation-delay:4s}#particle{background-size:cover;background-repeat:no-repeat;background-position:50%}.is-dark #particle{filter:brightness(60%)}#footer-wrapper{color:var(--footer-color)}.primary-footer a{color:var(--footer-color)}

/* Responsive */
@media only screen and (max-width:$(row.width + 60px)){#outer-wrapper,.is-boxed #outer-wrapper,.is-boxed .header-header{width:100%;max-width:100%;margin:0}.row-x1{width:100%}#footer-wrapper #footer-3col{padding:var(--gap)}}
@media only screen and (max-width:980px){#header-wrapper .container{padding:0}.mobile-menu-toggle{display:flex}.header-items{flex-wrap:nowrap}#vtrick-pro-main-nav{display:none}#slide-menu,.overlay{display:block}.flex-left,.main-logo{padding:0!important}.flex-right,.rtl .flex-right{position:relative;top:unset;left:unset;right:unset}#main-search-wrap{width:100%}.nav-active .overlay{visibility:visible;opacity:1}.nav-active #back-top{opacity:0!important}#content-wrapper>.container,.is-left #content-wrapper>.container{flex-direction:column!important;justify-content:flex-start}#main-wrapper,#sidebar-wrapper{width:100%}#sidebar-wrapper{margin:30px 0 0}.sidebar ul.social-icons{grid-template-columns:repeat(4,1fr)}.mini-items{grid-template-columns:repeat(4,1fr)}.FeaturedPost .featured-post{height:200px}.featured-post .entry-title{font-size:19px}#vtrick-pro-about-section{flex-wrap:wrap;flex-direction:column}.vtrick-pro-about-section .Image{width:100%;flex-direction:column;justify-content:center;text-align:center}.vtrick-pro-about-section .footer-logo{padding:0!important}.footer-info{text-align:center;margin:20px 0 0}.vtrick-pro-about-section .LinkList{width:100%;justify-content:center;margin:10px 0 0}.vtrick-pro-about-section ul.social-icons{justify-content:center}.vtrick-pro-about-section .social-icons li{margin:10px 5px 0!important}#vtrick-pro-cookie-ify{left:16px;bottom:16px}.rtl #vtrick-pro-cookie-ify{left:unset;right:16px}#back-top{right:16px;bottom:16px}ul.cta-containter{right:13px;bottom:13px}ul.cta-containter>li:not(:first-child){margin-top:6px}#vtrick-pro-cta-section>div:first-child>ul.cta-containter{left:13px;bottom:13px}.rtl #back-top{left:16px;right:unset}.trending .widget.PopularPosts{scrollbar-color:#666 #201c29;padding-left:5px;overflow-x:scroll;-webkit-overflow-scrolling:touch;-ms-scroll-snap-points-x:repeat(250px);scroll-snap-points-x:repeat(250px);-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory}.trending .widget.PopularPosts{margin-left:calc(0rem - var(--gap));padding-left:calc(2 * var(--gap))}.trending .widget.PopularPosts .widget-title{margin-left:calc(0rem - var(--gap))}.trending .widget.PopularPosts:after{display:none}.trending .widget.PopularPosts .widget-content{overflow-x:visible}.trending .widget.PopularPosts .widget-content .popular-post.post{min-width:180px;scroll-snap-align:start}.trending .widget.PopularPosts .widget-content .popular-post.post:not(:first-child){margin-left:-20px}}
@media only screen and (max-width:880px){:root{--gap:1rem}.footerbar{height:auto;line-height:inherit;padding:25px 0;margin:0}.footerbar .container{flex-direction:column;justify-content:center}#footer-menu,.footerbar .footer-copyright{width:100%;text-align:center;margin:0}#footer-menu{padding:5px 0 0}.footer-menu ul{justify-content:center}.footer-menu ul li a{display:block;margin:5px 10px 0!important}}
@media only screen and (max-width:800px){.hero-post .entry-title{font-size:2rem}.hero-post .entry-header p{display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow-y:hidden}}
@media only screen and (max-width:680px){.hero-post .hero-post{grid-template-columns:1fr}.hero-post .entry-header{padding:1.5rem}.hero-post .entry-image-wrap{display:block;min-height:200px;width:100%;height:100%}.hero-post .entry-image-wrap:after{display:none}#outer-wrapper{background-color:var(--outer-mobile-bg)}.header-ads .widget{margin:16px 0 0}#ticker-wrapper .container{padding:0}#ticker .widget{flex-direction:column;align-items:initial}.ticker .widget-title{padding:0;margin:0 0 5px}.ticker .widget-content{height:initial}.ticker .loader{margin:4px 0 0}.ticker .ticker-item.active{position:relative}.ticker-item .entry-title{height:initial;line-height:1.3em;height:1.3em}.ticker-item .entry-title a{white-space:initial;text-overflow:initial}#featured-wrapper .container{padding:0}#featured .widget{background-color:var(--widget-bg);padding:20px 16px;margin:16px 0 0;border:1px solid var(--border-color);border-width:1px 0}.featured-items{grid-template-columns:1fr;grid-gap:16px}#content-wrapper{padding:16px 0}#content-wrapper .container{padding:0}.content-section .widget{padding:20px 16px;margin:0 0 16px}.content-section .widget.type-block{background-color:var(--widget-bg)}.content-section .widget.is-ad{background-color:transparent;padding:0 16px;border:0}.is-home #main-wrapper.has-cs2 #main{margin:0 0 16px}.block-items{grid-template:"prm1 prm1" "snd1 prm2" "snd2 snd3"/1fr 1fr;padding:0;box-shadow:unset;border:unset}.block-items .block-item.item-1{background:unset}.block-items .block-item.item-1 .entry-header{padding:unset;display:flex}.block-items .block-item.item-1 .entry-header .entry-excerpt{display:none}.block-right .block-item{margin:16px 0 0}.block-left .entry-image-wrap{height:200px}.grid-items,.video-items{grid-template-columns:repeat(2,1fr);grid-gap:16px}.content-block.list-items .entry-thumb{border:unset}.list-item{flex-direction:column;justify-content:flex-start;overflow:hidden;padding:0}.list-item .entry-image-wrap{width:100%;margin:0!important;border-radius:var(--radius) var(--radius) 0 0}.list-item .entry-header{padding:13px 16px 16px}.blog-posts-wrap{padding:var(--gap)}.index-post-wrap{gap:var(--gap)}.index-post{flex-direction:column;justify-content:flex-start;overflow:hidden;padding:0}.index-post .entry-image-wrap{width:100%;margin:0!important;border-radius:var(--radius) var(--radius) 0 0}.index-post .entry-header{padding:13px 16px 16px}#blog-pager{margin:20px 0 4px}#related-wrap,.item-post-inner,.vtrick-pro-blog-post-comments{padding:0 var(--gap)}.entry-content-wrap{margin:1rem 0 0;padding:2rem 2rem .5rem}.item-post h1.entry-title{font-size:33px}.post-body table{display:block}ul.vtrick-pro-share-links{justify-content:space-between}.vtrick-pro-share-links li{width:fit-content}.vtrick-pro-share-links li.has-span a.twitter{width:34px;justify-content:center}.vtrick-pro-share-links li.has-span a.twitter:before{background-color:transparent;padding:0}#before-ad .widget{margin:0 0 20px}#after-ad .widget{margin:20px 0 0}.entry-labels,.post-share{margin:15px 0 0}.about-author{padding:20px 16px;margin:16px 0 0;border-width:1px 0;border-radius:0}#post-footer-ads{padding:0 16px;margin:16px 0 0}.post-nav{padding:0 16px;margin:16px 0 0}#custom-ads{padding:0 16px}#sidebar-wrapper{margin:16px 0 0}.sidebar>.widget{padding:20px 16px;margin:0 0 16px;border-width:1px 0;border-radius:0}.sidebar .widget.is-ad{padding:0 16px}.sidebar .title-wrap{padding:0;margin:0 0 16px;border:0}.sidebar .widget-content{padding:0}.sidebar ul.social-icons{grid-template-columns:repeat(2,1fr)}.mini-items{grid-template-columns:repeat(2,1fr);column-gap:16px}.mini-item .entry-image-wrap{height:140px}.mini-item .entry-title{font-size:15px}.footer-ads .widget{margin:0 0 16px}#footer-3col{flex-direction:column}#footer-3col>div{padding:1rem 0}#footer-3col>div:not(:last-child){margin:0}.vtrick-pro-about-section .footer-logo{align-self:center}.errorWrap{padding:0 16px 30px}.errorWrap h3{font-size:130px}.errorWrap h4{line-height:initial}#vtrick-pro-cookie-ify{right:0!important;left:0!important;bottom:0;width:100%;padding:20px 16px;margin:0;border-radius:0;transform:translate3d(0,50%,0);transition:all .5s ease,background 0s ease}#vtrick-pro-cookie-ify.is-visible{transform:translate3d(0,0,0)}a.ads-here{height:65px}.sidebar a.ads-here{height:200px}}
@media only screen and (max-width:480px){#post-body{font-size:$(itempost.content.size + 1px)}.author-description .author-text,.comments .comment-content{font-size:15px}.item-post h1.entry-title{font-size:31px}.mini-item .entry-image-wrap{height:110px}.vtrick-pro-share-links li{width:50%}#vtrick-pro-cta{display:none}.postShare:before{content:attr(data-text);display:block;width:100%;margin:0 0 15px}.shareContent:before{display:none}.shareIcon.facebook{flex-grow:1}.shareIcon.facebook a:after{content:attr(data-text);display:block}.shareInner{align-items:flex-end}.shareIn:checked~.shareInner .shareBlock{border-radius:15px 15px 0 0}}
@media only screen and (max-width:380px){#featured .widget.PopularPosts .widget-content{min-height:180px}.featured-item{height:180px}.block-left .entry-image-wrap{height:180px}.grid-item .entry-title,.related-item .entry-title,.video-item .entry-title{font-size:14px}.item-post h1.entry-title{font-size:27px}.item-post .entry-meta .align-right{display:none}.tocify-inner{min-width:100%}.vtrick-pro-share-links li.has-span a{width:34px;justify-content:center}.vtrick-pro-share-links li.has-span a:before{background-color:transparent;padding:0}.mini-item .entry-image-wrap{height:95px}.mini-item .entry-title{font-size:14px}.FeaturedPost .featured-post{height:180px}}
@media only screen and (max-width:340px){#slide-menu{width:100%}.errorWrap h3{font-size:110px}.errorWrap h4{font-size:27px}}

/*! Scroll bar */
::-webkit-scrollbar-track{background-color:var(--outer-bg)}::-webkit-scrollbar-thumb{-webkit-border-radius:.5625rem;border-radius:.5625rem;border:.375rem solid transparent;background-color:var(--scroll-bg);background-clip:padding-box}::-webkit-scrollbar-corner{background-color:var(--outer-bg)}::-webkit-scrollbar{width:1.25rem;background-color:var(--outer-bg)}

]]></b:skin>
</b:if>
<b:if cond='data:view.isLayoutMode'>
<b:template-skin><![CDATA[
html,body#layout #outer-wrapper,body#layout .row{width:auto;padding:0}
body#layout{position:relative;width:auto;max-width:100%;background-color:#f9f9f9;padding:95px 5px 0;margin:0}
body#layout:before{content:'Educsy';position:absolute;top:0;left:5px;right:5px;height:95px;font-family:Roboto,sans-serif;font-size:23px;color:#0F1618;line-height:95px;text-align:center}
body#layout div.section{display:block;background-color:#f1f1f1!important;margin:0 5px 10px!important;padding:16px 16px 18px!important;border-color:#e5e5e5}
body#layout .no-items.section{display:block}
body#layout .section h4{font-size:14px;color:#0F1618;text-transform:uppercase;margin:0}
body#layout .section h4:after{text-transform:initial;color:#656565;font-weight:400}
body#layout .add_widget a{color:#3c97ef!important}
body#layout .widget-wrap3{overflow:hidden}
body#layout .widget-content{width:auto;max-width:none;max-height:none;margin:0;border:1px solid #e5e5e5;border-left:0}
body#layout .locked-widget .widget-content{border-left:1px solid #3c97ef}
body#layout .locked-widget .widget-content:hover{border-left-color:#00b140}
body#layout .widget .widget-content a.editlink{border-radius:2px}
body#layout .visibility .editlink{background:#3c97ef url(https://1.bp.blogspot.com/-iQoCOwqjB-w/Wy1bDznOM4I/AAAAAAAACGA/8BUOPStr0sk5oud9hWpHBQTrmkeJDoAvACK4BGAYYCw/s18-c/mode_edit_w600_24dp.png) no-repeat center!important}
body#layout .visibility .editlink:hover{background-color:#00b140!important}
body#layout .draggable-widget .widget-wrap2{background:#3c97ef url(https://1.bp.blogspot.com/-yTAuT5aZ1EY/Wy1eEeo4SbI/AAAAAAAACGM/FxOTPwL-Ch0_lyZxLRzhv2EWHINOmCjWACK4BGAYYCw/s22/draggable.png) no-repeat 4px 50%!important}
body#layout .draggable-widget .widget-wrap1:hover .widget-wrap2{background-color:#00b140!important}
body#layout .visibility .layout-widget-state.visible{background-image:url(https://4.bp.blogspot.com/-qicweZaCb7I/XR_IGBqqGfI/AAAAAAAABS0/MIpI_COKj6MBkeN9FEJhqL96WYnYfGjngCK4BGAYYCw/s1600/visibility_c3_600_24dp.png)!important}
body#layout .visibility .layout-widget-state.not-visible{background-image:url(https://4.bp.blogspot.com/-tqL3-mrEM7A/XR_H_P3mFZI/AAAAAAAABSs/4PO1g3CDQbse_mJYzwn-60OQoYMFcq1FQCK4BGAYYCw/s1600/visibility_off_c3_600_24dp.png)!important;opacity:1}
body#layout div.layout-widget-description{display:none;font-size:11px;line-height:1.2em}
body#layout #theme-options,body#layout #main-menu .widget{display:block!important}
body#layout div.ify-panel{background-color:#edf4ff!important;overflow:hidden!important;border-color:#cdd4ef}
body#layout .ify-panel .widget{float:left;width:32.66%;margin-right:1%}
body#layout .ify-panel .widget-content{border-color:#cdd4ef!important}
body#layout .ify-panel .HTML{margin-right:0}
body#layout .ify-panel div.layout-widget-description,body#layout .flex-right,body#layout #nav-search-wrap{display:none}
body#layout .flex-left{display:flex}
body#layout .main-logo,body#layout .vtrick-pro-main-nav{width:50%}
body#layout #content-wrapper{padding:0;margin:0}
body#layout #content-wrapper > .container{display:flex;margin:0}
body#layout #main-wrapper{width:67%;padding:0}
body#layout div.content-section.section,body#layout div.main-ads.section{background-color:#edf4ff!important;border-color:#d9dff3}
body#layout #sidebar-wrapper{width:33%;padding:0}
body#layout #custom-ads{display:flex}
body#layout #custom-ads .section{width:50%}
body#layout #vtrick-pro-about-section{overflow:hidden!important}
body#layout #vtrick-pro-about-section .widget{float:left;width:49.5%;margin-right:1%}
body#layout #vtrick-pro-about-section .LinkList{margin-right:0}
body#layout .footerbar .container{display:flex}
body#layout #footer-menu,body#layout #footer-copyright{width:50%}
body#layout .section > h4:after{font-size:12px}
body#layout #ify-panel > h4:after{content:' - Custom No Image, Date Format, Month Names and More.'}
body#layout #main-logo > h4:after{content:' - Recommended Height (34px)'}
body#layout #vtrick-pro-main-nav > h4:after{content:' - With SubLinks and Mega Menu'}
body#layout #header-ads > h4:after{content:' - by Custom HTML, Adsense or Image'}
body#layout #ticker > h4:after,body#layout #featured > h4:after{content:' - by Popular Posts, Most Recents or Label'}
body#layout .content-section > h4:after{content:' - by Most Recents or Label or AD Gadget (Adsense, HTML)'}
body#layout #main > h4:after{content:' - Default Blog Posts, AdSense In-Feed, Comments and More'}
body#layout #vtrick-pro-main-before-ad > h4:after{content:' - Before Post Content (Post Page)'}
body#layout #vtrick-pro-main-after-ad > h4:after{content:' - After Post Content (Post Page)'}
body#layout #vtrick-pro-related-posts > h4:after{content:' - Advanced Related Posts'}
body#layout #vtrick-pro-post-footer-ads > h4:after{content:' - After Related Posts (Post Page)'}
body#layout #sidebar > h4:after{content:' - on All Pages'}
body#layout:after{content:'Designed by - Educsy';display:block;font-family:Roboto,sans-serif;font-size:20px;color:#555;line-height:1;text-align:center;visibility:visible;padding:20px 0}
body#layout #footer-ads > h4:after{content:' - by Custom HTML, Adsense or Image'}
body#layout #vtrick-pro-about-section > h4:after{content:' - Site Logo, Description and Social Icons'}
body#layout #footer-copyright > h4:after{content:' - Custom Credits'}
body#layout #footer-menu > h4:after{content:' - Footer Links'}
body#layout #vtrick-pro-cookie-ify-section > h4:after{content:' - Advanced Cookie Consent Plugin'}
body#layout #hidden-widgets{display:none!important}
body#layout #footer-3col{display: flex;flex-direction: row;}
body#layout #footer-3col > div{width:33%}
body#layout #vtrick-pro-cta{display: flex;flex-direction: row;}
body#layout #vtrick-pro-cta > div {width:50%}
body#layout #vtrick-pro-cta1-section > h4:after{content:' - Left Call to Action'}
body#layout #vtrick-pro-cta2-section > h4:after{content:' - Right Call to Action'}
]]></b:template-skin>
</b:if>
<script type='text/javascript'>//<![CDATA[
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dateFormat = "{d} {m}, {y}",
        fixedMenu = true,
        fixedSidebar = true,
        toc_title = "Contents",
        fbCommentsTheme = "light";
//]]></script>
<b:if cond='data:widgets.AdSense.first or data:blog.adsenseClientId'>
  <!-- Google AdSense -->
  <script async='async' src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'/>
</b:if>
<b:if cond='data:blog.analyticsAccountNumber'>
  <!-- Google Analytics -->
  <b:include data='blog' name='google-analytics'/>
</b:if>
<b:defaultmarkups>
  <b:defaultmarkup type='Common'>
    <b:includable id='theme-dark-mode'>
      <b:class cond='data:skin.vars.darkmode == &quot;1px&quot;' name='is-dark'/>
    </b:includable>
    <b:includable id='customOpenGraphMetaData'>
      <!-- Metadata for Open Graph protocol. See http://ogp.me/. -->
      <meta expr:content='data:blog.localeUnderscoreDelimited' property='og:locale'/>
      <b:if cond='data:view.isHomepage'>
        <meta content='website' property='og:type'/>
      </b:if>
      <b:if cond='data:view.isSingleItem'>
        <meta content='article' property='og:type'/>
      </b:if>
      <b:if cond='data:view.isMultipleItems and not data:view.isHomepage'>
        <meta content='object' property='og:type'/>
      </b:if>
      <meta expr:content='data:view.title.escaped' property='og:title'/>
      <meta expr:content='data:blog.url.canonical' property='og:url'/>
      <meta expr:content='data:view.description.escaped' property='og:description'/>
      <meta expr:content='data:blog.title.escaped' property='og:site_name'/>
      <b:tag cond='data:view.isMultipleItems and data:widgets.Blog.first.posts[0].featuredImage' expr:content='data:widgets.Blog.first.posts[0].featuredImage resizeImage 1600' name='meta' property='og:image'/>
      <b:tag cond='data:view.isMultipleItems and data:widgets.Blog.first.posts[0].featuredImage' expr:content='data:widgets.Blog.first.posts[0].featuredImage resizeImage 1600' name='meta' property='twitter:image'/>
      <b:if cond='data:view.featuredImage'>
        <meta expr:content='data:view.featuredImage resizeImage 1600' property='og:image'/>
        <meta expr:content='data:view.featuredImage resizeImage 1600' name='twitter:image'/>
      </b:if>
      <meta content='summary_large_image' name='twitter:card'/>
      <meta expr:content='data:view.title.escaped' name='twitter:title'/>
      <meta expr:content='data:blog.url.canonical' name='twitter:domain'/>
      <meta expr:content='data:view.description.escaped' name='twitter:description'/>
    </b:includable>
    <b:includable id='theme-head'>
      <meta expr:content='&quot;text/html; charset=&quot; + data:blog.encoding' http-equiv='Content-Type'/>
      <meta content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=yes' name='viewport'/>
      <title><b:if cond='data:view.isHomepage'><data:view.title.escaped/><b:elseif cond='data:view.isError'/>That page can&#8217;t be found | <data:blog.title/><b:else/> <data:blog.pageName/> | <data:blog.title/> </b:if></title>
      <link href='//fonts.gstatic.com' rel='dns-prefetch'/>
      <link href='//dnjs.cloudflare.com' rel='dns-prefetch'/>
      <link href='//1.bp.blogspot.com' rel='dns-prefetch'/>
      <link href='//2.bp.blogspot.com' rel='dns-prefetch'/>
      <link href='//3.bp.blogspot.com' rel='dns-prefetch'/>
      <link href='//4.bp.blogspot.com' rel='dns-prefetch'/>
	  <link href='//blogger.googleusercontent.com' rel='dns-prefetch'/>
      <link href='//www.blogger.com' rel='dns-prefetch'/>
      <link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
      <meta expr:content='data:skin.vars.main_color' name='theme-color'/>
      <b:if cond='data:blog.adultContent'>
        <meta content='adult' name='rating'/>
      </b:if>
      <link expr:href='data:view.url.canonical' rel='canonical'/>
      <meta expr:content='data:view.description.escaped' name='description'/>
      <b:tag cond='data:view.isMultipleItems and data:widgets.Blog.first.posts[0].featuredImage' expr:href='data:widgets.Blog.first.posts[0].featuredImage resizeImage 1600' name='link' rel='image_src'/>
      <b:tag cond='data:view.isSingleItem and data:view.featuredImage' expr:href='data:view.featuredImage resizeImage 1600' name='link' rel='image_src'/>
      <b:include name='customOpenGraphMetaData'/>
      <data:blog.feedLinks/><data:blog.meTag/>
      <b:if cond='data:view.isHomepage'>
        <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;<data:view.title.escaped/>&quot;,&quot;url&quot;:&quot;<data:view.url.canonical/>&quot;,&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,&quot;target&quot;:&quot;<data:view.url.canonical/>search?q={search_term_string}&quot;,&quot;query-input&quot;:&quot;required name=search_term_string&quot;}}</script>
      </b:if>
	  <!-- Bootstrap Icon 1.5 -->
	  <b:tag href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' name='link' rel='stylesheet'/>
      <b:tag cond='data:blog.languageDirection == &quot;rtl&quot;' href='https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&amp;display=swap' name='link' rel='stylesheet'/>
    </b:includable>
    <b:includable id='theme-body-class'>
      <b:class cond='data:view.isHomepage' name='is-home'/>
      <b:class cond='data:view.isMultipleItems' name='is-multiple'/>
      <b:class cond='data:view.isSingleItem' name='is-single'/>
      <b:class cond='data:view.isPage' name='is-page'/>
      <b:class cond='data:view.isPost' name='is-post'/>
      <b:class cond='data:view.isError' name='is-multiple is-error'/>
      <b:class cond='data:blog.isMobileRequest' name='is-mobile'/>
      <b:class cond='data:skin.vars.boxed == &quot;1px&quot;' name='is-boxed'/>
      <b:class cond='data:skin.vars.sidebar == &quot;1px&quot;' name='is-left'/>
    </b:includable>
    <b:includable id='theme-custom-lang'>
      <b:switch var='data:message'>
        <b:case value='prevPost'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Previous Post<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>ArtÃ&#173;culo Anterior<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Postagem Anterior<b:else/><data:messages.newer/></b:if>
        <b:case value='nextPost'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Next Post<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>ArtÃ&#173;culo Siguiente<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>PrÃ&#179;xima Postagem<b:else/><data:messages.older/></b:if>
        <b:case value='loadMorePosts'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>Load More<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Carga MÃ&#161;s<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Carregar Mais<b:else/><data:messages.loadMorePosts/></b:if>
        <b:case value='noMorePosts'/><b:if cond='data:blog.locale.language == &quot;en&quot;'>That is All<b:elseif cond='data:blog.locale.language == &quot;es&quot;'/>Eso es Todo<b:elseif cond='data:blog.locale.language == &quot;pt&quot;'/>Isso Ã&#169; Tudo<b:else/><data:messages.noResultsFound/></b:if>
      </b:switch>
    </b:includable>
    <b:includable id='widget-title'>
      <b:if cond='data:title == &quot;{ads}&quot;'>
        <b:class name='is-ad'/>
        <b:elseif cond='data:widget.type == &quot;AdSense&quot;'/>
        <b:class name='is-ad'/>
      </b:if>
      <b:if cond='data:defaultTitle or data:title'>
        <b:if cond='(data:title != &quot;{ads}&quot;)'>
          <b:if cond='data:widget.sectionId not in [&quot;ify-panel&quot;,&quot;main-logo&quot;,&quot;vtrick-pro-main-nav&quot;,&quot;header-ads&quot;,&quot;featured&quot;,&quot;footer-ads&quot;,&quot;vtrick-pro-post-footer-ads&quot;,&quot;vtrick-pro-about-section&quot;,&quot;footer-copyright&quot;,&quot;footer-menu&quot;,&quot;vtrick-pro-cta1-section&quot;,&quot;vtrick-pro-cta2-section&quot;,&quot;hero-post&quot;]'>
            <div expr:class='data:widget.sectionId in [&quot;content-section-1&quot;,&quot;content-section-2&quot;,&quot;sidebar&quot;] ? &quot;widget-title title-wrap&quot; : &quot;widget-title&quot;'><h3 class='title'><data:title/></h3></div>
          </b:if>
        </b:if>
      </b:if>
    </b:includable>
    <b:includable id='linklist-content'>
      <b:if cond='data:widget.sectionId == &quot;vtrick-pro-main-nav&quot;'>
        <ul expr:arial-label='data:blog.title' id='vtrick-pro-main-nav-menu' role='menubar'>
          <b:loop values='data:links' var='link'>
            <li role='none'><b:if cond='data:link.target contains &quot;getContent&quot;'><b:class name='has-sub mega-menu'/><a expr:data-shortcode='data:link.target' href='#' role='menuitem'><data:link.name/></a><b:else/><a expr:href='data:link.target in [&quot;{homepage}&quot;] ? data:blog.homepageUrl.canonical : data:link.target' role='menuitem'><data:link.name/></a></b:if></li>
          </b:loop>
        </ul>
      <b:elseif cond='data:widget.sectionId in [&quot;vtrick-pro-cta1-section&quot;,&quot;vtrick-pro-cta2-section&quot;]'/>
		      <ul class='cta-containter'>
                <b:loop index='i' values='data:links' var='link'>
                  <li expr:class='data:link.name + &quot; link-&quot; + data:i'><a expr:alt='data:link.name' expr:class='data:link.name + &quot; btn&quot;' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'/></li>
                </b:loop>
              </ul>
        <b:elseif cond='data:widget.sectionId in [&quot;sidebar&quot;,&quot;vtrick-pro-about-section&quot;]'/>
        <b:tag class='widget-content' cond='data:widget.sectionId not in [&quot;vtrick-pro-about-section&quot;]' name='div'>
          <b:if cond='data:links any l =&gt; l.name in [&quot;blogger&quot;,&quot;facebook&quot;,&quot;facebook-f&quot;,&quot;twitter&quot;,&quot;rss&quot;,&quot;youtube&quot;,&quot;skype&quot;,&quot;stumbleupon&quot;,&quot;tumblr&quot;,&quot;vk&quot;,&quot;stack-overflow&quot;,&quot;github&quot;,&quot;linkedin&quot;,&quot;dribbble&quot;,&quot;soundcloud&quot;,&quot;behance&quot;,&quot;digg&quot;,&quot;instagram&quot;,&quot;pinterest&quot;,&quot;pinterest-p&quot;,&quot;twitch&quot;,&quot;delicious&quot;,&quot;codepen&quot;,&quot;amazon&quot;,&quot;reddit&quot;,&quot;whatsapp&quot;,&quot;messenger&quot;,&quot;microsoft&quot;,&quot;telegram&quot;,&quot;discord&quot;,&quot;apple&quot;,&quot;email&quot;,&quot;external-link&quot;]'>
            <b:if cond='data:widget.sectionId == &quot;sidebar&quot;'>
              <ul class='social-icons social social-bg'>
                <b:loop index='i' values='data:links' var='link'>
                  <li expr:class='data:link.name + &quot; link-&quot; + data:i'><a expr:alt='data:link.name' expr:class='data:link.name + &quot; btn&quot;' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'/></li>
                </b:loop>
              </ul>
              <b:else/>
              <ul class='social-icons social social-bg-hover'>
                <b:loop index='i' values='data:links' var='link'>
                  <li expr:class='data:link.name + &quot; link-&quot; + data:i'><a expr:alt='data:link.name' expr:class='data:link.name + &quot; btn&quot;' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'/></li>
                </b:loop>
              </ul>
            </b:if>
			<b:else/>
            <ul class='link-list list-style'>
              <b:loop values='data:links' var='link'>
                <li><a expr:href='data:link.target'><data:link.name/></a></li>
              </b:loop>
            </ul>
          </b:if>
        </b:tag>
        <b:else/>
        <b:tag class='widget-content' cond='data:widget.sectionId not in [&quot;footer-menu&quot;]' name='div'>
          <ul expr:class='data:widget.sectionId == &quot;footer-menu&quot; ? &quot;link-list&quot; : &quot;link-list list-style&quot;'>
            <b:loop values='data:links' var='link'>
              <li><a expr:href='data:link.target'><data:link.name/></a></li>
            </b:loop>
          </ul>
        </b:tag>
      </b:if>
    </b:includable>
    <b:includable id='html-content'>
      <b:if cond='data:widget.sectionId == &quot;ify-panel&quot;'>
        <b:if cond='data:content != &quot;&quot;'>
          <b:tag name='script' type='text/javascript'>
            <b:with expr:value='data:content' var='option'>
              <b:if cond='data:option.viewAllText'>var viewAllText = unescape(escape(&quot;<data:option.viewAllText.jsonEscaped/>&quot;));</b:if>
              <b:if cond='data:option.dateFormat'>var dateFormat = &quot;<data:option.dateFormat/>&quot;;</b:if>
              <b:if cond='data:option.months'>
                var monthNames = [&quot;<data:option.months.jan/>&quot;,&quot;<data:option.months.feb/>&quot;,&quot;<data:option.months.mar/>&quot;,&quot;<data:option.months.apr/>&quot;,&quot;<data:option.months.may/>&quot;,&quot;<data:option.months.jun/>&quot;,&quot;<data:option.months.jul/>&quot;,&quot;<data:option.months.aug/>&quot;,&quot;<data:option.months.sep/>&quot;,&quot;<data:option.months.oct/>&quot;,&quot;<data:option.months.nov/>&quot;,&quot;<data:option.months.dec/>&quot;];
              </b:if>
            </b:with>
          </b:tag>
        </b:if>
      <b:elseif cond='data:widget.sectionId == &quot;vtrick-pro-related-posts&quot;'/>
        <b:with value='data:title ? &quot;$title={&quot; + data:title + &quot;} &quot; : &quot;&quot;' var='relatedTitle'>
          <b:attr expr:value='data:relatedTitle + (data:content contains &quot;results&quot; ? data:content : &quot;&quot;)' name='data-shortcode'/>
        </b:with>
        <b:else/>
        <b:if cond='data:content contains &quot;getContent&quot; and data:widget.sectionId in [&quot;ticker&quot;,&quot;featured&quot;,&quot;content-section-1&quot;,&quot;content-section-2&quot;]'>
          <b:class name='is-visible'/>
        </b:if>
        <b:include name='widget-title'/>
        <div class='widget-content'>
          <b:if cond='data:content contains &quot;getContent&quot; and data:widget.sectionId in [&quot;sidebar&quot;,&quot;ticker&quot;,&quot;featured&quot;,&quot;content-section-1&quot;,&quot;content-section-2&quot;]'>
            <b:attr expr:value='data:content' name='data-shortcode'/>
            <b:else/>
            <data:content/>
          </b:if>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='textlist-content'>
      <b:if cond='data:widget.sectionId == &quot;ify-panel&quot;'>
        <b:loop index='i' values='data:items' var='item'>
          <b:if cond='data:i == 0'>
			<!-- <script async='async' crossorigin='anonymous' defer='defer' expr:src='data:item'/> -->
			<b:tag name='script' type='text/javascript'>
			var fb_sdk = &quot;<data:item/>&quot;;
			</b:tag>
          </b:if>
        </b:loop>
        <b:else/>
        <div class='widget-content'>
          <ul class='text-list list-style'>
            <b:loop values='data:items' var='item'>
              <li><data:item/></li>
            </b:loop>
          </ul>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='image-content'>
      <b:if cond='data:widget.sectionId == &quot;ify-panel&quot;'>
        <b:tag name='script' type='text/javascript'>var noThumbnail = &quot;<b:eval expr='resizeImage(data:sourceUrl, 72, &quot;1:1&quot;)'/>&quot;;</b:tag>
        <b:elseif cond='data:widget.sectionId == &quot;vtrick-pro-about-section&quot;'/>
        <a class='footer-logo custom-image' expr:href='data:link'>
          <img expr:alt='data:blog.title' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:src='data:sourceUrl'/>
        </a>
        <b:if cond='data:caption'>
          <div class='footer-info'>
            <p class='image-caption excerpt'><data:caption/></p>
          </div>
        </b:if>
        <b:else/>
        <div class='widget-content'>
          <div class='custom-image'>
            <b:tag cond='data:link' expr:href='data:link' name='a'>
              <img expr:alt='data:blog.title' expr:id='data:widget.instanceId + &quot;_img&quot;' expr:src='data:sourceUrl'/>
            </b:tag>
          </div>
          <b:if cond='data:caption'>
            <p class='image-caption excerpt'><data:caption/></p>
          </b:if>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='text-content'>
       <b:if cond='data:widget.sectionId == &quot;footer-copyright&quot;'>
        &lt;data:content/&gt;&lt;span expr:class=&#39;&amp;quot;des&amp;quot; + &amp;quot;igned&amp;quot;&#39;&gt;&lt;b:eval expr=&#39;&amp;quot;Desi&amp;quot;+ &amp;quot;gn&amp;quot;+ &amp;quot;ed &amp;quot;+ &amp;quot;by &amp;quot;&#39;/&gt;&lt;a expr:href=&#39;&amp;quot;https://www.vi&amp;quot;+ &amp;quot;etri&amp;quot;+ &amp;quot;ck.com&amp;quot;&#39; expr:id=&#39;&amp;quot;vt&amp;quot;+ &amp;quot;ri&amp;quot;+ &amp;quot;ck&amp;quot;&#39;&gt;&lt;b:eval expr=&#39;&amp;quot;Vie&amp;quot;+ &amp;quot;tri&amp;quot;+ &amp;quot;ck&amp;quot;&#39;/&gt;.&lt;/a&gt;&lt;/span&gt;
        &lt;b:elseif cond=&#39;data:widget.sectionId == &amp;quot;vtrick-pro-cookie-ify-section&amp;quot;&#39;/&gt;
        <b:elseif cond='data:widget.sectionId == &quot;vtrick-pro-cookie-ify-section&quot;'/>
        <b:attr expr:value='data:title' name='data-shortcode'/>
        <p class='vtrick-pro-cookie-ify-content excerpt'><data:content/></p>
        <a class='btn' expr:title='data:messages.ok' href='javascript:;' id='vtrick-pro-cookie-ify-accept' role='button'><data:messages.ok/></a>
        <b:else/>
        <b:include name='widget-title'/>
        <div class='widget-content excerpt'>
          <data:content/>
        </div>
      </b:if>
    </b:includable>
    <b:includable id='popular-content'>
      <div expr:class='&quot;default-item ds item-&quot;+data:i'>
        <a class='entry-image-wrap ' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:if cond='data:post.featuredImage'><svg class='entry-thumb' expr:data-image='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 72, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)' viewBox='0 0 16 9'/><b:else/><svg class='entry-thumb' data-image='https://resources.blogblog.com/img/blank.gif' viewBox='0 0 16 9'/></b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;is-video&quot; : &quot;is-image&quot;'/></a>
        <div class='entry-header'>
          <h2 class='entry-title'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
          <b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><div class='entry-meta'><span class='entry-time mi'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span>
			<b:if cond='data:post.allowComments and data:post.numberOfComments &gt; 0'><span class='cmt-count' expr:title='data:post.numberOfComments + &quot; &quot; + data:messages.comments'><data:post.numberOfComments/></span></b:if>
		  </div></b:if>
        </div>
      </div>
    </b:includable>
    <b:includable id='contact-form-content'>
      <div class='widget-content contact-form-widget'>
        <form name='contact-form'>
          <input class='contact-form-name cf-s' expr:ariby='data:contactFormNameMsg' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
          <input class='contact-form-email cf-s' expr:ariby='data:contactFormEmailMsg + &quot; *&quot;' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg + &quot; *&quot;' name='email' size='30' type='text' value=''/>
          <textarea class='contact-form-email-message cf-s' cols='25' expr:ariby='data:contactFormMessageMsg + &quot; *&quot;' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' expr:placeholder='data:contactFormMessageMsg + &quot; *&quot;' name='email-message' rows='5'/>
          <input class='contact-form-button btn contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </form>
      </div>
    </b:includable>
    <b:includable id='theme-options-js'>
      <b:if cond='data:skin.vars.fixedmenu == &quot;0px&quot; or (data:skin.vars.fixedsidebar == &quot;0px&quot;) or (data:skin.vars.darkmode == &quot;1px&quot;) or (data:skin.vars.userdarkmode == &quot;0px&quot;)'>
      <!-- Theme Options JS -->
      <b:tag name='script' type='text/javascript'><b:if cond='data:skin.vars.fixedmenu == &quot;0px&quot;'>var fixedMenu=false;</b:if><b:if cond='data:skin.vars.fixedsidebar == &quot;0px&quot;'>var fixedSidebar=false;</b:if><b:if cond='data:skin.vars.darkmode == &quot;1px&quot;'>var darkMode=true;</b:if><b:if cond='data:skin.vars.userdarkmode == &quot;0px&quot;'>var userDarkMode=false;</b:if></b:tag>
      </b:if>
    </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='Header'>
  </b:defaultmarkup>
  <b:defaultmarkup type='LinkList'>
  </b:defaultmarkup>
  <b:defaultmarkup type='TextList'>
  </b:defaultmarkup>
  <b:defaultmarkup type='HTML'>
  </b:defaultmarkup>
  <b:defaultmarkup type='Text'>
  </b:defaultmarkup>
  <b:defaultmarkup type='Blog'>
  </b:defaultmarkup>
  <b:defaultmarkup type='PopularPosts'>
  </b:defaultmarkup>
  <b:defaultmarkup type='FeaturedPost'>
  </b:defaultmarkup>
  <b:defaultmarkup type='ContactForm'>     
  </b:defaultmarkup>
  <b:defaultmarkup type='Label'>
  </b:defaultmarkup>
  <b:defaultmarkup type='FollowByEmail'>
  </b:defaultmarkup> 
  <b:defaultmarkup type='Image'>
  </b:defaultmarkup> 
  <b:defaultmarkup type='BlogArchive'>
  </b:defaultmarkup>
  <b:defaultmarkup type='PageList'>
  </b:defaultmarkup>
  <b:defaultmarkup type='BlogSearch'>
  </b:defaultmarkup>
  <b:defaultmarkup type='Profile'>
  </b:defaultmarkup>
</b:defaultmarkups>
</head>
<meta content='b7cf7437-8486-4e15-b8b0-edbd12ffe048' name='trustpilot-one-time-domain-verification-id'/> 
<body>
  
  <!-- Google Tag Manager (noscript) -->
<noscript><iframe height='0' src='https://www.googletagmanager.com/ns.html?id=GTM-NK352VJ' style='display:none;visibility:hidden' width='0'/></noscript>
<!-- End Google Tag Manager (noscript) -->
  
<b:include name='theme-body-class'/>
<b:if cond='data:view.isLayoutMode or (data:widgets any w =&gt; w.sectionId == &quot;ify-panel&quot;)'>
  <!-- Theme Options -->
  <div id='theme-options' style='display:none'>
    <b:section class='ify-panel' id='ify-panel' maxwidgets='3' name='Theme Options' showaddelement='no'>
      <b:widget id='TextList100' locked='true' title='Facebook SDK' type='TextList' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='shownum'/>
          <b:widget-setting name='sorting'>NONE</b:widget-setting>
          <b:widget-setting name='item-0'><![CDATA[https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0]]></b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
        <b:includable id='content'>
      <b:include name='textlist-content'/>
    </b:includable>
      </b:widget>
      <b:widget id='Image100' locked='true' title='No Thumbnail Image' type='Image' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='displayUrl'>https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png</b:widget-setting>
          <b:widget-setting name='displayHeight'>72</b:widget-setting>
          <b:widget-setting name='sectionWidth'>150</b:widget-setting>
          <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
          <b:widget-setting name='displayWidth'>72</b:widget-setting>
          <b:widget-setting name='link'/>
          <b:widget-setting name='caption'/>
        </b:widget-settings>
        <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
        <b:includable id='content'>
      <b:include name='image-content'/>
    </b:includable>
      </b:widget>
      <b:widget id='HTML100' locked='true' title='JSON Variables' type='HTML' version='2' visible='true'>
        <b:widget-settings>
          <b:widget-setting name='content'/>
        </b:widget-settings>
        <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
      </b:widget>
    </b:section>
  </div>
</b:if>
<!-- Outer Wrapper -->
<div id='outer-wrapper'>
  <!-- Header Wrapper -->
  <header id='header-wrapper'>
    <div class='main-header'>
      <div class='header-inner'>
        <div class='header-header flex-center'>
          <div class='container row-x1'>
            <div class='header-items'>
              <div class='flex-left'>
                <b:section class='main-logo' id='main-logo' maxwidgets='1' name='Header Logo' showaddelement='no'>
                  <b:widget id='Header1' locked='true' title='Educsy Learn  (Header)' type='Header' version='2' visible='true'>
                    <b:widget-settings>
                      <b:widget-setting name='displayUrl'/>
                      <b:widget-setting name='displayHeight'>0</b:widget-setting>
                      <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
                      <b:widget-setting name='useImage'>false</b:widget-setting>
                      <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                      <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
                      <b:widget-setting name='displayWidth'>0</b:widget-setting>
                    </b:widget-settings>
                    <b:includable id='main' var='this'>
      <b:tag class='mobile-menu-toggle' href='javascript:;' name='a' role='button' title='Menu'/>
      <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
      <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
    </b:includable>
                    <b:includable id='behindImageStyle'><b:comment>Replaced</b:comment></b:includable>
                    <b:includable id='description'><b:comment>Replaced</b:comment></b:includable>
                    <b:includable id='image'>
      <a class='logo-img' expr:href='data:blog.homepageUrl.canonical'>
        <img expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image' expr:title='data:blog.title.escaped'/>
        <b:if cond='data:view.isMultipleItems'><b:if cond='data:widget.sectionId == &quot;main-logo&quot;'><h1 id='h1-off'><data:title/></h1></b:if></b:if>
      </a>
    </b:includable>
                    <b:includable id='title'>
      <b:tag class='blog-title' cond='data:view.isMultipleItems' name='h1'>
        <b:tag class='blog-title' cond='!data:view.isMultipleItems' name='span'>
          <b:tag expr:href='data:blog.homepageUrl.canonical' name='a'>
            <data:title/>
          </b:tag>
        </b:tag>
      </b:tag>
    </b:includable>
                  </b:widget>
                </b:section>
                <b:section class='vtrick-pro-main-nav' id='vtrick-pro-main-nav' maxwidgets='1' name='Header Menu' showaddelement='no'>
                  <b:widget id='LinkList101' locked='true' title='' type='LinkList' version='2' visible='true'>
                    <b:widget-settings>
                      <b:widget-setting name='link-3'>https://</b:widget-setting>
                      <b:widget-setting name='sorting'>NONE</b:widget-setting>
                      <b:widget-setting name='link-4'>https://www.fiverr.com/danderspritz?up_rollout=true</b:widget-setting>
                      <b:widget-setting name='text-1'>Home</b:widget-setting>
                      <b:widget-setting name='link-1'>https://www.educsy.com</b:widget-setting>
                      <b:widget-setting name='text-0'>Mega Menu</b:widget-setting>
                      <b:widget-setting name='link-2'>https://educsy.com/</b:widget-setting>
                      <b:widget-setting name='text-3'>FAQ</b:widget-setting>
                      <b:widget-setting name='link-0'>{getContent} $label={recent}</b:widget-setting>
                      <b:widget-setting name='text-2'>News</b:widget-setting>
                      <b:widget-setting name='text-4'>Contact us On Fiverr </b:widget-setting>
                    </b:widget-settings>
                    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
                    <b:includable id='content'>
      <b:include name='linklist-content'/>
    </b:includable>
                  </b:widget>
                </b:section>
              </div>
              <div class='flex-right'>
                <div class='tgl-wrap'>
                  <b:tag aria-label='darkmode' class='tgl-style darkmode-toggle' cond='data:skin.vars.darkmode == &quot;0px&quot; and (data:skin.vars.userdarkmode == &quot;1px&quot;)' href='javascript:;' name='a' role='button'/>
                  <b:tag class='tgl-style show-search' expr:title='data:messages.search' href='javascript:;' name='a' role='button'/>
                </div>
              </div>
              <div id='main-search-wrap'>
                <div class='main-search'>
                  <form class='search-form' expr:action='data:blog.searchUrl'>
                    <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
                    <input autocomplete='off' class='search-input' expr:aria-label='data:messages.search' expr:placeholder='data:messages.search' name='q' type='search' value=''/>
                    <button class='search-close' type='reset' value=''/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <b:if cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;header-ads&quot;)) or (data:view.isPost and (data:skin.vars.headerad_onpost == &quot;1px&quot;) and (data:widgets any w =&gt; w.sectionId == &quot;header-ads&quot;))'>
    <!-- Header Ads -->
    <div class='flex-center' id='header-ads-wrap'>
      <b:section class='header-ads container row-x1' id='header-ads' maxwidgets='1' name='Header ADS' showaddelement='yes'>
        <b:widget id='HTML1' locked='false' title='Header ADS' type='HTML' version='2' visible='false'>
          <b:widget-settings>
            <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
        </b:widget>
      </b:section>
    </div>
  </b:if>
  <b:if cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;hero-post&quot;))'>
	<!-- Hero Wrapper -->
	<div class='flex-center' id='hero-wrapper'>
	<b:section class='hero-post container row-x1' id='hero-post' maxwidgets='2' name='Featured Post' showaddelement='yes'>
<b:widget id='FeaturedPost1' locked='false' title='Featured Post' type='FeaturedPost' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='showSnippet'>true</b:widget-setting>
    <b:widget-setting name='showPostTitle'>true</b:widget-setting>
    <b:widget-setting name='postId'>0</b:widget-setting>
    <b:widget-setting name='showFirstImage'>true</b:widget-setting>
    <b:widget-setting name='useMostRecentPost'>true</b:widget-setting>
  </b:widget-settings>
  <b:includable id='main' var='this'>
			  <b:include name='widget-title'/>
			  <div class='widget-content'>
				<b:loop index='i' values='data:posts' var='post'><b:include data='post' name='content'/></b:loop>
			  </div>
		  </b:includable>
  <b:includable id='blogThisShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
  <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
  <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
  <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
  <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
  <b:includable id='content' var='post'>
      <div expr:class='data:widget.sectionId == &quot;hero-post&quot; ? &quot;hero-post&quot; : &quot;featured-post post&quot;'>
        <b:class cond='data:post.featuredImage.isYouTube and (data:widget.sectionId == &quot;hero-post&quot;)' name='is-video'/>
        <a class='entry-image-wrap' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:if cond='data:post.featuredImage'><svg class='entry-thumb' expr:data-image='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 72, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)' viewBox='0 0 16 9'/><b:else/><svg class='entry-thumb' data-image='https://resources.blogblog.com/img/blank.gif' viewBox='0 0 16 9'/></b:if><b:class cond='data:widget.sectionId != &quot;hero-post&quot;' expr:name='data:post.featuredImage.isYouTube ? &quot;is-video&quot; : &quot;is-image&quot;'/></a>
        <b:tag class='flex-center' cond='data:widget.sectionId == &quot;hero-post&quot;' name='div'>
          <b:tag class='entry-header-wrap' cond='data:widget.sectionId == &quot;hero-post&quot;' name='div'>
            <div class='entry-header'>
              <h2 class='entry-title'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
			  <p class='entry-excerpt excerpt'><b:eval expr='data:post.snippets.long snippet { length: 290 }'/></p>
			  <!-- Read more-->
			  <!--
              <b:if cond='data:widget.sectionId == &quot;featured&quot;'><span class='hero-rm'><a expr:href='data:post.url.canonical' expr:title='data:title ? data:title : data:messages.readMore'><b:eval expr='data:title ? data:title : data:messages.readMore'/></a></span></b:if>
			  -->
			  <!-- Featured post Author-->
			  <div class='author-row'>
			  <span class='author-avatar-wrap'><span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/></span>
			  <div><span class='author-name'><data:post.author.name/></span><b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><span class='on sp'>-</span><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></b:if></div>
			  <b:if cond='data:post.allowComments and data:post.numberOfComments &gt; 0'><a class='cmt-count' expr:href='data:post.commentsUrl' expr:title='data:post.numberOfComments + &quot; &quot; + data:messages.comments'><data:post.numberOfComments/></a></b:if>
			  </div>

            </div>
          </b:tag>
        </b:tag>
      </div>
    </b:includable>
  <b:includable id='emailPostIcon'>
  <span class='byline post-icons'>
    <!-- email post links -->
    <span class='item-action'>
      <a expr:href='data:post.emailPostUrl' expr:title='data:messages.emailPost'>
        <b:include data='{ iconClass: &quot;touch-icon sharing-icon&quot; }' name='emailIcon'/>
      </a>
    </span>
  </span>
</b:includable>
  <b:includable id='facebookShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
  <b:includable id='footerBylines'>
  <b:if cond='data:widgets.Blog.first.footerBylines'>
    <b:loop index='i' values='data:widgets.Blog.first.footerBylines' var='region'>
      <b:if cond='not data:region.items.empty'>
        <div expr:class='&quot;post-footer-line post-footer-line-&quot; + (data:i + 1)'>
          <b:with value='&quot;footer-&quot; + (data:i + 1)' var='regionName'>
            <b:include data='region.items' name='bylineRegion'/>
          </b:with>
        </div>
      </b:if>
    </b:loop>
  </b:if>
</b:includable>
  <b:includable id='googlePlusShare'>
  <div class='goog-inline-block google-plus-share-container'>
    <g:plusone annotation='inline' expr:href='data:originalUrl.canonical.http' size='medium' source='blogger:blog:plusone'/>
  </div>
</b:includable>
  <b:includable id='headerByline'>
  <b:if cond='data:widgets.Blog.first.headerByline'>
    <div class='post-header'>
      <div class='post-header-line-1'>
        <b:with value='&quot;header-1&quot;' var='regionName'>
          <b:include data='data:widgets.Blog.first.headerByline.items' name='bylineRegion'/>
        </b:with>
      </div>
    </div>
  </b:if>
</b:includable>
  <b:includable id='linkShare'>
  <b:with value='&quot;window.prompt(\&quot;Copy to clipboard: Ctrl+C, Enter\&quot;, \&quot;&quot; + data:originalUrl + &quot;\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
  <b:includable id='otherSharingButton'>
  <span class='sharing-platform-button sharing-element-other' expr:aria-label='data:messages.shareToOtherApps.escaped' expr:data-url='data:originalUrl' expr:title='data:messages.shareToOtherApps.escaped' role='menuitem' tabindex='-1'>
    <b:with value='{key: &quot;sharingOther&quot;}' var='platform'>
      <b:include name='sharingPlatformIcon'/>
    </b:with>
    <span class='platform-sharing-text'><data:messages.shareOtherApps.escaped/></span>
  </span>
</b:includable>
  <b:includable id='platformShare'>
  <a expr:class='&quot;goog-inline-block sharing-&quot; + data:platform.key' expr:data-url='data:originalUrl' expr:href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:onclick='data:onclick ? data:onclick : &quot;&quot;' expr:title='data:platform.shareMessage' target='_blank'>
    <span class='share-button-link-text'>
      <data:platform.shareMessage/>
    </span>
  </a>
</b:includable>
  <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
  <b:includable id='postCommentsLink'>
  <span class='byline post-comment-link container'>
    <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
  </span>
</b:includable>
  <b:includable id='postJumpLink' var='post'>
  <div class='jump-link flat-button'>
    <a expr:href='data:post.url fragment &quot;more&quot;' expr:title='data:post.title'>
      <b:eval expr='data:blog.jumpLinkMessage'/>
    </a>
  </div>
</b:includable>
  <b:includable id='postLabels'>
  <span class='byline post-labels'>
    <span class='byline-label'><data:byline.label/></span>
    <b:loop index='i' values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'>
        <data:label.name/>
      </a>
    </b:loop>
  </span>
</b:includable>
  <b:includable id='postLocation'>
  <span class='byline post-location'>
    <data:byline.label/>
    <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
  </span>
</b:includable>
  <b:includable id='postReactions'>
  <!-- Reaction feature no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
  <b:includable id='postShareButtons'>
  <div class='byline post-share-buttons goog-inline-block'>
    <b:with value='data:sharingId ?: ((data:widget.instanceId ?: &quot;sharing&quot;) + &quot;-&quot; + (data:regionName ?: &quot;byline&quot;) + &quot;-&quot; + data:post.id)' var='sharingId'>
      <!-- Note: 'sharingButtons' includable is from the default Sharing widget markup. -->
      <b:include data='{                                                sharingId: data:sharingId,                                                originalUrl: data:post.url,                                                platforms: data:this.sharing.platforms,                                                shareUrl: data:post.shareUrl,                                                shareTitle: data:post.title,                                              }' name='sharingButtons'/>
    </b:with>
  </div>
</b:includable>
  <b:includable id='postTimestamp'>
  <span class='byline post-timestamp'>
    <data:byline.label/>
    <b:if cond='data:post.url'>
      <meta expr:content='data:post.url.canonical'/>
      <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
        <time class='published' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
          <data:post.date/>
        </time>
      </a>
    </b:if>
  </span>
</b:includable>
  <b:includable id='sharingButton'>
  <span expr:aria-label='data:platform.shareMessage' expr:class='&quot;sharing-platform-button sharing-element-&quot; + data:platform.key' expr:data-href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:data-url='data:originalUrl' expr:title='data:platform.shareMessage' role='menuitem' tabindex='-1'>
    <b:include name='sharingPlatformIcon'/>
    <span class='platform-sharing-text'><data:platform.name/></span>
  </span>
</b:includable>
  <b:includable id='sharingButtonContent'>
  <div class='flat-icon-button ripple'>
    <b:include name='shareIcon'/>
  </div>
</b:includable>
  <b:includable id='sharingButtons'>
  <div class='sharing' expr:aria-owns='&quot;sharing-popup-&quot; + data:sharingId' expr:data-title='data:shareTitle'>
    <button class='sharing-button touch-icon-button' expr:aria-controls='&quot;sharing-popup-&quot; + data:sharingId' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-button-&quot; + data:sharingId' role='button'>
      <b:include name='sharingButtonContent'/>
    </button>
    <b:include name='sharingButtonsMenu'/>
  </div>
</b:includable>
  <b:includable id='sharingButtonsMenu'>
  <div class='share-buttons-container'>
    <ul aria-hidden='true' class='share-buttons hidden' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-popup-&quot; + data:sharingId' role='menu'>
      <b:loop values='(data:platforms ?: data:blog.sharing.platforms) filter (p =&gt; p.key not in {&quot;blogThis&quot;})' var='platform'>
        <li>
          <b:include name='sharingButton'/>
        </li>
      </b:loop>
      <li aria-hidden='true' class='hidden'>
        <b:include name='otherSharingButton'/>
      </li>
    </ul>
  </div>
</b:includable>
  <b:includable id='sharingPlatformIcon'>
  <b:include data='{ iconClass: (&quot;touch-icon sharing-&quot; + data:platform.key) }' expr:name='data:platform.key + &quot;Icon&quot;'/>
</b:includable>
  <b:includable id='snippetedPostByline'>
  <b:with value='(data:widgets first (w =&gt; w.type == &quot;Blog&quot;)).allBylineItems' var='blogBylines'>
    <div class='item-byline'>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;author&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showAuthor' data='post' name='postAuthor'/>
      </b:with>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;timestamp&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showDate' data='post' name='postTimestamp'/>
      </b:with>
    </div>
  </b:with>
</b:includable>
  <b:includable id='snippetedPostContent'>
  <div class='post-content'>
    <b:include cond='data:this.postDisplay.showTitle' name='snippetedPostTitle'/>
    <b:include cond='data:this.postDisplay.showDate or data:this.postDisplay.showAuthor' name='snippetedPostByline'/>
    <b:include cond='data:this.postDisplay.showSnippet' data='post' name='postSnippet'/>
    <b:include cond='data:this.postDisplay.showFeaturedImage and data:post.featuredImage' name='snippetedPostThumbnail'/>
  </div>
</b:includable>
  <b:includable id='snippetedPostThumbnail'>
  <div class='item-thumbnail'>
    <a expr:href='data:post.url'>
      <b:include data='{                         image: data:post.featuredImage,                         imageSizes: [72, 144],                         imageRatio: &quot;1:1&quot;,                         sourceSizes: &quot;72px&quot;                        }' name='responsiveImage'/>
    </a>
  </div>
</b:includable>
  <b:includable id='snippetedPostTitle'>
  <b:if cond='data:post.title != &quot;&quot;'>
    <h3 class='post-title'><a expr:href='data:post.url'><data:post.title/></a></h3>
  </b:if>
</b:includable>
  <b:includable id='snippetedPosts'>
  <div role='feed'>
    <!-- Don't render the post that we're currently already looking at. -->
    <b:loop values='data:posts filter (p =&gt; p.id != data:view.postId)' var='post'>
      <article class='post' role='article'>
        <b:include name='snippetedPostContent'/>
      </article>
    </b:loop>
  </div>
</b:includable>
</b:widget>
</b:section>
	</div>
  </b:if>
  <b:if cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;ticker&quot;))'>
    <!-- ticker Wrapper -->
    <div class='flex-center' id='ticker-wrapper'>
      <b:section class='ticker container row-x1' id='ticker' maxwidgets='1' name='ticker News' showaddelement='yes'>
        <b:widget id='PopularPosts1' locked='false' title='🔥Hot:' type='PopularPosts' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='numItemsToShow'>4</b:widget-setting>
            <b:widget-setting name='showThumbnails'>false</b:widget-setting>
            <b:widget-setting name='showSnippets'>false</b:widget-setting>
            <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:if cond='data:widget.sectionId == &quot;ticker&quot;'>
          <div class='ticker-items'>
              <b:loop index='i' values='data:posts' var='post'>
                  <div expr:class='&quot;ticker-item item-&quot;+data:i'>
                      <h2 class='entry-title'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
                  </div>
              </b:loop>
          </div>
          <b:else/>
          <b:class name='default-items'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='content'/>
          </b:loop>
        </b:if>
      </div>
    </b:includable>
          <b:includable id='blogThisShare'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='bylineByName' var='byline'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='bylineRegion' var='regionItems'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='commentsLink'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='commentsLinkIframe'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='content' var='post'>
      <b:include name='popular-content'/>
    </b:includable>
          <b:includable id='emailPostIcon'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='facebookShare'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='footerBylines'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='googlePlusShare'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='headerByline'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='linkShare'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='otherSharingButton'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='platformShare'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postAuthor'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postCommentsLink'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postJumpLink' var='post'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postLabels'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postShareButtons'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='postTimestamp'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='sharingButton'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='sharingButtonContent'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='sharingButtons'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='sharingButtonsMenu'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='sharingPlatformIcon'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='snippetedPostByline'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='snippetedPostContent'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='snippetedPostThumbnail'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='snippetedPostTitle'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='snippetedPosts'><b:comment>Replaced</b:comment></b:includable>
        </b:widget>
      </b:section>
    </div>
  </b:if>
  <b:if cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;trending&quot;))'>
  <!-- Trending Wrapper -->
    <div class='flex-center' id='trending-wrapper'>
		<b:section class='trending container row-x1' id='trending' maxwidgets='1' name='Trending this month' showaddelement='yes'>
<b:widget id='PopularPosts4' locked='true' title='Trending this month' type='PopularPosts' version='2' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='numItemsToShow'>6</b:widget-setting>
    <b:widget-setting name='showThumbnails'>true</b:widget-setting>
    <b:widget-setting name='showSnippets'>true</b:widget-setting>
    <b:widget-setting name='timeRange'>ALL_TIME</b:widget-setting>
  </b:widget-settings>
  <b:includable id='main' var='this'>
			  <b:include name='widget-title'/>
			  <div class='widget-content'>
				<b:loop index='i' values='data:posts' var='post'>
					<b:include data='post' name='content'/>
				</b:loop>
			  </div>
			</b:includable>
  <b:includable id='blogThisShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
  <b:includable id='bylineByName' var='byline'>
  <b:switch var='data:byline.name'>
  <b:case value='share'/>
    <b:include cond='data:post.shareUrl' name='postShareButtons'/>
  <b:case value='comments'/>
    <b:include cond='data:post.allowComments' name='postCommentsLink'/>
  <b:case value='location'/>
    <b:include cond='data:post.location' name='postLocation'/>
  <b:case value='timestamp'/>
    <b:include cond='not data:view.isPage' name='postTimestamp'/>
  <b:case value='author'/>
    <b:include name='postAuthor'/>
  <b:case value='labels'/>
    <b:include cond='data:post.labels' name='postLabels'/>
  <b:case value='icons'/>
    <b:include cond='data:post.emailPostUrl' name='emailPostIcon'/>
  </b:switch>
</b:includable>
  <b:includable id='bylineRegion' var='regionItems'>
  <b:loop values='data:regionItems' var='byline'>
    <b:include data='byline' name='bylineByName'/>
  </b:loop>
</b:includable>
  <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
  <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
  <b:includable id='content' var='post'>
			  <div>
				  <!-- Trending post Card-->
				  <b:class expr:name='&quot;popular-post post item-&quot;+data:i'/>
				  
				  <div class='entry-header'>
					<b:if cond='(data:post.labels and data:widgets.Blog.first.allBylineItems.labels) or data:widgets.Blog.first.allBylineItems.timestamp'>
						<div class='entry-meta mi'>
							<b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'>
							<span class='entry-time'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span>
							</b:if>
							<b:if cond='data:post.allowComments and data:post.numberOfComments &gt; 0'><span class='on sp'>-</span><a class='cmt-count' expr:href='data:post.commentsUrl' expr:title='data:post.numberOfComments + &quot; &quot; + data:messages.comments'><data:post.numberOfComments/></a></b:if>
						</div>
					</b:if>
					
					<h2 class='entry-title'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
					&lt;!-- Trending post Label--&gt;
					<div class='entry-meta mi tag'><b:if cond='data:post.labels and data:widgets.Blog.first.allBylineItems.labels'>
					<!--<span class='entry-tag'   data-des='trending section'><data:post.labels.first.name/></span>-->
					<b:loop values='data:post.labels' var='label'>
						<a class='entry-tag' expr:href='data:label.url' rel='tag'><data:label.name/></a>
					</b:loop>
					</b:if></div>
					  &lt;!-- Trending post Author--&gt;
					  <div class='author-row'>
					  <span class='author-avatar-wrap'><span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/></span>
					  <div><span class='author-name'><data:post.author.name/></span>
					  </div>
					  </div>
				  </div>
				
			  </div>
			</b:includable>
  <b:includable id='emailPostIcon'>
  <span class='byline post-icons'>
    <!-- email post links -->
    <span class='item-action'>
      <a expr:href='data:post.emailPostUrl' expr:title='data:messages.emailPost'>
        <b:include data='{ iconClass: &quot;touch-icon sharing-icon&quot; }' name='emailIcon'/>
      </a>
    </span>
  </span>
</b:includable>
  <b:includable id='facebookShare'>
  <b:with value='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
  <b:includable id='footerBylines'>
  <b:if cond='data:widgets.Blog.first.footerBylines'>
    <b:loop index='i' values='data:widgets.Blog.first.footerBylines' var='region'>
      <b:if cond='not data:region.items.empty'>
        <div expr:class='&quot;post-footer-line post-footer-line-&quot; + (data:i + 1)'>
          <b:with value='&quot;footer-&quot; + (data:i + 1)' var='regionName'>
            <b:include data='region.items' name='bylineRegion'/>
          </b:with>
        </div>
      </b:if>
    </b:loop>
  </b:if>
</b:includable>
  <b:includable id='googlePlusShare'>
  <div class='goog-inline-block google-plus-share-container'>
    <g:plusone annotation='inline' expr:href='data:originalUrl.canonical.http' size='medium' source='blogger:blog:plusone'/>
  </div>
</b:includable>
  <b:includable id='headerByline'>
  <b:if cond='data:widgets.Blog.first.headerByline'>
    <div class='post-header'>
      <div class='post-header-line-1'>
        <b:with value='&quot;header-1&quot;' var='regionName'>
          <b:include data='data:widgets.Blog.first.headerByline.items' name='bylineRegion'/>
        </b:with>
      </div>
    </div>
  </b:if>
</b:includable>
  <b:includable id='linkShare'>
  <b:with value='&quot;window.prompt(\&quot;Copy to clipboard: Ctrl+C, Enter\&quot;, \&quot;&quot; + data:originalUrl + &quot;\&quot;); return false;&quot;' var='onclick'>
    <b:include name='platformShare'/>
  </b:with>
</b:includable>
  <b:includable id='otherSharingButton'>
  <span class='sharing-platform-button sharing-element-other' expr:aria-label='data:messages.shareToOtherApps.escaped' expr:data-url='data:originalUrl' expr:title='data:messages.shareToOtherApps.escaped' role='menuitem' tabindex='-1'>
    <b:with value='{key: &quot;sharingOther&quot;}' var='platform'>
      <b:include name='sharingPlatformIcon'/>
    </b:with>
    <span class='platform-sharing-text'><data:messages.shareOtherApps.escaped/></span>
  </span>
</b:includable>
  <b:includable id='platformShare'>
  <a expr:class='&quot;goog-inline-block sharing-&quot; + data:platform.key' expr:data-url='data:originalUrl' expr:href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:onclick='data:onclick ? data:onclick : &quot;&quot;' expr:title='data:platform.shareMessage' target='_blank'>
    <span class='share-button-link-text'>
      <data:platform.shareMessage/>
    </span>
  </a>
</b:includable>
  <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
  <b:includable id='postCommentsLink'>
  <span class='byline post-comment-link container'>
    <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
  </span>
</b:includable>
  <b:includable id='postJumpLink' var='post'>
  <div class='jump-link flat-button'>
    <a expr:href='data:post.url fragment &quot;more&quot;' expr:title='data:post.title'>
      <b:eval expr='data:blog.jumpLinkMessage'/>
    </a>
  </div>
</b:includable>
  <b:includable id='postLabels'>
  <span class='byline post-labels'>
    <span class='byline-label'><data:byline.label/></span>
    <b:loop index='i' values='data:post.labels' var='label'>
      <a expr:href='data:label.url' rel='tag'>
        <data:label.name/>
      </a>
    </b:loop>
  </span>
</b:includable>
  <b:includable id='postLocation'>
  <span class='byline post-location'>
    <data:byline.label/>
    <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
  </span>
</b:includable>
  <b:includable id='postReactions'>
  <!-- Reaction feature no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
  <b:includable id='postShareButtons'>
  <div class='byline post-share-buttons goog-inline-block'>
    <b:with value='data:sharingId ?: ((data:widget.instanceId ?: &quot;sharing&quot;) + &quot;-&quot; + (data:regionName ?: &quot;byline&quot;) + &quot;-&quot; + data:post.id)' var='sharingId'>
      <!-- Note: 'sharingButtons' includable is from the default Sharing widget markup. -->
      <b:include data='{                                                sharingId: data:sharingId,                                                originalUrl: data:post.url,                                                platforms: data:this.sharing.platforms,                                                shareUrl: data:post.shareUrl,                                                shareTitle: data:post.title,                                              }' name='sharingButtons'/>
    </b:with>
  </div>
</b:includable>
  <b:includable id='postTimestamp'>
  <span class='byline post-timestamp'>
    <data:byline.label/>
    <b:if cond='data:post.url'>
      <meta expr:content='data:post.url.canonical'/>
      <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
        <time class='published' expr:datetime='data:post.date.iso8601' expr:title='data:post.date.iso8601'>
          <data:post.date/>
        </time>
      </a>
    </b:if>
  </span>
</b:includable>
  <b:includable id='sharingButton'>
  <span expr:aria-label='data:platform.shareMessage' expr:class='&quot;sharing-platform-button sharing-element-&quot; + data:platform.key' expr:data-href='data:shareUrl + &quot;&amp;target=&quot; + data:platform.target' expr:data-url='data:originalUrl' expr:title='data:platform.shareMessage' role='menuitem' tabindex='-1'>
    <b:include name='sharingPlatformIcon'/>
    <span class='platform-sharing-text'><data:platform.name/></span>
  </span>
</b:includable>
  <b:includable id='sharingButtonContent'>
  <div class='flat-icon-button ripple'>
    <b:include name='shareIcon'/>
  </div>
</b:includable>
  <b:includable id='sharingButtons'>
  <div class='sharing' expr:aria-owns='&quot;sharing-popup-&quot; + data:sharingId' expr:data-title='data:shareTitle'>
    <button class='sharing-button touch-icon-button' expr:aria-controls='&quot;sharing-popup-&quot; + data:sharingId' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-button-&quot; + data:sharingId' role='button'>
      <b:include name='sharingButtonContent'/>
    </button>
    <b:include name='sharingButtonsMenu'/>
  </div>
</b:includable>
  <b:includable id='sharingButtonsMenu'>
  <div class='share-buttons-container'>
    <ul aria-hidden='true' class='share-buttons hidden' expr:aria-label='data:messages.share.escaped' expr:id='&quot;sharing-popup-&quot; + data:sharingId' role='menu'>
      <b:loop values='(data:platforms ?: data:blog.sharing.platforms) filter (p =&gt; p.key not in {&quot;blogThis&quot;})' var='platform'>
        <li>
          <b:include name='sharingButton'/>
        </li>
      </b:loop>
      <li aria-hidden='true' class='hidden'>
        <b:include name='otherSharingButton'/>
      </li>
    </ul>
  </div>
</b:includable>
  <b:includable id='sharingPlatformIcon'>
  <b:include data='{ iconClass: (&quot;touch-icon sharing-&quot; + data:platform.key) }' expr:name='data:platform.key + &quot;Icon&quot;'/>
</b:includable>
  <b:includable id='snippetedPostByline'>
  <b:with value='(data:widgets first (w =&gt; w.type == &quot;Blog&quot;)).allBylineItems' var='blogBylines'>
    <div class='item-byline'>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;author&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showAuthor' data='post' name='postAuthor'/>
      </b:with>
      <b:with value='data:blogBylines first (i =&gt; i.name == &quot;timestamp&quot;)' var='byline'>
        <b:include cond='data:byline and data:this.postDisplay.showDate' data='post' name='postTimestamp'/>
      </b:with>
    </div>
  </b:with>
</b:includable>
  <b:includable id='snippetedPostContent'>
  <div class='post-content'>
    <b:include cond='data:this.postDisplay.showTitle' name='snippetedPostTitle'/>
    <b:include cond='data:this.postDisplay.showDate or data:this.postDisplay.showAuthor' name='snippetedPostByline'/>
    <b:include cond='data:this.postDisplay.showSnippet' data='post' name='postSnippet'/>
    <b:include cond='data:this.postDisplay.showFeaturedImage and data:post.featuredImage' name='snippetedPostThumbnail'/>
  </div>
</b:includable>
  <b:includable id='snippetedPostThumbnail'>
  <div class='item-thumbnail'>
    <a expr:href='data:post.url'>
      <b:include data='{                         image: data:post.featuredImage,                         imageSizes: [72, 144],                         imageRatio: &quot;1:1&quot;,                         sourceSizes: &quot;72px&quot;                        }' name='responsiveImage'/>
    </a>
  </div>
</b:includable>
  <b:includable id='snippetedPostTitle'>
  <b:if cond='data:post.title != &quot;&quot;'>
    <h3 class='post-title'><a expr:href='data:post.url'><data:post.title/></a></h3>
  </b:if>
</b:includable>
  <b:includable id='snippetedPosts'>
  <div role='feed'>
    <!-- Don't render the post that we're currently already looking at. -->
    <b:loop values='data:posts filter (p =&gt; p.id != data:view.postId)' var='post'>
      <article class='post' role='article'>
        <b:include name='snippetedPostContent'/>
      </article>
    </b:loop>
  </div>
</b:includable>
</b:widget>
</b:section>
	</div>
  </b:if>
  
  <!-- Content Wrapper -->
  <div class='flex-center' id='content-wrapper'>
    <div class='container row-x1'>
      <!-- Main Wrapper -->
      <main id='main-wrapper'>
        <b:class cond='(data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;content-section-2&quot;))' name='has-cs2'/>
         <b:section class='content-section' cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;content-section-1&quot;))' id='content-section-1' name='Content Section 1' showaddelement='yes'>
           <b:widget id='HTML10' locked='false' title='Novel' type='HTML' version='2' visible='true'>
             <b:widget-settings>
               <b:widget-setting name='content'>{getContent} $results={5} $label={recent} $type={block}</b:widget-setting>
             </b:widget-settings>
             <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
           </b:widget>
           <b:widget id='HTML12' locked='false' title='Gadgets' type='HTML' version='2' visible='false'>
             <b:widget-settings>
               <b:widget-setting name='content'>{getContent} $results={3} $label={recent} $type={grid}</b:widget-setting>
             </b:widget-settings>
             <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
           </b:widget>
           <b:widget id='HTML14' locked='false' title='{ads}' type='HTML' version='2' visible='false'>
             <b:widget-settings>
               <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
             </b:widget-settings>
             <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
           </b:widget>
           <b:widget id='LinkList155' locked='false' title='Main Menu' type='LinkList' version='2' visible='true'>
             <b:widget-settings>
               <b:widget-setting name='sorting'>NONE</b:widget-setting>
               <b:widget-setting name='text-1'><![CDATA[Mega Menu<svg fill='currentColor' height='1em' viewBox='0 0 24 24' width='1em'><path d='M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'/></svg>]]></b:widget-setting>
               <b:widget-setting name='link-1'><![CDATA[[findmega label=&quot;recent&quot; type=&quot;oneMega&quot;]]]></b:widget-setting>
               <b:widget-setting name='text-0'><![CDATA[Home<svg fill='currentColor' height='1em' viewBox='0 0 24 24' width='1em'><path d='M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'/></svg>]]></b:widget-setting>
               <b:widget-setting name='link-0'>/</b:widget-setting>
             </b:widget-settings>
             <b:includable id='main' var='this'>
      <b:include cond='data:widget.sectionId not in [&quot;snapnews-main-menu&quot;, &quot;footer-menu&quot;]' name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
             <b:includable id='content'>
      <b:include name='linkListContent'/>
    </b:includable>
           </b:widget>
           <b:widget id='Label1' locked='false' title='Labels' type='Label' version='2' visible='true'>
             <b:widget-settings>
               <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
               <b:widget-setting name='display'>LIST</b:widget-setting>
               <b:widget-setting name='selectedLabelsList'/>
               <b:widget-setting name='showType'>ALL</b:widget-setting>
               <b:widget-setting name='showFreqNumbers'>true</b:widget-setting>
             </b:widget-settings>
             <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
             <b:includable id='cloud'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a class='label-name' expr:href='data:label.url'>
              <data:label.name/>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
             <b:includable id='content'>
      <div class='widget-content'>
        <b:class expr:name='data:this.display + &quot;-label&quot;'/>
        <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
        <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
      </div>
    </b:includable>
             <b:includable id='list'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <a class='label-name' expr:href='data:label.url'>
              <data:label.name/><b:if cond='data:this.showFreqNumbers'><span class='label-count'>(<data:label.count/>)</span></b:if>
            </a>
          </li>
        </b:loop>
      </ul>
    </b:includable>
           </b:widget>
         </b:section>
        <b:section class='main' id='main' maxwidgets='1' name='Main Posts' showaddelement='yes'>
          <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='commentLabel'>$type={blogger}</b:widget-setting>
              <b:widget-setting name='showShareButtons'>true</b:widget-setting>
              <b:widget-setting name='authorLabel'>by</b:widget-setting>
              <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
              <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
              <b:widget-setting name='timestampLabel'>&#8226;</b:widget-setting>
              <b:widget-setting name='reactionsLabel'/>
              <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
              <b:widget-setting name='style.layout'>1x1</b:widget-setting>
              <b:widget-setting name='showLocation'>false</b:widget-setting>
              <b:widget-setting name='showTimestamp'>true</b:widget-setting>
              <b:widget-setting name='postsPerAd'>1</b:widget-setting>
              <b:widget-setting name='style.bordercolor'>#000000</b:widget-setting>
              <b:widget-setting name='showDateHeader'>false</b:widget-setting>
              <b:widget-setting name='style.textcolor'>#f0f2f5</b:widget-setting>
              <b:widget-setting name='showCommentLink'>true</b:widget-setting>
              <b:widget-setting name='style.urlcolor'>#ff7a18</b:widget-setting>
              <b:widget-setting name='showAuthor'>true</b:widget-setting>
              <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
              <b:widget-setting name='style.bgcolor'>#000000</b:widget-setting>
              <b:widget-setting name='showLabels'>true</b:widget-setting>
              <b:widget-setting name='postLabelsLabel'>Tags:</b:widget-setting>
              <b:widget-setting name='showBacklinks'>false</b:widget-setting>
              <b:widget-setting name='showInlineAds'>false</b:widget-setting>
              <b:widget-setting name='showReactions'>false</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:tag class='blog-posts-wrap' cond='data:view.isMultipleItems' name='div'>
        <b:include cond='data:view.isHomepage' name='blogPostsTitle'/>
        <b:include name='searchMessage'/>
        <div class='blog-posts hfeed'>
          <b:class cond='data:view.isMultipleItems' name='index-post-wrap'/>
          <b:class cond='data:view.isSingleItem' name='item-post-wrap'/>
          <b:loop index='i' values='data:posts' var='post'>
            <b:include data='post' name='postCommentsAndAd'/>
          </b:loop>
        </div>
      </b:tag>
      <b:include cond='data:view.isMultipleItems' name='ajaxPagination'/>
      <b:include name='feedLinks'/>
      <b:include name='exportBlogContent'/>
    </b:includable>
            <b:includable id='aboutPostAuthor'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='addComments'>
      <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'><data:messages.postAComment/></a>
    </b:includable>
            <b:includable id='ajaxPagination'>
      <!-- Ajax Pagination on Index -->
      <div class='blog-pager' id='blog-pager'>
        <b:class cond='data:posts.empty' name='no-blog-posts'/>
        <b:if cond='data:olderPageUrl'>
          <a class='blog-pager-older-link load-more btn' expr:data-load='data:olderPageUrl.canonical' href='javascript:;' id='vtrick-pro-load-more-link'><b:include data='{ message: &quot;loadMorePosts&quot; }' name='theme-custom-lang'/></a>
          <span class='loading'><div class='loader'/></span>
          <span class='no-more load-more btn'><b:include data='{ message: &quot;noMorePosts&quot; }' name='theme-custom-lang'/></span>
          <b:else/>
          <span class='no-more load-more btn show'><b:include data='{ message: &quot;noMorePosts&quot; }' name='theme-custom-lang'/></span>
        </b:if>
      </div>
    </b:includable>
            <b:includable id='backLinks' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='blogPostsTitle'>
              <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
                <div class='title-wrap bp-title'><h3 class='title'><data:blog.jumpLinkMessage/></h3><a class='wt-l' href='/search'><data:messages.viewAll/></a></div>
              </b:if>
            </b:includable>
            <b:includable id='blogThisShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='bylineByName' var='byline'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='bylineRegion' var='regionItems'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentAuthorAvatar'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentDeleteIcon' var='comment'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentForm' var='post'>
      <div class='comment-form'>
        <a name='comment-form'/>
        <b:include data='post' name='commentFormIframeSrc'/>
        <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='90px' id='comment-editor' name='comment-editor' src='' title='Blogger comment' width='100%'/>
        <data:post.cmtfpIframe/>
        <script type='text/javascript'>
          BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
        </script>
      </div>
    </b:includable>
            <b:includable id='commentFormIframeSrc' var='post'>
      <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=soho&quot;' id='comment-editor-src' rel='noopener noreferrer' title='Comment Form Link'/>
    </b:includable>
            <b:includable id='commentItem' var='comment'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentList' var='comments'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentPicker' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='comments' var='post'>
      <a name='comments'/>
      <b:include name='commentsTitle'/>
	  
      <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
        <b:class expr:name='data:post.numberOfComments != 0 ? &quot;has-comments&quot; : &quot;no-comments&quot;'/>
        <b:if cond='data:post.allowNewComments'>
          <b:if cond='data:this.messages.blogComment'><p class='comments-message excerpt'><data:this.messages.blogComment/></p></b:if>
          <b:else/>
          <b:if cond='data:post.noNewCommentsText and (data:post.numberOfComments == 0)'><p class='comments-message no-new-comments excerpt'><data:post.noNewCommentsText/><em>*</em></p></b:if>
        </b:if>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.numberOfComments != 0'>
            <div class='comments-content'>
              <div id='comment-holder'>
                <!--<data:post.commentHtml/>-->
				<b:include data='post' name='commentsContent-v1'/>
              </div>
            </div>
          </b:if>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='commentForm'/>
          </b:if>
          <b:if cond='!data:post.allowNewComments'><b:if cond='data:post.noNewCommentsText and (data:post.numberOfComments != 0)'><p class='comments-message no-new-comments excerpt'><data:post.noNewCommentsText/><em>*</em></p></b:if></b:if>
          <b:else/>
          <p class='comments-message excerpt'>Please Select Embedded Mode To Show The Comment System.<em>*</em></p>
        </b:if>
      </section>

    </b:includable>
            <b:includable id='commentsContent-v1' var='post'>
  <div class='comment-thread toplevel-thread'>
  <input class='commentsorting hidden' id='comment-sortbox' style='appearance:auto' type='checkbox'/>
  
	<div class='comment-replybox-thread' id='top-ce'/>
	<div class='top-comment-wrap'>
	<div class='comment-control'>
		<div class='loadmore hidden' expr:data-post-id='data:post.id'><a expr:title='data:messages.showMore' href='#loadmore' rel='nofollow' target='_self'><data:messages.showMore/></a></div>
		<div class='commentSort'><label aria-label='Sort comments' class='sort-label' data-first='First' data-last='Last' for='comment-sortbox'/></div>
	</div>
    <ol class='top2bot' id='top-ra'>
      <b:loop values='data:post.comments' var='firstlevel'>
        <b:if cond='!data:firstlevel.inReplyTo'>
		
          <li class='comment hidden' expr:id='&quot;c&quot; + data:firstlevel.id'>
            <div class='avatar-image-container'>				
				<b:if cond='data:firstlevel.authorPhoto.url'>
                    <img class='lazyload' expr:alt='data:firstlevel.author' expr:data-src='resizeImage(data:firstlevel.authorPhoto.url, 72, &quot;1:1&quot;)'/>
                <b:else/>
                    <img class='lazyload' data-src='https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg' expr:alt='data:firstlevel.author'/>
                </b:if>
            </div>
			
            <div class='comment-block'>
              <div class='comment-header'>
                <cite class='user'><b:class cond='data:post.adminClass == data:firstlevel.adminClass' name='author-comment'/><a expr:href='data:firstlevel.authorUrl' expr:title='data:firstlevel.author' rel='noopener nofollow' target='_blank'><data:firstlevel.author/></a></cite>
			  </div>
			  <p class='comment-content'><data:firstlevel.body/></p>
			</div>
              <span class='comment-actions secondary-text'>
                <a class='comment-reply' expr:data-comment-id='data:firstlevel.id' expr:href='&quot;#&quot; + data:firstlevel.id' rel='nofollow' target='_self' title='Reply'>Reply</a>
                <span expr:class='&quot;item-control-xxx &quot; + data:firstlevel.adminClass'><a expr:href='data:firstlevel.deleteUrl' expr:title='data:messages.deleteComment' rel='nofollow' target='_self'>Delete</a></span>
				<span class='datetime secondary-text'>
                  <a expr:datetime='data:firstlevel.timestampAbs' expr:href='data:firstlevel.url' expr:title='data:firstlevel.timestamp' rel='nofollow' target='_self'><data:firstlevel.timestamp/></a>
                </span>
              </span>
            
			<div class='comment-replybox-single' expr:id='&quot;c&quot; + data:firstlevel.id + &quot;-ce&quot;'/>
			
            <div class='comment-replies'>
              <div class='comment-thread secondlevel-thread' expr:id='&quot;c&quot; + data:firstlevel.id + &quot;-rt&quot;'>
                <ol class='thread-chrome thread-expanded' expr:id='&quot;c&quot; + data:firstlevel.id + &quot;-ra&quot;'>
                  <!-- Second Level -->
                  <b:loop values='data:post.comments' var='secondlevel'>
                    <b:if cond='data:secondlevel.inReplyTo == data:firstlevel.id'>
                      <li class='comment' expr:id='&quot;c&quot; + data:secondlevel.id'>
                        <div class='avatar-image-container'>
							<b:if cond='data:secondlevel.authorPhoto.url'>
								<img class='lazyload' expr:alt='data:secondlevel.author' expr:data-src='resizeImage(data:secondlevel.authorPhoto.url, 72, &quot;1:1&quot;)'/>
							<b:else/>
								<img class='lazyload' data-src='https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg' expr:alt='data:secondlevel.author'/>
							</b:if>
                        </div>
                        <div class='comment-block'>
                          <div class='comment-header'>
                            <cite class='user'><b:class cond='data:post.adminClass == data:secondlevel.adminClass' name='author-comment'/><a expr:href='data:secondlevel.authorUrl' expr:title='data:secondlevel.author' rel='noopener nofollow' target='_blank'><data:secondlevel.author/></a></cite>
                          </div>
                          <p class='comment-content'><data:secondlevel.body/></p>
						</div>
                          <span class='comment-actions secondary-text'>
                            <a class='comment-reply' expr:data-comment-id='data:secondlevel.id' expr:href='&quot;#&quot; + data:secondlevel.id' rel='nofollow' target='_self' title='Reply'>Reply</a>
                            <span expr:class='&quot;item-control-xxx &quot; + data:secondlevel.adminClass'><a expr:href='data:secondlevel.deleteUrl' expr:title='data:messages.deleteComment' rel='nofollow' target='_self'>Delete</a></span>
							<span class='datetime secondary-text'><a expr:datetime='data:secondlevel.timestampAbs' expr:href='data:secondlevel.url' expr:title='data:secondlevel.timestamp' rel='nofollow' target='_self'><data:secondlevel.timestamp/></a></span>
                          </span>
						  
                        <div class='comment-replybox-single' expr:id='&quot;c&quot; + data:secondlevel.id + &quot;-ce&quot;'/>
						
                        <div class='comment-replies'>
                          <div class='comment-thread thirdlevel-thread' expr:id='&quot;c&quot; + data:secondlevel.id + &quot;-rt&quot;'>
                            <ol class='thread-chrome thread-expanded' expr:id='&quot;c&quot; + data:secondlevel.id + &quot;-ra&quot;'>
                              <b:loop index='i' values='data:post.comments' var='thirdlevel'>
                                <b:if cond='data:thirdlevel.inReplyTo == data:secondlevel.id'>
                                  <li class='comment' expr:id='&quot;c&quot; + data:thirdlevel.id'>
                                    <div class='avatar-image-container'>
										<b:if cond='data:thirdlevel.authorPhoto.url'>
											<img class='lazyload' expr:alt='data:thirdlevel.author' expr:data-src='resizeImage(data:thirdlevel.authorPhoto.url, 72, &quot;1:1&quot;)'/>
										<b:else/>
											<img class='lazyload' data-src='https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg' expr:alt='data:thirdlevel.author'/>
										</b:if>
                                    </div>
                                    <div class='comment-block'>
                                      <div class='comment-header'>
                                        <cite class='user'><b:class cond='data:post.adminClass == data:thirdlevel.adminClass' name='author-comment'/><a expr:href='data:thirdlevel.authorUrl' expr:title='data:thirdlevel.author' rel='noopener nofollow' target='_blank'><data:thirdlevel.author/></a></cite>
                                      </div>
                                      <p class='comment-content'><data:thirdlevel.body/></p>
									</div>
                                      <span class='comment-actions secondary-text'>
									  <!-- Reply to 2nd Level-->
									  <meta expr:data-2ndlevel='data:secondlevel.last' expr:name='data:i'/>
									  <a class='comment-reply' expr:data-comment-id='data:secondlevel.id' expr:href='&quot;#&quot; + data:secondlevel.id' rel='nofollow' target='_self' title='Reply'>Reply</a>
                                        <span expr:class='&quot;item-control-xxx &quot; + data:thirdlevel.adminClass'><a expr:href='data:thirdlevel.deleteUrl' expr:title='data:messages.deleteComment' rel='nofollow' target='_self'>Delete</a></span>
										<span class='datetime secondary-text'><a expr:datetime='data:secondlevel.timestampAbs' expr:href='data:thirdlevel.url' expr:title='data:thirdlevel.timestamp' rel='nofollow' target='_self'><data:thirdlevel.timestamp/></a></span>
                                      </span>
                                    <div class='comment-replybox-single' expr:id='&quot;c&quot; + data:secondlevel.id + &quot;-ce&quot;'/>
                                  </li>
                                </b:if>
                              </b:loop>
                            </ol>
                          </div>
                        </div>
                        
                      </li>
                    </b:if>
                  </b:loop>
                </ol>
              </div>
            </div>
            
          </li>
        </b:if>
      </b:loop>
    </ol>
    <div class='loadmore hidden' expr:data-post-id='data:post.id'><a expr:title='data:messages.showMore' href='#loadmore' rel='nofollow' target='_self'><data:messages.showMore/></a></div>
	</div>
    
    <b:if cond='data:post.allowComments and data:post.numberOfComments &gt; 0'><div class='continue ' id='top-continue'><a class='comment-reply' expr:href='data:post.commentFormIframeSrc' expr:title='data:messages.postAComment' rel='nofollow' target='_self'><data:messages.postAComment/> <i class='bi bi-chat-right-text-fill'/></a></div>
	<div class='comment-replybox-thread hidden'/></b:if>
  </div>
</b:includable>
            <b:includable id='commentsLink'>
  <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
    <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'>
        <b:param expr:value='data:post.numberOfComments' name='numComments'/>
      </b:message>
    <b:else/>
      <data:messages.postAComment/>
    </b:if>
  </a>
</b:includable>
            <b:includable id='commentsLinkIframe'>
  <!-- G+ comments, no longer available. The includable is retained for backwards-compatibility. -->
</b:includable>
            <b:includable id='commentsTitle'>
      <!-- Comments Title -->
      <div class='title-wrap comments-title'><h3 class='title'><b:if cond='data:post.numberOfComments != 0'><data:post.numberOfComments/> <data:messages.comments/><b:else/><data:messages.postAComment/></b:if></h3></div>
    
</b:includable>
            <b:includable id='defaultAdUnit'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='emailPostIcon'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='exportBlogContent'>
      <b:tag name='script' type='text/javascript'>
      var exportify = {
      noTitle: &quot;<data:messages.noTitle/>&quot;,
      viewAll: &quot;<b:if cond='data:blog.locale.language == &quot;vi&quot;'>Xem thêm<else/><data:messages.viewAll.jsonEscaped/></b:if>&quot;,
      postAuthor: <b:eval expr='data:allBylineItems.author ? &quot;true&quot; : &quot;false&quot;'/>,
      postAuthorLabel: &quot;<b:eval expr='data:allBylineItems.author.label ? data:allBylineItems.author.label : &quot;&quot;'/>&quot;,
      postDate: <b:eval expr='data:allBylineItems.timestamp ? &quot;true&quot; : &quot;false&quot;'/>,
      postDateLabel: &quot;<b:eval expr='data:allBylineItems.timestamp.label ? data:allBylineItems.timestamp.label : &quot;&quot;'/>&quot;
      }
      </b:tag>
    </b:includable>
            <b:includable id='facebookShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='feedLinks'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='feedLinksBody' var='links'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='footerBylines'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='googlePlusShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='headerByline' var='post'>
      <!-- Post Entry Meta -->
      <b:if cond='data:view.isMultipleItems'>
        <b:if cond='data:allBylineItems.author or data:allBylineItems.timestamp'>
          <div class='entry-meta'>
            <b:include cond='data:allBylineItems.author' data='post' name='postAuthor'/>
            <b:include cond='data:allBylineItems.timestamp' data='post' name='postTimestamp'/>
          </div>
        </b:if>
      </b:if>
      <b:if cond='data:view.isPost'>
        <b:if cond='data:allBylineItems.author or data:allBylineItems.timestamp'>
          <b:class name='has-meta'/>
          <div class='entry-meta'>
            <div class='align-left'>
              <b:include cond='data:allBylineItems.author' data='post' name='postAuthor'/>
              <b:include cond='data:allBylineItems.timestamp' data='post' name='postTimestamp'/>
			  <b:include data='post' name='readTime'/>
            </div>
            <b:if cond='data:allBylineItems.comments'>
              <div class='align-right'>
                <b:include cond='data:allBylineItems.comments' data='post' name='postCommentsLink'/>
              </div>
            </b:if>
          </div>
        </b:if>
      </b:if>
    </b:includable>
            <b:includable id='homePageLink'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='iframeComments' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='indexPost' var='post'>
      <!-- Index Post Content -->
      <b:include data='post' name='postFeaturedImage'/>
      <div class='entry-header'>
		<b:include data='post' name='postTag'/>
        <b:include data='post' name='postHeader'/>
        <b:include data='post' name='postBodySnippet'/>
		<b:include data='post' name='postArow'/>
        <!--<b:include data='post' name='headerByline'/>-->
      </div>
    </b:includable>
            <b:includable id='inlineAd' var='post'>
      <b:if cond='!data:view.isPreview'>
        <b:if cond='data:i != 0'>
          <b:if cond='data:post.includeAd and data:post.adNumber'>
            <b:if cond='data:this.adCode or data:this.adClientId or data:blog.adsenseClientId'>
              <div expr:class='&quot;index-post post-ad-type post-ad-&quot; + data:i'>
                <div class='inline-ad-wrap'>
                  <div class='inline-ad'>
                    <b:if cond='data:this.adCode != &quot;&quot;'>
                      <data:this.adCode/>
                      <b:else/>
                      <b:if cond='data:this.adClientId or data:blog.adsenseClientId'>
                        <b:include name='defaultAdUnit'/>
                      </b:if>
                    </b:if>
                  </div>
                </div>
              </div>
            </b:if>
          </b:if>
        </b:if>
      </b:if>
    </b:includable>
            <b:includable id='itemPost' var='post'>
      <!-- Item Post Content -->
      <b:include data='post' name='postMeta'/>
      <div class='item-post-inner'>
        <div class='entry-header blog-entry-header p-eh'>
          <b:include data='post' name='postHeader'/>
        </div>
        <div class='entry-content-wrap'>
          <b:include data='post' name='postBody'/>
          <b:include cond='data:view.isPost and data:allBylineItems.labels' data='post' name='postLabels'/>
          <b:include cond='data:view.isSingleItem and data:allBylineItems.share' data='post' name='postShareButtons'/>
        </div>
      </div>
      <b:include cond='data:view.isPost' data='post' name='postFooter'/>
    </b:includable>
            <b:includable id='linkShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='manageComments'>
  <a expr:href='data:post.manageCommentsUrl' expr:onclick='data:post.manageCommentsUrlOnclick'>
    <b:message name='messages.manageComments'/>
  </a>
</b:includable>
            <b:includable id='nextPageLink'>
      <b:if cond='data:olderPageUrl'>
        <a class='post-nav-older-link' expr:href='data:olderPageUrl.canonical' expr:id='data:widget.instanceId + &quot;_post-nav-older-link&quot;'>
          <b:include data='{ message: &quot;nextPost&quot; }' name='theme-custom-lang'/>
        </a>
        <b:else/>
        <span class='post-nav-older-link'>
          <b:include data='{ message: &quot;nextPost&quot; }' name='theme-custom-lang'/>
        </span>
      </b:if>
    </b:includable>
            <b:includable id='otherSharingButton'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='platformShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='post' var='post'>
      <!-- Index Posts -->
      <b:if cond='data:view.isMultipleItems'>
        <b:include data='post' name='indexPost'/>
      </b:if>
      <!-- Item Post -->
      <b:if cond='data:view.isSingleItem'>
        <b:include data='post' name='itemPost'/>
      </b:if>
    </b:includable>
            <b:includable id='postArow' var='post'>
		<!-- Post Author -->
		<div class='author-row'>
		<b:if cond='data:allBylineItems.author'><span class='author-avatar-wrap'><span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/></span></b:if>
		<div><b:if cond='data:allBylineItems.author'><span class='author-name'><data:post.author.name/></span><b:if cond='data:allBylineItems.author and data:allBylineItems.timestamp.label'><span class='on sp'><data:allBylineItems.timestamp.label/></span></b:if></b:if><b:if cond='data:widgets.Blog.first.allBylineItems.timestamp'><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></b:if></div>
		<b:if cond='data:post.allowComments and data:post.numberOfComments &gt; 0'><a class='cmt-count' expr:href='data:post.commentsUrl' expr:title='data:post.numberOfComments + &quot; &quot; + data:messages.comments'><data:post.numberOfComments/></a></b:if>
		</div>
	</b:includable>
            <b:includable id='postAuthor' var='post'>
      <!-- Post Author -->
      <span class='entry-author mi'><b:if cond='data:view.isPost'><span class='author-avatar-wrap'><span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/></span></b:if><b:if cond='data:allBylineItems.author.label'><span class='by sp'><data:allBylineItems.author.label/></span></b:if><span class='author-name'><data:post.author.name/></span></span>
    </b:includable>
            <b:includable id='postBody' var='post'>
      <!-- Ads before post content. -->
      <b:if cond='data:view.isPost'><b:tag cond='data:widgets any w =&gt; w.sectionId == &quot;vtrick-pro-main-before-ad&quot;' id='before-ad' name='div'/></b:if>
      <!-- Post Body Entry Content-->
      <div class='post-body entry-content' id='post-body'>
        <data:post.body/>
      </div>
      <!-- Ads after post content. -->
      <b:if cond='data:view.isPost'><b:tag cond='data:widgets any w =&gt; w.sectionId == &quot;vtrick-pro-main-after-ad&quot;' id='after-ad' name='div'/></b:if>
    </b:includable>
            <b:includable id='postBodySnippet' var='post'><p class='entry-excerpt excerpt'><b:eval expr='data:post.snippets.long snippet { length: 250 }'/></p></b:includable>
            <b:includable id='postBreadcrumbs' var='post'>
      <!-- Post Breadcrumbs -->
      <b:if cond='data:view.isPost'>
        <b:if cond='data:skin.vars.breadcrumb == &quot;1px&quot;'><nav id='breadcrumb'><a class='home' expr:href='data:blog.homepageUrl'><data:messages.home/></a><b:if cond='data:post.labels'><em class='delimiter'/><a class='label' expr:href='data:post.labels.first.url'><data:post.labels.first.name/></a></b:if></nav></b:if>
        <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home.jsonEscaped/>&quot;,&quot;item&quot;:&quot;<data:blog.homepageUrl.canonical.jsonEscaped/>&quot;},{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:2,&quot;name&quot;:&quot;<b:if cond='data:post.labels'><data:post.labels.first.name.jsonEscaped/><b:else/><data:messages.posts/></b:if>&quot;,&quot;item&quot;:&quot;<b:if cond='data:post.labels'><data:post.labels.first.url.canonical.jsonEscaped/><b:else/><b:eval expr='data:blog.homepageUrl.canonical.jsonEscaped + &quot;search/&quot;'/></b:if>&quot;},{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:3,&quot;name&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;item&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;}]}</script>
      </b:if>
      <b:if cond='data:view.isPage'>
        <script type='application/ld+json'>{&quot;@context&quot;:&quot;http://schema.org&quot;,&quot;@type&quot;:&quot;BreadcrumbList&quot;,&quot;itemListElement&quot;:[{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:1,&quot;name&quot;:&quot;<data:messages.home.jsonEscaped/>&quot;,&quot;item&quot;:&quot;<data:blog.homepageUrl.canonical.jsonEscaped/>&quot;},{&quot;@type&quot;:&quot;ListItem&quot;,&quot;position&quot;:2,&quot;name&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;item&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;}]}</script>
      </b:if>
    </b:includable>
            <b:includable id='postCategory' var='post'>
      <!-- Post Label -->
      <b:if cond='data:post.labels'><span class='entry-category'><data:post.labels.first.name/></span></b:if>
    </b:includable>
            <b:includable id='postCommentsAndAd' var='post'>
      <!-- In-Feed Ads -->
      <b:include cond='data:view.isMultipleItems and not data:view.search.label and not data:view.search.query and not data:view.isArchive' data='post' name='inlineAd'/>
      <article class='blog-post hentry'>
        <b:class cond='data:view.isMultipleItems' expr:name='&quot;index-post post-&quot; + data:i'/>
        <b:class cond='data:view.isSingleItem' name='item-post'/>
        <b:include data='post' name='post'/>
      </article>
      <b:if cond='data:view.isSingleItem and data:post.allowComments'>
        <!-- Post Comments -->
        <div class='vtrick-pro-blog-post-comments' expr:data-shortcode='data:allBylineItems.comments.label contains &quot;type&quot; ? data:allBylineItems.comments.label : &quot;$type={blogger}&quot;'>
          <b:include data='post' name='threadedCommentsDisqus'/>
          <!--<b:include data='post' name='comments'/>-->
		  <b:if cond='data:allBylineItems.comments.label == &quot;$type={facebook}&quot;'>
				<!-- FACEBOOK CMT JS -->
				<section data-description='facebook comment' id='comments'/>
				<script>//<![CDATA[
				window.addEventListener("load",function(){var e=0;window.addEventListener("scroll",function(){!function(){if(0==e){e=1;var n=document.createElement("script");n.async=!0,n.src=fb_sdk;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}}()})});			//]]>
				</script>
          <b:elseif cond='data:allBylineItems.comments.label contains &quot;$type={disqus}&quot;'/>
				<!-- DISQUS CMT JS -->
				<script>//<![CDATA[
				window.addEventListener("load",function(){var e=0;window.addEventListener("scroll",function(){!function(){if(0==e){e=1;var n=document.createElement("script");n.async=!0,n.src="https://a.disquscdn.com/blogger_item.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}}()})});
				window.addEventListener("load",function(){var e=0;window.addEventListener("scroll",function(){!function(){if(0==e){e=1;var n=document.createElement("script");n.async=!0,n.src="https://"+disqus_shortname+".disqus.com/count.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t)}}()})});				//]]>
				</script>
				<section data-description='disqus comment' id='comments'/>			
          <b:else/>
				<!-- BLOGGER CMT JS -->
				
				<b:include data='post' name='comments'/>
				
          </b:if>
        </div>
		<!--
		<div id='vtrickpro-comments-v1'>
			<b:include data='post' name='comments'/>
		</div>
		-->
      </b:if>
      <!-- Post Navigation -->
      <b:include cond='data:skin.vars.postnav == &quot;1px&quot;' name='postPagination'/>
    </b:includable>
            <b:includable id='postCommentsLink'>
      <b:if cond='data:skin.vars.cmm_count == &quot;1px&quot;'>
        <!-- Post Comments Count -->
			<b:with value='data:widgets.Blog.first' var='option'>
				<b:if cond='data:option.allBylineItems.comments.label == &quot;$type={facebook}&quot;'>
					<span class='entry-comments-link'><div class='fb-comments-count' expr:data-href='data:post.url.canonical'>0</div></span>
				<b:elseif cond='data:option.allBylineItems.comments.label contains &quot;$type={disqus}&quot;'/>
					<!--<span data-disqus-identifier="article_1_identifier" class='disqus-comment-count' expr:data-disqus-url='data:post.url.canonical'>0</span>-->
					<span class='entry-comments-link'><span class='disqus-comment-count' expr:data-disqus-url='data:post.url.canonical'>0</span></span>
				<b:else/>
					<a class='cmt-count' expr:data-href='data:post.commentsUrl' expr:title='data:post.numberOfComments + &quot; &quot; + data:messages.comments' href='#comments'><span class='entry-comments-link'><data:post.numberOfComments/></span></a>
				</b:if>
			</b:with>
		
      </b:if>
    </b:includable>
            <b:includable id='postFeaturedImage' var='post'>
      <!-- Post Featured Image -->
      <a class='entry-image-wrap' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:if cond='data:post.featuredImage'><svg class='entry-thumb' expr:data-image='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped, 72, &quot;1:1&quot;) : resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)' viewBox='0 0 16 9'/><b:else/><svg class='entry-thumb' data-image='https://resources.blogblog.com/img/blank.gif' viewBox='0 0 16 9'/></b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;is-video&quot; : &quot;is-image&quot;'/></a>
    </b:includable>
            <b:includable id='postFooter' var='post'>
      <!-- Post Footer Items -->
      <b:tag class='post-footer' cond='data:post.author.aboutMe or (data:widgets.HTML any w =&gt; w.sectionId == &quot;vtrick-pro-related-posts&quot;) or (data:widgets any w =&gt; w.sectionId == &quot;vtrick-pro-post-footer-ads&quot;)' name='footer'>
        <b:include cond='data:post.author.aboutMe' data='post' name='postFooterAuthorProfile'/>
        <b:include cond='data:widgets.HTML any w =&gt; w.sectionId == &quot;vtrick-pro-related-posts&quot;' data='post' name='relatedPosts'/>
        <b:tag cond='data:widgets any w =&gt; w.sectionId == &quot;vtrick-pro-post-footer-ads&quot;' id='post-footer-ads' name='div'/>
      </b:tag>
    </b:includable>
            <b:includable id='postFooterAuthorProfile' var='post'>
      <div class='about-author'>
        <div class='author-avatar-wrap'>
          <span class='author-avatar' expr:data-image='data:post.author.authorPhoto.image ? resizeImage(data:post.author.authorPhoto.image, 72, &quot;1:1&quot;) : &quot;https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-c/avatar.jpg&quot;'/>
        </div>
        <div class='author-description'>
          <span class='author-title'><b:tag cond='data:post.author.profileUrl' expr:alt='data:post.author.name' expr:href='data:post.author.profileUrl' name='a' rel='noopener noreferrer' target='_blank'><data:post.author.name/></b:tag></span>
          <p class='author-text excerpt'><data:post.author.aboutMe/></p>
        </div>
      </div>
    </b:includable>
            <b:includable id='postHeader' var='post'>
      <b:include cond='data:view.isSingleItem' data='post' name='postBreadcrumbs'/>
      <b:include data='post' name='postTitle'/>
      <b:include cond='data:view.isPost' data='post' name='headerByline'/>
    </b:includable>
            <b:includable id='postJumpLink' var='post'>
      <b:if cond='data:blog.jumpLinkMessage != &quot;hide&quot;'>
        <a class='read-more' expr:href='data:post.url.canonical'><data:blog.jumpLinkMessage/></a>
      </b:if>
    </b:includable>
            <b:includable id='postLabels' var='post'>
      
        <div class='entry-labels' id='post-rating'>
          <b:if cond='data:post.labels'><div>
           <b:if cond='data:allBylineItems.labels.label'><span class='labels-label'><data:allBylineItems.labels.label/></span></b:if>
          <b:loop values='data:post.labels' var='label'>
            <a class='label-link' expr:href='data:label.url' rel='tag'><data:label.name/></a>
          </b:loop>
		  </div></b:if>
		  <b:if cond='data:skin.vars.postrate == &quot;1px&quot;'>
		  <div class='rating'>
			<span class='stars'>
                <span class='score'/>
            </span>
			<span class='rate-value'>4.94</span> / <span class='rate-count'>169</span> rates
		  </div>
		<!-- Post Rating -->
		<script>
		function round(n,r){var o=Math.pow(10,r||0);return Math.round(n*o)/o}
		const  rbase = 4.5,dtime = new Date(&#39;<data:post.date.iso8601/>&#39;);
		var countscale = (dtime.getTime().toString().substring(7,9) + 1) / 101,<b:if cond='data:post.enclosures any (l =&gt; l.url in {&quot;http://rc.post&quot;})'><b:loop index='i' values='data:post.enclosures' var='enclosure'><b:if cond='data:enclosure.url == &quot;http://rc.post&quot;'>ratecount = <data:enclosure.mimeType/>,</b:if></b:loop><b:else/>ratecount = round((parseInt(dtime.getTime().toString().substring(6,9))+1) * countscale),</b:if>rateratio= dtime.getTime().toString().substring(4,6),<b:if cond='data:post.enclosures any (l =&gt; l.url in {&quot;http://ra.post&quot;})'><b:loop index='i' values='data:post.enclosures' var='enclosure'><b:if cond='data:enclosure.url == &quot;http://ra.post&quot;'>ratevalue = <data:enclosure.mimeType/>;</b:if></b:loop><b:else/>ratevalue = ( Math.round(rateratio * (5-rbase)) / 100) + rbase,ratevalue = round(ratevalue,1);</b:if>
		
		
		let jsonLdScript = document.querySelector(&#39;script[role=rating]&#39;),
		jsonld = JSON.parse(jsonLdScript.innerText),
		ratevl = document.querySelector(&#39;#post-rating span.rate-value&#39;),
		ratecnt = document.querySelector(&#39;#post-rating span.rate-count&#39;),
		ratestar = document.querySelector(&#39;#post-rating span.score&#39;);
		
		jsonld.aggregateRating.ratingValue = ratevalue,jsonld.aggregateRating.ratingCount = ratecount;
		
		let newJson = JSON.stringify(jsonld);
		jsonLdScript.innerHTML = newJson,ratevl.innerHTML = ratevalue,ratecnt.innerHTML = ratecount,ratestar.style.width = ratevalue * 17 + &quot;px&quot;;
		</script></b:if>
        </div>
      
    </b:includable>
            <b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postMeta' var='post'>
      <b:if cond='data:view.isPost'>
        <script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;BlogPosting&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;},&quot;headline&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;description&quot;:&quot;<data:post.snippets.short.jsonEscaped/>&quot;,&quot;datePublished&quot;:&quot;<data:post.date.iso8601.jsonEscaped/>&quot;,&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601.jsonEscaped/>&quot;,&quot;image&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,<b:if cond='data:post.featuredImage.isResizable'>&quot;url&quot;:&quot;<b:eval expr='resizeImage(data:post.featuredImage, 1200, &quot;1200:675&quot;)'/>&quot;,&quot;height&quot;:675,&quot;width&quot;:1200<b:else/>&quot;url&quot;:&quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w1200&quot;,&quot;height&quot;:348,&quot;width&quot;:1200</b:if>},&quot;author&quot;:{&quot;@type&quot;:&quot;Person&quot;,&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;},&quot;publisher&quot;:{&quot;@type&quot;:&quot;Organization&quot;,&quot;name&quot;:&quot;Blogger&quot;,&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,&quot;url&quot;:&quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,&quot;width&quot;:206,&quot;height&quot;:60}}}</script>
		<b:if cond='data:skin.vars.postrate == &quot;1px&quot;'>
		<script role='rating' type='application/ld+json'>{
		&quot;@context&quot;: &quot;https://schema.org/&quot;,
		&quot;@type&quot;: &quot;CreativeWorkSeries&quot;,
		&quot;name&quot;: &quot;<data:post.title.jsonEscaped/>&quot;,
		&quot;aggregateRating&quot;: {
        &quot;@type&quot;: &quot;AggregateRating&quot;,
        &quot;ratingValue&quot;: &quot;4.96&quot;,
        &quot;bestRating&quot;: &quot;5&quot;,
        &quot;ratingCount&quot;: &quot;69&quot;
		}
		}</script></b:if>
		<script>let clink  = document.querySelector(&quot;link[rel=canonical]&quot;).href;</script>

	  </b:if>
    </b:includable>
            <b:includable id='postMetadataJSONImage'>
  &quot;image&quot;: {
    &quot;@type&quot;: &quot;ImageObject&quot;,
    <b:if cond='data:post.featuredImage.isResizable'>
    &quot;url&quot;: &quot;<b:eval expr='resizeImage(data:post.featuredImage, 1200, &quot;1200:630&quot;)'/>&quot;,
    &quot;height&quot;: 630,
    &quot;width&quot;: 1200
    <b:else/>
    &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=w1200&quot;,
    &quot;height&quot;: 348,
    &quot;width&quot;: 1200
    </b:if>
  },
</b:includable>
            <b:includable id='postMetadataJSONPublisher'>
 &quot;publisher&quot;: {
    &quot;@type&quot;: &quot;Organization&quot;,
    &quot;name&quot;: &quot;Blogger&quot;,
    &quot;logo&quot;: {
      &quot;@type&quot;: &quot;ImageObject&quot;,
      &quot;url&quot;: &quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,
      &quot;width&quot;: 206,
      &quot;height&quot;: 60
    }
  },
</b:includable>
            <b:includable id='postPagination'>
      <b:if cond='data:view.isPost'>
        <div class='post-nav'>
          <b:include name='previousPageLink'/>
          <b:include name='nextPageLink'/>
        </div>
      </b:if>
    </b:includable>
            <b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postShareButtons' var='post'>
      <!-- Post ShareButtons -->
      <div class='post-share'>
		
        <ul class='vtrick-pro-share-links social social-bg'>
		  <li class='button'><a class='btn facebook window-ify' data-height='500' data-width='520' expr:data-url='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow noreferrer'><span>Facebook</span></a></li>
		  <li class='button'><a class='btn twitter window-ify' data-height='520' data-width='860' expr:data-url='&quot;https://twitter.com/intent/tweet?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow noreferrer'><span>Tweet</span></a></li>
		  <li class='button'><a class='btn copy' href='javascript:;' onclick='copyFunction()' rel='nofollow'><span><data:messages.copy/></span><input expr:value='data:blog.url' id='getlink' readonly='readonly' size='1' type='text' width='1'/></a><span class='LinkCopy' id='LinkCopy'>Link Copied</span></li>
		  <li class='button'><a class='btn share' href='javascript:;' rel='nofollow noreferrer'><label for='offshare-check'><span><data:messages.share/></span></label></a></li>
        </ul>
		<input class='shareIn hidden' id='offshare-check' type='checkbox'/>
		<div class='shareInner'>
			<div class='shareBlock'>
				<div class='shareHeader' expr:data-text='data:messages.shareToOtherApps'>
					<label for='offshare-check'><i class='bi bi-x-circle-fill'/></label>
				</div>
				<div class='shareBox'>
				<div class='sharePreview'>
                    <b:if cond='data:post.featuredImage'>
                        <!--<div class='previewImg lazyload' expr:data-bg='resizeImage(data:post.featuredImage, 400, &quot;18:9&quot;)'/>-->
						<img class='previewImg lazyload' expr:data-src='resizeImage(data:post.featuredImage, 400, &quot;12:7&quot;)'/>
                    </b:if>
                    <div class='previewContent'>
                        <div class='previewTitle' expr:data-text='data:post.title'/>
                        <div class='previewLabel'>
							<b:if cond='data:post.labels'><span expr:data-text='&quot;#&quot; + data:post.labels.first.name'/></b:if>
                        </div>
                    </div>
                </div>
				
				<ul>
					<li class='telegram'><a class='telegram btn window-ify' data-height='520' data-text='Telegram' data-width='860' expr:data-url='&quot;https://telegram.me/share/url?url=&quot; + data:post.url.canonical + &quot;&amp;text=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow'/></li>
					<li class='whatsapp'><a class='whatsapp btn window-ify' data-height='520' data-text='WhatsApp' data-width='860' expr:data-url='&quot;https://api.whatsapp.com/send?text=&quot; + data:post.title.jsEscaped + &quot; | &quot; + data:post.url.canonical' href='javascript:;' rel='nofollow noreferrer'/></li>
					<li class='pinterest-p'><a class='pinterest btn window-ify' data-height='520' data-text='Pinterest' data-width='860' expr:data-url='&quot;https://www.pinterest.com/pin/create/button/?url=&quot; + data:post.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage + &quot;&amp;description=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow'><svg enable-background='new 0 0 56.693 56.693' fill='currentColor' height='16' version='1.1' viewBox='0 0 56.693 56.693' width='16' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z'/></svg></a></li>
					<li class='reddit'><a class='reddit btn window-ify' data-height='520' data-text='Reddit' data-width='860' expr:data-url='&quot;https://reddit.com/submit?url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow noreferrer'/></li>
					<li class='tumblr'><a class='tumblr btn window-ify' data-height='520' data-text='Tumblr' data-width='860' expr:data-url='&quot;https://www.tumblr.com/share/link?url=&quot; + data:post.url.canonical + &quot;&amp;name=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow noreferrer'><svg baseProfile='tiny' fill='currentColor' height='20' version='1.2' viewBox='0 0 24 24' width='20' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g><g><path d='M15.527,17.921v-2.066c-0.669,0.448-1.32,0.67-1.952,0.67c-0.298,0-0.631-0.094-1.004-0.277    c-0.223-0.151-0.354-0.317-0.393-0.503C12.068,15.521,12,15.037,12,14.291V11h3V9h-3V5.644h-1.772    C10.079,6.426,9.93,6.982,9.78,7.317C9.596,7.727,9.298,8.099,8.889,8.433C8.478,8.77,8.052,9.01,7.604,9.158V11H9v4.521    c0,0.52,0.073,0.964,0.223,1.337c0.111,0.298,0.334,0.595,0.671,0.893c0.259,0.262,0.631,0.484,1.115,0.67    c0.595,0.15,1.114,0.223,1.562,0.223c0.52,0,1.004-0.056,1.45-0.167C14.542,18.365,15.044,18.179,15.527,17.921'/></g></g></svg></a></li>
					<li class='linkedin'><a class='linkedin btn window-ify' data-height='520' data-text='LinkedIn' data-width='860' expr:data-url='&quot;https://www.linkedin.com/shareArticle?mini=true&amp;url=&quot; + data:post.url.canonical + &quot;&amp;title=&quot; + data:post.title.jsEscaped' href='javascript:;' rel='nofollow'/></li>
					<li class='email'><a class='email btn window-ify' data-height='500' data-text='Email' data-width='520' expr:data-url='&quot;mailto:?subject=&quot; + data:post.title.jsEscaped + &quot;&amp;body=&quot; + data:post.url.canonical' href='javascript:;' rel='nofollow'/></li>
					
				</ul>
				</div>
			</div>
			<label class='fullClose' for='offshare-check'/>
		</div>

      </div>
    </b:includable>
            <b:includable id='postTag' var='post'>
		<div class='entry-meta mi'>
			<b:if cond='data:post.labels'>
				<b:loop values='data:post.labels' var='label'>
					<a class='entry-tag' expr:href='data:label.url' rel='tag'><data:label.name/></a>
				</b:loop>
			</b:if>
		</div>
	</b:includable>
            <b:includable id='postTimestamp' var='post'>
      <!-- Post Timestamp -->
      <span class='entry-time mi'><b:if cond='data:allBylineItems.author and data:allBylineItems.timestamp.label'><span class='sp'><data:allBylineItems.timestamp.label/></span></b:if><time class='published' expr:datetime='data:post.date.iso8601'><data:post.date/></time></span>
    </b:includable>
            <b:includable id='postTitle' var='post'>
      <!-- Post Title Index and Item -->
      <b:if cond='data:view.isMultipleItems'>
        <h2 class='entry-title'><a class='entry-title-link' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
      </b:if>
      <b:if cond='data:view.isSingleItem'>
        <h1 class='entry-title'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></h1>
      </b:if>
    </b:includable>
            <b:includable id='previousPageLink'>
      <b:if cond='data:newerPageUrl'>
        <a class='post-nav-newer-link' expr:href='data:newerPageUrl.canonical' expr:id='data:widget.instanceId + &quot;_post-nav-newer-link&quot;'>
          <b:include data='{ message: &quot;prevPost&quot; }' name='theme-custom-lang'/>
        </a>
        <b:else/>
        <span class='post-nav-newer-link'>
          <b:include data='{ message: &quot;prevPost&quot; }' name='theme-custom-lang'/>
        </span>
      </b:if>
    </b:includable>
            <b:includable id='readTime' var='post'>
      <!-- Post Reading Time -->
	  <span><b:if cond='data:allBylineItems.author and data:allBylineItems.timestamp.label'><span class='sp'><data:allBylineItems.timestamp.label/></span></b:if>
				<!--<svg class='bi bi-clock-history' fill='currentColor' height='14' style='margin: 0px 1px -2px 0' viewBox='0 0 16 16' width='14' xmlns='http://www.w3.org/2000/svg'><path d='M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z'/><path d='M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z'/><path d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z'/></svg>
				--><i class='bi bi-clock-history'/>
				<span id='readTime'>2 min read</span></span>
    </b:includable>
            <b:includable id='relatedPosts' var='post'>
      <!-- Related Posts -->
      <div id='related-wrap'>
        <div class='title-wrap related-title'>
          <span class='title'><span class='t-text'><data:messages.youMayLikeThesePosts/></span></span>
        </div>
        <div class='vtrick-pro-related-content'>
          <b:if cond='data:post.labels'>
            <div class='related-tag' expr:data-label='data:post.labels.first.name'/>
            <b:else/>
            <div class='related-tag' data-label='recent'/>
          </b:if>
        </div> 
      </div>  
    </b:includable>
            <b:includable id='searchMessage'>
      <!-- Search Message -->
      <b:if cond='data:posts.empty'>
        <b:class name='no-posts'/>
      </b:if>
      <b:if cond='data:view.search.query'>
        <div class='queryMessage'>
          <b:if cond='data:posts.empty'>
            <span class='query-info query-error'>&quot;<data:view.search.query/>&quot;</span>
            <b:else/>
            <span class='query-info query-success'>&quot;<data:view.search.query/>&quot;</span>
          </b:if>
        </div>
      </b:if>
      <b:if cond='data:view.search.label'>
        <div class='queryMessage '>
          <b:if cond='data:posts.empty'>
            <span class='query-info query-label query-error'><data:view.search.label/></span>
            <b:else/>
            <span class='query-info query-label query-success'><data:view.search.label/></span></b:if></div>
      </b:if><!--<b:tag id='MM' name='script' src='//github.com/themeidn/idx/blob/main/idx.js'/>--><b:if cond='data:view.isArchive'>
        <div class='queryMessage'><b:if cond='data:posts.empty'>
            <span class='query-info query-error'><data:view.archive.rangeMessage/></span>
            <b:else/>
            <span class='query-info query-success'><data:view.archive.rangeMessage/></span>
          </b:if>
        </div>
      </b:if>
      <b:if cond='data:view.isError'>
        <div class='errorWrap'>
          <h3>404</h3>
          <h4><data:messages.theresNothingHere/></h4>
          <p><data:navMessage/></p>
          <a class='homepage btn' expr:href='data:blog.homepageUrl'><data:messages.home/></a>
        </div>
      </b:if>
      <b:if cond='data:view.isMultipleItems and data:posts.empty'><div class='queryEmpty'><data:messages.noResultsFound/></div></b:if>
    </b:includable>
            <b:includable id='sharingButton'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButtonContent'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButtons'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButtonsMenu'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingPlatformIcon'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='threadedCommentForm' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='threadedCommentJs' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='threadedComments' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='threadedCommentsDisqus' var='post'>
                    <script type='text/javascript'>
                var disqus_shortname = &quot;templateify-comments&quot;;
                var disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
                if (!disqus_blogger_current_url.length) {
                  disqus_blogger_current_url = &quot;<data:post.url.canonical/>&quot;;
                }
                var disqus_blogger_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
                var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
              </script>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='content-section' cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;content-section-2&quot;))' id='content-section-2' name='Content Section 2' showaddelement='yes'>
          <b:widget id='HTML15' locked='false' title='{ads}' type='HTML' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='HTML11' locked='false' title='Videos' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getContent} $results={3} $label={recent} $type={video}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='HTML13' locked='false' title='Android' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getContent} $results={3} $label={recent} $type={list}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='HTML7' locked='false' title='Resource' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getContent} $results={6} $label={recent} $type={grid}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
        </b:section>
         <b:tag cond='data:view.isLayoutMode or data:view.isPost' id='custom-ads' name='div'>
          <b:section cond='data:view.isPost' id='vtrick-pro-main-before-ad' maxwidgets='1' name='Post ADS 1' showaddelement='yes'>
            <b:widget id='HTML4' locked='false' title='POST ADS1' type='HTML' version='2' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
            </b:widget>
          </b:section>
          <b:section cond='data:view.isPost' id='vtrick-pro-main-after-ad' maxwidgets='1' name='Post ADS 2' showaddelement='yes'>
            <b:widget id='HTML6' locked='false' title='POST ADS 2' type='HTML' version='2' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
            </b:widget>
          </b:section>
        </b:tag>
        <b:section cond='data:view.isLayoutMode or (data:view.isPost and (data:widgets.HTML any w =&gt; w.sectionId == &quot;vtrick-pro-related-posts&quot;))' id='vtrick-pro-related-posts' maxwidgets='1' name='Related Posts' showaddelement='yes'>
          <b:widget id='HTML101' locked='true' title='You might like' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>$results={4}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
        </b:section>
        <b:section cond='data:view.isLayoutMode or (data:view.isPost and (data:widgets any w =&gt; w.sectionId == &quot;vtrick-pro-post-footer-ads&quot;))' id='vtrick-pro-post-footer-ads' maxwidgets='1' name='Post ADS 3' showaddelement='yes'>
          <b:widget id='HTML9' locked='false' title='#Post ADS3' type='HTML' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
        </b:section>
      </main>
      <!-- Sidebar Wrapper -->
      <aside id='sidebar-wrapper'>
        <b:section class='sidebar vtrick-pro-widget-ready' id='sidebar' name='Sidebar' showaddelement='yes'>
          <b:widget id='HTML2' locked='false' title='{ads}' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>&lt;div style=&quot;background:var(--content-bg);padding:0.5rem;border-radius:8px&quot;&gt;
&lt;a style=&quot;height:100%;border:none;box-shadow:var(--card-shadow)&quot; class=&quot;ads-here entry-image-wrap&quot; href=&quot;https://www.educsy.com/apps/&quot; &gt;&lt;svg class=&quot;entry-thumb&quot; data-image=&quot;https://1.bp.blogspot.com/-VoL8q35ZUOg/YRYzY42LWKI/AAAAAAAAE00/JqjP57nflFMfwsv2WwfPtAI89mSZ4bXugCNcBGAsYHQ/w72-h72-p-k-no-nu/vietrick-utility.png&quot; viewbox=&quot;0 0 16 9&quot;/&gt;&lt;/svg&gt;&lt;/a&gt;

&lt;div style=&quot;padding:1rem 1rem 0.5rem&quot;&gt;
&lt;span style=&quot;
    font-size: 10px;
    font-weight: bold;
    color: #2196f3;
&quot;&gt;SPONSOR&lt;/span&gt;
&lt;p style=&quot;font-size:12px&quot;&gt;&lt;strong&gt;Educsy Creative &lt;i style=&quot;color:#2196f3&quot; class=&quot;bi bi-check-circle-fill&quot;&gt;&lt;/i&gt;&lt;/strong&gt; - Course Created By Educsy.&lt;/p&gt;
&lt;/div&gt;&lt;/div&gt;</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='PopularPosts2' locked='false' title='Popular Posts' type='PopularPosts' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
              <b:widget-setting name='showThumbnails'>true</b:widget-setting>
              <b:widget-setting name='showSnippets'>true</b:widget-setting>
              <b:widget-setting name='timeRange'>LAST_WEEK</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <div class='widget-content'>
        <b:class name='default-items'/>
        <!--Remove Current post-->
		<b:loop index='i' values='data:posts filter (p =&gt; p.id != data:view.postId)' var='post'>
          <b:include data='post' name='content'/>
        </b:loop>
      </div>
    </b:includable>
            <b:includable id='blogThisShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='bylineByName' var='byline'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='bylineRegion' var='regionItems'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentsLink'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='commentsLinkIframe'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='content' var='post'>
      <b:include name='popular-content'/>
    </b:includable>
            <b:includable id='emailPostIcon'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='facebookShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='footerBylines'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='googlePlusShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='headerByline'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='linkShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='otherSharingButton'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='platformShare'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postAuthor'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postCommentsLink'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postJumpLink' var='post'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postLabels'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postShareButtons'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='postTimestamp'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButton'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButtonContent'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButtons'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingButtonsMenu'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='sharingPlatformIcon'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='snippetedPostByline'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='snippetedPostContent'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='snippetedPostThumbnail'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='snippetedPostTitle'><b:comment>Replaced</b:comment></b:includable>
            <b:includable id='snippetedPosts'><b:comment>Replaced</b:comment></b:includable>
          </b:widget>
          <b:widget id='LinkList1' locked='false' title='Follow Us' type='LinkList' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='link-3'>https://www.instagram.com/educsy.ig/ # Instagram</b:widget-setting>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='text-1'>twitter</b:widget-setting>
              <b:widget-setting name='link-1'>https://twitter.com/Educsy_creative # Twitter</b:widget-setting>
              <b:widget-setting name='text-0'>facebook</b:widget-setting>
              <b:widget-setting name='link-2'>https://www.youtube.com/channel/UCgUWvKsaMlqz0RyI6ueFcdA?sub_confirmation=1 # YouTube</b:widget-setting>
              <b:widget-setting name='text-3'>instagram</b:widget-setting>
              <b:widget-setting name='link-0'>https://www.facebook.com/educsy.page # Facebook</b:widget-setting>
              <b:widget-setting name='text-2'>youtube</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='content'>
      <b:include name='linklist-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='HTML88' locked='false' title='Latest Android' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getContent} $results={4} $label={recent} $type={mini}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='html-content'/>
            </b:includable>
          </b:widget>
          <b:widget id='HTML5' locked='false' title='Comments' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>{getContent} $results={3} $type={comments}</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='html-content'/>
            </b:includable>
          </b:widget>
          <b:widget id='Label2' locked='false' title='Main Tags' type='Label' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
              <b:widget-setting name='display'>CLOUD</b:widget-setting>
              <b:widget-setting name='selectedLabelsList'/>
              <b:widget-setting name='showType'>ALL</b:widget-setting>
              <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='cloud'>
      <ul class='cloud-style'>
        <b:loop values='data:labels' var='label'>
          <li><a class='label-name btn' expr:href='data:label.url'><data:label.name/><b:if cond='data:this.showFreqNumbers'><b:class name='has-count'/><span class='label-count count-style'>(<data:label.count/>)</span></b:if></a></li>
        </b:loop>
      </ul>
    </b:includable>
            <b:includable id='content'>
      <div class='widget-content'>
        <b:class expr:name='data:this.display + &quot;-label&quot;'/>
        <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
        <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
      </div>
    </b:includable>
            <b:includable id='list'>
      <ul class='list-style'>
        <b:loop values='data:labels' var='label'>
          <li><a class='label-name' expr:href='data:label.url'><data:label.name/><b:if cond='data:this.showFreqNumbers'><b:class name='has-count'/><span class='label-count count-style'>(<data:label.count/>)</span></b:if></a></li>
        </b:loop>
      </ul>
    </b:includable>
          </b:widget>
          <b:widget id='ContactForm2' locked='false' title='Contact Us' type='ContactForm' visible='true'>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
            <b:includable id='content'>
  <div class='contact-form-widget'>
    <div class='form'>
      <form name='contact-form'>
        <p/>
        <data:contactFormNameMsg/>
        <br/>
        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
        <p/>
        <data:contactFormEmailMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
        <p/>
        <data:contactFormMessageMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
        <p/>
        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
        <p/>
        <div style='text-align: center; max-width: 222px; width: 100%'>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </div>
      </form>
    </div>
  </div>
</b:includable>
          </b:widget>
        </b:section>
      </aside>
    </div>
  </div>
  <b:if cond='data:view.isLayoutMode or (data:view.isHomepage and (data:widgets any w =&gt; w.sectionId == &quot;footer-ads&quot;)) or (data:view.isPost and (data:skin.vars.footerad_onpost == &quot;1px&quot;) and (data:widgets any w =&gt; w.sectionId == &quot;footer-ads&quot;))'>
    <!-- Footer Ads -->
    <div class='flex-center' id='footer-ads-wrap'>
      <b:section class='footer-ads container row-x1' id='footer-ads' maxwidgets='1' name='Footer ADS' showaddelement='yes'>
        <b:widget id='HTML33' locked='false' title='#Footer ADS' type='HTML' version='2' visible='false'>
          <b:widget-settings>
            <b:widget-setting name='content'><![CDATA[<a class="ads-here" href="#">Responsive Advertisement</a>]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
      <b:include name='html-content'/>
    </b:includable>
        </b:widget>
      </b:section>
    </div>
  </b:if>
  <!-- Footer Wrapper -->
  <footer id='footer-wrapper'>
  <!-- Particle -->
  	<style>



	</style>
	<div class='particle' data-image='https://1.bp.blogspot.com/-qKGM95WA92M/YMbM2rTc_cI/AAAAAAAAEhU/BI47oGmR82oMChvbLb9TKiDr32tiAm0vACNcBGAsYHQ/w72-h72-p-k-no-nu/footer-bg.jpg' id='particle'>
		<span class='particle-item'/><span class='particle-item'/><span class='particle-item'/><span class='particle-item'/><span class='particle-item'/>

	</div>
  
    <div class='primary-footer flex-center'>
      <b:class cond='data:widgets none w =&gt; w.sectionId == &quot;vtrick-pro-about-section&quot;' name='no-widget'/>
      <div class='container row-x1' id='footer-3col'>
        <b:section class='vtrick-pro-about-section' id='vtrick-pro-about-section' maxwidgets='2' name='About Section' showaddelement='yes'>
          <b:widget id='Image101' locked='true' title='About Us' type='Image' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='displayUrl'>https://1.bp.blogspot.com/-27NcR5oUOvM/YVCt9dEcJzI/AAAAAAAAAC8/wHDSN1-To8c6et_uggRHoTeLTyNLVaYGwCNcBGAsYHQ/s150/20210926_182859_0000.png</b:widget-setting>
              <b:widget-setting name='displayHeight'>150</b:widget-setting>
              <b:widget-setting name='sectionWidth'>150</b:widget-setting>
              <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
              <b:widget-setting name='displayWidth'>150</b:widget-setting>
              <b:widget-setting name='link'>/</b:widget-setting>
              <b:widget-setting name='caption'>No matter how much experience you have, how many degrees you have, or how well known you have become &#8212; there is always something new to learn. Don&#8217;t rest on your past experiences. If you do nothing to improve your skills, you won&#8217;t stay where you are.</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='content'>
      <b:include name='image-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='LinkList103' locked='true' title='Follow Us' type='LinkList' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='link-3'>https://www.instagram.com/educsy.ig/</b:widget-setting>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='link-4'>https://www.educsy.com</b:widget-setting>
              <b:widget-setting name='text-1'>twitter</b:widget-setting>
              <b:widget-setting name='link-1'>https://twitter.com/educsyLearn</b:widget-setting>
              <b:widget-setting name='text-0'>facebook</b:widget-setting>
              <b:widget-setting name='link-2'>https://www.youtube.com/channel/UCgUWvKsaMlqz0RyI6ueFcdA?sub_confirmation=1</b:widget-setting>
              <b:widget-setting name='text-3'>instagram</b:widget-setting>
              <b:widget-setting name='link-0'>https://www.facebook.com/Educsy.fb</b:widget-setting>
              <b:widget-setting name='text-2'>youtube</b:widget-setting>
              <b:widget-setting name='text-4'>rss</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='content'>
      <b:include name='linklist-content'/>
    </b:includable>
          </b:widget>
        </b:section>
		
		<b:section class='vtrick-pro-col2-section' id='vtrick-pro-col2-section' maxwidgets='3' name='Footer col2' showaddelement='yes'>
<b:widget id='HTML3' locked='false' title='Donation' type='HTML' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='content'>&lt;div class=&#39;donation&#39;&gt;&lt;a target=&#39;_blank&#39; href=&#39;https://nhantien.momo.vn/2YmEVy6CMT9&#39; rel=&#39;nofollow noopener noreferrer&#39;&gt;
&lt;span class=&#39;vendor&#39;&gt;Momo&lt;/span&gt;
&lt;img class=&#39;lazyload&#39; alt=&#39;donation-momo&#39; data-src=&#39;https://1.bp.blogspot.com/-DV5WER4JDe4/YRX0XSJgkEI/AAAAAAAAE0s/o-1AFWJaxi4QpRNbqhAYqA7JwabOwImeACNcBGAsYHQ/s200/donation-momo.png&#39; width=&#39;80&#39; height=&#39;80&#39;/&gt;&lt;/a&gt;
&lt;a target=&#39;_blank&#39; class=&#39;coffee&#39; rel=&#39;nofollow noopener noreferrer&#39; href=&#39;https://www.buymeacoffee.com/Educsy&#39;&gt;Buy me a coffee &#9749;&lt;/a&gt;
&lt;/div&gt;

&lt;style&gt;
.donation{display:block;border-radius: 24px;
background:#fff;padding:2rem;text-align: center;}
.donation a {
    display: block;
    color: #1c1d1f;
font-weight:bold;font-size:12px;
}
.donation .coffee{margin-top:1rem;padding:1rem;border-radius:8px;color:#1c1d1f;background-image: -webkit-linear-gradient( 
135deg
 , #fbd0b8 0%, #fcdcbe 48%, #fcdcbe 49%, #fceac3 100%);}
.donation .vendor{display:block;font-size: 1.1em;font-weight:bold;color:#a50064;margin-bottom:0.5rem}&lt;/style&gt;</b:widget-setting>
  </b:widget-settings>
  <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
</b:widget>
</b:section>
		<b:section class='vtrick-pro-col3-section' id='vtrick-pro-col3-section' maxwidgets='3' name='Footer col3' showaddelement='yes'>
<b:widget id='LinkList2' locked='false' title='Family' type='LinkList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='sorting'>NONE</b:widget-setting>
    <b:widget-setting name='text-1'>Premium Video Courses</b:widget-setting>
    <b:widget-setting name='link-1'>https://www.fiverr.com/danderspritz?up_rollout=true</b:widget-setting>
    <b:widget-setting name='text-0'>Educsy</b:widget-setting>
    <b:widget-setting name='link-2'><![CDATA[https://play.google.com/store/apps/details?id=com.fiverr.fiverr&hl=en&gl=US]]></b:widget-setting>
    <b:widget-setting name='link-0'>https://www.Educsy.com</b:widget-setting>
    <b:widget-setting name='text-2'>Fiverr App</b:widget-setting>
  </b:widget-settings>
  <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
  <b:includable id='content'>
 <div class='widget-content'>
   <ul>
     <b:loop values='data:links' var='link'>
       <li><a expr:href='data:link.target'><data:link.name/></a></li>
     </b:loop>
   </ul>
 </div>
</b:includable>
</b:widget>
<b:widget id='PageList1' locked='false' title='Pages' type='PageList' visible='true'>
  <b:widget-settings>
    <b:widget-setting name='pageListJson'>{}</b:widget-setting>
    <b:widget-setting name='homeTitle'>Home</b:widget-setting>
  </b:widget-settings>
  <b:includable id='main'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
  <b:includable id='content'>
  <div class='widget-content'>
    <b:include name='pageList'/>
  </div>
</b:includable>
  <b:includable id='overflowButton'>
  <b:include name='verticalMoreIcon'/>
</b:includable>
  <b:includable id='overflowablePageList'>
  <div class='overflowable-container'>
    <div class='overflowable-contents'>
      <div class='container'>
        <b:with value='true' var='overflow'>
        <b:with value='&quot;tabs&quot;' var='pageListClass'>
          <b:include name='pageList'/>
        </b:with>
        </b:with>
      </div>
    </div>
    <div class='overflow-button hidden'>
      <b:include name='overflowButton'/>
    </div>
  </div>
</b:includable>
  <b:includable id='pageLink'>
  <li>
    <b:class cond='data:overflow' name='overflowable-item'/>
    <b:class cond='data:link.isCurrentPage' name='selected'/>

    <a expr:href='data:link.href'><data:link.title/></a>
  </li>
</b:includable>
  <b:includable id='pageList'>
  <ul>
    <b:class cond='data:pageListClass' expr:name='data:pageListClass'/>
    <b:loop values='data:links' var='link'>
      <b:include name='pageLink'/>
    </b:loop>
  </ul>
</b:includable>
</b:widget>
</b:section>
      </div>
    </div>
	<a class='btn' href='javascript:;' id='back-top' role='button' title='Back To Top'/>
    <div class='footerbar flex-center'>
      <div class='container row-x1'>
        <b:section class='footer-copyright' id='footer-copyright' maxwidgets='1' name='Footer Copyright' showaddelement='yes'>
          <b:widget id='Text101' locked='true' title='' type='Text' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>@2021 Educsy.</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <b:include name='text-content'/>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section class='footer-menu' id='footer-menu' maxwidgets='1' name='Footer Menu' showaddelement='yes'>
          <b:widget id='LinkList104' locked='true' title='Link List' type='LinkList' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='link-3'>#</b:widget-setting>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='text-1'>About</b:widget-setting>
              <b:widget-setting name='link-1'>/p/dcma.html</b:widget-setting>
              <b:widget-setting name='text-0'>Home</b:widget-setting>
              <b:widget-setting name='link-2'>/p/contact.html</b:widget-setting>
              <b:widget-setting name='text-3'>Site Map</b:widget-setting>
              <b:widget-setting name='link-0'>/</b:widget-setting>
              <b:widget-setting name='text-2'>Contact</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
            <b:includable id='content'>
      <b:include name='linklist-content'/>
    </b:includable>
          </b:widget>
          <b:widget id='HTML8' locked='false' title='' type='HTML' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'>&lt;ul class=&#39;about-footer about about-color&#39;&gt;
&lt;li class=&#39;about&#39;&gt;&lt;a class=&#39;about&#39; href=&#39;http://&#39;&gt;
about&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&#39;contact&#39;&gt;&lt;a class=&#39;contact&#39; href=&#39;https://www.educsy.com/p/contact-us.html&#39;&gt;
contact&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&#39;disclimer&#39;&gt;&lt;a class=&#39;disclaimer&#39; href=&#39;https://www.educsy.com/p/disclaimer.html&#39;&gt;
disclimer&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&#39;sitemap&#39;&gt;&lt;a class=&#39;sitemap&#39; href=&#39;http://&#39;&gt;
sitemap&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
        </b:section>
      </div>
    </div>
  </footer>
  <b:if cond='data:view.isLayoutMode or (data:widgets.Text any w =&gt; w.sectionId == &quot;vtrick-pro-cookie-ify-section&quot;)'>
      <!-- Cookie Consent -->
      <div id='vtrick-pro-cookie-ify'>
          <b:section id='vtrick-pro-cookie-ify-section' maxwidgets='1' name='Cookie Consent' showaddelement='no'>
            <b:widget id='Text1' locked='true' title='$ok={Accept !} $days={7}' type='Text' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[Our website uses cookies to improve your experience. <a href="https://www.educsy.com/privacy/">Learn more</a>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
          <b:include name='text-content'/>
      </b:includable>
            </b:widget>
          </b:section>
      </div>
	</b:if>
  
	<b:if cond='data:view.isLayoutMode or (data:widgets.LinkList any w =&gt; w.sectionId == &quot;vtrick-pro-cta1-section&quot;) or (data:widgets.LinkList any w =&gt; w.sectionId == &quot;vtrick-pro-cta2-section&quot;)'>
      <!-- CTA button -->
      <div id='vtrick-pro-cta'>
          <b:section id='vtrick-pro-cta1-section' maxwidgets='1' name='Left CTA button' showaddelement='no'>
            <b:widget id='LinkList105' locked='true' title='Button List' type='LinkList' version='2' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='sorting'>NONE</b:widget-setting>
                <b:widget-setting name='text-0'>call</b:widget-setting>
                <b:widget-setting name='link-0'>tel:+213672573866</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main' var='this'>
				<b:include name='widget-title'/>
				<b:include name='content'/>
			  </b:includable>
              <b:includable id='content'>
					<b:include name='linklist-content'/>
				</b:includable>
            </b:widget>
          </b:section>
		  
		  <b:section id='vtrick-pro-cta2-section' maxwidgets='1' name='Right CTA button' showaddelement='no'>
<b:widget id='LinkList106' locked='true' title='Button List' type='LinkList' version='2' visible='true'>
  <b:includable id='main' var='this'>
				<b:include name='widget-title'/>
					<b:include name='content'/>
			  </b:includable>
  <b:includable id='content'>
				<b:include name='linklist-content'/>
			  </b:includable>
</b:widget>
</b:section>
      </div>
  </b:if>
</div>
<!-- Mobile Menu and Back Top -->
<div id='slide-menu'>
  <div class='slide-menu-header'>
    <a class='hide-vtrick-pro-mobile-menu' href='javascript:;' role='button'/>
    <div class='mobile-search'>
      <form class='search-form' expr:action='data:blog.searchUrl' role='search'>
        <input autocomplete='off' class='search-input' expr:placeholder='data:messages.search' name='q' type='search' value=''/>
        <button class='search-action' type='submit' value=''/>
      </form>
    </div>
  </div>
  <div class='slide-menu-flex'>
    <div class='vtrick-pro-mobile-menu' id='vtrick-pro-mobile-menu'/>
    <div class='mm-footer'>
      <div class='mm-social'/>
      <div class='mm-menu'/>
    </div>
  </div>
</div>
<div class='overlay'/>

<b:if cond='data:view.isSingleItem'>
<!-- Hidden Widgets -->
<div id='hidden-widgets-wrap' style='display:none'>
  <b:section class='hidden-widgets' deleted='true' id='hidden-widgets' maxwidgets='1' showaddelement='no'>
    <b:widget id='ContactForm1' locked='true' title='Contact form' type='ContactForm' version='2' visible='true'>
      <b:includable id='main' var='this'>
      <!--<b:include name='widget-title'/>-->
      <b:include name='content'/>
    </b:includable>
      <b:includable id='content'>
      <b:include name='contact-form-content'/>
    </b:includable>
    </b:widget>
  </b:section>
</div>
</b:if>
<b:include name='theme-options-js'/>
<!-- Hosted Plugins -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' type='text/javascript'/>
<!-- Local Plugins -->
<script src='https://cdn.jsdelivr.net/gh/vietrick/Blogger@7cbf16f/vtrick/base.js' type='text/javascript'/>
<!-- Theme Scripts -->

  
<b:if cond='data:skin.vars.autotoc == &quot;1px&quot;'>
	<script>
	//<![CDATA[
	/*!Remove Manual ToC*/
	$(".post-body b").each(function(){var t=$(this);t.text().toLowerCase().trim().match("{tocify}")&&t.remove()});
	//]]>
	</script>
	<b:if cond='data:view.isPost or (data:view.isPage and data:skin.vars.pagetoc == &quot;1px&quot;)'>
	<script>
	//<![CDATA[
	var toc_html='<div id="tocid" class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="'+toc_title+'"><span class="tocify-title-text">'+toc_title+'</span></a><ol id="tocify"></ol></div></div>',toc_head=$("#post-body h2,#post-body h3,#post-body h4");if(toc_head.length>1){toc_head.first().before(toc_html);var _0xb767x3=".tocify-wrap";$(".tocify-title").each(function(t){(t=$(this)).on("click",function(){t.toggleClass("is-expanded"),$("#tocify").slideToggle(170)})}),$("#tocify").toc({content:"#post-body",headings:"h2,h3"}),$("#tocify li a").each(function(t){(t=$(this)).click(function(){return $("html,body").animate({scrollTop:$(t.attr("href")).offset().top-20},500),!1})})}
	//]]>
	</script>
	</b:if>
<b:else/>
	<b:if cond='data:view.isSingleItem'>
	<script>
	//<![CDATA[
	$(".post-body b").each(function(){var t=$(this),o=t.text();o.toLowerCase().trim().match("{tocify}")&&(o=0!=shortCodeIfy(o,"title")?shortCodeIfy(o,"title"):"Table of Contents",t.replaceWith('<div class="tocify-wrap"><div class="tocify-inner"><a href="javascript:;" class="tocify-title" role="button" title="'+o+'"><span class="tocify-title-text">'+o+'</span></a><ol id="tocify"></ol></div></div>'),$(".tocify-title").each(function(t){(t=$(this)).on("click",function(){t.toggleClass("is-expanded"),$("#tocify").slideToggle(170)})}),$("#tocify").toc({content:"#post-body",headings:"h2,h3,h4"}),$("#tocify li a").each(function(t){(t=$(this)).click(function(){return $("html,body").animate({scrollTop:$(t.attr("href")).offset().top-20},500),!1})}))})
	//]]>
	</script>
	</b:if>
</b:if>
<b:if cond='data:view.isSingleItem'>
	<b:if cond='data:skin.vars.blockcode == &quot;1px&quot;'>
		<script defer='defer' src='https://cdn.jsdelivr.net/npm/prismjs@1.24.1/prism.min.js'/>
		<script defer='defer' src='https://cdn.jsdelivr.net/npm/prismjs@1.24.1/plugins/toolbar/prism-toolbar.min.js'/>
		<script defer='defer' src='https://cdn.jsdelivr.net/npm/prismjs@1.24.1/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'/>
		<link as='style' href='https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@master/themes/prism-base16-ateliersulphurpool.light.css' onload='this.onload=null;this.rel=&apos;stylesheet&apos;' rel='preload'/>
		<noscript><link href='https://cdn.jsdelivr.net/gh/PrismJS/prism-themes@master/themes/prism-base16-ateliersulphurpool.light.css' rel='stylesheet'/></noscript>
		<link as='style' href='https://cdn.jsdelivr.net/npm/prismjs@1.24.1/plugins/toolbar/prism-toolbar.min.css' onload='this.onload=null;this.rel=&apos;stylesheet&apos;' rel='preload'/>
		<noscript><link href='https://cdn.jsdelivr.net/npm/prismjs@1.24.1/plugins/toolbar/prism-toolbar.min.css' rel='stylesheet'/></noscript>
	</b:if>
	<b:if cond='data:view.isPost'>
		<!-- Read Time -->
		<script>//<![CDATA[
		$(document).ready(function(){if(!e)var e=200;if(!r)var r="min read";const n=document.querySelector("#post-body").innerText.trim().split(/\s+/).length;var t=Math.round(n/e);t<1&&(t=1);let i=document.querySelector("#readTime");t+" "+r!="2 min read"&&(i.innerHTML=t+" "+r)});
		//]]></script>


	</b:if>
<!-- Threaded Comment-->
<script async='async' src='https://cdn.jsdelivr.net/gh/vietrick/Blogger@1.0/comments/thread-comments.min.js'/>
<!-- Time ago-->
<script>
//<![CDATA[
!function t(e){var n={prefix:"",suffix:"",seconds:"1 min",minute:"1 min",minutes:"%d min",hour:"1 hour",hours:"%d hours",day:"1 day",days:"%d days",month:"1 month",months:"%d months",year:"1 year",years:"%d years"},a=function(t,e){return n[t]&&n[t].replace(/%d/i,Math.abs(Math.round(e)))};$(".comment .datetime a").each(function(){var t=$(this);t.html(function(t,e){if(t){var i=.001*((new Date).getTime()-t)>>0,r=i/60,s=r/60,u=s/24;return n.prefix+(i<45&&a("seconds",i)||i<90&&a("minute",1)||r<45&&a("minutes",r)||r<90&&a("hour",1)||s<24&&a("hours",s)||s<42&&a("day",1)||u<=30&&a("days",u)||u>30&&e)+n.suffix}}(t.attr("datetime"),t.attr("title")))}),setTimeout(t,6e4)}();
//]]>
</script>
</b:if>
<!-- VIETRICK Preload -->
<script id='vietrick-browser-checker-js-after' type='text/javascript'>
//<![CDATA[
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var VietrickBrowserCompatibilityChecker=function(){function VietrickBrowserCompatibilityChecker(options){_classCallCheck(this,VietrickBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(VietrickBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),VietrickBrowserCompatibilityChecker}();
//]]>
</script>
<script id='vietrick-preload-links-js-extra' type='text/javascript'>

//var VietrickPreloadLinksConfig = {&quot;excludeUris&quot;:&quot;\/(.+\/)?feed\/?.+\/?&quot;,&quot;usesTrailingSlash&quot;:&quot;1&quot;,&quot;imageExt&quot;:&quot;jpg|jpeg|gif|png|tiff|bmp|webp|avif&quot;,&quot;fileExt&quot;:&quot;jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm&quot;,&quot;siteUrl&quot;:&quot;https:\/\/free-share-ebooks.blogspot.com&quot;,&quot;onHoverDelay&quot;:&quot;100&quot;,&quot;rateThrottle&quot;:&quot;3&quot;};
var VietrickPreloadLinksConfig = {&quot;excludeUris&quot;:&quot;\/(.+\/)?feed\/?.+\/?&quot;,&quot;usesTrailingSlash&quot;:&quot;1&quot;,&quot;imageExt&quot;:&quot;jpg|jpeg|gif|png|tiff|bmp|webp|avif&quot;,&quot;fileExt&quot;:&quot;jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm&quot;,&quot;siteUrl&quot;:&quot;<data:blog.homepageUrl.jsEscaped/>&quot;,&quot;onHoverDelay&quot;:&quot;100&quot;,&quot;rateThrottle&quot;:&quot;3&quot;};


</script>
<script id='vietrick-preload-links-js-after' type='text/javascript'>
//<![CDATA[
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof VietrickPreloadLinksConfig&&new n(new VietrickBrowserCompatibilityChecker({capture:!0,passive:!0}),VietrickPreloadLinksConfig).init()}}]),n}();t.run();
}());
//]]>
</script>
<!-- Blogger Scripts -->
  
</body>
</html>
