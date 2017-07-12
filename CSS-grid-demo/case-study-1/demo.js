(function($) {
    "use strict";
    var $document = $(document);
    var $html = $(document.documentElement);
    
    $document.on("click", ".demo-controls .example-switch", function() {
        var demoId = $(this).parents(".demo-section").attr("id");
        var demo = $("#" + demoId);
        var switches = $(this).parents(".demo-controls").find(".example-switch");
        var newClass = $(this).data("example-class");
        demo.removeClass("example-1 example-2 example-3 example-4 example-5 example-6 example-7").addClass(newClass);
        switches.removeClass("active");
        $(this).addClass("active");
        window.dataLayer.push({
            eAction: "button click",
            eLabel: demoId + " - " + newClass,
            event: "in-page-interaction"
        })
    });
    var $fxdownload = $("#download-firefox");
    var buttonClose = '<button type="button" class="close" title="' + utils.trans("global-close") + '">' + utils.trans("global-close") + "</button>";
    if (tallMode) {
        initStickyBar();
        var unstickBarWaypoint = new Waypoint({
            element: $("#colophon"),
            offset: "102%",
            handler: function(direction) {
                if (direction === "down" && !$html.hasClass("download-closed")) {
                    $fxdownload.removeClass("stuck").removeAttr("style").find(".close").remove()
                } else if (direction === "up" && !$html.hasClass("download-closed")) {
                    $fxdownload.addClass("stuck").append(buttonClose);
                    initUnstickBar()
                }
            }
        })
    }
    function initStickyBar() {
        setTimeout(function() {
            $fxdownload.addClass("stuck").append(buttonClose).css({
                bottom: "-" + $fxdownload.height() + "px"
            }).animate({
                bottom: "0"
            }, 750);
            initUnstickBar()
        }, 500)
    }
    function initUnstickBar() {
        $("#download-firefox button.close").on("click", function() {
            $fxdownload.animate({
                bottom: "-" + $fxdownload.height() + "px"
            }, 500, function() {
                $fxdownload.removeClass("stuck").removeAttr("style").find(".close").remove()
            });
            $html.addClass("download-closed")
        })
    }
    $(document).click(function(e) {
        if (e.button === 2) {
            window.dataLayer.push({
                eAction: "click",
                eLabel: "Right click",
                event: "in-page-interaction"
            })
        }
    })
})(window.jQuery);