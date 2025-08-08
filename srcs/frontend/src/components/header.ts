export function createHeader() : HTMLElement {

	const header = document.createElement("header");
	header.className = "w-full bg-gray-800 text-white p-4 flex justify-between items-center";

	//better to use typescript for jobs
	header.innerHTML = `
		<div class="text-lg font-bold">PONG</div>
		<nav class="flex-col sm:flex-row sm:flex-wrap space-x-4>
			<div class="relative group inline-block">
				<a href="/" class="hover:underline w-2xs bg-sky-500 text-white p-2 rounded-md data-link="true"">Home</a>
				<div class="absolute left-0 mt-1 w-max text-sm text-gray-800 bg-white border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transition-all duration-1000">
					Return Home~
				</div>
			</div>
			<div class="relative group inline-block">
				<a href="/profile" class="hover:underline w-2xs bg-sky-500 text-white p-2 rounded-md data-link="true"">Profile</a>
				<div class="absolute -left-15 mt-1 w-max text-sm text-gray-800 bg-white border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transition-all duration-1000">
					For those who haven't signed up for the game
				</div>
			</div>
			<div class="relative group inline-block">
				<a href="/signin" class="hover:underline w-2xs bg-sky-500 text-white p-2 rounded-md data-link="true">Sign In</a>
				<div class="absolute left-0 mt-1 w-max text-sm text-gray-800 bg-white border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transition-all duration-1000">
					Sign in!
				</div>
			</div>
			<div class="relative group inline-block">
				<a href="/signup" class="hover:underline w-2xs bg-sky-500 text-white p-2 rounded-md data-link="true">Sign Up</a>
				<div class="absolute right-0 mt-1 w-max text-sm text-gray-800 bg-white border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transition-all duration-1000">
					Check your stats here!
				</div>
			</div>
			<div class="relative group inline-block">
				<a href="/signup" class="hover:underline w-2xs bg-sky-500 text-white p-2 rounded-md data-link="true">Sign Up</a>
				<div class="absolute right-0 mt-1 w-max text-sm text-gray-800 bg-white border border-gray-300 rounded shadow-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transition-all duration-1000">
					Check your stats here!
				</div>
			</div>
		</nav>
	`;

	return (header);
}
