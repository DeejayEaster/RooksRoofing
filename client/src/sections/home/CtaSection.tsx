import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function CtaSection() {
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
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with Your Roofing Project?
            </h2>
            <p className="text-white opacity-90 mb-8">
              Whether you need a roof repair, replacement, or a brand new installation, our team is ready to provide you with top-quality service. Contact us today for a free consultation and estimate.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <i className="fas fa-clock text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">Fast Response</h4>
                  <p className="text-white opacity-80 text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <i className="fas fa-dollar-sign text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">Free Estimates</h4>
                  <p className="text-white opacity-80 text-sm">No obligation quotes for your project</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <i className="fas fa-shield-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">Quality Guarantee</h4>
                  <p className="text-white opacity-80 text-sm">Workmanship you can trust</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <i className="fas fa-file-contract text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white">Licensed & Insured</h4>
                  <p className="text-white opacity-80 text-sm">Your property is protected</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button variant="secondary" className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300 text-center">
                  Get a Free Estimate
                </Button>
              </Link>
              <Link href="tel:+15415551234">
                <Button variant="outline" className="border border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-md transition duration-300 text-center">
                  <i className="fas fa-phone-alt mr-2"></i> Call Us Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">Request a Free Quote</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-neutral-700 font-medium mb-2">Your Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
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
                        <FormLabel className="block text-neutral-700 font-medium mb-2">Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
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
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
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
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Service Needed</FormLabel>
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
                      <FormLabel className="block text-neutral-700 font-medium mb-2">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
        </div>
      </div>
    </section>
  );
}
