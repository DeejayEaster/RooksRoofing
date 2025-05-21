import { 
  users, type User, type InsertUser, 
  contactSubmissions, type ContactSubmission, type InsertContact,
  testimonials, type Testimonial, type InsertTestimonial
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  markContactAsRead(id: number): Promise<ContactSubmission | undefined>;
  
  // Testimonial operations
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
  getApprovedTestimonials(): Promise<Testimonial[]>;
  approveTestimonial(id: number): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const now = new Date();
    const contact: ContactSubmission = { 
      ...insertContact, 
      id, 
      createdAt: now,
      isRead: false
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contacts.get(id);
  }
  
  async markContactAsRead(id: number): Promise<ContactSubmission | undefined> {
    const contact = this.contacts.get(id);
    if (contact) {
      const updatedContact = { ...contact, isRead: true };
      this.contacts.set(id, updatedContact);
      return updatedContact;
    }
    return undefined;
  }
  
  // Testimonial methods
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const now = new Date();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id, 
      createdAt: now,
      isApproved: false
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.isApproved)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async approveTestimonial(id: number): Promise<Testimonial | undefined> {
    const testimonial = this.testimonials.get(id);
    if (testimonial) {
      const updatedTestimonial = { ...testimonial, isApproved: true };
      this.testimonials.set(id, updatedTestimonial);
      return updatedTestimonial;
    }
    return undefined;
  }
  
  async deleteTestimonial(id: number): Promise<boolean> {
    return this.testimonials.delete(id);
  }
}

// Create and export a storage instance
export const storage = new MemStorage();
