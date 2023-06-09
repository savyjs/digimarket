---
title: Design System Components
---

## Components Structure

the design system components play a crucial role in creating consistent and reusable UI elements across our
applications.
Each component in our design system has its own CSS and JS file.
in css file there are different style scopes we explore.

## Basic Style

Responsive behaviour, layout, sizes, and shapes in 
These classes are designed to work seamlessly in both RTL and LTR directions.
They are independent of configuration, themes and colors.

```css[components/buttons/button.scss]
@layer components {
    .btn {
        @apply text-center justify-center flex rounded-lg px-5 py-2.5 text-center text-sm font-medium;
    }
    // ...
}
```

## Theme-Bases Styles

Theme-Based Styles
The next part of our component styling focuses on theme-based styles, including colors, dark mode, and theme presets.
These styles allow for customization and theming of the components.

```css[components/buttons/button.css]
  .btn-primary {
    @apply btn;
  }

  .btn-primary {
    @apply bg-primary text-white dark:bg-primary dark:focus:ring-red-800;
  }

  .btn-primary-outlined {
    @apply btn bg-transparent border;
  }

  .btn-primary-outlined {
    @apply text-primary border-primary dark:focus:bg-primary dark:text-primary dark:bg-transparent;
  }
  ```

This approach makes it easier to extend or override components and provides clarity in locating specific styles.


## Define Custom Themes For Components

The recommended strategy for customizing the default theme or defining a new theme is the class strategy.


```html[index.html]
<body>
<div class="preset-pinky container">
    <button class="btn-primary"></button>
</div>
</body>
```

To override the btn-primary class in your theme, you can create a theme-specific CSS file:

```css[presets/pinky/pinky.css]
.preset-pinky .btn-primary {
    @apply bg-pink-400 text-white dark:bg-pink-400 dark:focus:ring-yellow-800;
  }
}
```

By following this approach, you can easily define custom themes with unique styles and colors, allowing for a personalized and visually appealing user experience.

## Importing Single Components

you can import single component file in your pages or components. (you can find the list of available components
in the GitHub Repository.)[https://github.com/savyjs/digimarket-tailwind/tree/master/src/components]

for example:

```css
@import 'digimarket-kit/components/buttons/button.css'
```

By importing specific component files, you can utilize individual components in your projects while maintaining a
consistent and cohesive design system.
