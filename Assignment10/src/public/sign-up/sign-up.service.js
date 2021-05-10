(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;
  var info;

  service.setInfo = function(info) {
    service.info = info;
  }

  service.getInfo = function() {
    return service.info;
  }

}

})();
