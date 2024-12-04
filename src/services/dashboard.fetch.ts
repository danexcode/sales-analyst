// src/services/api.ts
export interface DashboardData {
  sales: number;
  revenue: number;
  averageTicket: number;
  profit: number;
  chartData: {
    labels: string[];
    revenue: number[];
    profit: number[];
  };
  topProducts: {
    labels: string[];
    data: number[];
  };
  dailyGoals?: {
    product: string;
    progress: number;
  }[];
  monthlyGoals?: {
    product: string;
    progress: number;
  }[];
}

export async function getDashboardData(
  temporality: string
): Promise<DashboardData> {
  console.log("fetching..................")
  try {
    const response = await fetch(`http://localhost:3000/api/dashboard?temporality=${temporality}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dashboard data");
    }

    console.log("-----------------------------------")
    console.log("--------------Fetch----------------")
    console.log("-----------------------------------")
    const data = await response.json()
    console.log(data)
    return await data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}
