import React from 'react';
import { Space } from 'react-zoomable-ui';

import BinaryTree from '../../components/BinaryTree';

import image1 from '../../assets/images/4.jpg';
import image2 from '../../assets/images/5.jpg';
import image3 from '../../assets/images/6.jpg';

import './style.css';

const treeData: TreeType = {
  link: '#',
  image: image1,
  name: 'Parent',
  children: [
    {
      link: '#',
      image: image2,
      name: 'First Child',
      children: [
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
      ],
    },
    {
      link: '#',
      image: image2,
      name: 'First Child',
    },
    {
      link: '#',
      image: image2,
      name: 'First Child',
      children: [
        {
          link: '#',
          image: image3,
          name: 'Second Child',
          children: [
            {
              link: '#',
              image: image2,
              name: 'Third Child',
            },
            {
              link: '#',
              image: image2,
              name: 'Third Child',
              children: [
                {
                  link: '#',
                  image: image3,
                  name: 'Fourth Child',
                },
              ],
            },
            {
              link: '#',
              image: image2,
              name: 'Third Child',
            },
          ],
        },
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
      ],
    },
    {
      link: '#',
      image: image2,
      name: 'First Child',
      children: [
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
        {
          link: '#',
          image: image3,
          name: 'Second Child',
          children: [
            {
              link: '#',
              image: image2,
              name: 'Third Child',
            },
            {
              link: '#',
              image: image2,
              name: 'Third Child',
              children: [
                {
                  link: '#',
                  image: image3,
                  name: 'Fourth Child',
                  children: [
                    {
                      link: '#',
                      image: image2,
                      name: 'Fifth Child',
                      children: [
                        {
                          link: '#',
                          image: image3,
                          name: 'Sixth Child',
                        },
                        {
                          link: '#',
                          image: image3,
                          name: 'Sixth Child',
                        },
                      ],
                    },
                    {
                      link: '#',
                      image: image2,
                      name: 'Fifth Child',
                      children: [
                        {
                          link: '#',
                          image: image3,
                          name: 'Sixth Child',
                        },
                        {
                          link: '#',
                          image: image3,
                          name: 'Sixth Child',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              link: '#',
              image: image2,
              name: 'Third Child',
            },
          ],
        },
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
      ],
    },
    {
      link: '#',
      image: image2,
      name: 'First Child',
      children: [
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
        {
          link: '#',
          image: image3,
          name: 'Second Child',
          children: [
            {
              link: '#',
              image: image2,
              name: 'Third Child',
            },
            {
              link: '#',
              image: image2,
              name: 'Third Child',
              children: [
                {
                  link: '#',
                  image: image3,
                  name: 'Fourth Child',
                },
              ],
            },
            {
              link: '#',
              image: image2,
              name: 'Third Child',
            },
          ],
        },
      ],
    },
    {
      link: '#',
      image: image2,
      name: 'First Child',
    },
    {
      link: '#',
      image: image2,
      name: 'First Child',
      children: [
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
        {
          link: '#',
          image: image3,
          name: 'Second Child',
        },
      ],
    },
  ],
};

const Home = () => {
  // const topParent = useRef<any>(null);

  // useEffect(() => {
  //   topParent.current.scrollIntoView({
  //     inline: 'center',
  //     block: 'center',
  //     behavior: 'smooth',
  //   });
  // }, []);

  return (
    <div className='wrapper'>
      <Space>
        <div className='content'>
          <div className='tree'>
            <ul>
              <li>
                <a href={treeData.link}>
                  <img src={treeData.image} alt='' />
                  <span>{treeData.name}</span>
                </a>
                {treeData.children && (
                  <BinaryTree familyTree={treeData.children} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default Home;
