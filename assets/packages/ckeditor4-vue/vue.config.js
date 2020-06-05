let appName = 'ckeditor4vue';
let outputDir =  process.env.NODE_ENV === 'production' ? 'dest/' : 'build/';
let entryPoint = [
    './src/' + appName + '.js',
];

module.exports = {
    outputDir: outputDir,
    filenameHashing: false,
    runtimeCompiler: true,
    configureWebpack: {
        entry: entryPoint,
        output: {
            filename: () => {
                return 'js/' + appName + '.js';
            }
        },
        externals: {
            LS: 'LS',
            jquery: 'jQuery',
            pjax: 'Pjax',
        },
    },
};
