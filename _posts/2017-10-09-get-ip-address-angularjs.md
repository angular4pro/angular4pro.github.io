---
layout: default
title: Angularjs get client ip address example
heading: How to get client ip address in AngularJs
desc: How to get client address in angularjs, Get system Ip address in angularjs.
keywords: angularjs ip address
permalink: /get-client-ip-address/
author: Satinder Singh
prevLink: https://angular4pro.com/ng-bind-directives-angularjs/
nextLink: https://angular4pro.com/ng-switch-directives-angularjs/
image: https://angular4pro.com/md/images/angularjs-example.png
---

**Get IP Address :** Here in this article will see how to get client IP address in angularjs. We use angularjs `$http` service to make a ajax call, which in response gives us the **Client IP Address**, **Hostname**,  **City** , **Region**, **Country**, **Location ( Latitude, Longitude)** and **name of organisation**. Basically we call  `https://ipinfo.io/`
which displays IP Address.

## Code to show client IP Address in Angularjs.

**HTML Markup:** Here added a span tag with `ng-bind` attribute with value as ip, which display the IP address.

```html {% raw %}
<body ng-app="myApp">
<div ng-controller="myip">
	<span ng-bing="ip"></span>
</div>{% endraw %}
```
**AngularJS Code:** Here we use $http service to make a http request, which in response gives the IP addres and other information.
```html {% raw %}
<script>
	var app = angular.module('myApp', []);
	app.controller('myip', function($scope, $http) {
		$http.get("https://ipinfo.io/").then(function (response) 
		{
			$scope.ip = response.data.ip;
		});
});
</script>{% endraw %}
```

---
