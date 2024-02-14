function Tvshows() {
  return (
    <>
      <div class="w-screen h-screen bg-center bg-cover bg-black border-t-[8px] border-teal-500">
        <h1 class="sm:text-[25px] m-6 text-[10px] font-medium text-white">
          TV Show.
        </h1>
        <div className="flex">
          <div>
            <div class="flex-1 text-white mx-20">
              <h1 class="sm:text-[45px] text-[20px] font-bold">
                Unlimited TV shows and more.
              </h1>
              <h1 class="sm:text-[18px] py-2 text-[7px] font-medium">
                Watch anywhere.cancel anytime
              </h1>
              <p class="sm:text-[15px] text-[6px] font-normal">
                Ready to Watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
          </div>
          <div>
            <div class="mx-40 w-64 h-64 bg-[url('./assets/images/mov1.png')] object-contain  bg-center bg-cover flex-1 justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tvshows;
