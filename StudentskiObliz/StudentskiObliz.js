// ==UserScript==
// @name         StudentskiObliz
// @version      1.0
// @description  Obliži za UV e-študentskega servisa.
// @author       chocoearly44
// @match        *://*.studentski-servis.com/studenti/prosta-dela*
// @icon         https://www.studentski-servis.com/themes/e-studentski-servis/assets/media/dsg/favicon/favicon-32x32.png
// @grant        none
// ==/UserScript==

(
    function() {
        'use strict';

        // Filter bypass
        let jobs = document.getElementsByClassName("job-item");

        for (let i = 0; i < jobs.length; i++) {
            let jobCard = jobs[i];
            let buttonRow = jobCard.getElementsByClassName("d-block px-0 mt-2")[0];

            if(buttonRow.getElementsByClassName("btn btn-primary btn-block col-12").length < 1) {
                // Find job id
                let jobAttributes = jobCard.getElementsByClassName("job-attributes")[1];
                let jobId = jobAttributes.getElementsByTagName("li")[1].innerText.match("([0-9]+)")[1];

                // Create button
                let div = document.createElement("div");

                div.innerHTML = `<a href="/studenti/prijava-na-delo?id=` + jobId + `" class="btn btn-warning btn-block col-12">Prijavi se na delo</a>`;
                buttonRow.appendChild(div);
            }
        }
    }
)();
