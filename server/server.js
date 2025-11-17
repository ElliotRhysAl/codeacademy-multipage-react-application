import { express } from 'express';
import { connect } from 'mongoose';
import packageRoutes from './routes/packageRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

connect('mongodb://localhost:27017/your-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api/packages', packageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});