<style>
    .btn{
        color:red;
    }
</style>

# React: The dialog HTML element `<dialog>` us Portal `ReactDom.createPortal(child, container, ?key)`

## The `<dialog>` HTML tag

In this chapter `<dialog>` is considered for a dialog box representaion only. The `<dialog>` can use for other interactive components such as a dismissible allert, inspectors, or subwindows (see [mdn-web-docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog))

### Attributes

`global attributes`

[!WARNING]

> The `tabindex` attribute have not be used (see [mdn-web-docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#attributes))

`open` - attribute

If `open` attribute is present, then the `<dialog>` is active and can be interactive.

```HTML
<dialog open>
    <h2>Dialog header</h2>
    <form method="dialog">
        <button type="submit"> Submit </button>
    </form>
</dialog>
```

With the attribute `open` the `<dialog>` is rendered as a non-modal component. Instead the `open` attribute we have to use a `.showModal()` method to render a modal window.

### The `<dialog>` with `.showModal()` method

As [MSDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations) writes: "The native HTML `<dialog>` element should be used in creating modal dialogs as it provides usability and accessibility features that must be replicated if using other elements for a similar purpose."

A focus is set on the first nested focusable element up after using the `HTMLDialogElement.showModal()` method to create a `<dialog>`. A developer can use an `autofocus` attribute to ensure the focus sets on an element the developer need.

```HTML
<dialog open>
    <h2>Dialog header</h2>
    <form method="dialog">
        <button type="submit" autofocus> Submit </button>
    </form>
</dialog>
```

For devices with a keyboard the <kbd>Esc</kbd> is used to close the modal dialog. To implicit close the `<dialog>` a developer have to add a "close" or a "cancel" button and use `HTMLDialogElement.close(?returnedValue)`. The `HTMLDialogElement` interface has a `returnValue` property. Submitting a form with an attribute `method='dialog'` assigns `returnValue` as `name` or `value` attribute of the submit button.

```HTML
<dialog open>
    <h2>Dialog header</h2>
    <form method="dialog">
        <button type="submit" name='nameOfSubmitButton' autofocus> Submit </button>
    </form>
</dialog>
```

The `returnValue` would has value `nameOfSubmitButton`.

## [Badgets](https://github.com/Ileriayo/markdown-badges#table-of-contents)

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=DenverCoder1)]

