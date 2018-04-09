var app = angular.module('bcmApp', ['ngRoute', '720kb.tooltips']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'IndexController',
			template : '<div></div>'
		})
		.when('/step1', {
			templateUrl: 'app/views/step1.html',
			controller: 'Step1Controller'
		})
		.when('/step2', {
			templateUrl: 'app/views/step2.html',
			controller: 'Step2Controller'
		})
		.when('/step3', {
			templateUrl: 'app/views/step3.html',
			controller: 'Step3Controller'
		})
		.when('/step4', {
			templateUrl: 'app/views/step4.html',
			controller: 'Step4Controller'
		})
		.when('/complete', {
			templateUrl: 'app/views/complete.html',
			controller: 'CompleteController'
		});
});


app.run(function ($rootScope, $location, $window, LocalSettings) {
	window.onbeforeunload = function (event) {		
		if ($location.path() == '/') {
			// Ignore on root
			return;
		}

		var message = '진행중인 상황이 모두 사라집니다. 정말 나가시겠습니까?';
		if (typeof event == 'undefined')
			event = window.event;
		if (event)
			event.returnValue = message;
		
		return message;
	}

	$rootScope.$on('$routeChangeSuccess', function () {
		$rootScope.location = $location.path();
		$window.scrollTo(0, 0);
	});

	$rootScope.data = data; // By data.js
	$rootScope.settings = {};

	$rootScope.currencies = [
		{'id': 'BTC',  'title': '비트코인', 'price': 8000 * 1000, 'selected': true},
		{'id': 'ETH',  'title': '이더리움', 'price': 440 * 1000, 'selected': true},
		{'id': 'XRP',  'title': '리플', 	 'price': 600},
		{'id': 'LTC',  'title': '라이트코인', 'price': 130 * 1000},
		{'id': 'QTUM', 'title': '퀀텀',	  'price': 15 * 1000}
	];

	function initSettings() {
		$rootScope.settings = {
			'blocktime': 60,
			'reward': 10,
			'halflife': 12,
			'totalAmount': 10000,
			'initialOwnsRatio': 30
		};
		LocalSettings.save();
	}

	$rootScope.nextStep = function() {
		switch ($rootScope.page) {
			case 'step1' :
				initSettings();
				$location.path('/step2');
				break;

			case 'step2' :
				LocalSettings.save();
				$location.path('/step3');
				break;

			case 'step3' :
				LocalSettings.save();
				$location.path('/step4');
				break;

			case 'step4' :
				LocalSettings.save();
				$location.path('/complete');
				break;
		}

		console.log($rootScope.page);
	}
});



app.controller('IndexController', function ($location) {
	console.log('index');
	$location.path('/step1');
});

app.controller('Step1Controller', function ($scope, $rootScope, LocalSettings) {
	$rootScope.page = 'step1';
});

app.controller('Step2Controller', function ($scope, $rootScope, NextSectionOpener) {
	$rootScope.page = 'step2';

	var usagesFlatted = $rootScope.data.usagesFlatted;

	$scope.selectType = function(value) {
		$rootScope.settings.type = value;
		$rootScope.settings.private = undefined;
		$rootScope.settings.platform = undefined;
		$rootScope.settings.powpos = undefined;

		$scope.publicAvailable =  ['any', 'public'].indexOf(usagesFlatted[value.name].availables.private) != -1;
		$scope.privateAvailable = ['any', 'private'].indexOf(usagesFlatted[value.name].availables.private) != -1;

		NextSectionOpener.open('select-private', 2);
	}

	$scope.selectPrivate = function(value, $event) {
		if ($($event.currentTarget).hasClass('disabled')) return;
		
		$rootScope.settings.private = value;
		$rootScope.settings.platform = undefined;
		$rootScope.settings.powpos = undefined;

		$scope.platformAvailable = (value != 'PRIVATE' && usagesFlatted[$rootScope.settings.type.name].availables.platform);
		$scope.platformUnableCause = (value == 'PRIVATE') ? 'private' : 'usage';

		NextSectionOpener.open('select-platform', 3);
	}

	$scope.selectPlatform = function(value, $event) {
		if ($($event.currentTarget).hasClass('disabled')) return;

		$rootScope.settings.platform = value;
		$rootScope.settings.powpos = undefined;

		NextSectionOpener.open('select-powpos', 4);
	}

	$scope.selectPowpos = function(value, $event) {
		if ($($event.currentTarget).hasClass('disabled')) return;

		$rootScope.settings.powpos = value;
		NextSectionOpener.open('other-setttings', 6);
		$('section#next').show('slow');
	}


	
});


