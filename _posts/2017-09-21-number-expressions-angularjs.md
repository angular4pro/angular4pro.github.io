---
layout: default
title: Number expressions in AngularJS with example
heading: Number expressions in AngularJS
overview: Understanding Number Expressions in AngularJS, What is Number Expressions, AngularJS number expression example, AngularJS binds data to HTML using Expressions.
desc: Understanding Number Expressions in AngularJS, What is Number Expressions, AngularJS number expression example, AngularJS binds data to HTML using Expressions. 
keywords: number expression
permalink: /number-expressions-angularjs1/
author: Satinder singh
prevLink: https://angular4pro.com/angularjs-expressions
nextLink: https://angular4pro.com/string-expressions-angularjs
image: https://angular4pro.com/md/images/expression-angularjs.jpg
---
## <i class="fa fa-angle-double-right color"></i> AngularJS Number Expressions

Number expression as same as the javascript number expression. In short, if any expression using numbers and operators like +,-,/,* (add, subtract, divide, multiply) then those expressions are number expression.

## <i class="fa fa-angle-double-right color"></i> AngularJS example using number expressions.
**Example 1 :**
Here we are going to add two number .i.e 2 + 3 using number expressions. The code looks like as written below.

{% highlight html%}
{% raw %}
<div ng-app="">
	<p> Addition of 2 + 3 = {{ 2 + 3 }}</p>
</div>
{% endraw %}
{% endhighlight %}


Same example can also be written using `ng-bind` directive in angularjs. Final code looks like as writte below.

```html
<div ng-app="">
	<p> Addition of 2 + 3 =  <span ng-bind="2 + 3"></span> </p>
</div>
```
**Output:** Addition of `2 + 3 = 5`

[Try It Yourself ⇒](https://angular4pro.com/demos/editor.html?f=demo&i=105){: btn btn-success btn-green}

---
**Example 2 :**
Here we are going to multiply two number .i.e 2 x 3 using number expressions. The code looks like as written below.


```html
<div ng-app="">
	<p> Multiplication of 10 * 10 = {{ 10 * 10 }}</p>
</div>
```

Same example can also be written using `ng-bind` directive in angularjs. Final code looks like as writte below.

```html
<div ng-app="">
	<p> Multiplication of 10 * 10 =  <span ng-bind="10 * 10"></span> </p>
</div>
```
**Output:** Multiplication of `10 * 10 = 100`

[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=106){: btn btn-success btn-green}

---
**Examle 3**
Here we are going to calculate an average score from mark-sheet using number expressions. The code looks like as written below.

```html
<div ng-app="" ng-init="minMarks=35;maxMarks=100; marks={physisc:90,chemistry:65,math:75,biology:80}">
Total score {{ marks.physisc + marks.chemistry + marks.math + marks.biology}} out of {{ 4 * maxMarks}}
</div>
```

[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=107){: btn btn-success btn-green}



