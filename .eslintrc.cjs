module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:@typescript-eslint/stylistic-type-checked',
    // 'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.ts', './tests/*', '*.test.tsx', '*.test.ts', '*.scss', '*.css', '*.md', '*.html'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
 },
 overrides: [
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    rules: {
      "semi": "off",
      "@typescript-eslint/semi": "off",
      "import/extensions": "off",
      "react/jsx-filename-extension": [0],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
   }}
 ]
}
