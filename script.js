document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.getElementById("team-container");

    const teamMembers = [
        { name: "احسان فضلی", role: "برنامه‌نویس", img: "ehsan.jpg", telegram: "https://t.me/abj0o" },
        { name: "فاطمه فریدی", role: "مدیریت پروژه", img: "fateme.jpg", telegram: "https://t.me/Aydi_bezar" },
        { name: "علی بیگی (نکسل)", role: "طراح گرافیکی", img: "ali.jpg", telegram: "https://t.me/n6xel" },
        { name: "امین اسقاط", role: "طراح ایده", img: "amin.jpg", telegram: "https://t.me/cpt_kilroy" }
    ];

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member");

        memberDiv.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <a href="${member.telegram}" target="_blank">📩 تلگرام</a>
        `;

        teamContainer.appendChild(memberDiv);
    });

    const fadeElements = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn();
});
