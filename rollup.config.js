import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
<<<<<<< HEAD
import copy from 'rollup-plugin-copy';
=======
import copy from 'rollup-plugin-copy'
>>>>>>> 82b830b6ab8cc4380544fecd7196338a46c242b9

import pkg from './package.json'

export default {
  input: 'src/index.js',
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
