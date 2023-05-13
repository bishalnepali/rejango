module.exports = function(eleventyConfig) {
    // Add a passthrough copy for JavaScript files
    eleventyConfig.addPassthroughCopy('./js/*.js');
    eleventyConfig.addPassthroughCopy("admin/");

    eleventyConfig.addPassthroughCopy("css/");
    eleventyConfig.addPassthroughCopy("images/");
    eleventyConfig.addPassthroughCopy("fonts/");
    eleventyConfig.addPassthroughCopy("favicon.ico");


    // ... other Eleventy configurations ...

    return {
        // ... other Eleventy options ...
        passthroughFileCopy: true,
    };
};