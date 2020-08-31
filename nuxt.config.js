export default {
  modules: ["bootstrap-vue/nuxt"],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  css: ["@/assets/scss/argon.scss"],
  plugins: ["~/plugins/argon-kit.js"],
};