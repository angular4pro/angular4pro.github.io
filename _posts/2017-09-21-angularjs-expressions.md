---
layout: default
title: AngularjJS Expressions
heading: AngularJs Expressions
overview: AngularJS Expressions simple understanding, What is Angularjs Expressions, Diffrent types of AngularJS Expressions, Angularjs concatenate string, Concatenate variables in AngularJS.
desc: AngularJS Expressions simple understanding, What is Angularjs Expressions, Diffrent types of AngularJS Expressions, Angularjs concatenate string, Concatenate variables in AngularJS. 
keywords: angularjs introduction, understanding angularjs, ng-app, ng-module
permalink: /angularjs-expressions/
author: Satinder singh
prevLink: https://angular4pro.com/angularjs-introduction.html
nextLink: https://angular4pro.com/number-expressions-angularjs.html
image: https://angular4pro.com/md/images/expression-angularjs.jpg
---

## <i class="fa fa-angle-double-right color"></i> What is AngularJS Expressions
Before digging into AngularJS Expressions, first, we understand what is an expression [javascript expressions]. An expression is any valid set of literals, variables, operators, and expressions that evaluate to a single value. And that value may be a number, string, or logical value. 

For example, if we want to add two numbers 2 and 3, then 2 + 3 is an expression, and our result will be `2 + 3 = 5` that is expression evaluates to a single value. Similarly for string concatenation .i.e var FullName="Satinder" +" Singh", gives "Satinder Singh" concantenate string user full name.

In AngularJS, expressions are used to bind application data to HTML. AngularJS expression is similar like Javascript expression but written inside double braces like `{{ expression }}` example `{{ 2 + 3 }}`. AngularJS expression can also be written inside a directive with `ng-bind="expression"`. AngularJS resolves the expression, and return the result output where they have used in web-page.

***Expressions are code snippets placed in binding markup***
![Understanding expressions in AngularJs](https://angular4pro.com/md/images/expression-angularjs.jpg)

## <i class="fa fa-angle-double-right color"></i> Limitation of AngularJS Expressions.
* AngularJS Expressions doesn't support Control Flow Statements , i.e. conditionals, Loops, exception, as javascript expression supports. But we can use ternary operator `(a ? b : c)` in AngularJS version 1.1.5 and above
* In AngularJS Expression we cannot use regular expression.
* We cannot declare a function inside AngularJS Expressions.
* In angularjs expressions we cannot use `bitwise`, comma `,` and `void`.
* Also we cannot use `new` operator in AngularJS Expression .i.e object creation with new operator not allowed.

##  <i class="fa fa-angle-double-right color"></i> Types of AngularJS Expression
In angular js expression are classified as 4 types.
1. Number Expressions
2. String Expressions
3. Object Expressions
4. Array Expression

###  AngularJS Number Expressions.

Number expression as same as the javascript number expression. In short, if any expression using numbers and operators like +,-,/,* (add, subtract, divide, multiply) then those expressions are number expression.

###  AngularJS String Expressions.

String Expressions are same as JavaScript strings. The string expression is used to perform operations on string values, e.g. (string concatenations).

> **Note:** + operator used for both addition and concatenation. Numbers are getting added, and Strings are concatenated.

### AngularJS Objects Expressions.
AngularJS Object Expression is same as JavaScript objects. Objects are like variables, but it contains many values. Objects are written in a key value pair. So the object expressions used to hold object properties and evaluate at the view where they are used.

### AngularJS Array Expressions.
AngularJS Array Expression is same as JavaScript array. It used to hold an array of object values.

