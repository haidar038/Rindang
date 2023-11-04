const counters = document.querySelectorAll(".value");
const speed = 500;

counters.forEach((counter) => {
    const animate = () => {
        const value = +counter.getAttribute("akhi");
        const data = +counter.innerText;
        const formatted = value.toLocaleString("de-DE");

        const time = formatted / speed;
        if (data < formatted) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = formatted;
        }
    };

    animate();
});
