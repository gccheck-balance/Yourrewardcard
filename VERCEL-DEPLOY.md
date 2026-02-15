# Deploy to Vercel (one-time setup, then run from here)

I can’t log into your Vercel account from here. After you add a **Vercel token** once, I can run the deploy for you (or you can run the script yourself).

---

## One-time setup: get a Vercel token (optional)

**If the tokens link doesn’t work, use “Deploy from GitHub” below instead – no token needed.**

To get a token (for CLI/script deploys):

1. Open **https://vercel.com** and sign in (e.g. with GitHub).
2. Click your **profile picture or username** (top right).
3. Click **Settings** (or **Account Settings**).
4. In the left sidebar, click **Tokens** (under “Account” or “Security”).
5. Click **Create Token** → name it e.g. `deploy` → **Create**. Copy the token (you’ll only see it once).
6. In your project folder, open **`.env`** and add:  
   `VERCEL_TOKEN=paste_your_token_here`  
   Save. Do not commit `.env`.

**Alternative:** If you don’t see Tokens, try: **https://vercel.com** → sign in → click your name (top right) → **Account** or **Team** → look for **Tokens** or **API** in the menu.

---

## Deploy without a token (easiest – use the website)

You don’t need a token if you deploy from the Vercel website and connect GitHub:

1. Open **https://vercel.com** and sign in (e.g. “Continue with GitHub”).
2. On the dashboard, click **Add New…** (or **Create**) → **Project**.
3. Under “Import Git Repository”, find **Yourrewardcard** (or **gccheck-balance/Yourrewardcard**) and click **Import**.
4. Leave the settings as they are (Framework: Other, Root Directory: empty). Click **Deploy**.
5. Wait about a minute. Vercel will build and give you a URL like **https://yourrewardcard.vercel.app** (or similar).

After that, every time you push to the **main** branch on GitHub, Vercel can auto-deploy (you can turn this on in the project’s Settings → Git).

No token and no script needed.

---

## Deploy with token (for script / “deploy from here”)

**Option A – I run it for you**  
After you’ve added `VERCEL_TOKEN` to `.env`, say: “deploy to Vercel again” and I’ll run the deploy command from your project folder.

**Option B – You run the script**  
Double‑click **`deploy-to-vercel.bat`** in your project folder. It reads `VERCEL_TOKEN` from `.env` and runs `npx vercel --yes --prod`.

---

## First deploy (link project)

The first time you deploy, Vercel may ask to **link** the folder to a project:

- If you already imported **Yourrewardcard** from GitHub on the Vercel site, the CLI might link to that project when you deploy from this folder (same repo).
- Or the CLI will create a **new** Vercel project. You can name it **Yourrewardcard** when prompted.

After the first successful deploy, later runs will just deploy to the same project.

---

## Summary

| Step | What to do |
|------|------------|
| 1 | Get a token from **https://vercel.com/account/tokens** → Create → copy. |
| 2 | Add `VERCEL_TOKEN=your_token` to your **`.env`** file in the project. |
| 3 | Ask me to “deploy to Vercel again” or run **`deploy-to-vercel.bat`**. |

Once the token is in `.env`, I can run the deploy from here the same way we did the GitHub push.
