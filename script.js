/* =========================================
   SMF MOBILE DEALS
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE SEARCH + BRAND FILTER
========================================= */

function filterMobiles() {

    const searchInput =
        document.getElementById("mobileSearch");

    const brandFilter =
        document.getElementById("brandFilter");

    const productGrid =
        document.getElementById("mobileGrid");

    const noResults =
        document.getElementById("noResults");


    if (!searchInput || !brandFilter || !productGrid) {
        return;
    }


    const searchText =
        searchInput.value.toLowerCase().trim();


    const selectedBrand =
        brandFilter.value;


    const products =
        productGrid.querySelectorAll(".mobile-item");


    let visibleProducts = 0;


    products.forEach(function(product) {

        const productName =
            product
            .getAttribute("data-name")
            .toLowerCase();


        const productBrand =
            product
            .getAttribute("data-brand")
            .toLowerCase();


        const matchesSearch =
            productName.includes(searchText);


        const matchesBrand =
            selectedBrand === "all" ||
            productBrand === selectedBrand;


        if (matchesSearch && matchesBrand) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (noResults) {

        if (visibleProducts === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }

}


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        filterMobiles();

    }
);