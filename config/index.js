const path = require("path");
const config = {
  projectName: 'taro-mobile-react',
  date: '2022-10-21',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    ['@tarojs/plugin-html', {
      pxtransformBlackList: [/am-/, /demo-/, /^body/]
    }]
  ],
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  // compiler: 'webpack5',
  compiler: {
    type: 'webpack5',
    prebundle: {
      force: true,
      // enable: false,
      exclude: [
        'antd-mobile',
        '@brushes/utils',
        'lodash-es',
        '@brushes/simulate-component',
        's-material-react',
        "qj-mobile-store",
        "qj-b2c-api"
      ]
    }
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    outputRoot: 'weapp',
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    // compiler: {
    //   type: 'webpack5',
    //   prebundle: {
    //     enable: false
    //   }
    // },
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
