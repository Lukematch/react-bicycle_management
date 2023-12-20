// 区分环境（生产/开发）
// production/development

const DEVELOPMENT = 'https://www.fastmock.site/mock/162a46feee93219950564d2a1f2d591e/bicycle'

// const DEVELOPMENT = 'https://www.fastmock.site/mock/2728fdedd7e9063e308598df4c68fe46/_api'


const PRODUCTION = ''

// process是node的全局变量
// env是process的属性，返回用户环境的信息

//{ yarn add -D }cross-env(跨平台)
const BASE_URL = process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION

const TIMEOUT = 3000

export { BASE_URL , TIMEOUT }
