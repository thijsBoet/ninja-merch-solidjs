import banner from './assets/banner.png';
import Card from './assets/components/Card';
import { createSignal } from 'solid-js';
import { Routes, Route } from "@solidjs/router";

function App() {
	const [darkTheme, setDarkTheme] = createSignal(false);

	const toggleTheme = () => {
		setDarkTheme(!darkTheme());
	};

	return (
		<div class='container m-auto'>
			<header
				class='my-4 p-2 text-xl flex items-center gap-4 rounded-md'
				classList={{ 'bg-neutral-900': darkTheme(), "text-white": darkTheme()}}>
				<span
					class='material-symbols-outlined cursor-pointer'
					onClick={toggleTheme}>
					light_mode
				</span>
				<h1>Net Ninja Merchandise</h1>
			</header>

			<img class='rounded-md' src={banner} alt='site hero banner' />

      <Routes>
        <Route path="/" component={<App />} />
        <Route path="/about" component={<About />} />
      </Routes>

			<div class='grid grid-cols-4 gap-10 my-4'>
				<Card rounded={false} flat={true}>
					<h2>Ninja Tee, Black</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Culpa, sint harum quae quia odio ut!
					</p>
					<button class='btn'>view</button>
				</Card>
				<Card rounded={true} flat={false}>
					<h2>Ninja Hoodie</h2>
					<button class='btn'>view</button>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p>Only $10</p>
				</Card>
			</div>
		</div>
	);
}

export default App;
