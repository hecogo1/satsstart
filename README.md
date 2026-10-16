# SatsStart

Static site (plain HTML/CSS/JS, no build step, no backend) teaching "finances first, then a little Bitcoin". Educational only.

Pages: `index.html` (newsletter), `finances-first.html` (checklist, saved in localStorage), `revolut-x-fees.html` (fee calculator), `sats-calculator.html`, `wallets.html` (wallet explainer), `disclaimer.html`.

All paths are relative, so it works from a sub-path such as `https://<user>.github.io/satsstart/` and locally. To preview: `python3 -m http.server` in this folder.

## Configuration: `config.js` (the only file you need to edit)

### 1. Newsletter endpoint
`window.NEWSLETTER_ENDPOINT` is `""` by default. While empty, the form shows "Newsletter signup isn't open yet" and sends nothing.

Set it to your provider's form-POST URL. The form sends a single field `email` (form-encoded POST). Buttondown example:

```js
window.NEWSLETTER_ENDPOINT = "https://buttondown.com/api/emails/embed-subscribe/YOUR-USERNAME";
```

Notes: the request uses `fetch` with `mode: "no-cors"`, so the browser cannot read the provider's response; any delivered request shows the "Thanks, check your inbox" message (Buttondown then emails a confirmation link). Only network failures show an error. Test once with a real address after setting it. Providers needing other field names or a JSON body need a small change in the script at the bottom of `index.html`.

### 2. Affiliate links
Every outbound service link is an ordinary official link, with no tracking. The URLs live in `window.LINKS` in `config.js` (`revolut`, `revolutx`, `bitbox`, `trezor`, `tangem`, `traderepublic`). Links in the HTML carry `data-link="<key>"` and are filled from that object, so to switch to affiliate links, replace the URL there. Currently used on `revolut-x-fees.html` and `wallets.html` (wallet explainer), `disclaimer.html`. Once a link is an affiliate link, add `rel="sponsored noopener"` to those anchors and update the wording in `disclaimer.html` (and the footer "may be affiliate links").

### 3. Fee "last checked" date
`window.FEES_LAST_CHECKED` is shown on the fee calculator and disclaimer pages. Update it whenever you re-verify fees.

## Fee sources (checked 16 Oct 2026)
- Revolut X: 0% maker / 0.09% taker; withdrawal = £3 service fee + network fee. https://www.revolut.com/legal/crypto-exchange-fees/
- Kraken Pro entry tier: 0.40% / 0.80%. https://www.kraken.com/features/fee-schedule
- Coinbase Advanced entry tier (from 16 Sep 2026): EU/UK 0.25% / 0.50%, US 0.50% / 0.90%. https://www.coinbase.com/blog/were-lowering-fees-for-many-active-traders-on-coinbase-advanced and https://www.coinbase.com/advanced-vip
- Revolut app (EEA, Standard/Plus): greater of a minimum fee (EUR 0.99-2.99 under EUR 200) or 1.49%, plus one-sided added spread "typically 0-3%". https://www.revolut.com/en-SK/legal/exchangingcryptocurrenciespersonalfees/ and https://www.revolut.com/legal/crypto-tiered-pricing/
- Constants in `revolut-x-fees.html`: `P` (exchange rates), `revFee()` (Revolut minimum-fee table), `WD_SERVICE_EUR` (£3 ≈ €3.50, approximate).

## Deploying to GitHub Pages
Push to a repo named `satsstart`, then Settings → Pages → deploy from branch `main`, folder `/ (root)`. Site URL: `https://<user>.github.io/satsstart/`.

## Known limits
- Fee pages change; recheck before launch and periodically.
- Coinbase fees vary by region and tier; the calculator shows the EU/UK entry tier.
- Revolut app model covers Standard/Plus only and ignores the monthly fair-usage limit.
- Copy mentions Spain/Europe; no personal advice. Keep the disclaimer.
