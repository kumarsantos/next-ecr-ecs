import { NextResponse } from "next/server";

interface HealthyResponse {
  status: "healthy";
  uptime: number;
  timestamp: string;
}
interface UnhealthyResponse {
  status: "unhealthy";
  error: string;
}

type HealthCheckResponse = HealthyResponse | UnhealthyResponse;

// 2. Safe error message extractor helper
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unknown error occurred during health check";
}

export async function GET(): Promise<NextResponse<HealthCheckResponse>> {
  try {
    // Optional: Add lightweight database ping here
    // await db.$queryRaw`SELECT 1`;

    const responseBody: HealthyResponse = {
      status: "healthy",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(responseBody, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    console.error("Health check failed:", errorMessage);

    const errorBody: UnhealthyResponse = {
      status: "unhealthy",
      error: "Database or service unavailable",
    };

    return NextResponse.json(errorBody, { status: 503 });
  }
}
