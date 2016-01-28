# ng-marquee
A custom marquee tag using angular.

## Demo
[Marquee](http://htmlpreview.github.io/?https://github.com/dimpu/ng-marquee/blob/master/example/index.html)  

## Requirements
* [jQuery](http://jquery.com/)
* [jQuery.Marquee](https://github.com/aamirafridi/jQuery.Marquee)  
* [AngularJS](https://angularjs.org/)  

## Usage
Add the ngMarquee module as a dependency to your application module:
```JavaScript
var myAppModule = angular.module('MyApp', ['ngMarquee'])
```

## ngMarquee
The ngMarquee directive allows you to specify element as a marquee.

### Directive Info
This directive executes at priority level 0.

### Usage
as element:
HTML
```HTML
<ng-marquee
  mq-options="{}">
...
</ng-marquee>
```
### Arguments
| Param | Type | Details |
|:-----|:-------|-------|
|ngOptions   |expression     |Expression to specify custom options to marquee.    |

### Example
```HTML
<ng-marquee mq-options="{duration: 5000}">
  This is a marquee message.
</ng-marquee>
```
For all available list of options check https://github.com/aamirafridi/jQuery.Marquee
