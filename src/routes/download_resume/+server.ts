import { error } from "@sveltejs/kit";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.resolve("static/Hrishikesh_Pingle.pdf"); // Adjust path if needed

  if (!fs.existsSync(filePath)) {
    throw error(404, "File not found");
  }
  const pdfBuffer = fs.readFileSync(filePath);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Hrishikesh_Pingle.pdf"',
    },
  });
}
