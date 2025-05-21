// Types for our data structures
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  location: string;
  text: string;
  rating: number;
}

// Services data
export const services: Service[] = [
  {
    id: 1,
    title: "Residential Roofing",
    slug: "residential",
    description: "We provide top-quality residential roofing services including installation, replacement, and repair for all types of homes.",
    image: "https://pixabay.com/get/g180fbc04e742ec9bf2060c218b83026f6de192474cfc2c614adca49f898b010980fd673d1fd4c3f0348e1c95040be6678b2ca8c73b4c3ce610ca5888db14256c_1280.jpg",
    features: [
      "Asphalt Shingle Roofing",
      "Metal Roofing Systems",
      "Tile & Slate Roofing"
    ]
  },
  {
    id: 2,
    title: "Commercial Roofing",
    slug: "commercial",
    description: "Our commercial roofing solutions are designed to provide durability, energy efficiency, and cost-effectiveness.",
    image: "https://pixabay.com/get/g104a6e1244ee74d708629e02cb0a44dea38e76f314a3f8e3f047eac11f43bb0500fe1f1315725746a89e37538845a82dc8ae72e64edead9c5b44bf8510893dfe_1280.jpg",
    features: [
      "Flat Roof Systems",
      "TPO & EPDM Roofing",
      "Commercial Metal Roofing"
    ]
  },
  {
    id: 3,
    title: "Roof Repairs",
    slug: "repairs",
    description: "We provide prompt and professional roof repair services to address leaks, damage, and other roofing issues.",
    image: "https://pixabay.com/get/g74e4a1b9dbc91a8c193716587ec91354c5604d0e78a52bd7c0f8cc7f267b02e39af93491dc91899325202ae8d1737ba7a4f623c175ae922be0abda4dac36bdb3_1280.jpg",
    features: [
      "Leak Detection & Repair",
      "Storm Damage Restoration",
      "Emergency Roof Repairs"
    ]
  },
  {
    id: 4,
    title: "Roof Maintenance",
    slug: "maintenance",
    description: "Regular roof maintenance extends the life of your roof and prevents costly repairs. Our maintenance programs keep your roof in top condition.",
    image: "https://pixabay.com/get/g155c2390736876b20b939474f748161f66ec1b33e5d04510f4e17c7587cb5b2bde64561320cc82d10f5893a20664c13ffdf44371242ac548616609b5a05b068f_1280.jpg",
    features: [
      "Routine Inspections",
      "Gutter Cleaning",
      "Preventative Maintenance"
    ]
  },
  {
    id: 5,
    title: "Roof Inspections",
    slug: "inspections",
    description: "Our detailed roof inspections identify problems before they become major issues, saving you time and money.",
    image: "https://pixabay.com/get/ga9078ad3de893c130bbf49866a2169758604396a9f880d32c0ab162d5b637433db9826e689f86c20b736a079b4913750256b9f189ae8a7f7a4a9fbd61d7410d0_1280.jpg",
    features: [
      "Comprehensive Assessments",
      "Insurance Inspections",
      "Pre-Purchase Inspections"
    ]
  },
  {
    id: 6,
    title: "Gutter Services",
    slug: "gutters",
    description: "Properly functioning gutters protect your home from water damage. We offer installation, repair, and cleaning services.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Gutter Installation",
      "Gutter Repair & Replacement",
      "Gutter Guard Installation"
    ]
  }
];

// Projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Residential Roof Installation",
    description: "Complete roof replacement with architectural shingles for a modern home in Bend, Oregon.",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "residential",
    date: "April 2023"
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    description: "Installation of TPO roofing system for a new office complex in Redmond, Oregon.",
    image: "https://pixabay.com/get/gb413cc9b81b39294cf9b3de9a74378d304c9860916ce921f3304723dcdbf9d3d891138f3899b0cf44c721ee232744abe1c553201dd30d6eec9b3168bcc73ea96_1280.jpg",
    category: "commercial",
    date: "March 2023"
  },
  {
    id: 3,
    title: "Mountain Cabin Metal Roof",
    description: "Custom metal roof installation for a mountain cabin in Sisters, Oregon.",
    image: "https://pixabay.com/get/g70fff5571199bae92ab1af3dc3caf9d1e18b4cecfd75b7b6fea27373795173d1811f473d5b65e16f6da2e96ae286856fb254307776494bce45a4a88e0d2240ee_1280.jpg",
    category: "residential",
    date: "February 2023"
  },
  {
    id: 4,
    title: "Retail Building Renovation",
    description: "Complete roof renovation for a retail building in Bend, Oregon shopping district.",
    image: "https://pixabay.com/get/g8911cad84716250cb33391ef1ec428f4d2c4b4c2ca043c06ea0d174d7198480233d3a39d176b4f4dc80d62b75c38cab25d1cabe9d8d1604a2d63794e40e4e012_1280.jpg",
    category: "commercial",
    date: "January 2023"
  },
  {
    id: 5,
    title: "Historical Home Restoration",
    description: "Careful restoration of a 100-year-old historical home in downtown Bend.",
    image: "https://pixabay.com/get/gfd25e87a836d9174bf33ad6e1583eb0f00d30c1f55e22297f213e092ff7201be565f96877ee8c9ac1c32d0606bd8bb48686a4fc026961fb1871a67129f3fd5c3_1280.jpg",
    category: "residential",
    date: "December 2022"
  },
  {
    id: 6,
    title: "Storm Damage Restoration",
    description: "Emergency repairs and restoration after severe windstorm damage in Redmond.",
    image: "https://pixabay.com/get/gc3cfa82a5bec8f518417e393d648cb660498e9d2e9a332cef8f21285cf97ee488d24431c5acb90fef3efdc35cd1ac097a41f5fe3113e3da5595b1ddc70411cec_1280.jpg",
    category: "repairs",
    date: "November 2022"
  },
  {
    id: 7,
    title: "Multi-Family Housing Complex",
    description: "New roof installation for an apartment complex with 24 units in Bend, Oregon.",
    image: "https://images.unsplash.com/photo-1590083948608-525d75ee5eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "residential",
    date: "October 2022"
  },
  {
    id: 8,
    title: "School Building Roof Replacement",
    description: "Complete roof system replacement for a school building during summer break.",
    image: "https://images.unsplash.com/photo-1623296724020-ae55ad77ad6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "commercial",
    date: "August 2022"
  },
  {
    id: 9,
    title: "Vacation Home Roof Upgrade",
    description: "Premium metal roof installation for a vacation property in Sunriver, Oregon.",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "residential",
    date: "July 2022"
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Daniels",
    initials: "JD",
    location: "Bend, Oregon",
    text: "Rooks Roofing did an amazing job on our home's roof replacement. Their team was professional, efficient, and the quality of their work exceeded our expectations. Would highly recommend them to anyone needing roofing services.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    initials: "SM",
    location: "Business Owner, Redmond",
    text: "We hired Rooks Roofing for our commercial building and they were outstanding. Their knowledge of commercial roofing systems is impressive, and they completed the project on time and within budget. Very satisfied with their service.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Johnson",
    initials: "RJ",
    location: "Sisters, Oregon",
    text: "After a severe storm damaged our roof, Rooks Roofing came quickly to assess the situation and provided emergency repairs. They then worked directly with our insurance company for a full roof replacement. The process was smooth and stress-free thanks to their expertise.",
    rating: 4.5
  },
  {
    id: 4,
    name: "Lisa Peterson",
    initials: "LP",
    location: "Sunriver, Oregon",
    text: "The team at Rooks Roofing was fantastic! They installed a new metal roof on our mountain cabin, and the quality is exceptional. They were respectful of our property, cleaned up thoroughly, and the final result looks amazing. Couldn't be happier!",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Thompson",
    initials: "MT",
    location: "Bend, Oregon",
    text: "I've used Rooks Roofing twice now - once for repairs and once for a complete replacement. Both times they were punctual, professional, and provided excellent service. Their prices are fair and the quality of work is top-notch.",
    rating: 5
  },
  {
    id: 6,
    name: "Jennifer Adams",
    initials: "JA",
    location: "La Pine, Oregon",
    text: "We had Rooks Roofing install a new roof on our home last summer. They were professional from start to finish, completing the job on schedule and leaving our property clean. The roof looks beautiful and has performed wonderfully through all seasons.",
    rating: 5
  },
  {
    id: 7,
    name: "David Wilson",
    initials: "DW",
    location: "Redmond, Oregon",
    text: "When our roof was damaged in a winter storm, Rooks Roofing responded quickly despite the challenging weather. They made temporary repairs to prevent further damage and returned when conditions improved to complete the full repair. Their service was exceptional.",
    rating: 4.5
  },
  {
    id: 8,
    name: "Karen Martinez",
    initials: "KM",
    location: "Business Owner, Bend",
    text: "As a property manager, I've worked with many roofing companies over the years. Rooks Roofing stands out for their reliability, quality work, and excellent communication. They're now our go-to roofing contractor for all our properties.",
    rating: 5
  }
];
