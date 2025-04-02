module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TS에서 체크될 항목을 Lint에서   제외하도록 설정
    'prettier', // prettier관련 설정은 맨 마지막에 작성
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser', // TS 분석하는 parser를 지정
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // 경로확인 필요
    // TS의 Lint 적용시에 참조하는 config 파일 지정
  },
  root: true, // 상위 디렉토리에 있는 다른 eslintrc를 참조하지 않도록 설정
  rules: {}, // 체크관련 규칙 작성
}
