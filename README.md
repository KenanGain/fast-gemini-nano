# Fast Gemini Nano Project

## Update Chrome to Version 127 or Higher

To utilize the built-in AI features of Chrome, ensure your browser is updated to version 127 or greater. These versions are currently available on the dev or canary channels, with a potential stable release scheduled for July 17, 2024.

- **Dev Channel:** [Google Chrome Dev](https://www.google.com/chrome/dev/?extra=devchannel)
- **Canary Channel:** [Google Chrome Canary](https://www.google.com/chrome/canary/)
- **Release Roadmap:** [Chrome Status Roadmap](https://chromestatus.com/roadmap)

Enable the following flags after updating:
- [chrome://flags/#prompt-api-for-gemini-nano](chrome://flags/#prompt-api-for-gemini-nano): `Enabled`
- [chrome://flags/#optimization-guide-on-device-model](chrome://flags/#optimization-guide-on-device-model): `Enabled BypassPrefRequirement`
- [chrome://components/](chrome://components/): Click 'Optimization Guide On Device Model' to download the model.

## React + TypeScript + Vite Setup

This template offers a minimal setup to use React with Vite, supporting HMR and ESLint rules.

Plugins available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses SWC for Fast Refresh

### Expanding the ESLint Configuration

For production applications, consider updating the ESLint configuration to include type aware lint rules:


<p>Changes to ESLint rules:</p>
    <ul>
        <li>Replace <code>plugin:@typescript-eslint/recommended</code> with <code>plugin:@typescript-eslint/recommended-type-checked</code> or <code>plugin:@typescript-eslint/strict-type-checked</code></li>
        <li>Optionally add <code>plugin:@typescript-eslint/stylistic-type-checked</code></li>
        <li>Install <a href="https://github.com/jsx-eslint/eslint-plugin-react">eslint-plugin-react</a> and add <code>plugin:react/recommended</code> & <code>plugin:react/jsx-runtime</code> to the extends list</li>
    </ul>

![Alt](https://repobeats.axiom.co/api/embed/edd4faa78a279579633f3d5ddd38b428b64db136.svg "Repobeats analytics image")
