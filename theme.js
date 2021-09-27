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
