// vite.config.js
import { resolve as resolve2 } from "path";
import { defineConfig } from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/vite/dist/node/index.js";
import handlebars from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/vite-plugin-handlebars/dist/index.js";
import injectHTML from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/vite-plugin-html-inject/dist/index.mjs";
import { ViteImageOptimizer } from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/vite-plugin-image-optimizer/dist/index.mjs";

// config/imageOptimizerConfig.js
var DEFAULT_OPTIONS = {
  dir: "../public/img",
  outDir: "../dist/img",
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: void 0,
  include: void 0,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false
          },
          cleanupIDs: {
            minify: false,
            remove: false
          },
          convertPathData: false
        }
      },
      "sortAttrs",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ xmlns: "http://www.w3.org/2000/svg" }]
        }
      }
    ]
  },
  png: {
    quality: 75
    // Устанавливаем качество PNG на 75
  },
  jpeg: {
    quality: 75
    // Устанавливаем качество JPEG на 75
  },
  jpg: {
    quality: 75
    // Устанавливаем качество JPG на 75
  },
  tiff: {
    quality: 75
    // Устанавливаем качество TIFF на 75
  },
  gif: {},
  webp: {
    quality: 75
    // Устанавливаем качество WEBP на 75
  },
  avif: {
    quality: 75
    // Устанавливаем качество AVIF на 75
  },
  cache: false,
  cacheLocation: void 0
};

// vite.config.js
import cssnanoPlugin from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/cssnano/src/index.js";
import viteHTMLIncludes from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/@kingkongdevs/vite-plugin-html-includes/index.js";

// vitejs/pages.config.js
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\Vsyachina\\Work\\projects\\zarbo\\mapdev\\vitejs";
var pages = [
  { name: "index", path: resolve(__vite_injected_original_dirname, "../index.html") },
  { name: "home", path: resolve(__vite_injected_original_dirname, "../pages/home.html") }
];
var pages_config_default = pages;

// config/htmlReplacer.js
import * as cheerio from "file:///D:/Vsyachina/Work/projects/zarbo/mapdev/node_modules/cheerio/dist/esm/index.js";
async function htmlReplacer(replaces) {
  let config;
  const transformIndexHtml = (html) => {
    let answer = html;
    for (let index = 0; index < replaces.length; index++) {
      const replace = array[index];
      answer = answer.replaceAll(replace.entry, replace.replace);
    }
    return answer;
  };
  return {
    name: "htmlReplacer",
    enforce: "post",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transform(source) {
      return { code: transformIndexHtml(source), map: void 0 };
    },
    transformIndexHtml
  };
}

