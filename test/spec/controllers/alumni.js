'use strict';

describe('Controller: AlumniCtrl', function () {

  // load the controller's module
  beforeEach(module('analyticsApp'));

  var AlumniCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlumniCtrl = $controller('AlumniCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlumniCtrl.awesomeThings.length).toBe(3);
  });
});
