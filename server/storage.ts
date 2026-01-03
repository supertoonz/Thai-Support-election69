import { type User, type InsertUser, type ElectionInfo, type InsertElectionInfo, electionInfo, users } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Election Info
  getElectionInfo(key: string): Promise<ElectionInfo | undefined>;
  setElectionInfo(info: InsertElectionInfo): Promise<ElectionInfo>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getElectionInfo(key: string): Promise<ElectionInfo | undefined> {
    const [info] = await db.select().from(electionInfo).where(eq(electionInfo.key, key));
    return info;
  }

  async setElectionInfo(insertInfo: InsertElectionInfo): Promise<ElectionInfo> {
    const [existing] = await db.select().from(electionInfo).where(eq(electionInfo.key, insertInfo.key));
    if (existing) {
      const [updated] = await db.update(electionInfo)
        .set({ value: insertInfo.value })
        .where(eq(electionInfo.key, insertInfo.key))
        .returning();
      return updated;
    }
    const [newInfo] = await db.insert(electionInfo).values(insertInfo).returning();
    return newInfo;
  }
}

export const storage = new DatabaseStorage();
