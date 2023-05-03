export default function Card(props) {
    return (
        <div
            class="bg-white p-4 text-center"
            classList={{ 'rounded-md': props.rounded, 'rounded-none': !props.rounded, 'shadow-md': props.flat, 'shadow-none': !props.flat }}
        >
            {props.children}
        </div>
    )
}
