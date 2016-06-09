import lint from 'mocha-eslint'

lint(['src'], {
  formatter: 'stylish'
})
