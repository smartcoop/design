---
title: SVG icons
---

The SVG icon system is based on directly embedding SVG files into the markup. Within Bedrock, we use Pug to render these SVG's instead of having to inline them. You can either inline them, or build a solution that does it for you.

The SVG content should be contained in a <code>.o-svg-icon</code> div that also get an icon-specific class based on its
name (for example: <code>.o-svg-icon.o-svg-icon-add</code>. This allows us to style and colorize specific icons.

The Smart icon set is based on <a href="https://icons.mono.company/">Mono icons</a>. The source SVG files can be found <a href="https://github.com/smartcoop/design/tree/main/content/icons">here</a>.
