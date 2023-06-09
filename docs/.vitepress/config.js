export default {
    title: 'Marketplace Kit',
    description: 'A Package For E-Commerce UI',
    themeConfig: {
        logo: '/logo.png',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present SavyJS'
        },
        sidebar: [
            {
                text: 'Guide',
                collapsible: true,
                items: [
                    {text: 'Introduction', link: '/guide/introduction'},
                    {text: 'Install', link: '/guide/install'}
                ]
            },
            {
                text: 'Design System',
                collapsible: true,
                items: [
                    {
                        text: 'Introduction', link: '/design-system', collapsible: true
                    },
                    {
                        text: 'Config ', link: '/design-system/config', collapsible: true, items: [

                            {
                                text: 'Color ', link: '/design-system/config/colors', collapsible: true
                            },
                            {
                                text: 'Presets ', link: '/design-system/config/preset', collapsible: true
                            },
                            {
                                text: 'RTL Support ', link: '/design-system/config/rtl', collapsible: true
                            }
                        ]
                    },
                    {
                        text: 'Components', link: '/design-system/components', collapsible: true
                    }
                ]
            },
            {
                text: 'Nuxt',
                collapsible: true,
                items: [
                    {
                        text: 'Guide', link: '/nuxt/config', collapsible: true,

                        items: [
                            {text: 'Install', link: '/nuxt/guide/install'},
                            {text: 'Config', link: '/nuxt/guide/config'}
                        ]
                    },
                    {
                        text: 'Pages', link: '/nuxt/pages',
                        items: [
                            {text: 'Register', link: '/nuxt/pages/register'},
                            {text: 'Login', link: '/nuxt/pages/login'},
                            // {text: 'Profile', link: '/nuxt/pages/profile'},
                            // {text: 'Cart', link: '/nuxt/pages/cart'},
                            // {text: 'Shipping', link: '/nuxt/pages/shipping'},
                            // {text: 'Payment', link: '/nuxt/pages/payment'},
                            // {text: 'Checkout', link: '/nuxt/pages/cart'},
                            // {text: 'Product', link: '/nuxt/pages/product'},
                            // {text: 'Category', link: '/nuxt/pages/category'},
                            // {text: 'Search', link: '/nuxt/pages/search'},
                            // {text: 'Landing', link: '/nuxt/pages/landing'},
                        ]
                    },
                    {
                        text: 'Components', link: '/nuxt/components',
                        items: [
                            {text: 'Buttons', link: '/components/button'},
                            // {text: 'Cart Menu', link: '/getting-started'},
                            // {text: 'Search Bar', link: '/getting-started'},
                            // {text: 'Header', link: '/getting-started'},
                            // {text: 'MegaMenu', link: '/introduction'},
                            // {text: 'Toolbar', link: '/getting-started'},
                            // {text: 'Footer', link: '/getting-started'},
                        ]
                    }
                ]
            }
        ]
    }
}