const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	"transpileDependencies": [
		"vuetify"
	],
	lintOnSave: true,
	runtimeCompiler: true,
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'));
	},
	css: {
		extract: { ignoreOrder: true },
	},
	devServer: {
		disableHostCheck: true
	}
}