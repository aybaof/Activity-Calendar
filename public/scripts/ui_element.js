const selectEvent = new Event('selectCustom');

document.querySelectorAll("[dt-custom-select]").forEach(select => {
    select.addEventListener("mousedown", ({ currentTarget }) => {
        const toggle = currentTarget.querySelector("[dt-toggle]")
        const toggleState = toggle.getAttribute("dt-toggle");
        const listOption = currentTarget.querySelector("[dt-option-container]")
        if (toggleState === "0") {
            toggle.setAttribute("dt-toggle", "1");
            select.setAttribute("dt-custom-select", "1")
            toggle.textContent = "expand_less"
            listOption.classList.remove("d-none")
            select.classList.add("text-secondary")
        } else {
            toggle.setAttribute("dt-toggle", "0");
            select.setAttribute("dt-custom-select", "0")
            toggle.textContent = "keyboard_arrow_down"
            listOption.classList.add("d-none")
            select.classList.remove("text-secondary")
        }
    })

    const optionsContainer = select.querySelector("[dt-option-container]")
    const options = optionsContainer.querySelectorAll("[value]");
    options.forEach(option => {
        option.style.zIndex = 9999;
        option.addEventListener("mousedown", ({ currentTarget }) => {
            const valueSelected = currentTarget.value;
            select.querySelector("[dt-select-label]").textContent = valueSelected
            select.setAttribute("value", valueSelected)
            select.dispatchEvent(selectEvent)
        })
    })
})