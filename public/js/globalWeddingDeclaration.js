/* creating font map */
var fonts = {

    "lora_bold": `font-family : 'Lora', serif;  font-weight : 700;`,
    "lora_bold_italic": `font-family : 'Lora', serif;  font-weight : 700; font-style:italic;`,
    "lora_italic": `font-family : 'Lora', serif;  font-weight : 400; font-style:italic;`,
    "lora_medium_italic": `font-family : 'Lora', serif;  font-weight : 500; font-style:italic;`,
    "lora": `font-family : 'Lora', serif;  font-weight : 400;`,
    "cinzel": `font-family : 'Cinzel', serif;  font-weight : 400;`,
    "cinzel_bold": `font-family : 'Cinzel', serif;  font-weight : 700;`,
    "spectral_sc": `font-family : 'Spectral SC', serif; font-weight:400;`,
    "petit_formal_script": `font-family : 'Petit Formal Script', cursive; font-weight:400;`,
    "pacifico": `font-family : 'Pacifico', cursive; font-weight:400;`,
    "cookie": `font-family : 'Cookie', cursive; font-weight:400;`,
    "merienda_one": `font-family : 'Merienda One', cursive; font-weight:400;`,
    "kaushan_script": `font-family : 'Kaushan Script', cursive; font-weight:400;`,
    "marcellus_sc": `font-family : 'Marcellus SC', serif; font-weight:400;`,
    "playfair_display_sc": `font-family : 'Playfair Display SC', serif; font-weight:400;`,
    "bebas_neue": `font-family : 'Bebas Neue', cursive; font-weight:400;`,
    "lato": `font-family : 'Lato', sans-serif;  font-weight:400;`,
    "lato_italic": `font-family : 'Lato', sans-serif;  font-weight:400; font-style:italic;`,
    "open_sans": `font-family : 'Open Sans', sans-serif; font-weight:400;`,
    "open_sans_semibold": `font-family : 'Open Sans', sans-serif; font-weight:600;`,
    "spectral_sc_bold": `font-family : 'Spectral SC', serif; font-weight:700;`,
    "spectral_sc_light": `font-family : 'Spectral SC', serif; font-weight:300;`,
    "satisfy": `font-family : 'Satisfy', cursive; font-weight:400;`,
    "dancing_script": `font-family : 'Dancing Script', cursive; font-weight:400; `,
    "charm": `font-family : 'Charm', cursive; font-weight:400;`,
    "italianno": `font-family: 'Italianno', cursive; `,
    "poppins_light": `font-family : 'Poppins', sans-serif; font-weight:300;`,
    "seaweed_script": `font-family : 'Seaweed Script', cursive; font-weight:400;`,
    "caveat": `font-family : 'Caveat', cursive; font-weight:400;`,
    "redressed": `font-family : 'Redressed', cursive; font-weight:400;`,
    "fondamento": `font-family : 'Fondamento', cursive; font-weight:400;`,
    "lobster_two": `font-family : 'Lobster Two', cursive; font-weight:400;`,
    "rouge_script": `font-family : 'Rouge Script', cursive; font-weight:400;`,
    "fjalla_one": `font-family : 'Fjalla One', sans-serif; font-weight:400;`,
    "handlee": `font-family : 'Handlee', cursive; font-weight:400;`,
    "droid_sans": ``,
    "indie_flower": `font-family : 'Indie Flower', cursive; font-weight:400;`,
    "kalam_light": `font-family : 'Kalam', cursive; font-weight:300;`,
    "lato_thin": `font-family : 'Lato', sans-serif; font-weight:100;`,
    "roboto_thin": `font-family : 'Roboto', sans-serif; font-weight:100;`,
    "sacramento": `font-family : 'Sacramento', cursive; font-weight:400;`,
    "slabo": `font-family : 'Slabo 13px', serif; font-weight:400;`
}

var revFonts = {
    "Lora serif700" : "lora_bold",
    "Lora serif700italic" : "lora_bold_italic",
    "Lora serif400italic" : "lora_italic",
    "Lora serif500italic" : "lora_medium_italic",
    "Lora serif400" : "lora",
    "Cinzel serif400" : "cinzel",
    "Cinzel serif700" : "cinzel_bold",
    "Spectral SC serif400" : "spectral_sc",
    "Petit Formal Script400" : "petit_formal_script",
    "Pacifico cursive400" : "pacifico",
    "Cookie cursive400" : "cookie",
    "Merienda One cursive400" : "merienda_one",
    "Kaushan Script cursive400" : "kaushan_script",
    "Marcellus SC serif400" : "marcellus_sc",
    "Playfair Display SC serif400" : "playfair_display_sc",
    "Bebas Neue cursive400" : "bebas_neue",
    "Lato sans-serif400" : "lato",
    "Lato sans-serif400italic" : "lato_italic",
    "Open Sans sans-serif400" : "open_sans",
    "Open Sans sans-serif600" : "open_sans_semibold",
    "Spectral SC serif700" : "spectral_sc_bold",
    "Spectral SC serif300" : "spectral_sc_light",
    "Satisfy cursive400" : "satisfy",
    "Dancing Script cursive400" : "dancing_script",
    "Charm cursive400" : "charm",
    "Italianno cursive" : "italianno",
    "Poppins sans-serif300" : "poppins_light",
    "Seaweed Script cursive400" : "seaweed_script",
    "Caveat cursive400" : "caveat",
    "Redressed cursive400" : "redressed",
    "Fondamento cursive400" : "fondamento",
    "Lobster Two cursive400" : "lobster_two",
    "Rouge Script cursive400" : "rouge_script",
    "Fjalla One sans-serif400" : "fjalla_one",
    "Handlee cursive400" : "handlee",
    "Indie Flower cursive400" : "indie_flower",
    "Kalam cursive300" : "kalam_light",
    "Lato sans-serif100" : "lato_thin",
    "Roboto sans-serif100" : "roboto_thin",
    "Sacramento cursive400" : "sacramento",
    "Slabo 13px serif400" : "slabo",
    "" : "droid_sans"
}