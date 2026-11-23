let products = [
    {
        thumbnail: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo%20Legion%205%2015IAX10-1Misya.webp&w=3840&q=100",
        name: " Lenovo Legion 5",
        prices: 2499.99,
        desc: "Ekran. Yeni nəsil (Gen 10 və 2026) modellər əsasən 15.1 və ya 15.3 ölçülü, 2560×1600 (WQXGA) icazəli, 165Hz tezlikli OLED və ya IPS panellərlə gəlir. "
    },
    {
        thumbnail: " https://macfinder.co.uk/wp-content/uploads/2026/03/img-MacBook-Pro-16-inch-M5-Pro-2026-00834-scaled.jpg",
        name: " MacBook Pro M5 ",
        prices: 3999.99,
        desc: `  Apple MacBook Pro M5 seriyası yüksək performans, süni intellekt (Apple Intelligence)
                        sürətləndiriciləri və uzun batareya ömrü ilə seçilir.`
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MlGyK0xEmHxvkZDNkmm2ax1sQbs29el6-che2ELX-w&s=10 ",
        name: "PlayStation 5 (PS5)",
        prices:  1299.99,
        desc: ` PS5 Slim (Diskli versiya): 1 TB daxili yaddaşa və Ultra HD Blu-ray disk oxuyucusuna malik əsas
                        modeldir.`
    },
    {
        thumbnail: " https://bestel.az/storage/27727/conversions/media-library56GI8u-lg.jpg",
        name: "KeyBoard HyperX",
        prices:  299.99,
        desc: `  Tam alüminium korpus, çıxarıla bilən USB-C kabeli və 80 milyon klik ömrü olan xüsusi HyperX
                        mexaniki düymələri (Red/Aqua).`
    },
    {
        thumbnail: " https://api.kontakt.az/media/catalog/product/t/m/tm-dg-smw-1106-sw-0494_1.png",
        name: "Apple Watch Series 10 ",
        prices:    769.99,
        desc: `Ölçü və Dizayn. 42 mm və 46 mm olmaqla iki ölçüdə, alüminium (Jet Black, Rose Gold, Silver) və
                        titan (Slate, Gold, Natural) korpus seçimləri ilə təqdim olunur`
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfoDs2EhQ_okxE-0iM_Nl28CUsS242p0HLCL8E7_mpzQ&s=10",
        name: "Apple iPhone 18 Pro",
        prices: 3769.99,
        desc: ` Ekran. 6.3 düymlük LTPO Super Retina XDR OLED (1206×2622 piksel, 120Hz ProMotion, 3000 nit
                        maksimal parlaqlıq) və yenilənmiş Dynamic Island.`
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKixOhLiJj8kJfpHKVjWjQ71vh9z_slXJFEL_0qo3Kg&s=10 ",
        name: `Samsung 55" OLED S95H 4K`,
        prices: 2769.99,
        desc: `165Hz yenilənmə tezliyi, G-Sync və FreeSync Premium Pro dəstəyi (mütəxəssislər tərəfindən
                        2026-cı ilin ən yaxşı 55 düymlük modeli kimi seçilib)`
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8b8r8QbGfgHCI77XuhqNTgy8S6kHc19ACmnPDCXhBg&s=10",
        name: " Bosch BGC21X300 (Serie 4)",
        prices: 269.99,
        desc: ` 2.0 litr tutumlu konteyneri və yuyula bilən HEPA gigiyenik filtri (toz hissəciklərinin 99.95%-ni
                        tutur) var.`
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7H2yvDmccrUwYKY7xePWDc6sZgaM3KT3HgP-Z5if6g&s=10",
        name: "Beko B3RCNE534HXB",
        prices:  819.99,
        desc: `İdarəetmə və dizayn. Elektron idarəetmə, xarici displey, gümüşü/boz rəng, gizli tutacaqlar və
                        istiqaməti dəyişdirilə bilən qapılar`
    },
    {
        thumbnail: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy7cmysOS6gE9AhbSF5OyaT5eTtl0GI-KNNr6WWPZYw&s=10",
        name: "Xbox Series S",
        prices: 539.99,
        desc: `Prosessor və Qrafika. 8 nüvəli AMD Zen 2 prosessoru (3.6 GHz) və AMD RDNA 2 qrafik çipi (4
                        TFLOPS) ilə təchiz olunub.`
    },
    {
        thumbnail: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDJKGQB36DUSrZ9i_bP_qXxpSgf_ET4DOkQAnUQccRw&s=10",
        name: "Sony Alpha 7 V ",
        prices: 340.99,
        desc: ` • Həm foto, həm də video üçün ən yaxşı universal tam kadr (full-frame) hibrid kamera — 33 MP
                        sensor, saniyədə 30 kadr çəkiliş və 4K 60p video dəstəyi təqdim edir.`
    },
    {
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMLlL8mLo_76SazqwciC_0ZJEz5J0qCNcRJKj0vjiPQ&s=10",
        name: "AirPods Pro 4",
        prices: 489.99,
        desc: ` H3 çipi. Daha aşağı gecikmə, yüksək səs keyfiyyəti və təkmilləşdirilmiş aktiv səs-küyün ləğvi
                        (ANC) üçün yeni prosessor gözlənilir.`
    }
];

let productList = document.getElementById("product-list");

products.forEach((e) => {
    productList.innerHTML += `
        <div class="group cursor-pointer flex flex-col">
            <div class="aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                <img class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="${e.thumbnail.trim()}"
                    alt="${e.name.trim()}">
            </div>

            <div class="mt-3 space-y-1">
                <div class="flex items-start justify-between gap-2">
                    <h3 class="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        ${e.name.trim()}
                    </h3>
                    <span class="text-base font-bold text-gray-900 shrink-0">
                        ${e.prices}₼
                    </span>
                </div>
                <p class="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    ${e.desc.trim()}
                </p>
            </div>
        </div>
    `;
});