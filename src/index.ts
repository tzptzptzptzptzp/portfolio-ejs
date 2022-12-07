const lazyload: any = (area: string) => {
    let source:any = document.querySelectorAll(`${area} [data-srcset]`);
    for (let i = 0; i < source.length; i++) {
        source[i].srcset = source[i].dataset.srcset;
    };
    let img:any = document.querySelectorAll(`${area} [data-src]`);
    for (let i = 0; i < img.length; i++) {
        img[i].src = img[i].dataset.src;
    };
};
addEventListener("load", lazyload("[data-site]"));
let wrapper = document.getElementsByClassName("l-wrapper")[0];
wrapper.addEventListener("scroll", function() {
    let h = innerHeight;
    if (h < wrapper.scrollTop) {
        lazyload("[data-design]");
        lazyload("[data-other]");
        lazyload("[data-about]");
    };
});
const showDesc = (area: string) => {
    let list = document.querySelector(`${area} .p-card-list`)!;
    let desc = document.querySelectorAll(`${area} .c-card__desc`);
    list.addEventListener("scroll", function() {
        let t = document.querySelector(".c-card__thumb")!.clientWidth;
        let a = document.querySelector(`${area} .c-card__desc.active`);
        if (a) {
            a.classList.remove("active");
        }
        let f = Math.round(list.scrollLeft / t);
        if (f < 1) {
            desc[0].classList.add("active");
        } else if (f < 2) {
            desc[1].classList.add("active");
        } else if (f < 3) {
            desc[2].classList.add("active");
        } else {
            desc[3].classList.add("active");
        };
    });
};
showDesc("[data-site]");
showDesc("[data-design]");
showDesc("[data-other]");

