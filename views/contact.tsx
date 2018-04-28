import app from 'apprun';
import Layout from './layout';

export default ({ state }) => <Layout>
  {state} - {new Date().toLocaleTimeString()}
</Layout>;