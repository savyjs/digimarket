---
title: Tailwind Marketplace Kit (TMK)
---

## config

```ts app.config.ts
export default defineAppConfig({
    digimarket: <DigimarketConfig>{
        rtlDictionary: {
            en: false,
            fa: true
        },
        lang: 'en',
        rtl: false,
        logo: '/logo.png',
        title: 'Title Here',
        profileMenuItems: [
            {icon: 'fa fa-plus', text: 'Premium Account', svg: 'plus', link: '/v1/profile/plus'},
            {icon: 'fa fa-list', text: 'My Actiity', svg: 'list', link: '/v1/profile/activity'},
            {icon: 'fa fa-list', text: 'Orders', svg: 'order', link: '/v1/profile/orders'},
        ],
        divisions: [
            {
                key: '1',
                title: 'Eurpa',
                items: [{
                    key: "1",
                    title: "Germany",
                    items: [] // Provinces
                }]
            }
        ],
        messages: undefined
    }
})
```


