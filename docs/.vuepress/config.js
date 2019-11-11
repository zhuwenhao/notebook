module.exports = {
    title: '猪蚊耗的笔记本',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '动画', link: '/anime/'}
        ],
        sidebar: {
            '/anime/': [
                {
                    title: '动画',
                    collapsable: false,
                    children: [
                        ['', '介绍'],
                        'detective-conan',
                        'accel-world'
                    ]
                }
            ],
            '/': [
                ''
            ]
        },
        displayAllHeaders: true
    }
}