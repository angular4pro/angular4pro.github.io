---
layout: default
title: Directives in AngularJs with example
heading: Directives in AngularJs with example
overview: What are Directives, Understanding directives in AngularJs, Defining Directives, Complete list of directives used in AngularJs, Examples of AngularJs Directives.
desc: What are Directives, Understanding directives in AngularJs, Defining Directives, Complete list of directives used in AngularJs, Examples of AngularJs Directives.
keywords: directives angularjs
permalink: /directives-angularjs1/
author: Satinder singh
prevLink: https://angular4pro.com/array-expressions-angularjs1
nextLink: https://angular4pro.com/ng-app-angularjs
image: https://angular4pro.com/md/images/defining-directives-in-angularjs.jpg
---
## <i class="fa fa-angle-double-right color"></i> What are Directives?

In AngularJs with directive we can do **DOM Manipulation, Data Binding and handle Events**. Directives teach HTML new tricks. Directives extends the HTML by adding special attribute prefix `ng-` where ng stands for Angular.

In angularjs most important directive is the `ng-app` which tells angularjs that this part of the webpage is AngularJS application. And `ng-model` is also another important directives, which is used for data binding in AngularJs. AngularJS includes various built-in directives and we can also create custom directives in angularjs application.

#### Directives are used to perform variety of different function to build an application .i.e
* Used for DOM manipulation.
* Used to working with Data Binding.
* Used to reference modules and controllers.
* Event handling, trigger by views (click, mouseover event etc).
* Modify CSS, and also determine where views are loaded on our page.  


## <i class="fa fa-angle-double-right color"></i> Defining Directives. 

**Directives can be defined in multiple ways as shown in below image.**
<img class="alignImg" src="https://angular4pro.com/md/images/defining-directives-in-angularjs.jpg" alt="defining directives in angularjs">  


## <i class="fa fa-angle-double-right color"></i> Example of AngularJs Directives
<div class="row">
<div class="col-md-4">
<div class="box-shadow-outer">
<div class="box-shadow-block box-shadow-1 text-center">
<h5>Modules/Controllers</h5>
<ul>
<li> ng-app </li>
<li> ng-controller </li>
<li style="    list-style: none;">&nbsp; </li>
</ul>
</div>
</div>
<br>
</div>
<div class="col-md-4">
<div class="box-shadow-outer">
<div class="box-shadow-block box-shadow-1 text-center">
<h5>DOM Manipulation</h5>
<ul>
<li> ng-hide </li>
<li> ng-repeat </li>
<li> ng-show </li>
</ul>
</div>
</div>
<br>
</div>
<div class="col-md-3">
<div class="box-shadow-outer">
<div class="box-shadow-block box-shadow-1 text-center">
<h5>Data Binding</h5>
<ul>
<li> ng-bind </li>
<li> ng-init </li>
<li> ng-model </li>
</ul>
</div>
</div>
<br>
</div>
<div class="col-md-3">
<div class="box-shadow-outer">
<div class="box-shadow-block box-shadow-1 text-center">
<h5>Events</h5>
<ul>
<li> ng-click </li>
<li> ng-keypress </li>
<li> ng-mouseenter</li>
</ul>
</div>
</div>
<br>
</div>
</div>


**Note:** This is just some common used examples of directive, there are many more directives available in AngularJS pls check below given list.

---

