const reScript = /\.(js|jsx|ts|tsx)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;

// FIXME Consider reducing the regex to what our framework supports.
// @mreynolds thinks we should scrap bmp, less, style, sss support.

/**
 * File extension regular expressions for finding files in a directory
 */
module.exports = {
    reScript,
    reStyle,
    reImage
};
