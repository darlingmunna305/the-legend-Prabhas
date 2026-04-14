# Deployment Guide for Prabhas Fan Website

## Step 1: Prepare Your Project for Deployment

### 1.1 Install Dependencies

```bash
npm install
```

### 1.2 Create .env.local file

Copy `.env.example` to `.env.local` and add your Razorpay credentials:

```bash
cp .env.example .env.local
```

Add your credentials:

```bash
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 1.3 Build & Test Locally

```bash
npm run build
npm run preview
```

## Step 2: Setup Git Repository

If not already done:

```bash
git init
git add .
git commit -m "Initial commit: Prabhas fan website with premium features"
git remote add origin https://github.com/yourusername/prabhas-website.git
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. loy:

```bash
vercel
```

3. flowthe prompts to link and deploy your project

### Option B: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select your repository
5. Click "Import"
6. Add environment variables before deploying
7. Click "Deploy"

### Option C: Deploy via GitHub Integration

1. Go to [vercel.com](https://vercel.com)
2. Install Vercel GitHub app
3. Select your repository
4. Auto-deployments on git push

## Step 4: Configure Environment Variables

In Vercel Dashboard:

1. Go to "Settings" → "Environment Variables"
2. Add for Production:

```
VITE_RAZORPAY_KEY_ID = your_production_key
```

3. Add for Preview/Development:

```
VITE_RAZORPAY_KEY_ID = your_test_key
```

## Step 5: Verify Deployment

1. Wait for build to complete
2. Visit the provided URL (e.g., `your-site.vercel.app`)
3. Test all features:
   - Browse movies
   - Test search and filters
   - Verify premium payment flow
   - Check responsive design on mobile

## Step 6: Setup Custom Domain (Optional)

1. In Vercel Dashboard → Project Settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Step 7: Monitor Performance

### Setup Vercel Analytics

1. Settings → Analytics
2. Enable Web Analytics
3. Monitor page performance

### Monitor Errors

1. Settings → Error Tracking
2. Set up error notifications
3. Monitor API endpoints

## Troubleshooting

### Build Fails

- Check Node.js version: `node --version` (need 18+)
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

### Images Not Loading

- Verify image URLs are accessible
- Check Vercel logs for 404 errors
- May need to configure image optimization

### Payment Gateway Not Working

- Verify Razorpay keys in environment variables
- Check Razorpay dashboard for API limits
- Test with Razorpay test credentials first

### Slow Build Times

- Optimize bundle with `vite build --minify`
- Use Vercel's caching strategies
- Consider splitting large components

## Performance Optimization

### Before Deployment

```bash
npm run build
# Check dist folder size
ls -lh dist/
```

### Vite Config Optimization

Consider adding to `vite.config.js`:

```javascript
export default {
  build: {
    minify: 'terser',
    sourcemap: false,
  }
}
```

## Security Checklist

- Never commit `.env` files
- Rotate Razorpay keys periodically
- Use HTTPS only (automatic on Vercel)
- Keep dependencies updated: `npm update`
- Run security audit: `npm audit`

## Rollback Instructions

If deployment fails:

```bash
# View deployment history
vercel list

# Rollback to previous deployment
vercel rollback
```

## Next Steps

1. **Setup Email Notifications**: Configure email for errors
2. **Add Analytics**: Implement Google Analytics
3. **Setup CDN**: Configure image CDN for faster loading
4. **Backup**: Setup automated backups for user data
5. **Monitoring**: Setup uptime monitoring

## Support

For Vercel deployment issues:
- [Vercel Docs](https://vercel.com/docs)
- [Vercel GitHub Issues](https://github.com/vercel/vercel/issues)

For app issues:
- Check browser console for errors
- Review Vercel deployment logs
- Check environment variables are set

---

**Deployment completed! Your site is now live. 🎉**
