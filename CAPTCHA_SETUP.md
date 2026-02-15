# Cloudflare Turnstile (captcha) setup

Your site already loads Turnstile and shows the widget on the Sign In form. To use **your own** captcha and have it work on your live URLs:

- **Live site:** see **[CLOUDFLARE-CAPTCHA.md](CLOUDFLARE-CAPTCHA.md)** for step-by-step: add domains `yourrewardcard.vercel.app` and `yourewardcard.com`, get your Site key, and put it in `index.html`.

Quick steps:

1. **https://dash.cloudflare.com** → sign in → **Turnstile** (left sidebar).
2. **Add widget** → name (e.g. Yourewardcard) → add domains `yourrewardcard.vercel.app`, `yourewardcard.com` → **Managed** → Create.
3. Copy the **Site key**.
4. In `index.html`, replace the value of `data-sitekey="..."` (on the line with `id="turnstile-container"`) with your Site key.
5. Push to GitHub so Vercel redeploys.

After this, the captcha is connected to Cloudflare for your live site.
