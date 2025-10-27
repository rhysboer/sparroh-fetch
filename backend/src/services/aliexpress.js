
async function searchItems(keywords, category, currency_code){
/*
    const url = process.env.ALX_URL;
    const params = new URLSearchParams({
        cat_id: 15,
        sort: "LAST_VOLUME_DESC",
        target_currency: "AUD",
        target_language: "EN",
        page: 1,
        keywords: keywords
    });

    const response = await fetch(`${url}?${params.toString()}`, 
    { 
        mode: 'cors', method: 'GET',
        headers: 
        { 
            'X-RapidAPI-Host': process.env.ALX_HOST,
            'X-RapidAPI-Key': process.env.ALX_KEY
        }
    })
    
    if(!response.ok){
        return { code: 500, data: [] };
    }

    const json = await response.json();
    const data = [];

    json.forEach(e => {
        data.push({
            store: 'aliexpress',
            url: `https://www.aliexpress.com/item/${e.product_id}.html`,
            price: e.target_original_price,
            image: e.product_main_image_url,
            title: e.product_title
        });
    });    

    console.log(data);
    return { code: 200, items: data};
    */

    return { code: 200, items: [
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005005445331487.html',
    price: '74.68',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sd877798e6139433787f54ba10e25a9060.jpg',
    title: 'V5 3.0 inch HD GBA SP IPS Drop in  pre-Laminated LCD Kits Screen for Gameboy Advance SP Black/Red/White Len Housing Shell'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005006514706260.html',
    price: '65.09',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sa696c2aaa0dd40b8919de90c48fc30dbn.jpg',
    title: 'HISPEEDIDO V2 GBA SP Screen Replacement Kits For Gameboy Advance SP High Brightness IPS LCD Housing Shell Cases Yellow/Red Lens'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005006455506173.html',
    price: '70.00',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S99a6e8522eca48b588c79c011bb015fex.jpg',
    title: 'V2 IPS Screen LCD Kits for GBA SP Backlight LCD Screen 5 Levels Brightness V2 Screen For GBA SP Console And pre-cut Shell'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/4000675605823.html',
    price: '31.03',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sbf068175ba2f49afacfcc96fddab0492j.jpg',
    title: '3.19 INCH SCREEN FOR GBA  SP IPS V2  backlight  LCD  Screen  display with a customised screen lens'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/32821666066.html',
    price: '65.17',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sc09e7f6dda1b44daad982a281573246bD.jpg',
    title: '1set IPS LCD Screen Replacement For Nintend GBA SP V3.0 Backlight Screen High Brightness Laminated Display LCD Kits For GBASP'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005004777911016.html',
    price: '74.68',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S86840442d9e4453797e910d067046b50e.jpg',
    title: 'Laminated V5 IPS GBA SP Backlight Backlit LCD Replacement Mod Kits For Game Boy Advance SP NO NEED CUT Shell Case'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005007340384707.html',
    price: '64.86',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S45d3811eb9a947ed88de5b69467f29ac6.jpg',
    title: 'HISPEEDIDO GBA SP IPS V2 Backlight LCD Screen Kits With Pre-cut Shell Housing For Gameboy Adavance SP Console'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005007445883083.html',
    price: '44.68',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S03c62b2bae994173a0d180450f0c2ddeS.jpg',
    title: 'Front Light Screen LCD Kits for GBA SP GmaeBoy Advance Console Original Display Effect Normal Brightness LCD Screen Accessories'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005008979389986.html',
    price: '134.08',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S7e655b8fc5da469f9ceaf50678eea2869.jpg',
    title: '2025 New GBASP IPS LCD 2.9 "IPS high brightness LCD and shell kit for Gameboy advance SP'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/4000355279788.html',
    price: '70.00',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/Hf3ff93e43c8945149103731265625920P.jpg',
    title: 'For GBA SP LCD Screen  for Nintend Gameboy advance  GBA SP IPS LCD Backlight Screen High Brightness Laminated Display LCD Set'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005008195174857.html',
    price: '65.09',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S36420e0c70494ba78e5333d1bb340ccbk.jpg',
    title: 'HISPEEDIDO V2 IPS Screen GBA SP 3.2 inch LCD Replacement Screen Kits For Gameboy Advance SP High Brightness IPS Housing Shell'
  },
  {
    store: 'aliexpress',
    url: 'https://www.aliexpress.com/item/1005006455514119.html',
    price: '70.00',
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S24ef962a9dca411993f431ee733d5ca18.jpg',
    title: 'V2 IPS Screen LCD Kits for GBA SP Backlight LCD Screen 5 Levels Brightness V2 Screen For GBA SP Console'
  }
]};
}

module.exports = {
    searchItems
}