"use client";
import { useRouter } from "next/navigation";
import { deleteBoard } from "@/app/actions/boardActions";

export default function BoardDeleteButton({ boardId }: { boardId: string }) {
  const router = useRouter();
  async function handleDeleteBoard() {
    await deleteBoard(boardId);
    router.push("/");
  }
  return (
    <div>
      <button
        className=" bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={() => handleDeleteBoard()}
      >
        Delete board
      </button>
    </div>
  );
}
