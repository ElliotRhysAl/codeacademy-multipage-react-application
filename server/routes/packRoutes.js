import { express } from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // Return all packs
});

router.get('/:tier', (req, res) => {
  // Return specific pack by tier
});

export default router;