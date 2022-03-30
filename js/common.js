import Vue from "vue";
import axios from "axios";
import $ from "jquery";
import {initFbsdk} from "./fb.js";
import {LoaderPlugin} from "vue-google-login";
import "../../public/frontassets/js/mmenu.min.js";

// console.log('location.hostname::')
// console.log(location.hostname)

let client_id = "";
if (location.hostname == "127.0.0.1") {
    // local developers site
    client_id =
        "825941957617-i1dbptj58bep2ucb0g3s5v9jdqd1j79k.apps.googleusercontent.com";
}
if (location.hostname == "streamgeeks-rebranded-dev.cloudns.cl") {
    // remote dev site
    client_id =
        "825941957617-qmc6ncbsn13i1vrjaf1idkf5hgcsfkng.apps.googleusercontent.com";
}
Vue.use(LoaderPlugin, {
    client_id: client_id
});
export default {
    data() {
        return {
            isLoadingFooter: false,
            fullPageFooter: true,
            full_name: localStorage.getItem("sgname"),
            userprofilepic: window.local_image_path + "user-avatar-small-01.jpg"
        };
    },
    components: {
        initFbsdk,
        LoaderPlugin
    },
    created: function () {
        var pimg = "";
        if (localStorage.getItem("sgphoto") != null) {
            if (
                localStorage.getItem("sgphoto") != "" &&
                localStorage.getItem("sgphoto") != "null"
            ) {
                pimg = window.image_path + localStorage.getItem("sgphoto");
            } else {
                pimg = window.local_image_path + "user-avatar-small-01.jpg";
            }
        } else {
            pimg = window.local_image_path + "user-avatar-small-01.jpg";
        }
        this.userprofilepic = pimg;
    },
    methods: {
        callApi(method, url, dataobj = "", token = "") {
            try {
                var token = "";
                if (localStorage.getItem("sgtoken") != null) {
                    token = localStorage.getItem("sgtoken");
                }

                return axios({
                    method: method,
                    url: url,
                    data: dataobj,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).catch(function (error) {
                    return error.response;
                });
            } catch (e) {
                return e.response;
            }
        },
        wrapperHeight() {
            var headerHeight = $("#header-container").outerHeight();
            var windowHeight = $(window).outerHeight() - headerHeight;
            $(
                ".full-page-content-container, .dashboard-content-container, .dashboard-sidebar-inner, .dashboard-container, .full-page-container"
            ).css({height: windowHeight});
            $(".dashboard-content-inner").css({"min-height": windowHeight});
        },
        fullPageScrollbar() {
            $(".full-page-sidebar-inner, .dashboard-sidebar-inner").each(
                function () {
                    var headerHeight = $("#header-container").outerHeight();
                    var windowHeight = $(window).outerHeight() - headerHeight;
                    var sidebarContainerHeight = $(this)
                        .find(".sidebar-container, .dashboard-nav-container")
                        .outerHeight();

                    // Enables scrollbar if sidebar is higher than wrapper
                    if (sidebarContainerHeight > windowHeight) {
                        $(this).css({height: windowHeight});
                    } else {
                        $(this)
                            .find(".simplebar-track")
                            .hide();
                    }
                }
            );
        },

        getErrorMessage(error) {

/*
            console.log('getErrorMessage error::')
            console.log(typeof error)
            console.log(error)
            console.log('getErrorMessage error.status::')
            console.log(error.status)
            console.log(typeof error.status)

            console.log('1 getErrorMessage error.response::')
            console.log(error.response)
            console.log('2 getErrorMessage error.status::')
            console.log(error.status)

            console.log('3 +++getErrorMessage error.data.errors::')
            console.log(error.data.errors)

*/

            if (typeof error.status != 'undefined' && typeof error.response != 'undefined' && error.status === 400) {
                if (typeof error.data.message != 'undefined') {
                    return "Validation error : " + error.data.message
                }
            }
            if (typeof error.status != 'undefined' && typeof error.response != 'undefined' && error.status === 500) {
                if (typeof error.data.message != 'undefined') {
                    return "Runtime error : " + error.data.message
                }
            }
            if (typeof error.status != 'undefined' && /*typeof error.response != 'undefined' && */ error.status === 422) {
                if (typeof error.data.message != 'undefined') {
                    // console.log(typeof error.data.errors)

                    if (typeof error.data.errors === 'object') {
                        let errorMessage = ''
                        for (var fieldName in error.data.errors) {
                            var value = error.data.errors[fieldName]
                            errorMessage += fieldName + " : " + value + '   '
                        }
                        return "Validation error : " + errorMessage

                    }
                    return "Validation error : " + error.data.message
                }
            }
            if (typeof error.data.exception != 'undefined') return error.data.exception
            if (typeof error.data.message != 'undefined') return error.data.exception
        },

        setStepForm() {
            //DOM elements
            const DOMstrings = {
                stepsBtnClass: "multisteps-form__progress-btn",
                stepsBtns: document.querySelectorAll(
                    `.multisteps-form__progress-btn`
                ),
                stepsBar: document.querySelector(".multisteps-form__progress"),
                stepsForm: document.querySelector(".multisteps-form__form"),
                stepsFormTextareas: document.querySelectorAll(
                    ".multisteps-form__textarea"
                ),
                stepFormPanelClass: "multisteps-form__panel",
                stepFormPanels: document.querySelectorAll(
                    ".multisteps-form__panel"
                ),
                stepPrevBtnClass: "js-btn-prev",
                stepNextBtnClass: "js-btn-next"
            };
            console.log(" setStepForm DOMstrings::");
            console.log(DOMstrings);

            //remove class from a set of items
            const removeClasses = (elemSet, className) => {
                elemSet.forEach(elem => {
                    elem.classList.remove(className);
                });
            };

            //return exect parent node of the element
            const findParent = (elem, parentClass) => {
                let currentNode = elem;
                while (!currentNode.classList.contains(parentClass)) {
                    currentNode = currentNode.parentNode;
                }
                return currentNode;
            };

            //get active button step number
            const getActiveStep = elem => {
                return Array.from(DOMstrings.stepsBtns).indexOf(elem);
            };

            //set all steps before clicked (and clicked too) to active
            const setActiveStep = activeStepNum => {
                //remove active state from all the state
                removeClasses(DOMstrings.stepsBtns, "js-active");
                //set picked items to active
                DOMstrings.stepsBtns.forEach((elem, index) => {
                    if (index <= activeStepNum) {
                        elem.classList.add("js-active");
                    }
                });
            };

            //get active panel
            const getActivePanel = () => {
                let activePanel;
                DOMstrings.stepFormPanels.forEach(elem => {
                    if (elem.classList.contains("js-active")) {
                        activePanel = elem;
                    }
                });
                return activePanel;
            };

            //open active panel (and close unactive panels)
            const setActivePanel = activePanelNum => {
                //remove active class from all the panels
                removeClasses(DOMstrings.stepFormPanels, "js-active");
                //show active panel
                DOMstrings.stepFormPanels.forEach((elem, index) => {
                    if (index === activePanelNum) {
                        elem.classList.add("js-active");
                        setFormHeight(elem);
                    }
                });
            };

            //set form height equal to current panel height
            const formHeight = activePanel => {
                const activePanelHeight = activePanel.offsetHeight;
                DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
            };

            const setFormHeight = () => {
                const activePanel = getActivePanel();
                formHeight(activePanel);
            };

            //STEPS BAR CLICK FUNCTION
            DOMstrings.stepsBar.addEventListener("click", e => {
                //check if click target is a step button
                const eventTarget = e.target;
                if (
                    !eventTarget.classList.contains(
                        `${DOMstrings.stepsBtnClass}`
                    )
                ) {
                    return;
                }
                //get active button step number
                const activeStep = getActiveStep(eventTarget);
                //set all steps before clicked (and clicked too) to active
                setActiveStep(activeStep);
                //open active panel
                setActivePanel(activeStep);
            });

            //PREV/NEXT BTNS CLICK
            DOMstrings.stepsForm.addEventListener("click", e => {
                const eventTarget = e.target;
                //check if we clicked on `PREV` or NEXT` buttons
                if (
                    !(
                        eventTarget.classList.contains(
                            `${DOMstrings.stepPrevBtnClass}`
                        ) ||
                        eventTarget.classList.contains(
                            `${DOMstrings.stepNextBtnClass}`
                        )
                    )
                ) {
                    return;
                }

                //find active panel
                const activePanel = findParent(
                    eventTarget,
                    `${DOMstrings.stepFormPanelClass}`
                );
                let activePanelNum = Array.from(
                    DOMstrings.stepFormPanels
                ).indexOf(activePanel);
                //set active step and active panel onclick
                if (
                    eventTarget.classList.contains(
                        `${DOMstrings.stepPrevBtnClass}`
                    )
                ) {
                    activePanelNum--;
                } else {
                    activePanelNum++;
                }
                setActiveStep(activePanelNum);
                setActivePanel(activePanelNum);

                setTimeout(() => {
                    var body = $(".dashboard-content-container");
                    body.stop().animate(
                        {scrollTop: 0},
                        500,
                        "swing",
                        function () {
                        }
                    );
                }, 100);
            });

            setTimeout(() => {
                setFormHeight();
            }, 500);
            //SETTING PROPER FORM HEIGHT ONLOAD
            window.addEventListener("load", setFormHeight, false);

            //SETTING PROPER FORM HEIGHT ONRESIZE
            window.addEventListener("resize", setFormHeight, false);

            //changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

            const setAnimationType = newType => {
                DOMstrings.stepFormPanels.forEach(elem => {
                    elem.dataset.animation = newType;
                });
            };

            //selector onchange - changing animation
            const animationSelect = document.querySelector(
                ".pick-animation__select"
            );
            if (animationSelect != null) {
                animationSelect.addEventListener("change", () => {
                    const newAnimationType = animationSelect.value;

                    setAnimationType(newAnimationType);
                });
            }
        },

        customJS() {
            var wi = $(window).width();

            /*if (wi <= "1099") {
                $(".mmenu-init").remove();
                $("#navigation")
                    .clone()
                    .addClass("mmenu-init")
                    .insertBefore("#navigation")
                    .removeAttr("id")
                    .removeClass("style-1 style-2")
                    .find("ul, div")
                    .removeClass(
                        "style-1 style-2 mega-menu mega-menu-content mega-menu-section"
                    )
                    .removeAttr("id");
                $(".mmenu-init")
                    .find("ul")
                    .addClass("mm-listview");
                $(".mmenu-init")
                    .find(".mobile-styles .mm-listview")
                    .unwrap();

                $(".mmenu-init").mmenu(
                    {
                        counters: true
                    },
                    {
                        // configuration
                        offCanvas: {
                            pageNodetype: "#wrapper"
                        }
                    }
                );

                var mmenuAPI = $(".mmenu-init").data("mmenu");
                var $icon = $(".mmenu-trigger .hamburger");

                $(".mmenu-trigger").on("click", function() {
                    mmenuAPI.open();
                });
            }
            $(".mm-next").addClass("mm-fullsubopen");*/

            /*--------------------------------------------------*/
            /*  Transparent Header Spacer Adjustment
	          /*--------------------------------------------------*/
            var transparentHeaderHeight = $(
                ".transparent-header"
            ).outerHeight();
            $(".transparent-header-spacer").css({
                height: transparentHeaderHeight
            });

            /*--------------------------------------------------*/
            /*  Ripple Effect
	          /*--------------------------------------------------*/
            $(".ripple-effect, .ripple-effect-dark").on("click", function (e) {
                var rippleDiv = $('<span class="ripple-overlay">'),
                    rippleOffset = $(this).offset(),
                    rippleY = e.pageY - rippleOffset.top,
                    rippleX = e.pageX - rippleOffset.left;

                rippleDiv
                    .css({
                        top: rippleY - rippleDiv.height() / 2,
                        left: rippleX - rippleDiv.width() / 2
                        // background: $(this).data("ripple-color");
                    })
                    .appendTo($(this));

                window.setTimeout(function () {
                    rippleDiv.remove();
                }, 800);
            });

            /*--------------------------------------------------*/
            /*  Interactive Effects
	          /*--------------------------------------------------*/
            $(".switch, .radio").each(function () {
                var intElem = $(this);
                intElem.on("click", function () {
                    intElem.addClass("interactive-effect");
                    setTimeout(function () {
                        intElem.removeClass("interactive-effect");
                    }, 400);
                });
            });

            /*--------------------------------------------------*/
            /*  Sliding Button Icon
	          /*--------------------------------------------------*/

            $(".button.button-sliding-icon")
                .not(".task-listing .button.button-sliding-icon")
                .each(function () {
                    var buttonWidth = $(this).outerWidth() + 30;
                    $(this).css("width", buttonWidth);
                });

            /*--------------------------------------------------*/
            /*  Sliding Button Icon
	          /*--------------------------------------------------*/
            $(".bookmark-icon").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("bookmarked");
            });

            $(".bookmark-button").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("bookmarked");
            });

            $(".heart-icon").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("heart_add");
            });

            $(".like-button").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("liked");
            });

            /*----------------------------------------------------*/
            /*  Notifications Boxes
	          /*----------------------------------------------------*/
            $("a.close")
                .removeAttr("href")
                .on("click", function () {
                    function slideFade(elem) {
                        var fadeOut = {
                            opacity: 0,
                            transition: "opacity 0.5s"
                        };
                        elem.css(fadeOut).slideUp();
                    }

                    slideFade($(this).parent());
                });

            /*--------------------------------------------------*/
            /*  Notification Dropdowns
	          /*--------------------------------------------------*/
            $(".header-notifications").each(function () {
                var userMenu = $(this);
                var userMenuTrigger = $(this).find(
                    ".header-notifications-trigger a"
                );

                $(userMenuTrigger).on("click", function (event) {
                    event.preventDefault();

                    if (
                        $(this)
                            .closest(".header-notifications")
                            .is(".active")
                    ) {
                        close_user_dropdown();
                    } else {
                        close_user_dropdown();
                        userMenu.addClass("active");
                    }
                });
            });

            // Closing function
            function close_user_dropdown() {
                $(".header-notifications").removeClass("active");
            }

            // Closes notification dropdown on click outside the conatainer
            var mouse_is_inside = false;

            $(".header-notifications").on("mouseenter", function () {
                mouse_is_inside = true;
            });
            $(".header-notifications").on("mouseleave", function () {
                mouse_is_inside = false;
            });

            $("body").mouseup(function () {
                if (!mouse_is_inside) close_user_dropdown();
            });

            // Close with ESC
            $(document).keyup(function (e) {
                if (e.keyCode == 27) {
                    close_user_dropdown();
                }
            });

            /*--------------------------------------------------*/
            /*  User Status Switch
	          /*--------------------------------------------------*/
            if (
                $(".status-switch label.user-invisible").hasClass(
                    "current-status"
                )
            ) {
                $(".status-indicator").addClass("right");
            }

            $(".status-switch label.user-invisible").on("click", function () {
                $(".status-indicator").addClass("right");
                $(".status-switch label").removeClass("current-status");
                $(".user-invisible").addClass("current-status");
            });

            $(".status-switch label.user-online").on("click", function () {
                $(".status-indicator").removeClass("right");
                $(".status-switch label").removeClass("current-status");
                $(".user-online").addClass("current-status");
            });

            // Sliding Sidebar
            $(".enable-filters-button").on("click", function () {
                $(".full-page-sidebar").toggleClass("enabled-sidebar");
                $(this).toggleClass("active");
                $(".filter-button-tooltip").removeClass("tooltip-visible");
            });

            /*  Enable Filters Button Tooltip */
            $(".filter-button-tooltip")
                .css({
                    left: $(".enable-filters-button").outerWidth() + 48
                })
                .addClass("tooltip-visible");

            // Avatar Switcher
            var readURL = function (input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $(".profile-pic").attr("src", e.target.result);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            };

            $(".file-upload").on("change", function () {
                readURL(this);
            });

            $(".upload-button").on("click", function () {
                $(".file-upload").click();
            });

            /*----------------------------------------------------*/
            /* Dashboard Scripts
	          /*----------------------------------------------------*/

            // Dashboard Nav Submenus
            $(".dashboard-nav ul li a").on("click", function (e) {
                if (
                    $(this)
                        .closest("li")
                        .children("ul").length
                ) {
                    if (
                        $(this)
                            .closest("li")
                            .is(".active-submenu")
                    ) {
                        $(".dashboard-nav ul li").removeClass("active-submenu");
                    } else {
                        $(".dashboard-nav ul li").removeClass("active-submenu");
                        $(this)
                            .parent("li")
                            .addClass("active-submenu");
                    }
                    e.preventDefault();
                }
            });

            // Responsive Dashbaord Nav Trigger
            $(".dashboard-responsive-nav-trigger").on("click", function (e) {
                e.preventDefault();
                $(this).toggleClass("active");

                var dashboardNavContainer = $("body").find(".dashboard-nav");

                if ($(this).hasClass("active")) {
                    $(dashboardNavContainer).addClass("active");
                } else {
                    $(dashboardNavContainer).removeClass("active");
                }

                $(".dashboard-responsive-nav-trigger .hamburger").toggleClass(
                    "is-active"
                );
            });

            // Fun Facts
            $(".fun-fact").each(function () {
                var factColor = $(this).attr("data-fun-fact-color");

                var hex = factColor;
                var c;
                var output = "";
                if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                    c = hex.substring(1).split("");
                    if (c.length == 3) {
                        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                    }
                    c = "0x" + c.join("");
                    output =
                        "rgba(" +
                        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
                        ",0.07)";
                }

                if (factColor !== undefined) {
                    $(this)
                        .find(".fun-fact-icon")
                        .css("background-color", output);
                    $(this)
                        .find("i")
                        .css("color", factColor);
                }
            });

            // Notes & Messages Scrollbar
            var winwidth = $(window).width();
            if (winwidth > 1199) {
                // Notes
                $(".row").each(function () {
                    var mbh = $(this)
                        .find(".main-box-in-row")
                        .outerHeight();
                    var cbh = $(this)
                        .find(".child-box-in-row")
                        .outerHeight();
                    if (mbh < cbh) {
                        var headerBoxHeight = $(this)
                            .find(".child-box-in-row .headline")
                            .outerHeight();
                        var mainBoxHeight =
                            $(this)
                                .find(".main-box-in-row")
                                .outerHeight() -
                            headerBoxHeight +
                            39;

                        $(this)
                            .find(".child-box-in-row .content")
                            .wrap(
                                '<div class="dashboard-box-scrollbar" style="max-height: ' +
                                mainBoxHeight +
                                'px" data-simplebar></div>'
                            );
                    }
                });

                // Messages Sidebar
                // var messagesList = $(".messages-inbox").outerHeight();
                // var messageWrap = $(".message-content").outerHeight();
                // if ( messagesList > messagesWrap) {
                // 	$(messagesList).css({
                // 		'max-height': messageWrap,
                // 	});
                // }
            }

            // Mobile Adjustment for Single Button Icon in Dashboard Box
            $(".buttons-to-right").each(function () {
                var btr = $(this).width();
                if (btr < 36) {
                    $(this).addClass("single-right-button");
                }
            });

            // Small Footer Adjustment
            var smallFooterHeight = $(".small-footer").outerHeight();
            $(".dashboard-footer-spacer").css({
                "padding-top": smallFooterHeight + 45
            });

            // Auto Resizing Message Input Field
            /* global jQuery */
            jQuery.each(jQuery("textarea[data-autoresize]"), function () {
                var offset = this.offsetHeight - this.clientHeight;

                var resizeTextarea = function (el) {
                    jQuery(el)
                        .css("height", "auto")
                        .css("height", el.scrollHeight + offset);
                };
                jQuery(this)
                    .on("keyup input", function () {
                        resizeTextarea(this);
                    })
                    .removeAttr("data-autoresize");
            });

            /*--------------------------------------------------*/
            /*  Enabling Scrollbar in User Menu
	          /*--------------------------------------------------*/

            $(".header-notifications-scroll").each(function () {
                var scrollContainerList = $(this).find("ul");
                var itemsCount = scrollContainerList.children("li").length;
                var notificationItems;

                // Determines how many items are displayed based on items height
                /* jshint shadow:true */
                if (scrollContainerList.children("li").outerHeight() > 140) {
                    var notificationItems = 2;
                } else {
                    var notificationItems = 3;
                }

                // Enables scrollbar if more than 2 items
                if (itemsCount > notificationItems) {
                    var listHeight = 0;

                    $(scrollContainerList)
                        .find("li:lt(" + notificationItems + ")")
                        .each(function () {
                            listHeight += $(this).height();
                        });

                    $(this).css({height: listHeight});
                } else {
                    $(this).css({height: "auto"});
                    $(this)
                        .find(".simplebar-track")
                        .hide();
                }
            });

            /*--------------------------------------------------*/
            /*  Tippy JS
	          /*--------------------------------------------------*/
            /* global tippy */
            tippy("[data-tippy-placement]", {
                delay: 100,
                arrow: true,
                arrowType: "sharp",
                size: "regular",
                duration: 200,

                // 'shift-toward', 'fade', 'scale', 'perspective'
                animation: "shift-away",

                animateFill: true,
                theme: "dark",

                // How far the tooltip is from its reference element in pixels
                distance: 10
            });

            /*----------------------------------------------------*/
            /*	Accordion @Lewis Briffa
	          /*----------------------------------------------------*/
            var accordion = (function () {
                var $accordion = $(".js-accordion");
                var $accordion_header = $accordion.find(".js-accordion-header");

                // default settings
                var settings = {
                    // animation speed
                    speed: 400,

                    // close all other accordion items if true
                    oneOpen: false
                };

                return {
                    // pass configurable object literal
                    init: function ($settings) {
                        $accordion_header.on("click", function () {
                            accordion.toggle($(this));
                        });

                        $.extend(settings, $settings);

                        // ensure only one accordion is active if oneOpen is true
                        if (
                            settings.oneOpen &&
                            $(".js-accordion-item.active").length > 1
                        ) {
                            $(
                                ".js-accordion-item.active:not(:first)"
                            ).removeClass("active");
                        }

                        // reveal the active accordion bodies
                        $(".js-accordion-item.active")
                            .find("> .js-accordion-body")
                            .show();
                    },
                    toggle: function ($this) {
                        if (
                            settings.oneOpen &&
                            $this[0] !=
                            $this
                                .closest(".js-accordion")
                                .find(
                                    "> .js-accordion-item.active > .js-accordion-header"
                                )[0]
                        ) {
                            $this
                                .closest(".js-accordion")
                                .find("> .js-accordion-item")
                                .removeClass("active")
                                .find(".js-accordion-body")
                                .slideUp();
                        }

                        // show/hide the clicked accordion item
                        $this
                            .closest(".js-accordion-item")
                            .toggleClass("active");
                        $this
                            .next()
                            .stop()
                            .slideToggle(settings.speed);
                    }
                };
            })();

            accordion.init({speed: 300, oneOpen: true});

            /*--------------------------------------------------*/
            /*  Tabs
	          /*--------------------------------------------------*/
            if ($(".tabs")[0]) {
                $(".tabs").each(function () {
                    var thisTab = $(this);

                    // Intial Border Position
                    var activePos = thisTab
                        .find(".tabs-header .active")
                        .position();

                    function changePos() {
                        // Update Position
                        activePos = thisTab
                            .find(".tabs-header .active")
                            .position();

                        // Change Position & Width
                        thisTab
                            .find(".tab-hover")
                            .stop()
                            .css({
                                left: activePos.left,
                                width: thisTab
                                    .find(".tabs-header .active")
                                    .width()
                            });

                        // for button width
                        var buttonWidth = $(".tab_btn_first").css("width");
                        $(".tab_btn_all").css("width", buttonWidth);
                    }

                    changePos();

                    // Intial Tab Height
                    var tabHeight = thisTab.find(".tab.active").outerHeight();

                    // Animate Tab Height
                    function animateTabHeight() {
                        // Update Tab Height
                        tabHeight = thisTab.find(".tab.active").outerHeight();

                        // Animate Height
                        thisTab
                            .find(".tabs-content")
                            .stop()
                            .css({
                                height: tabHeight + "px"
                            });
                    }

                    setTimeout(function () {
                        animateTabHeight();
                    }, 1000);

                    // Change Tab
                    function changeTab() {
                        var getTabId = thisTab
                            .find(".tabs-header .active a")
                            .attr("data-tab-id");

                        // Remove Active State
                        thisTab
                            .find(".tab")
                            .stop()
                            .fadeOut(300, function () {
                                // Remove Class
                                $(this).removeClass("active");
                            })
                            .hide();

                        thisTab
                            .find(".tab[data-tab-id=" + getTabId + "]")
                            .stop()
                            .fadeIn(300, function () {
                                // Add Class
                                $(this).addClass("active");

                                // Animate Height
                                animateTabHeight();
                            });
                    }

                    // Tabs
                    thisTab.find(".tabs-header a").on("click", function (e) {
                        e.preventDefault();

                        // Tab Id
                        var tabId = $(this).attr("data-tab-id");

                        // Remove Active State
                        thisTab
                            .find(".tabs-header a")
                            .stop()
                            .parent()
                            .removeClass("active");

                        // Add Active State
                        $(this)
                            .stop()
                            .parent()
                            .addClass("active");

                        changePos();

                        // Update Current Itm
                        tabCurrentItem = tabItems.filter(".active");

                        // Remove Active State
                        thisTab
                            .find(".tab")
                            .stop()
                            .fadeOut(300, function () {
                                // Remove Class
                                $(this).removeClass("active");
                            })
                            .hide();

                        // Add Active State
                        thisTab
                            .find('.tab[data-tab-id="' + tabId + '"]')
                            .stop()
                            .fadeIn(300, function () {
                                // Add Class
                                $(this).addClass("active");

                                // Animate Height
                                animateTabHeight();
                            });
                    });

                    // Tab Items
                    var tabItems = thisTab.find(".tabs-header ul li");

                    // Tab Current Item
                    var tabCurrentItem = tabItems.filter(".active");

                    // Next Button
                    thisTab.find(".tab-next").on("click", function (e) {
                        e.preventDefault();

                        var nextItem = tabCurrentItem.next();

                        tabCurrentItem.removeClass("active");

                        if (nextItem.length) {
                            tabCurrentItem = nextItem.addClass("active");
                        } else {
                            tabCurrentItem = tabItems
                                .first()
                                .addClass("active");
                        }

                        changePos();
                        changeTab();
                    });

                    // Prev Button
                    thisTab.find(".tab-prev").on("click", function (e) {
                        e.preventDefault();

                        var prevItem = tabCurrentItem.prev();

                        tabCurrentItem.removeClass("active");

                        if (prevItem.length) {
                            tabCurrentItem = prevItem.addClass("active");
                        } else {
                            tabCurrentItem = tabItems.last().addClass("active");
                        }

                        changePos();
                        changeTab();
                    });
                });
            }

            /*--------------------------------------------------*/
            /*  Keywords
	              /*--------------------------------------------------*/
            $(".keywords-container").each(function () {
                var keywordInput = $(this).find(".keyword-input");
                var keywordsList = $(this).find(".keywords-list");

                // adding keyword
                function addKeyword() {
                    var $newKeyword = $(
                        "<span class='keyword'><span class='keyword-remove'></span><span class='keyword-text'>" +
                        keywordInput.val() +
                        "</span></span>"
                    );
                    keywordsList.append($newKeyword).trigger("resizeContainer");
                    keywordInput.val("");
                }

                // add via enter key
                keywordInput.on("keyup", function (e) {
                    if (e.keyCode == 13 && keywordInput.val() !== "") {
                        addKeyword();
                    }
                });

                // add via button
                $(".keyword-input-button").on("click", function () {
                    if (keywordInput.val() !== "") {
                        addKeyword();
                    }
                });

                // removing keyword
                $(document).on("click", ".keyword-remove", function () {
                    $(this)
                        .parent()
                        .addClass("keyword-removed");

                    function removeFromMarkup() {
                        $(".keyword-removed").remove();
                    }

                    setTimeout(removeFromMarkup, 500);
                    keywordsList.css({height: "auto"}).height();
                });

                // animating container height
                keywordsList.on("resizeContainer", function () {
                    var heightnow = $(this).height();
                    var heightfull = $(this)
                        .css({"max-height": "auto", height: "auto"})
                        .height();

                    $(this)
                        .css({height: heightnow})
                        .animate({height: heightfull}, 200);
                });

                $(window).on("resize", function () {
                    keywordsList.css({height: "auto"}).height();
                });

                // Auto Height for keywords that are pre-added
                var keywordCount = $(".keywords-list").children("span").length;

                // Enables scrollbar if more than 3 items
                if (keywordCount > 0) {
                    keywordsList.css({height: "auto"}).height();
                }
            });

            // Fix for intro banner with label
            $(".intro-search-field").each(function () {
                var bannerLabel = $(this).children("label").length;
                if (bannerLabel > 0) {
                    $(this).addClass("with-label");
                }
            });

            /*----------------------------------------------------*/
            /*  Share URL and Buttons
	              /*----------------------------------------------------*/

            $(".share-buttons-icons a").each(function () {
                var buttonBG = $(this).attr("data-button-color");
                if (buttonBG !== undefined) {
                    $(this).css("background-color", buttonBG);
                }
            });

            /*----------------------------------------------------*/
            /*  Tabs
	              /*----------------------------------------------------*/
            var $tabsNav = $(".popup-tabs-nav"),
                $tabsNavLis = $tabsNav.children("li");

            $tabsNav.each(function () {
                var $this = $(this);

                $this
                    .next()
                    .children(".popup-tab-content")
                    .stop(true, true)
                    .hide()
                    .first()
                    .show();
                $this
                    .children("li")
                    .first()
                    .addClass("active")
                    .stop(true, true)
                    .show();
            });

            $tabsNavLis.on("click", function (e) {
                var $this = $(this);

                $this
                    .siblings()
                    .removeClass("active")
                    .end()
                    .addClass("active");

                $this
                    .parent()
                    .next()
                    .children(".popup-tab-content")
                    .stop(true, true)
                    .hide()
                    .siblings($this.find("a").attr("href"))
                    .fadeIn();

                e.preventDefault();
            });

            var hash = window.location.hash;
            var anchor = $('.tabs-nav a[href="' + hash + '"]');
            if (anchor.length === 0) {
                $(".popup-tabs-nav li:first")
                    .addClass("active")
                    .show(); //Activate first tab
                $(".popup-tab-content:first").show(); //Show first tab content
            } else {
                anchor.parent("li").click();
            }

            // Link to Register Tab
            $(".register-tab").on("click", function (event) {
                event.preventDefault();
                $(".popup-tab-content").hide();
                $("#register.popup-tab-content").show();
                $("body")
                    .find('.popup-tabs-nav a[href="#register"]')
                    .parent("li")
                    .click();
            });

            // Disable tabs if there's only one tab
            $(".popup-tabs-nav").each(function () {
                var listCount = $(this).find("li").length;
                if (listCount < 2) {
                    $(this).css({
                        "pointer-events": "none"
                    });
                }
            });

            /*----------------------------------------------------*/
            /*  Indicator Bar
                /*----------------------------------------------------*/
            $(".indicator-bar").each(function () {
                var indicatorLenght = $(this).attr("data-indicator-percentage");
                $(this)
                    .find("span")
                    .css({
                        width: indicatorLenght + "%"
                    });
            });

            // ======== Function End ========
        },
        async checkLoginStatus() {
            if (this.$route.meta.hasOwnProperty("requiresLogin")) {
                if (this.$route.meta.requiresLogin == true) {
                    if (
                        localStorage.getItem("sgtoken") == null ||
                        localStorage.getItem("sgtype") == null ||
                        localStorage.getItem("sgemail") == null ||
                        localStorage.getItem("sgname") == null
                    ) {
                        if (localStorage.getItem("sgemail") != null) {
                            localStorage.setItem("sgemail", "");
                        }

                        if (localStorage.getItem("sgname") != null) {
                            localStorage.setItem("sgname", "");
                        }

                        if (localStorage.getItem("sgtoken") != null) {
                            localStorage.removeItem("sgtoken");
                        }

                        if (localStorage.getItem("sgtype") != null) {
                            localStorage.removeItem("sgtype");
                        }

                        window.isAuthenticated = false;
                        window.sgtype = 4;
                        this.$router.push({name: "home"});
                        return false;
                    }

                    // ================= for FB login - start =================
                    if (window.sgtype == 1) {
                        // facebook
                        window.FB.getLoginStatus(function (response) {
                            if (response.status === "connected") {
                                var fbuid = response.authResponse.userID;

                                if (localStorage.getItem("sgemail") == fbuid) {
                                    window.isAuthenticated = true;
                                } else {
                                    window.isAuthenticated = false;
                                }
                            } else {
                                window.isAuthenticated = false;
                            }
                        });
                    }
                    // ================= for FB login - end =================

                    // ================= for Google login - start =================
                    if (window.sgtype == 2) {
                        Vue.GoogleAuth.then(auth2 => {
                            if (auth2.isSignedIn.get() == true) {
                                var profile = auth2.currentUser
                                    .get()
                                    .getBasicProfile();
                                var thisemail = profile.getEmail();

                                if (localStorage.getItem("sgemail") != null) {
                                    if (
                                        localStorage.getItem("sgemail") ==
                                        thisemail
                                    ) {
                                        window.isAuthenticated = true;
                                    } else {
                                        window.isAuthenticated = false;
                                    }
                                } else {
                                    window.isAuthenticated = false;
                                }
                            } else {
                                window.isAuthenticated = false;
                            }
                        });
                    }
                    // ================= for Google login - end =================

                    // ================= for Linkedin login - start =================
                    if (window.sgtype == 3) {
                    }
                    // ================= for Linkedin login - end =================

                    // regular
                    var token = "";
                    if (localStorage.getItem("sgtoken") != null) {
                        token = localStorage.getItem("sgtoken");
                    }

                    const auth_details = await this.callApi(
                        "post",
                        window.api_path + "isloggedin",
                        "",
                        token
                    );

                    if (auth_details.status != 200) {
                        window.isAuthenticated = false;
                    }

                    if (window.isAuthenticated == false) {
                        // regular
                        var token = "";
                        if (localStorage.getItem("sgtoken") != null) {
                            token = localStorage.getItem("sgtoken");
                        }

                        const logout_details = await this.callApi(
                            "post",
                            window.api_path + "logout",
                            "",
                            token
                        );

                        if (localStorage.getItem("sgemail") != null) {
                            localStorage.setItem("sgemail", "");
                        }

                        if (localStorage.getItem("sgname") != null) {
                            localStorage.setItem("sgname", "");
                        }

                        if (localStorage.getItem("sgtoken") != null) {
                            localStorage.removeItem("sgtoken");
                        }

                        if (localStorage.getItem("sgtype") != null) {
                            localStorage.removeItem("sgtype");
                        }

                        window.sgtype = 4;
                        this.$router.push({name: "home"});
                    }
                }
            }

            if (
                this.$route.name == "login" ||
                this.$route.name == "register" ||
                this.$route.name == "forgot_password"
            ) {
                if (window.isAuthenticated == true) {
                    this.$router.push({name: "dashboard"});
                }
            }
        },
        async doLogout() {
            this.isLoadingFooter = true;
            // facebook
            if (window.sgtype == 1) {
                window.FB.getLoginStatus(function (response) {
                    if (response.status === "connected") {
                        window.FB.logout(function (response) {
                        });
                    }
                });
            }
            // google
            if (window.sgtype == 2) {
                Vue.GoogleAuth.then(auth2 => {
                    auth2.signOut().then(function () {
                    });
                });
            }
            // linkedin
            if (window.sgtype == 3) {
            }

            // regular
            var token = "";
            if (localStorage.getItem("sgtoken") != null) {
                token = localStorage.getItem("sgtoken");
            }

            const logout_details = await this.callApi(
                "post",
                window.api_path + "logout",
                "",
                token
            );

            if (localStorage.getItem("sgemail") != null) {
                localStorage.setItem("sgemail", "");
            }

            if (localStorage.getItem("sgname") != null) {
                localStorage.setItem("sgname", "");
            }

            if (localStorage.getItem("sgphoto") != null) {
                localStorage.setItem("sgphoto", "");
            }

            if (localStorage.getItem("sgtoken") != null) {
                localStorage.removeItem("sgtoken");
            }

            if (localStorage.getItem("sgtype") != null) {
                localStorage.removeItem("sgtype");
            }

            window.isAuthenticated = false;
            window.sgtype = 4;
            if (this.$route.name == "home") {
                window.location.reload()
            } else {
                this.$router.push({name: "home"});
            }
        },
        updateUserDetails() {
            this.full_name = localStorage.getItem("sgname");

            var pimg = "";
            if (localStorage.getItem("sgphoto") != null) {
                if (
                    localStorage.getItem("sgphoto") != "" &&
                    localStorage.getItem("sgphoto") != "null"
                ) {
                    pimg = window.image_path + localStorage.getItem("sgphoto");
                } else {
                    pimg = window.local_image_path + "user-avatar-small-01.jpg";
                }
            } else {
                pimg = window.local_image_path + "user-avatar-small-01.jpg";
            }
            this.userprofilepic = pimg;
        }
    },
    mounted() {
        initFbsdk();
    }
};