## <i class="fa fa-angle-double-right color"></i> Complete list of AngularJs Directives
<table class="table table-striped">
<tbody><tr>
<th style="width:20%">Directive</th>
<th>Description</th>
</tr>
<tr>
<td><a href="#">ng-app</a></td>
<td>Defines the root element of an application.</td>
</tr>
<tr>
<td><a href="#">ng-bind</a></td>
<td>Binds the content of an HTML element to application data.</td>
</tr>
<tr>
<td><a href="#">ng-bind-html</a></td>
<td>Binds the innerHTML of an HTML element to application data, and also removes dangerous code from the HTML string.</td>
</tr>
<tr>
<td><a href="#">ng-bind-template</a></td>
<td>Specifies that the text content should be replaced with a template.</td>
</tr>
<tr>
<td><a href="#">ng-blur</a></td>
<td>Specifies a behavior on blur events.</td>
</tr>
<tr>
<td><a href="#">ng-change</a></td>
<td>Specifies an expression to evaluate when content is being changed by the user.</td>
</tr>
<tr>
<td><a href="#">ng-checked</a></td>
<td>Specifies if an element is checked or not.</td>
</tr>
<tr>
<td><a href="#">ng-class</a></td>
<td>Specifies CSS classes on HTML elements.</td>
</tr>
<tr>
<td><a href="#">ng-class-even</a></td>
<td>Same as ng-class, but will only take effect on even rows.</td>
</tr>
<tr>
<td><a href="#">ng-class-odd</a></td>
<td>Same as ng-class, but will only take effect on odd rows.</td>
</tr>
<tr>
<td><a href="#">ng-click</a></td>
<td>Specifies an expression to evaluate when an element is being clicked.</td>
</tr>
<tr>
<td><a href="#">ng-cloak</a></td>
<td>Prevents flickering when your application is being loaded.</td>
</tr>
<tr>
<td><a href="#">ng-controller</a></td>
<td>Defines the controller object for an application.</td>
</tr>
<tr>
<td><a href="#">ng-copy</a></td>
<td>Specifies a behavior on copy events.</td>
</tr>
<tr>
<td><a href="#">ng-csp</a></td>
<td>Changes the content security policy.</td>
</tr>
<tr>
<td><a href="#">ng-cut</a></td>
<td>Specifies a behavior on cut events.</td>
</tr>
<tr>
<td><a href="#">ng-dblclick</a></td>
<td>Specifies a behavior on double-click events.</td>
</tr>
<tr>
<td><a href="#">ng-disabled</a></td>
<td>Specifies if an element is disabled or not.</td>
</tr>
<tr>
<td><a href="#">ng-focus</a></td>
<td>Specifies a behavior on focus events.</td>
</tr>
<tr>
<td>ng-form</td>
<td>Specifies an HTML form to inherit controls from.</td>
</tr>
<tr>
<td><a href="#">ng-hide</a></td>
<td>Hides or shows HTML elements.</td>
</tr>
<tr>
<td><a href="#">ng-href</a></td>
<td>Specifies a url for the &lt;a&gt; element.</td>
</tr>
<tr>
<td><a href="#">ng-if</a></td>
<td>Removes the HTML element if a condition is false.</td>
</tr>
<tr>
<td><a href="#">ng-include</a></td>
<td>Includes HTML in an application.</td>
</tr>
<tr>
<td><a href="#">ng-init</a></td>
<td>Defines initial values for an application.</td>
</tr>
<tr>
<td>ng-jq</td>
<td>Specifies that the application must use a library, like jQuery.</td>
</tr>
<tr>
<td><a href="#">ng-keydown</a></td>
<td>Specifies a behavior on keydown events.</td>
</tr>
<tr>
<td><a href="#">ng-keypress</a></td>
<td>Specifies a behavior on keypress events.</td>
</tr>
<tr>
<td><a href="#">ng-keyup</a></td>
<td>Specifies a behavior on keyup events.</td>
</tr>
<tr>
<td><a href="#">ng-list</a></td>
<td>Converts text into a list (array).</td>
</tr>
<tr>
<td><a href="#">ng-maxlength</a></td>
<td>Specifies the maximum number of characters allowed in the input field.</td>
</tr>
<tr>
<td><a href="#">ng-minlength</a></td>
<td>Specifies the minimum number of characters allowed in the input field.</td>
</tr>
<tr>
<td><a href="#">ng-model</a></td>
<td>Binds the value of HTML controls to application data.</td>
</tr>
<tr>
<td><a href="#">ng-model-options</a></td>
<td>Specifies how updates in the model are done.</td>
</tr>
<tr>
<td><a href="#">ng-mousedown</a></td>
<td>Specifies a behavior on mousedown events.</td>
</tr>
<tr>
<td><a href="#">ng-mouseenter</a></td>
<td>Specifies a behavior on mouseenter events.</td>
</tr>
<tr>
<td><a href="#">ng-mouseleave</a></td>
<td>Specifies a behavior on mouseleave events.</td>
</tr>
<tr>
<td><a href="#">ng-mousemove</a></td>
<td>Specifies a behavior on mousemove events.</td>
</tr>
<tr>
<td><a href="#">ng-mouseover</a></td>
<td>Specifies a behavior on mouseover events.</td>
</tr>
<tr>
<td><a href="#">ng-mouseup</a></td>
<td>Specifies a behavior on mouseup events.</td>
</tr>
<tr>
<td><a href="#">ng-non-bindable</a></td>
<td>Specifies that no data binding can happen in this element, or its children.</td>
</tr>
<tr>
<td><a href="#">ng-open</a></td>
<td>Specifies the open attribute of an element.</td>
</tr>
<tr>
<td><a href="#">ng-options</a></td>
<td>Specifies &lt;options&gt; in a &lt;select&gt; list.</td>
</tr>
<tr>
<td><a href="#">ng-paste</a></td>
<td>Specifies a behavior on paste events.</td>
</tr>
<tr>
<td>ng-pluralize</td>
<td>Specifies a message to display according to en-us localization rules.</td>
</tr>
<tr>
<td><a href="#">ng-readonly</a></td>
<td>Specifies the readonly attribute of an element.</td>
</tr>
<tr>
<td><a href="#">ng-repeat</a></td>
<td>Defines a template for each data in a collection.</td>
</tr>
<tr>
<td><a href="#">ng-required</a></td>
<td>Specifies the required attribute of an element.</td>
</tr>
<tr>
<td><a href="#">ng-selected</a></td>
<td>Specifies the selected attribute of an element.</td>
</tr>
<tr>
<td><a href="#">ng-show</a></td>
<td>Shows or hides HTML elements.</td>
</tr>
<tr>
<td><a href="#">ng-src</a></td>
<td>Specifies the src attribute for the &lt;img&gt; element.</td>
</tr>
<tr>
<td><a href="#">ng-srcset</a></td>
<td>Specifies the srcset attribute for the &lt;img&gt; element.</td>
</tr>
<tr>
<td><a href="#">ng-style</a></td>
<td>Specifies the style attribute for an element.</td>
</tr>
<tr>
<td><a href="#">ng-submit</a></td>
<td>Specifies expressions to run on onsubmit events.</td>
</tr>
<tr>
<td><a href="#">ng-switch</a></td>
<td>Specifies a condition that will be used to show/hide child elements.</td>
</tr>
<tr>
<td>ng-transclude</td>
<td>Specifies a point to insert transcluded elements.</td>
</tr>
<tr>
<td><a href="#">ng-value</a></td>
<td>Specifies the value of an input element.</td>
</tr>
</tbody></table>


---

