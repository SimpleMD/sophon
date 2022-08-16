/// <reference types="vitest" />
import { defineConfig } from 'vite';

// unocss引入
import Unocss from './config/unocss';

import vue from '@vitejs/plugin-vue'; // 解析sfc类型Vue文件
import vueJsx from '@vitejs/plugin-vue-jsx'; // 解析Jsx类型文件

// 打包配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    //  添加UnoCss插件
    Unocss(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false, // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit:true,
    lib: {
      entry: './src/entry.ts',
      name: 'MaUI',
      fileName: 'smarty-ui',
      formats: ['esm', 'umd', 'iife'], // 导出模块类型
    },
  },
  // 测试配置
  test: {
    // enable jest-like global test APIs
    globals: true,
    environment: 'happy-dom', // 配置了 happy-dom，用于提供测试所需要的 Dom 仿真。测试是在 node 环境中运行的，而不是浏览器中，需要提供一个 Dom 对象的仿真
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
