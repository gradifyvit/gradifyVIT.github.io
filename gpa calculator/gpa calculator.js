!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t || 4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                r.d(n, a, (function(t) {
                    return e[t]
                }
                ).bind(null, a));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 0)
  }([function(e, t) {
    var r, n, a, o, l, c, i, u, s, d, f, p, v, g, m, $, h, y = (r = function(e, t, r, n) {
        this.id = e,
        this.name = t,
        this.grade = r,
        this.credits = n
    }
    ,
    n = {
        semester: [[{
            id: "",
            name: "",
            grade: "",
            credits: ""
        }, {
            id: "",
            name: "",
            grade: "",
            credits: ""
        }, {
            id: "",
            name: "",
            grade: "",
            credits: ""
        }]],
        perResults: [{
            totalCredit: 0,
            totalPoint: 0
        }]
    },
    {
        addInObj: function(e, t) {
            for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                a[o - 2] = arguments[o];
            name = a[0],
            grade = a[1],
            credits = a[2],
            n.semester.forEach(function(r, a) {
                t == a && (n.perResults[a],
                r.forEach(function(t, r) {
                    r == e && (t.name = name,
                    t.grade = grade,
                    t.credits = credits)
                }))
            })
        },
        getSemesterAll: function() {
            n.semester.forEach(function(e) {
                e.forEach(function(e) {
                    new r(e.id,e.name,e.grade,e.credits)
                })
            })
        },
        AddId: function() {
            var e = n.semester
              , t = [];
            e.forEach(function(e) {
                e.map(function(e) {
                    t.push(e)
                })
            }),
            setTimeout(function() {
                t.forEach(function(e, t) {
                    e.id = t
                })
            }, 200)
        },
        getAllData: function() {
            return n.semester
        },
        AddPerSemester: function() {
            return n.perResults
        },
        getCgpaTotal: function() {
            var e = n.perResults
              , t = e.map(function(e) {
                return e.totalCredit
            })
              , r = e.map(function(e) {
                return e.totalPoint
            });
            if (t.length > 0 && r.length > 0) {
                var a = t.reduce(function(e, t) {
                    return e + t
                });
                return r.reduce(function(e, t) {
                    return e + t
                }) / a
            }
            return 0
        },
        getAllCourse: function(e, t) {
            n.semester.forEach(function(r, n) {
                e == n && t(n, r)
            })
        },
        deleteSemesterMain: function(e) {
            var t = n.semester.map(function(e, t) {
                return t
            }).indexOf(e);
            -1 !== t && (n.semester.splice(t, 1),
            n.perResults.splice(t, 1))
        },
        deleteCourseMain: function(e) {
            n.semester.forEach(function(t, r) {
                for (var a = 0; a < t.length; a++)
                    if (t[a].id == e) {
                        t.splice(a, 1);
                        break
                    }
                console.log(n.perResults[r])
            })
        }
    }), S = (a = {
        mainUL: ".gpa-calculator__main-ul",
        mainLi: ".gpa-calculator__main-li",
        SingleLi: ".gpa-calculator__course-li",
        removeAllBTN: ".gpa-calculator__remove-all",
        removeSingleBTN: ".gpa-calculator__remove-item",
        addSemesters: ".gpa-calculator__add-semester__button",
        selectOption: ".gpa-calculator__grate",
        addCourseUI: ".gpa-calculator__add-course",
        courseUL: ".gpa-calculator__course-ul"
    },
    
    {
        addOption: function() {
            return '\n                        <option value="grade">Grade</option>\n                        <option value="10.0" style="color: red;">S</option>\n                        <option value="9.00" style="color: red;">A</option>\n                        <option value="8.00" style="color: red;">B</option>\n                        <option value="7.00" style="color: red;">C</option>\n                        <option value="6.00" style="color: red;">D</option>\n                        <option value="5.00" style="color: red;">E</option>\n                        <option value="0.0" style="color: red;">F</option>\n                        <option value="0.0" style="color: red;">N</option>\n                        '
        },
        addSemester: function(e) {
            var t = ""
              , r = document.querySelector(a.mainUL);
            e.map(function(e, r) {
                t += '\n                        <li class="gpa-calculator__main-li semester-'.concat(r, '">\n                        <div class="gpa-calculator__heading">\n                            <p class="gpa-calculator__header-text">Semester ').concat(r + 1, '</p> \n                            <button type="button" class="gpa-calculator__remove-all delete-').concat(r, '"></button>\n                        </div>\n                        <ul class="gpa-calculator__course-ul"> </ul> \n                        <div class="gpa-calculator__add-course-semester">\n                            <div class="gpa-calculator__semester-result"><Span>Semester ').concat(r + 1, ' GPA: </Span>  <span class="gpa-calculator__semester-cgpa">0.00</span></div>\n                            <div class="gpa-calculator__add-course"> \n                                <button class="gpa-calculator__add-course__button" id="add-course-').concat(r, '">Add Subject</button>\n                            </div>\n                        </div>\n                    </li>  \n                        ')
            }),
            r.innerHTML = t,
            setTimeout(function() {
                document.querySelectorAll(a.removeSingleBTN).forEach(function(e, t) {
                    e.classList.add("courses-".concat(t))
                })
            }, 200)
        },
        addCourseUI: function(e) {
            document.querySelectorAll(a.courseUL).forEach(function(t, r) {
                e.forEach(function(e, n) {
                    if (r == n) {
                        var a = "";
                        e.forEach(function(e, t) {
                            a += ' \n                                                         <li class="gpa-calculator__course-li course-'.concat(t, '">\n                                                               <input type="text" name="course-name" value="').concat(e.name, '" id="course-name" class="gpa-calculator__course-name gpa-calculator__input" placeholder="Subject  Name"> \n                                                               <select class="gpa-calculator__grate grades-').concat(t, '" name="grade" id="grade"></select> \n                                                               <input type="number" name="credits" step="1" min="0" max="20" id="credits" value="').concat(e.credits, '" class="gpa-calculator__credits credits-').concat(t, ' gpa-calculator__input " placeholder="Credits"> \n                                                               <button class="gpa-calculator__remove-item"></button> \n                                                         </li>\n                                                   '),
                            setTimeout(function() {
                                "" != e.grade && document.querySelectorAll(".gpa-calculator__grate").forEach(function(t, r) {
                                    r == e.id && (t.value = e.grade)
                                })
                            }, 225)
                        }),
                        t.innerHTML = a
                    }
                })
            })
        },
        appendCourse: function(e, t) {
            document.querySelector("#" + e).parentNode.parentNode.parentNode.children[1]
        },
        removeSemesterUI: function(e) {
            document.getElementsByClassName(e)[0].parentNode.parentNode.remove()
        },
        getDomString: function() {
            return a
        }
    });
    (o = S.getDomString(),
    l = y,
    c = S,
    i = function() {
        l.AddId(),
        c.addSemester(l.getAllData()),
        c.addCourseUI(l.getAllData()),
        s(),
        h(),
        f(),
        document.querySelectorAll(o.mainLi).forEach(function(e) {
            v(e.classList[1].split("-")[1])
        }),
        g(),
        m(),
        $(),
        u(l.getCgpaTotal())
    }
    ,
    u = function(e) {
        var t = document.querySelector(".cgpa-calculator__result")
          , r = e.toFixed(3).slice(0, -1);
        t.style = r < 4 ? "color: #ff004f;" : "color: #32CD32;",
        isNaN(r) ? t.innerHTML = "0.00" : t.innerHTML = r
    }
    ,
    s = function() {
        var e = document.querySelectorAll(o.selectOption)
          , t = !0
          , r = !1
          , n = void 0;
        try {
            for (var a, l = e[Symbol.iterator](); !(t = (a = l.next()).done); t = !0)
                (getoption = a.value).innerHTML = c.addOption()
        } catch (i) {
            r = !0,
            n = i
        } finally {
            try {
                t || null == l.return || l.return()
            } finally {
                if (r)
                    throw n
            }
        }
    }
    ,
    d = function(e) {
        perSemesterData = {
            totalCredit: 0,
            totalPoint: 0
        },
        l.getAllData().push([{
            id: "",
            name: "",
            grade: "",
            credits: ""
        }, {
            id: "",
            name: "",
            grade: "",
            credits: ""
        }, {
            id: "",
            name: "",
            grade: "",
            credits: ""
        }]),
        l.AddPerSemester().push(perSemesterData),
        i()
    }
    ,
    f = function() {
        document.querySelectorAll(o.addCourseUI).forEach(function(e) {
            e.addEventListener("click", p)
        })
    }
    ,
    p = function(e) {
        var t = parseInt(e.target.id.split("-")[2])
          , r = {
            id: "",
            name: "",
            grade: "",
            credits: ""
        };
        l.getAllCourse(t, function(e, n) {
            e == t && (n.push(r),
            setTimeout(function() {
                i()
            }, 100))
        })
    }
    ,
    v = function(e) {
        l.getAllData().forEach(function(t, r) {
            if (e == r) {
                var n = []
                  , a = [];
                if (t.forEach(function(e, t) {
                    "" != e.grade && "" != e.credits && 5 >= parseFloat(e.credits) && parseFloat(e.credits) > 0 && (n.push(parseFloat(e.grade) * parseFloat(e.credits)),
                    a.push(parseFloat(e.credits)))
                }),
                grade.length > 0 && a.length > 0) {
                    var o = a.reduce(function(e, t) {
                        return e + t
                    })
                      , c = n.reduce(function(e, t) {
                        return e + t
                    });
                    l.AddPerSemester()[r].totalCredit = o,
                    l.AddPerSemester()[r].totalPoint = c;
                    var i = (c / o).toFixed(2);
                    document.querySelectorAll(".gpa-calculator__semester-cgpa").forEach(function(t, r) {
                        e == r && (t.style = i < 9 && i > 8 ? "color: #32CD32;" : i < 4 ? "color: #ff004f;" : "color: #32CD32;",
                        t.innerHTML = i)
                    }),
                    u(l.getCgpaTotal())
                }
            }
        })
    }
    ,
    g = function() {
        var e = document.querySelectorAll("#course-name")
          , t = document.querySelectorAll("#grade")
          , r = document.querySelectorAll("#credits");
        e.forEach(function(e, n) {
            var a = r[n];
            "" == a.value ? (a.setAttribute("disabled", "disabled"),
            "disabled" == a.getAttribute("disabled") && (a.style.cursor = "not-allowed")) : (a.removeAttribute("disabled"),
            a.style.cursor = "auto");
            var o = parseInt(a.classList[1].split("-")[1]);
            t[n].addEventListener("change", function(t) {
                parseInt(t.target.classList[1].split("-")[1]) == o && (a.removeAttribute("disabled"),
                a.style.cursor = "auto");
                var r = parseInt(e.parentNode.parentNode.parentNode.classList[1].split("-")[1])
                  , n = parseInt(e.parentNode.classList[1].split("-")[1])
                  , c = e.value
                  , i = t.target.value
                  , u = e.parentNode.children[2].value;
                a.addEventListener("input", function(a) {
                    "" != a.target.value && (l.addInObj(n, r, e.value, t.target.value, a.target.value),
                    v(r))
                }),
                "" != u && "grade" != i && (l.addInObj(n, r, c, i, u),
                v(r))
            })
        })
    }
    ,
    m = function() {
        setTimeout(function() {
            document.querySelectorAll(o.removeSingleBTN).forEach(function(e, t) {
                e.addEventListener("click", function(e) {
                    var t = e.target.classList[1];
                    if (t) {
                        var r = parseInt(t.split("-")[1]);
                        l.deleteCourseMain(r)
                    }
                    i()
                })
            })
        }, 100)
    }
    ,
    $ = function() {
        var e = document.querySelectorAll(o.removeAllBTN)
          , t = !0
          , r = !1
          , n = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done); t = !0)
                (selectBTN = a.value).addEventListener("click", function(e) {
                    var t = e.target.classList;
                    if (t) {
                        var r = t[1].split("-")
                          , n = parseInt(r[1]);
                        c.removeSemesterUI(t[1]),
                        l.deleteSemesterMain(n)
                    }
                    i()
                })
        } catch (s) {
            r = !0,
            n = s
        } finally {
            try {
                t || null == u.return || u.return()
            } finally {
                if (r)
                    throw n
            }
        }
    }
    ,
    h = function() {
        var e = document.querySelectorAll(o.removeAllBTN)
          , t = document.querySelectorAll(o.removeSingleBTN);
        e.forEach(function(r, n) {
            e[n].addEventListener("mouseover", function(r) {
                var a = e[n].parentNode.parentNode.children[1].children
                  , o = !0
                  , l = !1
                  , c = void 0;
                try {
                    for (var i, u = a[Symbol.iterator](); !(o = (i = u.next()).done); o = !0) {
                        parentNotesMain = i.value;
                        var s = !0
                          , d = !1
                          , f = void 0;
                        try {
                            for (var p, v = parentNotesMain.children[Symbol.iterator](); !(s = (p = v.next()).done); s = !0)
                                child = p.value,
                                "gpa-calculator__remove-item" == child.classList[0] && (child.classList.add("active-hover"),
                                e[n].addEventListener("mouseout", function(e) {
                                    t.forEach(function(e) {
                                        e.classList.remove("active-hover")
                                    })
                                }))
                        } catch (g) {
                            d = !0,
                            f = g
                        } finally {
                            try {
                                s || null == v.return || v.return()
                            } finally {
                                if (d)
                                    throw f
                            }
                        }
                    }
                } catch (m) {
                    l = !0,
                    c = m
                } finally {
                    try {
                        o || null == u.return || u.return()
                    } finally {
                        if (l)
                            throw c
                    }
                }
            })
        })
    }
    ,
    {
        init: function() {
            var e;
            document.querySelector(o.addSemesters).addEventListener("click", d),
            i(),
            e = document.querySelectorAll(o.SingleLi),
            setTimeout(function() {
                var t = !0
                  , r = !1
                  , n = void 0;
                try {
                    for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                        (list = a.value).classList.remove("form-group");
                        var l = list.children
                          , c = !0
                          , i = !1
                          , u = void 0;
                        try {
                            for (var s, d = l[Symbol.iterator](); !(c = (s = d.next()).done); c = !0)
                                (child = s.value).classList.remove("form-control")
                        } catch (f) {
                            i = !0,
                            u = f
                        } finally {
                            try {
                                c || null == d.return || d.return()
                            } finally {
                                if (i)
                                    throw u
                            }
                        }
                    }
                } catch (p) {
                    r = !0,
                    n = p
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (r)
                            throw n
                    }
                }
            }, 5),
            h(),
            c.addOption(),
            s(),
            console.log("aplication stated")
        }
    }).init()
  }
  ]);
  
  var icon = document.getElementById("icon");
function updateTheme() {
    var theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
    } else {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on");
    }
}

updateTheme();

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    icon.classList.toggle("fa-toggle-on");
    icon.classList.toggle("fa-toggle-off");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    updateChart();
}


      document.getElementById("toggle-navigation").addEventListener("click", function() {
        var navigationPage = document.getElementById("navigation-page");
        if (navigationPage.style.display === "flex") {
          navigationPage.style.animation = "pop-out 0.3s ease forwards";
          setTimeout(function() {
            navigationPage.style.display = "none";
          }, 300);
        } else {
          navigationPage.style.display = "flex";
          navigationPage.style.animation = "pop-in 0.3s ease forwards";
        }
      });