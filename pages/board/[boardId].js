import { useRouter } from "next/router";
import Board from "../../components/Board";

function BoardPage() {
  const router = useRouter();
  const { boardId } = router.query;
  console.log(boardId);

  return (
    <div className="relative h-full">
      THIS IS THE BOARD PAGE
      <Board />
    </div>
  );
}

export default BoardPage;
