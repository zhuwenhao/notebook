module.exports = {
    locales: {
        '/': {
            lang: 'zh',
            title: '猪蚊耗的笔记本',
            description: '猪蚊耗的笔记本'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '动画', link: '/anime/' },
            { text: '软件', link: '/software/' }
        ],
        search: false,
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
            '/movie/happy-birthday/': [
                {
                    title: '生日快乐',
                    collapsable: false,
                    children: [
                        '1996',
                        '1997',
                        '1998',
                        '1999',
                        '2000',
                        '2001',
                        '2002',
                        '2003',
                        '2004',
                        '2005',
                        '2006',
                        '2007',
                        '2008',
                        '2009',
                        '2010',
                        '2011',
                        '2012',
                        '2013',
                        '2014',
                        '2015',
                        '2016',
                        '2017',
                        '2018',
                        '2019'
                    ]
                }
            ],
            '/software/': [
                {
                    title: '软件',
                    collapsable: false,
                    children: [
                        ['', '介绍'],
                        'linux',
                        'windows',
                        'android',
                        'ios'
                    ]
                }
            ]
        },
        displayAllHeaders: true
    }
}