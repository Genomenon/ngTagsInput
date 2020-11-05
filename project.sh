MM_ASSETS=${MM_ASSETS:-../mastermind/vendor/assets}

mminstall() {
  set -x
  grunt pack --force
  cp build/ng-tags-input.min.js ${MM_ASSETS}/javascripts/ng-tags-input.js
  cp build/ng-tags-input.min.css ${MM_ASSETS}/stylesheets/ng-tags-input.css
}

mminstalldev() {
  set -x
  grunt pack --force
  cp build/ng-tags-input.js ${MM_ASSETS}/javascripts/ng-tags-input.js
  cp build/ng-tags-input.css ${MM_ASSETS}/stylesheets/ng-tags-input.css
}