import keyboardImg from './imgs/pexels-alexa-kei-8219211.jpg';
import nikeShoeBW from './imgs/pexels-ali-dashti-16923479.jpg';
import blackIphone from './imgs/pexels-brett-jordan-2643698.jpg';
import nikeShoeRW from './imgs/pexels-cristiano-de-luca-10963373.jpg';
import pinkDress from './imgs/pexels-đặng-thanh-tú-5693889.jpg';
import pajamas from './imgs/pexels-đặng-thanh-tú-5693891.jpg';
import selverWatch from './imgs/pexels-daniel-sperindeo-16958879.jpg';
import blueDress from './imgs/pexels-displaced-by-design-8612668.jpg';
import whiteKeyboard from './imgs/pexels-esmihel-muhammad-18311171.jpg';
import greyHoodie from './imgs/pexels-fahmi-garna-13094233.jpg';
import selverIphone from './imgs/pexels-irina-iriser-1647978.jpg';
import whiteShoe from './imgs/pexels-lappen-fashion-4296075.jpg';
import pinkKroks from './imgs/pexels-mart-production-8801123.jpg';
import pinkKeyboard from './imgs/pexels-mq-huang-6623763.jpg';
import whiteHeadPhones from './imgs/pexels-pavel-danilyuk-8000624.jpg';
import selverWatchTwo from './imgs/pexels-quang-viet-nguyen-12835320.jpg';
import smallHeadPhones from './imgs/pexels-sound-on-3394650.jpg';
import blackWatch from './imgs/pexels-vvs-™-8839887.jpg';

const products = [
  {
    id: 1,
    price: 199,
    name: "Mechanical Gaming Keyboard",
    type: "Electronics",
    src: keyboardImg,
    description: "Enhance your gaming experience with this mechanical keyboard featuring customizable RGB lighting.",
    features: ["Mechanical switches", "Customizable RGB lighting", "Durable construction"],
  },
  {
    id: 2,
    price: 79,
    name: "Nike Air Max (Black & White)",
    type: "Shoes",
    src: nikeShoeBW,
    description: "Classic black and white Nike shoes for everyday comfort and style.",
    features: ["Leather upper", "Air cushioning", "Iconic Nike design"],
  },
  {
    id: 3,
    price: 999,
    name: "iPhone 13 Pro (Black)",
    type: "Electronics",
    src: blackIphone,
    description: "Experience the power of the latest iPhone with advanced features and stunning design.",
    features: ["A15 Bionic chip", "Super Retina XDR display", "Pro camera system"],
  },
  {
    id: 4,
    price: 299,
    name: "Nike Air Max (Red & White)",
    type: "Shoes",
    src: nikeShoeRW,
    description: "Step up your sneaker game with these red and white Nike Air Max shoes.",
    features: ["Breathable mesh upper", "Lightweight cushioning", "Modern design"],
  },
  {
    id: 5,
    price: 30,
    name: "Pink Summer Dress",
    type: "Clothing",
    src: pinkDress,
    description: "Get ready for summer with this stylish and comfortable pink dress.",
    features: ["Soft fabric", "Floral print", "Adjustable straps"],
  },
  {
    id: 6,
    price: 39,
    name: "Comfy Pajamas",
    type: "Clothing",
    src: pajamas,
    description: "Stay cozy all night long in these soft and breathable pajamas.",
    features: ["Cotton material", "Elastic waistband", "Relaxed fit"],
  },
  {
    id: 7,
    price: 25,
    name: "Elegant Silver Watch",
    type: "Accessories",
    src: selverWatch,
    description: "Add a touch of elegance to any outfit with this sleek silver watch.",
    features: ["Stainless steel case", "Quartz movement", "Water-resistant"],
  },
  {
    id: 8,
    price: 30,
    name: "Blue Casual Dress",
    type: "Clothing",
    src: blueDress,
    description: "Keep it casual and chic with this versatile blue dress.",
    features: ["Flowy silhouette", "V-neckline", "Short sleeves"],
  },
  {
    id: 9,
    price: 259,
    name: "Wireless White Keyboard",
    type: "Electronics",
    src: whiteKeyboard,
    description: "Work or play with ease using this wireless keyboard with a sleek white design.",
    features: ["Bluetooth connectivity", "Slim profile", "Long battery life"],
  },
  {
    id: 10,
    price: 40,
    name: "Cozy Grey Hoodie",
    type: "Clothing",
    src: greyHoodie,
    description: "Stay warm and stylish in this cozy grey hoodie perfect for casual days.",
    features: ["Fleece-lined interior", "Kangaroo pocket", "Drawstring hood"],
  },
  {
    id: 11,
    price: 899,
    name: "Silver iPhone 12",
    type: "Electronics",
    src: selverIphone,
    description: "Experience the latest features and sleek design of the iPhone 12 in stunning silver.",
    features: ["A14 Bionic chip", "Super Retina XDR display", "Dual-camera system"],
  },
  {
    id: 12,
    price: 199,
    name: "Classic White Sneakers",
    type: "Shoes",
    src: whiteShoe,
    description: "Step out in style with these classic white sneakers that go with any outfit.",
    features: ["Canvas upper", "Rubber sole", "Lace-up closure"],
  },
  {
    id: 13,
    price: 50,
    name: "Pink Crocs",
    type: "Shoes",
    src: pinkKroks,
    description: "Add a pop of color to your footwear collection with these comfortable and fun pink Crocs.",
    features: ["Lightweight and durable", "Easy to clean", "Iconic Crocs comfort"],
  },
  {
    id: 14,
    price: 159,
    name: "Wireless Pink Keyboard",
    type: "Electronics",
    src: pinkKeyboard,
    description: "Add a touch of color to your workspace with this wireless pink keyboard featuring chic design and smooth typing experience.",
    features: ["Wireless connectivity", "Compact size", "Responsive keys"],
  },
  {
    id: 15,
    price: 299,
    name: "Premium White Headphones",
    type: "Electronics",
    src: whiteHeadPhones,
    description: "Enjoy crystal-clear sound quality and premium comfort with these stylish white headphones.",
    features: ["Active noise cancellation", "Wireless connectivity", "Long battery life"],
  },
  {
    id: 16,
    price: 89,
    name: "Silver Watch 2.0",
    type: "Accessories",
    src: selverWatchTwo,
    description: "Upgrade your accessory game with this modern silver watch featuring a sleek design and precise timekeeping.",
    features: ["Stainless steel case", "Automatic movement", "Date display"],
  },
  {
    id: 17,
    price: 199,
    name: "Compact Headphones",
    type: "Electronics",
    src: smallHeadPhones,
    description: "Experience immersive audio wherever you go with these compact headphones featuring noise isolation and comfortable fit.",
    features: ["Foldable design", "3.5mm audio jack", "Adjustable headband"],
  },
  {
    id: 18,
    price: 49,
    name: "Black Leather Watch",
    type: "Accessories",
    src: blackWatch,
    description: "Add a touch of sophistication to your wrist with this classic black leather watch.",
    features: ["Genuine leather strap", "Quartz movement", "Water-resistant up to 30 meters"],
  },
];

export default products;

