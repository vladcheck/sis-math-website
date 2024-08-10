const path = require("path")

export default {
	root: "./dist",
	mode: "development",
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "dist/index.html")
			}
		}
	}
}