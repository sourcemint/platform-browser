/**
 * Copyright: 2012 Christoph Dorn <christoph@christophdorn.com>
 * License: MIT
 */

var BUNDLER = require("sourcemint-platform-nodejs/lib/bundler");


exports.bundle = function(packagePath, distributionPath, options)
{
	options = options || {};

	options.bundleLoaderAdapter = options.bundleLoaderAdapter || "github.com/sourcemint/platform-browser/0";

	return BUNDLER.bundle(packagePath, distributionPath, options);
}

exports.hoist = function(basePath, baseOptions)
{
	baseOptions = baseOptions || {};

	baseOptions.bundleLoaderAdapter = baseOptions.bundleLoaderAdapter || "github.com/sourcemint/platform-browser/0";

	return BUNDLER.hoist(basePath, baseOptions);
}
