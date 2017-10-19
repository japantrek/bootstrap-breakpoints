(function($) {
    $('body')
        .append('<div class="device-xs visible-xs"></div>')
        .append('<div class="device-sm visible-sm"></div>')
        .append('<div class="device-md visible-md"></div>')
        .append('<div class="device-lg visible-lg"></div>')
        .append('<div class="device-xl visible-xl"></div>');

    window.isBreakpoint = function ( alias ) {
        return $('.device-' + alias).is(':visible');
    }
})(jQuery);
