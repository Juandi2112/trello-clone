"use server";

import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";
import BoardsTiles from "./BoardTiles";

export default async function Boards() {
  const email = await getUserEmail();
  const { data: rooms } = await liveblocksClient.getRooms({ userId: email });
  return (
    <BoardsTiles boards={rooms}/>
  );
}
