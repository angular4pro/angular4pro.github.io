---
layout: default
title: ng-model directives in AngularJS with an example
heading: AngularJs ng-model directives 
overview: Understanding ng-model directive, Use of AngularJS ng-model directives with an example, ng-model directive binds the value of HTML controls to application data, two way data binding.
desc: Understanding ng-model directive, Use of AngularJS ng-model directives with an example, ng-model directive binds the value of HTML controls to application data, two way data binding.
keywords: ng-model directives
permalink: /ng-model-directives-angularjs/
author: Satinder singh
prevLink: https://angular4pro.com/ng-init-directives-angularjs/
nextLink: https://angular4pro.com/ng-repeat-directives-angularjs/
image: https://angular4pro.com/md/images/defining-directives-in-angularjs.jpg
---

## <i class="fa fa-angle-double-right color"></i> What is ng-model directives?

In angularjs, **ng-model** directive binds the value of HTML controls (`input`, `select`, `textarea`) to application data i.e it is used for data binding in AngularJs. The main purpose on it is to bind the **view** to the **model**.

**Usage of ng-model are as follows.**

1. Used to bind HTML control such as textbox , textarea, input, select dropdownlist.
2. Allows validation of user input ( number, e-mail, required ).
3. Provide status of application data (invalid, dirty, touched).

---

**Two way Data Binding**

Javascript dosen't provide native support for data binding. But AngularJS has abilty of two way data binding with ng-model directives, which leads to significant reductions in code.

![ng-model directives two way binding](https://angular4pro.com/md/images/ng-model-two-way-binding.png "Angular JS ng-model directives uses two way data binding.")


### Example: ng-model two way binding 

For example we have two textboxes one for product quantity and other for product price. Now we want to calculate its total price, when any textboxes values gets changed. So here we use ng-model directive to map both the textbox values to our data model, calculate it and further we can save it into database.

```html {% raw %}
<div ng-app ng-init="pdtQuantity=2;pdtPrice =100">
  <table>
    <tr>
      <td>Quantity :</td>
      <td><input type="text" ng-model="pdtQuantity" /> </td>
    </tr>
    <tr>
      <td>Price :</td>
      <td><input type="text" ng-model="pdtPrice" />
      </td>
    </tr>
    <tr>
      <td><b>Total ::</b> </td>
      <td><b> {{pdtQuantity * pdtPrice }} </b> </td>
    </tr>
  </table>
</div>{% endraw %}
```

[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=116){: .btn .btn-success .btn-green}

**OutPut:**

![ng-model directives two way data binding](https://angular4pro.com/md/images/ng-model-two-way-binding-angular.gif "ng-model directives two way data binding example output")

---

## Difference between ng-bind vs ng-model

If you are confusing between using **ng-bind** or **ng-model**, then follwing Q&N will clear your confusion:

**# Do you only need to display data?**
* Yes: `ng-bind` (one-way binding)
* No: `ng-model` (two-way binding)

---

**# Do you need to bind text content (and not value)?**
* Yes: `ng-bind`
* No: `ng-model` (you should not use ng-bind where value is required)

---

**# Is your tag a HTML `<input>`?**
* Yes: `ng-model` (you cannot use ng-bind with input tag)
* No: `ng-bind`








