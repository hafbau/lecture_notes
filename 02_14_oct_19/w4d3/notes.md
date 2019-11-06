AJAX
===

Review?

Ajax

WHy?
-  Performance
- Reusability of API

```xml
<name>Samir</name>
<email>not.your.biz@aol.com</email>
```


XmlHTTPRequest

jQuery

```js
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  data: {}
  dataType: 'json',
  success: function(data) {
    console.log('data is back :', data);
  },
  error: function(err) {
    console.error('data is back :', err);
  }
})
```
Slogram FTW!
