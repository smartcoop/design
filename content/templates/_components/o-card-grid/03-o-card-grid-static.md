---
title: Card grid with statically placed item
---

You can place items fixed by using wrapping the static item in a `.o-card-grid__item` container. You can then define the start column/row and the amount of columns/rows the item spans. This is the same syntax as used for defining start/end rows/columns on css grid items.

#### Examples:

First row, third column
```pug
.o-card-grid__item(
    data-row=1,
    data-column=3
)
```

Second row, spanning 3 columns
```pug
.o-card-grid__item(
    data-row=2,
    data-column-span=3
)
```

Second column, spanning two rows
```pug
.o-card-grid__item(
    data-column=2,
    data-row-span=2
)
```

Last column, spanning 2 rows
```pug
.o-card-grid__item(
    data-column=-1,
    data-row-span=2,
)
```
