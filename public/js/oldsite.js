function initScroller() {
    $("#slider").length > 0 && ($("#slider #sliderItems").nivoSlider({
        effect: "fade",
        captionOpacity: 1,
        pauseTime: 5e3,
        directionNav: !0,
        directionNavHide: !1,
        pauseOnHover: !0,
        afterLoad: sliderLoaded
    }), initSearchField())
}

function initSearchField() {
    $("#zoekveldContainer #q").placeholder()
}

function sliderLoaded() {
    var n = [];
    jQuery.each($("#tagcloud:first a"), function() {
        n.push({
            text: $(this).text(),
            weight: $(this).attr("data-attr-popularity"),
            link: $(this).attr("href")
        })
    }), $("#tagcloud:first").html(""), $(function() {
        var i = $("#zoekveldContainer").position().top - 120,
            t = $("#zoekveldContainer").position().left - 10;
        $(".nivo-caption div:first").append('<div id="zoekveldje" style="width: 390px; margin-left:-195px; height: 80px; position:absolute; left:' + t + "px; top:" + i + 'px;"></div>'), $(".nivo-caption div:first").jQCloud(n), setTimeout(function() {
            removeOffScreenTags($(".nivo-caption div:first span"), $("#slider")), $("#htmlcaption").html($(".nivo-caption div:first").html())
        }, 10)
    })
}

function removeOffScreenTags(n, t) {
    var r = t.width(),
        i = t.height();
    $.each(n, function() {
        isOffScreen($(this), r, i) && $(this).remove()
    })
}

function isOffScreen(n, t, i) {
    return n.position().left < 0 || n.position().top < 0 || n.width() + n.position().left > t || n.height() + n.position().top > i ? !0 : !1
}

function initTabs() {
    if ($(".tabs").length > 0)
        if ($(".tabs .knoppen li a").click(switchTab), hideAllTabs(), window.location.href.indexOf("#") > -1) {
            var n = window.location.href.substring(window.location.href.indexOf("#") + 1);
            $("#" + n).length > 0 && makeTabActive($(".knoppen li a[href='#" + n + "']").parent())
        } else showFirstTab()
}

function hideAllTabs() {
    $(".tabs > div").addClass("passive").children().removeClass("passive")
}

function showFirstTab() {
    makeTabActive($(".tabs .knoppen li:first"))
}

function makeTabActive(n) {
    n.attr("class", "active");
    var i = $("a", n).attr("href"),
        t = i.substr(1);
    $("#" + t).removeClass("passive").addClass("active"), t === "kaart" && ($("#maploaderholder").show(), $("#kaart iframe").attr("src", $("#kaart iframe").attr("data-initsrc")).removeAttr("data-initsrc"), window.setTimeout(function() {
        $("#maploader").slideUp()
    }, 3e3))
}

function switchTab() {
    return $(".tabs .tab.active").removeClass("active").addClass("passive"), $(".knoppen .active").removeClass("active"), makeTabActive($(this).parent()), $(this).parent().attr("class", "active"), !1
}

function initSiblingElementsHeight() {
    $(window).width() > 992 && (SiblingElementsHeight($("#themablokken .blok")), SiblingElementsHeight($("#programma-nieuws-en-cursussen .blokken")), SiblingElementsHeight($("#subonderwerp-koppelingen .blok")))
}

function setElementsHeightByClassName(n, t) {
    $(n).each(function() {
        $(this).height(t)
    })
}

function addUtilsButton(n, t) {
    $("#utils ul li").eq(1).after('<li><a href="' + n + '">' + t + "</a></li>")
}

function standAloneInstruments() {
    startStandAloneInstrument("verzuimresultStandAlone", "http://instrumenten.voion.nl/verzuimresultStandAlone"), startStandAloneInstrument("inkoopwijzerStandAlone", "http://instrumenten.voion.nl/inkoopwijzerStandAlone"), startStandAloneInstrument("verzuimcheckStandAlone", "http://www.arbo-vo.nl/verzuimcheckStandAlone")
}

function startStandAloneInstrument(n, t) {
    document.getElementById(n) && setTimeout(function() {
        function i(t) {
            var i = JSON.parse(t.data).moduleheight;
            i > 0 && (document.getElementById(n).firstChild.height = i)
        }
        window.addEventListener && window.addEventListener("message", i, !1), document.getElementById(n).innerHTML = '<iframe src="' + t + '" width="640" height="3000" scrolling="no" frameBorder="0" style="width: 640px; border: 0;" />'
    }, 10)
}
var LinkTargets, Zoekmachine, mobile;
if (function(n) {
        var t = function(t, i) {
            var u = n.extend({}, n.fn.nivoSlider.defaults, i),
                r = {
                    currentSlide: 0,
                    currentImage: "",
                    totalSlides: 0,
                    running: !1,
                    paused: !1,
                    stop: !1,
                    controlNavEl: !1
                },
                f = n(t),
                e, s, v, o, c, a;
            if (f.data("nivo:vars", r).addClass("nivoSlider"), e = f.children(), e.each(function() {
                    var t = n(this),
                        i = "",
                        f, u;
                    t.is("img") || (t.is("a") && (t.addClass("nivo-imageLink"), i = t), t = t.find("img:first")), f = f === 0 ? t.attr("width") : t.width(), u = u === 0 ? t.attr("height") : t.height(), i !== "" && i.css("display", "none"), t.css("display", "none"), r.totalSlides++
                }), u.randomStart && (u.startSlide = Math.floor(Math.random() * r.totalSlides)), u.startSlide > 0 && (u.startSlide >= r.totalSlides && (u.startSlide = r.totalSlides - 1), r.currentSlide = u.startSlide), r.currentImage = n(e[r.currentSlide]).is("img") ? n(e[r.currentSlide]) : n(e[r.currentSlide]).find("img:first"), n(e[r.currentSlide]).is("a") && n(e[r.currentSlide]).css("display", "block"), s = n('<img class="nivo-main-image" />'), s.attr("src", r.currentImage.attr("src")).show(), f.append(s), n(window).resize(function() {
                    f.children("img").width(f.width()), s.attr("src", r.currentImage.attr("src")), s.stop().height("auto"), n(".nivo-slice").remove(), n(".nivo-box").remove()
                }), f.append(n('<div class="nivo-caption"></div>')), v = function(t) {
                    var u = n(".nivo-caption", f),
                        i;
                    r.currentImage.attr("title") != "" && r.currentImage.attr("title") != undefined ? (i = r.currentImage.attr("title"), i.substr(0, 1) == "#" && (i = n(i).html()), u.css("display") == "block" ? setTimeout(function() {
                        u.html(i)
                    }, t.animSpeed) : (u.html(i), u.stop().fadeIn(t.animSpeed))) : u.stop().fadeOut(t.animSpeed)
                }, v(u), o = 0, !u.manualAdvance && e.length > 1 && (o = setInterval(function() {
                    l(f, e, u, !1)
                }, u.pauseTime)), u.directionNav) {
                f.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + u.prevText + '</a><a class="nivo-nextNav">' + u.nextText + "</a></div>"), u.directionNavHide && (n(".nivo-directionNav", f).hide(), f.hover(function() {
                    n(".nivo-directionNav", f).show()
                }, function() {
                    n(".nivo-directionNav", f).hide()
                }));
                n("a.nivo-prevNav", f).on("click", function() {
                    if (r.running) return !1;
                    clearInterval(o), o = "", r.currentSlide -= 2, l(f, e, u, "prev")
                });
                n("a.nivo-nextNav", f).on("click", function() {
                    if (r.running) return !1;
                    clearInterval(o), o = "", l(f, e, u, "next")
                })
            }
            if (u.controlNav) {
                for (r.controlNavEl = n('<div class="nivo-controlNav"></div>'), f.after(r.controlNavEl), c = 0; c < e.length; c++) u.controlNavThumbs ? (r.controlNavEl.addClass("nivo-thumbs-enabled"), a = e.eq(c), a.is("img") || (a = a.find("img:first")), a.attr("data-thumb") && r.controlNavEl.append('<a class="nivo-control" rel="' + c + '"><img src="' + a.attr("data-thumb") + '" alt="" /></a>')) : r.controlNavEl.append('<a class="nivo-control" rel="' + c + '">' + (c + 1) + "</a>");
                n("a:eq(" + r.currentSlide + ")", r.controlNavEl).addClass("active"), n("a", r.controlNavEl).bind("click", function() {
                    if (r.running || n(this).hasClass("active")) return !1;
                    clearInterval(o), o = "", s.attr("src", r.currentImage.attr("src")), r.currentSlide = n(this).attr("rel") - 1, l(f, e, u, "control")
                })
            }
            u.pauseOnHover && f.hover(function() {
                r.paused = !0, clearInterval(o), o = ""
            }, function() {
                r.paused = !1, o !== "" || u.manualAdvance || (o = setInterval(function() {
                    l(f, e, u, !1)
                }, u.pauseTime))
            }), f.bind("nivo:animFinished", function() {
                s.attr("src", r.currentImage.attr("src")), r.running = !1, n(e).each(function() {
                    n(this).is("a") && n(this).css("display", "none")
                }), n(e[r.currentSlide]).is("a") && n(e[r.currentSlide]).css("display", "block"), o !== "" || r.paused || u.manualAdvance || (o = setInterval(function() {
                    l(f, e, u, !1)
                }, u.pauseTime)), u.afterChange.call(this)
            });
            var h = function(t, i, r) {
                    var e, f, u;
                    for (n(r.currentImage).parent().is("a") && n(r.currentImage).parent().css("display", "block"), n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show(), e = n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height(), f = 0; f < i.slices; f++) u = Math.round(t.width() / i.slices), f === i.slices - 1 ? t.append(n('<div class="nivo-slice" name="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (u + f * u - u) + 'px;" /></div>').css({
                        left: u * f + "px",
                        width: t.width() - u * f + "px",
                        height: e + "px",
                        opacity: "0",
                        overflow: "hidden"
                    })) : t.append(n('<div class="nivo-slice" name="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (u + f * u - u) + 'px;" /></div>').css({
                        left: u * f + "px",
                        width: u + "px",
                        height: e + "px",
                        opacity: "0",
                        overflow: "hidden"
                    }));
                    n(".nivo-slice", t).height(e), s.stop().animate({
                        height: n(r.currentImage).height()
                    }, i.animSpeed)
                },
                p = function(t, i, r) {
                    var e, o, f, u;
                    for (n(r.currentImage).parent().is("a") && n(r.currentImage).parent().css("display", "block"), n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show(), e = Math.round(t.width() / i.boxCols), o = Math.round(n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / i.boxRows), f = 0; f < i.boxRows; f++)
                        for (u = 0; u < i.boxCols; u++) u === i.boxCols - 1 ? (t.append(n('<div class="nivo-box" name="' + u + '" rel="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * f + "px; left:-" + e * u + 'px;" /></div>').css({
                            opacity: 0,
                            left: e * u + "px",
                            top: o * f + "px",
                            width: t.width() - e * u + "px"
                        })), n('.nivo-box[name="' + u + '"]', t).height(n('.nivo-box[name="' + u + '"] img', t).height() + "px")) : (t.append(n('<div class="nivo-box" name="' + u + '" rel="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * f + "px; left:-" + e * u + 'px;" /></div>').css({
                            opacity: 0,
                            left: e * u + "px",
                            top: o * f + "px",
                            width: e + "px"
                        })), n('.nivo-box[name="' + u + '"]', t).height(n('.nivo-box[name="' + u + '"] img', t).height() + "px"));
                    s.stop().animate({
                        height: n(r.currentImage).height()
                    }, i.animSpeed)
                },
                l = function(t, i, r, u) {
                    var f = t.data("nivo:vars"),
                        e, y, ut, g, b, nt;
                    if (f && f.currentSlide === f.totalSlides - 1 && r.lastSlide.call(this), (!f || f.stop) && !u) return !1;
                    r.beforeChange.call(this), u ? (u === "prev" && s.attr("src", f.currentImage.attr("src")), u === "next" && s.attr("src", f.currentImage.attr("src"))) : s.attr("src", f.currentImage.attr("src")), f.currentSlide++, f.currentSlide === f.totalSlides && (f.currentSlide = 0, r.slideshowEnd.call(this)), f.currentSlide < 0 && (f.currentSlide = f.totalSlides - 1), f.currentImage = n(i[f.currentSlide]).is("img") ? n(i[f.currentSlide]) : n(i[f.currentSlide]).find("img:first"), r.controlNav && (n("a", f.controlNavEl).removeClass("active"), n("a:eq(" + f.currentSlide + ")", f.controlNavEl).addClass("active")), v(r), n(".nivo-slice", t).remove(), n(".nivo-box", t).remove(), e = r.effect, y = "", r.effect === "random" && (y = ["sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse"], e = y[Math.floor(Math.random() * (y.length + 1))], e === undefined && (e = "fade")), r.effect.indexOf(",") !== -1 && (y = r.effect.split(","), e = y[Math.floor(Math.random() * y.length)], e === undefined && (e = "fade")), f.currentImage.attr("data-transition") && (e = f.currentImage.attr("data-transition")), f.running = !0;
                    var o = 0,
                        c = 0,
                        a = "",
                        l = "",
                        tt = "",
                        k = "";
                    if (e === "sliceDown" || e === "sliceDownRight" || e === "sliceDownLeft") h(t, r, f), o = 0, c = 0, a = n(".nivo-slice", t), e === "sliceDownLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                        var i = n(this);
                        i.css({
                            top: "0px"
                        }), c === r.slices - 1 ? setTimeout(function() {
                            i.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + o) : setTimeout(function() {
                            i.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + o), o += 50, c++
                    });
                    else if (e === "sliceUp" || e === "sliceUpRight" || e === "sliceUpLeft") h(t, r, f), o = 0, c = 0, a = n(".nivo-slice", t), e === "sliceUpLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                        var i = n(this);
                        i.css({
                            bottom: "0px"
                        }), c === r.slices - 1 ? setTimeout(function() {
                            i.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + o) : setTimeout(function() {
                            i.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + o), o += 50, c++
                    });
                    else if (e === "sliceUpDown" || e === "sliceUpDownRight" || e === "sliceUpDownLeft") h(t, r, f), o = 0, c = 0, ut = 0, a = n(".nivo-slice", t), e === "sliceUpDownLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                        var i = n(this);
                        c === 0 ? (i.css("top", "0px"), c++) : (i.css("bottom", "0px"), c = 0), ut === r.slices - 1 ? setTimeout(function() {
                            i.animate({
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + o) : setTimeout(function() {
                            i.animate({
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + o), o += 50, ut++
                    });
                    else if (e === "fold") h(t, r, f), o = 0, c = 0, n(".nivo-slice", t).each(function() {
                        var i = n(this),
                            u = i.width();
                        i.css({
                            top: "0px",
                            width: "0px"
                        }), c === r.slices - 1 ? setTimeout(function() {
                            i.animate({
                                width: u,
                                opacity: "1.0"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + o) : setTimeout(function() {
                            i.animate({
                                width: u,
                                opacity: "1.0"
                            }, r.animSpeed)
                        }, 100 + o), o += 50, c++
                    });
                    else if (e === "fade") h(t, r, f), l = n(".nivo-slice:first", t), l.css({
                        width: t.width() + "px"
                    }), l.animate({
                        opacity: "1.0"
                    }, r.animSpeed * 2, "", function() {
                        t.trigger("nivo:animFinished")
                    });
                    else if (e === "slideInRight") h(t, r, f), l = n(".nivo-slice:first", t), l.css({
                        width: "0px",
                        opacity: "1"
                    }), l.animate({
                        width: t.width() + "px"
                    }, r.animSpeed * 2, "", function() {
                        t.trigger("nivo:animFinished")
                    });
                    else if (e === "slideInLeft") h(t, r, f), l = n(".nivo-slice:first", t), l.css({
                        width: "0px",
                        opacity: "1",
                        left: "",
                        right: "0px"
                    }), l.animate({
                        width: t.width() + "px"
                    }, r.animSpeed * 2, "", function() {
                        l.css({
                            left: "0px",
                            right: ""
                        }), t.trigger("nivo:animFinished")
                    });
                    else if (e === "boxRandom") p(t, r, f), tt = r.boxCols * r.boxRows, c = 0, o = 0, k = w(n(".nivo-box", t)), k.each(function() {
                        var i = n(this);
                        c === tt - 1 ? setTimeout(function() {
                            i.animate({
                                opacity: "1"
                            }, r.animSpeed, "", function() {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + o) : setTimeout(function() {
                            i.animate({
                                opacity: "1"
                            }, r.animSpeed)
                        }, 100 + o), o += 20, c++
                    });
                    else if (e === "boxRain" || e === "boxRainReverse" || e === "boxRainGrow" || e === "boxRainGrowReverse") {
                        p(t, r, f), tt = r.boxCols * r.boxRows, c = 0, o = 0;
                        var it = 0,
                            rt = 0,
                            d = [];
                        for (d[it] = [], k = n(".nivo-box", t), (e === "boxRainReverse" || e === "boxRainGrowReverse") && (k = n(".nivo-box", t)._reverse()), k.each(function() {
                                d[it][rt] = n(this), rt++, rt === r.boxCols && (it++, rt = 0, d[it] = [])
                            }), g = 0; g < r.boxCols * 2; g++) {
                            for (b = g, nt = 0; nt < r.boxRows; nt++) b >= 0 && b < r.boxCols && (function(i, u, f, o, s) {
                                var h = n(d[i][u]),
                                    l = h.width(),
                                    c = h.height();
                                (e === "boxRainGrow" || e === "boxRainGrowReverse") && h.width(0).height(0), o === s - 1 ? setTimeout(function() {
                                    h.animate({
                                        opacity: "1",
                                        width: l,
                                        height: c
                                    }, r.animSpeed / 1.3, "", function() {
                                        t.trigger("nivo:animFinished")
                                    })
                                }, 100 + f) : setTimeout(function() {
                                    h.animate({
                                        opacity: "1",
                                        width: l,
                                        height: c
                                    }, r.animSpeed / 1.3)
                                }, 100 + f)
                            }(nt, b, o, c, tt), c++), b--;
                            o += 100
                        }
                    }
                },
                w = function(n) {
                    for (var i, r, t = n.length; t; i = parseInt(Math.random() * t, 10), r = n[--t], n[t] = n[i], n[i] = r);
                    return n
                },
                y = function(n) {
                    this.console && typeof console.log != "undefined" && console.log(n)
                };
            return this.stop = function() {
                n(t).data("nivo:vars").stop || (n(t).data("nivo:vars").stop = !0, y("Stop Slider"))
            }, this.start = function() {
                n(t).data("nivo:vars").stop && (n(t).data("nivo:vars").stop = !1, y("Start Slider"))
            }, u.afterLoad.call(this), this
        };
        n.fn.nivoSlider = function(i) {
            return this.each(function() {
                var f = n(this),
                    e;
                if (f.data("nivoslider")) return f.data("nivoslider");
                e = new t(this, i), f.data("nivoslider", e)
            })
        }, n.fn.nivoSlider.defaults = {
            effect: "random",
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 3e3,
            startSlide: 0,
            directionNav: !0,
            directionNavHide: !0,
            controlNav: !0,
            controlNavThumbs: !1,
            pauseOnHover: !0,
            manualAdvance: !1,
            prevText: "Prev",
            nextText: "Next",
            randomStart: !1,
            beforeChange: function() {},
            afterChange: function() {},
            slideshowEnd: function() {},
            lastSlide: function() {},
            afterLoad: function() {}
        }, n.fn._reverse = [].reverse
    }(jQuery), function(n) {
        "use strict";
        n.fn.jQCloud = function(t, i) {
            var r = this,
                f = r.attr("id") || Math.floor(Math.random() * 1e6).toString(36),
                e = {
                    width: r.width(),
                    height: r.height(),
                    center: {
                        x: (i && i.width ? i.width : r.width()) / 2,
                        y: (i && i.height ? i.height : r.height()) / 2
                    },
                    delayedMode: t.length > 50,
                    shape: !1
                },
                u;
            return i = n.extend(e, i || {}), r.addClass("jqcloud").width(i.width).height(i.height), r.css("position") === "static" && r.css("position", "relative"), u = function() {
                for (var l = function(n, t) {
                        for (var r = function(n, t) {
                                return Math.abs(2 * n.offsetLeft + n.offsetWidth - 2 * t.offsetLeft - t.offsetWidth) < n.offsetWidth + t.offsetWidth && Math.abs(2 * n.offsetTop + n.offsetHeight - 2 * t.offsetTop - t.offsetHeight) < n.offsetHeight + t.offsetHeight ? !0 : !1
                            }, i = 0, i = 0; i < t.length; i++)
                            if (r(n, t[i])) return !0;
                        return !1
                    }, h, s, e = 0; e < t.length; e++) t[e].weight = parseFloat(t[e].weight, 10);
                t.sort(function(n, t) {
                    return n.weight < t.weight ? 1 : n.weight > t.weight ? -1 : 0
                });
                var u = i.shape === "rectangular" ? 18 : 2,
                    c = [],
                    o = i.width / i.height;
                c.push(document.getElementById("zoekveldje")), h = function(e, s) {
                    var w = f + "_word_" + e,
                        ft = "#" + w,
                        d = 6.28 * Math.random(),
                        k = 0,
                        g = 0,
                        b = 0,
                        tt = 5,
                        rt = "",
                        nt = "",
                        h = "",
                        v;
                    if (s.html = n.extend(s.html, {
                            id: w
                        }), s.html && s.html["class"] && (rt = s.html["class"], delete s.html["class"]), t[0].weight > t[t.length - 1].weight && (tt = Math.round((s.weight - t[t.length - 1].weight) / (t[0].weight - t[t.length - 1].weight) * 9) + 1), h = n("<span>").attr(s.html).addClass("w" + tt + " " + rt), s.link ? (typeof s.link == "string" && (s.link = {
                            href: s.link
                        }), s.link = n.extend(s.link, {
                            href: encodeURI(s.link.href).replace(/'/g, "%27")
                        }), nt = n("<a>").attr(s.link).text(s.text)) : nt = s.text, h.append(nt), !!s.handlers)
                        for (v in s.handlers) s.handlers.hasOwnProperty(v) && typeof s.handlers[v] == "function" && n(h).bind(v, s.handlers[v]);
                    r.append(h);
                    var ut = h.width(),
                        it = h.height(),
                        p = i.center.x - ut / 2,
                        y = i.center.y - it / 2,
                        a = h[0].style;
                    for (a.position = "absolute", a.left = p + "px", a.top = y + "px"; l(document.getElementById(w), c);) {
                        if (i.shape === "rectangular") {
                            g++, g * u > (1 + Math.floor(b / 2)) * u * (b % 4 % 2 == 0 ? 1 : o) && (g = 0, b++);
                            switch (b % 4) {
                                case 1:
                                    p += u * o + Math.random() * 2;
                                    break;
                                case 2:
                                    y -= u + Math.random() * 2;
                                    break;
                                case 3:
                                    p -= u * o + Math.random() * 2;
                                    break;
                                case 0:
                                    y += u + Math.random() * 2
                            }
                        } else k += u, d += (e % 2 == 0 ? 1 : -1) * u, p = i.center.x - ut / 2 + k * Math.cos(d) * o, y = i.center.y + k * Math.sin(d) - it / 2;
                        a.left = p + "px", a.top = y + "px"
                    }
                    c.push(document.getElementById(w)), n.isFunction(s.afterWordRender) && s.afterWordRender.call(h)
                }, s = function(u) {
                    if (u = u || 0, !r.is(":visible")) {
                        setTimeout(function() {
                            s(u)
                        }, 10);
                        return
                    }
                    u < t.length ? (h(u, t[u]), setTimeout(function() {
                        s(u + 1)
                    }, 10)) : n.isFunction(i.afterCloudRender) && i.afterCloudRender.call(r)
                }, i.delayedMode ? s() : (n.each(t, h), n.isFunction(i.afterCloudRender) && i.afterCloudRender.call(r))
            }, setTimeout(function() {
                u()
            }, 10), r
        }
    }(jQuery), function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module == "object" && module.exports ? n(require("jquery")) : n(jQuery)
    }(function(n) {
        function a(t) {
            var i = {},
                r = /^jQuery\d+$/;
            return n.each(t.attributes, function(n, t) {
                t.specified && !r.test(t.name) && (i[t.name] = t.value)
            }), i
        }

        function r(i, r) {
            var f = this,
                u = n(f);
            if (f.value === u.attr("placeholder") && u.hasClass(t.customClass))
                if (f.value = "", u.removeClass(t.customClass), u.data("placeholder-password")) {
                    if (u = u.hide().nextAll('input[type="password"]:first').show().attr("id", u.removeAttr("id").data("placeholder-id")), i === !0) return u[0].value = r, r;
                    u.focus()
                } else f == h() && f.select()
        }

        function e(i) {
            var f, e = this,
                u = n(e),
                s = e.id,
                o;
            if (i && i.type === "blur") {
                if (u.hasClass(t.customClass)) return;
                if (e.type === "password" && (f = u.prevAll('input[type="text"]:first'), f.length > 0 && f.is(":visible"))) return
            }
            if (e.value === "") {
                if (e.type === "password") {
                    if (!u.data("placeholder-textinput")) {
                        try {
                            f = u.clone().prop({
                                type: "text"
                            })
                        } catch (h) {
                            f = n("<input>").attr(n.extend(a(this), {
                                type: "text"
                            }))
                        }
                        f.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": u,
                            "placeholder-id": s
                        }).bind("focus.placeholder", r), u.data({
                            "placeholder-textinput": f,
                            "placeholder-id": s
                        }).before(f)
                    }
                    e.value = "", u = u.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", u.data("placeholder-id")).show()
                } else o = u.data("placeholder-password"), o && (o[0].value = "", u.attr("id", u.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"));
                u.addClass(t.customClass), u[0].value = u.attr("placeholder")
            } else u.removeClass(t.customClass)
        }

        function h() {
            try {
                return document.activeElement
            } catch (n) {}
        }
        var s = Object.prototype.toString.call(window.operamini) === "[object OperaMini]",
            f = "placeholder" in document.createElement("input") && !s,
            o = "placeholder" in document.createElement("textarea") && !s,
            c = n.valHooks,
            l = n.propHooks,
            u, i, t = {};
        f && o ? (i = n.fn.placeholder = function() {
            return this
        }, i.input = !0, i.textarea = !0) : (i = n.fn.placeholder = function(i) {
            var u = {
                customClass: "placeholder"
            };
            return t = n.extend({}, u, i), this.filter((f ? "textarea" : ":input") + "[placeholder]").not("." + t.customClass).bind({
                "focus.placeholder": r,
                "blur.placeholder": e
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }, i.input = f, i.textarea = o, u = {
            get: function(i) {
                var r = n(i),
                    u = r.data("placeholder-password");
                return u ? u[0].value : r.data("placeholder-enabled") && r.hasClass(t.customClass) ? "" : i.value
            },
            set: function(i, u) {
                var f = n(i),
                    o, s;
                return (u !== "" && (o = f.data("placeholder-textinput"), s = f.data("placeholder-password"), o ? (r.call(o[0], !0, u) || (i.value = u), o[0].value = u) : s && (r.call(i, !0, u) || (s[0].value = u), i.value = u)), !f.data("placeholder-enabled")) ? (i.value = u, f) : (u === "" ? (i.value = u, i != h() && e.call(i)) : (f.hasClass(t.customClass) && r.call(i), i.value = u), f)
            }
        }, f || (c.input = u, l.value = u), o || (c.textarea = u, l.value = u), n(function() {
            n(document).delegate("form", "submit.placeholder", function() {
                var i = n("." + t.customClass, this).each(function() {
                    r.call(this, !0, "")
                });
                setTimeout(function() {
                    i.each(e)
                }, 10)
            })
        }), n(window).bind("beforeunload.placeholder", function() {
            n("." + t.customClass).each(function() {
                this.value = ""
            })
        }))
    }), function(n) {
        n.fn.onWithDelay = function(t, i, r, u, f, e) {
            return n.isFunction(r) && (e = f, f = u, u = r, r = undefined), u.guid = u.guid || n.guid && n.guid++, this.each(function() {
                function s() {
                    var r = n.extend(!0, {}, arguments[0]),
                        i = this,
                        t = function() {
                            o = null, u.apply(i, [r])
                        };
                    e || (clearTimeout(o), o = null), o || (o = setTimeout(t, f))
                }
                var o = null;
                s.guid = u.guid;
                n(document).on(t, i, r, s)
            })
        }
    }(jQuery), function(n) {
        function u() {
            var t = document.createElement("input"),
                n = "onpaste";
            return t.setAttribute(n, ""), typeof t[n] == "function" ? "paste" : "input"
        }
        var f = u() + ".mask",
            t = navigator.userAgent,
            e = /iphone/i.test(t),
            r = /android/i.test(t),
            i;
        n.mask = {
            definitions: {
                "9": "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            dataName: "rawMaskFn",
            placeholder: "_"
        }, n.fn.extend({
            caret: function(n, t) {
                var i;
                if (this.length !== 0 && !this.is(":hidden")) return typeof n == "number" ? (t = typeof t == "number" ? t : n, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(n, t) : this.createTextRange && (i = this.createTextRange(), i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", n), i.select())
                })) : (this[0].setSelectionRange ? (n = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), n = 0 - i.duplicate().moveStart("character", -1e5), t = n + i.text.length), {
                    begin: n,
                    end: t
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(t, u) {
                var a, l, o, c, h, s;
                return !t && this.length > 0 ? (a = n(this[0]), a.data(n.mask.dataName)()) : (u = n.extend({
                    placeholder: n.mask.placeholder,
                    completed: null
                }, u), l = n.mask.definitions, o = [], c = s = t.length, h = null, n.each(t.split(""), function(n, t) {
                    t == "?" ? (s--, c = n) : l[t] ? (o.push(new RegExp(l[t])), h === null && (h = o.length - 1)) : o.push(null)
                }), this.trigger("unmask").each(function() {
                    function y(n) {
                        while (++n < s && !o[n]);
                        return n
                    }

                    function g(n) {
                        while (--n >= 0 && !o[n]);
                        return n
                    }

                    function d(n, t) {
                        var r, i;
                        if (!(n < 0)) {
                            for (r = n, i = y(t); r < s; r++)
                                if (o[r]) {
                                    if (i < s && o[r].test(v[i])) v[r] = v[i], v[i] = u.placeholder;
                                    else break;
                                    i = y(i)
                                }
                            w(), a.caret(Math.max(h, n))
                        }
                    }

                    function nt(n) {
                        for (var r, i, t = n, f = u.placeholder; t < s; t++)
                            if (o[t])
                                if (r = y(t), i = v[t], v[t] = f, r < s && o[r].test(i)) f = i;
                                else break
                    }

                    function tt(n) {
                        var r = n.which,
                            u, i, t;
                        r === 8 || r === 46 || e && r === 127 ? (u = a.caret(), i = u.begin, t = u.end, t - i == 0 && (i = r !== 46 ? g(i) : t = y(i - 1), t = r === 46 ? y(t) : t), k(i, t), d(i, t - 1), n.preventDefault()) : r == 27 && (a.val(b), a.caret(0, p()), n.preventDefault())
                    }

                    function it(t) {
                        var h = t.which,
                            i = a.caret(),
                            f, c, e;
                        t.ctrlKey || t.altKey || t.metaKey || h < 32 || h && (i.end - i.begin != 0 && (k(i.begin, i.end), d(i.begin, i.end - 1)), f = y(i.begin - 1), f < s && (c = String.fromCharCode(h), o[f].test(c) && (nt(f), v[f] = c, w(), e = y(f), r ? setTimeout(n.proxy(n.fn.caret, a, e), 0) : a.caret(e), u.completed && e >= s && u.completed.call(a))), t.preventDefault())
                    }

                    function k(n, t) {
                        for (var i = n; i < t && i < s; i++) o[i] && (v[i] = u.placeholder)
                    }

                    function w() {
                        a.val(v.join(""))
                    }

                    function p(n) {
                        var r = a.val(),
                            i = -1,
                            t, f;
                        for (t = 0, pos = 0; t < s; t++)
                            if (o[t]) {
                                for (v[t] = u.placeholder; pos++ < r.length;)
                                    if (f = r.charAt(pos - 1), o[t].test(f)) {
                                        v[t] = f, i = t;
                                        break
                                    }
                                if (pos > r.length) break
                            } else v[t] === r.charAt(pos) && t !== c && (pos++, i = t);
                        return n ? w() : i + 1 < c ? (a.val(""), k(0, s)) : (w(), a.val(a.val().substring(0, i + 1))), c ? t : h
                    }
                    var a = n(this),
                        v = n.map(t.split(""), function(n) {
                            if (n != "?") return l[n] ? u.placeholder : n
                        }),
                        b = a.val();
                    a.data(n.mask.dataName, function() {
                        return n.map(v, function(n, t) {
                            return o[t] && n != u.placeholder ? n : null
                        }).join("")
                    }), a.attr("readonly") || a.one("unmask", function() {
                        a.unbind(".mask").removeData(n.mask.dataName)
                    }).bind("focus.mask", function() {
                        clearTimeout(i);
                        var n, r;
                        b = a.val(), n = p(), i = setTimeout(function() {
                            w(), n == t.length ? a.caret(0, n) : a.caret(n)
                        }, 10)
                    }).bind("blur.mask", function() {
                        p(), a.val() != b && a.change()
                    }).bind("keydown.mask", tt).bind("keypress.mask", it).bind(f, function() {
                        setTimeout(function() {
                            var n = p(!0);
                            a.caret(n), u.completed && n == a.val().length && u.completed.call(a)
                        }, 0)
                    }), p()
                }))
            }
        })
    }(jQuery), function(n, t, i, r) {
        var p = i("html"),
            e = i(n),
            o = i(t),
            u = i.fancybox = function() {
                u.open.apply(this, arguments)
            },
            y = navigator.userAgent.match(/msie/i),
            v = null,
            s = t.createTouch !== r,
            a = function(n) {
                return n && n.hasOwnProperty && n instanceof i
            },
            c = function(n) {
                return n && "string" === i.type(n)
            },
            l = function(n) {
                return c(n) && 0 < n.indexOf("%")
            },
            f = function(n, t) {
                var i = parseInt(n, 10) || 0;
                return t && l(n) && (i *= u.getViewport()[t] / 100), Math.ceil(i)
            },
            h = function(n, t) {
                return f(n, t) + "px"
            };
        i.extend(u, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !s,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (y ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(n, t) {
                if (n && (i.isPlainObject(t) || (t = {}), !1 !== u.close(!0))) return i.isArray(n) || (n = a(n) ? i(n).get() : [n]), i.each(n, function(f, e) {
                    var h = {},
                        s, y, l, o, v;
                    "object" === i.type(e) && (e.nodeType && (e = i(e)), a(e) ? (h = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: e.data("fancybox-title") || e.attr("title"),
                        isDom: !0,
                        element: e
                    }, i.metadata && i.extend(!0, h, e.metadata())) : h = e), s = t.href || h.href || (c(e) ? e : null), y = t.title !== r ? t.title : h.title || "", o = (l = t.content || h.content) ? "html" : t.type || h.type, !o && h.isDom && (o = e.data("fancybox-type"), o || (o = (o = e.prop("class").match(/fancybox\.(\w+)/)) ? o[1] : null)), c(s) && (o || (u.isImage(s) ? o = "image" : u.isSWF(s) ? o = "swf" : "#" === s.charAt(0) ? o = "inline" : c(e) && (o = "html", l = e)), "ajax" === o && (v = s.split(/\s+/, 2), s = v.shift(), v = v.shift())), l || ("inline" === o ? s ? l = i(c(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : h.isDom && (l = e) : "html" === o ? l = s : !o && !s && h.isDom && (o = "inline", l = e)), i.extend(h, {
                        href: s,
                        type: o,
                        content: l,
                        title: y,
                        selector: v
                    }), n[f] = h
                }), u.opts = i.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? i.extend({}, u.defaults.keys, t.keys) : !1), u.group = n, u._start(u.opts.index)
            },
            cancel: function() {
                var n = u.coming;
                n && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), n.wrap && n.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(n))
            },
            close: function(n) {
                u.cancel(), !1 !== u.trigger("beforeClose") && (u.unbindEvents(), u.isActive && (!u.isOpen || !0 === n ? (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()) : (u.isOpen = u.isOpened = !1, u.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]())))
            },
            play: function(n) {
                var t = function() {
                        clearTimeout(u.player.timer)
                    },
                    r = function() {
                        t(), u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
                    },
                    i = function() {
                        t(), o.unbind(".player"), u.player.isActive = !1, u.trigger("onPlayEnd")
                    };
                !0 !== n && (u.player.isActive || !1 === n) ? i() : u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, o.bind({
                    "onCancel.player beforeClose.player": i,
                    "onUpdate.player": r,
                    "beforeLoad.player": t
                }), r(), u.trigger("onPlayStart"))
            },
            next: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.next), u.jumpto(t.index + 1, n, "next"))
            },
            prev: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.prev), u.jumpto(t.index - 1, n, "prev"))
            },
            jumpto: function(n, t, i) {
                var e = u.current;
                e && (n = f(n), u.direction = t || e.direction[n >= e.index ? "next" : "prev"], u.router = i || "jumpto", e.loop && (0 > n && (n = e.group.length + n % e.group.length), n %= e.group.length), e.group[n] !== r && (u.cancel(), u._start(n)))
            },
            reposition: function(n, t) {
                var f = u.current,
                    e = f ? f.wrap : null,
                    r;
                e && (r = u._getPosition(t), n && "scroll" === n.type ? (delete r.position, e.stop(!0, !0).animate(r, 200)) : (e.css(r), f.pos = i.extend({}, f.dim, r)))
            },
            update: function(n) {
                var t = n && n.type,
                    i = !t || "orientationchange" === t;
                i && (clearTimeout(v), v = null), u.isOpen && !v && (v = setTimeout(function() {
                    var r = u.current;
                    r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && r.autoResize) && u._setDimension(), "scroll" === t && r.canShrink || u.reposition(n), u.trigger("onUpdate"), v = null)
                }, i && !s ? 0 : 300))
            },
            toggle: function(n) {
                u.isOpen && (u.current.fitToView = "boolean" === i.type(n) ? n : !u.current.fitToView, s && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
            },
            hideLoading: function() {
                o.unbind(".loading"), i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, n;
                u.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(u.cancel).appendTo("body"), o.bind("keydown.loading", function(n) {
                    27 === (n.which || n.keyCode) && (n.preventDefault(), u.cancel())
                }), u.defaults.fixed || (n = u.getViewport(), t.css({
                    position: "absolute",
                    top: .5 * n.h + n.y,
                    left: .5 * n.w + n.x
                }))
            },
            getViewport: function() {
                var i = u.current && u.current.locked || !1,
                    t = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    };
                return i ? (t.w = i[0].clientWidth, t.h = i[0].clientHeight) : (t.w = s && n.innerWidth ? n.innerWidth : e.width(), t.h = s && n.innerHeight ? n.innerHeight : e.height()), t
            },
            unbindEvents: function() {
                u.wrap && a(u.wrap) && u.wrap.unbind(".fb"), o.unbind(".fb"), e.unbind(".fb")
            },
            bindEvents: function() {
                var n = u.current,
                    t;
                n && (e.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (n.autoCenter && !n.locked ? " scroll.fb" : ""), u.update), (t = n.keys) && o.bind("keydown.fb", function(f) {
                    var e = f.which || f.keyCode,
                        o = f.target || f.srcElement;
                    if (27 === e && u.coming) return !1;
                    !f.ctrlKey && !f.altKey && !f.shiftKey && !f.metaKey && (!o || !o.type && !i(o).is("[contenteditable]")) && i.each(t, function(t, o) {
                        return 1 < n.group.length && o[e] !== r ? (u[t](o[e]), f.preventDefault(), !1) : -1 < i.inArray(e, o) ? (u[t](), f.preventDefault(), !1) : void 0
                    })
                }), i.fn.mousewheel && n.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, f, e) {
                    for (var o = i(t.target || null), s = !1; o.length && !s && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");) s = o[0] && !(o[0].style.overflow && "hidden" === o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = i(o).parent();
                    0 !== r && !s && 1 < u.group.length && !n.canShrink && (0 < e || 0 < f ? u.prev(0 < e ? "down" : "left") : (0 > e || 0 > f) && u.next(0 > e ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(n, t) {
                var f, r = t || u.coming || u.current;
                if (r) {
                    if (i.isFunction(r[n]) && (f = r[n].apply(r, Array.prototype.slice.call(arguments, 1))), !1 === f) return !1;
                    r.helpers && i.each(r.helpers, function(t, f) {
                        f && u.helpers[t] && i.isFunction(u.helpers[t][n]) && u.helpers[t][n](i.extend(!0, {}, u.helpers[t].defaults, f), r)
                    }), o.trigger(n)
                }
            },
            isImage: function(n) {
                return c(n) && n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(n) {
                return c(n) && n.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(n) {
                var t = {},
                    e, r;
                if (n = f(n), e = u.group[n] || null, !e) return !1;
                if (t = i.extend(!0, {}, u.opts, e), e = t.margin, r = t.padding, "number" === i.type(e) && (t.margin = [e, e, e, e]), "number" === i.type(r) && (t.padding = [r, r, r, r]), t.modal && i.extend(!0, t, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), t.autoSize && (t.autoWidth = t.autoHeight = !0), "auto" === t.width && (t.autoWidth = !0), "auto" === t.height && (t.autoHeight = !0), t.group = u.group, t.index = n, u.coming = t, !1 === u.trigger("beforeLoad")) u.coming = null;
                else {
                    if (r = t.type, e = t.href, !r) return u.coming = null, u.current && u.router && "jumpto" !== u.router ? (u.current.index = n, u[u.router](u.direction)) : !1;
                    if (u.isActive = !0, ("image" === r || "swf" === r) && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), "image" === r && (t.aspectRatio = !0), "iframe" === r && s && (t.scrolling = "scroll"), t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), i.extend(t, {
                            skin: i(".fancybox-skin", t.wrap),
                            outer: i(".fancybox-outer", t.wrap),
                            inner: i(".fancybox-inner", t.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function(n, i) {
                            t.skin.css("padding" + i, h(t.padding[n]))
                        }), u.trigger("onReady"), "inline" === r || "html" === r) {
                        if (!t.content || !t.content.length) return u._error("content")
                    } else if (!e) return u._error("href");
                    "image" === r ? u._loadImage() : "ajax" === r ? u._loadAjax() : "iframe" === r ? u._loadIframe() : u._afterLoad()
                }
            },
            _error: function(n) {
                i.extend(u.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: n,
                    content: u.coming.tpl.error
                }), u._afterLoad()
            },
            _loadImage: function() {
                var n = u.imgPreload = new Image;
                n.onload = function() {
                    this.onload = this.onerror = null, u.coming.width = this.width / u.opts.pixelRatio, u.coming.height = this.height / u.opts.pixelRatio, u._afterLoad()
                }, n.onerror = function() {
                    this.onload = this.onerror = null, u._error("image")
                }, n.src = u.coming.href, !0 !== n.complete && u.showLoading()
            },
            _loadAjax: function() {
                var n = u.coming;
                u.showLoading(), u.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
                    url: n.href,
                    error: function(n, t) {
                        u.coming && "abort" !== t ? u._error("ajax", n) : u.hideLoading()
                    },
                    success: function(t, i) {
                        "success" === i && (n.content = t, u._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var n = u.coming,
                    t = i(n.tpl.iframe.replace(/\{rnd\}/g, +new Date)).attr("scrolling", s ? "auto" : n.iframe.scrolling).attr("src", n.href);
                i(n.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (n) {}
                }), n.iframe.preload && (u.showLoading(), t.one("load", function() {
                    i(this).data("ready", 1), s || i(this).bind("load.fb", u.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), u._afterLoad()
                })), n.content = t.appendTo(n.inner), n.iframe.preload || u._afterLoad()
            },
            _preloadImages: function() {
                for (var r = u.group, i = u.current, f = r.length, e = i.preload ? Math.min(i.preload, f - 1) : 0, n, t = 1; t <= e; t += 1) n = r[(i.index + t) % f], "image" === n.type && n.href && ((new Image).src = n.href)
            },
            _afterLoad: function() {
                var n = u.coming,
                    r = u.current,
                    t, s, f, e, o;
                if (u.hideLoading(), n && !1 !== u.isActive)
                    if (!1 === u.trigger("afterLoad", n, r)) n.wrap.stop(!0).trigger("onReset").remove(), u.coming = null;
                    else {
                        r && (u.trigger("beforeChange", r), r.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), u.unbindEvents(), t = n.content, s = n.type, f = n.scrolling, i.extend(u, {
                            wrap: n.wrap,
                            skin: n.skin,
                            outer: n.outer,
                            inner: n.inner,
                            current: n,
                            previous: r
                        }), e = n.href;
                        switch (s) {
                            case "inline":
                            case "ajax":
                            case "html":
                                n.selector ? t = i("<div>").html(t).find(n.selector) : a(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(t).hide()), t = t.show().detach(), n.wrap.bind("onReset", function() {
                                    i(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                t = n.tpl.image.replace("{href}", e);
                                break;
                            case "swf":
                                t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + e + '"></param>', o = "", i.each(n.swf, function(n, i) {
                                    t += '<param name="' + n + '" value="' + i + '"></param>', o += " " + n + '="' + i + '"'
                                }), t += '<embed src="' + e + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                        }(!a(t) || !t.parent().is(n.inner)) && n.inner.append(t), u.trigger("beforeShow"), n.inner.css("overflow", "yes" === f ? "scroll" : "no" === f ? "hidden" : f), u._setDimension(), u.reposition(), u.isOpen = !1, u.coming = null, u.bindEvents(), u.isOpened ? r.prevMethod && u.transitions[r.prevMethod]() : i(".fancybox-wrap").not(n.wrap).stop(!0).trigger("onReset").remove(), u.transitions[u.isOpened ? n.nextMethod : n.openMethod](), u._preloadImages()
                    }
            },
            _setDimension: function() {
                var o = u.getViewport(),
                    st = 0,
                    y = !1,
                    n = !1,
                    y = u.wrap,
                    nt = u.skin,
                    e = u.inner,
                    r = u.current,
                    n = r.width,
                    t = r.height,
                    v = r.minWidth,
                    a = r.minHeight,
                    s = r.maxWidth,
                    c = r.maxHeight,
                    ht = r.scrolling,
                    ft = r.scrollOutside ? r.scrollbarWidth : 0,
                    p = r.margin,
                    w = f(p[1] + p[3]),
                    it = f(p[0] + p[2]),
                    ot, k, ut, d, b, tt, et, g, rt;
                if (y.add(nt).add(e).width("auto").height("auto").removeClass("fancybox-tmp"), p = f(nt.outerWidth(!0) - nt.width()), ot = f(nt.outerHeight(!0) - nt.height()), k = w + p, ut = it + ot, d = l(n) ? (o.w - k) * f(n) / 100 : n, b = l(t) ? (o.h - ut) * f(t) / 100 : t, "iframe" === r.type) {
                    if (rt = r.content, r.autoHeight && 1 === rt.data("ready")) try {
                        rt[0].contentWindow.document.location && (e.width(d).height(9999), tt = rt.contents().find("body"), ft && tt.css("overflow-x", "hidden"), b = tt.outerHeight(!0))
                    } catch (ct) {}
                } else(r.autoWidth || r.autoHeight) && (e.addClass("fancybox-tmp"), r.autoWidth || e.width(d), r.autoHeight || e.height(b), r.autoWidth && (d = e.width()), r.autoHeight && (b = e.height()), e.removeClass("fancybox-tmp"));
                if (n = f(d), t = f(b), g = d / b, v = f(l(v) ? f(v, "w") - k : v), s = f(l(s) ? f(s, "w") - k : s), a = f(l(a) ? f(a, "h") - ut : a), c = f(l(c) ? f(c, "h") - ut : c), tt = s, et = c, r.fitToView && (s = Math.min(o.w - k, s), c = Math.min(o.h - ut, c)), k = o.w - w, it = o.h - it, r.aspectRatio ? (n > s && (n = s, t = f(n / g)), t > c && (t = c, n = f(t * g)), n < v && (n = v, t = f(n / g)), t < a && (t = a, n = f(t * g))) : (n = Math.max(v, Math.min(n, s)), r.autoHeight && "iframe" !== r.type && (e.width(n), t = e.height()), t = Math.max(a, Math.min(t, c))), r.fitToView)
                    if (e.width(n).height(t), y.width(n + p), o = y.width(), w = y.height(), r.aspectRatio)
                        for (;
                            (o > k || w > it) && n > v && t > a && !(19 < st++);) t = Math.max(a, Math.min(c, t - 10)), n = f(t * g), n < v && (n = v, t = f(n / g)), n > s && (n = s, t = f(n / g)), e.width(n).height(t), y.width(n + p), o = y.width(), w = y.height();
                    else n = Math.max(v, Math.min(n, n - (o - k))), t = Math.max(a, Math.min(t, t - (w - it)));
                ft && "auto" === ht && t < b && n + p + ft < k && (n += ft), e.width(n).height(t), y.width(n + p), o = y.width(), w = y.height(), y = (o > k || w > it) && n > v && t > a, n = r.aspectRatio ? n < tt && t < et && n < d && t < b : (n < tt || t < et) && (n < d || t < b), i.extend(r, {
                    dim: {
                        width: h(o),
                        height: h(w)
                    },
                    origWidth: d,
                    origHeight: b,
                    canShrink: y,
                    canExpand: n,
                    wPadding: p,
                    hPadding: ot,
                    wrapSpace: w - nt.outerHeight(!0),
                    skinSpace: nt.height() - t
                }), !rt && r.autoHeight && t > a && t < c && !n && e.height("auto")
            },
            _getPosition: function(n) {
                var r = u.current,
                    i = u.getViewport(),
                    t = r.margin,
                    e = u.wrap.width() + t[1] + t[3],
                    f = u.wrap.height() + t[0] + t[2],
                    t = {
                        position: "absolute",
                        top: t[0],
                        left: t[3]
                    };
                return r.autoCenter && r.fixed && !n && f <= i.h && e <= i.w ? t.position = "fixed" : r.locked || (t.top += i.y, t.left += i.x), t.top = h(Math.max(t.top, t.top + (i.h - f) * r.topRatio)), t.left = h(Math.max(t.left, t.left + (i.w - e) * r.leftRatio)), t
            },
            _afterZoomIn: function() {
                var n = u.current;
                n && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (n.closeClick || n.nextClick && 1 < u.group.length) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    !i(t.target).is("a") && !i(t.target).parent().is("a") && (t.preventDefault(), u[n.closeClick ? "close" : "next"]())
                }), n.closeBtn && i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(n) {
                    n.preventDefault(), u.close()
                }), n.arrows && 1 < u.group.length && ((n.loop || 0 < n.index) && i(n.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (n.loop || n.index < u.group.length - 1) && i(n.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), !n.loop && n.index === n.group.length - 1 ? u.play(!1) : u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()))
            },
            _afterZoomOut: function(n) {
                n = n || u.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(u, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), u.trigger("afterClose", n)
            }
        }), u.transitions = {
            getOrigPosition: function() {
                var n = u.current,
                    o = n.element,
                    t = n.orig,
                    i = {},
                    f = 50,
                    e = 50,
                    s = n.hPadding,
                    c = n.wPadding,
                    r = u.getViewport();
                return !t && n.isDom && o.is(":visible") && (t = o.find("img:first"), t.length || (t = o)), a(t) ? (i = t.offset(), t.is("img") && (f = t.outerWidth(), e = t.outerHeight())) : (i.top = r.y + (r.h - e) * n.topRatio, i.left = r.x + (r.w - f) * n.leftRatio), ("fixed" === u.wrap.css("position") || n.locked) && (i.top -= r.y, i.left -= r.x), i = {
                    top: h(i.top - s * n.topRatio),
                    left: h(i.left - c * n.leftRatio),
                    width: h(f + c),
                    height: h(e + s)
                }
            },
            step: function(n, t) {
                var e, i, r = t.prop,
                    o, s;
                i = u.current, o = i.wrapSpace, s = i.skinSpace, ("width" === r || "height" === r) && (e = t.end === t.start ? 1 : (n - t.start) / (t.end - t.start), u.isClosing && (e = 1 - e), i = "width" === r ? i.wPadding : i.hPadding, i = n - i, u.skin[r](f("width" === r ? i : i - o * e)), u.inner[r](f("width" === r ? i : i - o * e - s * e)))
            },
            zoomIn: function() {
                var t = u.current,
                    n = t.pos,
                    r = t.openEffect,
                    e = "elastic" === r,
                    f = i.extend({
                        opacity: 1
                    }, n);
                delete f.position, e ? (n = this.getOrigPosition(), t.openOpacity && (n.opacity = .1)) : "fade" === r && (n.opacity = .1), u.wrap.css(n).animate(f, {
                    duration: "none" === r ? 0 : t.openSpeed,
                    easing: t.openEasing,
                    step: e ? this.step : null,
                    complete: u._afterZoomIn
                })
            },
            zoomOut: function() {
                var n = u.current,
                    i = n.closeEffect,
                    r = "elastic" === i,
                    t = {
                        opacity: .1
                    };
                r && (t = this.getOrigPosition(), n.closeOpacity && (t.opacity = .1)), u.wrap.animate(t, {
                    duration: "none" === i ? 0 : n.closeSpeed,
                    easing: n.closeEasing,
                    step: r ? this.step : null,
                    complete: u._afterZoomOut
                })
            },
            changeIn: function() {
                var r = u.current,
                    o = r.nextEffect,
                    t = r.pos,
                    e = {
                        opacity: 1
                    },
                    i = u.direction,
                    n;
                t.opacity = .1, "elastic" === o && (n = "down" === i || "up" === i ? "top" : "left", "down" === i || "right" === i ? (t[n] = h(f(t[n]) - 200), e[n] = "+=200px") : (t[n] = h(f(t[n]) + 200), e[n] = "-=200px")), "none" === o ? u._afterZoomIn() : u.wrap.css(t).animate(e, {
                    duration: r.nextSpeed,
                    easing: r.nextEasing,
                    complete: u._afterZoomIn
                })
            },
            changeOut: function() {
                var t = u.previous,
                    r = t.prevEffect,
                    f = {
                        opacity: .1
                    },
                    n = u.direction;
                "elastic" === r && (f["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"), t.wrap.animate(f, {
                    duration: "none" === r ? 0 : t.prevSpeed,
                    easing: t.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, u.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !s,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(n) {
                n = i.extend({}, this.defaults, n), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(u.coming ? u.coming.parent : n.parent), this.fixed = !1, n.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(n) {
                var t = this;
                n = i.extend({}, this.defaults, n), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(n), this.fixed || (e.bind("resize.overlay", i.proxy(this.update, this)), this.update()), n.closeClick && this.overlay.bind("click.overlay", function(n) {
                    if (i(n.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
                }), this.overlay.css(n.css).show()
            },
            close: function() {
                var t, n;
                e.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = e.scrollTop(), n = e.scrollLeft(), this.el.removeClass("fancybox-lock"), e.scrollTop(t).scrollLeft(n)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var n = "100%",
                    i;
                this.overlay.width(n).height("100%"), y ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > i && (n = o.width())) : o.width() > e.width() && (n = o.width()), this.overlay.width(n).height(o.height())
            },
            onReady: function(n, t) {
                var r = this.overlay;
                i(".fancybox-overlay").stop(!0, !0), r || this.create(n), n.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > e.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === n.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(n, t) {
                var u, r;
                t.locked && (!1 !== this.margin && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), u = e.scrollTop(), r = e.scrollLeft(), this.el.addClass("fancybox-lock"), e.scrollTop(u).scrollLeft(r)), this.open(n)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(n) {
                this.overlay && !u.coming && this.overlay.fadeOut(n.speedOut, i.proxy(this.close, this))
            }
        }, u.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(n) {
                var t = u.current,
                    e = t.title,
                    r = n.type;
                if (i.isFunction(e) && (e = e.call(t.element, t)), c(e) && "" !== i.trim(e)) {
                    t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + e + "</div>");
                    switch (r) {
                        case "inside":
                            r = u.skin;
                            break;
                        case "outside":
                            r = u.wrap;
                            break;
                        case "over":
                            r = u.inner;
                            break;
                        default:
                            r = u.skin, t.appendTo("body"), y && t.width(t.width()), t.wrapInner('<span class="child"></span>'), u.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    t["top" === n.position ? "prependTo" : "appendTo"](r)
                }
            }
        }, i.fn.fancybox = function(n) {
            var f, e = i(this),
                t = this.selector || "",
                r = function(r) {
                    var o = i(this).blur(),
                        c = f,
                        h, s;
                    !r.ctrlKey && !r.altKey && !r.shiftKey && !r.metaKey && !o.is(".fancybox-wrap") && (h = n.groupAttr || "data-fancybox-group", s = o.attr(h), s || (h = "rel", s = o.get(0)[h]), s && "" !== s && "nofollow" !== s && (o = t.length ? i(t) : e, o = o.filter("[" + h + '="' + s + '"]'), c = o.index(this)), n.index = c, !1 !== u.open(o, n) && r.preventDefault())
                };
            return n = n || {}, f = n.index || 0, !t || !1 === n.live ? e.unbind("click.fb-start").bind("click.fb-start", r) : o.undelegate(t, "click.fb-start").delegate(t + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, o.ready(function() {
            var f, t, e;
            i.scrollbarWidth === r && (i.scrollbarWidth = function() {
                var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    n = t.children(),
                    n = n.innerWidth() - n.height(99).innerWidth();
                return t.remove(), n
            }), i.support.fixedPosition === r && (f = i.support, t = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop, t.remove(), f.fixedPosition = e), i.extend(u.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            }), f = i(n).width(), p.addClass("fancybox-lock-test"), t = i(n).width(), p.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (t - f) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery), ! function(n) {
        function o() {
            n[i].glbl || (f = {
                $wndw: n(window),
                $html: n("html"),
                $body: n("body")
            }, t = {}, u = {}, r = {}, n.each([t, u, r], function(n, t) {
                t.add = function(n) {
                    n = n.split(" ");
                    for (var i = 0, r = n.length; r > i; i++) t[n[i]] = t.mm(n[i])
                }
            }), t.mm = function(n) {
                return "mm-" + n
            }, t.add("wrapper menu panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), t.umm = function(n) {
                return "mm-" == n.slice(0, 3) && (n = n.slice(3)), n
            }, u.mm = function(n) {
                return "mm-" + n
            }, u.add("parent sub"), r.mm = function(n) {
                return n + ".mm"
            }, r.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"), n[i]._c = t, n[i]._d = u, n[i]._e = r, n[i].glbl = f)
        }
        var i = "mmenu",
            e = "5.3.1",
            t, u, r, f;
        n[i] || (n[i] = function(n, t, i) {
            this.$menu = n, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = i, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var r = this.$menu.children(this.conf.panelNodetype);
            return this._initAddons(), this.init(r), "function" == typeof this.___debug && this.___debug(), this
        }, n[i].version = e, n[i].addons = {}, n[i].uniqueId = 0, n[i].defaults = {
            extensions: [],
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "panel"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, n[i].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, n[i].prototype = {
            init: function(n) {
                n = n.not("." + t.nopanel), n = this._initPanels(n), this.trigger("init", n), this.trigger("update")
            },
            update: function() {
                this.trigger("update")
            },
            setSelected: function(n) {
                this.$menu.find("." + t.listview).children().removeClass(t.selected), n.addClass(t.selected), this.trigger("setSelected", n)
            },
            openPanel: function(n) {
                var u = n.parent(),
                    f, i, r;
                if (u.hasClass(t.vertical)) {
                    if (f = u.parents("." + t.subopened), f.length) return this.openPanel(f.first());
                    u.addClass(t.opened)
                } else {
                    if (n.hasClass(t.current)) return;
                    i = this.$menu.children("." + t.panel), r = i.filter("." + t.current), i.removeClass(t.highest).removeClass(t.current).not(n).not(r).not("." + t.vertical).addClass(t.hidden), n.hasClass(t.opened) ? n.nextAll("." + t.opened).addClass(t.highest).removeClass(t.opened).removeClass(t.subopened) : (n.addClass(t.highest), r.addClass(t.subopened)), n.removeClass(t.hidden).addClass(t.current), setTimeout(function() {
                        n.removeClass(t.subopened).addClass(t.opened)
                    }, this.conf.openingInterval)
                }
                this.trigger("openPanel", n)
            },
            closePanel: function(n) {
                var i = n.parent();
                i.hasClass(t.vertical) && (i.removeClass(t.opened), this.trigger("closePanel", n))
            },
            closeAllPanels: function() {
                this.$menu.find("." + t.listview).children().removeClass(t.selected).filter("." + t.vertical).removeClass(t.opened);
                var i = this.$menu.children("." + t.panel),
                    n = i.first();
                this.$menu.children("." + t.panel).not(n).removeClass(t.subopened).removeClass(t.opened).removeClass(t.current).removeClass(t.highest).addClass(t.hidden), this.openPanel(n)
            },
            togglePanel: function(n) {
                var i = n.parent();
                i.hasClass(t.vertical) && this[i.hasClass(t.opened) ? "closePanel" : "openPanel"](n)
            },
            getInstance: function() {
                return this
            },
            bind: function(n, t) {
                this.cbck[n] = this.cbck[n] || [], this.cbck[n].push(t)
            },
            trigger: function() {
                var u = this,
                    r = Array.prototype.slice.call(arguments),
                    t = r.shift(),
                    n, i;
                if (this.cbck[t])
                    for (n = 0, i = this.cbck[t].length; i > n; n++) this.cbck[t][n].apply(u, r)
            },
            _initMenu: function() {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                    n(this).attr("id", t.mm(n(this).attr("id")))
                })), this.$menu.contents().each(function() {
                    3 == n(this)[0].nodeType && n(this).remove()
                }), this.$menu.parent().addClass(t.wrapper);
                var i = [t.menu];
                this.opts.slidingSubmenus || i.push(t.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && i.push(this.opts.extensions), this.$menu.addClass(i.join(" "))
            },
            _initPanels: function(i) {
                var f = this,
                    c = this.__findAddBack(i, "ul, ol"),
                    h, r, s, l, o, e;
                return this.__refactorClass(c, this.conf.classNames.inset, "inset").addClass(t.nolistview + " " + t.nopanel), c.not("." + t.nolistview).addClass(t.listview), h = this.__findAddBack(i, "." + t.listview).children(), this.__refactorClass(h, this.conf.classNames.selected, "selected"), this.__refactorClass(h, this.conf.classNames.divider, "divider"), this.__refactorClass(h, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(i, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel"), r = n(), s = i.add(i.find("." + t.panel)).add(this.__findAddBack(i, "." + t.listview).children().children(this.conf.panelNodetype)).not("." + t.nopanel), this.__refactorClass(s, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || s.addClass(t.vertical), s.each(function() {
                    var i = n(this),
                        u = i,
                        e;
                    i.is("ul, ol") ? (i.wrap('<div class="' + t.panel + '" />'), u = i.parent()) : u.addClass(t.panel), e = i.attr("id"), i.removeAttr("id"), u.attr("id", e || f.__getUniqueId()), i.hasClass(t.vertical) && (i.removeClass(f.conf.classNames.vertical), u.add(u.parent()).addClass(t.vertical)), r = r.add(u)
                }), l = n("." + t.panel, this.$menu), r.each(function() {
                    var r = n(this),
                        i = r.parent(),
                        o = i.children("a, span").first(),
                        h, s, e;
                    if ((i.is("." + t.menu) || (i.data(u.sub, r), r.data(u.parent, i)), !i.children("." + t.next).length && i.parent().is("." + t.listview)) && (e = r.attr("id"), h = n('<a class="' + t.next + '" href="#' + e + '" data-target="#' + e + '" />').insertBefore(o), o.is("span") && h.addClass(t.fullsubopen)), !r.children("." + t.navbar).length && !i.hasClass(t.vertical))
                        if (i.parent().is("." + t.listview) ? i = i.closest("." + t.panel) : (o = i.closest("." + t.panel).find('a[href="#' + r.attr("id") + '"]').first(), i = o.closest("." + t.panel)), s = n('<div class="' + t.navbar + '" />'), i.length) {
                            e = i.attr("id");
                            switch (f.opts.navbar.titleLink) {
                                case "anchor":
                                    _url = o.attr("href");
                                    break;
                                case "panel":
                                case "parent":
                                    _url = "#" + e;
                                    break;
                                case "none":
                                default:
                                    _url = !1
                            }
                            s.append('<a class="' + t.btn + " " + t.prev + '" href="#' + e + '" data-target="#' + e + '"></a>').append('<a class="' + t.title + '"' + (_url ? ' href="' + _url + '"' : "") + ">" + o.text() + "</a>").prependTo(r), f.opts.navbar.add && r.addClass(t.hasnavbar)
                        } else f.opts.navbar.title && (s.append('<a class="' + t.title + '">' + f.opts.navbar.title + "</a>").prependTo(r), f.opts.navbar.add && r.addClass(t.hasnavbar))
                }), o = this.__findAddBack(i, "." + t.listview).children("." + t.selected).removeClass(t.selected).last().addClass(t.selected), o.add(o.parentsUntil("." + t.menu, "li")).filter("." + t.vertical).addClass(t.opened).end().not("." + t.vertical).each(function() {
                    n(this).parentsUntil("." + t.menu, "." + t.panel).not("." + t.vertical).first().addClass(t.opened).parentsUntil("." + t.menu, "." + t.panel).not("." + t.vertical).first().addClass(t.opened).addClass(t.subopened)
                }), o.children("." + t.panel).not("." + t.vertical).addClass(t.opened).parentsUntil("." + t.menu, "." + t.panel).not("." + t.vertical).first().addClass(t.opened).addClass(t.subopened), e = l.filter("." + t.opened), e.length || (e = r.first()), e.addClass(t.opened).last().addClass(t.current), r.not("." + t.vertical).not(e.last()).addClass(t.hidden).end().appendTo(this.$menu), r
            },
            _initAnchors: function() {
                var u = this;
                f.$body.on(r.click + "-oncanvas", "a[href]", function(r) {
                    var e = n(this),
                        s = !1,
                        l = u.$menu.find(e).length,
                        a, o, c, h;
                    for (a in n[i].addons)
                        if (s = n[i].addons[a].clickAnchor.call(u, e, l)) break;
                    if (!s && l && (o = e.attr("href"), o.length > 1 && "#" == o.slice(0, 1))) try {
                        c = n(o, u.$menu), c.is("." + t.panel) && (s = !0, u[e.parent().hasClass(t.vertical) ? "togglePanel" : "openPanel"](c))
                    } catch (v) {}(s && r.preventDefault(), s || !l || !e.is("." + t.listview + " > li > a") || e.is('[rel="external"]') || e.is('[target="_blank"]')) || (u.__valueOrFn(u.opts.onClick.setSelected, e) && u.setSelected(n(r.target).parent()), h = u.__valueOrFn(u.opts.onClick.preventDefault, e, "#" == o.slice(0, 1)), h && r.preventDefault(), u.__valueOrFn(u.opts.onClick.blockUI, e, !h) && f.$html.addClass(t.blocking), u.__valueOrFn(u.opts.onClick.close, e, h) && u.close())
                })
            },
            _initAddons: function() {
                var t;
                for (t in n[i].addons) n[i].addons[t].add.call(this), n[i].addons[t].add = function() {};
                for (t in n[i].addons) n[i].addons[t].setup.call(this)
            },
            __api: function() {
                var i = this,
                    t = {};
                return n.each(this._api, function() {
                    var n = this;
                    t[n] = function() {
                        var r = i[n].apply(i, arguments);
                        return "undefined" == typeof r ? t : r
                    }
                }), t
            },
            __valueOrFn: function(n, t, i) {
                return "function" == typeof n ? n.call(t[0]) : "undefined" == typeof n && "undefined" != typeof i ? i : n
            },
            __refactorClass: function(n, i, r) {
                return n.filter("." + i).removeClass(i).addClass(t[r])
            },
            __findAddBack: function(n, t) {
                return n.find(t).add(n.filter(t))
            },
            __filterListItems: function(n) {
                return n.not("." + t.divider).not("." + t.hidden)
            },
            __transitionend: function(n, t, i) {
                var f = !1,
                    u = function() {
                        f || t.call(n[0]), f = !0
                    };
                n.one(r.transitionend, u), n.one(r.webkitTransitionEnd, u), setTimeout(u, 1.1 * i)
            },
            __getUniqueId: function() {
                return t.mm(n[i].uniqueId++)
            }
        }, n.fn[i] = function(t, r) {
            return o(), t = n.extend(!0, {}, n[i].defaults, t), r = n.extend(!0, {}, n[i].configuration, r), this.each(function() {
                var u = n(this),
                    f;
                u.data(i) || (f = new n[i](u, t, r), u.data(i, f.__api()))
            })
        }, n[i].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints
        })
    }(jQuery), ! function(n) {
        var u = "mmenu",
            r = "offCanvas",
            i, e, f, t;
        n[u].addons[r] = {
            setup: function() {
                var f, e, o;
                this.opts[r] && (f = this.opts[r], e = this.conf[r], t = n[u].glbl, this._api = n.merge(this._api, ["open", "close", "setPage"]), ("top" == f.position || "bottom" == f.position) && (f.zposition = "front"), "string" != typeof e.pageSelector && (e.pageSelector = "> " + e.pageNodetype), t.$allMenus = (t.$allMenus || n()).add(this.$menu), this.vars.opened = !1, o = [i.offcanvas], "left" != f.position && o.push(i.mm(f.position)), "back" != f.zposition && o.push(i.mm(f.zposition)), this.$menu.addClass(o.join(" ")).parent().removeClass(i.wrapper), this.setPage(t.$page), this._initBlocker(), this["_initWindow_" + r](), this.$menu[e.menuInjectMethod + "To"](e.menuWrapperSelector))
            },
            add: function() {
                i = n[u]._c, e = n[u]._d, f = n[u]._e, i.add("offcanvas slideout modal background opening blocker page"), e.add("style"), f.add("resize")
            },
            clickAnchor: function(n) {
                var u;
                return this.opts[r] ? (u = this.$menu.attr("id"), u && u.length && (this.conf.clone && (u = i.umm(u)), n.is('[href="#' + u + '"]'))) ? (this.open(), !0) : t.$page ? (u = t.$page.first().attr("id"), u && u.length && n.is('[href="#' + u + '"]') ? (this.close(), !0) : !1) : void 0 : !1
            }
        }, n[u].defaults[r] = {
            position: "left",
            zposition: "back",
            modal: !1,
            moveBackground: !0
        }, n[u].configuration[r] = {
            pageNodetype: "div",
            pageSelector: null,
            wrapPageIfNeeded: !0,
            menuWrapperSelector: "body",
            menuInjectMethod: "prepend"
        }, n[u].prototype.open = function() {
            if (!this.vars.opened) {
                var n = this;
                this._openSetup(), setTimeout(function() {
                    n._openFinish()
                }, this.conf.openingInterval), this.trigger("open")
            }
        }, n[u].prototype._openSetup = function() {
            var o = this,
                u;
            this.closeAllOthers(), t.$page.each(function() {
                n(this).data(e.style, n(this).attr("style") || "")
            }), t.$wndw.trigger(f.resize + "-offcanvas", [!0]), u = [i.opened], this.opts[r].modal && u.push(i.modal), this.opts[r].moveBackground && u.push(i.background), "left" != this.opts[r].position && u.push(i.mm(this.opts[r].position)), "back" != this.opts[r].zposition && u.push(i.mm(this.opts[r].zposition)), this.opts.extensions && u.push(this.opts.extensions), t.$html.addClass(u.join(" ")), setTimeout(function() {
                o.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(i.current + " " + i.opened)
        }, n[u].prototype._openFinish = function() {
            var n = this;
            this.__transitionend(t.$page.first(), function() {
                n.trigger("opened")
            }, this.conf.transitionDuration), t.$html.addClass(i.opening), this.trigger("opening")
        }, n[u].prototype.close = function() {
            if (this.vars.opened) {
                var u = this;
                this.__transitionend(t.$page.first(), function() {
                    u.$menu.removeClass(i.current).removeClass(i.opened), t.$html.removeClass(i.opened).removeClass(i.modal).removeClass(i.background).removeClass(i.mm(u.opts[r].position)).removeClass(i.mm(u.opts[r].zposition)), u.opts.extensions && t.$html.removeClass(u.opts.extensions), t.$page.each(function() {
                        n(this).attr("style", n(this).data(e.style))
                    }), u.vars.opened = !1, u.trigger("closed")
                }, this.conf.transitionDuration), t.$html.removeClass(i.opening), this.trigger("close"), this.trigger("closing")
            }
        }, n[u].prototype.closeAllOthers = function() {
            t.$allMenus.not(this.$menu).each(function() {
                var t = n(this).data(u);
                t && t.close && t.close()
            })
        }, n[u].prototype.setPage = function(u) {
            var e = this,
                f = this.conf[r];
            u && u.length || (u = t.$body.find(f.pageSelector), u.length > 1 && f.wrapPageIfNeeded && (u = u.wrapAll("<" + this.conf[r].pageNodetype + " />").parent())), u.each(function() {
                n(this).attr("id", n(this).attr("id") || e.__getUniqueId())
            }), u.addClass(i.page + " " + i.slideout), t.$page = u, this.trigger("setPage", u)
        }, n[u].prototype["_initWindow_" + r] = function() {
            t.$wndw.off(f.keydown + "-offcanvas").on(f.keydown + "-offcanvas", function(n) {
                if (t.$html.hasClass(i.opened) && 9 == n.keyCode) return n.preventDefault(), !1
            });
            var n = 0;
            t.$wndw.off(f.resize + "-offcanvas").on(f.resize + "-offcanvas", function(r, u) {
                if (1 == t.$page.length && (u || t.$html.hasClass(i.opened))) {
                    var f = t.$wndw.height();
                    (u || f != n) && (n = f, t.$page.css("minHeight", f))
                }
            })
        }, n[u].prototype._initBlocker = function() {
            var r = this;
            t.$blck || (t.$blck = n('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), t.$blck.appendTo(t.$body).off(f.touchstart + "-offcanvas " + f.touchmove + "-offcanvas").on(f.touchstart + "-offcanvas " + f.touchmove + "-offcanvas", function(n) {
                n.preventDefault(), n.stopPropagation(), t.$blck.trigger(f.mousedown + "-offcanvas")
            }).off(f.mousedown + "-offcanvas").on(f.mousedown + "-offcanvas", function(n) {
                n.preventDefault(), t.$html.hasClass(i.modal) || (r.closeAllOthers(), r.close())
            })
        }
    }(jQuery), ! function(n) {
        var i = "mmenu",
            r = "navbars",
            t, e, f, u;
        n[i].addons[r] = {
            setup: function() {
                var o = this,
                    e = this.opts[r],
                    h = this.conf[r],
                    f, s;
                if (u = n[i].glbl, "undefined" != typeof e) {
                    e instanceof Array || (e = [e]), f = {}, n.each(e, function(u) {
                        var s = e[u],
                            c, a, l, y, w, v, p;
                        for ("boolean" == typeof s && s && (s = {}), "object" != typeof s && (s = {}), "undefined" == typeof s.content && (s.content = ["prev", "title"]), s.content instanceof Array || (s.content = [s.content]), s = n.extend(!0, {}, o.opts.navbar, s), c = s.position, a = s.height, "number" != typeof a && (a = 1), a = Math.min(4, Math.max(1, a)), "bottom" != c && (c = "top"), f[c] || (f[c] = 0), f[c]++, l = n("<div />").addClass(t.navbar + " " + t.navbar + "-" + c + " " + t.navbar + "-" + c + "-" + f[c] + " " + t.navbar + "-size-" + a), f[c] += a - 1, y = 0, w = s.content.length; w > y; y++) v = n[i].addons[r][s.content[y]] || !1, v ? v.call(o, l, s, h) : (v = s.content[y], v instanceof n || (v = n(s.content[y])), v.each(function() {
                            l.append(n(this))
                        }));
                        p = Math.ceil(l.children().not("." + t.btn).length / a), p > 1 && l.addClass(t.navbar + "-content-" + p), l.children("." + t.btn).length && l.addClass(t.hasbtns), l.prependTo(o.$menu)
                    });
                    for (s in f) o.$menu.addClass(t.hasnavbar + "-" + s + "-" + f[s])
                }
            },
            add: function() {
                t = n[i]._c, e = n[i]._d, f = n[i]._e, t.add("close hasbtns")
            },
            clickAnchor: function() {}
        }, n[i].configuration[r] = {
            breadcrumbSeporator: "/"
        }, n[i].configuration.classNames[r] = {
            panelTitle: "Title",
            panelNext: "Next",
            panelPrev: "Prev"
        }
    }(jQuery), function(n) {
        var t = "mmenu",
            r = "navbars",
            i = "breadcrumbs";
        n[t].addons[r][i] = function(i, r, u) {
            var f = n[t]._c,
                o = n[t]._d,
                e;
            f.add("breadcrumbs seporator"), i.append('<span class="' + f.breadcrumbs + '"></span>'), this.bind("init", function(t) {
                t.removeClass(f.hasnavbar).each(function() {
                    for (var i, e = [], h = n(this), s = n('<span class="' + f.breadcrumbs + '"></span>'), t = n(this).children().first(), r = !0; t && t.length;) t.is("." + f.panel) || (t = t.closest("." + f.panel)), i = t.children("." + f.navbar).children("." + f.title).text(), e.unshift(r ? "<span>" + i + "</span>" : '<a href="#' + t.attr("id") + '">' + i + "</a>"), r = !1, t = t.data(o.parent);
                    s.append(e.join('<span class="' + f.seporator + '">' + u.breadcrumbSeporator + "</span>")).appendTo(h.children("." + f.navbar))
                })
            }), e = function() {
                var r = this.$menu.children("." + f.current),
                    t = i.find("." + f.breadcrumbs),
                    n = r.children("." + f.navbar).children("." + f.breadcrumbs);
                t.html(n.html())
            }, this.bind("openPanel", e), this.bind("init", e)
        }
    }(jQuery), function(n) {
        var t = "mmenu",
            r = "navbars",
            i = "close";
        n[t].addons[r][i] = function(i) {
            var u = n[t]._c,
                f = n[t].glbl,
                r;
            i.append('<a class="' + u.close + " " + u.btn + '" href="#"></a>'), r = function(n) {
                i.find("." + u.close).attr("href", "#" + n.attr("id"))
            }, r.call(this, f.$page), this.bind("setPage", r)
        }
    }(jQuery), function(n) {
        var i = "mmenu",
            t = "navbars",
            r = "next";
        n[i].addons[t][r] = function(r) {
            var u = n[i]._c,
                f;
            r.append('<a class="' + u.next + " " + u.btn + '" href="#"></a>'), f = function(n) {
                n = n || this.$menu.children("." + u.current);
                var f = r.find("." + u.next),
                    o = n.find("." + this.conf.classNames[t].panelNext),
                    i = o.attr("href"),
                    e = o.html();
                f[i ? "attr" : "removeAttr"]("href", i), f[i || e ? "removeClass" : "addClass"](u.hidden), f.html(e)
            }, this.bind("openPanel", f), this.bind("init", function() {
                f.call(this)
            })
        }
    }(jQuery), function(n) {
        var i = "mmenu",
            t = "navbars",
            r = "prev";
        n[i].addons[t][r] = function(r) {
            var u = n[i]._c,
                f;
            r.append('<a class="' + u.prev + " " + u.btn + '" href="#"></a>'), this.bind("init", function(n) {
                n.removeClass(u.hasnavbar)
            }), f = function() {
                var o = this.$menu.children("." + u.current),
                    e = r.find("." + u.prev),
                    i = o.find("." + this.conf.classNames[t].panelPrev),
                    n, f;
                i.length || (i = o.children("." + u.navbar).children("." + u.prev)), n = i.attr("href"), f = i.html(), e[n ? "attr" : "removeAttr"]("href", n), e[n || f ? "removeClass" : "addClass"](u.hidden), e.html(f)
            }, this.bind("openPanel", f), this.bind("init", f)
        }
    }(jQuery), function(n) {
        var t = "mmenu",
            r = "navbars",
            i = "searchfield";
        n[t].addons[r][i] = function(i) {
            var u = n[t]._c,
                r = n('<div class="' + u.search + '" />').appendTo(i);
            "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = r
        }
    }(jQuery), function(n) {
        var i = "mmenu",
            t = "navbars",
            r = "title";
        n[i].addons[t][r] = function(r, u) {
            var f = n[i]._c,
                e;
            r.append('<a class="' + f.title + '"></a>'), e = function(n) {
                var o, i, e, s;
                n = n || this.$menu.children("." + f.current), o = r.find("." + f.title), i = n.find("." + this.conf.classNames[t].panelTitle), i.length || (i = n.children("." + f.navbar).children("." + f.title)), e = i.attr("href"), s = i.html() || u.title, o[e ? "attr" : "removeAttr"]("href", e), o[e || s ? "removeClass" : "addClass"](f.hidden), o.html(s)
            }, this.bind("openPanel", e), this.bind("init", function() {
                e.call(this)
            })
        }
    }(jQuery), typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            n;
        for (n in t)
            if (i.style[n] !== undefined) return {
                end: t[n]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var r = !1,
            u = this,
            i;
        n(this).one("bsTransitionEnd", function() {
            r = !0
        });
        return i = function() {
            r || n(u).trigger(n.support.transition.end)
        }, setTimeout(i, t), this
    }, n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.alert");
            r || u.data("bs.alert", r = new t(this)), typeof i == "string" && r[i].call(u)
        })
    }
    var r = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", r, this.close)
        },
        i;
    t.VERSION = "3.3.5", t.TRANSITION_DURATION = 150, t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    }, i = n.fn.alert, n.fn.alert = u, n.fn.alert.Constructor = t, n.fn.alert.noConflict = function() {
        return n.fn.alert = i, this
    };
    n(document).on("click.bs.alert.data-api", r, t.prototype.close)
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f)), i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.isLoading = !1
        },
        i;
    t.VERSION = "3.3.5", t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text", u.resetText == null && i.data("resetText", i[f]()), setTimeout(n.proxy(function() {
            i[f](u[t] == null ? this.options[t] : u[t]), t == "loadingText" ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : n.prop("type") == "checkbox" && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    }, i = n.fn.button, n.fn.button = r, n.fn.button.Constructor = t, n.fn.button.noConflict = function() {
        return n.fn.button = i, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var i = n(t.target);
        i.hasClass("btn") || (i = i.closest(".btn")), r.call(i, "toggle"), n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var f = n(this),
                r = f.data("bs.carousel"),
                u = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : u.slide;
            r || f.data("bs.carousel", r = new t(this, u)), typeof i == "number" ? r.to(i) : e ? r[e]() : u.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this)), this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, i;
    t.VERSION = "3.3.5", t.TRANSITION_DURATION = 600, t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    }, t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = n == "prev" && i === 0 || n == "next" && i == this.$items.length - 1,
            u, r;
        return f && !this.options.wrap ? t : (u = n == "prev" ? -1 : 1, r = (i + u) % this.$items.length, this.$items.eq(r))
    }, t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            a = this,
            c, o, s, h;
        return u.hasClass("active") ? this.sliding = !1 : (c = u[0], o = n.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: f
        }), this.$element.trigger(o), o.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), s = n(this.$indicators.children()[this.getItemIndex(u)]), s && s.addClass("active")), h = n.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active"), e.removeClass(["active", f].join(" ")), a.sliding = !1, setTimeout(function() {
                a.$element.trigger(h)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(h)), l && this.cycle(), this)
    }, u = n.fn.carousel, n.fn.carousel = r, n.fn.carousel.Constructor = t, n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    }, i = function(t) {
        var o, f = n(this),
            i = n(f.attr("data-target") || (o = f.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, u;
        i.hasClass("carousel") && (e = n.extend({}, i.data(), f.data()), u = f.attr("data-slide-to"), u && (e.interval = !1), r.call(i, e), u && i.data("bs.carousel").to(u), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            r.call(t, t.data())
        })
    })
}(jQuery), + function(n) {
    "use strict";

    function u(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var f = n(this),
                r = f.data("bs.collapse"),
                u = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            !r && u.toggle && /show|hide/.test(i) && (u.toggle = !1), r || f.data("bs.collapse", r = new t(this, u)), typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        },
        r;
    t.VERSION = "3.3.5", t.TRANSITION_DURATION = 350, t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    }, t.prototype.show = function() {
        var f, r, o, u, e, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (o = n.Event("show.bs.collapse"), this.$element.trigger(o), !o.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, e = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return e.call(this);
            s = n.camelCase(["scroll", u].join("-")), this.$element.one("bsTransitionEnd", n.proxy(e, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    }, t.prototype.hide = function() {
        var u, i, r;
        if (!this.transitioning && this.$element.hasClass("in") && (u = n.Event("hide.bs.collapse"), this.$element.trigger(u), !u.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return r.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(r, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var r = n(i);
            this.addAriaAndCollapsedClass(u(r), r)
        }, this)).end()
    }, t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }, r = n.fn.collapse, n.fn.collapse = i, n.fn.collapse.Constructor = t, n.fn.collapse.noConflict = function() {
        return n.fn.collapse = r, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var r = n(this);
        r.attr("data-target") || t.preventDefault();
        var f = u(r),
            o = f.data("bs.collapse"),
            e = o ? "toggle" : r.data();
        i.call(f, e)
    })
}(jQuery), + function(n) {
    "use strict";

    function u(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function r(t) {
        t && t.which === 3 || (n(e).remove(), n(i).each(function() {
            var f = n(this),
                i = u(f),
                r = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && t.type == "click" && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", r)), t.isDefaultPrevented()) || (f.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", r)))
        }))
    }

    function o(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.dropdown");
            r || u.data("bs.dropdown", r = new t(this)), typeof i == "string" && r[i].call(u)
        })
    }
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.5", t.prototype.toggle = function(t) {
        var e = n(this),
            i, o, f;
        if (!e.is(".disabled, :disabled")) {
            if (i = u(e), o = i.hasClass("open"), r(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", r);
                if (f = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", f)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger("shown.bs.dropdown", f)
            }
            return !1
        }
    }, t.prototype.keydown = function(t) {
        var o, e, s, h, f, r;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (o = n(this), t.preventDefault(), t.stopPropagation(), !o.is(".disabled, :disabled"))) {
            if (e = u(o), s = e.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && e.find(i).trigger("focus"), o.trigger("click");
            (h = " li:not(.disabled):visible a", f = e.find(".dropdown-menu" + h), f.length) && (r = f.index(t.target), t.which == 38 && r > 0 && r--, t.which == 40 && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).trigger("focus"))
        }
    }, f = n.fn.dropdown, n.fn.dropdown = o, n.fn.dropdown.Constructor = t, n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery), + function(n) {
    "use strict";

    function r(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e)), typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i, this.$body = n(document.body), this.$element = n(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        i;
    t.VERSION = "3.3.5", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    }, t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            });
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), f && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus(), u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                }), f ? r.$dialog.one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    }, t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    }, t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    }, t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide(), this.backdrop(function() {
            n.$body.removeClass("modal-open"), n.resetAdjustments(), n.resetScrollbar(), n.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                }
                n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus() : this.hide())
            }, this));
            if (r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop(), i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    }, t.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    }, t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, t.prototype.checkScrollbar = function() {
        var t = window.innerWidth,
            n;
        t || (n = document.documentElement.getBoundingClientRect(), t = n.right - Math.abs(n.left)), this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    }, t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    }, i = n.fn.modal, n.fn.modal = r, n.fn.modal.Constructor = t, n.fn.modal.noConflict = function() {
        return n.fn.modal = i, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var i = n(this),
            f = i.attr("href"),
            u = n(i.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), i.data());
        i.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        });
        r.call(u, e, this)
    })
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.5", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, t.prototype.init = function(t, i, r) {
        var e, f, u, s, o;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (e = this.options.trigger.split(" "), f = e.length; f--;)
            if (u = e[f], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            s = u == "hover" ? "mouseenter" : "focusin", o = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusin" ? "focus" : "hover"] = !0), i.tip().hasClass("in") || i.hoverState == "in") {
            i.hoverState = "in";
            return
        }
        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    }, t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    }, t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusout" ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }
    }, t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            y, a, e, l, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), y = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !y) return;
            var u = this,
                r = this.tip(),
                v = this.getUID(this.type);
            this.setContent(), r.attr("id", v), this.$element.attr("aria-describedby", v), this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                w = /\s?auto?\s?/i,
                p = w.test(i);
            p && (i = i.replace(w, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            p && (a = i, e = this.getPosition(this.$viewport), i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i, r.removeClass(a).addClass(i)), l = this.getCalculatedOffset(i, f, o, s), this.applyPlacement(l, i), h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type), u.hoverState = null, n == "out" && u.leave(u)
            }, n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    }, t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            v = r[0].offsetWidth,
            s = r[0].offsetHeight,
            h = parseInt(r.css("margin-top"), 10),
            c = parseInt(r.css("margin-left"), 10),
            e, f, u;
        isNaN(h) && (h = 0), isNaN(c) && (c = 0), t.top += h, t.left += c, n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0), r.addClass("in"), e = r[0].offsetWidth, f = r[0].offsetHeight, i == "top" && f != s && (t.top = t.top + s - f), u = this.getViewportAdjustedDelta(i, t, e, f), u.left ? t.left += u.left : t.top += u.top;
        var o = /top|bottom/.test(i),
            a = o ? u.left * 2 - v + e : u.top * 2 - s + f,
            l = o ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(a, r[0][l], o)
    }, t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    }, t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function(i) {
        function f() {
            u.hoverState != "in" && r.detach(), u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type), i && i()
        }
        var u = this,
            r = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e), !e.isDefaultPrevented()) return r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
    }, t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = u.tagName == "BODY",
            i = u.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var o = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            f = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, f, o)
    }, t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, h, c, o, s;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (h = t.top - e - u.scroll, c = t.top + e - u.scroll + r, h < u.top ? f.top = u.top - h : c > u.top + u.height && (f.top = u.top + u.height - c)) : (o = t.left - e, s = t.left + e + i, o < u.left ? f.left = u.left - o : s > u.right && (f.left = u.left + u.width - s)), f) : f
    }, t.prototype.getTitle = function() {
        var t, i = this.$element,
            n = this.options;
        return t = i.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(i[0]) : n.title)
    }, t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    }, t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), this.$tip.length != 1)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i))), t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout), this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type), n.$tip && n.$tip.detach(), n.$tip = null, n.$arrow = null, n.$viewport = null
        })
    }, i = n.fn.tooltip, n.fn.tooltip = r, n.fn.tooltip.Constructor = t, n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.5", t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i), n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, i = n.fn.popover, n.fn.popover = r, n.fn.popover.Constructor = t, n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery), + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body), this.$scrollElement = n(i).is(document.body) ? n(window) : n(i), this.options = n.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.5", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var r = this,
            i = "offset",
            t = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), n.isWindow(this.$scrollElement[0]) || (i = "position", t = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                r = /^#./.test(u) && n(u);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + t, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            r.offsets.push(this[0]), r.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i, n.fn.scrollspy.Constructor = t, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this)), typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.5", t.TRANSITION_DURATION = 150, t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                o = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                e = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(o), t.trigger(e), e.isDefaultPrevented() || o.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                }), t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    }, t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), f.removeClass("in")
    }, u = n.fn.tab, n.fn.tab = r, n.fn.tab.Constructor = t, n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    }, i = function(t) {
        t.preventDefault(), r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r), this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this)), this.$element = n(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        },
        i;
    t.VERSION = "3.3.5", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0,
        target: window
    }, t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            o = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= o.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var f = this.affixed == null,
            h = f ? u : o.top,
            s = f ? e : t;
        return i != null && u <= i ? "top" : r != null && h + s >= n - r ? "bottom" : !1
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var i = this.$target.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - i
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (typeof r != "object" && (u = f = r), typeof f == "function" && (f = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i, this.unpin = i == "bottom" ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    }, i = n.fn.affix, n.fn.affix = r, n.fn.affix.Constructor = t, n.fn.affix.noConflict = function() {
        return n.fn.affix = i, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var i = n(this),
                t = i.data();
            t.offset = t.offset || {}, t.offsetBottom != null && (t.offset.bottom = t.offsetBottom), t.offsetTop != null && (t.offset.top = t.offsetTop), r.call(i, t)
        })
    })
}(jQuery), String.prototype.format = function() {
    for (var t = arguments[0], i, n = 0; n < arguments.length - 1; n++) i = new RegExp("\\{" + n + "\\}", "gm"), t = t.replace(i, arguments[n + 1]);
    return t
}, jQuery.expr[":"].regex = function(n, t, i) {
    var r = i[3].split(","),
        f = /^(data|css):/,
        u = {
            method: r[0].match(f) ? r[0].split(":")[0] : "attr",
            property: r.shift().replace(f, "")
        },
        o = "ig",
        e = new RegExp(r.join("").replace(/^\s+|\s+$/g, ""), o);
    return e.test(jQuery(n)[u.method](u.property))
}, initFancyBox = function() {
    $(".various").fancybox({
        maxWidth: 600
    }), $("a[rel=imgs]").fancybox({
        transitionIn: "none",
        transitionOut: "none",
        titlePosition: "over",
        titleFormat: function(n, t, i) {
            return '<span id="fancybox-title-over">Beeld ' + (i + 1) + " / " + t.length + " " + n + "</span>"
        }
    })
}, sfHover = function() {
    for (var t = document.getElementById("MainNav").getElementsByTagName("LI"), n = 0; n < t.length; n++) t[n].onmouseover = function() {
        this.className += " sfhover"
    }, t[n].onmouseout = function() {
        this.className = this.className.replace(new RegExp(" sfhover\\b"), "")
    }
}, window.attachEvent && window.attachEvent("onload", sfHover), Array.max = function(n) {
    return Math.max.apply(Math, n)
}, SiblingElementsHeight = function(n) {
    var t = [];
    n.each(function() {
        t.push($(this).outerHeight(!0))
    }), n.height(Array.max(t))
}, LinkTargets = function() {
    $("a:regex(href, downloads), .external-link, a[rel=external]").attr("target", "_blank");
    $(document).on("click", "a:regex(href, downloads), .external-link, a[rel=external]", function() {
        $(this).attr("target") !== undefined && $(this).attr("target", "_blank")
    })
}, initDebuginfo = function() {
    $("#debuginfo div").click(function() {
        $("#debuginfo").fadeOut()
    })
}, initPreviewInfo = function() {
    $("#preview-indicator div").click(function() {
        $("#preview-indicator").fadeOut(500, function() {
            $("html").fadeTo("fast", .01, function() {
                $("html").removeClass("preview").fadeTo("slow", 1)
            })
        })
    })
}, initAlternateRows = function() {
    $(".altlist li:even, #onderwerp-links ul li:even").addClass("even")
}, animateProgress = function(n) {
    var t = setInterval(function() {
        (n.innerHTML += ".").length == 5 && (n.innerHTML = ".")
    }, 300)
}, initFaqsTemplate = function() {
    $("#templateblok-faqs h2").not(".active h2").click(function() {
        $("#templateblok-faqs .contentelement").removeClass("active"), $(this).closest(".contentelement").addClass("active")
    })
}, Zoekmachine = {
    init: function() {
        $("body").on("change", "#contenttypeinputpublicaties", function() {
            $(".soortenpublicaties div :input").attr("checked", $(this).is(":checked")), $(".soortenpublicaties > div").slideToggle()
        });
        $("body").on("change", ".soortenpublicaties div :input", function() {
            $("#contenttypeinputpublicaties").attr("checked", $(".soortenpublicaties div :input:checked").length > 0)
        })
    }
}, mobile = {
    init: function() {
        this.loadMMenu(), this.loadMUtils(), this.toggleBlock(), this.focusZoek(), $(window).width() < 993 && ($("#overzicht_instrumenten").before($("body.instrumenten #filter")), $("ul.overzicht-nieuwsitems").before($("body.nieuws .movetotop")), $("#overzicht_evenementen").before($("body.agenda #filter")), $("#overzicht_publicaties").before($("body.publicaties #filter")))
    },
    loadMMenu: function() {
        $("#MainNav").mmenu({
            slidingSubmenus: !0,
            offCanvas: {
                position: "right"
            },
            navbar: {
                add: !1
            },
            navbars: [{
                position: "top",
                content: $("#zoekveldContainer form").clone()
            }]
        }, {
            clone: !0
        })
    },
    loadMUtils: function() {
        $("#utils li").addClass("util").clone().appendTo("#mm-MainNav .mm-panel:first-child .mm-listview")
    },
    toggleBlock: function() {
        $(".toggleonmobile h4").append("<span class='toggler glyphicon glyphicon-menu-hamburger visible-xs'/>"), $(".toggleonmobile h4").each(function() {
            $(this).on("click", function() {
                $(this).parent().find("span.toggler").toggleClass("glyphicon-menu-hamburger, glyphicon-minus-sign").closest(".toggleonmobile").toggleClass("opened")
            })
        })
    },
    focusZoek: function() {
        $(document).on("click", "#zoek", function() {
            $("#q").focus()
        })
    }
}, $(document).ready(function() {
    initScroller(), initTabs(), initSiblingElementsHeight(), initFancyBox(), addUtilsButton("javascript:window.print()", "print"), LinkTargets(), standAloneInstruments(), initDebuginfo(), initPreviewInfo(), initAlternateRows(), initFaqsTemplate(), Zoekmachine.init(), mobile.init(), $("#zoekveldContainer form").submit(function() {
        $("#search-progress").show(), $("#zoekveldContainer .zoek_btn").hide(), $("#q").css({
            color: "#fff"
        });
        var t = $("#search-progress").html().replace("{0}", $("#q").val());
        return $("#search-progress").html(t).show(), $("#search-progress h4").height() > 30 && $("#search-progress").addClass("double"), animateProgress(document.getElementById("progress")), !0
    })
})