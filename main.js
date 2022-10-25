
let lista;
let abclista;
document.addEventListener('DOMContentLoaded', () => {
    


    async function osszadatBetoltes() {
        // JSON: JavaScript Object Notation
        
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        lista = eredmeny.products;

        
    }


    async function abcadatBetoltes() {
        // JSON: JavaScript Object Notation
        
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        abclista = eredmeny.products.sort(e=>e.brand);

        
    }


    function kiir(termekek) {
        let termekLista = document.getElementById('termeklista');
        termekLista.textContent = '';
        for (let p of termekek) {
            let li = document.createElement('li');
            li.textContent = p.id +" "+p.title+" "+p.description+" "+p.price+" "+p.discountPercentage+" "+p.rating+" "+p.stock+" "+p.brand+" "+p.category;
            termekLista.appendChild(li);
        }
    }



    document.getElementById('adatok').addEventListener('click', () => {
        osszadatBetoltes();
        kiir(lista);
    });
    document.getElementById('abc').addEventListener('click', () => {
        abcadatBetoltes();
        kiir(abclista);
    });
    
});
