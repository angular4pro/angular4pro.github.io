---
layout: default
title: ng-init directives in AngularJS with an example
heading: AngularJs ng-init directives 
overview: Understanding ng-init directive, What is ng-init in angularjs, Use of AngularJS ng-init directives with an example, ng-init defines initial values for an angularjs application.
desc:  Understanding ng-init directive, What is ng-init in angularjs, Use of AngularJS ng-init directives with an example, ng-init defines initial values for an angularjs application.
keywords: ng-init directives
permalink: /ng-init-directives-angularjs/
author: Satinder singh
prevLink: https://angular4pro.com/ng-app-directives-angularjs/
nextLink: https://angular4pro.com/ng-model-directives-angularjs
image: https://angular4pro.com/md/images/defining-directives-in-angularjs.jpg
---

## <i class="fa fa-angle-double-right color"></i> What is ng-init directives?

In angularjs, the ng-init directives define the initial values for an angularjs application. It means ng-init used to initialize application data and which will allow evaluating an expression in given scope. In web application sometime we may require some local data for our application, so this can be done with the ng-init directive. 


## Usage of ng-init directive:

```html {% raw %}
<div ng-app ng-init="message='hello world'">
     {{ message }}
</div>
{% endraw %}
```


> **Note:** Using `ng-init` is not a good practice, we may use ng-controller instead of it.

---

## <i class="fa fa-angle-double-right color"></i> Example of AngularJS ng-init directives

#### Example 1: Use ng-init with single value

Here in this example we are going to create a variable named as "message" using ng-init, and will display this variable text on the page load.

* Add ng-init directive to the div tag.
* Add a variable to ng-init, initialize some value to it.
* Use angularjs express to display variable text on page load.

The code looks like as written below

```html {% raw %}
<div ng-app ng-init="message='Hello World'">
     {{ message }}
</div>
{% endraw %}
```
[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=114){: .btn .btn-success .btn-green}

**Output:**  Hello World

---

#### Example 2: Use ng-init with multiple & complex values.
Here in this example, we learn how to use ng-init with complex JSON data. Here we are going to calculate an average score from mark-sheet using number expressions. 

```html {% raw %}
<div ng-app="" ng-init="minMarks=35;maxMarks=100; marks={physisc:90,chemistry:65,math:75,biology:80}">
   Total score {{ marks.physisc + marks.chemistry + marks.math + marks.biology}} out of {{ 4 * maxMarks}}
</div>
{% endraw %}
```
[Try is yourself](https://angular4pro.com/demos/editor.html?f=demo&i=115){: .btn .btn-success .btn-green}

**Output:**  Hello World


---
