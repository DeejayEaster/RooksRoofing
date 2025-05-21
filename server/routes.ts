import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertTestimonialSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Save the contact submission to storage
      const contact = await storage.createContactSubmission(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Contact submission received successfully",
        contact: {
          id: contact.id,
          name: contact.name,
          createdAt: contact.createdAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Invalid form data",
          errors: validationError.details
        });
      }
      
      console.error("Error processing contact submission:", error);
      res.status(500).json({ message: "Failed to process your request. Please try again later." });
    }
  });
  
  // Testimonial submission route
  app.post("/api/testimonials", async (req, res) => {
    try {
      // Validate the request body against the schema
      const testimonialData = insertTestimonialSchema.parse(req.body);
      
      // Save the testimonial to storage
      const testimonial = await storage.createTestimonial(testimonialData);
      
      // Return success response
      res.status(201).json({
        message: "Testimonial submitted successfully. It will be reviewed before being published.",
        testimonial: {
          id: testimonial.id,
          name: testimonial.name,
          createdAt: testimonial.createdAt
        }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Invalid testimonial data",
          errors: validationError.details
        });
      }
      
      console.error("Error processing testimonial submission:", error);
      res.status(500).json({ message: "Failed to process your request. Please try again later." });
    }
  });
  
  // Get published testimonials route
  app.get("/api/testimonials", async (req, res) => {
    try {
      // Get all approved testimonials
      const testimonials = await storage.getApprovedTestimonials();
      
      // Return testimonials
      res.status(200).json({ testimonials });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials. Please try again later." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
