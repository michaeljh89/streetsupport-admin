var ko = require('knockout')
var Address = require('../Address')
var BaseViewModel = require('../BaseViewModel')
var browser = require('../../browser')
var adminurls = require('../../admin-urls')
var getUrlParameter = require('../../get-url-parameter')

function AddServiceProviderAddress () {
  var self = this
  var address = new Address({})
  address.addListener(self)
  self.address = ko.observable(address)

  self.saveAddress = function (address) {
    browser.redirect(adminurls.serviceProviders + '?key=' + getUrlParameter.parameter('providerId'))
  }
}

AddServiceProviderAddress.prototype = new BaseViewModel()

module.exports = AddServiceProviderAddress
