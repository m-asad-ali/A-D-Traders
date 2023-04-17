import img1_1 from "../assets/products/1_1.jpg";
import img1_2 from "../assets/products/1_2.jpg";
import img2_1 from "../assets/products/2_1.jpg";
import img2_2 from "../assets/products/2_2.jpg";
import img3_1 from "../assets/products/3_1.jpg";
import img3_2 from "../assets/products/3_2.jpg";
import img4_1 from "../assets/products/4_1.jpg";
import img4_2 from "../assets/products/4_2.jpg";
import img5_1 from "../assets/products/5_1.jpg";
import img5_2 from "../assets/products/5_2.jpg";
import img6_1 from "../assets/products/6_1.jpg";
import img6_2 from "../assets/products/6_2.jpg";
import img7_1 from "../assets/products/7_1.jpg";
import img7_2 from "../assets/products/7_2.jpg";
import img8_1 from "../assets/products/8_1.jpg";
import img9_1 from "../assets/products/9_1.jpg";
import img10_1 from "../assets/products/10_1.jpg";
import img10_2 from "../assets/products/10_2.jpg";
import img11_1 from "../assets/products/11_1.jpg";
import img11_2 from "../assets/products/11_2.jpg";
import img12_1 from "../assets/products/12_1.jpg";
import img12_2 from "../assets/products/12_2.jpg";
import img13_1 from "../assets/products/13_1.jpg";
import img13_2 from "../assets/products/13_2.jpg";
import img14_1 from "../assets/products/14_1.jpg";
import img14_2 from "../assets/products/14_2.jpg";
import img15_1 from "../assets/products/15_1.jpg";
import img15_2 from "../assets/products/15_2.jpg";
import img16_1 from "../assets/products/16_1.jpg";
import img16_2 from "../assets/products/16_2.jpg";
import img17_1 from "../assets/products/17_1.jpg";
import img17_2 from "../assets/products/17_2.jpg";
import img18_1 from "../assets/products/18_1.jpg";
import img18_2 from "../assets/products/18_2.jpg";
import img19_1 from "../assets/products/19_1.jpg";
import img19_2 from "../assets/products/19_2.jpg";
import img20_1 from "../assets/products/20_1.jpg";
import img20_2 from "../assets/products/20_2.jpg";

