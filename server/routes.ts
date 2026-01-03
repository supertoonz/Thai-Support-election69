import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertElectionInfoSchema } from "@shared/schema";

export async function registerRoutes(
  app: Express
): Promise<Server> {
  app.get("/api/election-info/:key", async (req, res) => {
    try {
      const info = await storage.getElectionInfo(req.params.key);
      if (!info) return res.status(404).json({ message: "Not found" });
      res.json(info);
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/election-info", async (req, res) => {
    try {
      const parsed = insertElectionInfoSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ message: "Invalid data" });
      const info = await storage.setElectionInfo(parsed.data);
      res.json(info);
    } catch (e) {
      res.status(500).json({ message: "Server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
