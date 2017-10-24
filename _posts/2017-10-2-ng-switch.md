---
layout: default
title: ng-switch directives in AngularJS with an example
heading: AngularJs ng-switch directives 
overview: Understanding ng-switch directive, Use of AngularJS ng-switch directives with an example, It is used to add or remove HTML elements conditionally depending on an expression.
desc: Understanding ng-switch directive, Use of AngularJS ng-switch directives with an example, It is used to add or remove HTML elements conditionally depending on an expression.
keywords: ng-switch directives
permalink: /ng-switch-directives-angularjs/
author: Satinder Singh
prevLink: https://angular4pro.com/ng-show-ng-hide-angularjs/
nextLink: https://angular4pro.com/ng-if-directives-angularjs/
image: https://angular4pro.com/md/images/defining-directives-in-angularjs.png
---

## <i class="fa fa-angle-double-right color"></i> What is ng-switch directives in Angularjs ?
Angularjs provides `ng-if` and `ng-switch` 2 directives to add or remove HTML elements from DOM conditionally based on an expression. If the expression is true, then it will display/add HTML element to DOM and vice versa if the condition is false.

**Keep these 3 things in mind when using ng-switch in AngujarJS:**
  1. ng-switch
  2. ng-switch-when
  3. ng-switch-default

The **ng-switch** directive is added to our primary HTML element (main div tag) and set the expression that acts as a selection condition.

The **ng-switch-when** directive is attached to each child element, which will display only if the expression is true, else it would be removed from DOM.

The **ng-switch-default** directive by its named indicate that this is display as default if no expression is matched. 

---

## <i class="fa fa-angle-double-right color"></i> Example: using ng-switch directives in Angularjs.

Here in this example, we will display matched section based on our drop-down selection. First, we add a dropdown list with values as fruit, animal, vehicle. Next, we add some data to each section. Final HTML markup looks like as written below.

```html {% raw %}
<select ng-model="myVar">
  <option value="fruit">Fruit
  <option value="animal">Animal
  <option value="vehicle">Vehicle
</select>

<div ng-switch="myVar">
  <div ng-switch-when="fruit">
    <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Mango</li>
    <ul>
  </div>
  <div ng-switch-when="animal">
    <ul>
    <li>Dog</li>
    <li>Cat</li>
    <li>Horse</li>
    <ul>
  </div>
  <div ng-switch-when="vehicle">
    <ul>
    <li>Bus</li>
    <li>Car</li>
    <li>Train</li>
    <ul>
  </div>
  
  <div ng-switch-default>
        <p>Select something from the dropdown, to switch the content of specific DIV.</p>
  </div>{% endraw %}
```

[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=123){: .btn .btn-success .btn-green}

---
