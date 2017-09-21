---
layout: default
title: AngularjJS Introduction
heading: AngularJs Introduction
overview: What is AngularJS, Simple understanding of SPA, Why to use Angularjs, Learn AngularJS, Data Level Programming, Directive ng-app, ng-model, ng-controller.
desc: What is AngularJS, Simple understanding of SPA, Why to use  Angularjs, Learn AngularJS in detail  with example, Directive ng-app, ng-model, ng-controller. 
keywords: angularjs introduction, understanding angularjs, ng-app, ng-module
permalink: /learn-angularjs-introduction/
author: Satinder singh
prevLink: #
nextLink: https://angular4pro.com/angularjs-expressions.html
image: https://angular4pro.com/md/images/angular-js-full-stack-spa.jpg
---

## <i class="fa fa-angle-double-right color"></i> What is AngularJS

**AngularJS is a full featured SPA framework** , and it is written in JavaScript. SPA stands for single page application it is a web application or web site that fits on a single web page with the goal of providing a fast user experience similar to that of a desktop application. SPA can be developed using any frameworks like EmberJS, MeteorJs, ReactJs and also with AngularJs.

AngularJS is a JavaScript MV structured framework to create dynamic web applications. AngularJS is open source, completely free and officially maintained by Google. 

AngularJS is no different from plain HTML, but an extensions to **HTML with new attributes** i.e using `ng-directives`.

![Angularjs is full stack SPA](https://angular4pro.com/md/images/angular-js-full-stack-spa.jpg)

Before writing any code first we need to download and import [AngularJS](https://angularjs.org/){: target='_blank'} library on our web page, then we extend HTML with angularjs directives.

We can also include AngularJS library from [CDN](https://ajax.googleapis.com/ajax/libs/angularjs/1.6.5/angular.min.js).

## <i class="fa fa-angle-double-right color"></i> AngularJS extends HTML with Directives.

In AngularJs with the directives, we can do DOM Manipulation, Data Binding and Events handling. Directives teach HTML new tricks. Most important directive is `ng-app` which tells AngularJS that this part of web page is AngularJS application. In other words ng-app marked it as an angularjs application.

The AngularJS framework can be divided into following three significant parts
* `ng-app` : This directive used to define the starting point of application and it will act as the root element of an application.
* `ng-model` : This directive binds the value of HTML controls ( input , select , textarea ) to application data.
* `ng-bind` : This directive binds the content of HTML element to application data.

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

**Note :**  This is just some examples of directive, there are many more directives available in AngularJS, which will learn in our further articles.

##  <i class="fa fa-angle-double-right color"></i> Our First AngularJS Sample Example
Here we are going to write a simple angularjs example which displays addition of two numbers using angularjs number expression. Our code looks like as shown in below image.

![AngularJS simple example](https://angular4pro.com/md/images/angularjs-sample-example.jpg)

##  <i class="fa fa-angle-double-right color"></i> Key Player in AngularJs

![module, routes ,views , directives, filters, Controllers are key player in angularjs](https://angular4pro.com/md/images/AngularJs-key-player-2.jpg)

## <i class="fa fa-angle-double-right color"></i> Modules are really just as containers for : 
* **Controllers** : acts as ***"brain"*** for view
	1. It retrieve data from factory/Service.
	2. It handles events trigger by view (click, mouseover event etc).
	3. Dependent on $scope object to interact with view.
* **Routes** : Each route is a unique path having reference to controller and view.
* **Factories/ Services :**
	1. It is used to call REST API.
	2. It is used to transfer (share) data between controller.
	3. It is used to handle custom logic.
	4. They are Singletons.
* **Directives**
* **FIlters**

##  <i class="fa fa-angle-double-right color"></i> Pros & Cons of AngularJS
**Pros:**
1. **No page refresh:** This means to load data, we don't need to refresh the whole web page, just load particular part of our web page which loads dynamic data.
2. **Code Re-useable:** AngularJS include a lot of reusable code while developing application .i.e utility code like user navigation and browser history, which we can reuse in our project.
3. **Testing:** Applications build in angularjs are more testable as compare to other frameworks. We can easily write an automated test, and so we test various part of our application.
4. **Better user experience:** SPA feels like a native application (like a desktop app) speedy and responsive.
5. **Two Way Data Binding:** Data binding in AngularJS is the synchronization between the `model` and the `view` . This is one of the best features of Angularjs. When data in the model changes, the view reflects the change, and when data in the view changes, the model is updated as well.
6. **Ability to work offline:** Even if the user loses internet connection, SPA can still work because all the pages are already loaded.
7. **Designed and Developed by Google:** AngularJS is developed and built by a bunch of dedicated Google engineers and now it officially maintained by Google.

**Cons**
1. **SEO:** To index SPA application, search engine crawlers should able to execute javascript. One good news is now Google, and Bing started indexing ajax based web pages, but not all search engine started (Yahoo, AOL, Baidu, Yandex)
2. **Confused by many ways to handle:** One advantage with AngularJS is that it can be handled it in different ways, ironically this is the same feature which becomes a hurdle. As many beginners find this bit confusing while developing an application.
