module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0,
    // 'prettier/prettier': ['error', { endofline: 'auto' }],
    'no-console': 'off',
  },
}
