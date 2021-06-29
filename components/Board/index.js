import { useRouter } from "next/router";
import Column from "./Column";
import Toolbar from "./Toolbar";

function Board() {
  return (
    // wrapper for board page
    <div className="relative h-full">
      {/* wrapper for board */}
      <div className="absolute left-0 right-0 top-0 bottom-0">
        {/* main content */}
        <div className="relative flex flex-col h-full mr-0">
          <Toolbar />
          <div className="relative flex-grow h-full">
            <div className="absolute mb-2 pb-2 top-0 bottom-0 right-0 left-0 overflow-x-auto overflow-y-hidden whitespace-nowrap border-solid border-4 border-light-blue-500 ">
              <Column />
              <Column />
              <Column />
              <Column />
            </div>
          </div>
          {/* THIS IS THE BOARD COMPONENT */}
        </div>
      </div>
    </div>
  );
}

export default Board;
