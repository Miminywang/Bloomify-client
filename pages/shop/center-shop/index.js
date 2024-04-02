import { useState } from 'react'
import DefaultLayout from '@/components/layout/default-layout'
import CenterLayout from '@/components/layout/center-layout'
import Sidebar from '@/components/layout/sidebar'
import Title from '@/components/common/title'
import { Breadcrumbs, BreadcrumbItem, table } from '@nextui-org/react'
import { Tabs, Tab, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { MyButton } from '@/components/btn/mybutton'
import { Select, SelectItem } from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import { CiSearch } from 'react-icons/ci'
import Link from 'next/link'

export default function CenterShop() {
  const imageList = [
    {
      src: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
    {
      src: '/assets/shop/products/pink_Gladiola_0.jpg',
    },
  ]
  const list = [
    {
      title: 'Orange',
    },
    {
      title: 'Tangerine',
    },
    {
      title: 'Raspberry',
    },
  ]

  //table樣式
  const tableStyles = {
    th: 'text-base', // 表頭
    td: 'text-base', // 表格
    wrapper: 'text-base', // 整個表格
  }

  const [activePage, setActivePage] = useState('shop')
  return (
    <DefaultLayout activePage={activePage}>
      {
        <>
          <CenterLayout>
            {/* 麵包屑 */}
            <div className="w-full py-6">
              <Breadcrumbs>
                <BreadcrumbItem>首頁</BreadcrumbItem>
                <BreadcrumbItem>會員中心</BreadcrumbItem>
                <BreadcrumbItem>線上商城</BreadcrumbItem>
                <BreadcrumbItem>商品訂單</BreadcrumbItem>
              </Breadcrumbs>
            </div>
            {/* 主要內容 */}
            <div className="flex flex-row w-full justify-center">
              {/* 側邊欄 */}
              <Sidebar />

              {/* 歷史訂單 */}
              <div className="w-10/12 md:w-10/12 lg:w-10/12 pl-0 md:pl-10">
                {/* 訂單明細 */}
                <Title text="商品訂單" />
                <div className="flex w-full flex-col">
                  <Tabs
                    key={''}
                    radius={'full'}
                    color={'primary'}
                    aria-label="Tabs radius"
                    className="pt-4"
                  >
                    {/* all order start */}
                    <Tab key="all" title="全部訂單">
                      {/* 搜尋框 */}
                      <div className="flex justify-between gap-4 pb-4">
                        {/* searchbar */}
                        <Input
                          variant="bordered"
                          placeholder="搜尋..."
                          endContent={
                            <button
                              className="focus:outline-none"
                              type="button"
                              onClick={() => {}}
                            >
                              <CiSearch />
                            </button>
                          }
                          className="max-w-xs "
                        />
                        {/* filter */}
                        <div className="flex flex-cols items-center space-x-4">
                          <p className=" text-tertiary-black whitespace-nowrap">
                            排序
                          </p>
                          <Select
                            placeholder="Select"
                            defaultSelectedKeys={['Orange']}
                            className="max-w-xs w-48"
                            scrollShadowProps={{
                              isEnabled: false,
                            }}
                          >
                            {list.map((item, index) => (
                              <SelectItem key={item.title} value={item.title}>
                                {item.title}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      </div>
                      {/* 歷史訂單卡片 */}
                      <div className="flex flex-col gap-4">
                        <Card className="rounded-xl border-tertiary-gray-200 border-1 shadow-none">
                          <CardBody>
                            <Accordion>
                              <AccordionItem
                                key="1"
                                aria-label="Accordion 1"
                                subtitle={
                                  <div className="space-y-2 my-6">
                                    <Table
                                      hideHeader
                                      aria-label="Example static collection table"
                                      removeWrapper
                                      classNames={tableStyles}
                                    >
                                      <TableHeader>
                                        <TableColumn>xx</TableColumn>
                                        <TableColumn>xx</TableColumn>
                                      </TableHeader>
                                      <TableBody>
                                        <TableRow key="1">
                                          <TableCell>訂單金額</TableCell>
                                          <TableCell>NT$90</TableCell>
                                        </TableRow>
                                        <TableRow key="2">
                                          <TableCell>訂單狀態</TableCell>
                                          <TableCell>已付款</TableCell>
                                        </TableRow>
                                        <TableRow key="3">
                                          <TableCell>訂單狀態</TableCell>
                                          <TableCell className="text-danger">
                                            處理中
                                          </TableCell>
                                        </TableRow>
                                      </TableBody>
                                    </Table>

                                    <div className="flex space-x-2">
                                      {imageList.map((image, index) => (
                                        <Image
                                          key={index}
                                          src={image.src}
                                          alt=""
                                          className="w-6 h-6 md:w-24 md:h-24"
                                        />
                                      ))}
                                    </div>
                                  </div>
                                }
                                title="訂單編號#2024010901234567"
                              >
                                <div className="flex flex-col gap-3">
                                  <Table
                                    selectionMode="single"
                                    defaultSelectedKeys={['2']}
                                    aria-label="Example static collection table"
                                  >
                                    <TableHeader className="bg-secondary-200">
                                      <TableColumn className="w-1/2 md:w-1/3 lg:w-1/4 bg-secondary-200">
                                        商品
                                      </TableColumn>
                                      <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-secondary-200">
                                        單價
                                      </TableColumn>
                                      <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-secondary-200">
                                        數量
                                      </TableColumn>
                                      <TableColumn className="w-1/4 md:w-1/5 lg:w-1/6 bg-secondary-200">
                                        小計
                                      </TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow key="1">
                                        <TableCell>
                                          <div className="flex flex-row items-center space-x-20">
                                            <Image
                                              src={
                                                '/assets/shop/products/pink_Gladiola_0.jpg'
                                              }
                                              alt=""
                                              className="w-6 h-6 md:w-24 md:h-24 mx-auto rounded-full"
                                            />
                                            <div className="flex flex-col">
                                              <p>花的名稱</p>
                                              <p>店家名稱</p>
                                            </div>
                                          </div>
                                        </TableCell>
                                        <TableCell>NT$30</TableCell>
                                        <TableCell>3</TableCell>
                                        <TableCell>NT$90</TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                  <div className="flex justify-end">
                                    <table>
                                      <tbody>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">小計</td>
                                          <td className="px-4 py-2">NT$90</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">運費</td>
                                          <td className="px-4 py-2">NT$60</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">折扣</td>
                                          <td className="px-4 py-2">-NT$50</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">總計</td>
                                          <td className="px-4 py-2">NT$100</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            付款方式
                                          </td>
                                          <td className="px-4 py-2">
                                            Line Pay
                                          </td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            寄送方式
                                          </td>
                                          <td className="px-4 py-2">
                                            7-ELEVEN 超商
                                          </td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            運送資訊
                                          </td>
                                          <td className="px-4 py-2">未取貨</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            發票種類
                                          </td>
                                          <td className="px-4 py-2">載具</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            寄送日期及時間
                                          </td>
                                          <td className="px-4 py-2">
                                            2024-02-27 11:02:08
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </AccordionItem>
                            </Accordion>
                          </CardBody>
                        </Card>
                        <Card className="rounded-xl border-tertiary-gray-200 border-1 shadow-none">
                          <CardBody>
                            <Accordion>
                              <AccordionItem
                                key="1"
                                aria-label="Accordion 1"
                                subtitle={
                                  <div className="space-y-2 my-6">
                                    <Table
                                      hideHeader
                                      aria-label="Example static collection table"
                                      removeWrapper
                                    >
                                      <TableHeader>
                                        <TableColumn>xx</TableColumn>
                                        <TableColumn>xx</TableColumn>
                                      </TableHeader>
                                      <TableBody>
                                        <TableRow key="1">
                                          <TableCell>訂單金額</TableCell>
                                          <TableCell>NT$90</TableCell>
                                        </TableRow>
                                        <TableRow key="2">
                                          <TableCell>訂單狀態</TableCell>
                                          <TableCell>已付款</TableCell>
                                        </TableRow>
                                        <TableRow key="3">
                                          <TableCell>訂單狀態</TableCell>
                                          <TableCell className="text-primary">
                                            已完成
                                          </TableCell>
                                        </TableRow>
                                      </TableBody>
                                    </Table>

                                    <div className="flex space-x-2">
                                      {imageList.map((image, index) => (
                                        <Image
                                          key={index}
                                          src={image.src}
                                          alt=""
                                          className="w-6 h-6 md:w-24 md:h-24"
                                        />
                                      ))}
                                    </div>
                                  </div>
                                }
                                title="訂單編號#2024010901234567"
                              >
                                <div className="flex flex-col gap-3">
                                  <Table
                                    selectionMode="single"
                                    defaultSelectedKeys={['2']}
                                    aria-label="Example static collection table"
                                  >
                                    <TableHeader className="bg-secondary-200">
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
                                        評價
                                      </TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                      <TableRow key="1">
                                        <TableCell>
                                          <div className="flex flex-row items-center space-x-20">
                                            <Image
                                              src={
                                                '/assets/shop/products/pink_Gladiola_0.jpg'
                                              }
                                              alt=""
                                              className="w-6 h-6 md:w-24 md:h-24 mx-auto rounded-full"
                                            />
                                            <div className="flex flex-col">
                                              <p>花的名稱</p>
                                              <p>店家名稱</p>
                                            </div>
                                          </div>
                                        </TableCell>
                                        <TableCell>NT$30</TableCell>
                                        <TableCell>3</TableCell>
                                        <TableCell>NT$90</TableCell>
                                        <TableCell>
                                          <MyButton color="secondary" size="xs">
                                            尚未評價
                                          </MyButton>
                                        </TableCell>
                                      </TableRow>
                                      <TableRow key="2">
                                        <TableCell>
                                          <div className="flex flex-row items-center space-x-20">
                                            <Image
                                              src={
                                                '/assets/shop/products/pink_Gladiola_0.jpg'
                                              }
                                              alt=""
                                              className="w-6 h-6 md:w-24 md:h-24 mx-auto rounded-full"
                                            />
                                            <div className="flex flex-col">
                                              <p>花的名稱</p>
                                              <p>店家名稱</p>
                                            </div>
                                          </div>
                                        </TableCell>
                                        <TableCell>NT$30</TableCell>
                                        <TableCell>3</TableCell>
                                        <TableCell>NT$90</TableCell>
                                        <TableCell>
                                          <MyButton
                                            color="primary"
                                            size="xs"
                                            isDisabled
                                          >
                                            已評價
                                          </MyButton>
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                  <div className="flex justify-end">
                                    <table>
                                      <tbody>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">小計</td>
                                          <td className="px-4 py-2">NT$90</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">運費</td>
                                          <td className="px-4 py-2">NT$60</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">折扣</td>
                                          <td className="px-4 py-2">-NT$50</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">總計</td>
                                          <td className="px-4 py-2">NT$100</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            付款方式
                                          </td>
                                          <td className="px-4 py-2">
                                            Line Pay
                                          </td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            寄送方式
                                          </td>
                                          <td className="px-4 py-2">
                                            7-ELEVEN 超商
                                          </td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            運送資訊
                                          </td>
                                          <td className="px-4 py-2">已取貨</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            發票種類
                                          </td>
                                          <td className="px-4 py-2">載具</td>
                                        </tr>
                                        <tr className="my-4">
                                          <td className="px-4 py-2">
                                            寄送日期及時間
                                          </td>
                                          <td className="px-4 py-2">
                                            2024-02-27 11:02:08
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </AccordionItem>
                            </Accordion>
                          </CardBody>
                        </Card>
                      </div>
                    </Tab>
                    {/* all order end */}
                    {/* unfinished start */}
                    <Tab key="unfinished" title="未完成">
                      <div className="flex flex-col gap-4">
                        <Card className="rounded-xl border-tertiary-gray-200 border-1 shadow-none">
                          <CardBody>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                          </CardBody>
                        </Card>
                      </div>
                    </Tab>
                    {/* unfinished end */}
                    {/* finished start */}
                    <Tab key="finished" title="已完成">
                      <div className="flex flex-col gap-4">
                        <Card className="rounded-xl border-tertiary-gray-200 border-1 shadow-none">
                          <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </CardBody>
                        </Card>
                      </div>
                    </Tab>
                    {/* finished end */}
                    {/* review start */}
                    <Tab key="review" title="待評價">
                      <div className="flex flex-col gap-4">
                        <Card className="rounded-xl border-tertiary-gray-200 border-1 shadow-none">
                          <CardBody>
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </CardBody>
                        </Card>
                      </div>
                    </Tab>
                    {/* review end */}
                  </Tabs>
                </div>

                {/* 按鈕群組 */}
                <div className="flex justify-center py-10">
                  <MyButton color="primary" size="xl">
                    繼續查看
                  </MyButton>
                </div>
              </div>
            </div>
          </CenterLayout>
        </>
      }
    </DefaultLayout>
  )
}
