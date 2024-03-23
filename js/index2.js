const menu = document.getElementById("icon-button-menu");
const menuBar = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");


menu.addEventListener("click" , (e) => {
    if (menuBar.classList.contains("hide")) {
        menuBar.classList.remove("hide");
        document.body.classList.toggle('menu-open');
    }
})

closeMenu.addEventListener("click" , (e) => {
    if (!menuBar.classList.contains("hide")) {
        menuBar.classList.add("hide");
        document.body.classList.remove('menu-open');
    }
})


// fetch('Txt\\web.txt')
//     .then(response => response.text())
//     .then(data => {
//         // Add <strong> tags around specific text
//         // data = data.replace(/1.What is Web Development/g, '<strong>$1</strong>');
//         // Insert modified content into the HTML element
//         console.log(data);
//         document.querySelector(".know-more").innerHTML = data;
//     })
//     .catch(error => {
//         console.error('Error fetching content:', error);
//     });

const web_know = document.querySelector(".know-more");

document.getElementById("webBtn").addEventListener("click" , () => {
    web_know.classList.remove("hide");

})

document.getElementById("close-menu2").addEventListener("click" , () => {
    web_know.classList.add("hide");
})

document.querySelector(".feedback").addEventListener("click",() => {
    document.querySelector(".emailPage").classList.remove("hide");
    document.body.classList.toggle('overflow');
})

document.querySelector("#close-email").addEventListener("click",() => {
    document.querySelector(".emailPage").classList.add("hide");
    // document.getElementById('ratingPopup').style.display = 'none';
    document.body.classList.toggle('overflow');
})