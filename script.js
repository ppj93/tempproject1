// Code goes here

angular.module('myApp', ['ngMaterial', 'jkAngularCarousel'])

.controller('MyCtrl', function($scope) {
    $scope.dataArray = [
      {
        src: 'images/1.jpg'
      },
      {
        src: 'images/2.jpg'
      },
      {
        src: 'images/3.jpg'
      },
      {
        src: 'images/4.jpg'
      },
      {
        src: 'images/5.jpg'
      },
      {
        src: 'images/7.png'
      },
      {
        src: 'images/3.jpg'
      },
      {
        src: 'images/4.jpg'
      },
      {
        src: 'images/7.png'
      },
	  {
        src: 'images/1.jpg'
      },
      {
        src: 'images/3.jpg'
      },
      {
        src: 'images/4.jpg'
      },
      {
        src: 'images/5.jpg'
      },
      ,
      {
        src: 'images/7.png'
      }
    ];
});