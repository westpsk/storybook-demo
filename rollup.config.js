import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default {
  input: ['src/foo.js', 'src/bar.js'],
  output: {
    dir: 'build',
    format: 'cjs',
    entryFileNames: '[name].js',
    globals: GLOBALS,
  },
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      extract: true,
      plugins: [autoprefixer],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    localResolve(),
    resolve({
      browser: true,
    }),
    commonjs(),
    filesize(),
  ],
};
