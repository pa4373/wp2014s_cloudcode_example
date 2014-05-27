Parse.Cloud.beforeSave("ExampleClass", function(request, response) {
  request.object.set("text", "Always the same."); 
  response.success();
});
