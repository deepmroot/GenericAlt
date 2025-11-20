# Collaboration Guide

## CI/CD Pipeline Setup

### GitHub Actions Workflows

We have two automated workflows:

1. **CI Workflow** (`.github/workflows/ci.yml`)
   - Runs on every push and pull request to `main`
   - Installs dependencies
   - Builds the project
   - Runs TypeScript checks
   - Uploads build artifacts

2. **Deploy Workflow** (`.github/workflows/deploy.yml`)
   - Runs on pushes to `main` branch
   - Builds and deploys to Railway
   - Can be manually triggered from GitHub Actions tab

### Setting Up Railway Deployment

To enable automatic deployment to Railway, add these secrets to your GitHub repository:

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add:
   - `RAILWAY_TOKEN`: Your Railway API token (get from https://railway.app/account/tokens)
   - `RAILWAY_SERVICE`: Your Railway service ID (found in Railway project settings)

## Collaboration Workflow

### Branch Strategy

1. **main** - Production branch (protected)
2. **feature/** - Feature branches (e.g., `feature/add-login`)
3. **fix/** - Bug fix branches (e.g., `fix/styling-issue`)

### Working Together

1. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes** and commit regularly:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Push your branch**:
   ```bash
   git push origin feature/my-feature
   ```

4. **Create a Pull Request** on GitHub
   - Fill out the PR template
   - Wait for CI checks to pass
   - Request review from your collaborator

5. **Review Process**:
   - Collaborator reviews code
   - Discusses changes if needed
   - Approves when ready

6. **Merge** when approved and CI passes

### Branch Protection (Recommended)

Set up branch protection for `main`:

1. Go to **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass (select "build-and-test")
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators (optional but recommended)

## Local Development

### Setup
```bash
npm install --legacy-peer-deps
npm run dev
```

### Building
```bash
npm run build
```

### Starting Production Server
```bash
npm start
```

## Common Issues

### Dependency Conflicts
If you encounter peer dependency issues, use:
```bash
npm install --legacy-peer-deps
```

### Build Failures on Windows
The project includes Windows-specific Rollup dependencies. If builds fail:
```bash
npm install @rollup/rollup-win32-x64-msvc --force
```

### Styles Not Loading
Hard refresh your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

## Communication

- Use **PR comments** for code discussions
- Use **GitHub Issues** for bug reports and feature requests
- Use **GitHub Discussions** for general questions
