import React, { useState } from 'react'
import DefaultLayout from '@/components/layout/default-layout'
import CenterLayout from '@/components/layout/center-layout'
import ShopSlider from '@/components/shop/shop-slider'
import { MyButton } from '@/components/btn/mybutton'
import { Button } from '@nextui-org/react'
import { Tabs, Tab, Card, Image, CardFooter } from '@nextui-org/react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react'
import { Stepper } from 'react-dynamic-stepper'
import { Select, SelectItem } from '@nextui-org/react'

export default function Cart() {
  const [activePage, setActivePage] = useState('shop')

  // stepper
  const steps = [
    {
      header: {
        label: '購物車',
      },
      // content: <div>First step content</div>,
      isError: false,
      isWarning: false,
      isComplete: false,
    },
    {
      header: {
        label: '填寫資料',
      },
      // content: <div>Second step content</div>,
      onClickHandler: () => console.log('clicked on second step next button'),
      isLoading: false,
      isError: false,
      isComplete: false,
    },
    {
      header: {
        label: '訂單確認',
      },
      // content: <div>Third step content</div>,
      isError: false,
      isComplete: false,
    },
  ]
  // const submitStepper = () => {
  //   console.log('submitted')
  // }

  //table樣式
  const tableStyles = {
    th: 'text-base', // 表頭
    td: 'text-base', // 表格
    wrapper: 'text-base', // 整個表格
  }

  return (
    <>
      <DefaultLayout activePage={activePage}>
        {/* 置中 & 背景色 */}
        <main className="flex flex-col justify-center items-center bg-white">
          {/* 主要容器 */}
          <div className="bg-white container justify-center flex flex-col items-center columns-12 px-5 md:px-0 mb-10">
            {/* steps */}
            <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 gap-14 mt-6">
              <Stepper
                steps={steps}
                pallet={{
                  default: '#E4E4E4',
                  warning: '#FF7C7C',
                  danger: '#FF7C7C',
                  success: '#68A392',
                }}
                footerData={{
                  // submitHandler: submitStepper,
                  prevBtnClassName: 'hidden',
                  nextBtnClassName: 'hidden',
                  submitBtnClassName: 'hidden',
                }}
              />
            </div>
            {/* 主要內容 */}
            <div className="flex flex-col w-full lg:w-10/12 gap-14">
              {/* cart content start*/}
              <div className="flex w-full flex-col">
                <Tabs
                  aria-label="Options"
                  color="primary"
                  variant="underlined"
                  classNames={{
                    tabList:
                      'gap-6 w-full relative rounded-none p-0 border-b border-divider',
                    cursor: 'w-full bg-[#68A392]',
                    tab: 'max-w-fit px-0 h-12',
                    tabContent: 'group-data-[selected=true]:text-[#68A392]',
                  }}
                >
                  <Tab
                    key="information"
                    title={
                      <div className="flex items-center text-base space-x-2">
                        購物車
                      </div>
                    }
                  >
                    <Card className="p-4">
                      <div className="flex flex-col gap-3">
                        <Table
                          selectionMode="single"
                          defaultSelectedKeys={['2']}
                          aria-label="Example static collection table"
                          removeWrapper
                          classNames={tableStyles}
                        >
                          <TableHeader>
                            <TableColumn className="w-1/2 md:w-1/3 lg:w-1/4 bg-primary-300">
                              商品
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                              單價
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                              數量
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                              小計
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-primary-300">
                              變更
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell>
                                <div className="flex flex-row items-center space-x-6">
                                  <Image
                                    src={
                                      '/assets/shop/products/pink_Gladiola_0.jpg'
                                    }
                                    alt=""
                                    className="w-6 h-6 md:w-24 md:h-24 mx-auto"
                                  />
                                  <p>花的名稱</p>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex gap-4 items-center ">
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    -
                                  </Button>
                                  <div>1</div>
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    +
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex flex-col space-y-2">
                                  <MyButton color="primary" size="xl" isOutline>
                                    下次再買
                                  </MyButton>
                                  <MyButton color="primary" size="xl" isOutline>
                                    移除商品
                                  </MyButton>
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell>
                                <div className="flex flex-row items-center space-x-6">
                                  <Image
                                    src={
                                      '/assets/shop/products/pink_Gladiola_0.jpg'
                                    }
                                    alt=""
                                    className="w-6 h-6 md:w-24 md:h-24 mx-auto"
                                  />
                                  <p>花的名稱</p>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex gap-4 items-center ">
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    +
                                  </Button>
                                  <div>1</div>
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    -
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex flex-col space-y-2">
                                  <MyButton color="primary" size="xl" isOutline>
                                    下次再買
                                  </MyButton>
                                  <MyButton color="primary" size="xl" isOutline>
                                    移除商品
                                  </MyButton>
                                </div>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <CardFooter className="flex justify-end pr-6">
                        <div className="flex flex-col space-y-2">
                          <div>共 2 項商品，數量 6 個</div>
                          <div className="flex justify-end space-x-6">
                            <span>小計</span>
                            <span className="text-primary">NT$90</span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Tab>
                  {/* buy again */}
                  <Tab
                    key="store"
                    title={
                      <div className="flex items-center text-base space-x-2">
                        下次再買
                      </div>
                    }
                  >
                    <Card>
                      <div className="flex flex-col gap-3">
                        <Table
                          selectionMode="single"
                          defaultSelectedKeys={['2']}
                          aria-label="Example static collection table"
                          classNames={tableStyles}
                        >
                          <TableHeader>
                            <TableColumn className="w-1/2 md:w-1/3 lg:w-1/4">
                              商品
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6">
                              單價
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6">
                              數量
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6">
                              小計
                            </TableColumn>
                            <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6">
                              變更
                            </TableColumn>
                          </TableHeader>
                          <TableBody>
                            <TableRow key="1">
                              <TableCell>
                                <div className="flex flex-row items-center space-x-6">
                                  <Image
                                    src={
                                      '/assets/shop/products/pink_Gladiola_0.jpg'
                                    }
                                    alt=""
                                    className="w-6 h-6 md:w-24 md:h-24 mx-auto"
                                  />
                                  <p>花的名稱</p>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex gap-4 items-center ">
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    +
                                  </Button>
                                  <div>1</div>
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    -
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex flex-col space-y-2">
                                  <MyButton color="primary" size="xl" isOutline>
                                    下次再買
                                  </MyButton>
                                  <MyButton color="primary" size="xl" isOutline>
                                    移除商品
                                  </MyButton>
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow key="2">
                              <TableCell>
                                <div className="flex flex-row items-center space-x-6">
                                  <Image
                                    src={
                                      '/assets/shop/products/pink_Gladiola_0.jpg'
                                    }
                                    alt=""
                                    className="w-6 h-6 md:w-24 md:h-24 mx-auto"
                                  />
                                  <p>花的名稱</p>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex gap-4 items-center ">
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    +
                                  </Button>
                                  <div>1</div>
                                  <Button
                                    isIconOnly
                                    variant="faded"
                                    className="border-transparent"
                                  >
                                    -
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell>NT$30</TableCell>
                              <TableCell>
                                <div className="flex flex-col space-y-2">
                                  <MyButton color="primary" size="xl" isOutline>
                                    下次再買
                                  </MyButton>
                                  <MyButton color="primary" size="xl" isOutline>
                                    移除商品
                                  </MyButton>
                                </div>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
              {/* cart content end */}
              <div className="flex justify-center space-x-10 py-10">
                <MyButton color="primary" size="xl" isOutline>
                  繼續購物
                </MyButton>
                <MyButton color="primary" size="xl">
                  下一步
                </MyButton>
              </div>
            </div>

            <ShopSlider />
          </div>
        </main>
      </DefaultLayout>
    </>
  )
}
