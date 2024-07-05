const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const postcss = require( 'rollup-plugin-postcss');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require('typescript')
    }),
    postcss({
      extract: true,
      modules: true,
      use: ['sass']
    })
  ]
};
