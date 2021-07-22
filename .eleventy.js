module.exports = function(eleventyConfig){
    eleventyConfig.setTemplateFormats([
        "jpg",
        "pdf",
        "md",
        "njk",
        "webp",
        "png",
        "jpg",
        "css"
      ]);

    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts"
    },
    }
   
};