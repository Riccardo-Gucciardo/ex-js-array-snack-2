const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


// ------------Snack 1------------

// 1. Funzione che somma due numeri

function sommaNumeri(a,b) {
    return a + b;
    
}

// ------------------------------------------------------------

// 2. Array con i libri che hanno più di 300 pagine

const libriLunghi = books.filter(books => books.pages > 300)
// console.log(libriLunghi);

// ------------------------------------------------------------


// 3. Array con i titoli dei libri in longBooks

const libriLunghiTitoli = libriLunghi.map(book => book.title)
// console.log(libriLunghiTitoli);

// ------------------------------------------------------------

// 4. Stampa ogni titolo in console

// books.forEach(title => console.log(title))

// ------------Snack 2------------

// 1. Creare un array con i libri disponibili
const libriDisponibili = books.filter(b => b.available === true)
// console.log(libriDisponibili);

// ------------------------------------------------------------

// 2. Creare un array con i libri scontati del 20%

// 2. Creare un array con i libri scontati del 20%
const libriScontati = libriDisponibili.map(book => {
    const prezzo = parseFloat(book.price);
    const prezzoScontato = Math.round(prezzo * 0.8 * 100) / 100;
    return {
        ...book,
        price: `${prezzoScontato}€`
    };
});
// console.log(libriScontati);



// ------------------------------------------------------------

// 3. Trovare il primo libro con prezzo intero (senza centesimi)
const libriPrezzoPieno = libriScontati.find(book => {
    const price = parseFloat(book.price)
    return Number.isInteger(price);
});
// console.log(libriPrezzoPieno);

// ------------Snack 3------------

// 1. Creare un array con gli autori dei libri
const autori = books.map(b => b.author)


// ------------------------------------------------------------

// 2. Verificare se tutti gli autori sono maggiorenni (età >= 18)
const autoriMaggiorenni = autori.every(a => a.age >= 18)
// console.log(autoriMaggiorenni);

// ------------------------------------------------------------

// 3. Ordinare l'array authors in base all'età
autori.sort((acc, curr) => 
  autoriMaggiorenni ? acc.age - curr.age : curr.age - acc.age
);
// console.log(autori);

// ------------Snack 4------------

// 1. Crea array con età degli autori
const ages = []
books.forEach(b => {
    if (!ages.includes(b.author.age)) {
        ages.push(b.author.age)
    }
})

// console.log(ages);

// ------------------------------------------------------------

// 2. Calcola la somma delle età con reduce
const sommaEtà = ages.reduce((acc,curr) => acc + curr, 0)
// console.log(sommaEtà);

// ------------------------------------------------------------

// 3. Calcola e stampa l'età media
const etàMedia = ages.reduce((acc, age) => acc + age, 0) / ages.length;
console.log(`L'età media degli autori è: ${etàMedia}`);

