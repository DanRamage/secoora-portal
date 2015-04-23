jQuery(document).ready(function($) {
    $('.popover-link').each(function() {
        $(this).popover({
            html: true,
            trigger: 'manual'
        }).click(function(e) {
            $(this).popover('toggle');
            $('.close').remove();
            $('.popover-title').append('<button type="button" class="close">&times;</button>');
            $('.close').click(function(e){
                $(this).parents('.popover').remove();
            });
        });
    });
});