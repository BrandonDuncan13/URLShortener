import prisma from "@/lib/db";
import { redirect } from "next/navigation";

interface RedirectPageProps {
    params: { shortcode: string }
}

export default async function RedirectPage({ params }: RedirectPageProps) {
    const { shortcode } = params;

    // retrieve the original URL from the database
    const url = await prisma.url.findUnique({
        where: { shortCode: shortcode }
    });

    if (!url) {
        return <div>404 - URL not found</div>;
    }

    await prisma.url.update({
        where: { 
            id: url.id
        },
        data: { views: { increment: 1 } }
    }) 
  
    redirect(url.originalUrl);
}
