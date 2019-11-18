module.exports = {
    title: '猪蚊耗的笔记本',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '动画', link: '/anime/' },
            { text: '软件', link: '/software/' }
        ],
        sidebar: {
            '/anime/': [
                {
                    title: '动画',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['', '介绍'],
                        'detective-conan',
                        'accel-world'
                    ]
                }
            ],
            '/software/': [
                {
                    title: '软件',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['', '介绍'],
                        'linux',
                        'windows',
                        'android',
                        'ios'
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