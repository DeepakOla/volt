# Contributing to BharatVolt Technologies

Thank you for your interest in contributing to the BharatVolt Technologies platform! 🔋

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Code Style](#code-style)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/volt.git
   cd volt
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/DeepakOla/volt.git
   ```

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build CSS:
   ```bash
   npm run build
   ```

3. Start development (watch mode):
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   pages/bharatvolt_homepage.html
   ```

## Making Changes

### Branch Naming Convention

- **Features**: `feature/description-of-feature`
- **Bug Fixes**: `fix/description-of-fix`
- **Documentation**: `docs/description-of-docs`
- **Refactoring**: `refactor/description`

Example:
```bash
git checkout -b feature/add-payment-gateway
```

### Before Committing

1. **Test your changes**:
   - Open all pages and verify functionality
   - Test dark mode toggle
   - Test responsive design (mobile, tablet, desktop)
   - Verify all navigation links work

2. **Rebuild CSS** (if you modified styles):
   ```bash
   npm run build
   ```

3. **Check for errors**:
   - Browser console errors
   - CSS compilation errors
   - Broken links

## Code Style

### HTML
- Use semantic HTML5 elements
- Maintain consistent indentation (2 or 4 spaces)
- Use descriptive class names
- Keep accessibility in mind (ARIA labels, alt text)

### CSS (Tailwind)
- Use Tailwind utility classes when possible
- Add custom classes in `css/tailwind.css` if needed
- Follow mobile-first responsive design
- Maintain dark mode support with `dark:` variants

### JavaScript
- Use ES6+ syntax
- Write clear, self-documenting code
- Add comments for complex logic
- Maintain existing patterns (dark mode toggle, form validation)

### File Naming
- Use kebab-case: `bharatvolt-new-page.html`
- Be descriptive: `battery-testing-standards.html` not `page1.html`

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code restructuring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(marketplace): add payment integration for lab services

- Integrated Razorpay payment gateway
- Added payment confirmation page
- Updated marketplace forms with pricing

Closes #42
```

```bash
fix(dark-mode): resolve toggle persistence issue

Fixed localStorage not saving dark mode preference on mobile browsers

Fixes #38
```

```bash
docs(readme): update installation instructions

Added troubleshooting section and Windows-specific setup notes
```

## Pull Request Process

### Before Submitting

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test thoroughly**:
   - [ ] All pages load correctly
   - [ ] Navigation works
   - [ ] Dark mode functions
   - [ ] Forms validate properly
   - [ ] Responsive design intact
   - [ ] No console errors

3. **Update documentation**:
   - Update README.md if needed
   - Update CHANGELOG.md
   - Add code comments

### Submitting Pull Request

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what changed and why
   - Screenshots (if UI changes)
   - Reference related issues

3. **PR Template**:
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring

   ## Testing
   - [ ] Tested on Chrome
   - [ ] Tested on Firefox
   - [ ] Tested on mobile
   - [ ] Dark mode works
   - [ ] All links functional

   ## Screenshots
   (if applicable)

   ## Related Issues
   Closes #issue_number
   ```

### Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, PR will be merged
4. Your contribution will be credited in CHANGELOG.md

## Areas for Contribution

### High Priority
- Backend API integration (Node.js/Express or Python/Flask)
- Database schema design (PostgreSQL)
- User authentication system
- Payment gateway integration
- Email notification service

### Medium Priority
- Hindi language translation
- Advanced search functionality
- Lab availability dashboard
- Automated compliance reporting
- Performance optimization

### Low Priority
- Additional testing service categories
- More detailed standards documentation
- Blog/news section
- Mobile app development
- Admin dashboard

## Questions or Need Help?

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Email**: dev@bharatvolt.in (for sensitive topics)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and constructive
- Accept feedback gracefully
- Focus on what's best for the project
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information
- Any unprofessional conduct

## Recognition

Contributors will be recognized in:
- CHANGELOG.md for their contributions
- README.md contributors section (coming soon)
- GitHub contributors page

---

Thank you for contributing to BharatVolt Technologies! 🔋⚡

**Powering India's EV Revolution Through Scientific Excellence**
