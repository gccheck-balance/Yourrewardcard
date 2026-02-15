# Connect Cloudflare Turnstile (captcha) to your live site

Your site already uses Cloudflare Turnstile for the Sign In form. To have it work on **yourrewardcard.vercel.app** and **yourewardcard.com**, register your domains and use your own widget keys.

---

## Step 1: Open Cloudflare Turnstile

1. Go to **https://dash.cloudflare.com** and sign in (free account).
2. In the left sidebar, click **Turnstile** (under “Web3” or use the search box and type “Turnstile”).
3. Or open directly: **https://dash.cloudflare.com** → select your account → **Turnstile** in the left menu.

---

## Step 2: Create a widget

1. Click **Add widget** (or **Create widget**).
2. **Widget name:** e.g. `yourewardcard`.
3. **Domain:** Add your live domains, one per line:
   - `yourrewardcard.vercel.app`
   - `yourewardcard.com`
   - (Optional for local testing: `localhost`)
4. **Widget type:** **Managed** (recommended) or **Visible**.
5. Click **Create**.

---

## Step 3: Get your keys

After creating the widget you’ll see:

- **Site key** (public) – used in your HTML.
- **Secret key** (private) – for server-side verification; keep it secret.

Copy the **Site key**.

---

## Step 4: Put the Site key in your site

1. In your project, open **index.html**.
2. Find this line:
   ```html
   <div class="cf-turnstile" id="turnstile-container" data-sitekey="0x4AAAAAACb6D6Jy1pdzUNSr" data-theme="light"></div>
   ```
3. Replace `0x4AAAAAACb6D6Jy1pdzUNSr` with **your** Site key:
   ```html
   <div class="cf-turnstile" id="turnstile-container" data-sitekey="YOUR_SITE_KEY_HERE" data-theme="light"></div>
   ```
4. Save the file, commit, and push to GitHub. Vercel will redeploy automatically (if auto-deploy is on).

---

## Step 5: Test

1. Open **https://yourrewardcard.vercel.app**.
2. On the Sign In form you should see the Cloudflare Turnstile widget (checkbox or challenge).
3. Complete it and submit the form. If the widget doesn’t appear or shows an error, check that both domains are added in the Turnstile widget settings (Step 2).

---

## Summary

| Step | Action |
|------|--------|
| 1 | **dash.cloudflare.com** → **Turnstile**. |
| 2 | **Add widget** → name, add domains `yourrewardcard.vercel.app` and `yourewardcard.com` → **Managed** → Create. |
| 3 | Copy the **Site key**. |
| 4 | In **index.html**, replace `data-sitekey="0x4AAAAAACb6D6Jy1pdzUNSr"` with `data-sitekey="YOUR_SITE_KEY"`. |
| 5 | Push to GitHub so Vercel redeploys; test on your live URL. |

After this, the captcha is connected to Cloudflare and will work on your live site. The **Secret key** is only needed if you add server-side verification later (e.g. a small API that checks the Turnstile token before calling your balance API).
