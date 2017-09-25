---
layout: default
title: String expressions in AngularJS with example
heading: String expressions in AngularJS 
overview: Understanding String Expressions in AngularJS, What is String Expressions, AngularJS string expression example, AngularJS binds data to HTML using Expressions.
desc: Understanding String Expressions in AngularJS, What is String Expressions, AngularJS string expression example, AngularJS binds data to HTML using Expressions. 
keywords: String expression
permalink: /string-expressions-angularjs/
author: Satinder singh
prevLink: https://angular4pro.com/number-expressions-angularjs
nextLink: https://angular4pro.com/object-expressions-angularjs
image: https://angular4pro.com/md/images/expression-angularjs.jpg
---
## <i class="fa fa-angle-double-right color"></i> AngularJS String Expressions

String Expressions are same as JavaScript strings. The string expression is used to perform operations on string values, e.g. ( string concatenations, string merge). 
AngularJS resolves the expression, and return the result output where they have applied in a web-page.

## <i class="fa fa-angle-double-right color"></i> AngularJS example using string expressions.
**Example 1 :**
Here we are going to concatenate user name using string expressions. The code looks like as written below.

```html {% raw %}
<div ng-app="">
    <p>  My FullName is {{ "Satinder" + " " +"singh" }} </p>
</div>
{% endraw %}
```

Same example can also be written using ng-bind directive in angularjs. Final code looks like as writte below.

```html
<div ng-app="">
    <p> My FullName is  <span ng-bind="Satinder" +" " +"singh" > </span> </p>
</div>
```
**Output:** My FullName is ***Satinder Singh***

[Try It Yourself ⇒](https://angular4pro.com/demos/editor.html?f=demo&i=108){: .btn .btn-success .btn-green}

---

**Example 2 :**
Here we are going to read data from `ng-init` and **concatenate** it using string expressions. The code looks like as written below.

```html {% raw %}
<div ng-app="" ng-init="firstName='Satinder';lastName='Singh'" >
    <p> My FullName is  {{ firstName + +lastName" }} </p>
</div> {% endraw %}
```

Same example can also be written using ng-bind directive in angularjs. Final code looks like as writte below.

```html
<div ng-app="" ng-init="firstName='Satinder';lastName='Singh'" >
    <p> My FullName is  <span ng-bind="firstName + +lastName" > </span> </p>
</div>
```
**Output:** My FullName is Satinder Singh


[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=109){: .btn .btn-success .btn-green}

---

