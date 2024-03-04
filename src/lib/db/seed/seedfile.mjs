export const products = [
    {
      "title": "All purpose balm",
      "image": "/products/product_8281992819.jpg",
      "price": 469,
      "discountInPercent": 0,
      "recommended": true
    },
    {
        "title": "Multi-Action Concealer",
        "image": "/products/product_1213213211.jpg",
        "price": 85,
        "discountInPercent": 0,
        "recommended": false,
    },
    {
        "title": "Mayi Mousture Bamboo FibersShampoo",
        "image": "/products/product_4335542819.jpg",
        "price": 212,
        "discountInPercent": 25,
        "recommended": false
      },
      {
        "title": "Shower Gel",
        "image": "/products/product_2349838201.jpg",
        "price": 102,
        "discountInPercent": 0,
        "recommended": false,
      },
      {
        "title": "Bubble Bath, Body Wash, Conditioning detangler",
        "image": "/products/product_2233009200.jpg",
        "price": 118,
        "discountInPercent": 0,
        "recommended": false
      },
      {
        "title": "Facial oil",
        "image": "/products/product_2332233444.jpg",
        "price": 324,
        "discountInPercent": 10,
        "recommended": false
      },
      {
        "title": "Eyeshadow",
        "image": "/products/product_4566543883.jpg",
        "price": 110,
        "discountInPercent": 0,
        "recommended": false
      }
];

export const subscribers = [
    {
        "name": "Anders Christensen",
        "email": "anders@mediacollege.dk",
        "message": "Jeg er en subscriber"
    }
];

export const reviews = [
    {
        "name": "Kathrine Udgaard",
        "byline": "Tilfreds Kunde",
        "description": "Den hidtil bedste oplevelse med læbestifter! Jeg har fået så mange komplimenter, efter jeg er begyndt at gå med denne dagligt. Udover smuk farve, efterlader den læberne bløde og fugtige. Og det aller vigtigste - slet ikke klistret på den der ubehagelige måde, som nogen pomader kan. Den er et absolut \"must have\" i min håndtaske!!",
        "image" : "/reviews/kathrine_udgaard.jpg"
    },
    {
        "name": "Phoebe Larsen",
        "byline": "Tilfreds Kunde",
        "description": "Jeg døjer rigtig meget med uren hud, og har prøvet alt muligt. Jeg fik Honest produkter anbefalet som en 30 dags kur, hvor jeg KUN skulle bruge den morgen og aften. Det har jeg så prøvet nu, og jeg kan se en tydelig forskel. Et ekstra plus er, at den er dejlig fugtgivende.",
        "image" : "/reviews/phoebe_larsen.jpg"
    }
];

export const orders = (id) => [
  {
    "products": [{
        "id": id.toString(),
        "amount" : 1
    }],
    "email" : "anders@mediacollege.dk"
  }
];