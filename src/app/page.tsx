import Boards from "@/components/Boards";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <LoginView />;
  }
  return (
    <div>
      <h1 className="text-4xl mb-4">Your boards:</h1>
      <Boards />
      <div className="mt-4">
        <Link
          className="btn primary gap-2 inline-flex items-center"
          href={"/new-board"}
        >
          Create new board{" "}
          <FontAwesomeIcon className="h-6" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
