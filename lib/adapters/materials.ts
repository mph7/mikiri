import { Material } from "@/types/models";

export const materialsAdapter = {
  create: async (data: Omit<Material, "id" | "authorId">) => {
    const response = await fetch("/api/materials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "An error occurred during material creation.",
      );
    }

    return await response.json();
  },

  getAll: async () => {
    const response = await fetch("/api/materials");

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "An error occurred while fetching materials.",
      );
    }

    return await response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`/api/materials/${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "An error occurred while fetching material.",
      );
    }

    return await response.json();
  },

  update: async (
    id: string,
    data: Partial<Omit<Material, "id" | "authorId">>,
  ) => {
    const response = await fetch(`/api/materials/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "An error occurred during material update.",
      );
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`/api/materials/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "An error occurred during material deletion.",
      );
    }

    return await response.json();
  },
};
