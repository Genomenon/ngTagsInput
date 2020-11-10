'use strict';

/**
 * @ngdoc directive
 * @name tiAutocompleteMessage
 * @module ngTagsInput
 *
 * @description
 * Represents an autocomplete "message". Used internally by the autoComplete directive.
 * (Allows for arbitrary content injection at the head of the suggestions list.)
 */
tagsInput.directive('tiAutocompleteMessage', function($sce, tiUtil) {
    return {
        restrict: 'E',
        require: '^autoComplete',
        template: '<ng-include src="$$template"></ng-include>',
        scope: {
            $scope: '=scope',
            data: '=',
            selected: '<'
        },
        link: function(scope, element, attrs, autoCompleteCtrl) {
            var autoComplete = autoCompleteCtrl.registerAutocompleteMatch(),
                options = autoComplete.getOptions();

            scope.$$template = options.messageTemplate;
            scope.$index = scope.$parent.$index;
        }
    };
});