const products = [
  {
    id: "1",
    name: "Nuxe Huile ‘Prodigieuse Or’ Multi Usage Dry Oil Golden Shimmer",
    company: "Nuxe",
    price: 38,
    size: ["50ml"],
    image: [img1_1, img1_2],
    description:
      "The Nuxe Shimmering Dry Oil Huile Prodigieuse is a luxurious body oil that provides a shimmering effect to the skin. It's designed to nourish and hydrate the skin, leaving it soft, smooth, and radiant. The oil is formulated with a blend of six precious plant oils, including macadamia, hazelnut, and argan oil, that work together to deeply moisturize the skin without leaving it feeling greasy. Additionally, the oil has a subtle floral scent that is both refreshing and calming. It's suitable for all skin types and can be used on the face, body, and hair. Overall, this dry oil is an excellent choice for anyone looking to add a touch of luxury to their beauty routine while simultaneously nourishing and hydrating their skin.",
    category: "Beauty",
    featured: true,
    stock: 10,
    stars: 4.5,
    reviews: 54,
  },
  {
    id: "2",
    name: "Nuxe Huile Prodigieuse Florale Multi-Purpose Dry Oil",
    company: "Nuxe",
    price: 52,
    size: ["50ml"],
    image: [img2_1, img2_2],
    description:
      "The Nuxe Huile Prodigieuse Florale Multi-Purpose Dry Oil is a luxurious and versatile beauty product that can be used on the face, body, and hair. It's a dry oil formula that is quickly absorbed into the skin and doesn't leave any greasy residue. This version of the oil has a delicate floral scent that is both refreshing and soothing. The oil is made with a blend of six precious plant oils, including macadamia, hazelnut, and argan oil, that work together to deeply nourish and hydrate the skin. It's suitable for all skin types, including sensitive skin. This 1.6 oz bottle is perfect for travel or for testing out the product before committing to a larger size. Overall, this multi-purpose dry oil is an excellent choice for anyone looking for a luxurious and effective beauty product that can be used for a variety of purposes.",
    category: "Beauty",
    stars: 4.6,
    reviews: 25,
    stock: 10,
    featured: true,
    // https://www.amazon.com/Nuxe-Huile-Prodigieuse-Florale-Multi-Purpose/dp/B0866FCR7T?th=1
  },
  {
    id: "3",
    name: "Nuxe Reve de Miel Ultra-Nourishing Lip Balm",
    company: "Nuxe",
    price: 15,
    size: ["15g"],
    image: [img3_1, img3_2],
    description:
      "The Nuxe Reve de Miel Ultra-Nourishing Lip Balm is a deeply moisturizing and repairing balm that is perfect for dry and chapped lips. The formula is enriched with honey, shea butter, and sweet almond oil, which work together to nourish and protect the delicate skin on the lips. The balm has a matte finish, making it perfect for use under lipstick or on its own. This 0.52 oz jar is a convenient size for carrying in your purse or pocket.",
    category: "Beauty",
    stars: 4.2,
    reviews: 15,
    stock: 10,
    // https://www.nuxe.com/ultra-nourishing-lip-balm-reve-de-miel-15g/11897399.html
  },
  {
    id: "4",
    name: "Neutrogena Hydro Boost Gel-Cream with Hyaluronic Acid for Extra-Dry Skin",
    company: "Neutrogena",
    price: 21.49,
    size: ["48g"],
    image: [img4_1, img4_2],
    description:
      "The Neutrogena Hydro Boost Gel-Cream with Hyaluronic Acid is a lightweight and refreshing moisturizer that is perfect for extra-dry skin. The formula is oil-free and non-comedogenic, making it ideal for daily use. The gel-cream contains hyaluronic acid, which is known for its ability to deeply hydrate the skin and lock in moisture. This 1.7 oz jar is perfect for travel or for trying out the product before committing to a larger size.",
    category: "Beauty",
    stars: 4.6,
    reviews: 55,
    stock: 10,
    featured: true,
    // https://www.neutrogena.com/products/skincare/neutrogena-hydro-boost-gel-cream-with-hyaluronic-acid-for-extra-dry-skin/6811048.html
  },
  {
    id: "5",
    name: "Head and Shoulders Deep Moisture 2-in-1 Dandruff Shampoo and Conditioner",
    company: "Head and Shoulders",
    price: 5.99,
    size: ["380ml"],
    image: [img5_1, img5_2],
    description:
      "The Head and Shoulders Deep Moisture 2-in-1 Dandruff Shampoo and Conditioner is a moisturizing formula that helps to relieve scalp dryness and itchiness while also fighting dandruff. The formula is pH balanced and gentle enough for daily use. This 12.8 oz bottle is perfect for those who want the convenience of a 2-in-1 product and a lasting supply.",
    category: "Hair Care",
    stars: 4.6,
    reviews: 33,
    stock: 10,
    featured: true,
    // https://headandshoulders.com/en-us/shop-products/dandruff-2-in-1/deep-moisture-2-in-1
  },
  {
    id: "6",
    name: "Head and Shoulders Apple Cider Vinegar Shampoo",
    company: "Head and Shoulders",
    price: 6.97,
    size: ["400ml"],
    image: [img6_1, img6_2],
    description:
      "The Head and Shoulders Apple Cider Vinegar Shampoo is a clarifying formula that helps to remove buildup and residue from the hair and scalp. The formula is infused with apple cider vinegar, which is known for its clarifying and purifying properties. The shampoo is gentle enough for daily use and is safe for color-treated hair. This 13.5 oz bottle is perfect for those who want a refreshing and cleansing shampoo.",
    category: "Beauty",
    stars: 4.5,
    reviews: 21,
    stock: 10,
    featured: true,
    // https://headandshoulders.com/en-us/shop-products/dandruff-shampoo/apple-cider-vinegar-shampoo
  },
  {
    id: "7",
    name: "Kerastase Densifique Bain Densite Shampoo",
    company: "Kerastase",
    price: 35,
    // size: ["8.5 fl. oz.", "34 fl. oz."],
    size: ["8.5 fl. oz."],
    image: [img7_1, img7_2],
    description:
      "Kerastase Densifique Bain Densite Shampoo is a bodifying shampoo that helps to add density and fullness to thinning hair. It contains a combination of Hyaluronic Acid, Gluco-Peptide, and Ceramides to strengthen and hydrate hair while improving its texture and appearance. This shampoo is suitable for all hair types and can be used daily to leave hair looking thicker, fuller, and more voluminous.",
    category: "Beauty",
    stars: 4,
    reviews: 45,
    stock: 10,
    // https://www.kerastase-usa.com/collections/densifique/bain-densite-shampoo.html
  },
  {
    id: "8",
    name: "ChapStick Total Hydration Lip Balm - Coconut Hydration",
    company: "ChapStick",
    price: 4.99,
    size: ["0.12 oz"],
    image: [img8_1],
    description:
      "This lip balm is made with 100% naturally sourced ingredients and provides long-lasting hydration with a delicious coconut flavor. It is formulated with coconut oil, shea butter, and vitamin E to moisturize and protect lips.",
    category: "lip care",
    stars: 4.7,
    reviews: 24,
    stock: 10,
    featured: true,
    // https://www.chapstick.com/discover/beauty/total-hydration-lip-balm/coconut-hydration
  },
  {
    id: "9",
    name: "ChapStick Classic Lip Balm - Cool Mint",
    company: "ChapStick",
    price: 2.69,
    size: ["0.15 oz."],
    image: [img9_1],
    description:
      "This classic lip balm provides a refreshing mint flavor and long-lasting hydration. It is made with a formula that includes 11 moisturizing ingredients to help prevent and heal dry, chapped lips.",
    category: "lip care",
    stars: 4.8,
    reviews: 45,
    stock: 10,
    featured: true,
    // https://www.chapstick.com/discover/chapstick-classic/moisturizer/cool-mint
  },
  {
    id: "10",
    name: "Derby Single Edge Razor Blades",
    company: "Derby",
    price: 6.5,
    size: ["100 blades"],
    image: [img10_1, img10_2],
    description:
      "These razor blades are made with high-quality stainless steel and are compatible with most single edge razors. They provide a close and comfortable shave and are ideal for those with sensitive skin.",
    category: "Shaving",
    stars: 4.7,
    reviews: 45,
    stock: 10,
    featured: true,
    // https://www.coolblades.co.uk/razors-razor-blades/razor-blades/derby-single-edge-razor-blades.html
  },
  {
    id: "11",
    name: "Dove Exfoliating Body Polish Body Wash - Crushed Almond and Mango Butter",
    company: "Dove",
    price: 5.94,
    size: ["10.5 oz."],
    image: [img11_1, img11_2],
    description:
      "This body wash gently exfoliates and nourishes skin, leaving it soft and smooth. It is made with crushed almonds and mango butter and has a delicious scent.",
    category: "body care",
    stars: 4.8,
    reviews: 45,
    stock: 10,
    featured: true,
    // https://www.amazon.com/Dove-Cleanser-Exfoliating-Bodywash-Smoother/dp/B08373LRQ2
  },
  {
    id: "12",
    name: "Dove Men+Care Clean Comfort Antiperspirant Stick;",
    company: "Dove",
    price: 3.88,
    size: ["2.7 oz."],
    image: [img12_1, img12_2],
    description:
      "This antiperspirant stick provides up to 48 hours of odor and wetness protection. It is formulated with 1/4 moisturizer technology to help soothe and condition skin.",
    category: "Deodorant",
    stars: 4.8,
    reviews: 24,
    stock: 10,
    featured: true,
    // https://www.dove.com/us/en/p/men-care-clean-comfort-antiperspirant-stick.html/00079400066718_men-product-detail-page
  },
  {
    id: "13",
    name: "Dove Nourishing Secrets Restoring Ritual Conditioner - Coconut Oil and Turmeric",
    company: "Dove",
    price: 6.98,
    size: ["12 oz."],
    image: [img13_1, img13_2],
    description:
      "This conditioner is inspired by Indian hair care rituals and is infused with coconut oil and turmeric. It helps to restore and nourish damaged hair, leaving it soft and healthy-looking.",
    category: "hair care",
    stars: 4.5,
    reviews: 12,
    stock: 10,
    featured: true,
    // https://www.amazon.com/Dove-Nourishers-Nourishment-Effectively-Nourishing/dp/B08LR4DQLC?th=1
  },
  {
    id: "14",
    name: "Dr. C. Tuna Vitalizing Concentrate Garlic Oil;",
    company: "Farmasi",
    price: 15.99,
    size: ["30 ml"],
    image: [img14_1, img14_2],
    description:
      "This product is a hair serum made with garlic oil, which is known for its beneficial properties for hair growth and health. It helps nourish and strengthen hair follicles, leading to thicker and healthier hair. It also helps to prevent hair loss and breakage, leaving hair feeling revitalized and soft. The serum is easy to apply and can be used on damp or dry hair. It is suitable for all hair types and is free from parabens, sulfates, and silicones.",
    category: "hair care",
    stars: 4.7,
    reviews: 14,
    stock: 10,
    featured: true,
    // https://Farmasi-gcc.com/product/dr-c-tuna-vitalizing-concentrate-garlic-oil-30ml/
  },
  {
    id: "15",
    name: "Farmasi VFX Pro Camera Ready Foundation",
    company: "Farmasi",
    price: 19.99,
    size: ["30 ml"],
    image: [img15_1, img15_2],
    description:
      "Farmasi VFX Pro Camera Ready Foundation is a high-quality foundation that provides full coverage and a flawless finish. The foundation is available in a range of shades to suit all skin tones and types.",
    category: "makeup",
    stars: 4,
    reviews: 9,
    stock: 10,
    // https://Farmasi-gcc.com/product/Farmasi-make-up-vfx-pro-camera-ready-foundation-30-ml-06-honey-beige/
  },
  {
    id: "16",
    name: "Farmasi VFX Pro Camera Ready Primer",
    company: "Farmasi",
    price: 19.99,
    size: ["30 ml"],
    image: [img16_1, img16_2],
    description:
      "Farmasi VFX Pro Camera Ready Primer is a lightweight primer that helps to smooth and even out the skin's texture, creating the perfect base for makeup application. The primer is designed to reduce the appearance of pores and fine lines, and to extend the wear of your makeup.",
    category: "makeup",
    stars: 4.5,
    reviews: 15,
    stock: 10,
    // https://www.farmasius.com/Farmasi/product/detail/vfx-pro-camera-ready-primer?pid=1302449
  },
  {
    id: "17",
    name: "FARMASi Advanced Follicles & Dandruff Shampoo",
    company: "Farmasi",
    price: 14.99,
    size: ["400 ml"],
    image: [img17_1, img17_2],
    description:
      "FARMASi Advanced Follicles & Dandruff Shampoo is a specially formulated shampoo that helps to control dandruff and soothe an itchy scalp. The shampoo is enriched with natural ingredients such as tea tree oil and menthol, which work together to reduce inflammation and promote healthy hair growth.",
    category: "hair care",
    stars: 4.2,
    reviews: 11,
    stock: 10,
    // https://www.amazon.com/FARMASi-Advanced-Follicles-Dandruff-Effective/dp/B07HV628TD
  },
  {
    id: "18",
    name: "Aveeno Fresh Greens Blend Conditioner",
    company: "Aveeno",
    price: 8.0,
    size: ["12 oz"],
    image: [img18_1, img18_2],
    description:
      "Aveeno Fresh Greens Blend Conditioner is a nourishing conditioner that is enriched with a blend of natural ingredients such as rosemary, peppermint, and cucumber. The conditioner helps to hydrate and strengthen hair, leaving it soft, smooth, and shiny.",
    category: "hair care",
    stars: 4.2,
    reviews: 23,
    stock: 10,
    // https://www.aveeno.com/products/fresh-greens-blend-conditioner
  },
  {
    id: "19",
    name: "Aveeno Positively Radiant Brightening and Exfoliating Scrub",
    company: "Aveeno",
    price: 7.89,
    size: ["5 oz."],
    image: [img19_1, img19_2],
    description:
      "Aveeno Positively Radiant Brightening and Exfoliating Scrub is a gentle exfoliating scrub that helps to remove dead skin cells and unclog pores, revealing smoother, brighter, and more radiant skin. The scrub is enriched with natural ingredients such as soy and jojoba beads, which help to nourish and hydrate the skin.",
    category: "skin care",
    stars: 4.7,
    reviews: 19,
    stock: 10,
    // https://www.aveeno.com/products/positively-radiant-brightening-and-exfoliating-scrub
  },
  {
    id: "20",
    name: "AXE Phoenix Antiperspirant Deodorant Stick",
    company: "Axe",
    price: 4.09,
    size: ["2.7 oz"],
    image: [img20_1, img20_2],
    description:
      "AXE Phoenix Antiperspirant Deodorant Stick is a long-lasting antiperspirant that helps to keep you feeling fresh and dry all day long. The deodorant has a clean, fresh scent and is designed to provide 24-hour protection against sweat and odor.",
    category: "personal care",
    stars: 4.7,
    reviews: 14,
    stock: 10,
    featured: true,
    // https://www.axe.com/us/en/products/deodorant-antiperspirant/antiperspirant/phoenix-antiperspirant-deodorant-formula-stick.html
  },
];
export default products;
