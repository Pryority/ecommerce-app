// [id] is the category id from the category table

import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';

const getSingleCategory = async(req, res) => {
  try {
    const id = req.query.id;
    const cursorId = req.query.cursorId; 
    if (cursorId) {
      const categoriesData = await prisma.category.findUnique({
        where: {
          id
        },
        select: {
          id: true,
          name: true,
          products: {
            orderBy: {
              createdAt: 'desc'
            },
            take: 12,
            skip: 1,
            cursor: {
              id: cursorId
            },
            select: {
              id: true,
              title: true,
              description: true,
              image: true,
              price: true,
              quantity: true,
            }
          }
        }
      });

      if (!categoriesData) {
        return res.status(400).json({message: 'Category not found'});
      }

      let hasMore = true;
      if (categoriesData.products.length === 0) {
        hasMore = false;
      }

      return res
        .status(200)
        .json({ category: {...categoriesData, hasMore } });
    }

    const categoriesData = await prisma.category.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        products: {
          orderBy: {
            createdAt: 'desc'
          },
          // only take the latest twelve product rows
          // this allows for CURSOR-BASED PAGINATION 👍
          take: 12,
          select: {
            id: true,
            title: true,
            description: true,
            image: true,
            price: true,
            quantity: true
          }
        }
      }
    });

    if (!categoriesData) {
      return res.status(400).json({message: 'Category not found'});
    }

    let hasMore = false;
    if (categoriesData.products.length === 0){
      hasMore = false;
    }

    return res
      .status(200)
      .json({ category: {...categoriesData, hasMore } });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!! Please try again after sometime' });  
  }
};

// Using the next-connect library we are making sure that only the get operation is allowed for the getSingleCategory function
const handler = nc({ attachParams: true }).get(getSingleCategory);

export default handler;