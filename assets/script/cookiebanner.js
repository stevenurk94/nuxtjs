
var cookieConsentSettings = {


  // GENERAL SETTINGS //
  privacyStatementUrl: "/cookies",
  cookies: [
    ["Cookie instellingen", "Google Analytics (anoniem)"],
    ["Facebook advertenties", "LinkedIn advertenties", "Google Ads advertenties"],
  ],
  resetAllBeforeTimestamp: 1530021013000,
  consentExpiration: 365,
  gtmEventName: "consent",
  gtmTrackEventName: "track_consent",
  formPlacementBefore: "div.cookie_melding",
  useCBUnderlay: true,

  // BANNER TEXT //
  cb_title: "Cookies - Accepteren vriend!",
  cb_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <a href='cookies'>cookiebeleid</a>.",
  cb_Yes: "Akkoord",
  cb_No: "Zelf instellen",
  cb_NoUrl: "/cookies",

  // FORM TEXT //
  form_title: "Luister vriend",
  form_text: "Of je doet het wel, of je doet het niet..",
  formHead: "Cookie voorkeuren",
  formSubtitle: "Selecteer welke cookies u wilt accepteren van deze website.",
  optionOneButton: "Persoonlijk",
  optionTwoButton: "Standaard",
};


  var GtmCookieConsentBanner = function (t) {
    (this.app = t), (this.settings = t.settings), (this.utils = t.utils), this.banner, this.cbUnderlay, this.buttonAccept, this.buttonReject, this.init();
  };

  (GtmCookieConsentBanner.prototype.init = function () {
    document.body.insertBefore(this.getBanner(), document.body.firstChild),
    this.settings.useCBUnderlay && this.setCBUnderlay(),
    this.settings.implicitConsentEnabled && -1 === window.location.href.indexOf(this.settings.privacyStatementUrl) && sessionStorage.setItem("hcImplicitConsent", "true");
  }),

  (GtmCookieConsentBanner.prototype.getBanner = function () {
    this.banner = this.utils.createTag("div", "gtm-cb");
    var t = this.utils.createTag("div", "cb-info", [
      this.utils.createTag("h5", "", this.settings.cb_title),
      this.utils.createTag("p", "", this.settings.cb_text)
    ]);
    this.banner.appendChild(t);

    var e = this.utils.createTag("div", "cb-buttons");
    return ((this.buttonAccept = this.utils.createTag("button", "accept-button", this.settings.cb_Yes)),

    0 < this.settings.cb_NoUrl.length
    ? (this.buttonDecline = this.utils.createTag("button", "decline-button",
    this.utils.createTag("a", "", this.settings.cb_No, this.settings.cb_NoUrl)))
    :
    (this.buttonDecline = this.utils.createTag("button", "decline-button",
    this.utils.createTag("a", "", this.settings.cb_No))),

    e.appendChild(this.buttonAccept),
    e.appendChild(this.buttonDecline),
    this.banner.appendChild(e),
    this.buttonAccept.addEventListener("click", this.accept.bind(this)),
    this.buttonDecline.addEventListener("click", this.decline.bind(this)),
    this.banner
    );
  }),

  (GtmCookieConsentBanner.prototype.accept = function (t) {
    t.preventDefault(), this.closeBanner(), this.app.saveUserPreferences(), this.app.dataLayerPush(!0);
  }),

  (GtmCookieConsentBanner.prototype.decline = function (t) {
    t.preventDefault(), this.closeBanner(),
    this.app.saveUserPreferences(!1),
    this.app.dataLayerPush(!0),
    "#" != this.buttonDecline.getAttribute("href") && (window.location.href = this.buttonDecline.firstChild.getAttribute("href"));
  }),

  (GtmCookieConsentBanner.prototype.closeBanner = function () {
    void 0 !== this.banner && ((this.banner.style.display = "none"),
    void 0 !== this.cbUnderlay && (this.cbUnderlay.style.display = "none"));
  }),

  (GtmCookieConsentBanner.prototype.setCBUnderlay = function () {
    var t = this;
    (t.cbUnderlay = t.utils.createTag("div", "cb-underlay")), document.body.insertBefore(t.cbUnderlay, document.body.firstChild);
  });



  var GtmCookieConsentForm = function (t) {
    (this.app = t), (this.settings = t.settings), (this.utils = t.utils), this.buttonAccept, this.buttonReject, this.init();
  };

  (GtmCookieConsentForm.prototype.init = function () {
    var e = this,
    n = setInterval(function () {
      if ("complete" === document.readyState) {
        clearInterval(n);
        var t = document.querySelector(e.settings.formPlacementBefore);
        t.parentNode.insertBefore(e.getForm(), t), e.markSelected();
      }
    },
  100);
  }),

  (GtmCookieConsentForm.prototype.getForm = function () {
    var t = this,
    e = this.utils.createTag("div", "cb-form"), i = this.utils.createTag("ul", "form-choices");
    e.appendChild(this.utils.createTag("h4", "", t.settings.form_title)), e.appendChild(this.utils.createTag("p", "", t.settings.form_text));
    return (

      (t.buttonReject = this.getOption(this.settings.optionTwoButton, t.getTable(!1, t.settings.cookies))),
      (t.buttonAccept = this.getOption(this.settings.optionOneButton, t.getTable(!0, t.settings.cookies))),

      i.appendChild(this.utils.createTag("li", "", t.buttonReject)),
      i.appendChild(this.utils.createTag("li", "", t.buttonAccept)),
      e.appendChild(i),

      t.buttonReject.addEventListener("click", t.decline.bind(this)),
      t.buttonAccept.addEventListener("click", t.accept.bind(this)),
      e
    );
  }),




  (GtmCookieConsentForm.prototype.accept = function (t) {
  t.preventDefault(), this.app.saveUserPreferences(), this.app.dataLayerPush(!0), this.markSelected();
  }),

  (GtmCookieConsentForm.prototype.decline = function (t) {
  t.preventDefault(), this.app.saveUserPreferences(!1), this.app.dataLayerPush(!0), this.markSelected();
  }),

  (GtmCookieConsentForm.prototype.markSelected = function () {
    void 0 !== this.app.userPreferences && this.app.userPreferences.consent
    ?
    (this.buttonAccept.classList.add("selected"), this.buttonReject.classList.remove("selected"))
    :
    (this.buttonAccept.classList.remove("selected"), this.buttonReject.classList.add("selected"));
  }),

  (GtmCookieConsentForm.prototype.getOption = function (t, e) {
    var n = this.utils.createTag("div", "cookie-choice");
    return (
    n.appendChild(
    this.utils.createTag("h5", "", t)),
    n.appendChild(e), n);
  }),


  (GtmCookieConsentForm.prototype.getTable = function (t) {
    for (var e = this, n = e.utils.createTag("table"), i = 0; i < e.settings.cookies[0].length; i++) n.appendChild(e.getRow(e.settings.cookies[0][i], !0));
    for (i = 0; i < e.settings.cookies[1].length; i++) t ? n.appendChild(e.getRow(e.settings.cookies[1][i], !0)) : n.appendChild(e.getRow(e.settings.cookies[1][i], !1));
    return n;
  }),

  (GtmCookieConsentForm.prototype.getRow = function (t, e) {
    var n = document.createElement("tr");
    return (
    e
    ?
    (n.appendChild(this.utils.createTag("td", "item", t)),
    n.appendChild(this.utils.createTag("td", "item-check")))
    :
    (n.appendChild(this.utils.createTag("td", "item disagreed", t)),
    n.appendChild(this.utils.createTag("td", "item-close"))), n);
  });


  var GtmCookieConsentDomEdit = function () {};
  (GtmCookieConsentDomEdit.prototype.createTag = function (t, e, n, i) {
    var s = document.createElement(t);
    if ((void 0 !== e && 0 < e.length && (s.className = e), "a" === t && ("string" == typeof i ? s.setAttribute("href", i) : s.setAttribute("href", "#")), void 0 === n));
    else if (n instanceof Array) for (var o = 0; o < n.length; o++) this.appendChildByType(s, n[o]);
    else this.appendChildByType(s, n, !0);
    return s;
  }),


  (GtmCookieConsentDomEdit.prototype.appendChildByType = function (t, e, n) {
      n = n || !1;
      "string" == typeof e ? (n ? (t.innerHTML = e) : t.appendChild(document.createTextNode(e))) : "object" == typeof e && t.appendChild(e);
    });

  var GtmCookieConsent = function (t) {
    (this.settings = t), (this.utils = new GtmCookieConsentDomEdit()), this.userPreferences, (this.onLoad = !0), this.init();
  };

  (GtmCookieConsent.prototype.init = function () {
    if (this.featureTest()) {
      if (((window.dataLayer = window.dataLayer || []), this.loadUserPreferences(), this.dataLayerPush(this.userPreferences), null == this.userPreferences && -1 === window.location.href.indexOf(this.settings.privacyStatementUrl)))
      new GtmCookieConsentBanner(this);
      if (-1 !== window.location.href.indexOf(this.settings.privacyStatementUrl)) new GtmCookieConsentForm(this);
    }
  }),


  (GtmCookieConsent.prototype.featureTest = function () {
    if ("querySelector" in document && "localStorage" in window && "addEventListener" in window) return !0;
  }),


  (GtmCookieConsent.prototype.loadUserPreferences = function () {
    var t = +new Date(),
    e = JSON.parse(localStorage.getItem("stevenCookieConsent")),
    n = sessionStorage.getItem("hcImplicitConsent");
    null != e && e.timestamp > this.settings.resetAllBeforeTimestamp && t < e.expires && (this.userPreferences = e),
    null == e && "true" === n && -1 === window.location.href.indexOf(this.settings.privacyStatementUrl) && this.saveUserPreferences();
  }),

  (GtmCookieConsent.prototype.saveUserPreferences = function (t) {
    var e = +new Date();
    void 0 === t && (t = !0);
    var n = { timestamp: e, consent: t, expires: 24 * this.settings.consentExpiration * 60 * 60 * 1e3 + e };
    localStorage.setItem("stevenCookieConsent", JSON.stringify(n)), (this.userPreferences = n);
  }),

  (GtmCookieConsent.prototype.clearUserPreferences = function () {
    localStorage.removeItem("stevenCookieConsent"), (this.userPreferences = void 0);
  }),

  (GtmCookieConsent.prototype.dataLayerPush = function (t) {
    if (!0 === t) var e = this.settings.gtmTrackEventName;
    else e = "";
    this.onLoad && void 0 !== this.userPreferences && !0 === this.userPreferences.consent
    ? (dataLayer.push({ event: this.settings.gtmEventName }), dataLayer.push({ event: e, cookieConsent: "true" }), (this.onLoad = !1))
    : dataLayer.push({ event: e, cookieConsent: "false" });
  });

  var gtmCookieConsent = new GtmCookieConsent(cookieConsentSettings);


