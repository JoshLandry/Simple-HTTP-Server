'use strict';

require('../httpserver.js');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);

var expect = chai.expect;

describe('our http server', function() {
	var server = 'localhost:3000';

	it('should give the server time', function(done) {
		chai.request(server)
			.get('/time')
			.end(function(err, res) {
				var sysDateTime = new Date();
				expect(err).to.eql(null);
				expect(res).to.have.status(200);
				expect(res.text).to.eql(sysDateTime.toString() + '\n');
				done();
		});
	});

	it('should greet the user by name', function(done) {
		chai.request(server)
			.get('/greet/Petey')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res).to.have.status(200);
				expect(res.text).to.eql('Hello Petey\n');
				done();
		});
	});

	it('should have a default route', function(done) {
		chai.request(server)
			.get('/some_other_route')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res).to.have.status(200);
				expect(res.text).to.eql('did not hit a route\n');
				done();
		});
	});
});