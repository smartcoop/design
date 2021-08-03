---
title: Dropdown
---

To add a menu (dropdown), pass the menu's id to the `data-menu` attribute of the trigger element.

Make sure the codebases includes [Popper.js](https://popper.js.org/). We are using version 2.x.

### Configuration

You can use the following data attributes to change the default behaviour of the menu.

#### Placement

The `data-menu-placement` attribute is used to position a menu in relation to the trigger button. E.g. `data-menu-placement="bottom-end"` places menu below the trigger, aligning the menu with the end of the trigger. See the Popperjs document for all [available options](https://popper.js.org/docs/v2/constructors/#options).

#### Autosize

The `data-menu-samewidth` attribute sets the width of the menu to the width of the trigger button. E.g. `data-menu-samewidth="true"`.

#### Offset

The `data-menu-offset` sets the [distance](https://popper.js.org/docs/v2/modifiers/offset/#distance-1) in pixels of a menu to the trigger button. E.g. `data-menu-offset="16"` to place the menu 16 pixels from the button or `data-menu-offset="0"` to remove the distance.
