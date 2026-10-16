/* SatsStart configuration. Edit this file only; see README.md. */

// Newsletter signup endpoint. Leave "" until you have one.
// Buttondown example: "https://buttondown.com/api/emails/embed-subscribe/YOUR-USERNAME"
// The form POSTs one field named "email" to this URL.
window.NEWSLETTER_ENDPOINT = "https://buttondown.com/api/emails/embed-subscribe/hecogo";

// Date the fee figures were last checked against each platform's official fee page.
window.FEES_LAST_CHECKED = "16 October 2026";

// Outbound links. Plain official links, except tangem (referral link).
// Replace a value with your affiliate/referral URL once approved.
window.LINKS = {
  revolut: "https://www.revolut.com/",
  revolutx: "https://www.revolut.com/revolut-x/",
  bitbox: "https://bitbox.swiss/",
  trezor: "https://trezor.io/",
  tangem: "https://tangem.com/invite/4YEDCC",
  traderepublic: "https://traderepublic.com/"
};

// Fill in dynamic bits shared by all pages.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var u = window.LINKS[a.getAttribute("data-link")];
    if (u) a.href = u;
  });
  document.querySelectorAll("[data-checked]").forEach(function (el) {
    el.textContent = window.FEES_LAST_CHECKED;
  });
});
