import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const result = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        message: "Message sent successfully!",
        id: result.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Server error" });
      }
    }
  });

  // Get all contact messages (admin only in a real app)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve messages" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
