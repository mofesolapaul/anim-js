/**!!
 * @author
 * Banjo Mofesola Paul
 * Chief Developer, Planet NEST
 * mofesolapaul@planetnest.org
 * Tuesday, February 28, 2017
 */

$(function() {

    $('.anim-js').each(function() {
        var data = $(this).data();

        data.ajsDuration? $(this).css({animationDuration: data.ajsDuration}) : null;
        data.ajsLoop? $(this).css({animationIterationCount: data.ajsLoop}) : null;
        data.ajsDelay? $(this).css({animationDelay: data.ajsDelay}) : null;

        $(this).removeClass('anim-js').addClass('animated');
    });

});
