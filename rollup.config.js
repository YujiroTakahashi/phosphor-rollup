import alias    from 'rollup-plugin-alias'
import buble    from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import resolve  from 'rollup-plugin-node-resolve'
import uglify   from 'rollup-plugin-uglify'

export default {
    entry: 'src/index.js',
    plugins: [
        alias({
            'phosphor-commands': 'node_modules/@phosphor/commands/lib/index.js',
            'phosphor-dragdrop': 'node_modules/@phosphor/dragdrop/lib/index.js',
            'phosphor-messaging': 'node_modules/@phosphor/messaging/lib/index.js',
            'phosphor-widgets': 'node_modules/@phosphor/widgets/lib/index.js',
        }),
        resolve({
            jsnext: true
        }),
        commonjs(),
        buble(),
        uglify()
    ],
    context: 'window',
    targets: [
        {dest: 'dist/phosphor.min.js', format: 'iife'},
        {dest: 'dist/phosphor.es.js', format: 'es'}
    ]
}
