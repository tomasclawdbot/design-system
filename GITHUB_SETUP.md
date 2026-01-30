# GitHub Setup Instructions

GitHub CLI (`gh`) not found. Run these commands to publish:

```bash
# Install gh CLI (if needed)
brew install gh

# Create repo and push
cd /Users/tomasshaggy/clawd/design-system
gh repo create design-system --public --description "Design system with 7 thinkers principles"
git remote add origin https://github.com/YOUR_USERNAME/design-system.git
git push -u origin main
```

Or manually:
1. Go to https://github.com/new
2. Create "design-system" repo (public)
3. Run:
   ```bash
   cd /Users/tomasshaggy/clawd/design-system
   git remote add origin https://github.com/YOUR_USERNAME/design-system.git
   git push -u origin main
   ```
