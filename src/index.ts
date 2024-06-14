import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { sequelize } from './models';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
  });
});