function Todoinput() {
  return (
    <center>
      <div className="todocom bg-orange-400 p-4 mx-10 my-5 space-y-4 h-30 w-1/2 flex justify-center rounded-xl shadow-md shadow-white flex-wrap">
        <input type="text" className="flex-auto"></input>
        <button className=" bg-green-500 ml-5 h-10 w-20 flex-auto border-2 border-red-500 rounded-xl">
          Submit
        </button>
      </div>
    </center>
  );
}
export default Todoinput;
