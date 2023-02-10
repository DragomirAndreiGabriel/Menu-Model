// items
const menu = [
    {
      id: 1,
      title: "Supa crema de legume",
      category: "lunch",
      price: 9.99,
      img: "./images/supa.jpg",
      desc: `Supa-crema de legume este un adevarat deliciu, si preparat sanatos, satioasa si foarte usor de gatit.`,
    },
    {
      id: 2,
      title: "Gratin de cartofi cu varză si brâzeturi",
      category: "lunch",
      price: 13.99,
      img: "./images/gratin.jpg",
      desc: `O portie de consistenţa unei budinci. In care gustul de varză, nu pe placul tuturor, este compensat cu cel de cartofi, infinit mai atrăgător. Varza este un aliment vegetal dintre cele mai sănătoase, așa că merită să găsim soluții plăcute pentru a o consuma.`,
    },
    {
      id: 3,
      title: "Shake cu afine",
      category: "shakes",
      price: 16.99,
      img: "./images/shakecuafine.jpg",
      desc: `Afinele sunt o sursa buna de vitamine dar si de antioxidanti (au un continut ridicat de vitamina K, C si magneziu), fiind demonstrat totodata si faptul ca aceste mici fructe au capacitatea de a reduce riscul bolilor cardiovasculare.`,
    },
    {
      id: 4,
      title: "Omleta cu spanac",
      category: "breakfast",
      price: 20.99,
      img: "./images/ompleta.jpg",
      desc: `Din categoria mancarurilor sanatoase, aceasta omleta este practic un preparat 2 in 1 adica mananci si omleta si salata impreuna. Partea si mai buna este ca se poate manca fara paine, este satioasa si foarte gustoasa!`,
    },
    {
      id: 5,
      title: "Ciorba rădăuțeană",
      category: "lunch",
      price: 22.99,
      img: "./images/ciorbaradauteana.jpg",
      desc: `Reteta ciorbei radautene difera de la gospodina la gospodina, nimeni nu stie cu exactitate reteta originala, in afara creatoarei, desigur. Dar, in mare, este la fel ca ciorba de burta. `,
    },
    {
      id: 6,
      title: "Smoothie spanac banane mar",
      category: "shakes",
      price: 18.99,
      img: "./images/smoothiespanac.jpg",
      desc: `Ideala de consumat in curele de detoxifiere si cu o consistenta satioasa este si bautura preparata din spanac, banane si mar.`,
    },
    {
      id: 7,
      title: "Terci de ovăz cu mere caramelizate",
      category: "breakfast",
      price: 8.99,
      img: "./images/terci.jpg",
      desc: `Un mic dejun gustos, care se potriveste foarte bine cu zilele de toamna. Va recomand sa-l serviti caldut, cu putina scortisoara o sa vedeti ca este foarte foarte bun !`,
    },
    {
      id: 8,
      title: "Pui carbonara cu smantana si bacon",
      category: "lunch",
      price: 12.99,
      img: "./images/Puicarbonara.jpg",
      desc: `Puiul carbonara este un preparat gustos, cu o textură cremoasă, care va fi apreciat chiar și de cei mai mofturoși membri ai familiei tale`,
    },
    {
      id: 9,
      title: "Smoothie de dovleac cu avocado si iaurt grecesc",
      category: "shakes",
      price: 16.99,
      img: "./images/smoothiedovleac.jpg",
      desc: `Dovleacul este bogat in vitaminele A, D si E, dar si o sursa sigura de calciu, potasiu si fosfor. Servit si cu avocado in compozitie, acest smoothie poate fi considerat cu usurinta un mic dejun complet si sanatos.`,
    },
    {
      id: 10,
      title: "Paste cu sos",
      category: "dinner",
      price: 13.99,
      img: "./images/paste.jpg",
      desc: `Pentru iubitorii de paste, aceste rețete reprezintă alegerea perfectă pentru o cină delicioasă și rapidă în familie`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");

  // load items
  window.addEventListener("DOMContentLoaded",function () {
    displayMenuITEMS(menu);
    displayMenuButtons();
  });

  function displayMenuITEMS (menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<artile class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc} 
            </p>
        </div>
    </artile>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
  };

    function displayMenuButtons() {
        const categories = menu.reduce(function(values,item){
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values
        }, ["all"])
        const categoryBtn = categories.map(function(category){
            return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
        })
        .join("");
        container.innerHTML = categoryBtn;
        const filterBtns = document.querySelectorAll(".filter-btn");
        // filter items
      filterBtns.forEach(function(btn){
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItems) {
                if(menuItems.category === category) {
                    return menuItems
                };
            });
            if(category === "all") {
                displayMenuITEMS(menu);
            } else {
                displayMenuITEMS(menuCategory);
            }
        });
      });    
    };