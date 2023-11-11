import Header from './components/Header/Header';
import Hero from './components/Hero';
import WirexCard from './components/WirexCard';
import CryptoBack from './components/CryptoBack';
import Wallet from './components/Wallet';
import Metrics from './components/MetricsData/Metrics';
import JoinUsToday from './components/JoinUsToday';

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<WirexCard />
			<CryptoBack />
			<Wallet />
			<Metrics />
			<JoinUsToday />
		</div>
	);
}
