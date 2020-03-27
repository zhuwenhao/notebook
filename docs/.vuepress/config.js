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
            {
                text: '动画',
                ariaLabel: '动画',
                items: [
                    { text: '名侦探柯南', link: '/anime/detective-conan' },
                    { text: '加速世界', link: '/anime/accel-world' }
                ]
            },
            {
                text: '软件',
                ariaLabel: '软件',
                items: [
                    { text: 'Linux', link: '/software/linux' },
                    { text: 'Windows', link: '/software/windows' },
                    { text: 'Android', link: '/software/android' },
                    { text: 'iOS', link: '/software/ios' }
                ]
            },
            {
                text: '游戏',
                ariaLabel: '游戏',
                items: [
                    { text: '跑跑卡丁车', link: '/game/popkart' }
                ]
            }
        ],
        sidebar: {
            '/movie/happy-birthday/': [
                {
                    title: '生日快乐',
                    collapsable: false,
                    children: [
                        '',
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
            ]
        },
        displayAllHeaders: true
    }
}