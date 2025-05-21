import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });
  
  // Submit mutation
  const submitMutation = useMutation({
    mutationFn: (data: FormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you soon.",
        variant: "success",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  // Form submit handler
  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    submitMutation.mutate(data);
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Rooks Roofing</title>
        <meta 
          name="description" 
          content="Contact Rooks Roofing for all your roofing needs. Get a free estimate or schedule a consultation for your residential or commercial roofing project."
        />
        <meta property="og:title" content="Contact Us | Rooks Roofing" />
        <meta property="og:description" content="Contact Rooks Roofing for all your roofing needs. Get a free estimate for your project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rooksroofing.com/contact" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-primary py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Have questions or ready to start your roofing project? We're here to help.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Request a Free Quote</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700 font-medium">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(541) 555-1234" {...field} className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" {...field} className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                              <SelectValue placeholder="Select a Service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Roofing</SelectItem>
                            <SelectItem value="commercial">Commercial Roofing</SelectItem>
                            <SelectItem value="repair">Roof Repair</SelectItem>
                            <SelectItem value="inspection">Roof Inspection</SelectItem>
                            <SelectItem value="maintenance">Roof Maintenance</SelectItem>
                            <SelectItem value="gutters">Gutter Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700 font-medium">Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide details about your project..."
                            {...field}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Get In Touch</h2>
              <p className="text-neutral-600 mb-8">
                Have questions or ready to start your roofing project? Contact us today to speak with one of our roofing experts or to schedule a free consultation and estimate.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Our Location</h4>
                    <p className="text-neutral-600">1234 Roofing Way<br/>Bend, OR 97701</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-phone-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Phone</h4>
                    <p className="text-neutral-600">
                      <a href="tel:+15415551234" className="hover:text-primary transition">(541) 555-1234</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Email</h4>
                    <p className="text-neutral-600">
                      <a href="mailto:info@rooksroofing.com" className="hover:text-primary transition">info@rooksroofing.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800 mb-1">Business Hours</h4>
                    <p className="text-neutral-600">Monday - Friday: 8AM - 5PM<br/>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-neutral-800 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-neutral-200 hover:bg-primary hover:text-white text-neutral-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-neutral-200 hover:bg-primary hover:text-white text-neutral-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-neutral-200 hover:bg-primary hover:text-white text-neutral-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-neutral-200 hover:bg-primary hover:text-white text-neutral-700 w-10 h-10 rounded-full flex items-center justify-center transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-neutral-800 mb-4">Service Area</h4>
                <p className="text-neutral-600 mb-2">
                  We proudly serve the following areas in Central Oregon:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-neutral-600">
                  <li><i className="fas fa-map-pin text-primary mr-2"></i>Bend</li>
                  <li><i className="fas fa-map-pin text-primary mr-2"></i>Redmond</li>
                  <li><i className="fas fa-map-pin text-primary mr-2"></i>Sisters</li>
                  <li><i className="fas fa-map-pin text-primary mr-2"></i>Sunriver</li>
                  <li><i className="fas fa-map-pin text-primary mr-2"></i>La Pine</li>
                  <li><i className="fas fa-map-pin text-primary mr-2"></i>Prineville</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Find Us</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Our office is conveniently located in Bend, Oregon. Stop by during business hours or schedule an appointment.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-2 h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44397.79104404569!2d-121.34947424999998!3d44.05728665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b8c0ffa5d3d251%3A0x1088e7acc720d1b4!2sBend%2C%20OR!5e0!3m2!1sen!2sus!4v1621548345844!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Rooks Roofing Map Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
