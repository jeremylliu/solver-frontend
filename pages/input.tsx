export default function Input() {
  const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="h-full w-full flex">
      <div className="container border w-3/5 h-5/6 bg-gray-200">
        CAMERA HERE
      </div>
      <div className="flex flex-col items-center justify-center w-2/5 h-5/6">
        <div className="flex justify-center items-center">
          <p className="text-lg font-medium text-gray-800">
            Or manually enter:
          </p>
        </div>
        <div className="border grid grid-flow-row grid-cols-4 grid-rows-4 gap-3">
          {temp.map((object) => {
            return (
              <div className="" key={object}>
                <input
                  type="text"
                  className="w-8 h-8 rounded-md border"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
