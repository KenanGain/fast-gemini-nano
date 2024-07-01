<h1>Fast Gemini Nano Project</h1>

    <h2>Update Chrome to Version 127 or Higher</h2>
    <p>To utilize the built-in AI features of Chrome, ensure your browser is updated to version 127 or greater. These versions are currently available on the dev or canary channels, with a potential stable release scheduled for July 17, 2024.</p>
    <ul>
        <li><strong>Dev Channel:</strong> <a href="https://www.google.com/chrome/dev/?extra=devchannel">Google Chrome Dev</a></li>
        <li><strong>Canary Channel:</strong> <a href="https://www.google.com/chrome/canary/">Google Chrome Canary</a></li>
        <li><strong>Release Roadmap:</strong> <a href="https://chromestatus.com/roadmap">Chrome Status Roadmap</a></li>
    </ul>
    <p>Enable the following flags after updating:</p>
    <ul>
        <li><a href="chrome://flags/#prompt-api-for-gemini-nano">chrome://flags/#prompt-api-for-gemini-nano</a>: Enabled</li>
        <li><a href="chrome://flags/#optimization-guide-on-device-model">chrome://flags/#optimization-guide-on-device-model</a>: Enabled BypassPrefRequirement</li>
        <li><a href="chrome://components/">chrome://components/</a>: Click 'Optimization Guide On Device Model' to download the model.</li>
    </ul>

    <h2>React + TypeScript + Vite Setup</h2>
    <p>This template offers a minimal setup to use React with Vite, supporting HMR and ESLint rules.</p>
    <p>Plugins available:</p>
    <ul>
        <li><a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md">@vitejs/plugin-react</a>: Uses Babel for Fast Refresh</li>
        <li><a href="https://github.com/vitejs/vite-plugin-react-swc">@vitejs/plugin-react-swc</a>: Uses SWC for Fast Refresh</li>
    </ul>
    <h3>Expanding the ESLint Configuration</h3>
    <p>For production applications, consider updating the ESLint configuration to include type aware lint rules:</p>
    <pre>
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
}
    </pre>
    <p>Changes to ESLint rules:</p>
    <ul>
        <li>Replace <code>plugin:@typescript-eslint/recommended</code> with <code>plugin:@typescript-eslint/recommended-type-checked</code> or <code>plugin:@typescript-eslint/strict-type-checked</code></li>
        <li>Optionally add <code>plugin:@typescript-eslint/stylistic-type-checked</code></li>
        <li>Install <a href="https://github.com/jsx-eslint/eslint-plugin-react">eslint-plugin-react</a> and add <code>plugin:react/recommended</code> & <code>plugin:react/jsx-runtime</code> to the extends list</li>
    </ul>
