window.imageLazyLoadSetting = {
isSPA: false,
preloadRatio: 3,
processImages: null,
};


! function(r)
{
r.imageLazyLoadSetting.processImages = t;
var e = r.imageLazyLoadSetting.isSPA,
n = r.imageLazyLoadSetting.preloadRatio || 1,
c = a();

function a()
{
var t = Array.prototype.slice.call(document.querySelectorAll("img[data-original]")),
e = Array.prototype.slice.call(document.querySelectorAll("[bg-lazy]"));
return t.concat(e)
}

function t()
{
e &amp;&amp; (c = a());
for (var t, o = 0; o &lt; c.length; o++) 0 &lt;= (t = (t = c[o])
.getBoundingClientRect())
.bottom &amp;&amp; 0 &lt;= t.left &amp;&amp; t.top &lt;= (r.innerHeight * n || document.documentElement.clientHeight * n) &amp;&amp; function()
{
var t, e, n, a, i = c[o];
e = function()
{
c = c.filter(function(t)
{
return i !== t
}), r.imageLazyLoadSetting.onImageLoaded &amp;&amp; r.imageLazyLoadSetting.onImageLoaded(i)
}, (t = i)
.hasAttribute("bg-lazy") ? (t.removeAttribute("bg-lazy"), e &amp;&amp; e()) : (n = new Image, a = t.getAttribute("data-original"), n.onload = function()
{
t.src = a, t.removeAttribute("data-original"), e &amp;&amp; e()
}, t.src !== a &amp;&amp; (n.src = a))
}()
}

function i()
{
clearTimeout(t.tId), t.tId = setTimeout(t, 500)
}
t(), document.addEventListener("scroll", i), r.addEventListener("resize", i), r.addEventListener("orientationchange", i)
}(this);