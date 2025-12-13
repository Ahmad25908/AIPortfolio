#!/bin/bash
# One-Click Vercel Deploy Script for Hero Section
# Ultra-Professional Hero Section – 100% Gemini AntiGravity

set -e

echo "🚀 Starting Hero Section Deployment..."
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Build Verification
echo "${YELLOW}Step 1/3: Building project...${NC}"
if npm run build; then
    echo "${GREEN}✓ Build successful${NC}"
    echo ""
else
    echo "${RED}✗ Build failed. Please fix errors before deploying.${NC}"
    exit 1
fi

# Step 2: Lint Check
echo "${YELLOW}Step 2/3: Running lint check...${NC}"
if npm run lint; then
    echo "${GREEN}✓ Lint check passed${NC}"
    echo ""
else
    echo "${YELLOW}⚠ Lint warnings found. Continuing anyway...${NC}"
    echo ""
fi

# Step 3: Deploy to Vercel
echo "${YELLOW}Step 3/3: Deploying to Vercel...${NC}"
if command -v vercel &> /dev/null; then
    vercel --prod
    echo ""
    echo "${GREEN}✓ Deployment complete!${NC}"
    echo ""
    echo "🎉 Your ultra-professional hero section is now live!"
else
    echo "${RED}✗ Vercel CLI not found.${NC}"
    echo "Please install it with: npm i -g vercel"
    echo "Then run: vercel --prod"
    exit 1
fi
