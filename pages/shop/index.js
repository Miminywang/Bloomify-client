import { useState } from 'react'
import DefaultLayout from '@/components/layout/default-layout'
import { Breadcrumbs, BreadcrumbItem, Checkbox } from '@nextui-org/react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from '@nextui-org/react'
import { BsFillStarFill } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import SearchSort from '../../components/shop/search-sort.js'
import { MyButton } from '@/components/btn/mybutton'
import ShopSlider from '../../components/shop/shop-slider.js'
import Subtitle from '@/components/course/subtitle.js'
import Link from 'next/link.js'

export default function Shop() {
  // carousel start
  const banners = [
    {
      url: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
    {
      url: '/assets/shop/products/red_Amaryllis_3.jpg',
    },
    {
      url: '/assets/shop/products/red_Snapdragon_1.jpg',
    },
  ]
  // carousel end
  // select categories start
  const categories = [
    {
      title: '全部',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
    {
      title: '鮮花類',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
    {
      title: '植栽類',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
    {
      title: '資材類',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
  ]
  const initialSelectedCategoryIndex = categories.findIndex(
    (category) => category.title === '全部'
  )
  const defaultIndex =
    initialSelectedCategoryIndex !== -1 ? initialSelectedCategoryIndex : 0
  const [selectedCategory, setSelectedCategory] = useState(defaultIndex)
  // select categories end

  // products start
  const productList = [
    {
      title: 'Avocado',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$12.20',
    },
    {
      title: 'Orange',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: '/assets/shop/products/pink_Gladiola_0.jpg',
      price: '$12.20',
    },
  ]
  // products end
  const [activePage, setActivePage] = useState('shop')
  return (
    <DefaultLayout activePage={activePage}>
      {
        <>
          <div className="mx-auto md:px-52 sm:24">
            <Breadcrumbs>
              <BreadcrumbItem>首頁</BreadcrumbItem>
              <BreadcrumbItem>線上商城</BreadcrumbItem>
            </Breadcrumbs>
            {/* carousel start */}
            <div className="slide-container">
              <Fade>
                {banners.map((image, index) => (
                  <div key={index} className="h-700">
                    <div
                      className="h-96 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.url})` }}
                    ></div>
                  </div>
                ))}
              </Fade>
            </div>
            {/* carousel end */}
            {/* select categories start */}
            <div className="flex justify-center flex-wrap my-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`mx-4 ${
                    index === selectedCategory
                      ? 'border-b-2 border-pink-500'
                      : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={category.img}
                    alt={category.title}
                    className="sm:w-16 sm:h-16 md:w-36 md:h-36 rounded-full mx-auto"
                  />
                  <p className="text-center text-2xl my-6">{category.title}</p>
                </div>
              ))}
            </div>

            {/* select categories end */}
            <SearchSort />
            {/* main section start */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* filter start */}
              <div className="md:w-3/12">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Subtitle text="篩選" />
                  <h3 className="text-gray-600 mb-5">共 100 項結果</h3>
                  <div className="mb-6">
                    <h2 className="text-lg font-bold mb-3">子類</h2>
                    <div className="space-y-2">
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        鮮花
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        花盆栽
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        葉材
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        植盆栽
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        器具
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        材料
                      </Checkbox>
                    </div>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="mb-6">
                    <h2 className="text-lg font-bold mb-3">價格</h2>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        placeholder="最低價格"
                        className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="h-px w-10 bg-gray-400"></div>
                      <input
                        type="text"
                        placeholder="最高價格"
                        className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="mb-6">
                    <h2 className="text-lg font-bold mb-3">顏色</h2>
                    <div className="place-items-center">
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">红色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#FF0000' }}
                          ></div>
                        </div>
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">橙色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#FFA500' }}
                          ></div>
                        </div>
                      </Checkbox>

                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">黃色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#FFFF00' }}
                          ></div>
                        </div>
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">綠色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#CFDD81' }}
                          ></div>
                        </div>
                      </Checkbox>

                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">藍色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#0000FF' }}
                          ></div>
                        </div>
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">紫色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#8B00FF' }}
                          ></div>
                        </div>
                      </Checkbox>

                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">粉色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#FFC0CB' }}
                          ></div>
                        </div>
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">褐色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: 'red' }}
                          ></div>
                        </div>
                      </Checkbox>

                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">灰色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#704214' }}
                          ></div>
                        </div>
                      </Checkbox>
                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">黑色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#808080' }}
                          ></div>
                        </div>
                      </Checkbox>

                      <Checkbox defaultSelected radius="sm" className="mr-2">
                        <div className="flex items-center">
                          <p className="mr-2">白色</p>
                          <div
                            className="h-4 w-4 rounded-full bg-red-500"
                            style={{ backgroundColor: '#000000' }}
                          ></div>
                        </div>
                      </Checkbox>
                    </div>
                  </div>
                  <div>
                    <MyButton color="primary" size="xs" isOutline>
                      清除選項
                    </MyButton>
                  </div>
                </div>
              </div>
              {/* filter end */}
              {/* products starts */}
              {/* <Link to={`/shop/details/${item.id}`} key={index}> */}
              <div className="md:w-9/12">
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                  {productList.map((item, index) => (
                    <Link href="/shop/details" key={index}>
                      <Card
                        shadow="sm"
                        key={index}
                        isPressable
                        onPress={() => console.log('item pressed')}
                      >
                        <CardBody className="static overflow-visible p-0">
                          <Image
                            shadow="none"
                            radius="none"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[140px]"
                            src={item.img}
                          />
                        </CardBody>
                        <CardHeader className="block text-left">
                          <div>
                            <p class="text-xl truncate ...">{item.title}</p>
                          </div>
                          <div>
                            <p class="text-base truncate ...">{item.content}</p>
                          </div>
                        </CardHeader>
                        <CardFooter className="text-small justify-between">
                          <p className="text-base flex">
                            <BsFillStarFill className="text-secondary-100" />
                            {item.star}
                          </p>
                          <p className="text-base">{item.price}</p>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              {/* products end */}
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold mb-4 sm:text-2xl">繼續探索</h1>
                <MyButton color="primary" size="xl">
                  查看更多
                </MyButton>
              </div>
            </div>
            {/* main section end */}
            <ShopSlider />
          </div>
        </>
      }
    </DefaultLayout>
  )
}
