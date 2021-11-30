---
title: Dialog 
---

This page documents the Dialog component.

### Sizes

Please choose the dialog size that is appropriate for the form or content it contains. Available sizes are `large`, `medium`, `small` and `fullscreen`.

### Implementation tips

These dialogs are implemented with <code>dialogs.js</code>. This is a vanilla JS script intended to serve as an example for a real implementation.

For a full-page example. see <a href="/development/template-examples/dialog.html">here</a>.

When implementing dialogs, please make sure the dialog code is one of the last elements of the page, right before the end of the <code>&lt;body&gt;</code> tag.

### Triggering dialogs

You can trigger a dialog on any element. To do so add the data-dialog attribute and specify the id of the target dialog context. You can write the dialog context mark-up anywhere in your DOM structure, the JS will automatically move it to the document root.

### Dialog closing

You can add the data-dialog-close attribute to any child of the dialog. Clicking it will close the dialog. Clicking outside of a dialog window or pressing the esc key will also close the active modal.

### Related components

Also see: <a href="/development/docs/c-alert-dialog.html">AlertDialog</a>.
