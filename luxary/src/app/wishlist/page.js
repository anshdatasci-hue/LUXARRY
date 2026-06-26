import { requireUser } from "@/lib/auth/requireUser";
import WishlistClient from "./WishlistClient";

export default async function WishlistPage() {
  await requireUser();

  return <WishlistClient />;
}
