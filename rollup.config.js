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
    'moment',
    'lodash'
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap:true,
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap:true,
      exports: 'named'
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
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    copy({
    })
  ]
}
