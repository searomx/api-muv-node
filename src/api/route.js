export const GET = async (req: Request, res: Response ) => {
    console.log('GET REQUEST')
}
 
export async function HEAD(req: req) {}
 
export async function POST(req: req) {}
 
export async function PUT(req: req) {}
 
export async function DELETE(req: req) {}
 
export async function PATCH(req: req) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(req: req) {}