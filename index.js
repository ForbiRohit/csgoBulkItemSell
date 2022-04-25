(() => {

    window.onload = () => {
        try {
            const communityUrl = document.querySelector("#cbis-steam-url-field");

            const errorSpan = document.querySelector("#cbis-error-span");

            const formEl = document.querySelector("#cbis-form");

            formEl && formEl.addEventListener("submit", (event) => {
                event.preventDefault();

                if(communityUrl === undefined || communityUrl.value === "") {
                    errorSpan.classList.remove("hide");
                    return false;
                }
                else {
                    const index730 = communityUrl.value.indexOf("730");
                    if(index730 === -1) {
                        errorSpan.classList.remove("hide");
                        return false;
                    }
                    const slicedValue = communityUrl.value.slice(index730+4);
                    errorSpan.classList.add("hide");
                    window.open(`https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=${slicedValue}`, "_blank");
                    return true;
                }
            });
        } catch (e) {
            console.error("Error intializing csgo bulk sell item app"+ e);
        }
    }; 
})();