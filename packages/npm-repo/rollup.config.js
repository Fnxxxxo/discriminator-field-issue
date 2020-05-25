/**
 * Created by Jaron Long on 2019/10/21
 */
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import pkg from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const libraryName = 'Models'

function entry(input, output) {
  return {
    input,
    output,
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: ['window', 'document'],
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      peerDepsExternal({
        includeDependencies: true
      }),
      typescript({
        verbosity: 2,
        tsconfigDefaults: {
          extendedDiagnostics: process.env.NODE_ENV === 'production'
        },
        useTsconfigDeclarationDir: true,
        objectHashIgnoreUnknownHack: true,
        clean: process.env.NODE_ENV === 'production'
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps()
    ].concat(process.env.NODE_ENV === 'production'
      ? [
        // Minify
        terser(),
        analyze({
          summaryOnly: true
        })
      ]
      : [])
  }
}

export default [
  entry('src/index.ts', [
    {
      dir: 'lib',
      name: libraryName,
      format: 'cjs',
      chunkFileNames: 'bundle/chunk.[format].[hash].js',
      entryFileNames: '[name].[format].js',
      sourcemap: process.env.NODE_ENV === 'production'
    },
    {
      dir: 'lib',
      format: 'esm',
      chunkFileNames: 'bundle/chunk.[format].[hash].js',
      entryFileNames: '[name].[format].js',
      sourcemap: process.env.NODE_ENV === 'production'
    }
  ])
]

