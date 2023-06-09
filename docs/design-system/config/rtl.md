---
title: RTl Support
---

## RTL Strategy

When implementing right-to-left (RTL) support, it is important not to use the "RTL" class for the entire document. Instead, set the dir attribute to "rtl" on the <html> tag to indicate that the page should be rendered in RTL.
Our components are designed to automatically adjust their behavior based on the RTL context.

```html
<!DOCTYPE html>
<html dir="rtl" lang="fa">
    <body>
        <div class="container">
            <div class="alert alert-info">
                با موفقیت انجام شد.
            </div>
        </div>
        ...
    </body>
</html>
```

## Tips

Here are some best practices to avoid conflicts and ensure proper RTL rendering:

::: tip
Use the HTML attribute dir="auto" for containers where the direction (RTL or LTR) is unknown. This will automatically detect and set the appropriate direction based on the first letter of the content.
:::

::: tip
Avoid using keywords like right, left, top, and bottom (e.g., text-align: right, float: right). Instead, use start, center, end keywords (e.g., justify: center, align: end).
:::

::: tip
Prefer using *-x and *-y classes instead of specifying right, left, top, or bottom directly. For example, use p-x instead of padding-right or margin-left.
:::

For more detailed information on RTL support (please look at W3 website)[https://www.w3.org/International/questions/qa-html-dir].
