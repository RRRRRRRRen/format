//此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写
module.exports = {
  printWidth: 120, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // tab代替空格
  semi: false, // 句末分号
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', // 对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  bracketSameLine: false, // 多属性html标签的‘>’折行放置
  jsxBracketSameLine: false, // 多属性html标签的‘>’折行放置
  arrowParens: 'avoid', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  rangeStart: 0, // 格式化范围开始
  rangeEnd: Infinity, // 格式化范围结束
  // parser: 'none', // 特殊文件需要的解析器
  // filepath: 'none', // 特殊文件的地址
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', // 改变换行属性
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
  vueIndentScriptAndStyle: false, // 不对vue中的script及style标签缩进
  endOfLine: 'auto', //结束行形式
  embeddedLanguageFormatting: 'auto', // 对引用代码进行格式化
  singleAttributePerLine: false // 是否强行再vue、react和html使用单行属性
};