import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          MyLOGO
        </div>

        <div className="space-x-3">
          <Button>
            <Link href={'/auth/login'}>Login</Link>
            
          </Button>

          <Button variant={'secondary'}>
            <Link href={'/auth/signup'}>Signup</Link>
          </Button>
        </div>

      </header>
    </div>
  );
}
