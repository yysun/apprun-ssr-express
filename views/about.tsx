import app from 'apprun';
import Layout from './layout';

export default ({ title }) => <Layout>
  {title} - {new Date().toLocaleTimeString()}
</Layout>;

