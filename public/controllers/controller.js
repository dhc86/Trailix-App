var myapp = angular.module('myApp', []);




myapp.controller('boxofficetrailers', function($scope, $http, $sce){
         
    $scope.showMe = false;
    $scope.myFunc = function(movie) {
        $scope.showMe = !$scope.showMe;
        $scope.movie = movie;
    }
    $scope.mysecondFunc = function(movie) {
        $scope.showMe = !$scope.showMe;
        $scope.movie = movie;
    }

    $http({
      method: 'GET',
      url: 'https://themovieclips.p.mashape.com/boxoffice?limit=10',
      headers: { 'X-Mashape-Key' : 'API_KEY' }
      }).then(function successCallback(response) {
        console.log("success from boxofficetrailers controller");

        var movies = response.data;
        var movieObjsArray = [];
        var movieObjsArray2 = [];
        console.log(movies);

        for (var i=0; i < 8; i++){
          if (i<4){
            movie = movies[i];
            var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/" + movie.id);
            var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray.push(movieObj);
          }
          else {
            movie = movies[i];
           var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/"+movie.id);
           var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray2.push(movieObj);
          }
        }

        $scope.movies = movieObjsArray;
        $scope.movies2 = movieObjsArray2;

        console.log(movieObjsArray);
        console.log(movieObjsArray2);


      }, function errorCallback(response) {
        console.log("error");
        console.log(response);
      });
});


myapp.controller('comingsoontrailers', function($scope, $http, $sce){

  $scope.showMe = false;
    $scope.myFunc = function(movie) {
        $scope.showMe = !$scope.showMe;
        $scope.movie = movie;
    }
    $scope.mysecondFunc = function(movie) {
        $scope.showMe = !$scope.showMe;
        $scope.movie = movie;
    }

   $http({
      method: 'GET',
      url: 'https://themovieclips.p.mashape.com/trailers?limit=10',
      headers: { 'X-Mashape-Key' : 'API_KEY' }
      }).then(function successCallback(response) {
        console.log("success");
        console.log("success from comingsoontrailers controller");

        var movies = response.data;
        var movieObjsArray = [];
        var movieObjsArray2 = [];

        for (var i=0; i < 8; i++){
          if (i<4){
            movie = movies[i];
            var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/" + movie.id);
            var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray.push(movieObj);
          }
          else {
            movie = movies[i];
           var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/"+movie.id);
           var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray2.push(movieObj);
          }
        }

        $scope.movies = movieObjsArray;
        $scope.movies2 = movieObjsArray2;

        console.log(movieObjsArray);
        console.log(movieObjsArray2);
        
      }, function errorCallback(response) {
        console.log("error");
        console.log(response);
      });
});


myapp.controller('populartrailers', function($scope, $http, $sce){

  $scope.showMe = false;
  $scope.myFunc = function(movie) {
      $scope.showMe = !$scope.showMe;
      $scope.movie = movie;
  }
  $scope.mysecondFunc = function(movie) {
      $scope.showMe = !$scope.showMe;
      $scope.movie = movie;
  }

   $http({
      method: 'GET',
      url: 'https://themovieclips.p.mashape.com/popular?limit=10',
      headers: { 'X-Mashape-Key' : 'API_KEY' }
      }).then(function successCallback(response) {
        console.log("success from populartrailers controller");
        console.log("success");

        var movies = response.data;
        var movieObjsArray = [];
        var movieObjsArray2 = [];

        for (var i=0; i < 8; i++){
          if (i<4){
            movie = movies[i];
            var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/" + movie.id);
            var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray.push(movieObj);
          }
          else {
            movie = movies[i];
           var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/"+movie.id);
           var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray2.push(movieObj);
          }
        }

        $scope.movies = movieObjsArray;
        $scope.movies2 = movieObjsArray2;

        console.log(movieObjsArray);
        console.log(movieObjsArray2);

        
      }, function errorCallback(response) {
        console.log("error");
        console.log(response);
      });
});

myapp.controller('searchByTitle', function($scope, $http, $sce){

  $scope.toggleResultsDiv = false;
  $scope.showMe = false;
  $scope.myFunc = function(movie) {
      $scope.showMe = !$scope.showMe;
      $scope.movie = movie;
  }
  $scope.mysecondFunc = function(movie) {
      $scope.showMe = !$scope.showMe;
      $scope.movie = movie;
  }


  // $scope.showMore = false;
  // $scope.myFunction = function(movie) {
  //     $scope.showMore = !$scope.showMore;
  //     $scope.movie = movie;
  // }
  // $scope.mysecondFunc = function(movie) {
  //     $scope.showMore = !$scope.showMore;
  //     $scope.movie = movie;
  // }


  $scope.toggleSearchResults = function(){
    $scope.toggleResultsDiv = true;
    var title = $scope.title;
    console.log(title);

    $http({
      method: 'GET',
      url: 'https://themovieclips.p.mashape.com/trailers?limit=10&title='+title,
      headers: { 'X-Mashape-Key' : 'API_KEY' }
      }).then(function successCallback(response) {
        console.log("success");
        $scope.search = $scope.title;
        console.log(response);

        var movies = response.data;
        var movieObjsArray = [];
        var movieObjsArray2 = [];

        for (var i=0; i < 8; i++){
          if (i<4){
            movie = movies[i];
            var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/" + movie.id);
            var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray.push(movieObj);
          }
          else if (i > 3 && i < 8){
            movie = movies[i];
            var url = $sce.trustAs($sce.RESOURCE_URL, "https://www.themovieclips.com/embed/"+movie.id);
            var image = movie.thumb.small;
            var title = movie.movie.title;
            var plot = movie.movie.plot;
            var genre = movie.movie.genre;
            var rating = movie.movie.rating;
            var year = movie.movie.year;
            var imdb_rating = movie.movie.imdb_rating;
            var readibleUrl = "https://www.themovieclips.com/embed/" + movie.id;


            movieObj = {
              'image': image,
              'title': title, 
              'url': url,
              'plot': plot,
              'genre': genre,
              'rating': rating,
              'year': year,
              'imdb_rating': imdb_rating,
              'readibleUrl': readibleUrl
            };

            movieObjsArray2.push(movieObj);
          }
        }

        $scope.movies = movieObjsArray;
        $scope.movies2 = movieObjsArray2;

        console.log(movieObjsArray);
        console.log(movieObjsArray2);
        $scope.title = "";
        // debugger

      }, function errorCallback(response) {
        console.log("error");
        console.log(response);
        $scope.search = "Not found, please enter a new title.";
    });
  };
});

// here you can save and delete your trilers!
myapp.controller('myOwnTrailers', function($scope, $http, $sce){
  
  // $scope.toggleResultsDiv = false;
  // $scope.showMe = false;
  // $scope.myFunc = function(movie) {
  //     $scope.showMe = !$scope.showMe;
  //     $scope.movie = movie;
  // }
  // $scope.mysecondFunc = function(movie) {
  //     $scope.showMe = !$scope.showMe;
  //     $scope.movie = movie;
  // }

  var refresh = function(){
  
    $http.get('/trailers').success(function(response){
      console.log("I got the data I requested fom http.get refresh function");
      var movieObjsArray = [];
      for (var i = 0; i < response.length; i++){
        var movie = response[i];

        var url = $sce.trustAs($sce.RESOURCE_URL, movie.readibleUrl);
        var image = movie.image;
        var title = movie.title;
        var plot = movie.plot;
        var genre = movie.genre;
        var rating = movie.rating;
        var year = movie.year;
        var imdb_rating = movie.imdb_rating;
        var id = movie._id;
        console.log(i);
        // debugger
        var movieObj = {
          'id': id,
          'image': image,
          'title': title, 
          'url': url,
          'plot': plot,
          'genre': genre,
          'rating': rating,
          'year': year,
          'imdb_rating': imdb_rating
        };
        movieObjsArray.push(movieObj);
        // debugger
      }
      // debugger
      $scope.myOwnTrailersList = movieObjsArray;
      // debugger
    });
  };

  refresh();



  $scope.deleteTrailer = function(movie){
    id = movie.id;
    debugger
    console.log(id);
    $http.delete('/trailers/'+id).success(function(response){
      refresh();
    });
  };

  $scope.saveTrailer = function(movie){
    console.log("message from saveTrailer controller--------------------> LOOK HERE!");
    console.log(movie);
    $http.post('/trailers', movie).success(function(response){
      console.log(response);
      refresh();
    });
  };

});


myapp.controller('controllerSearchResults', function($scope, $http, $sce){
   $scope.showMore = false;
  $scope.myFunction = function(movie) {
      $scope.showMore = !$scope.showMore;
      $scope.movie = movie;
  }
  $scope.mysecondFunc = function(movie) {
      $scope.showMore = !$scope.showMore;
      $scope.movie = movie;
  }

});



// myapp.controller('appController', function($scope, $http){
//   console.log("success from appController contact list controller");

//   var refresh = function(){
//     $http.get('/contactlist').success(function(response){
//       console.log("I got the data I requested fom http.get conatact list controller");
//       $scope.contactlist = response;
//       $scope.contact = "";
//     });
//   };
//   refresh();

//   $scope.addContact = function(){
//     console.log($scope.contact);
//     $http.post('/contactlist', $scope.contact).success(function(response){
//       console.log(response);
//       refresh();
//     });
//   };

//   $scope.remove = function(id){
//     console.log(id);
//     $http.delete('/contactlist/'+id).success(function(response){
//       refresh();
//     });
//   };

//   $scope.edit = function(id){
//     console.log("id to edit: " + id);
//     $http.get('/contactlist/'+id).success(function(response){
//       $scope.contact = response;
//     });
//   };

//   $scope.update = function(){
//     console.log("Controller side: " + $scope.contact._id);
//     $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
//       refresh();
//     });
//   };

//   $scope.deselect = function(){
//     $scope.contact = "";
//   };
 
// });