const assert = require('assert'); 
const { Given, When, Then } = require('cucumber');

Given('a number set to {int}',function(number) {
  this.setTo(number);
});

When('I increment the number by {int}', function(number) {
  this.increateBy(number);
});

Then('the number should contain {int}', function(number) {
  assert.equal(this.number, number, `预计结果为${number}, 但实际结果为${this.number}`);
});
