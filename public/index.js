import {
    getData
} from "../functions/requestVATSIMData.js";
import {
    getDepartures,
    getArrivals
} from "../functions/flightInfo.js";


window.onload = () => {
    getData().then((data) => {
        getDepartures(data)
        getArrivals(data)

        const perPage = 5;
        let totalRows = $("#departures").find("tbody tr:has(td)").length;
        let totalPages = Math.ceil(totalRows / perPage);
        let $pages = $('#depBox');

        //pagination logic for the departures table
        for (let i = 0; i < totalPages; i++) {
            $("<span id='depSpan' class='depPageNumber'>" + (i + 1) + "</span>").appendTo($pages);
        }
        document.getElementsByClassName("depPageNumber")[0].className += " depActive";

        $(".depPageNumber").hover(

            function () {
                $(this).addClass("focus");
            },
            function () {
                $(this).removeClass("focus");
            });

        $("#departures").find("tbody tr:has(td)").hide();
        const depRows = $("#departures tbody tr:has(td)");
        for (let i = 0; i <= perPage - 1; i++) {
            $(depRows[i]).show();
        }
        $(document).on("click", "#depSpan", function (event) {


            let currentActive = document.getElementsByClassName("depActive");
            currentActive[0].className = currentActive[0].className.replace("depActive", "");
            this.className += " depActive";

            $("#departures").find("tbody tr:has(td)").hide();
            let nBegin = ($(this).text() - 1) * perPage;
            let nEnd = $(this).text() * perPage - 1;
            for (let i = nBegin; i <= nEnd; i++) {
                $(depRows[i]).show();
            }
        });


        totalRows = $("#arrivals").find("tbody tr:has(td)").length;
        totalPages = Math.ceil(totalRows / perPage);
        $pages = $('#arrBox');

        //pagination logic for the arrivals table
        for (let i = 0; i < totalPages; i++) {
            $("<span id='arrSpan' class='arrPageNumber'>" + (i + 1) + "</span>").appendTo($pages);
        }
        document.getElementsByClassName("arrPageNumber")[0].className += " arrActive";

        $(".arrPageNumber").hover(

            function () {
                $(this).addClass("focus");
            },
            function () {
                $(this).removeClass("focus");
            });

        $("#arrivals").find("tbody tr:has(td)").hide();
        const arrRows = $("#arrivals tbody tr:has(td)");
        for (let i = 0; i <= perPage - 1; i++) {
            $(arrRows[i]).show();
        }

        $(document).on("click", "#arrSpan", function (event) {

            let currentActive = document.getElementsByClassName("arrActive");
            currentActive[0].className = currentActive[0].className.replace("arrActive", "");
            this.className += " arrActive";

            $("#arrivals").find("tbody tr:has(td)").hide();
            let nBegin = ($(this).text() - 1) * perPage;
            let nEnd = $(this).text() * perPage - 1;
            for (let i = nBegin; i <= nEnd; i++) {
                $(arrRows[i]).show();
            }
        });
    });
}