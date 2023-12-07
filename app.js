const letters = "ABCDEFGHIJKLMNOPRSTUVYZ";
        let interval;
        document.getElementById("1").onmouseover = (event) => {
            let repetition = 0;
            setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < repetition) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 23)];
                    })
                    .join("");

                if (repetition >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                repetition += 1 / 3;
            }, 100);
        };

        document.getElementById("2").onmouseover = (event) => {
            let repetition2 = 0;
            setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < repetition2) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 23)];
                    })
                    .join("");

                if (repetition2 >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                repetition2 += 1 / 3;
            }, 100);
        };

        document.getElementById("3").onmouseover = (event) => {
            let repetition3 = 0;
            setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < repetition3) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 23)];
                    })
                    .join("");

                if (repetition3 >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                repetition3 += 1 / 3;
            }, 100);
        };

        document.getElementById("4").onmouseover = (event) => {
            let repetition4 = 0;
            setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < repetition4) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 23)];
                    })
                    .join("");

                if (repetition4 >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                repetition4 += 1 / 3;
            }, 100);
        };