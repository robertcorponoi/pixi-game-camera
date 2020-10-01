'use strict'

import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  external: [],
  plugins: [
    resolve({ extensions, preferBuiltins: false }),
    commonjs(),
    babel({ extensions, include: ['src/**/*'], babelHelpers: 'bundled' }),
    terser(),
  ],
  output: [{
    file: pkg.module,
    format: 'esm',
  }, {
    file: `test/${pkg.module}`,
    format: 'esm'
  }],
};