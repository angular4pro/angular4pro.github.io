---
layout: default
title: Array expressions in AngularJS with example
heading: Array expressions in AngularJS
overview: Understanding Array Expressions in AngularJS, What is Array Expressions, Use of AngularJS Array expression with an example, AngularJS binds data to HTML using Expressions.
desc: Understanding Array Expressions in AngularJS, What is Array Expressions, Use of AngularJS Array expression with an example, AngularJS binds data to HTML using Expressions.
keywords: array expressions
permalink: /array-expressions-angularjs/
author: Satinder singh
prevLink: https://angular4pro.com/object-expressions-angularjs
nextLink: https://angular4pro.com/directives-angularjs
image: https://angular4pro.com/md/images/expression-angularjs.jpg
---
## <i class="fa fa-angle-double-right color"></i> AngularJS Array Expressions

AngularJS Array Expression is same as JavaScript array. An array is a special variable, which can hold more than one value at a time. It is used to hold an array of object values. Using array expression angularjs bind array data to html.

## <i class="fa fa-angle-double-right color"></i> AngularJS example using array expressions.
**Example 1 :**
Here we are going to read ARRAY data from `ng-init` and display list of fruits using array expressions. The code looks like as written below.

```html {% raw %}
<div ng-app="" ng-init="fruits = ['Apple', 'Orange', 'Mango', 'Banana']" >
    <p> Fruits  {{ fruits[0] +" , "+ fruits[1] +" , " + fruits[2] +" , " + fruits[3]}} </p>
</div>
{% endraw %}
```

Same example can also be written using ng-bind directive in angularjs. Final code looks like as writte below.

```html {% raw %}
<div ng-app="" ng-init="fruits = ['Apple', 'Orange', 'Mango', 'Banana']" >
    <p> Fruits  <span ng-bind='fruits[0] +"-" +fruits[1]+" - " +fruits[2]+"-"  +fruits[3]'> </span></p>
</div>	
{% endraw %}
```
**Output:** Fruits , Apple , Orange , Mango , Banana

[Try It Yourself ⇒](https://angular4pro.com/demos/editor.html?f=demo&i=111){: .btn .btn-success .btn-green}

---

**Example 2 :**
Here we are going to display list of fruits from `ng-init` and for dispalying list we use `ng-repeat` directive. The code looks like as written below.

```html {% raw %}
<div ng-app="" ng-init="fruits = ['Apple', 'Orange', 'Mango', 'Banana']" >
 	<ul>
    	<li ng-repeat="item in fruits"> {{ item }} </li>
  	</ul>
 </div> 
{% endraw %}
```

**Output: ** 
 	* Apple
	* Orange
	* Mango
	* Banana

[Try It Yourself ⇒](https://angular4pro.com/demos/editor.html?f=demo&i=112){: .btn .btn-success .btn-green}