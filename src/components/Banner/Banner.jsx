function Banner() {
  return (
    <div class="w-screen h-screen bg-[url('./assets/images/background.jpg')] bg-center bg-cover">
      <div class="w-screen h-[100vh] bg-[rgba(0,0,0,0.6)]">
        <header class="mx-w-[1170px] mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-[30%_auto]">
            <div class="ml-4 rounded-lg bg-[url('./assets/images/logo2.jpg')] bg-center bg-cover w-[222px]"></div>
            <div class="flex justify-end mr-4">
              <div>
                <select
                  name=""
                  id=""
                  class="bg-black text-white border-2 border-gray-500 p-2 rounded-lg m-2"
                >
                  <option value="">English</option>
                  <option value="">Hindi</option>
                  <option value="">French</option>
                </select>
              </div>
              <button class="bg-[rgb(255,15,15)] text-white border-2 border-red-700 p-2 rounded-lg m-2 shadow-2xl">
                Sign in
              </button>
            </div>
          </div>
        </header>
        <div class="max-w-[1170px] max-auto sm:py-[150px] py-[50px] ml-8 text-center  text-white">
          <h1 class="sm:text-[50px] text-[30px] font-bold">
            Unlimited movies,TV shows and more.
          </h1>
          <h1 class="sm:text-[25px] py-2 text-[10px] font-medium">
            Watch anywhere.cancel anytime
          </h1>
          <p class="sm:text-[20px] text-[8px] font-normal">
            Ready to Watch? Enter your email to create or restart your
            membership.
          </p>

          <div class="max-w-[auto] mx-auto mt-8 flex-1 flex-wrap">
            <form action="" class="">
              <input
                placeholder="  Email..."
                type="text"
                class="bg-transparent h-12 w-1/3 border-[1px] border-white-400"
              />
              <button class="bg-[rgb(255,15,15)] text-white border-2 border-red-700 p-2 rounded-lg m-2 shadow-2xl font-bold hover:bg-[rgb(193,17,25)]">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
