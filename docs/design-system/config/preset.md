---
title: Presets
---

## Preset Strategy

The Digimarket has a default preset that is specifically designed for E-commerce purposes. We are actively working on building different presets to cater to various design needs. However, if you wish to customize the default preset, you can achieve this by obtaining a copy of the default classes and overriding the default styles. Import your customized CSS files after the Digimarket CSS files.

For example:

```css[assets/css/my-preset.css]
@layer components {
    // you can apply btn class from default preset if you want
    .my-preset .btn-primary {
        @apply btn bg-red-400 dark:bg-red-800 text-gray-100 dark:text-white // ...
    }
    
}
```

In your HTML file:

```html
@import 'digimarket-tailwind/src/all.css'
@import 'assets/css/my-preset.css'
```

By following this approach, you can create your custom preset and apply specific styles to elements within that preset. 