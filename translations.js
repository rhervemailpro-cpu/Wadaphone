const translations = {
    en: {
        hero_title: "Wooden Phones. Natural Beauty.",
        hero_subtitle: "Handcrafted wooden smartphones that feel as good as they look.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Inspired by Samsung's modern design",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Inspired by iPhone 13's elegant design",
        color_label: "Color:",
        natural_wood: "Natural Wood",
        black: "Black",
        add_to_cart: "Add to Cart",
        payment_title: "Choose Payment Method",
        free_shipping: "🌍 Free Shipping Worldwide",
        footer_text: "Handcrafted with care."
    },
    fr: {
        hero_title: "Téléphones en Bois. Beauté Naturelle.",
        hero_subtitle: "Des smartphones en bois fabriqués à la main qui se sentent aussi bien qu'ils ne le paraissent.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Inspiré du design moderne de Samsung",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Inspiré du design élégant de l'iPhone 13",
        color_label: "Couleur:",
        natural_wood: "Bois Naturel",
        black: "Noir",
        add_to_cart: "Ajouter au Panier",
        payment_title: "Choisir la Méthode de Paiement",
        free_shipping: "🌍 Livraison Gratuite Mondiale",
        footer_text: "Fabriqué avec soin."
    },
    es: {
        hero_title: "Teléfonos de Madera. Belleza Natural.",
        hero_subtitle: "Teléfonos inteligentes de madera elaborados a mano que se sienten tan bien como se ven.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Inspirado en el diseño moderno de Samsung",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Inspirado en el elegante diseño del iPhone 13",
        color_label: "Color:",
        natural_wood: "Madera Natural",
        black: "Negro",
        add_to_cart: "Añadir al Carrito",
        payment_title: "Elegir Método de Pago",
        free_shipping: "🌍 Envío Gratis a Todo el Mundo",
        footer_text: "Elaborado con cuidado."
    },
    it: {
        hero_title: "Telefoni in Legno. Bellezza Naturale.",
        hero_subtitle: "Smartphone in legno realizzati a mano che si sentono bene quanto sono belli.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Ispirato al design moderno di Samsung",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Ispirato all'elegante design dell'iPhone 13",
        color_label: "Colore:",
        natural_wood: "Legno Naturale",
        black: "Nero",
        add_to_cart: "Aggiungi al Carrello",
        payment_title: "Scegli Metodo di Pagamento",
        free_shipping: "🌍 Spedizione Gratuita Mondiale",
        footer_text: "Realizzato con cura."
    },
    de: {
        hero_title: "Holztelefone. Natürliche Schönheit.",
        hero_subtitle: "Handgefertigte Holzsmartphones, die sich genauso gut anfühlen, wie sie aussehen.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Inspiriert von Samsungs modernem Design",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Inspiriert von iPhones elegantem Design der Serie 13",
        color_label: "Farbe:",
        natural_wood: "Naturholz",
        black: "Schwarz",
        add_to_cart: "In den Warenkorb",
        payment_title: "Zahlungsart Wählen",
        free_shipping: "🌍 Versand Weltweit Kostenlos",
        footer_text: "Mit Sorgfalt gefertigt."
    },
    pt: {
        hero_title: "Telefones de Madeira. Beleza Natural.",
        hero_subtitle: "Smartphones de madeira artesanais que se sentem tão bem quanto parecem.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Inspirado no design moderno da Samsung",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Inspirado no design elegante do iPhone 13",
        color_label: "Cor:",
        natural_wood: "Madeira Natural",
        black: "Preto",
        add_to_cart: "Adicionar ao Carrinho",
        payment_title: "Escolher Método de Pagamento",
        free_shipping: "🌍 Envio Grátis em Todo o Mundo",
        footer_text: "Feito com cuidado."
    },
    lt: {
        hero_title: "Mediniai Telefonai. Natūrali Grožis.",
        hero_subtitle: "Rankomis pagaminti mediniu ekranais veikiantys išmanieji telefonai, kurie juda taip pat gerai, kaip jie atrodo.",
        samsung_title: "Wadaphone Samsung",
        samsung_desc: "Inspiruota Samsung's šiuolaikinio dizaino",
        iphone_title: "Wadaphone iPhone",
        iphone_desc: "Inspiruota iPhone 13 elegantaus dizaino",
        color_label: "Spalva:",
        natural_wood: "Natūrali Medis",
        black: "Juoda",
        add_to_cart: "Pridėti į Krepšelį",
        payment_title: "Pasirinkti Mokėjimo Būdą",
        free_shipping: "🌍 Nemokamas Pristatymas Visame Pasaulyje",
        footer_text: "Padarytas su priežiūra."
    }
};

function updatePageTranslations() {
    const currentLang = localStorage.getItem('language') || 'en';
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}
