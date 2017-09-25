---
layout: default
title: Object expressions in AngularJS with example
heading: Object expressions in AngularJS
overview: Understanding Object Expressions in AngularJS, What is Object Expressions, Use of AngularJS Object expression with an example, AngularJS binds data to HTML using Expressions..
desc: Understanding Object Expressions in AngularJS, What is Object Expressions, Use of AngularJS Object expression with an example, AngularJS binds data to HTML using Expressions.. 
keywords: Object expressions
permalink: /object-expressions-angularjs1/
author: Satinder singh
prevLink: https://angular4pro.com/string-expressions-angularjs1
nextLink: https://angular4pro.com/array-expressions-angularjs1
image: https://angular4pro.com/md/images/expression-angularjs.jpg
---
## <i class="fa fa-angle-double-right color"></i> AngularJS Object Expressions

AngularJS Object Expression is same as JavaScript objects. Objects are like variables, but it contains many values. Objects are written in a key value pair. The object expressions used to hold object properties and evaluate at the view where they are applied on web page.

## <i class="fa fa-angle-double-right color"></i> AngularJS example using object expressions.
**Example 1 :**
Here we are going to read JSON data from `ng-init` and display fullname using object expressions. The code looks like as written below.

```html {% raw %}
<div ng-app="" ng-init="user= {firstName:'Satinder ',lastName:'Singh',gender:'Male'}" >
    <p> My FullName is  {{ user.firstName+ +user.lastName }} </p>
</div>
{% endraw %}
```

Same example can also be written using `ng-bind` directive in angularjs. Final code looks like as writte below.

```html {% raw %}
<div ng-app="" ng-init="user= {firstName:'Satinder ',lastName:'Singh',gender:'Male'}" >
    <p> My FullName is  <span ng-bind="user.firstName+ +user.lastName" > </span> </p>
</div>
```
**Output:** My FullName is Satinder Singh

[Try It Yourself ⇒](https://angular4pro.com/demos/editor.html?f=demo&i=110){: .btn .btn-success .btn-green}

---
