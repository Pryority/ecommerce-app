import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';

const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        products: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 8,
          select: {
            title: true,
            description: true,
            image: true,
            price: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Something went wrong!! Please try again after sometime',
    });
  }
};

const handler = nc({ attachParams: true }).get(getCategories);

export default handler;