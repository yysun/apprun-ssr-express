import app from 'apprun';
import Layout from './layout';

export default ({ state }) => <Layout>
  {state.title} - {new Date().toLocaleTimeString()}
</Layout>;
