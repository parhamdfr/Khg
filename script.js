const planetData = {
    Sun: { img:"images/sun.png", info:"خورشید ستاره مرکزی سیستم خورشیدی است.", details:["قطر: 1,392,700 کیلومتر","فاصله از زمین: 149.6 میلیون کیلومتر","دما سطحی: 5,500 °C","نوع: ستاره"] },
    Mercury: { img:"images/mercury.png", info:"عطارد کوچکترین و نزدیک‌ترین سیاره به خورشید است.", details:["شعاع: 2,439 کیلومتر","فاصله از خورشید: 57.9 میلیون کیلومتر","تعداد قمر: 0","مدت گردش: 88 روز"] },
    Venus: { img:"images/venus.png", info:"زهره دومین سیاره از خورشید است و دارای اتمسفر غلیظ است.", details:["شعاع: 6,052 کیلومتر","فاصله از خورشید: 108.2 میلیون کیلومتر","تعداد قمر: 0","مدت گردش: 225 روز"] },
    Earth: { img:"images/earth.png", info:"زمین سیاره ما و تنها سیاره دارای حیات.", details:["شعاع: 6,371 کیلومتر","فاصله از خورشید: 149.6 میلیون کیلومتر","تعداد قمر: 1","مدت گردش: 365 روز"] },
    Mars: { img:"images/mars.png", info:"مریخ سیاره سرخ و چهارمین سیاره از خورشید.", details:["شعاع: 3,390 کیلومتر","فاصله از خورشید: 227.9 میلیون کیلومتر","تعداد قمر: 2","مدت گردش: 687 روز"] },
    Jupiter: { img:"images/jupiter.png", info:"مشتری بزرگترین سیاره.", details:["شعاع: 69,911 کیلومتر","فاصله از خورشید: 778.5 میلیون کیلومتر","تعداد قمر: 79","مدت گردش: 12 سال"] },
    Saturn: { img:"images/saturn.png", info:"زحل دارای حلقه‌های زیبا.", details:["شعاع: 58,232 کیلومتر","فاصله از خورشید: 1,434 میلیون کیلومتر","تعداد قمر: 82","مدت گردش: 29 سال"] },
    Uranus: { img:"images/uranus.png", info:"اورانوس سیاره یخی.", details:["شعاع: 25,362 کیلومتر","فاصله از خورشید: 2,871 میلیون کیلومتر","تعداد قمر: 27","مدت گردش: 84 سال"] },
    Neptune: { img:"images/neptune.png", info:"نپتون هشتمین سیاره.", details:["شعاع: 24,622 کیلومتر","فاصله از خورشید: 4,495 میلیون کیلومتر","تعداد قمر: 14","مدت گردش: 165 سال"] }
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("planet-img");
const modalName = document.getElementById("planet-name");
const modalInfo = document.getElementById("planet-info");
const modalDetails = document.getElementById("planet-details");
const closeBtn = document.querySelector(".close");

// همه تصاویر شامل خورشید و سیارات
document.querySelectorAll('.planet img, .sun img').forEach(img => {
    img.addEventListener('click', e => {
        const name = e.target.dataset.planet;
        if (!planetData[name]) return;

        modalImg.src = planetData[name].img;
        modalName.textContent = name;
        modalInfo.textContent = planetData[name].info;
        modalDetails.innerHTML = '';
        planetData[name].details.forEach(d => {
            const li = document.createElement('li');
            li.textContent = d;
            modalDetails.appendChild(li);
        });
        modal.style.display = 'block';
    });
});

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
