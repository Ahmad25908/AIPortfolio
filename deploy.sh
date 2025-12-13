#!/bin/bash
# IMPROVED ULTIMATE HOME PAGE HERO – Vercel Deployment Script – 100% Gemini AntiGravity

echo "🚀 Deploying Ahmad Hassan's Portfolio to Vercel..."
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
    echo "✅ Vercel CLI installed successfully!"
    echo ""
fi

# Build the project locally to check for errors
echo "🔨 Building project locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Deploy to Vercel production
echo "🌐 Deploying to Vercel production..."
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo "🎉 Your portfolio is now live!"
    echo ""
    echo "📊 Performance targets:"
    echo "  - Lighthouse: 100/100 (all metrics)"
    echo "  - FCP on 3G: <1s"
    echo "  - Layout Shift: Zero CLS"
    echo ""
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
