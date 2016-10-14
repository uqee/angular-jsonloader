## angular-jsonloader

### Use case

Utilize simple external data source without creating a dedicated controller and custom `$http` requests.

### Example

```html
<div json-loader jl-model="your.model" jl-url="/your/model.json">
  <div ng-repeat="something in your.model">...</div>
</div>
```
