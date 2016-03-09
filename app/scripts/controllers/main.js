'use strict';

/**
 * @ngdoc function
 * @name starwarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starwarsApp
 */


   var quotes = [{
     'author': '- Yoda',
     'quote': 'When 900 years old, you reach… Look as good, you will not.'
   }, {
     'author': '- Senator Palpatine',
     'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
   }, {
     'author': '- Count Dooku',
     'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
   }, {
     'author': '- Darth Vader',
     'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
   }, {
     'author': '- Princess Leia',
     'quote': 'Aren\'t you a little short for a storm trooper?'
   }, {
     'author': '- Yoda',
     'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
   }, {
     'author': '- Qui-Gon Jinn',
     'quote': 'Your focus determines your reality'
   }, {
     'author': '- Yoda',
     'quote': 'Do. Or do not. There is no try.'
   }, {
     'author': '- Obi-Wan Kenobi',
     'quote': 'In my experience there is no such thing as luck.'
   }, {
     'author': '- Yoda',
     'quote': 'If once you start down the dark side, forever will it dominate your destiny, consume you it will, as it did Obi-Wan\'s apprentice'
   }, {
     'author': '- Darth Vader',
     'quote': 'The Force is strong with this one.'
   }];

 var retrievePreciseQuote = function(name){
   var specificQuotes= [];
   for (var i = 0; i < quotes.length; i++) {
     if(quotes[i].author.toUpperCase().indexOf(name.toUpperCase()) !== -1){
       specificQuotes.push(quotes[i]);
     }
   }
  return specificQuotes[Math.floor(Math.random() * (specificQuotes.length))];
 };

 var retriveQuote = function(){
   return quotes[Math.floor(Math.random() * (quotes.length))];
 };

angular.module('starwarsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.generateQuote = function() {
      if($scope.name === undefined)
      {
          $scope.quote = retriveQuote();
      }
      else{
        $scope.quote = retrievePreciseQuote($scope.name);
      }
    };
  });
