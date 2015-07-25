"use strict";

/**
 * Created by liomka on 03/07/2014.
 */

$(document).ready(function () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
        return;

    if ($.support.animation === undefined)
        return;

    // Init Vars
    var entriesDetails = $('#cv').find('li .entry-details');

    // Init DOM
    entriesDetails.css({ opacity: '0', left: '50%'});
    
    entriesDetails.each( function() {
        var entry = $(this);

        new Waypoint({
            element: entry,
            handler: function (direction) {
                if (direction == 'down')
                    entry.css({opacity: '0', left: '50%'})
            },
            offset: -entry.height()
        });

        new Waypoint({
            element: entry,
            handler: function (direction) {
                if (direction == 'up')
                    entry.animate({left: '0%', opacity: '1'}, 1000, 'easeOutExpo');
            },
            offset: -(entry.height() - 40 )
        });

        new Waypoint({
            element: entry,
            handler: function (direction) {
                if (direction == 'down')
                    entry.animate({left: '0%', opacity: '1'}, 1000, 'easeOutExpo');
            },
            offset: $(window).height() - 40
        });

        new Waypoint({
            element: entry,
            handler: function (direction) {
                if (direction == 'up')
                    entry.css({opacity: '0', left: '50%'})
            },
            offset: $(window).height()
        });
    });
});
