define(['resources/lib/knockout'],function(ko){

  return function(){
	  this.Name = ko.observable();
	  this.Age = ko.observable();
	  this.City = ko.observable();
  };
});