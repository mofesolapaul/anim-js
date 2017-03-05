/*! anim-js | Banjo Mofesola Paul | 2017-03-05 */
$(function(){$(".anim-js").each(function(){var a=$(this).data();a.ajsDuration&&$(this).css({animationDuration:a.ajsDuration}),a.ajsLoop&&$(this).css({animationIterationCount:a.ajsLoop}),a.ajsDelay&&$(this).css({animationDelay:a.ajsDelay}),$(this).removeClass("anim-js").addClass("animated")})});
