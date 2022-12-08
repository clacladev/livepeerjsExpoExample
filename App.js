import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react-native';
import HomeScreen from './HomeScreen';

const client = createReactClient({
 provider: studioProvider({ apiKey: 'c7d0ba9f-3666-4b37-bb71-47473b3290ca' }),
});

const App = () => (
  <LivepeerConfig client={client}>
    <HomeScreen />
  </LivepeerConfig>
)

export default App;