// vite.config.js
var __vite_injected_original_dirname2 = "D:\\Vsyachina\\Work\\projects\\zarbo\\mapdev";
var pagesInput = {};
pages_config_default.forEach((page) => {
  pagesInput[page.name] = page.path;
});
var replaceArr = [
  { entry: `crossorigin`, replace: `` },
  { entry: `script`, replace: `script defer` }
];
var vite_config_default = defineConfig({
  build: {
    target: "es2017",
    // target: 'es5',
    outDir: "dist",
    rollupOptions: {
      input: {
        ...pagesInput
      },
      output: {
        // sourcemap: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "app.css") {
            return "assets/style.css";
          }
          return "assets/" + assetInfo.name;
        },
        chunkFileNames: (chunkInfo) => {
          console.log(chunkInfo);
          return "assets/[name].js";
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    },
    devSourcemap: true
  },
  server: {
    port: 3e3,
    host: "0.0.0.0",
    hmr: true
  },
  plugins: [
    ViteImageOptimizer(DEFAULT_OPTIONS),
    handlebars({
      partialDirectory: resolve2(__vite_injected_original_dirname2, "src/html")
    }),
    injectHTML(),
    // Минификация CSS
    cssnanoPlugin({
      preset: "default"
    }),
    viteHTMLIncludes({
      componentsPath: "/src/html/",
      componentsDir: "/src/html/"
    }),
    htmlReplacer(replaceArr)
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAiY29uZmlnL2ltYWdlT3B0aW1pemVyQ29uZmlnLmpzIiwgInZpdGVqcy9wYWdlcy5jb25maWcuanMiLCAiY29uZmlnL2h0bWxSZXBsYWNlci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFZzeWFjaGluYVxcXFxXb3JrXFxcXHByb2plY3RzXFxcXHphcmJvXFxcXG1hcGRldlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVnN5YWNoaW5hXFxcXFdvcmtcXFxccHJvamVjdHNcXFxcemFyYm9cXFxcbWFwZGV2XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Wc3lhY2hpbmEvV29yay9wcm9qZWN0cy96YXJiby9tYXBkZXYvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGhhbmRsZWJhcnMgZnJvbSAndml0ZS1wbHVnaW4taGFuZGxlYmFycyc7XHJcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplclwiO1xyXG5pbXBvcnQgeyBERUZBVUxUX09QVElPTlMgfSBmcm9tICcuL2NvbmZpZy9pbWFnZU9wdGltaXplckNvbmZpZyc7XHJcbmltcG9ydCBjc3NuYW5vUGx1Z2luIGZyb20gJ2Nzc25hbm8nO1xyXG5pbXBvcnQgdml0ZUhUTUxJbmNsdWRlcyBmcm9tICdAa2luZ2tvbmdkZXZzL3ZpdGUtcGx1Z2luLWh0bWwtaW5jbHVkZXMnO1xyXG5cclxuaW1wb3J0IHBhZ2VzIGZyb20gJy4vdml0ZWpzL3BhZ2VzLmNvbmZpZydcclxuaW1wb3J0IHsgaHRtbFJlcGxhY2VyIH0gZnJvbSAnLi9jb25maWcvaHRtbFJlcGxhY2VyJztcclxuXHJcbmNvbnN0IHBhZ2VzSW5wdXQgPSB7fVxyXG5cclxucGFnZXMuZm9yRWFjaCgocGFnZSA9PiB7XHJcbiAgICBwYWdlc0lucHV0W3BhZ2UubmFtZV0gPSBwYWdlLnBhdGhcclxufSkpO1xyXG5cclxuY29uc3QgcmVwbGFjZUFyciA9IFtcclxuICB7IGVudHJ5OiBgY3Jvc3NvcmlnaW5gLCByZXBsYWNlOiBgYCB9LFxyXG4gIHsgZW50cnk6IGBzY3JpcHRgLCByZXBsYWNlOiBgc2NyaXB0IGRlZmVyYCB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogJ2VzMjAxNycsXHJcbiAgICAvLyB0YXJnZXQ6ICdlczUnLFxyXG4gICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgLi4ucGFnZXNJbnB1dFxyXG4gICAgICB9LFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PSAnYXBwLmNzcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvc3R5bGUuY3NzJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy8nK2Fzc2V0SW5mby5uYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IChjaHVua0luZm8pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNodW5rSW5mbyk7XHJcbiAgICAgICAgICByZXR1cm4gXCJhc3NldHMvW25hbWVdLmpzXCJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYXBpOiAnbW9kZXJuLWNvbXBpbGVyJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGV2U291cmNlbWFwOiB0cnVlLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgaG1yOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKERFRkFVTFRfT1BUSU9OUyksXHJcbiAgICBoYW5kbGViYXJzKHtcclxuICAgICAgcGFydGlhbERpcmVjdG9yeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaHRtbCcpLFxyXG4gICAgfSksXHJcbiAgICBpbmplY3RIVE1MKCksXHJcbiAgICAvLyBcdTA0MUNcdTA0MzhcdTA0M0RcdTA0MzhcdTA0NDRcdTA0MzhcdTA0M0FcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEYgQ1NTXHJcbiAgICBjc3NuYW5vUGx1Z2luKHtcclxuICAgICAgcHJlc2V0OiBcImRlZmF1bHRcIixcclxuICAgIH0pLFxyXG4gICAgdml0ZUhUTUxJbmNsdWRlcyh7XHJcbiAgICAgIGNvbXBvbmVudHNQYXRoOiAnL3NyYy9odG1sLycsXHJcbiAgICAgIGNvbXBvbmVudHNEaXI6ICcvc3JjL2h0bWwvJ1xyXG4gICAgfSksXHJcbiAgICBodG1sUmVwbGFjZXIocmVwbGFjZUFycilcclxuICBdLFxyXG59KSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcVnN5YWNoaW5hXFxcXFdvcmtcXFxccHJvamVjdHNcXFxcemFyYm9cXFxcbWFwZGV2XFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVnN5YWNoaW5hXFxcXFdvcmtcXFxccHJvamVjdHNcXFxcemFyYm9cXFxcbWFwZGV2XFxcXGNvbmZpZ1xcXFxpbWFnZU9wdGltaXplckNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVnN5YWNoaW5hL1dvcmsvcHJvamVjdHMvemFyYm8vbWFwZGV2L2NvbmZpZy9pbWFnZU9wdGltaXplckNvbmZpZy5qc1wiOy8vIGltYWdlT3B0aW1pemVyQ29uZmlnLmpzXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX09QVElPTlMgPSB7XHJcbiAgZGlyOiAnLi4vcHVibGljL2ltZycsXHJcbiAgb3V0RGlyOiAnLi4vZGlzdC9pbWcnLFxyXG4gIHRlc3Q6IC9cXC4oanBlP2d8cG5nfGdpZnx0aWZmfHdlYnB8c3ZnfGF2aWYpJC9pLFxyXG4gIGV4Y2x1ZGU6IHVuZGVmaW5lZCxcclxuICBpbmNsdWRlOiB1bmRlZmluZWQsXHJcbiAgaW5jbHVkZVB1YmxpYzogdHJ1ZSxcclxuICBsb2dTdGF0czogdHJ1ZSxcclxuICBhbnNpQ29sb3JzOiB0cnVlLFxyXG4gIHN2Zzoge1xyXG4gICAgbXVsdGlwYXNzOiB0cnVlLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJwcmVzZXQtZGVmYXVsdFwiLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgb3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgICAgIGNsZWFudXBOdW1lcmljVmFsdWVzOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVtb3ZlVmlld0JveDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xlYW51cElEczoge1xyXG4gICAgICAgICAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgICAgICAgICByZW1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnZlcnRQYXRoRGF0YTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgXCJzb3J0QXR0cnNcIixcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiYWRkQXR0cmlidXRlc1RvU1ZHRWxlbWVudFwiLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgYXR0cmlidXRlczogW3sgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHBuZzoge1xyXG4gICAgcXVhbGl0eTogNzUsIC8vIFx1MDQyM1x1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzNVx1MDQzQyBcdTA0M0FcdTA0MzBcdTA0NDdcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0M0UgUE5HIFx1MDQzRFx1MDQzMCA3NVxyXG4gIH0sXHJcbiAganBlZzoge1xyXG4gICAgcXVhbGl0eTogNzUsIC8vIFx1MDQyM1x1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzNVx1MDQzQyBcdTA0M0FcdTA0MzBcdTA0NDdcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0M0UgSlBFRyBcdTA0M0RcdTA0MzAgNzVcclxuICB9LFxyXG4gIGpwZzoge1xyXG4gICAgcXVhbGl0eTogNzUsIC8vIFx1MDQyM1x1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzNVx1MDQzQyBcdTA0M0FcdTA0MzBcdTA0NDdcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0M0UgSlBHIFx1MDQzRFx1MDQzMCA3NVxyXG4gIH0sXHJcbiAgdGlmZjoge1xyXG4gICAgcXVhbGl0eTogNzUsIC8vIFx1MDQyM1x1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzNVx1MDQzQyBcdTA0M0FcdTA0MzBcdTA0NDdcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0M0UgVElGRiBcdTA0M0RcdTA0MzAgNzVcclxuICB9LFxyXG4gIGdpZjoge30sXHJcbiAgd2VicDoge1xyXG4gICAgcXVhbGl0eTogNzUsIC8vIFx1MDQyM1x1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQzQlx1MDQzOFx1MDQzMlx1MDQzMFx1MDQzNVx1MDQzQyBcdTA0M0FcdTA0MzBcdTA0NDdcdTA0MzVcdTA0NDFcdTA0NDJcdTA0MzJcdTA0M0UgV0VCUCBcdTA0M0RcdTA0MzAgNzVcclxuICB9LFxyXG4gIGF2aWY6IHtcclxuICAgIHF1YWxpdHk6IDc1LCAvLyBcdTA0MjNcdTA0NDFcdTA0NDJcdTA0MzBcdTA0M0RcdTA0MzBcdTA0MzJcdTA0M0JcdTA0MzhcdTA0MzJcdTA0MzBcdTA0MzVcdTA0M0MgXHUwNDNBXHUwNDMwXHUwNDQ3XHUwNDM1XHUwNDQxXHUwNDQyXHUwNDMyXHUwNDNFIEFWSUYgXHUwNDNEXHUwNDMwIDc1XHJcbiAgfSxcclxuICBjYWNoZTogZmFsc2UsXHJcbiAgY2FjaGVMb2NhdGlvbjogdW5kZWZpbmVkLFxyXG59OyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcVnN5YWNoaW5hXFxcXFdvcmtcXFxccHJvamVjdHNcXFxcemFyYm9cXFxcbWFwZGV2XFxcXHZpdGVqc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVnN5YWNoaW5hXFxcXFdvcmtcXFxccHJvamVjdHNcXFxcemFyYm9cXFxcbWFwZGV2XFxcXHZpdGVqc1xcXFxwYWdlcy5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1ZzeWFjaGluYS9Xb3JrL3Byb2plY3RzL3phcmJvL21hcGRldi92aXRlanMvcGFnZXMuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBwYWdlcyA9IFtcclxuICB7bmFtZTogJ2luZGV4JywgcGF0aDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9pbmRleC5odG1sJyl9LFxyXG4gIHtuYW1lOiAnaG9tZScsIHBhdGg6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vcGFnZXMvaG9tZS5odG1sJyl9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZXMiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFZzeWFjaGluYVxcXFxXb3JrXFxcXHByb2plY3RzXFxcXHphcmJvXFxcXG1hcGRldlxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFZzeWFjaGluYVxcXFxXb3JrXFxcXHByb2plY3RzXFxcXHphcmJvXFxcXG1hcGRldlxcXFxjb25maWdcXFxcaHRtbFJlcGxhY2VyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Wc3lhY2hpbmEvV29yay9wcm9qZWN0cy96YXJiby9tYXBkZXYvY29uZmlnL2h0bWxSZXBsYWNlci5qc1wiO2ltcG9ydCAqIGFzIGNoZWVyaW8gZnJvbSBcImNoZWVyaW9cIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGh0bWxSZXBsYWNlcihyZXBsYWNlcykge1xyXG4gIGxldCBjb25maWc7XHJcblxyXG4gIGNvbnN0IHRyYW5zZm9ybUluZGV4SHRtbCA9IChodG1sKSA9PiB7XHJcbiAgICBsZXQgYW5zd2VyID0gaHRtbDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXBsYWNlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgcmVwbGFjZSA9IGFycmF5W2luZGV4XTtcclxuICAgICAgYW5zd2VyID0gYW5zd2VyLnJlcGxhY2VBbGwocmVwbGFjZS5lbnRyeSwgcmVwbGFjZS5yZXBsYWNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhbnN3ZXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ2h0bWxSZXBsYWNlcicsXHJcbiAgICBlbmZvcmNlOiAncG9zdCcsXHJcbiAgICBjb25maWdSZXNvbHZlZChyZXNvbHZlZENvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IHJlc29sdmVkQ29uZmlnO1xyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybShzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4geyBjb2RlOiB0cmFuc2Zvcm1JbmRleEh0bWwoc291cmNlKSwgbWFwOiB1bmRlZmluZWQgfTtcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm1JbmRleEh0bWxcclxuICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsV0FBQUEsZ0JBQWU7QUFDM1UsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywwQkFBMEI7OztBQ0g1QixJQUFNLGtCQUFrQjtBQUFBLEVBQzdCLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULFNBQVM7QUFBQSxFQUNULGVBQWU7QUFBQSxFQUNmLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLEtBQUs7QUFBQSxJQUNILFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsVUFDTixX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QUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLG1CQUFtQixlQUFlO0FBQUEsSUFDbEMsV0FBVztBQUFBLE1BQ1Qsa0JBQWtCQyxTQUFRQyxtQ0FBVyxVQUFVO0FBQUEsSUFDakQsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBO0FBQUEsSUFFWCxjQUFjO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxJQUNqQixDQUFDO0FBQUEsSUFDRCxhQUFhLFVBQVU7QUFBQSxFQUN6QjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
