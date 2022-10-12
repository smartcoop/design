---
title: Table of content with content and interactive
---

Here's an example with the related content and the dynamic links that scroll to the right place.

#### Variations

Classes that can be applied to `<ol>` tag: 

```
class="relativeWidth"
```
This make the active-item background taking his content width (relative to its content)


```
class="stickyPosition"
```
This make the the navigation block sticky.

A `top` position has been applied on the element directly because depending on the page strucutre, this need to be updated.
For example, on the [terms and conditions page](/examples/template-examples/terms-and-conditions.html), the `top` position is `16rem` because we have the header and the main-title that is in position `fixed`.

#### Navigation

The navigation is clickable. There's also a way to navigate and share each section with the URL.
Each title is dynamically (by js) converted as a slug that can be used as `anchor`.

So to access direclty [the Droits de l'Entreprise partagée section](#droits-de-lentreprise-partagee), you can simply add **#droits-de-lentreprise-partagee** to the URL (slug removes accents, special characters and spaces)

#### Example:

