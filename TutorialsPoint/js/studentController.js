  /*
    Controller Modülü : Burada mainApp.controller fonk. kullanarak bir controller studentController modülü açıkladık.
  */
mainApp.controller("studentController", function($scope){
  $scope.student = {
    firstName   : "Kamil",
    lastName    : "KAPLAN",
    University  : "Fırat Üniversitesi",
    fees        : 2800,

    subjects    : [
      {name : "Algo1", marks : 'BA'},
      {name : "BBG", marks : 'BA'},
      {name : "Algo2", marks : 'CB'},
      {name : "YMT", marks : 'CB'},
      {name : "VeriYap.", marks :'AA'},
      {name : "AlgoAnaliz.", marks :'CB'}
    ],

    fullName : function() {
      var studentObject;
      studentObject = $scope.student;
      return studentObject.firstName + " " + studentObject.lastName + " - " +  studentObject.University;
    }
  };
});
