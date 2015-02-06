define([
    'angular'
], function() {

    var module = angular.module('directives');

    module.directive('gySwitch', function() {
        return {
            restrict: 'EA',
            replace: true,
            template: '' +
            	'<div class="ui slider checkbox">' +
					'<input type="checkbox">' +
					'<label>{[{ gyModel.label }]}</label>' +
				'</div>',
            scope: {
                gyModel: '='
            },
            link: function(scope, element, attrs) {
            	var $checkbox = $(element).find('input');
                $(element).checkbox({
                	onChange: function () {
                		scope.gyModel.value = $checkbox.prop('checked');
                	}
                });
            }
        };
    });
});
