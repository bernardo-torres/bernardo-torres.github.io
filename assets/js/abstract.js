// Legacy toggle, still used by onclick="toggleAbstract('id')" on older pages.
function toggleAbstract(abstractId) {
    var abstract = document.getElementById(abstractId);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}

// Accessible toggle: <button data-abstract-toggle aria-controls="id"> shows/hides <div id="id" hidden>.
document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-abstract-toggle]");
    if (!button) return;
    var abstract = document.getElementById(button.getAttribute("aria-controls"));
    if (!abstract) return;
    var expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    abstract.hidden = expanded;
});
