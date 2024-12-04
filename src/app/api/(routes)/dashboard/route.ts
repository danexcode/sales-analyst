// src/app/api/(routes)/dashboard/route.ts
import { NextRequest, NextResponse } from "next/server";
import { DashboardService } from "../../services/dashboard.service";

const dashboardService = new DashboardService();


export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;

        // Get query parameters
        const temporality = searchParams.get('temporality');

        // Pass parameters to service
        const dashboardInfo = await dashboardService.getProcesedDashboardData(temporality);

        return NextResponse.json({ status: 200, data: dashboardInfo });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { status: 500, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
