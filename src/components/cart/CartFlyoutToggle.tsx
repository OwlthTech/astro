import { useStore } from '@nanostores/preact';
import { isCartOpen } from '../../cartStore';

export default function CartFlyoutToggle() {
	const $isCartOpen = useStore(isCartOpen);
	return <button onClick={() => isCartOpen.set(!$isCartOpen)}><img src="/cart-icon.png" className={"w-5"}/></button>;
}
