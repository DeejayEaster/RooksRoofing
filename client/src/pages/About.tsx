import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function About() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Rooks",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256",
      bio: "John founded Rooks Roofing in 1995 with a vision to provide quality roofing services to North Georgia. With over 30 years of experience in the industry, he leads our team with expertise and dedication."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256",
      bio: "Sarah oversees all operations at Rooks Roofing, ensuring that projects are completed on time and to the highest standards. Her attention to detail and organizational skills keep our team running smoothly."
    },
    {
      id: 3,
      name: "Michael Torres",
      position: "Lead Estimator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256",
      bio: "Michael has been with Rooks Roofing for 15 years. His extensive knowledge of roofing systems and materials allows him to provide accurate estimates and recommendations for our clients."
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Customer Relations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256",
      bio: "Emily is dedicated to ensuring our customers have an exceptional experience with Rooks Roofing. She handles client communications and coordinates with our team to address any concerns promptly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Rooks Roofing</title>
        <meta 
          name="description" 
          content="Learn about Rooks Roofing - North Georgia's Most Trusted Roofing Company since 1995. Discover our story, our team, and our commitment to quality."
        />
        <meta property="og:title" content="About Us | Rooks Roofing" />
        <meta property="og:description" content="North Georgia's Most Trusted Roofing Company since 1995. Discover our story, our team, and our commitment to quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rooksroofing.com/about" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Rooks Roofing</h1>
          <p className="text-white text-xl max-w-3xl mx-auto mb-8 opacity-90">
            North Georgia's Most Trusted Roofing Company since 1995.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Rooks Roofing Team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-6">
                Founded in 1995, Rooks Roofing began with a simple mission: to provide the residents and businesses of North Georgia with exceptional roofing services at fair prices. John Rooks started the company with just a small crew, focusing on residential repairs and installations.
              </p>
              <p className="text-neutral-600 mb-6">
                Over the years, as our reputation for quality workmanship and outstanding customer service grew, so did our company. Today, we employ a team of experienced professionals who handle everything from small residential repairs to large commercial projects.
              </p>
              <p className="text-neutral-600 mb-8">
                Despite our growth, we've remained true to our founding principles. We continue to prioritize quality, honesty, and customer satisfaction in everything we do. That's why Rooks Roofing has become North Georgia's Most Trusted Roofing Company.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <i className="fas fa-history text-primary mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-bold text-neutral-800">Established 1995</h4>
                    <p className="text-neutral-600 text-sm">Over 25 years of excellence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-home text-primary mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-bold text-neutral-800">Local Ownership</h4>
                    <p className="text-neutral-600 text-sm">Family-owned and operated</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-users text-primary mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-bold text-neutral-800">Experienced Team</h4>
                    <p className="text-neutral-600 text-sm">Skilled roofing professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-tachometer-alt text-primary mt-1 mr-3 text-xl"></i>
                  <div>
                    <h4 className="font-bold text-neutral-800">Rapid Growth</h4>
                    <p className="text-neutral-600 text-sm">Expanded services and team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Values</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              At Rooks Roofing, our values guide everything we do. They're the foundation of our business and the reason for our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-medal text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Quality</h3>
                <p className="text-neutral-600">
                  We never compromise on the quality of our materials or workmanship. Every project, regardless of size, receives our full attention and commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-handshake text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Integrity</h3>
                <p className="text-neutral-600">
                  Honesty and transparency are cornerstones of our business. We provide accurate estimates, use quality materials, and always do what we say we'll do.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-users text-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Customer Focus</h3>
                <p className="text-neutral-600">
                  Our customers are our priority. We listen to your needs, provide expert advice, and work to exceed your expectations on every project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Our skilled professionals bring years of experience and dedication to every project. Get to know the people who make Rooks Roofing exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="bg-white shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-white text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience the Rooks Roofing difference for yourself. Contact us today to discuss your roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300">
              Get a Free Estimate
            </Button>
            <Button variant="outline" className="border border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-md transition duration-300">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