app.controller('Step3Controller', function ($scope, $rootScope, LocalSettings, NextSectionOpener) {
	$rootScope.page = 'step3';
	LocalSettings.load();

	var k = $rootScope.data.pureKoreans;
	var ks = k[Math.floor(Math.random() * k.length)];

	$rootScope.settings.name = ks[0];
	$rootScope.settings.code = ks[1];

	$scope.makeCoin = function() {
		$rootScope.settings.initialOwns = $rootScope.settings.initialOwnsRatio / 100 * $rootScope.settings.totalAmount;
		$rootScope.settings.code = $rootScope.settings.code.toUpperCase();

		NextSectionOpener.open('test');

		for (var i = 1; i <= 5; i++) {
			setTimeout((function(x) {
				return function() {
					$('section#test p.s' + x).show('slow');
				}
			})(i), 1000 * i);
		}

		setTimeout(function() {
			$('#result .progress .bar .progressed').css('width', $rootScope.settings.initialOwnsRatio / 100 * 600);
			NextSectionOpener.open('result');
		}, 6000);
	}
});


app.controller('Step4Controller', function ($scope, $rootScope, LocalSettings, NextSectionOpener) {
	$rootScope.page = 'step4';
	LocalSettings.load();

	$rootScope.settings.price = 500;
	$rootScope.settings.icoNumber = $rootScope.settings.initialOwns / 2;

	$rootScope.settings.wallets = {
		'BTC': '16izr4mGvcesiE12MF5rgVkUQFB11eLt2K',
		'ETH': '0x2ff8051cf4857404e20e4357a2824cf23b076c65',
		'XRP': 'rp2diYfVtpbgEMyaoWnuaWgFCAkqCAEg28/1097404924',
		'LTC': 'LT8De9w4KAyCiPGpEyHggc8JRWTwM5JpTQ',
		'QTUM': 'QaQ1HUVFyreNk6m7U8KoMyxjbp8kBfQnWw',
	};

	$scope.showCurrencySection = function() {
		NextSectionOpener.open('currency');
	};

	$scope.showWalletSection = function() {
		NextSectionOpener.open('wallets');
	};

	$scope.showResult = function() {
		NextSectionOpener.open('result');
	};

	$scope.useCurrency = function(currency) {
		currency.selected = !currency.selected;
	};
});


app.factory('LocalSettings', function ($rootScope, $window) {
	return {
		'load': function () {
			var settings = $window.localStorage.getItem('settings');

			if (settings) {
				settings = JSON.parse(settings);
				if (settings)
					$rootScope.settings = settings;
			}
		},
		'save': function() {
			$window.localStorage.setItem('settings', JSON.stringify($rootScope.settings));
		}
	};
});


app.factory('NextSectionOpener', function () {
	return {
		'open': function (sectionId, level) {
			// Use jQuery
			$('section#' + sectionId).show('slow');

			$('html, body').animate({
				scrollTop: $('section#' + sectionId).offset().top
			}, 1000);

			if (level) {
				for (var i = level+1; i < 10; i++)
					$('section.section' + i).hide();
			}
		}
	};
});


app.controller('CompleteController', function ($scope, $rootScope, LocalSettings) {
	$rootScope.page = 'home';
	LocalSettings.load();
});
