module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Amarpreet Singh","short_name":"Amar","start_url":"/","background_color":"#FFFFFF","theme_color":"#FFFFFF","display":"minimal-ui","icon":"src/images/amar-512.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"119e5108c65b0a4de1bdc06fa4b7a6f7"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-156082975-2","head":false,"anonymize":true,"respectDNT":true,"defer":false,"sampleRate":5,"siteSpeedSampleRate":10},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
