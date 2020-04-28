import {
    getDepartures,
    getArrivals
} from "../functions/flightInfo.js";

window.onload = () => {
    getDepartures().then(() => {
        const totalRows = $("#departures").find("tbody tr:has(td)").length;
        const perPage = 5;
        const totalPages = Math.ceil(totalRows/perPage);
        const $pages = $('#depBox');

        for(let i = 0; i < totalPages; i++) {
            $("<span id='depSpan' class='pageNumber'>"+(i + 1)+"</span>").appendTo($pages);
        }
        $(".pageNumber").hover(
        function () {
            $(this).addClass("focus");
        },
        function () {
            $(this).removeClass("focus");
        });

        $("#departures").find("tbody tr:has(td)").hide();
        const depRows = $("#departures tbody tr:has(td)");
        for(let i = 0; i <= perPage - 1; i++) {
            $(depRows[i]).show();
        }

        $(document).on("click", "#depSpan", function(event) {
            $("#departures").find("tbody tr:has(td)").hide();
            let nBegin = ($(this).text() - 1) * perPage;
            let nEnd = $(this).text() * perPage - 1;
            for(let i = nBegin; i <= nEnd; i++) {
                $(depRows[i]).show();
            }
        });
    });
    getArrivals().then(() => {
        const totalRows = $("#arrivals").find("tbody tr:has(td)").length;
        const perPage = 5;
        const totalPages = Math.ceil(totalRows/perPage);
        const $pages = $('#arrBox');

        for(let i = 0; i < totalPages; i++) {
            $("<span id='arrSpan' class='pageNumber'>"+(i + 1)+"</span>").appendTo($pages);
        }
        $(".pageNumber").hover(
        function () {
            $(this).addClass("focus");
        },
        function () {
            $(this).removeClass("focus");
        });

        $("#arrivals").find("tbody tr:has(td)").hide();
        const arrRows = $("#arrivals tbody tr:has(td)");
        for(let i = 0; i <= perPage - 1; i++) {
            $(arrRows[i]).show();
        }

        $(document).on("click", "#arrSpan", function(event) {
            $("#arrivals").find("tbody tr:has(td)").hide();
            let nBegin = ($(this).text() - 1) * perPage;
            let nEnd = $(this).text() * perPage - 1;
            for(let i = nBegin; i <= nEnd; i++) {
                $(arrRows[i]).show();
            }
        });
    });
}