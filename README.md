# React: The dialog HTML element `<dialog>` us Portal `ReactDom.createPortal(child, container, ?key)`

## The `<dialog>` HTML tag

In this chapter `<dialog>` is considered for a dialog box representaion only. The `<dialog>` can use for other interactive components such as a dismissible allert, inspectors, or subwindows (see [mdn-web-docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog))

### Attributes

`global attributes`

[!WARNING]

> The `tabindex` attribute have not be used (see [mdn-web-docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#attributes))

`open` - attribute

If `open` attribute is present, then the `<dialog>` is active and can be interactive.

```
<dialog open>
    <h2>Dialog header</h2>
    <form method="dialog">
        <button type="submit"> Submit </button>
    </form>
</dialog>
```

With the attribute `open` the `<dialog>` is rendered as a non-modal component. Instead the `open` attribute we have to use a `.showModal()` method to render a modal window.

### The `<modal>` with `.showModal()` method

As [MSDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations) writes: "The native HTML `<dialog>` element should be used in creating modal dialogs as it provides usability and accessibility features that must be replicated if using other elements for a similar purpose."

A focus is set on the first nested focusable element up after using the `HTMLDialogElement.showModal()` method to create a `<dialog>`. A developer can use an `autofocus` attribute to ensure the focus sets on an element the developer need.

To implicit close `<modal>` the developer have to add a "close" or a "cancel"
button and use `HTMLDialogElement.close(?returnedValue)`.

[Link button](http://example.com/){: .btn .btn-blue }

