import dom1 from "./../../img/slider-houses/dom1.jpg";
import dom2 from "./../../img/slider-houses/dom2.jpg";
import dom3 from "./../../img/slider-houses/dom3.jpg";
import dom4 from "./../../img/slider-houses/dom1.jpg";
import dom5 from "./../../img/slider-houses/dom2.jpg";
import dom6 from "./../../img/slider-houses/dom3.jpg";

const housesAray = [
  {
    id: 0,
    name: "Seaside Serenity Villa",
    description:
      "Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
    location: "Malibu, California",
    price: "$1,250,000",
    mainImg: dom1,
    images: [dom1, dom1, dom1, dom1],
    bedroomsQuantity: "04-Bedroom",
    bathroomsQuantity: "03-Bath",
    type: "Villa",
    area: "2,500 Square Feet",
    keyFeatures: [
      "Expansive oceanfront terrace for outdoor entertaining",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private beach access for morning strolls and sunset views",
      "Master suite with a spa-inspired bathroom and ocean-facing balcony",
      "Private garage and ample storage space",
    ],
    listingPrice: 1250000,
    additionalFees: {
      propertyTransferTax: 25000,
      legalFees: 3000,
      homeInspection: 500,
      propertyInsurance: 1200,
      mortgageFees: "Varies",
    },
    monthlyCosts: {
      propertyTaxes: 1250,
      homeownersAssociationFee: 300,
    },
    totalInitialCosts: {
      listingPrice: 1250000,
      additionalFees: 29700,
      downPayment: 250000,
      mortgageAmount: 1000000,
    },
    monthlyExpenses: {
      propertyTaxes: 1250,
      homeownersAssociationFee: 300,
      mortgagePayment: "Varies",
      propertyInsurance: 100,
    },
    buildYear: 2020, // Добавленный ключ
  },
  {
    id: 1,
    name: "Mountain View Retreat",
    description:
      "Escape to the tranquility of Mountain View Retreat. Nestled in the heart of the Rockies, this luxurious cabin offers stunning mountain views, cozy fireplaces, and a private hot tub, perfect for unwinding after a day of adventure.",
    location: "Aspen, Colorado",
    price: "$2,500,000",
    mainImg: dom2,
    images: [dom2, dom2, dom2, dom2],
    bedroomsQuantity: "05-Bedroom",
    bathroomsQuantity: "04-Bath",
    type: "Villa",
    area: "4,000 Square Feet",
    keyFeatures: [
      "Floor-to-ceiling windows with panoramic mountain views",
      "Spacious open-concept living area with vaulted ceilings",
      "Gourmet kitchen with granite countertops and stainless steel appliances",
      "Master suite with a fireplace and private balcony",
      "Heated garage and ski-in/ski-out access",
    ],
    listingPrice: 2500000,
    additionalFees: {
      propertyTransferTax: 50000,
      legalFees: 5000,
      homeInspection: 800,
      propertyInsurance: 1800,
      mortgageFees: "Varies",
    },
    monthlyCosts: {
      propertyTaxes: 2500,
      homeownersAssociationFee: 450,
    },
    totalInitialCosts: {
      listingPrice: 2500000,
      additionalFees: 57600,
      downPayment: 500000,
      mortgageAmount: 2000000,
    },
    monthlyExpenses: {
      propertyTaxes: 2500,
      homeownersAssociationFee: 450,
      mortgagePayment: "Varies",
      propertyInsurance: 150,
    },
    buildYear: 2018, // Добавленный ключ
  },
  {
    id: 2,
    name: "Urban Oasis Penthouse",
    description:
      "Experience the pinnacle of city living in this sleek and modern Urban Oasis Penthouse. With floor-to-ceiling windows, this property boasts breathtaking skyline views, a private rooftop garden, and access to world-class amenities.",
    location: "New York, New York",
    price: "$3,750,000",
    mainImg: dom3,
    images: [dom3, dom3, dom3, dom3],
    bedroomsQuantity: "03-Bedroom",
    bathroomsQuantity: "03-Bath",
    type: "Villa",
    area: "3,000 Square Feet",
    keyFeatures: [
      "Private rooftop terrace with outdoor kitchen and lounge area",
      "Floor-to-ceiling windows offering panoramic city views",
      "State-of-the-art fitness center and indoor swimming pool",
      "Master suite with a spa-inspired bathroom and walk-in closet",
      "24-hour concierge service and private elevator access",
    ],
    listingPrice: 3750000,
    additionalFees: {
      propertyTransferTax: 75000,
      legalFees: 7000,
      homeInspection: 1000,
      propertyInsurance: 2200,
      mortgageFees: "Varies",
    },
    monthlyCosts: {
      propertyTaxes: 3750,
      homeownersAssociationFee: 750,
    },
    totalInitialCosts: {
      listingPrice: 3750000,
      additionalFees: 85200,
      downPayment: 750000,
      mortgageAmount: 3000000,
    },
    monthlyExpenses: {
      propertyTaxes: 3750,
      homeownersAssociationFee: 750,
      mortgagePayment: "Varies",
      propertyInsurance: 185,
    },
    buildYear: 2021, // Добавленный ключ
  },
  {
    id: 3,
    name: "Lakeside Tranquility Estate",
    description:
      "Immerse yourself in nature at the Lakeside Tranquility Estate. This stunning property offers a serene lakeside setting, private dock, and a spacious outdoor living area perfect for entertaining guests and enjoying the natural beauty.",
    location: "Lake Tahoe, California",
    price: "$2,100,000",
    mainImg: dom4,
    images: [dom4, dom4, dom4, dom4],
    bedroomsQuantity: "04-Bedroom",
    bathroomsQuantity: "03-Bath",
    type: "Villa",
    area: "3,500 Square Feet",
    keyFeatures: [
      "Private dock with access to Lake Tahoe",
      "Expansive outdoor deck with fire pit and hot tub",
      "Open-concept living area with hardwood floors and a stone fireplace",
      "Gourmet kitchen with custom cabinetry and marble countertops",
      "Master suite with lake views and a spa-like ensuite",
    ],
    listingPrice: 2100000,
    additionalFees: {
      propertyTransferTax: 42000,
      legalFees: 4500,
      homeInspection: 700,
      propertyInsurance: 1600,
      mortgageFees: "Varies",
    },
    monthlyCosts: {
      propertyTaxes: 2100,
      homeownersAssociationFee: 350,
    },
    totalInitialCosts: {
      listingPrice: 2100000,
      additionalFees: 47800,
      downPayment: 420000,
      mortgageAmount: 1680000,
    },
    monthlyExpenses: {
      propertyTaxes: 2100,
      homeownersAssociationFee: 350,
      mortgagePayment: "Varies",
      propertyInsurance: 133,
    },
    buildYear: 2015, // Добавленный ключ
  },
  {
    id: 4,
    name: "Desert Horizon Mansion",
    description:
      "Discover luxury living in the heart of the desert with Desert Horizon Mansion. This sprawling estate offers unrivaled privacy, stunning desert vistas, and all the modern comforts you could desire.",
    location: "Scottsdale, Arizona",
    price: "$3,000,000",
    mainImg: dom5,
    images: [dom5, dom5, dom5, dom5],
    bedroomsQuantity: "06-Bedroom",
    bathroomsQuantity: "05-Bath",
    type: "Villa",
    area: "5,000 Square Feet",
    keyFeatures: [
      "Infinity pool with sweeping desert views",
      "Outdoor kitchen and entertainment area",
      "Modern design with floor-to-ceiling windows",
      "Gourmet kitchen with custom finishes",
      "Master suite with private terrace and luxury bathroom",
    ],
    listingPrice: 3000000,
    additionalFees: {
      propertyTransferTax: 60000,
      legalFees: 6000,
      homeInspection: 900,
      propertyInsurance: 2000,
      mortgageFees: "Varies",
    },
    monthlyCosts: {
      propertyTaxes: 3000,
      homeownersAssociationFee: 500,
    },
    totalInitialCosts: {
      listingPrice: 3000000,
      additionalFees: 68900,
      downPayment: 600000,
      mortgageAmount: 2400000,
    },
    monthlyExpenses: {
      propertyTaxes: 3000,
      homeownersAssociationFee: 500,
      mortgagePayment: "Varies",
      propertyInsurance: 167,
    },
    buildYear: 2019, // Добавленный ключ
  },
  {
    id: 5,
    name: "Coastal Modern Retreat",
    description:
      "Step into the future of coastal living with Coastal Modern Retreat. Featuring cutting-edge architecture, eco-friendly design, and unbeatable ocean views, this home is the perfect blend of luxury and sustainability.",
    location: "Santa Monica, California",
    price: "$4,200,000",
    mainImg: dom6,
    images: [dom6, dom6, dom6, dom6],
    bedroomsQuantity: "04-Bedroom",
    bathroomsQuantity: "04-Bath",
    type: "Villa",
    area: "4,500 Square Feet",
    keyFeatures: [
      "Solar panels and energy-efficient appliances",
      "Open floor plan with glass walls that blur indoor and outdoor living",
      "Rooftop garden with ocean views",
      "Gourmet kitchen with custom cabinetry and quartz countertops",
      "Smart home technology throughout",
    ],
    listingPrice: 4200000,
    additionalFees: {
      propertyTransferTax: 84000,
      legalFees: 7500,
      homeInspection: 1000,
      propertyInsurance: 2400,
      mortgageFees: "Varies",
    },
    monthlyCosts: {
      propertyTaxes: 4200,
      homeownersAssociationFee: 600,
    },
    totalInitialCosts: {
      listingPrice: 4200000,
      additionalFees: 93900,
      downPayment: 840000,
      mortgageAmount: 3360000,
    },
    monthlyExpenses: {
      propertyTaxes: 4200,
      homeownersAssociationFee: 600,
      mortgagePayment: "Varies",
      propertyInsurance: 200,
    },
    buildYear: 2022, // Добавленный ключ
  },
];

export { housesAray };
