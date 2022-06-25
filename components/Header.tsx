import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-row justify-between p-5">
      <div className="flex flex-row items-center gap-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>

        <div className="hidden md:inline-flex items-center gap-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex flex-row items-center gap-x-5">
        <h3 className="text-green-600">Sign In</h3>
        <h3 className="text-green-600 bg-white border border-green-600 rounded-full px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
