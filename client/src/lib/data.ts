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
  images?: string[];
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
    title: "Full Roof Replacement",
    slug: "residential",
    description: "We provide top-quality residential roofing services including installation, replacement, and repair for all types of homes.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    features: [
      "Asphalt Shingle Roofing",
      "Metal Roofing Systems",
      "Tile & Slate Roofing"
    ]
  },
  {
    id: 2,
    title: "Roofing Repair & Maintenance",
    slug: "repairs",
    description: "Our expert team handles all types of roof repairs and maintenance to ensure your roof remains in excellent condition.",
    image: "https://cdn.midjourney.com/d3d5f148-7c7c-4be6-af59-d70ab5600824/0_3.png",
    features: [
      "Flat Roof Systems",
      "TPO & EPDM Roofing",
      "Commercial Metal Roofing"
    ]
  },
  {
    id: 3,
    title: "Roof Inspections & Assessments",
    slug: "inspections",
    description: "We offer comprehensive roof inspections to identify potential issues and provide detailed assessments for repairs or replacements.",
    image: "https://cdn.midjourney.com/d29755db-6d01-4340-9e9b-6e624f07ca82/0_3.png",
    features: [
      "Leak Detection & Repair",
      "Storm Damage Restoration",
      "Emergency Roof Repairs"
    ]
  },
  {
    id: 4,
    title: "Storm Damage Restoration",
    slug: "storm-damage",
    description: "After a storm, our team is ready to assess and restore your roof to its pre-storm condition, ensuring your home is protected.",
    image: "https://images.pexels.com/photos/12243107/pexels-photo-12243107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Emergency Response",
      "Insurance Claims Assistance",
      "Full Restoration Services"
    ]
  },
  {
    id: 5,
    title: "Roof Insurance Claims Assistance",
    slug: "insurance-claims",
    description: "We assist homeowners with roof insurance claims, ensuring you get the coverage you deserve for repairs or replacements.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Claim Documentation",
      "Expert Negotiation",
      "Maximizing Your Claim Value"
    ]
  },
  {
    id: 6,
    title: "Gutter Services",
    slug: "gutters",
    description: "Properly functioning gutters protect your home from water damage. We offer installation, repair, and cleaning services.",
    image: "https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    description: "“Overall, Rooks Roofing is the best experience I’ve ever had with a contractor. Affordable pricing, high quality workmanship, company integrity, and effective communication – you rarely find these traits in companies anymore!”",
    image: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/490412373_685182697810969_4966879597538196898_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5kCwCMMghUEQ7kNvwEysvtE&_nc_oc=AdlDHoljTs4VzqYrQxFrym44WOkgnoko-Ca9j5Cmi4MjswHw8egOfPqTVna5iXNAADHJkdevp_MK5iiu-7dH0H30&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=jXhYFERp7whTNIpcBoMnrw&oh=00_AfNeoY55IiQQ7GHcQHoAoZeuARhWdmSLQD3X7g0S_Awbyw&oe=6847D9FE",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "residential",
    date: "April 2023"
  },
  {
    id: 2,
    title: "Commercial Roof Coating",
    description: "Take a look at these in-progress photos from our latest commercial roof coating project at the American Legion in Cartersville, GA using trusted MuleHide Silicone Roof Coating products!",
    image: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "commercial",
    date: "May 2025"
  },
  {
    id: 3,
    title: "Mountain Cabin Metal Roof",
    description: "Custom metal roof installation for a mountain cabin in Sisters, Oregon.",
    image: "https://pixabay.com/get/g70fff5571199bae92ab1af3dc3caf9d1e18b4cecfd75b7b6fea27373795173d1811f473d5b65e16f6da2e96ae286856fb254307776494bce45a4a88e0d2240ee_1280.jpg",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "residential",
    date: "February 2023"
  },
  {
    id: 4,
    title: "Retail Building Renovation",
    description: "Complete roof renovation for a retail building in Bend, Oregon shopping district.",
    image: "https://pixabay.com/get/g8911cad84716250cb33391ef1ec428f4d2c4b4c2ca043c06ea0d174d7198480233d3a39d176b4f4dc80d62b75c38cab25d1cabe9d8d1604a2d63794e40e4e012_1280.jpg",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "commercial",
    date: "January 2023"
  },
  {
    id: 5,
    title: "Historical Home Restoration",
    description: "Careful restoration of a 100-year-old historical home in downtown Bend.",
    image: "https://pixabay.com/get/gfd25e87a836d9174bf33ad6e1583eb0f00d30c1f55e22297f213e092ff7201be565f96877ee8c9ac1c32d0606bd8bb48686a4fc026961fb1871a67129f3fd5c3_1280.jpg",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "residential",
    date: "December 2022"
  },
  {
    id: 6,
    title: "Storm Damage Restoration",
    description: "Emergency repairs and restoration after severe windstorm damage in Redmond.",
    image: "https://pixabay.com/get/gc3cfa82a5bec8f518417e393d648cb660498e9d2e9a332cef8f21285cf97ee488d24431c5acb90fef3efdc35cd1ac097a41f5fe3113e3da5595b1ddc70411cec_1280.jpg",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "repairs",
    date: "November 2022"
  },
  {
    id: 7,
    title: "Multi-Family Housing Complex",
    description: "New roof installation for an apartment complex with 24 units in Bend, Oregon.",
    image: "https://images.unsplash.com/photo-1590083948608-525d75ee5eee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "residential",
    date: "October 2022"
  },
  {
    id: 8,
    title: "School Building Roof Replacement",
    description: "Complete roof system replacement for a school building during summer break.",
    image: "https://images.unsplash.com/photo-1623296724020-ae55ad77ad6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
    category: "commercial",
    date: "August 2022"
  },
  {
    id: 9,
    title: "Vacation Home Roof Upgrade",
    description: "Premium metal roof installation for a vacation property in Sunriver, Oregon.",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    images: [
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F",
      "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/494302988_684389601223612_8370039951571989655_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xAXtTtrLzvMQ7kNvwGA-82X&_nc_oc=AdmA2U6Gc1CvgDJ8UEfzd7C6s7L_t1YDoTLsmgAbvPwsgR2XUV3q8NX1JTl7QzhEwQp-hA7zoTFCYrdywwZ2oLtG&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=mvhrVEW1zkuoY68FrlcNhg&oh=00_AfMtOZJI4EqsZnskpqjPsUN7FYkq5vzB_W35pb5GFrtQUQ&oe=6847C28F"
    ],
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
