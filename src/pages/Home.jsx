import { For, Show, createResource } from 'solid-js';
import { A } from '@solidjs/router';
import Card from '../components/Card';

const fetchProducts = async () => {
    const res = await fetch('http://localhost:8080/products');
    const data = await res.json();
    return data;
};

export default function Home() {
    const [products] = createResource(fetchProducts);

    return (
        <Show when={products()} fallback={<p class='flex justify-center '>Loading...</p>}>
			<div class='grid grid-cols-2 gap-10 my-4'>
                <For each={products()}>
                    {(product) => (
                        <Card rounded={true} flat={true}>
                            <img src={product.img} alt={product.title} />
                            <h2 class='my-3 font-bold'>{product.title}</h2>
                            <A class='btn' href={`/product/${product.id}`}>View Product</A>
                        </Card>
                    )}
                </For>
			</div>
		</Show>
	);
}
