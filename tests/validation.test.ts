import { describe, it, expect } from "vitest";
import { buyerSchema } from "../lib/validations";

describe("Buyer Schema Validation", () => {
  it("should pass with valid data", () => {
    const result = buyerSchema.safeParse({
      fullName: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      city: "Chandigarh",
      propertyType: "Apartment",
      bhk: "2",
      purpose: "Buy",
    });

    expect(result.success).toBe(true);
  });

  it("should fail with invalid phone", () => {
    const result = buyerSchema.safeParse({
      fullName: "Jane Doe",
      phone: "123", 
    });

    expect(result.success).toBe(false);
  });
});
