module.exports = function(eleventyConfig) {
    // Add a passthrough copy for JavaScript files
    eleventyConfig.addPassthroughCopy('./js/*.js');
    eleventyConfig.addPassthroughCopy("admin/");

    // ... other Eleventy configurations ...

    return {
        // ... other Eleventy options ...
        passthroughFileCopy: true,
    };
};