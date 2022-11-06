import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';

const getSingleProduct = async(req, res) => {
  try {
    const title = req.query.title;
    const product = await prisma.product.findUnique({
      where: {
        title
      },
      select: {
        title: true,
        description: true,
        price: true,
        quantity: true,
        image: true
      }
    });
    if (!product) {
      return res.status(400).json({ message: 'Product not found'});
    }
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Something went wrong!! Please try again after sometime',
    });
  }
};

const handler = nc({ attachParams: true }).get(getSingleProduct);

export default handler;