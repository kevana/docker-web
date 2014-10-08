angular.module('dockerApp', [])
	.controller('dockerController', ['$scope', function($scope) {
		$scope.ipAddrs = [
			'192.168.10.20',
			'192.168.10.21',
			'192.168.10.22',
			'192.168.10.23',
			'192.168.10.24',
			'192.168.10.25',
			'192.168.10.26',
			'192.168.10.27',
			'192.168.10.28',
			'192.168.10.29'
		];

		$scope.images = [
			'bsb-web-docker-feature_checkoutcredituserflow_gettington_test2',
			'bsb-web-docker-develop_fingerhut_stage',
			'bsb-web-docker-feature_honors_gettington_test2',
			'bsb-web-docker-feature_checkout-shipping-address_gettington_test2',
			'bsb-web-docker-master_gettington_test2',
			'bsb-web-docker-feature_richrelevance-defaultforcedtreatment_gettington_test2',
			'bsb-web-docker-feature_quick-view-site-param_gettington_test2',
			'bsb-web-docker-feature_multiple_credit_display_gettington_test2'
		];
	}]);
