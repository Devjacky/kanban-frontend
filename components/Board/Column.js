import Card from "./Card";

function Column() {
  return (
    // Column Wrapper
    <div className="box-border inline-block w-[272px] h-full whitespace-nowrap my-0 mr-1 align-top">
      {/* Column Content */}
      <div className="box-border flex flex-col relative whitespace-normal max-h-full">
        <div className="relative min-h-[20px] py-[20px] px-[8px]">
          <h2>Column-Header</h2>
        </div>
        <div className="flex-auto overflow-y-auto overflow-x-hidden my-0 mx-1 py-0 px-1 z-10 min-h-0">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Column;
