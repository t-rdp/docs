import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'zh',
    title: '世界树',
    description: '天空岛相关的文档',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    head: [['meta', { name: 'theme-color', content: '#62b6e7' }]],
    themeConfig: {

        logo: 'https://t.rdpstudio.top/files/00c81708-9c8c-4822-86e3-93ab02f77218',
        
        nav: [
            {
                text: '文档',
                link: '/',
                activeMatch: '/',
            },
            {
                text: '链接',
                items: [
                    { 
                        text: '天空岛',
                        link: 'https://t.rdpstudio.top',
                    },
                    { 
                        text: '服务状态',
                        link: 'https://tstatus.rdpstudio.top',
                    },
                ],
            }
        ],

        sidebar: {
            '/': [
                {
                    text: '基础规范',
                    collapsible: false,
                    items: [
                        {
                            text: '服务条款',
                            link: '/tos/',
                        },
                        {
                            text: '合理使用规约',
                            link: '/aup/',
                        },
                        {
                            text: '加入我们',
                            link: '/join/',
                        }
                    ],
                },
                {
                    text: '周边服务',
                    collapsible: true,
                    items: [
                        {
                            text: 'Matrix 通讯',
                            link: '/peripheral/matrix/'
                        },
                    ],
                },
                {
                    text: '开发',
                    collapsible: true,
                    items: [
                        {
                            text: '周边服务',
                            link: '/develop/peripheral/',
                            items: [
                                {
                                    text: 'Misskey 的授权模式',
                                    link: '/develop/peripheral/auth/',
                                }
                            ],
                        }
                    ]
                },
                {
                    text: '其它',
                    collapsible: true,
                    items: [
                        {
                            text: '附录',
                            link: '/appendix/',
                        },
                        {
                            text: '联系我们',
                            link: '/contact/',
                        },
                        {
                            text: '赞助',
                            link: '/sponsor/',
                        }
                    ]
                }
            ],
        },

        editLink: {
            pattern: 'https://github.com/t-rdp/docs/edit/main/:path',
            text: '在 GitHub 上编辑此页'
        },
      
        socialLinks: [
            { 
                icon: 'github', 
                link: 'https://github.com/t-rdp' 
            }
        ],
      
        footer: {
            message: 'CC-BY-SA-4.0 Licensed',
            copyright: `Copyright © 2020-2023 NyaOne, 2023 FANGTANG Network Technology.`
        },
    }
})
