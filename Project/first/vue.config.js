// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//   devServer: {
//     proxy: {
//       '/api': { // Update this path to match the path of your API requests
//         target: 'http://localhost:8000', // Update this with the URL of your backend server
//         changeOrigin: true,
//         secure: false,
      
//       }
//     }
//   },
//   transpileDependencies: [] // Update this with an array of specific dependencies to transpile, or set to true to transpile all dependencies
// })


module.exports = {
  devServer: {
      proxy: 'http://localhost:8080',
  },
 
}
