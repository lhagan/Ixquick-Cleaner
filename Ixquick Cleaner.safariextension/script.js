// Ixquick Cleaner.safariextension
// by Luke Hagan <lukehagan.com>
// created: 2012-06-18
// released under the MIT license (see LICENSE.md for details)

$(document).ready(function() {
    var elems = $('#results .result h3 a');
    elems.removeAttr('onMouseOver').removeAttr('onMouseOut').removeAttr('onClick');
    elems.parent().parent().click(function() {
        window.location = $('h3 a', this).attr('href');
    });
});
