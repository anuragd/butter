import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import copy from 'rollup-plugin-copy';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: [
    'moment'
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  watch: {
    chokidar: {
        paths: 'src/**'
    }
  },
  plugins: [
    external(),
    postcss({
      modules: true,
      plugins:[require('autoprefixer')]
    }),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    copy({
      'src/assets/fonts/CiscoSansTTHeavy.ttf':'dist/assets/fonts/CiscoSansTTHeavy.ttf',
      'src/assets/fonts/CiscoSansTTLight.ttf':'dist/assets/fonts/CiscoSansTTLight.ttf',
      'src/assets/fonts/CiscoSansTTRegular.ttf':'dist/assets/fonts/CiscoSansTTRegular.ttf'
    })
  ]
}
