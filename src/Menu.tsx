export default function Menu() {
  return (
    <>
      <div className="ml-[5%] mobile:ml-2 mt-1 h-[20pt] w-1/2 hover:w-screen transition duration-300 flex gap-4" >
        <a className="text-black dark:text-white hover:text-purple dark:hover:text-yellow" href="/blog.html">Blog</a>
        <a className="text-black dark:text-white hover:text-purple dark:hover:text-yellow" href="/projects.html">Projects</a>
        <a className="text-black dark:text-white hover:text-purple dark:hover:text-yellow" href="/">Home</a>
        <a className="invisible opacity-0 group-hover:opacity-100 text-black dark:text-white hover:text-purple dark:hover:text-yellow" href="/about.html">About</a>
      </div>
    </>
  );
}
/*
 * removed hovering to show links because it is less user friendly.

<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M2.945 11.76a1 1 0 101.86-.736c-.892-2.256.024-4.967 2.316-6.29 1.987-1.147 4.354-.879 5.934.45l-2.49.295a1 1 0 10.234 1.986l4.31-.509a1 1 0 00.863-.793l.802-3.927a1 1 0 00-1.96-.4l-.385 1.889c-2.226-1.939-5.573-2.302-8.308-.723C3 4.803 1.675 8.549 2.945 11.76zm14.11-3.52a1 1 0 00-1.86.736c.892 2.256-.024 4.967-2.316 6.29-1.987 1.147-4.355.879-5.934-.45l2.49-.295a1 1 0 00-.234-1.986l-4.31.509a1 1 0 00-.863.793l-.802 3.927a1 1 0 001.96.4l.385-1.889c2.226 1.939 5.573 2.302 8.308.723 3.12-1.801 4.446-5.547 3.176-8.758z"></path> </g></svg>
*/
