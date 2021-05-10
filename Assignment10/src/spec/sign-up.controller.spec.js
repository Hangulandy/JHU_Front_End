describe('SignUpController', function () {

  beforeEach(module('common'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    signUpCtrl = $controller('SignUpController');
  }));

  it('should be able to get the item A5', function() {
    signUpCtrl.info.favorite = "A5";
    signUpCtrl.checkFavorite();
    expect(signUpCtrl.doesNotExist).toEqual(false);
  });

  it('should not be able to get the item X5', function() {
    signUpCtrl.info.favorite = "X5";
    signUpCtrl.checkFavorite();
    expect(signUpCtrl.doesNotExist).toEqual(true);
  });

  }

});
