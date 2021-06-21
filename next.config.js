const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = {
  reactStrictMode: true,
};

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
